import { Component, Host, h, Prop } from '@stencil/core';
export class HubEmbed {
  constructor() {
    this.title = "Embed this card";
    this.description = "You can add this card to your own site. Copy the code below and paste into your site editor.";
    this.code = '<hub-survey />';
  }
  componentDidLoad() {
    this.inputEl.value = this.code;
  }
  copyText() {
    /* Select the text field */
    this.inputEl.select();
    this.inputEl.setSelectionRange(0, 99999); /*For mobile devices*/
    /* Copy the text inside the text field */
    document.execCommand("copy");
    console.log("copied code!");
    // this.confirmEl = 
    this.modalEl.active = false;
  }
  showModal() {
    this.modalEl.active = true;
  }
  render() {
    return (h(Host, null,
      h("slot", null),
      h("calcite-button", { onClick: (_ev) => this.showModal(), slot: "primary", width: "full" }, "Embed"),
      h("calcite-modal", { ref: (el) => this.modalEl = el, "aria-labelledby": "modal-title" },
        h("h3", { slot: "header", id: "modal-title" }, this.title),
        h("div", { slot: "content" },
          h("input", { type: "text", class: "code", ref: (el) => this.inputEl = el, readonly: true })),
        h("calcite-button", { onClick: (_ev) => this.copyText(), slot: "primary", width: "full" }, "Copy"))));
  }
  static get is() { return "hub-embed"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["hub-embed.css"]
  }; }
  static get styleUrls() { return {
    "$": ["hub-embed.css"]
  }; }
  static get properties() { return {
    "title": {
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
      "attribute": "title",
      "reflect": false,
      "defaultValue": "\"Embed this card\""
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
      "defaultValue": "\"You can add this card to your own site. Copy the code below and paste into your site editor.\""
    },
    "code": {
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
      "attribute": "code",
      "reflect": false,
      "defaultValue": "'<hub-survey />'"
    }
  }; }
}
