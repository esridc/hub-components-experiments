import { r as registerInstance, h } from './index-17d4341f.js';
import { r as request, f as __spreadArrays } from './index-fd5669bb.js';
import { g as getItem, a as getItemData, b as getPortalUrl, o as getUserUrl, j as joinGroup, l as leaveGroup } from './index-2b41d503.js';
import { b as getProp, j as cloneObject, u as unique } from './index-31ce56d3.js';
import { U as UserSession } from './index-80082925.js';
import { a as authenticateUser } from './utils-877cdb99.js';
/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Applies the initial version of the Initiaive schema to the model.
 * If `model.item.properties.schemaVersion >= 1` the original object
 * will be returned. Otherwise a new object with the updated schema
 * is returned.
 *
 * @protected
 * @param {IInitiativeModel} model Initiative Model
 * @param {string} [portalUrl] Url to the Portal. Defauls to `www.arcgis.com`
 * @returns {IInitiativeModel}
 */
function applyInitialSchema(model, portalUrl) {
    var curVersion = getProp(model, "item.properties.schemaVersion");
    // if no current version or it's below 1
    if (!curVersion || curVersion < 1) {
        // clone the model because we play by immutable rules
        var clone_1 = cloneObject(model);
        // console.debug(`------- CLONE ---------`);
        // console.debug(JSON.stringify(clone, null, 2));
        // console.debug(`------- CLONE ---------`);
        // ensure some properties exist...
        if (!clone_1.data.values) {
            clone_1.data.values = {};
        }
        if (!clone_1.item.properties) {
            clone_1.item.properties = {};
        }
        // set the schema version...
        clone_1.item.properties.schemaVersion = 1.0;
        var isTemplate_1 = false;
        if (clone_1.item.typeKeywords) {
            isTemplate_1 =
                clone_1.item.typeKeywords.indexOf("hubInitiativeTemplate") >= 0;
        }
        // ensure source is in item.properties if it has a parent...
        var hasParent = !!clone_1.data.source;
        if (hasParent && clone_1.item.properties.source !== clone_1.data.source) {
            clone_1.item.properties.source = clone_1.data.source;
        }
        // convert configuratinSettings to steps array...
        // NOTE: this is only for 'templates', or Custom Initiatives
        if (clone_1.data.configurationSettings) {
            var config = cloneObject(clone_1.data.configurationSettings);
            delete clone_1.data.configurationSettings;
            // get the steps entry...
            var stepCategory = config.find(function (el) {
                return el.category === "Steps";
            });
            // hoist step names into an array
            clone_1.data.values.steps = stepCategory.fields.map(function (entry) {
                return entry.fieldName;
            });
            // move the label and tooltip to title and description, in the values.<fieldName> prop
            stepCategory.fields.forEach(function (entry) {
                // ensure values prop exists...
                if (!clone_1.data.values[entry.fieldName]) {
                    clone_1.data.values[entry.fieldName] = {};
                }
                // assign in values
                clone_1.data.values[entry.fieldName].title = entry.label;
                clone_1.data.values[entry.fieldName].description = entry.tooltip;
                clone_1.data.values[entry.fieldName].id = entry.fieldName;
                // if a .items array exists, rename that to .templates
                if (clone_1.data.values[entry.fieldName].items) {
                    // if this is a template, then move items to templates...
                    if (isTemplate_1) {
                        clone_1.data.values[entry.fieldName].templates =
                            clone_1.data.values[entry.fieldName].items;
                        delete clone_1.data.values[entry.fieldName].items;
                    }
                }
                else {
                    // ensure empty arrays
                    clone_1.data.values[entry.fieldName].items = [];
                    clone_1.data.values[entry.fieldName].templates = [];
                }
            });
        }
        return clone_1;
    }
    else {
        return model;
    }
}
//# sourceMappingURL=apply-schema.js.map
/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Apply the 1.0 --> 1.1 Migration to an Initiative Model
 *
 * @param model
 * @param portalUrl
 * @protected
 */
