import { r as registerInstance, c as createEvent, h, H as Host } from './index-9fca3863.js';
import { r as readSessionFromCookie, a as authenticateUser, d as deleteSessionCookie } from './utils-49410b4c.js';
import { U as UserSession } from './UserSession-1faae0f0.js';
import './clean-url-83c51f70.js';

const hubIdentityCss = ":host{display:block}";

let HubIdentity = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onSignin = createEvent(this, "onSignin", 7);
    this.onSignout = createEvent(this, "onSignout", 7);
    this.signin = "Sign In";
    this.signout = "Sign Out";
    this.displaysignin = true;
    this.displaysignout = true;
    this.displayusername = true;
    /**
     * url of the ArcGIS Online organization
     */
    this.orgurl = "https://www.arcgis.com";
  }
  componentWillLoad() {
    this.session = readSessionFromCookie();
    if (!!this.session) {
      this.username = UserSession.deserialize(this.session).username;
    }
  }
  async identitySignin() {
    this.session = await authenticateUser(this.clientid, this.orgurl);
    if (!!this.session) {
      this.username = UserSession.deserialize(this.session).username;
      this.onSignin.emit(this.session);
    }
  }
  async identitySignout() {
    const username = this.username;
    this.session = null;
    this.username = null;
    deleteSessionCookie();
    // Which user was signed out
    this.onSignout.emit(username);
  }
  render() {
    let output = [];
    if ((this.session === undefined || this.session === null)) {
      if (this.displaysignin) {
        output.push(h("calcite-button", { onClick: (_event) => this.identitySignin() }, this.signin));
      }
    }
    else {
      if (this.displayusername) {
        output.push(`User: ${this.username}`);
      }
      if (this.displaysignout) {
        output.push(h("div", null, h("calcite-button", { onClick: (_event) => this.identitySignout() }, `${this.signout}`)));
      }
    }
    return (h(Host, null, h("slot", null), output));
  }
};
HubIdentity.style = hubIdentityCss;

export { HubIdentity as hub_identity };
