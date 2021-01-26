import { r as registerInstance, c as createEvent, h, g as getElement } from './index-17d4341f.js';
import { g as getElementDir } from './dom-29efd1ef.js';
import { g as guid } from './guid-9ad8042d.js';
import { C as CSS_UTILITY } from './resources-c23b068d.js';
var CSS = {
    content: "content",
    toggle: "toggle",
    toggleSwitch: "toggle--switch",
    sectionHeader: "section-header",
    sectionHeaderText: "section-header__text"
};
var TEXT = {
    collapse: "Collapse",
    expand: "Expand"
};
var ICONS = {
    menuOpen: "chevron-down",
    menuClosedLeft: "chevron-left",
    menuClosedRight: "chevron-right"
};
var calciteBlockSectionCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block}:host([open]){border-bottom:1px solid var(--calcite-ui-border-3)}:host(:last-child){border-bottom:none}.toggle{background-color:transparent;border:none;color:var(--calcite-ui-text-2);font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-normal);width:100%}.toggle--switch,.section-header{-ms-flex-align:center;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;margin:var(--calcite-spacing-quarter) 0;padding:var(--calcite-spacing-half) 0;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;font-size:var(--calcite-font-size--1);outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.toggle--switch:focus,.section-header:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:2px}.toggle--switch:hover,.section-header:hover{color:var(--calcite-ui-text-1)}.section-header__text{margin:0 var(--calcite-spacing-quarter)}.toggle--switch{-ms-flex-pack:justify;justify-content:space-between}.toggle--switch calcite-switch{pointer-events:none;margin:0 0 0 var(--calcite-spacing-half)}.calcite--rtl .toggle--switch calcite-switch{margin-left:0;margin-right:var(--calcite-spacing-half)}";
var CalciteBlockSection = /** @class */ (function () {
    function CalciteBlockSection(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        /**
         * When true, the block's section content will be displayed.
         */
        this.open = false;
        /**
         * This property determines the look of the section toggle.
         * If the value is "switch", a toggle-switch will be displayed.
         * If the value is "button", a clickable header is displayed.
         *
         * @todo revisit doc
         */
        this.toggleDisplay = "button";
        this.guid = "calcite-block-section-" + guid();
        this.toggleSection = function () {
            _this.open = !_this.open;
            _this.calciteBlockSectionToggle.emit();
        };
        this.calciteBlockSectionToggle = createEvent(this, "calciteBlockSectionToggle", 7);
    }
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    CalciteBlockSection.prototype.handleHeaderLabelKeyDown = function (event) {
        if (event.key === " " || event.key === "Enter") {
            event.preventDefault();
            event.stopPropagation();
            this.click();
        }
    };
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    CalciteBlockSection.prototype.render = function () {
        var _a, _b, _c;
        var _d = this, el = _d.el, id = _d.guid, intlCollapse = _d.intlCollapse, intlExpand = _d.intlExpand, open = _d.open, text = _d.text, toggleDisplay = _d.toggleDisplay;
        var dir = getElementDir(el);
        var arrowIcon = open
            ? ICONS.menuOpen
            : dir === "rtl"
                ? ICONS.menuClosedLeft
                : ICONS.menuClosedRight;
        var toggleLabel = open ? intlCollapse || TEXT.collapse : intlExpand || TEXT.expand;
        var labelId = id + "__label";
        var headerNode = toggleDisplay === "switch" ? (h("label", { "aria-label": toggleLabel, class: (_a = {},
                _a[CSS.toggle] = true,
                _a[CSS.toggleSwitch] = true,
                _a), id: labelId, onKeyDown: this.handleHeaderLabelKeyDown, tabIndex: 0, title: toggleLabel }, text, h("calcite-switch", { "aria-labelledby": labelId, onCalciteSwitchChange: this.toggleSection, scale: "s", switched: open, tabIndex: -1 }))) : (h("button", { "aria-label": toggleLabel, class: (_b = {},
                _b[CSS.sectionHeader] = true,
                _b[CSS.toggle] = true,
                _b), name: toggleLabel, onClick: this.toggleSection, onKeyDown: this.handleHeaderLabelKeyDown }, h("calcite-icon", { icon: arrowIcon, scale: "s" }), h("span", { class: CSS.sectionHeaderText }, text)));
        return (h("section", { "aria-expanded": open.toString(), class: (_c = {}, _c[CSS_UTILITY.rtl] = dir === "rtl", _c) }, headerNode, h("div", { class: CSS.content, hidden: !open }, h("slot", null))));
    };
    Object.defineProperty(CalciteBlockSection.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return CalciteBlockSection;
}());
CalciteBlockSection.style = calciteBlockSectionCss;
export { CalciteBlockSection as calcite_block_section };
