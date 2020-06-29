import { IAuthenticationManager, } from "@esri/arcgis-rest-request"
import { UserSession } from '@esri/arcgis-rest-auth';

import { IUser, searchUsers, getUser, searchGroups } from "@esri/arcgis-rest-portal";
import * as HubTypes from './hub-types'
import { convertGroupToTeam } from './hub-team'

import { getPortal } from "@esri/arcgis-rest-portal";
import { getEventQueryFromType, searchEvents } from "@esri/hub-events";
import { IQueryFeaturesOptions } from "@esri/arcgis-rest-feature-layer";

const portalUrl = 'https://www.arcgis.com';

// let member = new HubMember({username: 'aturner'});
// let org = member.organization 
// 
// export class HubMember {
//   private org: string; 

//   static search(_query:string, _authentication: IAuthenticationManager) {
//     searchMembers(_query, _authentication);
//     return [];
//   }

//   get organization() {
//     if(this.org !== undefined ) { 
//       this.org = getMemberOrg(username: this.username)
//     }
//     return false;
//   }
// }

export function getMemberOrg(_username: string) {
  return "DCDev";
}

export async function searchMembers(query: string, authentication: IAuthenticationManager): Promise<HubTypes.IHubSearchResults> {
  let users = await searchUsers({q: query, authentication});

  let members = users.results.reduce((userResults, user) => {
      userResults.push(convertUserToMember(user))
      return userResults;
  }, []);

  return { results: members };
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

import {
  request,
  IRequestOptions
} from "@esri/arcgis-rest-request";
/**
 * Get a list of the resources associated with an user
 * 
 * TODO: move this to arcgis-rest-js
 *
 * @param id - Username
 * @param requestOptions - Options for the request
 * @returns A Promise to get some item resources.
 */
export async function getUserResources(
  id: string,
  requestOptions?: IRequestOptions
): Promise<any> {
  const url = `${portalUrl}/sharing/rest/community/users/${id}/resources`;

  // Mix in num:1000 with any user supplied params
  // Key thing - we don't want to mutate the passed in requestOptions
  // as that may be used in other (subsequent) calls in the course
  // of a long promise chains
  const options: IRequestOptions = {
    ...requestOptions
  };
  options.params = { num: 1000, ...options.params };

  return request(url, options);
}

/**
 * Get a specific resources associated with an user
 * 
 * TODO: move this to arcgis-rest-js
 *
 * @param id - Username
 * @param resource - Name of the resource to fetch
 * @param requestOptions - Options for the request
 * @returns A Promise to get some item resources.
 */
export async function getUserResource(
  id: string,
  resource: string,
  requestOptions?: IRequestOptions
): Promise<any> {
  const url = `${portalUrl}/sharing/rest/community/users/${id}/resources/${resource}`;

  // Mix in num:1000 with any user supplied params
  // Key thing - we don't want to mutate the passed in requestOptions
  // as that may be used in other (subsequent) calls in the course
  // of a long promise chains
  const options: IRequestOptions = {
    ...requestOptions
  };
  options.params = { num: 1000, ...options.params };

  return request(url, options);
}

export async function getMemberPlaces(id:string, authentication?: IAuthenticationManager): Promise<HubTypes.IHubGeography[]> {
  let places = await getUserResource(id, "places.json", {authentication});
  console.log("hub-member: getMemberPlaces", places)
  return places;
}

export async function getMemberTeams(authentication: IAuthenticationManager): Promise<HubTypes.IHubSearchResults> {
  let groups = await searchGroups({ q: "tags:initiativeCollaborationGroup", 
                                    params: { searchUserAccess: "groupMember" }, 
                                    authentication 
                                });

  let teams = groups.results.reduce((teamResults, group) => {
      teamResults.push(convertGroupToTeam(group))
      return teamResults;
  }, []);

  return { results: teams, meta: {total: groups.total, count: groups.num, start: groups.start } };
}

function usersInterests(user: IUser): string[] {
  let interests = user.tags.reduce((agg, tag) => {
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