import { Component, Host, Prop, h, State } from '@stencil/core';
import '@esri/calcite-components';
import '@esri/calcite-ui-icons';
export class HubCard {
  constructor() {
    this.portalUrl = "http://www.arcgis.com/sharing/rest/";
    this.item = "";
    this.contenttype = "Local Topic";
    /** Specify the layout of the card */
    this.layout = "vertical";
    this.buttonText = "Explore";
    // @Prop() content:any;
    this.metadata = [];
  }
  componentWillRender() {
    // this.metadata = [
    //   {name: "Owner", value: this.content.item.owner},
    //   {name: "Updated", value: timestampToDate(this.content.item.modified)},
    // ]
  }
  render() {
    let output = [];
    // debugger;
    if (this.image !== undefined && this.image !== null && this.image.length > 0) {
      // TODO: improve testing for image URL
      if (this.image.match(/^http/) === null && this.item) {
        output.push(h("img", { class: "card-image", slot: "thumbnail", src: `${this.portalUrl}content/items/${this.item}/info/${this.image}` }));
      }
      else {
        // thumbnail = <img class="hub-content-image" src={this.image} alt="Thumbnail Image" />
        output.push(h("img", { class: "card-image", slot: "thumbnail", src: this.image }));
      }
    }
    if (this.name) {
      let name = this.name;
      if (this.url) {
        name = `<a class="hub-content-url" href="${this.url}">${name}</a>`;
      }
      output.push(h("h3", { class: "card-title", slot: "title", innerHTML: name }));
    }
    if (this.contenttype) {
      output.push(h("span", { class: "card-subtitle", slot: "subtitle" }, this.contenttype));
      // output.push( <span class="hub-content-type">{this.contenttype}</span> )
    }
    if (this.description) {
      // output.push(<p class="hub-content-summary" innerHTML={this.description}></p>)
      output.push(h("div", { class: "card-description", innerHTML: this.description }));
    }
    if (this.metadata && this.metadata.length > 0) {
      output.push(h("div", { class: "hub-content-details" }, this.metadata.map((element) => h("div", null,
        h("strong", null, element.name),
        ": ",
        element.value))));
    }
    if (this.url !== undefined && this.url !== null && this.url.length != 0) {
      output.push(h("calcite-button", { onClick: () => window.open(this.url), slot: "footer-leading", width: "full" }, this.buttonText));
    }
    return (h(Host, null,
      h("calcite-card", null, output)));
  }
  static get is() { return "hub-card"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["hub-card.css"]
  }; }
  static get styleUrls() { return {
    "$": ["hub-card.css"]
  }; }
  static get properties() { return {
    "item": {
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
      "attribute": "item",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "image": {
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
      "attribute": "image",
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
      "reflect": false
    },
    "contenttype": {
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
      "attribute": "contenttype",
      "reflect": false,
      "defaultValue": "\"Local Topic\""
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
        "text": "Specify the layout of the card"
      },
      "attribute": "layout",
      "reflect": false,
      "defaultValue": "\"vertical\""
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
    "buttonText": {
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
      "attribute": "button-text",
      "reflect": false,
      "defaultValue": "\"Explore\""
    },
    "buttonAction": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Function",
        "resolved": "Function",
        "references": {
          "Function": {
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
  static get states() { return {
    "metadata": {}
  }; }
}
