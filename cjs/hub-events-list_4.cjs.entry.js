'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ad6d6974.js');
const index$1 = require('./index-7e16d631.js');
require('./hub-content-cabee099.js');
require('./index-859d80b7.js');
require('./index-c635a7b6.js');
require('./index-0c96a340.js');
require('./index-7b2ecf99.js');
require('./hub-search-478dc16b.js');
const index$6 = require('./index-52faf404.js');
require('./index-a3b3575e.js');
const hubTeam = require('./hub-team-ffa353c9.js');
const utils = require('./utils-05b33af8.js');

const hubEventsListCss = ":host{display:block}.event span{display:inline}.icon{margin-right:5px;position:relative;top:8px}.event span.summary{font-size:0.8em;font-weight:300;display:block;margin-left:29px}";

const HubEventsList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    async componentWillLoad() {
        this.session = utils.readSessionFromCookie();
        const auth = index$6.UserSession.deserialize(this.session);
        let eventSearch = await hubTeam.getMemberEvents(auth);
        this.events = eventSearch.results;
        console.log("hub-events-list events", this.events);
    }
    render() {
        return (index.h(index.Host, null, index.h("slot", null), this.events.map((result) => index.h("div", { class: "event" }, index.h("span", { class: "icon" }, index.h("svg", { width: "24", height: "24" }, index.h("path", { d: index$1.event24 }))), index.h("span", { class: "name" }, index.h("a", { href: `#${result.url}` }, result.name)), index.h("span", { class: "summary" }, result.summary)))));
    }
};
HubEventsList.style = hubEventsListCss;

const hubListCss = ":host{display:block}.list-item{-webkit-box-shadow:0 1px 2px rgba(0,0,0,0.15);box-shadow:0 1px 2px rgba(0,0,0,0.15);-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;padding:2px;margin-bottom:10px;-webkit-transition:all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);transition:all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);position:relative}.list-item::after{content:'';position:absolute;z-index:-1;opacity:0;border-radius:5px;-webkit-box-shadow:0 5px 15px rgba(0,0,0,0.3);box-shadow:0 5px 15px rgba(0,0,0,0.3);-webkit-transition:opacity 0.3s ease-in-out;transition:opacity 0.3s ease-in-out;-webkit-transition:all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);transition:all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)}.list-item:hover{-webkit-transform:scale(1.1, 1.1);transform:scale(1.1, 1.1)}.list-item:hover::after{opacity:1}.list-item{position:relative}.list-item a{position:absolute;width:100%;height:100%;top:0px;left:0px}span{display:inline}.name{font-weight:bold}.icon{margin-right:5px;position:relative;top:8px}span.summary{font-size:0.8em;font-weight:300;display:block;margin-left:29px}";

const HubList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("slot", null), this.collection.map((item) => index.h("div", { class: "list-item" }, index.h("span", { class: "icon" }, index.h("svg", { width: "24", height: "24" }, index.h("path", { d: index$1.users24 }))), index.h("span", { class: "name" }, index.h("a", { href: `#${item.url}` }), item.name), index.h("span", { class: "summary" }, item.summary)))));
    }
};
HubList.style = hubListCss;

const hubPlacesMapCss = ":host{display:block}.places-map{height:100%}";

const HubPlacesMap = class {
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
            const auth = index$6.UserSession.deserialize(this.session);
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
            const authentication = index$6.UserSession.deserialize(this.session);
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

const HubStatistic = class {
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
