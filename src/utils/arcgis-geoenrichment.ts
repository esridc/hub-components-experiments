
// import {
//   request,
//   IRequestOptions
// } from "@esri/arcgis-rest-request";

const geoenrichmentUrl = 'https://geoenrich.arcgis.com/arcgis/rest/services/World/geoenrichmentserver';
const queryPath = '/StandardGeographyQuery/execute?featureLimit=10&sourceCountry=US&f=pjson';

export async function searchLocations(query:string, token: string): Promise<Array<any>> {

  // TODO - add options for types: &geographylayers=["US.Counties, US.Places, cities"]
  let json = await fetch(`${geoenrichmentUrl}${queryPath}&useFuzzySearch=true&geographylayers=["US.States", "US.Counties", "US.Places", "cities"]&geographyQuery=${query}&token=${token}`, { });
  let results = await json.json();

  return results['results'][0]['value']['features'];
}

export async function getLocation(locationId:string, layerId:string, token: string): Promise<any> {
  let json = await fetch(`${geoenrichmentUrl}${queryPath}&generalizationLevel=6&geographylayers=["${layerId}"]&geographyids=["${locationId}"]&returnGeometry=true&token=${token}`, { });
  let results = await json.json();
  
  return results['results'][0]['value']['features'];
}