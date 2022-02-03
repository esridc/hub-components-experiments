import { Component, Host, h, Prop, State } from '@stencil/core';
import * as HubMember from '../../../utils/hub-member';
import * as HubTeam from '../../../utils/hub-team';
import * as HubTypes from '../../../utils/hub-types';
export class HubProfileCard {
  constructor() {
    /**
     * ID For the profile. Username, Team ID, Org ID
     */
    this.username = "";
    /**
     * Which Profile: member, team
     */
    this.type = "member";
  }
  componentWillLoad() {
    this.loadProfile(this.username);
  }
  /**
   *
   * @param id
   * @param type
   */
  async loadProfile(id) {
    try {
      console.log("Profile: ", [this.type, HubTypes.CommunityType.team, HubTypes.CommunityType[this.type] == HubTypes.CommunityType.team]);
      this.profile = (HubTypes.CommunityType[this.type] == HubTypes.CommunityType.team) ? await HubTeam.getTeam(id) : await HubMember.getMember(id);
    }
    catch (_a) {
      console.log("hub-profile-card: error with profile", id);
    }
  }
  render() {
    let output = [];
    if (this.profile !== undefined && this.profile !== null) {
      output.push(h("hub-card", { class: "hub-profile", contenttype: HubTypes.HubType[this.profile.hubType], image: this.profile.thumbnailUrl, name: this.profile.name, description: this.profile.summary, url: this.profile.url }));
    }
    return (h(Host, null, output));
  }
  static get is() { return "hub-profile-card"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["hub-profile-card.css"]
  }; }
  static get styleUrls() { return {
    "$": ["hub-profile-card.css"]
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
        "text": "ID For the profile. Username, Team ID, Org ID"
      },
      "attribute": "username",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "type": {
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
        "text": "Which Profile: member, team"
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "\"member\""
    }
  }; }
  static get states() { return {
    "profile": {}
  }; }
}
