import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-17d4341f.js';
import { g as getElementDir } from './dom-29efd1ef.js';
import { g as getKey } from './key-6f340c70.js';
import { s as sameDate, a as dateFromRange, i as inRange, l as localizeNumber, c as getOrder, n as nextMonth, e as prevMonth, f as parseNumber } from './date-21b5107e.js';

const calciteDatePickerDayCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f;--calcite-ui-foreground-current:#214155}:host{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--calcite-ui-text-3);cursor:pointer;width:calc(100% / 7);min-width:0}.day-v-wrapper{-ms-flex:1 1 auto;flex:1 1 auto}.day{display:-ms-flexbox;display:flex;border-radius:100%;font-size:0.875rem;line-height:1.5;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;line-height:1;color:var(--calcite-ui-text-3);-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out;background:none;-webkit-box-shadow:0 0 0 2px transparent, 0 0 0 0px transparent;box-shadow:0 0 0 2px transparent, 0 0 0 0px transparent;opacity:var(--calcite-ui-opacity-disabled)}.text{margin:1px 0 0 1px}:host([scale=s]) .day-v-wrapper{padding-top:0.125rem;padding-bottom:0.125rem}:host([scale=s]) .day-wrapper{padding:0}:host([scale=s]) .day{height:27px;width:27px;font-size:var(--calcite-font-size--2)}:host([scale=m]) .day-v-wrapper{padding-top:0.25rem;padding-bottom:0.25rem}:host([scale=m]) .day-wrapper{padding-left:0.25rem;padding-right:0.25rem}:host([scale=m]) .day{height:33px;width:33px;font-size:var(--calcite-font-size--1)}:host([scale=l]) .day-v-wrapper{padding-top:0.25rem;padding-bottom:0.25rem}:host([scale=l]) .day-wrapper{padding-left:0.25rem;padding-right:0.25rem}:host([scale=l]) .day{height:43px;width:43px;font-size:var(--calcite-font-size-0)}:host([current-month]) .day{opacity:1}:host([disabled]){cursor:default;opacity:0.2}:host(:hover:not([disabled])) .day,:host([active]:not([range])) .day{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host(:focus),:host([active]){z-index:1}:host(:focus:not([disabled])) .day{-webkit-box-shadow:0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-blue-1);box-shadow:0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-blue-1)}:host([selected]) .day{background-color:var(--calcite-ui-blue-1) !important;color:var(--calcite-ui-foreground-1) !important;font-weight:500;z-index:1}:host([range][selected]) .day-wrapper{background-color:var(--calcite-ui-foreground-current)}:host([start-of-range][dir=ltr]) .day-wrapper,:host([end-of-range][dir=rtl]) .day-wrapper{border-top-left-radius:40%;border-bottom-left-radius:40%;-webkit-box-shadow:inset 4px 0 var(--calcite-ui-foreground-1);box-shadow:inset 4px 0 var(--calcite-ui-foreground-1)}:host([start-of-range][dir=ltr]:not(:focus)) .day,:host([end-of-range][dir=rtl]:not(:focus)) .day{-webkit-box-shadow:2px 0 var(--calcite-ui-foreground-1);box-shadow:2px 0 var(--calcite-ui-foreground-1)}:host([end-of-range][dir=ltr]) .day-wrapper,:host([start-of-range][dir=rtl]) .day-wrapper{border-top-right-radius:40%;border-bottom-right-radius:40%;-webkit-box-shadow:inset -4px 0 var(--calcite-ui-foreground-1);box-shadow:inset -4px 0 var(--calcite-ui-foreground-1)}:host([end-of-range][dir=ltr]:not(:focus)) .day,:host([start-of-range][dir=rtl]:not(:focus)) .day{-webkit-box-shadow:-2px 0 var(--calcite-ui-foreground-1);box-shadow:-2px 0 var(--calcite-ui-foreground-1)}:host([end-of-range][scale=l][dir=ltr]) .day-wrapper,:host([start-of-range][scale=l][dir=rtl]) .day-wrapper{-webkit-box-shadow:inset -8px 0 var(--calcite-ui-foreground-1);box-shadow:inset -8px 0 var(--calcite-ui-foreground-1)}:host([highlighted]) .day-wrapper{background-color:var(--calcite-ui-foreground-current)}:host([highlighted]) .day-wrapper .day{color:var(--calcite-ui-text-1)}:host([highlighted]:not([active]:focus)) .day{border-radius:0;color:var(--calcite-ui-text-1)}:host([range-hover]:not([selected])) .day-wrapper{background-color:var(--calcite-ui-foreground-2)}:host([range-hover]:not([selected])) .day{border-radius:0}:host([end-of-range][range-hover][dir=ltr]) .day-wrapper,:host([start-of-range][range-hover][dir=rtl]) .day-wrapper{background-image:-webkit-gradient(linear, left top, right top, from(var(--calcite-ui-foreground-current)), color-stop(var(--calcite-ui-foreground-current)), color-stop(var(--calcite-ui-foreground-2)), to(var(--calcite-ui-foreground-2)));background-image:linear-gradient(to right, var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2));border-radius:0;-webkit-box-shadow:none;box-shadow:none}:host([start-of-range][range-hover][dir=ltr]) .day-wrapper,:host([end-of-range][range-hover][dir=rtl]) .day-wrapper{background-image:-webkit-gradient(linear, right top, left top, from(var(--calcite-ui-foreground-current)), color-stop(var(--calcite-ui-foreground-current)), color-stop(var(--calcite-ui-foreground-2)), to(var(--calcite-ui-foreground-2)));background-image:linear-gradient(to left, var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2));border-radius:0;-webkit-box-shadow:none;box-shadow:none}:host(:hover[range-hover]:not([selected]).focused--end[dir=ltr]) .day-wrapper,:host(:hover[range-hover]:not([selected]).focused--start[dir=rtl]) .day-wrapper{border-top-right-radius:40%;border-bottom-right-radius:40%;-webkit-box-shadow:inset -4px 0 var(--calcite-ui-foreground-1);box-shadow:inset -4px 0 var(--calcite-ui-foreground-1)}:host(:hover[range-hover]:not([selected]).focused--end[dir=ltr]) .day,:host(:hover[range-hover]:not([selected]).focused--start[dir=rtl]) .day{border-radius:100%;-webkit-box-shadow:-2px 0 var(--calcite-ui-foreground-1);box-shadow:-2px 0 var(--calcite-ui-foreground-1)}:host(:hover[range-hover]:not([selected]).focused--start[dir=ltr]) .day-wrapper,:host(:hover[range-hover]:not([selected]).focused--end[dir=rtl]) .day-wrapper{border-top-left-radius:40%;border-bottom-left-radius:40%;-webkit-box-shadow:inset 4px 0 var(--calcite-ui-foreground-1);box-shadow:inset 4px 0 var(--calcite-ui-foreground-1)}:host(:hover[range-hover]:not([selected]).focused--start[dir=ltr]) .day,:host(:hover[range-hover]:not([selected]).focused--end[dir=rtl]) .day{border-radius:100%;-webkit-box-shadow:2px 0 var(--calcite-ui-foreground-1);box-shadow:2px 0 var(--calcite-ui-foreground-1)}:host([end-of-range].hover--inside-range.focused--end) .day-wrapper,:host([start-of-range].hover--inside-range.focused--start) .day-wrapper,:host(:hover[start-of-range].hover--inside-range.focused--end) .day-wrapper,:host(:hover[end-of-range].hover--inside-range.focused--start) .day-wrapper{background:none}:host([start-of-range].hover--inside-range.focused--end) .day-wrapper,:host([end-of-range].hover--inside-range.focused--start) .day-wrapper{background-color:var(--calcite-ui-foreground-2)}:host([dir=ltr][highlighted]:first-child) .day-wrapper,:host([dir=rtl][highlighted]:last-child) .day-wrapper,:host([range-hover][dir=ltr]:not([selected]):first-child) .day-wrapper,:host([range-hover][dir=rtl]:not([selected]):last-child) .day-wrapper{border-top-left-radius:45%;border-bottom-left-radius:45%}:host([dir=ltr][highlighted]:last-child) .day-wrapper,:host([dir=rtl][highlighted]:first-child) .day-wrapper,:host([range-hover][dir=ltr]:not([selected]):last-child) .day-wrapper,:host([range-hover][dir=rtl]:not([selected]):first-child) .day-wrapper{border-top-right-radius:45%;border-bottom-right-radius:45%}";

