import { Component, Event, EventEmitter, Host, h, Prop, State } from '@stencil/core';
import { readSessionFromCookie, authenticateUser, deleteSessionCookie } from '../../../utils/utils';
import { UserSession } from '@esri/arcgis-rest-auth';

@Component({
  tag: 'hub-identity',
  styleUrl: 'hub-identity.css',
  shadow: true,
})
export class HubIdentity {

  @Prop() signin:string = "Sign In"

  @Prop() signout:string = "Sign Out"

  @Prop() displaysignin: boolean = true;
  @Prop() displaysignout: boolean = true;
  @Prop() displayusername: boolean = true;

  @State() username:string;

   /**
   * ClientID to identify the app launching OAuth
   */
  @Prop() clientid: string;

  /**
   * url of the ArcGIS Online organization
   */
  @Prop() orgurl: string = "https://www.arcgis.com";

  /**
   * Serialized authentication information.
   */
  @Prop({ mutable: true, reflect: true }) session: string;

  @Event({ 
    eventName: 'onSignin',
    composed: true,
    cancelable: true,
    bubbles: true
  }) onSignin: EventEmitter;  
  @Event({ 
    eventName: 'onSignout',
    composed: true,
    cancelable: true,
    bubbles: true
  }) onSignout: EventEmitter;    

  componentWillLoad() {
    this.session = readSessionFromCookie();
    if(!!this.session) {
      this.username = UserSession.deserialize(this.session).username;
    }
  }  
  
  async identitySignin() {
    this.session = await authenticateUser(this.clientid, this.orgurl)
    if(!!this.session) {
      this.username = UserSession.deserialize(this.session).username;
      this.onSignin.emit( this.session );
    }
  }
  async identitySignout() {
    const username = this.username
    this.session = null;
    this.username = null;
    deleteSessionCookie();
    // Which user was signed out
    this.onSignout.emit( username );
  }  

  render() {
    let output = [];

    if((this.session === undefined || this.session === null)) {
      if(this.displaysignin) {
        output.push(
          <calcite-button onClick={(_event: MouseEvent) => this.identitySignin()}>
            {this.signin}
          </calcite-button>
        )  
      }
    } else { 
      if (this.displayusername) {
        output.push( `User: ${this.username}` )
      }
      if (this.displaysignout) {
        output.push(
          <div>
            <calcite-button onClick={(_event: MouseEvent) => this.identitySignout()}>
              {`${this.signout}`}
            </calcite-button>
        </div>
        )
      }
    }
    return (
      <Host>
        <slot></slot>
        {output}
      </Host>
    );
  }

}
