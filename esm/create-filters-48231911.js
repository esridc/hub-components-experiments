const filterSchema = {
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
    const filter = Object.keys(params).reduce((filters, key) => {
        const filterDefinition = filterSchema[key] || {};
        if (params[key] &&
            filterDefinition.type === "filter" &&
            filterDefinition.dataType) {
            const values = params[key];
            filters[key] = generateFilter(values, filterDefinition);
        }
        return filters;
    }, {});
    return filter;
}
function generateFilter(values, filterDefinition) {
    const match = values.match(/(any|all|between)\((.+)\)/);
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

export { createFilters as c, filterSchema as f };
