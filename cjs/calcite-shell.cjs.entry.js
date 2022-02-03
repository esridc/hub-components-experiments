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
  main: "main",
  mainReversed: "main--reversed",
  content: "content",
  contentBehind: "content--behind",
  footer: "footer"
};
const SLOTS = {
  centerRow: "center-row",
  primaryPanel: "primary-panel",
  contextualPanel: "contextual-panel",
  header: "header",
  footer: "footer"
};

const calciteShellCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{width:100%;height:100%;position:absolute;display:flex;flex-direction:column;overflow:hidden;top:0;right:0;bottom:0;left:0;--calcite-shell-tip-spacing:26vw}.main{height:100%;width:100%;flex:1 1 auto;display:flex;flex-direction:row;position:relative;justify-content:space-between;overflow:hidden}.main--reversed{flex-direction:row-reverse}.content{display:flex;flex-direction:column;flex-wrap:nowrap;height:100%;overflow:auto;width:100%}.content ::slotted(calcite-shell-center-row),.content ::slotted(calcite-panel),.content ::slotted(calcite-flow){align-self:stretch;flex:1 1 auto;max-height:unset}.content--behind{border-width:0;position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;display:initial}::slotted(calcite-shell-center-row){width:unset}::slotted(.header .heading){font-weight:var(--calcite-font-weight-normal);font-size:var(--calcite-font-size--2);line-height:1.375}::slotted(calcite-shell-panel),::slotted(calcite-shell-center-row){position:relative;z-index:1}::slotted(calcite-panel),::slotted(calcite-flow){border-width:1px;border-color:var(--calcite-ui-border-3);border-style:solid;border-left-width:0;border-right-width:0}slot[name=center-row]::slotted(calcite-shell-center-row:not([detached])){border-left-width:1px;border-right-width:1px;border-color:var(--calcite-ui-border-3)}::slotted(calcite-tip-manager){border-radius:0.25rem;box-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);position:absolute;animation:in-up var(--calcite-animation-timing) ease-in-out;box-sizing:border-box;bottom:0.5rem;left:var(--calcite-shell-tip-spacing);right:var(--calcite-shell-tip-spacing);z-index:2}";

let CalciteShell = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * Positions the center content behind any calcite-shell-panels.
     */
    this.contentBehind = false;
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderHeader() {
    const hasHeader = !!dom.getSlotted(this.el, SLOTS.header);
    return hasHeader ? index.h("slot", { name: SLOTS.header }) : null;
  }
  renderContent() {
    const content = !!this.contentBehind
      ? [
        index.h("div", { class: {
            [CSS.content]: true,
            [CSS.contentBehind]: !!this.contentBehind
          } }, index.h("slot", null)),
        index.h("slot", { name: SLOTS.centerRow })
      ]
      : [
        index.h("div", { class: CSS.content }, index.h("slot", null), index.h("slot", { name: SLOTS.centerRow }))
      ];
    return content;
  }
  renderFooter() {
    const hasFooter = !!dom.getSlotted(this.el, SLOTS.footer);
    return hasFooter ? (index.h("div", { class: CSS.footer }, index.h("slot", { name: SLOTS.footer }))) : null;
  }
  renderMain() {
    const primaryPanel = dom.getSlotted(this.el, SLOTS.primaryPanel);
    const mainClasses = {
      [CSS.main]: true,
      [CSS.mainReversed]: (primaryPanel === null || primaryPanel === void 0 ? void 0 : primaryPanel.position) === "end"
    };
    return (index.h("div", { class: mainClasses }, index.h("slot", { name: SLOTS.primaryPanel }), this.renderContent(), index.h("slot", { name: SLOTS.contextualPanel })));
  }
  render() {
    return (index.h(index.Fragment, null, this.renderHeader(), this.renderMain(), this.renderFooter()));
  }
  get el() { return index.getElement(this); }
};
CalciteShell.style = calciteShellCss;

exports.calcite_shell = CalciteShell;
