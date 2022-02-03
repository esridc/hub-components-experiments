'use strict';

const cleanUrl = require('./clean-url-e0d82cce.js');
const getPortalUrl = require('./get-portal-url-674469a6.js');

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Serialize an item and its data into a json format accepted by the Portal API for create and update operations
 *
 * @param item Item to be serialized
 * @returns a formatted json object to be sent to Portal
 */
function serializeItem(item) {
    // create a clone so we're not messing with the original
    var clone = JSON.parse(JSON.stringify(item));
    // binary data needs POSTed as a `file`
    // JSON object literals should be passed as `text`.
    if (clone.data) {
        (typeof Blob !== "undefined" && item.data instanceof Blob) ||
            // Node.js doesn't implement Blob
            item.data.constructor.name === "ReadStream"
            ? (clone.file = item.data)
            : (clone.text = item.data);
        delete clone.data;
    }
    return clone;
}
/**
 * `requestOptions.owner` is given priority, `requestOptions.item.owner` will be checked next. If neither are present, `authentication.getUserName()` will be used instead.
 */
function determineOwner(requestOptions) {
    if (requestOptions.owner) {
        return Promise.resolve(requestOptions.owner);
    }
    else if (requestOptions.item && requestOptions.item.owner) {
        return Promise.resolve(requestOptions.item.owner);
    }
    else if (requestOptions.authentication &&
        requestOptions.authentication.getUsername) {
        return requestOptions.authentication.getUsername();
    }
    else {
        return Promise.reject(new Error("Could not determine the owner of this item. Pass the `owner`, `item.owner`, or `authentication` option."));
    }
}

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```
 * import { getItem } from "@esri/arcgis-rest-portal";
 * //
 * getItem("ae7")
 *   .then(response);
 * // or
 * getItem("ae7", { authentication })
 *   .then(response)
 * ```
 * Get an item by id. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/item.htm) for more information.
 *
 * @param id - Item Id
 * @param requestOptions - Options for the request
 * @returns A Promise that will resolve with the data from the response.
 */
function getItem(id, requestOptions) {
    var url = getItemBaseUrl(id, requestOptions);
    // default to a GET request
    var options = cleanUrl.__assign({ httpMethod: "GET" }, requestOptions);
    return cleanUrl.request(url, options);
}
/**
 * Get the fully qualified base URL to the REST end point for an item.
 * @param id Item Id
 * @param portalUrlOrRequestOptions a portal URL or request options
 * @returns URL to the item's REST end point, defaults to `https://www.arcgis.com/sharing/rest/content/items/{id}`
 */
var getItemBaseUrl = function (id, portalUrlOrRequestOptions) {
    var portalUrl = typeof portalUrlOrRequestOptions === "string"
        ? portalUrlOrRequestOptions
        : getPortalUrl.getPortalUrl(portalUrlOrRequestOptions);
    return portalUrl + "/content/items/" + id;
};
/**
 * ```
 * import { getItemData } from "@esri/arcgis-rest-portal";
 * //
 * getItemData("ae7")
 *   .then(response)
 * // or
 * getItemData("ae7", { authentication })
 *   .then(response)
 * ```
 * Get the /data for an item. If no data exists, returns `undefined`. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/item-data.htm) for more information.
 * @param id - Item Id
 * @param requestOptions - Options for the request
 * @returns A Promise that will resolve with the json data for the item.
 */
function getItemData(id, requestOptions) {
    var url = getItemBaseUrl(id, requestOptions) + "/data";
    // default to a GET request
    var options = cleanUrl.__assign({ httpMethod: "GET", params: {} }, requestOptions);
    if (options.file) {
        options.params.f = null;
    }
    return cleanUrl.request(url, options).catch(function (err) {
        /* if the item doesn't include data, the response will be empty
           and the internal call to response.json() will fail */
        var emptyResponseErr = RegExp(/The string did not match the expected pattern|(Unexpected end of (JSON input|data at line 1 column 1))/i);
        /* istanbul ignore else */
        if (emptyResponseErr.test(err.message)) {
            return;
        }
        else
            throw err;
    });
}
/**
 * ```js
 * import { getItemGroups } from "@esri/arcgis-rest-portal";
 * //
 * getItemGroups("30e5fe3149c34df1ba922e6f5bbf808f")
 *   .then(response)
 * ```
 * Lists the groups of which the item is a part, only showing the groups that the calling user can access. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/groups.htm) for more information.
 *
 * @param id - The Id of the item to query group association for.
 * @param requestOptions - Options for the request
 * @returns A Promise to get some item groups.
 */
function getItemGroups(id, requestOptions) {
    var url = getItemBaseUrl(id, requestOptions) + "/groups";
    return cleanUrl.request(url, requestOptions);
}
/**
 * ```js
 * import { getItemStatus } from "@esri/arcgis-rest-portal";
 * //
 * getItemStatus({
 *   id: "30e5fe3149c34df1ba922e6f5bbf808f",
 *   authentication
 * })
 *   .then(response)
 * ```
 * Inquire about status when publishing an item, adding an item in async mode, or adding with a multipart upload. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/status.htm) for more information.
 *
 * @param id - The Id of the item to get status for.
 * @param requestOptions - Options for the request
 * @returns A Promise to get the item status.
 */
function getItemStatus(requestOptions) {
    return determineOwner(requestOptions).then(function (owner) {
        var url = getPortalUrl.getPortalUrl(requestOptions) + "/content/users/" + owner + "/items/" + requestOptions.id + "/status";
        var options = getPortalUrl.appendCustomParams(requestOptions, ["jobId", "jobType"], { params: cleanUrl.__assign({}, requestOptions.params) });
        return cleanUrl.request(url, options);
    });
}

exports.determineOwner = determineOwner;
exports.getItem = getItem;
exports.getItemData = getItemData;
exports.getItemGroups = getItemGroups;
exports.getItemStatus = getItemStatus;
exports.serializeItem = serializeItem;
