'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dad2b533.js');
const hubTeam = require('./hub-team-9769a554.js');
const utils = require('./utils-27ee60f0.js');
const hubContent = require('./hub-content-20389e15.js');
const UserSession = require('./UserSession-68b84217.js');
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

const hubWorkspaceCss = ":host{display:block}.workspace-grid{display:grid;grid-template-columns:15% 30% 30% 25%;grid-template-rows:auto;grid-template-areas:\"avatar bio map .\"\n    \"interests teams teams events\";column-gap:10px;row-gap:20px;padding:0 1rem 0 3rem}.workspace-avatar{grid-area:avatar}img.avatar{border-radius:50%}.workspace-bio{grid-area:bio}.workspace-map{grid-area:map;height:200px}.workspace-interests{grid-area:interests}.workspace-events{grid-area:events}.workspace-teams{grid-area:teams;}@media screen and (max-width: 530px){.gallery-card{width:calc((100% - (0 * 30px))/ 1)}}@media screen and (min-width: 530px) and (max-width: 975px){.gallery-card{width:calc((100% - (1 * 30px))/ 2)}}@media screen and (min-width: 975px) and (max-width: 1200px){.gallery-card{width:calc((100% - (2 * 30px))/ 3)}}@media screen and (min-width:1200px){.gallery-card{width:calc((100% - (3 * 30px))/ 4)}}.gallery{display:flex;flex-direction:row;flex-wrap:wrap;margin-bottom:30px;justify-content:space-between}.gallery-card{flex:1;width:32%;color:#4c4c4c;box-shadow:0 0 5px 0 rgba(76,76,76,.25);margin-right:10px;}.gallery-header,h3,h4{border-bottom:1px solid #888;margin-bottom:3px;width:100%}.gallery-header a,.gallery-header h4,.gallery-header h2{display:inline}.gallery-header a{text-decoration:none;color:#448}a.explore{float:right;font-size:0.8em;margin-top:5px}.gallery-header a:hover{text-decoration:underline}.team-gallery{padding:24px;margin:16px 0;width:auto;box-shadow:0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);transition:box-shadow 83ms}";

let HubWorkspace = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  async componentWillLoad() {
    this.session = utils.readSessionFromCookie();
    console.log("Session", this.session);
    if (!!this.session) {
      const auth = UserSession.UserSession.deserialize(this.session);
      const username = JSON.parse(this.session).username;
      this.token = JSON.parse(this.session).token;
      [this.member,
        this.teams,
        this.events,
        this.places,
        this.content,
        this.comments] = await Promise.all([
        await hubTeam.getMember(username, auth),
        await hubTeam.getMemberTeams(auth),
        await hubTeam.getMemberEvents(auth),
        await hubTeam.getMemberPlaces(username, auth),
        await hubTeam.searchMemberContent(username, auth),
        await hubTeam.searchMemberComments(username, auth)
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
      output.push(index.h("div", { class: "workspace-grid" }, index.h("div", { class: "workspace-avatar" }, index.h("img", { src: this.member.thumbnailUrl, class: "avatar", alt: "Profile Image" })), index.h("div", { class: "workspace-bio" }, index.h("h1", null, this.member.name), index.h("p", null, this.member.summary), index.h("em", null, "Joined ", this.dateToText(this.member.createdDate))), index.h("div", { class: "workspace-map" }, index.h("hub-places-map", { mode: "view", session: this.session })), index.h("div", { class: "workspace-interests" }, index.h("h3", null, "Stats"), index.h("hub-statistic", { size: "m", value: this.teams.meta.total, units: "Teams" }), index.h("hub-statistic", { size: "m", value: this.events.meta.total, units: "Events" }), index.h("hub-statistic", { size: "m", value: this.content.meta.total, units: "Content Items" }), index.h("hub-statistic", { size: "m", value: this.places.length, units: "Places" }), index.h("hub-statistic", { size: "m", value: this.comments.length, units: "Comments" }), index.h("h3", null, "Interests"), (_a = this.member.metadata) === null || _a === void 0 ? void 0 :
        _a.interests.map((tag) => index.h("calcite-chip", { value: tag }, tag)), index.h("h3", null, "Places"), this.places.map((place) => index.h("calcite-chip", { value: place.name }, place.name, " (", place.coverage, ")"))), index.h("div", { class: "workspace-events" }, index.h("h3", null, "Upcoming Events"), index.h("hub-events-list", { session: this.session }), index.h("hub-list", { collection: this.teams.results }, index.h("h3", null, "Your Teams"))), index.h("div", { class: "workspace-teams" }, index.h("div", { class: "gallery-header" }, index.h("h2", null, "My Content"), index.h("a", { class: "explore", href: "#" }, "See all>")), index.h("div", { class: "gallery" }, this.content.results.slice(0, 4).map((result) => index.h("hub-card", { class: "gallery-card", contenttype: `${hubContent.HubType[result.hubType]} by ${result.publisher.name}`, image: `${result.thumbnailUrl}?token=${this.token}`, name: utils.truncateString(result.name, 55), description: utils.truncateString(result.summary, 90), url: result.url, buttonText: `View ${hubContent.HubType[result.hubType]}`, onClick: () => "" }))), index.h("h2", null, "Your Teams"), this.teams.results.slice(0, 8).map((result) => index.h("div", { class: "team-gallery" }, index.h("div", { class: "gallery-header" }, index.h("h4", null, index.h("a", { href: result.url }, result.name, " >"))), index.h("hub-gallery", { session: this.session, limit: 4, groups: result.id, showsearch: false, sort: "modified", hubtype: "content" }))))));
    }
    else {
      output.push(index.h("calcite-loader", { label: "label", text: "Fetching workspace...", "is-active": true }));
    }
    return (index.h(index.Host, null, index.h("slot", null), output));
  }
};
HubWorkspace.style = hubWorkspaceCss;

exports.hub_workspace = HubWorkspace;
