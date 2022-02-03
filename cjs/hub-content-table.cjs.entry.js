'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dad2b533.js');
const hubSearch = require('./hub-search-0bb25918.js');
const hubSite = require('./hub-site-5e15c73a.js');
const UserSession = require('./UserSession-68b84217.js');
require('./hub-content-20389e15.js');
require('./get-1a802105.js');
require('./clean-url-e0d82cce.js');
require('./get-portal-url-674469a6.js');
require('./content-f2cad484.js');
require('./search-79a183b0.js');
require('./create-filters-c9a367cb.js');
require('./get-prop-581f8032.js');

const hubContentTableCss = ":host{display:block}.result{display:grid;grid-template:\"name links type\" auto/\n    50% 30% 20%;padding:1rem 1rem 1rem 3rem;border-bottom:1px solid #DDD}.result-name{grid-area:name}.result-name a{display:block}.result-name em{clear:both;font-size:0.8em;font-color:#333}.result-links{grid-area:links}.result-type{grid-area:type}.result-formats{list-style-type:none;margin:0;padding:0}.result-formats li{display:inline}.result-formats>li+li:before{content:\" | \";color:#888}.result-header{border-bottom:2px solid #888;font-weight:500}";

let HubContentTable = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
      this.catalog = await hubSite.getSiteCatalog(this.site);
      let results = await this.searchContent(this.query, { groups: this.catalog.groups });
      this.results = results.results;
    }
  }
  async searchContent(query, params) {
    let searchParams = Object.assign({ q: query, limit: this.limit, sort: this.sort }, params);
    console.log("hub-content-table: searchParams", searchParams);
    let results = await hubSearch.search(searchParams, {
      isPortal: !this.hubapi,
      hubApiUrl: "https://hub.arcgis.com",
      authentication: new UserSession.UserSession({})
    });
    return results;
  }
  renderItemLinks(item) {
    switch (item.type) {
      case "Feature Service":
        return (index.h("ul", { class: "result-formats" }, index.h("li", null, index.h("a", { href: `https://${this.site}/datasets/${item.id}.zip` }, "Shapefile")), index.h("li", null, index.h("a", { href: `https://${this.site}/datasets/${item.id}.kml` }, "KML")), index.h("li", null, index.h("a", { href: `https://${this.site}/datasets/${item.id}.csv` }, "CSV")), index.h("li", null, index.h("a", { href: `https://${this.site}/datasets/${item.id}.geojson` }, "GeoJSON"))));
      case "CSV":
        return (index.h("a", { href: `https://${this.site}/datasets/${item.id}_0.csv?outSR=4326` }, "Download"));
      case "Shapefile": // Hosted file
      case "PDF": // Hosted file
      case "Microsoft Excel":
        return (index.h("a", { href: `https://www.arcgis.com/sharing/rest/content/items/${item.id}/data` }, "Download"));
      default:
        return (index.h("a", { href: item.contentUrl }, "Link"));
    }
  }
  render() {
    let output = [];
    if (this.results.length == 0) {
      output.push(index.h("calcite-loader", { label: "label", text: "Fetching data...", "is-active": true }));
    }
    this.results.map(item => {
      output.push(index.h("div", { class: "result" }, index.h("span", { class: "result-name" }, index.h("a", { href: `https://${this.site}/datasets/${item.id}` }, item.name), index.h("em", null, item.summary)), index.h("span", { class: "result-links" }, this.renderItemLinks(item)), index.h("span", { class: "result-type" }, item.type)));
    });
    return (index.h(index.Host, null, index.h("slot", null), index.h("div", { class: "result result-header" }, index.h("span", { class: "result-name" }, "Title"), index.h("span", { class: "result-links" }, "Download"), index.h("span", { class: "result-type" }, "Type")), index.h("div", { class: "search-results" }, output)));
  }
};
HubContentTable.style = hubContentTableCss;

exports.hub_content_table = HubContentTable;
