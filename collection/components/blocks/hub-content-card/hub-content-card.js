import { Component, Host, h, Prop, Element, State, Watch } from '@stencil/core';
import * as HubContent from "../../../utils/hub-content";
export class HubContentCard {
  constructor() {
    this.content = "4f5c78bfe89a4304aec3a6cfd492d0cd";
    this.layout = "vertical";
    this.contentItem = null;
    this.children = [];
  }
  componentWillLoad() {
    this.loadContent();
  }
  loadContent() {
    if (this.contentItem === null) {
      HubContent.getContent(this.content).then(contentResponse => {
        console.log("HubContentCard content", contentResponse);
        this.contentItem = contentResponse;
      });
    }
  }
  render() {
    let output = [];
    if (this.contentItem) {
      output.push(h("hub-card", { item: this.content, contenttype: this.contentItem.type, layout: this.layout, url: this.contentItem.url, image: this.contentItem.thumbnailUrl, name: this.contentItem.name, description: this.contentItem.summary }));
    }
    return (h(Host, null, output));
  }
  static get is() { return "hub-content-card"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["hub-content-card.css"]
  }; }
  static get styleUrls() { return {
    "$": ["hub-content-card.css"]
  }; }
  static get properties() { return {
    "content": {
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
      "attribute": "content",
      "reflect": false,
      "defaultValue": "\"4f5c78bfe89a4304aec3a6cfd492d0cd\""
    },
    "layout": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"horizontal\" | \"vertical\"",
        "resolved": "\"horizontal\" | \"vertical\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "layout",
      "reflect": false,
      "defaultValue": "\"vertical\""
    },
    "contentItem": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "HubTypes.IHubContent",
        "resolved": "IHubContent",
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
      },
      "defaultValue": "null"
    },
    "actionButton": {
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
        "text": ""
      },
      "attribute": "action-button",
      "reflect": false
    }
  }; }
  static get states() { return {
    "children": {}
  }; }
  static get elementRef() { return "host"; }
  static get watchers() { return [{
      "propName": "content",
      "methodName": "loadContent"
    }]; }
}
