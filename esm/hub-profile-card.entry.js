import { r as registerInstance, h, H as Host } from './index-9fca3863.js';
import { e as getTeam, f as getMember } from './hub-team-48304e45.js';
import { C as CommunityType, H as HubType } from './hub-content-ba4934ea.js';
import './hub-search-992b92f5.js';
import './search-b0ff9cfb.js';
import './get-portal-url-fdc441e5.js';
import './clean-url-83c51f70.js';
import './create-filters-48231911.js';
import './get-prop-a0541ce0.js';
import './get-user-65c98cff.js';
import './search-9451d0d4.js';
import './get-portal-api-url-fba2ecae.js';
import './get-9aed8a75.js';
import './content-16805b54.js';

const hubProfileCardCss = ":host{display:block}";

let HubProfileCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
      console.log("Profile: ", [this.type, CommunityType.team, CommunityType[this.type] == CommunityType.team]);
      this.profile = (CommunityType[this.type] == CommunityType.team) ? await getTeam(id) : await getMember(id);
    }
    catch (_a) {
      console.log("hub-profile-card: error with profile", id);
    }
  }
  render() {
    let output = [];
    if (this.profile !== undefined && this.profile !== null) {
      output.push(h("hub-card", { class: "hub-profile", contenttype: HubType[this.profile.hubType], image: this.profile.thumbnailUrl, name: this.profile.name, description: this.profile.summary, url: this.profile.url }));
    }
    return (h(Host, null, output));
  }
};
HubProfileCard.style = hubProfileCardCss;

export { HubProfileCard as hub_profile_card };
