import { Component, Host, h, Prop, State } from '@stencil/core';
import { UserSession } from '@esri/arcgis-rest-auth';
import { readSessionFromCookie } from '../../../utils/utils';
import { searchLocations, getLocation } from '../../../utils/arcgis-geoenrichment';
export class HubGeographyPicker {
  constructor() {
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
    return (h("div", { class: "picker-grid" },
      h("div", { class: "picker-search" },
        h("calcite-input", { scale: "m", placeholder: "Search for locations...", onInput: (event) => this.searchInputHandler(event) }),
        h("calcite-checkbox", { ref: (el) => this.checkMapSearch = el, checked: true, scale: "m" }, "Search within map area")),
      h("div", { class: "picker-list" },
        this.locationList.length > 0 ? h("h3", null, "Pick a Boundary") : '',
        this.locationList.map((location) => h("div", { class: "location-result" },
          h("calcite-tile-select", { onClick: (_event) => this.selectLocation(location['AreaID'], location['DataLayerID']), description: `${location['MajorSubdivisionName']}, ${location['CountryAbbr']} \n ${location['DataLayerID']}`, heading: location['AreaName'], name: "geography-demo", "show-input": "left", "input-alignment": "end", type: "radio", width: "auto" })))),
      h("div", { class: "picker-map places-map" },
        h("hub-map", { ref: (el) => this.mapElement = el, class: "places-hub-map", center: "[-77,38.8]", zoom: 10, drawing: true, geometry: this.locations.map((place) => { return place.geometry; }) }))));
  }
  renderEdit() {
    return (h("div", { class: "picker-grid" },
      h("div", { class: "picker-list" },
        h("calcite-input", null)),
      h("div", { class: "picker-map places-map" },
        h("hub-map", { ref: (el) => this.mapElement = el, class: "places-hub-map", center: "[-77,38.8]", zoom: 10, drawing: true, geometry: this.locations.map((place) => { return place.geometry; }) }))));
  }
  renderStepper(content) {
    return (h("calcite-stepper", { numbered: true },
      h("calcite-stepper-item", { "item-title": "Choose Boundary", "item-subtitle": "..." }, content),
      h("calcite-stepper-item", { "item-title": "Edit & Confirm", "item-subtitle": "..." },
        "maybe edit it now!",
        content)));
  }
  renderModal() {
    return (h("calcite-modal", { ref: (el) => this.pickerModal = el, "aria-labelledby": "modal-title", scale: "m", width: "m" },
      h("h3", { slot: "header", id: "modal-title" }, "Choose a Boundary"),
      h("div", { slot: "content" }, this.renderStepper(this.renderMap())),
      h("calcite-button", { slot: "secondary", width: "full", appearance: "outline" }, "Cancel"),
      h("calcite-button", { slot: "primary", width: "full" }, "Select Boundary")));
  }
  render() {
    return (h(Host, null,
      h("slot", null),
      this.uistepper ? this.renderStepper(this.renderMap()) : this.renderMap()));
  }
  static get is() { return "hub-geography-picker"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["hub-geography-picker.css"]
  }; }
  static get styleUrls() { return {
    "$": ["hub-geography-picker.css"]
  }; }
  static get properties() { return {
    "location": {
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
      "attribute": "location",
      "reflect": false,
      "defaultValue": "''"
    },
    "uistepper": {
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
        "text": ""
      },
      "attribute": "uistepper",
      "reflect": false,
      "defaultValue": "false"
    },
    "value": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "HubTypes.IHubGeography[]",
        "resolved": "IHubGeography[]",
        "references": {
          "HubTypes": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Existing Hub places array of geography from metadata editor\nProperty name `value` because re-used across editors"
      },
      "defaultValue": "[]"
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
        "text": "Serialized authentication information."
      },
      "attribute": "session",
      "reflect": false
    }
  }; }
  static get states() { return {
    "locationSuggestions": {},
    "locationList": {},
    "locations": {},
    "auth": {}
  }; }
}
