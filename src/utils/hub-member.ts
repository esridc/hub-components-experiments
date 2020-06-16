import { IAuthenticationManager } from "@esri/arcgis-rest-request"
import { IUser, searchUsers, getUser } from "@esri/arcgis-rest-portal";
import * as HubTypes from './hub-types'

const portalUrl = 'https://www.arcgis.com';

export async function searchMembers(query: string, authentication: IAuthenticationManager): Promise<HubTypes.IHubSearchResults> {
  let users = await searchUsers({q: query, authentication});

  let members = users.results.reduce((userResults, user) => {
      userResults.push(convertUserToMember(user))
      return userResults;
  }, []);

  return { results: members };
}

export async function getMember(id:string): Promise<HubTypes.IHubMember> {
  let user = await getUser(id);
  return convertUserToMember(user);
}

export function convertUserToMember(user: IUser): HubTypes.IHubMember {
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
  })
  if(user.thumbnail !== undefined && user.thumbnail !== null) {
    member.thumbnailUrl = `${portalUrl}/sharing/rest/community/users/${user.username}/info/${user.thumbnail}`
  }
  return member;  
}