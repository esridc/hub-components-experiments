import { Component, Prop, State, h } from '@stencil/core';
import { UserSession } from '@esri/arcgis-rest-auth';
import { followInitiative, unfollowInitiative } from '@esri/hub-initiatives';
import { authenticateUser } from '../../../utils/utils';
/*
to do:
  could we suss out the enterprise org url using initiativeid?
  bonus:
    notify org administrator about new follows
    notify new follows with some canned info
*/
export class HubFollowButton {
  constructor() {
    /**
     * Follow icon
     */
    this.icon = h("svg", { class: "follow-icon", viewBox: "0 0 120 120", width: "100%", height: "100%" },
      h("circle", { cx: "18.385", cy: "101.615", r: "18.385" }),
      h("path", { d: "M-1.031 61c32.533 0 59 26.468 59 59s-26.467 59-59 59-59-26.468-59-59 26.467-59 59-59m0-23c-45.288 0-82 36.713-82 82s36.712 82 82 82 82-36.713 82-82-36.712-82-82-82z" }),
      h("path", { d: "M.154 23.041c53.349 0 96.75 43.402 96.75 96.75s-43.402 96.75-96.75 96.75-96.75-43.402-96.75-96.75 43.402-96.75 96.75-96.75m0-23c-66.136 0-119.75 53.615-119.75 119.75s53.614 119.75 119.75 119.75c66.135 0 119.75-53.615 119.75-119.75S66.289.041.154.041z" }));
    /**
     * url of the ArcGIS Online organization
     */
    this.orgurl = "https://www.arcgis.com";
    /**
     * Denotes whether the user is already following the configured initiative.
     */
    this.following = false;
    /**
     * Text to show in the string when not yet followed
     */
    this.followtext = "Follow Our Initiative";
    /**
     * Text to show in the string for user to unfollw
     */
    this.unfollowtext = "Unfollow Our Initiative";
    /**
     * Text to display on the button
     */
    this.callToActionText = this.followtext;
    this.triggerFollow = () => {
      return authenticateUser(this.clientid, this.orgurl).then(session => {
        this.session = session;
        return this.toggleFollow();
      });
    };
    this.toggleFollow = () => {
      console.log("toggleFollow", this.following);
      if (!this.following) {
        return followInitiative({
          initiativeId: this.initiativeid,
          authentication: UserSession.deserialize(this.session)
        })
          .then(response => {
          if (response.success)
            return Promise.resolve(response);
        })
          .catch(err => {
          if (err === `user is already following this initiative.`)
            return Promise.resolve();
        })
          .then(() => {
          this.callToActionText = this.followtext;
          this.following = true;
          return { success: true };
        });
      }
      else {
        return unfollowInitiative({
          initiativeId: this.initiativeid,
          authentication: UserSession.deserialize(this.session)
        })
          .then(response => {
          if (response.success)
            return Promise.resolve();
        })
          .catch(err => {
          if (err === `user is not following this initiative.`)
            return Promise.resolve();
        })
          .then(() => {
          this.callToActionText = this.unfollowtext;
          this.following = false;
          return { success: true };
        });
      }
    };
  }
  render() {
    return h("hub-button", { text: this.callToActionText, action: this.triggerFollow, icon: this.icon });
  }
  static get is() { return "hub-follow-button"; }
  static get originalStyleUrls() { return {
    "$": ["hub-follow-button.css"]
  }; }
  static get styleUrls() { return {
    "$": ["hub-follow-button.css"]
  }; }
  static get properties() { return {
    "icon": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "JSX.Element",
        "resolved": "Element",
        "references": {
          "JSX": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Follow icon"
      },
      "defaultValue": "<svg /*draggable=\"auto\"*/ class=\"follow-icon\" viewBox=\"0 0 120 120\" width=\"100%\" height=\"100%\"><circle cx=\"18.385\" cy=\"101.615\" r=\"18.385\"></circle><path d=\"M-1.031 61c32.533 0 59 26.468 59 59s-26.467 59-59 59-59-26.468-59-59 26.467-59 59-59m0-23c-45.288 0-82 36.713-82 82s36.712 82 82 82 82-36.713 82-82-36.712-82-82-82z\"></path><path d=\"M.154 23.041c53.349 0 96.75 43.402 96.75 96.75s-43.402 96.75-96.75 96.75-96.75-43.402-96.75-96.75 43.402-96.75 96.75-96.75m0-23c-66.136 0-119.75 53.615-119.75 119.75s53.614 119.75 119.75 119.75c66.135 0 119.75-53.615 119.75-119.75S66.289.041.154.041z\"></path>\n  </svg>"
    },
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
        "text": "ClientID to identify the app launching auth"
      },
      "attribute": "clientid",
      "reflect": false
    },
    "initiativeid": {
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
      "attribute": "initiativeid",
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
    "user": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "IUser",
        "resolved": "IUser",
        "references": {
          "IUser": {
            "location": "import",
            "path": "@esri/arcgis-rest-common-types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "User metadata"
      }
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
    "following": {
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
        "text": "Denotes whether the user is already following the configured initiative."
      },
      "attribute": "following",
      "reflect": false,
      "defaultValue": "false"
    },
    "followtext": {
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
        "text": "Text to show in the string when not yet followed"
      },
      "attribute": "followtext",
      "reflect": false,
      "defaultValue": "\"Follow Our Initiative\""
    },
    "unfollowtext": {
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
        "text": "Text to show in the string for user to unfollw"
      },
      "attribute": "unfollowtext",
      "reflect": false,
      "defaultValue": "\"Unfollow Our Initiative\""
    }
  }; }
  static get states() { return {
    "callToActionText": {}
  }; }
}
