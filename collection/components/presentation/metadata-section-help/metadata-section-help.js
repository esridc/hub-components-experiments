import { Component, Host, h, Prop } from '@stencil/core';
export class MetadataSectionHelp {
  constructor() {
    this.elementTitle = "Basic Info";
    this.description = "This information is used in search results, gallery cards and on the details views.";
  }
  render() {
    return (h(Host, null,
      h("slot", null),
      h("div", { class: "metadata-section-help" },
        h("h3", null, this.elementTitle),
        h("p", null, this.description))));
  }
  static get is() { return "metadata-section-help"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["metadata-section-help.css"]
  }; }
  static get styleUrls() { return {
    "$": ["metadata-section-help.css"]
  }; }
  static get properties() { return {
    "elementTitle": {
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
      "attribute": "element-title",
      "reflect": false,
      "defaultValue": "\"Basic Info\""
    },
    "description": {
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
      "attribute": "description",
      "reflect": false,
      "defaultValue": "\"This information is used in search results, gallery cards and on the details views.\""
    }
  }; }
}
