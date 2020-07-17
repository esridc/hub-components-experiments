import { Component, Host, h, Prop, State } from '@stencil/core';
import { readSessionFromCookie, authenticateUser, deleteSessionCookie } from '../../../utils/utils';

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
  @Prop({ mutable: true }) session: string;

  componentWillLoad() {
    this.session = readSessionFromCookie();
  }  
  
  async identitySignin() {
    this.session = await authenticateUser(this.clientid, this.orgurl)
  }
  async identitySignout() {
    this.session = null;
    this.username = null;
    deleteSessionCookie();
  }  

  render() {
    let output = [];
    if((this.session === undefined || this.session === null) && this.displaysignin) {
      output.push(
        <calcite-button onClick={(_event: MouseEvent) => this.identitySignin()}>
          {this.signin}
        </calcite-button>
      )
    } else if (this.displaysignout) {
      output.push(
        <div>
          <calcite-button onClick={(_event: MouseEvent) => this.identitySignout()}>
            {`${this.signout}`}
          </calcite-button>
       </div>
      )
    }    
    return (
      <Host>
        <slot></slot>
        {output}
      </Host>
    );
  }

}
