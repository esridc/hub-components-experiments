'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dad2b533.js');
const utils = require('./utils-27ee60f0.js');
const hubTeam = require('./hub-team-9769a554.js');
const UserSession = require('./UserSession-68b84217.js');
const cleanUrl = require('./clean-url-e0d82cce.js');
const getPortalUrl = require('./get-portal-url-674469a6.js');
require('./hub-content-20389e15.js');
require('./get-1a802105.js');
require('./content-f2cad484.js');
require('./hub-search-0bb25918.js');
require('./search-79a183b0.js');
require('./create-filters-c9a367cb.js');
require('./get-prop-581f8032.js');
require('./get-user-88858550.js');
require('./search-453dd47b.js');
require('./get-portal-api-url-a814b68c.js');

/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { addFeatures } from '@esri/arcgis-rest-feature-layer';
 * //
 * addFeatures({
 *   url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/ServiceRequest/FeatureServer/0",
 *   features: [{
 *     geometry: { x: -120, y: 45, spatialReference: { wkid: 4326 } },
 *     attributes: { status: "alive" }
 *   }]
 * })
 *   .then(response)
 * ```
 * Add features request. See the [REST Documentation](https://developers.arcgis.com/rest/services-reference/add-features.htm) for more information.
 *
 * @param requestOptions - Options for the request.
 * @returns A Promise that will resolve with the addFeatures response.
 */
function addFeatures(requestOptions) {
    var url = cleanUrl.cleanUrl(requestOptions.url) + "/addFeatures";
    // edit operations are POST only
    var options = getPortalUrl.appendCustomParams(requestOptions, ["features", "gdbVersion", "returnEditMoment", "rollbackOnFailure"], { params: cleanUrl.__assign({}, requestOptions.params) });
    return cleanUrl.request(url, options);
}

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { addAnnotations } from "@esri/hub-annotations";
 * //
 * addAnnotations({
 *   url: annotationsUrl + "/0",
 *   features: [{
 *     attributes: {
 *       target: "http://...", // required, explains what is being commented on
 *       description: "A grand idea!" // also required. this is the actual comment
 *     }
 *   }]
 * })
 *   .then(response);
 * ```
 * Add an annotation to ArcGIS Hub. Uses authentication to derive authorship, appends a timestamp and sets a default status of "pending" to new comments by default.
 * @param requestOptions - request options that may include authentication
 * @returns A Promise that will resolve with the response from the service after attempting to add one or more new annotations.
 */
function addAnnotations(requestOptions) {
    /* istanbul ignore else */
    if (requestOptions.features && requestOptions.features.length) {
        requestOptions.features.forEach(anno => enrichAnnotation(anno));
    }
    return addFeatures(requestOptions).then(response => {
        return Object.assign(Object.assign({}, response), { addResults: hubTeam.checkResults(response.addResults) });
    });
}
function enrichAnnotation(annotation) {
    const defaults = {
        status: "pending",
        source: "hub.js"
    };
    // mixin, giving precedence to what was passed to the method
    annotation.attributes = Object.assign(Object.assign({}, defaults), annotation.attributes);
}

const discussionEntryCss = ":host{display:block}.comment{position:relative;background:0 0;margin:.5em 0 0;padding:.5em 0 0;border:none;border-top:none;line-height:1.2}.avatar{display:block;width:2.5em;height:2.5em;float:left;margin:.2em 0 0}.avatar img{display:block;margin:0 auto;width:100%;height:100%;border-radius:.25rem}.author{font-weight:600}.metadata{display:inline-block;margin-left:.5em;color:rgba(0,0,0,.4);font-size:.875em}.metadata>*{display:inline-block;margin:0 .5em 0 0}.content{margin-left:3.5em}.text{margin:.25em 0 .5em;font-size:1em;word-wrap:break-word;color:rgba(0,0,0,.87);line-height:1.3}.actions{font-size:.875em}.actions a{cursor:pointer;display:inline-block;margin:0 .75em 0 0;color:rgba(0,0,0,.4)}.actions a:hover{text-decoration:underline;color:rgba(0,0,0,0.8)}";

let DiscussionEntry = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.eventDeleteAnnotation = index.createEvent(this, "eventDeleteAnnotation", 7);
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
    return (index.h(index.Host, null, index.h("slot", null), index.h("div", { class: "comment", id: this.annotationId }, index.h("div", { class: "avatar" }, this.authorImage ?
      index.h("img", { src: this.authorImage })
      : ""), index.h("div", { class: "content" }, index.h("a", { class: "author" }, this.authorName), index.h("div", { class: "metadata" }, index.h("span", { class: "published-date" }, this.publishedDate)), index.h("div", { class: "text" }, this.description), index.h("div", { class: "actions" }, this.allowReply ?
      index.h("a", { class: "reply" }, "Reply")
      : "", this.allowDelete ?
      index.h("a", { class: "delete", onClick: (event) => this.deleteAnnotation(event) }, "Delete")
      : "")))));
  }
};
DiscussionEntry.style = discussionEntryCss;

const discussionInputCss = ":host{display:block}.annotation-entry textarea{background:rgba(0, 0, 0, 0) none repeat scroll 0 0;color:#4c4c4c;font-size:1em;min-height:3em;width:80%;padding-left:5px}calcite-button{height:3em}";

let DiscussionInput = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.eventAddAnnotation = index.createEvent(this, "eventAddAnnotation", 7);
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
    this.session = utils.readSessionFromCookie();
    console.log("Session", this.session);
    if (this.session !== undefined) {
      this.auth = UserSession.UserSession.deserialize(this.session);
      this.member = await hubTeam.getMember(JSON.parse(this.session).username, this.auth);
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
    return (index.h(index.Host, null, index.h("slot", null), index.h("div", { class: "annotation-entry" }, index.h("textarea", { placeholder: this.placeholder, ref: (el) => this.inputEl = el }), index.h("br", null), index.h("calcite-button", { onClick: (event) => this.submitAnnotation(event) }, this.submit), index.h("calcite-alert", { label: "alert", ref: (el) => this.errorEl = el, autoDismiss: true, color: "red", scale: "s" }, index.h("div", { slot: "alert-title" }, "There was a problem adding your comment."), index.h("div", { slot: "alert-message" }, this.error)))));
  }
};
DiscussionInput.style = discussionInputCss;

exports.discussion_entry = DiscussionEntry;
exports.discussion_input = DiscussionInput;
