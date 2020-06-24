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

  async componentWillLoad() {
    this.session = readSessionFromCookie();
    console.log("Session", this.session)
    if(this.session !== undefined) {
      const username = JSON.parse(this.session).username;
      this.member = await HubMember.getMember(username)
      let search = await HubMember.getMemberTeams(UserSession.deserialize(this.session));
      this.teams = search.results;
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
          <div class="workspace-bio">
            <img src={this.member.thumbnailUrl} alt="Profile Image" />
            <h3>{this.member.name}</h3>
            <p>{this.member.summary}</p>
            <em>Joined {this.dateToText(this.member.createdDate)}</em>
          </div>
          <div class="workspace-teams">
          
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
