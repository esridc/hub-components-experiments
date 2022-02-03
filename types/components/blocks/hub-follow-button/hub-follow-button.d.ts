/// <reference types="react" />
import { IUser } from '@esri/arcgis-rest-common-types';
export declare class HubFollowButton {
  /**
   * Follow icon
   */
  icon: JSX.Element;
  /**
   * ClientID to identify the app launching auth
   */
  clientid: string;
  /**
   * identifier for the ArcGIS Hub initiative
   */
  initiativeid: string;
  /**
   * url of the ArcGIS Online organization
   */
  orgurl: string;
  /**
   * User metadata
   */
  user: IUser;
  /**
   * Serialized authentication information.
   */
  session: string;
  /**
   * Denotes whether the user is already following the configured initiative.
   */
  following: boolean;
  /**
   * Text to show in the string when not yet followed
   */
  followtext: string;
  /**
   * Text to show in the string for user to unfollw
   */
  unfollowtext: string;
  /**
   * Text to display on the button
   */
  callToActionText: string;
  triggerFollow: () => Promise<any>;
  toggleFollow: () => Promise<{
    success: boolean;
  }>;
  render(): any;
}
