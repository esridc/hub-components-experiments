import { r as registerInstance, h, H as Host } from './index-17d4341f.js';
import { e as event24, u as users24 } from './index-21611a9b.js';
import './hub-content-82335dfd.js';
import './index-fd5669bb.js';
import './index-2b41d503.js';
import './index-31ce56d3.js';
import './index-c55b387e.js';
import './hub-search-eb1585d6.js';
import { U as UserSession } from './index-80082925.js';
import './index-52c4095a.js';
import { j as getMemberEvents, k as getMemberPlaces, o as setMemberPlaces } from './hub-team-d39e46f8.js';
import { r as readSessionFromCookie } from './utils-877cdb99.js';

const hubEventsListCss = ":host{display:block}.event span{display:inline}.icon{margin-right:5px;position:relative;top:8px}.event span.summary{font-size:0.8em;font-weight:300;display:block;margin-left:29px}";

const HubEventsList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    async componentWillLoad() {
        this.session = readSessionFromCookie();
        const auth = UserSession.deserialize(this.session);
        let eventSearch = await getMemberEvents(auth);
        this.events = eventSearch.results;
        console.log("hub-events-list events", this.events);
    }
    render() {
        return (h(Host, null, h("slot", null), this.events.map((result) => h("div", { class: "event" }, h("span", { class: "icon" }, h("svg", { width: "24", height: "24" }, h("path", { d: event24 }))), h("span", { class: "name" }, h("a", { href: `#${result.url}` }, result.name)), h("span", { class: "summary" }, result.summary)))));
    }
};
HubEventsList.style = hubEventsListCss;

const hubListCss = ":host{display:block}.list-item{-webkit-box-shadow:0 1px 2px rgba(0,0,0,0.15);box-shadow:0 1px 2px rgba(0,0,0,0.15);-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;padding:2px;margin-bottom:10px;-webkit-transition:all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);transition:all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);position:relative}.list-item::after{content:'';position:absolute;z-index:-1;opacity:0;border-radius:5px;-webkit-box-shadow:0 5px 15px rgba(0,0,0,0.3);box-shadow:0 5px 15px rgba(0,0,0,0.3);-webkit-transition:opacity 0.3s ease-in-out;transition:opacity 0.3s ease-in-out;-webkit-transition:all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);transition:all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)}.list-item:hover{-webkit-transform:scale(1.1, 1.1);transform:scale(1.1, 1.1)}.list-item:hover::after{opacity:1}.list-item{position:relative}.list-item a{position:absolute;width:100%;height:100%;top:0px;left:0px}span{display:inline}.name{font-weight:bold}.icon{margin-right:5px;position:relative;top:8px}span.summary{font-size:0.8em;font-weight:300;display:block;margin-left:29px}";

const HubList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null), this.collection.map((item) => h("div", { class: "list-item" }, h("span", { class: "icon" }, h("svg", { width: "24", height: "24" }, h("path", { d: users24 }))), h("span", { class: "name" }, h("a", { href: `#${item.url}` }), item.name), h("span", { class: "summary" }, item.summary)))));
    }
};
HubList.style = hubListCss;

const hubPlacesMapCss = ":host{display:block}.places-map{height:100%}";

const HubPlacesMap = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
            this.session = readSessionFromCookie();
            const auth = UserSession.deserialize(this.session);
            console.log("Session", this.session);
            if (this.session !== undefined) {
                const username = JSON.parse(this.session).username;
                this.value = await getMemberPlaces(username, auth);
            }
        }
    }
    placeAdded(event) {
        console.log("hub-places-map: placeAdded", event);
        if (this.bindState) {
            const authentication = UserSession.deserialize(this.session);
            const places = [
                {
                    name: "Custom",
                    geometry: event.detail.geometry
                }
            ];
            let response = setMemberPlaces(authentication.username, places, authentication);
            console.log("hub-places-map: placeAdded", response);
        }
    }
    render() {
        return (h(Host, null, h("slot", null), h("hub-map", { class: "places-map", drawing: true, geometry: this.value.map((place) => { return place.geometry; }) })));
    }
};
HubPlacesMap.style = hubPlacesMapCss;

const hubStatisticCss = ":host{display:block}.statistic-s span{display:inline}.statistic-s span:not(:last-child){padding-right:2px}.statistic-s .value{font-weight:bold}.statistic-m span{display:block}.statistic-m .label{border-bottom:1px solid #888}.statistic-m span:not(:first-child){padding-right:2px;display:inline}.statistic-m .value{font-weight:bold;font-size:1.5em}";

const HubStatistic = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null), h("div", { class: `statistic-${this.size}` }, h("span", { class: "label" }, this.label), h("span", { class: "value" }, this.value), h("span", { class: "units" }, this.units))));
    }
};
HubStatistic.style = hubStatisticCss;

export { HubEventsList as hub_events_list, HubList as hub_list, HubPlacesMap as hub_places_map, HubStatistic as hub_statistic };
