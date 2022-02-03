'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dad2b533.js');
const key = require('./key-244ba28e.js');
const dom = require('./dom-c158885c.js');
const date = require('./date-765282bf.js');
const CalciteHeading = require('./CalciteHeading-0a313fbe.js');
require('./guid-1ecb63ba.js');

const calciteDatePickerDayCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:flex;justify-content:center;outline:2px solid transparent;outline-offset:2px;color:var(--calcite-ui-text-3);cursor:pointer;min-width:0;width:14.2857142857%}.day-v-wrapper{flex:1 1 auto}.day-wrapper{display:flex;flex-direction:column;align-items:center}.day{display:flex;border-radius:9999px;font-size:var(--calcite-font-size--2);line-height:1rem;justify-content:center;align-items:center;line-height:1;color:var(--calcite-ui-text-3);transition-property:all;opacity:var(--calcite-ui-opacity-disabled);background:none;box-shadow:0 0 0 2px transparent, 0 0 0 0px transparent}.text{margin-top:1px;margin-right:0;margin-bottom:0;margin-left:1px}:host([scale=s]) .day-v-wrapper{padding-top:0.125rem;padding-bottom:0.125rem}:host([scale=s]) .day-wrapper{padding:0}:host([scale=s]) .day{height:27px;width:27px;font-size:var(--calcite-font-size--2)}:host([scale=m]) .day-v-wrapper{padding-top:0.25rem;padding-bottom:0.25rem}:host([scale=m]) .day-wrapper{padding-left:0.25rem;padding-right:0.25rem}:host([scale=m]) .day{height:33px;width:33px;font-size:var(--calcite-font-size--1)}:host([scale=l]) .day-v-wrapper{padding-top:0.25rem;padding-bottom:0.25rem}:host([scale=l]) .day-wrapper{padding-left:0.25rem;padding-right:0.25rem}:host([scale=l]) .day{height:43px;width:43px;font-size:var(--calcite-font-size-0)}:host([current-month]) .day{opacity:1}:host([disabled]){cursor:default;opacity:0.25}:host(:hover:not([disabled])) .day,:host([active]:not([range])) .day{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host(:focus),:host([active]){z-index:1}:host(:focus:not([disabled])) .day{box-shadow:0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-brand)}:host([selected]) .day{font-weight:var(--calcite-font-weight-medium);background-color:var(--calcite-ui-brand) !important;color:var(--calcite-ui-foreground-1) !important;z-index:1}:host([range][selected]) .day-wrapper{background-color:var(--calcite-ui-foreground-current)}:host([start-of-range]) :not(.calcite--rtl) .day-wrapper,:host([end-of-range]) .calcite--rtl .day-wrapper{border-top-left-radius:40%;border-bottom-left-radius:40%;box-shadow:inset 4px 0 var(--calcite-ui-foreground-1)}:host([start-of-range]) :not(.calcite--rtl) .day,:host([end-of-range]) .calcite--rtl .day{opacity:1}:host([start-of-range]:not(:focus)) :not(.calcite--rtl) .day,:host([end-of-range]:not(:focus)) .calcite--rtl .day{box-shadow:0 0 0 2px var(--calcite-ui-foreground-1)}:host([end-of-range]) :not(.calcite--rtl) .day-wrapper,:host([start-of-range]) .calcite--rtl .day-wrapper{border-top-right-radius:40%;border-bottom-right-radius:40%;box-shadow:inset -4px 0 var(--calcite-ui-foreground-1)}:host([end-of-range]) :not(.calcite--rtl) .day,:host([start-of-range]) .calcite--rtl .day{opacity:1}:host([end-of-range]:not(:focus)) :not(.calcite--rtl) .day,:host([start-of-range]:not(:focus)) .calcite--rtl .day{box-shadow:0 0 0 2px var(--calcite-ui-foreground-1)}:host([end-of-range][scale=l]) :not(.calcite--rtl) .day-wrapper,:host([start-of-range][scale=l]) .calcite--rtl .day-wrapper{box-shadow:inset -8px 0 var(--calcite-ui-foreground-1)}:host([start-of-range][scale=l]) :not(.calcite--rtl) .day-wrapper,:host([end-of-range][scale=l]) .calcite--rtl .day-wrapper{box-shadow:inset 8px 0 var(--calcite-ui-foreground-1)}:host([highlighted]) .day-wrapper{background-color:var(--calcite-ui-foreground-current)}:host([highlighted]) .day-wrapper .day{color:var(--calcite-ui-text-1)}:host([highlighted]:not([active]:focus)) .day{border-radius:0;color:var(--calcite-ui-text-1)}:host([range-hover]:not([selected])) .day-wrapper{background-color:var(--calcite-ui-foreground-2)}:host([range-hover]:not([selected])) .day{border-radius:0}:host([end-of-range][range-hover]) :not(.calcite--rtl) .day-wrapper,:host([start-of-range][range-hover]) .calcite--rtl .day-wrapper{background-image:linear-gradient(to right, var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2));border-radius:0;box-shadow:none}:host([start-of-range][range-hover]) :not(.calcite--rtl) .day-wrapper,:host([end-of-range][range-hover]) .calcite--rtl .day-wrapper{background-image:linear-gradient(to left, var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2));border-radius:0;box-shadow:none}:host(:hover[end-of-range][range-hover]) :not(.calcite--rtl) .day-wrapper,:host(:hover[start-of-range][range-hover]) .calcite--rtl .day-wrapper{background-image:linear-gradient(to right, var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-1), var(--calcite-ui-foreground-1));border-radius:0;box-shadow:none}:host(:hover[start-of-range][range-hover]) :not(.calcite--rtl) .day-wrapper,:host(:hover[end-of-range][range-hover]) .calcite--rtl .day-wrapper{background-image:linear-gradient(to left, var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-1), var(--calcite-ui-foreground-1));border-radius:0;box-shadow:none}:host(:hover[range-hover]:not([selected]).focused--end) :not(.calcite--rtl) .day-wrapper,:host(:hover[range-hover]:not([selected]).focused--start) .calcite--rtl .day-wrapper{background-image:linear-gradient(to right, var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current))}:host(:hover[range-hover]:not([selected]).focused--end) :not(.calcite--rtl) .day,:host(:hover[range-hover]:not([selected]).focused--start) .calcite--rtl .day{border-radius:9999px;opacity:1;box-shadow:0 0 0 2px var(--calcite-ui-foreground-1)}:host(:hover[range-hover]:not([selected]).focused--start) :not(.calcite--rtl) .day-wrapper,:host(:hover[range-hover]:not([selected]).focused--end) .calcite--rtl .day-wrapper{background-image:linear-gradient(to right, var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2))}:host(:hover[range-hover]:not([selected]).focused--start) :not(.calcite--rtl) .day,:host(:hover[range-hover]:not([selected]).focused--end) .calcite--rtl .day{border-radius:9999px;opacity:1;box-shadow:0 0 0 2px var(--calcite-ui-foreground-1)}:host(:hover[range-hover]:not([selected]).focused--start.hover--outside-range) :not(.calcite--rtl) .day-wrapper,:host(:hover[range-hover]:not([selected]).focused--end.hover--outside-range) .calcite--rtl .day-wrapper{background-image:linear-gradient(to right, var(--calcite-ui-foreground-1), var(--calcite-ui-foreground-1), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2))}:host(:hover[range-hover]:not([selected]).focused--start.hover--outside-range) :not(.calcite--rtl) .day,:host(:hover[range-hover]:not([selected]).focused--end.hover--outside-range) .calcite--rtl .day{border-radius:9999px;opacity:1;box-shadow:0 0 0 2px var(--calcite-ui-foreground-1)}:host(:hover[range-hover]:not([selected]).focused--end.hover--outside-range) :not(.calcite--rtl) .day-wrapper,:host(:hover[range-hover]:not([selected]).focused--start.hover--outside-range) .calcite--rtl .day-wrapper{background-image:linear-gradient(to right, var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-1), var(--calcite-ui-foreground-1))}:host(:hover[range-hover]:not([selected]).focused--end.hover--outside-range) :not(.calcite--rtl) .day,:host(:hover[range-hover]:not([selected]).focused--start.hover--outside-range) .calcite--rtl .day{border-radius:9999px;opacity:1;box-shadow:0 0 0 2px var(--calcite-ui-foreground-1)}:host(:hover[start-of-range].hover--inside-range.focused--end) .day-wrapper,:host(:hover[end-of-range].hover--inside-range.focused--start) .day-wrapper{background-image:none}:host([start-of-range].hover--inside-range.focused--end) .day-wrapper,:host([end-of-range].hover--inside-range.focused--start) .day-wrapper{background-color:var(--calcite-ui-foreground-2)}:host([highlighted]:last-child) :not(.calcite--rtl) .day-wrapper,:host([range-hover]:last-child) :not(.calcite--rtl) .day-wrapper,:host([highlighted]:first-child) .calcite--rtl .day-wrapper,:host([range-hover]:first-child) .calcite--rtl .day-wrapper{border-top-right-radius:45%;border-bottom-right-radius:45%;box-shadow:inset -4px 0px 0px 0px var(--calcite-ui-foreground-1)}:host([highlighted]:first-child) :not(.calcite--rtl) .day-wrapper,:host([range-hover]:first-child) :not(.calcite--rtl) .day-wrapper,:host([highlighted]:last-child) .calcite--rtl .day-wrapper,:host([range-hover]:last-child) .calcite--rtl .day-wrapper{border-top-left-radius:45%;border-bottom-left-radius:45%;box-shadow:inset 4px 0px 0px 0px var(--calcite-ui-foreground-1)}:host([scale=s][highlighted]:last-child) :not(.calcite--rtl) .day-wrapper,:host([scale=s][range-hover]:last-child) :not(.calcite--rtl) .day-wrapper,:host([scale=s][highlighted]:first-child) .calcite--rtl .day-wrapper,:host([scale=s][range-hover]:first-child) .calcite--rtl .day-wrapper{box-shadow:inset -1px 0px 0px 0px var(--calcite-ui-foreground-1)}:host([scale=s][highlighted]:first-child) :not(.calcite--rtl) .day-wrapper,:host([scale=s][range-hover]:first-child) :not(.calcite--rtl) .day-wrapper,:host([scale=s][highlighted]:last-child) .calcite--rtl .day-wrapper,:host([scale=s][range-hover]:last-child) .calcite--rtl .day-wrapper{box-shadow:inset 1px 0px 0px 0px var(--calcite-ui-foreground-1)}:host([scale=l][highlighted]:first-child) :not(.calcite--rtl) .day-wrapper,:host([scale=l][range-hover]:first-child) :not(.calcite--rtl) .day-wrapper,:host([scale=l][highlighted]:last-child) .calcite--rtl .day-wrapper,:host([scale=l][range-hover]:last-child) .calcite--rtl .day-wrapper{box-shadow:inset 6px 0px 0px 0px var(--calcite-ui-foreground-1)}:host([scale=l][highlighted]:last-child) :not(.calcite--rtl) .day-wrapper,:host([scale=l][range-hover]:last-child) :not(.calcite--rtl) .day-wrapper,:host([scale=l][highlighted]:first-child) .calcite--rtl .day-wrapper,:host([scale=l][range-hover]:first-child) .calcite--rtl .day-wrapper{box-shadow:inset -6px 0px 0px 0px var(--calcite-ui-foreground-1)}";

