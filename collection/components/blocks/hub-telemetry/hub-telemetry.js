import { Component, Host, h, Listen, Prop, State } from '@stencil/core';
import Telemetry from '@esri/telemetry';
export class HubTelemetry {
  constructor() {
    this.google = 'UA-47337822-17';
  }
  // TODO: investigate using `npm install --save-dev @types/google.analytics`
  // via https://stackoverflow.com/questions/45758852/angular-4-using-google-analytics
  initializeGoogleAnalytics(googleConfig) {
    // @ts-ignore google specific code
    window.dataLayer = window.dataLayer || [];
    // @ts-ignore google specific code
    function gtag() { dataLayer.push(arguments); }
    // @ts-ignore google specific code
    gtag('js', new Date());
    // @ts-ignore google specific code  
    gtag('config', googleConfig);
  }
  componentDidLoad() {
    this.initializeGoogleAnalytics(this.google);
    this.telemetry = new Telemetry({
      google: {
        dimensions: {
          datasetId: 6,
          attribute: 7,
          serviceQuery: 8,
          searchQuery: 9,
          objectId: 10,
          facetValue: 11
        }
      }
    });
    // TODO log telemetry depending on configured providers
    this.telemetry.logEvent({ category: 'hub-component', action: 'hub-telemetry:loaded', label: this.google });
  }
  // use utils/telemetry-utils#sendTelemetry
  handleEvent(event) {
    // {category: 'hub-telemetry-event', action: 'hub-telemetry-event', label: 'hub-telemetry-event'}
    this.telemetry.logEvent(event.detail);
  }
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "hub-telemetry"; }
  static get originalStyleUrls() { return {
    "$": ["hub-telemetry.css"]
  }; }
  static get styleUrls() { return {
    "$": ["hub-telemetry.css"]
  }; }
  static get properties() { return {
    "google": {
      "type": "string",
      "mutable": false,
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
      "attribute": "google",
      "reflect": false,
      "defaultValue": "'UA-47337822-17'"
    }
  }; }
  static get states() { return {
    "telemetry": {}
  }; }
  static get listeners() { return [{
      "name": "hub-telemetry-event",
      "method": "handleEvent",
      "target": "window",
      "capture": false,
      "passive": false
    }]; }
}
