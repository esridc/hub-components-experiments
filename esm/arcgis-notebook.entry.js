import { r as registerInstance, h, H as Host } from './index-9fca3863.js';
import { b as getItemGroups, g as getItem, a as getItemData } from './get-9aed8a75.js';
import { g as getUser } from './get-user-65c98cff.js';
import { c as createItem } from './create-3b288502.js';
import { g as getProp } from './get-prop-a0541ce0.js';
import { c as createFilters } from './create-filters-48231911.js';
import { a as addDays, c as chunkArray } from './util-ddc75513.js';
import { c as categories, g as getCategory, a as getTypes, b as getTypeCategories } from './content-16805b54.js';
import { s as searchItems } from './search-b0ff9cfb.js';
import { a as authenticateUser } from './utils-49410b4c.js';
import { U as UserSession } from './UserSession-1faae0f0.js';
import './clean-url-83c51f70.js';
import './get-portal-url-fdc441e5.js';

const apiTypes = categories.apiTypes.map((type) => type.toLowerCase());
// implements the 'hasApi' facet from AGO results. V3 datasets have this property computed
// during the harvesting process but AGO results need this result computed at runtime
function hasApiAgg(agoAggregations = {}) {
    const typeAggs = (getProp(agoAggregations, "counts") || []).filter((agg) => agg.fieldName === "type")[0];
    if (!typeAggs)
        return { hasApi: {} };
    return typeAggs.fieldValues.reduce((formattedAggs, fieldVal) => {
        if (apiTypes.indexOf(fieldVal.value) > -1) {
            formattedAggs.hasApi.true += fieldVal.count;
        }
        else {
            formattedAggs.hasApi.false += fieldVal.count;
        }
        return formattedAggs;
    }, { hasApi: { true: 0, false: 0 } });
}

// implements the 'downloadable' facet from AGO results. V3 datasets have this property computed
// during the harvesting process but AGO results need this result computed at runtime
function downloadableAgg(response) {
    // Get counts of true and false for downloadable facet
    // i.e. { true: 10, false: 15 }
    return response.results.reduce((formattedAggs, result) => {
        if ((result.typeKeywords || []).indexOf("Data") > -1 ||
            categories.downloadableTypes.indexOf(result.type) > -1) {
            formattedAggs.downloadable.true++;
        }
        else {
            formattedAggs.downloadable.false++;
        }
        return formattedAggs;
    }, { downloadable: { true: 0, false: 0 } });
}

// implements the 'collection' facet from AGO results. V3 datasets have this property computed
// during the harvesting process but AGO results need this result computed at runtime
/**
 * Calculate raw counts for collection based on AGO type aggregations
 * @param agoAggregations aggregations from ago results
 */
function collectionAgg(agoAggregations = {}) {
    const typeAggs = (getProp(agoAggregations, "counts") || []).filter((agg) => agg.fieldName === "type")[0];
    if (!typeAggs)
        return { collection: {} };
    return typeAggs.fieldValues.reduce((formattedAggs, fieldVal) => {
        const category = getCategory(fieldVal.value);
        let collectionType;
        if (category) {
            // upper case first letter and return as element in array for backwards compatibility
            collectionType = category
                .toLowerCase()
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
        }
        else {
            collectionType = "Other";
        }
        formattedAggs.collection[collectionType] = fieldVal.count;
        return formattedAggs;
    }, { collection: {} });
}

// format raw counts for an agg field which has format like
// { hasApi: { 'true': 2, 'false': 4 } } or { downloadable: { 'true': 7, 'false': 0 } }
// into v3 like { hasApi: [{ key: 'false', docCount: 4 }, { key: 'true', docCount: 2 }] }
function format(rawCounts) {
    return Object.keys(rawCounts).reduce((formattedAggs, field) => {
        formattedAggs[field] = Object.keys(rawCounts[field])
            .reduce((formatted, key) => {
            formatted.push({ key, docCount: rawCounts[field][key] });
            return formatted;
        }, [])
            .sort(compareReverse);
        return formattedAggs;
    }, {});
}
function compareReverse(a, b) {
    return b.docCount > a.docCount ? 1 : -1;
}

