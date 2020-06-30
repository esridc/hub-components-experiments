import { searchItems } from "@esri/arcgis-rest-portal";
import { IHubRequestOptions } from "@esri/hub-common"
import * as HubSearch from "@esri/hub-search";
import { _convertItemToContent, _convertHubv3ToContent } from "./hub-content"
import { searchGroupContent } from "@esri/arcgis-rest-portal";
import * as HubTypes from "./hub-types"

// TODO: Change hubRequestOptions to better handle different Hub & Portal endpoints (Prod/QA/Enterprise/etc.)
export async function search(queryParams: any, hubRequestOptions?: IHubRequestOptions):Promise<HubTypes.IHubSearchResults> {
    console.debug("hub-search search: queryParams", [queryParams, hubRequestOptions])

    if(hubRequestOptions === undefined 
        || (hubRequestOptions !== undefined && hubRequestOptions.isPortal)) {
        return await searchPortal(queryParams, hubRequestOptions);
    } else {
        return await searchHub(queryParams, hubRequestOptions);
    }
}

// https://developers.arcgis.com/rest/users-groups-and-items/search.htm
async function searchPortal(queryParams: any, hubRequestOptions?: IHubRequestOptions):Promise<HubTypes.IHubSearchResults> {
    // TODO: Consider better ways to map terms across multiple parameters
    queryParams.sort = (queryParams.sort || 'modified').replace(/name/,'title');
    
    let query = []
    
    if(queryParams.q === undefined || queryParams.q?.length === 0) {
        queryParams.q = "*";
    }
    query.push(queryParams.q)

    if(queryParams.owner) {
        query.push(`owner:${queryParams.owner}`)    
    }
    
    // Portal splits "sort=-name" into "sortField=name&sortOrder=desc"
    // Supported sort field names are title, created, type, owner, modified, avgrating, numratings, numcomments, and numviews.
    let sortField = queryParams.sort
    let sortOrder = "asc";
    let match = queryParams.sort.match(/^-/);
    if(match !== null) {
        sortField = match[1];
        sortOrder = "desc";
    }

    // TODO: clean up "group search" routing
    if(queryParams.customParams !== undefined 
        && queryParams.customParams.group !== undefined) {
            
        return searchGroupContent({
            groupId: queryParams.customParams.group.id,
            q: query.join(' AND '),
            num: queryParams.limit || "10",
            sortField: sortField,
            sortOrder: sortOrder,
            params: {
                categories: queryParams.customParams.group.categories
            }
        }).then((results) => {
            return new Promise((resolve, _reject) => {
                const output = results.results.map(item => _convertItemToContent({item: item}))
                resolve({results: output})
            })
        })
    }

    // Normal, non-group-specific search
    if(queryParams.groups !== undefined && queryParams.groups.length > 0) {
        query.push(queryParams.groups.map(group => `group:${group}`).join(" OR "))
    }
    console.debug("hub-search searchPortal: queryParams", [queryParams, hubRequestOptions])

    return searchItems({
        q: query.join(' AND '),
        num: queryParams.limit || "10",
        sortField: sortField,
        sortOrder: sortOrder,
        authentication: hubRequestOptions?.authentication

    }).then((results) => {
        return new Promise((resolve, _reject) => {
            const output = results.results.map(item => _convertItemToContent({item: item}))
            resolve({results: output, meta: {total: results.total, count: results.num, start: results.start}})
        })
    })
}

// https://gist.github.com/hamhands/b6d1f0f514678b88cdc01070bf006263
async function searchHub(queryParams: any, _hubRequestOptions?: IHubRequestOptions):Promise<HubTypes.IHubSearchResults> {
    queryParams.sort = (queryParams.sort || 'modified').replace(/title/,'name');

    // Search query params that ArcGIS Hub expects
    const params:any = {
      q: queryParams.q,
      sort: queryParams.sort,
      agg: { fields: "tags,collection,owner,source,hasApi,downloadable", size: queryParams.limit }
    }
    params.page = {key: btoa(JSON.stringify({
      hub: {
        start: 1,
        size: queryParams.limit
      },
      ago: {
        start: 1,
        size: queryParams.limit
      }
    }))}

    if(queryParams.groups !== undefined && queryParams.groups.length > 0) {
        params.groupIds = queryParams.groups.join(",")
    }

    // const token = 'xxxYYY' // AGO token
    // const portal = 'https://www.arcgis.com/sharing/rest'
    // const headers = { authorization: token, portal }
    const serializedParams = HubSearch.serialize(params)

    // Query hub v3's new search endpoint
    let json = await fetch(`${_hubRequestOptions.hubApiUrl}/api/v3/search?${serializedParams}`, { });
    let results = await json.json();

    let output = results.data.map(_convertHubv3ToContent);

    return {results: output};

    // return HubSearch.agoSearch({q: query});
  }
