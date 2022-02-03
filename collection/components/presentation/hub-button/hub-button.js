import { Component, Prop, Listen, h } from '@stencil/core';
import '@esri/calcite-components';
import { sendTelemetry } from '../../../utils/telemetry-utils';
export class HubButton {
  constructor() {
    /**
     * Button text to display
     */
    this.text = "Click Me";
    /**
     * action to trigger when the button is clicked
     */
    this.action = function () { return 'foo'; };
  }
  handleKeyDown() {
    console.log("hub-button click");
    // send Telemetry to <hub-telemetry>
    sendTelemetry({
      category: 'hub-component',
      action: 'hub-button:click',
      label: this.text
    });
    this.action();
  }
  render() {
    // return <button class="hub-btn">
    //     {this.icon}
    //     {this.text}
    //   </button>;
    return h("calcite-button", { appearance: "solid", color: "blue", scale: "m", round: false, href: "" }, this.text);
  }
  static get is() { return "hub-button"; }
  static get originalStyleUrls() { return {
    "$": ["hub-button.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["hub-button.css"]
  }; }
  static get properties() { return {
    "text": {
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
        "text": "Button text to display"
      },
      "attribute": "text",
      "reflect": false,
      "defaultValue": "\"Click Me\""
    },
    "icon": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "JSX.Element",
        "resolved": "Element",
        "references": {
          "JSX": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Icon to display alongside the text"
      }
    },
    "action": {
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
        "text": "action to trigger when the button is clicked"
      },
      "defaultValue": "function() { return 'foo' }"
    }
  }; }
  static get listeners() { return [{
      "name": "click",
      "method": "handleKeyDown",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
