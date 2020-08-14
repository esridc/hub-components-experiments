import { IHubContent, HubType, ControlOptions } from "./hub-types"
import { getCategory } from "@esri/hub-common";
import { IModel, getModel, IHubRequestOptions} from "@esri/hub-common";
import { updateItem } from '@esri/arcgis-rest-portal';
import { UserSession } from "@esri/arcgis-rest-auth";
const portalUrl = 'https://www.arcgis.com/sharing/rest/';

/**
 * ```js
 * getContent('3ef...')
 *  .then(contentModel => {
 *    // work with the model
 *  })
 * ```
 * Get the content by unique ID. 
 * This method works to call either the Portal (AGO) API or Hub API
 * and return a common data model.
 *
 *
 * @param id - Content Id
 * @param requestOptions - Tequest options that may have authentication manager
 * @returns A Promise that will resolve with the Content metadata
 * @export
 */
export function getContent(
    id: string,
    hubRequestOptions?: IHubRequestOptions
  ): Promise<any> {
  
    if(hubRequestOptions !== undefined 
      && hubRequestOptions.isPortal) {
      return _getContentFromPortal(id, hubRequestOptions);
    } else {
      return _getContentFromHub(id, hubRequestOptions);
    }
  }

  export async function updateContent(id:string, attributes:IHubContent, authentication?: UserSession): Promise<IHubContent> {
    // Portal
    updateItem({
      item: {
        id,
        ...attributes
      },
      authentication
    })
    
    // TODO add getContent authentication 
    return getContent(id);
}
  
  /**
   * ```js
   * _getContentFromPortal('3ef...')
   *  .then(contentModel => {
   *    // work with the model
   *  })
   * ```
   * Get the content data from Portal or Online 
   *
   *
   * @param {String} id Content Id
   * @param {IHubRequestOptions} hubRequestOptions Request options that may have authentication manager
   * @returns A Promise that will resolve with the item and data
   * @export
   */
  export function _getContentFromPortal(
    id: string,
    hubRequestOptions?: IHubRequestOptions
  ): Promise<any> {
  
    return getModel(id, hubRequestOptions).then((item:IModel) => {
      return new Promise(resolve => {
        const content = _convertItemToContent(item);
        resolve(content);
      })
    });
  }
  
  /**
   * Convert a Portal Item to a Hub Content 
   * TODO: Change to use mdJSON translation for configurable metadata
   *
   *
   * @param {IModel} item Portal Item
   * @returns {IHubContentModel} Hub content object
   * @export
   */
  export function _convertItemToContent(
    item: IModel
  ): IHubContent {
    console.log("_convertItemToContent", item)
    let typeCategory = getCategory(item.item.type);
    let content:IHubContent = Object.assign(item.item, {
        // id: item.item.id,
        name: item.item.title,
        hubType: HubType[typeCategory],
        // title: item.item.title,
        summary: item.item.snippet,
        // description: item.item.description,
        publisher: { name: item.item.owner, username: item.item.owner },
        permissions: { 
            visibility: item.item.access,
            permission: item.item.itemControl || ControlOptions.view
        },
        contentUrl: item.item.url,
        license: { name: 'Custom License', description: item.item.accessInformation},
        // source:
        createdDate: new Date(item.item.created),
        createdDateSource: 'item.created',
        publishedDate: new Date(item.item.created),
        publishedDateSource: 'item.created',
        updatedDate: new Date(item.item.modified),
        updatedDateSource: 'item.modified'
        // boundary: 

    });
    // debugger
    if(item.item.thumbnail !== undefined && item.item.thumbnail !== null ) {
      content.thumbnailUrl = `${portalUrl}content/items/${item.item.id}/info/${item.item.thumbnail}`;
    } else if (item.item.type === "Image") {
      content.thumbnailUrl =`${portalUrl}content/items/${item.item.id}/data`;
    }

  
    return content;
  }
  
  /**
   * ```js
   * _getContentFromHub('3ef...')
   *  .then(contentModel => {
   *    // work with the model
   *  })
   * ```
   * Get the content data from the Hub API
   *
   *
   * @param {String} id Content Id
   * @param {IHubRequestOptions} hubRequestOptions Request options that may have authentication manager
   * @returns A Promise that will resolve with the item and data
   * @export
   */
  export function _getContentFromHub(
    id: string,
    hubRequestOptions?: IHubRequestOptions
  ): Promise<any> {
  
    return getFromHubAPI(id, hubRequestOptions).then((hubResponse: any) => {
      let content = _convertHubv3ToContent(hubResponse.data);
      return new Promise((resolve) => {resolve(content)})
    }).catch(err =>  {
      // TODO: better enumeration / encapsultion of Hub API error handling
      if(err.status == 403) {
        // Hub API failed or item not found. Try Portal b/c not-public or not-yet-indexed
        return _getContentFromPortal(id, hubRequestOptions);
      }
    })
  }
  
  /**
   * Convert a Hub v3 Dataset to Hub Content 
   * TODO: Change to use mdJSON translation for configurable metadata
   *
   *
   * @param {IModel} item Hub Item
   * @returns {IHubContent} Hub content object
   * @export
   */
  export function _convertHubv3ToContent(
    hubmodel: any
  ): IHubContent {

    let typeCategory = getCategory(hubmodel.attributes.type);
    
    let content:IHubContent = {
        id: hubmodel.id,
        title: hubmodel.attributes.name,
        snippet: hubmodel.attributes.searchDescription,
        owner: hubmodel.attributes.owner,
        description: hubmodel.attributes.description,
        tags: hubmodel.attributes.tags,
        created: hubmodel.attributes.created,
        numViews: 0,
        modified: hubmodel.attributes.modified,
        size: hubmodel.attributes.size,
        type: hubmodel.attributes.type,
        url: hubmodel.attributes.url,
        name: hubmodel.attributes.name,
        hubType: HubType[typeCategory],
        summary: (hubmodel.attributes.searchDescription || "").slice(0,200),
        publisher: { 
          name: hubmodel.attributes.owner,
          username: hubmodel.attributes.owner 
        },
        permissions: { 
            visibility: hubmodel.attributes.access 
        },
        contentUrl: hubmodel.attributes.url,
        
        license: { 
            name: 'Custom License', 
            description: hubmodel.attributes.accessInformation
        },
        // source:
        createdDate: new Date(hubmodel.attributes.created),
        createdDateSource: 'item.created',
        publishedDate: new Date(hubmodel.attributes.created),
        publishedDateSource: 'item.created',
        updatedDate: new Date(hubmodel.attributes.modified),
        updatedDateSource: 'item.modified'
    };
  
    // debugger
    if(hubmodel.attributes.thumbnail !== undefined && hubmodel.attributes.thumbnail !== null) {
      content.thumbnailUrl =`${portalUrl}content/items/${hubmodel.id}/info/${hubmodel.attributes.thumbnail}`;
    } else if (hubmodel.attributes.type === "Image") {
      content.thumbnailUrl =`${portalUrl}content/items/${hubmodel.id}/data`;
    }

    return content;
  }
  


export function getFromHubAPI(id:string, hubRequestOptions?: IHubRequestOptions): Promise<any> {
    let hubUrl = "https://hub.arcgis.com/api";
    let headers:any = {};
    
    if (hubRequestOptions !== undefined 
        && hubRequestOptions.hubApiUrl !== undefined
        && hubRequestOptions.authentication !== undefined) {
      hubUrl = hubRequestOptions.hubApiUrl;
      headers['Authorization'] =  hubRequestOptions.authentication.token;
    }
    
    const url = `${hubUrl}/v3/datasets/${id}`;
    const opts = {
      method: "GET",
      mode: "cors",
      headers
    } as RequestInit;
  
    // TODO: handle Hub missing content by ID
    return fetch(url, opts)
      .then(response => {
        if (!response.ok) {
          // TODO: handle passing up enumerated Hub API error codes
        //   throw Error(response);
        }
        return response.json()
      })
      .then(contentData => {
        return contentData;
      })
      .catch(err => {
        throw Error(
          `getFromHubAPI: Error requesting from Hub API: ${err}`
        );
      }); 
  }
  