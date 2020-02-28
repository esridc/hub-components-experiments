import { Component, Host, h, State, Listen } from '@stencil/core';
import { agoSearch } from '@esri/hub-search';

@Component({
  tag: 'hub-search',
  styleUrl: 'hub-search.css',
  shadow: true
})
export class HubSearch {

  @State() queryInput: string;
  @State() suggestions: Array<string>;
  @State() results = [];

  @Listen("queryInput")
  queryInputHandler(event: CustomEvent): string {
    this.queryInput = event.detail;

    // this.fetchResults(this.queryInput)
    return 'true';
  }
  @Listen("querySelect")
  querySelectHandler(event: CustomEvent): string {
    this.queryInput = event.detail;
    this.results = [];
    this.fetchResults(this.queryInput).then(r => {
      console.log("Search", r)
      this.results = r.data;
    })
    
    return 'true';
  }  

  componentWillLoad() {

  }
  fetchResults(query: string) {
    return agoSearch({q: query});
  }
  
  render() {
    let output = []
    output.push(
      <hub-suggest-input 
        placeholder="Search for content"
        suggestions={this.suggestions}
      ></hub-suggest-input>
    )
    this.results.map(result => {
      output.push(<hub-content-card layout="horizontal" content={result['id']}></hub-content-card>)
    })

    return (
      <Host>
        <slot></slot>
        {output}
      </Host>
    );
  }

}
