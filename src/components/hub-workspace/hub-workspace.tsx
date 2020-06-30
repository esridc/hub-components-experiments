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

  @State() teams: HubTypes.IHubSearchResults;
  @State() member: HubTypes.IHubMember;
  @State() events: HubTypes.IHubSearchResults;
  @State() places: HubTypes.IHubGeography[];
  @State() content: HubTypes.IHubSearchResults;

  async componentWillLoad() {
    this.session = readSessionFromCookie();
    const auth = UserSession.deserialize(this.session);

    console.log("Session", this.session)
    if(this.session !== undefined) {
      const username = JSON.parse(this.session).username;

      [this.member,
        this.teams,
        this.events,
        this.places,
        this.content] = await Promise.all([
        await HubMember.getMember( username, auth ),
        await HubMember.getMemberTeams( auth ),
        await HubMember.getMemberEvents( auth ),
        await HubMember.getMemberPlaces( username, auth ),
        await HubMember.searchMemberContent( username, auth )
      ])

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
            <hub-map></hub-map>
          </div>
          <div class="workspace-interests">
            <h4>Stats</h4>
              <hub-statistic size="m" label="Member of" value={this.teams.meta.total} units="Teams"></hub-statistic>
              <hub-statistic size="m" label="Attended" value={this.events.meta.total} units="Events"></hub-statistic>
              <hub-statistic size="m" label="Nearby" value={this.places.length} units="Places"></hub-statistic>
              <hub-statistic size="m" label="Owns" value={this.content.meta.total} units="Content Items"></hub-statistic>
            <h4>Interests</h4>
            {this.member.metadata?.interests.map((tag) =>
              <calcite-chip value={tag}>{tag}</calcite-chip>
            )}
            <h4>Places</h4>
            {this.places.map((place) =>
              <calcite-chip value={place.name}>{place.name} ({place.coverage})</calcite-chip>
            )}            
          </div>
          <div class="workspace-events">
            <h4>Upcoming Events</h4>
            <hub-events-list session={this.session}></hub-events-list>
            <h4>Your Teams</h4>
            <ul>
            {this.teams.results.map((result) =>
              <li><a href={result.url}>{truncateString(result.name, 55)}</a></li>
            )}
            </ul>
          </div>
          <div class="workspace-teams">
            <div class="gallery-header">
              <h2>My Content</h2>
              <a href="#">Explore more...</a>
            </div>

            <div class="gallery">
            {this.content.results.slice(0,4).map((result) =>
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
            <h2>Your Teams</h2>
            {this.teams.results.slice(0,8).map((result) =>
            <div class="team-gallery">
              <div class="gallery-header">
                <h4><a href={result.url}>{result.name} &gt;</a></h4>
              </div>
              <hub-gallery
                session={this.session}
                limit={4}
                groups={result.id}
                showsearch={false}
                sort="modified"
                hubtype="content"
              ></hub-gallery>
              </div>              
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
