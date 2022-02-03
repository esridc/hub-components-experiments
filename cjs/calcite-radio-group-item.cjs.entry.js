'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dad2b533.js');
const dom = require('./dom-c158885c.js');
const observers = require('./observers-e8c2a0ed.js');
require('./guid-1ecb63ba.js');

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const SLOTS = {
  input: "input"
};
const CSS = {
  radioGroupItemIcon: "radio-group-item-icon"
};

const calciteRadioGroupItemCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:flex;align-self:stretch;cursor:pointer;font-weight:var(--calcite-font-weight-normal);transition:background-color 0.1s ease-in-out, border-color 0.1s ease-in-out}:host label{display:flex;flex:1 1 0%;color:var(--calcite-ui-text-3);box-sizing:border-box;pointer-events:none;align-items:center;margin:0.125rem;transition:background-color 0.1s ease-in-out, border-color 0.1s ease-in-out, color 0.1s ease-in-out}.label--horizontal{justify-content:center}:host{outline-offset:0;outline-color:transparent;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:-2px;outline-offset:-1px}.label--scale-s{font-size:var(--calcite-font-size--2);line-height:1rem;padding-left:0.5rem;padding-right:0.5rem;padding-top:0.125rem;padding-bottom:0.125rem}.label--scale-m{font-size:var(--calcite-font-size--1);line-height:1rem;padding-left:0.75rem;padding-right:0.75rem;padding-top:0.375rem;padding-bottom:0.375rem}.label--scale-l{font-size:var(--calcite-font-size-0);line-height:1.25rem;padding-left:1rem;padding-right:1rem;padding-top:0.625rem;padding-bottom:0.625rem}:host(:hover) label{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host(:active) label{background-color:var(--calcite-ui-foreground-3)}:host([checked]) label{background-color:var(--calcite-ui-brand);border-color:var(--calcite-ui-brand);cursor:default;color:var(--calcite-ui-background)}:host([checked]) .label--outline{background-color:var(--calcite-ui-foreground-1);border-color:var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);color:var(--calcite-ui-brand)}::slotted(input){display:none}.radio-group-item-icon{display:inline-flex;position:relative;margin:0;line-height:inherit}:host([icon-position=start]) .label--scale-s .radio-group-item-icon{margin-inline-end:0.5rem}:host([icon-position=end]) .label--scale-s .radio-group-item-icon{margin-inline-end:unset;margin-inline-start:0.5rem}:host([icon-position=start]) .label--scale-m .radio-group-item-icon{margin-inline-end:0.75rem}:host([icon-position=end]) .label--scale-m .radio-group-item-icon{margin-inline-end:unset;margin-inline-start:0.75rem}:host([icon-position=start]) .label--scale-l .radio-group-item-icon{margin-inline-end:1rem}:host([icon-position=end]) .label--scale-l .radio-group-item-icon{margin-inline-end:unset;margin-inline-start:1rem}";

let CalciteRadioGroupItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteRadioGroupItemChange = index.createEvent(this, "calciteRadioGroupItemChange", 7);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** Indicates whether the control is checked. */
    this.checked = false;
    /** flip the icon in rtl */
    this.iconFlipRtl = false;
    /** optionally used with icon, select where to position the icon */
    this.iconPosition = "start";
    this.mutationObserver = observers.createObserver("mutation", () => this.syncFromExternalInput());
  }
  handleCheckedChange() {
    this.calciteRadioGroupItemChange.emit();
    this.syncToExternalInput();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    var _a;
    const inputProxy = this.el.querySelector(`input[slot=${SLOTS.input}]`);
    if (inputProxy) {
      this.value = inputProxy.value;
      this.checked = inputProxy.checked;
      (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.observe(inputProxy, { attributes: true });
    }
    this.inputProxy = inputProxy;
  }
  disconnectedCallback() {
    var _a;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
  }
  componentWillLoad() {
    // only use default slot content in browsers that support shadow dom
    // or if ie11 has no label provided (#374)
    const label = this.el.querySelector("label");
    this.useFallback = !label || label.textContent === "";
  }
  render() {
    const { checked, useFallback, value } = this;
    const dir = dom.getElementDir(this.el);
    const scale = dom.getElementProp(this.el, "scale", "m");
    const appearance = dom.getElementProp(this.el, "appearance", "solid");
    const layout = dom.getElementProp(this.el, "layout", "horizontal");
    const iconEl = (index.h("calcite-icon", { class: CSS.radioGroupItemIcon, dir: dir, flipRtl: this.iconFlipRtl, icon: this.icon, scale: "s" }));
    return (index.h(index.Host, { "aria-checked": checked.toString(), role: "radio" }, index.h("label", { class: {
        "label--scale-s": scale === "s",
        "label--scale-m": scale === "m",
        "label--scale-l": scale === "l",
        "label--horizontal": layout === "horizontal",
        "label--outline": appearance === "outline"
      } }, this.icon && this.iconPosition === "start" ? iconEl : null, index.h("slot", null, useFallback ? value : ""), index.h("slot", { name: SLOTS.input }), this.icon && this.iconPosition === "end" ? iconEl : null)));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  syncFromExternalInput() {
    if (this.inputProxy) {
      this.value = this.inputProxy.value;
      this.checked = this.inputProxy.checked;
    }
  }
  syncToExternalInput() {
    if (!this.inputProxy) {
      return;
    }
    this.inputProxy.value = this.value;
    if (this.checked) {
      this.inputProxy.setAttribute("checked", "");
    }
    else {
      this.inputProxy.removeAttribute("checked");
    }
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "checked": ["handleCheckedChange"]
  }; }
};
CalciteRadioGroupItem.style = calciteRadioGroupItemCss;

exports.calcite_radio_group_item = CalciteRadioGroupItem;
