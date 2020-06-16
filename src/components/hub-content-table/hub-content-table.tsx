import { Component, Host, h, State, Prop } from '@stencil/core';
import * as HubSearch from '../../utils/hub-search';
import * as HubSite from '../../utils/hub-site';
import { UserSession } from '@esri/arcgis-rest-auth';

@Component({
  tag: 'hub-content-table',
  styleUrl: 'hub-content-table.css',
  shadow: true
})
export class HubContentTable {

  /**
   * Hub site URL to scope for search
   */
  @Prop() site: string = "opendata.victoria.ca";

  /**
   * Default query for the search
   */
  @Prop() query: string = "*";

  /**
   * Total number of results to return
   */
  @Prop() limit:number = 1000;

  /**
   * Hub site URL to scope for search
   */
  @Prop() sort:  "name" | "modified" | "-name" | "-modified" = "name";

  /**
   * Use the Hub API (true) or the Portal API (false)
   */
  @Prop() hubapi: boolean = true;


  @State() results = [];
  @State() catalog = null;

  async componentWillLoad() {
    if(this.site) {
      this.catalog = await HubSite.getSiteCatalog(this.site)
      let results = await this.searchContent( this.query, { groups: this.catalog.groups } )
      this.results = results.results;
    }
  }

  async searchContent(query: string, params:any):Promise<any> {

    let searchParams:any = {
      q: query,
      limit: this.limit,
      sort: this.sort,
      ...params
    };

    console.log("hub-content-table: searchParams", searchParams)
    let results = await HubSearch.search(searchParams, {
      isPortal: !this.hubapi, 
      hubApiUrl: "https://hub.arcgis.com", 
      authentication: new UserSession({})
    })
    return results;
  }

  renderItemLinks(item) {
    switch(item.type) {

      case "Feature Service": 
        return(
          <ul class="result-formats">
          <li><a href={`https://${this.site}/datasets/${item.id}.zip`}>Shapefile</a></li>
          <li><a href={`https://${this.site}/datasets/${item.id}.kml`}>KML</a></li>
          <li><a href={`https://${this.site}/datasets/${item.id}.csv`}>CSV</a></li>
          <li><a href={`https://${this.site}/datasets/${item.id}.geojson`}>GeoJSON</a></li>
          </ul>
        )
      
      case "CSV":
        return( <a href={`https://${this.site}/datasets/${item.id}_0.csv?outSR=4326`}>Download</a> )
      
      case "Shapefile": // Hosted file
      case "PDF": // Hosted file
      case "Microsoft Excel":
        return( <a href={`https://www.arcgis.com/sharing/rest/content/items/${item.id}/data`}>Download</a> )

      default:
        return(<a href={item.contentUrl}>Link</a>)

    }
  }
  render() {
    let output = []
    if(this.results.length == 0) {
      output.push(<calcite-loader text="Fetching data..." is-active></calcite-loader>)
    }
    this.results.map(item => {
      output.push(
      <div class="result">
        <span class="result-name">
          <a href={`https://${this.site}/datasets/${item.id}`}>{item.name}</a>
          <em>{item.summary}</em>
        </span>
        <span class="result-links">{this.renderItemLinks(item)}</span>
        <span class="result-type">{item.type}</span>
          
      </div>)
    })

    return (
      <Host>     
        <slot></slot>
        <div class="result result-header">
          <span class="result-name">Title</span>
          <span class="result-links">Download</span>
          <span class="result-type">Type</span>
        </div>        
        <div class="search-results">
          {output}
        </div>
      </Host>
    );
  }

}
