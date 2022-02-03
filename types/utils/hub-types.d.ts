import { IItem, IGroup, IUser } from "@esri/arcgis-rest-types";
export declare enum ContentType {
  dataset = 1000,
  document = 1001,
  map = 1002,
  app = 1003,
  site = 1004,
  initiative = 1005,
  template = 1006
}
export declare enum CommunityType {
  member = 1,
  team = 2
}
export declare type CommunityTypes = typeof CommunityType;
export declare enum VisibilityOptions {
  private = 0,
  org = 1,
  public = 2
}
export declare enum ControlOptions {
  view = 0,
  edit = 1,
  admin = 2
}
export declare enum EventType {
  event = 0
}
export declare enum HubType {
  member = 1,
  team = 2,
  event = 100,
  dataset = 1000,
  document = 1001,
  map = 1002,
  app = 1003,
  site = 1004,
  initiative = 1005,
  template = 1006,
  organization = 1007
}
export declare type IHubSearchResults = {
  results: IHubResource[];
  meta?: {
    total: number;
    count: number;
    start: number;
  };
};
export interface IHubResource {
  id: string;
  name: string;
  description?: string;
  summary?: string;
  culture?: string;
  publisher: IHubOwner;
  url?: string;
  hubType: HubType;
  permissions: {
    visibility: VisibilityOptions;
    control?: ControlOptions;
    groups?: Array<IGroup>;
  };
  createdDate: Date;
  createdDateSource: string;
  updatedDate: Date;
  updatedDateSource: string;
  thumbnailUrl?: string;
  boundary?: IHubGeography;
  metadata?: any;
}
export interface IHubContent extends IHubResource, IItem {
  license: IHubLicense;
  publishedDate: Date;
  publishedDateSource: string;
  actionLinks?: IActionLink[];
  actionConfigs?: Object;
  metrics?: {
    visibility: 'private' | 'org' | 'updateGroups' | 'public';
  };
  contentUrl: string;
  contentDisplay?: 'thumbnail' | 'map';
  attributes?: {
    fields?: [IField];
    recordNumber?: number;
    layers?: [];
    basemap?: string;
    format?: 'link' | 'PDF' | 'MS Word' | 'MS Excel' | 'Text';
    stage?: string;
    followersNumber?: number;
    coreTeamId?: string;
    contentTeamId?: string;
    supportingTeamsNumber?: number;
  };
}
export interface IHubCommunity extends IHubResource {
}
export interface IHubOrg extends IHubCommunity {
}
export interface IHubTeam extends IGroup, IHubCommunity {
}
export interface IHubEvent extends IHubCommunity {
  attendees?: IHubMember[];
}
export interface IHubOwner {
  name: string;
  username?: string;
}
export interface IHubMember extends IUser, IHubCommunity {
  username?: string;
  org?: IHubOrg;
  teams?: IHubTeam[];
  events?: IHubEvent[];
  interests?: string[];
  places?: IHubGeography[];
}
export interface IHubLicense {
  id?: string;
  name: string;
  description?: string;
  link?: string;
  thumbnailUrl?: string;
  capabilities?: {
    reuse: boolean;
    commercial: boolean;
    derivatives: boolean;
    attribution: boolean;
    osm: boolean;
  };
}
export interface IField {
  name: string;
  type: string;
  statistics: Array<any>;
}
export interface IActionLink {
  title: string;
  url: string;
}
import { IGeometry } from "@esri/arcgis-rest-types";
export interface IHubAnnotation {
  id?: string;
  author?: string;
  target?: string;
  source?: string;
  status?: string;
  content?: string;
  geometry?: IGeometry;
  createdDate?: Date;
  updatedDate?: Date;
}
export interface IHubGeography {
  name?: string;
  coverage?: 'global' | 'regional' | 'local';
  geometry?: IGeometry;
  source?: string;
  item?: string;
}
export interface IHubMessage {
  text: string;
  action?: string;
  type?: string;
  user?: string;
  route?: string;
}
export interface IHubChat {
  messages?: Array<IHubMessage>;
  actions?: Array<IHubMessage>;
}
