import { Component, Host, h, Prop, Event, EventEmitter, State } from '@stencil/core';
import '@esri/calcite-components';

@Component({
  tag: 'hub-filter-category',
  styleUrl: 'hub-filter-category.css',
  shadow: true
})
export class HubFilterCategory {

  @Prop() name: string = "Tree Type";
  @Prop({mutable: true, reflect: true}) categories: Array<string> = ['Ash', 'Birch', 'Maple'];
  @Event() filterChanged: EventEmitter;

  @State() selectedCategories = []

  componentWillLoad() {
    console.log("Hub Filter Category", this.categories)
    this.categories.map((category) => {
      this.selectedCategories[category] = { checked: false }
    })
  }
  handleFilterChange(value) {
    this.selectedCategories[value].checked = !this.selectedCategories[value].checked
    console.debug("filterChanged", [value, this.selectedCategories])
    this.filterChanged.emit(this.selectedCategories)
  }

  render() {
    let output = []

    this.categories.map((category) => {

      output.push(<label>
        <calcite-checkbox>
          <input name={category} value={category} type="checkbox" onChange={() => this.handleFilterChange(category)} />
        </calcite-checkbox>        
        {category}
      </label>)
    })

    return (
      <Host>
        <h3>{this.name}</h3>
        <slot></slot>
        {output}
      </Host>
    );
  }

}
