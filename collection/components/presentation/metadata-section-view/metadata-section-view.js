import { Component, Element, Event, Host, h, Listen, Prop, State } from '@stencil/core';
import '@esri/calcite-components';
import * as Metadata from '../../../utils/metadata-utils';
import * as Locale from '../../../utils/locale';
import { setUpdateProp } from '../../../utils/utils';
export class MetadataSectionView {
  constructor() {
    this.spec = "arcgis";
    this.elementTitle = "";
    this.description = "";
    this.locale = "en";
    /**
     * JSON Schema Properties section
     */
    this.inputs = [];
    /**
     * Hub Resource object.
     */
    this.resource = null;
    /**
     * Which translator to use from the schema definition
     */
    this.translator = "arcgis";
  }
  async componentWillLoad() {
    this.sectionSchema = await this.loadSpecification();
    this.locale = this.locale || Locale.getComponentClosestLanguage(this.element);
    this.elementTitle = this.sectionSchema['title'];
    this.description = this.sectionSchema['description'];
    this.inputs = this.sectionSchema['properties'];
    // TODO: send input translation down to components / per input
    Locale.getMetadataLocaleStrings(this.spec, this.locale).then((result) => {
      this.strings = result;
      this.elementTitle = this.strings.t(`${this.spec}.metadata.${this.spec}.title`);
      this.description = this.strings.t(`${this.spec}.metadata.${this.spec}.description`);
    });
  }
  async loadSpecification() {
    const file = `./schema/${this.spec}.json`;
    return await Metadata.getMetadataSpec(file);
  }
  // TODO: use `schema.translation` to get correct metadata element, e.g. `summer = item.snippet`
  getMetadataValue(attr) {
    let value = "";
    console.log("metadata-section-view: metadataValue", attr, this.resource);
    if (!!this.resource) {
      console.log("metadata-section-view: metadataValue - translation", attr, attr.split('.'));
      // check if there is an translation from the explicit property name to a platform specific attribute
      if (!!this.inputs[attr].translation[this.translator]) {
        value = this.inputs[attr].translation[this.translator][0].split('.').reduce((o, i) => o[i], this.resource);
      }
      else {
        value = this.resource[attr];
      }
    }
    console.log("metadata-section-view: metadataValue", attr, value, this.resource);
    return value;
  }
  /**
   * Set the correct attribute that may be embedded (e.g. {'metadata.interests': ['topic1', 'topic2']})
   *
   * @param resource Hub Resource
   * @param attributes Object of attributes that may be embedded (e.g. {'metadata.interests': ['topic1', 'topic2']})
   */
  setMetadataValue(resource, attributes) {
    console.log('setMetadataValue input', resource);
    Object.keys(attributes).map((key) => {
      setUpdateProp(resource, key.split('.'), attributes[key]);
    });
    console.log('setMetadataValue output', resource);
    //   let value = attributes[attribute];
    //   attribute.split('.').reduce((obj, attr, currentIndex, array) => {
    //     console.log("obj, attr", obj,attr, currentIndex, array)
    //     if(currentIndex === (array.length-1)) {
    //       obj[attr] = value;
    //     } else {
    //       // If there isn't yet a child object, add one
    //       obj[attr] = (!!obj[attr]) ?  obj[attr] : {};
    //     }
    //     return obj;
    //   }, resource)
    // })
    // Merge the element property update into the resource, then send up...
    // this.resource = Object.assign(this.resource, attributes)
    return resource;
  }
  elementUpdatedHandler(event) {
    console.log('trace metadata-section-view: elementUpdatedHandler', event.detail, this.resource);
    this.resource = this.setMetadataValue(this.resource, event.detail);
    console.log('trace metadata-section-view: elementUpdatedHandler', event.detail, this.resource);
    this.resourceUpdated.emit(this.resource);
  }
  render() {
    console.log("metadata-section-view: inputs", [this.elementTitle, this.inputs]);
    return (h(Host, null,
      h("slot", null),
      h("section", { class: "metadata-section" },
        h("metadata-section-help", { elementTitle: this.elementTitle, description: this.description }),
        h("div", { class: "metadata-section-input" }, Object.keys(this.inputs).map((attr) => h("metadata-element-view", { elementTitle: attr, schema: this.inputs[attr], type: this.inputs[attr].type, subtype: this.inputs[attr].subtype || null, description: this.inputs[attr].description, value: this.getMetadataValue(this.inputs[attr]), required: true }))))));
  }
  static get is() { return "metadata-section-view"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["metadata-section-view.css"]
  }; }
  static get styleUrls() { return {
    "$": ["metadata-section-view.css"]
  }; }
  static get properties() { return {
    "spec": {
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
      "attribute": "spec",
      "reflect": false,
      "defaultValue": "\"arcgis\""
    },
    "elementTitle": {
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
      "attribute": "element-title",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "description": {
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
      "attribute": "description",
      "reflect": false,
      "defaultValue": "\"\""
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
    "inputs": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Array<any>",
        "resolved": "any[]",
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
        "text": "JSON Schema Properties section"
      },
      "defaultValue": "[]"
    },
    "resource": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "IHubResource",
        "resolved": "IHubResource",
        "references": {
          "IHubResource": {
            "location": "import",
            "path": "../../../utils/hub-api"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Hub Resource object."
      },
      "defaultValue": "null"
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
    }
  }; }
  static get states() { return {
    "strings": {},
    "sectionSchema": {}
  }; }
  static get events() { return [{
      "method": "resourceUpdated",
      "name": "resourceUpdated",
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
  static get elementRef() { return "element"; }
  static get listeners() { return [{
      "name": "elementUpdated",
      "method": "elementUpdatedHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
