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

const hubDiscussionCss = ":host{display:block}@media screen and (max-width: 530px){.gallery-card{width:calc((100% - (0 * 30px))/ 1)}}@media screen and (min-width: 530px) and (max-width: 975px){.gallery-card{width:calc((100% - (1 * 30px))/ 2)}}@media screen and (min-width: 975px) and (max-width: 1200px){.gallery-card{width:calc((100% - (2 * 30px))/ 3)}}@media screen and (min-width:1200px){.gallery-card{width:calc((100% - (3 * 30px))/ 4)}}.gallery-card{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;color:#4c4c4c;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:30px;-webkit-box-shadow:0 0 5px 0 rgba(76,76,76,.25);box-shadow:0 0 5px 0 rgba(76,76,76,.25);}.card-image{height:40px;background-image:url(https://idee.paris.fr/svg/preview-proposal-image.svg);background-size:cover;background-repeat:no-repeat;background-position:center center}.search-grid{display:grid;grid-template:\".   search\" auto\n    \"filters results\" auto /\n    12rem 3fr;padding:0 1rem 0 3rem}hub-suggest-input{grid-area:search}.filters{grid-area:filters}.search-results{grid-area:results;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:justify;justify-content:space-between}.recent_heading{float:left;width:40%}.srch_bar{display:inline-block;text-align:right;width:60%}.headind_srch{padding:10px 29px 10px 20px;overflow:hidden;border-bottom:1px solid #c4c4c4}.recent_heading h4{color:#05728f;font-size:21px;margin:auto}.srch_bar input{border:1px solid #cdcdcd;border-width:0 0 1px 0;width:80%;padding:2px 0 4px 6px;background:none}.srch_bar .input-group-addon button{background:rgba(0, 0, 0, 0) none repeat scroll 0 0;border:medium none;padding:0;color:#707070;font-size:18px}.srch_bar .input-group-addon{margin:0 0 0 -27px}";

const HubDiscussion = class {
    // Component Methods
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.allowReply = true;
        this.auth = null;
        this.portalUrl = 'https://www.arcgis.com';
        this.authors = {};
        this.searchOptions = {}; //author: this.authorSearch};
        this.newResponse = index.createEvent(this, "newResponse", 7);
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
        this.session = utils.readSessionFromCookie();
        if (!!this.session) {
            this.auth = index$6.UserSession.deserialize(this.session);
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
        return hubTeam.getAnnotationServiceUrl(this.org).then(annotationsUrl => {
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
        hubTeam.deleteAnnotations({ url: this.annotationsUrl, objectIds: [annotationId] })
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
        return hubTeam.searchAnnotations({ url: this.annotationsUrl, where: searchOptions.join(" AND ") });
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
        let response = await hubTeam.deleteAnnotations({
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
            return this.authors[username] || hubTeam.getAnonymousMember();
        }
        console.log("getAuthor 2", [username, hubTeam.convertUserToMember(this.authors[username])]);
        return hubTeam.convertUserToMember(this.authors[username]);
    }
    formatDate(date) {
        return new Date(date).toLocaleString();
    }
    // TODO: Move discussion card to component
    discussionCard(annotation) {
        return (index.h("calcite-card", { class: "gallery-card", selectable: true }, index.h("img", { class: "card-image", slot: "thumbnail" }), index.h("h3", { slot: "title" }, index.h("img", { src: this.getAuthor(annotation.attributes.Creator).thumbnailUrl }), this.getAuthor(annotation.attributes.Creator).name), index.h("span", { slot: "subtitle" }), annotation.attributes.description, index.h("span", { slot: "footer-leading" }, this.formatDate(annotation.attributes.created_at))));
    }
    renderGallery() {
        let output = [];
        this.annotations.map((annotation) => {
            output.push(this.discussionCard(annotation));
        });
        return (index.h("div", { class: "search-results gallery-lg " }, output));
    }
    // TODO: Refactor into smaller components
    renderList() {
        let output = [];
        let headerEl = this.getElementById("annotation-header");
        var header = "Comments";
        if (headerEl !== null) {
            header = headerEl.innerHTML; //output.push(<div innerHTML={header.innerHTML}></div>);
        }
        output.push(index.h("div", { class: "headind_srch" }, index.h("div", { class: "recent_heading" }, index.h("h4", { innerHTML: header })), index.h("div", { class: "srch_bar" }, index.h("div", { class: "stylish-input-group" }, index.h("input", { type: "text", class: "search-bar", placeholder: "Search", onChange: (event) => this.searchChanged(event) }), index.h("span", { class: "input-group-addon" }, index.h("button", { type: "button" }, " ", index.h("i", { class: "fa fa-search", "aria-hidden": "true" }), " "))))));
        //https://ptetutorials.com/images/user-profile.png
        output.push(index.h("div", { class: "discussion-list" }, this.annotations.map((annotation) => index.h("discussion-entry", { annotationId: annotation.attributes.OBJECTID, authorImage: this.getAuthor(annotation.attributes.Creator).thumbnailUrl, authorName: this.getAuthor(annotation.attributes.Creator).name, description: annotation.attributes.description, publishedDate: this.formatDate(annotation.attributes.created_at), allowReply: this.allowReply && (annotation.attributes.Creator !== this.username), allowDelete: annotation.attributes.Creator === this.username, allowEdit: annotation.attributes.Creator === this.username }))));
        if (!!this.username) {
            output.push(index.h("discussion-input", { target: this.target, annotationsUrl: this.annotationsUrl }));
        }
        return output;
    }
    render() {
        return this.renderList();
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "query": ["queryUpdated"],
        "target": ["targetUpdated"]
    }; }
};
HubDiscussion.style = hubDiscussionCss;

exports.hub_discussion = HubDiscussion;
