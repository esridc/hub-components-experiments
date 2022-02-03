export declare class HubUploadFile {
  file: File;
  itemType: string;
  /**
   * ClientID to identify the app launching auth
   */
  clientid: string;
  portal: string;
  session: string;
  editors: Array<any>;
  componentDidLoad(): void;
  private uploadItem;
  private showError;
  private checkStatus;
  private editItem;
  render(): any;
}
