import { Component, Host, h, Prop, State } from '@stencil/core';
import { UserSession } from '@esri/arcgis-rest-auth';
import { readSessionFromCookie } from '../../../utils/utils';
import * as HubTypes from '../../../utils/hub-types';

import { searchLocations, getLocation } from '../../../utils/arcgis-geoenrichment'

@Component({
  tag: 'hub-geography-picker',
  styleUrl: 'hub-geography-picker.css',
  shadow: true,
})
export class HubGeographyPicker {

  mapElement!: HTMLHubMapElement;
  checkMapSearch!: HTMLCalciteCheckboxElement; 

  @Prop({ mutable: true }) location: string = '';

  // Testing UI
  @Prop() uistepper: boolean = false;

  // For hub-input
  @State() locationSuggestions: Array<any> = [];
  
  // For this UI
  @State() locationList: Array<any> = [];
  
  /**
   * Existing Hub places array of geography from metadata editor
   * Property name `value` because re-used across editors
   */
  @Prop({ mutable: true }) value: HubTypes.IHubGeography[] = [];
  
  /**
   * Displayed on map
   */
  @State() locations: HubTypes.IHubGeography[] = [];

  /**
   * Serialized authentication information.
   */
  @Prop({ mutable: true }) session: string;
  @State() auth: UserSession = null;

  pickerModal: HTMLCalciteModalElement;

  async componentWillLoad() {
    this.session = readSessionFromCookie();
    if(!!this.session) {
      this.auth = UserSession.deserialize(this.session);
    }
    
  }

  async searchInputHandler(event): Promise<string> {
    this.location = event.target.value;

    if(!!this.auth) {
      console.log("Geography-Picker: Searching...", [this.checkMapSearch.checked, this.mapElement.mapExtent]);  

      let extent = this.checkMapSearch.checked ? this.mapElement.mapExtent : null;
      let results = await searchLocations(this.location, extent, this.auth.token);

      console.log("Geography-Picker: SearchLocations Results", results);  
      
      this.locationSuggestions = [];
      let locationList = [];
      results.forEach( s =>  {
        this.locationSuggestions.push(`${s['attributes']['DataLayerID']}: ${s['attributes']['AreaName']}, ${s['attributes']['MajorSubdivisionName']}`);
        locationList.push(s['attributes'])
      })
      this.locationList = locationList;

    } else {
      console.error("Geography-Picker: Sign-in required for geography picker")
    }
    // suggestLocations(this.inputAddress, this.extent).then( suggestions => {      
    //   this.addressSuggestions = Array.from(suggestions.suggestions, s => s['text'])
    // }).catch(error => {
    //   console.error('Geocode error', error)
    // });
    return 'true';
  }

  async selectLocation(locationId:string, layerId:string) {
    let results = await getLocation(locationId, layerId, this.auth.token);  
    this.locations = [ results[0] ];
  }

  showModal() {
    this.pickerModal.active = true;
  }

  renderMap() {
    return (
      <div class="picker-grid">
        <div class="picker-search">
          <calcite-input
            scale="m"
            placeholder="Search for locations..."
            onInput={(event) => this.searchInputHandler(event)}
          ></calcite-input>
          <calcite-checkbox 
            ref={(el: HTMLCalciteCheckboxElement) => this.checkMapSearch = el} 
            checked="true" scale="m">Search within map area</calcite-checkbox>
        </div>
        <div class="picker-list">
        {this.locationList.length > 0 ? <h3>Pick a Boundary</h3> : '' }
          {this.locationList.map((location) => 
            <div class="location-result">
              <calcite-tile-select
                onClick={(_event) => this.selectLocation(location['AreaID'],location['DataLayerID'])}
                description={`${location['MajorSubdivisionName']}, ${location['CountryAbbr']} \n ${location['DataLayerID']}`}
                heading={location['AreaName']}
                name="geography-demo"
                show-input="left"
                input-alignment="end"
                type="radio"
                width="auto"
              >
              </calcite-tile-select>              
            </div>
          )}
        </div>
        <div class="picker-map places-map">
          <hub-map 
            ref ={(el) => this.mapElement = el as HTMLHubMapElement}
            class="places-hub-map"
            center="[-77,38.8]"
            zoom={10}
            drawing={true}
            geometry={this.locations.map((place) => {return place.geometry})}
          ></hub-map>
        </div>
      </div>    
    )
  }
  renderEdit() {
    return (
      <div class="picker-grid">
      <div class="picker-list">
        <calcite-input></calcite-input>
      </div>
      <div class="picker-map places-map">
        <hub-map 
          ref ={(el) => this.mapElement = el as HTMLHubMapElement}
          class="places-hub-map"
          center="[-77,38.8]"
          zoom={10}
          drawing={true}
          geometry={this.locations.map((place) => {return place.geometry})}
        ></hub-map>
      </div>
    </div>  
    )
  }
  renderStepper(content: JSX.Element) {
    return (
      <calcite-stepper 
          numbered
          >
          <calcite-stepper-item
            item-title="Choose Boundary"
            item-subtitle="..."
          >
            {content}
          </calcite-stepper-item>
          <calcite-stepper-item
          item-title="Edit & Confirm"
          item-subtitle="..."
        >
          maybe edit it now!
          {content}
        </calcite-stepper-item>
      </calcite-stepper>   
    )
  }
  renderModal() {
    return (
      <calcite-modal 
          ref={(el: HTMLCalciteModalElement) => this.pickerModal = el} 
          aria-labelledby="modal-title"
          scale="m"
          width="m"
          >
          <h3 slot="header" id="modal-title">Choose a Boundary</h3>
          <div slot="content">
            {this.renderStepper(this.renderMap())}
          </div>
          <calcite-button slot="secondary" width="full" appearance="outline">
            Cancel
          </calcite-button>
          <calcite-button slot="primary" width="full">
            Select Boundary
          </calcite-button> 
        </calcite-modal>  
    )
  }
  render() {
    return (
      <Host>
        <slot></slot>
        { this.uistepper ?  this.renderStepper(this.renderMap()) : this.renderMap() }
      </Host>
    );
  }

}
