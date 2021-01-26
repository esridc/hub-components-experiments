import { r as registerInstance, h, H as Host } from './index-17d4341f.js';
import './hub-content-82335dfd.js';
import './index-fd5669bb.js';
import './index-2b41d503.js';
import './index-31ce56d3.js';
import './index-c55b387e.js';
import './hub-search-eb1585d6.js';
import { U as UserSession } from './index-80082925.js';
import './index-52c4095a.js';
import { h as getMember, u as updateMember } from './hub-team-d39e46f8.js';
import { r as readSessionFromCookie } from './utils-877cdb99.js';

const hubProfileEditorCss = ":host{display:block}";

const HubProfileEditor = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.username = "aturner_cityx";
        /**
         * ClientID to identify the app launching auth
         */
        this.clientid = "WXC842NRBVB6NZ2r";
        this.portal = "https://www.arcgis.com";
        this.session = null;
        this.user = null;
    }
    async componentWillLoad() {
        this.session = readSessionFromCookie();
        const auth = UserSession.deserialize(this.session);
        this.user = await getMember(this.username, auth);
        // Portal.getUser(this.username).then((response) => {
        //   this.user = response; // For sending into the metadata form
        // })
    }
    saveForm(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log("trace hub-profile-editor: onSave", e, this.user);
        const authentication = UserSession.deserialize(this.session);
        // TODO: remove need to load user first 
        const member = Object.assign(getMember(this.username, authentication), this.user);
        updateMember(this.username, member, authentication);
        // Portal.updateUser({
        //   user: {
        //     username: this.username,
        //     description: this.user.description,
        //     tags: this.user.tags
        //   },
        //   authentication
        // })
    }
    render() {
        return (h(Host, null, h("metadata-form", { sections: ['user', 'places'], resource: this.user }), h("calcite-button", { onClick: (event) => this.saveForm(event) }, "Save Profile")));
    }
};
HubProfileEditor.style = hubProfileEditorCss;

export { HubProfileEditor as hub_profile_editor };
