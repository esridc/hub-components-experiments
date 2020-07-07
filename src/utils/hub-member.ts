import { IAuthenticationManager, } from "@esri/arcgis-rest-request"
import { UserSession } from '@esri/arcgis-rest-auth';

import { IUser, searchUsers, getUser, searchGroups, updateUser } from "@esri/arcgis-rest-portal";
import * as HubTypes from './hub-types'
import { convertGroupToTeam } from './hub-team'

import { getPortal } from "@esri/arcgis-rest-portal";
import { getEventQueryFromType, searchEvents } from "@esri/hub-events";
import { IQueryFeaturesOptions } from "@esri/arcgis-rest-feature-layer";
import { getUserResource, addUserResource } from "./arcgis-user"
import { search } from './hub-search'
import { searchAnnotations, IResourceObject, getAnnotationServiceUrl } from "@esri/hub-annotations";

const portalUrl = 'https://www.arcgis.com';


// TODO: prototype class interfaces
// // let member = new HubMember({username: 'aturner'});
// // let org = member.organization 
// // 
// export class HubMember implements HubTypes.IHubMember {
//   org: HubTypes.IHubOrg;
//   username: string;
//   hubType = HubTypes.HubType.member;
//   id: string;
//   name: string;

//   constructor(username: string) {
//     let member = getMember(username);
//     Object.assign(this, member);
//   }
//   teams?: HubTypes.IHubTeam[];
//   events?: HubTypes.IHubEvent[];
//   interests?: string[];
//   fullName?: string;
//   availableCredits?: number;
//   assignedCredits?: number;
//   firstName?: string;
//   lastName?: string;
//   preferredView?: any;
//   description?: string;
//   email?: string;
//   idpUsername?: string;
//   favGroupId?: string;
//   lastLogin?: number;
//   mfaEnabled?: boolean;
//   access?: string;
//   storageUsage?: number;
//   storageQuota?: number;
//   orgId?: string;
//   role?: "org_admin" | "org_publisher" | "org_user";
//   privileges?: string[];
//   roleId?: string;
//   level?: string;
//   disabled?: boolean;
//   units?: string;
//   tags?: string[];
//   culture?: string;
//   region?: string;
//   thumbnail?: string;
//   created?: number;
//   modified?: number;
//   groups?: import("@esri/arcgis-rest-portal").IGroup[];
//   provider?: "arcgis" | "enterprise" | "facebook" | "google";
//   summary?: string;
//   publisher: HubTypes.IHubOwner;
//   url?: string;
//   permissions: { visibility: HubTypes.VisibilityOptions; control?: HubTypes.ControlOptions; groups?: import("@esri/arcgis-rest-portal").IGroup[]; };
//   createdDate: Date;
//   createdDateSource: string;
//   updatedDate: Date;
//   updatedDateSource: string;
//   thumbnailUrl?: string;
//   boundary?: HubTypes.IHubGeography;
//   metadata?: any;

//   static search(_query:string, _authentication: IAuthenticationManager) {
//     searchMembers(_query, _authentication);
//     return [];
//   }

//   get organization() {
//     if(!!this.org) { 
//       this.org = getMemberOrg( this.username )
//     }
//     return false;
//   }

//   get places() {
//     if(!!this.metadata.places) {
//       this.metadata.places = await getMemberPlaces(this.username, this.authentication)
//     }
//     return this.metadata.places;
//   }
// }

// e.g. https://www.arcgis.com/sharing/rest/portals/BBpPn9wZu2D6eTNY?f=json&culture=en
export function getMemberOrg(_username: string):HubTypes.IHubOrg {
  return { 
    id: "BBpPn9wZu2D6eTNY", 
    name: "Agency Online Organization", 
    hubType: HubTypes.HubType.organization,
    createdDate: new Date(),
    createdDateSource: "portal",
    updatedDate: new Date(),
    updatedDateSource: "portal",
    permissions: {  visibility:  HubTypes.VisibilityOptions.public },
    publisher: {name: "cityx_admin"}
  };
}

export async function searchMembers(query: string, authentication: IAuthenticationManager): Promise<HubTypes.IHubSearchResults> {
  let users = await searchUsers({q: query, authentication});

  let members = users.results.reduce((userResults, user) => {
      userResults.push(convertUserToMember(user))
      return userResults;
  }, []);

  return { results: members };
}
export async function updateMember(id:string, attributes:HubTypes.IHubMember, authentication?: UserSession): Promise<HubTypes.IHubMember> {
    // Portal
    updateUser({
      user: {
        username: id,
        ...attributes
      },
      authentication
    })  
    return getMember(id, authentication);
}

export async function getMember(id:string, authentication?: IAuthenticationManager): Promise<HubTypes.IHubMember> {
  let user = await getUser({username: id, authentication: authentication as UserSession});
  return convertUserToMember(user, authentication);
}

export function getAnonymousMember(): HubTypes.IHubMember {
  return convertUserToMember({
      username: "",
      fullName: "Anonymous",
      thumbnail: ""
    })
}

