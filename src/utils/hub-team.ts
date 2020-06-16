import { getGroup } from '@esri/arcgis-rest-portal';
import * as HubTypes from './hub-types'

const portalUrl = 'https://www.arcgis.com';

export async function getTeam(id:string): Promise<HubTypes.IHubTeam> {
    let group = await getGroup(id);

    let team:HubTypes.IHubTeam = Object.assign(group, {
        id: group.id,
        name: group.title,
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