const CalciteDatePickerDay = class {
    constructor(hostRef) {
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
        this.onClick = () => {
            !this.disabled && this.calciteDaySelect.emit();
        };
        this.keyDownHandler = (e) => {
            const key = getKey(e.key);
            if (key === " " || key === "Enter") {
                !this.disabled && this.calciteDaySelect.emit();
            }
        };
        this.calciteDaySelect = createEvent(this, "calciteDaySelect", 7);
        this.calciteDayHover = createEvent(this, "calciteDayHover", 7);
    }
    mouseoverHandler() {
        this.calciteDayHover.emit({
            disabled: this.disabled
        });
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    render() {
        const formattedDay = String(this.day)
            .split("")
            .map((i) => this.localeData.numerals[i])
            .join("");
        const dir = getElementDir(this.el);
        return (h(Host, { dir: dir, onClick: this.onClick, onKeyDown: this.keyDownHandler, role: "gridcell", tabindex: this.active ? 0 : -1 }, h("div", { class: "day-v-wrapper" }, h("div", { class: "day-wrapper" }, h("span", { class: "day" }, h("span", { class: "text" }, formattedDay))))));
    }
    get el() { return getElement(this); }
};
CalciteDatePickerDay.style = calciteDatePickerDayCss;

const calciteDatePickerMonthCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}.calender{padding-bottom:4px}.week-headers{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;border-top:1px solid var(--calcite-ui-border-3);padding:0 4px}.week-header{color:var(--calcite-ui-text-3);font-weight:600;width:calc(100% / 7);text-align:center}:host([scale=s]) .week-header{font-size:12px;padding:16px 0 16px 0}:host([scale=m]) .week-header{font-size:12px;padding:24px 0 20px 0}:host([scale=l]) .week-header{font-size:14px;padding:32px 0 24px 0}.week-days{outline:none;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;padding:0 6px}";

