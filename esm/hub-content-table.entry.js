import { r as registerInstance, h, H as Host } from './index-9fca3863.js';
import { a as search } from './hub-search-992b92f5.js';
import { g as getSiteCatalog } from './hub-site-ea989651.js';
import { U as UserSession } from './UserSession-1faae0f0.js';
import './hub-content-ba4934ea.js';
import './get-9aed8a75.js';
import './clean-url-83c51f70.js';
import './get-portal-url-fdc441e5.js';
import './content-16805b54.js';
import './search-b0ff9cfb.js';
import './create-filters-48231911.js';
import './get-prop-a0541ce0.js';

const hubContentTableCss = ":host{display:block}.result{display:grid;grid-template:\"name links type\" auto/\n    50% 30% 20%;padding:1rem 1rem 1rem 3rem;border-bottom:1px solid #DDD}.result-name{grid-area:name}.result-name a{display:block}.result-name em{clear:both;font-size:0.8em;font-color:#333}.result-links{grid-area:links}.result-type{grid-area:type}.result-formats{list-style-type:none;margin:0;padding:0}.result-formats li{display:inline}.result-formats>li+li:before{content:\" | \";color:#888}.result-header{border-bottom:2px solid #888;font-weight:500}";

let HubContentTable = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
      this.catalog = await getSiteCatalog(this.site);
      let results = await this.searchContent(this.query, { groups: this.catalog.groups });
      this.results = results.results;
    }
  }
  async searchContent(query, params) {
    let searchParams = Object.assign({ q: query, limit: this.limit, sort: this.sort }, params);
    console.log("hub-content-table: searchParams", searchParams);
    let results = await search(searchParams, {
      isPortal: !this.hubapi,
      hubApiUrl: "https://hub.arcgis.com",
      authentication: new UserSession({})
    });
    return results;
  }
  renderItemLinks(item) {
    switch (item.type) {
      case "Feature Service":
        return (h("ul", { class: "result-formats" }, h("li", null, h("a", { href: `https://${this.site}/datasets/${item.id}.zip` }, "Shapefile")), h("li", null, h("a", { href: `https://${this.site}/datasets/${item.id}.kml` }, "KML")), h("li", null, h("a", { href: `https://${this.site}/datasets/${item.id}.csv` }, "CSV")), h("li", null, h("a", { href: `https://${this.site}/datasets/${item.id}.geojson` }, "GeoJSON"))));
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
      output.push(h("div", { class: "result" }, h("span", { class: "result-name" }, h("a", { href: `https://${this.site}/datasets/${item.id}` }, item.name), h("em", null, item.summary)), h("span", { class: "result-links" }, this.renderItemLinks(item)), h("span", { class: "result-type" }, item.type)));
    });
    return (h(Host, null, h("slot", null), h("div", { class: "result result-header" }, h("span", { class: "result-name" }, "Title"), h("span", { class: "result-links" }, "Download"), h("span", { class: "result-type" }, "Type")), h("div", { class: "search-results" }, output)));
  }
};
HubContentTable.style = hubContentTableCss;

export { HubContentTable as hub_content_table };
