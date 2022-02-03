export declare class HubGallery {
  /**
   * Hub site URL to scope for search
   */
  site: string;
  /**
   * Groups to limit search
   */
  groups: string;
  /**
   * Choose to show or hide search
   */
  showsearch: boolean;
  /**
   * Search Button text
   */
  searchbutton: string;
  /**
   * Search placeholder text
   */
  searchplaceholder: string;
  /**
   * Text to show in the button
   */
  buttontext: string;
  /**
   * Default Query
   */
  query: string;
  /**
   * Which Resources to search
   */
  hubtype: "content" | "members" | "teams";
  /**
   * Default sort order
   */
  sort: "name" | "modified";
  /**
   * Maximum number of results to return
   */
  limit: number;
  /**
   * Hub site URL to scope for search
   */
  layout: "horizontal" | "vertical";
  /**
   * Use the Hub API (true) or the Portal API (false)
   */
  hubapi: boolean;
  portal: string;
  clientid: string;
  session: string;
  queryInput: string;
  suggestions: Array<string>;
  results: any[];
  catalog: any;
  queryInputHandler(event: CustomEvent): string;
  querySelectHandler(event: CustomEvent): string;
  componentWillLoad(): void;
  updateGallery(query: string, customParams?: Object): Promise<void>;
  filterChanged(event: CustomEvent): void;
  render(): any;
}
