import { Component, Host, h, Prop, Listen } from '@stencil/core';
import { UserSession } from '@esri/arcgis-rest-auth';
import { readSessionFromCookie } from '../../../utils/utils';
import * as HubTypes from '../../../utils/hub-types';
import * as HubMember from '../../../utils/hub-member'

@Component({
  tag: 'hub-places-map',
  styleUrl: 'hub-places-map.css',
  shadow: true,
})
export class HubPlacesMap {

  /**
   * Hub places array of geography.
   * Property name `value` because re-used across editors
   */
  @Prop({ mutable: true }) value: HubTypes.IHubGeography[] = [];


  /**
 * Choose to save or load places from user profile directly from session
   */
  @Prop() bindState: boolean = false;

  /**
   * Serialized authentication information.
   */
  @Prop({ mutable: true }) session: string;

  /**
   * Option to view places map, or edit places map
   */
  @Prop({ mutable: true, reflect: true }) mode: "view" | "edit" = "view";


  async componentWillLoad() {
    if(this.bindState)  {
      this.session = readSessionFromCookie();
      const auth = UserSession.deserialize(this.session);
  
      console.log("Session", this.session)
      if(this.session !== undefined) {
        const username = JSON.parse(this.session).username;
        this.value = await HubMember.getMemberPlaces( username, auth )
      }
    }
  }

  @Listen('drawingComplete')
  placeAdded(event: CustomEvent) {
    console.log("hub-places-map: placeAdded", event)
    if(this.bindState) {

      const authentication = UserSession.deserialize(this.session);
      const places = [
        {
          name: "Custom",
          geometry: event.detail.geometry
        }
      ]
      let response = HubMember.setMemberPlaces(
        authentication.username, 
        places,
        authentication)
      console.log("hub-places-map: placeAdded", response);  
    }
  }


  render() {
    return (
      <Host>
        <slot></slot>
        <hub-map 
          class="places-map"
          drawing={true}
          geometry={this.value.map((place) => {return place.geometry})}
        ></hub-map>
      </Host>
    );
  }

}
