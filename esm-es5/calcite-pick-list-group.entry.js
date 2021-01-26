import { r as registerInstance, h, H as Host, g as getElement } from './index-17d4341f.js';
import { g as getElementDir, a as getSlotted } from './dom-29efd1ef.js';
import { C as CSS_UTILITY } from './resources-c23b068d.js';
var CSS = {
    heading: "heading",
    container: "container",
    indented: "container--indented"
};
var SLOTS = {
    parentItem: "parent-item"
};
var calcitePickListGroupCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{background-color:transparent;display:block;margin-bottom:var(--calcite-spacing-quarter)}:host(:last-child){margin-bottom:0}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;color:var(--calcite-ui-text-2);fill:var(--calcite-ui-text-2)}.heading{padding:0;margin:0;font-weight:var(--calcite-font-weight-medium);line-height:1.5}.header .heading{-ms-flex:1 0 auto;flex:1 0 auto;padding:var(--calcite-spacing-half) var(--calcite-spacing-half)}h1.heading{font-size:var(--calcite-font-size-2)}h2.heading{font-size:var(--calcite-font-size-1)}h3.heading{font-size:var(--calcite-font-size-0)}h4.heading,h5.heading{font-size:var(--calcite-font-size--1)}h3.heading{font-size:0.875rem;line-height:1.5;color:var(--calcite-ui-text-3);margin:var(--calcite-spacing-half) var(--calcite-spacing)}.container--indented{margin-left:var(--calcite-spacing-plus-half)}.calcite--rtl.container--indented{margin-left:0;margin-right:var(--calcite-spacing-plus-half)}";
var CalcitePickListGroup = /** @class */ (function () {
    function CalcitePickListGroup(hostRef) {
        registerInstance(this, hostRef);
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    CalcitePickListGroup.prototype.render = function () {
        var _a;
        var _b = this, el = _b.el, groupTitle = _b.groupTitle;
        var rtl = getElementDir(el) === "rtl";
        var hasParentItem = getSlotted(el, SLOTS.parentItem) !== null;
        var sectionClasses = (_a = {},
            _a[CSS.container] = true,
            _a[CSS.indented] = hasParentItem,
            _a[CSS_UTILITY.rtl] = rtl,
            _a);
        var title = groupTitle;
        return (h(Host, null, title ? h("h3", { class: CSS.heading }, title) : null, h("slot", { name: SLOTS.parentItem }), h("section", { class: sectionClasses }, h("slot", null))));
    };
    Object.defineProperty(CalcitePickListGroup.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return CalcitePickListGroup;
}());
CalcitePickListGroup.style = calcitePickListGroupCss;
export { CalcitePickListGroup as calcite_pick_list_group };
