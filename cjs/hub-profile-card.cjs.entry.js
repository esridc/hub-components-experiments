'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dad2b533.js');
const hubTeam = require('./hub-team-9769a554.js');
const hubContent = require('./hub-content-20389e15.js');
require('./hub-search-0bb25918.js');
require('./search-79a183b0.js');
require('./get-portal-url-674469a6.js');
require('./clean-url-e0d82cce.js');
require('./create-filters-c9a367cb.js');
require('./get-prop-581f8032.js');
require('./get-user-88858550.js');
require('./search-453dd47b.js');
require('./get-portal-api-url-a814b68c.js');
require('./get-1a802105.js');
require('./content-f2cad484.js');

const hubProfileCardCss = ":host{display:block}";

let HubProfileCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
      console.log("Profile: ", [this.type, hubContent.CommunityType.team, hubContent.CommunityType[this.type] == hubContent.CommunityType.team]);
      this.profile = (hubContent.CommunityType[this.type] == hubContent.CommunityType.team) ? await hubTeam.getTeam(id) : await hubTeam.getMember(id);
    }
    catch (_a) {
      console.log("hub-profile-card: error with profile", id);
    }
  }
  render() {
    let output = [];
    if (this.profile !== undefined && this.profile !== null) {
      output.push(index.h("hub-card", { class: "hub-profile", contenttype: hubContent.HubType[this.profile.hubType], image: this.profile.thumbnailUrl, name: this.profile.name, description: this.profile.summary, url: this.profile.url }));
    }
    return (index.h(index.Host, null, output));
  }
};
HubProfileCard.style = hubProfileCardCss;

exports.hub_profile_card = HubProfileCard;
