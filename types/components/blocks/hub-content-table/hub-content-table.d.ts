export declare class HubContentTable {
  /**
   * Hub site URL to scope for search
   */
  site: string;
  /**
   * Default query for the search
   */
  query: string;
  /**
   * Total number of results to return
   */
  limit: number;
  /**
   * Hub site URL to scope for search
   */
  sort: "name" | "modified" | "-name" | "-modified";
  /**
   * Use the Hub API (true) or the Portal API (false)
   */
  hubapi: boolean;
  results: any[];
  catalog: any;
  componentWillLoad(): Promise<void>;
  searchContent(query: string, params: any): Promise<any>;
  renderItemLinks(item: any): any;
  render(): any;
}
