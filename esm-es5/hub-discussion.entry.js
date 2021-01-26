var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, c as createEvent, h, g as getElement } from './index-17d4341f.js';
import './hub-content-82335dfd.js';
import './index-fd5669bb.js';
import './index-2b41d503.js';
import './index-31ce56d3.js';
import './index-c55b387e.js';
import './hub-search-eb1585d6.js';
import { U as UserSession } from './index-80082925.js';
import './index-52c4095a.js';
import { g as getAnnotationServiceUrl, d as deleteAnnotations, b as searchAnnotations, c as getAnonymousMember, e as convertUserToMember } from './hub-team-d39e46f8.js';
import { r as readSessionFromCookie } from './utils-877cdb99.js';
var hubDiscussionCss = ":host{display:block}@media screen and (max-width: 530px){.gallery-card{width:calc((100% - (0 * 30px))/ 1)}}@media screen and (min-width: 530px) and (max-width: 975px){.gallery-card{width:calc((100% - (1 * 30px))/ 2)}}@media screen and (min-width: 975px) and (max-width: 1200px){.gallery-card{width:calc((100% - (2 * 30px))/ 3)}}@media screen and (min-width:1200px){.gallery-card{width:calc((100% - (3 * 30px))/ 4)}}.gallery-card{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;color:#4c4c4c;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:30px;-webkit-box-shadow:0 0 5px 0 rgba(76,76,76,.25);box-shadow:0 0 5px 0 rgba(76,76,76,.25);}.card-image{height:40px;background-image:url(https://idee.paris.fr/svg/preview-proposal-image.svg);background-size:cover;background-repeat:no-repeat;background-position:center center}.search-grid{display:grid;grid-template:\".   search\" auto\n    \"filters results\" auto /\n    12rem 3fr;padding:0 1rem 0 3rem}hub-suggest-input{grid-area:search}.filters{grid-area:filters}.search-results{grid-area:results;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:justify;justify-content:space-between}.recent_heading{float:left;width:40%}.srch_bar{display:inline-block;text-align:right;width:60%}.headind_srch{padding:10px 29px 10px 20px;overflow:hidden;border-bottom:1px solid #c4c4c4}.recent_heading h4{color:#05728f;font-size:21px;margin:auto}.srch_bar input{border:1px solid #cdcdcd;border-width:0 0 1px 0;width:80%;padding:2px 0 4px 6px;background:none}.srch_bar .input-group-addon button{background:rgba(0, 0, 0, 0) none repeat scroll 0 0;border:medium none;padding:0;color:#707070;font-size:18px}.srch_bar .input-group-addon{margin:0 0 0 -27px}";
var HubDiscussion = /** @class */ (function () {
    // Component Methods
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.allowReply = true;
        this.auth = null;
        this.portalUrl = 'https://www.arcgis.com';
        this.authors = {};
        this.searchOptions = {}; //author: this.authorSearch};
        this.newResponse = createEvent(this, "newResponse", 7);
    }
    class_1.prototype.eventAddAnnotation = function (e) {
        console.log('Event: eventAddAnnotation', e);
        this.addAnnotation(e.detail.annotation);
    };
    class_1.prototype.addAnnotation = function (newAnnotation) {
        this.updateAnnotations();
        this.newResponse.emit(newAnnotation);
    };
    class_1.prototype.queryUpdated = function () {
        this.updateAnnotations();
    };
    class_1.prototype.targetUpdated = function (newTarget) {
        console.log("hub-discussion: Updated discussion target", newTarget);
        this.updateAnnotations();
    };
    class_1.prototype.componentWillLoad = function () {
        var _this = this;
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
        return getAnnotationServiceUrl(this.org).then(function (annotationsUrl) {
            _this.annotationsUrl = annotationsUrl + '/0';
            return _this.updateAnnotations();
        });
    };
    // Retrieve annotations from service and create combined list
    class_1.prototype.updateAnnotations = function () {
        var _this = this;
        return this.getAnnotations().then(function (response) {
            // console.log("Annotations", response)
            _this.annotations = response.data;
            // Append the authors index
            for (var i = 0; i < response.included.length; i++) {
                if (_this.authors[response.included[i].id] === undefined) {
                    _this.authors[response.included[i].id] = response.included[i].attributes;
                }
            }
        });
    };
    class_1.prototype.deleteAnnotation = function (annotationId) {
        var _this = this;
        console.log("deleteAnnotations", annotationId);
        deleteAnnotations({ url: this.annotationsUrl, objectIds: [annotationId] })
            .then(function (response) {
            console.log("deleteAnnotations", response);
            return _this.updateAnnotations();
        });
    };
    class_1.prototype.getAnnotations = function () {
        var searchOptions = ["1=1"];
        if (!!this.query) {
            searchOptions.push("description LIKE '%" + this.query + "%'");
        }
        // if(!!this.author) {
        //   query.push(`author LIKE '${search.author}'`)
        // }
        if (!!this.target) {
            searchOptions.push("target LIKE '" + this.target + "'");
        }
        // if(!!search.search) {
        //   query.push(search.search)
        // }
        // console.log("hub-discussion: Search", [search, query, {url: this.annotationsUrl, params: {where: query.join(" AND ")}}])
        return searchAnnotations({ url: this.annotationsUrl, where: searchOptions.join(" AND ") });
    };
    class_1.prototype.searchChanged = function (event) {
        this.query = event.target.value;
        return this.updateAnnotations();
    };
    class_1.prototype.getElementById = function (id) {
        // "annotation-header"
        for (var i = 0; i < this.el.childElementCount; i++) {
            var elId = this.el.children[i].getAttribute('id');
            if (elId == id) {
                return this.el.children[i];
            }
        }
        return null;
    };
    class_1.prototype.removeAnnotation = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var annotationId, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("removeAnnotation", [event.target.id, event]);
                        annotationId = event.detail;
                        return [4 /*yield*/, deleteAnnotations({
                                url: this.annotationsUrl,
                                objectIds: [annotationId],
                                authentication: this.auth
                            })];
                    case 1:
                        response = _a.sent();
                        console.debug("hub-discussion: removeAnnotation response", response);
                        this.updateAnnotations();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.getAuthor = function (username) {
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
    };
    class_1.prototype.formatDate = function (date) {
        return new Date(date).toLocaleString();
    };
    // TODO: Move discussion card to component
    class_1.prototype.discussionCard = function (annotation) {
        return (h("calcite-card", { class: "gallery-card", selectable: true }, h("img", { class: "card-image", slot: "thumbnail" }), h("h3", { slot: "title" }, h("img", { src: this.getAuthor(annotation.attributes.Creator).thumbnailUrl }), this.getAuthor(annotation.attributes.Creator).name), h("span", { slot: "subtitle" }), annotation.attributes.description, h("span", { slot: "footer-leading" }, this.formatDate(annotation.attributes.created_at))));
    };
    class_1.prototype.renderGallery = function () {
        var _this = this;
        var output = [];
        this.annotations.map(function (annotation) {
            output.push(_this.discussionCard(annotation));
        });
        return (h("div", { class: "search-results gallery-lg " }, output));
    };
    // TODO: Refactor into smaller components
    class_1.prototype.renderList = function () {
        var _this = this;
        var output = [];
        var headerEl = this.getElementById("annotation-header");
        var header = "Comments";
        if (headerEl !== null) {
            header = headerEl.innerHTML; //output.push(<div innerHTML={header.innerHTML}></div>);
        }
        output.push(h("div", { class: "headind_srch" }, h("div", { class: "recent_heading" }, h("h4", { innerHTML: header })), h("div", { class: "srch_bar" }, h("div", { class: "stylish-input-group" }, h("input", { type: "text", class: "search-bar", placeholder: "Search", onChange: function (event) { return _this.searchChanged(event); } }), h("span", { class: "input-group-addon" }, h("button", { type: "button" }, " ", h("i", { class: "fa fa-search", "aria-hidden": "true" }), " "))))));
        //https://ptetutorials.com/images/user-profile.png
        output.push(h("div", { class: "discussion-list" }, this.annotations.map(function (annotation) { return h("discussion-entry", { annotationId: annotation.attributes.OBJECTID, authorImage: _this.getAuthor(annotation.attributes.Creator).thumbnailUrl, authorName: _this.getAuthor(annotation.attributes.Creator).name, description: annotation.attributes.description, publishedDate: _this.formatDate(annotation.attributes.created_at), allowReply: _this.allowReply && (annotation.attributes.Creator !== _this.username), allowDelete: annotation.attributes.Creator === _this.username, allowEdit: annotation.attributes.Creator === _this.username }); })));
        if (!!this.username) {
            output.push(h("discussion-input", { target: this.target, annotationsUrl: this.annotationsUrl }));
        }
        return output;
    };
    class_1.prototype.render = function () {
        return this.renderList();
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "query": ["queryUpdated"],
                "target": ["targetUpdated"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
HubDiscussion.style = hubDiscussionCss;
export { HubDiscussion as hub_discussion };
