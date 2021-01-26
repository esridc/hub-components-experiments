'use strict';

const index$2 = require('./index-859d80b7.js');
const index$3 = require('./index-c635a7b6.js');
const index$4 = require('./index-0c96a340.js');

var apiTypes = index$4.categories.apiTypes.map(function (type) { return type.toLowerCase(); });
// implements the 'hasApi' facet from AGO results. V3 datasets have this property computed
// during the harvesting process but AGO results need this result computed at runtime
function hasApiAgg(agoAggregations) {
    if (agoAggregations === void 0) { agoAggregations = {}; }
    var typeAggs = (index$4.getProp(agoAggregations, "counts") || []).filter(function (agg) { return agg.fieldName === "type"; })[0];
    if (!typeAggs)
        return { hasApi: {} };
    return typeAggs.fieldValues.reduce(function (formattedAggs, fieldVal) {
        if (apiTypes.indexOf(fieldVal.value) > -1) {
            formattedAggs.hasApi.true += fieldVal.count;
        }
        else {
            formattedAggs.hasApi.false += fieldVal.count;
        }
        return formattedAggs;
    }, { hasApi: { true: 0, false: 0 } });
}
//# sourceMappingURL=has-api.js.map

// implements the 'downloadable' facet from AGO results. V3 datasets have this property computed
// during the harvesting process but AGO results need this result computed at runtime
function downloadableAgg(response) {
    // Get counts of true and false for downloadable facet
    // i.e. { true: 10, false: 15 }
    return response.results.reduce(function (formattedAggs, result) {
        if ((result.typeKeywords || []).indexOf("Data") > -1 ||
            index$4.categories.downloadableTypes.indexOf(result.type) > -1) {
            formattedAggs.downloadable.true++;
        }
        else {
            formattedAggs.downloadable.false++;
        }
        return formattedAggs;
    }, { downloadable: { true: 0, false: 0 } });
}
//# sourceMappingURL=downloadable.js.map

// implements the 'collection' facet from AGO results. V3 datasets have this property computed
// during the harvesting process but AGO results need this result computed at runtime
/**
 * Calculate raw counts for collection based on AGO type aggregations
 * @param agoAggregations aggregations from ago results
 */
function collectionAgg(agoAggregations) {
    if (agoAggregations === void 0) { agoAggregations = {}; }
    var typeAggs = (index$4.getProp(agoAggregations, "counts") || []).filter(function (agg) { return agg.fieldName === "type"; })[0];
    if (!typeAggs)
        return { collection: {} };
    return typeAggs.fieldValues.reduce(function (formattedAggs, fieldVal) {
        var category = index$4.getCategory(fieldVal.value);
        var collectionType;
        if (category) {
            // upper case first letter and return as element in array for backwards compatibility
            collectionType = category
                .toLowerCase()
                .split(" ")
                .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); })
                .join(" ");
        }
        else {
            collectionType = "Other";
        }
        formattedAggs.collection[collectionType] = fieldVal.count;
        return formattedAggs;
    }, { collection: {} });
}
//# sourceMappingURL=collection.js.map

// format raw counts for an agg field which has format like
// { hasApi: { 'true': 2, 'false': 4 } } or { downloadable: { 'true': 7, 'false': 0 } }
// into v3 like { hasApi: [{ key: 'false', docCount: 4 }, { key: 'true', docCount: 2 }] }
function format(rawCounts) {
    return Object.keys(rawCounts).reduce(function (formattedAggs, field) {
        formattedAggs[field] = Object.keys(rawCounts[field])
            .reduce(function (formatted, key) {
            formatted.push({ key: key, docCount: rawCounts[field][key] });
            return formatted;
        }, [])
            .sort(compareReverse);
        return formattedAggs;
    }, {});
}
function compareReverse(a, b) {
    return b.docCount > a.docCount ? 1 : -1;
}
//# sourceMappingURL=format.js.map

var agoSupportedAggs = ["tags", "type", "access", "categories"];
var aggsAlias = {
    collection: "type"
};
/**
 * Get aggreations query object that AGO understands i.e. countFields and countSize
 * only on fields supported by AGO
 * @param facets comma separated list of aggregation fields
 */
