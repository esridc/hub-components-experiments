import { Component, Host, h, Prop, State } from '@stencil/core';
import * as HubAPI from '../../../utils/hub-api';
import { authenticateUser } from '../../../utils/utils';
import { UserSession } from '@esri/arcgis-rest-auth';
export class ArcgisNotebook {
  constructor() {
    /**
     * Notebook Item ID from ArcGIS Online or Enterprise
     * Required
     */
    this.item = "";
    /**
     * Notebook can include other Javascript libraries
     * Useful for some charting libraries (e.g. Vega Altair)
     * But may be a security concern.
     * Default: true
     */
    this.allowScripts = true;
    /**
     * Show the notebook preview (live/non-edit) or Edit
     * Note: Edit currently blocked by ArcGIS security restrictions
     *
     */
    this.view = "preview";
    /**
     * Optional ClientID to identify the app launching authentication
     * Only required if accessing restricted notebooks
     */
    this.clientid = "";
    /**
     * ArcGIS Online or Enterprise URL
     *
     */
    this.portal = "https://www.arcgis.com";
    this.sandboxSettings = ["allow-same-origin"];
  }
  componentWillLoad() {
    if (this.allowScripts) {
      this.sandboxSettings.push("allow-scripts");
    }
  }
  componentDidLoad() {
    if (this.view == "edit") {
      this.getEdit();
    }
    else {
      this.getPreview();
    }
    let hub = HubAPI.HubService.create('hub');
    hub.get(this.item).then((item) => {
      console.log("Notebook", item);
      this.notebook = item;
      //@ts-ignore
      this.titleEl.innerText = item.title;
    });
  }
  getEdit() {
    const editUrl = `${this.portal}/home/notebook/notebook.html?id=${this.item}`;
    console.debug("ArcGIS Notebook getEdit", editUrl);
    this.iFrameEl.src = editUrl;
  }
  getPreview() {
    const resourceName = "notebook_preview.json";
    const previewUrl = `${this.portal}/sharing/rest/content/items/${this.item}/resources/${resourceName}`;
    console.log("Notebook getPreview", previewUrl);
    fetch(previewUrl).then((response) => {
      response.json().then(json => {
        // remove CSS border
        const idx = json.html.indexOf("<body>") + 6;
        json.html =
          json.html.slice(0, idx) +
            "<style>#notebook-container { box-shadow: none; -webkit-box-shadow: none; padding: 0; }</style>" +
            json.html.slice(idx);
        // Write the HTML into the body of the iFrame
        const doc = this.iFrameEl.contentWindow.document;
        doc.open();
        doc.write(json.html);
        doc.close();
      });
    }).catch((e) => {
      console.error("Error in arcgis-notebook getPreview", e);
    });
  }
  onCopy(_e) {
    return authenticateUser(this.clientid, this.portal).then(session => {
      this.session = session;
      return this.copyNotebook();
    });
  }
  copyNotebook() {
    console.log("onCopy starting", this.notebook);
    let hub = HubAPI.HubService.create('hub');
    hub.create(this.notebook, UserSession.deserialize(this.session)).then((response) => {
      console.log("onCopy Done", response);
    });
  }
  // onCopy(itemId:string) {
  //   console.log("onCopy", this.portal)
  //   return authenticateUser(this.clientid, this.portal).then(session => {
  //     this.session = session;
  //     return this.copyItem(itemId);
  //   })
  // }  
  // copyItem(itemId:string) {
  //   let hub = HubAPI.HubService.create('hub');
  //   hub.get(itemId).then((item) => {
  //     console.log("onCopy starting", item)
  //     hub.create(
  //       item, 
  //       UserSession.deserialize(this.session)
  //     ).then((response) => {
  //         console.log("onCopy Done", response)
  //     })  
  //   });
  // } 
  render() {
    return (h(Host, null,
      h("h3", { id: "notebook-title", ref: (el) => this.titleEl = el }),
      h("span", { class: "notebook-title" },
        h("slot", { name: "title" })),
      h("hub-button", { class: "notebook-copy-button", color: "dark", text: "Copy Notebook", action: this.onCopy }),
      h("iframe", { sandbox: this.sandboxSettings.join(" "), src: "", id: "notebook-iframe", ref: (el) => this.iFrameEl = el })));
  }
  static get is() { return "arcgis-notebook"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["arcgis-notebook.css"]
  }; }
  static get styleUrls() { return {
    "$": ["arcgis-notebook.css"]
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
        "text": "Notebook Item ID from ArcGIS Online or Enterprise\nRequired"
      },
      "attribute": "item",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "allowScripts": {
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
        "text": "Notebook can include other Javascript libraries\nUseful for some charting libraries (e.g. Vega Altair)\nBut may be a security concern.\nDefault: true"
      },
      "attribute": "allow-scripts",
      "reflect": false,
      "defaultValue": "true"
    },
    "view": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"preview\" | \"edit\"",
        "resolved": "\"edit\" | \"preview\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Show the notebook preview (live/non-edit) or Edit\nNote: Edit currently blocked by ArcGIS security restrictions"
      },
      "attribute": "view",
      "reflect": false,
      "defaultValue": "\"preview\""
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
        "text": "Optional ClientID to identify the app launching authentication\nOnly required if accessing restricted notebooks"
      },
      "attribute": "clientid",
      "reflect": false,
      "defaultValue": "\"\""
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
        "text": "ArcGIS Online or Enterprise URL"
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
        "text": "Optional serialized authentication information.\nOnly required to access restricted notebooks."
      },
      "attribute": "session",
      "reflect": false
    }
  }; }
  static get states() { return {
    "sandboxSettings": {},
    "previewUrl": {},
    "notebook": {}
  }; }
}
