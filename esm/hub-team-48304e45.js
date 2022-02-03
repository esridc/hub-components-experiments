import { H as HubType, V as VisibilityOptions } from './hub-content-ba4934ea.js';
import { b as searchGroups, a as search } from './hub-search-992b92f5.js';
import { r as request, _ as __assign } from './clean-url-83c51f70.js';
import { g as genericSearch, s as searchItems } from './search-b0ff9cfb.js';
import { g as getPortalUrl } from './get-portal-url-fdc441e5.js';
import { g as getUser } from './get-user-65c98cff.js';
import { q as queryFeatures, g as getPortal, a as getEventQueryFromType, s as searchEvents } from './search-9451d0d4.js';

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { getGroup } from "@esri/arcgis-rest-portal";
 * //
 * getGroup("fxb988") // id
 *   .then(response)
 * ```
 * Fetch a group using its id. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/group.htm) for more information.
 *
 * @param id - Group Id
 * @param requestOptions  - Options for the request
 * @returns  A Promise that will resolve with the data from the response.
 */
function getGroup(id, requestOptions) {
    var url = getPortalUrl(requestOptions) + "/community/groups/" + id;
    // default to a GET request
    var options = __assign({ httpMethod: "GET" }, requestOptions);
    return request(url, options);
}

/**
 * ```js
 * import { searchItems } from "@esri/arcgis-rest-portal";
 * //
 * searchUsers({ q: 'tommy', authentication })
 *   .then(response) // response.total => 355
 * ```
 * Search a portal for users.
 *
 * @param search - A RequestOptions object to pass through to the endpoint.
 * @returns A Promise that will resolve with the data from the response.
 */
function searchUsers(search) {
    return genericSearch(search, "user");
}

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { updateUser } from '@esri/arcgis-rest-portal';
 * // any user can update their own profile
 * updateUser({
 *   authentication,
 *   user: { description: "better than the last one" }
 * })
 *   .then(response)
 * // org administrators must declare the username that will be updated explicitly
 * updateUser({
 *   authentication,
 *   user: { username: "c@sey", description: "" }
 * })
 *   .then(response)
 * // => { "success": true, "username": "c@sey" }
 * ```
 * Update a user profile. The username will be extracted from the authentication session unless it is provided explicitly. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/update-user.htm) for more information.
 *
 * @param requestOptions - options to pass through in the request
 * @returns A Promise that will resolve with metadata about the user
 */
function updateUser(requestOptions) {
    // default to the authenticated username unless another username is provided manually
    var username = requestOptions.user.username || requestOptions.authentication.username;
    var updateUrl = getPortalUrl(requestOptions) + "/community/users/" + encodeURIComponent(username) + "/update";
    // mixin custom params and the user information, then drop the user info
    requestOptions.params = __assign(__assign({}, requestOptions.user), requestOptions.params);
    delete requestOptions.user;
    // send the request
    return request(updateUrl, requestOptions);
}

const portalUrl$2 = 'https://www.arcgis.com';
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
async function getUserResource(id, resource, requestOptions) {
  const url = `${portalUrl$2}/sharing/rest/community/users/${id}/resources/${resource}`;
  // Mix in num:1000 with any user supplied params
  // Key thing - we don't want to mutate the passed in requestOptions
  // as that may be used in other (subsequent) calls in the course
  // of a long promise chains
  const options = Object.assign({}, requestOptions);
  options.params = Object.assign({ num: 1000 }, options.params);
  return request(url, options);
}
/**
 * ```js
 * import { addItemResource } from "@esri/arcgis-rest-portal";
 *
 * // Add a file resource
 * addItemResource({
 *   id: '3ef',
 *   resource: file,
 *   name: 'bigkahuna.jpg',
 *   authentication
 * })
 *   .then(response)
 *
 * // Add a text resource
 * addItemResource({
 *   id: '4fg',
 *   content: "Text content",
 *   name: 'bigkahuna.txt',
 *   authentication
 * })
 *   .then(response)
 * ```
 * Add a resource associated with an item. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/add-resources.htm) for more information.
 *
 * @param requestOptions - Options for the request
 * @returns A Promise to add item resources.
 */