let CalciteDatePickerDay = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteDaySelect = index.createEvent(this, "calciteDaySelect", 7);
    this.calciteDayHover = index.createEvent(this, "calciteDayHover", 7);
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
    /** Date is being hovered and within the set range */
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
      const key$1 = key.getKey(e.key);
      if (key$1 === " " || key$1 === "Enter") {
        !this.disabled && this.calciteDaySelect.emit();
      }
    };
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
    const dir = dom.getElementDir(this.el);
    return (index.h(index.Host, { onClick: this.onClick, onKeyDown: this.keyDownHandler, role: "gridcell", tabindex: this.active ? 0 : -1 }, index.h("div", { class: { "day-v-wrapper": true, [dom.CSS_UTILITY.rtl]: dir === "rtl" } }, index.h("div", { class: "day-wrapper" }, index.h("span", { class: "day" }, index.h("span", { class: "text" }, formattedDay))))));
  }
  get el() { return index.getElement(this); }
};
CalciteDatePickerDay.style = calciteDatePickerDayCss;

const calciteDatePickerMonthCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}.calender{margin-bottom:0.25rem}.week-headers{display:flex;border-width:0;border-top-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);padding-top:0;padding-bottom:0;padding-left:0.25rem;padding-right:0.25rem}.week-header{color:var(--calcite-ui-text-3);text-align:center;font-weight:var(--calcite-font-weight-bold);width:14.2857142857%}:host([scale=s]) .week-header{font-size:var(--calcite-font-size--2);line-height:1rem;padding-top:0.5rem;padding-bottom:0.75rem;padding-left:0;padding-right:0}:host([scale=m]) .week-header{font-size:var(--calcite-font-size--2);line-height:1rem;padding-top:0.75rem;padding-bottom:1rem;padding-left:0;padding-right:0}:host([scale=l]) .week-header{font-size:var(--calcite-font-size--1);line-height:1rem;padding-top:1rem;padding-bottom:1.25rem;padding-left:0;padding-right:0}.week-days{outline:2px solid transparent;outline-offset:2px;display:flex;flex-direction:row;padding-top:0;padding-bottom:0;padding-left:6px;padding-right:6px}";

