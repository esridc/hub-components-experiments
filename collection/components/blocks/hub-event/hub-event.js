import { Component, Prop, State, h } from '@stencil/core';
import { getPortal } from '@esri/arcgis-rest-portal';
import { UserSession } from '@esri/arcgis-rest-auth';
import { getEventServiceUrl, searchEvents, registerForEvent, unregisterForEvent } from '@esri/hub-events';
import { readSessionFromCookie, writeSessionToCookie } from '../../../utils/utils';
/*
to do:
  figure out the bare minimum we can ask for in config
  new logic in hub.js to actually register
*/
export class HubEvent {
  constructor() {
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
  static get is() { return "hub-event"; }
  static get originalStyleUrls() { return {
    "$": ["hub-event.css"]
  }; }
  static get styleUrls() { return {
    "$": ["hub-event.css"]
  }; }
  static get properties() { return {
    "clientid": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "ClientID to identify the app launching OAuth"
      },
      "attribute": "clientid",
      "reflect": false
    },
    "eventtitle": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "identifier for the ArcGIS Hub initiative"
      },
      "attribute": "eventtitle",
      "reflect": false
    },
    "orgurl": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "url of the ArcGIS Online organization"
      },
      "attribute": "orgurl",
      "reflect": false,
      "defaultValue": "\"https://www.arcgis.com\""
    },
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
    },
    "eventDate": {
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
        "text": ""
      },
      "attribute": "event-date",
      "reflect": false
    },
    "eventOrganizer": {
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
        "text": ""
      },
      "attribute": "event-organizer",
      "reflect": false
    },
    "eventServiceUrl": {
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
        "text": ""
      },
      "attribute": "event-service-url",
      "reflect": false
    },
    "eventGroupId": {
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
        "text": ""
      },
      "attribute": "event-group-id",
      "reflect": false
    },
    "attending": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "attending",
      "reflect": false
    },
    "eventUrl": {
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
        "text": ""
      },
      "attribute": "event-url",
      "reflect": false
    }
  }; }
  static get states() { return {
    "callToActionText": {}
  }; }
}
// https://opendata.arcgis.com/api/v3/search
// {"agg":{"fields":"downloadable,hasApi,source,tags,type,access"},"fields":{"datasets":"id,name,modified,modifiedProvenance,searchDescription,recordCount,source,extent,owner,thumbnailUrl,type,url,xFrameOptions,contentSecurityPolicy,siteUrl,tags,collection,size,initiativeCategories,slug,startDate,venue,initiativeId,initiativeTitle,organizers,isAllDay,onlineLocation,timeZone"},"catalog":{"groupIds":"any(bdbd5b5918c74accb1b17b101a543c71,207f50e7135c49889de88d8272e471ae)","id":"any(d191f08dc2ea468fad6a1bc55ef38229,36f4c58033954495b50c75e8fabeba54,b911f43ff548499a91fa0559da7bec38,328e70164cd6466c88a1a472e0988e83)","initiativeId":"any(c64fa70e717045e7acfe7aa067e2efe7)"},"filter":{"collection":"any(Event)"}}
