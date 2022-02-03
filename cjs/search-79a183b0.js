'use strict';

const getPortalUrl = require('./get-portal-url-674469a6.js');
const cleanUrl = require('./clean-url-e0d82cce.js');

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Method used internally to surface messages to developers.
 */
function warn(message) {
    if (console && console.warn) {
        console.warn.apply(console, [message]);
    }
}

/* Copyright (c) 2018-2021 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * `SearchQueryBuilder` can be used to construct the `q` param for
 * [`searchItems`](/arcgis-rest-js/api/portal/searchItems#searchItems-search) or
 * [`searchGroups`](/arcgis-rest-js/api/portal/searchGroups#searchGroups-search).
 * By chaining methods, it helps build complex search queries.
 *
 * ```js
 * const startDate = new Date("2020-01-01");
 * const endDate = new Date("2020-09-01");
 * const query = new SearchQueryBuilder()
 *  .match("Patrick")
 *  .in("owner")
 *  .and()
 *  .from(startDate)
 *  .to(endDate)
 *  .in("created")
 *  .and()
 *  .startGroup()
 *    .match("Web Mapping Application")
 *    .in("type")
 *    .or()
 *    .match("Mobile Application")
 *    .in("type")
 *    .or()
 *    .match("Application")
 *    .in("type")
 *  .endGroup()
 *  .and()
 *  .match("Demo App");
 *
 * searchItems(query).then((res) => {
 *   console.log(res.results);
 * });
 * ```
 *
 * Will search for items matching
 * ```
 * "owner: Patrick AND created:[1577836800000 TO 1598918400000] AND (type:"Web Mapping Application" OR type:"Mobile Application" OR type:Application) AND Demo App"
 * ```
 */
