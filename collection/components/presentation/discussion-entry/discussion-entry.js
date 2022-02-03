import { Component, Host, h, Prop, Event } from '@stencil/core';
export class DiscussionEntry {
  constructor() {
    this.allowReply = true;
    // TODO: add edit support
    this.allowEdit = false;
    this.allowDelete = false;
  }
  deleteAnnotation(event) {
    event.preventDefault();
    this.eventDeleteAnnotation.emit(this.annotationId);
  }
  render() {
    return (h(Host, null,
      h("slot", null),
      h("div", { class: "comment", id: this.annotationId },
        h("div", { class: "avatar" }, this.authorImage ?
          h("img", { src: this.authorImage })
          : ""),
        h("div", { class: "content" },
          h("a", { class: "author" }, this.authorName),
          h("div", { class: "metadata" },
            h("span", { class: "published-date" }, this.publishedDate)),
          h("div", { class: "text" }, this.description),
          h("div", { class: "actions" },
            this.allowReply ?
              h("a", { class: "reply" }, "Reply")
              : "",
            this.allowDelete ?
              h("a", { class: "delete", onClick: (event) => this.deleteAnnotation(event) }, "Delete")
              : "")))));
  }
  static get is() { return "discussion-entry"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["discussion-entry.css"]
  }; }
  static get styleUrls() { return {
    "$": ["discussion-entry.css"]
  }; }
  static get properties() { return {
    "annotationId": {
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
        "text": ""
      },
      "attribute": "annotation-id",
      "reflect": false
    },
    "authorImage": {
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
        "text": ""
      },
      "attribute": "author-image",
      "reflect": false
    },
    "authorName": {
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
        "text": ""
      },
      "attribute": "author-name",
      "reflect": false
    },
    "description": {
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
        "text": ""
      },
      "attribute": "description",
      "reflect": false
    },
    "publishedDate": {
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
        "text": ""
      },
      "attribute": "published-date",
      "reflect": false
    },
    "allowReply": {
      "type": "boolean",
      "mutable": false,
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
      "attribute": "allow-reply",
      "reflect": false,
      "defaultValue": "true"
    },
    "allowEdit": {
      "type": "boolean",
      "mutable": false,
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
      "attribute": "allow-edit",
      "reflect": false,
      "defaultValue": "false"
    },
    "allowDelete": {
      "type": "boolean",
      "mutable": false,
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
      "attribute": "allow-delete",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get events() { return [{
      "method": "eventDeleteAnnotation",
      "name": "eventDeleteAnnotation",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}
