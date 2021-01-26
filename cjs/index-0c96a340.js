'use strict';

require('./index-859d80b7.js');
const index$3 = require('./index-c635a7b6.js');

/**
 * Parse the portal url, and if it matches one of the AGO
 * Url patterns, return the correct Hub Url
 * If portalUrl does not match an AGO pattern, this will
 * return `undefined`
 * @param portalUrl
 */
function _getHubUrlFromPortalHostname(portalUrl) {
    var result = undefined;
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
//# sourceMappingURL=_get-hub-url-from-portal-hostname.js.map

/**
 * ```js
 * import { getHubApiUrl() } from "@esri/hub-common";
 * //
 * getHubApiUrl({ portal: "https://custom.maps.arcgis.com/sharing/rest" })
 * >> "https://hub.arcgis.com"
 * ```
 * Retrieves the Hub API Url associated with a specific ArcGIS Online organization.
 * @param requestOptions - request options that may include authentication
 * @returns the associated Hub API Url as a string.
 */
function getHubApiUrl(requestOptions) {
    return _getHubUrlFromPortalHostname(index$3.getPortalUrl(requestOptions));
}
//# sourceMappingURL=api.js.map

var app = [
    "Application",
    "Dashboard",
    "Form",
    "Insights Page",
    "Insights Workbook",
    "Operation View",
    "Web Mapping Application",
    "StoryMap",
    "Web Experience"
];
var dataset = [
    "CSV Collection",
    "CSV",
    "Feature Collection Template",
    "Feature Collection",
    "Feature Layer",
    "Feature Service",
    "File Geodatabase",
    "GeoJSON",
    "GeoJson",
    "KML Collection",
    "KML",
    "Microsoft Excel",
    "Raster Layer",
    "Shapefile",
    "Stream Service",
    "Table"
];
var document = [
    "CAD Drawing",
    "Document Link",
    "Hub Page",
    "Site Page",
    "Image",
    "iWork Keynote",
    "iWork Numbers",
    "iWork Pages",
    "Microsoft Powerpoint",
    "Microsoft Visio",
    "Microsoft Word",
    "PDF",
    "Pro Map",
    "Report Template"
];
var event = ["Hub Event"];
var initiative = ["Hub Initiative"];
var map = [
    "City Engine Web Scene",
    "CityEngine Web Scene",
    "Image Collection",
    "Image Service",
    "Map Service Layer",
    "Map Service",
    "Scene Service",
    "Vector Tile Service",
    "Web Map Service",
    "Web Map Tile Service",
    "Web Map",
    "Web Scene",
    "WFS",
    "WMS"
];
var other = [
    "360 VR Experience",
    "AppBuilder Widget Package",
    "Application Configuration",
    "ArcPad Package",
    "Code Attachment",
    "Code Sample",
    "Desktop Add In",
    "Desktop Application Template",
    "Desktop Application",
    "Desktop Style",
    "Explorer Add In",
    "Explorer Layer",
    "Geocoding Service",
    "Geometry Service",
    "Geoprocessing Package",
    "Geoprocessing Sample",
    "Geoprocessing Service",
    "Layer File",
    "Layer Package",
    "Layer Template",
    "Layer",
    "Layout",
    "Locator Package",
    "Map Area",
    "Map Document",
    "Map Package",
    "Map Service Definition",
    "Map Template",
    "Mobile Application",
    "Mobile Map Package",
    "Native Application",
    "Network Analysis Service",
    "Operations Dashboard Add In",
    "Project Package",
    "Project Template",
    "Raster Function Template",
    "Rule Package",
    "Scene Package",
    "Service Definition",
    "SQLite Geodatabase",
    "Style",
    "Tile Package",
    "Vector Tile Package",
    "Workflow Manager Package"
];
var site = ["Hub Site Application", "Site Application"];
// eligible types are listed here: http://doc.arcgis.com/en/arcgis-online/reference/supported-items.htm
var downloadableTypes = [
    "360 VR Experience",
    "Application",
    "CityEngine Web Scene",
    "Code Sample",
    "CSV Collection",
    "CSV",
    "CAD Drawing",
    "Desktop Application",
    "Desktop Application Template",
    "Desktop Style",
    "File Geodatabase",
    "GeoJson",
    "Geoprocessing Package",
    "Geoprocessing Sample",
    "Image",
    "iWork Keynote",
    "iWork Numbers",
    "KML Collection",
    "KML",
    "Layer",
    "Layer File",
    "Layer Package",
    "Layout",
    "Locator Package",
    "Map Package",
    "Map Service Definition",
    "Map Template",
    "Microsoft Excel",
    "Microsoft Powerpoint",
    "Microsoft Visio",
    "Microsoft Word",
    "Operations Dashboard Add In",
    "PDF",
    "Pro Map",
    "Project Package",
    "Project Template",
    "Raster function template",
    "Rule Package",
    "Service Definition",
    "Shapefile",
    "Vector Tile Package",
    "Workflow Manager Package"
];
var downloadableTypeKeywords = ["Data"];
var apiTypes = ["Feature Service", "Map Service", "Image Service"];
var categories = {
    app: app,
    dataset: dataset,
    document: document,
    event: event,
    initiative: initiative,
    map: map,
    other: other,
    site: site,
    downloadableTypes: downloadableTypes,
    downloadableTypeKeywords: downloadableTypeKeywords,
    apiTypes: apiTypes
};
//# sourceMappingURL=categories.js.map

/* Copyright (c) 2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
var cache = {};
/**
 * ```js
 * import { getCategory } from "@esri/hub-common";
 * //
 * getCategory('Feature Layer')
 * > 'dataset'
 * ```
 * To do.
 * @param itemType The ArcGIS [item type](https://developers.arcgis.com/rest/users-groups-and-items/items-and-item-types.htm).
 * @returns the category of a given item type.
 */
function getCategory(itemType) {
    if (itemType === void 0) { itemType = ""; }
    if (cache[itemType]) {
        return cache[itemType];
    }
    for (var _i = 0, _a = Object.keys(categories); _i < _a.length; _i++) {
        var category = _a[_i];
        for (var _b = 0, _c = categories[category]; _b < _c.length; _b++) {
            var type = _c[_b];
            if (itemType.toLowerCase() === type.toLowerCase()) {
                cache[itemType] = category;
                return category;
            }
        }
    }
}
/**
 * ```js
 * import { getTypes } from "@esri/hub-common";
 * //
 * getTypes('site')
 * > [ 'hub site application' ]
 * ```
 * To do.
 * @param category The ArcGIS Hub category.
 * @returns all the item types for the given category.
 *
 */
function getTypes(category) {
    if (category === void 0) { category = ""; }
    return categories[category.toLowerCase()];
}
/**
 * ```js
 * import { getType } from "@esri/hub-common";
 * //
 * getType(item)
 * > [ 'Hub Site Application' ]
 * ```
 * @param item Item object.
 * @returns type of the input item.
 *
 */
function getType(item) {
    if (item === void 0) { item = {}; }
    var typeKeywords = item.typeKeywords || [];
    if (item.type === "Web Mapping Application") {
        if (typeKeywords.includes("hubSite")) {
            return "Hub Site Application";
        }
        else if (typeKeywords.includes("hubPage")) {
            return "Hub Page";
        }
    }
    return item.type;
}
/**
 * ```js
 * import { getTypeCategories } from "@esri/hub-common";
 * //
 * getTypeCategories(item)
 * > [ 'Hub Site Application' ]
 * ```
 * @param item Item object.
 * @returns typeCategory of the input item.
 *
 */
function getTypeCategories(item) {
    if (item === void 0) { item = {}; }
    var type = getType(item);
    var category = getCategory(type);
    if (category) {
        // upper case first letter and return as element in array for backwards compatibility
        var chars = Array.from(category);
        chars[0] = chars[0].toUpperCase();
        return [chars.join("")];
    }
    else {
        return ["Other"];
    }
}
//# sourceMappingURL=content.js.map

/**
 * Get a property out of a deeply nested object
 * Does not handle anything but nested object graph
 */
function getProp(obj, path) {
    return path.split(".").reduce(function (prev, curr) {
        /* istanbul ignore next no need to test undefined scenario */
        return prev ? prev[curr] : undefined;
    }, obj);
}
//# sourceMappingURL=get-prop.js.map

/* Copyright (c) 2018-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { cloneObject } from "@esri/hub-common";
 * const original = { foo: "bar" }
 * const copy = cloneObject(original)
 * copy.foo // "bar"
 * copy === original // false
 * ```
 * Make a deep clone, including arrays. Does not handle functions!
 */
function cloneObject(obj) {
    var clone = {};
    // first check array
    if (Array.isArray(obj)) {
        clone = obj.map(cloneObject);
    }
    else if (typeof obj === "object") {
        for (var i in obj) {
            if (obj[i] != null && typeof obj[i] === "object") {
                clone[i] = cloneObject(obj[i]);
            }
            else {
                clone[i] = obj[i];
            }
        }
    }
    else {
        clone = obj;
    }
    return clone;
}
/**
 * Determines if a value is unique in an array
 * Allows for code like:
 *
 * ```js
 * const ary = [ 1, 2, 3, 3, 4, 5, 1 ];
 *
 * const result = ary.filter(unique);
 *
 * result => [ 1, 2, 3, 4, 5 ]
 * ```
 * @param value - the value to search for
 * @param index - the index of the searched value
 * @param ary - the array to search
 * @returns {boolean} - indicating if the value is unique in the array
 */
function unique(value, index, ary) {
    return ary.indexOf(value) === index;
}
/**
 * Add number of days to a given date
 *
 * @export
 * @param {string} date
 * @param {number} numOfDays
 * @returns {string} date string with numOfDays added to the given date
 */
function addDays(date, numOfDays) {
    try {
        var given = new Date(date);
        var dateString = new Date(given.setDate(given.getDate() + numOfDays)).toISOString();
        return dateString.split("T")[0];
    }
    catch (e) {
        throw new Error("Invalid Date");
    }
}
/**
 * Returns an array with arrays of the given size.
 *
 * @param arr Array to split
 * @param size Size of every group
 */
function chunkArray(arr, size) {
    var results = [];
    var index = 0;
    while (index < arr.length) {
        results.push(arr.slice(index, index + size));
        index += size;
    }
    return results;
}
//# sourceMappingURL=util.js.map

/**
 * Gets the full item/data model for an item
 * @param {string} id Id of the item to fetch
 * @param {Object} requestOptions
 */
function getModel(id, requestOptions) {
    return Promise.all([
        index$3.getItem(id, requestOptions),
        index$3.getItemData(id, requestOptions)
    ]).then(function (result) {
        // shape this into a model
        return {
            item: result[0],
            data: result[1]
        };
    });
}
//# sourceMappingURL=get-model.js.map

exports.addDays = addDays;
exports.categories = categories;
exports.chunkArray = chunkArray;
exports.cloneObject = cloneObject;
exports.getCategory = getCategory;
exports.getHubApiUrl = getHubApiUrl;
exports.getModel = getModel;
exports.getProp = getProp;
exports.getTypeCategories = getTypeCategories;
exports.getTypes = getTypes;
exports.unique = unique;
