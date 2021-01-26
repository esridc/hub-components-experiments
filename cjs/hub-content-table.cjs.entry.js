'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ad6d6974.js');
require('./hub-content-cabee099.js');
require('./index-859d80b7.js');
require('./index-c635a7b6.js');
require('./index-0c96a340.js');
require('./index-7b2ecf99.js');
const hubSearch = require('./hub-search-478dc16b.js');
const hubSite = require('./hub-site-feea96e5.js');
const index$6 = require('./index-52faf404.js');

const hubContentTableCss = ":host{display:block}.result{display:grid;grid-template:\"name links type\" auto/\n    50% 30% 20%;padding:1rem 1rem 1rem 3rem;border-bottom:1px solid #DDD}.result-name{grid-area:name}.result-name a{display:block}.result-name em{clear:both;font-size:0.8em;font-color:#333}.result-links{grid-area:links}.result-type{grid-area:type}.result-formats{list-style-type:none;margin:0;padding:0}.result-formats li{display:inline}.result-formats>li+li:before{content:\" | \";color:#888}.result-header{border-bottom:2px solid #888;font-weight:500}";

const HubContentTable = class {
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
            authentication: new index$6.UserSession({})
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
            output.push(index.h("calcite-loader", { text: "Fetching data...", "is-active": true }));
        }
        this.results.map(item => {
            output.push(index.h("div", { class: "result" }, index.h("span", { class: "result-name" }, index.h("a", { href: `https://${this.site}/datasets/${item.id}` }, item.name), index.h("em", null, item.summary)), index.h("span", { class: "result-links" }, this.renderItemLinks(item)), index.h("span", { class: "result-type" }, item.type)));
        });
        return (index.h(index.Host, null, index.h("slot", null), index.h("div", { class: "result result-header" }, index.h("span", { class: "result-name" }, "Title"), index.h("span", { class: "result-links" }, "Download"), index.h("span", { class: "result-type" }, "Type")), index.h("div", { class: "search-results" }, output)));
    }
};
HubContentTable.style = hubContentTableCss;

exports.hub_content_table = HubContentTable;
