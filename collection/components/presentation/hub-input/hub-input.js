import { Element, Listen, Component, Prop, State, Event, h } from '@stencil/core';
import { getLocation, suggestLocations } from '../../../utils/geo-utils';
export class HubInput {
  componentWillLoad() {
    this.inputAddress = this.address;
    if (typeof (this.extent) == "string") {
      this.extent = JSON.parse(this.extent);
    }
  }
  queryInputHandler(event) {
    this.inputAddress = event.detail;
    suggestLocations(this.inputAddress, this.extent).then(suggestions => {
      this.addressSuggestions = Array.from(suggestions.suggestions, s => s['text']);
    }).catch(error => {
      console.error('Geocode error', error);
    });
    return 'true';
  }
  querySelectHandler(event) {
    console.debug("radar-input querySelect", event);
    getLocation(event.detail, this.extent).then(coordinates => {
      this.eventAddressUpdated.emit({
        'address': this.address,
        'coordinates': coordinates
      });
    }).catch(error => {
      console.error('Geocode error', error);
    });
    return 'true';
  }
  render() {
    return (h("hub-suggest-input", { placeholder: "Search for an address...", query: this.address, suggestions: this.addressSuggestions }));
  }
  static get is() { return "hub-input"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["hub-input.css"]
  }; }
  static get styleUrls() { return {
    "$": ["hub-input.css"]
  }; }
  static get properties() { return {
    "address": {
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
        "text": "Default address to search"
      },
      "attribute": "address",
      "reflect": false
    },
    "extent": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Geographic extent limit for geocoding"
      },
      "attribute": "extent",
      "reflect": true
    }
  }; }
  static get states() { return {
    "inputAddress": {},
    "addressSuggestions": {}
  }; }
  static get events() { return [{
      "method": "eventAddressUpdated",
      "name": "eventAddressUpdated",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emits the {address, coordinates} of the geocoded result"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "element"; }
  static get listeners() { return [{
      "name": "queryInput",
      "method": "queryInputHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "querySelect",
      "method": "querySelectHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
