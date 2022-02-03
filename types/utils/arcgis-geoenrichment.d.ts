/// <reference types="arcgis-js-api" />
import { Extent } from "esri/geometry";
export declare function searchLocations(query: string, extent: Extent, token: string): Promise<Array<any>>;
export declare function getLocation(locationId: string, layerId: string, token: string): Promise<any>;
