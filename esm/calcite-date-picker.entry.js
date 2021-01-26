import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-17d4341f.js';
import { g as getElementDir } from './dom-29efd1ef.js';
import { g as getKey } from './key-6f340c70.js';
import { T as TEXT, g as getLocaleData } from './calcite-date-picker-resources-3e0a6b82.js';
import { g as getDaysDiff, b as dateToISO, d as dateFromISO, a as dateFromRange } from './date-21b5107e.js';

const calciteDatePickerCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:inline-block;vertical-align:top;width:100%;position:relative;overflow:visible;border-radius:none;border:1px solid var(--calcite-ui-border-2);background-color:var(--calcite-ui-foreground-1)}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host([scale=s]){max-width:216px}:host([scale=m]){max-width:286px}:host([scale=l]){max-width:398px}:host([scale=s][range]:not([layout=vertical])){max-width:462px}:host([scale=m][range]:not([layout=vertical])){max-width:596px}:host([scale=l][range]:not([layout=vertical])){max-width:820px}";

const CalciteDatePicker = class {
    constructor(hostRef) {
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
        this.hasShadow =  !!document.head.attachShadow;
        //--------------------------------------------------------------------------
        //
        //  Private Methods
        //
        //--------------------------------------------------------------------------
        this.keyUpHandler = (e) => {
            if (getKey(e.key) === "Escape") {
                this.reset();
            }
        };
        this.monthHeaderSelectChange = (e) => {
            const date = new Date(e.detail);
            if (!this.range) {
                this.activeDate = date;
            }
            else {
                if (this.activeRange === "start") {
                    this.activeStartDate = date;
                }
                else if (this.activeRange === "end") {
                    this.activeEndDate = date;
                }
                this.mostRecentRangeValue = date;
            }
        };
        this.monthActiveDateChange = (e) => {
            const date = new Date(e.detail);
            if (!this.range) {
                this.activeDate = date;
            }
            else {
                if (this.activeRange === "start") {
                    this.activeStartDate = date;
                }
                else if (this.activeRange === "end") {
                    this.activeEndDate = date;
                }
                this.mostRecentRangeValue = date;
            }
        };
        this.monthHoverChange = (e) => {
            if (!this.startAsDate) {
                this.hoverRange = undefined;
                return this.hoverRange;
            }
            const date = new Date(e.detail);
            this.hoverRange = {
                focused: this.activeRange,
                start: this.startAsDate,
                end: this.endAsDate
            };
            if (!this.proximitySelectionDisabled) {
                if (this.endAsDate) {
                    const startDiff = getDaysDiff(date, this.startAsDate);
                    const endDiff = getDaysDiff(date, this.endAsDate);
                    if (startDiff < endDiff) {
                        this.hoverRange.start = date;
                        this.hoverRange.focused = "start";
                    }
                    else {
                        this.hoverRange.end = date;
                        this.hoverRange.focused = "end";
                    }
                }
                else {
                    if (date < this.startAsDate) {
                        this.hoverRange = {
                            focused: "start",
                            start: date,
                            end: this.startAsDate
                        };
                    }
                    else {
                        this.hoverRange.end = date;
                        this.hoverRange.focused = "end";
                    }
                }
            }
            else {
                if (!this.endAsDate) {
                    if (date < this.startAsDate) {
                        this.hoverRange = {
                            focused: "start",
                            start: date,
                            end: this.startAsDate
                        };
                    }
                    else {
                        this.hoverRange.end = date;
                        this.hoverRange.focused = "end";
                    }
                }
                else {
                    this.hoverRange = undefined;
                }
            }
        };
        this.monthMouseOutChange = () => {
            if (this.hoverRange) {
                this.hoverRange = undefined;
            }
        };
        /**
         * Reset active date and close
         */
        this.reset = () => {
            var _a, _b, _c, _d, _e, _f;
            if (this.valueAsDate && ((_a = this.valueAsDate) === null || _a === void 0 ? void 0 : _a.getTime()) !== ((_b = this.activeDate) === null || _b === void 0 ? void 0 : _b.getTime())) {
                this.activeDate = new Date(this.valueAsDate);
            }
            if (this.startAsDate && ((_c = this.startAsDate) === null || _c === void 0 ? void 0 : _c.getTime()) !== ((_d = this.activeStartDate) === null || _d === void 0 ? void 0 : _d.getTime())) {
                this.activeStartDate = new Date(this.startAsDate);
            }
            if (this.endAsDate && ((_e = this.endAsDate) === null || _e === void 0 ? void 0 : _e.getTime()) !== ((_f = this.activeEndDate) === null || _f === void 0 ? void 0 : _f.getTime())) {
                this.activeEndDate = new Date(this.endAsDate);
            }
        };
        /**
         * Event handler for when the selected date changes
         */
        this.monthDateChange = (e) => {
            const date = new Date(e.detail);
            if (!this.range) {
                this.value = dateToISO(date);
                this.activeDate = date;
                return;
            }
            if (!this.startAsDate || (!this.endAsDate && date < this.startAsDate)) {
                if (this.startAsDate) {
                    const newEndDate = new Date(this.startAsDate);
                    this.end = dateToISO(newEndDate);
                    this.setEndAsDate(newEndDate);
                    this.activeEndDate = newEndDate;
                }
                this.start = dateToISO(date);
                this.setStartAsDate(date);
                this.activeStartDate = date;
            }
            else if (!this.endAsDate) {
                this.end = dateToISO(date);
                this.setEndAsDate(date);
                this.activeEndDate = date;
            }
            else {
                if (!this.proximitySelectionDisabled) {
                    const startDiff = getDaysDiff(date, this.startAsDate);
                    const endDiff = getDaysDiff(date, this.endAsDate);
                    if (startDiff < endDiff) {
                        this.start = dateToISO(date);
                        this.setStartAsDate(date);
                        this.activeStartDate = date;
                    }
                    else {
                        this.end = dateToISO(date);
                        this.setEndAsDate(date);
                        this.activeEndDate = date;
                    }
                }
                else {
                    this.start = dateToISO(date);
                    this.setStartAsDate(date);
                    this.activeStartDate = date;
                    this.endAsDate = this.activeEndDate = this.end = undefined;
                }
            }
        };
        this.calciteDatePickerChange = createEvent(this, "calciteDatePickerChange", 7);
        this.calciteDatePickerRangeChange = createEvent(this, "calciteDatePickerRangeChange", 7);
    }
    handleValueAsDate(date) {
        this.activeDate = date;
        this.calciteDatePickerChange.emit(date);
    }
    handleRangeChange() {
        const { startAsDate: startDate, endAsDate: endDate } = this;
        this.activeEndDate = endDate;
        this.activeStartDate = startDate;
        this.calciteDatePickerRangeChange.emit({
            startDate,
            endDate
        });
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    /**
     * Blur doesn't fire properly when there is no shadow dom (ege/IE11)
     * Check if the focused element is inside the date picker, if not close
     */
    focusInHandler(e) {
        if (!this.hasShadow && !this.el.contains(e.target)) {
            this.reset();
        }
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    connectedCallback() {
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
    }
    render() {
        var _a;
        const min = dateFromISO(this.min);
        const max = dateFromISO(this.max);
        const date = dateFromRange(this.range ? this.startAsDate : this.valueAsDate, min, max);
        const activeStartDate = this.range
            ? this.getActiveStartDate(date, min, max)
            : this.getActiveDate(date, min, max);
        let activeDate = activeStartDate;
        const endDate = this.range ? dateFromRange(this.endAsDate, min, max) : null;
        const activeEndDate = this.getActiveEndDate(endDate, min, max);
        if ((this.activeRange === "end" ||
            (((_a = this.hoverRange) === null || _a === void 0 ? void 0 : _a.focused) === "end" && (!this.proximitySelectionDisabled || endDate))) &&
            activeEndDate) {
            activeDate = activeEndDate;
        }
        if (this.range && this.mostRecentRangeValue) {
            activeDate = this.mostRecentRangeValue;
        }
        const minDate = this.activeRange === "start" ? min : date || min;
        const maxDate = max;
        const dir = getElementDir(this.el);
        return (h(Host, { dir: dir, onBlur: this.reset, onKeyUp: this.keyUpHandler, role: "application" }, this.renderCalendar(activeDate, dir, maxDate, minDate, date, endDate)));
    }
    valueWatcher(value) {
        this.valueAsDate = dateFromISO(value);
    }
    startWatcher(start) {
        this.setStartAsDate(dateFromISO(start));
    }
    endWatcher(end) {
        this.setEndAsDate(dateFromISO(end));
    }
    async loadLocaleData() {
        const { locale } = this;
        this.localeData = await getLocaleData(locale);
    }
    /**
     * Render calcite-date-picker-month-header and calcite-date-picker-month
     */
    renderCalendar(activeDate, dir, maxDate, minDate, date, endDate) {
        return (this.localeData && [
            h("calcite-date-picker-month-header", { activeDate: activeDate, dir: dir, intlNextMonth: this.intlNextMonth, intlPrevMonth: this.intlPrevMonth, localeData: this.localeData, max: maxDate, min: minDate, onCalciteDatePickerSelect: this.monthHeaderSelectChange, scale: this.scale, selectedDate: this.activeRange === "start" ? date : endDate || new Date() }),
            h("calcite-date-picker-month", { activeDate: activeDate, dir: dir, endDate: this.range ? endDate : undefined, hoverRange: this.hoverRange, localeData: this.localeData, max: maxDate, min: minDate, onCalciteDatePickerActiveDateChange: this.monthActiveDateChange, onCalciteDatePickerHover: this.monthHoverChange, onCalciteDatePickerMouseOut: this.monthMouseOutChange, onCalciteDatePickerSelect: this.monthDateChange, scale: this.scale, selectedDate: this.activeRange === "start" ? date : endDate, startDate: this.range ? date : undefined })
        ]);
    }
    /**
     * Update date instance of start if valid
     */
    setStartAsDate(startDate) {
        this.startAsDate = startDate;
        this.mostRecentRangeValue = this.startAsDate;
    }
    /**
     * Update date instance of end if valid
     */
    setEndAsDate(endDate) {
        this.endAsDate = endDate;
        this.mostRecentRangeValue = this.endAsDate;
    }
    /**
     * Get an active date using the value, or current date as default
     */
    getActiveDate(value, min, max) {
        return dateFromRange(this.activeDate, min, max) || value || dateFromRange(new Date(), min, max);
    }
    getActiveStartDate(value, min, max) {
        return (dateFromRange(this.activeStartDate, min, max) || value || dateFromRange(new Date(), min, max));
    }
    getActiveEndDate(value, min, max) {
        return (dateFromRange(this.activeEndDate, min, max) || value || dateFromRange(new Date(), min, max));
    }
    static get assetsDirs() { return ["assets"]; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "valueAsDate": ["handleValueAsDate"],
        "startAsDate": ["handleRangeChange"],
        "endAsDate": ["handleRangeChange"],
        "value": ["valueWatcher"],
        "start": ["startWatcher"],
        "end": ["endWatcher"],
        "locale": ["loadLocaleData"]
    }; }
};
CalciteDatePicker.style = calciteDatePickerCss;

export { CalciteDatePicker as calcite_date_picker };
