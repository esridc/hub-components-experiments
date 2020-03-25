import { Component, Host, h, State, Listen, Prop } from '@stencil/core';
import * as HubSearchModule from "@esri/hub-search";
import * as Hub from '../../utils/hub-utils';
// import { IHubResults } from "@esri/hub-search"
// import { IHubResults } from '@esri/hub-search/dist/esm/ago/params';

@Component({
  tag: 'hub-search',
  styleUrl: 'hub-search.css',
  shadow: true
})
export class HubSearch {

  /**
   * Hub site URL to scope for search
   */
  @Prop() site: string = "";

  /**
   * Hub site URL to scope for search
   */
  @Prop() sort:  "name" | "modified" = "name";


  /**
   * Hub site URL to scope for search
   */
  @Prop() layout:  "horizontal" | "vertical" = "horizontal";

  @State() queryInput: string;
  @State() suggestions: Array<string>;
  @State() results = [];
  @State() catalog = null;

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
      r.json().then((results) => {
        console.log("Hub Search results", results.data)
        this.results = results.data;
      });
    })
    
    return 'true';
  }  

  componentWillLoad() {
    if(this.site) {
      Hub.getSiteCatalog(this.site).then((catalog) => {
        this.catalog = catalog;
      })
    }
  }

  fetchResults(query: string):Promise<any> {

    // Search query params that ArcGIS Hub expects
    const params:any = {
      q: query,
      sort: this.sort,
      agg: { fields: "tags,collection,owner,source,hasApi,downloadable", size: 10 },
      page: {
        hub: {
          start: 1,
          size: 100
        },
        ago: {
          start: 1,
          size: 100
        }
      }
    }
    if(this.catalog) {
      console.debug("Hub Search groups", this.catalog.groups);
      params.groupIds = this.catalog.groups.join(",");
    }

    // const token = 'xxxYYY' // AGO token
    // const portal = 'https://www.arcgis.com/sharing/rest'
    // const headers = { authorization: token, portal }
    const serializedParams = HubSearchModule.serialize(params)
    // Query hub v3's new search endpoint
    return fetch(`https://hub.arcgis.com/api/v3/search?${serializedParams}`, { })

    // return HubSearchModule.agoSearch({q: query});
  }
  
  render() {
    let output = []
    this.results.map(result => {
      output.push(<hub-content-card layout={this.layout} content={result['id']}></hub-content-card>)
    })

    return (
      <Host>     
        <slot></slot>
        <hub-suggest-input 
          placeholder="Search for content"
          suggestions={this.suggestions}
        ></hub-suggest-input>           
        {output}
      </Host>
    );
  }

}
