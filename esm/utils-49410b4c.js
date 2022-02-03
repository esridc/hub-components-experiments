import { U as UserSession } from './UserSession-1faae0f0.js';

const setUpdateProp = (object, path, value) => {
  if (path.length === 1) {
    object[path[0]] = value;
  }
  else if (path.length === 0) ;
  else {
    if (object[path[0]])
      return setUpdateProp(object[path[0]], path.slice(1), value);
    else {
      object[path[0]] = {};
      return setUpdateProp(object[path[0]], path.slice(1), value);
    }
  }
};
const readSessionFromCookie = () => {
  const b = document.cookie.match('(^|[^;]+)\\s*' + 'arcgis_hub_component_auth' + '\\s*=\\s*([^;]+)');
  return b ? b.pop() : undefined;
};
const writeSessionToCookie = (session) => {
  let date = new Date();
  // two week expiration
  date.setTime(date.getTime() + (14 * 24 * 60 * 60 * 1000));
  document.cookie = `arcgis_hub_component_auth=${session.serialize()} ; expires=${date.toUTCString()} path=/`;
};
const deleteSessionCookie = () => {
  document.cookie = `arcgis_hub_component_auth= ; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/`;
};
function truncateString(input, length) {
  let ending = "...";
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
const authenticateUser = (clientId, orgurl) => {
  console.log("authenticateUser", {
    clientId: clientId,
    portal: `${orgurl}/sharing/rest`,
    redirectUri: `${window.location.origin}/authenticate.html`
  });
  let session = readSessionFromCookie();
  return new Promise((resolve, _reject) => {
    if (!session) {
      // get the host + path without filename
      let pathname = window.location.pathname;
      let path = pathname.substring(0, pathname.lastIndexOf('/')) + "/";
      // register your own app to create a unique clientId
      return UserSession.beginOAuth2({
        clientId: clientId,
        portal: `${orgurl}/sharing/rest`,
        redirectUri: `${window.location.origin}${path}authenticate.html`,
        popup: true
      })
        .then(userSession => {
        writeSessionToCookie(userSession);
        session = userSession.serialize();
        resolve(session);
      }).catch(error => {
        console.error("Hub Components auth error", error);
      });
    }
    else {
      resolve(session);
    }
  });
};

export { authenticateUser as a, deleteSessionCookie as d, readSessionFromCookie as r, setUpdateProp as s, truncateString as t, writeSessionToCookie as w };
