import { createItem, getItem, getItemData, getItemGroups, getUser } from "@esri/arcgis-rest-portal";
import * as HubSearchModule from "@esri/hub-search";
// import { getHubApiUrl } from "@esri/hub-common";

export interface IHubResource {
    canEdit(_itemId:string, _username:string):Promise<boolean>
    
    search(query);
    
    create(itemParams, authentication):Promise<any>;
    get(itemId:string):Promise<IHubResource>;
    update(itemId:string, resourceParams):Promise<boolean>;
    delete(itemId:string):Promise<boolean>;
}

export let HubService = {
    // TODO: accept service URL and user session?
    create( type: 'portal' | 'hub' ): IHubResource {
        switch(type) {
            case 'portal': return new PortalContent;
            case 'hub': return new HubContent;
        }
    }
}

export class PortalContent implements IHubResource {
    portalUrl = "https://www.arcgis.com/share/rest/";

    canEdit(_itemId:string, _username:string):Promise<boolean> {
        return Promise.all([getItemGroups(_itemId), getUser(_username)])
            .then(([itemGroups, userInfo]) => {
                // This is just checking membership to any intersecting group
                // TODO: only check for admin/member/other? groups with update
                let intersect = itemGroups.member.filter(x => userInfo.groups.includes(x))
                return intersect.length > 0;
            })
    }

    search(_query):Promise<any> {
        return HubSearchModule.agoSearch({
            q: _query
        })
    };
    
    create(itemParams, authentication):Promise<any> {
        return createItem({
            item: itemParams,
            authentication
          })
    }
    get(itemId:string):Promise<any> {
        return Promise.all([getItem(itemId), getItemData(itemId)])
            .then(([itemInfo, itemData]) => {
                itemInfo.data = itemData;
                return itemInfo;
            })
            // .catch(reject)
    }
    update(_itemId:string, _resourceParams):Promise<any> {
        return new Promise((_resolve, reject) => reject(false))
    }
    delete(_itemId:string):Promise<any> {
        return new Promise((_resolve, reject) => reject(false))
    }   
}
export class HubContent implements IHubResource { 
    hubUrl = "https://hub.arcgis.com/api/v3";

    canEdit(_itemId:string, _username:string):Promise<boolean> {
        return fetch(`${this.hubUrl}/content/${_itemId}`, {
            method: "GET"
        }).then(response => {
            if(response.status == 200) {
                return true;
            } else {
                return false;
            }
        })
    }

    async search(_query):Promise<any> {
        const response = await fetch(`${this.hubUrl}/search`, {
            method: 'GET',
            body: JSON.stringify(_query)
        })
        return response.json();
    };
    
    create(itemParams, authentication):Promise<any> {
        return createItem({
            item: itemParams,
            authentication
          })
    }
    get(itemId:string):Promise<any> {
        return Promise.all([getItem(itemId), getItemData(itemId)])
            .then(([itemInfo, itemData]) => {
                itemInfo.data = itemData;
                return itemInfo;
            })
            // .catch(reject)
    }
    update(_itemId:string, _resourceParams):Promise<any> {
        return new Promise((_resolve, reject) => reject(false))
    }
    delete(_itemId:string):Promise<any> {
        return new Promise((_resolve, reject) => reject(false))
    }   
}

// export class Notebook extends HubResource {

//     create(resourceParams): string {
        
//     }
// }

// ------------------------------------------------------------

// let environment = "portal"

// let clientAPI;

// switch(environment) {
//     case("portal"): {
//         clientAPI = EnterpriseSites;
//         break;
//     }
//     case("hub"): {
//         clientAPI = HubOnline;
//         break;
//     }
// }

// clientAPI.canEdit('4ef', 'pmakerson')