function createAggs(facets) {
    // return aggs that are supported by AGO - tags, type, access
    var agoFacets = facets
        .split(",")
        .filter(function (facet) { return agoSupportedAggs.indexOf(facet) > -1; });
    var aliases = facets
        .split(",")
        .filter(function (facet) { return Object.keys(aggsAlias).indexOf(facet) > -1; });
    // if there is `collection` in facets, then check if its alias has already been added
    Object.keys(aggsAlias).forEach(function (key) {
        if (aliases.indexOf(key) > -1 && !(aggsAlias[key] in agoFacets)) {
            agoFacets.push(aggsAlias[key]);
        }
    });
    return {
        countFields: agoFacets.join(","),
        countSize: 200 // max supported by AGO
    };
}
//# sourceMappingURL=create-aggs.js.map

/**
 * Flatten categories as expected by Hub
 *
 * @param {any} categoriesAggs categories aggs array as [{ key, docCount }]
 * @returns {any}
 *
 * Input example:
 * [{ key: '/categories/economy', docCount: 4 }, { key: 'categories/economy/business', docCount: 5 }]
 * Output: [{ key: 'economy', docCount: 9 }, { key: 'business', docCount: 5 }]
 */
function flattenCategories(categoriesAggs) {
    if (categoriesAggs === void 0) { categoriesAggs = []; }
    var set = new Set();
    var exclude = ["", "categories"];
    // 1. get a flattened unique set of categories
    categoriesAggs.forEach(function (agg) {
        var candidates = agg.key
            .split("/")
            .filter(function (k) { return exclude.indexOf(k) === -1; });
        candidates.forEach(function (k) {
            set.add(k);
        });
    });
    // 2. sum docCount for unique keys
    var flattenedCategoriesAggs = Array.from(set).reduce(function (flattenedAggs, uniqueKey) {
        var docCount = categoriesAggs
            .filter(function (agg) { return agg.key.includes(uniqueKey); })
            .map(function (agg) { return agg.docCount; })
            .reduce(function (x, y) { return x + y; });
        flattenedAggs.push({
            key: uniqueKey,
            docCount: docCount
        });
        return flattenedAggs;
    }, []);
    return flattenedCategoriesAggs;
}
//# sourceMappingURL=categories.js.map

var legalSortFields = [
    "title",
    "created",
    "type",
    "owner",
    "modified",
    "avgrating",
    "numratings",
    "numcomments",
    "numviews"
];
var hubSortFieldToAGOSortFieldMap = {
    name: "title"
};
function getSortField(field) {
    if (legalSortFields.indexOf(field) >= 0) {
        return field;
    }
    else if (field in hubSortFieldToAGOSortFieldMap) {
        return hubSortFieldToAGOSortFieldMap[field];
    }
}
//# sourceMappingURL=sort.js.map

var filterSchema = {
    orgId: {
        type: "filter",
        dataType: "string",
        defaultOp: "any",
        catalogDefinition: true
    },
    q: { type: "simple" },
    page: { type: "simple" },
    tags: {
        type: "filter",
        dataType: "string",
        defaultOp: "any"
    },
    source: {
        type: "filter",
        dataType: "string",
        defaultOp: "any"
    },
    bbox: { type: "simple" },
    location_name: { type: "simple" },
    sort: { type: "simple" },
    groupIds: {
        type: "filter",
        dataType: "string",
        defaultOp: "any",
        catalogDefinition: true
    },
    catalog: { type: "simple" },
    owner: {
        type: "filter",
        dataType: "string",
        defaultOp: "any"
    },
    access: {
        type: "filter",
        dataType: "string",
        defaultOp: "any"
    },
    type: {
        type: "filter",
        dataType: "string",
        defaultOp: "any"
    },
    hubType: {
        type: "filter",
        dataType: "string",
        defaultOp: "any"
    },
    downloadable: {
        type: "filter",
        dataType: "boolean"
    },
    hasApi: {
        type: "filter",
        dataType: "boolean"
    },
    openData: {
        type: "filter",
        dataType: "boolean"
    },
    id: {
        type: "filter",
        dataType: "string",
        defaultOp: "any",
        catalogDefinition: true
    },
    collection: {
        type: "filter",
        dataType: "string",
        defaultOp: "any"
    },
    sector: {
        type: "filter",
        dataType: "string",
        defaultOp: "any"
    },
    region: {
        type: "filter",
        dataType: "string",
        defaultOp: "any"
    },
    initiativeId: {
        type: "filter",
        dataType: "string",
        defaultOp: "any",
        catalogDefinition: true
    },
    categories: {
        type: "filter",
        dataType: "string",
        defaultOp: "any"
    },
    license: {
        type: "filter",
        dataType: "string",
        defaultOp: "any"
    },
    modified: {
        type: "filter",
        dataType: "string",
        defaultOp: "between"
    }
};
//# sourceMappingURL=filter-schema.js.map

