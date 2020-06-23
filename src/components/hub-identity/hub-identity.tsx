import { Component, Host, h, Prop } from '@stencil/core';
import { readSessionFromCookie, authenticateUser } from '../../utils/utils';

@Component({
  tag: 'hub-identity',
  styleUrl: 'hub-identity.css',
  shadow: true,
})
export class HubIdentity {

  @Prop() message:string = "Sign In"

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
  
  async identityAuthenticate() {
    this.session = await authenticateUser(this.clientid, this.orgurl)
  }

  render() {
    let output = [];
    if(this.session === undefined) {
      output.push(
        <calcite-button onClick={(_event: MouseEvent) => this.identityAuthenticate()}>
          {this.message}
        </calcite-button>
      )
    } else {
      output.push(
       <code>{this.session}</code>
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
