import { Component, Host, h, Prop, State } from '@stencil/core';
import { UserSession } from '@esri/arcgis-rest-auth';
import * as Portal from "@esri/arcgis-rest-portal";
export class HubUploadFile {
  constructor() {
    /**
     * ClientID to identify the app launching auth
     */
    this.clientid = "WXC842NRBVB6NZ2r";
    this.portal = "https://www.arcgis.com";
    this.editors = [];
  }
  componentDidLoad() {
    const authentication = UserSession.deserialize(this.session);
    this.uploadItem(authentication);
  }
  uploadItem(authentication) {
    Portal.createItem({
      item: {
        title: this.file.name,
        type: this.itemType,
      },
      file: this.file,
      overwrite: false,
      multipart: true,
      async: true,
      filename: this.file.name,
      authentication
    }).then((response) => {
      console.log("Created Item", response);
      Portal.addItemPart({
        id: response.id,
        file: this.file,
        partNum: 1,
        authentication
      }).then((partResponse) => {
        console.log("addItemPart", partResponse);
        Portal.commitItemUpload({
          item: {
            title: this.file.name,
            type: this.itemType,
          },
          id: response.id,
          authentication,
          params: {
            title: this.file.name,
            type: this.itemType,
          }
        }).then((statusResponse) => {
          console.log("commitItemUpload", statusResponse);
          this.checkStatus(statusResponse.id);
        });
      });
    }).catch((error) => {
      console.error("uploadItem error", error);
      this.showError(error.message);
    });
  }
  showError(message) {
    this.editors = [h("calcite-notice", { color: "red", width: "full", scale: "s", active: true },
        h("div", { slot: "notice-title" },
          "Upload Error: ",
          this.file.name),
        h("div", { slot: "notice-message" }, message))];
  }
  checkStatus(id) {
    const authentication = UserSession.deserialize(this.session);
    Portal.getItemStatus({
      id: id,
      authentication
    }).then((response) => {
      console.log("Check Status", response);
      if (response.status == "completed") {
        this.editItem(id);
      }
      else {
        //         response.status == "partial" || response.status == "processing") {
        setTimeout(() => { this.checkStatus(id); }, 1000);
      }
    });
  }
  editItem(id) {
    this.editors = [h("hub-metadata-editor", { item: id })];
  }
  render() {
    return (h(Host, null,
      h("slot", null),
      this.editors.length == 0
        ? h("calcite-loader", { label: "label", text: "Fetching data...", "is-active": true })
        : this.editors));
  }
  static get is() { return "hub-upload-file"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["hub-upload-file.css"]
  }; }
  static get styleUrls() { return {
    "$": ["hub-upload-file.css"]
  }; }
  static get properties() { return {
    "file": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "File",
        "resolved": "File",
        "references": {
          "File": {
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
    },
    "itemType": {
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
      "attribute": "item-type",
      "reflect": false
    },
    "clientid": {
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
        "text": "ClientID to identify the app launching auth"
      },
      "attribute": "clientid",
      "reflect": false,
      "defaultValue": "\"WXC842NRBVB6NZ2r\""
    },
    "portal": {
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
      "attribute": "portal",
      "reflect": false,
      "defaultValue": "\"https://www.arcgis.com\""
    },
    "session": {
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
      "attribute": "session",
      "reflect": false
    }
  }; }
  static get states() { return {
    "editors": {}
  }; }
}