/**
 * Create filters object based on raw params like tags=a,b or tags=any(a,b)
 *
 * @param {ISearchParams} params
 * @returns {any}
 */
// return a standard filter object
// given a query string that looks like this:
//
// ?tags=tag1,tag2&source=source1,source2
//
// This function will return a filter like:
//
// {
//   filter: {
//     tags: {
//       fn: 'all',
//       terms: [ 'tag1', 'tag2' ]
//     },
//     source: {
//       fn: 'any',
//       terms: [ 'source1', 'source2' ]
//     }
//   }
// }
function createFilters(params) {
    if (!params) {
        return {};
    }
    var filter = Object.keys(params).reduce(function (filters, key) {
        var filterDefinition = filterSchema[key] || {};
        if (params[key] &&
            filterDefinition.type === "filter" &&
            filterDefinition.dataType) {
            var values = params[key];
            filters[key] = generateFilter(values, filterDefinition);
        }
        return filters;
    }, {});
    return filter;
}
function generateFilter(values, filterDefinition) {
    var match = values.match(/(any|all|between)\((.+)\)/);
    if (match) {
        return {
            fn: match[1],
            terms: match[2].split(","),
            catalogDefinition: filterDefinition.catalogDefinition
        };
    }
    else {
        return {
            fn: filterDefinition.defaultOp || null,
            terms: values.split(","),
            catalogDefinition: filterDefinition.catalogDefinition
        };
    }
}
//# sourceMappingURL=create-filters.js.map

function encodeFilters(filters) {
    if (filters === void 0) { filters = {}; }
    return Object.keys(filters)
        .map(function (name) {
        var attribute = filters[name];
        var fn = attribute.fn, terms = attribute.terms;
        // filters that are part of the catalog definition are OR'd together then and-ed to the query
        var type = attribute.catalogDefinition ? "catalog" : "filter";
        var key = encodeURIComponent(type + "[" + name + "]");
        var values = terms.map(encodeURIComponent).join(",");
        return fn ? key + "=" + fn + "(" + values + ")" : key + "=" + values;
    })
        .join("&");
}
//# sourceMappingURL=encode-filters.js.map

function buildFilter(queryFilters, key) {
    var terms = index$4.getProp(queryFilters, key + ".terms") || [];
    var joinType = index$4.getProp(queryFilters, key + ".fn");
    // all params to AGO queries MUST be lower case, so we're going to force
    // lowerCase here because we use `orgId` for Hub index, and need it as `orgid`
    // for AGO. This will allow us to use whatever casing for Hub and still
    // adhere to AGO requirements
    var filter;
    if (joinType === "between") {
        var startDate = terms[0];
        var endDate = terms[1];
        if (startDate === endDate) {
            // add 1 day
            endDate = index$4.addDays(startDate, 1);
        }
        var timestamps = [startDate, endDate].map(function (term) {
            return new Date(term).getTime();
        });
        filter = key.toLowerCase() + ": [" + timestamps.join(agoJoin(joinType)) + "]";
    }
    else {
        filter = terms
            .map(function (term) { return key.toLowerCase() + ":\"" + term + "\""; })
            .join(agoJoin(joinType));
    }
    if (joinType === "not") {
        // "not" filter means everything but not those given terms
        filter = "NOT " + filter;
    }
    return "(" + filter + ")";
}
// This function returns the AGO-translation for the query types
// 'any' -> ' OR '
// 'all' => ' AND '
// 'not' => ' NOT '
// ... more filters to come, like the ones below
// 'gt' => ...
// 'lt' => ...
// 'gte' => ...
// 'lte' => ...
// 'range' => ...
function agoJoin(joinType) {
    var key = joinType || "any";
    var joinMap = {
        any: " OR ",
        all: " AND ",
        not: " NOT ",
        between: " TO "
    };
    return joinMap[key];
}
//# sourceMappingURL=build-filter.js.map

