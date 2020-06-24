import { IItem, IGroup, IUser } from "@esri/arcgis-rest-types"

export enum ContentType {dataset = 1000, document, map , app , site, initiative, template}
export enum CommunityType {member = 1, team = 2}
export type CommunityTypes = typeof CommunityType
export enum VisibilityOptions {private, org, public}
export enum ControlOptions {view, edit, admin}
export enum EventType { event }

// TODO: figure out how this can work like { ...ContentType, ...CommunityType, ...EventType}
export enum HubType {member=1, team=2, event=100, dataset=1000, document, map , app , site, initiative, template}

export type IHubSearchResults = {
  results: IHubResource[]
  meta?: {
    total: number, 
    count: number,
    start: number
  }
  // TODO: add search metadata
} 

// Based on the [Hub Content UI Inventory](https://app.lucidchart.com/invitations/accept/dab82a25-2ed9-4f63-8075-3db8873087e3)
// Attempting a simple _Hungarian Notation_ for attributes suffix: `*Date`, `*Id`, `*Number`. Plural (e.g. `tags`) is an array.

export interface IHubResource {
  id: string
  name: string // Generic term for the primary label (title, fullname, username, etc.)
  description?: string
  summary?: string // snippet or other summary
  culture?: string
  publisher: IHubOwner // TODO: better name? item.owner with more user metadata
  url?: string
  
  // Derived metadata
  hubType: HubType
  permissions: { // overrides item.access with more attributes. could flatten.
    visibility: VisibilityOptions // item.access
    control?:  ControlOptions // item.itemControl
    groups?: Array<IGroup> // item.sharing.groups via content/users/:username/items/:id
  }

  // Explicit data information since this is a common confusion + bug report
  createdDate: Date // formal metadata || new Date(item.created)
  createdDateSource: string // description of what was used for this attribute
  updatedDate: Date // formal metadata || new Date(item.modified)
  updatedDateSource: string // description of what was used for this attribute
  thumbnailUrl: string // Full URL. item.thumbnail with host + path 
  
  boundary?: IHubGeography // [Future] Inline, or boolean when stored at known location /resources/boundary.json
  
  // Additional metadata from custom/formal elements
  metadata?: {
      // Unique or additional formal metadata that will be displayed in sidebar
  }
}
export interface IContent extends IHubResource,IItem {
  
  // Inherited metadata (noting relevant subset of all item attributes)
  // id: string // item.id
  // title: string // item.title
  // snippet: string // item.snippet
  // description: string // item.description
  // categories?: Array<string> // item.categories
  // tags: Array<string> // item.tags  
  // culture: string // written locale e.g. en, es, cn
  // url?: string
  // size: number

  license: IHubLicense // [Future] item.licenseInfo 
  publishedDate: Date // formal metadata || new Date(item.created)
  publishedDateSource: string // description of what was used for this attribute

  // Hub configuration metadata
  actionLinks?: IActionLink[] // item.properties.links
  actionConfigs?: Object // item.properties.actions - enable/disable standard actions like `createWebmap` or `createStorymap`

  metrics?: { // Set visibility for telemetry metrics. Nested object future-proofing, but could flatten.
      visibility: 'private' | 'org' | 'updateGroups' | 'public'   // item.properties.metrics
  }

  contentUrl: string // Link to the raw content. item.url in most (but not all) item types
  contentDisplay?: 'thumbnail' | 'map' // [Future] View configuration options such as cartography, charts, table, etc.
  // source: IHubCommunity // [Future] each of these has common metadata like `title`, `thumbnail` , and `link`
  
  // Content specific values. Combination of relevant item.data, layer info, enrichments, configuration settings
  // could use values instead - which is common within item.data.values
  attributes?: {
      // Dataset, e.g.
      fields?: [IField]
      recordNumber?: number
      // Map, e.g.
      layers?: []
      basemap?: string
      // Document
      format?: 'link' | 'PDF' | 'MS Word' | 'MS Excel' | 'Text'
      // Initiative
      stage?: string
      followersNumber?: number
      coreTeamId?: string 
      contentTeamId?: string
      supportingTeamsNumber?: number
  }
}

// Common interface to people networks: Teams, Orgs, Members
export interface IHubCommunity extends IHubResource {

}
export interface IHubOrg extends IHubCommunity { }

export interface IHubTeam extends IGroup, IHubCommunity { }

// Minimal Subset for item.owner for now
export interface IHubOwner {
  name: string, // Readable name
  username?: string // optional username. 
}
// Simple user info - more could be added/cached
export interface IHubMember extends IUser, IHubCommunity {
  username?: string // user.username
  org?: IHubOrg // Which AGO organization does this user belong to?
  teams?: IHubTeam[]
}

// title, description, and optional link to license item with more info
// TODO: make IHubLicense a Resource (actually Content Type)?
export interface IHubLicense {
  id?: string // Licenses may be Items, so provide reference for links
  name: string
  description?: string
  link?: string
  thumbnailUrl?: string
  capabilities?: {
    reuse: boolean
    commercial: boolean
    derivatives: boolean
    attribution: boolean
    osm: boolean
  }
}

export interface IField {
  name:string
  type:string
  statistics:Array<any>
}

export interface IHubGeography {
  title?:string
  coverage?: 'global' | 'regional' | 'local' // enrichment
  geometry?: string // serialized JSON, or should this refer to /resources/boundary.json
  source?: string // feature layer + feature URL. e.g. "https://server.cityx.gov/FeatureService/0/53"
  item?: string // item ID used for setting geometry
}

// Optional configured app links that replace "Create StoryMap" with links to specific apps/sites
// per https://esriarlington.tpondemand.com/entity/96316-content-viewer-sees-associated-app-links
export interface IActionLink {
  title: string
  url: string
}


// Chat types
export interface IHubMessage {
  text: string
  action?: string
  type?: string
  user?: string
  route?: string
}
export interface IHubChat {
  messages?: Array<IHubMessage>
  actions?: Array<IHubMessage>
}
