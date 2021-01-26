var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-17d4341f.js';
import { g as getElementDir } from './dom-29efd1ef.js';
import { g as getKey } from './key-6f340c70.js';
import { s as sameDate, a as dateFromRange, i as inRange, l as localizeNumber, c as getOrder, n as nextMonth, e as prevMonth, f as parseNumber } from './date-21b5107e.js';
var calciteDatePickerDayCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f;--calcite-ui-foreground-current:#214155}:host{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--calcite-ui-text-3);cursor:pointer;width:calc(100% / 7);min-width:0}.day-v-wrapper{-ms-flex:1 1 auto;flex:1 1 auto}.day{display:-ms-flexbox;display:flex;border-radius:100%;font-size:0.875rem;line-height:1.5;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;line-height:1;color:var(--calcite-ui-text-3);-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out;background:none;-webkit-box-shadow:0 0 0 2px transparent, 0 0 0 0px transparent;box-shadow:0 0 0 2px transparent, 0 0 0 0px transparent;opacity:var(--calcite-ui-opacity-disabled)}.text{margin:1px 0 0 1px}:host([scale=s]) .day-v-wrapper{padding-top:0.125rem;padding-bottom:0.125rem}:host([scale=s]) .day-wrapper{padding:0}:host([scale=s]) .day{height:27px;width:27px;font-size:var(--calcite-font-size--2)}:host([scale=m]) .day-v-wrapper{padding-top:0.25rem;padding-bottom:0.25rem}:host([scale=m]) .day-wrapper{padding-left:0.25rem;padding-right:0.25rem}:host([scale=m]) .day{height:33px;width:33px;font-size:var(--calcite-font-size--1)}:host([scale=l]) .day-v-wrapper{padding-top:0.25rem;padding-bottom:0.25rem}:host([scale=l]) .day-wrapper{padding-left:0.25rem;padding-right:0.25rem}:host([scale=l]) .day{height:43px;width:43px;font-size:var(--calcite-font-size-0)}:host([current-month]) .day{opacity:1}:host([disabled]){cursor:default;opacity:0.2}:host(:hover:not([disabled])) .day,:host([active]:not([range])) .day{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host(:focus),:host([active]){z-index:1}:host(:focus:not([disabled])) .day{-webkit-box-shadow:0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-blue-1);box-shadow:0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-blue-1)}:host([selected]) .day{background-color:var(--calcite-ui-blue-1) !important;color:var(--calcite-ui-foreground-1) !important;font-weight:500;z-index:1}:host([range][selected]) .day-wrapper{background-color:var(--calcite-ui-foreground-current)}:host([start-of-range][dir=ltr]) .day-wrapper,:host([end-of-range][dir=rtl]) .day-wrapper{border-top-left-radius:40%;border-bottom-left-radius:40%;-webkit-box-shadow:inset 4px 0 var(--calcite-ui-foreground-1);box-shadow:inset 4px 0 var(--calcite-ui-foreground-1)}:host([start-of-range][dir=ltr]:not(:focus)) .day,:host([end-of-range][dir=rtl]:not(:focus)) .day{-webkit-box-shadow:2px 0 var(--calcite-ui-foreground-1);box-shadow:2px 0 var(--calcite-ui-foreground-1)}:host([end-of-range][dir=ltr]) .day-wrapper,:host([start-of-range][dir=rtl]) .day-wrapper{border-top-right-radius:40%;border-bottom-right-radius:40%;-webkit-box-shadow:inset -4px 0 var(--calcite-ui-foreground-1);box-shadow:inset -4px 0 var(--calcite-ui-foreground-1)}:host([end-of-range][dir=ltr]:not(:focus)) .day,:host([start-of-range][dir=rtl]:not(:focus)) .day{-webkit-box-shadow:-2px 0 var(--calcite-ui-foreground-1);box-shadow:-2px 0 var(--calcite-ui-foreground-1)}:host([end-of-range][scale=l][dir=ltr]) .day-wrapper,:host([start-of-range][scale=l][dir=rtl]) .day-wrapper{-webkit-box-shadow:inset -8px 0 var(--calcite-ui-foreground-1);box-shadow:inset -8px 0 var(--calcite-ui-foreground-1)}:host([highlighted]) .day-wrapper{background-color:var(--calcite-ui-foreground-current)}:host([highlighted]) .day-wrapper .day{color:var(--calcite-ui-text-1)}:host([highlighted]:not([active]:focus)) .day{border-radius:0;color:var(--calcite-ui-text-1)}:host([range-hover]:not([selected])) .day-wrapper{background-color:var(--calcite-ui-foreground-2)}:host([range-hover]:not([selected])) .day{border-radius:0}:host([end-of-range][range-hover][dir=ltr]) .day-wrapper,:host([start-of-range][range-hover][dir=rtl]) .day-wrapper{background-image:-webkit-gradient(linear, left top, right top, from(var(--calcite-ui-foreground-current)), color-stop(var(--calcite-ui-foreground-current)), color-stop(var(--calcite-ui-foreground-2)), to(var(--calcite-ui-foreground-2)));background-image:linear-gradient(to right, var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2));border-radius:0;-webkit-box-shadow:none;box-shadow:none}:host([start-of-range][range-hover][dir=ltr]) .day-wrapper,:host([end-of-range][range-hover][dir=rtl]) .day-wrapper{background-image:-webkit-gradient(linear, right top, left top, from(var(--calcite-ui-foreground-current)), color-stop(var(--calcite-ui-foreground-current)), color-stop(var(--calcite-ui-foreground-2)), to(var(--calcite-ui-foreground-2)));background-image:linear-gradient(to left, var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2));border-radius:0;-webkit-box-shadow:none;box-shadow:none}:host(:hover[range-hover]:not([selected]).focused--end[dir=ltr]) .day-wrapper,:host(:hover[range-hover]:not([selected]).focused--start[dir=rtl]) .day-wrapper{border-top-right-radius:40%;border-bottom-right-radius:40%;-webkit-box-shadow:inset -4px 0 var(--calcite-ui-foreground-1);box-shadow:inset -4px 0 var(--calcite-ui-foreground-1)}:host(:hover[range-hover]:not([selected]).focused--end[dir=ltr]) .day,:host(:hover[range-hover]:not([selected]).focused--start[dir=rtl]) .day{border-radius:100%;-webkit-box-shadow:-2px 0 var(--calcite-ui-foreground-1);box-shadow:-2px 0 var(--calcite-ui-foreground-1)}:host(:hover[range-hover]:not([selected]).focused--start[dir=ltr]) .day-wrapper,:host(:hover[range-hover]:not([selected]).focused--end[dir=rtl]) .day-wrapper{border-top-left-radius:40%;border-bottom-left-radius:40%;-webkit-box-shadow:inset 4px 0 var(--calcite-ui-foreground-1);box-shadow:inset 4px 0 var(--calcite-ui-foreground-1)}:host(:hover[range-hover]:not([selected]).focused--start[dir=ltr]) .day,:host(:hover[range-hover]:not([selected]).focused--end[dir=rtl]) .day{border-radius:100%;-webkit-box-shadow:2px 0 var(--calcite-ui-foreground-1);box-shadow:2px 0 var(--calcite-ui-foreground-1)}:host([end-of-range].hover--inside-range.focused--end) .day-wrapper,:host([start-of-range].hover--inside-range.focused--start) .day-wrapper,:host(:hover[start-of-range].hover--inside-range.focused--end) .day-wrapper,:host(:hover[end-of-range].hover--inside-range.focused--start) .day-wrapper{background:none}:host([start-of-range].hover--inside-range.focused--end) .day-wrapper,:host([end-of-range].hover--inside-range.focused--start) .day-wrapper{background-color:var(--calcite-ui-foreground-2)}:host([dir=ltr][highlighted]:first-child) .day-wrapper,:host([dir=rtl][highlighted]:last-child) .day-wrapper,:host([range-hover][dir=ltr]:not([selected]):first-child) .day-wrapper,:host([range-hover][dir=rtl]:not([selected]):last-child) .day-wrapper{border-top-left-radius:45%;border-bottom-left-radius:45%}:host([dir=ltr][highlighted]:last-child) .day-wrapper,:host([dir=rtl][highlighted]:first-child) .day-wrapper,:host([range-hover][dir=ltr]:not([selected]):last-child) .day-wrapper,:host([range-hover][dir=rtl]:not([selected]):first-child) .day-wrapper{border-top-right-radius:45%;border-bottom-right-radius:45%}";
var CalciteDatePickerDay = /** @class */ (function () {
    function CalciteDatePickerDay(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        /** Date is outside of range and can't be selected */
        this.disabled = false;
        /** Date is in the current month. */
        this.currentMonth = false;
        /** Date is the current selected date of the picker */
        this.selected = false;
        /** Date is currently highlighted as part of the range */
        this.highlighted = false;
        /** Showing date range */
        this.range = false;
        /** Date is the start of date range */
        this.startOfRange = false;
        /** Date is the end of date range */
        this.endOfRange = false;
        this.rangeHover = false;
        /** Date is actively in focus for keyboard navigation */
        this.active = false;
        //--------------------------------------------------------------------------
        //
        //  Event Listeners
        //
        //--------------------------------------------------------------------------
        this.onClick = function () {
            !_this.disabled && _this.calciteDaySelect.emit();
        };
        this.keyDownHandler = function (e) {
            var key = getKey(e.key);
            if (key === " " || key === "Enter") {
                !_this.disabled && _this.calciteDaySelect.emit();
            }
        };
        this.calciteDaySelect = createEvent(this, "calciteDaySelect", 7);
        this.calciteDayHover = createEvent(this, "calciteDayHover", 7);
    }
    CalciteDatePickerDay.prototype.mouseoverHandler = function () {
        this.calciteDayHover.emit({
            disabled: this.disabled
        });
    };
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    CalciteDatePickerDay.prototype.render = function () {
        var _this = this;
        var formattedDay = String(this.day)
            .split("")
            .map(function (i) { return _this.localeData.numerals[i]; })
            .join("");
        var dir = getElementDir(this.el);
        return (h(Host, { dir: dir, onClick: this.onClick, onKeyDown: this.keyDownHandler, role: "gridcell", tabindex: this.active ? 0 : -1 }, h("div", { class: "day-v-wrapper" }, h("div", { class: "day-wrapper" }, h("span", { class: "day" }, h("span", { class: "text" }, formattedDay))))));
    };
    Object.defineProperty(CalciteDatePickerDay.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return CalciteDatePickerDay;
}());
CalciteDatePickerDay.style = calciteDatePickerDayCss;
var calciteDatePickerMonthCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}.calender{padding-bottom:4px}.week-headers{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;border-top:1px solid var(--calcite-ui-border-3);padding:0 4px}.week-header{color:var(--calcite-ui-text-3);font-weight:600;width:calc(100% / 7);text-align:center}:host([scale=s]) .week-header{font-size:12px;padding:16px 0 16px 0}:host([scale=m]) .week-header{font-size:12px;padding:24px 0 20px 0}:host([scale=l]) .week-header{font-size:14px;padding:32px 0 24px 0}.week-days{outline:none;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;padding:0 6px}";
var CalciteDatePickerMonth = /** @class */ (function () {
    function CalciteDatePickerMonth(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        /** Date currently active.*/
        this.activeDate = new Date();
        //--------------------------------------------------------------------------
        //
        //  Event Listeners
        //
        //--------------------------------------------------------------------------
        this.keyDownHandler = function (e) {
            var isRTL = _this.el.dir === "rtl";
            switch (getKey(e.key)) {
                case "ArrowUp":
                    e.preventDefault();
                    _this.addDays(-7);
                    break;
                case "ArrowRight":
                    e.preventDefault();
                    _this.addDays(isRTL ? -1 : 1);
                    break;
                case "ArrowDown":
                    e.preventDefault();
                    _this.addDays(7);
                    break;
                case "ArrowLeft":
                    e.preventDefault();
                    _this.addDays(isRTL ? 1 : -1);
                    break;
                case "PageUp":
                    e.preventDefault();
                    _this.addMonths(-1);
                    break;
                case "PageDown":
                    e.preventDefault();
                    _this.addMonths(1);
                    break;
                case "Home":
                    e.preventDefault();
                    _this.activeDate.setDate(1);
                    _this.addDays();
                    break;
                case "End":
                    e.preventDefault();
                    _this.activeDate.setDate(new Date(_this.activeDate.getFullYear(), _this.activeDate.getMonth() + 1, 0).getDate());
                    _this.addDays();
                    break;
                case "Enter":
                case " ":
                    e.preventDefault();
                    break;
                case "Tab":
                    _this.activeFocus = false;
            }
        };
        /**
         * Once user is not interacting via keyboard,
         * disable auto focusing of active date
         */
        this.disableActiveFocus = function () {
            _this.activeFocus = false;
        };
        this.dayHover = function (e) {
            var target = e.target;
            if (e.detail.disabled) {
                _this.calciteDatePickerMouseOut.emit(target.value);
            }
            else {
                _this.calciteDatePickerHover.emit();
            }
        };
        this.daySelect = function (e) {
            var target = e.target;
            _this.calciteDatePickerSelect.emit(target.value);
        };
        this.calciteDatePickerSelect = createEvent(this, "calciteDatePickerSelect", 7);
        this.calciteDatePickerHover = createEvent(this, "calciteDatePickerHover", 7);
        this.calciteDatePickerActiveDateChange = createEvent(this, "calciteDatePickerActiveDateChange", 7);
        this.calciteDatePickerMouseOut = createEvent(this, "calciteDatePickerMouseOut", 7);
    }
    CalciteDatePickerMonth.prototype.mouseoutHandler = function () {
        this.calciteDatePickerMouseOut.emit();
    };
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    CalciteDatePickerMonth.prototype.render = function () {
        var _this = this;
        var month = this.activeDate.getMonth();
        var year = this.activeDate.getFullYear();
        var startOfWeek = this.localeData.weekStart % 7;
        var _b = this.localeData.days, abbreviated = _b.abbreviated, short = _b.short, narrow = _b.narrow;
        var weekDays = this.scale === "s" ? narrow || short || abbreviated : short || abbreviated || narrow;
        var adjustedWeekDays = __spreadArrays(weekDays.slice(startOfWeek, 7), weekDays.slice(0, startOfWeek));
        var curMonDays = this.getCurrentMonthDays(month, year);
        var prevMonDays = this.getPrevMonthdays(month, year, startOfWeek);
        var nextMonDays = this.getNextMonthDays(month, year, startOfWeek);
        var dir = getElementDir(this.el);
        var days = __spreadArrays(prevMonDays.map(function (day) {
            var date = new Date(year, month - 1, day);
            return _this.renderDateDay(false, day, dir, date);
        }), curMonDays.map(function (day) {
            var date = new Date(year, month, day);
            var active = sameDate(date, _this.activeDate);
            return _this.renderDateDay(active, day, dir, date, true, true);
        }), nextMonDays.map(function (day) {
            var date = new Date(year, month + 1, day);
            return _this.renderDateDay(false, day, dir, date);
        }));
        var weeks = [];
        for (var i = 0; i < days.length; i += 7) {
            weeks.push(days.slice(i, i + 7));
        }
        return (h(Host, { onFocusOut: this.disableActiveFocus, onKeyDown: this.keyDownHandler }, h("div", { class: "calender", role: "grid" }, h("div", { class: "week-headers", role: "row" }, adjustedWeekDays.map(function (weekday) { return (h("span", { class: "week-header", role: "columnheader" }, weekday)); })), weeks.map(function (days) { return (h("div", { class: "week-days", role: "row" }, days)); }))));
    };
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    /**
     * Add n months to the current month
     */
    CalciteDatePickerMonth.prototype.addMonths = function (step) {
        var nextDate = new Date(this.activeDate);
        nextDate.setMonth(this.activeDate.getMonth() + step);
        this.calciteDatePickerActiveDateChange.emit(dateFromRange(nextDate, this.min, this.max));
        this.activeFocus = true;
    };
    /**
     * Add n days to the current date
     */
    CalciteDatePickerMonth.prototype.addDays = function (step) {
        if (step === void 0) { step = 0; }
        var nextDate = new Date(this.activeDate);
        nextDate.setDate(this.activeDate.getDate() + step);
        this.calciteDatePickerActiveDateChange.emit(dateFromRange(nextDate, this.min, this.max));
        this.activeFocus = true;
    };
    /**
     * Get dates for last days of the previous month
     */
    CalciteDatePickerMonth.prototype.getPrevMonthdays = function (month, year, startOfWeek) {
        var lastDate = new Date(year, month, 0);
        var date = lastDate.getDate();
        var day = lastDate.getDay();
        var days = [];
        if (day - 6 === startOfWeek) {
            return days;
        }
        for (var i = lastDate.getDay(); i >= startOfWeek; i--) {
            days.push(date - i);
        }
        return days;
    };
    /**
     * Get dates for the current month
     */
    CalciteDatePickerMonth.prototype.getCurrentMonthDays = function (month, year) {
        var num = new Date(year, month + 1, 0).getDate();
        var days = [];
        for (var i = 0; i < num; i++) {
            days.push(i + 1);
        }
        return days;
    };
    /**
     * Get dates for first days of the next month
     */
    CalciteDatePickerMonth.prototype.getNextMonthDays = function (month, year, startOfWeek) {
        var endDay = new Date(year, month + 1, 0).getDay();
        var days = [];
        if (endDay === (startOfWeek + 6) % 7) {
            return days;
        }
        for (var i = 0; i < (6 - (endDay - startOfWeek)) % 7; i++) {
            days.push(i + 1);
        }
        return days;
    };
    /**
     * Determine if the date is in between the start and end dates
     */
    CalciteDatePickerMonth.prototype.betweenSelectedRange = function (date) {
        return (this.startDate &&
            this.endDate &&
            date > this.startDate &&
            date < this.endDate &&
            !this.isRangeHover(date) &&
            !this.isHoverInRange());
    };
    /**
     * Determine if the date should be in selected state
     */
    CalciteDatePickerMonth.prototype.isSelected = function (date) {
        return (sameDate(date, this.selectedDate) ||
            (this.startDate && sameDate(date, this.startDate)) ||
            (this.endDate && sameDate(date, this.endDate)));
    };
    /**
     * Determine if the date is the start of the date range
     */
    CalciteDatePickerMonth.prototype.isStartOfRange = function (date) {
        return (!!this.startDate &&
            !sameDate(this.startDate, this.endDate) &&
            sameDate(this.startDate, date) &&
            !this.isEndOfRange(date));
    };
    CalciteDatePickerMonth.prototype.isEndOfRange = function (date) {
        return ((!!this.endDate && !sameDate(this.startDate, this.endDate) && sameDate(this.endDate, date)) ||
            (!this.endDate &&
                this.hoverRange &&
                sameDate(this.startDate, this.hoverRange.end) &&
                sameDate(date, this.hoverRange.end)));
    };
    /**
     * Render calcite-date-picker-day
     */
    CalciteDatePickerMonth.prototype.renderDateDay = function (active, day, dir, date, currentMonth, ref) {
        var _this = this;
        var _a;
        var isFocusedOnStart = this.isFocusedOnStart();
        var isHoverInRange = this.isHoverInRange() ||
            (!this.endDate && this.hoverRange && sameDate((_a = this.hoverRange) === null || _a === void 0 ? void 0 : _a.end, this.startDate));
        return (h("calcite-date-picker-day", { active: active, class: {
                "hover--inside-range": this.startDate && isHoverInRange,
                "hover--outside-range": this.startDate && !isHoverInRange,
                "focused--start": isFocusedOnStart,
                "focused--end": !isFocusedOnStart
            }, currentMonth: currentMonth, day: day, dir: dir, disabled: !inRange(date, this.min, this.max), endOfRange: this.isEndOfRange(date), highlighted: this.betweenSelectedRange(date), key: date.toDateString(), localeData: this.localeData, onCalciteDayHover: this.dayHover, onCalciteDaySelect: this.daySelect, range: !!this.startDate && !!this.endDate && !sameDate(this.startDate, this.endDate), rangeHover: this.isRangeHover(date), ref: function (el) {
                // when moving via keyboard, focus must be updated on active date
                if (ref && active && _this.activeFocus) {
                    el === null || el === void 0 ? void 0 : el.focus();
                }
            }, scale: this.scale, selected: this.isSelected(date), startOfRange: this.isStartOfRange(date), value: date }));
    };
    CalciteDatePickerMonth.prototype.isFocusedOnStart = function () {
        var _a;
        return ((_a = this.hoverRange) === null || _a === void 0 ? void 0 : _a.focused) === "start";
    };
    CalciteDatePickerMonth.prototype.isHoverInRange = function () {
        if (!this.hoverRange) {
            return;
        }
        var _b = this.hoverRange, start = _b.start, end = _b.end;
        return ((!this.isFocusedOnStart() && !!this.startDate && (!this.endDate || end < this.endDate)) ||
            (this.isFocusedOnStart() && !!this.startDate && start > this.startDate));
    };
    CalciteDatePickerMonth.prototype.isRangeHover = function (date) {
        if (!this.hoverRange) {
            return false;
        }
        var _b = this.hoverRange, start = _b.start, end = _b.end;
        var isStart = this.isFocusedOnStart();
        var insideRange = this.isHoverInRange();
        var cond1 = insideRange &&
            ((!isStart && date > this.startDate && (date < end || sameDate(date, end))) ||
                (isStart && date < this.endDate && (date > start || sameDate(date, start))));
        var cond2 = !insideRange &&
            ((!isStart && date >= this.endDate && (date < end || sameDate(date, end))) ||
                (isStart &&
                    (date < this.startDate || (this.endDate && sameDate(date, this.startDate))) &&
                    (date > start || sameDate(date, start))));
        return cond1 || cond2;
    };
    Object.defineProperty(CalciteDatePickerMonth.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return CalciteDatePickerMonth;
}());
CalciteDatePickerMonth.style = calciteDatePickerMonthCss;
var calciteDatePickerMonthHeaderCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}.header{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:0 3px}:host([scale=s]) .text{font-size:14px}:host([scale=s]) .chevron{height:38px}:host([scale=m]) .text{font-size:16px}:host([scale=m]) .chevron{height:48px}:host([scale=l]) .text{font-size:18px}:host([scale=l]) .chevron{height:64px}.chevron{color:var(--calcite-ui-text-2);-ms-flex-positive:0;flex-grow:0;width:calc(100% / 7);-webkit-box-sizing:content-box;box-sizing:content-box;outline:none;padding:0 4px;margin:0 -3px;border:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:var(--calcite-ui-foreground-1);cursor:pointer;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.chevron:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}.chevron:hover,.chevron:focus{fill:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-2)}.chevron:active{background-color:var(--calcite-ui-foreground-3)}.chevron[aria-disabled=true]{pointer-events:none;opacity:0}.text{-ms-flex:1 1 auto;flex:1 1 auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:row;flex-direction:row;line-height:1;margin:auto 0;text-align:center}.text--reverse{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.month,.year,.suffix{color:var(--calcite-ui-text-1);background:var(--calcite-ui-foreground-1);font-size:inherit;font-weight:500;line-height:1.25;margin:0 4px;display:inline-block}.year{font-family:inherit;text-align:center;border:none;width:3em;padding:0;background-color:transparent;position:relative;z-index:2;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.year:hover{-webkit-transition:outline-color 100ms ease-in-out;transition:outline-color 100ms ease-in-out;outline:2px solid var(--calcite-ui-border-2);outline-offset:2px}.year:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:2px}.year--suffix{width:4rem;text-align:left}.year-wrap{position:relative}.suffix{position:absolute;width:4rem;white-space:nowrap;text-align:left;top:0;left:0}.suffix__invisible{visibility:hidden}";
var CalciteDatePickerMonthHeader = /** @class */ (function () {
    function CalciteDatePickerMonthHeader(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Private Methods
        //
        //--------------------------------------------------------------------------
        /**
         * Increment year on UP/DOWN keys
         */
        this.onYearKey = function (e) {
            var year = e.target.value;
            switch (getKey(e.key)) {
                case "ArrowDown":
                    e.preventDefault();
                    _this.setYear(year, -1);
                    break;
                case "ArrowUp":
                    e.preventDefault();
                    _this.setYear(year, 1);
                    break;
            }
        };
        this.yearChanged = function (event) {
            _this.setYear(event.target.value);
        };
        this.prevMonthClick = function (e) {
            _this.handleArrowClick(e, _this.prevMonthDate);
        };
        this.prevMonthKeydown = function (e) {
            var key = getKey(e.key);
            if (key === " " || key === "Enter") {
                _this.prevMonthClick(e);
            }
        };
        this.nextMonthClick = function (e) {
            _this.handleArrowClick(e, _this.nextMonthDate);
        };
        this.nextMonthKeydown = function (e) {
            var key = getKey(e.key);
            if (key === " " || key === "Enter") {
                _this.nextMonthClick(e);
            }
        };
        /*
         * Update active month on clicks of left/right arrows
         */
        this.handleArrowClick = function (e, date) {
            e === null || e === void 0 ? void 0 : e.preventDefault();
            e.stopPropagation();
            _this.calciteDatePickerSelect.emit(date);
        };
        this.calciteDatePickerSelect = createEvent(this, "calciteDatePickerSelect", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    CalciteDatePickerMonthHeader.prototype.connectedCallback = function () {
        this.setNextPrevMonthDates();
    };
    CalciteDatePickerMonthHeader.prototype.render = function () {
        var _this = this;
        var _a;
        var activeMonth = this.activeDate.getMonth();
        var _b = this.localeData, months = _b.months, unitOrder = _b.unitOrder;
        var localizedMonth = (months.wide || months.narrow || months.abbreviated)[activeMonth];
        var localizedYear = localizeNumber(this.activeDate.getFullYear(), this.localeData);
        var iconScale = this.scale === "l" ? "m" : "s";
        var dir = getElementDir(this.el);
        var order = getOrder(unitOrder);
        var reverse = order.indexOf("y") < order.indexOf("m");
        var suffix = (_a = this.localeData.year) === null || _a === void 0 ? void 0 : _a.suffix;
        return (h(Host, { dir: dir }, h("div", { class: "header" }, h("a", { "aria-disabled": (this.prevMonthDate.getMonth() === activeMonth).toString(), "aria-label": this.intlPrevMonth, class: "chevron", href: "#", onClick: this.nextMonthClick, onKeyDown: this.nextMonthKeydown, role: "button", tabindex: this.prevMonthDate.getMonth() === activeMonth ? -1 : 0 }, h("calcite-icon", { dir: dir, "flip-rtl": true, icon: "chevron-left", scale: iconScale })), h("div", { class: { text: true, "text--reverse": reverse } }, h("span", { "aria-level": "2", class: "month", role: "heading" }, localizedMonth), h("span", { class: "year-wrap" }, h("input", { class: {
                year: true,
                "year--suffix": !!suffix
            }, inputmode: "numeric", maxlength: "4", minlength: "1", onChange: this.yearChanged, onKeyDown: this.onYearKey, pattern: "\\d*", ref: function (el) { return (_this.yearInput = el); }, type: "text", value: localizedYear }), suffix && (h("span", { class: "suffix" }, h("span", { "aria-hidden": "true", class: "suffix__invisible" }, localizedYear), " " + suffix)))), h("a", { "aria-disabled": (this.nextMonthDate.getMonth() === activeMonth).toString(), "aria-label": this.intlNextMonth, class: "chevron", href: "#", onClick: this.prevMonthClick, onKeyDown: this.prevMonthKeydown, role: "button", tabindex: this.nextMonthDate.getMonth() === activeMonth ? -1 : 0 }, h("calcite-icon", { dir: dir, "flip-rtl": true, icon: "chevron-right", scale: iconScale })))));
    };
    CalciteDatePickerMonthHeader.prototype.setNextPrevMonthDates = function () {
        this.nextMonthDate = dateFromRange(nextMonth(this.activeDate), this.min, this.max);
        this.prevMonthDate = dateFromRange(prevMonth(this.activeDate), this.min, this.max);
    };
    /**
     * Parse localized year string from input,
     * set to active if in range
     */
    CalciteDatePickerMonthHeader.prototype.setYear = function (localizedYear, increment) {
        if (increment === void 0) { increment = 0; }
        var _b = this, min = _b.min, max = _b.max, activeDate = _b.activeDate, localeData = _b.localeData, yearInput = _b.yearInput;
        var parsedYear = parseNumber(localizedYear, localeData);
        var length = parsedYear.toString().length;
        var year = isNaN(parsedYear) ? false : parsedYear + increment;
        var inRange = year && (!min || min.getFullYear() <= year) && (!max || max.getFullYear() >= year);
        // if you've supplied a year and it's in range, update active date
        if (year && inRange && length === localizedYear.length) {
            var nextDate = new Date(activeDate);
            nextDate.setFullYear(year);
            var inRangeDate = dateFromRange(nextDate, min, max);
            this.calciteDatePickerSelect.emit(inRangeDate);
            yearInput.value = localizeNumber(inRangeDate.getFullYear(), localeData);
        }
        else {
            // leave the current active date and clean up garbage input
            yearInput.value = localizeNumber(activeDate.getFullYear(), localeData);
        }
    };
    Object.defineProperty(CalciteDatePickerMonthHeader.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalciteDatePickerMonthHeader, "watchers", {
        get: function () {
            return {
                "min": ["setNextPrevMonthDates"],
                "max": ["setNextPrevMonthDates"],
                "activeDate": ["setNextPrevMonthDates"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return CalciteDatePickerMonthHeader;
}());
CalciteDatePickerMonthHeader.style = calciteDatePickerMonthHeaderCss;
export { CalciteDatePickerDay as calcite_date_picker_day, CalciteDatePickerMonth as calcite_date_picker_month, CalciteDatePickerMonthHeader as calcite_date_picker_month_header };
