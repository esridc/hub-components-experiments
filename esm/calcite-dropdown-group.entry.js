import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-9fca3863.js';
import { g as getElementDir, e as getElementProp } from './dom-b47352c7.js';
import './guid-ec8a882c.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const CSS = {
  containerSmall: "container--s",
  containerMedium: "container--m",
  containerLarge: "container--l"
};

const calciteDropdownGroupCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}.container--s{font-size:var(--calcite-font-size--2);line-height:1rem}.container--s .dropdown-title{padding:0.5rem}.container--m{font-size:var(--calcite-font-size--1);line-height:1rem}.container--m .dropdown-title{padding:0.75rem}.container--l{font-size:var(--calcite-font-size-0);line-height:1.25rem}.container--l .dropdown-title{padding:1rem}.dropdown-title{display:block;border-width:0;border-bottom-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);color:var(--calcite-ui-text-2);font-weight:var(--calcite-font-weight-bold);word-wrap:break-word;overflow-wrap:break-word;cursor:default;margin-bottom:-1px}.dropdown-separator{display:block;height:1px;background-color:var(--calcite-ui-border-3)}";

let CalciteDropdownGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteDropdownItemChange = createEvent(this, "calciteDropdownItemChange", 7);
    /** specify the selection mode - multi (allow any number of (or no) active items), single (allow and require one active item),
     none (no active items), defaults to single */
    this.selectionMode = "single";
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    this.groupPosition = this.getGroupPosition();
  }
  render() {
    const dir = getElementDir(this.el);
    const scale = this.scale || getElementProp(this.el, "scale", "m");
    const groupTitle = this.groupTitle ? (h("span", { "aria-hidden": "true", class: "dropdown-title" }, this.groupTitle)) : null;
    const dropdownSeparator = this.groupPosition > 0 ? h("div", { class: "dropdown-separator", role: "separator" }) : null;
    return (h(Host, { role: "menu" }, h("div", { class: {
        container: true,
        [CSS.containerSmall]: scale === "s",
        [CSS.containerMedium]: scale === "m",
        [CSS.containerLarge]: scale === "l"
      }, dir: dir, title: this.groupTitle }, dropdownSeparator, groupTitle, h("slot", null))));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  updateActiveItemOnChange(event) {
    this.requestedDropdownGroup = event.detail.requestedDropdownGroup;
    this.requestedDropdownItem = event.detail.requestedDropdownItem;
    this.calciteDropdownItemChange.emit({
      requestedDropdownGroup: this.requestedDropdownGroup,
      requestedDropdownItem: this.requestedDropdownItem
    });
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  getGroupPosition() {
    return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-dropdown-group"), this.el);
  }
  get el() { return getElement(this); }
};
CalciteDropdownGroup.style = calciteDropdownGroupCss;

export { CalciteDropdownGroup as calcite_dropdown_group };
