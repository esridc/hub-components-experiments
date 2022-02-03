import { Component, Host, h, Prop, State } from '@stencil/core';
import * as HubMember from '../../../utils/hub-member';
import { UserSession } from '@esri/arcgis-rest-auth';
import { readSessionFromCookie } from '../../../utils/utils';
import { event24 } from '@esri/calcite-ui-icons';
export class HubEventsList {
  async componentWillLoad() {
    this.session = readSessionFromCookie();
    const auth = UserSession.deserialize(this.session);
    let eventSearch = await HubMember.getMemberEvents(auth);
    this.events = eventSearch.results;
    console.log("hub-events-list events", this.events);
  }
  render() {
    return (h(Host, null,
      h("slot", null),
      this.events.map((result) => h("div", { class: "event" },
        h("span", { class: "icon" },
          h("svg", { width: "24", height: "24" },
            h("path", { d: event24 }))),
        h("span", { class: "name" },
          h("a", { href: `#${result.url}` }, result.name)),
        h("span", { class: "summary" }, result.summary)))));
  }
  static get is() { return "hub-events-list"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["hub-events-list.css"]
  }; }
  static get styleUrls() { return {
    "$": ["hub-events-list.css"]
  }; }
  static get properties() { return {
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
    }
  }; }
  static get states() { return {
    "events": {}
  }; }
}
