'use strict';

/**
 * Checks whether a value exists in the given array
 * @param array The array
 * @param val The value
 */
function includes(array, val) {
    return array.indexOf(val) !== -1;
}

const app$1 = [
    "Application",
    "City Engine Web Scene",
    "CityEngine Web Scene",
    "Dashboard",
    "Insights Page",
    "Insights Workbook",
    "Operation View",
    "Web Mapping Application",
    "StoryMap",
    "Web Experience",
    "Urban Model",
];
const dataset$1 = [
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
    "Table",
];
const document$1 = [
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
    "Notebook",
    "PDF",
    "Pro Map",
    "Report Template",
];
const event$1 = ["Hub Event"];
const feedback$1 = ["Form", "Quick Capture Project"];
const initiative$1 = ["Hub Initiative"];
const solution = ["Solution"];
const template = ["Hub Initiative Template"];
const map$1 = [
    "Image Collection",
    "Image Service",
    "Map Service Layer",
    "Map Service",
    "Scene Service",
    "Scene Layer",
    "Vector Tile Service",
    "Web Map Service",
    "Web Map Tile Service",
    "Web Map",
    "Web Scene",
    "WFS",
    "WMS",
    "WMTS",
];
const other$1 = [
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
    "Workflow Manager Package",
];
const site$1 = ["Hub Site Application", "Site Application"];
const collections = {
    app: app$1,
    dataset: dataset$1,
    document: document$1,
    event: event$1,
    feedback: feedback$1,
    initiative: initiative$1,
    template,
    solution,
    map: map$1,
    other: other$1,
    site: site$1,
};

const { app, dataset, document, event, feedback, initiative, map, other, site, } = collections;
const downloadableTypes = [
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
    "Notebook",
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
    "Workflow Manager Package",
];
const downloadableTypeKeywords = ["Data"];
const apiTypes = ["Feature Service", "Map Service", "Image Service"];
// TODO: remove this at next breaking version
// we're just keeping this for backwards compatibility
const categories = {
    app: app.concat(feedback),
    dataset,
    document,
    event,
    initiative,
    map,
    other,
    site,
    downloadableTypes,
    downloadableTypeKeywords,
    apiTypes,
};

const cache = {};
// TODO: remove this at next breaking version
/**
 * ```js
 * import { getCategory } from "@esri/hub-common";
 * //
 * getCategory('Feature Layer')
 * > 'dataset'
 * ```
 * **DEPRECATED: Use getCollection() instead**
 * returns the Hub category for a given item type
 * @param itemType The ArcGIS [item type](https://developers.arcgis.com/rest/users-groups-and-items/items-and-item-types.htm).
 * @returns the category of a given item type.
 */
function getCategory(itemType = "") {
    /* tslint:disable no-console */
    console.warn("DEPRECATED: Use getCollection() instead. getCategory will be removed at v9.0.0");
    /* tslint:enable no-console */
    const collection = getCollection(itemType);
    // for backwards compatibility
    return collection === "feedback" ? "app" : collection;
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
function getTypes(category = "") {
    return categories[category.toLowerCase()];
}
/**
 * ```js
 * import { normalizeItemType } from "@esri/hub-common";
 * //
 * normalizeItemType(item)
 * > [ 'Hub Site Application' ]
 * ```
 * @param item Item object.
 * @returns type of the input item.
 *
 */
function normalizeItemType(item = {}) {
    let ret = item.type;
    const typeKeywords = item.typeKeywords || [];
    if (item.type === "Site Application" ||
        (item.type === "Web Mapping Application" &&
            includes(typeKeywords, "hubSite"))) {
        ret = "Hub Site Application";
    }
    if (item.type === "Site Page" ||
        (item.type === "Web Mapping Application" &&
            includes(typeKeywords, "hubPage"))) {
        ret = "Hub Page";
    }
    if (item.type === "Hub Initiative" &&
        includes(typeKeywords, "hubInitiativeTemplate")) {
        ret = "Hub Initiative Template";
    }
    if (item.type === "Web Mapping Application" &&
        includes(typeKeywords, "hubSolutionTemplate")) {
        ret = "Solution";
    }
    return ret;
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
function getTypeCategories(item = {}) {
    const type = normalizeItemType(item);
    const category = getCategory(type);
    if (category) {
        // upper case first letter and return as element in array for backwards compatibility
        const chars = Array.from(category);
        chars[0] = chars[0].toUpperCase();
        return [chars.join("")];
    }
    else {
        return ["Other"];
    }
}
/**
 * ```js
 * import { getCollection } from "@esri/hub-common";
 * //
 * getCollection('Feature Layer')
 * > 'dataset'
 * ```
 * Get the Hub collection for a given item type
 * @param itemType The ArcGIS [item type](https://developers.arcgis.com/rest/users-groups-and-items/items-and-item-types.htm).
 * @returns the Hub collection of a given item type.
 */
function getCollection(itemType = "") {
    if (cache[itemType]) {
        return cache[itemType];
    }
    for (const collection of Object.keys(collections)) {
        for (const type of collections[collection]) {
            if (itemType.toLowerCase() === type.toLowerCase()) {
                cache[itemType] = collection;
                return collection;
            }
        }
    }
}

exports.categories = categories;
exports.getCategory = getCategory;
exports.getTypeCategories = getTypeCategories;
exports.getTypes = getTypes;
