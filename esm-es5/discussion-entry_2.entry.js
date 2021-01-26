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
var discussionEntryCss = ":host{display:block}.comment{position:relative;background:0 0;margin:.5em 0 0;padding:.5em 0 0;border:none;border-top:none;line-height:1.2}.avatar{display:block;width:2.5em;height:2.5em;float:left;margin:.2em 0 0}.avatar img{display:block;margin:0 auto;width:100%;height:100%;border-radius:.25rem}.author{font-weight:600}.metadata{display:inline-block;margin-left:.5em;color:rgba(0,0,0,.4);font-size:.875em}.metadata>*{display:inline-block;margin:0 .5em 0 0}.content{margin-left:3.5em}.text{margin:.25em 0 .5em;font-size:1em;word-wrap:break-word;color:rgba(0,0,0,.87);line-height:1.3}.actions{font-size:.875em}.actions a{cursor:pointer;display:inline-block;margin:0 .75em 0 0;color:rgba(0,0,0,.4)}.actions a:hover{text-decoration:underline;color:rgba(0,0,0,0.8)}";
var DiscussionEntry = /** @class */ (function () {
    function DiscussionEntry(hostRef) {
        registerInstance(this, hostRef);
        this.allowReply = true;
        // TODO: add edit support
        this.allowEdit = false;
        this.allowDelete = false;
        this.eventDeleteAnnotation = createEvent(this, "eventDeleteAnnotation", 7);
    }
    DiscussionEntry.prototype.deleteAnnotation = function (event) {
        event.preventDefault();
        this.eventDeleteAnnotation.emit(this.annotationId);
    };
    DiscussionEntry.prototype.render = function () {
        var _this = this;
        return (h(Host, null, h("slot", null), h("div", { class: "comment", id: this.annotationId }, h("div", { class: "avatar" }, this.authorImage ?
            h("img", { src: this.authorImage })
            : ""), h("div", { class: "content" }, h("a", { class: "author" }, this.authorName), h("div", { class: "metadata" }, h("span", { class: "published-date" }, this.publishedDate)), h("div", { class: "text" }, this.description), h("div", { class: "actions" }, this.allowReply ?
            h("a", { class: "reply" }, "Reply")
            : "", this.allowDelete ?
            h("a", { class: "delete", onClick: function (event) { return _this.deleteAnnotation(event); } }, "Delete")
            : "")))));
    };
    return DiscussionEntry;
}());
DiscussionEntry.style = discussionEntryCss;
var discussionInputCss = ":host{display:block}.annotation-entry textarea{background:rgba(0, 0, 0, 0) none repeat scroll 0 0;color:#4c4c4c;font-size:1em;min-height:3em;width:80%;padding-left:5px}calcite-button{height:3em}";
var DiscussionInput = /** @class */ (function () {
    function class_1(hostRef) {
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
    class_1.prototype.componentWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // TODO: fix case where cookie isn't available.
                        this.session = readSessionFromCookie();
                        console.log("Session", this.session);
                        if (!(this.session !== undefined)) return [3 /*break*/, 2];
                        this.auth = UserSession.deserialize(this.session);
                        _a = this;
                        return [4 /*yield*/, getMember(JSON.parse(this.session).username, this.auth)];
                    case 1:
                        _a.member = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    // Component Events
    class_1.prototype.submitAnnotation = function (event) {
        this.error = null;
        event.preventDefault();
        // Don't submit empty content
        if (this.inputEl.value.length === 0) {
            return;
        }
        var annotation = {
            content: this.inputEl.value,
            target: this.target,
            author: this.member.username,
            createdDate: new Date()
        };
        this.commitAnnotation(annotation);
    };
    class_1.prototype.clearAnnotation = function () {
        this.inputEl.value = "";
    };
    // Move this into @esri/hub-annotations
    class_1.prototype.commitAnnotation = function (newAnnotation) {
        return __awaiter(this, void 0, void 0, function () {
            var feature, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        feature = {
                            attributes: Object.assign({ target: newAnnotation.target, description: newAnnotation.content, created_at: newAnnotation.createdDate.getTime(), updated_at: newAnnotation.createdDate.getTime() }, newAnnotation),
                            geometry: newAnnotation.geometry
                        };
                        return [4 /*yield*/, addAnnotations({
                                url: this.annotationsUrl,
                                features: [feature],
                                authentication: this.auth
                            })];
                    case 1:
                        response = _a.sent();
                        if (!!response && response.addResults[0].success) { // TODO: Check response 
                            this.eventAddAnnotation.emit({ newAnnotation: newAnnotation });
                            this.clearAnnotation();
                        }
                        else {
                            this.errorEl.active = true;
                            // TODO: Using actual error for debugging; Change to a better public facing message for production
                            this.error = response.addResults[0]['error'].description;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (h(Host, null, h("slot", null), h("div", { class: "annotation-entry" }, h("textarea", { placeholder: this.placeholder, ref: function (el) { return _this.inputEl = el; } }), h("br", null), h("calcite-button", { onClick: function (event) { return _this.submitAnnotation(event); } }, this.submit), h("calcite-alert", { ref: function (el) { return _this.errorEl = el; }, autoDismiss: true, color: "red", scale: "s" }, h("div", { slot: "alert-title" }, "There was a problem adding your comment."), h("div", { slot: "alert-message" }, this.error)))));
    };
    return class_1;
}());
DiscussionInput.style = discussionInputCss;
export { DiscussionEntry as discussion_entry, DiscussionInput as discussion_input };
