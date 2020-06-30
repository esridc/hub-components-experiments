import { Component, Host, h, State, Listen, Prop } from '@stencil/core';
import * as HubSearch from '../../utils/hub-search';
import * as HubSite from '../../utils/hub-site';
import { UserSession } from '@esri/arcgis-rest-auth';
import * as HubTeams from '../../utils/hub-team';
import * as HubMembers from '../../utils/hub-member';
import * as HubTypes from '../../utils/hub-types';
import { readSessionFromCookie, truncateString } from '../../utils/utils';

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
  @Prop() hubtype: "content" | "members" | "teams" = "content"

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
  @Prop() hubapi: boolean = false;

  @Prop() portal = "https://www.arcgis.com";

  @Prop() clientid: string = "WXC842NRBVB6NZ2r";
  @Prop({ mutable:true, reflect:true }) session:string = null;

  @State() queryInput: string;
  @State() suggestions: Array<string> = [];
  @State() results = [];
  @State() catalog = null;
  
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
    let auth = (this.session !== undefined && this.session !== null) ? UserSession.deserialize(this.session) : null;

    console.log("hub-gallery updateGallery: [query, hubtype, auth]", [query, this.hubtype, auth])
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

        console.log("hub-gallery updateGallery: [searchParams, customParams] ", [searchParams, customParams])
        let results = await HubSearch.search(searchParams, {
          isPortal: !this.hubapi, 
          hubApiUrl: "https://hub.arcgis.com", 
          authentication: auth
        })

        console.log("hub-gallery updateGallery: [results] ", [results])
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

  render() {
    let output = []
    this.results.map(result => {

      let thumbnail = (result.thumbnailUrl !== undefined && result.thumbnailUrl !== null) 
                        ? `${result.thumbnailUrl}?token=${UserSession.deserialize(this.session).token}` 
                        : '';
      console.log("hub-gallery: render result", [result, thumbnail])

      output.push(
        
        <hub-card 
          class="gallery-card"
          contenttype={`${HubTypes.HubType[result.hubType]} by ${result.publisher.name}`}
          url={result.url || ""}
          image={thumbnail} 
          name={truncateString(result.title, 55)} 
          description={truncateString(result.summary, 90)}
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
            query={this.queryInput}
          ></hub-suggest-input>
          : ""}
        <div class="filters">
          <slot name="filters" > </slot>
        </div>
        <div class="search-results gallery-lg ">
        {output}
        </div>
        </div>
      </Host>
    );
  }

}
