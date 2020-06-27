import { Component, Host, h, Prop, State } from '@stencil/core';
import * as HubMember from '../../utils/hub-member'
import * as HubTypes from '../../utils/hub-types';
import { UserSession } from '@esri/arcgis-rest-auth';
import { readSessionFromCookie } from '../../utils/utils';

@Component({
  tag: 'hub-events-list',
  styleUrl: 'hub-events-list.css',
  shadow: true,
})
export class HubEventsList {

  /**
   * Serialized authentication information.
   */
  @Prop({ mutable: true }) session: string;

  @State() events: HubTypes.IHubEvent[];
  
  async componentWillLoad() {
    this.session = readSessionFromCookie();
    const auth = UserSession.deserialize(this.session);

    let eventSearch = await HubMember.getMemberEvents( auth );
    this.events = eventSearch.results;
  }
  
  render() {
    return (
      <Host>
        <slot></slot>
        <ul>
          {this.events.map((result) =>
            <li>{result.name}</li>
          )}
        </ul>
      </Host>
    );
  }

}
