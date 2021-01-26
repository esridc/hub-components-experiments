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
import { C as CommunityType, H as HubType } from './hub-content-82335dfd.js';
import './index-fd5669bb.js';
import './index-2b41d503.js';
import './index-31ce56d3.js';
import './index-c55b387e.js';
import './hub-search-eb1585d6.js';
import './index-52c4095a.js';
import { f as getTeam, h as getMember } from './hub-team-d39e46f8.js';
var hubProfileCardCss = ":host{display:block}";
var HubProfileCard = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        /**
         * ID For the profile. Username, Team ID, Org ID
         */
        this.username = "";
        /**
         * Which Profile: member, team
         */
        this.type = "member";
    }
    class_1.prototype.componentWillLoad = function () {
        this.loadProfile(this.username);
    };
    /**
     *
     * @param id
     * @param type
     */
    class_1.prototype.loadProfile = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _b, _c, _a_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 5, , 6]);
                        console.log("Profile: ", [this.type, CommunityType.team, CommunityType[this.type] == CommunityType.team]);
                        _b = this;
                        if (!(CommunityType[this.type] == CommunityType.team)) return [3 /*break*/, 2];
                        return [4 /*yield*/, getTeam(id)];
                    case 1:
                        _c = _d.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, getMember(id)];
                    case 3:
                        _c = _d.sent();
                        _d.label = 4;
                    case 4:
                        _b.profile = _c;
                        return [3 /*break*/, 6];
                    case 5:
                        _a_1 = _d.sent();
                        console.log("hub-profile-card: error with profile", id);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.render = function () {
        var output = [];
        if (this.profile !== undefined && this.profile !== null) {
            output.push(h("hub-card", { class: "hub-profile", contenttype: HubType[this.profile.hubType], image: this.profile.thumbnailUrl, name: this.profile.name, description: this.profile.summary, url: this.profile.url }));
        }
        return (h(Host, null, output));
    };
    return class_1;
}());
HubProfileCard.style = hubProfileCardCss;
export { HubProfileCard as hub_profile_card };
