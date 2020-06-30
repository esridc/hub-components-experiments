import { IAuthenticationManager, } from "@esri/arcgis-rest-request"
import { UserSession } from '@esri/arcgis-rest-auth';

import { IUser, searchUsers, getUser, searchGroups } from "@esri/arcgis-rest-portal";
import * as HubTypes from './hub-types'
import { convertGroupToTeam } from './hub-team'

import { getPortal } from "@esri/arcgis-rest-portal";
import { getEventQueryFromType, searchEvents } from "@esri/hub-events";
import { IQueryFeaturesOptions } from "@esri/arcgis-rest-feature-layer";
import { getUserResource, addUserResource } from "./arcgis-user"
import { search } from './hub-search'

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


export async function setMemberPlaces(username:string, places: HubTypes.IHubGeography[], authentication?: IAuthenticationManager): Promise<boolean> {
  let resp = await addUserResource({username, name: "places.json", content: JSON.stringify(places), authentication})
  console.log("hub-member: getMemberPlaces", places)
  return resp.success;
}

export async function getMemberPlaces(username:string, authentication?: IAuthenticationManager): Promise<HubTypes.IHubGeography[]> {
  let places = await getUserResource(username, "places.json", {authentication});
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

export async function searchMemberContent(username, authentication: IAuthenticationManager): Promise<HubTypes.IHubSearchResults> {
  let content = await search({ owner: username,
                              authentication 
                            });
  return content
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