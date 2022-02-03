'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index$1 = require('./index-dad2b533.js');
const utils = require('./utils-9f0f44b9.js');
const index = require('./index-a2e82ee0.js');
const dom = require('./dom-c158885c.js');
const resources = require('./resources-a0ca9fb3.js');
const key = require('./key-244ba28e.js');
require('./_commonjsHelpers-a5111d61.js');
require('./guid-1ecb63ba.js');

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const CSS = {
  container: "container",
  preview: "preview",
  input: "input"
};

const calciteColorPickerHexInputCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block}.container{width:100%;display:inline-grid;align-items:center;grid-template-columns:1fr auto}.preview{grid-column:2/3;display:flex;align-items:center;pointer-events:none;margin-top:0;margin-bottom:0;margin-left:0.25rem;margin-right:0.25rem;z-index:1}.preview,.input{grid-row:1}.input{grid-column:1/3;text-transform:uppercase;width:100%}";

const DEFAULT_COLOR = index.color();
let CalciteColorPickerHexInput = class {
  constructor(hostRef) {
    index$1.registerInstance(this, hostRef);
    this.calciteColorPickerHexInputChange = index$1.createEvent(this, "calciteColorPickerHexInputChange", 7);
    //--------------------------------------------------------------------------
    //
    //  Public Properties
    //
    //--------------------------------------------------------------------------
    /**
     * When false, empty color (null) will be allowed as a value. Otherwise, a color value is always enforced by the component.
     *
     * When true, clearing the input and blurring will restore the last valid color set. When false, it will set it to empty.
     */
    this.allowEmpty = false;
    /**
     * Label used for the hex input.
     * @default "Hex"
     */
    this.intlHex = resources.TEXT.hex;
    /**
     * Label used for the hex input when there is no color selected.
     * @default "No color"
     */
    this.intlNoColor = resources.TEXT.noColor;
    /**
     * The component's scale.
     */
    this.scale = "m";
    /**
     * The hex value.
     */
    this.value = utils.normalizeHex(DEFAULT_COLOR.hex());
    this.onCalciteInputBlur = () => {
      const node = this.inputNode;
      const inputValue = node.value;
      const hex = `#${inputValue}`;
      const willClearValue = this.allowEmpty && !inputValue;
      if (willClearValue || (utils.isValidHex(hex) && utils.isLonghandHex(hex))) {
        return;
      }
      // manipulating DOM directly since rerender doesn't update input value
      node.value =
        this.allowEmpty && !this.internalColor
          ? ""
          : this.formatForInternalInput(utils.rgbToHex(this.internalColor.object()));
    };
    this.onInputChange = () => {
      const inputValue = this.inputNode.value;
      let value;
      if (inputValue) {
        const hex = inputValue;
        const color = utils.hexToRGB(`#${hex}`);
        if (!color) {
          return;
        }
        value = utils.normalizeHex(hex);
      }
      else if (this.allowEmpty) {
        value = null;
      }
      this.value = value;
      this.calciteColorPickerHexInputChange.emit();
    };
    /**
     * The last valid/selected color. Used as a fallback if an invalid hex code is entered.
     */
    this.internalColor = DEFAULT_COLOR;
    this.previousNonNullValue = this.value;
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.storeInputRef = (node) => {
      this.inputNode = node;
    };
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    const { allowEmpty, value } = this;
    if (value) {
      const normalized = utils.normalizeHex(value);
      if (utils.isValidHex(normalized)) {
        this.internalColor = index.color(normalized);
        this.value = normalized;
      }
      return;
    }
    if (allowEmpty) {
      this.internalColor = null;
      this.value = null;
    }
  }
  handleValueChange(value, oldValue) {
    if (value) {
      const normalized = utils.normalizeHex(value);
      if (utils.isValidHex(normalized)) {
        const { internalColor } = this;
        const changed = !internalColor || normalized !== utils.normalizeHex(internalColor.hex());
        this.internalColor = index.color(normalized);
        this.previousNonNullValue = normalized;
        this.value = normalized;
        if (changed) {
          this.calciteColorPickerHexInputChange.emit();
        }
        return;
      }
    }
    else if (this.allowEmpty) {
      this.internalColor = null;
      this.value = null;
      this.calciteColorPickerHexInputChange.emit();
      return;
    }
    this.value = oldValue;
  }
  // using @Listen as a workaround for VDOM listener not firing
  onInputKeyDown(event) {
    const { altKey, ctrlKey, metaKey, shiftKey } = event;
    const { internalColor, value } = this;
    const key$1 = key.getKey(event.key);
    if (key$1 === "Tab" || key$1 === "Enter") {
      this.onInputChange();
      return;
    }
    const isNudgeKey = key$1 === "ArrowDown" || key$1 === "ArrowUp";
    if (isNudgeKey) {
      if (!value) {
        this.value = this.previousNonNullValue;
        event.preventDefault();
        return;
      }
      const direction = key$1 === "ArrowUp" ? 1 : -1;
      const bump = shiftKey ? 10 : 1;
      this.value = utils.normalizeHex(this.nudgeRGBChannels(internalColor, bump * direction).hex());
      event.preventDefault();
      return;
    }
    const withModifiers = altKey || ctrlKey || metaKey;
    const singleChar = key$1.length === 1;
    const validHexChar = utils.hexChar.test(key$1);
    if (singleChar && !withModifiers && !validHexChar) {
      event.preventDefault();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  render() {
    const { el, intlHex, value } = this;
    const hexInputValue = this.formatForInternalInput(value);
    const elementDir = dom.getElementDir(el);
    return (index$1.h("div", { class: CSS.container }, index$1.h("calcite-input", { class: CSS.input, dir: elementDir, label: intlHex, maxLength: 6, onCalciteInputBlur: this.onCalciteInputBlur, onCalciteInputChange: this.onInputChange, prefixText: "#", ref: this.storeInputRef, scale: this.scale, value: hexInputValue }), hexInputValue ? (index$1.h("calcite-color-picker-swatch", { active: true, class: CSS.preview, color: `#${hexInputValue}`, scale: this.scale })) : null));
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    dom.focusElement(this.inputNode);
  }
  formatForInternalInput(hex) {
    return hex ? hex.replace("#", "") : "";
  }
  nudgeRGBChannels(color, amount) {
    return index.color.rgb(color.array().map((channel) => channel + amount));
  }
  get el() { return index$1.getElement(this); }
  static get watchers() { return {
    "value": ["handleValueChange"]
  }; }
};
CalciteColorPickerHexInput.style = calciteColorPickerHexInputCss;

exports.calcite_color_picker_hex_input = CalciteColorPickerHexInput;
