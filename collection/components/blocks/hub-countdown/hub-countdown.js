import { Component, Host, h, Prop, State } from '@stencil/core';
export class HubCountdown {
  constructor() {
    /**
     * Start Date as a 'YYYY-MM-DD' string. e.g. "2020-12-31"
     * Leave blank to set to current time
     */
    this.start = null;
    /**
     * End Date as a 'YYYY-MM-DD'string. e.g. "2020-12-31"
     * Leave blank to set to current time
     */
    this.end = null;
    /**
     * Text to add after the date difference
     */
    this.endText = "days left";
  }
  calculateDiff() {
    console.log("hub-countdown...", [this.start, this.end]);
    console.log("hub-countdown... end", new Date(this.end));
    this.endDate = this.end ? new Date(this.end) : new Date();
    this.startDate = this.start ? new Date(this.start) : new Date();
    console.log("hub-countdown: endDate", this.endDate);
    var diff = Math.abs(this.endDate.getTime() - this.startDate.getTime());
    this.daysRemaining = Math.ceil(diff / (1000 * 3600 * 24));
  }
  componentWillRender() {
    this.calculateDiff();
  }
  render() {
    return (h(Host, null,
      h("slot", null),
      h("strong", null, this.daysRemaining),
      " ",
      this.endText));
  }
  static get is() { return "hub-countdown"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["hub-countdown.css"]
  }; }
  static get styleUrls() { return {
    "$": ["hub-countdown.css"]
  }; }
  static get properties() { return {
    "start": {
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
        "text": "Start Date as a 'YYYY-MM-DD' string. e.g. \"2020-12-31\"\nLeave blank to set to current time"
      },
      "attribute": "start",
      "reflect": false,
      "defaultValue": "null"
    },
    "end": {
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
        "text": "End Date as a 'YYYY-MM-DD'string. e.g. \"2020-12-31\"\nLeave blank to set to current time"
      },
      "attribute": "end",
      "reflect": false,
      "defaultValue": "null"
    },
    "endText": {
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
        "text": "Text to add after the date difference"
      },
      "attribute": "end-text",
      "reflect": false,
      "defaultValue": "\"days left\""
    }
  }; }
  static get states() { return {
    "endDate": {},
    "startDate": {},
    "daysRemaining": {}
  }; }
}
