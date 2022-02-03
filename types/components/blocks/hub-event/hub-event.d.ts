export declare class HubEvent {
  /**
   * ClientID to identify the app launching OAuth
   */
  clientid: string;
  /**
   * identifier for the ArcGIS Hub initiative
   */
  eventtitle: string;
  /**
   * url of the ArcGIS Online organization
   */
  orgurl: string;
  /**
   * Serialized authentication information.
   */
  session: string;
  /**
   *
   */
  eventDate: string;
  /**
   *
   */
  eventOrganizer: string;
  /**
   *
   */
  eventServiceUrl: string;
  /**
   *
   */
  eventGroupId: string;
  /**
   *
   */
  attending: boolean;
  /**
  *
  */
  eventUrl: string;
  /**
   * Text to display on the button
   */
  callToActionText: string;
  triggerRegister: () => Promise<any>;
  toggleRegister: () => Promise<{
    success: boolean;
  }>;
  componentDidLoad(): void;
  digOutContactInfo(details: any): string;
  render(): any;
}
