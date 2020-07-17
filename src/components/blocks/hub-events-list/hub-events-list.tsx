import { Component, Host, h, Prop, State } from '@stencil/core';
import * as HubMember from '../../../utils/hub-member'
import * as HubTypes from '../../../utils/hub-types';
import { UserSession } from '@esri/arcgis-rest-auth';
import { readSessionFromCookie } from '../../../utils/utils';
import { event24 } from '@esri/calcite-ui-icons'

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
    console.log("hub-events-list events", this.events)
  }
  
  render() {
    return (
      <Host>
        <slot></slot>
        {this.events.map((result) =>
            
          <div class="event">
            <span class="icon"><svg width="24" height="24"><path d={event24}></path></svg></span> 
            <span class="name"><a href={`#${result.url}`}>{result.name}</a></span>
            <span class="summary">{result.summary}</span>
          </div>
        )}
      </Host>
    );
  }

}