function upgradeToOneDotOne(model, portalUrl) {
    var curVersion = getProp(model, "item.properties.schemaVersion");
    if (curVersion < 1.1) {
        var clone = cloneObject(model);
        // store the schemaVersion
        clone.item.properties.schemaVersion = 1.1;
        // add the assets...
        addDefaultResources(clone, portalUrl);
        if (!clone.data.values.bannerImage) {
            clone.data.values.bannerImage = {
                source: "bannerImage",
                display: {
                    position: { x: "50%", y: "10%" }
                }
            };
        }
        return clone;
    }
    else {
        // console.debug(`Not upgrading CurVersion: ${curVersion}`);
        return model;
    }
}
/**
 * As part of the 1.1 migration, we add a set of default image
 * resources into the hash.
 *
 * @protected
 * @param {IInitiativeModel} model
 * @param {string} [portalUrl]
 * @returns {IInitiativeModel}
 */
function addDefaultResources(model, portalUrl) {
    if (!model.data.assets) {
        model.data.assets = [
            {
                id: "bannerImage",
                url: getResourceUrl(model.item.id, "detail-image.jpg", portalUrl),
                properties: {
                    type: "resource",
                    fileName: "detail-image.jpg",
                    mimeType: "image/jepg"
                },
                license: {
                    type: "none"
                }
            },
            {
                id: "iconDark",
                url: getResourceUrl(model.item.id, "icon-dark.png", portalUrl),
                properties: {
                    type: "resource",
                    fileName: "icon-dark.png",
                    mimeType: "image/png"
                },
                license: {
                    type: "none"
                }
            },
            {
                id: "iconLight",
                url: getResourceUrl(model.item.id, "icon-light.png", portalUrl),
                properties: {
                    type: "resource",
                    fileName: "icon-light.png",
                    mimeType: "image/png"
                },
                license: {
                    type: "none"
                }
            }
        ];
    }
    return model;
}
/**
 * Construct the url for a resource. This is specific to the migration otherwise
 * if would be hoised into a more generic module
 *
 * @protected
 * @param {string} itemId
 * @param {string} resourceName
 * @param {string} [portal]
 * @param {string} [folder]
 * @returns {string}
 */
function getResourceUrl(itemId, resourceName, portal, folder) {
    // default to www.arcgis.com
    var portalUrl = portal || "https://www.arcgis.com/sharing/rest";
    var url = portalUrl + "/content/items/" + itemId + "/resources";
    if (folder) {
        url = url + "/" + folder + "/" + resourceName;
    }
    else {
        url = url + "/" + resourceName;
    }
    return url;
}
//# sourceMappingURL=upgrade-one-dot-one.js.map
/**
 * Given an object, conduct checks to see if it is an indicator
 * @protected
 */
var isIndicator = function (obj) {
    var result = false;
    if (Array.isArray(obj.fields) && obj.fields.length > 0) {
        result = true;
    }
    return result;
};
/**
 * Given the values hash, locate the properties that are Indicators
 * and return an array of cloned objects
 * @protected
 */
var extractIndicators = function (values) {
    return Object.keys(values).reduce(function (acc, prop) {
        var obj = values[prop];
        if (isIndicator(obj)) {
            var clone = cloneObject(obj);
            // we want to keep the prop name as the id
            clone.id = prop;
            acc.push(clone);
        }
        return acc;
    }, []);
};
/**
 * CAS format had the field properties nested but
 * the new format is flattened
 * @protected
 */
var flattenField = function (field) {
    return {
        id: field.id,
        name: field.field.name,
        alias: field.field.alias,
        type: field.field.type
    };
};
/**
 * Given the indicator value object (from the Initiative), extract
 * the properties to create the .source hash
 * @protected
 */