// builds the filter for the 'downloadable' facet
function downloadableFilter(queryFilters) {
    var download = (index$4.getProp(queryFilters, "downloadable.terms") || [])[0];
    var downloadFilter;
    var typeKeywordFilter;
    if (download === "true") {
        downloadFilter = index$4.categories.downloadableTypes.map(function (type) {
            return "type:\"" + type + "\"";
        });
        typeKeywordFilter = index$4.categories.downloadableTypeKeywords.map(function (type) {
            return "typekeywords:\"" + type + "\"";
        });
    }
    else {
        downloadFilter = index$4.categories.downloadableTypes.map(function (type) {
            return "-type:\"" + type + "\"";
        });
        typeKeywordFilter = index$4.categories.downloadableTypeKeywords.map(function (type) {
            return "-typekeywords:\"" + type + "\"";
        });
    }
    return "(" + downloadFilter.concat(typeKeywordFilter).join(" OR ") + ")";
}
//# sourceMappingURL=downloadable.js.map

function hasApiFilter(queryFilters) {
    var hasApiTrue = (index$4.getProp(queryFilters, "hasApi.terms") || [])[0];
    var apiFilter;
    if (hasApiTrue) {
        apiFilter = index$4.categories.apiTypes
            .map(function (type) {
            return "type:\"" + type + "\"";
        })
            .join(" OR ");
    }
    else {
        apiFilter = index$4.categories.apiTypes
            .map(function (type) {
            return "-type:\"" + type + "\"";
        })
            .join(" OR ");
    }
    return "(" + apiFilter + ")";
}
//# sourceMappingURL=has-api.js.map

// builds the groupIds filter
function groupIds(queryFilters) {
    var groups = index$4.getProp(queryFilters, "groupIds.terms") || [];
    var groupsFilter = groups
        .map(function (id) {
        return "group:\"" + id + "\"";
    })
        .join(" OR ");
    return "(" + groupsFilter + ")";
}
//# sourceMappingURL=group-ids.js.map

function collectionFilter(queryFilters) {
    var categories = index$4.getProp(queryFilters, "collection.terms") || [];
    var typesArr = categories.map(function (c) { return index$4.getTypes(c); });
    // flatten typesArr
    var filter = typesArr
        .filter(function (types) { return !!types; })
        .reduce(function (singleArr, types) {
        types.forEach(function (type) {
            singleArr.push("type:\"" + type + "\"");
        });
        return singleArr;
    }, [])
        .join(" OR ");
    return "(" + filter + ")";
}
//# sourceMappingURL=collection.js.map

// custom filter functions
var customFilters = {
    downloadable: downloadableFilter,
    hasApi: hasApiFilter,
    groupIds: groupIds,
    collection: collectionFilter
};
function isCustomFilter(filter) {
    return !!customFilters[filter];
}
/**
 * Convert filter object into AGO filter string
 * @param queryFilters filter object created by create-filters like { tags: { fn: 'all', terms: ['a'] } }
 */
