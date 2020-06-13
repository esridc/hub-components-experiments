import { Component, Host, h, State, Listen, Prop } from '@stencil/core';
import * as Hub from '../../utils/hub-search';
import * as Site from '../../utils/hub-site';
// import * as HubAPI from '../../utils/hub-api';
// import { authenticateUser } from '../../utils/utils';
import { UserSession } from '@esri/arcgis-rest-auth';

@Component({
  tag: 'hub-gallery',
  styleUrl: 'hub-gallery.css',
  shadow: true
})
export class HubGallery {

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
  @Prop() query: string = "";

  /**
   * Default sort order
   */
  @Prop() sort:"name" | "modified" = "name";

  /**
   * Maximum number of results to return
   */
  @Prop() limit: number = 12;

  /**
   * Hub site URL to scope for search
   */
  @Prop() layout:  "horizontal" | "vertical" = "horizontal";

  /**
   * Use the Hub API (true) or the Portal API (false)
   */
  @Prop() hubapi: boolean = true;

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

  async updateGallery(query: string) {
    let searchParams:any = {
      q: query,
      limit: this.limit,
      sort: this.sort
    };

    if(this.catalog) {
      searchParams.groups = this.catalog.groups;
    } else {
      searchParams.groups = this.groups.split(",");
    } 

    let results = await Hub.search(searchParams, {
      isPortal: !this.hubapi, 
      hubApiUrl: "https://hub.arcgis.com", 
      authentication: new UserSession({})
    })
    this.results = results;
  }
  
  
  componentWillLoad() {
    if(this.site) {
      Site.getSiteCatalog(this.site).then((catalog) => {
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
          class="gallery-card"
          contenttype={`${result.type} by ${result.owner}`}
          url={result.contentUrl}
          image={result.thumbnailUrl} 
          name={this.truncateString(result.title, 55)} 
          description={this.truncateString(result.snippet, 90)}
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
        <div class="search-results gallery-lg ">
        {output}
        </div>
        </div>
      </Host>
    );
  }

}
