import { r as registerInstance, h, H as Host } from './index-9fca3863.js';

const arcgisGeocardCss = ":host{display:block}";

let ArcgisGeocard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
ArcgisGeocard.style = arcgisGeocardCss;

export { ArcgisGeocard as arcgis_geocard };
