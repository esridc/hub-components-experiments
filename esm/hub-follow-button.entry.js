import { r as registerInstance, h } from './index-9fca3863.js';
import { a as authenticateUser } from './utils-49410b4c.js';
import { g as getProp } from './get-prop-a0541ce0.js';
import { b as cloneObject, u as unique } from './util-ddc75513.js';
import { g as getItem, a as getItemData } from './get-9aed8a75.js';
import { g as getPortalApiUrl } from './get-portal-api-url-fba2ecae.js';
import { r as request } from './clean-url-83c51f70.js';
import { g as getPortalUrl } from './get-portal-url-fdc441e5.js';
import { j as joinGroup, l as leaveGroup } from './join-4a6553af.js';
import { U as UserSession } from './UserSession-1faae0f0.js';

/* Copyright (c) 2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Helper that returns the [user](https://developers.arcgis.com/rest/users-groups-and-items/user.htm) for a given portal.
 *
 * @param session
 * @returns User url to be used in API requests.
 */
function getUserUrl(session) {
    return getPortalUrl(session) + "/community/users/" + encodeURIComponent(session.username);
}

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
    const curVersion = getProp(model, "item.properties.schemaVersion");
    // if no current version or it's below 1
    if (!curVersion || curVersion < 1) {
        // clone the model because we play by immutable rules
        const clone = cloneObject(model);
        // console.debug(`------- CLONE ---------`);
        // console.debug(JSON.stringify(clone, null, 2));
        // console.debug(`------- CLONE ---------`);
        // ensure some properties exist...
        if (!clone.data.values) {
            clone.data.values = {};
        }
        if (!clone.item.properties) {
            clone.item.properties = {};
        }
        // set the schema version...
        clone.item.properties.schemaVersion = 1.0;
        let isTemplate = false;
        if (clone.item.typeKeywords) {
            isTemplate =
                clone.item.typeKeywords.indexOf("hubInitiativeTemplate") >= 0;
        }
        // ensure source is in item.properties if it has a parent...
        const hasParent = !!clone.data.source;
        if (hasParent && clone.item.properties.source !== clone.data.source) {
            clone.item.properties.source = clone.data.source;
        }
        // convert configuratinSettings to steps array...
        // NOTE: this is only for 'templates', or Custom Initiatives
        if (clone.data.configurationSettings) {
            const config = cloneObject(clone.data.configurationSettings);
            delete clone.data.configurationSettings;
            // get the steps entry...
            const stepCategory = config.find((el) => {
                return el.category === "Steps";
            });
            // hoist step names into an array
            clone.data.values.steps = stepCategory.fields.map((entry) => {
                return entry.fieldName;
            });
            // move the label and tooltip to title and description, in the values.<fieldName> prop
            stepCategory.fields.forEach((entry) => {
                // ensure values prop exists...
                if (!clone.data.values[entry.fieldName]) {
                    clone.data.values[entry.fieldName] = {};
                }
                // assign in values
                clone.data.values[entry.fieldName].title = entry.label;
                clone.data.values[entry.fieldName].description = entry.tooltip;
                clone.data.values[entry.fieldName].id = entry.fieldName;
                // if a .items array exists, rename that to .templates
                if (clone.data.values[entry.fieldName].items) {
                    // if this is a template, then move items to templates...
                    if (isTemplate) {
                        clone.data.values[entry.fieldName].templates =
                            clone.data.values[entry.fieldName].items;
                        delete clone.data.values[entry.fieldName].items;
                    }
                }
                else {
                    // ensure empty arrays
                    clone.data.values[entry.fieldName].items = [];
                    clone.data.values[entry.fieldName].templates = [];
                }
            });
        }
        return clone;
    }
    else {
        return model;
    }
}

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
    const curVersion = getProp(model, "item.properties.schemaVersion");
    if (curVersion < 1.1) {
        const clone = cloneObject(model);
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
    const portalUrl = portal || "https://www.arcgis.com/sharing/rest";
    let url = `${portalUrl}/content/items/${itemId}/resources`;
    if (folder) {
        url = `${url}/${folder}/${resourceName}`;
    }
    else {
        url = `${url}/${resourceName}`;
    }
    return url;
}

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Given an object, conduct checks to see if it is an indicator
 * @protected
 */
