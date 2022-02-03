import { IHubContent } from "./hub-types";
import { IModel, IHubRequestOptions } from "@esri/hub-common";
import { UserSession } from "@esri/arcgis-rest-auth";
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
export declare function getContent(id: string, hubRequestOptions?: IHubRequestOptions): Promise<any>;
export declare function updateContent(id: string, attributes: IHubContent, authentication?: UserSession): Promise<IHubContent>;
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
export declare function _getContentFromPortal(id: string, hubRequestOptions?: IHubRequestOptions): Promise<any>;
/**
 * Convert a Portal Item to a Hub Content
 * TODO: Change to use mdJSON translation for configurable metadata
 *
 *
 * @param {IModel} item Portal Item
 * @returns {IHubContentModel} Hub content object
 * @export
 */
export declare function _convertItemToContent(item: IModel): IHubContent;
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
export declare function _getContentFromHub(id: string, hubRequestOptions?: IHubRequestOptions): Promise<any>;
/**
 * Convert a Hub v3 Dataset to Hub Content
 * TODO: Change to use mdJSON translation for configurable metadata
 *
 *
 * @param {IModel} item Hub Item
 * @returns {IHubContent} Hub content object
 * @export
 */
export declare function _convertHubv3ToContent(hubmodel: any): IHubContent;
export declare function getFromHubAPI(id: string, hubRequestOptions?: IHubRequestOptions): Promise<any>;
