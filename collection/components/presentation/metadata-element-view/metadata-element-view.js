import { Component, Event, Listen, Host, h, Prop } from '@stencil/core';
import '@esri/calcite-components';
export class MetadataElementView {
  constructor() {
    this.elementTitle = "Input: Title";
    this.required = false;
    /**
     * Currently based on calcite-components input
     */
    this.type = "text";
    /**
     * Which translator to use from the schema definition
     */
    this.translator = "arcgis";
    /**
     * Subtype is used to override the metadata editor for this element
     * e.g. `geography` or `topics` show specific editors
     */
    this.subtype = null;
    this.elementId = "title";
    this.value = "";
    this.description = "";
    this.metadataEditors = {
      "geography": { component: "hub-geography-picker" },
      "topics": { component: "hub-topic-picker" },
      "license": { component: "hub-license-picker" }
    };
  }
  requiredStatus() {
    return this.required ? "metadata-required" : "metadata-optional";
  }
  getMetadataEditor(editorType) {
    return this.metadataEditors[editorType];
  }
  editorUpdatedHandler(event) {
    const address = this.schema['translation'][this.translator][0];
    const metadataObj = {};
    metadataObj[address] = event.detail;
    console.log("metadata-element-view: elementUpdatedHandler", metadataObj);
    this.elementUpdated.emit(metadataObj);
  }
  onInput() {
    const address = this.schema['translation'][this.translator][0];
    const metadataObj = {};
    metadataObj[address] = this.metadataEl.value;
    console.log("metadata-element-view: onInput", metadataObj);
    this.elementUpdated.emit(metadataObj);
  }
  renderEditor(elementType, elementSubType) {
    var _a;
    console.log("renderEditor", elementType, this.getMetadataEditor(elementSubType));
    if (!!elementSubType) {
      const editorType = this.getMetadataEditor(elementSubType);
      // TODO: handle different types, such as array parse, date new, etc.
      const editorComponent = `<${editorType.component} options="${(_a = this.schema['items']) === null || _a === void 0 ? void 0 : _a.enum}" values="${this.value}"></${editorType.component}>`;
      return (h("div", { class: elementSubType, innerHTML: editorComponent }));
    }
    else {
      return (h("calcite-input", { onInput: (_event) => this.onInput(), required: this.required, ref: (el) => this.metadataEl = el, id: this.elementId, type: this.type, 
        // name={this.id}
        class: this.requiredStatus(), value: this.value }));
    }
  }
  render() {
    return (h(Host, null,
      h("slot", null),
      h("calcite-label", { status: "valid" }, this.elementTitle),
      this.renderEditor(this.type, this.subtype),
      h("calcite-input-message", { active: true }, this.description)));
  }
  static get is() { return "metadata-element-view"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["metadata-element-view.css"]
  }; }
  static get styleUrls() { return {
    "$": ["metadata-element-view.css"]
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
      "defaultValue": "\"Input: Title\""
    },
    "required": {
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
      "attribute": "required",
      "reflect": false,
      "defaultValue": "false"
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"number\" | \"text\" | \"color\" | \"date\" | \"datetime-local\" | \"email\" | \"file\" | \"image\" | \"month\" | \"password\" | \"search\" | \"tel\" | \"textarea\" | \"time\" | \"url\" | \"week\"",
        "resolved": "\"color\" | \"date\" | \"datetime-local\" | \"email\" | \"file\" | \"image\" | \"month\" | \"number\" | \"password\" | \"search\" | \"tel\" | \"text\" | \"textarea\" | \"time\" | \"url\" | \"week\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Currently based on calcite-components input"
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "\"text\""
    },
    "schema": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "object",
        "resolved": "object",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "JSON schema definition for a specific metadata property\nsee https://json-schema.org/understanding-json-schema/basics.html"
      }
    },
    "translator": {
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
        "text": "Which translator to use from the schema definition"
      },
      "attribute": "translator",
      "reflect": false,
      "defaultValue": "\"arcgis\""
    },
    "subtype": {
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
        "text": "Subtype is used to override the metadata editor for this element\ne.g. `geography` or `topics` show specific editors"
      },
      "attribute": "subtype",
      "reflect": false,
      "defaultValue": "null"
    },
    "elementId": {
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
      "attribute": "element-id",
      "reflect": false,
      "defaultValue": "\"title\""
    },
    "value": {
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
      "attribute": "value",
      "reflect": false,
      "defaultValue": "\"\""
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
      "defaultValue": "\"\""
    }
  }; }
  static get events() { return [{
      "method": "elementUpdated",
      "name": "elementUpdated",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get listeners() { return [{
      "name": "editorUpdated",
      "method": "editorUpdatedHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
