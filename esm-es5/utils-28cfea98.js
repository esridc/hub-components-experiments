import { U as UserSession } from './index-1240aaed.js';
var setUpdateProp = function (object, path, value) {
    if (path.length === 1) {
        object[path[0]] = value;
    }
    else if (path.length === 0)
        ;
    else {
        if (object[path[0]])
            return setUpdateProp(object[path[0]], path.slice(1), value);
        else {
            object[path[0]] = {};
            return setUpdateProp(object[path[0]], path.slice(1), value);
        }
    }
};
var readSessionFromCookie = function () {
    var b = document.cookie.match('(^|[^;]+)\\s*' + 'arcgis_hub_component_auth' + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : undefined;
};
var writeSessionToCookie = function (session) {
    var date = new Date();
    // two week expiration
    date.setTime(date.getTime() + (14 * 24 * 60 * 60 * 1000));
    document.cookie = "arcgis_hub_component_auth=" + session.serialize() + " ; expires=" + date.toUTCString() + " path=/";
};
var deleteSessionCookie = function () {
    document.cookie = "arcgis_hub_component_auth= ; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";
};
function truncateString(input, length) {
    var ending = "...";
    if (input === undefined || input === null) {
        return "";
    }
    else if (input.length > length) {
        return input.substring(0, length - ending.length) + ending;
    }
    else {
        return input;
    }
}
var authenticateUser = function (clientId, orgurl) {
    console.log("authenticateUser", {
        clientId: clientId,
        portal: orgurl + "/sharing/rest",
        redirectUri: window.location.origin + "/authenticate.html"
    });
    var session = readSessionFromCookie();
    return new Promise(function (resolve, _reject) {
        if (!session) {
            // get the host + path without filename
            var pathname = window.location.pathname;
            var path = pathname.substring(0, pathname.lastIndexOf('/')) + "/";
            // register your own app to create a unique clientId
            return UserSession.beginOAuth2({
                clientId: clientId,
                portal: orgurl + "/sharing/rest",
                redirectUri: "" + window.location.origin + path + "authenticate.html",
                popup: true
            })
                .then(function (userSession) {
                writeSessionToCookie(userSession);
                session = userSession.serialize();
                resolve(session);
            }).catch(function (error) {
                console.error("Hub Components auth error", error);
            });
        }
        else {
            resolve(session);
        }
    });
};
export { authenticateUser as a, deleteSessionCookie as d, readSessionFromCookie as r, setUpdateProp as s, truncateString as t, writeSessionToCookie as w };