const isIndicator = function (obj) {
    let result = false;
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
const extractIndicators = function (values) {
    return Object.keys(values).reduce((acc, prop) => {
        const obj = values[prop];
        if (isIndicator(obj)) {
            const clone = cloneObject(obj);
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
const flattenField = function (field) {
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
const convertIndicatorValueToSource = function (indicator) {
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
const convertIndicator = function (indicator) {
    const result = {
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
const convertInitiativeIndicators = function (values) {
    return extractIndicators(values).map(convertIndicator);
};
/**
 * Given a Step object, return a new object with the
 * updated schema
 * @protected
 */
const convertStep = function (step) {
    // can't use object spread b/c there are props we don't want to carry forward
    const templates = step.templates || [];
    const items = step.items || [];
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
const convertSteps = function (steps, values) {
    if (steps && Array.isArray(steps)) {
        return steps.map(stepName => {
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
    const curVersion = getProp(model, "item.properties.schemaVersion");
    if (curVersion < 2) {
        const clone = cloneObject(model);
        // store the schemaVersion
        clone.item.properties.schemaVersion = 2.0;
        // convert the values and values.steps into data.steps
        clone.data.steps = convertSteps(clone.data.values.steps, clone.data.values);
        if (clone.data.values.steps) {
            // remove the data.values.steps properties
            clone.data.values.steps.forEach((propName) => {
                delete clone.data.values[propName];
            });
            delete clone.data.values.steps;
        }
        // convert the indicators
        clone.data.indicators = convertInitiativeIndicators(clone.data.values);
        return clone;
    }
    else {
        return model;
    }
}

/* Copyright (c) 2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Apply the 2.0 --> 2.1 Migration to an Initiative Model
 *
 * @param model
 * @protected
 */
function upgradeToTwoDotOne(model) {
    const currVersion = getProp(model, "item.properties.schemaVersion");
    if (currVersion < 2.1) {
        const clone = cloneObject(model);
        // store the schemaVersion
        clone.item.properties.schemaVersion = 2.1;
        const collaborationGroupId = getProp(model, "item.properties.groupId");
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
    const clone = cloneObject(model);
    // store the schemaVersion
    // clone.item.properties.schemaVersion = 2.2;
    const steps = getProp(clone, "data.steps");
    const templateIdsFromSteps = getTemplateIdsFromSteps(steps);
    const recommendedTemplates = getProp(clone, "data.recommendedTemplates") || [];
    const allTemplateIds = templateIdsFromSteps.concat(recommendedTemplates);
    // strip out duplicates
    clone.data.recommendedTemplates = allTemplateIds.reduce((acc, id) => {
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
    let templateIds = [];
    if (Array.isArray(steps)) {
        templateIds = steps.reduce((acc, step) => {
            if (getProp(step, "templateIds.length")) {
                return acc.concat(step.templateIds);
            }
            return acc;
        }, []);
    }
    return templateIds;
}

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Current Schema Version
 * @protected
 */
const CURRENT_SCHEMA_VERSION = 2.2;
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
        .then(result => {
        // shape this into a model
        return {
            item: result[0],
            data: result[1]
        };
    })
        .then(model => {
        return migrateSchema(model, getPortalApiUrl(requestOptions));
    });
}

const getUserTag = (initiativeId) => `hubInitiativeId|${initiativeId}`;
const initiativeIdFromUserTag = (tag) => tag.replace(/^hubInitiativeId\|/, "");
const initiativeIdFromGroupTag = (tag) => tag.replace(/^hubInitiativeFollowers\|/, "");
const getUpdateUrl = (session) => `${getUserUrl(session)}/update`;
const currentlyFollowedInitiativesByUserTag = (user) => user.tags.map(initiativeIdFromUserTag);
const currentlyFollowedInitiativesByGroupMembership = (user) => {
    return user.groups
        .map(group => group.tags)
        .reduce((acc, item) => acc.concat(item), [])
        .filter(tags => tags.indexOf("hubInitiativeFollowers|") === 0)
        .map(initiativeIdFromGroupTag);
};
const currentlyFollowedInitiatives = (user) => {
    const byUserTags = currentlyFollowedInitiativesByUserTag(user);
    const byGroupMembership = currentlyFollowedInitiativesByGroupMembership(user);
    return [...byUserTags, ...byGroupMembership].filter(unique);
};
const isUserFollowing = (user, initiativeId) => currentlyFollowedInitiatives(user).indexOf(initiativeId) > -1;
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
        .then(user => {
        // don't update if already following
        if (isUserFollowing(user, requestOptions.initiativeId)) {
            return Promise.reject(`user is already following this initiative.`);
        }
        // if not already following, pass the user on
        return user;
    })
        .then(user => {
        return getInitiative(requestOptions.initiativeId, requestOptions).then((initiative) => ({
            user,
            initiative,
            hasFollowersGroup: false
        }));
    })
        .then(obj => {
        // if the initiative has a followersGroupId
        const groupId = getProp(obj, "initiative.item.properties.followersGroupId");
        if (groupId) {
            // attempt to join it
            return joinGroup({
                id: groupId,
                authentication: requestOptions.authentication
            }).then(groupJoinResponse => {
                obj.hasFollowersGroup = groupJoinResponse.success;
                return obj;
            });
        }
        return obj;
    })
        .then(obj => {
        if (!obj.hasFollowersGroup) {
            // else add the tag to the user
            const tag = getUserTag(requestOptions.initiativeId);
            const tags = JSON.parse(JSON.stringify(obj.user.tags));
            tags.push(tag);
            return request(getUpdateUrl(requestOptions.authentication), {
                params: { tags },
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
        .then(user => {
        // don't update if not already following
        if (!isUserFollowing(user, requestOptions.initiativeId)) {
            return Promise.reject(`user is not following this initiative.`);
        }
        // if already following, pass the user on
        return user;
    })
        .then(user => {
        const tag = getUserTag(requestOptions.initiativeId);
        const tags = JSON.parse(JSON.stringify(user.tags));
        if (tags.indexOf(tag) > -1) {
            // https://stackoverflow.com/questions/9792927/javascript-array-search-and-remove-string
            const index = tags.indexOf(tag);
            tags.splice(index, 1);
            // clear the last tag by passing ",".
            if (tags.length === 0) {
                tags.push(",");
            }
            return request(getUpdateUrl(requestOptions.authentication), {
                params: { tags },
                authentication: requestOptions.authentication
            }).then(_ => user);
        }
        return user;
    })
        .then(user => {
        return getInitiative(requestOptions.initiativeId, requestOptions).then((initiative) => ({ user, initiative }));
    })
        .then(obj => {
        // if there is an initiative followers group and the user is a member, attempt to leave it
        const groupId = getProp(obj, "initiative.item.properties.followersGroupId");
        if (groupId &&
            currentlyFollowedInitiativesByGroupMembership(obj.user).indexOf(requestOptions.initiativeId) > -1) {
            return leaveGroup({
                id: groupId,
                authentication: requestOptions.authentication
            }).then(groupLeaveResponse => {
                return { success: true, username: obj.user.username };
            });
        }
        return { success: true, username: obj.user.username };
    });
}

const hubFollowButtonCss = ".follow-icon{height:15px;width:15px;vertical-align:baseline;padding-right:5px;fill:currentColor}";

let HubFollowButton = class {
  constructor(hostRef) {
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
    this.triggerFollow = () => {
      return authenticateUser(this.clientid, this.orgurl).then(session => {
        this.session = session;
        return this.toggleFollow();
      });
    };
    this.toggleFollow = () => {
      console.log("toggleFollow", this.following);
      if (!this.following) {
        return followInitiative({
          initiativeId: this.initiativeid,
          authentication: UserSession.deserialize(this.session)
        })
          .then(response => {
          if (response.success)
            return Promise.resolve(response);
        })
          .catch(err => {
          if (err === `user is already following this initiative.`)
            return Promise.resolve();
        })
          .then(() => {
          this.callToActionText = this.followtext;
          this.following = true;
          return { success: true };
        });
      }
      else {
        return unfollowInitiative({
          initiativeId: this.initiativeid,
          authentication: UserSession.deserialize(this.session)
        })
          .then(response => {
          if (response.success)
            return Promise.resolve();
        })
          .catch(err => {
          if (err === `user is not following this initiative.`)
            return Promise.resolve();
        })
          .then(() => {
          this.callToActionText = this.unfollowtext;
          this.following = false;
          return { success: true };
        });
      }
    };
  }
  render() {
    return h("hub-button", { text: this.callToActionText, action: this.triggerFollow, icon: this.icon });
  }
};
HubFollowButton.style = hubFollowButtonCss;

export { HubFollowButton as hub_follow_button };
