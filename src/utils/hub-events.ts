// import * as HubTypes from './hub-types'

// import { IGroup } from "@esri/arcgis-rest-types"
// import {
//     getEventServiceUrl,
//     searchEvents,
//     registerForEvent,
//     unregisterForEvent
//   } from '@esri/hub-events';

// export async function getEvent(): Promise<HubTypes.IHubEvent> {

// }

// function searchEvents(..)
//   getPortal(null, {
//     portal: `${this.orgurl}/sharing/rest/`
//   })
//     .then(response => {
//       getEventServiceUrl(response.id)
//         .then(url => {
//           this.eventServiceUrl = url;
//           searchEvents({ url: this.eventServiceUrl })
//             .then(response => {
//               if (response.data.length > 0) {
//                 for (let i=0; i<response.data.length;i++) {
//                   if (response.data[i].attributes.title === this.eventtitle) {
//                     const eventDetails = response.data[i].attributes;
//                     this.eventDate = new Date(eventDetails.startDate).toString();
//                     this.eventGroupId = eventDetails.groupId;
//                     this.eventOrganizer = this.digOutContactInfo(eventDetails);
//                     this.eventUrl = `${hubUrl}/events/${eventDetails.url}`
//                     // this.eventImage = `${eventServiceUrl}/${eventDetails.OBJECTID}/attachments`
//                     break;
//                   }
//                 }
//               }
//             })
//         })
//       })

// export function convertToEvent(feature, group:HubTypes.IGroup): HubTypes.IHubEvent {
    // let event:HubTypes.IHubEvent = Object.assign(user, {
    //     id: user.username,
    //     name: user.fullName || user.username,
    //     publisher: { name: user.username, username: user.username  },
    //     hubtype: HubTypes.HubType.member,
    //     summary: user.description || "No profile summary.",
    //     description: user.description || "No profile description.",
    //     hubType: HubTypes.HubType.member,
    //     url: `${portalUrl}/home/user.html?user=${user.username}`,
    //     permissions: {
    //       visibility: HubTypes.VisibilityOptions.public
    //     },
    
    //     // Explicit data information since this is a common confusion + bug report
    //     createdDate: new Date(user.created),
    //     createdDateSource: 'user.created',
    //     updatedDate: new Date(user.modified),
    //     updatedDateSource: 'user.modified',
        
    //     thumbnailUrl: "",
    //     culture: user.culture,
    //     region: user.region,
    //   })
    //   if(user.thumbnail !== undefined && user.thumbnail !== null) {
    //     member.thumbnailUrl = `${portalUrl}/sharing/rest/community/users/${user.username}/info/${user.thumbnail}`
    //   }
    //   return member;  
// }
