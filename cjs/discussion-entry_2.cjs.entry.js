'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ad6d6974.js');
require('./hub-content-cabee099.js');
require('./index-859d80b7.js');
require('./index-c635a7b6.js');
require('./index-0c96a340.js');
require('./index-7b2ecf99.js');
require('./hub-search-478dc16b.js');
const index$6 = require('./index-52faf404.js');
require('./index-a3b3575e.js');
const hubTeam = require('./hub-team-ffa353c9.js');
const utils = require('./utils-05b33af8.js');

const discussionEntryCss = ":host{display:block}.comment{position:relative;background:0 0;margin:.5em 0 0;padding:.5em 0 0;border:none;border-top:none;line-height:1.2}.avatar{display:block;width:2.5em;height:2.5em;float:left;margin:.2em 0 0}.avatar img{display:block;margin:0 auto;width:100%;height:100%;border-radius:.25rem}.author{font-weight:600}.metadata{display:inline-block;margin-left:.5em;color:rgba(0,0,0,.4);font-size:.875em}.metadata>*{display:inline-block;margin:0 .5em 0 0}.content{margin-left:3.5em}.text{margin:.25em 0 .5em;font-size:1em;word-wrap:break-word;color:rgba(0,0,0,.87);line-height:1.3}.actions{font-size:.875em}.actions a{cursor:pointer;display:inline-block;margin:0 .75em 0 0;color:rgba(0,0,0,.4)}.actions a:hover{text-decoration:underline;color:rgba(0,0,0,0.8)}";

const DiscussionEntry = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.allowReply = true;
        // TODO: add edit support
        this.allowEdit = false;
        this.allowDelete = false;
        this.eventDeleteAnnotation = index.createEvent(this, "eventDeleteAnnotation", 7);
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

const DiscussionInput = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Optional placeholder text for the input text area
         */
        this.placeholder = "Join the discussion...";
        /**
         * Button string message
         */
        this.submit = "Share comment";
        this.auth = null;
        this.eventAddAnnotation = index.createEvent(this, "eventAddAnnotation", 7);
    }
    async componentWillLoad() {
        // TODO: fix case where cookie isn't available.
        this.session = utils.readSessionFromCookie();
        console.log("Session", this.session);
        if (this.session !== undefined) {
            this.auth = index$6.UserSession.deserialize(this.session);
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
        let response = await hubTeam.addAnnotations({
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
        return (index.h(index.Host, null, index.h("slot", null), index.h("div", { class: "annotation-entry" }, index.h("textarea", { placeholder: this.placeholder, ref: (el) => this.inputEl = el }), index.h("br", null), index.h("calcite-button", { onClick: (event) => this.submitAnnotation(event) }, this.submit), index.h("calcite-alert", { ref: (el) => this.errorEl = el, autoDismiss: true, color: "red", scale: "s" }, index.h("div", { slot: "alert-title" }, "There was a problem adding your comment."), index.h("div", { slot: "alert-message" }, this.error)))));
    }
};
DiscussionInput.style = discussionInputCss;

exports.discussion_entry = DiscussionEntry;
exports.discussion_input = DiscussionInput;
