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
import { r as registerInstance, h, H as Host } from './index-17d4341f.js';
import { H as HubType } from './hub-content-82335dfd.js';
import './index-fd5669bb.js';
import './index-2b41d503.js';
import './index-31ce56d3.js';
import './index-c55b387e.js';
import './hub-search-eb1585d6.js';
import { U as UserSession } from './index-80082925.js';
import './index-52c4095a.js';
import { h as getMember, i as getMemberTeams, j as getMemberEvents, k as getMemberPlaces, l as searchMemberContent, m as searchMemberComments } from './hub-team-d39e46f8.js';
import { r as readSessionFromCookie, t as truncateString } from './utils-877cdb99.js';
var hubWorkspaceCss = ":host{display:block}.workspace-grid{display:grid;grid-template-columns:15% 30% 30% 25%;grid-template-rows:auto;grid-template-areas:\"avatar bio map .\"\n    \"interests teams teams events\";-webkit-column-gap:10px;-moz-column-gap:10px;column-gap:10px;row-gap:20px;padding:0 1rem 0 3rem}.workspace-avatar{grid-area:avatar}img.avatar{border-radius:50%}.workspace-bio{grid-area:bio}.workspace-map{grid-area:map;height:200px}.workspace-interests{grid-area:interests}.workspace-events{grid-area:events}.workspace-teams{grid-area:teams;}@media screen and (max-width: 530px){.gallery-card{width:calc((100% - (0 * 30px))/ 1)}}@media screen and (min-width: 530px) and (max-width: 975px){.gallery-card{width:calc((100% - (1 * 30px))/ 2)}}@media screen and (min-width: 975px) and (max-width: 1200px){.gallery-card{width:calc((100% - (2 * 30px))/ 3)}}@media screen and (min-width:1200px){.gallery-card{width:calc((100% - (3 * 30px))/ 4)}}.gallery{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:30px;-ms-flex-pack:justify;justify-content:space-between}.gallery-card{-ms-flex:1;flex:1;width:32%;color:#4c4c4c;-webkit-box-shadow:0 0 5px 0 rgba(76,76,76,.25);box-shadow:0 0 5px 0 rgba(76,76,76,.25);margin-right:10px;}.gallery-header,h3,h4{border-bottom:1px solid #888;margin-bottom:3px;width:100%}.gallery-header a,.gallery-header h4,.gallery-header h2{display:inline}.gallery-header a{text-decoration:none;color:#448}a.explore{float:right;font-size:0.8em;margin-top:5px}.gallery-header a:hover{text-decoration:underline}.team-gallery{padding:24px;margin:16px 0;width:auto;-webkit-box-shadow:0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);box-shadow:0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);-webkit-transition:-webkit-box-shadow 83ms;transition:-webkit-box-shadow 83ms;transition:box-shadow 83ms;transition:box-shadow 83ms, -webkit-box-shadow 83ms}";
var HubWorkspace = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
    }
    class_1.prototype.componentWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var auth, username, _b, _c, _d;
            var _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        this.session = readSessionFromCookie();
                        auth = UserSession.deserialize(this.session);
                        console.log("Session", this.session);
                        if (!!!this.session) return [3 /*break*/, 8];
                        username = JSON.parse(this.session).username;
                        this.token = JSON.parse(this.session).token;
                        _c = (_b = Promise).all;
                        return [4 /*yield*/, getMember(username, auth)];
                    case 1:
                        _d = [
                            _f.sent()
                        ];
                        return [4 /*yield*/, getMemberTeams(auth)];
                    case 2:
                        _d = _d.concat([
                            _f.sent()
                        ]);
                        return [4 /*yield*/, getMemberEvents(auth)];
                    case 3:
                        _d = _d.concat([
                            _f.sent()
                        ]);
                        return [4 /*yield*/, getMemberPlaces(username, auth)];
                    case 4:
                        _d = _d.concat([
                            _f.sent()
                        ]);
                        return [4 /*yield*/, searchMemberContent(username, auth)];
                    case 5:
                        _d = _d.concat([
                            _f.sent()
                        ]);
                        return [4 /*yield*/, searchMemberComments(username, auth)];
                    case 6: return [4 /*yield*/, _c.apply(_b, [_d.concat([
                                _f.sent()
                            ])])];
                    case 7:
                        _e = _f.sent(), this.member = _e[0], this.teams = _e[1], this.events = _e[2], this.places = _e[3], this.content = _e[4], this.comments = _e[5];
                        console.log("Workspace: Events", this.events);
                        _f.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.dateToText = function (date) {
        var dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' });
        var _b = dateTimeFormat.formatToParts(date), month = _b[0].value, day = _b[2].value, year = _b[4].value;
        return day + "-" + month + "-" + year;
    };
    class_1.prototype.render = function () {
        var _this = this;
        var _a;
        var output = [];
        if (this.session !== undefined) {
            output.push(h("div", { class: "workspace-grid" }, h("div", { class: "workspace-avatar" }, h("img", { src: this.member.thumbnailUrl, class: "avatar", alt: "Profile Image" })), h("div", { class: "workspace-bio" }, h("h1", null, this.member.name), h("p", null, this.member.summary), h("em", null, "Joined ", this.dateToText(this.member.createdDate))), h("div", { class: "workspace-map" }, h("hub-places-map", { mode: "view", session: this.session })), h("div", { class: "workspace-interests" }, h("h3", null, "Stats"), h("hub-statistic", { size: "m", value: this.teams.meta.total, units: "Teams" }), h("hub-statistic", { size: "m", value: this.events.meta.total, units: "Events" }), h("hub-statistic", { size: "m", value: this.content.meta.total, units: "Content Items" }), h("hub-statistic", { size: "m", value: this.places.length, units: "Places" }), h("hub-statistic", { size: "m", value: this.comments.length, units: "Comments" }), h("h3", null, "Interests"), (_a = this.member.metadata) === null || _a === void 0 ? void 0 :
                _a.interests.map(function (tag) { return h("calcite-chip", { value: tag }, tag); }), h("h3", null, "Places"), this.places.map(function (place) { return h("calcite-chip", { value: place.name }, place.name, " (", place.coverage, ")"); })), h("div", { class: "workspace-events" }, h("h3", null, "Upcoming Events"), h("hub-events-list", { session: this.session }), h("hub-list", { collection: this.teams.results }, h("h3", null, "Your Teams"))), h("div", { class: "workspace-teams" }, h("div", { class: "gallery-header" }, h("h2", null, "My Content"), h("a", { class: "explore", href: "#" }, "See all>")), h("div", { class: "gallery" }, this.content.results.slice(0, 4).map(function (result) { return h("hub-card", { class: "gallery-card", contenttype: HubType[result.hubType] + " by " + result.publisher.name, image: result.thumbnailUrl + "?token=" + _this.token, name: truncateString(result.name, 55), description: truncateString(result.summary, 90), url: result.url, buttonText: "View " + HubType[result.hubType], onClick: function () { return ""; } }); })), h("h2", null, "Your Teams"), this.teams.results.slice(0, 8).map(function (result) { return h("div", { class: "team-gallery" }, h("div", { class: "gallery-header" }, h("h4", null, h("a", { href: result.url }, result.name, " >"))), h("hub-gallery", { session: _this.session, limit: 4, groups: result.id, showsearch: false, sort: "modified", hubtype: "content" })); }))));
        }
        else {
            output.push(h("calcite-loader", { text: "Fetching workspace...", "is-active": true }));
        }
        return (h(Host, null, h("slot", null), output));
    };
    return class_1;
}());
HubWorkspace.style = hubWorkspaceCss;
export { HubWorkspace as hub_workspace };
