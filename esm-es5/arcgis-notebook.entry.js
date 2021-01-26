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
import './index-fd5669bb.js';
import { m as getItemGroups, d as getUser, n as createItem, g as getItem, a as getItemData } from './index-2b41d503.js';
import './index-31ce56d3.js';
import { a as agoSearch } from './index-c55b387e.js';
import { U as UserSession } from './index-80082925.js';
import { a as authenticateUser } from './utils-877cdb99.js';
var HubService = {
    // TODO: accept service URL and user session?
    create: function (type) {
        switch (type) {
            case 'portal': return new PortalContent;
            case 'hub': return new HubContent;
        }
    }
};
var PortalContent = /** @class */ (function () {
    function PortalContent() {
        this.portalUrl = "https://www.arcgis.com/share/rest/";
    }
    PortalContent.prototype.canEdit = function (_itemId, _username) {
        return Promise.all([getItemGroups(_itemId), getUser(_username)])
            .then(function (_a) {
            var itemGroups = _a[0], userInfo = _a[1];
            // This is just checking membership to any intersecting group
            // TODO: only check for admin/member/other? groups with update
            var intersect = itemGroups.member.filter(function (x) { return userInfo.groups.includes(x); });
            return intersect.length > 0;
        });
    };
    PortalContent.prototype.search = function (_query) {
        return agoSearch({
            q: _query
        });
    };
    ;
    PortalContent.prototype.create = function (itemParams, authentication) {
        return createItem({
            item: itemParams,
            authentication: authentication
        });
    };
    PortalContent.prototype.get = function (itemId) {
        return Promise.all([getItem(itemId), getItemData(itemId)])
            .then(function (_a) {
            var itemInfo = _a[0], itemData = _a[1];
            itemInfo.data = itemData;
            return itemInfo;
        });
        // .catch(reject)
    };
    PortalContent.prototype.update = function (_itemId, _resourceParams) {
        return new Promise(function (_resolve, reject) { return reject(false); });
    };
    PortalContent.prototype.delete = function (_itemId) {
        return new Promise(function (_resolve, reject) { return reject(false); });
    };
    return PortalContent;
}());
var HubContent = /** @class */ (function () {
    function HubContent() {
        this.hubUrl = "https://hub.arcgis.com/api/v3";
    }
    HubContent.prototype.canEdit = function (_itemId, _username) {
        return fetch(this.hubUrl + "/content/" + _itemId, {
            method: "GET"
        }).then(function (response) {
            if (response.status == 200) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    HubContent.prototype.search = function (_query) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(this.hubUrl + "/search", {
                            method: 'GET',
                            body: JSON.stringify(_query)
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    ;
    HubContent.prototype.create = function (itemParams, authentication) {
        delete itemParams.id;
        delete itemParams.owner;
        delete itemParams.orgId;
        return createItem({
            item: itemParams,
            authentication: authentication
        });
    };
    HubContent.prototype.get = function (itemId) {
        return Promise.all([getItem(itemId), getItemData(itemId)])
            .then(function (_a) {
            var itemInfo = _a[0], itemData = _a[1];
            itemInfo.data = itemData;
            return itemInfo;
        });
        // .catch(reject)
    };
    HubContent.prototype.update = function (_itemId, _resourceParams) {
        return new Promise(function (_resolve, reject) { return reject(false); });
    };
    HubContent.prototype.delete = function (_itemId) {
        return new Promise(function (_resolve, reject) { return reject(false); });
    };
    return HubContent;
}());
// export class Notebook extends HubResource {
//     create(resourceParams): string {
//     }
// }
// ------------------------------------------------------------
// let environment = "portal"
// let clientAPI;
// switch(environment) {
//     case("portal"): {
//         clientAPI = EnterpriseSites;
//         break;
//     }
//     case("hub"): {
//         clientAPI = HubOnline;
//         break;
//     }
// }
// clientAPI.canEdit('4ef', 'pmakerson')
var arcgisNotebookCss = ":host{display:block;width:100%;height:100%}iframe{border:none;width:100%;height:100%}.notebook-copy-button{float:right;margin:10px 33px 0 0}.notebook-title{margin-left:33px;float:left}";
var ArcgisNotebook = /** @class */ (function () {
    function ArcgisNotebook(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Notebook Item ID from ArcGIS Online or Enterprise
         * Required
         */
        this.item = "";
        /**
         * Notebook can include other Javascript libraries
         * Useful for some charting libraries (e.g. Vega Altair)
         * But may be a security concern.
         * Default: true
         */
        this.allowScripts = true;
        /**
         * Show the notebook preview (live/non-edit) or Edit
         * Note: Edit currently blocked by ArcGIS security restrictions
         *
         */
        this.view = "preview";
        /**
         * Optional ClientID to identify the app launching authentication
         * Only required if accessing restricted notebooks
         */
        this.clientid = "";
        /**
         * ArcGIS Online or Enterprise URL
         *
         */
        this.portal = "https://www.arcgis.com";
        this.sandboxSettings = ["allow-same-origin"];
    }
    ArcgisNotebook.prototype.componentWillLoad = function () {
        if (this.allowScripts) {
            this.sandboxSettings.push("allow-scripts");
        }
    };
    ArcgisNotebook.prototype.componentDidLoad = function () {
        var _this = this;
        if (this.view == "edit") {
            this.getEdit();
        }
        else {
            this.getPreview();
        }
        var hub = HubService.create('hub');
        hub.get(this.item).then(function (item) {
            console.log("Notebook", item);
            _this.notebook = item;
            //@ts-ignore
            _this.titleEl.innerText = item.title;
        });
    };
    ArcgisNotebook.prototype.getEdit = function () {
        var editUrl = this.portal + "/home/notebook/notebook.html?id=" + this.item;
        console.debug("ArcGIS Notebook getEdit", editUrl);
        this.iFrameEl.src = editUrl;
    };
    ArcgisNotebook.prototype.getPreview = function () {
        var _this = this;
        var resourceName = "notebook_preview.json";
        var previewUrl = this.portal + "/sharing/rest/content/items/" + this.item + "/resources/" + resourceName;
        console.log("Notebook getPreview", previewUrl);
        fetch(previewUrl).then(function (response) {
            response.json().then(function (json) {
                // remove CSS border
                var idx = json.html.indexOf("<body>") + 6;
                json.html =
                    json.html.slice(0, idx) +
                        "<style>#notebook-container { box-shadow: none; -webkit-box-shadow: none; padding: 0; }</style>" +
                        json.html.slice(idx);
                // Write the HTML into the body of the iFrame
                var doc = _this.iFrameEl.contentWindow.document;
                doc.open();
                doc.write(json.html);
                doc.close();
            });
        }).catch(function (e) {
            console.error("Error in arcgis-notebook getPreview", e);
        });
    };
    ArcgisNotebook.prototype.onCopy = function (_e) {
        var _this = this;
        return authenticateUser(this.clientid, this.portal).then(function (session) {
            _this.session = session;
            return _this.copyNotebook();
        });
    };
    ArcgisNotebook.prototype.copyNotebook = function () {
        console.log("onCopy starting", this.notebook);
        var hub = HubService.create('hub');
        hub.create(this.notebook, UserSession.deserialize(this.session)).then(function (response) {
            console.log("onCopy Done", response);
        });
    };
    // onCopy(itemId:string) {
    //   console.log("onCopy", this.portal)
    //   return authenticateUser(this.clientid, this.portal).then(session => {
    //     this.session = session;
    //     return this.copyItem(itemId);
    //   })
    // }  
    // copyItem(itemId:string) {
    //   let hub = HubAPI.HubService.create('hub');
    //   hub.get(itemId).then((item) => {
    //     console.log("onCopy starting", item)
    //     hub.create(
    //       item, 
    //       UserSession.deserialize(this.session)
    //     ).then((response) => {
    //         console.log("onCopy Done", response)
    //     })  
    //   });
    // } 
    ArcgisNotebook.prototype.render = function () {
        var _this = this;
        return (h(Host, null, h("h3", { id: "notebook-title", ref: function (el) { return _this.titleEl = el; } }), h("span", { class: "notebook-title" }, h("slot", { name: "title" })), h("hub-button", { class: "notebook-copy-button", color: "dark", text: "Copy Notebook", action: this.onCopy }), h("iframe", { sandbox: this.sandboxSettings.join(" "), src: "", id: "notebook-iframe", ref: function (el) { return _this.iFrameEl = el; } })));
    };
    return ArcgisNotebook;
}());
ArcgisNotebook.style = arcgisNotebookCss;
export { ArcgisNotebook as arcgis_notebook };
