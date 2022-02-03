'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dad2b533.js');
const guid = require('./guid-1ecb63ba.js');
const key = require('./key-244ba28e.js');
const time = require('./time-02cd3079.js');
const label = require('./label-9ef43de7.js');
const form = require('./form-278d87cb.js');
require('./number-1eb63a63.js');
require('./dom-c158885c.js');

const calciteInputTimePickerCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:inline-block;-webkit-user-select:none;user-select:none}::slotted(input[slot=hidden-form-input]){bottom:0 !important;left:0 !important;margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;right:0 !important;top:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";

let CalciteInputTimePicker = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteInputTimePickerChange = index.createEvent(this, "calciteInputTimePickerChange", 7);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** The active state of the time input */
    this.active = false;
    /** The disabled state of the time input */
    this.disabled = false;
    /** Format of the hour value (12-hour or 24-hour) (this will be replaced by locale eventually) */
    this.hourDisplayFormat = "12";
    /**
     * When true, makes the component required for form-submission.
     *
     * @internal
     */
    this.required = false;
    /** The scale (size) of the time input */
    this.scale = "m";
    /** number (seconds) that specifies the granularity that the value must adhere to */
    this.step = 60;
    /** The selected time (always 24-hour format)*/
    this.value = null;
    /** whether the value of the input was changed as a result of user typing or not */
    this.internalValueChange = false;
    this.previousValidValue = null;
    this.referenceElementId = `input-time-picker-${guid.guid()}`;
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    this.calciteInputBlurHandler = () => {
      this.active = false;
      const newValue = time.formatTimeString(this.calciteInputEl.value) || time.formatTimeString(this.value);
      if (newValue !== this.calciteInputEl.value) {
        this.setInputValue(newValue);
      }
    };
    this.calciteInputFocusHandler = () => {
      this.active = true;
    };
    this.calciteInputInputHandler = (event) => {
      this.setValue({ value: event.detail.value });
    };
    this.setCalciteInputEl = (el) => {
      this.calciteInputEl = el;
    };
    this.setInputValue = (newInputValue) => {
      if (!this.calciteInputEl) {
        return;
      }
      if (this.hourDisplayFormat === "12") {
        const { hour, minute, second } = time.parseTimeString(newInputValue);
        this.calciteInputEl.value = newInputValue
          ? `${time.getMeridiemHour(hour)}:${minute}${this.step !== 60 ? ":" + second : ""} ${time.getMeridiem(hour)}`
          : null;
      }
      else {
        this.calciteInputEl.value = newInputValue;
      }
    };
    this.setValue = ({ value, origin = "input" }) => {
      const previousValue = this.value;
      const validatedNewValue = time.formatTimeString(value);
      this.internalValueChange = origin !== "external" && origin !== "loading";
      const shouldEmit = origin !== "loading" &&
        origin !== "external" &&
        ((value !== this.previousValidValue && !value) ||
          !!(!this.previousValidValue && validatedNewValue) ||
          (validatedNewValue !== this.previousValidValue && validatedNewValue));
      if (value) {
        if (shouldEmit) {
          this.previousValidValue = validatedNewValue;
        }
        if (validatedNewValue && validatedNewValue !== this.value) {
          this.value = validatedNewValue;
        }
      }
      else {
        this.value = value;
      }
      if (origin === "time-picker" || origin === "external") {
        this.setInputValue(validatedNewValue);
      }
      if (shouldEmit) {
        const changeEvent = this.calciteInputTimePickerChange.emit();
        if (changeEvent.defaultPrevented) {
          this.internalValueChange = false;
          this.value = previousValue;
          this.setInputValue(previousValue);
          this.previousValidValue = previousValue;
        }
        else {
          this.previousValidValue = validatedNewValue;
        }
      }
    };
  }
  valueWatcher(newValue) {
    if (!this.internalValueChange) {
      this.setValue({ value: newValue, origin: "external" });
    }
    this.internalValueChange = false;
  }
  keyUpHandler(event) {
    if (key.getKey(event.key) === "Escape" && this.active) {
      this.active = false;
    }
  }
  timePickerBlurHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    this.active = false;
  }
  timePickerChangeHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    if (event.detail) {
      const { hour, minute, second } = event.detail;
      let value;
      if (hour && minute) {
        value = second && this.step !== 60 ? `${hour}:${minute}:${second}` : `${hour}:${minute}`;
      }
      else {
        value = "";
      }
      this.setValue({ value, origin: "time-picker" });
    }
  }
  timePickerFocusHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    this.active = true;
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    this.calciteInputEl.setFocus();
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  onLabelClick() {
    this.setFocus();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    if (this.value) {
      this.setValue({ value: this.value, origin: "loading" });
    }
    label.connectLabel(this);
    form.connectForm(this);
  }
  componentDidLoad() {
    if (this.calciteInputEl.value !== this.value) {
      this.setInputValue(this.value);
    }
  }
  disconnectedCallback() {
    label.disconnectLabel(this);
    form.disconnectForm(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { hour, minute, second } = time.parseTimeString(this.value);
    const popoverId = `${this.referenceElementId}-popover`;
    return (index.h(index.Host, null, index.h("div", { "aria-controls": popoverId, "aria-haspopup": "dialog", "aria-label": this.name, "aria-owns": popoverId, id: this.referenceElementId, role: "combobox" }, index.h("calcite-input", { disabled: this.disabled, icon: "clock", label: label.getLabelText(this), onCalciteInputBlur: this.calciteInputBlurHandler, onCalciteInputFocus: this.calciteInputFocusHandler, onCalciteInputInput: this.calciteInputInputHandler, ref: this.setCalciteInputEl, scale: this.scale, step: this.step })), index.h("calcite-popover", { id: popoverId, label: "Time Picker", open: this.active || false, referenceElement: this.referenceElementId }, index.h("calcite-time-picker", { hour: hour, "hour-display-format": this.hourDisplayFormat, intlHour: this.intlHour, intlHourDown: this.intlHourDown, intlHourUp: this.intlHourUp, intlMeridiem: this.intlMeridiem, intlMeridiemDown: this.intlMeridiemDown, intlMeridiemUp: this.intlMeridiemUp, intlMinute: this.intlMinute, intlMinuteDown: this.intlMinuteDown, intlMinuteUp: this.intlMinuteUp, intlSecond: this.intlSecond, intlSecondDown: this.intlSecondDown, intlSecondUp: this.intlSecondUp, minute: minute, scale: this.scale, second: second, step: this.step })), index.h(form.HiddenFormInputSlot, { component: this })));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "value": ["valueWatcher"]
  }; }
};
CalciteInputTimePicker.style = calciteInputTimePickerCss;

exports.calcite_input_time_picker = CalciteInputTimePicker;
