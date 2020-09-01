import { getItem, getItemData, createItem, searchItems, IItem, ISearchResult } from "@esri/arcgis-rest-portal";
import { UserSession } from "@esri/arcgis-rest-auth";
import { left24 } from "@esri/calcite-ui-icons";

export interface IHubDiscussion {
    id: string
    title: string
    summary: string
    description: string
    topics?: string
    location?: string
    moderation?: boolean
    moderators?: Array<string>
    channels?: Array<string>
    blockwords?: Array<string>
    allowReply?: boolean
    allowUpVote?: boolean
    allowDownVote?: boolean
    allowFlag?: boolean
}
function convertItemToDiscussion( item: IItem, data?: any ): IHubDiscussion {
    let options = {};
    if(!!data) {
        options = {
            topics: data.topics,
            location: data.location,
            moderation: data.moderation,
            moderators: data.moderators,
            channels: data.channels,
            blockwords: data.blockwords,
            allowReply: data.allowReply,
            allowUpVote: data.allowUpVote,
            allowDownVote: data.allowDownVote,
            allowFlag: data.allowFlag
        }
    }

    const discussion = {
        id: item.id,
        title: item.title,
        summary: item.snippet,
        description: item.description,
        ...options
    }
    return discussion;
}
export async function searchDiscussions(query: any):Promise<ISearchResult<IHubDiscussion>> {
    let search = await searchItems(query.query);

    let discussions: Array<IHubDiscussion> = search.results.map((d) => {
        return convertItemToDiscussion(d)
    })
    let results: ISearchResult<IHubDiscussion> = {
        query: search.query,
        total: search.total,
        start: search.start,
        num: search.num,
        nextStart: search.nextStart,
        aggregations: search.aggregations,
        results: discussions // the whole point
    }    
    return results;
}
export async function getDiscussion( id: string ):Promise<IHubDiscussion> {
    let [item, data] = await Promise.all([getItem(id), getItemData(id)])
            // .then(resolve)
            // .catch(reject)
    return convertItemToDiscussion(item, data)
}
export async function createDiscussion(discussion: IHubDiscussion, authentication: UserSession):Promise<string> {
    // Check for Item?
    // Create Item
    // Verify Item
    // Return Item

    let item = await createItem({
        item: {
            title: discussion.title,
            type: "Web Mapping Application",
            typeKeywords: ["hub", "dev", "hubdiscussion"],
            snippet: discussion.summary,
            description: discussion.description,
            text: {
                topics: discussion.topics,
                location: discussion.location,
                moderation: discussion.moderation,
                moderators: discussion.moderators,
                channels: discussion.channels,
                blockwords: discussion.blockwords,
                allowReply: discussion.allowReply,
                allowUpVote: discussion.allowUpVote,
                allowDownVote: discussion.allowDownVote,
                allowFlag: discussion.allowFlag                
            }
        },
        authentication
    })

    return item.id;
}
export async function updateDiscussion( updateDiscussion: IHubDiscussion ):Promise<IHubDiscussion> {
    return getDiscussion(updateDiscussion.id)
}
export async function deleteDiscussion( id: string ):Promise<boolean> {
    // Delete features
    // Delete discussion item
    return false;
}
export async function getDiscussionPosts():Promise<any> {
    // Query Feature layer for target 
}

// export async function setDiscussionModerators():Promise<any> {}
// export async function setDiscussionChannels():Promise<any> {}
