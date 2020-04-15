import { Component, Host, h, State, Listen, Prop } from '@stencil/core';
import * as HubSearchModule from "@esri/hub-search";
import * as Hub from '../../utils/hub-utils';
import * as HubAPI from '../../utils/hub-api';
import { authenticateUser } from '../../utils/utils';
import { UserSession } from '@esri/arcgis-rest-auth';

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

  @Prop() portal = "https://www.arcgis.com";

  @Prop() clientid: string = "WXC842NRBVB6NZ2r";

  @State() queryInput: string;
  @State() suggestions: Array<string>;
  @State() results = [];
  @State() catalog = null;
  @State() session:string;

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
      agg: { fields: "tags,collection,owner,source,hasApi,downloadable", size: 10 }
    }
    params.page = {key: btoa(JSON.stringify({
      hub: {
        start: 1,
        size: 100
      },
      ago: {
        start: 1,
        size: 100
      }
    }))}
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
  
  onCopy(itemId:string) {
    console.log("onCopy", this.portal)
    return authenticateUser(this.clientid, this.portal).then(session => {
      this.session = session;
      return this.copyItem(itemId);
    })
  }  

  copyItem(itemId:string) {
    let hub = HubAPI.HubService.create('hub');
    hub.get(itemId).then((item) => {
      console.log("onCopy starting", item)
      hub.create(
        item, 
        UserSession.deserialize(this.session)
      ).then((response) => {
          console.log("onCopy Done", response)
      })  
    });
  } 

  render() {
    let output = []
    this.results.map(result => {
      console.log("Search result", result.attributes)
      output.push(
        <hub-card 
          contenttype={result.attributes.type}
          url={result.attributes.url}
          image={result.attributes.thumbnail} 
          name={result.attributes.name} 
          description={result.attributes.description}
          item={result.attributes.id}
          buttonText="Copy"
          onClick={() => this.onCopy(result.attributes.id)}
          // content={this.content}
        >
        </hub-card> 
        // <hub-content-card 
        //   layout={this.layout} 
        //   content={result['id']}
        //   buttonText="Copy"
          
        // ></hub-content-card>
        )
    })

    return (
      <Host>     
        <slot></slot>
        <div class="search-grid">
        <hub-suggest-input 
          placeholder="Search for content"
          suggestions={this.suggestions}
        ></hub-suggest-input>
        <div class="filters">
          <hub-filter-category
            name="Content Type"
            categories={["Sites", "Datasets", "Notebooks", "Maps"]}
          ></hub-filter-category>
        </div>          
        <div class="search-results">
        {output}
        </div>
        </div>
      </Host>
    );
  }

}
