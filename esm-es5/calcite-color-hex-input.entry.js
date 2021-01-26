var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, c as createEvent, h, g as getElement } from './index-17d4341f.js';
import { g as getElementDir, b as focusElement } from './dom-29efd1ef.js';
import { g as getKey } from './key-6f340c70.js';
import './_commonjsHelpers-97e6d7b1.js';
import { n as normalizeHex, i as isValidHex, a as isLonghandHex, r as rgbToHex, h as hexToRGB, b as hexChar } from './utils-c43491f4.js';
import { C as Color } from './index-afa606fc.js';
import { T as TEXT } from './resources-43932828.js';
var CSS = {
    container: "container",
    preview: "preview",
    input: "input"
};
var calciteColorHexInputCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block}.container{width:100%;display:-ms-inline-grid;display:inline-grid;-ms-grid-columns:1fr auto;grid-template-columns:1fr auto;-ms-flex-align:center;align-items:center}.preview{-ms-grid-column:2;-ms-grid-column-span:1;grid-column:2/3;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:none;margin:0 6px;z-index:1}.preview,.input{-ms-grid-row:1;grid-row:1}.input{-ms-grid-column:1;-ms-grid-column-span:2;grid-column:1/3;text-transform:uppercase;width:100%}";
var DEFAULT_COLOR = Color();
var CalciteColorHexInput = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
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
        this.intlHex = TEXT.hex;
        /**
         * Label used for the hex input when there is no color selected.
         */
        this.intlNoColor = TEXT.noColor;
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
        this.value = normalizeHex(DEFAULT_COLOR.hex());
        this.onCalciteInputBlur = function (event) {
            var node = event.currentTarget;
            var inputValue = node.value;
            var hex = "#" + inputValue;
            var willClearValue = _this.allowEmpty && !inputValue;
            if (willClearValue || (isValidHex(hex) && isLonghandHex(hex))) {
                return;
            }
            // manipulating DOM directly since rerender doesn't update input value
            node.value =
                _this.allowEmpty && !_this.internalColor
                    ? ""
                    : _this.formatForInternalInput(rgbToHex(_this.internalColor.object()));
        };
        this.onInputChange = function (event) {
            var node = event.currentTarget;
            var inputValue = node.value;
            var value;
            if (inputValue) {
                var hex = inputValue;
                var color = hexToRGB("#" + hex);
                if (!color) {
                    return;
                }
                value = normalizeHex(hex);
            }
            else if (_this.allowEmpty) {
                value = null;
            }
            _this.value = value;
            _this.calciteColorHexInputChange.emit();
        };
        this.onInputKeyDown = function (event) {
            var altKey = event.altKey, ctrlKey = event.ctrlKey, metaKey = event.metaKey, shiftKey = event.shiftKey;
            var _a = _this, inputNode = _a.inputNode, internalColor = _a.internalColor, value = _a.value;
            var key = getKey(event.key);
            var nudgeable = value && (key === "ArrowDown" || key === "ArrowUp");
            if (nudgeable) {
                var direction = key === "ArrowUp" ? 1 : -1;
                var bump = shiftKey ? 10 : 1;
                _this.value = normalizeHex(_this.nudgeRGBChannels(internalColor, bump * direction).hex());
                event.preventDefault();
                return;
            }
            var withModifiers = altKey || ctrlKey || metaKey;
            var exceededHexLength = inputNode.value.length >= 6;
            var hasTextSelection = getSelection().type === "Range";
            if (key.length === 1 &&
                !withModifiers &&
                !hasTextSelection &&
                (!hexChar.test(key) || exceededHexLength)) {
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
        this.storeInputRef = function (node) {
            _this.inputNode = node;
        };
        this.calciteColorHexInputChange = createEvent(this, "calciteColorHexInputChange", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    class_1.prototype.connectedCallback = function () {
        var _a = this, allowEmpty = _a.allowEmpty, value = _a.value;
        if (value) {
            var normalized = normalizeHex(value);
            if (isValidHex(normalized)) {
                this.internalColor = Color(normalized);
                this.value = normalized;
            }
            return;
        }
        if (allowEmpty) {
            this.internalColor = null;
            this.value = null;
        }
    };
    class_1.prototype.handleValueChange = function (value, oldValue) {
        if (value) {
            var normalized = normalizeHex(value);
            if (isValidHex(normalized)) {
                var internalColor = this.internalColor;
                var changed = !internalColor || normalized !== normalizeHex(internalColor.hex());
                this.internalColor = Color(normalized);
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
    };
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    class_1.prototype.render = function () {
        var _a = this, el = _a.el, intlHex = _a.intlHex, value = _a.value;
        var hexInputValue = this.formatForInternalInput(value);
        var elementDir = getElementDir(el);
        return (h("div", { class: CSS.container }, h("calcite-input", { "aria-label": intlHex, class: CSS.input, dir: elementDir, onCalciteInputBlur: this.onCalciteInputBlur, onChange: this.onInputChange, onKeyDown: this.onInputKeyDown, prefixText: "#", ref: this.storeInputRef, scale: "s", value: hexInputValue }), hexInputValue ? (h("calcite-color-swatch", { active: true, class: CSS.preview, color: "#" + hexInputValue, scale: "s" })) : null));
    };
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    /** Sets focus on the component. */
    class_1.prototype.setFocus = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                focusElement(this.inputNode);
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.formatForInternalInput = function (hex) {
        return hex ? hex.replace("#", "") : "";
    };
    class_1.prototype.nudgeRGBChannels = function (color, amount) {
        return Color.rgb(color.array().map(function (channel) { return channel + amount; }));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "value": ["handleValueChange"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
CalciteColorHexInput.style = calciteColorHexInputCss;
export { CalciteColorHexInput as calcite_color_hex_input };
