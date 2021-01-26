import { r as registerInstance, h, H as Host } from './index-17d4341f.js';
import { C as CommunityType, H as HubType } from './hub-content-82335dfd.js';
import './index-fd5669bb.js';
import './index-2b41d503.js';
import './index-31ce56d3.js';
import './index-c55b387e.js';
import './hub-search-eb1585d6.js';
import './index-52c4095a.js';
import { f as getTeam, h as getMember } from './hub-team-d39e46f8.js';

const hubProfileCardCss = ":host{display:block}";

const HubProfileCard = class {
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
