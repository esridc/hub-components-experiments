import { createItem, getItem, getItemData, getItemGroups, getUser } from "@esri/arcgis-rest-portal";
import * as HubSearchModule from "@esri/hub-search";
export let HubService = {
  // TODO: accept service URL and user session?
  create(type) {
    switch (type) {
      case 'portal': return new PortalContent;
      case 'hub': return new HubContent;
    }
  }
};
export class PortalContent {
  constructor() {
    this.portalUrl = "https://www.arcgis.com/share/rest/";
  }
  canEdit(_itemId, _username) {
    return Promise.all([getItemGroups(_itemId), getUser(_username)])
      .then(([itemGroups, userInfo]) => {
      // This is just checking membership to any intersecting group
      // TODO: only check for admin/member/other? groups with update
      let intersect = itemGroups.member.filter(x => userInfo.groups.includes(x));
      return intersect.length > 0;
    });
  }
  search(_query) {
    return HubSearchModule.agoSearch({
      q: _query
    });
  }
  ;
  create(itemParams, authentication) {
    return createItem({
      item: itemParams,
      authentication
    });
  }
  get(itemId) {
    return Promise.all([getItem(itemId), getItemData(itemId)])
      .then(([itemInfo, itemData]) => {
      itemInfo.data = itemData;
      return itemInfo;
    });
    // .catch(reject)
  }
  update(_itemId, _resourceParams) {
    return new Promise((_resolve, reject) => reject(false));
  }
  delete(_itemId) {
    return new Promise((_resolve, reject) => reject(false));
  }
}
export class HubContent {
  constructor() {
    this.hubUrl = "https://hub.arcgis.com/api/v3";
  }
  canEdit(_itemId, _username) {
    return fetch(`${this.hubUrl}/content/${_itemId}`, {
      method: "GET"
    }).then(response => {
      if (response.status == 200) {
        return true;
      }
      else {
        return false;
      }
    });
  }
  async search(_query) {
    const response = await fetch(`${this.hubUrl}/search`, {
      method: 'GET',
      body: JSON.stringify(_query)
    });
    return response.json();
  }
  ;
  create(itemParams, authentication) {
    delete itemParams.id;
    delete itemParams.owner;
    delete itemParams.orgId;
    return createItem({
      item: itemParams,
      authentication
    });
  }
  get(itemId) {
    return Promise.all([getItem(itemId), getItemData(itemId)])
      .then(([itemInfo, itemData]) => {
      itemInfo.data = itemData;
      return itemInfo;
    });
    // .catch(reject)
  }
  update(_itemId, _resourceParams) {
    return new Promise((_resolve, reject) => reject(false));
  }
  delete(_itemId) {
    return new Promise((_resolve, reject) => reject(false));
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
