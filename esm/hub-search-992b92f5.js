import { _ as _convertItemToContent, a as _convertHubv3ToContent } from './hub-content-ba4934ea.js';
import { g as genericSearch, s as searchItems } from './search-b0ff9cfb.js';
import { c as createFilters, f as filterSchema } from './create-filters-48231911.js';
import { g as getProp } from './get-prop-a0541ce0.js';

/* Copyright (c) 2018-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { searchGroups } from "@esri/arcgis-rest-portal";
 * //
 * searchGroups('water')
 *   .then(response) // response.total => 355
 * ```
 * Search a portal for groups. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/group-search.htm) for more information.
 *
 * @param search - A string or RequestOptions object to pass through to the endpoint.
 * @returns A Promise that will resolve with the data from the response.
 */
function searchGroups(search) {
    return genericSearch(search, "group");
}
/**
 * ```js
 * import { searchGroupContent } from "@esri/arcgis-rest-portal";
 * //
 * searchGroupContent('water')
 *   .then(response) // response.total => 355
 * ```
 * Search a portal for items in a group. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/group-content-search.htm) for more information.
 *
 * @param options - RequestOptions object amended with search parameters.
 * @returns A Promise that will resolve with the data from the response.
 */
function searchGroupContent(options) {
    return genericSearch(options, "groupContent");
}

