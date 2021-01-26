'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ad6d6974.js');
require('./index-859d80b7.js');
const index$6 = require('./index-52faf404.js');
const utils = require('./utils-05b33af8.js');

const hubIdentityCss = ":host{display:block}";

const HubIdentity = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.signin = "Sign In";
        this.signout = "Sign Out";
        this.displaysignin = true;
        this.displaysignout = true;
        this.displayusername = true;
        /**
         * url of the ArcGIS Online organization
         */
        this.orgurl = "https://www.arcgis.com";
        this.onSignin = index.createEvent(this, "onSignin", 7);
        this.onSignout = index.createEvent(this, "onSignout", 7);
    }
    componentWillLoad() {
        this.session = utils.readSessionFromCookie();
        if (!!this.session) {
            this.username = index$6.UserSession.deserialize(this.session).username;
        }
    }
    async identitySignin() {
        this.session = await utils.authenticateUser(this.clientid, this.orgurl);
        if (!!this.session) {
            this.username = index$6.UserSession.deserialize(this.session).username;
            this.onSignin.emit(this.session);
        }
    }
    async identitySignout() {
        const username = this.username;
        this.session = null;
        this.username = null;
        utils.deleteSessionCookie();
        // Which user was signed out
        this.onSignout.emit(username);
    }
    render() {
        let output = [];
        if ((this.session === undefined || this.session === null)) {
            if (this.displaysignin) {
                output.push(index.h("calcite-button", { onClick: (_event) => this.identitySignin() }, this.signin));
            }
        }
        else {
            if (this.displayusername) {
                output.push(`User: ${this.username}`);
            }
            if (this.displaysignout) {
                output.push(index.h("div", null, index.h("calcite-button", { onClick: (_event) => this.identitySignout() }, `${this.signout}`)));
            }
        }
        return (index.h(index.Host, null, index.h("slot", null), output));
    }
};
HubIdentity.style = hubIdentityCss;

exports.hub_identity = HubIdentity;
