'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dad2b533.js');
const debounce = require('./debounce-11980960.js');
const forIn = require('./forIn-46535ded.js');
const dom = require('./dom-c158885c.js');
const key = require('./key-244ba28e.js');
const popper = require('./popper-11c688a0.js');
const guid = require('./guid-1ecb63ba.js');
const utils = require('./utils-0075f0e8.js');
const label = require('./label-9ef43de7.js');
const form = require('./form-278d87cb.js');
const observers = require('./observers-e8c2a0ed.js');

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = debounce.Symbol ? debounce.Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (forIn.isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (debounce.isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
    reHasRegExpChar = RegExp(reRegExpChar.source);

/**
 * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
 * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escapeRegExp('[lodash](https://lodash.com/)');
 * // => '\[lodash\]\(https://lodash\.com/\)'
 */
function escapeRegExp(string) {
  string = toString(string);
  return (string && reHasRegExpChar.test(string))
    ? string.replace(reRegExpChar, '\\$&')
    : string;
}

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const filter = (data, value) => {
  const escapedValue = escapeRegExp(value);
  const regex = new RegExp(escapedValue, "i");
  if (data.length === 0) {
    console.warn(`No data was passed to the filter function.
    The data argument should be an array of objects`);
  }
  const find = (input, RE) => {
    var _a;
    if ((_a = input) === null || _a === void 0 ? void 0 : _a.constant) {
      return true;
    }
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
  const result = data.filter((item) => {
    return find(item, regex);
  });
  return result;
};

const calciteComboboxCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block;position:relative}:host([disabled]){pointer-events:none;-webkit-user-select:none;user-select:none;opacity:0.5}:host([scale=s]){font-size:var(--calcite-font-size--2);--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-input-height:1.5rem}:host([scale=m]){font-size:var(--calcite-font-size--1);--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-input-height:2rem}:host([scale=l]){font-size:var(--calcite-font-size-0);--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-input-height:2.75rem}.wrapper{display:flex;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1);outline-offset:0;outline-color:transparent;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input);padding:0 var(--calcite-combobox-item-spacing-unit-l) 0 var(--calcite-combobox-item-spacing-unit-l)}:host(:focus-within) .wrapper,.wrapper--active{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.wrapper--single{padding:0 var(--calcite-combobox-item-spacing-unit-l);cursor:pointer;flex-wrap:nowrap}.grid-input{display:flex;flex-grow:1;flex-wrap:wrap;align-items:center;padding:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.input{flex-grow:1;font-family:inherit;padding:0;background-color:transparent;border-style:none;color:var(--calcite-ui-text-1);-webkit-appearance:none;appearance:none;font-size:inherit;height:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height);min-width:120px;margin-bottom:var(--calcite-combobox-item-spacing-unit-s)}.input:focus{outline:2px solid transparent;outline-offset:2px}.input--transparent{opacity:0}.input--single{margin-bottom:0;margin-top:0;padding:0}.wrapper--active .input-single{cursor:text}.input--hidden{width:0;min-width:0;opacity:0;pointer-events:none}.input--icon{padding:0 var(--calcite-combobox-item-spacing-unit-l)}.input-wrap{display:flex;flex-grow:1}.input-wrap--single{flex:1 1 auto;overflow:hidden}.label{padding:0;display:flex;font-weight:var(--calcite-font-weight-normal);flex:1 1 auto;pointer-events:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%;height:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height)}.label--spaced{padding-top:0;padding-bottom:0;padding-left:var(--calcite-combobox-item-spacing-unit-l);padding-right:var(--calcite-combobox-item-spacing-unit-l)}.icon-end,.icon-start{cursor:pointer;display:flex;align-items:center;width:1rem}.icon-end{flex:none}.popper-container{width:100%;display:block;position:absolute;z-index:900;transform:scale(0);visibility:hidden;pointer-events:none}.popper-container .calcite-popper-anim{position:relative;z-index:1;transition:var(--calcite-popper-transition);visibility:hidden;transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:0.25rem}.popper-container[data-popper-placement^=bottom] .calcite-popper-anim{transform:translateY(-5px)}.popper-container[data-popper-placement^=top] .calcite-popper-anim{transform:translateY(5px)}.popper-container[data-popper-placement^=left] .calcite-popper-anim{transform:translateX(5px)}.popper-container[data-popper-placement^=right] .calcite-popper-anim{transform:translateX(-5px)}.popper-container[data-popper-placement] .calcite-popper-anim--active{opacity:1;visibility:visible;transform:translate(0)}.popper-container--active{pointer-events:initial;visibility:visible}.screen-readers-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.list-container{overflow-y:auto;max-height:100vh;background-color:var(--calcite-ui-foreground-1);width:var(--calcite-dropdown-width)}.list{display:block;margin:0;padding:0}.list--hide{height:0;overflow:hidden}.chip{margin:calc(var(--calcite-combobox-item-spacing-unit-s) / 2) var(--calcite-combobox-item-spacing-unit-s) calc(var(--calcite-combobox-item-spacing-unit-s) / 2) 0;max-width:100%}.chip--active{background-color:var(--calcite-ui-foreground-3)}.chip:last-child{margin-right:0}.chip--rtl{margin-right:unset;margin-left:var(--calcite-combobox-item-spacing-unit-l)}.chip--rtl:last-child{margin-left:0}.item{display:block}::slotted(input[slot=hidden-form-input]){bottom:0 !important;left:0 !important;margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;right:0 !important;top:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";

const isGroup = (el) => el.tagName === utils.ComboboxItemGroup;
let CalciteCombobox = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteLookupChange = index.createEvent(this, "calciteLookupChange", 7);
    this.calciteComboboxChange = index.createEvent(this, "calciteComboboxChange", 7);
    this.calciteComboboxFilterChange = index.createEvent(this, "calciteComboboxFilterChange", 7);
    this.calciteComboboxChipDismiss = index.createEvent(this, "calciteComboboxChipDismiss", 7);
    this.calciteComboboxOpen = index.createEvent(this, "calciteComboboxOpen", 7);
    this.calciteComboboxClose = index.createEvent(this, "calciteComboboxClose", 7);
    //--------------------------------------------------------------------------
    //
    //  Public Properties
    //
    //--------------------------------------------------------------------------
    /** Opens or closes the combobox */
    this.active = false;
    /** Disable combobox input */
    this.disabled = false;
    /** Specify the maximum number of combobox items (including nested children) to display before showing the scroller */
    this.maxItems = 0;
    /** Describes the type of positioning to use for the overlaid content. If your element is in a fixed container, use the 'fixed' value. */
    this.overlayPositioning = "absolute";
    /**
     * When true, makes the component required for form-submission.
     *
     * @internal
     */
    this.required = false;
    /** specify the selection mode
     * - multi: allow any number of selected items (default)
     * - single: only one selection)
     * - ancestors: like multi, but show ancestors of selected items as selected, only deepest children shown in chips
     */
    this.selectionMode = "multi";
    /** Specify the scale of the combobox, defaults to m */
    this.scale = "m";
    /** The value(s) of the selectedItem(s) */
    this.value = null;
    //--------------------------------------------------------------------------
    //
    //  Private State/Props
    //
    //--------------------------------------------------------------------------
    this.internalValueChangeFlag = false;
    this.items = [];
    this.groupItems = [];
    this.selectedItems = [];
    this.visibleItems = [];
    this.hideList = !this.active;
    this.activeItemIndex = -1;
    this.activeChipIndex = -1;
    this.activeDescendant = "";
    this.text = "";
    this.open = this.active;
    /** specifies the item wrapper height; it is updated when maxItems is > 0  **/
    this.maxScrollerHeight = 0;
    this.textInput = null;
    this.mutationObserver = observers.createObserver("mutation", () => this.updateItems());
    this.guid = guid.guid();
    this.inputHeight = 0;
    this.ignoreSelectedEventsFlag = false;
    this.activeTransitionProp = "opacity";
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.getValue = () => {
      const items = this.selectedItems.map((item) => item === null || item === void 0 ? void 0 : item.value.toString());
      return (items === null || items === void 0 ? void 0 : items.length) ? (items.length > 1 ? items : items[0]) : "";
    };
    this.onLabelClick = () => {
      this.setFocus();
    };
    this.keydownHandler = (event) => {
      const key$1 = key.getKey(event.key, dom.getElementDir(this.el));
      switch (key$1) {
        case "Tab":
          this.activeChipIndex = -1;
          this.activeItemIndex = -1;
          if (this.allowCustomValues && this.text) {
            this.addCustomChip(this.text, true);
            event.preventDefault();
          }
          else {
            this.active = false;
          }
          break;
        case "ArrowLeft":
          this.previousChip();
          break;
        case "ArrowRight":
          this.nextChip();
          break;
        case "ArrowUp":
          event.preventDefault();
          this.active = true;
          this.shiftActiveItemIndex(-1);
          break;
        case "ArrowDown":
          event.preventDefault();
          this.active = true;
          this.shiftActiveItemIndex(1);
          break;
        case "Home":
          this.active = true;
          this.updateActiveItemIndex(0);
          break;
        case "End":
          this.active = true;
          this.updateActiveItemIndex(this.visibleItems.length - 1);
          break;
        case "Escape":
          this.active = false;
          break;
        case "Enter":
          if (this.activeItemIndex > -1) {
            this.toggleSelection(this.visibleItems[this.activeItemIndex]);
          }
          else if (this.activeChipIndex > -1) {
            this.removeActiveChip();
          }
          else if (this.allowCustomValues && this.text) {
            this.addCustomChip(this.text, true);
          }
          break;
        case "Delete":
        case "Backspace":
          if (this.activeChipIndex > -1) {
            this.removeActiveChip();
          }
          else if (!this.text && this.isMulti()) {
            this.removeLastChip();
          }
          break;
        default:
          if (!this.active) {
            this.setFocus();
          }
          break;
      }
    };
    this.toggleCloseEnd = () => {
      this.hideList = true;
      this.el.removeEventListener("calciteComboboxClose", this.toggleCloseEnd);
    };
    this.toggleOpenEnd = () => {
      this.hideList = false;
      this.el.removeEventListener("calciteComboboxOpen", this.toggleOpenEnd);
    };
    this.transitionEnd = (event) => {
      if (event.propertyName === this.activeTransitionProp) {
        this.active ? this.calciteComboboxOpen.emit() : this.calciteComboboxClose.emit();
      }
    };
    this.setMaxScrollerHeight = () => {
      if (this.active) {
        this.maxScrollerHeight = this.getMaxScrollerHeight(this.getCombinedItems());
      }
    };
    this.calciteChipDismissHandler = (event, comboboxItem) => {
      this.active = false;
      const selection = this.items.find((item) => item === comboboxItem);
      if (selection) {
        this.toggleSelection(selection, false);
      }
      this.calciteComboboxChipDismiss.emit(event.detail);
    };
    this.setFocusClick = (event) => {
      if (event.composedPath().some((node) => node.tagName === "CALCITE-CHIP")) {
        return;
      }
      this.setFocus();
    };
    this.setInactiveIfNotContained = (event) => {
      const composedPath = event.composedPath();
      if (!this.active || composedPath.includes(this.el) || composedPath.includes(this.referenceEl)) {
        return;
      }
      if (this.allowCustomValues && this.text) {
        this.addCustomChip(this.text);
      }
      if (this.selectionMode === "single") {
        if (this.textInput) {
          this.textInput.value = "";
        }
        this.text = "";
        this.filterItems("");
        this.updateActiveItemIndex(-1);
      }
      this.active = false;
    };
    this.setMenuEl = (el) => {
      this.menuEl = el;
    };
    this.setListContainerEl = (el) => {
      this.listContainerEl = el;
    };
    this.setReferenceEl = (el) => {
      this.referenceEl = el;
    };
    this.inputHandler = (event) => {
      const value = event.target.value;
      this.text = value;
      this.filterItems(value);
      if (value) {
        this.activeChipIndex = -1;
      }
    };
    this.filterItems = (() => {
      const find = (item, filteredData) => item &&
        filteredData.some(({ label, value }) => {
          if (isGroup(item)) {
            return value === item.label || value === item.label;
          }
          return (value === item.textLabel ||
            value === item.value ||
            label === item.textLabel ||
            label === item.value);
        });
      return debounce.debounce((text) => {
        const filteredData = filter(this.data, text);
        const items = this.getCombinedItems();
        items.forEach((item) => {
          const hidden = !find(item, filteredData);
          item.hidden = hidden;
          const [parent, grandparent] = item.ancestors;
          if (find(parent, filteredData) || find(grandparent, filteredData)) {
            item.hidden = false;
          }
          if (!hidden) {
            item.ancestors.forEach((ancestor) => (ancestor.hidden = false));
          }
        });
        this.visibleItems = this.getVisibleItems();
        this.calciteComboboxFilterChange.emit({ visibleItems: [...this.visibleItems], text: text });
      }, 100);
    })();
    this.internalCalciteLookupChangeEvent = () => {
      this.calciteLookupChange.emit(this.selectedItems);
    };
    this.emitCalciteLookupChange = debounce.debounce(this.internalCalciteLookupChangeEvent, 0);
    this.internalComboboxChangeEvent = () => {
      const { selectedItems } = this;
      this.calciteComboboxChange.emit({ selectedItems });
    };
    this.emitComboboxChange = debounce.debounce(this.internalComboboxChangeEvent, 0);
    this.updateItems = () => {
      this.items = this.getItems();
      this.groupItems = this.getGroupItems();
      this.data = this.getData();
      this.selectedItems = this.getSelectedItems();
      this.visibleItems = this.getVisibleItems();
      this.needsIcon = this.getNeedsIcon();
      if (!this.allowCustomValues) {
        this.setMaxScrollerHeight();
      }
    };
    this.comboboxFocusHandler = () => {
      var _a;
      this.active = true;
      (_a = this.textInput) === null || _a === void 0 ? void 0 : _a.focus();
    };
    this.comboboxBlurHandler = (event) => {
      this.setInactiveIfNotContained(event);
    };
  }
  activeHandler(newValue, oldValue) {
    // when closing, wait transition time then hide to prevent overscroll
    if (oldValue && !newValue) {
      this.el.addEventListener("calciteComboboxClose", this.toggleCloseEnd);
      this.open = false;
    }
    else if (!oldValue && newValue) {
      this.el.addEventListener("calciteComboboxOpen", this.toggleOpenEnd);
      // give the combobox height, then reposition prior to opening
      requestAnimationFrame(() => {
        this.reposition();
        this.setMaxScrollerHeight();
        this.open = true;
      });
    }
    this.reposition();
    this.setMaxScrollerHeight();
  }
  maxItemsHandler() {
    this.setMaxScrollerHeight();
  }
  valueHandler(value) {
    if (!this.internalValueChangeFlag) {
      const items = this.getItems();
      if (Array.isArray(value)) {
        items.forEach((item) => (item.selected = value.includes(item.value)));
      }
      else if (value) {
        items.forEach((item) => (item.selected = value === item.value));
      }
      else {
        items.forEach((item) => (item.selected = false));
      }
      this.updateItems();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  documentClickHandler(event) {
    this.setInactiveIfNotContained(event);
  }
  calciteComboboxItemChangeHandler(event) {
    if (this.ignoreSelectedEventsFlag) {
      return;
    }
    const target = event.target;
    this.toggleSelection(target, target.selected);
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Updates the position of the component. */
  async reposition() {
    const { popper: popper$1, menuEl } = this;
    const modifiers = this.getModifiers();
    popper$1
      ? await popper.updatePopper({
        el: menuEl,
        modifiers,
        placement: utils.ComboboxDefaultPlacement,
        popper: popper$1
      })
      : this.createPopper();
  }
  /** Sets focus on the component. */
  async setFocus() {
    var _a;
    this.active = true;
    (_a = this.textInput) === null || _a === void 0 ? void 0 : _a.focus();
    this.activeChipIndex = -1;
    this.activeItemIndex = -1;
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    var _a;
    this.internalValueChangeFlag = true;
    this.value = this.getValue();
    this.internalValueChangeFlag = false;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.observe(this.el, { childList: true, subtree: true });
    this.createPopper();
    label.connectLabel(this);
    form.connectForm(this);
  }
  componentWillLoad() {
    this.updateItems();
  }
  componentDidLoad() {
    form.afterConnectDefaultValueSet(this, this.getValue());
  }
  componentDidRender() {
    if (this.el.offsetHeight !== this.inputHeight) {
      this.reposition();
      this.inputHeight = this.el.offsetHeight;
    }
  }
  disconnectedCallback() {
    var _a;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    this.destroyPopper();
    label.disconnectLabel(this);
    form.disconnectForm(this);
  }
  selectedItemsHandler() {
    this.internalValueChangeFlag = true;
    this.value = this.getValue();
    this.internalValueChangeFlag = false;
  }
  /** when search text is cleared, reset active to  */
  textHandler() {
    this.updateActiveItemIndex(-1);
  }
  getModifiers() {
    const flipModifier = {
      name: "flip",
      enabled: true
    };
    flipModifier.options = {
      fallbackPlacements: ["top-start", "top", "top-end", "bottom-start", "bottom", "bottom-end"]
    };
    return [flipModifier];
  }
  createPopper() {
    this.destroyPopper();
    const { menuEl, referenceEl, overlayPositioning } = this;
    const modifiers = this.getModifiers();
    this.popper = popper.createPopper({
      el: menuEl,
      modifiers,
      overlayPositioning,
      placement: utils.ComboboxDefaultPlacement,
      referenceEl
    });
  }
  destroyPopper() {
    const { popper } = this;
    if (popper) {
      popper.destroy();
    }
    this.popper = null;
  }
  getMaxScrollerHeight(items) {
    const { maxItems } = this;
    let itemsToProcess = 0;
    let maxScrollerHeight = 0;
    items.forEach((item) => {
      if (itemsToProcess < maxItems && maxItems > 0) {
        const height = this.calculateSingleItemHeight(item);
        if (height > 0) {
          maxScrollerHeight += height;
          itemsToProcess++;
        }
      }
    });
    return maxScrollerHeight;
  }
  calculateSingleItemHeight(item) {
    let height = item.offsetHeight;
    // if item has children items, don't count their height twice
    const children = Array.from(item.querySelectorAll(utils.ComboboxChildSelector));
    children
      .map((child) => child === null || child === void 0 ? void 0 : child.offsetHeight)
      .forEach((offsetHeight) => {
      height -= offsetHeight;
    });
    return height;
  }
  getCombinedItems() {
    return [...this.groupItems, ...this.items];
  }
  toggleSelection(item, value = !item.selected) {
    if (!item) {
      return;
    }
    if (this.isMulti()) {
      item.selected = value;
      this.updateAncestors(item);
      this.selectedItems = this.getSelectedItems();
      this.emitCalciteLookupChange();
      this.emitComboboxChange();
      this.resetText();
      this.filterItems("");
    }
    else {
      this.ignoreSelectedEventsFlag = true;
      this.items.forEach((el) => (el.selected = el === item ? value : false));
      this.ignoreSelectedEventsFlag = false;
      this.selectedItems = this.getSelectedItems();
      this.emitComboboxChange();
      if (this.textInput) {
        this.textInput.value = item.textLabel;
      }
      this.active = false;
      this.updateActiveItemIndex(-1);
      this.resetText();
      this.filterItems("");
    }
  }
  updateAncestors(item) {
    if (this.selectionMode !== "ancestors") {
      return;
    }
    const ancestors = utils.getItemAncestors(item);
    const children = utils.getItemChildren(item);
    if (item.selected) {
      ancestors.forEach((el) => {
        el.selected = true;
      });
    }
    else {
      children.forEach((el) => (el.selected = false));
      [...ancestors].forEach((el) => {
        if (!utils.hasActiveChildren(el)) {
          el.selected = false;
        }
      });
    }
  }
  getVisibleItems() {
    return this.items.filter((item) => !item.hidden);
  }
  getSelectedItems() {
    return !this.isMulti()
      ? [this.items.find((item) => item.selected)]
      : this.items
        .filter((item) => item.selected && (this.selectionMode !== "ancestors" || !utils.hasActiveChildren(item)))
        /** Preserve order of entered tags */
        .sort((a, b) => {
        const aIdx = this.selectedItems.indexOf(a);
        const bIdx = this.selectedItems.indexOf(b);
        if (aIdx > -1 && bIdx > -1) {
          return aIdx - bIdx;
        }
        return bIdx - aIdx;
      });
  }
  getData() {
    return this.items.map((item) => ({
      constant: item.constant,
      value: item.value,
      label: item.textLabel,
      guid: item.guid
    }));
  }
  getNeedsIcon() {
    return this.selectionMode === "single" && this.items.some((item) => item.icon);
  }
  resetText() {
    if (this.textInput) {
      this.textInput.value = "";
    }
    this.text = "";
  }
  getItems() {
    const items = Array.from(this.el.querySelectorAll(utils.ComboboxItem));
    return items.filter((item) => !item.disabled);
  }
  getGroupItems() {
    return Array.from(this.el.querySelectorAll(utils.ComboboxItemGroup));
  }
  addCustomChip(value, focus) {
    const existingItem = this.items.find((el) => el.textLabel === value);
    if (existingItem) {
      this.toggleSelection(existingItem, true);
    }
    else {
      const item = document.createElement(utils.ComboboxItem);
      item.value = value;
      item.textLabel = value;
      item.guid = guid.guid();
      item.selected = true;
      this.el.appendChild(item);
      this.resetText();
      if (focus) {
        this.setFocus();
      }
      this.updateItems();
      this.filterItems("");
      this.emitCalciteLookupChange();
      this.emitComboboxChange();
    }
  }
  removeActiveChip() {
    this.toggleSelection(this.selectedItems[this.activeChipIndex], false);
    this.setFocus();
  }
  removeLastChip() {
    this.toggleSelection(this.selectedItems[this.selectedItems.length - 1], false);
    this.setFocus();
  }
  previousChip() {
    if (this.text) {
      return;
    }
    const length = this.selectedItems.length - 1;
    const active = this.activeChipIndex;
    this.activeChipIndex = active === -1 ? length : Math.max(active - 1, 0);
    this.updateActiveItemIndex(-1);
    this.focusChip();
  }
  nextChip() {
    if (this.text || this.activeChipIndex === -1) {
      return;
    }
    const last = this.selectedItems.length - 1;
    const newIndex = this.activeChipIndex + 1;
    if (newIndex > last) {
      this.activeChipIndex = -1;
      this.setFocus();
    }
    else {
      this.activeChipIndex = newIndex;
      this.focusChip();
    }
    this.updateActiveItemIndex(-1);
  }
  focusChip() {
    var _a;
    const guid = (_a = this.selectedItems[this.activeChipIndex]) === null || _a === void 0 ? void 0 : _a.guid;
    const chip = this.referenceEl.querySelector(`#chip-${guid}`);
    chip === null || chip === void 0 ? void 0 : chip.setFocus();
  }
  shiftActiveItemIndex(delta) {
    const length = this.visibleItems.length;
    const newIndex = (this.activeItemIndex + length + delta) % length;
    this.updateActiveItemIndex(newIndex);
    // ensure active item is in view if we have scrolling
    const activeItem = this.visibleItems[this.activeItemIndex];
    const height = this.calculateSingleItemHeight(activeItem);
    const { offsetHeight, scrollTop } = this.listContainerEl;
    if (offsetHeight + scrollTop < activeItem.offsetTop + height) {
      this.listContainerEl.scrollTop = activeItem.offsetTop - offsetHeight + height;
    }
    else if (activeItem.offsetTop < scrollTop) {
      this.listContainerEl.scrollTop = activeItem.offsetTop;
    }
  }
  updateActiveItemIndex(index) {
    var _a;
    this.activeItemIndex = index;
    let activeDescendant = null;
    this.visibleItems.forEach((el, i) => {
      if (i === index) {
        el.active = true;
        activeDescendant = el.guid;
      }
      else {
        el.active = false;
      }
    });
    this.activeDescendant = activeDescendant;
    if (this.activeItemIndex > -1) {
      this.activeChipIndex = -1;
      (_a = this.textInput) === null || _a === void 0 ? void 0 : _a.focus();
    }
  }
  isMulti() {
    return this.selectionMode !== "single";
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  renderChips() {
    const { activeChipIndex, scale, selectionMode, el } = this;
    const dir = dom.getElementDir(el);
    return this.selectedItems.map((item, i) => {
      const chipClasses = {
        chip: true,
        "chip--active": activeChipIndex === i,
        "chip--rtl": dir === "rtl"
      };
      const ancestors = [...utils.getItemAncestors(item)].reverse();
      const pathLabel = [...ancestors, item].map((el) => el.textLabel);
      const label = selectionMode !== "ancestors" ? item.textLabel : pathLabel.join(" / ");
      return (index.h("calcite-chip", { "aria-label": label, class: chipClasses, dismissLabel: "remove tag", dismissible: true, icon: item.icon, id: `chip-${item.guid}`, key: item.textLabel, onCalciteChipDismiss: (event) => this.calciteChipDismissHandler(event, item), scale: scale, title: label, value: item.value }, label));
    });
  }
  renderInput() {
    const { active, disabled, placeholder, selectionMode, needsIcon, selectedItems } = this;
    const single = selectionMode === "single";
    const selectedItem = selectedItems[0];
    const showLabel = !active && single && !!selectedItem;
    return (index.h("span", { class: {
        "input-wrap": true,
        "input-wrap--single": single
      } }, showLabel && (index.h("span", { class: {
        label: true,
        "label--spaced": needsIcon
      }, key: "label", onFocus: this.comboboxFocusHandler, tabindex: "0" }, selectedItem.textLabel)), index.h("input", { "aria-activedescendant": this.activeDescendant, "aria-autocomplete": "list", "aria-controls": guid.guid, "aria-label": label.getLabelText(this), class: {
        input: true,
        "input--single": true,
        "input--transparent": this.activeChipIndex > -1,
        "input--hidden": showLabel,
        "input--icon": single && needsIcon
      }, disabled: disabled, id: `${guid.guid}-input`, key: "input", onBlur: this.comboboxBlurHandler, onFocus: this.comboboxFocusHandler, onInput: this.inputHandler, placeholder: placeholder, ref: (el) => (this.textInput = el), type: "text" })));
  }
  renderListBoxOptions() {
    return this.visibleItems.map((item) => (index.h("li", { "aria-selected": (!!item.selected).toString(), id: item.guid, role: "option", tabindex: "-1" }, item.textLabel)));
  }
  renderPopperContainer() {
    const { active, maxScrollerHeight, setMenuEl, setListContainerEl, hideList, open } = this;
    const classes = {
      "list-container": true,
      [popper.CSS.animation]: true,
      [popper.CSS.animationActive]: active
    };
    const style = {
      maxHeight: maxScrollerHeight > 0 ? `${maxScrollerHeight}px` : ""
    };
    return (index.h("div", { "aria-hidden": "true", class: { "popper-container": true, "popper-container--active": open }, ref: setMenuEl }, index.h("div", { class: classes, onTransitionEnd: this.transitionEnd, ref: setListContainerEl, style: style }, index.h("ul", { class: { list: true, "list--hide": hideList } }, index.h("slot", null)))));
  }
  renderIconStart() {
    const { selectionMode, needsIcon, selectedItems } = this;
    const selectedItem = selectedItems[0];
    return (selectionMode === "single" &&
      needsIcon && (index.h("span", { class: "icon-start" }, (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.icon) && (index.h("calcite-icon", { class: "selected-icon", icon: selectedItem.icon, scale: "s" })))));
  }
  renderIconEnd() {
    return (index.h("span", { class: "icon-end" }, index.h("calcite-icon", { icon: "chevron-down", scale: "s" })));
  }
  render() {
    const { guid, open, label } = this;
    const single = this.selectionMode === "single";
    const labelId = `${guid}-label`;
    return (index.h(index.Host, { onKeyDown: this.keydownHandler }, index.h("div", { "aria-autocomplete": "list", "aria-expanded": open.toString(), "aria-haspopup": "listbox", "aria-labelledby": labelId, "aria-owns": guid, class: {
        wrapper: true,
        "wrapper--single": single || !this.selectedItems.length,
        "wrapper--active": open
      }, onClick: this.setFocusClick, ref: this.setReferenceEl, role: "combobox" }, index.h("div", { class: "grid-input" }, this.renderIconStart(), !single && this.renderChips(), index.h("label", { class: "screen-readers-only", htmlFor: `${guid}-input`, id: labelId }, label), this.renderInput()), this.renderIconEnd()), index.h("ul", { "aria-labelledby": labelId, "aria-multiselectable": "true", class: "screen-readers-only", id: guid, role: "listbox", tabIndex: -1 }, this.renderListBoxOptions()), this.renderPopperContainer(), index.h(form.HiddenFormInputSlot, { component: this })));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "active": ["activeHandler"],
    "maxItems": ["maxItemsHandler"],
    "value": ["valueHandler"],
    "selectedItems": ["selectedItemsHandler"],
    "text": ["textHandler"]
  }; }
};
CalciteCombobox.style = calciteComboboxCss;

exports.calcite_combobox = CalciteCombobox;
