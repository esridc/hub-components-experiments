declare type TelemetryLabel = {
  id: string;
  notes?: string;
};
declare type TelemetryAction = {
  id: string;
  notes?: string;
  labels: {
    [key: string]: TelemetryLabel;
  };
};
declare type TelemetryCategory = {
  id: string;
  notes?: string;
  actions: {
    [key: string]: TelemetryAction;
  };
};
declare class SearchCategoryClass implements TelemetryCategory {
  id: "Search";
  actions: {
    categorySelect: {
      id: "category select";
      labels: {};
      notes: "called via algolia autocomplete callback";
    };
    filter: {
      id: "Filter";
      labels: {
        open: {
          id: "open";
        };
        close: {
          id: "close";
        };
        apply: {
          id: "apply";
        };
      };
      notes: "user added a filter to search query";
    };
    locationQuery: {
      id: "location query";
      labels: {};
      notes: "called via algolia autocomplete callback";
    };
    locationSearchClick: {
      id: "location-search-click";
      labels: {};
      notes: "clicked something when conducting search with bbox";
    };
    searchClick: {
      id: "search-click";
      labels: {};
      notes: "clicked something after conducting a search";
    };
  };
}
declare class EngagementCategoryClass implements TelemetryCategory {
  id: "Engagement";
  actions: {
    download: {
      id: "Download";
      labels: {
        open: {
          id: "Open";
        };
      };
      notes: "";
    };
  };
}
export declare let telemetryDictionary: {
  Search: SearchCategoryClass;
  Engagement: EngagementCategoryClass;
};
export {};
