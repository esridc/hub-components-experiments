import { r as registerInstance, c as createEvent, h, g as getElement } from './index-9fca3863.js';
import { g as getElementDir, C as CSS_UTILITY } from './dom-b47352c7.js';
import './guid-ec8a882c.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const CSS = {
  content: "content",
  invalid: "invalid",
  toggle: "toggle",
  toggleSwitch: "toggle--switch",
  toggleSwitchContent: "toggle--switch__content",
  toggleSwitchText: "toggle--switch__text",
  sectionHeader: "section-header",
  sectionHeaderText: "section-header__text",
  statusIcon: "status-icon",
  valid: "valid"
};
const TEXT = {
  collapse: "Collapse",
  expand: "Expand"
};
const ICONS = {
  menuOpen: "chevron-down",
  menuClosedLeft: "chevron-left",
  menuClosedRight: "chevron-right",
  valid: "check-circle",
  invalid: "exclamation-mark-triangle"
};

const calciteBlockSectionCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1);display:block}:host([open]){border-style:solid;border-width:0;border-bottom-color:var(--calcite-ui-border-3);border-bottom-width:1px}:host(:last-child){border-bottom-width:0}.toggle{background-color:transparent;border-width:0;color:var(--calcite-ui-text-2);font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-medium);width:100%}.toggle--switch,.section-header{align-items:center;cursor:pointer;display:flex;margin-left:0;margin-right:0;margin-top:0.25rem;margin-bottom:0.25rem;padding-left:0;padding-right:0;padding-top:0.5rem;padding-bottom:0.5rem;-webkit-user-select:none;user-select:none;font-size:var(--calcite-font-size--1);outline-offset:0;outline-color:transparent;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.toggle--switch:focus,.section-header:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.toggle--switch:hover,.section-header:hover{color:var(--calcite-ui-text-1)}.section-header .status-icon{align-self:flex-end}.section-header__text{flex:1 1 auto;margin-left:0.75rem;margin-right:0.75rem;margin-top:0;margin-bottom:0;text-align:initial;word-wrap:anywhere}.toggle--switch calcite-switch{pointer-events:none;margin-left:0.25rem}.toggle--switch .status-icon{margin-left:0.5rem}.toggle--switch__content{display:flex;align-items:center;flex:1 1 auto}.status-icon.valid{color:var(--calcite-ui-success)}.status-icon.invalid{color:var(--calcite-ui-danger)}.calcite--rtl .toggle--switch calcite-switch{margin-left:0;margin-right:0.25rem}.calcite--rtl .toggle--switch .status-icon{margin-left:0;margin-right:0.5rem}";

let CalciteBlockSection = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteBlockSectionToggle = createEvent(this, "calciteBlockSectionToggle", 7);
    /**
     * When true, the block's section content will be displayed.
     */
    this.open = false;
    /**
     * This property determines the look of the section toggle.
     * If the value is "switch", a toggle-switch will be displayed.
     * If the value is "button", a clickable header is displayed.
     */
    this.toggleDisplay = "button";
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.handleHeaderKeyDown = (event) => {
      if (event.key === " " || event.key === "Enter") {
        this.toggleSection();
        event.preventDefault();
        event.stopPropagation();
      }
    };
    this.toggleSection = () => {
      this.open = !this.open;
      this.calciteBlockSectionToggle.emit();
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderStatusIcon() {
    var _a;
    const { status } = this;
    const statusIcon = (_a = ICONS[status]) !== null && _a !== void 0 ? _a : false;
    const statusIconClasses = {
      [CSS.statusIcon]: true,
      [CSS.valid]: status == "valid",
      [CSS.invalid]: status == "invalid"
    };
    return !!statusIcon ? (h("calcite-icon", { class: statusIconClasses, icon: statusIcon, scale: "s" })) : null;
  }
  render() {
    const { el, intlCollapse, intlExpand, open, text, toggleDisplay } = this;
    const dir = getElementDir(el);
    const arrowIcon = open
      ? ICONS.menuOpen
      : dir === "rtl"
        ? ICONS.menuClosedLeft
        : ICONS.menuClosedRight;
    const toggleLabel = open ? intlCollapse || TEXT.collapse : intlExpand || TEXT.expand;
    const headerNode = toggleDisplay === "switch" ? (h("div", { "aria-label": toggleLabel, class: {
        [CSS.toggle]: true,
        [CSS.toggleSwitch]: true
      }, onClick: this.toggleSection, onKeyDown: this.handleHeaderKeyDown, tabIndex: 0, title: toggleLabel }, h("div", { class: CSS.toggleSwitchContent }, h("span", { class: CSS.toggleSwitchText }, text)), h("calcite-switch", { checked: open, label: toggleLabel, scale: "s", tabIndex: -1 }), this.renderStatusIcon())) : (h("button", { "aria-label": toggleLabel, class: {
        [CSS.sectionHeader]: true,
        [CSS.toggle]: true
      }, name: toggleLabel, onClick: this.toggleSection }, h("calcite-icon", { icon: arrowIcon, scale: "s" }), h("span", { class: CSS.sectionHeaderText }, text), this.renderStatusIcon()));
    return (h("section", { "aria-expanded": open.toString(), class: { [CSS_UTILITY.rtl]: dir === "rtl" } }, headerNode, h("div", { class: CSS.content, hidden: !open }, h("slot", null))));
  }
  get el() { return getElement(this); }
};
CalciteBlockSection.style = calciteBlockSectionCss;

export { CalciteBlockSection as calcite_block_section };
