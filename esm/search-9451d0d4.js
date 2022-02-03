import { r as request, _ as __assign, c as cleanUrl } from './clean-url-83c51f70.js';
import { g as getPortalUrl, a as appendCustomParams } from './get-portal-url-fdc441e5.js';
import { s as searchItems } from './search-b0ff9cfb.js';
import { g as getPortalApiUrl } from './get-portal-api-url-fba2ecae.js';

/* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { getPortal } from "@esri/arcgis-rest-request";
 * //
 * getPortal()
 * getPortal("fe8")
 * getPortal(null, { portal: "https://custom.maps.arcgis.com/sharing/rest/" })
 * ```
 * Fetch information about the specified portal by id. If no id is passed, portals/self will be called.
 * Note that if you intend to request a portal by id and it is different from the portal specified by options.authentication, you must also pass options.portal.
 * @param id
 * @param requestOptions
 */
function getPortal(id, requestOptions) {
    // construct the search url
    var idOrSelf = id ? id : "self";
    var url = getPortalUrl(requestOptions) + "/portals/" + idOrSelf;
    // default to a GET request
    var options = __assign({ httpMethod: "GET" }, requestOptions);
    // send the request
    return request(url, options);
}

/**
 * Parse the portal url, and if it matches one of the AGO
 * Url patterns, return the correct Hub Url
 * If portalUrl does not match an AGO pattern, this will
 * return `undefined`
 * @param portalUrl
 * @private
 */
function _getHubUrlFromPortalHostname(portalUrl) {
    let result;
    if (portalUrl.match(/(qaext|\.mapsqa)\.arcgis.com/)) {
        result = "https://hubqa.arcgis.com";
    }
    else if (portalUrl.match(/(devext|\.mapsdevext)\.arcgis.com/)) {
        result = "https://hubdev.arcgis.com";
    }
    else if (portalUrl.match(/(www|\.maps)\.arcgis.com/)) {
        result = "https://hub.arcgis.com";
    }
    return result;
}

/**
 * ```js
 * import { getHubApiUrl() } from "@esri/hub-common";
 * //
 * getHubApiUrl({ portal: "https://custom.maps.arcgis.com/sharing/rest" })
 * >> "https://hub.arcgis.com"
 * ```
 * Retrieves the Hub API Url associated with a specific ArcGIS Online organization.
 * @param urlOrObject a Portal URL, Portal API URL, request options object, or Portal self object
 * @returns the associated Hub API Url as a string.
 */
