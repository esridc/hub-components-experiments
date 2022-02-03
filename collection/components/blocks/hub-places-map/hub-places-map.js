import { Component, Host, h, Prop, Listen } from '@stencil/core';
import { UserSession } from '@esri/arcgis-rest-auth';
import { readSessionFromCookie } from '../../../utils/utils';
import * as HubMember from '../../../utils/hub-member';
export class HubPlacesMap {
  constructor() {
    /**
     * Hub places array of geography.
     * Property name `value` because re-used across editors
     */
    this.value = [];
    /**
   * Choose to save or load places from user profile directly from session
     */
    this.bindState = false;
    /**
     * Option to view places map, or edit places map
     */
    this.mode = "view";
  }
  async componentWillLoad() {
    if (this.bindState) {
      this.session = readSessionFromCookie();
      const auth = UserSession.deserialize(this.session);
      console.log("Session", this.session);
      if (this.session !== undefined) {
        const username = JSON.parse(this.session).username;
        this.value = await HubMember.getMemberPlaces(username, auth);
      }
    }
  }
  placeAdded(event) {
    console.log("hub-places-map: placeAdded", event);
    if (this.bindState) {
      const authentication = UserSession.deserialize(this.session);
      const places = [
        {
          name: "Custom",
          geometry: event.detail.geometry
        }
      ];
      let response = HubMember.setMemberPlaces(authentication.username, places, authentication);
      console.log("hub-places-map: placeAdded", response);
    }
  }
  render() {
    return (h(Host, null,
      h("slot", null),
      h("hub-map", { class: "places-map", drawing: true, geometry: this.value.map((place) => { return place.geometry; }) })));
  }
  static get is() { return "hub-places-map"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["hub-places-map.css"]
  }; }
  static get styleUrls() { return {
    "$": ["hub-places-map.css"]
  }; }
  static get properties() { return {
    "value": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "HubTypes.IHubGeography[]",
        "resolved": "IHubGeography[]",
        "references": {
          "HubTypes": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Hub places array of geography.\nProperty name `value` because re-used across editors"
      },
      "defaultValue": "[]"
    },
    "bindState": {
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
        "text": "Choose to save or load places from user profile directly from session"
      },
      "attribute": "bind-state",
      "reflect": false,
      "defaultValue": "false"
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
        "text": "Serialized authentication information."
      },
      "attribute": "session",
      "reflect": false
    },
    "mode": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "\"view\" | \"edit\"",
        "resolved": "\"edit\" | \"view\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Option to view places map, or edit places map"
      },
      "attribute": "mode",
      "reflect": true,
      "defaultValue": "\"view\""
    }
  }; }
  static get listeners() { return [{
      "name": "drawingComplete",
      "method": "placeAdded",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
