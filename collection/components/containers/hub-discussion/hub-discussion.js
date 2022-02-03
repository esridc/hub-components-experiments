import { Component, Prop, Element, h, State, Listen, Event, Watch } from '@stencil/core';
import { getAnnotationServiceUrl, searchAnnotations, deleteAnnotations } from '@esri/hub-annotations';
import { convertUserToMember, getAnonymousMember } from "../../../utils/hub-member";
import { UserSession } from '@esri/arcgis-rest-auth';
import { readSessionFromCookie } from '../../../utils/utils';
export class HubDiscussion {
  // Component Methods
  constructor() {
    this.allowReply = true;
    this.auth = null;
    this.portalUrl = 'https://www.arcgis.com';
    this.authors = {};
    this.searchOptions = {}; //author: this.authorSearch};
  }
  eventAddAnnotation(e) {
    console.log('Event: eventAddAnnotation', e);
    this.addAnnotation(e.detail.annotation);
  }
  addAnnotation(newAnnotation) {
    this.updateAnnotations();
    this.newResponse.emit(newAnnotation);
  }
  queryUpdated() {
    this.updateAnnotations();
  }
  targetUpdated(newTarget) {
    console.log("hub-discussion: Updated discussion target", newTarget);
    this.updateAnnotations();
  }
  componentWillLoad() {
    this.session = readSessionFromCookie();
    if (!!this.session) {
      this.auth = UserSession.deserialize(this.session);
      this.username = JSON.parse(this.session).username;
    }
    // if(!!this.search) {
    //   this.searchOptions.search = this.search;
    // }
    // if(this.author === null || this.author === undefined) {
    //   this.author = 'aturner';
    // } else {
    //   this.searchOptions.author = this.author;
    // }
    if (this.target === null || this.target === undefined) {
      this.target = "";
    }
    else {
      this.searchOptions.target = this.target;
    }
    // if(this.update) {
    //   setInterval(() => {
    //     this.updateAnnotations(this.searchOptions)
    //   }, 1000)
    // }
    return getAnnotationServiceUrl(this.org).then(annotationsUrl => {
      this.annotationsUrl = annotationsUrl + '/0';
      return this.updateAnnotations();
    });
  }
  // Retrieve annotations from service and create combined list
  updateAnnotations() {
    return this.getAnnotations().then(response => {
      // console.log("Annotations", response)
      this.annotations = response.data;
      // Append the authors index
      for (let i = 0; i < response.included.length; i++) {
        if (this.authors[response.included[i].id] === undefined) {
          this.authors[response.included[i].id] = response.included[i].attributes;
        }
      }
    });
  }
  deleteAnnotation(annotationId) {
    console.log("deleteAnnotations", annotationId);
    deleteAnnotations({ url: this.annotationsUrl, objectIds: [annotationId] })
      .then(response => {
      console.log("deleteAnnotations", response);
      return this.updateAnnotations();
    });
  }
  getAnnotations() {
    let searchOptions = ["1=1"];
    if (!!this.query) {
      searchOptions.push(`description LIKE '%${this.query}%'`);
    }
    // if(!!this.author) {
    //   query.push(`author LIKE '${search.author}'`)
    // }
    if (!!this.target) {
      searchOptions.push(`target LIKE '${this.target}'`);
    }
    // if(!!search.search) {
    //   query.push(search.search)
    // }
    // console.log("hub-discussion: Search", [search, query, {url: this.annotationsUrl, params: {where: query.join(" AND ")}}])
    return searchAnnotations({ url: this.annotationsUrl, where: searchOptions.join(" AND ") });
  }
  searchChanged(event) {
    this.query = event.target.value;
    return this.updateAnnotations();
  }
  getElementById(id) {
    // "annotation-header"
    for (let i = 0; i < this.el.childElementCount; i++) {
      let elId = this.el.children[i].getAttribute('id');
      if (elId == id) {
        return this.el.children[i];
      }
    }
    return null;
  }
  async removeAnnotation(event) {
    console.log("removeAnnotation", [event.target.id, event]);
    const annotationId = event.detail;
    let response = await deleteAnnotations({
      url: this.annotationsUrl,
      objectIds: [annotationId],
      authentication: this.auth
    });
    console.debug("hub-discussion: removeAnnotation response", response);
    this.updateAnnotations();
  }
  getAuthor(username) {
    // if(this.authors[username] === undefined) {
    //   let member = await getMember(username);
    //   this.authors[username] = member;
    // }
    console.log("getAuthor 1", [username, this.authors[username]]);
    if (username.length === 0) {
      return this.authors[username] || getAnonymousMember();
    }
    console.log("getAuthor 2", [username, convertUserToMember(this.authors[username])]);
    return convertUserToMember(this.authors[username]);
  }
  formatDate(date) {
    return new Date(date).toLocaleString();
  }
  // TODO: Move discussion card to component
  discussionCard(annotation) {
    return (h("calcite-card", { class: "gallery-card", selectable: true },
      h("img", { class: "card-image", slot: "thumbnail" }),
      h("h3", { slot: "title" },
        h("img", { src: this.getAuthor(annotation.attributes.Creator).thumbnailUrl }),
        this.getAuthor(annotation.attributes.Creator).name),
      h("span", { slot: "subtitle" }),
      annotation.attributes.description,
      h("span", { slot: "footer-leading" }, this.formatDate(annotation.attributes.created_at))));
  }
  renderGallery() {
    let output = [];
    this.annotations.map((annotation) => {
      output.push(this.discussionCard(annotation));
    });
    return (h("div", { class: "search-results gallery-lg " }, output));
  }
  // TODO: Refactor into smaller components
  renderList() {
    let output = [];
    let headerEl = this.getElementById("annotation-header");
    var header = "Comments";
    if (headerEl !== null) {
      header = headerEl.innerHTML; //output.push(<div innerHTML={header.innerHTML}></div>);
    }
    output.push(h("div", { class: "headind_srch" },
      h("div", { class: "recent_heading" },
        h("h4", { innerHTML: header })),
      h("div", { class: "srch_bar" },
        h("div", { class: "stylish-input-group" },
          h("input", { type: "text", class: "search-bar", placeholder: "Search", onChange: (event) => this.searchChanged(event) }),
          h("span", { class: "input-group-addon" },
            h("button", { type: "button" },
              " ",
              h("i", { class: "fa fa-search", "aria-hidden": "true" }),
              " "))))));
    //https://ptetutorials.com/images/user-profile.png
    output.push(h("div", { class: "discussion-list" }, this.annotations.map((annotation) => h("discussion-entry", { annotationId: annotation.attributes.OBJECTID, authorImage: this.getAuthor(annotation.attributes.Creator).thumbnailUrl, authorName: this.getAuthor(annotation.attributes.Creator).name, description: annotation.attributes.description, publishedDate: this.formatDate(annotation.attributes.created_at), allowReply: this.allowReply && (annotation.attributes.Creator !== this.username), allowDelete: annotation.attributes.Creator === this.username, allowEdit: annotation.attributes.Creator === this.username }))));
    if (!!this.username) {
      output.push(h("discussion-input", { target: this.target, annotationsUrl: this.annotationsUrl }));
    }
    return output;
  }
  render() {
    return this.renderList();
  }
  static get is() { return "hub-discussion"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["hub-discussion.css"]
  }; }
  static get styleUrls() { return {
    "$": ["hub-discussion.css"]
  }; }
  static get properties() { return {
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
    "org": {
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
      "attribute": "org",
      "reflect": false
    },
    "target": {
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
      "attribute": "target",
      "reflect": false
    },
    "author": {
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
      "attribute": "author",
      "reflect": false
    },
    "query": {
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
      "attribute": "query",
      "reflect": true
    },
    "portalUrl": {
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
      "attribute": "portal-url",
      "reflect": false
    },
    "annotationsUrl": {
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
      "attribute": "annotations-url",
      "reflect": false
    },
    "update": {
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
      "attribute": "update",
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
    "annotations": {},
    "authors": {},
    "annotationDescription": {},
    "searchOptions": {},
    "username": {},
    "auth": {}
  }; }
  static get events() { return [{
      "method": "newResponse",
      "name": "newResponse",
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
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "query",
      "methodName": "queryUpdated"
    }, {
      "propName": "target",
      "methodName": "targetUpdated"
    }]; }
  static get listeners() { return [{
      "name": "eventAddAnnotation",
      "method": "eventAddAnnotation",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "eventDeleteAnnotation",
      "method": "removeAnnotation",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
