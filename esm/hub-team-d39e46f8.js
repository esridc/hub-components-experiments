import { H as HubType, V as VisibilityOptions } from './hub-content-82335dfd.js';
import { r as request, _ as __assign } from './index-fd5669bb.js';
import { d as getUser, c as searchItems, e as searchUsers, f as updateUser, h as searchGroups, i as getPortal, k as getGroup } from './index-2b41d503.js';
import { s as search } from './hub-search-eb1585d6.js';
import { q as queryFeatures, a as addFeatures, d as deleteFeatures, g as getEventQueryFromType, s as searchEvents } from './index-52c4095a.js';

const portalUrl = 'https://www.arcgis.com';
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
    const url = `${portalUrl}/sharing/rest/community/users/${id}/resources/${resource}`;
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
    const url = `${portalUrl}/sharing/rest/community/users/${requestOptions.username}/addresource`;
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
    return queryFeatures(requestOptions).then(function (response) {
        var users = [];
        var data = [];
        // use .reduce()?
        response.features.forEach(function (comment) {
            var attributes = comment.attributes;
            var geometry = comment.geometry;
            var resource = {
                id: attributes.OBJECTID,
                type: "annotations",
                attributes: attributes
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
        var getUserInfo = users
            .filter(function (name) { return name !== ""; }) // filter out anonymous comments
            .map(function (name) {
            return getUser({
                username: name,
                portal: requestOptions.portal,
                authentication: requestOptions.authentication
            }).catch(function () { return null; });
        });
        return Promise.all(getUserInfo).then(function (userInfo) {
            var included = [];
            userInfo.forEach(function (attributes) {
                if (!attributes) {
                    return;
                }
                included.push({ id: attributes.username, type: "users", attributes: attributes });
            });
            return { included: included, data: data };
        });
    });
}
//# sourceMappingURL=search.js.map

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
    return searchItems(__assign({ q: "typekeywords:hubAnnotationLayer AND orgid:" + orgId }, requestOptions)).then(function (response) {
        var annoResponse = response;
        if (annoResponse.results && annoResponse.results.length > 0) {
            // this will need to be smarter if there is more than one service
            var url = annoResponse.results[0].url;
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
//# sourceMappingURL=util.js.map

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { addAnnotations } from "@esri/hub-annotations";
 * //
 * addAnnotations({
 *   url: annotationsUrl + "/0",
 *   features: [{
 *     attributes: {
 *       target: "http://...", // required, explains what is being commented on
 *       description: "A grand idea!" // also required. this is the actual comment
 *     }
 *   }]
 * })
 *   .then(response);
 * ```
 * Add an annotation to ArcGIS Hub. Uses authentication to derive authorship, appends a timestamp and sets a default status of "pending" to new comments by default.
 * @param requestOptions - request options that may include authentication
 * @returns A Promise that will resolve with the response from the service after attempting to add one or more new annotations.
 */
function addAnnotations(requestOptions) {
    /* istanbul ignore else */
    if (requestOptions.features && requestOptions.features.length) {
        requestOptions.features.forEach(function (anno) { return enrichAnnotation(anno); });
    }
    return addFeatures(requestOptions);
}
function enrichAnnotation(annotation) {
    var defaults = {
        status: "pending",
        source: "hub.js"
    };
    // mixin, giving precedence to what was passed to the method
    annotation.attributes = __assign(__assign({}, defaults), annotation.attributes);
}
//# sourceMappingURL=add.js.map

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { deleteAnnotations } from "@esri/hub-annotations";
 * //
 * deleteAnnotations({
 *   url: annotationsUrl + "/0",
 *   // an array of featureIds
 *   objectIds: [ 1 ]
 * })
 *   .then(response);
 * ```
 *
 * Delete an annotation from ArcGIS Hub.
 * @param requestOptions - request options that may include authentication
 * @returns A Promise that will resolve with the response from the service after attempting to delete annotations.
 */
function deleteAnnotations(requestOptions) {
    return deleteFeatures(requestOptions);
}
//# sourceMappingURL=delete.js.map

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

const portalUrl$2 = 'https://www.arcgis.com';
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
        url: `${portalUrl$2}/home/group.html?id=${group.id}`,
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
        team.thumbnailUrl = `${portalUrl$2}/sharing/rest/community/groups/${group.id}/info/${group.thumbnail}`;
    }
    return team;
}

export { searchTeams as a, searchAnnotations as b, getAnonymousMember as c, deleteAnnotations as d, convertUserToMember as e, getTeam as f, getAnnotationServiceUrl as g, getMember as h, getMemberTeams as i, getMemberEvents as j, getMemberPlaces as k, searchMemberContent as l, searchMemberComments as m, addAnnotations as n, setMemberPlaces as o, searchMembers as s, updateMember as u };
