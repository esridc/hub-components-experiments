export declare class HubMetadataEditor {
  item: string;
  itemTitle: string;
  tags: Array<string>;
  summary: string;
  /**
   * ClientID to identify the app launching auth
   */
  clientid: string;
  portal: string;
  session: string;
  resource: any;
  titleEl: HTMLInputElement;
  tagsEl: HTMLInputElement;
  summaryEl: HTMLTextAreaElement;
  componentWillLoad(): void;
  private getItem;
  saveForm(e: any): void;
  render(): any;
}