function handleFilter(queryFilters) {
    var catalogDefinition = [];
    var otherFilters = [];
    Object.keys(queryFilters).forEach(function (key) {
        var clause;
        if (isCustomFilter(key)) {
            clause = customFilters[key](queryFilters, key);
        }
        else {
            clause = buildFilter(queryFilters, key);
        }
        if (queryFilters[key].catalogDefinition) {
            catalogDefinition.push(clause);
        }
        else {
            otherFilters.push(clause);
        }
    });
    if (catalogDefinition.length) {
        var catalogClause = "(" + catalogDefinition.join(" OR ") + ")";
        if (otherFilters.length) {
            return catalogClause + " AND (" + otherFilters.join(" AND ") + ")";
        }
        else {
            return catalogClause;
        }
    }
    else if (otherFilters.length) {
        return otherFilters.join(" AND ");
    }
    else {
        return "";
    }
}
//# sourceMappingURL=handle-filter.js.map

/**
 * Url-encoding of search params. This function is generic enough to encode a deeply nested object
 * ```
 * Example:
 * Input: { a: { b: 2 }, c: 3 }
 * Output: 'a[b]=2&c=3'
 * ```
 * @param {Any} params (query params from hub indexer)
 * @returns {String}
 */
function encodeParams(params) {
    if (params === void 0) { params = {}; }
    // get raw paths
    var paths = getPaths(params);
    var flatPaths = paths.filter(function (path) {
        return typeof index$4.getProp(params, path.join(".")) !== "object";
    });
    var parts = [];
    // for each nested path, we want to surround it with `[]`
    // i.e. if a path is like ['a', 'b'], we want encoding as 'a[b]=2' given the input object { a: { b: 2 }, c: 3 }
    flatPaths.forEach(function (path) {
        var str = "";
        for (var i = 0; i < path.length; i++) {
            if (i === 0) {
                str += path[i];
            }
            else {
                str += "[" + path[i] + "]";
            }
        }
        var right = encodeURIComponent(index$4.getProp(params, path.join(".")) || "");
        var left = encodeURIComponent(str);
        if (right) {
            parts.push(left + "=" + right);
        }
        return str;
    });
    var serialized = parts.join("&");
    return serialized;
}
/**
 * Get all paths to properties of an object as an array of arrays
 * where each array is a path to a property in the nested object
 * ```
 * Example:
 * Input: { a: { b: 2 }, c: 3 }
 * Output: [['a'], ['a', 'b'], ['c']]
 * ```
 * @param {Any} root the input object
 * @returns {String}
 */
function getPaths(root) {
    if (root === void 0) { root = {}; }
    var paths = [];
    var nodes = [
        {
            obj: root,
            path: []
        }
    ];
    var _loop_1 = function () {
        var n = nodes.pop();
        Object.keys(n.obj).forEach(function (k) {
            if (typeof n.obj[k] === "object") {
                var path = n.path.concat(k);
                paths.push(path);
                nodes.unshift({
                    obj: n.obj[k],
                    path: path
                });
            }
            else {
                paths.push(n.path.concat(k));
            }
        });
    };
    while (nodes.length > 0) {
        _loop_1();
    }
    return paths;
}
//# sourceMappingURL=encode-params.js.map

/**
 * Construct a query object with filters, and queryParams sent by hub indexer
 * @param queryObject any
 */
