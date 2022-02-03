import { Component, Host, h, Prop, State } from '@stencil/core';
import { UserSession } from '@esri/arcgis-rest-auth';
// import * as Portal from "@esri/arcgis-rest-portal";
import { readSessionFromCookie } from '../../../utils/utils';
import { getMember, updateMember } from '../../../utils/hub-member';
export class HubProfileEditor {
  constructor() {
    this.username = "aturner_cityx";
    /**
     * ClientID to identify the app launching auth
     */
    this.clientid = "WXC842NRBVB6NZ2r";
    this.portal = "https://www.arcgis.com";
    this.session = null;
    this.user = null;
  }
  async componentWillLoad() {
    this.session = readSessionFromCookie();
    const auth = UserSession.deserialize(this.session);
    this.user = await getMember(this.username, auth);
    // Portal.getUser(this.username).then((response) => {
    //   this.user = response; // For sending into the metadata form
    // })
  }
  saveForm(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("trace hub-profile-editor: onSave", e, this.user);
    const authentication = UserSession.deserialize(this.session);
    // TODO: remove need to load user first 
    const member = Object.assign(getMember(this.username, authentication), this.user);
    updateMember(this.username, member, authentication);
    // Portal.updateUser({
    //   user: {
    //     username: this.username,
    //     description: this.user.description,
    //     tags: this.user.tags
    //   },
    //   authentication
    // })
  }
  render() {
    return (h(Host, null,
      h("metadata-form", { sections: ['user', 'places'], resource: this.user }),
      h("calcite-button", { onClick: (event) => this.saveForm(event) }, "Save Profile")));
  }
  static get is() { return "hub-profile-editor"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["hub-profile-editor.css"]
  }; }
  static get styleUrls() { return {
    "$": ["hub-profile-editor.css"]
  }; }
  static get properties() { return {
    "username": {
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
      "attribute": "username",
      "reflect": false,
      "defaultValue": "\"aturner_cityx\""
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
    "user": {}
  }; }
}
