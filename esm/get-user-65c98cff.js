import { r as request, _ as __assign } from './clean-url-83c51f70.js';
import { g as getPortalUrl } from './get-portal-url-fdc441e5.js';

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { getUser } from '@esri/arcgis-rest-portal';
 * //
 * getUser("jsmith")
 *   .then(response)
 * // => { firstName: "John", lastName: "Smith",tags: ["GIS Analyst", "City of Redlands"] }
 * ```
 * Get information about a user. This method has proven so generically useful that you can also call [`UserSession.getUser()`](/arcgis-rest-js/api/auth/UserSession#getUser-summary).
 *
 * @param requestOptions - options to pass through in the request
 * @returns A Promise that will resolve with metadata about the user
 */
function getUser(requestOptions) {
    var url;
    var options = { httpMethod: "GET" };
    // if a username is passed, assume ArcGIS Online
    if (typeof requestOptions === "string") {
        url = "https://www.arcgis.com/sharing/rest/community/users/" + requestOptions;
    }
    else {
        // if an authenticated session is passed, default to that user/portal unless another username is provided manually
        var username = requestOptions.username || requestOptions.authentication.username;
        url = getPortalUrl(requestOptions) + "/community/users/" + encodeURIComponent(username);
        options = __assign(__assign({}, requestOptions), options);
    }
    // send the request
    return request(url, options);
}

export { getUser as g };
