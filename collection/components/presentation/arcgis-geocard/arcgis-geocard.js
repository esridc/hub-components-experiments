import { Component, Host, h } from '@stencil/core';
export class ArcgisGeocard {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "arcgis-geocard"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arcgis-geocard.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arcgis-geocard.css"]
  }; }
}