function addUserResource(requestOptions) {
  const url = `${portalUrl$2}/sharing/rest/community/users/${requestOptions.username}/addresource`;
  requestOptions.params = Object.assign({ text: requestOptions.content, key: requestOptions.name, file: requestOptions.resource }, requestOptions.params);
  return request(url, requestOptions);
}

/* Copyright (c) 2018-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { searchAnnotations } from "@esri/hub-annotations";
 * //
 * searchAnnotations({ url: annotationsUrl + "/0" })
 *   .then(response => {
 *     // {
 *     //   data: [{
 *     //     id: "User1",
 *     //     type: "annotations",
 *     //     attributes: {description: "Great place!", ...}
 *     //   }],
 *     //   included: [{
 *     //     id: "User1",
 *     //     type: "users",
 *     //     attributes: { firstName: "User", lastName: "Name", ...}
 *     //   }]
 *     // }
 *   });
 * ```
 * Query for annotations from ArcGIS Hub.
 * @param requestOptions - request options that may include authentication
 * @returns A Promise that will resolve with decorated features from the annotation service for a Hub enabled ArcGIS Online organization.
 */
function searchAnnotations(requestOptions) {
    if (!requestOptions.outFields) {
        requestOptions.outFields = [
            "OBJECTID",
            "author",
            "updater",
            "created_at",
            "updated_at",
            "description",
            "source",
            "status",
            "target",
            "dataset_id"
        ];
    }
    // upvotes and downvotes should not be returned
    requestOptions.where += " AND parent_id IS NULL";
    return queryFeatures(requestOptions).then(response => {
        const users = [];
        const data = [];
        // use .reduce()?
        response.features.forEach((comment) => {
            const attributes = comment.attributes;
            const geometry = comment.geometry;
            const resource = {
                id: attributes.OBJECTID,
                type: "annotations",
                attributes
            };
            if (geometry) {
                resource.geometry = geometry;
            }
            data.push(resource);
            // ensure we only fetch metadata about each user once
            if (users.indexOf(attributes.author) === -1) {
                users.push(attributes.author);
            }
        });
        const getUserInfo = users
            .filter(name => name !== "") // filter out anonymous comments
            .map(name => {
            return getUser({
                username: name,
                portal: requestOptions.portal,
                authentication: requestOptions.authentication
            }).catch(() => null);
        });
        return Promise.all(getUserInfo).then(userInfo => {
            const included = [];
            userInfo.forEach(attributes => {
                if (!attributes) {
                    return;
                }
                included.push({ id: attributes.username, type: `users`, attributes });
            });
            return { included, data };
        });
    });
}

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { request } from "@esri/arcgis-rest-request";
 * import { getAnnotationServiceUrl } from "@esri/hub-events";
 * // org ids can be retrieved via a call to portals/self
 * request("http://custom.maps.arcgis.com/sharing/rest/portals/self")
 *   .then(response => {
 *     getAnnotationServiceUrl(response.id)
 *       .then(url)
 *   })
 * ```
 * Fetch the annotations associated with a Hub Site.
 * @param orgId - Identifier of the ArcGIS Online Organization
 * @param requestOptions - request options that may include authentication
 * @returns A Promise that will resolve with an annotations url for a Hub enabled ArcGIS Online organization.
 */
function getAnnotationServiceUrl(orgId, requestOptions) {
    return searchItems(Object.assign({ q: `typekeywords:hubAnnotationLayer AND orgid:${orgId}` }, requestOptions)).then((response) => {
        const annoResponse = response;
        if (annoResponse.results && annoResponse.results.length > 0) {
            // this will need to be smarter if there is more than one service
            let url = annoResponse.results[0].url;
            // force https
            url = url.replace(/^http:/gi, "https:");
            // it feels like we can/should += '/0' internally here
            return url;
        }
        else {
            throw Error("No annotation service found. Commenting is likely not enabled.");
        }
    });
}
class AllResultsError extends Error {
    constructor(errors) {
        super("All attempted edits failed");
        this.errors = errors;
        const message = errors[0].description;
        if (errors.every(error => error.description === message)) {
            // all errors have the same message, use that instead
            this.message = message;
        }
    }
}
/**
 * If all results failed, throw an error
 * otherwise return the results
 * @param results
 */
function checkResults(results) {
    const errors = [];
    results.reduce((acc, result) => {
        if (!result.success) {
            acc.push(result.error);
        }
        return acc;
    }, errors);
    if (errors.length === results.length) {
        throw new AllResultsError(errors);
    }
    return results;
}

const portalUrl$1 = 'https://www.arcgis.com';
async function searchMembers(query, authentication) {
  let users = await searchUsers({ q: query, authentication });
  let members = users.results.reduce((userResults, user) => {
    userResults.push(convertUserToMember(user));
    return userResults;
  }, []);
  return { results: members };
}
async function convertMemberToUser(attributes) {
  attributes = embedUserInterests(attributes);
  // Member is a superset of User
  let user = attributes;
  return user;
}
async function updateMember(id, attributes, authentication) {
  console.log("hub-member: updateMember", id, attributes);
  let user = convertMemberToUser(attributes);
  // Portal
  updateUser({
    user: Object.assign({ username: id }, user),
    authentication
  });
  return getMember(id, authentication);
}
async function getMember(id, authentication) {
  let user = await getUser({ username: id, authentication: authentication });
  return convertUserToMember(user);
}
function getAnonymousMember() {
  return convertUserToMember({
    username: "",
    fullName: "Anonymous",
    thumbnail: ""
  });
}
async function getMemberEvents(authentication) {
  // Process:
  // 1. Find Portal eventGroups=Portal.search where(type=event && members.include?(user))
  // 2. Query Events Service where(groupId.include?(eventGroups)) && other filters (e.g. upcoming/nearby)
  // 3. Convert Group+Features into IHubEvent
  let events = [];
  let groups = await searchGroups({
    q: "tags:Hub Event Group",
    params: { searchUserAccess: "groupMember", num: 100 },
    authentication
  });
  let eventGroups = groups.results.reduce((teamResults, group) => {
    teamResults.push(`groupId = '${group.id}'`); // TODO: build this array elsewhere
    return teamResults;
  }, []);
  let portal = await getPortal(null, { authentication: authentication });
  try {
    // @esri/hub-events directly calls Feature Service instead of using the Hub API proxy.
    // let eventServiceUrl = await getEventFeatureServiceUrl( portal.id );
    let eventServiceUrl = `https://hub.arcgis.com/api/v3/events/${portal.id}/Hub%20Events/FeatureServer/0/`;
    // TODO: add support for all vs. upcoming events
    const searchOptions = getEventQueryFromType("upcoming", {
      url: eventServiceUrl,
      authentication
    });
    if (!!eventGroups) {
      searchOptions.where += ` AND (${eventGroups.join(' OR ')})`;
    }
    let eventFeatures = await searchEvents(searchOptions);
    console.log("hub-member: getMemberEvents", [searchOptions, eventFeatures]);
    events = eventFeatures.data.reduce((eventResults, event) => {
      eventResults.push({
        id: event.id,
        name: event.attributes.title,
        summary: event.attributes.venue,
        description: event.attributes.description,
        hubtype: HubType.event
      });
      return eventResults;
    }, []);
  }
  catch (_a) { }
  // EventGroups are all events the user has registered, and events are matches for upcoming.
  return { results: events, meta: { total: eventGroups.length, count: events.length, start: 1 } };
}
async function setMemberPlaces(username, places, authentication) {
  let resp = await addUserResource({ username, name: "places.json", content: JSON.stringify({ places }), authentication });
  console.log("hub-member: getMemberPlaces", places);
  return resp.success;
}
async function getMemberPlaces(username, authentication) {
  let places;
  try {
    places = await getUserResource(username, "places.json", { authentication });
  }
  catch (_a) {
    places = { places: [] };
  }
  console.log("hub-member: getMemberPlaces", places);
  return places.places;
}
async function getMemberTeams(authentication) {
  let groups = await searchGroups({ q: "tags:initiativeCollaborationGroup",
    params: { searchUserAccess: "groupMember", num: 100 },
    authentication
  });
  let teams = groups.results.reduce((teamResults, group) => {
    teamResults.push(convertGroupToTeam(group));
    return teamResults;
  }, []);
  return { results: teams, meta: { total: groups.total, count: groups.num, start: groups.start } };
}
async function searchMemberComments(username, authentication) {
  let query = ["1=1"];
  query.push(`Creator LIKE '${username}'`);
  let portal = await getPortal(null, { authentication: authentication });
  let annotations;
  try {
    let annotationsUrl = await getAnnotationServiceUrl(portal.id);
    annotationsUrl += '/0';
    console.log("hub-discussion: Search", [search, query, { url: annotationsUrl, params: { where: query.join(" AND ") } }]);
    annotations = await searchAnnotations({ url: annotationsUrl, where: query.join(" AND ") });
  }
  catch (_a) {
    annotations = { data: [] };
  }
  return annotations.data;
}
async function searchMemberContent(username, authentication) {
  console.log("searchMemberContent", [username, authentication]);
  let content = await search({ owner: username,
    sort: 'modified',
    order: 'desc'
  }, { isPortal: true, hubApiUrl: "https://hub.arcgis.com", authentication: authentication });
  return content;
}
function embedUserInterests(member) {
  member.tags = member.tags.concat(member.metadata.interests.map((interest) => { return `interest:${interest}`; }));
  return member;
}
function extractUserInterests(user) {
  var _a;
  let interests = (_a = user.tags) === null || _a === void 0 ? void 0 : _a.reduce((agg, tag) => {
    let m = tag.match(/^interest:(.*)/);
    console.log("usersInterests", m);
    if (m) {
      agg.push(m[1]);
    }
    return agg;
  }, []);
  return interests;
}
function convertUserToMember(user, _authentication) {
  let member = Object.assign(user, {
    id: user.username,
    name: user.fullName || user.username,
    publisher: { name: user.username, username: user.username },
    hubtype: HubType.member,
    summary: user.description || "No profile summary.",
    description: user.description || "No profile description.",
    hubType: HubType.member,
    url: `${portalUrl$1}/home/user.html?user=${user.username}`,
    permissions: {
      visibility: VisibilityOptions.public
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
      interests: extractUserInterests(user)
    }
  });
  if (user.thumbnail !== undefined && user.thumbnail !== null) {
    member.thumbnailUrl = `${portalUrl$1}/sharing/rest/community/users/${user.username}/info/${user.thumbnail}`;
  }
  return member;
}

