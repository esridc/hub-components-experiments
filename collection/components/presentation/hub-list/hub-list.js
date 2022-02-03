import { Component, Host, h, Prop } from '@stencil/core';
import { users24 } from '@esri/calcite-ui-icons';
export class HubList {
  render() {
    return (h(Host, null,
      h("slot", null),
      this.collection.map((item) => h("div", { class: "list-item" },
        h("span", { class: "icon" },
          h("svg", { width: "24", height: "24" },
            h("path", { d: users24 }))),
        h("span", { class: "name" },
          h("a", { href: `#${item.url}` }),
          item.name),
        h("span", { class: "summary" }, item.summary)))));
  }
  static get is() { return "hub-list"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["hub-list.css"]
  }; }
  static get styleUrls() { return {
    "$": ["hub-list.css"]
  }; }
  static get properties() { return {
    "icon": {
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
      "attribute": "icon",
      "reflect": false
    },
    "name": {
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
      "attribute": "name",
      "reflect": false
    },
    "url": {
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
      "attribute": "url",
      "reflect": false
    },
    "summary": {
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
      "attribute": "summary",
      "reflect": false
    },
    "collection": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "HubTypes.IHubResource[]",
        "resolved": "IHubResource[]",
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
        "text": ""
      }
    }
  }; }
}
