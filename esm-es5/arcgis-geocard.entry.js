import { r as registerInstance, h, H as Host } from './index-17d4341f.js';
var arcgisGeocardCss = ":host{display:block}";
var ArcgisGeocard = /** @class */ (function () {
    function ArcgisGeocard(hostRef) {
        registerInstance(this, hostRef);
    }
    ArcgisGeocard.prototype.render = function () {
        return (h(Host, null, h("slot", null)));
    };
    return ArcgisGeocard;
}());
ArcgisGeocard.style = arcgisGeocardCss;
export { ArcgisGeocard as arcgis_geocard };
