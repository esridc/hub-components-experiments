export declare class ArcgisNotebook {
  /**
   * Notebook Item ID from ArcGIS Online or Enterprise
   * Required
   */
  item: string;
  /**
   * Notebook can include other Javascript libraries
   * Useful for some charting libraries (e.g. Vega Altair)
   * But may be a security concern.
   * Default: true
   */
  allowScripts: boolean;
  /**
   * Show the notebook preview (live/non-edit) or Edit
   * Note: Edit currently blocked by ArcGIS security restrictions
   *
   */
  view: "preview" | "edit";
  /**
   * Optional ClientID to identify the app launching authentication
   * Only required if accessing restricted notebooks
   */
  clientid: string;
  /**
   * ArcGIS Online or Enterprise URL
   *
   */
  portal: string;
  /**
   * Optional serialized authentication information.
   * Only required to access restricted notebooks.
   */
  session: string;
  sandboxSettings: Array<string>;
  previewUrl: string;
  notebook: any;
  iFrameEl: HTMLIFrameElement;
  titleEl: HTMLElement;
  componentWillLoad(): void;
  componentDidLoad(): void;
  getEdit(): void;
  getPreview(): void;
  onCopy(_e: any): Promise<void>;
  copyNotebook(): void;
  render(): any;
}
