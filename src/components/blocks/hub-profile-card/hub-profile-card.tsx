import { Component, Host, h, Prop, State } from '@stencil/core';
import * as HubMember from '../../../utils/hub-member'
import * as HubTeam from '../../../utils/hub-team'
import * as HubTypes from '../../../utils/hub-types'

@Component({
  tag: 'hub-profile-card',
  styleUrl: 'hub-profile-card.css',
  shadow: true,
})
export class HubProfileCard {

  /**
   * ID For the profile. Username, Team ID, Org ID
   */
  @Prop() id: string = "";

  /**
   * Which Profile: member, team
   */
  @Prop() type: string = "member";

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
      console.log("Profile: ", [this.type, HubTypes.CommunityType.team, HubTypes.CommunityType[this.type] == HubTypes.CommunityType.team])
      this.profile = (HubTypes.CommunityType[this.type] == HubTypes.CommunityType.team) ? await HubTeam.getTeam(id) : await HubMember.getMember(id);
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
          description={this.profile.summary}
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
