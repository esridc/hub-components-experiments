import { Component, Host, h, Prop } from '@stencil/core';
export class ArcgisSurvey {
  constructor() {
    this.item = "1a712571473448e891978869cd899b38";
  }
  componentDidLoad() {
    const url = `https://survey123.arcgis.com/share/${this.item}`;
    this.iFrameEl.src = url;
  }
  embedCode() {
    return `<arcgis-survey item='${this.item}'></arcgis-survey>`;
  }
  render() {
    return (h(Host, null,
      h("slot", null),
      h("iframe", { src: "", id: "survey-iframe", ref: (el) => this.iFrameEl = el }),
      h("hub-embed", { code: this.embedCode() })));
  }
  static get is() { return "arcgis-survey"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arcgis-survey.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arcgis-survey.css"]
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
      "defaultValue": "\"1a712571473448e891978869cd899b38\""
    }
  }; }
}
