import { _ as __assign, r as request } from './clean-url-83c51f70.js';
import { g as getPortalUrl, a as appendCustomParams } from './get-portal-url-fdc441e5.js';
import { d as determineOwner, s as serializeItem } from './get-9aed8a75.js';

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { createItemInFolder } from "@esri/arcgis-rest-portal";
 * //
 * createItemInFolder({
 *   item: {
 *     title: "The Amazing Voyage",
 *     type: "Web Map"
 *   },
 *   folderId: 'fe8',
 *   authentication
 * })
 * ```
 * Create an item in a folder. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/add-item.htm) for more information.
 *
 * @param requestOptions = Options for the request
 */
function createItemInFolder(requestOptions) {
    if (requestOptions.multipart && !requestOptions.filename) {
        return Promise.reject(new Error("The filename is required for a multipart request."));
    }
    return determineOwner(requestOptions).then(function (owner) {
        var baseUrl = getPortalUrl(requestOptions) + "/content/users/" + owner;
        var url = baseUrl + "/addItem";
        if (requestOptions.folderId) {
            url = baseUrl + "/" + requestOptions.folderId + "/addItem";
        }
        requestOptions.params = __assign(__assign({}, requestOptions.params), serializeItem(requestOptions.item));
        // serialize the item into something Portal will accept
        var options = appendCustomParams(requestOptions, [
            "owner",
            "folderId",
            "file",
            "dataUrl",
            "text",
            "async",
            "multipart",
            "filename",
            "overwrite"
        ], {
            params: __assign({}, requestOptions.params)
        });
        return request(url, options);
    });
}
/**
 * ```js
 * import { createItem } from "@esri/arcgis-rest-portal";
 * //
 * createItem({
 *   item: {
 *     title: "The Amazing Voyage",
 *     type: "Web Map"
 *   },
 *   authentication
 * })
 * ```
 * Create an Item in the user's root folder. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/add-item.htm) for more information.
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that creates an item.
 */
function createItem(requestOptions) {
    // delegate to createItemInFolder placing in the root of the filestore
    var options = __assign({ folderId: null }, requestOptions);
    return createItemInFolder(options);
}

export { createItem as c };
