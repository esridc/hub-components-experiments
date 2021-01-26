import { UserSession } from '@esri/arcgis-rest-auth';
import * as HubTypes from '../../../utils/hub-types';
export declare class HubGeographyPicker {
    /**
     * Default location to search
     */
    location: string;
    inputLocation: string;
    locationSuggestions: Array<any>;
    locationList: Array<any>;
    /**
     * Existing Hub places array of geography from metadata editor
     * Property name `value` because re-used across editors
     */
    value: HubTypes.IHubGeography[];
    /**
     * Displayed on map
     */
    locations: HubTypes.IHubGeography[];
    /**
     * Serialized authentication information.
     */
    session: string;
    auth: UserSession;
    pickerModal: HTMLCalciteModalElement;
    componentWillLoad(): Promise<void>;
    searchInputHandler(event: any): Promise<string>;
    selectLocation(locationId: string, layerId: string): Promise<void>;
    showModal(): void;
    renderMap(): any;
    renderEdit(): any;
    renderStepper(): any;
    renderModal(): any;
    render(): any;
}
