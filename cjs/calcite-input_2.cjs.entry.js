'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dad2b533.js');
const dom = require('./dom-c158885c.js');
const key = require('./key-244ba28e.js');
const label = require('./label-9ef43de7.js');
const form = require('./form-278d87cb.js');
const locale = require('./locale-98a5aebf.js');
const number = require('./number-1eb63a63.js');
const math = require('./math-6c88b212.js');
require('./guid-1ecb63ba.js');

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const CSS = {
  loader: "loader",
  clearButton: "clear-button",
  editingEnabled: "editing-enabled",
  inlineChild: "inline-child",
  inputIcon: "icon",
  prefix: "prefix",
  suffix: "suffix",
  numberButtonWrapper: "number-button-wrapper",
  buttonItemHorizontal: "number-button-item--horizontal",
  wrapper: "element-wrapper",
  inputWrapper: "wrapper",
  actionWrapper: "action-wrapper",
  resizeIconWrapper: "resize-icon-wrapper",
  numberButtonItem: "number-button-item"
};
const INPUT_TYPE_ICONS = {
  tel: "phone",
  password: "lock",
  email: "email-address",
  date: "calendar",
  time: "clock",
  search: "search"
};
const SLOTS = {
  action: "action"
};

const calciteInputCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{font-size:var(--calcite-font-size--2);line-height:1rem;padding:0.5rem;height:1.5rem}:host([scale=s]) textarea{height:1.5rem;min-height:1.5rem}:host([scale=s]) .number-button-wrapper,:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{height:1.5rem}:host([scale=s]) input[type=file]{height:1.5rem}:host([scale=s]) .clear-button{min-height:1.5rem;min-width:1.5rem}:host([scale=s]) textarea{font-size:var(--calcite-font-size--2);line-height:1rem;padding-top:0.25rem;padding-bottom:0.25rem;padding-left:0.5rem;padding-right:0.5rem;height:auto}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{font-size:var(--calcite-font-size--1);line-height:1rem;padding:0.75rem;height:2rem}:host([scale=m]) textarea{min-height:2rem}:host([scale=m]) .number-button-wrapper,:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{height:2rem}:host([scale=m]) input[type=file]{height:2rem}:host([scale=m]) .clear-button{min-height:2rem;min-width:2rem}:host([scale=m]) textarea{font-size:var(--calcite-font-size--1);line-height:1rem;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.75rem;padding-right:0.75rem;height:auto}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{font-size:var(--calcite-font-size-0);line-height:1.25rem;padding:1rem;height:2.75rem}:host([scale=l]) textarea{min-height:2.75rem}:host([scale=l]) .number-button-wrapper,:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{height:2.75rem}:host([scale=l]) input[type=file]{height:2.75rem}:host([scale=l]) .clear-button{min-height:2.75rem;min-width:2.75rem}:host([scale=l]) textarea{font-size:var(--calcite-font-size-0);line-height:1.25rem;padding-top:0.75rem;padding-bottom:0.75rem;padding-left:1rem;padding-right:1rem;height:auto}:host([disabled]){pointer-events:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) .wrapper{pointer-events:none;--text-opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) button,:host([disabled]) textarea,:host([disabled]) input{pointer-events:none}:host([disabled]) textarea{resize:none}:host textarea,:host input{transition:150ms ease-in-out, height 0s;-webkit-appearance:none;width:100%;border-radius:0;position:relative;max-height:100%;max-width:100%;margin:0;font-weight:var(--calcite-font-weight-normal);font-family:inherit;flex:1 1 0%;display:flex;color:var(--calcite-ui-text-1);box-sizing:border-box;background-color:var(--calcite-ui-foreground-1)}:host input[type=search]::-webkit-search-decoration{-webkit-appearance:none}:host input,:host textarea{color:var(--calcite-ui-text-1);border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input)}:host input::placeholder,:host input:-ms-input-placeholder,:host input::-ms-input-placeholder,:host textarea::placeholder,:host textarea:-ms-input-placeholder,:host textarea::-ms-input-placeholder{color:var(--calcite-ui-text-3);font-weight:var(--calcite-font-weight-normal)}:host input:focus,:host textarea:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-1)}:host input[readonly],:host textarea[readonly]{background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium)}:host input[readonly]:focus,:host textarea[readonly]:focus{color:var(--calcite-ui-text-1)}:host calcite-icon{color:var(--calcite-ui-text-3)}:host textarea,:host input{outline-offset:0;outline-color:transparent;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host textarea:focus,:host input:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host([status=invalid]) input,:host([status=invalid]) textarea{border-color:var(--calcite-ui-danger)}:host([status=invalid]) input:focus,:host([status=invalid]) textarea:focus{outline:2px solid var(--calcite-ui-danger);outline-offset:-2px}:host([scale=s]) .icon{left:0.5rem}:host([scale=s]) .calcite--rtl .icon{left:unset;right:0.5rem}:host([scale=m]) .icon{left:0.75rem}:host([scale=m]) .calcite--rtl .icon{left:unset;right:0.75rem}:host([scale=l]) .icon{left:1rem}:host([scale=l]) .calcite--rtl .icon{left:unset;right:1rem}:host([icon][scale=s]) input{padding-left:2rem}:host([icon][scale=s]) .calcite--rtl input{padding-right:2rem;padding-left:0.5rem}:host([icon][scale=m]) input{padding-left:2.5rem}:host([icon][scale=m]) .calcite--rtl input{padding-right:2.5rem;padding-left:0.5rem}:host([icon][scale=l]) input{padding-left:3rem}:host([icon][scale=l]) .calcite--rtl input{padding-right:3rem;padding-left:0.5rem}.element-wrapper{display:inline-flex;align-items:center;flex:1 1 0%;position:relative;order:3}.icon{display:block;position:absolute;pointer-events:none;z-index:10;transition-property:all;transition-duration:150ms;transition-timing-function:ease-in-out;transition-delay:0s}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;width:0;height:0}input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration,input[type=date]::-webkit-clear-button,input[type=time]::-webkit-clear-button{display:none}.clear-button{pointer-events:initial;outline-offset:0;outline-color:transparent;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;display:flex;align-self:stretch;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;min-height:100%;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);border-left-width:0;order:4;margin:0}.clear-button:hover{background-color:var(--calcite-ui-foreground-2);transition-property:all;transition-duration:150ms;transition-timing-function:ease-in-out;transition-delay:0s}.clear-button:hover calcite-icon{color:var(--calcite-ui-text-1);transition-property:all;transition-duration:150ms;transition-timing-function:ease-in-out;transition-delay:0s}.clear-button:active{background-color:var(--calcite-ui-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-ui-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.clear-button:disabled{opacity:var(--calcite-ui-opacity-disabled)}.calcite--rtl .clear-button{border-left-color:var(--calcite-ui-border-input);border-width:1px;border-right-width:0}.loader{top:1px;left:1px;right:1px;display:block;pointer-events:none;position:absolute}.action-wrapper{display:flex;order:7}.prefix,.suffix{display:flex;align-items:center;align-content:center;height:auto;min-height:100%;-webkit-user-select:none;user-select:none;box-sizing:border-box;font-weight:var(--calcite-font-weight-medium);border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-background);color:var(--calcite-ui-text-2);line-height:1;word-wrap:break-word;overflow-wrap:break-word}.prefix{order:2;border-right-width:0}.suffix{order:5;border-left-width:0}.calcite--rtl .prefix{border-right-width:1px;border-left-width:0}.calcite--rtl .suffix{border-left-width:1px;border-right-width:0}:host([alignment=start]) textarea,:host([alignment=start]) input{text-align:left}:host([alignment=start]) .calcite--rtl textarea,:host([alignment=start]) .calcite--rtl input{text-align:right}:host([alignment=end]) textarea,:host([alignment=end]) input{text-align:right}:host([alignment=end]) .calcite--rtl textarea,:host([alignment=end]) .calcite--rtl input{text-align:left}:host input[type=number]{-moz-appearance:textfield}:host input[type=number]::-webkit-inner-spin-button,:host input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:textfield;margin:0}.number-button-wrapper{box-sizing:border-box;display:flex;flex-direction:column;pointer-events:none;order:6;transition-property:all;transition-duration:150ms;transition-timing-function:ease-in-out;transition-delay:0s}:host([number-button-type=vertical]) .wrapper{flex-direction:row;display:flex}:host([number-button-type=vertical]) input,:host([number-button-type=vertical]) textarea{order:2}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=down] calcite-icon{transform:rotate(-90deg)}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=up] calcite-icon{transform:rotate(-90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down],.number-button-item.number-button-item--horizontal[data-adjustment=up]{min-height:100%;max-height:100%;order:1;align-self:stretch}.number-button-item.number-button-item--horizontal[data-adjustment=down] calcite-icon,.number-button-item.number-button-item--horizontal[data-adjustment=up] calcite-icon{transform:rotate(90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down]{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);border-right-width:0}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover{background-color:var(--calcite-ui-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover calcite-icon{color:var(--calcite-ui-text-1)}.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:5}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover{background-color:var(--calcite-ui-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover{background-color:var(--calcite-ui-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover{background-color:var(--calcite-ui-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover calcite-icon{color:var(--calcite-ui-text-1)}.calcite--rtl .number-button-item.number-button-item--horizontal[data-adjustment=down]{border-width:1px;border-left-width:0;border-color:var(--calcite-ui-border-input)}.calcite--rtl .number-button-item.number-button-item--horizontal[data-adjustment=up]{border-width:1px;border-right-width:0;border-color:var(--calcite-ui-border-input)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down],:host([number-button-type=vertical]) .calcite--rtl .number-button-item[data-adjustment=down]{border-top-width:0}.number-button-item{max-height:50%;min-height:50%;pointer-events:initial;display:flex;align-self:center;align-items:center;box-sizing:border-box;cursor:pointer;padding-top:0;padding-bottom:0;padding-left:0.5rem;padding-right:0.5rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);border-left-width:0;transition-property:all;transition-duration:150ms;transition-timing-function:ease-in-out;transition-delay:0s;margin:0}.number-button-item calcite-icon{pointer-events:none;transition-property:all;transition-duration:150ms;transition-timing-function:ease-in-out;transition-delay:0s}.number-button-item:focus{background-color:var(--calcite-ui-foreground-2)}.number-button-item:focus calcite-icon{color:var(--calcite-ui-text-1)}.number-button-item:active{background-color:var(--calcite-ui-foreground-3)}:host([number-button-type=vertical]) .calcite--rtl .number-button-item{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);border-right-width:0}.wrapper{display:flex;flex-direction:row;align-items:center;position:relative}:host input::-webkit-calendar-picker-indicator{display:none}:host input[type=date]::-webkit-input-placeholder{visibility:hidden !important}:host textarea::-webkit-resizer{box-sizing:border-box;position:absolute;bottom:0;right:0;padding-top:0;padding-bottom:0;padding-left:0.25rem;padding-right:0.25rem}@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none){.resize-icon-wrapper{display:none}}.resize-icon-wrapper{bottom:2px;right:2px;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3);position:absolute;z-index:10;pointer-events:none;width:0.75rem;height:0.75rem}.resize-icon-wrapper calcite-icon{bottom:0.25rem;right:0.25rem;transform:rotate(-45deg)}.calcite--rtl textarea::-webkit-resizer{right:unset;left:0}.calcite--rtl .resize-icon-wrapper{left:2px;right:unset}.calcite--rtl .resize-icon-wrapper calcite-icon{bottom:0.25rem;right:0.25rem;transform:rotate(45deg)}:host([type=color]) input{padding:0.25rem}:host([type=file]) input{background-color:var(--calcite-ui-foreground-1);cursor:pointer;border-width:1px;border-style:dashed;border-color:var(--calcite-ui-border-input);text-align:center}:host([type=file][scale=s]) input{padding-top:1px;padding-bottom:1px;padding-left:0.5rem;padding-right:0.5rem}:host([type=file][scale=m]) input{padding-top:0.25rem;padding-bottom:0.25rem;padding-left:0.75rem;padding-right:0.75rem}:host([type=file][scale=l]) input{padding-top:0.5rem;padding-bottom:0.5rem;padding-left:1rem;padding-right:1rem}:host(.no-bottom-border) input{border-bottom-width:0}:host(.border-t-color-1) input{border-top-color:var(--calcite-ui-border-1)}:host .inline-child{transition-property:all;transition-duration:150ms;transition-timing-function:ease-in-out;transition-delay:0s;background-color:transparent}:host .inline-child .editing-enabled{background-color:inherit}:host .inline-child:not(.editing-enabled){display:flex;cursor:pointer;border-color:transparent;padding-inline-start:0}::slotted(input[slot=hidden-form-input]){bottom:0 !important;left:0 !important;margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;right:0 !important;top:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";

let CalciteInput = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteInputFocus = index.createEvent(this, "calciteInputFocus", 7);
    this.calciteInputBlur = index.createEvent(this, "calciteInputBlur", 7);
    this.calciteInputInput = index.createEvent(this, "calciteInputInput", 7);
    this.calciteInputChange = index.createEvent(this, "calciteInputChange", 7);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** specify the alignment of the value of the input */
    this.alignment = "start";
    /** should the input autofocus */
    this.autofocus = false;
    /** optionally display a clear button that displays when field has a value
     * shows by default for search, time, date
     * will not display for type="textarea" */
    this.clearable = false;
    /** is the input disabled  */
    this.disabled = false;
    /** for number values, displays the locale's group separator */
    this.groupSeparator = false;
    /** when true, the component will not be visible */
    this.hidden = false;
    /**
     * string to override English loading text
     * @default "Loading"
     */
    this.intlLoading = dom.TEXT.loading;
    /** flip the icon in rtl */
    this.iconFlipRtl = false;
    /** specify if the input is in loading state */
    this.loading = false;
    /** BCP 47 language tag for desired language and country format */
    this.locale = document.documentElement.lang || "en";
    /**
     * Toggles locale formatting for numbers.
     * @internal
     */
    this.localeFormat = false;
    /** specify the placement of the number buttons */
    this.numberButtonType = "vertical";
    /** When true, a field cannot be modified. */
    this.readOnly = false;
    /** is the input required */
    this.required = false;
    /** specify the scale of the input, defaults to m */
    this.scale = "m";
    /** specify the status of the input field, determines message and icons */
    this.status = "idle";
    /** @internal adds inline styles for text input when slotted in calcite-inline-editable */
    this.editingEnabled = false;
    /**
     * specify the input type
     *
     * Note that the following types add type-specific icons by default: `date`, `email`, `password`, `search`, `tel`, `time`
     */
    this.type = "text";
    /** keep track of the rendered child type */
    this.childElType = "input";
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.keyDownHandler = (event) => {
      /* prevent default behavior for input to move the cursor to the beginning of the input with every ArrowUp press */
      if (event.key === "ArrowUp") {
        event.preventDefault();
      }
      if (this.readOnly || this.disabled) {
        return;
      }
      if (this.isClearable && key.getKey(event.key) === "Escape") {
        this.clearInputValue(event);
        event.preventDefault();
      }
    };
    this.clearInputValue = (nativeEvent) => {
      this.setValue(null, nativeEvent, true);
    };
    this.inputBlurHandler = () => {
      if (this.type === "number") {
        this.setLocalizedValue(this.value);
      }
      this.calciteInputBlur.emit({
        element: this.childEl,
        value: this.value
      });
      if (this.preFocusValue !== this.value) {
        this.calciteInputChange.emit();
      }
    };
    this.inputFocusHandler = (event) => {
      if (event.target !== this.slottedActionEl) {
        this.setFocus();
      }
      this.calciteInputFocus.emit({
        element: this.childEl,
        value: this.value
      });
      this.preFocusValue = this.value;
    };
    this.inputInputHandler = (nativeEvent) => {
      if (this.disabled || this.readOnly) {
        return;
      }
      this.setValue(nativeEvent.target.value, nativeEvent);
    };
    this.inputKeyDownHandler = (event) => {
      if (this.disabled || this.readOnly) {
        return;
      }
      if (event.key === "Enter") {
        this.calciteInputChange.emit();
      }
    };
    this.inputNumberInputHandler = (nativeEvent) => {
      if (this.disabled || this.readOnly) {
        return;
      }
      const value = nativeEvent.target.value;
      const delocalizedValue = locale.delocalizeNumberString(value, this.locale);
      if (nativeEvent.inputType === "insertFromPaste") {
        if (!number.isValidNumber(delocalizedValue)) {
          nativeEvent.preventDefault();
        }
        this.setValue(number.parseNumberString(delocalizedValue), nativeEvent);
        this.childNumberEl.value = this.localizedValue;
      }
      else {
        this.setValue(locale.delocalizeNumberString(value, this.locale), nativeEvent);
      }
    };
    this.inputNumberKeyDownHandler = (event) => {
      if (this.type !== "number" || this.disabled || this.readOnly) {
        return;
      }
      if (event.key === "ArrowUp") {
        this.nudgeNumberValue("up", event);
        return;
      }
      if (event.key === "ArrowDown") {
        this.nudgeNumberValue("down", event);
        return;
      }
      const supportedKeys = [
        ...key.numberKeys,
        "ArrowLeft",
        "ArrowRight",
        "Backspace",
        "Delete",
        "Enter",
        "Escape",
        "Tab",
        "-"
      ];
      if (event.altKey || event.ctrlKey || event.metaKey) {
        return;
      }
      const isShiftTabEvent = event.shiftKey && event.key === "Tab";
      if (supportedKeys.includes(event.key) && (!event.shiftKey || isShiftTabEvent)) {
        if (event.key === "Enter") {
          this.calciteInputChange.emit();
        }
        return;
      }
      const decimalSeparator = locale.getDecimalSeparator(this.locale);
      if (event.key === decimalSeparator) {
        if (!this.value && !this.childNumberEl.value) {
          return;
        }
        if (this.value && this.childNumberEl.value.indexOf(decimalSeparator) === -1) {
          return;
        }
      }
      event.preventDefault();
    };
    this.nudgeNumberValue = (direction, nativeEvent) => {
      if ((nativeEvent instanceof KeyboardEvent && nativeEvent.repeat) || this.type !== "number") {
        return;
      }
      const inputMax = this.maxString ? parseFloat(this.maxString) : null;
      const inputMin = this.minString ? parseFloat(this.minString) : null;
      const valueNudgeDelayInMs = 100;
      this.incrementOrDecrementNumberValue(direction, inputMax, inputMin, nativeEvent);
      let firstValueNudge = true;
      this.nudgeNumberValueIntervalId = setInterval(() => {
        if (firstValueNudge) {
          firstValueNudge = false;
          return;
        }
        this.incrementOrDecrementNumberValue(direction, inputMax, inputMin, nativeEvent);
      }, valueNudgeDelayInMs);
    };
    this.numberButtonMouseUpAndMouseOutHandler = () => {
      clearInterval(this.nudgeNumberValueIntervalId);
    };
    this.numberButtonMouseDownHandler = (event) => {
      // todo, when dropping ie11 support, refactor to use stepup/stepdown
      // prevent blur and re-focus of input on mousedown
      event.preventDefault();
      const direction = event.target.dataset.adjustment;
      this.nudgeNumberValue(direction, event);
    };
    this.setChildElRef = (el) => {
      this.childEl = el;
    };
    this.setChildNumberElRef = (el) => {
      this.childNumberEl = el;
    };
    this.setLocalizedValue = (value) => {
      this.localizedValue = locale.localizeNumberString(value, this.locale, this.groupSeparator);
    };
    this.setValue = (value, nativeEvent, committing = false) => {
      const previousValue = this.value;
      this.value = this.type === "number" ? number.sanitizeNumberString(value) : value;
      if (this.type === "number") {
        this.setLocalizedValue(this.value);
      }
      if (nativeEvent) {
        if (this.type === "number" && (value === null || value === void 0 ? void 0 : value.endsWith("."))) {
          return;
        }
        const calciteInputInputEvent = this.calciteInputInput.emit({
          element: this.childEl,
          nativeEvent,
          value
        });
        if (calciteInputInputEvent.defaultPrevented) {
          this.value = previousValue;
          this.setLocalizedValue(previousValue);
        }
        else if (committing) {
          this.calciteInputChange.emit();
        }
      }
    };
    this.inputKeyUpHandler = () => {
      clearInterval(this.nudgeNumberValueIntervalId);
    };
  }
  disabledWatcher() {
    this.setDisabledAction();
  }
  /** watcher to update number-to-string for max */
  maxWatcher() {
    var _a;
    this.maxString = ((_a = this.max) === null || _a === void 0 ? void 0 : _a.toString()) || null;
  }
  /** watcher to update number-to-string for min */
  minWatcher() {
    var _a;
    this.minString = ((_a = this.min) === null || _a === void 0 ? void 0 : _a.toString()) || null;
  }
  valueWatcher(newValue) {
    if (this.type === "number" &&
      this.localizedValue !== locale.localizeNumberString(newValue, this.locale)) {
      this.setLocalizedValue(newValue);
    }
    else if (this.childEl && this.childEl.value !== newValue) {
      this.childEl.value = newValue;
    }
  }
  updateRequestedIcon() {
    this.requestedIcon = dom.setRequestedIcon(INPUT_TYPE_ICONS, this.icon, this.type);
  }
  get isClearable() {
    var _a;
    return !this.isTextarea && (this.clearable || this.type === "search") && ((_a = this.value) === null || _a === void 0 ? void 0 : _a.length) > 0;
  }
  get isTextarea() {
    return this.childElType === "textarea";
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    var _a;
    this.scale = dom.getElementProp(this.el, "scale", this.scale);
    this.status = dom.getElementProp(this.el, "status", this.status);
    this.inlineEditableEl = this.el.closest("calcite-inline-editable");
    this.editingEnabled = (_a = this.inlineEditableEl) === null || _a === void 0 ? void 0 : _a.editingEnabled;
    if (this.type === "number" && this.value) {
      if (number.isValidNumber(this.value)) {
        this.localizedValue = locale.localizeNumberString(this.value, this.locale, this.groupSeparator);
      }
      else {
        this.value = undefined;
      }
    }
    label.connectLabel(this);
    form.connectForm(this);
  }
  disconnectedCallback() {
    label.disconnectLabel(this);
    form.disconnectForm(this);
  }
  componentWillLoad() {
    var _a, _b;
    this.childElType = this.type === "textarea" ? "textarea" : "input";
    this.maxString = (_a = this.max) === null || _a === void 0 ? void 0 : _a.toString();
    this.minString = (_b = this.min) === null || _b === void 0 ? void 0 : _b.toString();
    this.requestedIcon = dom.setRequestedIcon(INPUT_TYPE_ICONS, this.icon, this.type);
  }
  componentDidLoad() {
    this.slottedActionEl = this.el.querySelector("[slot=action]");
    this.setDisabledAction();
  }
  componentShouldUpdate(newValue, oldValue, property) {
    if (this.type === "number" && property === "value" && newValue && !number.isValidNumber(newValue)) {
      this.value = oldValue;
      return false;
    }
    return true;
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    var _a, _b;
    if (this.type === "number") {
      (_a = this.childNumberEl) === null || _a === void 0 ? void 0 : _a.focus();
    }
    else {
      (_b = this.childEl) === null || _b === void 0 ? void 0 : _b.focus();
    }
  }
  onLabelClick() {
    this.setFocus();
  }
  incrementOrDecrementNumberValue(direction, inputMax, inputMin, nativeEvent) {
    const { value } = this;
    const inputStep = this.step === "any" ? 1 : Math.abs(this.step || 1);
    const inputVal = value && value !== "" ? parseFloat(value) : 0;
    const adjustment = direction === "up" ? 1 : -1;
    const nudgedValue = inputVal + inputStep * adjustment;
    const finalValue = (typeof inputMin === "number" && !isNaN(inputMin) && nudgedValue < inputMin) ||
      (typeof inputMax === "number" && !isNaN(inputMax) && nudgedValue > inputMax)
      ? inputVal
      : nudgedValue;
    const inputValPlaces = math.decimalPlaces(inputVal);
    const inputStepPlaces = math.decimalPlaces(inputStep);
    this.setValue(finalValue.toFixed(Math.max(inputValPlaces, inputStepPlaces)), nativeEvent, true);
  }
  onFormReset() {
    this.setValue(this.defaultValue);
  }
  syncHiddenFormInput(input) {
    var _a, _b, _c, _d;
    if (this.type === "number") {
      input.type = "number";
      input.min = (_b = (_a = this.min) === null || _a === void 0 ? void 0 : _a.toString(10)) !== null && _b !== void 0 ? _b : "";
      input.max = (_d = (_c = this.max) === null || _c === void 0 ? void 0 : _c.toString(10)) !== null && _d !== void 0 ? _d : "";
    }
    else if (this.type === "text") {
      input.type = "text";
      if (this.minLength != null) {
        input.minLength = this.minLength;
      }
      if (this.maxLength != null) {
        input.maxLength = this.maxLength;
      }
    }
    else if (this.type === "password") {
      input.type = "password";
    }
  }
  setDisabledAction() {
    if (!this.slottedActionEl) {
      return;
    }
    const slottedActionEl = this.slottedActionEl;
    this.disabled
      ? slottedActionEl.setAttribute("disabled", "")
      : slottedActionEl.removeAttribute("disabled");
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const dir = dom.getElementDir(this.el);
    const loader = (index.h("div", { class: CSS.loader }, index.h("calcite-progress", { label: this.intlLoading, type: "indeterminate" })));
    const inputClearButton = (index.h("button", { class: CSS.clearButton, disabled: this.disabled || this.readOnly, onClick: this.clearInputValue, tabIndex: this.disabled ? -1 : 0, type: "button" }, index.h("calcite-icon", { icon: "x", scale: "s" })));
    const iconEl = (index.h("calcite-icon", { class: CSS.inputIcon, dir: dir, flipRtl: this.iconFlipRtl, icon: this.requestedIcon, scale: "s" }));
    const isHorizontalNumberButton = this.numberButtonType === "horizontal";
    const numberButtonsHorizontalUp = (index.h("button", { class: {
        [CSS.numberButtonItem]: true,
        [CSS.buttonItemHorizontal]: isHorizontalNumberButton
      }, "data-adjustment": "up", disabled: this.disabled || this.readOnly, onMouseDown: this.numberButtonMouseDownHandler, onMouseOut: this.numberButtonMouseUpAndMouseOutHandler, onMouseUp: this.numberButtonMouseUpAndMouseOutHandler, tabIndex: -1, type: "button" }, index.h("calcite-icon", { icon: "chevron-up", scale: "s" })));
    const numberButtonsHorizontalDown = (index.h("button", { class: {
        [CSS.numberButtonItem]: true,
        [CSS.buttonItemHorizontal]: isHorizontalNumberButton
      }, "data-adjustment": "down", disabled: this.disabled || this.readOnly, onMouseDown: this.numberButtonMouseDownHandler, onMouseOut: this.numberButtonMouseUpAndMouseOutHandler, onMouseUp: this.numberButtonMouseUpAndMouseOutHandler, tabIndex: -1, type: "button" }, index.h("calcite-icon", { icon: "chevron-down", scale: "s" })));
    const numberButtonsVertical = (index.h("div", { class: CSS.numberButtonWrapper }, numberButtonsHorizontalUp, numberButtonsHorizontalDown));
    const prefixText = index.h("div", { class: CSS.prefix }, this.prefixText);
    const suffixText = index.h("div", { class: CSS.suffix }, this.suffixText);
    const localeNumberInput = this.type === "number" ? (index.h("input", { "aria-label": label.getLabelText(this), autofocus: this.autofocus ? true : null, defaultValue: this.defaultValue, disabled: this.disabled ? true : null, enterKeyHint: this.el.enterKeyHint, inputMode: this.el.inputMode, key: "localized-input", maxLength: this.maxLength, minLength: this.minLength, name: undefined, onBlur: this.inputBlurHandler, onFocus: this.inputFocusHandler, onInput: this.inputNumberInputHandler, onKeyDown: this.inputNumberKeyDownHandler, onKeyUp: this.inputKeyUpHandler, placeholder: this.placeholder || "", readOnly: this.readOnly, ref: this.setChildNumberElRef, type: "text", value: this.localizedValue })) : null;
    const childEl = this.type !== "number"
      ? [
        index.h(this.childElType, { "aria-label": label.getLabelText(this), autofocus: this.autofocus ? true : null, class: {
            [CSS.editingEnabled]: this.editingEnabled,
            [CSS.inlineChild]: !!this.inlineEditableEl
          }, defaultValue: this.defaultValue, disabled: this.disabled ? true : null, enterKeyHint: this.el.enterKeyHint, inputMode: this.el.inputMode, max: this.maxString, maxLength: this.maxLength, min: this.minString, minLength: this.minLength, name: this.name, onBlur: this.inputBlurHandler, onFocus: this.inputFocusHandler, onInput: this.inputInputHandler, onKeyDown: this.inputKeyDownHandler, onKeyUp: this.inputKeyUpHandler, placeholder: this.placeholder || "", readOnly: this.readOnly, ref: this.setChildElRef, required: this.required ? true : null, step: this.step, tabIndex: this.disabled || (this.inlineEditableEl && !this.editingEnabled) ? -1 : null, type: this.type, value: this.value }),
        this.isTextarea ? (index.h("div", { class: CSS.resizeIconWrapper }, index.h("calcite-icon", { icon: "chevron-down", scale: "s" }))) : null
      ]
      : null;
    return (index.h(index.Host, { onClick: this.inputFocusHandler, onKeyDown: this.keyDownHandler }, index.h("div", { class: { [CSS.inputWrapper]: true, [dom.CSS_UTILITY.rtl]: dir === "rtl" }, dir: dir }, this.type === "number" && this.numberButtonType === "horizontal" && !this.readOnly
      ? numberButtonsHorizontalDown
      : null, this.prefixText ? prefixText : null, index.h("div", { class: CSS.wrapper }, localeNumberInput, childEl, this.isClearable ? inputClearButton : null, this.requestedIcon ? iconEl : null, this.loading ? loader : null), index.h("div", { class: CSS.actionWrapper }, index.h("slot", { name: SLOTS.action })), this.type === "number" && this.numberButtonType === "vertical" && !this.readOnly
      ? numberButtonsVertical
      : null, this.suffixText ? suffixText : null, this.type === "number" && this.numberButtonType === "horizontal" && !this.readOnly
      ? numberButtonsHorizontalUp
      : null, index.h(form.HiddenFormInputSlot, { component: this }))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "disabled": ["disabledWatcher"],
    "max": ["maxWatcher"],
    "min": ["minWatcher"],
    "value": ["valueWatcher"],
    "icon": ["updateRequestedIcon"],
    "type": ["updateRequestedIcon"]
  }; }
};
CalciteInput.style = calciteInputCss;

const calciteProgressCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{position:relative;display:block;width:100%}.track,.bar{position:absolute;top:0;height:2px}.track{z-index:0;width:100%;overflow:hidden;background:var(--calcite-ui-border-3)}.bar{background-color:var(--calcite-ui-brand);z-index:0}.indeterminate{width:20%;animation:looping-progress-bar-ani 2200ms linear infinite}.reversed{animation-direction:reverse}.text{padding-top:1rem;padding-bottom:0;padding-left:0;padding-right:0;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium)}@keyframes looping-progress-bar-ani{0%{transform:translate3d(-100%, 0, 0)}50%{width:40%}100%{transform:translate3d(600%, 0, 0)}}";

let CalciteProgress = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** Use indeterminate if finding actual progress value is impossible */
    this.type = "determinate";
    /** Fraction completed, in the range of 0 - 1.0 */
    this.value = 0;
    /** For indeterminate progress bars, reverse the animation direction */
    this.reversed = false;
  }
  render() {
    const isDeterminate = this.type === "determinate";
    const barStyles = isDeterminate ? { width: `${this.value * 100}%` } : {};
    return (index.h("div", { "aria-label": this.label || this.text, "aria-valuemax": 1, "aria-valuemin": 0, "aria-valuenow": this.value, role: "progressbar" }, index.h("div", { class: "track" }, index.h("div", { class: {
        bar: true,
        indeterminate: this.type === "indeterminate",
        reversed: this.reversed
      }, style: barStyles })), this.text ? index.h("div", { class: "text" }, this.text) : null));
  }
  get el() { return index.getElement(this); }
};
CalciteProgress.style = calciteProgressCss;

exports.calcite_input = CalciteInput;
exports.calcite_progress = CalciteProgress;
