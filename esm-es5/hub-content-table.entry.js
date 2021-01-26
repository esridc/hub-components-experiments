var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, h, H as Host } from './index-17d4341f.js';
import './hub-content-82335dfd.js';
import './index-fd5669bb.js';
import './index-2b41d503.js';
import './index-31ce56d3.js';
import './index-c55b387e.js';
import { s as search } from './hub-search-eb1585d6.js';
import { g as getSiteCatalog } from './hub-site-ac04c7b3.js';
import { U as UserSession } from './index-80082925.js';
var hubContentTableCss = ":host{display:block}.result{display:grid;grid-template:\"name links type\" auto/\n    50% 30% 20%;padding:1rem 1rem 1rem 3rem;border-bottom:1px solid #DDD}.result-name{grid-area:name}.result-name a{display:block}.result-name em{clear:both;font-size:0.8em;font-color:#333}.result-links{grid-area:links}.result-type{grid-area:type}.result-formats{list-style-type:none;margin:0;padding:0}.result-formats li{display:inline}.result-formats>li+li:before{content:\" | \";color:#888}.result-header{border-bottom:2px solid #888;font-weight:500}";
var HubContentTable = /** @class */ (function () {
    function class_1(hostRef) {
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
    class_1.prototype.componentWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, results;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.site) return [3 /*break*/, 3];
                        _a = this;
                        return [4 /*yield*/, getSiteCatalog(this.site)];
                    case 1:
                        _a.catalog = _b.sent();
                        return [4 /*yield*/, this.searchContent(this.query, { groups: this.catalog.groups })];
                    case 2:
                        results = _b.sent();
                        this.results = results.results;
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.searchContent = function (query, params) {
        return __awaiter(this, void 0, void 0, function () {
            var searchParams, results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        searchParams = Object.assign({ q: query, limit: this.limit, sort: this.sort }, params);
                        console.log("hub-content-table: searchParams", searchParams);
                        return [4 /*yield*/, search(searchParams, {
                                isPortal: !this.hubapi,
                                hubApiUrl: "https://hub.arcgis.com",
                                authentication: new UserSession({})
                            })];
                    case 1:
                        results = _a.sent();
                        return [2 /*return*/, results];
                }
            });
        });
    };
    class_1.prototype.renderItemLinks = function (item) {
        switch (item.type) {
            case "Feature Service":
                return (h("ul", { class: "result-formats" }, h("li", null, h("a", { href: "https://" + this.site + "/datasets/" + item.id + ".zip" }, "Shapefile")), h("li", null, h("a", { href: "https://" + this.site + "/datasets/" + item.id + ".kml" }, "KML")), h("li", null, h("a", { href: "https://" + this.site + "/datasets/" + item.id + ".csv" }, "CSV")), h("li", null, h("a", { href: "https://" + this.site + "/datasets/" + item.id + ".geojson" }, "GeoJSON"))));
            case "CSV":
                return (h("a", { href: "https://" + this.site + "/datasets/" + item.id + "_0.csv?outSR=4326" }, "Download"));
            case "Shapefile": // Hosted file
            case "PDF": // Hosted file
            case "Microsoft Excel":
                return (h("a", { href: "https://www.arcgis.com/sharing/rest/content/items/" + item.id + "/data" }, "Download"));
            default:
                return (h("a", { href: item.contentUrl }, "Link"));
        }
    };
    class_1.prototype.render = function () {
        var _this = this;
        var output = [];
        if (this.results.length == 0) {
            output.push(h("calcite-loader", { text: "Fetching data...", "is-active": true }));
        }
        this.results.map(function (item) {
            output.push(h("div", { class: "result" }, h("span", { class: "result-name" }, h("a", { href: "https://" + _this.site + "/datasets/" + item.id }, item.name), h("em", null, item.summary)), h("span", { class: "result-links" }, _this.renderItemLinks(item)), h("span", { class: "result-type" }, item.type)));
        });
        return (h(Host, null, h("slot", null), h("div", { class: "result result-header" }, h("span", { class: "result-name" }, "Title"), h("span", { class: "result-links" }, "Download"), h("span", { class: "result-type" }, "Type")), h("div", { class: "search-results" }, output)));
    };
    return class_1;
}());
HubContentTable.style = hubContentTableCss;
export { HubContentTable as hub_content_table };
