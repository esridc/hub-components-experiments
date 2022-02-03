import { Component, Host, h, State, Prop } from '@stencil/core';
import * as HubSearch from '../../../utils/hub-search';
import * as HubSite from '../../../utils/hub-site';
import { UserSession } from '@esri/arcgis-rest-auth';
export class HubContentTable {
  constructor() {
    /**
     * Hub site URL to scope for search
     */
    this.site = "opendata.victoria.ca";
    /**
     * Default query for the search
     */
    this.query = "*";
    /**
     * Total number of results to return
     */
    this.limit = 1000;
    /**
     * Hub site URL to scope for search
     */
    this.sort = "name";
    /**
     * Use the Hub API (true) or the Portal API (false)
     */
    this.hubapi = true;
    this.results = [];
    this.catalog = null;
  }
  async componentWillLoad() {
    if (this.site) {
      this.catalog = await HubSite.getSiteCatalog(this.site);
      let results = await this.searchContent(this.query, { groups: this.catalog.groups });
      this.results = results.results;
    }
  }
  async searchContent(query, params) {
    let searchParams = Object.assign({ q: query, limit: this.limit, sort: this.sort }, params);
    console.log("hub-content-table: searchParams", searchParams);
    let results = await HubSearch.search(searchParams, {
      isPortal: !this.hubapi,
      hubApiUrl: "https://hub.arcgis.com",
      authentication: new UserSession({})
    });
    return results;
  }
  renderItemLinks(item) {
    switch (item.type) {
      case "Feature Service":
        return (h("ul", { class: "result-formats" },
          h("li", null,
            h("a", { href: `https://${this.site}/datasets/${item.id}.zip` }, "Shapefile")),
          h("li", null,
            h("a", { href: `https://${this.site}/datasets/${item.id}.kml` }, "KML")),
          h("li", null,
            h("a", { href: `https://${this.site}/datasets/${item.id}.csv` }, "CSV")),
          h("li", null,
            h("a", { href: `https://${this.site}/datasets/${item.id}.geojson` }, "GeoJSON"))));
      case "CSV":
        return (h("a", { href: `https://${this.site}/datasets/${item.id}_0.csv?outSR=4326` }, "Download"));
      case "Shapefile": // Hosted file
      case "PDF": // Hosted file
      case "Microsoft Excel":
        return (h("a", { href: `https://www.arcgis.com/sharing/rest/content/items/${item.id}/data` }, "Download"));
      default:
        return (h("a", { href: item.contentUrl }, "Link"));
    }
  }
  render() {
    let output = [];
    if (this.results.length == 0) {
      output.push(h("calcite-loader", { label: "label", text: "Fetching data...", "is-active": true }));
    }
    this.results.map(item => {
      output.push(h("div", { class: "result" },
        h("span", { class: "result-name" },
          h("a", { href: `https://${this.site}/datasets/${item.id}` }, item.name),
          h("em", null, item.summary)),
        h("span", { class: "result-links" }, this.renderItemLinks(item)),
        h("span", { class: "result-type" }, item.type)));
    });
    return (h(Host, null,
      h("slot", null),
      h("div", { class: "result result-header" },
        h("span", { class: "result-name" }, "Title"),
        h("span", { class: "result-links" }, "Download"),
        h("span", { class: "result-type" }, "Type")),
      h("div", { class: "search-results" }, output)));
  }
  static get is() { return "hub-content-table"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["hub-content-table.css"]
  }; }
  static get styleUrls() { return {
    "$": ["hub-content-table.css"]
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
      "defaultValue": "\"opendata.victoria.ca\""
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
        "text": "Default query for the search"
      },
      "attribute": "query",
      "reflect": false,
      "defaultValue": "\"*\""
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
        "text": "Total number of results to return"
      },
      "attribute": "limit",
      "reflect": false,
      "defaultValue": "1000"
    },
    "sort": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"name\" | \"modified\" | \"-name\" | \"-modified\"",
        "resolved": "\"-modified\" | \"-name\" | \"modified\" | \"name\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Hub site URL to scope for search"
      },
      "attribute": "sort",
      "reflect": false,
      "defaultValue": "\"name\""
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
      "defaultValue": "true"
    }
  }; }
  static get states() { return {
    "results": {},
    "catalog": {}
  }; }
}
