import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-9fca3863.js';
import { a as getSlotted } from './dom-b47352c7.js';
import { C as CalciteHeading } from './CalciteHeading-abe17cc8.js';
import './guid-ec8a882c.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const CSS = {
  article: "article",
  content: "content",
  headerContainer: "header-container",
  icon: "icon",
  statusIcon: "status-icon",
  toggle: "toggle",
  toggleIcon: "toggle-icon",
  title: "title",
  heading: "heading",
  header: "header",
  button: "button",
  summary: "summary",
  controlContainer: "control-container",
  valid: "valid",
  invalid: "invalid",
  loading: "loading"
};
const TEXT = {
  collapse: "Collapse",
  expand: "Expand",
  loading: "Loading",
  options: "Options"
};
const SLOTS = {
  icon: "icon",
  control: "control",
  headerMenuActions: "header-menu-actions"
};
const ICONS = {
  opened: "chevron-up",
  closed: "chevron-down",
  valid: "check-circle",
  invalid: "exclamation-mark-triangle",
  refresh: "refresh"
};
const HEADING_LEVEL = 4;

const calciteBlockCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:flex;flex-grow:0;flex-shrink:0;flex-direction:column;padding:0;transition-property:margin;transition-duration:150ms;transition-timing-function:cubic-bezier(0.215, 0.440, 0.420, 0.880);border-width:0;border-bottom-width:1px;border-color:var(--calcite-ui-border-3);border-style:solid;flex-basis:auto}.header{margin:0;display:flex;align-items:center;align-content:space-between;color:var(--calcite-ui-text-2);}.heading{font-weight:var(--calcite-font-weight-medium);margin:0;padding:0}.header .heading{flex:1 1 auto;padding:0.5rem}h1.heading{font-size:var(--calcite-font-size-2);line-height:1.5rem}h2.heading{font-size:var(--calcite-font-size-1);line-height:1.5rem}h3.heading{font-size:var(--calcite-font-size-0);line-height:1.25rem}h4.heading,h5.heading{font-size:var(--calcite-font-size--1);line-height:1rem}.header{justify-content:flex-start;padding:0}.header,.toggle{grid-area:header}.header-container{display:grid;align-items:stretch;grid-template:auto/auto 1fr auto auto;grid-template-areas:\"handle header control menu\";grid-column:header-start/menu-end;grid-row:1/2}.header-container>.header{padding-top:0.75rem;padding-bottom:0.75rem;padding-left:0;padding-right:0}.toggle{display:flex;flex-wrap:nowrap;justify-content:space-between;font-family:inherit;align-items:center;margin:0;padding-top:0.75rem;padding-bottom:0.75rem;padding-left:0;padding-right:0;border-style:none;cursor:pointer;outline-offset:0;outline-color:transparent;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;text-align:initial;background-color:transparent}.toggle:hover{background-color:var(--calcite-ui-foreground-2)}.toggle:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}calcite-loader[inline]{grid-area:control;align-self:center}calcite-handle{grid-area:handle}.title{margin:0;padding-inline:0.75rem;padding-block:0px}.header .title .heading{padding:0;font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2);font-weight:var(--calcite-font-weight-medium);word-wrap:break-word;word-break:break-word;line-height:1.25;transition-property:color;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.summary{padding:0;font-size:var(--calcite-font-size--2);color:var(--calcite-ui-text-3);margin-top:0.125rem;word-wrap:break-word;word-break:break-word}.icon{margin-inline-start:0.75rem;margin-inline-end:0px}.status-icon.valid{color:var(--calcite-ui-success)}.status-icon.invalid{color:var(--calcite-ui-danger)}.status-icon.loading{animation:spin 2s linear infinite}@keyframes spin{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}.toggle-icon{align-self:center;color:var(--calcite-ui-text-3);transition-property:color;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:1rem;margin-inline-start:0px}.toggle:hover .toggle-icon{color:var(--calcite-ui-text-1)}.content{padding-left:0.75rem;padding-right:0.75rem;padding-top:0.5rem;padding-bottom:0.5rem;position:relative;animation:in var(--calcite-animation-timing) ease-in-out}.control-container{display:flex;margin:0;grid-area:control}calcite-action-menu{grid-area:menu}:host([open]){margin-top:0.5rem;margin-bottom:0.5rem}:host([open]) .header .title .heading{color:var(--calcite-ui-text-1)}:host([disabled]){pointer-events:none;-webkit-user-select:none;user-select:none;pointer-events:none;user-select:none}:host([disabled]) .header-container{opacity:0.5}";

let CalciteBlock = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteBlockToggle = createEvent(this, "calciteBlockToggle", 7);
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * When true, this block will be collapsible.
     */
    this.collapsible = false;
    /**
     * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
     */
    this.disabled = false;
    /**
     * When true, displays a drag handle in the header.
     */
    this.dragHandle = false;
    /** string to override English loading text
     * @default "Loading"
     */
    this.intlLoading = TEXT.loading;
    /** Text string used for the actions menu
     * @default "Options"
     */
    this.intlOptions = TEXT.options;
    /**
     * When true, content is waiting to be loaded. This state shows a busy indicator.
     */
    this.loading = false;
    /**
     * When true, the block's content will be displayed.
     */
    this.open = false;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.onHeaderClick = () => {
      this.open = !this.open;
      this.calciteBlockToggle.emit();
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderScrim() {
    const { disabled, loading } = this;
    const defaultSlot = h("slot", null);
    return [loading || disabled ? h("calcite-scrim", { loading: loading }) : null, defaultSlot];
  }
  renderIcon() {
    const { el, status } = this;
    const showingLoadingStatus = this.loading && !this.open;
    const statusIcon = showingLoadingStatus ? ICONS.refresh : ICONS[status];
    const hasIcon = getSlotted(el, SLOTS.icon) || statusIcon;
    const iconEl = !statusIcon ? (h("slot", { name: SLOTS.icon })) : (h("calcite-icon", { class: {
        [CSS.statusIcon]: true,
        [CSS.valid]: status == "valid",
        [CSS.invalid]: status == "invalid",
        [CSS.loading]: showingLoadingStatus
      }, icon: statusIcon, scale: "m" }));
    return hasIcon ? h("div", { class: CSS.icon }, iconEl) : null;
  }
  render() {
    const { collapsible, disabled, el, heading, intlCollapse, intlExpand, loading, open, summary, intlLoading, headingLevel } = this;
    const toggleLabel = open ? intlCollapse || TEXT.collapse : intlExpand || TEXT.expand;
    const headerContent = (h("header", { class: CSS.header }, this.renderIcon(), h("div", { class: CSS.title }, h(CalciteHeading, { class: CSS.heading, level: headingLevel || HEADING_LEVEL }, heading), summary ? h("div", { class: CSS.summary }, summary) : null)));
    const hasControl = !!getSlotted(el, SLOTS.control);
    const hasMenuActions = !!getSlotted(el, SLOTS.headerMenuActions);
    const collapseIcon = open ? ICONS.opened : ICONS.closed;
    const headerNode = (h("div", { class: CSS.headerContainer }, this.dragHandle ? h("calcite-handle", null) : null, collapsible ? (h("button", { "aria-expanded": collapsible ? open.toString() : null, "aria-label": toggleLabel, class: CSS.toggle, onClick: this.onHeaderClick, title: toggleLabel }, headerContent, !hasControl && !hasMenuActions ? (h("calcite-icon", { "aria-hidden": "true", class: CSS.toggleIcon, icon: collapseIcon, scale: "s" })) : null)) : (headerContent), loading ? (h("calcite-loader", { inline: true, "is-active": true, label: intlLoading })) : hasControl ? (h("div", { class: CSS.controlContainer }, h("slot", { name: SLOTS.control }))) : null, hasMenuActions ? (h("calcite-action-menu", { label: this.intlOptions || TEXT.options }, h("slot", { name: SLOTS.headerMenuActions }))) : null));
    return (h(Host, { tabIndex: disabled ? -1 : null }, h("article", { "aria-busy": loading.toString(), class: {
        [CSS.article]: true
      } }, headerNode, h("div", { class: CSS.content, hidden: !open }, this.renderScrim()))));
  }
  get el() { return getElement(this); }
};
CalciteBlock.style = calciteBlockCss;

export { CalciteBlock as calcite_block };
