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
    this.query = this.queryInput;
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

  async updateGallery(query: string, customParams?:Object) {
    let searchParams:any = {
      q: query,
      limit: this.limit,
      sort: this.sort
    };
    // TODO: make this more robuts
    if(customParams !== undefined) {
      searchParams.customParams = customParams
    }

    if(this.catalog) {
      searchParams.groups = this.catalog.groups;
    } else {
      searchParams.groups = this.groups.split(",");
    } 

    console.log("Search: searchParams ", [searchParams, customParams])
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
        this.updateGallery(this.query);

      })
    }
  }
  componentDidLoad() {
    console.log("componentDidLoad: @Prop groups", this.groups)
    if(!this.site) {
      this.updateGallery(this.query);
    }
  }


  // TODO: this is overly specific to group category filters
  @Listen('filterChanged')
  filterChanged(event: CustomEvent) {
    console.log("Gallery filterChanged", event);
    let customParams = { 
      group: {
        id: this.groups.split(',')[0],
        categories: event.detail
      }
    }
    
    this.updateGallery(this.query, customParams);
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
        <div class="filters">
          <hub-filter-category
            name="Category"
            facettype="tree"
            facet="groupcategories"
            group={this.groups.split(",")[0]}
          ></hub-filter-category>

          {/* <hub-filter-category
            name="Content Type"
            categories={["Maps", "Data", "Apps", "Files"]}
          ></hub-filter-category> */}
        </div>         
        <div class="search-results gallery-lg ">
        {output}
        </div>
        </div>
      </Host>
    );
  }

}
