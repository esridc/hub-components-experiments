import { EventEmitter } from '../../../stencil-public-runtime';
import '@esri/calcite-components';
interface HubTree {
  [field: string]: any;
}
export declare class HubFilterCategory {
  /**
   * Filter name to display at top
   */
  name: string;
  /**
   * List of categories to show. Can be set or inferred from facet
   */
  categories: Array<string>;
  /**
   * Build filter from a facet name
   */
  facet: string;
  /**
   * For group categories, choose a groupid
   */
  group: string;
  /**
   * Input query for search box
   */
  query: string;
  /**
   * Type of facet
   */
  facettype: "checkbox" | "tree";
  /**
   * Emitted when a filter is changed
   */
  filterChanged: EventEmitter;
  /**
   * Actual facet values
   */
  facets: [{
    value: string;
    count: number;
  }];
  selectedCategories: any[];
  getGroupCategories(query: string, facet: string, groupId: string): Promise<any>;
  updateQuery(newQuery: string, _oldQuery: string): void;
  updateCategories(): Promise<void>;
  componentWillLoad(): Promise<void>;
  handleFilterChange(value: any): void;
  treeSelected(event: CustomEvent): string;
  renderCheckbox(): Array<any>;
  recurseNodes(branch: HubTree, nodes: string[], id: string, value: any): HubTree;
  convertArrayToTree(array: any): HubTree;
  toTitleCase(str: any): any;
  renderChildren(branch: any): any[];
  renderTree(): Array<any>;
  render(): any;
}
export {};
