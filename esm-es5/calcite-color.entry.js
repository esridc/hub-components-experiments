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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { r as registerInstance, h, c as createEvent, g as getElement } from './index-17d4341f.js';
import { b as focusElement, g as getElementDir } from './dom-29efd1ef.js';
import { g as getKey } from './key-6f340c70.js';
import './_commonjsHelpers-97e6d7b1.js';
import { n as normalizeHex, C as CSSColorMode, p as parseMode, c as colorEqual } from './utils-c43491f4.js';
import { C as Color } from './index-afa606fc.js';
import { D as DEFAULT_COLOR, T as TEXT, a as DIMENSIONS, C as CSS, H as HSV_LIMITS, b as DEFAULT_STORAGE_KEY_PREFIX, R as RGB_LIMITS } from './resources-43932828.js';
import { t as throttle } from './lodash-4311644d.js';
var calciteColorCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]) .container{width:156px}:host([scale=s]) .saved-colors{grid-template-columns:repeat(auto-fill, minmax(20px, 1fr))}:host([scale=s]) .channels{-ms-flex-direction:column;flex-direction:column}:host([scale=s]) .channel{width:100%;margin-bottom:4px}:host([scale=s]) .channel:last-child{margin-bottom:0}:host([scale=m]) .container{width:272px}:host([scale=l][dir=rtl]) .control-section>:nth-child(2){margin-left:0;margin-right:12px}:host([scale=l]) .container{width:420px}:host([scale=l]) .color-field-and-slider{margin-bottom:-20px}:host([scale=l]) .section{padding:0 16px 16px}:host([scale=l]) .section:first-of-type{padding-top:16px}:host([scale=l]) .saved-colors{grid-template-columns:repeat(auto-fill, minmax(28px, 1fr));grid-gap:12px;padding-top:16px}:host([scale=l]) .control-section{-ms-flex-wrap:nowrap;flex-wrap:nowrap}:host([scale=l]) .control-section>:nth-child(2){margin-left:12px}:host([scale=l]) .color-hex-options{-ms-flex-negative:1;flex-shrink:1}:host([scale=l]) .color-mode-container{-ms-flex-negative:3;flex-shrink:3}:host([appearance=minimal]) .container{border:none}.container{display:inline-block;border:1px solid var(--calcite-ui-border-1);background-color:var(--calcite-ui-foreground-1)}.color-field-and-slider{margin-bottom:-16px}.color-field-and-slider--interactive{cursor:pointer}.control-section{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}.section{padding:0 12px 12px}.section:first-of-type{padding-top:12px}.color-hex-options,.section--split{-ms-flex-positive:1;flex-grow:1}.header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;color:var(--calcite-ui-text-3);font-weight:500;font-size:0.875rem;line-height:1.5}.header.header--underlined{border-bottom:1px solid var(--calcite-ui-border-1)}.header--hex{line-height:1.5;font-size:0.875rem;line-height:1.5;padding:12px 0 15px}.control{margin-top:8px}.channels{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.channel{width:31%}.saved-colors{padding-top:12px;display:-ms-grid;display:grid;grid-template-columns:repeat(auto-fill, minmax(24px, 1fr));grid-gap:8px;width:100%}.saved-colors-buttons{display:-ms-flexbox;display:flex}.saved-color{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;cursor:pointer}.saved-color:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:2px}.saved-color:hover{-webkit-transition:outline-color 100ms ease-in-out;transition:outline-color 100ms ease-in-out;outline:2px solid var(--calcite-ui-border-2);outline-offset:2px}";
var throttleFor60FpsInMs = 16;
var defaultColor = normalizeHex(DEFAULT_COLOR.hex());
var CalciteColor = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Public properties
        //
        //--------------------------------------------------------------------------
        /**
         * When false, empty color (null) will be allowed as a value. Otherwise, a color value is always enforced by the component.
         *
         * When true, clearing the input and blurring will restore the last valid color set. When false, it will set it to empty.
         */
        this.allowEmpty = false;
        /** specify the appearance - default (containing border), or minimal (no containing border) */
        this.appearance = "default";
        /**
         * Internal prop for advanced use-cases.
         *
         * @internal
         */
        this.color = DEFAULT_COLOR;
        /**
         * The format of the value property.
         *
         * When "auto", the format will be inferred from `value` when set.
         */
        this.format = "auto";
        /** When true, hides the hex input */
        this.hideHex = false;
        /** When true, hides the RGB/HSV channel inputs */
        this.hideChannels = false;
        /** When true, hides the saved colors section */
        this.hideSaved = false;
        /** Label used for the blue channel */
        this.intlB = TEXT.b;
        /** Label used for the blue channel description */
        this.intlBlue = TEXT.blue;
        /** Label used for the delete color button. */
        this.intlDeleteColor = TEXT.deleteColor;
        /** Label used for the green channel */
        this.intlG = TEXT.g;
        /** Label used for the green channel description */
        this.intlGreen = TEXT.green;
        /** Label used for the hue channel */
        this.intlH = TEXT.h;
        /** Label used for the HSV mode */
        this.intlHsv = TEXT.hsv;
        /** Label used for the hex input */
        this.intlHex = TEXT.hex;
        /** Label used for the hue channel description */
        this.intlHue = TEXT.hue;
        /**
         * Label used for the hex input when there is no color selected.
         */
        this.intlNoColor = TEXT.noColor;
        /** Label used for the red channel */
        this.intlR = TEXT.r;
        /** Label used for the red channel description */
        this.intlRed = TEXT.red;
        /** Label used for the RGB mode */
        this.intlRgb = TEXT.rgb;
        /** Label used for the saturation channel */
        this.intlS = TEXT.s;
        /** Label used for the saturation channel description */
        this.intlSaturation = TEXT.saturation;
        /** Label used for the save color button. */
        this.intlSaveColor = TEXT.saveColor;
        /** Label used for the saved colors section */
        this.intlSaved = TEXT.saved;
        /** Label used for the value channel */
        this.intlV = TEXT.v;
        /** Label used for the  */
        this.intlValue = TEXT.value;
        /**
         * The scale of the color picker.
         */
        this.scale = "m";
        /**
         * The component's theme.
         */
        this.theme = "light";
        /**
         * The color value.
         *
         * This value can be either a {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color|CSS string}
         * a RGB, HSL or HSV object.
         *
         * The type will be preserved as the color is updated.
         */
        this.value = defaultColor;
        this.colorUpdateLocked = false;
        this.hueThumbState = "idle";
        this.mode = CSSColorMode.HEX;
        this.shiftKeyChannelAdjustment = 0;
        this.sliderThumbState = "idle";
        this.colorFieldAndSliderInteractive = false;
        this.channelMode = "rgb";
        this.channels = this.toChannels(DEFAULT_COLOR);
        this.dimensions = DIMENSIONS.m;
        this.savedColors = [];
        this.handleTabActivate = function (event) {
            _this.channelMode = event.currentTarget.getAttribute("data-color-mode");
            _this.updateChannelsFromColor(_this.color);
        };
        this.handleHexInputChange = function (event) {
            event.stopPropagation();
            var _a = _this, allowEmpty = _a.allowEmpty, color = _a.color;
            var input = event.target;
            var hex = input.value;
            if (allowEmpty && !hex) {
                _this.internalColorSet(null);
                return;
            }
            var normalizedHex = color && normalizeHex(color.hex());
            if (hex !== normalizedHex) {
                _this.internalColorSet(Color(hex));
            }
        };
        this.handleSavedColorSelect = function (event) {
            var swatch = event.currentTarget;
            _this.internalColorSet(Color(swatch.color));
        };
        this.handleChannelInput = function (event) {
            var input = event.currentTarget;
            var internalInput = event.target;
            var channelIndex = Number(internalInput.getAttribute("data-channel-index"));
            var limit = _this.channelMode === "rgb"
                ? RGB_LIMITS[Object.keys(RGB_LIMITS)[channelIndex]]
                : HSV_LIMITS[Object.keys(HSV_LIMITS)[channelIndex]];
            var inputValue;
            if (_this.allowEmpty && !internalInput.value) {
                inputValue = "";
            }
            else {
                var value = Number(internalInput.value) + _this.shiftKeyChannelAdjustment;
                var clamped = Math.max(0, Math.min(value, limit));
                inputValue = clamped.toString();
            }
            // need to update both calcite-input and its internal input to keep them in sync
            input.value = inputValue;
            internalInput.value = inputValue;
        };
        this.handleChannelKeyUpOrDown = function (event) {
            var shiftKey = event.shiftKey;
            var key = getKey(event.key);
            if (!_this.color && (key === "ArrowUp" || key === "ArrowDown")) {
                event.preventDefault();
                return;
            }
            // this gets applied to the input's up/down arrow increment/decrement
            var complementaryBump = 9;
            _this.shiftKeyChannelAdjustment =
                key === "ArrowUp" && shiftKey
                    ? complementaryBump
                    : key === "ArrowDown" && shiftKey
                        ? -complementaryBump
                        : 0;
        };
        this.handleChannelChange = function (event) {
            var input = event.target;
            var channelIndex = Number(input.getAttribute("data-channel-index"));
            var channels = __spreadArrays(_this.channels);
            var shouldClearChannels = _this.allowEmpty && !input.value;
            if (shouldClearChannels) {
                _this.channels = [null, null, null];
                _this.internalColorSet(null);
                return;
            }
            channels[channelIndex] = Number(input.value);
            _this.updateColorFromChannels(channels);
        };
        this.handleSavedColorKeyDown = function (event) {
            if (event.key === " " || event.key === "Enter") {
                event.preventDefault();
                event.stopPropagation();
                _this.handleSavedColorSelect(event);
            }
        };
        this.handleColorFieldAndSliderMouseLeave = function () {
            _this.colorFieldAndSliderInteractive = false;
        };
        this.handleColorFieldAndSliderMouseEnterOrMove = function (_a) {
            var offsetY = _a.offsetY;
            var _b = _this.dimensions, colorFieldHeight = _b.colorField.height, sliderHeight = _b.slider.height;
            _this.colorFieldAndSliderInteractive = offsetY <= colorFieldHeight + sliderHeight;
        };
        this.storeHexInputRef = function (node) {
            _this.hexInputNode = node;
        };
        this.renderChannelsTabTitle = function (channelMode) {
            var _a = _this, activeChannelMode = _a.channelMode, intlRgb = _a.intlRgb, intlHsv = _a.intlHsv;
            var active = channelMode === activeChannelMode;
            var label = channelMode === "rgb" ? intlRgb : intlHsv;
            return (h("calcite-tab-title", { active: active, class: CSS.colorMode, "data-color-mode": channelMode, onCalciteTabsActivate: _this.handleTabActivate }, label));
        };
        this.renderChannelsTab = function (channelMode) {
            var _a = _this, activeChannelMode = _a.channelMode, channels = _a.channels, intlB = _a.intlB, intlBlue = _a.intlBlue, intlG = _a.intlG, intlGreen = _a.intlGreen, intlH = _a.intlH, intlHue = _a.intlHue, intlR = _a.intlR, intlRed = _a.intlRed, intlS = _a.intlS, intlSaturation = _a.intlSaturation, intlV = _a.intlV, intlValue = _a.intlValue;
            var active = channelMode === activeChannelMode;
            var isRgb = channelMode === "rgb";
            var channelLabels = isRgb ? [intlR, intlG, intlB] : [intlH, intlS, intlV];
            var channelAriaLabels = isRgb
                ? [intlRed, intlGreen, intlBlue]
                : [intlHue, intlSaturation, intlValue];
            return (h("calcite-tab", { active: active, class: CSS.control }, h("div", { class: CSS.channels }, channels.map(function (channel, index) { return _this.renderChannel(channel, index, channelLabels[index], channelAriaLabels[index]); }))));
        };
        this.renderChannel = function (value, index, label, ariaLabel) { return (h("calcite-input", { "aria-label": ariaLabel, class: CSS.channel, "data-channel-index": index, numberButtonType: "none", onChange: _this.handleChannelChange, onInput: _this.handleChannelInput, onKeyDown: _this.handleChannelKeyUpOrDown, onKeyUp: _this.handleChannelKeyUpOrDown, prefixText: label, scale: "s", type: "number", value: value !== null ? value.toString() : "" })); };
        this.deleteColor = function () {
            var colorToDelete = _this.color.hex();
            var inStorage = _this.savedColors.indexOf(colorToDelete) > -1;
            if (!inStorage) {
                return;
            }
            var savedColors = _this.savedColors.filter(function (color) { return color !== colorToDelete; });
            _this.savedColors = savedColors;
            var storageKey = "" + DEFAULT_STORAGE_KEY_PREFIX + _this.storageId;
            if (_this.storageId) {
                localStorage.setItem(storageKey, JSON.stringify(savedColors));
            }
        };
        this.saveColor = function () {
            var colorToSave = _this.color.hex();
            var alreadySaved = _this.savedColors.indexOf(colorToSave) > -1;
            if (alreadySaved) {
                return;
            }
            var savedColors = __spreadArrays(_this.savedColors, [colorToSave]);
            _this.savedColors = savedColors;
            var storageKey = "" + DEFAULT_STORAGE_KEY_PREFIX + _this.storageId;
            if (_this.storageId) {
                localStorage.setItem(storageKey, JSON.stringify(savedColors));
            }
        };
        this.drawColorFieldAndSlider = throttle(function () {
            if (!_this.fieldAndSliderRenderingContext) {
                return;
            }
            _this.drawColorField();
            _this.drawHueSlider();
        }, throttleFor60FpsInMs);
        this.initColorFieldAndSlider = function (canvas) {
            _this.fieldAndSliderRenderingContext = canvas.getContext("2d");
            _this.setCanvasContextSize(canvas, {
                width: _this.dimensions.colorField.width,
                height: _this.dimensions.colorField.height +
                    _this.dimensions.slider.height +
                    _this.getSliderCapSpacing() * 2
            });
            _this.drawColorFieldAndSlider();
            var yWithin = function (y) {
                var _a = _this.dimensions, colorFieldHeight = _a.colorField.height, sliderHeight = _a.slider.height;
                if (y <= colorFieldHeight) {
                    return "color-field";
                }
                if (y <= colorFieldHeight + sliderHeight) {
                    return "slider";
                }
                return "none";
            };
            var captureColor = function (x, y) {
                var _a = _this.dimensions.colorField, height = _a.height, width = _a.width;
                var saturation = Math.round((HSV_LIMITS.s / width) * x);
                var value = Math.round((HSV_LIMITS.v / height) * (height - y));
                _this.internalColorSet(_this.baseColorFieldColor.hsv().saturationv(saturation).value(value));
            };
            canvas.addEventListener("mousedown", function (_a) {
                var offsetX = _a.offsetX, offsetY = _a.offsetY;
                var region = yWithin(offsetY);
                if (region === "color-field") {
                    _this.hueThumbState = "drag";
                    captureColor(offsetX, offsetY);
                }
                else if (region === "slider") {
                    _this.sliderThumbState = "drag";
                    captureSliderColor(offsetX);
                }
            });
            canvas.addEventListener("mouseout", function () {
                _this.hueThumbState = "idle";
                _this.sliderThumbState = "idle";
                _this.drawColorFieldAndSlider();
            });
            canvas.addEventListener("mouseup", function () {
                _this.hueThumbState = "hover";
                _this.sliderThumbState = "hover";
                _this.drawColorFieldAndSlider();
            });
            canvas.addEventListener("mousemove", function (_a) {
                var offsetX = _a.offsetX, offsetY = _a.offsetY;
                var region = yWithin(offsetY);
                if (region === "color-field") {
                    var prevHueThumbState = _this.hueThumbState;
                    var color = _this.baseColorFieldColor.hsv();
                    var _b = _this.dimensions, _c = _b.colorField, height = _c.height, width = _c.width, radius = _b.thumb.radius;
                    var centerX = Math.round(color.saturationv() / (HSV_LIMITS.s / width));
                    var centerY = Math.round(height - color.value() / (HSV_LIMITS.v / height));
                    var hoveringThumb = _this.containsPoint(offsetX, offsetY, centerX, centerY, radius);
                    var transitionedBetweenHoverAndIdle = false;
                    if (prevHueThumbState === "idle" && hoveringThumb) {
                        _this.hueThumbState = "hover";
                        transitionedBetweenHoverAndIdle = true;
                    }
                    else if (prevHueThumbState === "hover" && !hoveringThumb) {
                        _this.hueThumbState = "idle";
                        transitionedBetweenHoverAndIdle = true;
                    }
                    if (_this.hueThumbState !== "drag") {
                        if (transitionedBetweenHoverAndIdle) {
                            // refresh since we won't update color and thus no redraw
                            _this.drawColorFieldAndSlider();
                        }
                        return;
                    }
                    captureColor(offsetX, offsetY);
                }
                else if (region === "slider") {
                    var _d = _this.dimensions, _e = _d.slider, sliderHeight = _e.height, sliderWidth = _e.width, thumbRadius = _d.thumb.radius;
                    var prevSliderThumbState = _this.sliderThumbState;
                    var sliderThumbColor = _this.baseColorFieldColor.hsv().saturationv(100).value(100);
                    var sliderThumbCenterX = Math.round(sliderThumbColor.hue() / (360 / sliderWidth));
                    var sliderThumbCenterY = Math.round((sliderHeight + _this.getSliderCapSpacing()) / 2);
                    var hoveringSliderThumb = _this.containsPoint(offsetX, offsetY, sliderThumbCenterX, sliderThumbCenterY, thumbRadius);
                    var sliderThumbTransitionedBetweenHoverAndIdle = false;
                    if (prevSliderThumbState === "idle" && hoveringSliderThumb) {
                        _this.sliderThumbState = "hover";
                        sliderThumbTransitionedBetweenHoverAndIdle = true;
                    }
                    else if (prevSliderThumbState === "hover" && !hoveringSliderThumb) {
                        _this.sliderThumbState = "idle";
                        sliderThumbTransitionedBetweenHoverAndIdle = true;
                    }
                    if (_this.sliderThumbState !== "drag") {
                        if (sliderThumbTransitionedBetweenHoverAndIdle) {
                            // refresh since we won't update color and thus no redraw
                            _this.drawColorFieldAndSlider();
                        }
                        return;
                    }
                    captureSliderColor(offsetX);
                }
            });
            var captureSliderColor = function (x) {
                var width = _this.dimensions.slider.width;
                var hue = (360 / width) * x;
                _this.internalColorSet(_this.baseColorFieldColor.hue(hue));
            };
        };
        this.calciteColorChange = createEvent(this, "calciteColorChange", 7);
    }
    class_1.prototype.handleColorChange = function (color, oldColor) {
        this.drawColorFieldAndSlider();
        this.updateChannelsFromColor(color);
        this.previousColor = oldColor;
        if (this.colorUpdateLocked) {
            return;
        }
        this.value = this.toValue(color);
    };
    class_1.prototype.handleFormatChange = function (format) {
        this.mode = format === "auto" ? this.mode : format;
        this.value = this.toValue(this.color);
    };
    class_1.prototype.handleScaleChange = function (scale) {
        if (scale === void 0) { scale = "m"; }
        this.updateDimensions(scale);
    };
    class_1.prototype.handleValueChange = function (value, oldValue) {
        var _a = this, allowEmpty = _a.allowEmpty, format = _a.format;
        var checkMode = !allowEmpty || value;
        var modeChanged = false;
        if (checkMode) {
            var nextMode = parseMode(value);
            if (!nextMode || (format !== "auto" && nextMode !== format)) {
                console.warn("ignoring invalid color value: " + value);
                this.value = oldValue;
                return;
            }
            modeChanged = this.mode !== nextMode;
            this.mode = nextMode;
        }
        if (this.colorUpdateLocked) {
            this.calciteColorChange.emit();
            return;
        }
        var color = allowEmpty && !value ? null : Color(value);
        var colorChanged = !colorEqual(color, this.color);
        if (modeChanged || colorChanged) {
            this.color = color;
            this.calciteColorChange.emit();
        }
    };
    Object.defineProperty(class_1.prototype, "baseColorFieldColor", {
        //--------------------------------------------------------------------------
        //
        //  Internal State/Props
        //
        //--------------------------------------------------------------------------
        get: function () {
            return this.color || this.previousColor || DEFAULT_COLOR;
        },
        enumerable: true,
        configurable: true
    });
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    /** Sets focus on the component. */
    class_1.prototype.setFocus = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                focusElement(this.hexInputNode);
                return [2 /*return*/];
            });
        });
    };
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    class_1.prototype.componentWillLoad = function () {
        var storageKey = "" + DEFAULT_STORAGE_KEY_PREFIX + this.storageId;
        if (this.storageId && localStorage.getItem(storageKey)) {
            this.savedColors = JSON.parse(localStorage.getItem(storageKey));
        }
        this.handleValueChange(this.value, defaultColor);
        this.updateDimensions(this.scale);
    };
    //--------------------------------------------------------------------------
    //
    //  Render Methods
    //
    //--------------------------------------------------------------------------
    class_1.prototype.render = function () {
        var _a, _b, _c, _d, _e;
        var _this = this;
        var _f = this, allowEmpty = _f.allowEmpty, color = _f.color, intlDeleteColor = _f.intlDeleteColor, el = _f.el, hideHex = _f.hideHex, hideChannels = _f.hideChannels, hideSaved = _f.hideSaved, intlHex = _f.intlHex, intlSaved = _f.intlSaved, intlSaveColor = _f.intlSaveColor, savedColors = _f.savedColors, scale = _f.scale, theme = _f.theme;
        var selectedColorInHex = color ? color.hex() : null;
        var hexInputScale = scale !== "s" ? "m" : scale;
        var colorFieldAndSliderInteractive = this.colorFieldAndSliderInteractive;
        var elementDir = getElementDir(el);
        var noColor = color === null;
        return (h("div", { class: CSS.container }, h("canvas", { class: (_a = {},
                _a[CSS.colorFieldAndSlider] = true,
                _a[CSS.colorFieldAndSliderInteractive] = colorFieldAndSliderInteractive,
                _a), onMouseEnter: this.handleColorFieldAndSliderMouseEnterOrMove, onMouseLeave: this.handleColorFieldAndSliderMouseLeave, onMouseMove: this.handleColorFieldAndSliderMouseEnterOrMove, ref: this.initColorFieldAndSlider }), hideHex && hideChannels ? null : (h("div", { class: (_b = {}, _b[CSS.controlSection] = true, _b[CSS.section] = true, _b) }, hideHex ? null : (h("div", { class: CSS.hexOptions }, h("span", { class: (_c = {},
                _c[CSS.header] = true,
                _c[CSS.headerHex] = true,
                _c[CSS.underlinedHeader] = true,
                _c) }, intlHex), h("calcite-color-hex-input", { allowEmpty: allowEmpty, class: CSS.control, dir: elementDir, onCalciteColorHexInputChange: this.handleHexInputChange, ref: this.storeHexInputRef, scale: hexInputScale, theme: theme, value: selectedColorInHex }))), hideChannels ? null : (h("calcite-tabs", { class: (_d = {},
                _d[CSS.colorModeContainer] = true,
                _d[CSS.splitSection] = true,
                _d), dir: elementDir }, h("calcite-tab-nav", { slot: "tab-nav" }, this.renderChannelsTabTitle("rgb"), this.renderChannelsTabTitle("hsv")), this.renderChannelsTab("rgb"), this.renderChannelsTab("hsv"))))), hideSaved ? null : (h("div", { class: (_e = {}, _e[CSS.savedColorsSection] = true, _e[CSS.section] = true, _e) }, h("div", { class: CSS.header }, h("label", null, intlSaved), h("div", { class: CSS.savedColorsButtons }, h("calcite-button", { appearance: "transparent", "aria-label": intlDeleteColor, class: CSS.deleteColor, color: "dark", disabled: noColor, iconStart: "minus", onClick: this.deleteColor, scale: scale, theme: theme }), h("calcite-button", { appearance: "transparent", "aria-label": intlSaveColor, class: CSS.saveColor, color: "dark", disabled: noColor, iconStart: "plus", onClick: this.saveColor, scale: scale, theme: theme }))), savedColors.length > 0 ? (h("div", { class: CSS.savedColors }, __spreadArrays(savedColors.map(function (color) { return (h("calcite-color-swatch", { active: selectedColorInHex === color, class: CSS.savedColor, color: color, key: color, onClick: _this.handleSavedColorSelect, onKeyDown: _this.handleSavedColorKeyDown, scale: scale, tabIndex: 0, theme: theme })); })))) : null))));
    };
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    class_1.prototype.internalColorSet = function (color) {
        if (colorEqual(color, this.color)) {
            return;
        }
        this.colorUpdateLocked = true;
        this.color = color;
        this.value = this.toValue(color);
        this.colorUpdateLocked = false;
    };
    class_1.prototype.toValue = function (color) {
        if (!color) {
            return null;
        }
        var mode = this.mode;
        var hexMode = "hex";
        if (mode.includes(hexMode)) {
            return normalizeHex(color[hexMode]());
        }
        if (mode.includes("-css")) {
            return color[mode.replace("-css", "").replace("a", "")]().string();
        }
        var colorObject = color[mode]().round().object();
        if (mode.endsWith("a")) {
            // normalize alpha prop
            colorObject.a = colorObject.alpha;
            delete colorObject.alpha;
        }
        return colorObject;
    };
    class_1.prototype.getSliderCapSpacing = function () {
        var _a = this.dimensions, height = _a.slider.height, radius = _a.thumb.radius;
        return radius * 2 - height;
    };
    class_1.prototype.updateDimensions = function (scale) {
        if (scale === void 0) { scale = "m"; }
        this.dimensions = DIMENSIONS[scale];
    };
    class_1.prototype.drawColorField = function () {
        var context = this.fieldAndSliderRenderingContext;
        var _a = this.dimensions.colorField, height = _a.height, width = _a.width;
        context.fillStyle = this.baseColorFieldColor.hsv().saturationv(100).value(100).string();
        context.fillRect(0, 0, width, height);
        var whiteGradient = context.createLinearGradient(0, 0, width, 0);
        whiteGradient.addColorStop(0, "rgba(255,255,255,1)");
        whiteGradient.addColorStop(1, "rgba(255,255,255,0)");
        context.fillStyle = whiteGradient;
        context.fillRect(0, 0, width, height);
        var blackGradient = context.createLinearGradient(0, 0, 0, height);
        blackGradient.addColorStop(0, "rgba(0,0,0,0)");
        blackGradient.addColorStop(1, "rgba(0,0,0,1)");
        context.fillStyle = blackGradient;
        context.fillRect(0, 0, width, height);
        this.drawActiveColorFieldColor();
    };
    class_1.prototype.setCanvasContextSize = function (canvas, _a) {
        var height = _a.height, width = _a.width;
        var devicePixelRatio = window.devicePixelRatio || 1;
        canvas.width = width * devicePixelRatio;
        canvas.height = height * devicePixelRatio;
        canvas.style.height = height + "px";
        canvas.style.width = width + "px";
        var context = canvas.getContext("2d");
        context.scale(devicePixelRatio, devicePixelRatio);
    };
    class_1.prototype.containsPoint = function (testPointX, testPointY, boundsX, boundsY, boundsRadius) {
        return (Math.pow(testPointX - boundsX, 2) + Math.pow(testPointY - boundsY, 2) <=
            Math.pow(boundsRadius, 2));
    };
    class_1.prototype.drawActiveColorFieldColor = function () {
        var color = this.color;
        if (!color) {
            return;
        }
        var hsvColor = color.hsv();
        var _a = this.dimensions, _b = _a.colorField, height = _b.height, width = _b.width, radius = _a.thumb.radius;
        var x = hsvColor.saturationv() / (HSV_LIMITS.s / width);
        var y = height - hsvColor.value() / (HSV_LIMITS.v / height);
        this.drawThumb(this.fieldAndSliderRenderingContext, radius, x, y, hsvColor, this.hueThumbState);
    };
    class_1.prototype.drawThumb = function (context, radius, x, y, color, state) {
        var startAngle = 0;
        var endAngle = 2 * Math.PI;
        context.beginPath();
        context.arc(x, y, radius, startAngle, endAngle);
        context.shadowBlur = state === "hover" ? 32 : 16;
        context.shadowColor = "rgba(0, 0, 0, " + (state === "drag" ? 0.32 : 0.16) + ")";
        context.fillStyle = "#fff";
        context.fill();
        context.beginPath();
        context.arc(x, y, radius - 3, startAngle, endAngle);
        context.shadowBlur = 0;
        context.shadowColor = "transparent";
        context.fillStyle = color.rgb().string();
        context.fill();
    };
    class_1.prototype.drawActiveHueSliderColor = function () {
        var color = this.color;
        if (!color) {
            return;
        }
        var hsvColor = color.hsv().saturationv(100).value(100);
        var _a = this.dimensions, colorFieldHeight = _a.colorField.height, _b = _a.slider, height = _b.height, width = _b.width, radius = _a.thumb.radius;
        var x = hsvColor.hue() / (360 / width);
        var y = height / 2 + colorFieldHeight;
        this.drawThumb(this.fieldAndSliderRenderingContext, radius, x, y, hsvColor, this.sliderThumbState);
    };
    class_1.prototype.drawHueSlider = function () {
        var context = this.fieldAndSliderRenderingContext;
        var _a = this.dimensions, colorFieldHeight = _a.colorField.height, _b = _a.slider, height = _b.height, width = _b.width;
        var gradient = context.createLinearGradient(0, 0, width, 0);
        var hueSliderColorStopKeywords = ["red", "yellow", "lime", "cyan", "blue", "magenta", "red"];
        var offset = 1 / (hueSliderColorStopKeywords.length - 1);
        var currentOffset = 0;
        hueSliderColorStopKeywords.forEach(function (keyword) {
            gradient.addColorStop(currentOffset, Color(keyword).string());
            currentOffset += offset;
        });
        context.fillStyle = gradient;
        context.clearRect(0, colorFieldHeight, width, height + this.getSliderCapSpacing() * 2);
        context.fillRect(0, colorFieldHeight, width, height);
        this.drawActiveHueSliderColor();
    };
    class_1.prototype.updateColorFromChannels = function (channels) {
        this.internalColorSet(Color(channels, this.channelMode));
    };
    class_1.prototype.updateChannelsFromColor = function (color) {
        this.channels = color ? this.toChannels(color) : [null, null, null];
    };
    class_1.prototype.toChannels = function (color) {
        var channelMode = this.channelMode;
        return color[channelMode]()
            .array()
            .map(function (value) { return Math.floor(value); });
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "color": ["handleColorChange"],
                "format": ["handleFormatChange"],
                "scale": ["handleScaleChange"],
                "value": ["handleValueChange"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
CalciteColor.style = calciteColorCss;
export { CalciteColor as calcite_color };
