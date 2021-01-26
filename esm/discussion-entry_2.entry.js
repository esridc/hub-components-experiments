import { r as registerInstance, c as createEvent, h, H as Host } from './index-17d4341f.js';
import './hub-content-82335dfd.js';
import './index-fd5669bb.js';
import './index-2b41d503.js';
import './index-31ce56d3.js';
import './index-c55b387e.js';
import './hub-search-eb1585d6.js';
import { U as UserSession } from './index-80082925.js';
import './index-52c4095a.js';
import { h as getMember, n as addAnnotations } from './hub-team-d39e46f8.js';
import { r as readSessionFromCookie } from './utils-877cdb99.js';

const discussionEntryCss = ":host{display:block}.comment{position:relative;background:0 0;margin:.5em 0 0;padding:.5em 0 0;border:none;border-top:none;line-height:1.2}.avatar{display:block;width:2.5em;height:2.5em;float:left;margin:.2em 0 0}.avatar img{display:block;margin:0 auto;width:100%;height:100%;border-radius:.25rem}.author{font-weight:600}.metadata{display:inline-block;margin-left:.5em;color:rgba(0,0,0,.4);font-size:.875em}.metadata>*{display:inline-block;margin:0 .5em 0 0}.content{margin-left:3.5em}.text{margin:.25em 0 .5em;font-size:1em;word-wrap:break-word;color:rgba(0,0,0,.87);line-height:1.3}.actions{font-size:.875em}.actions a{cursor:pointer;display:inline-block;margin:0 .75em 0 0;color:rgba(0,0,0,.4)}.actions a:hover{text-decoration:underline;color:rgba(0,0,0,0.8)}";

const DiscussionEntry = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.allowReply = true;
        // TODO: add edit support
        this.allowEdit = false;
        this.allowDelete = false;
        this.eventDeleteAnnotation = createEvent(this, "eventDeleteAnnotation", 7);
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

const DiscussionInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Optional placeholder text for the input text area
         */
        this.placeholder = "Join the discussion...";
        /**
         * Button string message
         */
        this.submit = "Share comment";
        this.auth = null;
        this.eventAddAnnotation = createEvent(this, "eventAddAnnotation", 7);
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
        return (h(Host, null, h("slot", null), h("div", { class: "annotation-entry" }, h("textarea", { placeholder: this.placeholder, ref: (el) => this.inputEl = el }), h("br", null), h("calcite-button", { onClick: (event) => this.submitAnnotation(event) }, this.submit), h("calcite-alert", { ref: (el) => this.errorEl = el, autoDismiss: true, color: "red", scale: "s" }, h("div", { slot: "alert-title" }, "There was a problem adding your comment."), h("div", { slot: "alert-message" }, this.error)))));
    }
};
DiscussionInput.style = discussionInputCss;

export { DiscussionEntry as discussion_entry, DiscussionInput as discussion_input };