function encodeAgoQuery(queryParams) {
    if (queryParams === void 0) { queryParams = {}; }
    var query = {
        q: null,
        start: index$4.getProp(queryParams, "page.start") || 1,
        num: index$4.getProp(queryParams, "page.size") || 10
    };
    // start with 'implicit' query filters
    var queryParts = ['-type:"code attachment"'];
    if (queryParams.restricted) {
        queryParts.push("-access:public");
    }
    // Build the potentially enourmous 'q' parameter. In future use SearchQueryBuilder from arcgis-rest-js
    if (queryParams.q) {
        queryParts.push(queryParams.q);
    }
    if (queryParams.catalog) {
        var filter = createFilters(queryParams.catalog);
        queryParts.push(handleFilter(filter));
    }
    var implicitFilters = createFilters(queryParams);
    // queryParams filter is an obj with key<string>: value<string> where value is serialized as 'all(a,b)'
    // so parse each filter string into fn and terms
    var explicitFilters = createFilters(queryParams.filter);
    var filters = index$2.__assign(index$2.__assign({}, implicitFilters), explicitFilters);
    if (Object.keys(filters).length) {
        // add each parsed filter object into ago query
        queryParts.push(handleFilter(filters));
    }
    // cleanse queryParts by removing blank strings
    queryParts = queryParts.filter(function (qp) { return !!qp; });
    query.q = queryParts.join(" AND ");
    if (queryParams.bbox) {
        query.bbox = queryParams.bbox;
    }
    if (queryParams.sort) {
        var sortOrder = queryParams.sort[0] === "-" ? "desc" : "asc";
        // AGO supports sorting on only 1 field at a time
        var sortField = sortOrder === "desc"
            ? queryParams.sort.substring(1).split(",")[0]
            : queryParams.sort.split(",")[0];
        sortField = getSortField(sortField);
        if (sortField) {
            query.sortField = sortField;
            query.sortOrder = sortOrder;
        }
    }
    if (queryParams.agg && queryParams.agg.fields) {
        // fields may be passed as array of fields, rather than comma-separated string
        // if so join fields to string, else leave as is
        var fields = void 0;
        if (Array.isArray(queryParams.agg.fields)) {
            fields = queryParams.agg.fields.join(",");
        }
        else {
            fields = queryParams.agg.fields;
        }
        var _a = createAggs(fields), countFields = _a.countFields, countSize = _a.countSize;
        query.countFields = countFields;
        query.countSize = countSize;
    }
    return query;
}
//# sourceMappingURL=encode-ago-query.js.map

var MAX_COUNTFIELDS = 3;
// Search for Items in ArcGIS and return raw ago response
function getItems(params, token, portal, authentication) {
    return index$2.__awaiter(this, void 0, void 0, function () {
        var agoParams, chunkedCountFields, promises, responses, allCounts, _i, responses_1, response, counts;
        return index$2.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    agoParams = encodeAgoQuery(params);
                    if (!agoParams.countFields) return [3 /*break*/, 2];
                    chunkedCountFields = index$4.chunkArray(agoParams.countFields.split(","), MAX_COUNTFIELDS).map(function (fieldArrayChunk) { return fieldArrayChunk.join(","); });
                    promises = chunkedCountFields.map(function (chunk) {
                        return index$3.searchItems(index$2.__assign(index$2.__assign({}, agoParams), { params: {
                                token: token,
                                countFields: chunk,
                                countSize: agoParams.countSize
                            }, portal: portal,
                            authentication: authentication }));
                    });
                    return [4 /*yield*/, Promise.all(promises)];
                case 1:
                    responses = _a.sent();
                    allCounts = [];
                    for (_i = 0, responses_1 = responses; _i < responses_1.length; _i++) {
                        response = responses_1[_i];
                        counts = index$4.getProp(response, "aggregations.counts") || [];
                        allCounts = allCounts.concat(counts);
                    }
                    responses[0].aggregations = {
                        counts: allCounts
                    };
                    return [2 /*return*/, responses[0]];
                case 2: return [2 /*return*/, index$3.searchItems(index$2.__assign(index$2.__assign({}, agoParams), { params: {
                            token: token,
                            countFields: agoParams.countFields,
                            countSize: agoParams.countSize
                        }, portal: portal,
                        authentication: authentication }))];
            }
        });
    });
}
//# sourceMappingURL=get-items.js.map

// these custom aggs are based on a field that are not supported by AGO aggregations
var customAggsNotSupportedByAgo = ["downloadable"];
// these custom aggs are based on a field that are supported by AGO aggregations
var customAggsSupportedByAgo = ["hasApi", "collection"];
var customAggsFunctions = {
    downloadable: downloadableAgg,
    hasApi: hasApiAgg,
    collection: collectionAgg
};
/**
 * Calculate item facets based on ago aggregations and/or compute custom aggregations not supported by AGO
 *
 * @param {any} agoAggregations aggregations from AGO
 * @param {ISearchParams} params search params
 * @param {String} token AGO token to make a search if calculating custom aggs like downloadable
 * @param {String} portal AGO portal against which search is being done
 * @param {UserSession} authentication UserSession object
 * @returns {Promise<any>}
 */
