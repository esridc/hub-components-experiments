import { Component, State, Host, Prop, h, Element, Event, Watch } from "@stencil/core";
import { loadModules } from "esri-loader";
// TODO: why won't render() with shadow:true
export class HubMap {
  // municipalitiesFeatureLayer: __esri.FeatureLayer;
  constructor() {
    // this.webmap = this.webmap ? this.webmap : "41281c51f9de45edaf1c8ed44bb10e30"
    /**
     * Map zoom level: 1=world ... 20=street
     */
    this.zoom = 4;
    /**
     * Option to show drawing tools
     */
    this.drawing = false;
    this.showFullscreen = false;
    /**
     * Optional Geometry to display
     */
    this.geometry = [];
    /**
     * Current Map Extent
     */
    this.mapExtent = null;
    this.mapCenter = [-107, 38.9];
    /**
     * esri-loader options
     */
    this.esriMapOptions = {
      url: `https://js.arcgis.com/4.14/`
    };
    // loadCss(`${this.esriMapOptions.url}/esri/css/main.css`);
    // this.esriMapOptions['css'] = true
    // this.esriMapOptions['insertCssBefore'] = 'style'
    loadModules(["esri/Map"], this.esriMapOptions).then(([EsriMap]) => {
      this.esriMap = new EsriMap({
        basemap: "streets"
      });
      // this.centerDidChangeHandler(this.center)
      // this.zoomDidChangeHandler(this.zoom)
      // this.municipalitiesFeatureLayer = new FeatureLayer({
      //   url:
      //     "https://services.arcgis.com/Li1xnxaTwJ2lGrgz/arcgis/rest/services/Kommuner/FeatureServer/0"
      // });
      // this.esriMap.add(this.municipalitiesFeatureLayer);
    });
  }
  centerDidChangeHandler(newCenter) {
    console.debug("map: centerDidChangeHandler 1", [newCenter, this.esriMapView]);
    if (newCenter !== undefined && this.esriMapView) {
      this.mapCenter = JSON.parse(newCenter);
      console.debug("map: centerDidChangeHandler 2", [this.mapCenter, this.zoom]);
      this.esriMapView.goTo({ zoom: this.zoom, center: this.mapCenter });
    }
  }
  zoomDidChangeHandler(newZoom) {
    console.debug("map: zoomDidChangeHandler 1", [newZoom, this.esriMapView]);
    if (newZoom !== undefined && this.esriMapView) {
      console.debug("map: zoomDidChangeHandler 2", [this.mapCenter, this.zoom]);
      this.esriMapView.goTo({ zoom: this.zoom, center: this.mapCenter });
    }
  }
  geometryDidChangeHandler(newGeometry) {
    console.debug("Hub-Map: geometryHandler", newGeometry);
    if (newGeometry.length > 0) {
      this.geometry = newGeometry;
      this.addGeometry(this.geometry);
    }
  }
  componentWillLoad() {
    if (this.center) {
      console.debug("HubMap componentWillLoad", this.center);
      this.mapCenter = JSON.parse(this.center);
    }
  }
  componentDidUpdate() {
    // this.zoomToUrlObjectId(600);
  }
  /**
   * The component is loaded and has rendered.
   * Only called once per component lifecycle
   */
  componentDidLoad() {
    this.createEsriMapView();
    if (this.drawing) {
      this.addSketch();
    }
    if (this.geometry.length > 0) {
      this.addGeometry(this.geometry);
    }
    // .then(() => this.zoomToUrlObjectId())
    // .then(() => this.addZoomOnClickAndUrlUpdate());
  }
  /**
   * Creates the mapview used in the application
   */
  createEsriMapView() {
    return loadModules(["esri/WebMap", "esri/views/MapView", "esri/core/watchUtils"], this.esriMapOptions).then(([WebMap, MapView, watchUtils]) => {
      console.debug("Hub Map createEsriMapView", [this.mapCenter, this.zoom]);
      const mapDiv = this.hostElement.querySelector("div");
      let mapOptions = { container: mapDiv };
      // Check how the map is initally set
      if (this.webmap) {
        mapOptions.map = new WebMap({
          portalItem: {
            id: this.webmap
          }
        });
      }
      else {
        mapOptions.map = this.esriMap;
      }
      if (this.mapCenter && this.zoom) {
        mapOptions.center = this.mapCenter;
        mapOptions.zoom = this.zoom;
      }
      this.esriMapView = new MapView(mapOptions);
      let componentRef = this;
      this.esriMapView.on("drag", function (_event) {
        componentRef.mapExtent = componentRef.esriMapView.extent;
        console.debug("Drag Map Extent: ", [componentRef.mapExtent, componentRef.esriMapView, componentRef.esriMapView.extent]);
      });
      watchUtils.whenTrue(this.esriMapView, "stationary", function () {
        // For sending back out to listening components
        componentRef.mapExtent = componentRef.esriMapView.extent;
        console.debug("Stationary Map Extent: ", [componentRef.mapExtent, componentRef.esriMapView, componentRef.esriMapView.extent]);
      });
    });
  }
  /**
   * Zooms to objectid passed in url map/{objectid}
   */
  // zoomToUrlObjectId(duration = 1600) {
  // if (this.match && this.match.params && this.match.params.objectid) {
  //   this.municipalitiesFeatureLayer
  //     .queryFeatures({
  //       where: "objectid = " + this.match.params.objectid,
  //       num: 1,
  //       returnGeometry: true
  //     })
  //     .then(results => {
  //       if (results.features.length) {
  //         const firstResult = results.features[0];
  // this.zoomToAndHighlighFeature(firstResult, duration);
  //       }
  //     });
  // }
  // }
  zoomToAndHighlighFeature(feature, duration = 1600) {
    this.esriMapView.when(() => {
      const symbol = {
        type: "simple-fill",
        color: [51, 51, 204, 0.9],
        style: "solid",
        outline: {
          color: "white",
          width: 1
        }
      };
      const highlightPolygon = feature.clone();
      highlightPolygon.set("symbol", symbol);
      this.esriMapView.graphics.removeAll();
      this.esriMapView.graphics.add(highlightPolygon);
      this.esriMapView.goTo(feature.geometry, {
        duration: duration,
        easing: "ease-in"
      });
    });
  }
  addGeometry(geometry) {
    loadModules(["esri/Graphic",
      "esri/layers/GraphicsLayer"]).then(([Graphic, GraphicsLayer]) => {
      const geometryLayer = new GraphicsLayer();
      this.esriMap.add(geometryLayer);
      geometry.map((polygon) => {
        polygon['type'] = "polygon";
        var simpleFillSymbol = {
          type: "simple-fill",
          color: [227, 139, 79, 0.8],
          outline: {
            color: [255, 255, 255],
            width: 1
          }
        };
        var polygonGraphic = new Graphic({
          geometry: polygon,
          symbol: simpleFillSymbol
        });
        geometryLayer.add(polygonGraphic);
        this.esriMapView.goTo(polygonGraphic);
      });
      // Zoom to first geometry
      // TODO make this zoom to all
      //   , {
      //   duration: 1,
      //   easing: "ease-in"
      // });        
    });
  }
  addSketch() {
    loadModules(["esri/widgets/Sketch",
      "esri/layers/GraphicsLayer"]).then(([Sketch, GraphicsLayer]) => {
      const notesLayer = new GraphicsLayer();
      const sketch = new Sketch({
        layer: notesLayer,
        view: this.esriMapView,
        availableCreateTools: ['rectangle', 'polygon'],
        creationMode: 'single',
        defaultCreateOptions: {
          mode: 'hybrid'
        },
        defaultUpdateOptions: {
          enableRotation: false,
          enableScaling: false,
          multipleSelectionEnabled: false,
          toggleToolOnClick: false
        }
      });
      this.esriMap.add(notesLayer);
      this.esriMapView.ui.add(sketch, "top-right");
      sketch.on("update", _event => {
        // debugger;
      });
      sketch.on('create', event => {
        try {
          if (event.state === 'complete') { // || ['reshape-stop', 'move-stop'].includes(event.toolEventInfo.type)) {
            console.debug("Sketch Complete", event.graphic);
            this.drawingComplete.emit(event.graphic);
          }
        }
        catch (e) {
          debugger;
        }
      });
    });
  }
  // addZoomOnClickAndUrlUpdate() {
  //   this.esriMapView.on("click", evt => {
  //     this.esriMapView
  //       .whenLayerView(this.municipalitiesFeatureLayer)
  //       .then((lyrView: __esri.FeatureLayerView) => {
  //         lyrView.queryFeatures().then(results => {
  //           results.features.some(f => {
  //             const polygon = f.geometry as __esri.Polygon;
  //             if (polygon.contains(evt.mapPoint)) {
  //               // this.history.push(`/map/${f.attributes.ObjectId}`, {});
  //               this.zoomToAndHighlighFeature(f, 500);
  //               return true;
  //             }
  //             return false;
  //           });
  //         });
  //       });
  //   });
  // }
  // TODO: Determine if this should be a component <hub-fullscreen ...>
  requestFullScreen() {
    this.hostElement.requestFullscreen();
  }
  startDrawing() {
    if (!this.drawing) {
      this.drawing = true;
      this.addSketch();
      this.drawingButton.style.display = "none";
    }
  }
  render() {
    return (h(Host, null,
      h("div", { class: "hub-map" }),
      h("calcite-button", { class: "drawing-button", onClick: () => this.startDrawing(), ref: (el) => this.drawingButton = el }, "Add a Note"),
      this.showFullscreen ?
        h("calcite-button", { class: "fullscreen-button", onClick: () => this.requestFullScreen(), ref: (el) => this.fullScreenButton = el }, "Full Screen")
        : ""));
  }
  static get is() { return "hub-map"; }
  static get originalStyleUrls() { return {
    "$": ["hub-map.css"]
  }; }
  static get styleUrls() { return {
    "$": ["hub-map.css"]
  }; }
  static get properties() { return {
    "webmap": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Webmap Item configuration to load"
      },
      "attribute": "webmap",
      "reflect": false
    },
    "center": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Center of the map, \"[longitude, latitude]\""
      },
      "attribute": "center",
      "reflect": true
    },
    "zoom": {
      "type": "number",
      "mutable": true,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Map zoom level: 1=world ... 20=street"
      },
      "attribute": "zoom",
      "reflect": true,
      "defaultValue": "4"
    },
    "drawing": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Option to show drawing tools"
      },
      "attribute": "drawing",
      "reflect": true,
      "defaultValue": "false"
    },
    "showFullscreen": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "show-fullscreen",
      "reflect": false,
      "defaultValue": "false"
    },
    "geometry": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Array<IGeometry>",
        "resolved": "IGeometry[]",
        "references": {
          "Array": {
            "location": "global"
          },
          "IGeometry": {
            "location": "import",
            "path": "@esri/arcgis-rest-common-types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Optional Geometry to display"
      },
      "defaultValue": "[]"
    },
    "mapExtent": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Current Map Extent"
      },
      "attribute": "map-extent",
      "reflect": true,
      "defaultValue": "null"
    }
  }; }
  static get states() { return {
    "mapCenter": {}
  }; }
  static get events() { return [{
      "method": "drawingComplete",
      "name": "drawingComplete",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Sends event when drawing is complete"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "hostElement"; }
  static get watchers() { return [{
      "propName": "center",
      "methodName": "centerDidChangeHandler"
    }, {
      "propName": "zoom",
      "methodName": "zoomDidChangeHandler"
    }, {
      "propName": "geometry",
      "methodName": "geometryDidChangeHandler"
    }]; }
}
// import { Component, Prop, Method, h } from '@stencil/core';
// import { loadCss, loadModules } from "esri-loader";
// // Based on tutorial https://www.joshmorony.com/creating-a-google-maps-web-component-with-stencil/
// @Component({
//   tag: 'hub-radar-map',
//   styleUrl: 'radar-map.css',
//   shadow: false
// })
// export class radarMap {
//   @Prop() apiKey: string;
//   public map: any;
//   public markers: any[] = [];
//   private mapsLoaded: boolean = false;
//   // private networkHandler = null;
//   render() {
//     return [
//       <h3>Map!</h3>,
//       <div class='radar-map' id='radar-map-container'></div>
//     ]
//   }
//   componentDidLoad() {
//     this.init().then(() => {
//       console.log("Map ready.")
//     }, (err) => { 
//       console.log(err);
//     });
//   }
//   init(): Promise<any> {
//     return new Promise((resolve, reject) => {
//       this.loadAPI().then(() => {
//         this.initMap().then(() => {
//           resolve(true);
//         }, (err) => {
//           reject(err);
//         });
//       }, (err) => {
//         reject(err);
//       });
//     });
//   }
//   loadAPI(): Promise<any> {
//     console.log("Loading Maps API");
//     return new Promise((resolve, reject) => {
//       if(!this.mapsLoaded){
//         // TODO: investigate Ionic Capacitor for native apps
//         // Network.getStatus().then((status) => {
//         //   if(status.connected){
//             this.injectAPI().then(() => {
//               resolve(true);
//             }, (err) => {
//               reject(err);
//             });
//           // } else {
//           // TODO: investigate Ionic Capacitor for native apps
//           //   if(this.networkHandler == null){
//           //     this.networkHandler = Network.addListener('networkStatusChange', (status) => {
//           //       if(status.connected){
//           //         this.networkHandler.remove();
//                   this.init().then(() => {
//                     console.log("Maps ready.")
//                   }, (err) => { 
//                     console.log(err);
//                   });
//           //       }
//           //     });
//           //   }
//           //   reject('Not online');
//           // }
//         // }, (err) => {
//         //   console.log(err);
//         // });
//       } else {
//         reject('API already loaded');
//       }
//     });
//   }
//   injectAPI(): Promise<any> {
//     return new Promise((resolve) => {
//       window['mapInit'] = () => {
//         this.mapsLoaded = true;
//         resolve(true);
//       }
//       let script = document.createElement('script');
//       script.id = 'arcgis-js';
//       script.src = 'https://js.arcgis.com/4.14/';
//       document.body.appendChild(script);
//       let style = document.createElement('link');
//       style.id = 'arcgis-js';
//       style.rel = "stylesheet"
//       style.href = 'https://js.arcgis.com/4.14/esri/css/main.css';
//       document.body.appendChild(style);
//     });
//   }
//   initMap(): Promise<any> {
//     return new Promise((resolve, reject) => {
//       // Geolocation.getCurrentPosition().then((position) => {
//       // console.log(position);
//         // let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//         // let mapOptions = {
//         //   center: latLng,
//         //   zoom: 15
//         // };
//         loadModules([
//           "esri/Map",
//           "esri/views/MapView"
//         ]).then(([Map, MapView]) => {
//         var map = new Map({
//           basemap: "topo-vector"
//         });
//         var view = new MapView({
//           container: "radar-map-container",
//           map: map,
//           center: [-118.80500, 34.02700], // longitude, latitude
//           zoom: 13
//         });
//       });
//         // this.map = new google.maps.Map(document.getElementById('radar-map-container'), mapOptions);
//         resolve(true);
//       // }, () => {
//       //   reject('Could not initialise map');
//       // });
//     });
//   }
//   // @Method()
//   // addMarker(lat: number, lng: number): void {
//     // let latLng = new google.maps.LatLng(lat, lng);
//     // let marker = new google.maps.Marker({
//     //   map: this.map,
//     //   animation: google.maps.Animation.DROP,
//     //   position: latLng
//     // });
//     // this.markers.push(marker);
//   // }
//   // @Method()
//   // getCenter(){
//   //   return this.map.getCenter();
//   // }
// }
