import { Component, Host, h, Prop, State } from '@stencil/core';
import * as HubMember from '../../utils/hub-member'
import { UserSession } from '@esri/arcgis-rest-auth';
import { readSessionFromCookie } from '../../utils/utils';
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

  async componentWillLoad() {
    this.session = readSessionFromCookie();
    console.log("Session", this.session)
    if(this.session !== undefined) {
      let search = await HubMember.getMemberTeams(UserSession.deserialize(this.session));
      this.teams = search.results;
    }
    
  }
  render() {
    let output = [];
    if(this.session === undefined) {
      output.push(<hub-identity></hub-identity>)
    } else {
      output.push(
        <ul>
        {this.teams.map((team) =>
        <li>{team.name}</li>
        )}
        </ul>
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
