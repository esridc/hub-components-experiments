'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dad2b533.js');
const dom = require('./dom-c158885c.js');
require('./guid-1ecb63ba.js');

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const CSS = {
  container: "container",
  contentContainer: "content-container",
  nestedContainer: "nested-container",
  contentContainerButton: "content-container--button",
  content: "content",
  actionsStart: "actions-start",
  contentStart: "content-start",
  label: "label",
  description: "description",
  contentEnd: "content-end",
  actionsEnd: "actions-end"
};
const SLOTS = {
  actionsStart: "actions-start",
  contentStart: "content-start",
  contentEnd: "content-end",
  actionsEnd: "actions-end"
};

const calciteListItemCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:flex;flex-direction:column}:host([disabled]){pointer-events:none;cursor:default}.container{background-color:var(--calcite-ui-foreground-1);box-sizing:border-box;font-family:var(--calcite-sans-family);display:flex;flex:1 1 0%}.container *{box-sizing:border-box}.nested-container{display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1)}.content-container{display:flex;flex:1 1 auto;outline-offset:0;outline-color:transparent;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;align-items:stretch;padding:0;color:var(--calcite-ui-text-2)}.content-container--button{background-color:var(--calcite-ui-foreground-1);border-style:none;cursor:pointer;outline-offset:0;outline-color:transparent;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;text-align:initial}.content-container--button:hover{background-color:var(--calcite-ui-foreground-2)}.content-container--button:hover .label,.content-container--button:hover .description{color:var(--calcite-ui-text-1)}.content-container--button:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.content{justify-content:center;display:flex;flex:1 1 auto;flex-direction:column;padding-left:0.75rem;padding-right:0.75rem;padding-top:0.5rem;padding-bottom:0.5rem}.label,.description{font-weight:var(--calcite-font-weight-normal);font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--2);word-wrap:break-word;word-break:break-word}.label:only-child,.description:only-child{padding-top:0.25rem;padding-bottom:0.25rem;margin:0}.label{color:var(--calcite-ui-text-1)}.description{color:var(--calcite-ui-text-3);margin-top:0.125rem}.content-start,.content-end{flex:0 1 auto;pointer-events:none}.actions-start,.actions-end,.content-start,.content-end{display:flex;align-items:center}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){align-self:center;padding-left:0.75rem;padding-right:0.75rem}.actions-start ::slotted(calcite-action),.actions-end ::slotted(calcite-action){align-self:stretch;color:inherit}::slotted(calcite-list-item-group),::slotted(calcite-list-item){padding-left:0.5rem}";

let CalciteListItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * When true, prevents the content of the list item from user interaction.
     */
    this.nonInteractive = false;
    /**
     * When true, disabled prevents interaction.
     */
    this.disabled = false;
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    var _a;
    (_a = this.focusEl) === null || _a === void 0 ? void 0 : _a.focus();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderActionsStart() {
    const { el } = this;
    return dom.getSlotted(el, SLOTS.actionsStart) ? (index.h("div", { class: CSS.actionsStart }, index.h("slot", { name: SLOTS.actionsStart }))) : null;
  }
  renderActionsEnd() {
    const { el } = this;
    return dom.getSlotted(el, SLOTS.actionsEnd) ? (index.h("div", { class: CSS.actionsEnd }, index.h("slot", { name: SLOTS.actionsEnd }))) : null;
  }
  renderContentStart() {
    const { el } = this;
    return dom.getSlotted(el, SLOTS.contentStart) ? (index.h("div", { class: CSS.contentStart }, index.h("slot", { name: SLOTS.contentStart }))) : null;
  }
  renderContentEnd() {
    const { el } = this;
    return dom.getSlotted(el, SLOTS.contentEnd) ? (index.h("div", { class: CSS.contentEnd }, index.h("slot", { name: SLOTS.contentEnd }))) : null;
  }
  renderContent() {
    const { label, description } = this;
    return !!label || !!description ? (index.h("div", { class: CSS.content }, label ? index.h("div", { class: CSS.label }, label) : null, description ? index.h("div", { class: CSS.description }, description) : null)) : null;
  }
  renderContentContainer() {
    const { disabled, nonInteractive } = this;
    const content = [this.renderContentStart(), this.renderContent(), this.renderContentEnd()];
    return !nonInteractive ? (index.h("button", { class: { [CSS.contentContainer]: true, [CSS.contentContainerButton]: true }, disabled: disabled, ref: (focusEl) => (this.focusEl = focusEl) }, content)) : (index.h("div", { class: CSS.contentContainer, ref: () => (this.focusEl = null) }, content));
  }
  render() {
    return (index.h(index.Host, { role: "listitem" }, index.h("div", { class: CSS.container }, this.renderActionsStart(), this.renderContentContainer(), this.renderActionsEnd()), index.h("div", { class: CSS.nestedContainer }, index.h("slot", null))));
  }
  get el() { return index.getElement(this); }
};
CalciteListItem.style = calciteListItemCss;

exports.calcite_list_item = CalciteListItem;
