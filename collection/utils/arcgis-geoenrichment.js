// import {
//   request,
//   IRequestOptions
// } from "@esri/arcgis-rest-request";
// Dev server
const geoenrichmentUrl = 'https://geoenrich.arcgis.com/arcgis/rest/services/World/geoenrichmentserver';
const queryPath = '/StandardGeographyQuery/execute?f=pjson&';
export async function searchLocations(query, extent, token) {
  // TODO - add options for types: &geographylayers=["US.Counties, US.Places, cities"]
  const layers = ["US.States", "US.Counties", "US.Places", "cities"];
  const params = {
    featureLimit: 10,
    sourceCountry: 'US',
    useFuzzySearch: true,
    geographylayers: layers,
    geographyQuery: query,
    token
  };
  if (!!extent) {
    params["spatialfilter"] = JSON.stringify({
      "AnalysisExtent": { extent }
    });
  }
  const queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
  let json = await fetch([geoenrichmentUrl, queryPath, queryString].join(''), {});
  let results = await json.json();
  return results['results'][0]['value']['features'];
}
export async function getLocation(locationId, layerId, token) {
  let params = {
    featureLimit: 10,
    sourceCountry: 'US',
    generalizationLevel: 6,
    geographylayers: [layerId],
    geographyids: [locationId],
    returnGeometry: true,
    token
  };
  const queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
  const json = await fetch([geoenrichmentUrl, queryPath, queryString].join(''), {});
  const results = await json.json();
  return results['results'][0]['value']['features'];
}
