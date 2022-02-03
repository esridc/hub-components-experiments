'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dad2b533.js');
const hubTeam = require('./hub-team-9769a554.js');
const utils = require('./utils-27ee60f0.js');
const UserSession = require('./UserSession-68b84217.js');
require('./hub-content-20389e15.js');
require('./get-1a802105.js');
require('./clean-url-e0d82cce.js');
require('./get-portal-url-674469a6.js');
require('./content-f2cad484.js');
require('./hub-search-0bb25918.js');
require('./search-79a183b0.js');
require('./create-filters-c9a367cb.js');
require('./get-prop-581f8032.js');
require('./get-user-88858550.js');
require('./search-453dd47b.js');
require('./get-portal-api-url-a814b68c.js');

const event24 = "M20 4.026h2V7H2V4.026h2v-1H1V21h22V3.026h-3zM22 20H2V8.026h20zM7 4.026v-1h10v1zM5 2h1v3H5zm13 0h1v3h-1zM9.209 17.309L12 15.28l2.791 2.028-1.066-3.281L16.515 12h-3.449L12 8.719 10.934 12h-3.45l2.791 2.028zM11.66 13l.34-1.046.34 1.046h1.097l-.888.646.34 1.044-.889-.645-.889.645.34-1.044-.889-.646z";

const users24 = "M7.5 9A3.5 3.5 0 1 0 4 5.5 3.504 3.504 0 0 0 7.5 9zm0-6A2.5 2.5 0 1 1 5 5.5 2.503 2.503 0 0 1 7.5 3zm2.713 14a5.456 5.456 0 0 0-.188 1H2v-3.5A4.505 4.505 0 0 1 6.5 10h2a4.503 4.503 0 0 1 4.414 3.649 5.518 5.518 0 0 0-.936.632A3.495 3.495 0 0 0 8.5 11h-2A3.504 3.504 0 0 0 3 14.5V17zm6.287-4A3.5 3.5 0 1 0 13 9.5a3.504 3.504 0 0 0 3.5 3.5zm0-6A2.5 2.5 0 1 1 14 9.5 2.503 2.503 0 0 1 16.5 7zM22 18.5a4.505 4.505 0 0 0-4.5-4.5h-2a4.505 4.505 0 0 0-4.5 4.5V22h11zM21 21h-9v-2.5a3.504 3.504 0 0 1 3.5-3.5h2a3.504 3.504 0 0 1 3.5 3.5z";

const hubEventsListCss = ":host{display:block}.event span{display:inline}.icon{margin-right:5px;position:relative;top:8px}.event span.summary{font-size:0.8em;font-weight:300;display:block;margin-left:29px}";

let HubEventsList = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  async componentWillLoad() {
    this.session = utils.readSessionFromCookie();
    const auth = UserSession.UserSession.deserialize(this.session);
    let eventSearch = await hubTeam.getMemberEvents(auth);
    this.events = eventSearch.results;
    console.log("hub-events-list events", this.events);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null), this.events.map((result) => index.h("div", { class: "event" }, index.h("span", { class: "icon" }, index.h("svg", { width: "24", height: "24" }, index.h("path", { d: event24 }))), index.h("span", { class: "name" }, index.h("a", { href: `#${result.url}` }, result.name)), index.h("span", { class: "summary" }, result.summary)))));
  }
};
HubEventsList.style = hubEventsListCss;

const hubListCss = ":host{display:block}.list-item{box-shadow:0 1px 2px rgba(0,0,0,0.15);transition:all 0.3s ease-in-out;padding:2px;margin-bottom:10px;transition:all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);position:relative}.list-item::after{content:'';position:absolute;z-index:-1;opacity:0;border-radius:5px;box-shadow:0 5px 15px rgba(0,0,0,0.3);transition:opacity 0.3s ease-in-out;transition:all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)}.list-item:hover{transform:scale(1.1, 1.1)}.list-item:hover::after{opacity:1}.list-item{position:relative}.list-item a{position:absolute;width:100%;height:100%;top:0px;left:0px}span{display:inline}.name{font-weight:bold}.icon{margin-right:5px;position:relative;top:8px}span.summary{font-size:0.8em;font-weight:300;display:block;margin-left:29px}";

let HubList = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null), this.collection.map((item) => index.h("div", { class: "list-item" }, index.h("span", { class: "icon" }, index.h("svg", { width: "24", height: "24" }, index.h("path", { d: users24 }))), index.h("span", { class: "name" }, index.h("a", { href: `#${item.url}` }), item.name), index.h("span", { class: "summary" }, item.summary)))));
  }
};
HubList.style = hubListCss;

const hubPlacesMapCss = ":host{display:block}.places-map{height:100%}";

let HubPlacesMap = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
      this.session = utils.readSessionFromCookie();
      const auth = UserSession.UserSession.deserialize(this.session);
      console.log("Session", this.session);
      if (this.session !== undefined) {
        const username = JSON.parse(this.session).username;
        this.value = await hubTeam.getMemberPlaces(username, auth);
      }
    }
  }
  placeAdded(event) {
    console.log("hub-places-map: placeAdded", event);
    if (this.bindState) {
      const authentication = UserSession.UserSession.deserialize(this.session);
      const places = [
        {
          name: "Custom",
          geometry: event.detail.geometry
        }
      ];
      let response = hubTeam.setMemberPlaces(authentication.username, places, authentication);
      console.log("hub-places-map: placeAdded", response);
    }
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null), index.h("hub-map", { class: "places-map", drawing: true, geometry: this.value.map((place) => { return place.geometry; }) })));
  }
};
HubPlacesMap.style = hubPlacesMapCss;

const hubStatisticCss = ":host{display:block}.statistic-s span{display:inline}.statistic-s span:not(:last-child){padding-right:2px}.statistic-s .value{font-weight:bold}.statistic-m span{display:block}.statistic-m .label{border-bottom:1px solid #888}.statistic-m span:not(:first-child){padding-right:2px;display:inline}.statistic-m .value{font-weight:bold;font-size:1.5em}";

let HubStatistic = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null), index.h("div", { class: `statistic-${this.size}` }, index.h("span", { class: "label" }, this.label), index.h("span", { class: "value" }, this.value), index.h("span", { class: "units" }, this.units))));
  }
};
HubStatistic.style = hubStatisticCss;

exports.hub_events_list = HubEventsList;
exports.hub_list = HubList;
exports.hub_places_map = HubPlacesMap;
exports.hub_statistic = HubStatistic;
