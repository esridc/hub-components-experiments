import { r as registerInstance, h, H as Host } from './index-17d4341f.js';
import './index-fd5669bb.js';
import { m as getItemGroups, d as getUser, n as createItem, g as getItem, a as getItemData } from './index-2b41d503.js';
import './index-31ce56d3.js';
import { a as agoSearch } from './index-c55b387e.js';
import { U as UserSession } from './index-80082925.js';
import { a as authenticateUser } from './utils-877cdb99.js';

let HubService = {
    // TODO: accept service URL and user session?
    create(type) {
        switch (type) {
            case 'portal': return new PortalContent;
            case 'hub': return new HubContent;
        }
    }
};
class PortalContent {
    constructor() {
        this.portalUrl = "https://www.arcgis.com/share/rest/";
    }
    canEdit(_itemId, _username) {
        return Promise.all([getItemGroups(_itemId), getUser(_username)])
            .then(([itemGroups, userInfo]) => {
            // This is just checking membership to any intersecting group
            // TODO: only check for admin/member/other? groups with update
            let intersect = itemGroups.member.filter(x => userInfo.groups.includes(x));
            return intersect.length > 0;
        });
    }
    search(_query) {
        return agoSearch({
            q: _query
        });
    }
    ;
    create(itemParams, authentication) {
        return createItem({
            item: itemParams,
            authentication
        });
    }
    get(itemId) {
        return Promise.all([getItem(itemId), getItemData(itemId)])
            .then(([itemInfo, itemData]) => {
            itemInfo.data = itemData;
            return itemInfo;
        });
        // .catch(reject)
    }
    update(_itemId, _resourceParams) {
        return new Promise((_resolve, reject) => reject(false));
    }
    delete(_itemId) {
        return new Promise((_resolve, reject) => reject(false));
    }
}
class HubContent {
    constructor() {
        this.hubUrl = "https://hub.arcgis.com/api/v3";
    }
    canEdit(_itemId, _username) {
        return fetch(`${this.hubUrl}/content/${_itemId}`, {
            method: "GET"
        }).then(response => {
            if (response.status == 200) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    async search(_query) {
        const response = await fetch(`${this.hubUrl}/search`, {
            method: 'GET',
            body: JSON.stringify(_query)
        });
        return response.json();
    }
    ;
    create(itemParams, authentication) {
        delete itemParams.id;
        delete itemParams.owner;
        delete itemParams.orgId;
        return createItem({
            item: itemParams,
            authentication
        });
    }
    get(itemId) {
        return Promise.all([getItem(itemId), getItemData(itemId)])
            .then(([itemInfo, itemData]) => {
            itemInfo.data = itemData;
            return itemInfo;
        });
        // .catch(reject)
    }
    update(_itemId, _resourceParams) {
        return new Promise((_resolve, reject) => reject(false));
    }
    delete(_itemId) {
        return new Promise((_resolve, reject) => reject(false));
    }
}
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

const arcgisNotebookCss = ":host{display:block;width:100%;height:100%}iframe{border:none;width:100%;height:100%}.notebook-copy-button{float:right;margin:10px 33px 0 0}.notebook-title{margin-left:33px;float:left}";

const ArcgisNotebook = class {
    constructor(hostRef) {
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
    componentWillLoad() {
        if (this.allowScripts) {
            this.sandboxSettings.push("allow-scripts");
        }
    }
    componentDidLoad() {
        if (this.view == "edit") {
            this.getEdit();
        }
        else {
            this.getPreview();
        }
        let hub = HubService.create('hub');
        hub.get(this.item).then((item) => {
            console.log("Notebook", item);
            this.notebook = item;
            //@ts-ignore
            this.titleEl.innerText = item.title;
        });
    }
    getEdit() {
        const editUrl = `${this.portal}/home/notebook/notebook.html?id=${this.item}`;
        console.debug("ArcGIS Notebook getEdit", editUrl);
        this.iFrameEl.src = editUrl;
    }
    getPreview() {
        const resourceName = "notebook_preview.json";
        const previewUrl = `${this.portal}/sharing/rest/content/items/${this.item}/resources/${resourceName}`;
        console.log("Notebook getPreview", previewUrl);
        fetch(previewUrl).then((response) => {
            response.json().then(json => {
                // remove CSS border
                const idx = json.html.indexOf("<body>") + 6;
                json.html =
                    json.html.slice(0, idx) +
                        "<style>#notebook-container { box-shadow: none; -webkit-box-shadow: none; padding: 0; }</style>" +
                        json.html.slice(idx);
                // Write the HTML into the body of the iFrame
                const doc = this.iFrameEl.contentWindow.document;
                doc.open();
                doc.write(json.html);
                doc.close();
            });
        }).catch((e) => {
            console.error("Error in arcgis-notebook getPreview", e);
        });
    }
    onCopy(_e) {
        return authenticateUser(this.clientid, this.portal).then(session => {
            this.session = session;
            return this.copyNotebook();
        });
    }
    copyNotebook() {
        console.log("onCopy starting", this.notebook);
        let hub = HubService.create('hub');
        hub.create(this.notebook, UserSession.deserialize(this.session)).then((response) => {
            console.log("onCopy Done", response);
        });
    }
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
    render() {
        return (h(Host, null, h("h3", { id: "notebook-title", ref: (el) => this.titleEl = el }), h("span", { class: "notebook-title" }, h("slot", { name: "title" })), h("hub-button", { class: "notebook-copy-button", color: "dark", text: "Copy Notebook", action: this.onCopy }), h("iframe", { sandbox: this.sandboxSettings.join(" "), src: "", id: "notebook-iframe", ref: (el) => this.iFrameEl = el })));
    }
};
ArcgisNotebook.style = arcgisNotebookCss;

export { ArcgisNotebook as arcgis_notebook };
