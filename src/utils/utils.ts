import { UserSession } from '@esri/arcgis-rest-auth';

export const readSessionFromCookie = ():string => {
  const b = document.cookie.match('(^|[^;]+)\\s*' + 'arcgis_hub_component_auth' + '\\s*=\\s*([^;]+)');
  return b ? b.pop() : undefined;
}

export const writeSessionToCookie = (session:UserSession):void => {
  let date = new Date();
  // two week expiration
  date.setTime(date.getTime() + (14*24*60*60*1000));

  document.cookie = `arcgis_hub_component_auth=${session.serialize()} ; expires=${date.toUTCString()} path=/`;
}

export const authenticateUser = (clientId, orgurl):Promise<string> => {
  console.log("authenticateUser", {
    clientId: clientId,
    portal: `${orgurl}/sharing/rest`,
    redirectUri: `${window.location.origin}/authenticate.html`
  })
  debugger;
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
        redirectUri: `${window.location.origin}${path}authenticate.html`
      })
      .then(userSession => {
          writeSessionToCookie(userSession);
          session = userSession.serialize();
          resolve(session);
      }).catch(error => {
        console.error("Hub Components auth error", error)
      })
    } else {
      resolve(session);
    }
  });
}