function computeItemsFacets(agoAggregations, // aggregations from ago search that ago supports by default
params, // query params are needed to another search for custom facets
token, portal, authentication) {
    if (agoAggregations === void 0) { agoAggregations = { counts: Array() }; }
    return index$2.__awaiter(this, void 0, void 0, function () {
        var aggFields, aggs, customAggs, facets1, paramsCopy, response_1, facets2, facets3, computedFacets;
        return index$2.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    aggFields = index$4.getProp(params, "agg.fields");
                    aggs = aggFields ? aggFields.split(",") : [];
                    customAggs = intersection(aggs, customAggsNotSupportedByAgo);
                    facets1 = {};
                    if (!(customAggs.length > 0)) return [3 /*break*/, 2];
                    paramsCopy = index$2.__assign(index$2.__assign({}, params), { start: 1, num: 100 });
                    paramsCopy.agg = {};
                    return [4 /*yield*/, getItems(paramsCopy, token, portal, authentication)];
                case 1:
                    response_1 = _a.sent();
                    customAggs.forEach(function (customAgg) {
                        var rawCounts = customAggsFunctions[customAgg](response_1);
                        facets1 = index$2.__assign(index$2.__assign({}, facets1), format(rawCounts));
                    });
                    _a.label = 2;
                case 2:
                    facets2 = agoAggregations.counts.reduce(function (formattedAggs, agg) {
                        formattedAggs[agg.fieldName] = agg.fieldValues.map(function (fieldVal) {
                            return {
                                key: fieldVal.value,
                                docCount: fieldVal.count
                            };
                        });
                        return formattedAggs;
                    }, {});
                    // 3. for custom aggs that are based on some field included in ago aggs
                    customAggs = intersection(aggs, customAggsSupportedByAgo);
                    facets3 = {};
                    if (customAggs.length > 0) {
                        customAggs.forEach(function (customAgg) {
                            var rawCounts = index$2.__assign({}, customAggsFunctions[customAgg](agoAggregations));
                            facets3 = index$2.__assign(index$2.__assign({}, facets3), format(rawCounts));
                        });
                    }
                    computedFacets = index$2.__assign(index$2.__assign(index$2.__assign({}, facets1), facets2), facets3);
                    // 4. format categories facet
                    if (computedFacets.categories) {
                        computedFacets.categories = flattenCategories(computedFacets.categories);
                    }
                    return [2 /*return*/, computedFacets];
            }
        });
    });
}
function intersection(arr1, arr2) {
    return arr1.filter(function (val) { return arr2.indexOf(val) !== -1; });
}
//# sourceMappingURL=compute-items-facets.js.map

function calcHighlights(input, query, property) {
    // 1. identify all the matches case insensitively
    // 2. Replace the original match(es) with mark tags
    // We want to match case insensitively but highlight case sensitively the original term
    // E.g. input string: `Capital bike share... blah blah capital.... CAPITAL`
    // We would like to highlight: `Capital`, `capital`, `CAPITAL`
    if (!input)
        return undefined;
    try {
        var matches = input.match(new RegExp(query, "ig")); // search globally and case insensitively
        if (!matches)
            return undefined;
        return matches.reduce(injectHighlightMarkdown(property), input);
    }
    catch (err) {
        // the most likely error is that the RegExp could not be compiled, eg: query=*
        // this is not catastrophic failure
        return undefined;
    }
}
function injectHighlightMarkdown(property) {
    return function (highlights, match) {
        // match is what appears as is in the input string
        var replacement = "<mark class=\"hub-search-highlight " + property + "-highlight\">" + match + "</mark>";
        // replace the case sensitive match with mark tags
        return highlights.replace(new RegExp(match, "g"), replacement);
    };
}
//# sourceMappingURL=highlights.js.map

