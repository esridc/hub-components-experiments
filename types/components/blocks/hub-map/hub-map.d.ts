/// <reference types="arcgis-js-api" />
import { EventEmitter } from "../../../stencil-public-runtime";
import { IGeometry } from "@esri/arcgis-rest-common-types";
export declare class HubMap {
  hostElement: HTMLElement;
  fullScreenButton: HTMLElement;
  drawingButton: HTMLElement;
  /**
   * Webmap Item configuration to load
   */
  webmap: string;
  /**
   * Center of the map, "[longitude, latitude]"
   */
  center: string;
  /**
   * Map zoom level: 1=world ... 20=street
   */
  zoom: number;
  /**
   * Option to show drawing tools
   */
  drawing: boolean;
  showFullscreen: boolean;
  /**
   * Optional Geometry to display
   */
  geometry: Array<IGeometry>;
  /**
   * Current Map Extent
   */
  mapExtent: any;
  /**
   * Sends event when drawing is complete
   */
  drawingComplete: EventEmitter;
  mapCenter: [number, number];
  centerDidChangeHandler(newCenter: string): void;
  zoomDidChangeHandler(newZoom: number): void;
  geometryDidChangeHandler(newGeometry: Array<IGeometry>): void;
  componentWillLoad(): void;
  /**
   * esri-loader options
   */
  protected esriMapOptions: {
    url: string;
  };
  /**
   * Properties to hold the map, mapview and featurelayer
   */
  protected esriMap: __esri.Map;
  protected esriMapView: __esri.MapView;
  constructor();
  componentDidUpdate(): void;
  /**
   * The component is loaded and has rendered.
   * Only called once per component lifecycle
   */
  componentDidLoad(): void;
  /**
   * Creates the mapview used in the application
   */
  createEsriMapView(): Promise<void>;
  /**
   * Zooms to objectid passed in url map/{objectid}
   */
  zoomToAndHighlighFeature(feature: __esri.Graphic, duration?: number): void;
  addGeometry(geometry: Array<IGeometry>): void;
  addSketch(): void;
  requestFullScreen(): void;
  startDrawing(): void;
  render(): any;
}
