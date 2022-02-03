import { r as registerInstance, h, H as Host } from './index-9fca3863.js';
import { r as readSessionFromCookie } from './utils-49410b4c.js';
import { f as getMember, u as updateMember } from './hub-team-48304e45.js';
import { U as UserSession } from './UserSession-1faae0f0.js';
import './hub-content-ba4934ea.js';
import './get-9aed8a75.js';
import './clean-url-83c51f70.js';
import './get-portal-url-fdc441e5.js';
import './content-16805b54.js';
import './hub-search-992b92f5.js';
import './search-b0ff9cfb.js';
import './create-filters-48231911.js';
import './get-prop-a0541ce0.js';
import './get-user-65c98cff.js';
import './search-9451d0d4.js';
import './get-portal-api-url-fba2ecae.js';

const hubProfileEditorCss = ":host{display:block}";

let HubProfileEditor = class {
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
