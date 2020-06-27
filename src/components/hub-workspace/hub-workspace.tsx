import { Component, Host, h, Prop, State } from '@stencil/core';
import * as HubMember from '../../utils/hub-member'
import { UserSession } from '@esri/arcgis-rest-auth';
import { readSessionFromCookie, truncateString } from '../../utils/utils';
import * as HubTypes from '../../utils/hub-types';

@Component({
  tag: 'hub-workspace',
  styleUrl: 'hub-workspace.css',
  shadow: true,
})
export class HubWorkspace {

  /**
   * Serialized authentication information.
   */
  @Prop({ mutable: true }) session: string;

  @State() teams: HubTypes.IHubResource[];
  @State() member: HubTypes.IHubMember;
  @State() events: HubTypes.IHubEvent[];

  async componentWillLoad() {
    this.session = readSessionFromCookie();
    const auth = UserSession.deserialize(this.session);

    console.log("Session", this.session)
    if(this.session !== undefined) {
      const username = JSON.parse(this.session).username;
      this.member = await HubMember.getMember( username, auth )
      
      let search = await HubMember.getMemberTeams( auth );
      this.teams = search.results;
      
      let eventSearch = await HubMember.getMemberEvents( auth );
      this.events = eventSearch.results;

      console.log("Workspace: Events", this.events);
      
      
    }
  }

  private dateToText( date: Date ):string {
    const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' }) 
    const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat .formatToParts(date) 
    return `${day}-${month}-${year }`;

  }

  render() {
    let output = [];
    if(this.session !== undefined) {
      output.push(
        <div class="workspace-grid">
          <div class="workspace-avatar">
            <img src={this.member.thumbnailUrl} alt="Profile Image" />
          </div>
          <div class="workspace-bio">
            <h3>{this.member.name}</h3>
            <p>{this.member.summary}</p>
            <em>Joined {this.dateToText(this.member.createdDate)}</em>
          </div>
          <div class="workspace-map">
            
          </div>
          <div class="workspace-interests">
            <h4>Interests</h4>
            {this.member.tags.map((tag) =>
              <calcite-chip value={tag}>{tag}</calcite-chip>
            )}
          </div>
          <div class="workspace-events">
            <h4>Your Upcoming Events</h4>
            <hub-events-list session={this.session}></hub-events-list>
          </div>
          <div class="workspace-teams">
          {/* <h4>Your Teams</h4><br/> */}
          {this.teams.map((result) =>
            // <hub-profile-card id={result.id} type="team"></hub-profile-card>
            <hub-card 
              class="gallery-card"
              contenttype={`${HubTypes.HubType[result.hubType]} by ${result.publisher.name}`}
              image={result.thumbnailUrl} 
              name={truncateString(result.name, 55)} 
              description={truncateString(result.summary, 90)}
              url={result.url}
              buttonText="View Team"
              onClick={() => ""}
              // content={this.content}
            >
            </hub-card> 
          )}
          </div>
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
