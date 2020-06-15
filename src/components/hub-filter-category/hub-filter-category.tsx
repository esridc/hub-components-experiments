import { Component, Host, h, Prop, Event, EventEmitter, Listen, State } from '@stencil/core';
import '@esri/calcite-components';
import { searchGroupContent } from "@esri/arcgis-rest-portal";

interface HubTree {[field: string]: any};

@Component({
  tag: 'hub-filter-category',
  styleUrl: 'hub-filter-category.css',
  shadow: true
})
export class HubFilterCategory {

  /**
   * Filter name to display at top
   */
  @Prop() name: string = "Tree Type";
  
  /**
   * List of categories to show. Can be set or inferred from facet
   */
  @Prop({mutable: true, reflect: true}) categories: Array<string> = [];

  /**
   * Build filter from a facet name
   */
  @Prop() facet: string = null;

  /**
   * For group categories, choose a groupid
   */
  @Prop() group: string = null;

  /**
   * Input query for search box
   */
  @Prop({mutable: true, reflect: true}) query: string = "*";

  /**
   * Type of facet
   */
  @Prop() facettype: "checkbox" | "tree" = "checkbox";

  /**
   * Emitted when a filter is changed
   */
  @Event() filterChanged: EventEmitter;


  /**
   * Actual facet values
   */
  @State() facets:[{value: string, count: number}];
  
  @State() selectedCategories = []

  // TODO: Extract getGroupCategories to general Hub façade
  async getGroupCategories(query: string, facet: string, groupId: string):Promise<any> {
    return await searchGroupContent({
        groupId: groupId, 
        q: query, 
        num: 0,
        params: {
          countFields: facet,
          countSize: 200
        }})
  }

  async componentWillLoad() {
    console.log("Hub Filter Category", this.categories)
    if(this.categories !== undefined && this.categories.length > 0) {
        this.categories.map((category) => {
        this.selectedCategories[category] = { checked: false }
      })
    }

    if(this.facet !== null && this.group !== null) {
      let response = await this.getGroupCategories(this.query, this.facet, this.group);
      this.facets = response.aggregations.counts[0].fieldValues;
      console.log("hub-filter-category facets", this.facets)
      this.facets.map(f => {
        this.categories.push(`${f.value} (${f.count})`)
      })

    }
  }

  handleFilterChange(value) {
    this.selectedCategories[value].checked = !this.selectedCategories[value].checked
    console.debug("filterChanged", [value, this.selectedCategories])
    this.filterChanged.emit(this.selectedCategories)
  }

  @Listen('calciteTreeSelect')
  treeSelected(event: CustomEvent): string {
    this.selectedCategories = event.detail.selected.reduce((accumulator, currentValue) => {
      console.log("CurrentValue", currentValue, accumulator)
      accumulator.push(currentValue.childNodes[0].id)
      return accumulator;
    }, []);
    console.log("TreeSelected reduced", this.selectedCategories);
    this.filterChanged.emit(this.selectedCategories)

    return 'true';
  }

  renderCheckbox():Array<any> {
    let output = []
    this.categories.map((category) => {
      output.push(<label>
        <calcite-checkbox>
          <input name={category} value={category} type="checkbox" onChange={() => this.handleFilterChange(category)} />
        </calcite-checkbox>        
        {category}
      </label>)
    })
    return output;
  }


  // Convert array of nested categories into a real tree
  recurseNodes(branch:HubTree, nodes: string[], id: string, value:any): HubTree {
        
    let current = nodes.shift();
    if(current === undefined) {
        return branch;
    }

    if (!branch[current]) {
        branch[current] = { name: current, children: {} };
    }
    if (nodes.length == 0) {
        branch[current]["count"] = value;
        branch[current]["id"] = id;
    }

    return this.recurseNodes(branch[current]["children"], nodes, id, value);
  }

  // enumerate through array and convert to a nested object
  // array: [{value: "/categories/products/arcgis online", count: 80}, ...]
  // tree: { products: { children: { "arcgis online": { count: 80, children: {} }} }}
  convertArrayToTree(array):HubTree {
    let tree:HubTree = {};
    array.map((entry) => {
      let nodes = entry.value.replace('/categories/','').split('/');
      
      // Skip `/categories` 
      if(nodes[0] !== "") {
          this.recurseNodes(tree, nodes, entry.value, entry.count);
      }
    })
    return tree;
  }
  toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
  }
  renderChildren(branch) {
    let output = []
    for (let key in branch) {
      let value = branch[key];
      let leaf = this.renderChildren(value.children);

      // Only include another tree if there are children
      if(leaf.length !== 0) 
      { 
        leaf = <calcite-tree slot="children"> {leaf} </calcite-tree>;
      }
      output.push(
        <calcite-tree-item>
          <a onClick={() => this.handleFilterChange(value.id)} id={value.id}>{this.toTitleCase(value.name)} ({value.count}) </a>
          {leaf}
        </calcite-tree-item>
      )      
    }
    
    return output;
  }

  renderTree(): Array<any> {
    let output = [];
    let tree = this.convertArrayToTree(this.facets)
    let root = this.renderChildren(tree);

    output.push(<calcite-tree selection-mode="multi-children" theme="light">
      {root}
    </calcite-tree>)
    return output;
  }

  render() {
    let output = (this.facettype == "tree") ? this.renderTree() : this.renderCheckbox();
    
    return (
      <Host>
        <h3>{this.name}</h3>
        <slot></slot>
        {output}
      </Host>
    );
  }

}
