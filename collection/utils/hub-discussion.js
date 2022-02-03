import { getItem, getItemData, createItem, searchItems } from "@esri/arcgis-rest-portal";
function convertItemToDiscussion(item, data) {
  let options = {};
  if (!!data) {
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
    };
  }
  const discussion = Object.assign({ id: item.id, title: item.title, summary: item.snippet, description: item.description }, options);
  return discussion;
}
export async function searchDiscussions(query) {
  let search = await searchItems(query.query);
  let discussions = search.results.map((d) => {
    return convertItemToDiscussion(d);
  });
  let results = {
    query: search.query,
    total: search.total,
    start: search.start,
    num: search.num,
    nextStart: search.nextStart,
    aggregations: search.aggregations,
    results: discussions // the whole point
  };
  return results;
}
export async function getDiscussion(id) {
  let [item, data] = await Promise.all([getItem(id), getItemData(id)]);
  // .then(resolve)
  // .catch(reject)
  return convertItemToDiscussion(item, data);
}
export async function createDiscussion(discussion, authentication) {
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
  });
  return item.id;
}
export async function updateDiscussion(updateDiscussion) {
  return getDiscussion(updateDiscussion.id);
}
export async function deleteDiscussion(_id) {
  // Delete features
  // Delete discussion item
  return false;
}
export async function getDiscussionPosts() {
  // Query Feature layer for target 
}
// export async function setDiscussionModerators():Promise<any> {}
// export async function setDiscussionChannels():Promise<any> {}
