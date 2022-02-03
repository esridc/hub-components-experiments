import { r as registerInstance, c as createEvent, h, H as Host } from './index-9fca3863.js';
import { r as readSessionFromCookie } from './utils-49410b4c.js';
import { m as checkResults, f as getMember } from './hub-team-48304e45.js';
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
    var url = cleanUrl(requestOptions.url) + "/addFeatures";
    // edit operations are POST only
    var options = appendCustomParams(requestOptions, ["features", "gdbVersion", "returnEditMoment", "rollbackOnFailure"], { params: __assign({}, requestOptions.params) });
    return request(url, options);
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
        return Object.assign(Object.assign({}, response), { addResults: checkResults(response.addResults) });
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
    registerInstance(this, hostRef);
    this.eventDeleteAnnotation = createEvent(this, "eventDeleteAnnotation", 7);
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
    return (h(Host, null, h("slot", null), h("div", { class: "comment", id: this.annotationId }, h("div", { class: "avatar" }, this.authorImage ?
      h("img", { src: this.authorImage })
      : ""), h("div", { class: "content" }, h("a", { class: "author" }, this.authorName), h("div", { class: "metadata" }, h("span", { class: "published-date" }, this.publishedDate)), h("div", { class: "text" }, this.description), h("div", { class: "actions" }, this.allowReply ?
      h("a", { class: "reply" }, "Reply")
      : "", this.allowDelete ?
      h("a", { class: "delete", onClick: (event) => this.deleteAnnotation(event) }, "Delete")
      : "")))));
  }
};
DiscussionEntry.style = discussionEntryCss;

const discussionInputCss = ":host{display:block}.annotation-entry textarea{background:rgba(0, 0, 0, 0) none repeat scroll 0 0;color:#4c4c4c;font-size:1em;min-height:3em;width:80%;padding-left:5px}calcite-button{height:3em}";

let DiscussionInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.eventAddAnnotation = createEvent(this, "eventAddAnnotation", 7);
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
    return (h(Host, null, h("slot", null), h("div", { class: "annotation-entry" }, h("textarea", { placeholder: this.placeholder, ref: (el) => this.inputEl = el }), h("br", null), h("calcite-button", { onClick: (event) => this.submitAnnotation(event) }, this.submit), h("calcite-alert", { label: "alert", ref: (el) => this.errorEl = el, autoDismiss: true, color: "red", scale: "s" }, h("div", { slot: "alert-title" }, "There was a problem adding your comment."), h("div", { slot: "alert-message" }, this.error)))));
  }
};
DiscussionInput.style = discussionInputCss;

export { DiscussionEntry as discussion_entry, DiscussionInput as discussion_input };