const agoSupportedAggs = ["tags", "type", "access", "categories"];
const aggsAlias = {
    collection: "type"
};
/**
 * Get aggreations query object that AGO understands i.e. countFields and countSize
 * only on fields supported by AGO
 * @param facets comma separated list of aggregation fields
 */
function createAggs(facets) {
    // return aggs that are supported by AGO - tags, type, access
    const agoFacets = facets
        .split(",")
        .filter((facet) => agoSupportedAggs.indexOf(facet) > -1);
    const aliases = facets
        .split(",")
        .filter((facet) => Object.keys(aggsAlias).indexOf(facet) > -1);
    // if there is `collection` in facets, then check if its alias has already been added
    Object.keys(aggsAlias).forEach((key) => {
        if (aliases.indexOf(key) > -1 && !(aggsAlias[key] in agoFacets)) {
            agoFacets.push(aggsAlias[key]);
        }
    });
    return {
        countFields: agoFacets.join(","),
        countSize: 200 // max supported by AGO
    };
}

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
function flattenCategories(categoriesAggs = []) {
    const set = new Set();
    const exclude = ["", "categories"];
    // 1. get a flattened unique set of categories
    categoriesAggs.forEach((agg) => {
        const candidates = agg.key
            .split("/")
            .filter((k) => exclude.indexOf(k) === -1);
        candidates.forEach((k) => {
            set.add(k);
        });
    });
    // 2. sum docCount for unique keys
    const flattenedCategoriesAggs = Array.from(set).reduce((flattenedAggs, uniqueKey) => {
        const docCount = categoriesAggs
            .filter((agg) => agg.key.includes(uniqueKey))
            .map((agg) => agg.docCount)
            .reduce((x, y) => x + y);
        flattenedAggs.push({
            key: uniqueKey,
            docCount
        });
        return flattenedAggs;
    }, []);
    return flattenedCategoriesAggs;
}

