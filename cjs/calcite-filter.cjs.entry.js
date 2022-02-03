'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dad2b533.js');
const dom = require('./dom-c158885c.js');
const debounce = require('./debounce-11980960.js');
const forIn = require('./forIn-46535ded.js');
require('./guid-1ecb63ba.js');

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const CSS = {
  container: "container",
  searchIcon: "search-icon",
  clearButton: "clear-button"
};
const TEXT = {
  filterLabel: "Filter",
  clear: "Clear filter"
};
const ICONS = {
  search: "search",
  close: "x"
};

const calciteFilterCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:flex;width:100%}.container{display:flex;width:100%;padding:0.5rem}label{display:flex;align-items:center;overflow:hidden;position:relative;width:100%;margin-left:0.25rem;margin-right:0.25rem;margin-top:0;margin-bottom:0}input[type=text]{background-color:transparent;border-style:none;font-family:inherit;color:var(--calcite-ui-text-1);font-size:var(--calcite-font-size--2);line-height:1rem;margin-bottom:0.25rem;width:100%;padding-top:0.25rem;padding-bottom:0.25rem;padding-right:0.25rem;padding-left:1.5rem;transition:padding 150ms ease-in-out, box-shadow 150ms ease-in-out}input[type=text]::-ms-clear{display:none}calcite-input{width:100%}.search-icon{display:flex;left:0;position:absolute;color:var(--calcite-ui-text-2);transition:left 150ms ease-in-out, right 150ms ease-in-out, opacity 150ms ease-in-out}.calcite--rtl .search-icon{right:0}input[type=text]:focus{border-color:var(--calcite-ui-brand);outline:2px solid transparent;outline-offset:2px;padding-left:0.25rem;padding-right:0.25rem}input[type=text]:focus~.search-icon{left:calc(1rem * -1);opacity:0}.calcite--rtl input[type=text]{padding-left:0.25rem;padding-right:1.5rem}.calcite--rtl input[type=text]:focus{padding-right:1.25rem}.calcite--rtl input[type=text]:focus~.search-icon{right:calc(1rem * -1)}.clear-button{color:var(--calcite-ui-text-2);background-color:transparent;border-width:0;cursor:pointer;display:flex;align-items:center}.clear-button:hover,.clear-button:focus{color:var(--calcite-ui-text-1)}";

const filterDebounceInMs = 250;
let CalciteFilter = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteFilterChange = index.createEvent(this, "calciteFilterChange", 7);
    /**
     * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
     */
    this.disabled = false;
    /**
     * The resulting items after filtering.
     *
     * @readonly
     */
    this.filteredItems = [];
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.filter = debounce.debounce((value) => {
      const regex = new RegExp(value, "i");
      if (this.items.length === 0) {
        this.updateFiltered([]);
        return;
      }
      const find = (input, RE) => {
        let found = false;
        forIn.forIn(input, (val) => {
          if (typeof val === "function") {
            return;
          }
          if (Array.isArray(val) || (typeof val === "object" && val !== null)) {
            if (find(val, RE)) {
              found = true;
            }
          }
          else if (RE.test(val)) {
            found = true;
          }
        });
        return found;
      };
      const result = this.items.filter((item) => {
        return find(item, regex);
      });
      this.updateFiltered(result);
    }, filterDebounceInMs);
    this.inputHandler = (event) => {
      const target = event.target;
      this.value = target.value;
    };
    this.keyDownHandler = ({ key }) => {
      if (key === "Escape") {
        this.clear();
      }
    };
    this.clear = () => {
      this.value = "";
      this.setFocus();
    };
  }
  watchDataHandler(value) {
    this.items = value;
  }
  watchItemsHandler() {
    this.filter(this.value);
  }
  valueHandler(value) {
    this.filter(value);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    if (this.data && !this.items) {
      this.items = this.data;
    }
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    dom.focusElement(this.textInput);
  }
  updateFiltered(filtered) {
    this.filteredItems.length = 0;
    this.filteredItems = this.filteredItems.concat(filtered);
    this.calciteFilterChange.emit(filtered);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const rtl = dom.getElementDir(this.el) === "rtl";
    const { disabled } = this;
    return (index.h(index.Fragment, null, disabled ? index.h("calcite-scrim", null) : null, index.h("div", { class: CSS.container }, index.h("label", { class: rtl ? dom.CSS_UTILITY.rtl : null }, index.h("calcite-input", { "aria-label": this.intlLabel || TEXT.filterLabel, class: rtl ? dom.CSS_UTILITY.rtl : null, disabled: this.disabled, icon: ICONS.search, onCalciteInputInput: this.inputHandler, onKeyDown: this.keyDownHandler, placeholder: this.placeholder, ref: (el) => {
        this.textInput = el;
      }, type: "text", value: this.value })), this.value ? (index.h("button", { "aria-label": this.intlClear || TEXT.clear, class: CSS.clearButton, onClick: this.clear }, index.h("calcite-icon", { icon: ICONS.close }))) : null)));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "data": ["watchDataHandler"],
    "items": ["watchItemsHandler"],
    "value": ["valueHandler"]
  }; }
};
CalciteFilter.style = calciteFilterCss;

exports.calcite_filter = CalciteFilter;
