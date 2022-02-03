let SearchCategory = {
  id: "Search",
  actions: {
    categorySelect: {
      id: "category select",
      labels: {},
      notes: "called via algolia autocomplete callback",
    },
    filter: {
      id: "Filter",
      labels: {
        open: { id: "open" },
        close: { id: "close" },
        apply: { id: "apply" }
      },
      notes: "user added a filter to search query",
    },
    locationQuery: {
      id: "location query",
      labels: {},
      notes: "called via algolia autocomplete callback",
    },
    locationSearchClick: {
      id: "location-search-click",
      labels: {},
      notes: "clicked something when conducting search with bbox",
    },
    searchClick: {
      id: "search-click",
      labels: {},
      notes: "clicked something after conducting a search",
    },
  }
};
let EngagementCategory = {
  id: "Engagement",
  actions: {
    download: {
      id: "Download",
      labels: {
        open: {
          id: "Open"
        }
      },
      notes: "",
    },
  },
};
let tc;
// Register opening a filter
console.log({
  category: tc.Search.id,
  action: tc.Search.actions.filter.id,
  label: tc.Search.actions.filter.labels.close.id
});
// Validate incorrect action
console.log({
  category: tc.Search.id,
  action: tc.Search.actions.Filter.id,
  label: tc.Search.actions.Filter.labels.close.id
});
//////
class SearchCategoryClass {
}
class EngagementCategoryClass {
}
export let telemetryDictionary = {
  Search: new SearchCategoryClass,
  Engagement: new EngagementCategoryClass
};
// Register opening a filter
// console.log( {
//     category: telemetryDictionary.Search.id,
//     action: telemetryDictionary.Search.actions.filter.id,
//     label: telemetryDictionary.Search.actions.filter.labels.close.id
//   }    
// )
// // Validate incorrect action
// console.log( {
//   category: telemetryDictionary.Search.id,
//   action: telemetryDictionary.Search.actions.Filter.id,
//   label: telemetryDictionary.Search.actions.Filter.labels.close.id
// }    
// )
