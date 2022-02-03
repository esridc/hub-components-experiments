import { d as determineOwner, s as serializeItem, g as getItem, a as getItemData } from './get-9aed8a75.js';
import { _ as __assign, r as request } from './clean-url-83c51f70.js';
import { g as getPortalUrl } from './get-portal-url-fdc441e5.js';
import { g as getCategory } from './content-16805b54.js';

var ContentType;
(function (ContentType) {
  ContentType[ContentType["dataset"] = 1000] = "dataset";
  ContentType[ContentType["document"] = 1001] = "document";
  ContentType[ContentType["map"] = 1002] = "map";
  ContentType[ContentType["app"] = 1003] = "app";
  ContentType[ContentType["site"] = 1004] = "site";
  ContentType[ContentType["initiative"] = 1005] = "initiative";
  ContentType[ContentType["template"] = 1006] = "template";
})(ContentType || (ContentType = {}));
var CommunityType;
(function (CommunityType) {
  CommunityType[CommunityType["member"] = 1] = "member";
  CommunityType[CommunityType["team"] = 2] = "team";
})(CommunityType || (CommunityType = {}));
var VisibilityOptions;
(function (VisibilityOptions) {
  VisibilityOptions[VisibilityOptions["private"] = 0] = "private";
  VisibilityOptions[VisibilityOptions["org"] = 1] = "org";
  VisibilityOptions[VisibilityOptions["public"] = 2] = "public";
})(VisibilityOptions || (VisibilityOptions = {}));
var ControlOptions;
(function (ControlOptions) {
  ControlOptions[ControlOptions["view"] = 0] = "view";
  ControlOptions[ControlOptions["edit"] = 1] = "edit";
  ControlOptions[ControlOptions["admin"] = 2] = "admin";
})(ControlOptions || (ControlOptions = {}));
var EventType;
(function (EventType) {
  EventType[EventType["event"] = 0] = "event";
})(EventType || (EventType = {}));
// TODO: figure out how this can work like { ...ContentType, ...CommunityType, ...EventType}
var HubType;
(function (HubType) {
  HubType[HubType["member"] = 1] = "member";
  HubType[HubType["team"] = 2] = "team";
  HubType[HubType["event"] = 100] = "event";
  HubType[HubType["dataset"] = 1000] = "dataset";
  HubType[HubType["document"] = 1001] = "document";
  HubType[HubType["map"] = 1002] = "map";
  HubType[HubType["app"] = 1003] = "app";
  HubType[HubType["site"] = 1004] = "site";
  HubType[HubType["initiative"] = 1005] = "initiative";
  HubType[HubType["template"] = 1006] = "template";
  HubType[HubType["organization"] = 1007] = "organization";
})(HubType || (HubType = {}));

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { updateItem } from "@esri/arcgis-rest-portal";
 * //
 * updateItem({
 *   item: {
 *     id: "3ef",
 *     description: "A three hour tour"
 *   },
 *   authentication
 * })
 *   .then(response)
 * ```
 * Update an Item. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/update-item.htm) for more information.
 *
 * @param requestOptions - Options for the request.
 * @returns A Promise that updates an item.
 */
function updateItem(requestOptions) {
    return determineOwner(requestOptions).then(function (owner) {
        var url = requestOptions.folderId
            ? getPortalUrl(requestOptions) + "/content/users/" + owner + "/" + requestOptions.folderId + "/items/" + requestOptions.item.id + "/update"
            : getPortalUrl(requestOptions) + "/content/users/" + owner + "/items/" + requestOptions.item.id + "/update";
        // serialize the item into something Portal will accept
        requestOptions.params = __assign(__assign({}, requestOptions.params), serializeItem(requestOptions.item));
        return request(url, requestOptions);
    });
}

/**
 * Gets the full item/data model for an item
 * @param {string} id Id of the item to fetch
 * @param {Object} requestOptions
 */
function getModel(id, requestOptions) {
    return Promise.all([
        getItem(id, requestOptions),
        getItemData(id, requestOptions)
    ]).then((result) => {
        // shape this into a model
        return {
            item: result[0],
            data: result[1]
        };
    });
}

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
function getContent(id, hubRequestOptions) {
  if (hubRequestOptions !== undefined
    && hubRequestOptions.isPortal) {
    return _getContentFromPortal(id, hubRequestOptions);
  }
  else {
    return _getContentFromHub(id, hubRequestOptions);
  }
}
async function updateContent(id, attributes, authentication) {
  // Portal
  updateItem({
    item: Object.assign({ id }, attributes),
    authentication
  });
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
function _getContentFromPortal(id, hubRequestOptions) {
  return getModel(id, hubRequestOptions).then((item) => {
    return new Promise(resolve => {
      const content = _convertItemToContent(item);
      resolve(content);
    });
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
function _convertItemToContent(item) {
  console.log("_convertItemToContent", item);
  let typeCategory = getCategory(item.item.type);
  let content = Object.assign(item.item, {
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
    license: { name: 'Custom License', description: item.item.accessInformation },
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
  if (item.item.thumbnail !== undefined && item.item.thumbnail !== null) {
    content.thumbnailUrl = `${portalUrl}content/items/${item.item.id}/info/${item.item.thumbnail}`;
  }
  else if (item.item.type === "Image") {
    content.thumbnailUrl = `${portalUrl}content/items/${item.item.id}/data`;
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
function _getContentFromHub(id, hubRequestOptions) {
  return getFromHubAPI(id, hubRequestOptions).then((hubResponse) => {
    let content = _convertHubv3ToContent(hubResponse.data);
    return new Promise((resolve) => { resolve(content); });
  }).catch(err => {
    // TODO: better enumeration / encapsultion of Hub API error handling
    if (err.status == 403) {
      // Hub API failed or item not found. Try Portal b/c not-public or not-yet-indexed
      return _getContentFromPortal(id, hubRequestOptions);
    }
  });
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
function _convertHubv3ToContent(hubmodel) {
  let typeCategory = getCategory(hubmodel.attributes.type);
  let content = {
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
    summary: (hubmodel.attributes.searchDescription || "").slice(0, 200),
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
  if (hubmodel.attributes.thumbnail !== undefined && hubmodel.attributes.thumbnail !== null) {
    content.thumbnailUrl = `${portalUrl}content/items/${hubmodel.id}/info/${hubmodel.attributes.thumbnail}`;
  }
  else if (hubmodel.attributes.type === "Image") {
    content.thumbnailUrl = `${portalUrl}content/items/${hubmodel.id}/data`;
  }
  return content;
}
function getFromHubAPI(id, hubRequestOptions) {
  let hubUrl = "https://hub.arcgis.com/api";
  let headers = {};
  if (hubRequestOptions !== undefined
    && hubRequestOptions.hubApiUrl !== undefined
    && hubRequestOptions.authentication !== undefined) {
    hubUrl = hubRequestOptions.hubApiUrl;
    headers['Authorization'] = hubRequestOptions.authentication.token;
  }
  const url = `${hubUrl}/v3/datasets/${id}`;
  const opts = {
    method: "GET",
    mode: "cors",
    headers
  };
  // TODO: handle Hub missing content by ID
  return fetch(url, opts)
    .then(response => {
    return response.json();
  })
    .then(contentData => {
    return contentData;
  })
    .catch(err => {
    throw Error(`getFromHubAPI: Error requesting from Hub API: ${err}`);
  });
}

export { CommunityType as C, HubType as H, VisibilityOptions as V, _convertItemToContent as _, _convertHubv3ToContent as a, getContent as g, updateContent as u };