var SearchQueryBuilder = /** @class */ (function () {
    /**
     * @param q An existing query string to start building from.
     */
    function SearchQueryBuilder(q) {
        if (q === void 0) { q = ""; }
        this.termStack = [];
        this.rangeStack = [];
        this.openGroups = 0;
        this.q = q;
    }
    /**
     * Defines strings to search for.
     *
     * ```js
     * const query = new SearchQueryBuilder()
     *   .match("My Layer")
     * ```
     *
     * @param terms strings to search for.
     */
    SearchQueryBuilder.prototype.match = function () {
        var terms = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            terms[_i] = arguments[_i];
        }
        this.termStack = this.termStack.concat(terms);
        return this;
    };
    /**
     * Defines fields to search in. You can pass `"*"` or call this method without arguments to search a default set of fields
     *
     * ```js
     * const query = new SearchQueryBuilder()
     *   .match("My Layer")
     *   .in("title")
     * ```
     *
     * @param field The field to search for the previous match in.
     */
    SearchQueryBuilder.prototype.in = function (field) {
        var fn = "`in(" + (field ? "\"" + field + "\"" : "") + ")`";
        if (!this.hasRange && !this.hasTerms) {
            warn(
            // apparently-p-rettier-ignore causes some
            fn + " was called with no call to `match(...)` or `from(...)`/`to(...)`. Your query was not modified.");
            return this;
        }
        if (field && field !== "*") {
            this.q += field + ":";
        }
        return this.commit();
    };
    /**
     * Starts a new search group.
     *
     * ```js
     * const query = new SearchQueryBuilder()
     *   .startGroup()
     *     .match("Lakes")
     *     .in("title")
     *   .endGroup()
     *   .or()
     *   .startGroup()
     *     .match("Rivers")
     *     .in("title")
     *   .endGroup()
     * ```
     */
    SearchQueryBuilder.prototype.startGroup = function () {
        this.commit();
        if (this.openGroups > 0) {
            this.q += " ";
        }
        this.openGroups++;
        this.q += "(";
        return this;
    };
    /**
     * Ends a search group.
     *
     * ```js
     * const query = new SearchQueryBuilder()
     *   .startGroup()
     *     .match("Lakes")
     *     .in("title")
     *   .endGroup()
     *   .or()
     *   .startGroup()
     *     .match("Rivers")
     *     .in("title")
     *   .endGroup()
     * ```
     */
    SearchQueryBuilder.prototype.endGroup = function () {
        if (this.openGroups <= 0) {
            warn("`endGroup(...)` was called without calling `startGroup(...)` first. Your query was not modified.");
            return this;
        }
        this.commit();
        this.openGroups--;
        this.q += ")";
        return this;
    };
    /**
     * Joins two sets of queries with an `AND` clause.
     *
     * ```js
     * const query = new SearchQueryBuilder()
     *   .match("Lakes")
     *   .in("title")
     *   .and()
     *   .match("Rivers")
     *   .in("title")
     * ```
     */
    SearchQueryBuilder.prototype.and = function () {
        return this.addModifier("and");
    };
    /**
     * Joins two sets of queries with an `OR` clause.
     *
     * ```js
     * const query = new SearchQueryBuilder()
     *   .match("Lakes")
     *   .in("title")
     *   .or()
     *   .match("Rivers")
     *   .in("title")
     * ```
     */
    SearchQueryBuilder.prototype.or = function () {
        return this.addModifier("or");
    };
    /**
     * Joins two sets of queries with a `NOT` clause. Another option for filtering results is the [prohibit operator '-'](https://developers.arcgis.com/rest/users-groups-and-items/search-reference.htm#ESRI_SECTION1_5C6C35DB9E4A4F4492C5B937BDA2BF67).
     *
     * ```js
     * // omit results with "Rivers" in their title
     * const query = new SearchQueryBuilder()
     *   .not()
     *   .match("Rivers")
     *   .in("title")
     *
     * // equivalent
     * const query = new SearchQueryBuilder()
     *   .match("Rivers")
     *   .in("-title")
     * ```
     */
    SearchQueryBuilder.prototype.not = function () {
        return this.addModifier("not");
    };
    /**
     * Begins a new range query.
     *
     * ```js
     *
     * const NEWYEARS = new Date("2020-01-01")
     * const TODAY = new Date()
     *
     * const query = new SearchQueryBuilder()
     *   .from(NEWYEARS)
     *   .to(TODAY)
     *   .in("created")
     * ```
     */
    SearchQueryBuilder.prototype.from = function (term) {
        if (this.hasTerms) {
            warn(
            // apparently-p*rettier-ignore causes prettier to strip *all* comments O_o
            "`from(...)` is not allowed after `match(...)` try using `.from(...).to(...).in(...)`. Optionally, you may see this because dates are incorrectly formatted. Dates should be a primative Date value, aka a number in milliseconds or Date object, ie new Date(\"2020-01-01\").  Your query was not modified.");
            return this;
        }
        this.rangeStack[0] = term;
        return this;
    };
    /**
     * Ends a range query.
     *
     * ```js
     * const query = new SearchQueryBuilder()
     *   .from(yesterdaysDate)
     *   .to(todaysDate)
     *   .in("created")
     * ```
     */
    SearchQueryBuilder.prototype.to = function (term) {
        if (this.hasTerms) {
            warn(
            // apparently-p*rettier-ignore causes prettier to strip *all* comments O_o
            "`to(...)` is not allowed after `match(...)` try using `.from(...).to(...).in(...)`. Optionally, you may see this because dates are incorrectly formatted. Dates should be a primative Date value, aka a number in milliseconds or Date object, ie new Date(\"2020-01-01\"). Your query was not modified.");
            return this;
        }
        this.rangeStack[1] = term;
        return this;
    };
    /**
     * Boosts the previous term to increase its rank in the results.
     *
     * ```js
     * const query = new SearchQueryBuilder()
     *   .match("Lakes")
     *   .in("title")
     *   .or()
     *   .match("Rivers")
     *   .in("title")
     *   .boost(3)
     * ```
     */
    SearchQueryBuilder.prototype.boost = function (num) {
        this.commit();
        this.q += "^" + num;
        return this;
    };
    /**
     * Returns the current query string. Called internally when the request is made.
     */
    SearchQueryBuilder.prototype.toParam = function () {
        this.commit();
        this.cleanup();
        return this.q;
    };
    /**
     * Returns a new instance of `SearchQueryBuilder` based on the current instance.
     */
    SearchQueryBuilder.prototype.clone = function () {
        this.commit();
        this.cleanup();
        return new SearchQueryBuilder(this.q + "");
    };
    SearchQueryBuilder.prototype.addModifier = function (modifier) {
        if (this.currentModifer) {
            warn(
            // apparently-p*rettier-ignore causes prettier to strip *all* comments O_o
            "You have called `" + this.currentModifer + "()` after `" + modifier + "()`. Your current query was not modified.");
            return this;
        }
        this.commit();
        if (this.q === "" && modifier !== "not") {
            warn("You have called `" + modifier + "()` without calling another method to modify your query first. Try calling `match()` first.");
            return this;
        }
        this.currentModifer = modifier;
        this.q += this.q === "" ? "" : " ";
        this.q += modifier.toUpperCase() + " ";
        return this;
    };
    SearchQueryBuilder.prototype.needsQuotes = function (s) {
        return /\s|:/g.test(s);
    };
    SearchQueryBuilder.prototype.formatTerm = function (term) {
        if (term instanceof Date) {
            return term.getTime();
        }
        if (typeof term === "string" && this.needsQuotes(term)) {
            return "\"" + term + "\"";
        }
        return term;
    };
    SearchQueryBuilder.prototype.commit = function () {
        var _this = this;
        this.currentModifer = undefined;
        if (this.hasRange) {
            this.q += "[" + this.formatTerm(this.rangeStack[0]) + " TO " + this.formatTerm(this.rangeStack[1]) + "]";
            this.rangeStack = [undefined, undefined];
        }
        if (this.hasTerms) {
            this.q += this.termStack
                .map(function (term) {
                return _this.formatTerm(term);
            })
                .join(" ");
            this.termStack = [];
        }
        return this;
    };
    Object.defineProperty(SearchQueryBuilder.prototype, "hasTerms", {
        get: function () {
            return this.termStack.length > 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SearchQueryBuilder.prototype, "hasRange", {
        get: function () {
            return this.rangeStack.length && this.rangeStack[0] && this.rangeStack[1];
        },
        enumerable: false,
        configurable: true
    });
    SearchQueryBuilder.prototype.cleanup = function () {
        // end a group if we have started one
        if (this.openGroups > 0) {
            warn(
            // apparently-p*rettier-ignore causes prettier to strip *all* comments O_o
            "Automatically closing " + this.openGroups + " group(s). You can use `endGroup(...)` to remove this warning.");
            while (this.openGroups > 0) {
                this.q += ")";
                this.openGroups--;
            }
        }
        var oldQ = this.q;
        this.q = oldQ.replace(/( AND ?| NOT ?| OR ?)*$/, "");
        if (oldQ !== this.q) {
            warn("`startGroup(...)` was called without calling `endGroup(...)` first. Your query was not modified.");
        }
        // clear empty groups
        this.q = this.q.replace(/(\(\))*/, "");
    };
    return SearchQueryBuilder;
}());

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
function genericSearch(search, searchType) {
    var options;
    if (typeof search === "string" || search instanceof SearchQueryBuilder) {
        options = {
            httpMethod: "GET",
            params: {
                q: search,
            },
        };
    }
    else {
        // searchUserAccess has one (knonw) valid value: "groupMember"
        options = getPortalUrl.appendCustomParams(search, [
            "q",
            "num",
            "start",
            "sortField",
            "sortOrder",
            "searchUserAccess",
            "searchUserName",
            "filter",
            "countFields",
            "countSize",
            "categories",
            "categoryFilters",
        ], {
            httpMethod: "GET",
        });
    }
    var path;
    switch (searchType) {
        case "item":
            path = "/search";
            break;
        case "group":
            path = "/community/groups";
            break;
        case "groupContent":
            // Need to have groupId property to do group contents search,
            // cso filter out all but ISearchGroupContentOptions
            if (typeof search !== "string" &&
                !(search instanceof SearchQueryBuilder) &&
                search.groupId) {
                path = "/content/groups/" + search.groupId + "/search";
            }
            else {
                return Promise.reject(new Error("you must pass a `groupId` option to `searchGroupContent`"));
            }
            break;
        default:
            // "users"
            path = "/portals/self/users/search";
            break;
    }
    var url = getPortalUrl.getPortalUrl(options) + path;
    // send the request
    return cleanUrl.request(url, options).then(function (r) {
        if (r.nextStart && r.nextStart !== -1) {
            r.nextPage = function () {
                var newOptions;
                if (typeof search === "string" ||
                    search instanceof SearchQueryBuilder) {
                    newOptions = {
                        q: search,
                        start: r.nextStart,
                    };
                }
                else {
                    newOptions = search;
                    newOptions.start = r.nextStart;
                }
                return genericSearch(newOptions, searchType);
            };
        }
        return r;
    });
}

/* Copyright (c) 2018-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { searchItems } from "@esri/arcgis-rest-portal";
 * //
 * searchItems('water')
 *   .then(response) // response.total => 355
 * ```
 * Search a portal for items. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/search.htm) for more information.
 *
 * @param search - A string or RequestOptions object to pass through to the endpoint.
 * @returns A Promise that will resolve with the data from the response.
 */
function searchItems(search) {
    return genericSearch(search, "item");
}

exports.genericSearch = genericSearch;
exports.searchItems = searchItems;
