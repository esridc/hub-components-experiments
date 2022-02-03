import { request } from "@esri/arcgis-rest-request";
const portalUrl = 'https://www.arcgis.com';
/**
* Get a list of the resources associated with an user
*
* TODO: move this to arcgis-rest-js
*
* @param id - Username
* @param requestOptions - Options for the request
* @returns A Promise to get some item resources.
*/
export async function getUserResources(id, requestOptions) {
  const url = `${portalUrl}/sharing/rest/community/users/${id}/resources`;
  // Mix in num:1000 with any user supplied params
  // Key thing - we don't want to mutate the passed in requestOptions
  // as that may be used in other (subsequent) calls in the course
  // of a long promise chains
  const options = Object.assign({}, requestOptions);
  options.params = Object.assign({ num: 1000 }, options.params);
  return request(url, options);
}
/**
 * Get a specific resources associated with an user
 *
 * TODO: move this to arcgis-rest-js
 *
 * @param id - Username
 * @param resource - Name of the resource to fetch
 * @param requestOptions - Options for the request
 * @returns A Promise to get some item resources.
 */
export async function getUserResource(id, resource, requestOptions) {
  const url = `${portalUrl}/sharing/rest/community/users/${id}/resources/${resource}`;
  // Mix in num:1000 with any user supplied params
  // Key thing - we don't want to mutate the passed in requestOptions
  // as that may be used in other (subsequent) calls in the course
  // of a long promise chains
  const options = Object.assign({}, requestOptions);
  options.params = Object.assign({ num: 1000 }, options.params);
  return request(url, options);
}
/**
 * ```js
 * import { addItemResource } from "@esri/arcgis-rest-portal";
 *
 * // Add a file resource
 * addItemResource({
 *   id: '3ef',
 *   resource: file,
 *   name: 'bigkahuna.jpg',
 *   authentication
 * })
 *   .then(response)
 *
 * // Add a text resource
 * addItemResource({
 *   id: '4fg',
 *   content: "Text content",
 *   name: 'bigkahuna.txt',
 *   authentication
 * })
 *   .then(response)
 * ```
 * Add a resource associated with an item. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/add-resources.htm) for more information.
 *
 * @param requestOptions - Options for the request
 * @returns A Promise to add item resources.
 */
export function addUserResource(requestOptions) {
  const url = `${portalUrl}/sharing/rest/community/users/${requestOptions.username}/addresource`;
  requestOptions.params = Object.assign({ text: requestOptions.content, key: requestOptions.name, file: requestOptions.resource }, requestOptions.params);
  return request(url, requestOptions);
}
