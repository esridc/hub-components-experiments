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

const hubProfileEditorCss = ":host{display:block}";

const HubProfileEditor = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        this.session = utils.readSessionFromCookie();
        const auth = index$6.UserSession.deserialize(this.session);
        this.user = await hubTeam.getMember(this.username, auth);
        // Portal.getUser(this.username).then((response) => {
        //   this.user = response; // For sending into the metadata form
        // })
    }
    saveForm(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log("trace hub-profile-editor: onSave", e, this.user);
        const authentication = index$6.UserSession.deserialize(this.session);
        // TODO: remove need to load user first 
        const member = Object.assign(hubTeam.getMember(this.username, authentication), this.user);
        hubTeam.updateMember(this.username, member, authentication);
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
        return (index.h(index.Host, null, index.h("metadata-form", { sections: ['user', 'places'], resource: this.user }), index.h("calcite-button", { onClick: (event) => this.saveForm(event) }, "Save Profile")));
    }
};
HubProfileEditor.style = hubProfileEditorCss;

exports.hub_profile_editor = HubProfileEditor;
