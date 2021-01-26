'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ad6d6974.js');
const dom = require('./dom-4924407a.js');
const key = require('./key-d6a0381e.js');
require('./_commonjsHelpers-72d386ba.js');
const utils = require('./utils-1cd24bd8.js');
const index$1 = require('./index-0766ff9f.js');
const resources = require('./resources-2d970c8a.js');

const CSS = {
  container: "container",
  preview: "preview",
  input: "input"
};

const calciteColorHexInputCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block}.container{width:100%;display:-ms-inline-grid;display:inline-grid;-ms-grid-columns:1fr auto;grid-template-columns:1fr auto;-ms-flex-align:center;align-items:center}.preview{-ms-grid-column:2;-ms-grid-column-span:1;grid-column:2/3;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:none;margin:0 6px;z-index:1}.preview,.input{-ms-grid-row:1;grid-row:1}.input{-ms-grid-column:1;-ms-grid-column-span:2;grid-column:1/3;text-transform:uppercase;width:100%}";

const DEFAULT_COLOR = index$1.Color();
const CalciteColorHexInput = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
         */
        this.intlHex = resources.TEXT.hex;
        /**
         * Label used for the hex input when there is no color selected.
         */
        this.intlNoColor = resources.TEXT.noColor;
        /**
         * The component's scale.
         */
        this.scale = "m";
        /**
         * The component's theme.
         */
        this.theme = "light";
        /**
         * The hex value.
         */
        this.value = utils.normalizeHex(DEFAULT_COLOR.hex());
        this.onCalciteInputBlur = (event) => {
            const node = event.currentTarget;
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
        this.onInputChange = (event) => {
            const node = event.currentTarget;
            const inputValue = node.value;
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
            this.calciteColorHexInputChange.emit();
        };
        this.onInputKeyDown = (event) => {
            const { altKey, ctrlKey, metaKey, shiftKey } = event;
            const { inputNode, internalColor, value } = this;
            const key$1 = key.getKey(event.key);
            const nudgeable = value && (key$1 === "ArrowDown" || key$1 === "ArrowUp");
            if (nudgeable) {
                const direction = key$1 === "ArrowUp" ? 1 : -1;
                const bump = shiftKey ? 10 : 1;
                this.value = utils.normalizeHex(this.nudgeRGBChannels(internalColor, bump * direction).hex());
                event.preventDefault();
                return;
            }
            const withModifiers = altKey || ctrlKey || metaKey;
            const exceededHexLength = inputNode.value.length >= 6;
            const hasTextSelection = getSelection().type === "Range";
            if (key$1.length === 1 &&
                !withModifiers &&
                !hasTextSelection &&
                (!utils.hexChar.test(key$1) || exceededHexLength)) {
                event.preventDefault();
            }
        };
        /**
         * The last valid/selected color. Used as a fallback if an invalid hex code is entered.
         */
        this.internalColor = DEFAULT_COLOR;
        //--------------------------------------------------------------------------
        //
        //  Private Methods
        //
        //--------------------------------------------------------------------------
        this.storeInputRef = (node) => {
            this.inputNode = node;
        };
        this.calciteColorHexInputChange = index.createEvent(this, "calciteColorHexInputChange", 7);
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
                this.internalColor = index$1.Color(normalized);
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
                this.internalColor = index$1.Color(normalized);
                this.value = normalized;
                if (changed) {
                    this.calciteColorHexInputChange.emit();
                }
                return;
            }
        }
        else if (this.allowEmpty) {
            this.internalColor = null;
            this.value = null;
            this.calciteColorHexInputChange.emit();
            return;
        }
        this.value = oldValue;
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
        return (index.h("div", { class: CSS.container }, index.h("calcite-input", { "aria-label": intlHex, class: CSS.input, dir: elementDir, onCalciteInputBlur: this.onCalciteInputBlur, onChange: this.onInputChange, onKeyDown: this.onInputKeyDown, prefixText: "#", ref: this.storeInputRef, scale: "s", value: hexInputValue }), hexInputValue ? (index.h("calcite-color-swatch", { active: true, class: CSS.preview, color: `#${hexInputValue}`, scale: "s" })) : null));
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
        return index$1.Color.rgb(color.array().map((channel) => channel + amount));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "value": ["handleValueChange"]
    }; }
};
CalciteColorHexInput.style = calciteColorHexInputCss;

exports.calcite_color_hex_input = CalciteColorHexInput;
