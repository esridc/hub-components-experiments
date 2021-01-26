import { _ as __assign, r as request, c as cleanUrl, a as appendCustomParams } from './index-f63ea13e.js';
import { c as searchItems, j as joinGroup, l as leaveGroup } from './index-cd1ec6e0.js';
import { i as getHubApiUrl } from './index-9132a447.js';

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
    return getEventServiceItem(orgId, requestOptions).then(function (response) {
        var host = getHubApiUrl(requestOptions);
        // Extract the Event service's view name; the view returned depends
        // on permission level of request user
        var view = response.url.match(/services\/(.*?)\/FeatureServer/);
        // Generate a root url for the hub-indexer event routes
        /* istanbul ignore else */
        if (view[1]) {
            return host + "/api/v3/events/" + orgId + "/" + view[1] + "/FeatureServer/0";
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
    var typeWhere;
    var newOptions = Object.assign({}, options);
    if (type === "cancelled") {
        if (!options.orderByFields) {
            // if orderByFields was passed in, use it, otherwise use appropriate one for cancelled
            newOptions.orderByFields = "EditDate DESC";
        }
        typeWhere = "isCancelled=1 AND status<>'draft'";
    }
    else if (type === "draft") {
        if (!options.orderByFields) {
            newOptions.orderByFields = "EditDate DESC";
        }
        var session = options.authentication;
        var user = session ? session.username : null;
        typeWhere = "Creator = '" + user + "' AND status = 'draft'";
    }
    else {
        if (!options.orderByFields) {
            // if orderByFields was passed in, use it, otherwise use appropriate one for type
            newOptions.orderByFields =
                type === "upcoming" ? "startDate ASC" : "startDate DESC";
        }
        var operator = type === "upcoming" ? ">" : "<=";
        typeWhere = "endDate" + operator + "CURRENT_TIMESTAMP AND (isCancelled<>1 OR isCancelled IS NULL) AND status<>'draft'";
    }
    if (options.where) {
        newOptions.where = options.where + " AND " + typeWhere;
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
    return searchItems(__assign({ q: "typekeywords:hubEventsLayer AND orgid:" + orgId }, requestOptions)).then(function (response) {
        var eventResponse = response;
        if (eventResponse.results && eventResponse.results.length > 0) {
            var result = void 0;
            /* istanbul ignore else  */
            if (eventResponse.results.length === 1) {
                // user only has access to the public view
                result = eventResponse.results[0];
            }
            else if (eventResponse.results.length > 1) {
                // the user has access to the org view and/or the admin view
                // identify which is which
                var obj = eventResponse.results.reduce(function (acc, item) {
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

/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { addFeatures } from '@esri/arcgis-rest-feature-layer';
 * //
 * addFeatures({
 *   url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/ServiceRequest/FeatureServer/0",
 *   features: [{
 *     geometry: { x: -120, y: 45, spatialReference: { wkid: 4326 } },
 *     attributes: { status: "alive" }
 *   }]
 * })
 *   .then(response)
 * ```
 * Add features request. See the [REST Documentation](https://developers.arcgis.com/rest/services-reference/add-features.htm) for more information.
 *
 * @param requestOptions - Options for the request.
 * @returns A Promise that will resolve with the addFeatures response.
 */
function addFeatures(requestOptions) {
    var url = cleanUrl(requestOptions.url) + "/addFeatures";
    // edit operations are POST only
    var options = appendCustomParams(requestOptions, ["features", "gdbVersion", "returnEditMoment", "rollbackOnFailure"], { params: __assign({}, requestOptions.params) });
    return request(url, options);
}

/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { deleteFeatures } from '@esri/arcgis-rest-feature-layer';
 * //
 * deleteFeatures({
 *   url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/ServiceRequest/FeatureServer/0",
 *   objectIds: [1,2,3]
 * });
 * ```
 * Delete features request. See the [REST Documentation](https://developers.arcgis.com/rest/services-reference/delete-features.htm) for more information.
 *
 * @param deleteFeaturesRequestOptions - Options for the request.
 * @returns A Promise that will resolve with the deleteFeatures response.
 */
function deleteFeatures(requestOptions) {
    var url = cleanUrl(requestOptions.url) + "/deleteFeatures";
    // edit operations POST only
    var options = appendCustomParams(requestOptions, [
        "where",
        "objectIds",
        "gdbVersion",
        "returnEditMoment",
        "rollbackOnFailure"
    ], { params: __assign({}, requestOptions.params) });
    return request(url, options);
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
    var queryOptions = __assign({ returnGeometry: true }, requestOptions);
    return queryFeatures(queryOptions).then(function (response) {
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
                .then(function (token) {
                return buildEventResponse(response.features, queryOptions.url, requestOptions, token);
            });
        }
        else {
            return buildEventResponse(response.features, queryOptions.url, requestOptions);
        }
    });
}
function buildEventResponse(features, url, requestOptions, token) {
    var siteIds = [];
    var data = [];
    var included = [];
    var cacheBust = new Date().getTime();
    var siteSearchQuery = "";
    features.forEach(function (event) {
        var attributes = event.attributes;
        var geometry = event.geometry;
        var imageUrl = null;
        if (attributes.imageAttributes) {
            var imageAttributes = JSON.parse(attributes.imageAttributes);
            if (imageAttributes.crop) {
                imageUrl = url + "/" + attributes.OBJECTID + "/attachments/" + imageAttributes.crop + "?v=" + cacheBust;
                if (token) {
                    imageUrl += "&token=" + token;
                }
            }
        }
        data.push({
            id: attributes.OBJECTID,
            type: "events",
            imageUrl: imageUrl,
            attributes: attributes,
            geometry: geometry
        });
        var currentEventSiteId = attributes.siteId;
        if (currentEventSiteId != null &&
            siteIds.indexOf(currentEventSiteId) === -1) {
            siteIds.push(currentEventSiteId);
            siteSearchQuery += siteSearchQuery.length > 0 ? " OR id:" : "id:";
            siteSearchQuery += currentEventSiteId;
        }
    });
    if (siteIds.length === 0) {
        return { included: included, data: data };
    }
    // search for site items and include those in the response
    var searchRequestOptions = requestOptions;
    searchRequestOptions.q = siteSearchQuery;
    return searchItems(searchRequestOptions).then(function (siteInfo) {
        siteInfo.results.forEach(function (siteItem) {
            included.push({
                id: siteItem.id,
                type: "sites",
                // passing along all the site item information would be overkill
                attributes: {
                    id: siteItem.id,
                    url: siteItem.url
                }
            });
        });
        return { included: included, data: data };
    });
}

/* Copyright (c) 2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { registerForEvent } from "@esri/hub-events";
 * //
 * registerForEvent({
 *   groupId,
 *   authentication
 * })
 *   .then(response)
 * ```
 * Register for an ArcGIS Hub event.
 * @param requestOptions - request options that include authentication
 * @returns A Promise that will resolve with the response from the service.
 */
function registerForEvent(requestOptions) {
    return joinGroup({
        id: requestOptions.groupId,
        authentication: requestOptions.authentication
    });
}
/**
 * ```js
 * import { unregisterForEvent } from "@esri/hub-events";
 * //
 * unregisterForEvent({
 *   groupId,
 *   authentication
 * })
 *   .then(response)
 * ```
 * Unregister for an ArcGIS Hub event.
 * @param requestOptions - request options that include authentication
 * @returns A Promise that will resolve with the response from the service.
 */
function unregisterForEvent(requestOptions) {
    return leaveGroup({
        id: requestOptions.groupId,
        authentication: requestOptions.authentication
    });
}

export { addFeatures as a, getEventServiceUrl as b, deleteFeatures as d, getEventQueryFromType as g, queryFeatures as q, registerForEvent as r, searchEvents as s, unregisterForEvent as u };
