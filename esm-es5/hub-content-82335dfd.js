var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { u as updateItem } from './index-2b41d503.js';
import { g as getModel, a as getCategory } from './index-31ce56d3.js';
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
var portalUrl = 'https://www.arcgis.com/sharing/rest/';
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
function updateContent(id, attributes, authentication) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            // Portal
            updateItem({
                item: Object.assign({ id: id }, attributes),
                authentication: authentication
            });
            // TODO add getContent authentication 
            return [2 /*return*/, getContent(id)];
        });
    });
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
    return getModel(id, hubRequestOptions).then(function (item) {
        return new Promise(function (resolve) {
            var content = _convertItemToContent(item);
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
    var typeCategory = getCategory(item.item.type);
    var content = Object.assign(item.item, {
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
        content.thumbnailUrl = portalUrl + "content/items/" + item.item.id + "/info/" + item.item.thumbnail;
    }
    else if (item.item.type === "Image") {
        content.thumbnailUrl = portalUrl + "content/items/" + item.item.id + "/data";
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
    return getFromHubAPI(id, hubRequestOptions).then(function (hubResponse) {
        var content = _convertHubv3ToContent(hubResponse.data);
        return new Promise(function (resolve) { resolve(content); });
    }).catch(function (err) {
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
    var typeCategory = getCategory(hubmodel.attributes.type);
    var content = {
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
        content.thumbnailUrl = portalUrl + "content/items/" + hubmodel.id + "/info/" + hubmodel.attributes.thumbnail;
    }
    else if (hubmodel.attributes.type === "Image") {
        content.thumbnailUrl = portalUrl + "content/items/" + hubmodel.id + "/data";
    }
    return content;
}
function getFromHubAPI(id, hubRequestOptions) {
    var hubUrl = "https://hub.arcgis.com/api";
    var headers = {};
    if (hubRequestOptions !== undefined
        && hubRequestOptions.hubApiUrl !== undefined
        && hubRequestOptions.authentication !== undefined) {
        hubUrl = hubRequestOptions.hubApiUrl;
        headers['Authorization'] = hubRequestOptions.authentication.token;
    }
    var url = hubUrl + "/v3/datasets/" + id;
    var opts = {
        method: "GET",
        mode: "cors",
        headers: headers
    };
    // TODO: handle Hub missing content by ID
    return fetch(url, opts)
        .then(function (response) {
        return response.json();
    })
        .then(function (contentData) {
        return contentData;
    })
        .catch(function (err) {
        throw Error("getFromHubAPI: Error requesting from Hub API: " + err);
    });
}
export { CommunityType as C, HubType as H, VisibilityOptions as V, _convertItemToContent as _, _convertHubv3ToContent as a, getContent as g, updateContent as u };
