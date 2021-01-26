'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ad6d6974.js');

const arcgisGeocardCss = ":host{display:block}";

const ArcgisGeocard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("slot", null)));
    }
};
ArcgisGeocard.style = arcgisGeocardCss;

exports.arcgis_geocard = ArcgisGeocard;
