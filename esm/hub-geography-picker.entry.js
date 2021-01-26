import { r as registerInstance, h, H as Host } from './index-17d4341f.js';
import './index-fd5669bb.js';
import { U as UserSession } from './index-80082925.js';
import { r as readSessionFromCookie } from './utils-877cdb99.js';

// import {
//   request,
//   IRequestOptions
// } from "@esri/arcgis-rest-request";
const geoenrichmentUrl = 'https://geoenrich.arcgis.com/arcgis/rest/services/World/geoenrichmentserver';
const queryPath = '/StandardGeographyQuery/execute?featureLimit=10&sourceCountry=US&f=pjson';
async function searchLocations(query, token) {
    // TODO - add options for types: &geographylayers=["US.Counties, US.Places, cities"]
    let json = await fetch(`${geoenrichmentUrl}${queryPath}&useFuzzySearch=true&geographylayers=["US.States", "US.Counties", "US.Places", "cities"]&geographyQuery=${query}&token=${token}`, {});
    let results = await json.json();
    return results['results'][0]['value']['features'];
}
async function getLocation(locationId, layerId, token) {
    let json = await fetch(`${geoenrichmentUrl}${queryPath}&generalizationLevel=6&geographylayers=["${layerId}"]&geographyids=["${locationId}"]&returnGeometry=true&token=${token}`, {});
    let results = await json.json();
    return results['results'][0]['value']['features'];
}

const hubGeographyPickerCss = ":host{display:block}.picker-grid{height:500px;display:grid;grid-template-columns:30% 70%;grid-template-rows:50px 600px;grid-template-areas:\"search map\"\n    \"list map\";-webkit-column-gap:10px;-moz-column-gap:10px;column-gap:10px;row-gap:10px;padding:0 1rem 0 3rem}.picker-search{grid-area:search}.picker-map{grid-area:map}.picker-list{grid-area:list;max-height:400px;overflow:auto}hub-map,.places-map{height:600px}.location-result{height:150px;width:100%;cursor:pointer}";

const HubGeographyPicker = class {
    constructor(hostRef) {
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
    async componentWillLoad() {
        this.session = readSessionFromCookie();
        if (!!this.session) {
            this.auth = UserSession.deserialize(this.session);
        }
    }
    async searchInputHandler(event) {
        this.inputLocation = event.target.value;
        if (!!this.auth) {
            let results = await searchLocations(this.inputLocation, this.auth.token);
            console.log("Geography-Picker: SearchLocations Results", results);
            this.locationSuggestions = [];
            let locationList = [];
            results.forEach(s => {
                this.locationSuggestions.push(`${s['attributes']['DataLayerID']}: ${s['attributes']['AreaName']}, ${s['attributes']['MajorSubdivisionName']}`);
                locationList.push(s['attributes']);
            });
            this.locationList = locationList;
            console.log("Geography-Picker: locationList", this.locationList);
        }
        else {
            console.log("Geography-Picker: Signin for geography picker");
        }
        // suggestLocations(this.inputAddress, this.extent).then( suggestions => {      
        //   this.addressSuggestions = Array.from(suggestions.suggestions, s => s['text'])
        // }).catch(error => {
        //   console.error('Geocode error', error)
        // });
        return 'true';
    }
    async selectLocation(locationId, layerId) {
        let results = await getLocation(locationId, layerId, this.auth.token);
        console.log("Geography-Picker: Selected: ", results);
        this.locations = [results[0]];
    }
    showModal() {
        this.pickerModal.active = true;
    }
    renderMap() {
        return (h("div", { class: "picker-grid" }, h("div", { class: "picker-search" }, h("calcite-input", { scale: "m", placeholder: "Search for locations...", onInput: (event) => this.searchInputHandler(event) })), h("div", { class: "picker-list" }, this.locationList.length > 0 ? h("h3", null, "Pick a Boundary") : '', this.locationList.map((location) => h("div", { class: "location-result" }, h("calcite-card", { dir: "ltr", onClick: (_event) => this.selectLocation(location['AreaID'], location['DataLayerID']) }, h("h3", { slot: "title" }, location['AreaName']), h("span", { slot: "subtitle" }, location['MajorSubdivisionName'], ", ", location['CountryAbbr'], " ", h("br", null), location['DataLayerID']))))), h("div", { class: "picker-map places-map" }, h("hub-map", { class: "places-hub-map", center: "[-77,38.8]", zoom: 10, geometry: this.locations.map((place) => { return place.geometry; }) }))));
    }
    renderEdit() {
        return (h("div", { class: "picker-grid" }, h("div", { class: "picker-list" }, h("calcite-input", null)), h("div", { class: "picker-map places-map" }, h("hub-map", { class: "places-hub-map", center: "[-77,38.8]", zoom: 10, drawing: true, geometry: this.locations.map((place) => { return place.geometry; }) }))));
    }
    renderStepper() {
        return (h("calcite-stepper", { numbered: true }, h("calcite-stepper-item", { "item-title": "Choose Boundary", "item-subtitle": "..." }, this.renderMap()), h("calcite-stepper-item", { "item-title": "Edit & Confirm", "item-subtitle": "..." }, "Edit...")));
    }
    renderModal() {
        return (h("calcite-modal", { ref: (el) => this.pickerModal = el, "aria-labelledby": "modal-title", scale: "m", width: "m" }, h("h3", { slot: "header", id: "modal-title" }, "Choose a Boundary"), h("div", { slot: "content" }, this.renderStepper()), h("calcite-button", { slot: "secondary", width: "full", appearance: "outline" }, "Cancel"), h("calcite-button", { slot: "primary", width: "full" }, "Select Boundary")));
    }
    render() {
        return (h(Host, null, h("slot", null), this.renderMap()));
    }
};
HubGeographyPicker.style = hubGeographyPickerCss;

export { HubGeographyPicker as hub_geography_picker };
