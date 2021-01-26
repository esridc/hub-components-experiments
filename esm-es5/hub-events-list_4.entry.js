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
import { e as event24, u as users24 } from './index-21611a9b.js';
import './hub-content-82335dfd.js';
import './index-fd5669bb.js';
import './index-2b41d503.js';
import './index-31ce56d3.js';
import './index-c55b387e.js';
import './hub-search-eb1585d6.js';
import { U as UserSession } from './index-80082925.js';
import './index-52c4095a.js';
import { j as getMemberEvents, k as getMemberPlaces, o as setMemberPlaces } from './hub-team-d39e46f8.js';
import { r as readSessionFromCookie } from './utils-877cdb99.js';
var hubEventsListCss = ":host{display:block}.event span{display:inline}.icon{margin-right:5px;position:relative;top:8px}.event span.summary{font-size:0.8em;font-weight:300;display:block;margin-left:29px}";
var HubEventsList = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
    }
    class_1.prototype.componentWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var auth, eventSearch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.session = readSessionFromCookie();
                        auth = UserSession.deserialize(this.session);
                        return [4 /*yield*/, getMemberEvents(auth)];
                    case 1:
                        eventSearch = _a.sent();
                        this.events = eventSearch.results;
                        console.log("hub-events-list events", this.events);
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.render = function () {
        return (h(Host, null, h("slot", null), this.events.map(function (result) { return h("div", { class: "event" }, h("span", { class: "icon" }, h("svg", { width: "24", height: "24" }, h("path", { d: event24 }))), h("span", { class: "name" }, h("a", { href: "#" + result.url }, result.name)), h("span", { class: "summary" }, result.summary)); })));
    };
    return class_1;
}());
HubEventsList.style = hubEventsListCss;
var hubListCss = ":host{display:block}.list-item{-webkit-box-shadow:0 1px 2px rgba(0,0,0,0.15);box-shadow:0 1px 2px rgba(0,0,0,0.15);-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;padding:2px;margin-bottom:10px;-webkit-transition:all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);transition:all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);position:relative}.list-item::after{content:'';position:absolute;z-index:-1;opacity:0;border-radius:5px;-webkit-box-shadow:0 5px 15px rgba(0,0,0,0.3);box-shadow:0 5px 15px rgba(0,0,0,0.3);-webkit-transition:opacity 0.3s ease-in-out;transition:opacity 0.3s ease-in-out;-webkit-transition:all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);transition:all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)}.list-item:hover{-webkit-transform:scale(1.1, 1.1);transform:scale(1.1, 1.1)}.list-item:hover::after{opacity:1}.list-item{position:relative}.list-item a{position:absolute;width:100%;height:100%;top:0px;left:0px}span{display:inline}.name{font-weight:bold}.icon{margin-right:5px;position:relative;top:8px}span.summary{font-size:0.8em;font-weight:300;display:block;margin-left:29px}";
var HubList = /** @class */ (function () {
    function HubList(hostRef) {
        registerInstance(this, hostRef);
    }
    HubList.prototype.render = function () {
        return (h(Host, null, h("slot", null), this.collection.map(function (item) { return h("div", { class: "list-item" }, h("span", { class: "icon" }, h("svg", { width: "24", height: "24" }, h("path", { d: users24 }))), h("span", { class: "name" }, h("a", { href: "#" + item.url }), item.name), h("span", { class: "summary" }, item.summary)); })));
    };
    return HubList;
}());
HubList.style = hubListCss;
var hubPlacesMapCss = ":host{display:block}.places-map{height:100%}";
var HubPlacesMap = /** @class */ (function () {
    function class_2(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Hub places array of geography.
         * Property name `value` because re-used across editors
         */
        this.value = [];
        /**
       * Choose to save or load places from user profile directly from session
         */
        this.bindState = false;
        /**
         * Option to view places map, or edit places map
         */
        this.mode = "view";
    }
    class_2.prototype.componentWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var auth, username, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.bindState) return [3 /*break*/, 2];
                        this.session = readSessionFromCookie();
                        auth = UserSession.deserialize(this.session);
                        console.log("Session", this.session);
                        if (!(this.session !== undefined)) return [3 /*break*/, 2];
                        username = JSON.parse(this.session).username;
                        _a = this;
                        return [4 /*yield*/, getMemberPlaces(username, auth)];
                    case 1:
                        _a.value = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    class_2.prototype.placeAdded = function (event) {
        console.log("hub-places-map: placeAdded", event);
        if (this.bindState) {
            var authentication = UserSession.deserialize(this.session);
            var places = [
                {
                    name: "Custom",
                    geometry: event.detail.geometry
                }
            ];
            var response = setMemberPlaces(authentication.username, places, authentication);
            console.log("hub-places-map: placeAdded", response);
        }
    };
    class_2.prototype.render = function () {
        return (h(Host, null, h("slot", null), h("hub-map", { class: "places-map", drawing: true, geometry: this.value.map(function (place) { return place.geometry; }) })));
    };
    return class_2;
}());
HubPlacesMap.style = hubPlacesMapCss;
var hubStatisticCss = ":host{display:block}.statistic-s span{display:inline}.statistic-s span:not(:last-child){padding-right:2px}.statistic-s .value{font-weight:bold}.statistic-m span{display:block}.statistic-m .label{border-bottom:1px solid #888}.statistic-m span:not(:first-child){padding-right:2px;display:inline}.statistic-m .value{font-weight:bold;font-size:1.5em}";
var HubStatistic = /** @class */ (function () {
    function HubStatistic(hostRef) {
        registerInstance(this, hostRef);
    }
    HubStatistic.prototype.render = function () {
        return (h(Host, null, h("slot", null), h("div", { class: "statistic-" + this.size }, h("span", { class: "label" }, this.label), h("span", { class: "value" }, this.value), h("span", { class: "units" }, this.units))));
    };
    return HubStatistic;
}());
HubStatistic.style = hubStatisticCss;
export { HubEventsList as hub_events_list, HubList as hub_list, HubPlacesMap as hub_places_map, HubStatistic as hub_statistic };
