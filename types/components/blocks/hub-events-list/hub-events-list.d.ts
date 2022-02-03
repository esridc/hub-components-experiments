import * as HubTypes from '../../../utils/hub-types';
export declare class HubEventsList {
  /**
   * Serialized authentication information.
   */
  session: string;
  events: HubTypes.IHubEvent[];
  componentWillLoad(): Promise<void>;
  render(): any;
}
