import { Element, State, Component, h, Event, Prop } from '@stencil/core';
export class DropArea {
  constructor() {
    this.allowedTypes = ["image/*"];
    this.highlighted = false;
    this.handleDrop = (e) => {
      var dt = e.dataTransfer;
      var files = dt.files;
      this.handleFiles(files);
    };
    this.handleFiles = (files) => {
      files = [...files];
      console.log("Handle Files", files);
      this.onFilesSubmitted.emit(files);
    };
  }
  // @State() public uploads: DropElement[] = [];
  componentDidLoad() {
    // Prevent default drag behaviors
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      this.dropArea.addEventListener(eventName, this.preventDefaults, false);
      document.body.addEventListener(eventName, this.preventDefaults, false);
    });
    // // Highlight drop area when item is dragged over it
    ['dragenter', 'dragover'].forEach(eventName => {
      this.dropArea.addEventListener(eventName, () => this.highlighted = true, false);
    });
    ['dragleave', 'drop'].forEach(eventName => {
      this.dropArea.addEventListener(eventName, () => this.highlighted = false, false);
    });
    this.dropArea.addEventListener('drop', this.handleDrop, false);
  }
  preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  render() {
    return h("div", { id: "drop-area" },
      h("form", { class: { 'highlight': this.highlighted } },
        h("h3", null, "Drag Files to Upload"),
        h("p", null, "Maximum Size: 200 gb "),
        h("p", null, "Supported types: Spreadsheet CSV, Excel, Shapefile, GeoJSON, PDF, Word Doc, Images"),
        h("input", { type: "file", id: "fileElem", multiple: true, accept: this.allowedTypes.join(","), onChange: (event) => this.handleFiles(event.target.files) }),
        h("label", { class: "button retry", htmlFor: "fileElem" }, "Browse")));
  }
  static get is() { return "drop-area"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["drop-area.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["drop-area.css"]
  }; }
  static get properties() { return {
    "allowedTypes": {
      "type": "unknown",
      "mutable": false,
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
      "defaultValue": "[\"image/*\"]"
    }
  }; }
  static get states() { return {
    "highlighted": {}
  }; }
  static get events() { return [{
      "method": "onFilesSubmitted",
      "name": "onFilesSubmitted",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emits the chat input"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "dropArea"; }
}