const legalSortFields = [
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
const hubSortFieldToAGOSortFieldMap = {
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

function buildFilter(queryFilters, key) {
    const terms = getProp(queryFilters, `${key}.terms`) || [];
    const joinType = getProp(queryFilters, `${key}.fn`);
    // all params to AGO queries MUST be lower case, so we're going to force
    // lowerCase here because we use `orgId` for Hub index, and need it as `orgid`
    // for AGO. This will allow us to use whatever casing for Hub and still
    // adhere to AGO requirements
    let filter;
    if (joinType === "between") {
        const startDate = terms[0];
        let endDate = terms[1];
        if (startDate === endDate) {
            // add 1 day
            endDate = addDays(startDate, 1);
        }
        const timestamps = [startDate, endDate].map((term) => new Date(term).getTime());
        filter = `${key.toLowerCase()}: [${timestamps.join(agoJoin(joinType))}]`;
    }
    else {
        filter = terms
            .map((term) => `${key.toLowerCase()}:"${term}"`)
            .join(agoJoin(joinType));
    }
    if (joinType === "not") {
        // "not" filter means everything but not those given terms
        filter = `NOT ${filter}`;
    }
    return `(${filter})`;
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
    const key = joinType || "any";
    const joinMap = {
        any: " OR ",
        all: " AND ",
        not: " NOT ",
        between: " TO "
    };
    return joinMap[key];
}

// builds the filter for the 'downloadable' facet
function downloadableFilter(queryFilters) {
    const download = (getProp(queryFilters, "downloadable.terms") || [])[0];
    let downloadFilter;
    let typeKeywordFilter;
    if (download === "true") {
        downloadFilter = categories.downloadableTypes.map((type) => {
            return `type:"${type}"`;
        });
        typeKeywordFilter = categories.downloadableTypeKeywords.map((type) => {
            return `typekeywords:"${type}"`;
        });
    }
    else {
        downloadFilter = categories.downloadableTypes.map((type) => {
            return `-type:"${type}"`;
        });
        typeKeywordFilter = categories.downloadableTypeKeywords.map((type) => {
            return `-typekeywords:"${type}"`;
        });
    }
    return `(${downloadFilter.concat(typeKeywordFilter).join(" OR ")})`;
}

function hasApiFilter(queryFilters) {
    const hasApiTrue = (getProp(queryFilters, "hasApi.terms") || [])[0];
    let apiFilter;
    if (hasApiTrue) {
        apiFilter = categories.apiTypes
            .map((type) => {
            return `type:"${type}"`;
        })
            .join(" OR ");
    }
    else {
        apiFilter = categories.apiTypes
            .map((type) => {
            return `-type:"${type}"`;
        })
            .join(" OR ");
    }
    return `(${apiFilter})`;
}

// builds the groupIds filter
function groupIds(queryFilters) {
    const groups = getProp(queryFilters, "groupIds.terms") || [];
    const groupsFilter = groups
        .map((id) => {
        return `group:"${id}"`;
    })
        .join(" OR ");
    return `(${groupsFilter})`;
}

function collectionFilter(queryFilters) {
    const categories = getProp(queryFilters, "collection.terms") || [];
    const typesArr = categories.map((c) => getTypes(c));
    // flatten typesArr
    const filter = typesArr
        .filter((types) => !!types)
        .reduce((singleArr, types) => {
        types.forEach(type => {
            singleArr.push(`type:"${type}"`);
        });
        return singleArr;
    }, [])
        .join(" OR ");
    return `(${filter})`;
}

// custom filter functions
const customFilters = {
    downloadable: downloadableFilter,
    hasApi: hasApiFilter,
    groupIds,
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
    const catalogDefinition = [];
    const otherFilters = [];
    Object.keys(queryFilters).forEach(key => {
        let clause;
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
        const catalogClause = `(${catalogDefinition.join(" OR ")})`;
        if (otherFilters.length) {
            return `${catalogClause} AND (${otherFilters.join(" AND ")})`;
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

/**
 * Construct a query object with filters, and queryParams sent by hub indexer
 * @param queryObject any
 */
function encodeAgoQuery(queryParams = {}) {
    const query = {
        q: null,
        start: getProp(queryParams, "page.start") || 1,
        num: getProp(queryParams, "page.size") || 10
    };
    // start with 'implicit' query filters
    let queryParts = ['-type:"code attachment"'];
    if (queryParams.restricted) {
        queryParts.push("-access:public");
    }
    // Build the potentially enourmous 'q' parameter. In future use SearchQueryBuilder from arcgis-rest-js
    if (queryParams.q) {
        queryParts.push(queryParams.q);
    }
    if (queryParams.catalog) {
        const filter = createFilters(queryParams.catalog);
        queryParts.push(handleFilter(filter));
    }
    const implicitFilters = createFilters(queryParams);
    // queryParams filter is an obj with key<string>: value<string> where value is serialized as 'all(a,b)'
    // so parse each filter string into fn and terms
    const explicitFilters = createFilters(queryParams.filter);
    const filters = Object.assign(Object.assign({}, implicitFilters), explicitFilters);
    if (Object.keys(filters).length) {
        // add each parsed filter object into ago query
        queryParts.push(handleFilter(filters));
    }
    // cleanse queryParts by removing blank strings
    queryParts = queryParts.filter(qp => !!qp);
    query.q = queryParts.join(" AND ");
    if (queryParams.bbox) {
        query.bbox = queryParams.bbox;
    }
    if (queryParams.sort) {
        const sortOrder = queryParams.sort[0] === "-" ? "desc" : "asc";
        // AGO supports sorting on only 1 field at a time
        let sortField = sortOrder === "desc"
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
        let fields;
        if (Array.isArray(queryParams.agg.fields)) {
            fields = queryParams.agg.fields.join(",");
        }
        else {
            fields = queryParams.agg.fields;
        }
        const { countFields, countSize } = createAggs(fields);
        query.countFields = countFields;
        query.countSize = countSize;
    }
    return query;
}

const MAX_COUNTFIELDS = 3;
// Search for Items in ArcGIS and return raw ago response
async function getItems(params, token, portal, authentication) {
    const agoParams = encodeAgoQuery(params);
    if (agoParams.countFields) {
        const chunkedCountFields = chunkArray(agoParams.countFields.split(","), MAX_COUNTFIELDS).map((fieldArrayChunk) => fieldArrayChunk.join(","));
        const promises = chunkedCountFields.map((chunk) => {
            return searchItems(Object.assign(Object.assign({}, agoParams), { params: {
                    token,
                    countFields: chunk,
                    countSize: agoParams.countSize,
                }, portal,
                authentication, httpMethod: "POST" }));
        });
        const responses = await Promise.all(promises);
        let allCounts = [];
        for (const response of responses) {
            const counts = getProp(response, "aggregations.counts") || [];
            allCounts = allCounts.concat(counts);
        }
        responses[0].aggregations = {
            counts: allCounts,
        };
        return responses[0];
    }
    else {
        return searchItems(Object.assign(Object.assign({}, agoParams), { params: {
                token,
                countFields: agoParams.countFields,
                countSize: agoParams.countSize,
            }, portal, httpMethod: "POST", authentication }));
    }
}

// these custom aggs are based on a field that are not supported by AGO aggregations
const customAggsNotSupportedByAgo = ["downloadable"];
// these custom aggs are based on a field that are supported by AGO aggregations
const customAggsSupportedByAgo = ["hasApi", "collection"];
const customAggsFunctions = {
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
async function computeItemsFacets(agoAggregations = { counts: Array() }, // aggregations from ago search that ago supports by default
params, // query params are needed to another search for custom facets
token, portal, authentication) {
    const aggFields = getProp(params, "agg.fields");
    const aggs = aggFields ? aggFields.split(",") : [];
    // 1. For custom aggregations like downloadable, which AGO does not support,
    // we need to fetch 100 results and calc aggs on them
    let customAggs = intersection(aggs, customAggsNotSupportedByAgo);
    let facets1 = {};
    if (customAggs.length > 0) {
        const paramsCopy = Object.assign(Object.assign({}, params), { start: 1, num: 100 });
        paramsCopy.agg = {};
        const response = await getItems(paramsCopy, token, portal, authentication);
        customAggs.forEach(customAgg => {
            const rawCounts = customAggsFunctions[customAgg](response);
            facets1 = Object.assign(Object.assign({}, facets1), format(rawCounts));
        });
    }
    // 2. for agoAggregations already provided which are sorted, just format them into v3 style
    const facets2 = agoAggregations.counts.reduce((formattedAggs, agg) => {
        formattedAggs[agg.fieldName] = agg.fieldValues.map((fieldVal) => {
            return {
                key: fieldVal.value,
                docCount: fieldVal.count
            };
        });
        return formattedAggs;
    }, {});
    // 3. for custom aggs that are based on some field included in ago aggs
    customAggs = intersection(aggs, customAggsSupportedByAgo);
    let facets3 = {};
    if (customAggs.length > 0) {
        customAggs.forEach(customAgg => {
            const rawCounts = Object.assign({}, customAggsFunctions[customAgg](agoAggregations));
            facets3 = Object.assign(Object.assign({}, facets3), format(rawCounts));
        });
    }
    const computedFacets = Object.assign(Object.assign(Object.assign({}, facets1), facets2), facets3);
    // 4. format categories facet
    if (computedFacets.categories) {
        computedFacets.categories = flattenCategories(computedFacets.categories);
    }
    return computedFacets;
}
function intersection(arr1, arr2) {
    return arr1.filter(val => arr2.indexOf(val) !== -1);
}

function calcHighlights(input, query, property) {
    // 1. identify all the matches case insensitively
    // 2. Replace the original match(es) with mark tags
    // We want to match case insensitively but highlight case sensitively the original term
    // E.g. input string: `Capital bike share... blah blah capital.... CAPITAL`
    // We would like to highlight: `Capital`, `capital`, `CAPITAL`
    if (!input)
        return undefined;
    try {
        const matches = input.match(new RegExp(query, "ig")); // search globally and case insensitively
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
    return (highlights, match) => {
        // match is what appears as is in the input string
        const replacement = `<mark class="hub-search-highlight ${property}-highlight">${match}</mark>`;
        // replace the case sensitive match with mark tags
        return highlights.replace(new RegExp(match, "g"), replacement);
    };
}

// helper functions to make items look more like datasets
function formatItem(item, query) {
    const formattedItem = {
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
    const hubType = getCategory(item.type);
    const additionalAttrs = {
        // computed or null attributes so items & datasets look the same
        name: item.title,
        searchDescription: item.description,
        hubType: hubType || "Other",
        collection: getTypeCategories(item),
        extent: formatExtent(item.extent)
    };
    return Object.assign(Object.assign({}, item), additionalAttrs);
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

// This function is responsible for formatting results from the AGO API into the JSONAPI collection format
function agoFormatItemCollection(searchResults, facets = {}, params) {
    const queryParams = Object.assign({}, params);
    return {
        data: searchResults.results.map(result => {
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
async function agoSearch(params, token, portal, authentication) {
    const agoResponse = await getItems(params, token, portal, authentication);
    const facets = await computeItemsFacets(agoResponse.aggregations, params, token, portal);
    const model = agoFormatItemCollection(agoResponse, facets, params);
    return model;
}

let HubService = {
  // TODO: accept service URL and user session?
  create(type) {
    switch (type) {
      case 'portal': return new PortalContent;
      case 'hub': return new HubContent;
    }
  }
};
class PortalContent {
  constructor() {
    this.portalUrl = "https://www.arcgis.com/share/rest/";
  }
  canEdit(_itemId, _username) {
    return Promise.all([getItemGroups(_itemId), getUser(_username)])
      .then(([itemGroups, userInfo]) => {
      // This is just checking membership to any intersecting group
      // TODO: only check for admin/member/other? groups with update
      let intersect = itemGroups.member.filter(x => userInfo.groups.includes(x));
      return intersect.length > 0;
    });
  }
  search(_query) {
    return agoSearch({
      q: _query
    });
  }
  ;
  create(itemParams, authentication) {
    return createItem({
      item: itemParams,
      authentication
    });
  }
  get(itemId) {
    return Promise.all([getItem(itemId), getItemData(itemId)])
      .then(([itemInfo, itemData]) => {
      itemInfo.data = itemData;
      return itemInfo;
    });
    // .catch(reject)
  }
  update(_itemId, _resourceParams) {
    return new Promise((_resolve, reject) => reject(false));
  }
  delete(_itemId) {
    return new Promise((_resolve, reject) => reject(false));
  }
}
class HubContent {
  constructor() {
    this.hubUrl = "https://hub.arcgis.com/api/v3";
  }
  canEdit(_itemId, _username) {
    return fetch(`${this.hubUrl}/content/${_itemId}`, {
      method: "GET"
    }).then(response => {
      if (response.status == 200) {
        return true;
      }
      else {
        return false;
      }
    });
  }
  async search(_query) {
    const response = await fetch(`${this.hubUrl}/search`, {
      method: 'GET',
      body: JSON.stringify(_query)
    });
    return response.json();
  }
  ;
  create(itemParams, authentication) {
    delete itemParams.id;
    delete itemParams.owner;
    delete itemParams.orgId;
    return createItem({
      item: itemParams,
      authentication
    });
  }
  get(itemId) {
    return Promise.all([getItem(itemId), getItemData(itemId)])
      .then(([itemInfo, itemData]) => {
      itemInfo.data = itemData;
      return itemInfo;
    });
    // .catch(reject)
  }
  update(_itemId, _resourceParams) {
    return new Promise((_resolve, reject) => reject(false));
  }
  delete(_itemId) {
    return new Promise((_resolve, reject) => reject(false));
  }
}
// export class Notebook extends HubResource {
//     create(resourceParams): string {
//     }
// }
// ------------------------------------------------------------
// let environment = "portal"
// let clientAPI;
// switch(environment) {
//     case("portal"): {
//         clientAPI = EnterpriseSites;
//         break;
//     }
//     case("hub"): {
//         clientAPI = HubOnline;
//         break;
//     }
// }
// clientAPI.canEdit('4ef', 'pmakerson')

const arcgisNotebookCss = ":host{display:block;width:100%;height:100%}iframe{border:none;width:100%;height:100%}.notebook-copy-button{float:right;margin:10px 33px 0 0}.notebook-title{margin-left:33px;float:left}";

let ArcgisNotebook = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Notebook Item ID from ArcGIS Online or Enterprise
     * Required
     */
    this.item = "";
    /**
     * Notebook can include other Javascript libraries
     * Useful for some charting libraries (e.g. Vega Altair)
     * But may be a security concern.
     * Default: true
     */
    this.allowScripts = true;
    /**
     * Show the notebook preview (live/non-edit) or Edit
     * Note: Edit currently blocked by ArcGIS security restrictions
     *
     */
    this.view = "preview";
    /**
     * Optional ClientID to identify the app launching authentication
     * Only required if accessing restricted notebooks
     */
    this.clientid = "";
    /**
     * ArcGIS Online or Enterprise URL
     *
     */
    this.portal = "https://www.arcgis.com";
    this.sandboxSettings = ["allow-same-origin"];
  }
  componentWillLoad() {
    if (this.allowScripts) {
      this.sandboxSettings.push("allow-scripts");
    }
  }
  componentDidLoad() {
    if (this.view == "edit") {
      this.getEdit();
    }
    else {
      this.getPreview();
    }
    let hub = HubService.create('hub');
    hub.get(this.item).then((item) => {
      console.log("Notebook", item);
      this.notebook = item;
      //@ts-ignore
      this.titleEl.innerText = item.title;
    });
  }
  getEdit() {
    const editUrl = `${this.portal}/home/notebook/notebook.html?id=${this.item}`;
    console.debug("ArcGIS Notebook getEdit", editUrl);
    this.iFrameEl.src = editUrl;
  }
  getPreview() {
    const resourceName = "notebook_preview.json";
    const previewUrl = `${this.portal}/sharing/rest/content/items/${this.item}/resources/${resourceName}`;
    console.log("Notebook getPreview", previewUrl);
    fetch(previewUrl).then((response) => {
      response.json().then(json => {
        // remove CSS border
        const idx = json.html.indexOf("<body>") + 6;
        json.html =
          json.html.slice(0, idx) +
            "<style>#notebook-container { box-shadow: none; -webkit-box-shadow: none; padding: 0; }</style>" +
            json.html.slice(idx);
        // Write the HTML into the body of the iFrame
        const doc = this.iFrameEl.contentWindow.document;
        doc.open();
        doc.write(json.html);
        doc.close();
      });
    }).catch((e) => {
      console.error("Error in arcgis-notebook getPreview", e);
    });
  }
  onCopy(_e) {
    return authenticateUser(this.clientid, this.portal).then(session => {
      this.session = session;
      return this.copyNotebook();
    });
  }
  copyNotebook() {
    console.log("onCopy starting", this.notebook);
    let hub = HubService.create('hub');
    hub.create(this.notebook, UserSession.deserialize(this.session)).then((response) => {
      console.log("onCopy Done", response);
    });
  }
  // onCopy(itemId:string) {
  //   console.log("onCopy", this.portal)
  //   return authenticateUser(this.clientid, this.portal).then(session => {
  //     this.session = session;
  //     return this.copyItem(itemId);
  //   })
  // }  
  // copyItem(itemId:string) {
  //   let hub = HubAPI.HubService.create('hub');
  //   hub.get(itemId).then((item) => {
  //     console.log("onCopy starting", item)
  //     hub.create(
  //       item, 
  //       UserSession.deserialize(this.session)
  //     ).then((response) => {
  //         console.log("onCopy Done", response)
  //     })  
  //   });
  // } 
  render() {
    return (h(Host, null, h("h3", { id: "notebook-title", ref: (el) => this.titleEl = el }), h("span", { class: "notebook-title" }, h("slot", { name: "title" })), h("hub-button", { class: "notebook-copy-button", color: "dark", text: "Copy Notebook", action: this.onCopy }), h("iframe", { sandbox: this.sandboxSettings.join(" "), src: "", id: "notebook-iframe", ref: (el) => this.iFrameEl = el })));
  }
};
ArcgisNotebook.style = arcgisNotebookCss;

export { ArcgisNotebook as arcgis_notebook };
