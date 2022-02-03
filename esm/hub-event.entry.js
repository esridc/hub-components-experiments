import { r as registerInstance, h } from './index-9fca3863.js';
import { r as readSessionFromCookie, w as writeSessionToCookie } from './utils-49410b4c.js';
import { U as UserSession } from './UserSession-1faae0f0.js';
import { j as joinGroup, l as leaveGroup } from './join-4a6553af.js';
import { g as getPortal, b as getEventServiceUrl, s as searchEvents } from './search-9451d0d4.js';
import './clean-url-83c51f70.js';
import './get-portal-url-fdc441e5.js';
import './search-b0ff9cfb.js';
import './get-portal-api-url-fba2ecae.js';

/* Copyright (c) 2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { registerForEvent } from "@esri/hub-events";
 * //
 * registerForEvent({
 *   groupId,
 *   authentication
 * })
 *   .then(response)
 * ```
 * Register for an ArcGIS Hub event.
 * @param requestOptions - request options that include authentication
 * @returns A Promise that will resolve with the response from the service.
 */
function registerForEvent(requestOptions) {
    return joinGroup({
        id: requestOptions.groupId,
        authentication: requestOptions.authentication
    });
}
/**
 * ```js
 * import { unregisterForEvent } from "@esri/hub-events";
 * //
 * unregisterForEvent({
 *   groupId,
 *   authentication
 * })
 *   .then(response)
 * ```
 * Unregister for an ArcGIS Hub event.
 * @param requestOptions - request options that include authentication
 * @returns A Promise that will resolve with the response from the service.
 */
function unregisterForEvent(requestOptions) {
    return leaveGroup({
        id: requestOptions.groupId,
        authentication: requestOptions.authentication
    });
}

const hubEventCss = ".hub-event-details{border:1px solid #ccc;border-radius:4px;width:100%;color:#323232;font-size:14px;width:380px;height:400px;font-family:'Arial';display:grid;grid-template-columns:auto;grid-template-rows:40% 40% 20%;grid-template-areas:\"header\"\n    \"main\"\n    \"footer\"}.hub-event-background-image{background-color:rgb(255, 174, 0);grid-area:header}.hub-event-content{grid-area:main;padding-left:40px;padding-right:40px}.hub-event-footer{grid-area:footer;padding-left:40px}";

let HubEvent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * url of the ArcGIS Online organization
     */
    this.orgurl = "https://www.arcgis.com";
    /**
     * Text to display on the button
     */
    this.callToActionText = "Attend";
    this.triggerRegister = () => {
      this.session = readSessionFromCookie();
      if (!this.session) {
        // register your own app to create a unique clientId
        return UserSession.beginOAuth2({
          clientId: this.clientid,
          portal: `${this.orgurl}/sharing/rest`,
          redirectUri: `${window.location}authenticate.html`
        })
          .then(session => {
          writeSessionToCookie(session);
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
        return registerForEvent({
          groupId: this.eventGroupId,
          authentication: UserSession.deserialize(this.session)
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
        return unregisterForEvent({
          groupId: this.eventGroupId,
          authentication: UserSession.deserialize(this.session)
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
    getPortal(null, {
      portal: `${this.orgurl}/sharing/rest/`
    })
      .then(response => {
      getEventServiceUrl(response.id)
        .then(url => {
        this.eventServiceUrl = url;
        searchEvents({ url: this.eventServiceUrl })
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
    return (h("hub-card", { name: this.eventtitle, contenttype: "Event", url: this.eventUrl, description: description, buttonText: this.callToActionText, buttonAction: this.triggerRegister }));
  }
};
HubEvent.style = hubEventCss;

export { HubEvent as hub_event };
