var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { H as HubType, V as VisibilityOptions } from './hub-content-82335dfd.js';
import { r as request, _ as __assign } from './index-fd5669bb.js';
import { d as getUser, c as searchItems, e as searchUsers, f as updateUser, h as searchGroups, i as getPortal, k as getGroup } from './index-2b41d503.js';
import { s as search } from './hub-search-eb1585d6.js';
import { q as queryFeatures, a as addFeatures, d as deleteFeatures, g as getEventQueryFromType, s as searchEvents } from './index-52c4095a.js';
var portalUrl = 'https://www.arcgis.com';
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
function getUserResource(id, resource, requestOptions) {
    return __awaiter(this, void 0, void 0, function () {
        var url, options;
        return __generator(this, function (_b) {
            url = portalUrl + "/sharing/rest/community/users/" + id + "/resources/" + resource;
            options = Object.assign({}, requestOptions);
            options.params = Object.assign({ num: 1000 }, options.params);
            return [2 /*return*/, request(url, options)];
        });
    });
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
    var url = portalUrl + "/sharing/rest/community/users/" + requestOptions.username + "/addresource";
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
var portalUrl$1 = 'https://www.arcgis.com';
function searchMembers(query, authentication) {
    return __awaiter(this, void 0, void 0, function () {
        var users, members;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, searchUsers({ q: query, authentication: authentication })];
                case 1:
                    users = _b.sent();
                    members = users.results.reduce(function (userResults, user) {
                        userResults.push(convertUserToMember(user));
                        return userResults;
                    }, []);
                    return [2 /*return*/, { results: members }];
            }
        });
    });
}
function convertMemberToUser(attributes) {
    return __awaiter(this, void 0, void 0, function () {
        var user;
        return __generator(this, function (_b) {
            attributes = embedUserInterests(attributes);
            user = attributes;
            return [2 /*return*/, user];
        });
    });
}
function updateMember(id, attributes, authentication) {
    return __awaiter(this, void 0, void 0, function () {
        var user;
        return __generator(this, function (_b) {
            console.log("hub-member: updateMember", id, attributes);
            user = convertMemberToUser(attributes);
            // Portal
            updateUser({
                user: Object.assign({ username: id }, user),
                authentication: authentication
            });
            return [2 /*return*/, getMember(id, authentication)];
        });
    });
}
function getMember(id, authentication) {
    return __awaiter(this, void 0, void 0, function () {
        var user;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, getUser({ username: id, authentication: authentication })];
                case 1:
                    user = _b.sent();
                    return [2 /*return*/, convertUserToMember(user)];
            }
        });
    });
}
function getAnonymousMember() {
    return convertUserToMember({
        username: "",
        fullName: "Anonymous",
        thumbnail: ""
    });
}
function getMemberEvents(authentication) {
    return __awaiter(this, void 0, void 0, function () {
        var events, groups, eventGroups, portal, eventServiceUrl, searchOptions, eventFeatures, _a_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    events = [];
                    return [4 /*yield*/, searchGroups({
                            q: "tags:Hub Event Group",
                            params: { searchUserAccess: "groupMember", num: 100 },
                            authentication: authentication
                        })];
                case 1:
                    groups = _b.sent();
                    eventGroups = groups.results.reduce(function (teamResults, group) {
                        teamResults.push("groupId = '" + group.id + "'"); // TODO: build this array elsewhere
                        return teamResults;
                    }, []);
                    return [4 /*yield*/, getPortal(null, { authentication: authentication })];
                case 2:
                    portal = _b.sent();
                    _b.label = 3;
                case 3:
                    _b.trys.push([3, 5, , 6]);
                    eventServiceUrl = "https://hub.arcgis.com/api/v3/events/" + portal.id + "/Hub%20Events/FeatureServer/0/";
                    searchOptions = getEventQueryFromType("upcoming", {
                        url: eventServiceUrl,
                        authentication: authentication
                    });
                    if (!!eventGroups) {
                        searchOptions.where += " AND (" + eventGroups.join(' OR ') + ")";
                    }
                    return [4 /*yield*/, searchEvents(searchOptions)];
                case 4:
                    eventFeatures = _b.sent();
                    console.log("hub-member: getMemberEvents", [searchOptions, eventFeatures]);
                    events = eventFeatures.data.reduce(function (eventResults, event) {
                        eventResults.push({
                            id: event.id,
                            name: event.attributes.title,
                            summary: event.attributes.venue,
                            description: event.attributes.description,
                            hubtype: HubType.event
                        });
                        return eventResults;
                    }, []);
                    return [3 /*break*/, 6];
                case 5:
                    _a_1 = _b.sent();
                    return [3 /*break*/, 6];
                case 6: 
                // EventGroups are all events the user has registered, and events are matches for upcoming.
                return [2 /*return*/, { results: events, meta: { total: eventGroups.length, count: events.length, start: 1 } }];
            }
        });
    });
}
function setMemberPlaces(username, places, authentication) {
    return __awaiter(this, void 0, void 0, function () {
        var resp;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, addUserResource({ username: username, name: "places.json", content: JSON.stringify({ places: places }), authentication: authentication })];
                case 1:
                    resp = _b.sent();
                    console.log("hub-member: getMemberPlaces", places);
                    return [2 /*return*/, resp.success];
            }
        });
    });
}
function getMemberPlaces(username, authentication) {
    return __awaiter(this, void 0, void 0, function () {
        var places, _a_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, getUserResource(username, "places.json", { authentication: authentication })];
                case 1:
                    places = _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _a_2 = _b.sent();
                    places = { places: [] };
                    return [3 /*break*/, 3];
                case 3:
                    console.log("hub-member: getMemberPlaces", places);
                    return [2 /*return*/, places.places];
            }
        });
    });
}
function getMemberTeams(authentication) {
    return __awaiter(this, void 0, void 0, function () {
        var groups, teams;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, searchGroups({ q: "tags:initiativeCollaborationGroup",
                        params: { searchUserAccess: "groupMember", num: 100 },
                        authentication: authentication
                    })];
                case 1:
                    groups = _b.sent();
                    teams = groups.results.reduce(function (teamResults, group) {
                        teamResults.push(convertGroupToTeam(group));
                        return teamResults;
                    }, []);
                    return [2 /*return*/, { results: teams, meta: { total: groups.total, count: groups.num, start: groups.start } }];
            }
        });
    });
}
function searchMemberComments(username, authentication) {
    return __awaiter(this, void 0, void 0, function () {
        var query, portal, annotations, annotationsUrl, _a_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    query = ["1=1"];
                    query.push("Creator LIKE '" + username + "'");
                    return [4 /*yield*/, getPortal(null, { authentication: authentication })];
                case 1:
                    portal = _b.sent();
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 5, , 6]);
                    return [4 /*yield*/, getAnnotationServiceUrl(portal.id)];
                case 3:
                    annotationsUrl = _b.sent();
                    annotationsUrl += '/0';
                    console.log("hub-discussion: Search", [search, query, { url: annotationsUrl, params: { where: query.join(" AND ") } }]);
                    return [4 /*yield*/, searchAnnotations({ url: annotationsUrl, where: query.join(" AND ") })];
                case 4:
                    annotations = _b.sent();
                    return [3 /*break*/, 6];
                case 5:
                    _a_3 = _b.sent();
                    annotations = { data: [] };
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/, annotations.data];
            }
        });
    });
}
function searchMemberContent(username, authentication) {
    return __awaiter(this, void 0, void 0, function () {
        var content;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log("searchMemberContent", [username, authentication]);
                    return [4 /*yield*/, search({ owner: username,
                            sort: 'modified',
                            order: 'desc'
                        }, { isPortal: true, hubApiUrl: "https://hub.arcgis.com", authentication: authentication })];
                case 1:
                    content = _b.sent();
                    return [2 /*return*/, content];
            }
        });
    });
}
function embedUserInterests(member) {
    member.tags = member.tags.concat(member.metadata.interests.map(function (interest) { return "interest:" + interest; }));
    return member;
}
function extractUserInterests(user) {
    var _a;
    var interests = (_a = user.tags) === null || _a === void 0 ? void 0 : _a.reduce(function (agg, tag) {
        var m = tag.match(/^interest:(.*)/);
        console.log("usersInterests", m);
        if (m) {
            agg.push(m[1]);
        }
        return agg;
    }, []);
    return interests;
}
function convertUserToMember(user, _authentication) {
    var member = Object.assign(user, {
        id: user.username,
        name: user.fullName || user.username,
        publisher: { name: user.username, username: user.username },
        hubtype: HubType.member,
        summary: user.description || "No profile summary.",
        description: user.description || "No profile description.",
        hubType: HubType.member,
        url: portalUrl$1 + "/home/user.html?user=" + user.username,
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
        member.thumbnailUrl = portalUrl$1 + "/sharing/rest/community/users/" + user.username + "/info/" + user.thumbnail;
    }
    return member;
}
var portalUrl$2 = 'https://www.arcgis.com';
function searchTeams(query) {
    return __awaiter(this, void 0, void 0, function () {
        var groups, teams;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, searchGroups(query)];
                case 1:
                    groups = _b.sent();
                    teams = groups.results.reduce(function (teamResults, group) {
                        teamResults.push(convertGroupToTeam(group));
                        return teamResults;
                    }, []);
                    return [2 /*return*/, { results: teams, meta: { total: groups.total, count: groups.num, start: groups.start } }];
            }
        });
    });
}
function getTeam(id) {
    return __awaiter(this, void 0, void 0, function () {
        var group;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, getGroup(id)];
                case 1:
                    group = _b.sent();
                    return [2 /*return*/, convertGroupToTeam(group)];
            }
        });
    });
}
function convertGroupToTeam(group) {
    var team = Object.assign(group, {
        id: group.id,
        name: group.title,
        hubtype: HubType.team,
        publisher: { name: group.owner, username: group.owner },
        summary: group.snippet || group.description || "No profile summary.",
        description: group.description || "No profile description.",
        hubType: HubType.team,
        url: portalUrl$2 + "/home/group.html?id=" + group.id,
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
        team.thumbnailUrl = portalUrl$2 + "/sharing/rest/community/groups/" + group.id + "/info/" + group.thumbnail;
    }
    return team;
}
export { searchTeams as a, searchAnnotations as b, getAnonymousMember as c, deleteAnnotations as d, convertUserToMember as e, getTeam as f, getAnnotationServiceUrl as g, getMember as h, getMemberTeams as i, getMemberEvents as j, getMemberPlaces as k, searchMemberContent as l, searchMemberComments as m, addAnnotations as n, setMemberPlaces as o, searchMembers as s, updateMember as u };