var convertIndicatorValueToSource = function (indicator) {
    return {
        type: "Feature Layer",
        url: indicator.url,
        itemId: indicator.itemId,
        layerId: indicator.layerId,
        name: indicator.name || indicator.id,
        mappings: indicator.fields.map(flattenField)
    };
};
/**
 * Convert the "source" information
 * @protected
 */
var convertIndicator = function (indicator) {
    var result = {
        id: indicator.id,
        type: "Data",
        name: indicator.name || indicator.id,
        definition: {
            description: indicator.name || indicator.id
        },
        source: convertIndicatorValueToSource(indicator)
    };
    return result;
};
/**
 * Given the values hash that contains indicators, extract them
 * convert them, and return the indicators hash
 * @protected
 */
var convertInitiativeIndicators = function (values) {
    return extractIndicators(values).map(convertIndicator);
};
/**
 * Given a Step object, return a new object with the
 * updated schema
 * @protected
 */
var convertStep = function (step) {
    // can't use object spread b/c there are props we don't want to carry forward
    var templates = step.templates || [];
    var items = step.items || [];
    return {
        title: step.title,
        description: step.description,
        id: step.id,
        templateIds: templates.map(byId),
        itemIds: items.map(byId)
    };
};
/**
 * given the array of steps (prop names), construct an array
 * of the actual step objects while also falttening templates
 * and items arrays to just ids
 * @protected
 */
var convertSteps = function (steps, values) {
    if (steps && Array.isArray(steps)) {
        return steps.map(function (stepName) {
            return convertStep(values[stepName]);
        });
    }
    else {
        return [];
    }
};
/**
 * Extract the id property from an entry
 *
 * @protected
 * @param {*} entry
 * @returns
 */
function byId(entry) {
    return entry.id;
}
/**
 * Apply the 1.1 --> 2.0 Migration to an Initiative Model
 *
 * @protected
 * @param {IInitiativeModel} model
 * @param {string} [portalUrl]
 * @returns {IInitiativeModel}
 */
function upgradeToTwoDotZero(model, portalUrl) {
    var curVersion = getProp(model, "item.properties.schemaVersion");
    if (curVersion < 2) {
        var clone_1 = cloneObject(model);
        // store the schemaVersion
        clone_1.item.properties.schemaVersion = 2.0;
        // convert the values and values.steps into data.steps
        clone_1.data.steps = convertSteps(clone_1.data.values.steps, clone_1.data.values);
        if (clone_1.data.values.steps) {
            // remove the data.values.steps properties
            clone_1.data.values.steps.forEach(function (propName) {
                delete clone_1.data.values[propName];
            });
            delete clone_1.data.values.steps;
        }
        // convert the indicators
        clone_1.data.indicators = convertInitiativeIndicators(clone_1.data.values);
        return clone_1;
    }
    else {
        return model;
    }
}
//# sourceMappingURL=upgrade-two-dot-zero.js.map
/* Copyright (c) 2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Apply the 2.0 --> 2.1 Migration to an Initiative Model
 *
 * @param model
 * @protected
 */
function upgradeToTwoDotOne(model) {
    var currVersion = getProp(model, "item.properties.schemaVersion");
    if (currVersion < 2.1) {
        var clone = cloneObject(model);
        // store the schemaVersion
        clone.item.properties.schemaVersion = 2.1;
        var collaborationGroupId = getProp(model, "item.properties.groupId");
        if (collaborationGroupId) {
            clone.item.properties.collaborationGroupId = collaborationGroupId;
            delete clone.item.properties.groupId;
        }
        return clone;
    }
    else {
        return model;
    }
}
//# sourceMappingURL=upgrade-two-dot-one.js.map
/* Copyright (c) 2020 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Apply the 2.1 --> 2.2 Migration to an Initiative Model
 * Note: we need this migration to run every time for now, so we
 * will always run it
 *
 * @param model
 * @protected
 */
