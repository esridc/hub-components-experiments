import { r as registerInstance, c as createEvent, h, g as getElement } from './index-9fca3863.js';
import { g as getAnnotationServiceUrl, b as searchAnnotations, c as getAnonymousMember, d as convertUserToMember } from './hub-team-48304e45.js';
import { r as readSessionFromCookie } from './utils-49410b4c.js';
import { U as UserSession } from './UserSession-1faae0f0.js';
import { r as request, c as cleanUrl, _ as __assign } from './clean-url-83c51f70.js';
import { a as appendCustomParams } from './get-portal-url-fdc441e5.js';
import './hub-content-ba4934ea.js';
import './get-9aed8a75.js';
import './content-16805b54.js';
import './hub-search-992b92f5.js';
import './search-b0ff9cfb.js';
import './create-filters-48231911.js';
import './get-prop-a0541ce0.js';
import './get-user-65c98cff.js';
import './search-9451d0d4.js';
import './get-portal-api-url-fba2ecae.js';

/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { deleteFeatures } from '@esri/arcgis-rest-feature-layer';
 * //
 * deleteFeatures({
 *   url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/ServiceRequest/FeatureServer/0",
 *   objectIds: [1,2,3]
 * });
 * ```
 * Delete features request. See the [REST Documentation](https://developers.arcgis.com/rest/services-reference/delete-features.htm) for more information.
 *
 * @param deleteFeaturesRequestOptions - Options for the request.
 * @returns A Promise that will resolve with the deleteFeatures response.
 */
function deleteFeatures(requestOptions) {
    var url = cleanUrl(requestOptions.url) + "/deleteFeatures";
    // edit operations POST only
    var options = appendCustomParams(requestOptions, [
        "where",
        "objectIds",
        "gdbVersion",
        "returnEditMoment",
        "rollbackOnFailure"
    ], { params: __assign({}, requestOptions.params) });
    return request(url, options);
}

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { deleteAnnotations } from "@esri/hub-annotations";
 * //
 * deleteAnnotations({
 *   url: annotationsUrl + "/0",
 *   // an array of featureIds
 *   objectIds: [ 1 ]
 * })
 *   .then(response);
 * ```
 *
 * Delete an annotation from ArcGIS Hub.
 * @param requestOptions - request options that may include authentication
 * @returns A Promise that will resolve with the response from the service after attempting to delete annotations.
 */
function deleteAnnotations(requestOptions) {
    return deleteFeatures(requestOptions);
}

const hubDiscussionCss = ":host{display:block}@media screen and (max-width: 530px){.gallery-card{width:calc((100% - (0 * 30px))/ 1)}}@media screen and (min-width: 530px) and (max-width: 975px){.gallery-card{width:calc((100% - (1 * 30px))/ 2)}}@media screen and (min-width: 975px) and (max-width: 1200px){.gallery-card{width:calc((100% - (2 * 30px))/ 3)}}@media screen and (min-width:1200px){.gallery-card{width:calc((100% - (3 * 30px))/ 4)}}.gallery-card{display:flex;flex-flow:column;color:#4c4c4c;flex-wrap:wrap;margin-bottom:30px;box-shadow:0 0 5px 0 rgba(76,76,76,.25);}.card-image{height:40px;background-image:url(https://idee.paris.fr/svg/preview-proposal-image.svg);background-size:cover;background-repeat:no-repeat;background-position:center center}.search-grid{display:grid;grid-template:\".   search\" auto\n    \"filters results\" auto /\n    12rem 3fr;padding:0 1rem 0 3rem}hub-suggest-input{grid-area:search}.filters{grid-area:filters}.search-results{grid-area:results;display:flex;flex-wrap:wrap;justify-content:space-between}.recent_heading{float:left;width:40%}.srch_bar{display:inline-block;text-align:right;width:60%}.headind_srch{padding:10px 29px 10px 20px;overflow:hidden;border-bottom:1px solid #c4c4c4}.recent_heading h4{color:#05728f;font-size:21px;margin:auto}.srch_bar input{border:1px solid #cdcdcd;border-width:0 0 1px 0;width:80%;padding:2px 0 4px 6px;background:none}.srch_bar .input-group-addon button{background:rgba(0, 0, 0, 0) none repeat scroll 0 0;border:medium none;padding:0;color:#707070;font-size:18px}.srch_bar .input-group-addon{margin:0 0 0 -27px}";

let HubDiscussion = class {
  // Component Methods
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.newResponse = createEvent(this, "newResponse", 7);
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
    return (h("calcite-card", { class: "gallery-card", selectable: true }, h("img", { class: "card-image", slot: "thumbnail" }), h("h3", { slot: "title" }, h("img", { src: this.getAuthor(annotation.attributes.Creator).thumbnailUrl }), this.getAuthor(annotation.attributes.Creator).name), h("span", { slot: "subtitle" }), annotation.attributes.description, h("span", { slot: "footer-leading" }, this.formatDate(annotation.attributes.created_at))));
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
    output.push(h("div", { class: "headind_srch" }, h("div", { class: "recent_heading" }, h("h4", { innerHTML: header })), h("div", { class: "srch_bar" }, h("div", { class: "stylish-input-group" }, h("input", { type: "text", class: "search-bar", placeholder: "Search", onChange: (event) => this.searchChanged(event) }), h("span", { class: "input-group-addon" }, h("button", { type: "button" }, " ", h("i", { class: "fa fa-search", "aria-hidden": "true" }), " "))))));
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
  get el() { return getElement(this); }
  static get watchers() { return {
    "query": ["queryUpdated"],
    "target": ["targetUpdated"]
  }; }
};
HubDiscussion.style = hubDiscussionCss;

export { HubDiscussion as hub_discussion };
