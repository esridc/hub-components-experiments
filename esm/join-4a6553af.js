import { g as getPortalUrl } from './get-portal-url-fdc441e5.js';
import { r as request } from './clean-url-83c51f70.js';

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { joinGroup } from '@esri/arcgis-rest-portal';
 * //
 * joinGroup({
 *   id: groupId,
 *   authentication
 * })
 *   .then(response)
 * ```
 * Make a request as the authenticated user to join a Group. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/join-group.htm) for more information.
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that will resolve with the success/failure status of the request and the groupId.
 */
function joinGroup(requestOptions) {
    var url = getPortalUrl(requestOptions) + "/community/groups/" + requestOptions.id + "/join";
    return request(url, requestOptions);
}
/**
 * ```js
 * import { leaveGroup } from '@esri/arcgis-rest-portal';
 * //
 * leaveGroup({
 *   id: groupId,
 *   authentication
 * })
 *   .then(response)
 * ```
 * Make a request as the authenticated user to leave a Group. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/leave-group.htm) for more information.
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that will resolve with the success/failure status of the request and the groupId.
 */
function leaveGroup(requestOptions) {
    var url = getPortalUrl(requestOptions) + "/community/groups/" + requestOptions.id + "/leave";
    return request(url, requestOptions);
}

export { joinGroup as j, leaveGroup as l };
