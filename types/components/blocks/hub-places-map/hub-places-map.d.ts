import * as HubTypes from '../../../utils/hub-types';
export declare class HubPlacesMap {
  /**
   * Hub places array of geography.
   * Property name `value` because re-used across editors
   */
  value: HubTypes.IHubGeography[];
  /**
 * Choose to save or load places from user profile directly from session
   */
  bindState: boolean;
  /**
   * Serialized authentication information.
   */
  session: string;
  /**
   * Option to view places map, or edit places map
   */
  mode: "view" | "edit";
  componentWillLoad(): Promise<void>;
  placeAdded(event: CustomEvent): void;
  render(): any;
}
