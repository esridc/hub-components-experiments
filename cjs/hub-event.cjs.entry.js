'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ad6d6974.js');
require('./index-859d80b7.js');
const index$3 = require('./index-c635a7b6.js');
require('./index-0c96a340.js');
const index$6 = require('./index-52faf404.js');
const index$7 = require('./index-a3b3575e.js');
const utils = require('./utils-05b33af8.js');

const hubEventCss = ".hub-event-details{border:1px solid #ccc;border-radius:4px;width:100%;color:#323232;font-size:14px;width:380px;height:400px;font-family:'Arial';display:grid;grid-template-columns:auto;grid-template-rows:40% 40% 20%;grid-template-areas:\"header\"\n    \"main\"\n    \"footer\"}.hub-event-background-image{background-color:rgb(255, 174, 0);grid-area:header}.hub-event-content{grid-area:main;padding-left:40px;padding-right:40px}.hub-event-footer{grid-area:footer;padding-left:40px}";

const HubEvent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * url of the ArcGIS Online organization
         */
        this.orgurl = "https://www.arcgis.com";
        /**
         * Text to display on the button
         */
        this.callToActionText = "Attend";
        this.triggerRegister = () => {
            this.session = utils.readSessionFromCookie();
            if (!this.session) {
                // register your own app to create a unique clientId
                return index$6.UserSession.beginOAuth2({
                    clientId: this.clientid,
                    portal: `${this.orgurl}/sharing/rest`,
                    redirectUri: `${window.location}authenticate.html`
                })
                    .then(session => {
                    utils.writeSessionToCookie(session);
                    this.session = session.serialize();
                    return this.toggleRegister();
                });
            }
            else {
                return this.toggleRegister();
            }
        };
        this.toggleRegister = () => {
            if (!this.attending) {
                return index$7.registerForEvent({
                    groupId: this.eventGroupId,
                    authentication: index$6.UserSession.deserialize(this.session)
                })
                    .then(response => {
                    if (response.success === true) {
                        return Promise.resolve();
                    }
                })
                    .catch(err => {
                    if (err.originalMessage === "User is already a member of group.") {
                        return Promise.resolve();
                    }
                    else
                        throw err;
                })
                    .then(() => {
                    this.callToActionText = "Attending";
                    this.attending = true;
                    return { success: true };
                });
            }
            else {
                return index$7.unregisterForEvent({
                    groupId: this.eventGroupId,
                    authentication: index$6.UserSession.deserialize(this.session)
                })
                    .then(response => {
                    if (response.success === true) {
                        this.callToActionText = "Attend";
                        this.attending = false;
                        return { success: true };
                    }
                    else
                        return { success: false };
                });
            }
        };
    }
    componentDidLoad() {
        let hubUrl = this.orgurl.replace('maps', 'hub');
        // const hubAPI = 'https://hub.arcgis.com/api/v3/events/BBpPn9wZu2D6eTNY/Hub%20Events%20(public)/FeatureServer/0/95/attachments/40'
        index$3.getPortal(null, {
            portal: `${this.orgurl}/sharing/rest/`
        })
            .then(response => {
            index$7.getEventServiceUrl(response.id)
                .then(url => {
                this.eventServiceUrl = url;
                index$7.searchEvents({ url: this.eventServiceUrl })
                    .then(response => {
                    if (response.data.length > 0) {
                        for (let i = 0; i < response.data.length; i++) {
                            if (response.data[i].attributes.title === this.eventtitle) {
                                const eventDetails = response.data[i].attributes;
                                this.eventDate = new Date(eventDetails.startDate).toString();
                                this.eventGroupId = eventDetails.groupId;
                                this.eventOrganizer = this.digOutContactInfo(eventDetails);
                                this.eventUrl = `${hubUrl}/events/${eventDetails.url}`;
                                // this.eventImage = `${eventServiceUrl}/${eventDetails.OBJECTID}/attachments`
                                break;
                            }
                        }
                    }
                });
            });
        });
    }
    digOutContactInfo(details) {
        const organizers = JSON.parse(details.organizers);
        if (organizers.length > 0) {
            const contact = `mailto:${organizers[0].contact}`;
            return `<p>organized by: <a href=${contact}>${organizers[0].name}</a></p>`;
        }
    }
    render() {
        let description = `<p>${this.eventDate}</p><p>${this.eventOrganizer}</p>`;
        return (index.h("hub-card", { name: this.eventtitle, contenttype: "Event", url: this.eventUrl, description: description, buttonText: this.callToActionText, buttonAction: this.triggerRegister }));
    }
};
HubEvent.style = hubEventCss;

exports.hub_event = HubEvent;
