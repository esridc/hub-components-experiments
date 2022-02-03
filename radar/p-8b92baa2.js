import{n as o}from"./p-e14d02bd.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */const t="CALCITE-COMBOBOX-ITEM",n="CALCITE-COMBOBOX-ITEM-GROUP",c="CALCITE-COMBOBOX-ITEM, CALCITE-COMBOBOX-ITEM-GROUP",i="bottom-leading";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
function a(o){var t,n;const i=null===(t=o.parentElement)||void 0===t?void 0:t.closest(c);return[i,null===(n=null==i?void 0:i.parentElement)||void 0===n?void 0:n.closest(c)].filter((o=>o))}function e(o){var t;return(null===(t=o.ancestors)||void 0===t?void 0:t.filter((o=>"CALCITE-COMBOBOX-ITEM"===o.nodeName)))||[]}function u(t){return o(t.querySelectorAll("calcite-combobox-item"))}function l(t){return o(t.querySelectorAll("calcite-combobox-item")).filter((o=>o.selected)).length>0}function r(o){return document.evaluate("ancestor::calcite-combobox-item | ancestor::calcite-combobox-item-group",o,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength}export{c as C,u as a,t as b,n as c,i as d,a as e,r as f,e as g,l as h}