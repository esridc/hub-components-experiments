import { Component, Host, h, State, Listen, Prop } from '@stencil/core';
import * as HubSearch from '../../utils/hub-search';
import * as HubSite from '../../utils/hub-site';
// import * as HubAPI from '../../utils/hub-api';
// import { authenticateUser } from '../../utils/utils';
import { UserSession } from '@esri/arcgis-rest-auth';
import * as HubTeams from '../../utils/hub-team';
import * as HubMembers from '../../utils/hub-member';
import * as HubTypes from '../../utils/hub-types';
import { readSessionFromCookie } from '../../utils/utils';

@Component({
  tag: 'hub-gallery',
  styleUrl: 'hub-gallery.css',
  shadow: true
})
export class HubGallery {

  /**
   * Hub site URL to scope for search
   */
  @Prop() site: string = null;

  /**
   * Groups to limit search
   */
  @Prop() groups: string = null;

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
   * Which Resources to search
   */
  @Prop() hubtype: "content" | "members" | "teams" = "teams"

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
  @State() session:string = null;
  
  @Listen("queryInput")
  queryInputHandler(event: CustomEvent): string {
    console.log("hub-gallery: queryInputHandler", event)
    this.queryInput = event.detail;

    // this.fetchResults(this.queryInput)
    return 'true';
  }
  @Listen("querySelect")
  querySelectHandler(event: CustomEvent): string {
    console.log("hub-gallery: querySelectHandler", event)
    
    this.queryInput = event.detail;
    this.results = [];
    this.updateGallery(this.queryInput)
    return 'true';
  }  

  
  componentWillLoad() {
    this.session = readSessionFromCookie();
    console.log("hub-gallery load: session", this.session)
    this.queryInput = this.query;
    if(this.site) {
      HubSite.getSiteCatalog(this.site).then((catalog) => {
        this.catalog = catalog;
      })
    } else {
      // Don't wait to update
      this.updateGallery(this.queryInput);
    } 
      
    
  }

  async updateGallery(query: string, customParams?:Object) {
    let auth = (this.session !== null) ? UserSession.deserialize(this.session) : null;

    console.log("updateGallery: hubtype", [query, this.hubtype, auth])
    switch(this.hubtype) {
      case 'teams': 
        let teams = await HubTeams.searchTeams(query);
        this.results = teams.results;
        break;
      case 'members': 
        let members = await HubMembers.searchMembers(query, auth);
        this.results = members.results;
        break;

      default: 
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
        } else if(this.groups !== undefined && this.groups.length > 0) {
          searchParams.groups = this.groups.split(",");
        } 

        console.log("Search: searchParams ", [searchParams, customParams])
        let results = await HubSearch.search(searchParams, {
          isPortal: !this.hubapi, 
          hubApiUrl: "https://hub.arcgis.com", 
          authentication: auth
        })
        this.results = results.results;
        // end case(default)
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
    
    this.updateGallery(this.queryInput, customParams);
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
          contenttype={`${HubTypes.HubType[result.hubtype]} by ${result.publisher.name}`}
          url={result.url}
          image={result.thumbnailUrl} 
          name={this.truncateString(result.title, 55)} 
          description={this.truncateString(result.summary, 90)}
          buttonText={this.buttontext}
          onClick={() => ""}
          // content={this.content}
        >
        </hub-card> 
        )
    })
    let filters = [];
    console.log("hub-gallery: groups: ", this.groups)
    if(this.groups !== undefined && this.groups !== null && this.groups.length > 0) {
      filters.push(
        <hub-filter-category
          name="Category"
          facettype="tree"
          facet="groupcategories"
          group={this.groups.split(",")[0]}
        ></hub-filter-category>
      )
    }

    return (
      <Host>     
        <slot></slot>
        <div class="search-grid">
        {this.showsearch ? 
          <hub-suggest-input 
            placeholder={this.searchplaceholder}
            submit={this.searchbutton}
            suggestions={this.suggestions}
            query={this.queryInput}
          ></hub-suggest-input>
          : ""}
        <div class="filters"> 
          {filters}
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
