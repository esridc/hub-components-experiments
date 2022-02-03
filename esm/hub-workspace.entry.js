import { r as registerInstance, h, H as Host } from './index-9fca3863.js';
import { f as getMember, h as getMemberTeams, i as getMemberEvents, j as getMemberPlaces, k as searchMemberContent, l as searchMemberComments } from './hub-team-48304e45.js';
import { r as readSessionFromCookie, t as truncateString } from './utils-49410b4c.js';
import { H as HubType } from './hub-content-ba4934ea.js';
import { U as UserSession } from './UserSession-1faae0f0.js';
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

const hubWorkspaceCss = ":host{display:block}.workspace-grid{display:grid;grid-template-columns:15% 30% 30% 25%;grid-template-rows:auto;grid-template-areas:\"avatar bio map .\"\n    \"interests teams teams events\";column-gap:10px;row-gap:20px;padding:0 1rem 0 3rem}.workspace-avatar{grid-area:avatar}img.avatar{border-radius:50%}.workspace-bio{grid-area:bio}.workspace-map{grid-area:map;height:200px}.workspace-interests{grid-area:interests}.workspace-events{grid-area:events}.workspace-teams{grid-area:teams;}@media screen and (max-width: 530px){.gallery-card{width:calc((100% - (0 * 30px))/ 1)}}@media screen and (min-width: 530px) and (max-width: 975px){.gallery-card{width:calc((100% - (1 * 30px))/ 2)}}@media screen and (min-width: 975px) and (max-width: 1200px){.gallery-card{width:calc((100% - (2 * 30px))/ 3)}}@media screen and (min-width:1200px){.gallery-card{width:calc((100% - (3 * 30px))/ 4)}}.gallery{display:flex;flex-direction:row;flex-wrap:wrap;margin-bottom:30px;justify-content:space-between}.gallery-card{flex:1;width:32%;color:#4c4c4c;box-shadow:0 0 5px 0 rgba(76,76,76,.25);margin-right:10px;}.gallery-header,h3,h4{border-bottom:1px solid #888;margin-bottom:3px;width:100%}.gallery-header a,.gallery-header h4,.gallery-header h2{display:inline}.gallery-header a{text-decoration:none;color:#448}a.explore{float:right;font-size:0.8em;margin-top:5px}.gallery-header a:hover{text-decoration:underline}.team-gallery{padding:24px;margin:16px 0;width:auto;box-shadow:0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);transition:box-shadow 83ms}";

let HubWorkspace = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  async componentWillLoad() {
    this.session = readSessionFromCookie();
    console.log("Session", this.session);
    if (!!this.session) {
      const auth = UserSession.deserialize(this.session);
      const username = JSON.parse(this.session).username;
      this.token = JSON.parse(this.session).token;
      [this.member,
        this.teams,
        this.events,
        this.places,
        this.content,
        this.comments] = await Promise.all([
        await getMember(username, auth),
        await getMemberTeams(auth),
        await getMemberEvents(auth),
        await getMemberPlaces(username, auth),
        await searchMemberContent(username, auth),
        await searchMemberComments(username, auth)
      ]);
      console.log("Workspace: Events", this.events);
    }
  }
  dateToText(date) {
    const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' });
    const [{ value: month }, , { value: day }, , { value: year }] = dateTimeFormat.formatToParts(date);
    return `${day}-${month}-${year}`;
  }
  render() {
    var _a;
    let output = [];
    if (this.session !== undefined) {
      output.push(h("div", { class: "workspace-grid" }, h("div", { class: "workspace-avatar" }, h("img", { src: this.member.thumbnailUrl, class: "avatar", alt: "Profile Image" })), h("div", { class: "workspace-bio" }, h("h1", null, this.member.name), h("p", null, this.member.summary), h("em", null, "Joined ", this.dateToText(this.member.createdDate))), h("div", { class: "workspace-map" }, h("hub-places-map", { mode: "view", session: this.session })), h("div", { class: "workspace-interests" }, h("h3", null, "Stats"), h("hub-statistic", { size: "m", value: this.teams.meta.total, units: "Teams" }), h("hub-statistic", { size: "m", value: this.events.meta.total, units: "Events" }), h("hub-statistic", { size: "m", value: this.content.meta.total, units: "Content Items" }), h("hub-statistic", { size: "m", value: this.places.length, units: "Places" }), h("hub-statistic", { size: "m", value: this.comments.length, units: "Comments" }), h("h3", null, "Interests"), (_a = this.member.metadata) === null || _a === void 0 ? void 0 :
        _a.interests.map((tag) => h("calcite-chip", { value: tag }, tag)), h("h3", null, "Places"), this.places.map((place) => h("calcite-chip", { value: place.name }, place.name, " (", place.coverage, ")"))), h("div", { class: "workspace-events" }, h("h3", null, "Upcoming Events"), h("hub-events-list", { session: this.session }), h("hub-list", { collection: this.teams.results }, h("h3", null, "Your Teams"))), h("div", { class: "workspace-teams" }, h("div", { class: "gallery-header" }, h("h2", null, "My Content"), h("a", { class: "explore", href: "#" }, "See all>")), h("div", { class: "gallery" }, this.content.results.slice(0, 4).map((result) => h("hub-card", { class: "gallery-card", contenttype: `${HubType[result.hubType]} by ${result.publisher.name}`, image: `${result.thumbnailUrl}?token=${this.token}`, name: truncateString(result.name, 55), description: truncateString(result.summary, 90), url: result.url, buttonText: `View ${HubType[result.hubType]}`, onClick: () => "" }))), h("h2", null, "Your Teams"), this.teams.results.slice(0, 8).map((result) => h("div", { class: "team-gallery" }, h("div", { class: "gallery-header" }, h("h4", null, h("a", { href: result.url }, result.name, " >"))), h("hub-gallery", { session: this.session, limit: 4, groups: result.id, showsearch: false, sort: "modified", hubtype: "content" }))))));
    }
    else {
      output.push(h("calcite-loader", { label: "label", text: "Fetching workspace...", "is-active": true }));
    }
    return (h(Host, null, h("slot", null), output));
  }
};
HubWorkspace.style = hubWorkspaceCss;

export { HubWorkspace as hub_workspace };
