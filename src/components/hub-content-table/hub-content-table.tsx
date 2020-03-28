import { Component, Host, h, State, Prop } from '@stencil/core';
import * as HubSearchModule from "@esri/hub-search";
import * as Hub from '../../utils/hub-utils';

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

  @State() results = [];
  @State() catalog = null;

  componentWillLoad() {
    if(this.site) {
      Hub.getSiteCatalog(this.site).then((catalog) => {
        this.catalog = catalog;

        this.fetchResults( '*' ).then(r => {
          r.json().then((results) => {
            this.results = results.data;
          });
        })        
      })
    }
  }

  fetchResults(query: string):Promise<any> {

    // Search query params that ArcGIS Hub expects
    const params:any = {
      q: query,
      sort: this.sort
    }
    // params.agg = { fields: "tags,collection,owner,source,hasApi,downloadable", size: 10 };

    params.page = {key: btoa(JSON.stringify({
      hub: {
        start: 1,
        size: this.limit
      },
      ago: {
        start: 1,
        size: this.limit
      }
    }))}
    if(this.catalog) {
      params.groupIds = this.catalog.groups.join(",");
    }

    const serializedParams = HubSearchModule.serialize(params)
    return fetch(`https://hub.arcgis.com/api/v3/search?${serializedParams}`, { })
  }
  renderItemLinks(item) {
    switch(item.attributes.content) {

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
        return(<a href={item.attributes.url}>Link</a>)

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
          <a href={`https://${this.site}/datasets/${item.id}`}>{item.attributes.name}</a>
          <em>{item.attributes.searchDescription}</em>
        </span>
        <span class="result-links">{this.renderItemLinks(item)}</span>
        <span class="result-type">{item.attributes.content}</span>
          
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