export async function getMemberEvents(authentication: IAuthenticationManager): Promise<HubTypes.IHubSearchResults> {
  // Process:
  // 1. Find Portal eventGroups=Portal.search where(type=event && members.include?(user))
  // 2. Query Events Service where(groupId.include?(eventGroups)) && other filters (e.g. upcoming/nearby)
  // 3. Convert Group+Features into IHubEvent
  
  let groups = await searchGroups({ 
    q: "tags:Hub Event Group", 
    params: { searchUserAccess: "groupMember", num: 100 }, 
    authentication 
  });
  
  let eventGroups = groups.results.reduce((teamResults, group) => {
    teamResults.push(`groupId = '${group.id}'`) // TODO: build this array elsewhere
    return teamResults;
  }, []);

  let portal = await getPortal(null, { authentication: authentication });
  
  // @esri/hub-events directly calls Feature Service instead of using the Hub API proxy.
  // let eventServiceUrl = await getEventFeatureServiceUrl( portal.id );
  let eventServiceUrl = `https://hub.arcgis.com/api/v3/events/${portal.id}/Hub%20Events/FeatureServer/0/`

  // TODO: add support for all vs. upcoming events
  const searchOptions: IQueryFeaturesOptions = getEventQueryFromType("upcoming", {
    url: eventServiceUrl,
    authentication
  });
  searchOptions.where += ` AND (${eventGroups.join(' OR ')})`

  let eventFeatures = await searchEvents( searchOptions );
  console.log("hub-member: getMemberEvents", [searchOptions, eventFeatures]);

  let events = eventFeatures.data.reduce((eventResults, event) => {
    eventResults.push({
      id: event.id,
      name: event.attributes.title,
      summary: event.attributes.venue,
      description: event.attributes.description,
      hubtype: HubTypes.HubType.event
    })
    return eventResults;
  }, [])

  // EventGroups are all events the user has registered, and events are matches for upcoming.
  return { results: events, meta: {total: eventGroups.length, count: events.length, start: 1 } };
}


export async function setMemberPlaces(username:string, places: HubTypes.IHubGeography[], authentication?: IAuthenticationManager): Promise<boolean> {
  let resp = await addUserResource({username, name: "places.json", content: JSON.stringify({places}), authentication})
  console.log("hub-member: getMemberPlaces", places)
  return resp.success;
}

export async function getMemberPlaces(username:string, authentication?: IAuthenticationManager): Promise<HubTypes.IHubGeography[]> {
  let places;
  try {
    places = await getUserResource(username, "places.json", {authentication});
  } catch {
    places = {places: []}
  }
  console.log("hub-member: getMemberPlaces", places)
  return places.places as HubTypes.IHubGeography[];
}

export async function getMemberTeams(authentication: IAuthenticationManager): Promise<HubTypes.IHubSearchResults> {
  let groups = await searchGroups({ q: "tags:initiativeCollaborationGroup", 
                                    params: { searchUserAccess: "groupMember", num: 100 }, 
                                    authentication 
                                });

  let teams = groups.results.reduce((teamResults, group) => {
      teamResults.push(convertGroupToTeam(group))
      return teamResults;
  }, []);

  return { results: teams, meta: {total: groups.total, count: groups.num, start: groups.start } };
}

export async function searchMemberComments(username, authentication: IAuthenticationManager): Promise<IResourceObject[]> { 
  let query = ["1=1"];

  query.push(`Creator LIKE '${username}'`)

  let portal = await getPortal(null, { authentication: authentication });
  let annotationsUrl = await getAnnotationServiceUrl( portal.id )
  annotationsUrl += '/0';
   
  let annotations;
  try {
    console.log("hub-discussion: Search", [search, query, {url: annotationsUrl, params: {where: query.join(" AND ")}}])
    annotations = await searchAnnotations({url: annotationsUrl, where: query.join(" AND ")});  
  } catch {
    annotations = {data: []}
  }
  return annotations.data;
}

export async function searchMemberContent(username, authentication: IAuthenticationManager): Promise<HubTypes.IHubSearchResults> {
  let content = await search({ owner: username,
                              authentication 
                            });
  return content
}

function usersInterests(user: IUser): string[] {
  let interests = user.tags?.reduce((agg, tag) => {
    let m = tag.match(/^interest:(.*)/);
    console.log("usersInterests", m)
    if(m) {
      agg.push(m[1]);
    }
    return agg;
  }, []);

  return interests;
}
export function convertUserToMember(user: IUser, _authentication?: IAuthenticationManager): HubTypes.IHubMember {
  let member:HubTypes.IHubMember = Object.assign(user, {
    id: user.username,
    name: user.fullName || user.username,
    publisher: { name: user.username, username: user.username  },
    hubtype: HubTypes.HubType.member,
    summary: user.description || "No profile summary.",
    description: user.description || "No profile description.",
    hubType: HubTypes.HubType.member,
    url: `${portalUrl}/home/user.html?user=${user.username}`,
    permissions: {
      visibility: HubTypes.VisibilityOptions.public
    },

    // Explicit data information since this is a common confusion + bug report
    createdDate: new Date(user.created),
    createdDateSource: 'user.created',
    updatedDate: new Date(user.modified),
    updatedDateSource: 'user.modified',
    
    thumbnailUrl: "",
    culture: user.culture,
    region: user.region,
    metadata: {
      interests: usersInterests(user)
    }    
  })
  if(user.thumbnail !== undefined && user.thumbnail !== null) {
    member.thumbnailUrl = `${portalUrl}/sharing/rest/community/users/${user.username}/info/${user.thumbnail}`
  }

  
  return member;  
}