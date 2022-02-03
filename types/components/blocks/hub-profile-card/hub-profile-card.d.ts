import * as HubTypes from '../../../utils/hub-types';
export declare class HubProfileCard {
  /**
   * ID For the profile. Username, Team ID, Org ID
   */
  username: string;
  /**
   * Which Profile: member, team
   */
  type: string;
  /**
   * Internal storage of profile
   */
  profile: HubTypes.IHubMember;
  componentWillLoad(): void;
  /**
   *
   * @param id
   * @param type
   */
  loadProfile(id: string): Promise<void>;
  render(): any;
}
