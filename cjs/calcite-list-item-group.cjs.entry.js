'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dad2b533.js');
const CalciteHeading = require('./CalciteHeading-0a313fbe.js');

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const CSS = {
  heading: "heading",
  container: "container"
};
const HEADING_LEVEL = 3;

const calciteListItemGroupCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:flex;flex-direction:column}.heading{font-family:var(--calcite-sans-family);background-color:var(--calcite-ui-foreground-2);font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-bold);margin:0;padding:0.75rem;color:var(--calcite-ui-text-2);display:flex;flex:1 1 0%}.container{width:100%;display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1)}::slotted(calcite-list-item-group){padding-left:0.5rem}";

let CalciteListItemGroup = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    var _a;
    const { el, heading, headingLevel } = this;
    const parentLevel = (_a = el.closest("calcite-list, calcite-list-item-group")) === null || _a === void 0 ? void 0 : _a.headingLevel;
    const relativeLevel = parentLevel ? CalciteHeading.constrainHeadingLevel(parentLevel + 1) : null;
    const level = headingLevel || relativeLevel || HEADING_LEVEL;
    return (index.h(index.Host, null, heading ? (index.h(CalciteHeading.CalciteHeading, { class: CSS.heading, level: level }, heading)) : null, index.h("div", { class: CSS.container, role: "group" }, index.h("slot", null))));
  }
  get el() { return index.getElement(this); }
};
CalciteListItemGroup.style = calciteListItemGroupCss;

exports.calcite_list_item_group = CalciteListItemGroup;