const portalUrl = 'https://www.arcgis.com';
async function searchTeams(query) {
  let groups = await searchGroups(query);
  let teams = groups.results.reduce((teamResults, group) => {
    teamResults.push(convertGroupToTeam(group));
    return teamResults;
  }, []);
  return { results: teams, meta: { total: groups.total, count: groups.num, start: groups.start } };
}
async function getTeam(id) {
  let group = await getGroup(id);
  return convertGroupToTeam(group);
}
function convertGroupToTeam(group) {
  let team = Object.assign(group, {
    id: group.id,
    name: group.title,
    hubtype: HubType.team,
    publisher: { name: group.owner, username: group.owner },
    summary: group.snippet || group.description || "No profile summary.",
    description: group.description || "No profile description.",
    hubType: HubType.team,
    url: `${portalUrl}/home/group.html?id=${group.id}`,
    permissions: {
      visibility: VisibilityOptions[group.access]
    },
    // Explicit data information since this is a common confusion + bug report
    createdDate: new Date(group.created),
    createdDateSource: 'group.created',
    updatedDate: new Date(group.modified),
    updatedDateSource: 'group.modified',
    thumbnailUrl: "",
    culture: group.culture,
    region: group.region,
  });
  if (group.thumbnail !== undefined && team.thumbnail !== null) {
    team.thumbnailUrl = `${portalUrl}/sharing/rest/community/groups/${group.id}/info/${group.thumbnail}`;
  }
  return team;
}

export { searchTeams as a, searchAnnotations as b, getAnonymousMember as c, convertUserToMember as d, getTeam as e, getMember as f, getAnnotationServiceUrl as g, getMemberTeams as h, getMemberEvents as i, getMemberPlaces as j, searchMemberContent as k, searchMemberComments as l, checkResults as m, setMemberPlaces as n, searchMembers as s, updateMember as u };