const CalciteDatePickerMonth = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** Date currently active.*/
        this.activeDate = new Date();
        //--------------------------------------------------------------------------
        //
        //  Event Listeners
        //
        //--------------------------------------------------------------------------
        this.keyDownHandler = (e) => {
            const isRTL = this.el.dir === "rtl";
            switch (getKey(e.key)) {
                case "ArrowUp":
                    e.preventDefault();
                    this.addDays(-7);
                    break;
                case "ArrowRight":
                    e.preventDefault();
                    this.addDays(isRTL ? -1 : 1);
                    break;
                case "ArrowDown":
                    e.preventDefault();
                    this.addDays(7);
                    break;
                case "ArrowLeft":
                    e.preventDefault();
                    this.addDays(isRTL ? 1 : -1);
                    break;
                case "PageUp":
                    e.preventDefault();
                    this.addMonths(-1);
                    break;
                case "PageDown":
                    e.preventDefault();
                    this.addMonths(1);
                    break;
                case "Home":
                    e.preventDefault();
                    this.activeDate.setDate(1);
                    this.addDays();
                    break;
                case "End":
                    e.preventDefault();
                    this.activeDate.setDate(new Date(this.activeDate.getFullYear(), this.activeDate.getMonth() + 1, 0).getDate());
                    this.addDays();
                    break;
                case "Enter":
                case " ":
                    e.preventDefault();
                    break;
                case "Tab":
                    this.activeFocus = false;
            }
        };
        /**
         * Once user is not interacting via keyboard,
         * disable auto focusing of active date
         */
        this.disableActiveFocus = () => {
            this.activeFocus = false;
        };
        this.dayHover = (e) => {
            const target = e.target;
            if (e.detail.disabled) {
                this.calciteDatePickerMouseOut.emit(target.value);
            }
            else {
                this.calciteDatePickerHover.emit();
            }
        };
        this.daySelect = (e) => {
            const target = e.target;
            this.calciteDatePickerSelect.emit(target.value);
        };
        this.calciteDatePickerSelect = createEvent(this, "calciteDatePickerSelect", 7);
        this.calciteDatePickerHover = createEvent(this, "calciteDatePickerHover", 7);
        this.calciteDatePickerActiveDateChange = createEvent(this, "calciteDatePickerActiveDateChange", 7);
        this.calciteDatePickerMouseOut = createEvent(this, "calciteDatePickerMouseOut", 7);
    }
    mouseoutHandler() {
        this.calciteDatePickerMouseOut.emit();
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    render() {
        const month = this.activeDate.getMonth();
        const year = this.activeDate.getFullYear();
        const startOfWeek = this.localeData.weekStart % 7;
        const { abbreviated, short, narrow } = this.localeData.days;
        const weekDays = this.scale === "s" ? narrow || short || abbreviated : short || abbreviated || narrow;
        const adjustedWeekDays = [...weekDays.slice(startOfWeek, 7), ...weekDays.slice(0, startOfWeek)];
        const curMonDays = this.getCurrentMonthDays(month, year);
        const prevMonDays = this.getPrevMonthdays(month, year, startOfWeek);
        const nextMonDays = this.getNextMonthDays(month, year, startOfWeek);
        const dir = getElementDir(this.el);
        const days = [
            ...prevMonDays.map((day) => {
                const date = new Date(year, month - 1, day);
                return this.renderDateDay(false, day, dir, date);
            }),
            ...curMonDays.map((day) => {
                const date = new Date(year, month, day);
                const active = sameDate(date, this.activeDate);
                return this.renderDateDay(active, day, dir, date, true, true);
            }),
            ...nextMonDays.map((day) => {
                const date = new Date(year, month + 1, day);
                return this.renderDateDay(false, day, dir, date);
            })
        ];
        const weeks = [];
        for (let i = 0; i < days.length; i += 7) {
            weeks.push(days.slice(i, i + 7));
        }
        return (h(Host, { onFocusOut: this.disableActiveFocus, onKeyDown: this.keyDownHandler }, h("div", { class: "calender", role: "grid" }, h("div", { class: "week-headers", role: "row" }, adjustedWeekDays.map((weekday) => (h("span", { class: "week-header", role: "columnheader" }, weekday)))), weeks.map((days) => (h("div", { class: "week-days", role: "row" }, days))))));
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    /**
     * Add n months to the current month
     */
    addMonths(step) {
        const nextDate = new Date(this.activeDate);
        nextDate.setMonth(this.activeDate.getMonth() + step);
        this.calciteDatePickerActiveDateChange.emit(dateFromRange(nextDate, this.min, this.max));
        this.activeFocus = true;
    }
    /**
     * Add n days to the current date
     */
    addDays(step = 0) {
        const nextDate = new Date(this.activeDate);
        nextDate.setDate(this.activeDate.getDate() + step);
        this.calciteDatePickerActiveDateChange.emit(dateFromRange(nextDate, this.min, this.max));
        this.activeFocus = true;
    }
    /**
     * Get dates for last days of the previous month
     */
    getPrevMonthdays(month, year, startOfWeek) {
        const lastDate = new Date(year, month, 0);
        const date = lastDate.getDate();
        const day = lastDate.getDay();
        const days = [];
        if (day - 6 === startOfWeek) {
            return days;
        }
        for (let i = lastDate.getDay(); i >= startOfWeek; i--) {
            days.push(date - i);
        }
        return days;
    }
    /**
     * Get dates for the current month
     */
    getCurrentMonthDays(month, year) {
        const num = new Date(year, month + 1, 0).getDate();
        const days = [];
        for (let i = 0; i < num; i++) {
            days.push(i + 1);
        }
        return days;
    }
    /**
     * Get dates for first days of the next month
     */
    getNextMonthDays(month, year, startOfWeek) {
        const endDay = new Date(year, month + 1, 0).getDay();
        const days = [];
        if (endDay === (startOfWeek + 6) % 7) {
            return days;
        }
        for (let i = 0; i < (6 - (endDay - startOfWeek)) % 7; i++) {
            days.push(i + 1);
        }
        return days;
    }
    /**
     * Determine if the date is in between the start and end dates
     */
    betweenSelectedRange(date) {
        return (this.startDate &&
            this.endDate &&
            date > this.startDate &&
            date < this.endDate &&
            !this.isRangeHover(date) &&
            !this.isHoverInRange());
    }
    /**
     * Determine if the date should be in selected state
     */
    isSelected(date) {
        return (sameDate(date, this.selectedDate) ||
            (this.startDate && sameDate(date, this.startDate)) ||
            (this.endDate && sameDate(date, this.endDate)));
    }
    /**
     * Determine if the date is the start of the date range
     */
    isStartOfRange(date) {
        return (!!this.startDate &&
            !sameDate(this.startDate, this.endDate) &&
            sameDate(this.startDate, date) &&
            !this.isEndOfRange(date));
    }
    isEndOfRange(date) {
        return ((!!this.endDate && !sameDate(this.startDate, this.endDate) && sameDate(this.endDate, date)) ||
            (!this.endDate &&
                this.hoverRange &&
                sameDate(this.startDate, this.hoverRange.end) &&
                sameDate(date, this.hoverRange.end)));
    }
    /**
     * Render calcite-date-picker-day
     */
    renderDateDay(active, day, dir, date, currentMonth, ref) {
        var _a;
        const isFocusedOnStart = this.isFocusedOnStart();
        const isHoverInRange = this.isHoverInRange() ||
            (!this.endDate && this.hoverRange && sameDate((_a = this.hoverRange) === null || _a === void 0 ? void 0 : _a.end, this.startDate));
        return (h("calcite-date-picker-day", { active: active, class: {
                "hover--inside-range": this.startDate && isHoverInRange,
                "hover--outside-range": this.startDate && !isHoverInRange,
                "focused--start": isFocusedOnStart,
                "focused--end": !isFocusedOnStart
            }, currentMonth: currentMonth, day: day, dir: dir, disabled: !inRange(date, this.min, this.max), endOfRange: this.isEndOfRange(date), highlighted: this.betweenSelectedRange(date), key: date.toDateString(), localeData: this.localeData, onCalciteDayHover: this.dayHover, onCalciteDaySelect: this.daySelect, range: !!this.startDate && !!this.endDate && !sameDate(this.startDate, this.endDate), rangeHover: this.isRangeHover(date), ref: (el) => {
                // when moving via keyboard, focus must be updated on active date
                if (ref && active && this.activeFocus) {
                    el === null || el === void 0 ? void 0 : el.focus();
                }
            }, scale: this.scale, selected: this.isSelected(date), startOfRange: this.isStartOfRange(date), value: date }));
    }
    isFocusedOnStart() {
        var _a;
        return ((_a = this.hoverRange) === null || _a === void 0 ? void 0 : _a.focused) === "start";
    }
    isHoverInRange() {
        if (!this.hoverRange) {
            return;
        }
        const { start, end } = this.hoverRange;
        return ((!this.isFocusedOnStart() && !!this.startDate && (!this.endDate || end < this.endDate)) ||
            (this.isFocusedOnStart() && !!this.startDate && start > this.startDate));
    }
    isRangeHover(date) {
        if (!this.hoverRange) {
            return false;
        }
        const { start, end } = this.hoverRange;
        const isStart = this.isFocusedOnStart();
        const insideRange = this.isHoverInRange();
        const cond1 = insideRange &&
            ((!isStart && date > this.startDate && (date < end || sameDate(date, end))) ||
                (isStart && date < this.endDate && (date > start || sameDate(date, start))));
        const cond2 = !insideRange &&
            ((!isStart && date >= this.endDate && (date < end || sameDate(date, end))) ||
                (isStart &&
                    (date < this.startDate || (this.endDate && sameDate(date, this.startDate))) &&
                    (date > start || sameDate(date, start))));
        return cond1 || cond2;
    }
    get el() { return getElement(this); }
};
CalciteDatePickerMonth.style = calciteDatePickerMonthCss;

const calciteDatePickerMonthHeaderCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}.header{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:0 3px}:host([scale=s]) .text{font-size:14px}:host([scale=s]) .chevron{height:38px}:host([scale=m]) .text{font-size:16px}:host([scale=m]) .chevron{height:48px}:host([scale=l]) .text{font-size:18px}:host([scale=l]) .chevron{height:64px}.chevron{color:var(--calcite-ui-text-2);-ms-flex-positive:0;flex-grow:0;width:calc(100% / 7);-webkit-box-sizing:content-box;box-sizing:content-box;outline:none;padding:0 4px;margin:0 -3px;border:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:var(--calcite-ui-foreground-1);cursor:pointer;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.chevron:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}.chevron:hover,.chevron:focus{fill:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-2)}.chevron:active{background-color:var(--calcite-ui-foreground-3)}.chevron[aria-disabled=true]{pointer-events:none;opacity:0}.text{-ms-flex:1 1 auto;flex:1 1 auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:row;flex-direction:row;line-height:1;margin:auto 0;text-align:center}.text--reverse{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.month,.year,.suffix{color:var(--calcite-ui-text-1);background:var(--calcite-ui-foreground-1);font-size:inherit;font-weight:500;line-height:1.25;margin:0 4px;display:inline-block}.year{font-family:inherit;text-align:center;border:none;width:3em;padding:0;background-color:transparent;position:relative;z-index:2;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.year:hover{-webkit-transition:outline-color 100ms ease-in-out;transition:outline-color 100ms ease-in-out;outline:2px solid var(--calcite-ui-border-2);outline-offset:2px}.year:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:2px}.year--suffix{width:4rem;text-align:left}.year-wrap{position:relative}.suffix{position:absolute;width:4rem;white-space:nowrap;text-align:left;top:0;left:0}.suffix__invisible{visibility:hidden}";

const CalciteDatePickerMonthHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Private Methods
        //
        //--------------------------------------------------------------------------
        /**
         * Increment year on UP/DOWN keys
         */
        this.onYearKey = (e) => {
            const year = e.target.value;
            switch (getKey(e.key)) {
                case "ArrowDown":
                    e.preventDefault();
                    this.setYear(year, -1);
                    break;
                case "ArrowUp":
                    e.preventDefault();
                    this.setYear(year, 1);
                    break;
            }
        };
        this.yearChanged = (event) => {
            this.setYear(event.target.value);
        };
        this.prevMonthClick = (e) => {
            this.handleArrowClick(e, this.prevMonthDate);
        };
        this.prevMonthKeydown = (e) => {
            const key = getKey(e.key);
            if (key === " " || key === "Enter") {
                this.prevMonthClick(e);
            }
        };
        this.nextMonthClick = (e) => {
            this.handleArrowClick(e, this.nextMonthDate);
        };
        this.nextMonthKeydown = (e) => {
            const key = getKey(e.key);
            if (key === " " || key === "Enter") {
                this.nextMonthClick(e);
            }
        };
        /*
         * Update active month on clicks of left/right arrows
         */
        this.handleArrowClick = (e, date) => {
            e === null || e === void 0 ? void 0 : e.preventDefault();
            e.stopPropagation();
            this.calciteDatePickerSelect.emit(date);
        };
        this.calciteDatePickerSelect = createEvent(this, "calciteDatePickerSelect", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        this.setNextPrevMonthDates();
    }
    render() {
        var _a;
        const activeMonth = this.activeDate.getMonth();
        const { months, unitOrder } = this.localeData;
        const localizedMonth = (months.wide || months.narrow || months.abbreviated)[activeMonth];
        const localizedYear = localizeNumber(this.activeDate.getFullYear(), this.localeData);
        const iconScale = this.scale === "l" ? "m" : "s";
        const dir = getElementDir(this.el);
        const order = getOrder(unitOrder);
        const reverse = order.indexOf("y") < order.indexOf("m");
        const suffix = (_a = this.localeData.year) === null || _a === void 0 ? void 0 : _a.suffix;
        return (h(Host, { dir: dir }, h("div", { class: "header" }, h("a", { "aria-disabled": (this.prevMonthDate.getMonth() === activeMonth).toString(), "aria-label": this.intlPrevMonth, class: "chevron", href: "#", onClick: this.nextMonthClick, onKeyDown: this.nextMonthKeydown, role: "button", tabindex: this.prevMonthDate.getMonth() === activeMonth ? -1 : 0 }, h("calcite-icon", { dir: dir, "flip-rtl": true, icon: "chevron-left", scale: iconScale })), h("div", { class: { text: true, "text--reverse": reverse } }, h("span", { "aria-level": "2", class: "month", role: "heading" }, localizedMonth), h("span", { class: "year-wrap" }, h("input", { class: {
                year: true,
                "year--suffix": !!suffix
            }, inputmode: "numeric", maxlength: "4", minlength: "1", onChange: this.yearChanged, onKeyDown: this.onYearKey, pattern: "\\d*", ref: (el) => (this.yearInput = el), type: "text", value: localizedYear }), suffix && (h("span", { class: "suffix" }, h("span", { "aria-hidden": "true", class: "suffix__invisible" }, localizedYear), " " + suffix)))), h("a", { "aria-disabled": (this.nextMonthDate.getMonth() === activeMonth).toString(), "aria-label": this.intlNextMonth, class: "chevron", href: "#", onClick: this.prevMonthClick, onKeyDown: this.prevMonthKeydown, role: "button", tabindex: this.nextMonthDate.getMonth() === activeMonth ? -1 : 0 }, h("calcite-icon", { dir: dir, "flip-rtl": true, icon: "chevron-right", scale: iconScale })))));
    }
    setNextPrevMonthDates() {
        this.nextMonthDate = dateFromRange(nextMonth(this.activeDate), this.min, this.max);
        this.prevMonthDate = dateFromRange(prevMonth(this.activeDate), this.min, this.max);
    }
    /**
     * Parse localized year string from input,
     * set to active if in range
     */
    setYear(localizedYear, increment = 0) {
        const { min, max, activeDate, localeData, yearInput } = this;
        const parsedYear = parseNumber(localizedYear, localeData);
        const length = parsedYear.toString().length;
        const year = isNaN(parsedYear) ? false : parsedYear + increment;
        const inRange = year && (!min || min.getFullYear() <= year) && (!max || max.getFullYear() >= year);
        // if you've supplied a year and it's in range, update active date
        if (year && inRange && length === localizedYear.length) {
            const nextDate = new Date(activeDate);
            nextDate.setFullYear(year);
            const inRangeDate = dateFromRange(nextDate, min, max);
            this.calciteDatePickerSelect.emit(inRangeDate);
            yearInput.value = localizeNumber(inRangeDate.getFullYear(), localeData);
        }
        else {
            // leave the current active date and clean up garbage input
            yearInput.value = localizeNumber(activeDate.getFullYear(), localeData);
        }
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "min": ["setNextPrevMonthDates"],
        "max": ["setNextPrevMonthDates"],
        "activeDate": ["setNextPrevMonthDates"]
    }; }
};
CalciteDatePickerMonthHeader.style = calciteDatePickerMonthHeaderCss;

export { CalciteDatePickerDay as calcite_date_picker_day, CalciteDatePickerMonth as calcite_date_picker_month, CalciteDatePickerMonthHeader as calcite_date_picker_month_header };
