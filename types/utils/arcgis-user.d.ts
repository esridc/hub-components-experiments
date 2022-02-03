import { IRequestOptions } from "@esri/arcgis-rest-request";
export interface IUserResourceOptions extends IRequestOptions {
  /**
   * Username for the resource
   */
  username: string;
  /**
   * New resource filename.
   */
  name?: string;
  /**
   * Text input to be added as a file resource.
   */
  content?: string;
  /**
   * Object to store
   */
  resource?: any;
}
export interface IUserResourceResponse {
  success: boolean;
}
/**
* Get a list of the resources associated with an user
*
* TODO: move this to arcgis-rest-js
*
* @param id - Username
* @param requestOptions - Options for the request
* @returns A Promise to get some item resources.
*/
export declare function getUserResources(id: string, requestOptions?: IRequestOptions): Promise<any>;
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
export declare function getUserResource(id: string, resource: string, requestOptions?: IRequestOptions): Promise<any>;
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
export declare function addUserResource(requestOptions: IUserResourceOptions): Promise<IUserResourceResponse>;
