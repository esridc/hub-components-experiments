import { r as registerInstance, h, H as Host, g as getElement } from './index-9fca3863.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const CSS = {
  container: "container"
};

const calciteListCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block}.container{background-color:transparent;box-sizing:border-box;display:flex;flex-direction:column;width:100%}.container *{box-sizing:border-box}::slotted(calcite-list-item){margin-bottom:1px;box-shadow:0 1px 0 var(--calcite-ui-border-3)}::slotted(calcite-list-item:last-child){box-shadow:none}";

let CalciteList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    const firstListItem = this.el.querySelector(`calcite-list-item:not([non-interactive])`);
    firstListItem === null || firstListItem === void 0 ? void 0 : firstListItem.setFocus();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    return (h(Host, { role: "list" }, h("div", { class: CSS.container }, h("slot", null))));
  }
  get el() { return getElement(this); }
};
CalciteList.style = calciteListCss;

export { CalciteList as calcite_list };
