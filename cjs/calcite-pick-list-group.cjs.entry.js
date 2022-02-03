'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dad2b533.js');
const dom = require('./dom-c158885c.js');
const CalciteHeading = require('./CalciteHeading-0a313fbe.js');
require('./guid-1ecb63ba.js');

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const CSS = {
  heading: "heading",
  container: "container",
  indented: "container--indented"
};
const SLOTS = {
  parentItem: "parent-item"
};
const HEADING_LEVEL = 3;

const calcitePickListGroupCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{background-color:transparent;box-sizing:border-box;display:block;margin-bottom:0.25rem;color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host(:last-child){margin-bottom:0}.header{margin:0;display:flex;align-items:center;align-content:space-between;color:var(--calcite-ui-text-2);}.heading{font-weight:var(--calcite-font-weight-medium);margin:0;padding:0}.header .heading{flex:1 1 auto;padding:0.5rem}h1.heading{font-size:var(--calcite-font-size-2);line-height:1.5rem}h2.heading{font-size:var(--calcite-font-size-1);line-height:1.5rem}h3.heading{font-size:var(--calcite-font-size-0);line-height:1.25rem}h4.heading,h5.heading{font-size:var(--calcite-font-size--1);line-height:1rem}h3.heading{font-size:var(--calcite-font-size--1);line-height:1.375;color:var(--calcite-ui-text-3);margin-top:0.5rem;margin-bottom:0.5rem;margin-left:1rem;margin-right:1rem}.container--indented{margin-left:1.5rem}.calcite--rtl.container--indented{margin-left:0;margin-right:1.5rem}";

let CalcitePickListGroup = class {
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
    const { el, groupTitle, headingLevel } = this;
    const rtl = dom.getElementDir(el) === "rtl";
    const hasParentItem = dom.getSlotted(el, SLOTS.parentItem) !== null;
    const sectionClasses = {
      [CSS.container]: true,
      [CSS.indented]: hasParentItem,
      [dom.CSS_UTILITY.rtl]: rtl
    };
    const title = groupTitle;
    const parentLevel = (_a = el.closest("calcite-pick-list")) === null || _a === void 0 ? void 0 : _a.headingLevel;
    const relativeLevel = parentLevel ? CalciteHeading.constrainHeadingLevel(parentLevel + 1) : null;
    const level = headingLevel || relativeLevel || HEADING_LEVEL;
    return (index.h(index.Fragment, null, title ? (index.h(CalciteHeading.CalciteHeading, { class: CSS.heading, level: level }, title)) : null, index.h("slot", { name: SLOTS.parentItem }), index.h("section", { class: sectionClasses }, index.h("slot", null))));
  }
  get el() { return index.getElement(this); }
};
CalcitePickListGroup.style = calcitePickListGroupCss;

exports.calcite_pick_list_group = CalcitePickListGroup;
