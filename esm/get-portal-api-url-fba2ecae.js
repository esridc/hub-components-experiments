import { g as getPortalUrl$1 } from './get-portal-url-fdc441e5.js';

/**
 * ```js
 * import { getPortalUrl } from "@esri/hub-common";
 * // from a portal API URL
 * let portalUrl = getPortalUrl("https://org.maps.arcgis.com/sharing/rest"); // https://org.maps.arcgis.com
 * // from an enterprise portal self response (IPortal)
 * let portalSelf = { isPortal: true, portalHostname: "server.example.org" };
 * portalUrl = getPortalUrl(portalSelf); // https://server.example.org
 * // from an online portal self response (IPortal)
 * portalSelf = { isPortal: false, urlKey: "org", customBaseUrl: "maps.arcgis.com" };
 * portalUrl = getPortalUrl(portalSelf); // https://org.maps.arcgis.com
 * // from hub request options (IHubRequestOptions) with a portal self (IPortal)
 * let requestOptions = { isPortal: false, portalSelf };
 * portalUrl = getPortalUrl(requestOptions); // https://org.maps.arcgis.com
 * // from request options (IRequestOptions) with a portal (string)
 * requestOptions = { portal: "https://org.maps.arcgis.com/sharing/rest" };
 * portalUrl = getPortalUrl(requestOptions); // https://org.maps.arcgis.com
 * ```
 * Derive a portal's base URL from the portal's API URL, a portal object, or request options
 * @param urlOrObject a portal API URL, a portal object, or request options containing either of those
 * @returns The portal base URL, defaults to `https://www.arcgis.com`
 */
function getPortalUrl(urlOrObject) {
    if (typeof urlOrObject === "string") {
        // assume this is the URL of the portal API
        // and strip the `/sharing/rest`
        return urlOrObject.replace(/\/sharing\/rest\/?$/, "");
    }
    if (typeof urlOrObject === "object") {
        // build URL from portal self object, which could be
        // either a property of the object (request options) or the object itself
        const portalSelf = urlOrObject.portalSelf;
        const portal = portalSelf || urlOrObject;
        const { portalHostname, urlKey, customBaseUrl } = portal;
        if (portalHostname || (urlKey && customBaseUrl)) {
            // user passed in a portal object, we'll use that to build the URL
            if (portal.isPortal) {
                return `https://${portal.portalHostname}`;
            }
            else {
                return `https://${portal.urlKey}.${portal.customBaseUrl}`;
            }
        }
    }
    // urlOrObj is either undefined, or a request options w/o portal self
    // get portal API URL and parse portal URL from that
    return getPortalUrl(getPortalUrl$1(urlOrObject));
}

/**
 * ```js
 * import { getPortalApiUrl } from "@esri/hub-common";
 * // from a portal base URL
 * let portalApiUrl = getPortalApiUrl("https://org.maps.arcgis.com"); // https://org.maps.arcgis.com/sharing/rest
 * // from an enterprise portal self response (IPortal)
 * let portalSelf = { isPortal: true, portalHostname: "server.example.org" };
 * portalApiUrl = getPortalApiUrl(portalSelf); // https://server.example.org/sharing/rest
 * // from an online portal self response (IPortal)
 * portalSelf = { isPortal: false, urlKey: "org", customBaseUrl: "maps.arcgis.com" };
 * portalApiUrl = getPortalApiUrl(portalSelf); // https://org.maps.arcgis.com/sharing/rest
 * // from hub request options (IHubRequestOptions) with a portal self (IPortal)
 * let requestOptions = { isPortal: false, portalSelf };
 * portalApiUrl = getPortalApiUrl(requestOptions); // https://org.maps.arcgis.com/sharing/rest
 * // from request options (IRequestOptions) with a portal (string)
 * requestOptions = { portal: "https://org.maps.arcgis.com/sharing/rest" };
 * portalApiUrl = getPortalApiUrl(requestOptions); // https://org.maps.arcgis.com/sharing/rest
 * ```
 * Derive a portal's API URL from the portal's base URL, a portal object, or request options
 * @param urlOrObject a portal base URL, a portal object, or request options containing either of those
 * @returns The portal API URL, defaults to `https://www.arcgis.com/sharing/rest`
 */
function getPortalApiUrl(urlOrObject) {
    return `${getPortalUrl(urlOrObject)}/sharing/rest`;
}

export { getPortalApiUrl as g };
