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
import { _ as _convertItemToContent, a as _convertHubv3ToContent } from './hub-content-f0cce30b.js';
import { s as searchGroupContent, c as searchItems } from './index-cd1ec6e0.js';
import { s as serialize } from './index-dabce3d1.js';
// TODO: Change hubRequestOptions to better handle different Hub & Portal endpoints (Prod/QA/Enterprise/etc.)
function search(queryParams, hubRequestOptions) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log("hub-search search: queryParams", [queryParams, hubRequestOptions]);
                    if (!(hubRequestOptions === undefined
                        || (hubRequestOptions !== undefined && hubRequestOptions.isPortal))) return [3 /*break*/, 2];
                    return [4 /*yield*/, searchPortal(queryParams, hubRequestOptions)];
                case 1: return [2 /*return*/, _b.sent()];
                case 2: return [4 /*yield*/, searchHub(queryParams, hubRequestOptions)];
                case 3: return [2 /*return*/, _b.sent()];
            }
        });
    });
}
// https://developers.arcgis.com/rest/users-groups-and-items/search.htm
function searchPortal(queryParams, hubRequestOptions) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, query, sortField, sortOrder, match, groupQuery;
        return __generator(this, function (_b) {
            console.log("searchPortal", [queryParams, hubRequestOptions]);
            // TODO: Consider better ways to map terms across multiple parameters
            queryParams.sort = (queryParams.sort || 'modified').replace(/name/, 'title');
            query = [];
            if (queryParams.q === undefined || ((_a = queryParams.q) === null || _a === void 0 ? void 0 : _a.length) === 0) {
                queryParams.q = "*";
            }
            query.push(queryParams.q);
            if (queryParams.owner) {
                query.push("owner:" + queryParams.owner);
            }
            sortField = queryParams.sort;
            sortOrder = queryParams.order || "asc";
            match = queryParams.sort.match(/^-/);
            if (match !== null) {
                sortField = match[1];
                sortOrder = "desc";
            }
            // TODO: clean up "group search" routing
            if (queryParams.customParams !== undefined
                && queryParams.customParams.group !== undefined) {
                return [2 /*return*/, searchGroupContent({
                        groupId: queryParams.customParams.group.id,
                        q: query.join(' AND '),
                        num: queryParams.limit || "10",
                        sortField: sortField,
                        sortOrder: sortOrder,
                        params: {
                            categories: queryParams.customParams.group.categories
                        }
                    }).then(function (results) {
                        return new Promise(function (resolve, _reject) {
                            var output = results.results.map(function (item) { return _convertItemToContent({ item: item }); });
                            resolve({ results: output });
                        });
                    })];
            }
            // Normal, non-group-specific search
            if (queryParams.groups !== undefined && queryParams.groups.length > 0) {
                groupQuery = queryParams.groups.map(function (group) { return "group:" + group; }).join(" OR ");
                query.push("(" + groupQuery + ")");
            }
            console.debug("hub-search searchPortal: queryParams", [queryParams, hubRequestOptions]);
            return [2 /*return*/, searchItems({
                    q: query.join(' AND '),
                    num: queryParams.limit || "10",
                    sortField: sortField,
                    sortOrder: sortOrder,
                    authentication: hubRequestOptions === null || hubRequestOptions === void 0 ? void 0 : hubRequestOptions.authentication
                }).then(function (results) {
                    return new Promise(function (resolve, _reject) {
                        var output = results.results.map(function (item) { return _convertItemToContent({ item: item }); });
                        resolve({ results: output, meta: { total: results.total, count: results.num, start: results.start } });
                    });
                })];
        });
    });
}
// https://gist.github.com/hamhands/b6d1f0f514678b88cdc01070bf006263
function searchHub(queryParams, _hubRequestOptions) {
    return __awaiter(this, void 0, void 0, function () {
        var params, serializedParams, json, results, output;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    queryParams.sort = (queryParams.sort || 'modified').replace(/title/, 'name');
                    params = {
                        q: queryParams.q,
                        sort: queryParams.sort,
                        agg: { fields: "tags,collection,owner,source,hasApi,downloadable", size: queryParams.limit }
                    };
                    params.page = { key: btoa(JSON.stringify({
                            hub: {
                                start: 1,
                                size: queryParams.limit
                            },
                            ago: {
                                start: 1,
                                size: queryParams.limit
                            }
                        })) };
                    if (queryParams.groups !== undefined && queryParams.groups.length > 0) {
                        params.groupIds = queryParams.groups.join(",");
                    }
                    serializedParams = serialize(params);
                    return [4 /*yield*/, fetch(_hubRequestOptions.hubApiUrl + "/api/v3/search?" + serializedParams, {})];
                case 1:
                    json = _b.sent();
                    return [4 /*yield*/, json.json()];
                case 2:
                    results = _b.sent();
                    output = results.data.map(_convertHubv3ToContent);
                    return [2 /*return*/, { results: output }];
            }
        });
    });
}
export { search as s };
