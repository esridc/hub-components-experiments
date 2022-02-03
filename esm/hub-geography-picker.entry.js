import { r as registerInstance, h, H as Host } from './index-9fca3863.js';
import { r as readSessionFromCookie } from './utils-49410b4c.js';
import { U as UserSession } from './UserSession-1faae0f0.js';
import './clean-url-83c51f70.js';

// import {
//   request,
//   IRequestOptions
// } from "@esri/arcgis-rest-request";
// Dev server
const geoenrichmentUrl = 'https://geoenrich.arcgis.com/arcgis/rest/services/World/geoenrichmentserver';
const queryPath = '/StandardGeographyQuery/execute?f=pjson&';
async function searchLocations(query, extent, token) {
  // TODO - add options for types: &geographylayers=["US.Counties, US.Places, cities"]
  const layers = ["US.States", "US.Counties", "US.Places", "cities"];
  const params = {
    featureLimit: 10,
    sourceCountry: 'US',
    useFuzzySearch: true,
    geographylayers: layers,
    geographyQuery: query,
    token
  };
  if (!!extent) {
    params["spatialfilter"] = JSON.stringify({
      "AnalysisExtent": { extent }
    });
  }
  const queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
  let json = await fetch([geoenrichmentUrl, queryPath, queryString].join(''), {});
  let results = await json.json();
  return results['results'][0]['value']['features'];
}
async function getLocation(locationId, layerId, token) {
  let params = {
    featureLimit: 10,
    sourceCountry: 'US',
    generalizationLevel: 6,
    geographylayers: [layerId],
    geographyids: [locationId],
    returnGeometry: true,
    token
  };
  const queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
  const json = await fetch([geoenrichmentUrl, queryPath, queryString].join(''), {});
  const results = await json.json();
  return results['results'][0]['value']['features'];
}

const hubGeographyPickerCss = ":host{display:block}.picker-grid{height:500px;display:grid;grid-template-columns:30% 70%;grid-template-rows:50px 600px;grid-template-areas:\"search map\"\n    \"list map\";column-gap:10px;row-gap:10px;padding:0 1rem 0 3rem}.picker-search{grid-area:search}.picker-map{grid-area:map}.picker-list{grid-area:list;max-height:400px;overflow:auto}hub-map,.places-map{height:600px}.location-result{padding-left:5px;cursor:pointer}calcite-tile-select{width:100%}";

let HubGeographyPicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.location = '';
    // Testing UI
    this.uistepper = false;
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
    this.location = event.target.value;
    if (!!this.auth) {
      console.log("Geography-Picker: Searching...", [this.checkMapSearch.checked, this.mapElement.mapExtent]);
      let extent = this.checkMapSearch.checked ? this.mapElement.mapExtent : null;
      let results = await searchLocations(this.location, extent, this.auth.token);
      console.log("Geography-Picker: SearchLocations Results", results);
      this.locationSuggestions = [];
      let locationList = [];
      results.forEach(s => {
        this.locationSuggestions.push(`${s['attributes']['DataLayerID']}: ${s['attributes']['AreaName']}, ${s['attributes']['MajorSubdivisionName']}`);
        locationList.push(s['attributes']);
      });
      this.locationList = locationList;
    }
    else {
      console.error("Geography-Picker: Sign-in required for geography picker");
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
    this.locations = [results[0]];
  }
  showModal() {
    this.pickerModal.active = true;
  }
  renderMap() {
    return (h("div", { class: "picker-grid" }, h("div", { class: "picker-search" }, h("calcite-input", { scale: "m", placeholder: "Search for locations...", onInput: (event) => this.searchInputHandler(event) }), h("calcite-checkbox", { ref: (el) => this.checkMapSearch = el, checked: true, scale: "m" }, "Search within map area")), h("div", { class: "picker-list" }, this.locationList.length > 0 ? h("h3", null, "Pick a Boundary") : '', this.locationList.map((location) => h("div", { class: "location-result" }, h("calcite-tile-select", { onClick: (_event) => this.selectLocation(location['AreaID'], location['DataLayerID']), description: `${location['MajorSubdivisionName']}, ${location['CountryAbbr']} \n ${location['DataLayerID']}`, heading: location['AreaName'], name: "geography-demo", "show-input": "left", "input-alignment": "end", type: "radio", width: "auto" })))), h("div", { class: "picker-map places-map" }, h("hub-map", { ref: (el) => this.mapElement = el, class: "places-hub-map", center: "[-77,38.8]", zoom: 10, drawing: true, geometry: this.locations.map((place) => { return place.geometry; }) }))));
  }
  renderEdit() {
    return (h("div", { class: "picker-grid" }, h("div", { class: "picker-list" }, h("calcite-input", null)), h("div", { class: "picker-map places-map" }, h("hub-map", { ref: (el) => this.mapElement = el, class: "places-hub-map", center: "[-77,38.8]", zoom: 10, drawing: true, geometry: this.locations.map((place) => { return place.geometry; }) }))));
  }
  renderStepper(content) {
    return (h("calcite-stepper", { numbered: true }, h("calcite-stepper-item", { "item-title": "Choose Boundary", "item-subtitle": "..." }, content), h("calcite-stepper-item", { "item-title": "Edit & Confirm", "item-subtitle": "..." }, "maybe edit it now!", content)));
  }
  renderModal() {
    return (h("calcite-modal", { ref: (el) => this.pickerModal = el, "aria-labelledby": "modal-title", scale: "m", width: "m" }, h("h3", { slot: "header", id: "modal-title" }, "Choose a Boundary"), h("div", { slot: "content" }, this.renderStepper(this.renderMap())), h("calcite-button", { slot: "secondary", width: "full", appearance: "outline" }, "Cancel"), h("calcite-button", { slot: "primary", width: "full" }, "Select Boundary")));
  }
  render() {
    return (h(Host, null, h("slot", null), this.uistepper ? this.renderStepper(this.renderMap()) : this.renderMap()));
  }
};
HubGeographyPicker.style = hubGeographyPickerCss;

export { HubGeographyPicker as hub_geography_picker };
