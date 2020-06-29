import { Component, Host, h, Prop, Listen } from '@stencil/core';
import { UserSession } from '@esri/arcgis-rest-auth';
import { readSessionFromCookie } from '../../utils/utils';
import * as HubTypes from '../../utils/hub-types';
import * as HubMember from '../../utils/hub-member'

@Component({
  tag: 'hub-places-map',
  styleUrl: 'hub-places-map.css',
  shadow: true,
})
export class HubPlacesMap {

  /**
   * Serialized authentication information.
   */
  @Prop({ mutable: true }) session: string;

  /**
   * Option to view places map, or edit places map
   */
  @Prop({ mutable: true, reflect: true }) mode: "view" | "edit" = "view";

  @Prop({ mutable: true }) places: HubTypes.IHubGeography[];
  async componentWillLoad() {
    this.session = readSessionFromCookie();
    const auth = UserSession.deserialize(this.session);

    console.log("Session", this.session)
    if(this.session !== undefined) {
      const username = JSON.parse(this.session).username;
      this.places = await HubMember.getMemberPlaces( username, auth )
      
    }
  }
  @Listen('drawingComplete')
  placeAdded(event: CustomEvent) {
    console.log("hub-places-map: placeAdded", event)

  }

  render() {
    return (
      <Host>
        <slot></slot>
        <hub-map class="places-map"
          drawing={true}
        ></hub-map>
      </Host>
    );
  }

}
