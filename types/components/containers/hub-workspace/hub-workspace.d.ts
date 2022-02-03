import * as HubTypes from '../../../utils/hub-types';
import { IResourceObject } from '@esri/hub-annotations';
export declare class HubWorkspace {
  /**
   * Serialized authentication information.
   */
  session: string;
  teams: HubTypes.IHubSearchResults;
  member: HubTypes.IHubMember;
  events: HubTypes.IHubSearchResults;
  places: HubTypes.IHubGeography[];
  content: HubTypes.IHubSearchResults;
  comments: IResourceObject[];
  token: string;
  componentWillLoad(): Promise<void>;
  private dateToText;
  render(): any;
}
