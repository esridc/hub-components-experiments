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
import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-17d4341f.js';
import { g as getElementDir } from './dom-29efd1ef.js';
import { g as getKey } from './key-6f340c70.js';
import { T as TEXT, g as getLocaleData } from './calcite-date-picker-resources-3e0a6b82.js';
import { g as getDaysDiff, b as dateToISO, d as dateFromISO, a as dateFromRange } from './date-21b5107e.js';
var calciteDatePickerCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:inline-block;vertical-align:top;width:100%;position:relative;overflow:visible;border-radius:none;border:1px solid var(--calcite-ui-border-2);background-color:var(--calcite-ui-foreground-1)}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host([scale=s]){max-width:216px}:host([scale=m]){max-width:286px}:host([scale=l]){max-width:398px}:host([scale=s][range]:not([layout=vertical])){max-width:462px}:host([scale=m][range]:not([layout=vertical])){max-width:596px}:host([scale=l][range]:not([layout=vertical])){max-width:820px}";
var CalciteDatePicker = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Public Properties
        //
        //--------------------------------------------------------------------------
        /** Active range */
        this.activeRange = "start";
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
        this.hasShadow = !!document.head.attachShadow;
        //--------------------------------------------------------------------------
        //
        //  Private Methods
        //
        //--------------------------------------------------------------------------
        this.keyUpHandler = function (e) {
            if (getKey(e.key) === "Escape") {
                _this.reset();
            }
        };
        this.monthHeaderSelectChange = function (e) {
            var date = new Date(e.detail);
            if (!_this.range) {
                _this.activeDate = date;
            }
            else {
                if (_this.activeRange === "start") {
                    _this.activeStartDate = date;
                }
                else if (_this.activeRange === "end") {
                    _this.activeEndDate = date;
                }
                _this.mostRecentRangeValue = date;
            }
        };
        this.monthActiveDateChange = function (e) {
            var date = new Date(e.detail);
            if (!_this.range) {
                _this.activeDate = date;
            }
            else {
                if (_this.activeRange === "start") {
                    _this.activeStartDate = date;
                }
                else if (_this.activeRange === "end") {
                    _this.activeEndDate = date;
                }
                _this.mostRecentRangeValue = date;
            }
        };
        this.monthHoverChange = function (e) {
            if (!_this.startAsDate) {
                _this.hoverRange = undefined;
                return _this.hoverRange;
            }
            var date = new Date(e.detail);
            _this.hoverRange = {
                focused: _this.activeRange,
                start: _this.startAsDate,
                end: _this.endAsDate
            };
            if (!_this.proximitySelectionDisabled) {
                if (_this.endAsDate) {
                    var startDiff = getDaysDiff(date, _this.startAsDate);
                    var endDiff = getDaysDiff(date, _this.endAsDate);
                    if (startDiff < endDiff) {
                        _this.hoverRange.start = date;
                        _this.hoverRange.focused = "start";
                    }
                    else {
                        _this.hoverRange.end = date;
                        _this.hoverRange.focused = "end";
                    }
                }
                else {
                    if (date < _this.startAsDate) {
                        _this.hoverRange = {
                            focused: "start",
                            start: date,
                            end: _this.startAsDate
                        };
                    }
                    else {
                        _this.hoverRange.end = date;
                        _this.hoverRange.focused = "end";
                    }
                }
            }
            else {
                if (!_this.endAsDate) {
                    if (date < _this.startAsDate) {
                        _this.hoverRange = {
                            focused: "start",
                            start: date,
                            end: _this.startAsDate
                        };
                    }
                    else {
                        _this.hoverRange.end = date;
                        _this.hoverRange.focused = "end";
                    }
                }
                else {
                    _this.hoverRange = undefined;
                }
            }
        };
        this.monthMouseOutChange = function () {
            if (_this.hoverRange) {
                _this.hoverRange = undefined;
            }
        };
        /**
         * Reset active date and close
         */
        this.reset = function () {
            var _a, _b, _c, _d, _e, _f;
            if (_this.valueAsDate && ((_a = _this.valueAsDate) === null || _a === void 0 ? void 0 : _a.getTime()) !== ((_b = _this.activeDate) === null || _b === void 0 ? void 0 : _b.getTime())) {
                _this.activeDate = new Date(_this.valueAsDate);
            }
            if (_this.startAsDate && ((_c = _this.startAsDate) === null || _c === void 0 ? void 0 : _c.getTime()) !== ((_d = _this.activeStartDate) === null || _d === void 0 ? void 0 : _d.getTime())) {
                _this.activeStartDate = new Date(_this.startAsDate);
            }
            if (_this.endAsDate && ((_e = _this.endAsDate) === null || _e === void 0 ? void 0 : _e.getTime()) !== ((_f = _this.activeEndDate) === null || _f === void 0 ? void 0 : _f.getTime())) {
                _this.activeEndDate = new Date(_this.endAsDate);
            }
        };
        /**
         * Event handler for when the selected date changes
         */
        this.monthDateChange = function (e) {
            var date = new Date(e.detail);
            if (!_this.range) {
                _this.value = dateToISO(date);
                _this.activeDate = date;
                return;
            }
            if (!_this.startAsDate || (!_this.endAsDate && date < _this.startAsDate)) {
                if (_this.startAsDate) {
                    var newEndDate = new Date(_this.startAsDate);
                    _this.end = dateToISO(newEndDate);
                    _this.setEndAsDate(newEndDate);
                    _this.activeEndDate = newEndDate;
                }
                _this.start = dateToISO(date);
                _this.setStartAsDate(date);
                _this.activeStartDate = date;
            }
            else if (!_this.endAsDate) {
                _this.end = dateToISO(date);
                _this.setEndAsDate(date);
                _this.activeEndDate = date;
            }
            else {
                if (!_this.proximitySelectionDisabled) {
                    var startDiff = getDaysDiff(date, _this.startAsDate);
                    var endDiff = getDaysDiff(date, _this.endAsDate);
                    if (startDiff < endDiff) {
                        _this.start = dateToISO(date);
                        _this.setStartAsDate(date);
                        _this.activeStartDate = date;
                    }
                    else {
                        _this.end = dateToISO(date);
                        _this.setEndAsDate(date);
                        _this.activeEndDate = date;
                    }
                }
                else {
                    _this.start = dateToISO(date);
                    _this.setStartAsDate(date);
                    _this.activeStartDate = date;
                    _this.endAsDate = _this.activeEndDate = _this.end = undefined;
                }
            }
        };
        this.calciteDatePickerChange = createEvent(this, "calciteDatePickerChange", 7);
        this.calciteDatePickerRangeChange = createEvent(this, "calciteDatePickerRangeChange", 7);
    }
    class_1.prototype.handleValueAsDate = function (date) {
        this.activeDate = date;
        this.calciteDatePickerChange.emit(date);
    };
    class_1.prototype.handleRangeChange = function () {
        var _g = this, startDate = _g.startAsDate, endDate = _g.endAsDate;
        this.activeEndDate = endDate;
        this.activeStartDate = startDate;
        this.calciteDatePickerRangeChange.emit({
            startDate: startDate,
            endDate: endDate
        });
    };
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    /**
     * Blur doesn't fire properly when there is no shadow dom (ege/IE11)
     * Check if the focused element is inside the date picker, if not close
     */
    class_1.prototype.focusInHandler = function (e) {
        if (!this.hasShadow && !this.el.contains(e.target)) {
            this.reset();
        }
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
    };
    class_1.prototype.render = function () {
        var _a;
        var min = dateFromISO(this.min);
        var max = dateFromISO(this.max);
        var date = dateFromRange(this.range ? this.startAsDate : this.valueAsDate, min, max);
        var activeStartDate = this.range
            ? this.getActiveStartDate(date, min, max)
            : this.getActiveDate(date, min, max);
        var activeDate = activeStartDate;
        var endDate = this.range ? dateFromRange(this.endAsDate, min, max) : null;
        var activeEndDate = this.getActiveEndDate(endDate, min, max);
        if ((this.activeRange === "end" ||
            (((_a = this.hoverRange) === null || _a === void 0 ? void 0 : _a.focused) === "end" && (!this.proximitySelectionDisabled || endDate))) &&
            activeEndDate) {
            activeDate = activeEndDate;
        }
        if (this.range && this.mostRecentRangeValue) {
            activeDate = this.mostRecentRangeValue;
        }
        var minDate = this.activeRange === "start" ? min : date || min;
        var maxDate = max;
        var dir = getElementDir(this.el);
        return (h(Host, { dir: dir, onBlur: this.reset, onKeyUp: this.keyUpHandler, role: "application" }, this.renderCalendar(activeDate, dir, maxDate, minDate, date, endDate)));
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
            var locale, _g;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        locale = this.locale;
                        _g = this;
                        return [4 /*yield*/, getLocaleData(locale)];
                    case 1:
                        _g.localeData = _h.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Render calcite-date-picker-month-header and calcite-date-picker-month
     */
    class_1.prototype.renderCalendar = function (activeDate, dir, maxDate, minDate, date, endDate) {
        return (this.localeData && [
            h("calcite-date-picker-month-header", { activeDate: activeDate, dir: dir, intlNextMonth: this.intlNextMonth, intlPrevMonth: this.intlPrevMonth, localeData: this.localeData, max: maxDate, min: minDate, onCalciteDatePickerSelect: this.monthHeaderSelectChange, scale: this.scale, selectedDate: this.activeRange === "start" ? date : endDate || new Date() }),
            h("calcite-date-picker-month", { activeDate: activeDate, dir: dir, endDate: this.range ? endDate : undefined, hoverRange: this.hoverRange, localeData: this.localeData, max: maxDate, min: minDate, onCalciteDatePickerActiveDateChange: this.monthActiveDateChange, onCalciteDatePickerHover: this.monthHoverChange, onCalciteDatePickerMouseOut: this.monthMouseOutChange, onCalciteDatePickerSelect: this.monthDateChange, scale: this.scale, selectedDate: this.activeRange === "start" ? date : endDate, startDate: this.range ? date : undefined })
        ]);
    };
    /**
     * Update date instance of start if valid
     */
    class_1.prototype.setStartAsDate = function (startDate) {
        this.startAsDate = startDate;
        this.mostRecentRangeValue = this.startAsDate;
    };
    /**
     * Update date instance of end if valid
     */
    class_1.prototype.setEndAsDate = function (endDate) {
        this.endAsDate = endDate;
        this.mostRecentRangeValue = this.endAsDate;
    };
    /**
     * Get an active date using the value, or current date as default
     */
    class_1.prototype.getActiveDate = function (value, min, max) {
        return dateFromRange(this.activeDate, min, max) || value || dateFromRange(new Date(), min, max);
    };
    class_1.prototype.getActiveStartDate = function (value, min, max) {
        return (dateFromRange(this.activeStartDate, min, max) || value || dateFromRange(new Date(), min, max));
    };
    class_1.prototype.getActiveEndDate = function (value, min, max) {
        return (dateFromRange(this.activeEndDate, min, max) || value || dateFromRange(new Date(), min, max));
    };
    Object.defineProperty(class_1, "assetsDirs", {
        get: function () { return ["assets"]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "valueAsDate": ["handleValueAsDate"],
                "startAsDate": ["handleRangeChange"],
                "endAsDate": ["handleRangeChange"],
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
CalciteDatePicker.style = calciteDatePickerCss;
export { CalciteDatePicker as calcite_date_picker };
