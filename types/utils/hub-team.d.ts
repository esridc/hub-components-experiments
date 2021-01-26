import { IGroup } from '@esri/arcgis-rest-portal';
import * as HubTypes from './hub-types';
export declare function searchTeams(query: string): Promise<HubTypes.IHubSearchResults>;
export declare function getTeam(id: string): Promise<HubTypes.IHubTeam>;
export declare function getTeamMembers(id: string): Promise<HubTypes.IHubMember[]>;
export declare function convertGroupToTeam(group: IGroup): HubTypes.IHubTeam;
