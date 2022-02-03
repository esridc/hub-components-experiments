import { Component, Element, Host, h, Prop, Listen } from '@stencil/core';
import { sendTelemetry } from '../../../utils/telemetry-utils';
export class MetadataForm {
  constructor() {
    this.sections = [];
    this.locale = "en";
    this.resource = null;
  }
  async componentWillLoad() {
    console.log("Metadata Form componentWillLoad", this.sections);
    sendTelemetry({
      category: 'hub-component',
      action: 'hub-metadata-form:loaded',
      label: ''
    });
  }
  // When an element updates and merges into the resource object.
  resourceUpdated(event) {
    console.log("trace metadata-form: resourceUpdated", event.detail);
  }
  render() {
    console.log("MetadataForm: render", this.resource);
    return (h(Host, null,
      h("slot", null),
      h("calcite-accordion", null, this.sections.map((section) => h("calcite-accordion-item", { "item-title": section, active: true },
        h("metadata-section-view", { spec: section, locale: this.locale, resource: this.resource }))))));
  }
  static get is() { return "metadata-form"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["metadata-form.css"]
  }; }
  static get styleUrls() { return {
    "$": ["metadata-form.css"]
  }; }
  static get properties() { return {
    "sections": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "Array<string>",
        "resolved": "string[]",
        "references": {
          "Array": {
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
      "defaultValue": "[]"
    },
    "locale": {
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
      "attribute": "locale",
      "reflect": false,
      "defaultValue": "\"en\""
    },
    "resource": {
      "type": "any",
      "mutable": true,
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
      "attribute": "resource",
      "reflect": true,
      "defaultValue": "null"
    }
  }; }
  static get elementRef() { return "element"; }
  static get listeners() { return [{
      "name": "resourceUpdated",
      "method": "resourceUpdated",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
