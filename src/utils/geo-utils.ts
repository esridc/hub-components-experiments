import { queryFeatures, IQueryFeaturesOptions} from '@esri/arcgis-rest-feature-layer';
import { getItem, getItemData } from "@esri/arcgis-rest-portal";
import { geocode, suggest, IGeocodeOptions, ISuggestResponse } from '@esri/arcgis-rest-geocoding';

export function timestampToDate(timestamp) {
    var date = new Date(timestamp); 
    return date.getFullYear();
}
export function suggestLocations(address: any, extent?: [Number[], Number[]]): Promise<ISuggestResponse> {
    return new Promise((resolve, reject) => {
        let geocodeOptions:IGeocodeOptions = {
            address: address,
        }
        if(extent !== undefined && extent !== null) {
            const searchExtent = [...extent[0], ...extent[1]].join(',');
            geocodeOptions = Object.assign(geocodeOptions, {"params": {searchExtent}});
        }

        suggest(address, geocodeOptions).then((suggestions) => {
            console.debug("suggestLocations", suggestions);
            resolve(suggestions);
        }).catch(reject)
    })
}

export function getLocation(address: any, extent?: [Number[], Number[]]) {
    return new Promise((resolve, reject) => {
        console.debug("getLocation extent", extent)

        let geocodeOptions:IGeocodeOptions = {
            address: address,
        }
        if(extent !== undefined && extent !== null) {
            const searchExtent = [...extent[0], ...extent[1]].join(',');
            geocodeOptions = Object.assign(geocodeOptions, {"params": {searchExtent}});
        }
        console.log("getLocation geocodeOptions", geocodeOptions)
        
        geocode(geocodeOptions)
        .then((response) => {
            if(response.candidates.length == 0) {
                throw new Error (
                    'No locations found at this address.'
                )
            }
            resolve(response.candidates[0].location); // => { x: -77.036533, y: 38.898719, spatialReference: ... }
        })
        .catch(reject)
    })

}

export function getMap(id: string) {
    return new Promise((resolve, reject) => {
        Promise.all([getItem(id), getItemData(id)])
        .then(resolve)
        .catch(reject)
    });
}

export function queryMap(mapItemData: any, coordinates?: any) {
    return new Promise((resolve, reject) => {
        // Get Features from each map layer
        let promises = mapItemData['operationalLayers'].slice().reverse().map(layer => {
            return getFeatures(layer, coordinates)
        });

        Promise.all(promises).then(results => {
            // console.log("getMap Promise all", results)
            let features = []
            results.map(r => {
                
                // There may not have been any features from this layer
                if(r['features'].length > 0) {
                    r['layer'] = r['title']
                    r['title'] = r['features'][0].title
                    r['description'] = `<em>${r['features'][0].description}</em>`
                }
                features.push(r)
            })
            resolve(features)
        }).catch(reject)
    })
            
}
function getFeatures(layer: any, location) {
    // console.log("getFeatures", layer, location)
    let options:IQueryFeaturesOptions = {
        "url": layer.url,
        "outFields": "*",
        "geometryType": "esriGeometryPoint",
        "inSR": "4326"
    }

    if(layer.title.indexOf('Nearby') !== -1) {
        let match = layer.title.match(/Nearby (\d+)/);
        let distance;
        if(match !== null ) {
            distance = parseInt(match[1]);
        }
        options["distance"] = distance;
        options["units"] = 'esriSRUnit_Meter';
    }

    // if (location.length !== undefined) {
        options["geometry"] = location;
    // }

    return new Promise((resolve, reject) => {
        queryFeatures(options)
        .then(results => {
            let collection = {
                "title": layer.title,
                "features": interpretResults(layer, results)
            }
            resolve(collection);
        }).catch(reject)
        
    });          
    
}

// Methods to convert features to interpolated display
function getValue(data, key, fields) {
    if(data.hasOwnProperty(key)) {
        return coerceAttributeValue(data,key,fields);
    } else {
        return "";
    }
}
function coerceAttributeValue(data, key, fields) {
    switch (fields[key].type) {
        case "esriFieldTypeDate":
            return new Date(data[key]);
        default:
            return data[key];
    }
}    
function interpretResults(layer, results) {
    let fields = {};
    // console.log('results from t-f', results);
    results.fields.forEach((field) => {
        fields[field.name] = field;
    });

    let featureInfos = [];
    // let layerTitle = layer.title;
    let featureTitle = layer.popupInfo.title;
    let featureDescription = layer.popupInfo.description;

    results.features.forEach((feature) => {
        let data = feature.attributes;
        // Template replace `{POP00001}` -> feature['POP00001']
        var featureTitleInterpolated = featureTitle.replace(/\{(\w*)\}/g, (_m,key) => {
            return getValue(data, key, fields);
        });
        if(featureDescription !== null) {
            var featureDescriptionInterpolated = featureDescription.replace(/\{(\w*)\}/g,(_m,key) =>{
                return getValue(data, key, fields);
            });
        }
        let featureInfo = {
            "title": featureTitleInterpolated, 
            "description": featureDescriptionInterpolated ? featureDescriptionInterpolated : ""
        };
        featureInfos.push(featureInfo);
    });
    // console.log("featureInfos", featureInfos)

    return featureInfos;
}
