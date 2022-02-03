export declare class HubProfileEditor {
  username: string;
  /**
   * ClientID to identify the app launching auth
   */
  clientid: string;
  portal: string;
  session: string;
  user: any;
  componentWillLoad(): Promise<void>;
  saveForm(e: any): void;
  render(): any;
}
