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
import './index-fd5669bb.js';
import { U as UserSession } from './index-80082925.js';
import { r as readSessionFromCookie } from './utils-877cdb99.js';
// import {
//   request,
//   IRequestOptions
// } from "@esri/arcgis-rest-request";
var geoenrichmentUrl = 'https://geoenrich.arcgis.com/arcgis/rest/services/World/geoenrichmentserver';
var queryPath = '/StandardGeographyQuery/execute?featureLimit=10&sourceCountry=US&f=pjson';
function searchLocations(query, token) {
    return __awaiter(this, void 0, void 0, function () {
        var json, results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("" + geoenrichmentUrl + queryPath + "&useFuzzySearch=true&geographylayers=[\"US.States\", \"US.Counties\", \"US.Places\", \"cities\"]&geographyQuery=" + query + "&token=" + token, {})];
                case 1:
                    json = _a.sent();
                    return [4 /*yield*/, json.json()];
                case 2:
                    results = _a.sent();
                    return [2 /*return*/, results['results'][0]['value']['features']];
            }
        });
    });
}
function getLocation(locationId, layerId, token) {
    return __awaiter(this, void 0, void 0, function () {
        var json, results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("" + geoenrichmentUrl + queryPath + "&generalizationLevel=6&geographylayers=[\"" + layerId + "\"]&geographyids=[\"" + locationId + "\"]&returnGeometry=true&token=" + token, {})];
                case 1:
                    json = _a.sent();
                    return [4 /*yield*/, json.json()];
                case 2:
                    results = _a.sent();
                    return [2 /*return*/, results['results'][0]['value']['features']];
            }
        });
    });
}
var hubGeographyPickerCss = ":host{display:block}.picker-grid{height:500px;display:grid;grid-template-columns:30% 70%;grid-template-rows:50px 600px;grid-template-areas:\"search map\"\n    \"list map\";-webkit-column-gap:10px;-moz-column-gap:10px;column-gap:10px;row-gap:10px;padding:0 1rem 0 3rem}.picker-search{grid-area:search}.picker-map{grid-area:map}.picker-list{grid-area:list;max-height:400px;overflow:auto}hub-map,.places-map{height:600px}.location-result{height:150px;width:100%;cursor:pointer}";
var HubGeographyPicker = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.inputLocation = '';
        // For hub-input
        this.locationSuggestions = [];
        // For this UI
        this.locationList = [];
        /**
         * Existing Hub places array of geography from metadata editor
         * Property name `value` because re-used across editors
         */
        this.value = [];
        /**
         * Displayed on map
         */
        this.locations = [];
        this.auth = null;
    }
    class_1.prototype.componentWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.session = readSessionFromCookie();
                if (!!this.session) {
                    this.auth = UserSession.deserialize(this.session);
                }
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.searchInputHandler = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var results, locationList_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.inputLocation = event.target.value;
                        if (!!!this.auth) return [3 /*break*/, 2];
                        return [4 /*yield*/, searchLocations(this.inputLocation, this.auth.token)];
                    case 1:
                        results = _a.sent();
                        console.log("Geography-Picker: SearchLocations Results", results);
                        this.locationSuggestions = [];
                        locationList_1 = [];
                        results.forEach(function (s) {
                            _this.locationSuggestions.push(s['attributes']['DataLayerID'] + ": " + s['attributes']['AreaName'] + ", " + s['attributes']['MajorSubdivisionName']);
                            locationList_1.push(s['attributes']);
                        });
                        this.locationList = locationList_1;
                        console.log("Geography-Picker: locationList", this.locationList);
                        return [3 /*break*/, 3];
                    case 2:
                        console.log("Geography-Picker: Signin for geography picker");
                        _a.label = 3;
                    case 3: 
                    // suggestLocations(this.inputAddress, this.extent).then( suggestions => {      
                    //   this.addressSuggestions = Array.from(suggestions.suggestions, s => s['text'])
                    // }).catch(error => {
                    //   console.error('Geocode error', error)
                    // });
                    return [2 /*return*/, 'true'];
                }
            });
        });
    };
    class_1.prototype.selectLocation = function (locationId, layerId) {
        return __awaiter(this, void 0, void 0, function () {
            var results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getLocation(locationId, layerId, this.auth.token)];
                    case 1:
                        results = _a.sent();
                        console.log("Geography-Picker: Selected: ", results);
                        this.locations = [results[0]];
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.showModal = function () {
        this.pickerModal.active = true;
    };
    class_1.prototype.renderMap = function () {
        var _this = this;
        return (h("div", { class: "picker-grid" }, h("div", { class: "picker-search" }, h("calcite-input", { scale: "m", placeholder: "Search for locations...", onInput: function (event) { return _this.searchInputHandler(event); } })), h("div", { class: "picker-list" }, this.locationList.length > 0 ? h("h3", null, "Pick a Boundary") : '', this.locationList.map(function (location) { return h("div", { class: "location-result" }, h("calcite-card", { dir: "ltr", onClick: function (_event) { return _this.selectLocation(location['AreaID'], location['DataLayerID']); } }, h("h3", { slot: "title" }, location['AreaName']), h("span", { slot: "subtitle" }, location['MajorSubdivisionName'], ", ", location['CountryAbbr'], " ", h("br", null), location['DataLayerID']))); })), h("div", { class: "picker-map places-map" }, h("hub-map", { class: "places-hub-map", center: "[-77,38.8]", zoom: 10, geometry: this.locations.map(function (place) { return place.geometry; }) }))));
    };
    class_1.prototype.renderEdit = function () {
        return (h("div", { class: "picker-grid" }, h("div", { class: "picker-list" }, h("calcite-input", null)), h("div", { class: "picker-map places-map" }, h("hub-map", { class: "places-hub-map", center: "[-77,38.8]", zoom: 10, drawing: true, geometry: this.locations.map(function (place) { return place.geometry; }) }))));
    };
    class_1.prototype.renderStepper = function () {
        return (h("calcite-stepper", { numbered: true }, h("calcite-stepper-item", { "item-title": "Choose Boundary", "item-subtitle": "..." }, this.renderMap()), h("calcite-stepper-item", { "item-title": "Edit & Confirm", "item-subtitle": "..." }, "Edit...")));
    };
    class_1.prototype.renderModal = function () {
        var _this = this;
        return (h("calcite-modal", { ref: function (el) { return _this.pickerModal = el; }, "aria-labelledby": "modal-title", scale: "m", width: "m" }, h("h3", { slot: "header", id: "modal-title" }, "Choose a Boundary"), h("div", { slot: "content" }, this.renderStepper()), h("calcite-button", { slot: "secondary", width: "full", appearance: "outline" }, "Cancel"), h("calcite-button", { slot: "primary", width: "full" }, "Select Boundary")));
    };
    class_1.prototype.render = function () {
        return (h(Host, null, h("slot", null), this.renderMap()));
    };
    return class_1;
}());
HubGeographyPicker.style = hubGeographyPickerCss;
export { HubGeographyPicker as hub_geography_picker };