function upgradeToTwoDotTwo(model) {
    // const currVersion = getProp(model, "item.properties.schemaVersion");
    // if (currVersion < 2.2) {
    var clone = cloneObject(model);
    // store the schemaVersion
    // clone.item.properties.schemaVersion = 2.2;
    var steps = getProp(clone, "data.steps");
    var templateIdsFromSteps = getTemplateIdsFromSteps(steps);
    var recommendedTemplates = getProp(clone, "data.recommendedTemplates") || [];
    var allTemplateIds = templateIdsFromSteps.concat(recommendedTemplates);
    // strip out duplicates
    clone.data.recommendedTemplates = allTemplateIds.reduce(function (acc, id) {
        if (acc.indexOf(id) < 0) {
            acc.push(id);
        }
        return acc;
    }, []);
    return clone;
    // } else {
    //   return model;
    // }
}
/**
 * Reduce the solution template ids out of the steps array
 * @param steps is the steps array from an initiative item model.data
 */
function getTemplateIdsFromSteps(steps) {
    var templateIds = [];
    if (Array.isArray(steps)) {
        templateIds = steps.reduce(function (acc, step) {
            if (getProp(step, "templateIds.length")) {
                return acc.concat(step.templateIds);
            }
            return acc;
        }, []);
    }
    return templateIds;
}
//# sourceMappingURL=upgrade-two-dot-two.js.map
/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Current Schema Version
 * @protected
 */
var CURRENT_SCHEMA_VERSION = 2.2;
/**
 * Handle Initiative Schema Migrations.
 * If the model is on the current schema, the model object is returned.
 * If a schema migration is applied, a new object will be returned.
 *
 * @export
 * @param {IInitiativeModelFoo} model
 * @param {string} portalUrl
 * @returns {IInitiativeModel}
 */
