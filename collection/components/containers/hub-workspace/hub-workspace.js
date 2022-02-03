import { Component, Host, h, Prop, State } from '@stencil/core';
import * as HubMember from '../../../utils/hub-member';
import { UserSession } from '@esri/arcgis-rest-auth';
import { readSessionFromCookie, truncateString } from '../../../utils/utils';
import * as HubTypes from '../../../utils/hub-types';
export class HubWorkspace {
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
        await HubMember.getMember(username, auth),
        await HubMember.getMemberTeams(auth),
        await HubMember.getMemberEvents(auth),
        await HubMember.getMemberPlaces(username, auth),
        await HubMember.searchMemberContent(username, auth),
        await HubMember.searchMemberComments(username, auth)
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
      output.push(h("div", { class: "workspace-grid" },
        h("div", { class: "workspace-avatar" },
          h("img", { src: this.member.thumbnailUrl, class: "avatar", alt: "Profile Image" })),
        h("div", { class: "workspace-bio" },
          h("h1", null, this.member.name),
          h("p", null, this.member.summary),
          h("em", null,
            "Joined ",
            this.dateToText(this.member.createdDate))),
        h("div", { class: "workspace-map" },
          h("hub-places-map", { mode: "view", session: this.session })),
        h("div", { class: "workspace-interests" },
          h("h3", null, "Stats"),
          h("hub-statistic", { size: "m", value: this.teams.meta.total, units: "Teams" }),
          h("hub-statistic", { size: "m", value: this.events.meta.total, units: "Events" }),
          h("hub-statistic", { size: "m", value: this.content.meta.total, units: "Content Items" }),
          h("hub-statistic", { size: "m", value: this.places.length, units: "Places" }),
          h("hub-statistic", { size: "m", value: this.comments.length, units: "Comments" }),
          h("h3", null, "Interests"), (_a = this.member.metadata) === null || _a === void 0 ? void 0 :
          _a.interests.map((tag) => h("calcite-chip", { value: tag }, tag)),
          h("h3", null, "Places"),
          this.places.map((place) => h("calcite-chip", { value: place.name },
            place.name,
            " (",
            place.coverage,
            ")"))),
        h("div", { class: "workspace-events" },
          h("h3", null, "Upcoming Events"),
          h("hub-events-list", { session: this.session }),
          h("hub-list", { collection: this.teams.results },
            h("h3", null, "Your Teams"))),
        h("div", { class: "workspace-teams" },
          h("div", { class: "gallery-header" },
            h("h2", null, "My Content"),
            h("a", { class: "explore", href: "#" }, "See all>")),
          h("div", { class: "gallery" }, this.content.results.slice(0, 4).map((result) => h("hub-card", { class: "gallery-card", contenttype: `${HubTypes.HubType[result.hubType]} by ${result.publisher.name}`, image: `${result.thumbnailUrl}?token=${this.token}`, name: truncateString(result.name, 55), description: truncateString(result.summary, 90), url: result.url, buttonText: `View ${HubTypes.HubType[result.hubType]}`, onClick: () => "" }))),
          h("h2", null, "Your Teams"),
          this.teams.results.slice(0, 8).map((result) => h("div", { class: "team-gallery" },
            h("div", { class: "gallery-header" },
              h("h4", null,
                h("a", { href: result.url },
                  result.name,
                  " >"))),
            h("hub-gallery", { session: this.session, limit: 4, groups: result.id, showsearch: false, sort: "modified", hubtype: "content" }))))));
    }
    else {
      output.push(h("calcite-loader", { label: "label", text: "Fetching workspace...", "is-active": true }));
    }
    return (h(Host, null,
      h("slot", null),
      output));
  }
  static get is() { return "hub-workspace"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["hub-workspace.css"]
  }; }
  static get styleUrls() { return {
    "$": ["hub-workspace.css"]
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
    "teams": {},
    "member": {},
    "events": {},
    "places": {},
    "content": {},
    "comments": {},
    "token": {}
  }; }
}
