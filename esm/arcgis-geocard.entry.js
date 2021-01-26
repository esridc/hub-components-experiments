import { r as registerInstance, h, H as Host } from './index-17d4341f.js';

const arcgisGeocardCss = ":host{display:block}";

const ArcgisGeocard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
};
ArcgisGeocard.style = arcgisGeocardCss;

export { ArcgisGeocard as arcgis_geocard };