function encodeFilters(filters = {}) {
    return Object.keys(filters)
        .map(name => {
        const attribute = filters[name];
        const { fn, terms } = attribute;
        // filters that are part of the catalog definition are OR'd together then and-ed to the query
        const type = attribute.catalogDefinition ? "catalog" : "filter";
        const key = encodeURIComponent(`${type}[${name}]`);
        const values = terms.map(encodeURIComponent).join(",");
        return fn ? `${key}=${fn}(${values})` : `${key}=${values}`;
    })
        .join("&");
}

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
function encodeParams(params = {}) {
    // get raw paths
    const paths = getPaths(params);
    const flatPaths = paths.filter(path => {
        return typeof getProp(params, path.join(".")) !== "object";
    });
    const parts = [];
    // for each nested path, we want to surround it with `[]`
    // i.e. if a path is like ['a', 'b'], we want encoding as 'a[b]=2' given the input object { a: { b: 2 }, c: 3 }
    flatPaths.forEach(path => {
        let str = "";
        for (let i = 0; i < path.length; i++) {
            if (i === 0) {
                str += path[i];
            }
            else {
                str += `[${path[i]}]`;
            }
        }
        const right = encodeURIComponent(getProp(params, path.join(".")) || "");
        const left = encodeURIComponent(str);
        if (right) {
            parts.push(`${left}=${right}`);
        }
        return str;
    });
    const serialized = parts.join("&");
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
function getPaths(root = {}) {
    const paths = [];
    const nodes = [
        {
            obj: root,
            path: []
        }
    ];
    while (nodes.length > 0) {
        const n = nodes.pop();
        Object.keys(n.obj).forEach(k => {
            if (typeof n.obj[k] === "object") {
                const path = n.path.concat(k);
                paths.push(path);
                nodes.unshift({
                    obj: n.obj[k],
                    path
                });
            }
            else {
                paths.push(n.path.concat(k));
            }
        });
    }
    return paths;
}

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
    const filters = createFilters(searchParams);
    const encodedFilters = encodeFilters(filters);
    // 2. handle non-filters like q, sort etc which have <string: string> type and also nested types like page, agg.
    // extract non-filterable fields from search params
    const nonFilterKeys = Object.keys(searchParams).filter(param => !isFilterable(param));
    const nonFilterSearchParams = {};
    nonFilterKeys.forEach(key => {
        nonFilterSearchParams[key] = searchParams[key];
    });
    const encodedNonFilters = encodeParams(nonFilterSearchParams);
    const parts = [];
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

// TODO: Change hubRequestOptions to better handle different Hub & Portal endpoints (Prod/QA/Enterprise/etc.)
async function search(queryParams, hubRequestOptions) {
  console.log("hub-search search: queryParams", [queryParams, hubRequestOptions]);
  if (hubRequestOptions === undefined
    || (hubRequestOptions !== undefined && hubRequestOptions.isPortal)) {
    return await searchPortal(queryParams, hubRequestOptions);
  }
  else {
    return await searchHub(queryParams, hubRequestOptions);
  }
}
// https://developers.arcgis.com/rest/users-groups-and-items/search.htm
async function searchPortal(queryParams, hubRequestOptions) {
  var _a;
  console.log("searchPortal", [queryParams, hubRequestOptions]);
  // TODO: Consider better ways to map terms across multiple parameters
  queryParams.sort = (queryParams.sort || 'modified').replace(/name/, 'title');
  let query = [];
  if (queryParams.q === undefined || ((_a = queryParams.q) === null || _a === void 0 ? void 0 : _a.length) === 0) {
    queryParams.q = "*";
  }
  query.push(queryParams.q);
  if (queryParams.owner) {
    query.push(`owner:${queryParams.owner}`);
  }
  // Portal splits "sort=-name" into "sortField=name&sortOrder=desc"
  // Supported sort field names are title, created, type, owner, modified, avgrating, numratings, numcomments, and numviews.
  let sortField = queryParams.sort;
  let sortOrder = queryParams.order || "asc";
  let match = queryParams.sort.match(/^-/);
  if (match !== null) {
    sortField = match[1];
    sortOrder = "desc";
  }
  // TODO: clean up "group search" routing
  if (queryParams.customParams !== undefined
    && queryParams.customParams.group !== undefined) {
    return searchGroupContent({
      groupId: queryParams.customParams.group.id,
      q: query.join(' AND '),
      num: queryParams.limit || "10",
      sortField: sortField,
      sortOrder: sortOrder,
      params: {
        categories: queryParams.customParams.group.categories
      }
    }).then((results) => {
      return new Promise((resolve, _reject) => {
        const output = results.results.map(item => _convertItemToContent({ item: item }));
        resolve({ results: output });
      });
    });
  }
  // Normal, non-group-specific search
  if (queryParams.groups !== undefined && queryParams.groups.length > 0) {
    const groupQuery = queryParams.groups.map(group => `group:${group}`).join(" OR ");
    query.push(`(${groupQuery})`);
  }
  console.debug("hub-search searchPortal: queryParams", [queryParams, hubRequestOptions]);
  return searchItems({
    q: query.join(' AND '),
    num: queryParams.limit || "10",
    sortField: sortField,
    sortOrder: sortOrder,
    authentication: hubRequestOptions === null || hubRequestOptions === void 0 ? void 0 : hubRequestOptions.authentication
  }).then((results) => {
    return new Promise((resolve, _reject) => {
      const output = results.results.map(item => _convertItemToContent({ item: item }));
      resolve({ results: output, meta: { total: results.total, count: results.num, start: results.start } });
    });
  });
}
// https://gist.github.com/hamhands/b6d1f0f514678b88cdc01070bf006263
async function searchHub(queryParams, _hubRequestOptions) {
  queryParams.sort = (queryParams.sort || 'modified').replace(/title/, 'name');
  // Search query params that ArcGIS Hub expects
  const params = {
    q: queryParams.q,
    sort: queryParams.sort,
    agg: { fields: "tags,collection,owner,source,hasApi,downloadable", size: queryParams.limit }
  };
  params.page = { key: btoa(JSON.stringify({
      hub: {
        start: 1,
        size: queryParams.limit
      },
      ago: {
        start: 1,
        size: queryParams.limit
      }
    })) };
  if (queryParams.groups !== undefined && queryParams.groups.length > 0) {
    params.groupIds = queryParams.groups.join(",");
  }
  // const token = 'xxxYYY' // AGO token
  // const portal = 'https://www.arcgis.com/sharing/rest'
  // const headers = { authorization: token, portal }
  const serializedParams = serialize(params);
  // Query hub v3's new search endpoint
  let json = await fetch(`${_hubRequestOptions.hubApiUrl}/api/v3/search?${serializedParams}`, {});
  let results = await json.json();
  let output = results.data.map(_convertHubv3ToContent);
  return { results: output };
  // return HubSearch.agoSearch({q: query});
}

export { search as a, searchGroups as b, searchGroupContent as s };
