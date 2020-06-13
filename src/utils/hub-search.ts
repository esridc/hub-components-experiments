import { searchItems } from "@esri/arcgis-rest-portal";
import { IHubRequestOptions } from "@esri/hub-common"
import * as HubSearchModule from "@esri/hub-search";
import { _convertItemToContent, _convertHubv3ToContent } from "./hub-content"

// TODO: Change hubRequestOptions to better handle different Hub & Portal endpoints (Prod/QA/Enterprise/etc.)
export async function search(queryParams: any, hubRequestOptions?: IHubRequestOptions):Promise<any> {
    if(hubRequestOptions !== undefined 
        && hubRequestOptions.isPortal) {
        return await searchPortal(queryParams, hubRequestOptions);
    } else {
        return await searchHub(queryParams, hubRequestOptions);
    }
}

// https://developers.arcgis.com/rest/users-groups-and-items/search.htm
async function searchPortal(queryParams: any, _hubRequestOptions?: IHubRequestOptions):Promise<any> {
    console.log("searchPortal queryParams", queryParams)
    let query = [];

    if(queryParams.groups !== undefined && queryParams.groups.length > 0) {
        query.push(queryParams.groups.map(group => `group:${group}`).join(" OR "))
    }

    if(queryParams.q.length === 0) {
        queryParams.q = "*";
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

    query.push(queryParams.q)
    return searchItems({
        q: query.join(' AND '),
        num: queryParams.size || "10",
        sortField: sortField,
        sortOrder: sortOrder
    }).then((results) => {
        return new Promise((resolve, _reject) => {
            
            console.log("SearchPortal Results", results)
            const output = results.results.map(item => _convertItemToContent({item: item}))
            console.log("SearchPortal Output", output)
            resolve(output)
        })
    })
}

// https://gist.github.com/hamhands/b6d1f0f514678b88cdc01070bf006263
async function searchHub(queryParams: any, _hubRequestOptions?: IHubRequestOptions):Promise<any> {
    console.log("searchHub queryParams", queryParams)
    queryParams.sort = queryParams.sort.replace(/title/,'name');

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
    const serializedParams = HubSearchModule.serialize(params)
    console.log("searchHub serializedParams", serializedParams);
    // Query hub v3's new search endpoint
    let json = await fetch(`${_hubRequestOptions.hubApiUrl}/api/v3/search?${serializedParams}`, { });
    let results = await json.json();
    console.log("searchHub results", results)
    let output = results.data.map(_convertHubv3ToContent);
    console.log("searchHub output", output)
    return output;

    // return HubSearchModule.agoSearch({q: query});
  }
