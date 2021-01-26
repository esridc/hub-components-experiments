import { g as getItem, a as getItemData } from './index-2b41d503.js';
// Helper utilities for working with Hub
// {
// "id": "12502",
// "domain": "data-tog.opendata.arcgis.com",
// "hostname": "data-tog.opendata.arcgis.com",
// "siteId": "f4c43cd9741e43c7b078a37b757392e0",
// "clientKey": "qoKo06zr4kAtu0J2",
// "orgKey": "TOG",
// "siteTitle": "Gilbert, Arizona Open Data Portal",
// "orgId": "JLuzSHjNrLL4Okwb",
// "orgTitle": "Gilbert, Arizona",
// "createdAt": "2017-09-21T15:22:55Z",
// "updatedAt": "2019-10-11T00:01:22Z",
// "sslOnly": true,
// "permanentRedirect": false
// }
function getDomainDetails(domain) {
    var domainUrl = "https://opendata.arcgis.com/utilities/domains/" + domain;
    return new Promise(function (resolve, reject) {
        fetch(domainUrl).then(function (response) {
            resolve(response.json());
        }).catch(reject);
    });
}
function getSiteItem(domain) {
    return new Promise(function (resolve, reject) {
        getDomainDetails(domain).then(function (domainDetails) {
            Promise.all([getItem(domainDetails.siteId), getItemData(domainDetails.siteId)])
                .then(resolve)
                .catch(reject);
        });
    });
}
// Returns 
// { "groups": [ "250feda1857240c2963ffb27d9ab397f" ] }
function getSiteCatalog(domain) {
    return new Promise(function (resolve, reject) {
        getSiteItem(domain).then(function (_a) {
            var _siteItem = _a[0], siteItemData = _a[1];
            resolve(siteItemData.catalog);
        }).catch(reject);
    });
}
export { getSiteCatalog as g };
