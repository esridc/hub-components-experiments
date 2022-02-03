'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dad2b533.js');
const utils = require('./utils-27ee60f0.js');
const hubTeam = require('./hub-team-9769a554.js');
const UserSession = require('./UserSession-68b84217.js');
require('./hub-content-20389e15.js');
require('./get-1a802105.js');
require('./clean-url-e0d82cce.js');
require('./get-portal-url-674469a6.js');
require('./content-f2cad484.js');
require('./hub-search-0bb25918.js');
require('./search-79a183b0.js');
require('./create-filters-c9a367cb.js');
require('./get-prop-581f8032.js');
require('./get-user-88858550.js');
require('./search-453dd47b.js');
require('./get-portal-api-url-a814b68c.js');

const hubProfileEditorCss = ":host{display:block}";

let HubProfileEditor = class {
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
    const auth = UserSession.UserSession.deserialize(this.session);
    this.user = await hubTeam.getMember(this.username, auth);
    // Portal.getUser(this.username).then((response) => {
    //   this.user = response; // For sending into the metadata form
    // })
  }
  saveForm(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("trace hub-profile-editor: onSave", e, this.user);
    const authentication = UserSession.UserSession.deserialize(this.session);
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
