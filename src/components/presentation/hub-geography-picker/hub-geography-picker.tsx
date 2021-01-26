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

  /**
   * Default location to search
   */
  @Prop({ mutable: true }) location: string;

  @Prop({ mutable: true }) inputLocation: string = '';
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
    this.inputLocation = event.target.value;

    if(!!this.auth) {
      let results = await searchLocations(this.inputLocation, this.auth.token);
      console.log("Geography-Picker: SearchLocations Results", results);  
      
      this.locationSuggestions = [];
      let locationList = [];
      results.forEach( s =>  {
        this.locationSuggestions.push(`${s['attributes']['DataLayerID']}: ${s['attributes']['AreaName']}, ${s['attributes']['MajorSubdivisionName']}`);
        locationList.push(s['attributes'])
      })
      this.locationList = locationList;
      console.log("Geography-Picker: locationList", this.locationList);

    } else {
      console.log("Geography-Picker: Signin for geography picker")
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
    console.log("Geography-Picker: Selected: ", results);  
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
        </div>
        <div class="picker-list">
        {this.locationList.length > 0 ? <h3>Pick a Boundary</h3> : '' }
          {this.locationList.map((location) => 
            <div class="location-result">
              <calcite-card dir="ltr" calcite-hydrated="" onClick={(_event) => this.selectLocation(location['AreaID'],location['DataLayerID'])}>
                <h3 slot="title">{location['AreaName']}</h3>
                <span slot="subtitle">
                  {location['MajorSubdivisionName']}, {location['CountryAbbr']} <br/>
                  {location['DataLayerID']}
                </span>
              </calcite-card>
            </div>
          )}
        </div>
        <div class="picker-map places-map">
          <hub-map 
            class="places-hub-map"
            center="[-77,38.8]"
            zoom={10}
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
  renderStepper() {
    return (
      <calcite-stepper 
          numbered
          >
          <calcite-stepper-item
            item-title="Choose Boundary"
            item-subtitle="..."
          >
            {this.renderMap()}
          </calcite-stepper-item>
          <calcite-stepper-item
          item-title="Edit & Confirm"
          item-subtitle="..."
        >
          Edit...
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
            {this.renderStepper()}
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
        { this.renderMap() }
        {/* <calcite-button onClick={(_ev: Event) => this.showModal()}>
          Choose a Boundary
        </calcite-button>     */}
      </Host>
    );
  }

}
