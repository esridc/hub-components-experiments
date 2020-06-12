import { searchItems } from "@esri/arcgis-rest-portal";
import { IHubRequestOptions } from "@esri/hub-common"
import * as HubSearchModule from "@esri/hub-search";
import { _convertItemToContent, _convertHubv3ToContent } from "./hub-content"

export async function search(queryParams: any, hubRequestOptions?: IHubRequestOptions):Promise<any> {
    if(hubRequestOptions !== undefined && hubRequestOptions.isPortal) {
        return await searchPortal(queryParams, hubRequestOptions);
    } else {
        return await searchHub(queryParams, hubRequestOptions);
    }
}

async function searchPortal(queryParams: any, _hubRequestOptions?: IHubRequestOptions):Promise<any> {
    console.log("searchPortal queryParams", queryParams)
    let query = [];
    if(queryParams.groups !== undefined && queryParams.groups.length > 0) {
        query.push(queryParams.groups.map(group => `group:${group}`).join(" OR "))
    }

    if(queryParams.q.length === 0) {
        queryParams.q = "*";
    }
    
    query.push(queryParams.q)
    console.log("searchPortal query", query)
    return searchItems({q: query.join(' AND ')}).then((results) => {
        return new Promise((resolve, _reject) => {
            
            console.log("SearchPortal Results", results)
            const output = results.results.map(item => _convertItemToContent({item: item}))
            console.log("SearchPortal Output", output)
            resolve(output)
        })
    })
}

async function searchHub(queryParams: any, _hubRequestOptions?: IHubRequestOptions):Promise<any> {

    // Search query params that ArcGIS Hub expects
    const params:any = {
      q: queryParams.q,
      sort: queryParams.sort || "name",
      agg: { fields: "tags,collection,owner,source,hasApi,downloadable", size: 10 }
    }
    params.page = {key: btoa(JSON.stringify({
      hub: {
        start: 1,
        size: 100
      },
      ago: {
        start: 1,
        size: 100
      }
    }))}
    if(queryParams.groups !== undefined && queryParams.groups.length > 0) {
        params.groupIds = queryParams.groups.join(",")
    }

    // const token = 'xxxYYY' // AGO token
    // const portal = 'https://www.arcgis.com/sharing/rest'
    // const headers = { authorization: token, portal }
    const serializedParams = HubSearchModule.serialize(params)
    // Query hub v3's new search endpoint
    let json = await fetch(`https://hub.arcgis.com/api/v3/search?${serializedParams}`, { });
    let results = await json.json();
    console.log("searchHub results", results)
    let output = results.data.map(_convertHubv3ToContent);
    console.log("searchHub output", output)
    return output;

    // return HubSearchModule.agoSearch({q: query});
  }
