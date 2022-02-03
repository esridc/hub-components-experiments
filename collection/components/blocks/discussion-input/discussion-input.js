import { Component, Event, Host, h, Prop, State } from '@stencil/core';
import { UserSession } from '@esri/arcgis-rest-auth';
import { readSessionFromCookie } from '../../../utils/utils';
import { getMember } from '../../../utils/hub-member';
import { addAnnotations } from '@esri/hub-annotations';
export class DiscussionInput {
  constructor() {
    /**
     * Optional placeholder text for the input text area
     */
    this.placeholder = "Join the discussion...";
    /**
     * Button string message
     */
    this.submit = "Share comment";
    this.auth = null;
  }
  async componentWillLoad() {
    // TODO: fix case where cookie isn't available.
    this.session = readSessionFromCookie();
    console.log("Session", this.session);
    if (this.session !== undefined) {
      this.auth = UserSession.deserialize(this.session);
      this.member = await getMember(JSON.parse(this.session).username, this.auth);
    }
  }
  // Component Events
  submitAnnotation(event) {
    this.error = null;
    event.preventDefault();
    // Don't submit empty content
    if (this.inputEl.value.length === 0) {
      return;
    }
    let annotation = {
      content: this.inputEl.value,
      target: this.target,
      author: this.member.username,
      createdDate: new Date()
    };
    this.commitAnnotation(annotation);
  }
  clearAnnotation() {
    this.inputEl.value = "";
  }
  // Move this into @esri/hub-annotations
  async commitAnnotation(newAnnotation) {
    let feature = {
      attributes: Object.assign({ target: newAnnotation.target, description: newAnnotation.content, created_at: newAnnotation.createdDate.getTime(), updated_at: newAnnotation.createdDate.getTime() }, newAnnotation),
      geometry: newAnnotation.geometry
    };
    let response = await addAnnotations({
      url: this.annotationsUrl,
      features: [feature],
      authentication: this.auth
    });
    if (!!response && response.addResults[0].success) { // TODO: Check response 
      this.eventAddAnnotation.emit({ newAnnotation });
      this.clearAnnotation();
    }
    else {
      this.errorEl.active = true;
      // TODO: Using actual error for debugging; Change to a better public facing message for production
      this.error = response.addResults[0]['error'].description;
    }
  }
  render() {
    return (h(Host, null,
      h("slot", null),
      h("div", { class: "annotation-entry" },
        h("textarea", { placeholder: this.placeholder, ref: (el) => this.inputEl = el }),
        h("br", null),
        h("calcite-button", { onClick: (event) => this.submitAnnotation(event) }, this.submit),
        h("calcite-alert", { label: "alert", ref: (el) => this.errorEl = el, autoDismiss: true, color: "red", scale: "s" },
          h("div", { slot: "alert-title" }, "There was a problem adding your comment."),
          h("div", { slot: "alert-message" }, this.error)))));
  }
  static get is() { return "discussion-input"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["discussion-input.css"]
  }; }
  static get styleUrls() { return {
    "$": ["discussion-input.css"]
  }; }
  static get properties() { return {
    "placeholder": {
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
        "text": "Optional placeholder text for the input text area"
      },
      "attribute": "placeholder",
      "reflect": false,
      "defaultValue": "\"Join the discussion...\""
    },
    "submit": {
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
        "text": "Button string message"
      },
      "attribute": "submit",
      "reflect": false,
      "defaultValue": "\"Share comment\""
    },
    "target": {
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
        "text": "URI of the comment subject (e.g. item:4ef, item:4ef:feature:42:attribute:width)"
      },
      "attribute": "target",
      "reflect": false
    },
    "annotationsUrl": {
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
        "text": "URL to this Hub's annotation service\nTODO: extract this implementation detail"
      },
      "attribute": "annotations-url",
      "reflect": false
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
    }
  }; }
  static get states() { return {
    "error": {},
    "member": {},
    "auth": {}
  }; }
  static get events() { return [{
      "method": "eventAddAnnotation",
      "name": "eventAddAnnotation",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event emitted when a comment is successfully commited"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}
