'use strict';

const getPortalUrl = require('./get-portal-url-674469a6.js');
const cleanUrl = require('./clean-url-e0d82cce.js');

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
    var url = getPortalUrl.getPortalUrl(requestOptions) + "/community/groups/" + requestOptions.id + "/join";
    return cleanUrl.request(url, requestOptions);
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
    var url = getPortalUrl.getPortalUrl(requestOptions) + "/community/groups/" + requestOptions.id + "/leave";
    return cleanUrl.request(url, requestOptions);
}

exports.joinGroup = joinGroup;
exports.leaveGroup = leaveGroup;