function migrateSchema(model, portalUrl) {
    // if the model is not on the current schema, we apply all of them
    // the individual migrations will early-exit if the item version
    // is at or above the migration
    if (getProp(model, "item.properties.schemaVersion") === CURRENT_SCHEMA_VERSION) {
        return model;
    }
    else {
        // apply upgrade functions in order...
        model = applyInitialSchema(model);
        model = upgradeToOneDotOne(model, portalUrl);
        model = upgradeToTwoDotZero(model);
        model = upgradeToTwoDotOne(model);
        model = upgradeToTwoDotTwo(model);
        // etc
        return model;
    }
}
//# sourceMappingURL=migrator.js.map
/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * getInitiative('3ef...')
 *  .then(initiativeModel => {
 *    // work with the initiative model
 *  })
 * ```
 * Get the initiative item + data in one call. This will also apply schema upgrades
 *
 *
 * @param id - Initiative Item Id
 * @param requestOptions - Initiative request options that may have authentication manager
 * @returns A Promise that will resolve with the Initiative item and data
 * @export
 */
function getInitiative(id, requestOptions) {
    // if we have specifically requested the data...
    return Promise.all([
        getItem(id, requestOptions),
        getItemData(id, requestOptions)
    ])
        .then(function (result) {
        // shape this into a model
        return {
            item: result[0],
            data: result[1]
        };
    })
        .then(function (model) {
        return migrateSchema(model, getPortalUrl(requestOptions));
    });
}
//# sourceMappingURL=get.js.map
var getUserTag = function (initiativeId) { return "hubInitiativeId|" + initiativeId; };
var initiativeIdFromUserTag = function (tag) {
    return tag.replace(/^hubInitiativeId\|/, "");
};
var initiativeIdFromGroupTag = function (tag) {
    return tag.replace(/^hubInitiativeFollowers\|/, "");
};
var getUpdateUrl = function (session) { return getUserUrl(session) + "/update"; };
var currentlyFollowedInitiativesByUserTag = function (user) {
    return user.tags.map(initiativeIdFromUserTag);
};
var currentlyFollowedInitiativesByGroupMembership = function (user) {
    return user.groups
        .map(function (group) { return group.tags; })
        .reduce(function (acc, item) { return acc.concat(item); }, [])
        .filter(function (tags) { return tags.indexOf("hubInitiativeFollowers|") === 0; })
        .map(initiativeIdFromGroupTag);
};
var currentlyFollowedInitiatives = function (user) {
    var byUserTags = currentlyFollowedInitiativesByUserTag(user);
    var byGroupMembership = currentlyFollowedInitiativesByGroupMembership(user);
    return __spreadArrays(byUserTags, byGroupMembership).filter(unique);
};
var isUserFollowing = function (user, initiativeId) {
    return currentlyFollowedInitiatives(user).indexOf(initiativeId) > -1;
};
/**
 * ```js
 * import { followInitiative } from "@esri/hub-initiatives";
 * //
 * followInitiative({
 *   initiativeId,
 *   authentication
 * })
 *   .then(response)
 * ```
 * Follow an initiative.
 */
function followInitiative(requestOptions) {
    // we dont call getUser() because the tags are cached and will be mutating
    return request(getUserUrl(requestOptions.authentication), {
        authentication: requestOptions.authentication
    })
        .then(function (user) {
        // don't update if already following
        if (isUserFollowing(user, requestOptions.initiativeId)) {
            return Promise.reject("user is already following this initiative.");
        }
        // if not already following, pass the user on
        return user;
    })
        .then(function (user) {
        return getInitiative(requestOptions.initiativeId, requestOptions).then(function (initiative) {
            return ({
                user: user,
                initiative: initiative,
                hasFollowersGroup: false
            });
        });
    })
        .then(function (obj) {
        // if the initiative has a followersGroupId
        var groupId = getProp(obj, "initiative.item.properties.followersGroupId");
        if (groupId) {
            // attempt to join it
            return joinGroup({
                id: groupId,
                authentication: requestOptions.authentication
            }).then(function (groupJoinResponse) {
                obj.hasFollowersGroup = groupJoinResponse.success;
                return obj;
            });
        }
        return obj;
    })
        .then(function (obj) {
        if (!obj.hasFollowersGroup) {
            // else add the tag to the user
            var tag = getUserTag(requestOptions.initiativeId);
            var tags = JSON.parse(JSON.stringify(obj.user.tags));
            tags.push(tag);
            return request(getUpdateUrl(requestOptions.authentication), {
                params: { tags: tags },
                authentication: requestOptions.authentication
            });
        }
        // the initiative has a followers group and we successfully joined it
        return { success: true, username: obj.user.username };
    });
}
/**
 * ```js
 * import { unfollowInitiative } from "@esri/hub-initiatives";
 * //
 * unfollowInitiative({
 *   initiativeId,
 *   authentication
 * })
 *   .then(response)
 * ```
 * Un-follow an initiative.
 */
function unfollowInitiative(requestOptions) {
    // we dont call getUser() because the tags are cached and will be mutating
    return request(getUserUrl(requestOptions.authentication), {
        authentication: requestOptions.authentication
    })
        .then(function (user) {
        // don't update if not already following
        if (!isUserFollowing(user, requestOptions.initiativeId)) {
            return Promise.reject("user is not following this initiative.");
        }
        // if already following, pass the user on
        return user;
    })
        .then(function (user) {
        var tag = getUserTag(requestOptions.initiativeId);
        var tags = JSON.parse(JSON.stringify(user.tags));
        if (tags.indexOf(tag) > -1) {
            // https://stackoverflow.com/questions/9792927/javascript-array-search-and-remove-string
            var index = tags.indexOf(tag);
            tags.splice(index, 1);
            // clear the last tag by passing ",".
            if (tags.length === 0) {
                tags.push(",");
            }
            return request(getUpdateUrl(requestOptions.authentication), {
                params: { tags: tags },
                authentication: requestOptions.authentication
            }).then(function (_) { return user; });
        }
        return user;
    })
        .then(function (user) {
        return getInitiative(requestOptions.initiativeId, requestOptions).then(function (initiative) { return ({ user: user, initiative: initiative }); });
    })
        .then(function (obj) {
        // if there is an initiative followers group and the user is a member, attempt to leave it
        var groupId = getProp(obj, "initiative.item.properties.followersGroupId");
        if (groupId &&
            currentlyFollowedInitiativesByGroupMembership(obj.user).indexOf(requestOptions.initiativeId) > -1) {
            return leaveGroup({
                id: groupId,
                authentication: requestOptions.authentication
            }).then(function (groupLeaveResponse) {
                return { success: true, username: obj.user.username };
            });
        }
        return { success: true, username: obj.user.username };
    });
}
//# sourceMappingURL=follow.js.map
var hubFollowButtonCss = ".follow-icon{height:15px;width:15px;vertical-align:baseline;padding-right:5px;fill:currentColor}";
var HubFollowButton = /** @class */ (function () {
    function HubFollowButton(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        /**
         * Follow icon
         */
        this.icon = h("svg", { class: "follow-icon", viewBox: "0 0 120 120", width: "100%", height: "100%" }, h("circle", { cx: "18.385", cy: "101.615", r: "18.385" }), h("path", { d: "M-1.031 61c32.533 0 59 26.468 59 59s-26.467 59-59 59-59-26.468-59-59 26.467-59 59-59m0-23c-45.288 0-82 36.713-82 82s36.712 82 82 82 82-36.713 82-82-36.712-82-82-82z" }), h("path", { d: "M.154 23.041c53.349 0 96.75 43.402 96.75 96.75s-43.402 96.75-96.75 96.75-96.75-43.402-96.75-96.75 43.402-96.75 96.75-96.75m0-23c-66.136 0-119.75 53.615-119.75 119.75s53.614 119.75 119.75 119.75c66.135 0 119.75-53.615 119.75-119.75S66.289.041.154.041z" }));
        /**
         * url of the ArcGIS Online organization
         */
        this.orgurl = "https://www.arcgis.com";
        /**
         * Denotes whether the user is already following the configured initiative.
         */
        this.following = false;
        /**
         * Text to show in the string when not yet followed
         */
        this.followtext = "Follow Our Initiative";
        /**
         * Text to show in the string for user to unfollw
         */
        this.unfollowtext = "Unfollow Our Initiative";
        /**
         * Text to display on the button
         */
        this.callToActionText = this.followtext;
        this.triggerFollow = function () {
            return authenticateUser(_this.clientid, _this.orgurl).then(function (session) {
                _this.session = session;
                return _this.toggleFollow();
            });
        };
        this.toggleFollow = function () {
            console.log("toggleFollow", _this.following);
            if (!_this.following) {
                return followInitiative({
                    initiativeId: _this.initiativeid,
                    authentication: UserSession.deserialize(_this.session)
                })
                    .then(function (response) {
                    if (response.success)
                        return Promise.resolve(response);
                })
                    .catch(function (err) {
                    if (err === "user is already following this initiative.")
                        return Promise.resolve();
                })
                    .then(function () {
                    _this.callToActionText = _this.followtext;
                    _this.following = true;
                    return { success: true };
                });
            }
            else {
                return unfollowInitiative({
                    initiativeId: _this.initiativeid,
                    authentication: UserSession.deserialize(_this.session)
                })
                    .then(function (response) {
                    if (response.success)
                        return Promise.resolve();
                })
                    .catch(function (err) {
                    if (err === "user is not following this initiative.")
                        return Promise.resolve();
                })
                    .then(function () {
                    _this.callToActionText = _this.unfollowtext;
                    _this.following = false;
                    return { success: true };
                });
            }
        };
    }
    HubFollowButton.prototype.render = function () {
        return h("hub-button", { text: this.callToActionText, action: this.triggerFollow, icon: this.icon });
    };
    return HubFollowButton;
}());
HubFollowButton.style = hubFollowButtonCss;
export { HubFollowButton as hub_follow_button };
