import { IAuthenticationManager } from "@esri/arcgis-rest-request"
import { IUser, searchUsers, getUser, searchGroups } from "@esri/arcgis-rest-portal";
import * as HubTypes from './hub-types'
import { convertGroupToTeam } from './hub-team'

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

export async function getMember(id:string): Promise<HubTypes.IHubMember> {
  let user = await getUser({username: id});
  return convertUserToMember(user);
}

export function getAnonymousMember(): HubTypes.IHubMember {
  return convertUserToMember({
      username: "",
      fullName: "Anonymous",
      thumbnail: ""      
    })
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