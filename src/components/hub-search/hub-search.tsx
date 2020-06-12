import { Component, Host, h, State, Listen, Prop } from '@stencil/core';
import * as Hub from '../../utils/hub-utils';
// import * as HubAPI from '../../utils/hub-api';
// import { authenticateUser } from '../../utils/utils';
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
   * Groups to limit search
   */
  @Prop() groups: string;

  /**
   * Choose to show or hide search
   */
  @Prop() showsearch: boolean = true;
  
  /**
   * Search Button text
   */
  @Prop() searchbutton: string = "Start Search";
  
  /**
   * Search placeholder text
   */
  @Prop() searchplaceholder: string = "Search for content";

  /**
   * Text to show in the button
   */
  @Prop() buttontext: string = "Explore"

  /**
   * Default Query
   */
  @Prop() query:string = "";

  /**
   * Default sort order
   */
  @Prop() sort:  "name" | "modified" = "name";

  /**
   * Hub site URL to scope for search
   */
  @Prop() layout:  "horizontal" | "vertical" = "horizontal";

  @Prop() portal = "https://www.arcgis.com";

  @Prop() clientid: string = "WXC842NRBVB6NZ2r";

  @State() queryInput: string;
  @State() suggestions: Array<string> = [];
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
    this.updateGallery(this.queryInput)
    return 'true';
  }  

  updateGallery(query: string): void {
    let searchParams:any = {q: query};
    if(this.catalog) {
      console.debug("Hub Search groups", this.catalog.groups);
      searchParams.groups = this.catalog.groups;
    } else {
      searchParams.groups = this.groups.split(",");
    }    
    Hub.search(searchParams, {isPortal: true, hubApiUrl: "", authentication: new UserSession({})}).then((results) => {
        console.log("Hub Search results", results)
        this.results = results.results;
      })
  }
  
  
  componentWillLoad() {
    if(this.site) {
      Hub.getSiteCatalog(this.site).then((catalog) => {
        this.catalog = catalog;
        this.updateGallery('*');

      })
    }
  }
  componentDidLoad() {
    console.log("componentDidLoad: @Prop groups", this.groups)
    this.updateGallery('*');
  }


  truncateString(input:string, length: number):string {
    let ending = "...";
    if(input === undefined || input === null) {
      return "";
    } else if(input.length > length) {
      return input.substring(0, length-ending.length) + ending;
    } else {
      return input;
    }
  }
  render() {
    let output = []
    this.results.map(result => {
      // console.log("Search result", result.attributes)
      output.push(
        
        <hub-card 
          class="hub-content-card"
          contenttype={result.type}
          url={result.url}
          image={result.thumbnail} 
          name={this.truncateString(result.title, 60)} 
          description={this.truncateString(result.snippet, 90)}
          item={result.id}
          buttonText={this.buttontext}
          onClick={() => ""}
          // content={this.content}
        >
        </hub-card> 
        )
    })

    return (
      <Host>     
        <slot></slot>
        <div class="search-grid">
        {this.showsearch ? 
          <hub-suggest-input 
            placeholder={this.searchplaceholder}
            submit={this.searchbutton}
            suggestions={this.suggestions}
            query={this.query}
          ></hub-suggest-input>
          : ""}
        {/* <div class="filters">
          <hub-filter-category
            name="Content Type"
            categories={["Sites", "Datasets", "Notebooks", "Maps"]}
          ></hub-filter-category>
        </div>           */}
        <div class="search-results">
        {output}
        </div>
        </div>
      </Host>
    );
  }

}
