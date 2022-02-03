import { Component, Host, h, Prop, State } from '@stencil/core';
import { UserSession } from '@esri/arcgis-rest-auth';
import * as Portal from "@esri/arcgis-rest-portal";
import { readSessionFromCookie } from '../../../utils/utils';
import { updateContent } from '../../../utils/hub-content';
export class HubMetadataEditor {
  constructor() {
    this.item = "1467319d449c44548bd63217f9b3c45a";
    this.tags = [];
    /**
     * ClientID to identify the app launching auth
     */
    this.clientid = "WXC842NRBVB6NZ2r";
    this.portal = "https://www.arcgis.com";
    this.session = null;
    this.resource = null;
  }
  componentWillLoad() {
    this.session = readSessionFromCookie();
    this.getItem(this.item).then((response) => {
      console.log("HubMetadata componentDidLoad", response);
      this.resource = response; // For sending into the metadata form
      this.itemTitle = response.title;
      this.tags = response.tags;
      this.summary = response.snippet;
    });
  }
  getItem(itemId) {
    console.log("HubMetadata getItem", [itemId, this.session]);
    const authentication = UserSession.deserialize(this.session);
    return Portal.getItem(itemId, { authentication });
    // return Portal.getItem(itemId)
  }
  saveForm(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("Save form", this.resource);
    const authentication = UserSession.deserialize(this.session);
    updateContent(this.item, this.resource, authentication);
    // Portal.updateItem({
    //   item: {
    //     id: this.item,
    //     title: this.titleEl.value,
    //     tags: this.tagsEl.value,
    //     snippet: this.summaryEl.value
    //   },
    //   authentication
    // })
  }
  render() {
    return (h(Host, null,
      h("metadata-form", { sections: ["content-simple"], resource: this.resource }),
      h("calcite-button", { onClick: (event) => this.saveForm(event) }, "Save Info")));
  }
  static get is() { return "hub-metadata-editor"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["hub-metadata-editor.css"]
  }; }
  static get styleUrls() { return {
    "$": ["hub-metadata-editor.css"]
  }; }
  static get properties() { return {
    "item": {
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
      "attribute": "item",
      "reflect": false,
      "defaultValue": "\"1467319d449c44548bd63217f9b3c45a\""
    },
    "itemTitle": {
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
      "attribute": "item-title",
      "reflect": false
    },
    "tags": {
      "type": "unknown",
      "mutable": true,
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
      "defaultValue": "[]"
    },
    "summary": {
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
      "attribute": "summary",
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
      "reflect": false,
      "defaultValue": "null"
    }
  }; }
  static get states() { return {
    "resource": {}
  }; }
}
// TODO: remove this explicit form
//         <section class="metadata-section">
//             <div class="metadata-section-help">
//                 <h3>Basic Info</h3>
//                 <p>This information is used in search results, gallery cards and on the details views.</p>
//                 <p>Setting category and update frequency helps others identify, filter, and sort by relevance.</p>
//                 <p><a href={`${this.portal}/home/item.html?id=${this.item}`}>View in Online</a></p>
//             </div>
//             <div class="metadata-section-input">
//                 <label class="metadata-required">Title</label>
//                 <input type="text" ref={(el: HTMLInputElement) => this.titleEl = el} id="title" name="title" class="metadata-required" value={this.itemTitle} />
//                 <br />
//                 <label class="metadata-required">Summary</label>
//                 <textarea ref={(el: HTMLTextAreaElement) => this.summaryEl = el} id="summary" name="summary">
//                   {this.summary}
//                 </textarea>
//                 <label class="metadata-required">Tags</label>
//                 <input type="text" ref={(el: HTMLInputElement) => this.tagsEl = el} id="tags" name="tags" class="metadata-required" value={this.tags.join(',')} />
//                 <br />                
//             </div>
//         </section>
