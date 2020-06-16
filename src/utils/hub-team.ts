import { IGroup, getGroup, getGroupUsers, searchGroups } from '@esri/arcgis-rest-portal';
import * as HubTypes from './hub-types'
import { getMember } from "./hub-member";

const portalUrl = 'https://www.arcgis.com';

export async function searchTeams(query: string): Promise<HubTypes.IHubSearchResults> {
    let groups = await searchGroups(query);

    let teams = groups.results.reduce((teamResults, group) => {
        teamResults.push(convertGroupToTeam(group))
        return teamResults;
    }, []);

    return { results: teams };
}

export async function getTeam(id:string): Promise<HubTypes.IHubTeam> {
    let group = await getGroup(id);
    return convertGroupToTeam(group);
}

export async function getTeamMembers(id:string): Promise<HubTypes.IHubMember[]> {
    let users = await getGroupUsers(id);
    
    // TODO: handle admin, owner, users per https://esri.github.io/arcgis-rest-js/api/portal/getGroupUsers/
    // TODO: evaluate Search to get batch user info - or ask Online to add user details
    let members = users.users.reduce((teamMembers, user) => {
        let member = getMember(user);
        teamMembers.push( member )
        return teamMembers;
    }, [])

    return members;
}

export function convertGroupToTeam(group:IGroup): HubTypes.IHubTeam {
    let team:HubTypes.IHubTeam = Object.assign(group, {
        id: group.id,
        name: group.title,
        hubtype: HubTypes.HubType.team,
        publisher: { name: group.owner, username: group.owner },
        summary: group.snippet || "No profile summary.",
        description: group.description || "No profile description.",
        hubType: HubTypes.HubType.team,
        url: `${portalUrl}/home/group.html?id=${group.id}`,
        permissions: {
          visibility: HubTypes.VisibilityOptions[group.access]
        },
    
        // Explicit data information since this is a common confusion + bug report
        createdDate: new Date(group.created),
        createdDateSource: 'group.created',
        updatedDate: new Date(group.modified),
        updatedDateSource: 'group.modified',
        
        thumbnailUrl: "",
        culture: group.culture,
        region: group.region,
      })
    if(group.thumbnail !== undefined && team.thumbnail !== null) {
      team.thumbnailUrl = `${portalUrl}/sharing/rest/community/groups/${group.id}/info/${group.thumbnail}`
    }   
    return team;
}