let CalciteDatePickerMonth = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteDatePickerSelect = index.createEvent(this, "calciteDatePickerSelect", 7);
    this.calciteDatePickerHover = index.createEvent(this, "calciteDatePickerHover", 7);
    this.calciteDatePickerActiveDateChange = index.createEvent(this, "calciteDatePickerActiveDateChange", 7);
    this.calciteDatePickerMouseOut = index.createEvent(this, "calciteDatePickerMouseOut", 7);
    /** Date currently active.*/
    this.activeDate = new Date();
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    this.keyDownHandler = (e) => {
      const isRTL = this.el.dir === "rtl";
      switch (key.getKey(e.key)) {
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
        this.calciteDatePickerMouseOut.emit();
      }
      else {
        this.calciteDatePickerHover.emit(target.value);
      }
    };
    this.daySelect = (e) => {
      const target = e.target;
      this.calciteDatePickerSelect.emit(target.value);
    };
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
    const dir = dom.getElementDir(this.el);
    const days = [
      ...prevMonDays.map((day) => {
        const date = new Date(year, month - 1, day);
        return this.renderDateDay(false, day, dir, date);
      }),
      ...curMonDays.map((day) => {
        const date$1 = new Date(year, month, day);
        const active = date.sameDate(date$1, this.activeDate);
        return this.renderDateDay(active, day, dir, date$1, true, true);
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
    return (index.h(index.Host, { onFocusOut: this.disableActiveFocus, onKeyDown: this.keyDownHandler }, index.h("div", { class: "calender", role: "grid" }, index.h("div", { class: "week-headers", role: "row" }, adjustedWeekDays.map((weekday) => (index.h("span", { class: "week-header", role: "columnheader" }, weekday)))), weeks.map((days) => (index.h("div", { class: "week-days", role: "row" }, days))))));
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
    this.calciteDatePickerActiveDateChange.emit(date.dateFromRange(nextDate, this.min, this.max));
    this.activeFocus = true;
  }
  /**
   * Add n days to the current date
   */
  addDays(step = 0) {
    const nextDate = new Date(this.activeDate);
    nextDate.setDate(this.activeDate.getDate() + step);
    this.calciteDatePickerActiveDateChange.emit(date.dateFromRange(nextDate, this.min, this.max));
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
    return !!(this.startDate &&
      this.endDate &&
      date > this.startDate &&
      date < this.endDate &&
      !this.isRangeHover(date));
  }
  /**
   * Determine if the date should be in selected state
   */
  isSelected(date$1) {
    return !!(date.sameDate(date$1, this.selectedDate) ||
      (this.startDate && date.sameDate(date$1, this.startDate)) ||
      (this.endDate && date.sameDate(date$1, this.endDate)));
  }
  /**
   * Determine if the date is the start of the date range
   */
  isStartOfRange(date$1) {
    return !!(this.startDate &&
      !date.sameDate(this.startDate, this.endDate) &&
      date.sameDate(this.startDate, date$1) &&
      !this.isEndOfRange(date$1));
  }
  isEndOfRange(date$1) {
    return !!((this.endDate && !date.sameDate(this.startDate, this.endDate) && date.sameDate(this.endDate, date$1)) ||
      (!this.endDate &&
        this.hoverRange &&
        date.sameDate(this.startDate, this.hoverRange.end) &&
        date.sameDate(date$1, this.hoverRange.end)));
  }
  /**
   * Render calcite-date-picker-day
   */
  renderDateDay(active, day, dir, date$1, currentMonth, ref) {
    var _a;
    const isFocusedOnStart = this.isFocusedOnStart();
    const isHoverInRange = this.isHoverInRange() ||
      (!this.endDate && this.hoverRange && date.sameDate((_a = this.hoverRange) === null || _a === void 0 ? void 0 : _a.end, this.startDate));
    return (index.h("calcite-date-picker-day", { active: active, class: {
        "hover--inside-range": this.startDate && isHoverInRange,
        "hover--outside-range": this.startDate && !isHoverInRange,
        "focused--start": isFocusedOnStart,
        "focused--end": !isFocusedOnStart
      }, currentMonth: currentMonth, day: day, dir: dir, disabled: !date.inRange(date$1, this.min, this.max), endOfRange: this.isEndOfRange(date$1), highlighted: this.betweenSelectedRange(date$1), key: date$1.toDateString(), localeData: this.localeData, onCalciteDayHover: this.dayHover, onCalciteDaySelect: this.daySelect, range: !!this.startDate && !!this.endDate && !date.sameDate(this.startDate, this.endDate), rangeHover: this.isRangeHover(date$1), ref: (el) => {
        // when moving via keyboard, focus must be updated on active date
        if (ref && active && this.activeFocus) {
          el === null || el === void 0 ? void 0 : el.focus();
        }
      }, scale: this.scale, selected: this.isSelected(date$1), startOfRange: this.isStartOfRange(date$1), value: date$1 }));
  }
  isFocusedOnStart() {
    var _a;
    return ((_a = this.hoverRange) === null || _a === void 0 ? void 0 : _a.focused) === "start";
  }
  isHoverInRange() {
    if (!this.hoverRange) {
      return false;
    }
    const { start, end } = this.hoverRange;
    return !!((!this.isFocusedOnStart() && this.startDate && (!this.endDate || end < this.endDate)) ||
      (this.isFocusedOnStart() && this.startDate && start > this.startDate));
  }
  isRangeHover(date$1) {
    if (!this.hoverRange) {
      return false;
    }
    const { start, end } = this.hoverRange;
    const isStart = this.isFocusedOnStart();
    const insideRange = this.isHoverInRange();
    const cond1 = insideRange &&
      ((!isStart && date$1 > this.startDate && (date$1 < end || date.sameDate(date$1, end))) ||
        (isStart && date$1 < this.endDate && (date$1 > start || date.sameDate(date$1, start))));
    const cond2 = !insideRange &&
      ((!isStart && date$1 >= this.endDate && (date$1 < end || date.sameDate(date$1, end))) ||
        (isStart &&
          (date$1 < this.startDate || (this.endDate && date.sameDate(date$1, this.startDate))) &&
          (date$1 > start || date.sameDate(date$1, start))));
    return cond1 || cond2;
  }
  get el() { return index.getElement(this); }
};
CalciteDatePickerMonth.style = calciteDatePickerMonthCss;

const calciteDatePickerMonthHeaderCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block}.header{display:flex;justify-content:space-between;padding-top:0;padding-bottom:0;padding-left:0.25rem;padding-right:0.25rem}:host([scale=s]) .text{font-size:var(--calcite-font-size--1);line-height:1rem;margin-top:0.5rem;margin-bottom:0.5rem}:host([scale=s]) .chevron{height:2.25rem}:host([scale=m]) .text{font-size:var(--calcite-font-size-0);line-height:1.25rem;margin-top:0.75rem;margin-bottom:0.75rem}:host([scale=m]) .chevron{height:3rem}:host([scale=l]) .text{font-size:var(--calcite-font-size-1);line-height:1.5rem;margin-top:1rem;margin-bottom:1rem}:host([scale=l]) .chevron{height:3.5rem}.chevron{color:var(--calcite-ui-text-3);flex-grow:0;box-sizing:content-box;outline:2px solid transparent;outline-offset:2px;padding-left:0.25rem;padding-right:0.25rem;margin-left:-0.25rem;margin-right:-0.25rem;border-style:none;display:flex;align-items:center;justify-content:center;background-color:var(--calcite-ui-foreground-1);cursor:pointer;transition-property:all;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);outline-offset:0;outline-color:transparent;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;width:14.2857142857%}.chevron:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.chevron:hover,.chevron:focus{color:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-2);fill:var(--calcite-ui-text-1)}.chevron:active{background-color:var(--calcite-ui-foreground-3)}.chevron[aria-disabled=true]{pointer-events:none;opacity:0}.text{flex:1 1 auto;align-items:center;justify-content:center;line-height:1;margin-top:auto;margin-bottom:auto;text-align:center;width:100%}.text--reverse{flex-direction:row-reverse}.month,.year,.suffix{color:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-1);font-weight:var(--calcite-font-weight-medium);line-height:1.25;margin-left:0.25rem;margin-right:0.25rem;margin-top:auto;margin-bottom:auto;display:inline-block;font-size:inherit}.year{font-family:inherit;text-align:center;border-style:none;width:3rem;background-color:transparent;position:relative;outline-offset:0;outline-color:transparent;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;z-index:2}.year:hover{transition-duration:100ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-property:outline-color;outline:2px solid var(--calcite-ui-border-2);outline-offset:2px}.year:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.year--suffix{width:4rem;text-align:left}.year-wrap{position:relative}.suffix{position:absolute;width:4rem;white-space:nowrap;text-align:left;top:0;left:0}.suffix__invisible{visibility:hidden}";

let CalciteDatePickerMonthHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteDatePickerSelect = index.createEvent(this, "calciteDatePickerSelect", 7);
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
      switch (key.getKey(e.key)) {
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
      const key$1 = key.getKey(e.key);
      if (key$1 === " " || key$1 === "Enter") {
        this.prevMonthClick(e);
      }
    };
    this.nextMonthClick = (e) => {
      this.handleArrowClick(e, this.nextMonthDate);
    };
    this.nextMonthKeydown = (e) => {
      const key$1 = key.getKey(e.key);
      if (key$1 === " " || key$1 === "Enter") {
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
    const dir = dom.getElementDir(this.el);
    return (index.h("div", { class: "header", dir: dir }, this.renderContent(dir)));
  }
  renderContent(dir) {
    var _a;
    if (!this.activeDate || !this.localeData) {
      return null;
    }
    const activeMonth = this.activeDate.getMonth();
    const { months, unitOrder } = this.localeData;
    const localizedMonth = (months.wide || months.narrow || months.abbreviated)[activeMonth];
    const localizedYear = date.localizeNumber(this.activeDate.getFullYear(), this.localeData);
    const iconScale = this.scale === "l" ? "m" : "s";
    const order = date.getOrder(unitOrder);
    const reverse = order.indexOf("y") < order.indexOf("m");
    const suffix = (_a = this.localeData.year) === null || _a === void 0 ? void 0 : _a.suffix;
    return (index.h(index.Fragment, null, index.h("a", { "aria-disabled": (this.prevMonthDate.getMonth() === activeMonth).toString(), "aria-label": this.intlPrevMonth, class: "chevron", href: "#", onClick: this.prevMonthClick, onKeyDown: this.prevMonthKeydown, role: "button", tabindex: this.prevMonthDate.getMonth() === activeMonth ? -1 : 0 }, index.h("calcite-icon", { dir: dir, "flip-rtl": true, icon: "chevron-left", scale: iconScale })), index.h("div", { class: { text: true, "text--reverse": reverse } }, index.h(CalciteHeading.CalciteHeading, { class: "month", level: this.headingLevel }, localizedMonth), index.h("span", { class: "year-wrap" }, index.h("input", { class: {
        year: true,
        "year--suffix": !!suffix
      }, inputmode: "numeric", maxlength: "4", minlength: "1", onChange: this.yearChanged, onKeyDown: this.onYearKey, pattern: "\\d*", ref: (el) => (this.yearInput = el), type: "text", value: localizedYear }), suffix && (index.h("span", { class: "suffix" }, index.h("span", { "aria-hidden": "true", class: "suffix__invisible" }, localizedYear), " " + suffix)))), index.h("a", { "aria-disabled": (this.nextMonthDate.getMonth() === activeMonth).toString(), "aria-label": this.intlNextMonth, class: "chevron", href: "#", onClick: this.nextMonthClick, onKeyDown: this.nextMonthKeydown, role: "button", tabindex: this.nextMonthDate.getMonth() === activeMonth ? -1 : 0 }, index.h("calcite-icon", { dir: dir, "flip-rtl": true, icon: "chevron-right", scale: iconScale }))));
  }
  setNextPrevMonthDates() {
    if (!this.activeDate) {
      return;
    }
    this.nextMonthDate = date.dateFromRange(date.nextMonth(this.activeDate), this.min, this.max);
    this.prevMonthDate = date.dateFromRange(date.prevMonth(this.activeDate), this.min, this.max);
  }
  /**
   * Parse localized year string from input,
   * set to active if in range
   */
  setYear(localizedYear, increment = 0) {
    const { min, max, activeDate, localeData, yearInput } = this;
    const parsedYear = date.parseNumber(localizedYear, localeData);
    const length = parsedYear.toString().length;
    const year = isNaN(parsedYear) ? false : parsedYear + increment;
    const inRange = year && (!min || min.getFullYear() <= year) && (!max || max.getFullYear() >= year);
    // if you've supplied a year and it's in range, update active date
    if (year && inRange && length === localizedYear.length) {
      const nextDate = new Date(activeDate);
      nextDate.setFullYear(year);
      const inRangeDate = date.dateFromRange(nextDate, min, max);
      this.calciteDatePickerSelect.emit(inRangeDate);
      yearInput.value = date.localizeNumber(inRangeDate.getFullYear(), localeData);
    }
    else {
      // leave the current active date and clean up garbage input
      yearInput.value = date.localizeNumber(activeDate.getFullYear(), localeData);
    }
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "min": ["setNextPrevMonthDates"],
    "max": ["setNextPrevMonthDates"],
    "activeDate": ["setNextPrevMonthDates"]
  }; }
};
CalciteDatePickerMonthHeader.style = calciteDatePickerMonthHeaderCss;

exports.calcite_date_picker_day = CalciteDatePickerDay;
exports.calcite_date_picker_month = CalciteDatePickerMonth;
exports.calcite_date_picker_month_header = CalciteDatePickerMonthHeader;
