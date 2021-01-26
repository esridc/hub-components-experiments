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
import { r as registerInstance, h, H as Host, g as getElement } from './index-17d4341f.js';
import { g as getElementDir } from './dom-29efd1ef.js';
import { g as getKey } from './key-6f340c70.js';
import { u as updatePopper, C as CSS, c as createPopper } from './popper-ba36f96f.js';
import { T as TEXT, g as getLocaleData } from './calcite-date-picker-resources-3e0a6b82.js';
import { d as dateFromISO, a as dateFromRange, s as sameDate, p as parseDateString, i as inRange } from './date-21b5107e.js';
var calciteInputDatePickerCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{--calcite-icon-size:1rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:inline-block;vertical-align:top;width:100%;position:relative;overflow:visible;-webkit-box-shadow:none;box-shadow:none}:host .menu-container .calcite-popper-anim{position:relative;z-index:1;-webkit-transition:var(--calcite-popper-transition);transition:var(--calcite-popper-transition);visibility:hidden;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform;opacity:0;-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:var(--calcite-border-radius)}:host .menu-container[data-popper-placement^=bottom] .calcite-popper-anim{-webkit-transform:translateY(-5px);transform:translateY(-5px)}:host .menu-container[data-popper-placement^=top] .calcite-popper-anim{-webkit-transform:translateY(5px);transform:translateY(5px)}:host .menu-container[data-popper-placement^=left] .calcite-popper-anim{-webkit-transform:translateX(5px);transform:translateX(5px)}:host .menu-container[data-popper-placement^=right] .calcite-popper-anim{-webkit-transform:translateX(-5px);transform:translateX(-5px)}:host .menu-container[data-popper-placement] .calcite-popper-anim--active{opacity:1;visibility:visible;-webkit-transform:translate(0);transform:translate(0)}.calendar-picker-wrapper{-webkit-box-shadow:none;box-shadow:none;position:static;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);width:100%;line-height:0}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host([scale=s]){max-width:216px}:host([scale=m]){max-width:286px}:host([scale=l]){max-width:398px}.input-wrapper{position:relative}:host([range]) .input-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host([range]) .input-wrapper{-ms-flex:1 1 auto;flex:1 1 auto}:host([range]) .horizontal-arrow-container{background-color:var(--calcite-ui-background);padding:0 var(--calcite-spacing-quarter);border:1px solid var(--calcite-ui-border-1);border-left:none;border-right:none;height:42px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex:0 0 auto;flex:0 0 auto}:host([range][layout=vertical]) .input-wrapper{width:100%}:host([range][layout=vertical]) .input-container{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:start}:host([range][layout=vertical]) .calendar-picker-wrapper--end{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}:host([range][layout=vertical]) .vertical-arrow-container{position:absolute;left:0;top:36px;z-index:1;background-color:var(--calcite-ui-foreground-1);padding-left:0.625rem;padding-right:0.625rem;margin-left:1px;margin-right:1px}:host([scale=s][range]:not([layout=vertical])){max-width:462px}:host([scale=s][range]:not([layout=vertical])) .calendar-picker-wrapper{width:216px}:host([scale=s][range]:not([layout=vertical])) .horizontal-arrow-container{height:30px}:host([scale=m][range]:not([layout=vertical])){max-width:596px}:host([scale=m][range]:not([layout=vertical])) .calendar-picker-wrapper{width:286px}:host([scale=l][range]:not([layout=vertical])){max-width:820px}:host([scale=l][range]:not([layout=vertical])) .calendar-picker-wrapper{width:398px}:host([scale=l][range]:not([layout=vertical])) .horizontal-arrow-container{height:54px}.menu-container{display:block;position:absolute;z-index:999;-webkit-transform:scale(0);transform:scale(0);visibility:hidden;pointer-events:none;width:100%}:host([active]) .menu-container{pointer-events:initial;visibility:visible}.input .calcite-input-wrapper{margin-top:0}:host([range][layout=vertical][scale=s]) .vertical-arrow-container{top:24px}:host([range][layout=vertical][scale=l]) .vertical-arrow-container{top:50px;padding-left:0.875rem;padding-right:0.875rem}:host([range][layout=vertical][active]) .vertical-arrow-container{display:none}";
var DEFAULT_PLACEMENT = "bottom-start";
var CalciteInputDatePicker = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        /** Expand or collapse when calendar does not have input */
        this.active = false;
        /** Localized string for "previous month" (used for aria label) */
        this.intlPrevMonth = TEXT.prevMonth;
        /** Localized string for "next month" (used for aria label) */
        this.intlNextMonth = TEXT.nextMonth;
        /** BCP 47 language tag for desired language and country format */
        this.locale = document.documentElement.lang || "en-US";
        /** specify the scale of the date picker */
        this.scale = "m";
        /** Range mode activation */
        this.range = false;
        /** Disables the default behaviour on the third click of narrowing or extending the range and instead starts a new range. */
        this.proximitySelectionDisabled = false;
        /** Layout */
        this.layout = "horizontal";
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        this.focusedInput = "start";
        this.hasShadow = !!document.head.attachShadow;
        //--------------------------------------------------------------------------
        //
        //  Private Methods
        //
        //--------------------------------------------------------------------------
        this.setEndInput = function (el) {
            _this.endInput = el;
        };
        this.deactivate = function () {
            _this.active = false;
        };
        this.keyUpHandler = function (e) {
            if (getKey(e.key) === "Escape") {
                _this.active = false;
            }
        };
        this.inputBlur = function (e) {
            _this.blur(e.detail);
        };
        this.startInputFocus = function () {
            _this.active = true;
            _this.focusedInput = "start";
        };
        this.endInputFocus = function () {
            _this.active = true;
            _this.focusedInput = "end";
        };
        this.inputInput = function (e) {
            _this.input(e.detail.value);
        };
        this.setMenuEl = function (el) {
            if (el) {
                _this.menuEl = el;
                _this.createPopper();
            }
        };
        this.setStartWrapper = function (el) {
            _this.startWrapper = el;
            _this.setReferenceEl();
        };
        this.setEndWrapper = function (el) {
            _this.endWrapper = el;
            _this.setReferenceEl();
        };
        /**
         * Event handler for when the selected date changes
         */
        this.handleDateChange = function (event) {
            if (_this.range) {
                return;
            }
            _this.valueAsDate = event.detail;
        };
        this.handleDateRangeChange = function (event) {
            if (!_this.range || !event.detail) {
                return;
            }
            var _c = event.detail, startDate = _c.startDate, endDate = _c.endDate;
            _this.startAsDate = startDate;
            _this.endAsDate = endDate;
            if (startDate && _this.focusedInput === "start") {
                setTimeout(function () { var _a; return (_a = _this.endInput) === null || _a === void 0 ? void 0 : _a.setFocus(); }, 150);
            }
        };
    }
    class_1.prototype.activeHandler = function () {
        this.reposition();
    };
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    /**
     * Blur doesn't fire properly when there is no shadow dom (Edge/IE11)
     * Check if the focused element is inside the date picker, if not close
     */
    class_1.prototype.focusInHandler = function (e) {
        if (!this.hasShadow && !this.el.contains(e.target)) {
            this.active = false;
        }
    };
    class_1.prototype.calciteDaySelectHandler = function () {
        this.active = false;
    };
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    class_1.prototype.reposition = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _c, popper, menuEl, modifiers;
            return __generator(this, function (_d) {
                _c = this, popper = _c.popper, menuEl = _c.menuEl;
                modifiers = this.getModifiers();
                popper
                    ? updatePopper({
                        el: menuEl,
                        modifiers: modifiers,
                        placement: DEFAULT_PLACEMENT,
                        popper: popper
                    })
                    : this.createPopper();
                return [2 /*return*/];
            });
        });
    };
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    class_1.prototype.connectedCallback = function () {
        this.loadLocaleData();
        if (this.value) {
            this.valueAsDate = dateFromISO(this.value);
        }
        if (this.start) {
            this.setStartAsDate(dateFromISO(this.start));
        }
        if (this.end) {
            this.setEndAsDate(dateFromISO(this.end));
        }
        this.createPopper();
    };
    class_1.prototype.disconnectedCallback = function () {
        this.destroyPopper();
    };
    class_1.prototype.render = function () {
        var _c;
        var _a, _b;
        var min = dateFromISO(this.min);
        var max = dateFromISO(this.max);
        var date = dateFromRange(this.range ? this.startAsDate : this.valueAsDate, min, max);
        var endDate = this.range ? dateFromRange(this.endAsDate, min, max) : null;
        var formattedEndDate = endDate ? endDate.toLocaleDateString(this.locale) : "";
        var formattedDate = date ? date.toLocaleDateString(this.locale) : "";
        var dir = getElementDir(this.el);
        return (h(Host, { dir: dir, onBlur: this.deactivate, onKeyUp: this.keyUpHandler, role: "application" }, this.localeData && (h("div", { "aria-expanded": this.active.toString(), class: "input-container", role: "application" }, h("div", { class: "input-wrapper", ref: this.setStartWrapper }, h("calcite-input", { class: "input " + (this.layout === "vertical" && this.range ? "no-bottom-border" : ""), icon: "calendar", "number-button-type": "none", onCalciteInputBlur: this.inputBlur, onCalciteInputFocus: this.startInputFocus, onCalciteInputInput: this.inputInput, placeholder: (_a = this.localeData) === null || _a === void 0 ? void 0 : _a.placeholder, scale: this.scale, type: "text", value: formattedDate })), h("div", { "aria-hidden": (!this.active).toString(), class: "menu-container", ref: this.setMenuEl }, h("div", { class: (_c = {},
                _c["calendar-picker-wrapper"] = true,
                _c["calendar-picker-wrapper--end"] = this.focusedInput === "end",
                _c[CSS.animation] = true,
                _c[CSS.animationActive] = this.active,
                _c) }, h("calcite-date-picker", { activeRange: this.focusedInput, dir: dir, endAsDate: this.endAsDate, intlNextMonth: this.intlNextMonth, intlPrevMonth: this.intlPrevMonth, locale: this.locale, max: this.max, min: this.min, onCalciteDatePickerChange: this.handleDateChange, onCalciteDatePickerRangeChange: this.handleDateRangeChange, proximitySelectionDisabled: this.proximitySelectionDisabled, range: this.range, scale: this.scale, startAsDate: this.startAsDate, tabIndex: 0, valueAsDate: this.valueAsDate }))), this.range && this.layout === "horizontal" && (h("div", { class: "horizontal-arrow-container" }, h("calcite-icon", { flipRtl: true, icon: "arrow-right", scale: "s" }))), this.range && this.layout === "vertical" && (h("div", { class: "vertical-arrow-container" }, h("calcite-icon", { icon: "arrow-down", scale: "s" }))), this.range && (h("div", { class: "input-wrapper", ref: this.setEndWrapper }, h("calcite-input", { class: "input", icon: "calendar", "number-button-type": "none", onCalciteInputBlur: this.inputBlur, onCalciteInputFocus: this.endInputFocus, onCalciteInputInput: this.inputInput, placeholder: (_b = this.localeData) === null || _b === void 0 ? void 0 : _b.placeholder, ref: this.setEndInput, scale: this.scale, type: "text", value: formattedEndDate })))))));
    };
    class_1.prototype.setReferenceEl = function () {
        var _c = this, focusedInput = _c.focusedInput, layout = _c.layout, endWrapper = _c.endWrapper, startWrapper = _c.startWrapper;
        this.referenceEl =
            focusedInput === "end" || layout === "vertical"
                ? endWrapper || startWrapper
                : startWrapper || endWrapper;
        this.createPopper();
    };
    class_1.prototype.getModifiers = function () {
        var flipModifier = {
            name: "flip",
            enabled: true
        };
        flipModifier.options = {
            fallbackPlacements: ["top-start", "top", "top-end", "bottom-start", "bottom", "bottom-end"]
        };
        return [flipModifier];
    };
    class_1.prototype.createPopper = function () {
        this.destroyPopper();
        var _c = this, menuEl = _c.menuEl, referenceEl = _c.referenceEl;
        if (!menuEl || !referenceEl) {
            return;
        }
        var modifiers = this.getModifiers();
        this.popper = createPopper({
            el: menuEl,
            modifiers: modifiers,
            placement: DEFAULT_PLACEMENT,
            referenceEl: referenceEl
        });
    };
    class_1.prototype.destroyPopper = function () {
        var popper = this.popper;
        if (popper) {
            popper.destroy();
        }
        this.popper = null;
    };
    class_1.prototype.valueWatcher = function (value) {
        this.valueAsDate = dateFromISO(value);
    };
    class_1.prototype.startWatcher = function (start) {
        this.setStartAsDate(dateFromISO(start));
    };
    class_1.prototype.endWatcher = function (end) {
        this.setEndAsDate(dateFromISO(end));
    };
    class_1.prototype.loadLocaleData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var locale, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        locale = this.locale;
                        _c = this;
                        return [4 /*yield*/, getLocaleData(locale)];
                    case 1:
                        _c.localeData = _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Update date instance of start if valid
     */
    class_1.prototype.setStartAsDate = function (startDate) {
        this.startAsDate = startDate;
    };
    /**
     * Update date instance of end if valid
     */
    class_1.prototype.setEndAsDate = function (endDate) {
        this.endAsDate = endDate;
    };
    /**
     * If inputted string is a valid date, update value/active
     */
    class_1.prototype.input = function (value) {
        var date = this.getDateFromInput(value);
        if (date) {
            if (!this.range) {
                this.valueAsDate = date;
            }
            else {
                var changed = false;
                if (this.focusedInput === "start") {
                    changed = !this.startAsDate || !sameDate(date, this.startAsDate);
                    if (changed) {
                        this.startAsDate = date;
                    }
                }
                else if (this.focusedInput === "end") {
                    changed = !this.endAsDate || !sameDate(date, this.endAsDate);
                    if (changed) {
                        this.endAsDate = date;
                    }
                }
            }
        }
    };
    /**
     * Clean up invalid date from input on blur
     */
    class_1.prototype.blur = function (target) {
        var _c = this, locale = _c.locale, focusedInput = _c.focusedInput, endAsDate = _c.endAsDate, range = _c.range, startAsDate = _c.startAsDate, valueAsDate = _c.valueAsDate;
        var date = this.getDateFromInput(target.value);
        if (!date) {
            if (!range && valueAsDate) {
                target.value = valueAsDate.toLocaleDateString(locale);
            }
            else if (focusedInput === "start" && startAsDate) {
                target.value = startAsDate.toLocaleDateString(locale);
            }
            else if (focusedInput === "end" && endAsDate) {
                target.value = endAsDate.toLocaleDateString(locale);
            }
        }
    };
    /**
     * Find a date from input string
     * return false if date is invalid, or out of range
     */
    class_1.prototype.getDateFromInput = function (value) {
        if (!this.localeData) {
            return false;
        }
        var separator = this.localeData.separator;
        var _c = parseDateString(value, this.localeData), day = _c.day, month = _c.month, year = _c.year;
        var validDay = day > 0;
        var validMonth = month > -1;
        var date = new Date(year, month, day);
        date.setFullYear(year);
        var validDate = !isNaN(date.getTime());
        var validLength = value.split(separator).filter(function (c) { return c; }).length > 2;
        var validYear = year.toString().length > 0;
        if (validDay &&
            validMonth &&
            validDate &&
            validLength &&
            validYear &&
            inRange(date, this.min, this.max)) {
            return date;
        }
        return false;
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "active": ["activeHandler"],
                "layout": ["setReferenceEl"],
                "focusedInput": ["setReferenceEl"],
                "value": ["valueWatcher"],
                "start": ["startWatcher"],
                "end": ["endWatcher"],
                "locale": ["loadLocaleData"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
CalciteInputDatePicker.style = calciteInputDatePickerCss;
export { CalciteInputDatePicker as calcite_input_date_picker };
