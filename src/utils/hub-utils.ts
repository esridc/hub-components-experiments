// Helper utilities for working with Hub
import { getItem, getItemData } from "@esri/arcgis-rest-portal";
import { IItem } from "@esri/arcgis-rest-types"
import { searchItems } from "@esri/arcgis-rest-portal";
import { IHubRequestOptions } from "@esri/hub-common"
import * as HubSearchModule from "@esri/hub-search";



export interface ISearchResult extends IItem {

}

export function search(queryParams: any, hubRequestOptions?: IHubRequestOptions):Promise<any> {
    if(hubRequestOptions !== undefined && hubRequestOptions.isPortal) {
        return searchPortal(queryParams, hubRequestOptions);
    } else {
        return searchHub(queryParams, hubRequestOptions);
    }
}

function searchPortal(queryParams: any, _hubRequestOptions?: IHubRequestOptions):Promise<any> {
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
    return searchItems({q: query.join(' AND ')})
}

function searchHub(queryParams: any, _hubRequestOptions?: IHubRequestOptions):Promise<any> {

    // Search query params that ArcGIS Hub expects
    const params:any = {
      q: queryParams.q,
      sort: this.sort,
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
    return fetch(`https://hub.arcgis.com/api/v3/search?${serializedParams}`, { }).then(r =>{ return r.json()})

    // return HubSearchModule.agoSearch({q: query});
  }

// {
// "id": "12502",
// "domain": "data-tog.opendata.arcgis.com",
// "hostname": "data-tog.opendata.arcgis.com",
// "siteId": "f4c43cd9741e43c7b078a37b757392e0",
// "clientKey": "qoKo06zr4kAtu0J2",
// "orgKey": "TOG",
// "siteTitle": "Gilbert, Arizona Open Data Portal",
// "orgId": "JLuzSHjNrLL4Okwb",
// "orgTitle": "Gilbert, Arizona",
// "createdAt": "2017-09-21T15:22:55Z",
// "updatedAt": "2019-10-11T00:01:22Z",
// "sslOnly": true,
// "permanentRedirect": false
// }

export function getDomainDetails(domain:string):Promise<any> {
    const domainUrl = `https://opendata.arcgis.com/utilities/domains/${domain}`;
    
    return new Promise((resolve, reject) => {
        fetch(domainUrl).then((response) => {
            resolve(response.json());
        }).catch(reject)
    });
}

export function getSiteItem(domain:string):Promise<[any, any]> {
    return new Promise((resolve, reject) => {
        getDomainDetails(domain).then((domainDetails) => {
            Promise.all([getItem(domainDetails.siteId), getItemData(domainDetails.siteId)])
            .then(resolve)
            .catch(reject)
        })
    });
}

// Returns 
// { "groups": [ "250feda1857240c2963ffb27d9ab397f" ] }
export function getSiteCatalog(domain:string):Promise<any> {
    
    return new Promise((resolve, reject) => {
        getSiteItem(domain).then(([_siteItem, siteItemData]) => {
            resolve(siteItemData.catalog);
        }).catch(reject)
    })
}

