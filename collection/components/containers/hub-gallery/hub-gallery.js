import { Component, Host, h, State, Listen, Prop } from '@stencil/core';
import * as HubSearch from '../../../utils/hub-search';
import * as HubSite from '../../../utils/hub-site';
import { UserSession } from '@esri/arcgis-rest-auth';
import * as HubTeams from '../../../utils/hub-team';
import * as HubMembers from '../../../utils/hub-member';
import * as HubTypes from '../../../utils/hub-types';
import { readSessionFromCookie, truncateString } from '../../../utils/utils';
export class HubGallery {
  constructor() {
    /**
     * Hub site URL to scope for search
     */
    this.site = null;
    /**
     * Groups to limit search
     */
    this.groups = null;
    /**
     * Choose to show or hide search
     */
    this.showsearch = true;
    /**
     * Search Button text
     */
    this.searchbutton = "Start Search";
    /**
     * Search placeholder text
     */
    this.searchplaceholder = "Search for content";
    /**
     * Text to show in the button
     */
    this.buttontext = "Explore";
    /**
     * Default Query
     */
    this.query = "";
    /**
     * Which Resources to search
     */
    this.hubtype = "content";
    /**
     * Default sort order
     */
    this.sort = "name";
    /**
     * Maximum number of results to return
     */
    this.limit = 12;
    /**
     * Hub site URL to scope for search
     */
    this.layout = "horizontal";
    /**
     * Use the Hub API (true) or the Portal API (false)
     */
    this.hubapi = false;
    this.portal = "https://www.arcgis.com";
    this.clientid = "WXC842NRBVB6NZ2r";
    this.session = null;
    this.suggestions = [];
    this.results = [];
    this.catalog = null;
  }
  queryInputHandler(event) {
    console.log("hub-gallery: queryInputHandler", event);
    this.queryInput = event.detail;
    // this.fetchResults(this.queryInput)
    return 'true';
  }
  querySelectHandler(event) {
    console.log("hub-gallery: querySelectHandler", event);
    this.queryInput = event.detail;
    this.results = [];
    this.updateGallery(this.queryInput);
    return 'true';
  }
  componentWillLoad() {
    this.session = readSessionFromCookie();
    console.log("hub-gallery load: session", this.session);
    this.queryInput = this.query;
    if (this.site) {
      HubSite.getSiteCatalog(this.site).then((catalog) => {
        this.catalog = catalog;
      });
    }
    else {
      // Don't wait to update
      this.updateGallery(this.queryInput);
    }
  }
  async updateGallery(query, customParams) {
    let auth = (this.session !== undefined && this.session !== null) ? UserSession.deserialize(this.session) : null;
    console.log("hub-gallery updateGallery: [query, hubtype, auth]", [query, this.hubtype, auth]);
    switch (this.hubtype) {
      case 'teams':
        let teams = await HubTeams.searchTeams(query);
        this.results = teams.results;
        break;
      case 'members':
        let members = await HubMembers.searchMembers(query, auth);
        this.results = members.results;
        break;
      default:
        let searchParams = {
          q: query,
          limit: this.limit,
          sort: this.sort
        };
        // TODO: make this more robuts
        if (customParams !== undefined) {
          searchParams.customParams = customParams;
        }
        if (this.catalog) {
          searchParams.groups = this.catalog.groups;
        }
        else if (this.groups !== undefined && this.groups.length > 0) {
          searchParams.groups = this.groups.split(",");
        }
        console.log("hub-gallery updateGallery: [searchParams, customParams] ", [searchParams, customParams]);
        let results = await HubSearch.search(searchParams, {
          isPortal: !this.hubapi,
          hubApiUrl: "https://hub.arcgis.com",
          authentication: auth
        });
        console.log("hub-gallery updateGallery: [results] ", [results]);
        this.results = results.results;
      // end case(default)
    }
  }
  // TODO: this is overly specific to group category filters
  filterChanged(event) {
    console.log("Gallery filterChanged", event);
    let customParams = {
      group: {
        id: this.groups.split(',')[0],
        categories: event.detail
      }
    };
    this.updateGallery(this.queryInput, customParams);
  }
  render() {
    let output = [];
    this.results.map(result => {
      let thumbnail = '';
      if (!!result.thumbnailUrl) {
        thumbnail = result.thumbnailUrl;
        if (!!this.session) {
          thumbnail += `?token=${UserSession.deserialize(this.session).token}`;
        }
      }
      console.log("hub-gallery: render result", [result, thumbnail]);
      output.push(h("hub-card", { class: "gallery-card", contenttype: `${HubTypes.HubType[result.hubType]} by ${result.publisher.name}`, url: result.url || "", image: thumbnail, name: truncateString(result.title, 55), description: truncateString(result.summary, 90), buttonText: this.buttontext, onClick: () => "" }));
    });
    return (h(Host, null,
      h("slot", null),
      h("div", { class: "search-grid" },
        this.showsearch ?
          h("hub-suggest-input", { placeholder: this.searchplaceholder, submit: this.searchbutton, suggestions: this.suggestions, query: this.queryInput })
          : "",
        h("div", { class: "filters" },
          h("slot", { name: "filters" }, " ")),
        h("div", { class: "search-results gallery-lg " }, output))));
  }
  static get is() { return "hub-gallery"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["hub-gallery.css"]
  }; }
  static get styleUrls() { return {
    "$": ["hub-gallery.css"]
  }; }
  static get properties() { return {
    "site": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Hub site URL to scope for search"
      },
      "attribute": "site",
      "reflect": false,
      "defaultValue": "null"
    },
    "groups": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Groups to limit search"
      },
      "attribute": "groups",
      "reflect": false,
      "defaultValue": "null"
    },
    "showsearch": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Choose to show or hide search"
      },
      "attribute": "showsearch",
      "reflect": false,
      "defaultValue": "true"
    },
    "searchbutton": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Search Button text"
      },
      "attribute": "searchbutton",
      "reflect": false,
      "defaultValue": "\"Start Search\""
    },
    "searchplaceholder": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Search placeholder text"
      },
      "attribute": "searchplaceholder",
      "reflect": false,
      "defaultValue": "\"Search for content\""
    },
    "buttontext": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Text to show in the button"
      },
      "attribute": "buttontext",
      "reflect": false,
      "defaultValue": "\"Explore\""
    },
    "query": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Default Query"
      },
      "attribute": "query",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "hubtype": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"content\" | \"members\" | \"teams\"",
        "resolved": "\"content\" | \"members\" | \"teams\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Which Resources to search"
      },
      "attribute": "hubtype",
      "reflect": false,
      "defaultValue": "\"content\""
    },
    "sort": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"name\" | \"modified\"",
        "resolved": "\"modified\" | \"name\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Default sort order"
      },
      "attribute": "sort",
      "reflect": false,
      "defaultValue": "\"name\""
    },
    "limit": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Maximum number of results to return"
      },
      "attribute": "limit",
      "reflect": false,
      "defaultValue": "12"
    },
    "layout": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"horizontal\" | \"vertical\"",
        "resolved": "\"horizontal\" | \"vertical\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Hub site URL to scope for search"
      },
      "attribute": "layout",
      "reflect": false,
      "defaultValue": "\"horizontal\""
    },
    "hubapi": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Use the Hub API (true) or the Portal API (false)"
      },
      "attribute": "hubapi",
      "reflect": false,
      "defaultValue": "false"
    },
    "portal": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "portal",
      "reflect": false,
      "defaultValue": "\"https://www.arcgis.com\""
    },
    "clientid": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "clientid",
      "reflect": false,
      "defaultValue": "\"WXC842NRBVB6NZ2r\""
    },
    "session": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "session",
      "reflect": true,
      "defaultValue": "null"
    }
  }; }
  static get states() { return {
    "queryInput": {},
    "suggestions": {},
    "results": {},
    "catalog": {}
  }; }
  static get listeners() { return [{
      "name": "queryInput",
      "method": "queryInputHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "querySelect",
      "method": "querySelectHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "filterChanged",
      "method": "filterChanged",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
