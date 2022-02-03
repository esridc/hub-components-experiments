import { ISuggestResponse } from '@esri/arcgis-rest-geocoding';
export declare function timestampToDate(timestamp: any): number;
export declare function suggestLocations(address: any, extent?: [Number[], Number[]]): Promise<ISuggestResponse>;
export declare function getLocation(address: any, extent?: [Number[], Number[]]): Promise<unknown>;
export declare function getMap(id: string): Promise<unknown>;
export declare function queryMap(mapItemData: any, coordinates?: any): Promise<unknown>;
