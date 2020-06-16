import { Component, Host, h, Prop, State } from '@stencil/core';
import * as HubMember from '../../utils/hub-member'
import * as HubTypes from '../../utils/hub-types'

@Component({
  tag: 'hub-profile-card',
  styleUrl: 'hub-profile-card.css',
  shadow: true,
})
export class HubProfileCard {

  /**
   * ID For the profile. Username, Team ID, Org ID
   */
  @Prop() id :string = "";

  /**
   * Which Profile: member, team
   */
  @Prop() type :HubTypes.CommunityTypes;

  /**
   * Internal storage of profile
   */
  @State() profile :HubTypes.IHubMember;

  componentWillLoad() {
    this.loadProfile(this.id);
  }

  /**
   * 
   * @param id 
   * @param type 
   */
  async loadProfile(id:string) {
    try {
      this.profile = await HubMember.getMember(id);
    } catch {
      console.log("hub-profile-card: error with profile", id)
    }
  }

  render() {
    let output = [];
    if(this.profile !== undefined && this.profile !== null) {
      output.push(
        <hub-card class="hub-profile"
          contenttype={HubTypes.HubType[this.profile.hubType]}
          image={this.profile.thumbnailUrl} 
          name={this.profile.name} 
          description={this.profile.description}
          url={this.profile.url}
          // content={this.content}
        >
        </hub-card> 
      )      
    }
    return (
      <Host>
        {output}
      </Host>
    );
  }

}
