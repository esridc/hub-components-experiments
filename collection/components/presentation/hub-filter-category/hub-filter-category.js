import { Component, Host, h, Prop, Event, Listen, State, Watch } from '@stencil/core';
import '@esri/calcite-components';
import { searchGroupContent } from "@esri/arcgis-rest-portal";
;
export class HubFilterCategory {
  constructor() {
    /**
     * Filter name to display at top
     */
    this.name = "Tree Type";
    /**
     * List of categories to show. Can be set or inferred from facet
     */
    this.categories = [];
    /**
     * Build filter from a facet name
     */
    this.facet = null;
    /**
     * For group categories, choose a groupid
     */
    this.group = null;
    /**
     * Input query for search box
     */
    this.query = "*";
    /**
     * Type of facet
     */
    this.facettype = "checkbox";
    this.selectedCategories = [];
  }
  // TODO: Extract getGroupCategories to general Hub façade
  async getGroupCategories(query, facet, groupId) {
    return await searchGroupContent({
      groupId: groupId,
      q: query,
      num: 0,
      params: {
        countFields: facet,
        countSize: 200
      }
    });
  }
  updateQuery(newQuery, _oldQuery) {
    console.log("hub-filter-category: updateQuery", newQuery);
    this.query = newQuery;
    this.updateCategories();
  }
  async updateCategories() {
    if (this.facet !== null && this.group !== null) {
      let response = await this.getGroupCategories(this.query, this.facet, this.group);
      this.facets = response.aggregations.counts[0].fieldValues;
      console.log("hub-filter-category facets", this.facets);
      this.facets.map(f => {
        this.categories.push(`${f.value} (${f.count})`);
      });
    }
  }
  async componentWillLoad() {
    console.log("Hub Filter Category", this.categories);
    if (this.categories !== undefined && this.categories.length > 0) {
      this.categories.map((category) => {
        this.selectedCategories[category] = { checked: false };
      });
    }
    this.updateCategories();
  }
  handleFilterChange(value) {
    this.selectedCategories[value].checked = !this.selectedCategories[value].checked;
    console.debug("filterChanged", [value, this.selectedCategories]);
    this.filterChanged.emit(this.selectedCategories);
  }
  treeSelected(event) {
    this.selectedCategories = event.detail.selected.reduce((accumulator, currentValue) => {
      console.log("CurrentValue", currentValue, accumulator);
      accumulator.push(currentValue.childNodes[0].id);
      return accumulator;
    }, []);
    console.log("TreeSelected reduced", this.selectedCategories);
    this.filterChanged.emit(this.selectedCategories);
    return 'true';
  }
  renderCheckbox() {
    let output = [];
    this.categories.map((category) => {
      output.push(h("label", null,
        h("calcite-checkbox", null,
          h("input", { name: category, value: category, type: "checkbox", onChange: () => this.handleFilterChange(category) })),
        category));
    });
    return output;
  }
  // Convert array of nested categories into a real tree
  recurseNodes(branch, nodes, id, value) {
    let current = nodes.shift();
    if (current === undefined) {
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
  convertArrayToTree(array) {
    let tree = {};
    array.map((entry) => {
      let nodes = entry.value.replace('/categories/', '').split('/');
      // Skip `/categories` 
      if (nodes[0] !== "") {
        this.recurseNodes(tree, nodes, entry.value, entry.count);
      }
    });
    return tree;
  }
  toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  renderChildren(branch) {
    let output = [];
    for (let key in branch) {
      let value = branch[key];
      let leaf = this.renderChildren(value.children);
      // Only include another tree if there are children
      if (leaf.length !== 0) {
        leaf = h("calcite-tree", { slot: "children" },
          " ",
          leaf,
          " ");
      }
      output.push(h("calcite-tree-item", null,
        h("a", { onClick: () => this.handleFilterChange(value.id), id: value.id },
          this.toTitleCase(value.name),
          " (",
          value.count,
          ") "),
        leaf));
    }
    return output;
  }
  renderTree() {
    let output = [];
    let tree = this.convertArrayToTree(this.facets);
    let root = this.renderChildren(tree);
    output.push(h("calcite-tree", { "selection-mode": "multi-children" }, root));
    return output;
  }
  render() {
    let output = (this.facettype == "tree") ? this.renderTree() : this.renderCheckbox();
    return (h(Host, null,
      h("h3", null, this.name),
      h("slot", null),
      output));
  }
  static get is() { return "hub-filter-category"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["hub-filter-category.css"]
  }; }
  static get styleUrls() { return {
    "$": ["hub-filter-category.css"]
  }; }
  static get properties() { return {
    "name": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Filter name to display at top"
      },
      "attribute": "name",
      "reflect": false,
      "defaultValue": "\"Tree Type\""
    },
    "categories": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "Array<string>",
        "resolved": "string[]",
        "references": {
          "Array": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "List of categories to show. Can be set or inferred from facet"
      },
      "defaultValue": "[]"
    },
    "facet": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Build filter from a facet name"
      },
      "attribute": "facet",
      "reflect": false,
      "defaultValue": "null"
    },
    "group": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "For group categories, choose a groupid"
      },
      "attribute": "group",
      "reflect": false,
      "defaultValue": "null"
    },
    "query": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Input query for search box"
      },
      "attribute": "query",
      "reflect": true,
      "defaultValue": "\"*\""
    },
    "facettype": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"checkbox\" | \"tree\"",
        "resolved": "\"checkbox\" | \"tree\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Type of facet"
      },
      "attribute": "facettype",
      "reflect": false,
      "defaultValue": "\"checkbox\""
    }
  }; }
  static get states() { return {
    "facets": {},
    "selectedCategories": {}
  }; }
  static get events() { return [{
      "method": "filterChanged",
      "name": "filterChanged",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when a filter is changed"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get watchers() { return [{
      "propName": "query",
      "methodName": "updateQuery"
    }]; }
  static get listeners() { return [{
      "name": "calciteTreeSelect",
      "method": "treeSelected",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