function getHubApiUrl(urlOrObject) {
    const hubApiUrl = urlOrObject && urlOrObject.hubApiUrl;
    if (hubApiUrl) {
        // this is request options w/ hubApiUrl already defined
        return hubApiUrl;
    }
    return _getHubUrlFromPortalHostname(getPortalApiUrl(urlOrObject));
}

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { request } from "@esri/arcgis-rest-request";
 * import { getEventServiceUrl } from "@esri/hub-events";
 * // org ids can be retrieved via a call to portals/self
 * request("http://custom.maps.arcgis.com/sharing/rest/portals/self")
 *   .then(response => {
 *     getEventServiceUrl(response.id)
 *       .then(url)
 *          // "https://hub.arcgis.com/api/v3/events/<orgId>..."
 *   })
 * ```
 * Get the Hub REST API endpoint to use for an organization's events
 * @param orgId - Identifier of the ArcGIS Online Organization
 * @param requestOptions - request options that may include authentication
 * @returns A Promise that will resolve with the events API url for a Hub enabled ArcGIS Online organization.
 */
function getEventServiceUrl(orgId, requestOptions) {
    return getEventServiceItem(orgId, requestOptions).then(response => {
        const host = getHubApiUrl(requestOptions);
        // Extract the Event service's view name; the view returned depends
        // on permission level of request user
        const view = response.url.match(/services\/(.*?)\/FeatureServer/);
        // Generate a root url for the hub-indexer event routes
        /* istanbul ignore else */
        if (view[1]) {
            return `${host}/api/v3/events/${orgId}/${view[1]}/FeatureServer/0`;
        }
    });
}
/**
 * Get the events query based on type.
 * @param type - string to indicate event type with the options `upcoming`, `past`, `cancelled` and `draft`
 * @param options - query features request options
 * @returns an IQueryFeaturesOptions that has the same values as `options` but for the modified Where and OrderBy properties
 */
function getEventQueryFromType(type, options) {
    // this allows us to ask for type === upcoming | past | cancelled | draft
    // and get an appropriate `where` and `orderByFields`
    let typeWhere;
    const newOptions = Object.assign({}, options);
    if (type === "cancelled") {
        if (!options.orderByFields) {
            // if orderByFields was passed in, use it, otherwise use appropriate one for cancelled
            newOptions.orderByFields = "EditDate DESC";
        }
        typeWhere = `isCancelled=1 AND status<>'draft'`;
    }
    else if (type === "draft") {
        if (!options.orderByFields) {
            newOptions.orderByFields = "EditDate DESC";
        }
        const session = options.authentication;
        const user = session ? session.username : null;
        typeWhere = `Creator = '${user}' AND status = 'draft'`;
    }
    else {
        if (!options.orderByFields) {
            // if orderByFields was passed in, use it, otherwise use appropriate one for type
            newOptions.orderByFields =
                type === "upcoming" ? "startDate ASC" : "startDate DESC";
        }
        const operator = type === "upcoming" ? ">" : "<=";
        typeWhere = `endDate${operator}CURRENT_TIMESTAMP AND (isCancelled<>1 OR isCancelled IS NULL) AND status<>'draft'`;
    }
    if (options.where) {
        newOptions.where = `${options.where} AND ${typeWhere}`;
    }
    else {
        newOptions.where = typeWhere;
    }
    return newOptions;
}
/**
 * ```js
 * import { request } from "@esri/arcgis-rest-request";
 * import { getEventServiceItem } from "@esri/hub-events";
 * // org ids can be retrieved via a call to portals/self
 * request("http://custom.maps.arcgis.com/sharing/rest/portals/self")
 *   .then(response => {
 *     getEventServiceItem(response.id)
 *       .then(itemResponse)
 *   })
 * ```
 * Fetch the events service associated with a Hub Site.
 * @param orgId - Identifier of the ArcGIS Online Organization
 * @param requestOptions - request options that may include authentication
 * @returns A Promise that will resolve with the events item for a Hub enabled ArcGIS Online organization.
 */
function getEventServiceItem(orgId, requestOptions) {
    return searchItems(Object.assign({ q: `typekeywords:hubEventsLayer AND orgid:${orgId}` }, requestOptions)).then(response => {
        const eventResponse = response;
        if (eventResponse.results && eventResponse.results.length > 0) {
            let result;
            /* istanbul ignore else  */
            if (eventResponse.results.length === 1) {
                // user only has access to the public view
                result = eventResponse.results[0];
            }
            else if (eventResponse.results.length > 1) {
                // the user has access to the org view and/or the admin view
                // identify which is which
                const obj = eventResponse.results.reduce((acc, item) => {
                    if (!item.typeKeywords.includes("View Service")) {
                        acc.admin = item;
                    }
                    else {
                        if (item.access === "public") {
                            acc.public = item;
                        }
                        else {
                            acc.org = item;
                        }
                    }
                    return acc;
                }, {});
                // pick the highest access level that this user has access to
                result = obj.admin || obj.org || /* istanbul ignore next */ obj.public;
            }
            return result;
        }
        else {
            throw Error("No events service found. Events are likely not enabled.");
        }
    });
}

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { queryFeatures } from '@esri/arcgis-rest-feature-layer';
 * //
 * queryFeatures({
 *   url: "http://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer/3",
 *   where: "STATE_NAME = 'Alaska'"
 * })
 *   .then(result)
 * ```
 * Query a feature service. See [REST Documentation](https://developers.arcgis.com/rest/services-reference/query-feature-service-layer-.htm) for more information.
 *
 * @param requestOptions - Options for the request
 * @returns A Promise that will resolve with the query response.
 */
function queryFeatures(requestOptions) {
    var queryOptions = appendCustomParams(requestOptions, [
        "where",
        "objectIds",
        "relationParam",
        "time",
        "distance",
        "units",
        "outFields",
        "geometry",
        "geometryType",
        "spatialRel",
        "returnGeometry",
        "maxAllowableOffset",
        "geometryPrecision",
        "inSR",
        "outSR",
        "gdbVersion",
        "returnDistinctValues",
        "returnIdsOnly",
        "returnCountOnly",
        "returnExtentOnly",
        "orderByFields",
        "groupByFieldsForStatistics",
        "outStatistics",
        "returnZ",
        "returnM",
        "multipatchOption",
        "resultOffset",
        "resultRecordCount",
        "quantizationParameters",
        "returnCentroid",
        "resultType",
        "historicMoment",
        "returnTrueCurves",
        "sqlFormat",
        "returnExceededLimitFeatures",
        "f"
    ], {
        httpMethod: "GET",
        params: __assign({ 
            // set default query parameters
            where: "1=1", outFields: "*" }, requestOptions.params)
    });
    return request(cleanUrl(requestOptions.url) + "/query", queryOptions);
}

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { getEventQueryFromType, searchEvents } from "@esri/hub-events";
 * // event types are "upcoming" | "past" | "cancelled" | "draft"
 * const searchOptions: IQueryFeaturesOptions = getEventQueryFromType("upcoming", {
 *   url: eventsUrl,
 *   authentication
 * });
 * searchEvents(searchOptions)
 *   .then(response => {
 *     // {
 *     //   data: [{
 *     //     id: "4",
 *     //     type: "events",
 *     //     attributes: {title: "Vision Zero", siteId: "CityofX", ...},
 *     //     geometry: {
 *     //       "x": -74.310680054965559,
 *     //       "y": 40.723010058860787
 *     //     }
 *     //   }],
 *     //   included: [{
 *     //     id: "CityofX",
 *     //     type: "sites",
 *     //     attributes: { id: "CityofX", url: "https://foo/bar"}
 *     //   }]
 *     // }
 *   });
 * ```
 * Query for events from ArcGIS Hub.
 * @param requestOptions - request options that may include authentication
 * @returns A Promise that will resolve with decorated features from the event feature service for a Hub enabled ArcGIS Online organization.
 */
function searchEvents(requestOptions) {
    const queryOptions = Object.assign({ returnGeometry: true }, requestOptions);
    return queryFeatures(queryOptions).then(response => {
        if (response.features.length <= 0) {
            return {
                data: [],
                included: []
            };
        }
        // if authentication is passed, get a reference to the token to tack onto image urls
        if (queryOptions.authentication) {
            return queryOptions.authentication
                .getToken(queryOptions.url)
                .then(token => {
                return buildEventResponse(response.features, queryOptions.url, requestOptions, token);
            });
        }
        else {
            return buildEventResponse(response.features, queryOptions.url, requestOptions);
        }
    });
}
function buildEventResponse(features, url, requestOptions, token) {
    const siteIds = [];
    const data = [];
    const included = [];
    const cacheBust = new Date().getTime();
    let siteSearchQuery = "";
    features.forEach(function (event) {
        const attributes = event.attributes;
        const geometry = event.geometry;
        let imageUrl = null;
        if (attributes.imageAttributes) {
            const imageAttributes = JSON.parse(attributes.imageAttributes);
            if (imageAttributes.crop) {
                imageUrl = `${url}/${attributes.OBJECTID}/attachments/${imageAttributes.crop}?v=${cacheBust}`;
                if (token) {
                    imageUrl += `&token=${token}`;
                }
            }
        }
        data.push({
            id: attributes.OBJECTID,
            type: "events",
            imageUrl,
            attributes,
            geometry
        });
        const currentEventSiteId = attributes.siteId;
        if (currentEventSiteId != null &&
            siteIds.indexOf(currentEventSiteId) === -1) {
            siteIds.push(currentEventSiteId);
            siteSearchQuery += siteSearchQuery.length > 0 ? " OR id:" : "id:";
            siteSearchQuery += currentEventSiteId;
        }
    });
    if (siteIds.length === 0) {
        return { included, data };
    }
    // search for site items and include those in the response
    const searchRequestOptions = requestOptions;
    searchRequestOptions.q = siteSearchQuery;
    return searchItems(searchRequestOptions).then(function (siteInfo) {
        siteInfo.results.forEach(siteItem => {
            included.push({
                id: siteItem.id,
                type: `sites`,
                // passing along all the site item information would be overkill
                attributes: {
                    id: siteItem.id,
                    url: siteItem.url
                }
            });
        });
        return { included, data };
    });
}

export { getEventQueryFromType as a, getEventServiceUrl as b, getPortal as g, queryFeatures as q, searchEvents as s };
