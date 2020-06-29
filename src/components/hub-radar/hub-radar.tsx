import { Component, Host, State, h, Prop, Listen} from '@stencil/core';
import { getLocation, getMap, queryMap } from '../../utils/geo-utils'

@Component({
  tag: 'hub-radar',
  styleUrl: 'hub-radar.css',
  shadow: false
})
export class HubRadar {
  textInput: HTMLInputElement;

  @Prop() mapItem: any; //PortalItem
  @Prop() mapItemData: any; //PortalItem
  @Prop() mapCenter: string;
  @Prop() mapZoom: number;
  @Prop() messages: any;

  @Prop({ mutable: true }) address: string;
  @Prop() webmap: string;
  @Prop() showmap: boolean = false;

  @State() isLoading: boolean = false;

  @Listen('eventAddressUpdated')
  handleAddressUpdated(event: CustomEvent) {
    this.updateRadar(event.detail.address, event.detail.coordinates);
  }
  
  updateRadar(address:string, coordinates: any) {
    this.address = address;

    this.mapCenter = `[${coordinates['x']}, ${coordinates['y']}]`;
    this.mapZoom = 16;

    this.isLoading = true;
    queryMap(this.mapItemData, coordinates).then(results => {
      this.messages = results;
      this.isLoading = false;
    });    
  }

  componentWillLoad() {

  }

  componentDidLoad() {
    // Load the map after the component renders so the map is available
    getMap(this.webmap).then(([mapItem, mapItemData]) => {
      this.mapItem = mapItem;
      this.mapItemData = mapItemData;

      // The component embedded an address, so load the radar.
      if(this.address) {
        getLocation(this.address, mapItem.extent).then(coordinates => {
          this.updateRadar(this.address, coordinates);
        }).catch(error => {
          console.log('Geocode error', error)
        });
      }      
    });    
  }

  render() {
    let output = []
    // Get Address
    let inputProps = {
      address: this.address,
      extent: this.mapItem ? this.mapItem.extent : null,
    };
    output.push(<hub-input {...inputProps}></hub-input>)

    if(this.showmap) {
      output.push(<div class="radar-map"><hub-map center={this.mapCenter} zoom={this.mapZoom} webmap={this.webmap}></hub-map></div>)
    }
    if(this.isLoading) {
      output.push(<calcite-loader text="Scanning radar..." is-active></calcite-loader>)
    } else {  
      // Get Results
      if(this.messages !== undefined && this.messages.length > 0) {
        output.push( <slot name="before-results" /> )
        this.messages.forEach(m => {
          output.push(
            <hub-card layout="horizontal" 
              contenttype={m.layer}
              name={m.title}
              description={m.description ? m.description : "<em>None</em>"}
              ></hub-card>
          )
        })
        // output.push( <slot name="after-results" /> )        
      }
    }

    return ( 
      <Host>
        {output}
        <slot name="after-results" />
      </Host>
    )
  }
}