function formatItem(item, query) {
    var formattedItem = {
        id: item.id,
        type: "item",
        attributes: formatItemAttributes(item)
    };
    if (query) {
        // create highlights since AGO does not return them
        formattedItem.meta = {};
        formattedItem.meta.highlights = highlights(item, query);
    }
    return formattedItem;
}
function formatItemAttributes(item) {
    var hubType = index$4.getCategory(item.type);
    var additionalAttrs = {
        // computed or null attributes so items & datasets look the same
        name: item.title,
        searchDescription: item.description,
        hubType: hubType || "Other",
        collection: index$4.getTypeCategories(item),
        extent: formatExtent(item.extent)
    };
    return index$2.__assign(index$2.__assign({}, item), additionalAttrs);
}
function formatExtent(extent) {
    return {
        coordinates: extent,
        type: "envelope"
    };
}
function highlights(item, query) {
    // calculate highlights based on AGO restricted item, hence use description field but return as `searchDescription`
    // because the search-result/component expects searchDescription
    return {
        name: calcHighlights(item.title, query, "name"),
        searchDescription: calcHighlights(item.description, query, "description")
    };
}
//# sourceMappingURL=format-item.js.map

// This function is responsible for formatting results from the AGO API into the JSONAPI collection format
function agoFormatItemCollection(searchResults, facets, params) {
    if (facets === void 0) { facets = {}; }
    var queryParams = index$2.__assign({}, params);
    return {
        data: searchResults.results.map(function (result) {
            return formatItem(result, queryParams.q);
        }),
        meta: {
            query: searchResults.query,
            queryParameters: queryParams,
            stats: {
                aggs: facets,
                count: searchResults.results.length,
                totalCount: searchResults.total
            },
            page: {
                start: searchResults.start,
                size: searchResults.num,
                nextStart: searchResults.nextStart
            }
        }
    };
}
//# sourceMappingURL=format-item-collection.js.map

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Search for Items in ArcGIS, compute facets and format the response into V3 like datasets
 *
 * @export
 * @param {ISearchParams} params (query params from hub indexer)
 * @param {UserSession} authentication
 * @returns {Promise<ISearchResult>}
 */
function agoSearch(params, token, portal, authentication) {
    return index$2.__awaiter(this, void 0, void 0, function () {
        var agoResponse, facets, model;
        return index$2.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getItems(params, token, portal, authentication)];
                case 1:
                    agoResponse = _a.sent();
                    return [4 /*yield*/, computeItemsFacets(agoResponse.aggregations, params, token, portal)];
                case 2:
                    facets = _a.sent();
                    model = agoFormatItemCollection(agoResponse, facets, params);
                    return [2 /*return*/, model];
            }
        });
    });
}
//# sourceMappingURL=search.js.map

/**
 * ```
 * serialize raw query parameters into hub specific URI encoding
 * Example:
 * Input: { q: 'crime', tags: 'a,b,c', sort: 'name' }
 * Output: 'q=crime&tags=all(a,b,c)&sort=name'
 * ```
 * @export
 * @param {ISearchParams} searchParams
 * @returns {string}
 */
function serialize(searchParams) {
    // 1. handle filterable params like tags, source, hasApi, groupIds since they follow custom logic
    var filters = createFilters(searchParams);
    var encodedFilters = encodeFilters(filters);
    // 2. handle non-filters like q, sort etc which have <string: string> type and also nested types like page, agg.
    // extract non-filterable fields from search params
    var nonFilterKeys = Object.keys(searchParams).filter(function (param) { return !isFilterable(param); });
    var nonFilterSearchParams = {};
    nonFilterKeys.forEach(function (key) {
        nonFilterSearchParams[key] = searchParams[key];
    });
    var encodedNonFilters = encodeParams(nonFilterSearchParams);
    var parts = [];
    // don't include blank strings in the URI encoding
    if (encodedNonFilters)
        parts.push(encodedNonFilters);
    if (encodedFilters)
        parts.push(encodedFilters);
    return parts.join("&");
}
function isFilterable(field) {
    return filterSchema[field] && filterSchema[field].type === "filter";
}
//# sourceMappingURL=serialize.js.map

exports.agoSearch = agoSearch;
exports.serialize = serialize;
