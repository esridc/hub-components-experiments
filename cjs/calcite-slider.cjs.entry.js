'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dad2b533.js');
const guid = require('./guid-1ecb63ba.js');
const key = require('./key-244ba28e.js');
const dom = require('./dom-c158885c.js');
const math = require('./math-6c88b212.js');
const label = require('./label-9ef43de7.js');
const form = require('./form-278d87cb.js');

const calciteSliderCss = "@charset \"UTF-8\";@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block}.container{display:block;position:relative;padding:7px 0;margin:7px 0.5rem}:host([disabled]){opacity:var(--calcite-ui-opacity-disabled);pointer-events:none}:host([disabled]) .track__range,:host([disabled]) .tick--active{background-color:var(--calcite-ui-text-3)}:host([disabled]) .graph .graph-path--highlight{fill:var(--calcite-ui-text-3)}:host([label-handles]) .container,:host([precise]:not([precise=false])) .container{margin-top:21px}:host([label-ticks]),:host([precise]:not([precise=false])) .container--range{margin-bottom:21px}:host([precise]:not([precise=false])[label-handles]) .container{margin-top:35px}:host([precise]:not([precise=false])[label-handles]) .container--range{margin-bottom:35px}.thumb{position:absolute;border-style:none;background-color:transparent;cursor:pointer;outline:2px solid transparent;outline-offset:2px;padding:0;margin:0;display:flex;flex-direction:column;align-items:center;font-family:inherit;z-index:2;transform:translate(7px, -8px)}.thumb .handle__label{font-size:var(--calcite-font-size--2);font-weight:500;line-height:1;color:var(--calcite-ui-text-2);margin-bottom:5px}.thumb .handle__label.static,.thumb .handle__label.transformed{opacity:0;position:absolute;top:0;bottom:0}.thumb .handle__label.hyphen::after{content:\"—\";display:inline-block;width:1em}.thumb .handle{outline-offset:0;outline-color:transparent;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;height:14px;width:14px;box-sizing:border-box;border-radius:100%;background-color:var(--calcite-ui-foreground-1);box-shadow:0 0 0 2px var(--calcite-ui-text-3) inset;transition:border 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease}.thumb .handle-extension{width:2px;height:7px;background-color:var(--calcite-ui-text-3)}.thumb:hover .handle{box-shadow:0 0 0 3px var(--calcite-ui-brand) inset}.thumb:hover .handle-extension{background-color:var(--calcite-ui-brand)}.thumb:focus .handle{outline:2px solid var(--calcite-ui-brand);outline-offset:2px;outline-offset:2px}.thumb:focus .handle-extension{background-color:var(--calcite-ui-brand)}.thumb--minValue{transform:translate(-7px, -8px)}:host([label-handles]) .thumb{transform:translate(50%, -25px)}:host([label-handles]) .thumb--minValue{transform:translate(-50%, -25px)}:host([has-histogram][label-handles]) .thumb{transform:translate(50%, -8px)}:host([has-histogram][label-handles]) .thumb .handle__label{margin-bottom:unset;margin-top:5px}:host([has-histogram][label-handles]) .thumb--minValue{transform:translate(-50%, -8px)}:host([precise]:not([precise=false])) .thumb{transform:translate(7px, -21px)}:host([precise]:not([precise=false])) .thumb--minValue{transform:translate(-7px, -2px)}:host([precise]:not([precise=false])) .thumb--minValue .handle__label{margin-bottom:unset;margin-top:5px}:host([has-histogram][precise]:not([precise=false])) .thumb{transform:translate(7px, -2px)}:host([has-histogram][precise]:not([precise=false])) .thumb--minValue{transform:translate(-50%, -2px)}:host([ticks][precise]:not([precise=false])) .thumb{transform:translate(7px, -20px)}:host([ticks][precise]:not([precise=false])) .thumb--minValue{transform:translate(-7px, -3px)}:host([has-histogram][ticks][precise]:not([precise=false])) .thumb{transform:translate(7px, -3px)}:host([has-histogram][ticks][precise]:not([precise=false])) .thumb--minValue{transform:translate(-50%, -3px)}:host([label-handles][precise]:not([precise=false])) .thumb{transform:translate(50%, -38px)}:host([label-handles][precise]:not([precise=false])) .thumb--minValue{transform:translate(-50%, -2px)}:host([has-histogram][label-handles][precise]:not([precise=false])) .thumb{transform:translate(50%, -2px)}:host([has-histogram][label-handles][precise]:not([precise=false])) .thumb--minValue{transform:translate(-50%, -2px)}:host([ticks][label-handles][precise]:not([precise=false])) .thumb{transform:translate(50%, -37px)}:host([ticks][label-handles][precise]:not([precise=false])) .thumb--minValue{transform:translate(-50%, -3px)}:host([has-histogram][ticks][label-handles][precise]:not([precise=false])) .thumb{transform:translate(50%, -3px)}:host([has-histogram][ticks][label-handles][precise]:not([precise=false])) .thumb--minValue{transform:translate(-50%, -3px)}.thumb:focus,.thumb--active{z-index:3}.thumb:focus .handle,.thumb--active .handle{background-color:var(--calcite-ui-brand);box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.16)}.thumb:hover.thumb--precise:after,.thumb:focus.thumb--precise:after,.thumb--active.thumb--precise:after{background-color:var(--calcite-ui-brand)}.track{height:2px;border-radius:0;z-index:1;background-color:var(--calcite-ui-border-2);transition:all 250ms ease-in;position:relative}.track__range{position:absolute;top:0;height:2px;background-color:var(--calcite-ui-brand)}.container--range .track__range:hover{cursor:ew-resize}.container--range .track__range:after{content:\"\";position:absolute;top:-5px;width:100%;height:14px}.tick{position:absolute;top:-2px;width:2px;height:4px;left:var(--calcite-ui-border-1-offset);margin-left:-2px;border:1px solid var(--calcite-ui-foreground-1);background-color:var(--calcite-ui-border-1);pointer-events:none}.tick--active{background-color:var(--calcite-ui-brand)}.tick__label{position:absolute;font-size:var(--calcite-font-size--2);font-weight:500;color:var(--calcite-ui-text-2);width:4em;margin:14px -2em;text-align:center;display:block;pointer-events:none}.tick__label--min{left:0;margin:14px -3px;text-align:left;transition:opacity 150ms}.tick__label--max{left:unset;right:0;margin:14px -3px;text-align:right;transition:opacity 50ms}:host([has-histogram][label-handles]) .tick__label--min,:host([has-histogram][label-handles]) .tick__label--max{margin:6px -3px;font-weight:300;color:var(--calcite-ui-text-3)}:host([has-histogram][precise]:not([precise=false])) .tick__label--min,:host([has-histogram][precise]:not([precise=false])) .tick__label--max{margin:6px -3px;font-weight:300;color:var(--calcite-ui-text-3)}.graph{color:var(--calcite-ui-foreground-3)}:host([mirrored]:not([has-histogram])) .tick__label--min{right:0;left:unset;text-align:right}:host([mirrored]:not([has-histogram])) .tick__label--max{right:unset;left:0;text-align:left}::slotted(input[slot=hidden-form-input]){bottom:0 !important;left:0 !important;margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;right:0 !important;top:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";

let CalciteSlider = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteSliderInput = index.createEvent(this, "calciteSliderInput", 7);
    this.calciteSliderChange = index.createEvent(this, "calciteSliderChange", 7);
    this.calciteSliderUpdate = index.createEvent(this, "calciteSliderUpdate", 7);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** Disable and gray out the slider */
    this.disabled = false;
    /** Indicates if a histogram is present */
    this.hasHistogram = false;
    /** Label handles with their numeric value */
    this.labelHandles = false;
    /** Label tick marks with their numeric value. */
    this.labelTicks = false;
    /** Maximum selectable value */
    this.max = 100;
    /** Minimum selectable value */
    this.min = 0;
    /**
     * When true, the slider will display values from high to low.
     *
     * Note that this value will be ignored if the slider has an associated histogram.
     */
    this.mirrored = false;
    /** Use finer point for handles */
    this.precise = false;
    /**
     * When true, makes the component required for form-submission.
     */
    this.required = false;
    /** When true, enables snap selection along the step interval */
    this.snap = false;
    /** Interval to move on up/down keys */
    this.step = 1;
    /** Currently selected number (if single select) */
    this.value = null;
    this.guid = `calcite-slider-${guid.guid()}`;
    this.isRange = false;
    this.activeProp = "value";
    this.minMaxValueRange = null;
    this.minValueDragRange = null;
    this.maxValueDragRange = null;
    this.tickValues = [];
    this.dragUpdate = (event) => {
      event.preventDefault();
      if (this.dragProp) {
        const value = this.translate(event.clientX || event.pageX);
        if (this.isRange && this.dragProp === "minMaxValue") {
          if (this.minValueDragRange && this.maxValueDragRange && this.minMaxValueRange) {
            const newMinValue = value - this.minValueDragRange;
            const newMaxValue = value + this.maxValueDragRange;
            if (newMaxValue <= this.max &&
              newMinValue >= this.min &&
              newMaxValue - newMinValue === this.minMaxValueRange) {
              this.minValue = this.clamp(newMinValue, "minValue");
              this.maxValue = this.clamp(newMaxValue, "maxValue");
            }
          }
          else {
            this.minValueDragRange = value - this.minValue;
            this.maxValueDragRange = this.maxValue - value;
            this.minMaxValueRange = this.maxValue - this.minValue;
          }
        }
        else {
          this.setValue(this.dragProp, this.clamp(value, this.dragProp));
        }
      }
    };
    this.dragEnd = (event) => {
      document.removeEventListener("pointermove", this.dragUpdate);
      document.removeEventListener("pointerup", this.dragEnd);
      document.removeEventListener("pointercancel", this.dragEnd);
      this.focusActiveHandle(event.clientX);
      if (this.lastDragPropValue != this[this.dragProp]) {
        this.emitChange();
      }
      this.dragProp = null;
      this.lastDragPropValue = null;
      this.minValueDragRange = null;
      this.maxValueDragRange = null;
      this.minMaxValueRange = null;
    };
    /**
     * Set the reference of the track Element
     * @internal
     * @param node
     */
    this.storeTrackRef = (node) => {
      this.trackEl = node;
    };
  }
  histogramWatcher(newHistogram) {
    this.hasHistogram = !!newHistogram;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    label.connectLabel(this);
    form.connectForm(this);
  }
  disconnectedCallback() {
    label.disconnectLabel(this);
    form.disconnectForm(this);
  }
  componentWillLoad() {
    this.isRange = !!(this.maxValue || this.maxValue === 0);
    this.tickValues = this.generateTickValues();
    this.value = this.clamp(this.value);
    form.afterConnectDefaultValueSet(this, this.value);
    if (this.snap) {
      this.value = this.getClosestStep(this.value);
    }
    if (this.histogram) {
      this.hasHistogram = true;
    }
  }
  componentDidRender() {
    if (this.labelHandles) {
      this.adjustHostObscuredHandleLabel("value");
      if (this.isRange) {
        this.adjustHostObscuredHandleLabel("minValue");
        if (!(this.precise && this.isRange && !this.hasHistogram)) {
          this.hyphenateCollidingRangeHandleLabels();
        }
      }
    }
    this.hideObscuredBoundingTickLabels();
  }
  render() {
    const id = this.el.id || this.guid;
    const min = this.minValue || this.min;
    const max = this.maxValue || this.value;
    const maxProp = this.isRange ? "maxValue" : "value";
    const value = this[maxProp];
    const useMinValue = this.shouldUseMinValue();
    const minInterval = this.getUnitInterval(useMinValue ? this.minValue : min) * 100;
    const maxInterval = this.getUnitInterval(max) * 100;
    const mirror = this.shouldMirror();
    const leftThumbOffset = `${mirror ? 100 - minInterval : minInterval}%`;
    const rightThumbOffset = `${mirror ? maxInterval : 100 - maxInterval}%`;
    const handle = (index.h("button", { "aria-label": this.isRange ? this.maxLabel : this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": value, class: {
        thumb: true,
        "thumb--value": true,
        "thumb--active": this.lastDragProp !== "minMaxValue" && this.dragProp === maxProp
      }, disabled: this.disabled, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = maxProp), onPointerDown: () => this.dragStart(maxProp), ref: (el) => (this.maxHandle = el), role: "slider", style: { right: rightThumbOffset } }, index.h("div", { class: "handle" })));
    const labeledHandle = (index.h("button", { "aria-label": this.isRange ? this.maxLabel : this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": value, class: {
        thumb: true,
        "thumb--value": true,
        "thumb--active": this.lastDragProp !== "minMaxValue" && this.dragProp === maxProp
      }, disabled: this.disabled, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = maxProp), onPointerDown: () => this.dragStart(maxProp), ref: (el) => (this.maxHandle = el), role: "slider", style: { right: rightThumbOffset } }, index.h("span", { "aria-hidden": "true", class: "handle__label handle__label--value" }, value ? value.toLocaleString() : value), index.h("span", { "aria-hidden": "true", class: "handle__label handle__label--value static" }, value ? value.toLocaleString() : value), index.h("span", { "aria-hidden": "true", class: "handle__label handle__label--value transformed" }, value ? value.toLocaleString() : value), index.h("div", { class: "handle" })));
    const histogramLabeledHandle = (index.h("button", { "aria-label": this.isRange ? this.maxLabel : this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": value, class: {
        thumb: true,
        "thumb--value": true,
        "thumb--active": this.lastDragProp !== "minMaxValue" && this.dragProp === maxProp
      }, disabled: this.disabled, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = maxProp), onPointerDown: () => this.dragStart(maxProp), ref: (el) => (this.maxHandle = el), role: "slider", style: { right: rightThumbOffset } }, index.h("div", { class: "handle" }), index.h("span", { "aria-hidden": "true", class: "handle__label handle__label--value" }, value ? value.toLocaleString() : value), index.h("span", { "aria-hidden": "true", class: "handle__label handle__label--value static" }, value ? value.toLocaleString() : value), index.h("span", { "aria-hidden": "true", class: "handle__label handle__label--value transformed" }, value ? value.toLocaleString() : value)));
    const preciseHandle = (index.h("button", { "aria-label": this.isRange ? this.maxLabel : this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": value, class: {
        thumb: true,
        "thumb--value": true,
        "thumb--active": this.lastDragProp !== "minMaxValue" && this.dragProp === maxProp,
        "thumb--precise": true
      }, disabled: this.disabled, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = maxProp), onPointerDown: () => this.dragStart(maxProp), ref: (el) => (this.maxHandle = el), role: "slider", style: { right: rightThumbOffset } }, index.h("div", { class: "handle" }), index.h("div", { class: "handle-extension" })));
    const histogramPreciseHandle = (index.h("button", { "aria-label": this.isRange ? this.maxLabel : this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": value, class: {
        thumb: true,
        "thumb--value": true,
        "thumb--active": this.lastDragProp !== "minMaxValue" && this.dragProp === maxProp,
        "thumb--precise": true
      }, disabled: this.disabled, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = maxProp), onPointerDown: () => this.dragStart(maxProp), ref: (el) => (this.maxHandle = el), role: "slider", style: { right: rightThumbOffset } }, index.h("div", { class: "handle-extension" }), index.h("div", { class: "handle" })));
    const labeledPreciseHandle = (index.h("button", { "aria-label": this.isRange ? this.maxLabel : this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": value, class: {
        thumb: true,
        "thumb--value": true,
        "thumb--active": this.lastDragProp !== "minMaxValue" && this.dragProp === maxProp,
        "thumb--precise": true
      }, disabled: this.disabled, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = maxProp), onPointerDown: () => this.dragStart(maxProp), ref: (el) => (this.maxHandle = el), role: "slider", style: { right: rightThumbOffset } }, index.h("span", { "aria-hidden": "true", class: "handle__label handle__label--value" }, value ? value.toLocaleString() : value), index.h("span", { "aria-hidden": "true", class: "handle__label handle__label--value static" }, value ? value.toLocaleString() : value), index.h("span", { "aria-hidden": "true", class: "handle__label handle__label--value transformed" }, value ? value.toLocaleString() : value), index.h("div", { class: "handle" }), index.h("div", { class: "handle-extension" })));
    const histogramLabeledPreciseHandle = (index.h("button", { "aria-label": this.isRange ? this.maxLabel : this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": value, class: {
        thumb: true,
        "thumb--value": true,
        "thumb--active": this.lastDragProp !== "minMaxValue" && this.dragProp === maxProp,
        "thumb--precise": true
      }, disabled: this.disabled, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = maxProp), onPointerDown: () => this.dragStart(maxProp), ref: (el) => (this.maxHandle = el), role: "slider", style: { right: rightThumbOffset } }, index.h("div", { class: "handle-extension" }), index.h("div", { class: "handle" }), index.h("span", { "aria-hidden": "true", class: "handle__label handle__label--value" }, value ? value.toLocaleString() : value), index.h("span", { "aria-hidden": "true", class: "handle__label handle__label--value static" }, value ? value.toLocaleString() : value), index.h("span", { "aria-hidden": "true", class: "handle__label handle__label--value transformed" }, value ? value.toLocaleString() : value)));
    const minHandle = (index.h("button", { "aria-label": this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": this.minValue, class: {
        thumb: true,
        "thumb--minValue": true,
        "thumb--active": this.dragProp === "minValue"
      }, disabled: this.disabled, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = "minValue"), onPointerDown: () => this.dragStart("minValue"), ref: (el) => (this.minHandle = el), role: "slider", style: { left: leftThumbOffset } }, index.h("div", { class: "handle" })));
    const minLabeledHandle = (index.h("button", { "aria-label": this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": this.minValue, class: {
        thumb: true,
        "thumb--minValue": true,
        "thumb--active": this.dragProp === "minValue"
      }, disabled: this.disabled, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = "minValue"), onPointerDown: () => this.dragStart("minValue"), ref: (el) => (this.minHandle = el), role: "slider", style: { left: leftThumbOffset } }, index.h("span", { "aria-hidden": "true", class: "handle__label handle__label--minValue" }, this.minValue && this.minValue.toLocaleString()), index.h("span", { "aria-hidden": "true", class: "handle__label handle__label--minValue static" }, this.minValue && this.minValue.toLocaleString()), index.h("span", { "aria-hidden": "true", class: "handle__label handle__label--minValue transformed" }, this.minValue && this.minValue.toLocaleString()), index.h("div", { class: "handle" })));
    const minHistogramLabeledHandle = (index.h("button", { "aria-label": this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": this.minValue, class: {
        thumb: true,
        "thumb--minValue": true,
        "thumb--active": this.dragProp === "minValue"
      }, disabled: this.disabled, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = "minValue"), onPointerDown: () => this.dragStart("minValue"), ref: (el) => (this.minHandle = el), role: "slider", style: { left: leftThumbOffset } }, index.h("div", { class: "handle" }), index.h("span", { "aria-hidden": "true", class: "handle__label handle__label--minValue" }, this.minValue && this.minValue.toLocaleString()), index.h("span", { "aria-hidden": "true", class: "handle__label handle__label--minValue static" }, this.minValue && this.minValue.toLocaleString()), index.h("span", { "aria-hidden": "true", class: "handle__label handle__label--minValue transformed" }, this.minValue && this.minValue.toLocaleString())));
    const minPreciseHandle = (index.h("button", { "aria-label": this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": this.minValue, class: {
        thumb: true,
        "thumb--minValue": true,
        "thumb--active": this.dragProp === "minValue",
        "thumb--precise": true
      }, disabled: this.disabled, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = "minValue"), onPointerDown: () => this.dragStart("minValue"), ref: (el) => (this.minHandle = el), role: "slider", style: { left: leftThumbOffset } }, index.h("div", { class: "handle-extension" }), index.h("div", { class: "handle" })));
    const minLabeledPreciseHandle = (index.h("button", { "aria-label": this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": this.minValue, class: {
        thumb: true,
        "thumb--minValue": true,
        "thumb--active": this.dragProp === "minValue",
        "thumb--precise": true
      }, disabled: this.disabled, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = "minValue"), onPointerDown: () => this.dragStart("minValue"), ref: (el) => (this.minHandle = el), role: "slider", style: { left: leftThumbOffset } }, index.h("div", { class: "handle-extension" }), index.h("div", { class: "handle" }), index.h("span", { "aria-hidden": "true", class: "handle__label handle__label--minValue" }, this.minValue && this.minValue.toLocaleString()), index.h("span", { "aria-hidden": "true", class: "handle__label handle__label--minValue static" }, this.minValue && this.minValue.toLocaleString()), index.h("span", { "aria-hidden": "true", class: "handle__label handle__label--minValue transformed" }, this.minValue && this.minValue.toLocaleString())));
    return (index.h(index.Host, { id: id, onTouchStart: this.handleTouchStart }, index.h("div", { class: { container: true, "container--range": this.isRange } }, this.renderGraph(), index.h("div", { class: "track", ref: this.storeTrackRef }, index.h("div", { class: "track__range", onPointerDown: () => this.dragStart("minMaxValue"), style: {
        left: `${mirror ? 100 - maxInterval : minInterval}%`,
        right: `${mirror ? minInterval : 100 - maxInterval}%`
      } }), index.h("div", { class: "ticks" }, this.tickValues.map((tick) => {
      const tickOffset = `${this.getUnitInterval(tick) * 100}%`;
      let activeTicks = tick >= min && tick <= max;
      if (useMinValue) {
        activeTicks = tick >= this.minValue && tick <= this.maxValue;
      }
      return (index.h("span", { class: {
          tick: true,
          "tick--active": activeTicks
        }, style: {
          left: mirror ? "" : tickOffset,
          right: mirror ? tickOffset : ""
        } }, this.renderTickLabel(tick)));
    }))), !this.precise && !this.labelHandles && this.isRange && minHandle, !this.hasHistogram &&
      !this.precise &&
      this.labelHandles &&
      this.isRange &&
      minLabeledHandle, this.precise && !this.labelHandles && this.isRange && minPreciseHandle, this.precise && this.labelHandles && this.isRange && minLabeledPreciseHandle, this.hasHistogram &&
      !this.precise &&
      this.labelHandles &&
      this.isRange &&
      minHistogramLabeledHandle, !this.precise && !this.labelHandles && handle, !this.hasHistogram && !this.precise && this.labelHandles && labeledHandle, !this.hasHistogram && this.precise && !this.labelHandles && preciseHandle, this.hasHistogram && this.precise && !this.labelHandles && histogramPreciseHandle, !this.hasHistogram && this.precise && this.labelHandles && labeledPreciseHandle, this.hasHistogram && !this.precise && this.labelHandles && histogramLabeledHandle, this.hasHistogram && this.precise && this.labelHandles && histogramLabeledPreciseHandle, index.h(form.HiddenFormInputSlot, { component: this }))));
  }
  renderGraph() {
    return this.histogram ? (index.h("div", { class: "graph" }, index.h("calcite-graph", { colorStops: this.histogramStops, data: this.histogram, "data-style": "slider-histogram", height: 48, highlightMax: this.isRange ? this.maxValue : this.value, highlightMin: this.isRange ? this.minValue : this.min, max: this.max, min: this.min, width: 300 }))) : null;
  }
  renderTickLabel(tick) {
    const isMinTickLabel = tick === this.min;
    const isMaxTickLabel = tick === this.max;
    const tickLabel = (index.h("span", { class: {
        tick__label: true,
        "tick__label--min": isMinTickLabel,
        "tick__label--max": isMaxTickLabel
      } }, tick.toLocaleString()));
    if (this.labelTicks && !this.hasHistogram && !this.isRange) {
      return tickLabel;
    }
    if (this.labelTicks &&
      !this.hasHistogram &&
      this.isRange &&
      !this.precise &&
      !this.labelHandles) {
      return tickLabel;
    }
    if (this.labelTicks &&
      !this.hasHistogram &&
      this.isRange &&
      !this.precise &&
      this.labelHandles) {
      return tickLabel;
    }
    if (this.labelTicks &&
      !this.hasHistogram &&
      this.isRange &&
      this.precise &&
      (isMinTickLabel || isMaxTickLabel)) {
      return tickLabel;
    }
    if (this.labelTicks && this.hasHistogram && !this.precise && !this.labelHandles) {
      return tickLabel;
    }
    if (this.labelTicks &&
      this.hasHistogram &&
      this.precise &&
      !this.labelHandles &&
      (isMinTickLabel || isMaxTickLabel)) {
      return tickLabel;
    }
    if (this.labelTicks &&
      this.hasHistogram &&
      !this.precise &&
      this.labelHandles &&
      (isMinTickLabel || isMaxTickLabel)) {
      return tickLabel;
    }
    if (this.labelTicks &&
      this.hasHistogram &&
      this.precise &&
      this.labelHandles &&
      (isMinTickLabel || isMaxTickLabel)) {
      return tickLabel;
    }
    return null;
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  keyDownHandler(event) {
    const mirror = this.shouldMirror();
    const { activeProp, max, min, pageStep, step } = this;
    const value = this[activeProp];
    const key$1 = key.getKey(event.key);
    if (key$1 === "Enter" || key$1 === " ") {
      event.preventDefault();
      return;
    }
    let adjustment;
    if (key$1 === "ArrowUp" || key$1 === "ArrowRight") {
      const directionFactor = mirror && key$1 === "ArrowRight" ? -1 : 1;
      adjustment = value + step * directionFactor;
    }
    else if (key$1 === "ArrowDown" || key$1 === "ArrowLeft") {
      const directionFactor = mirror && key$1 === "ArrowLeft" ? -1 : 1;
      adjustment = value - step * directionFactor;
    }
    else if (key$1 === "PageUp") {
      if (pageStep) {
        adjustment = value + pageStep;
      }
    }
    else if (key$1 === "PageDown") {
      if (pageStep) {
        adjustment = value - pageStep;
      }
    }
    else if (key$1 === "Home") {
      adjustment = min;
    }
    else if (key$1 === "End") {
      adjustment = max;
    }
    if (isNaN(adjustment)) {
      return;
    }
    event.preventDefault();
    this.setValue(activeProp, this.clamp(adjustment, activeProp));
  }
  clickHandler(event) {
    this.focusActiveHandle(event.clientX);
  }
  pointerDownHandler(event) {
    const x = event.clientX || event.pageX;
    const position = this.translate(x);
    let prop = "value";
    if (this.isRange) {
      const inRange = position >= this.minValue && position <= this.maxValue;
      if (inRange && this.lastDragProp === "minMaxValue") {
        prop = "minMaxValue";
      }
      else {
        const closerToMax = Math.abs(this.maxValue - position) < Math.abs(this.minValue - position);
        prop = closerToMax || position > this.maxValue ? "maxValue" : "minValue";
      }
    }
    this.lastDragPropValue = this[prop];
    this.dragStart(prop);
    const isThumbActive = this.el.shadowRoot.querySelector(".thumb:active");
    if (!isThumbActive) {
      this.setValue(prop, this.clamp(position, prop));
    }
  }
  handleTouchStart(event) {
    // needed to prevent extra click at the end of a handle drag
    event.preventDefault();
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    const handle = this.minHandle ? this.minHandle : this.maxHandle;
    handle.focus();
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  onLabelClick() {
    this.setFocus();
  }
  shouldMirror() {
    return this.mirrored && !this.hasHistogram;
  }
  shouldUseMinValue() {
    if (!this.isRange) {
      return false;
    }
    return ((this.hasHistogram && this.maxValue === 0) || (!this.hasHistogram && this.minValue === 0));
  }
  generateTickValues() {
    const ticks = [];
    let current = this.min;
    while (this.ticks && current < this.max + this.ticks) {
      ticks.push(Math.min(current, this.max));
      current = current + this.ticks;
    }
    return ticks;
  }
  dragStart(prop) {
    this.dragProp = prop;
    this.lastDragProp = this.dragProp;
    this.activeProp = prop;
    document.addEventListener("pointermove", this.dragUpdate);
    document.addEventListener("pointerup", this.dragEnd);
    document.addEventListener("pointercancel", this.dragEnd);
  }
  focusActiveHandle(valueX) {
    switch (this.dragProp) {
      case "minValue":
        this.minHandle.focus();
        break;
      case "maxValue":
        this.maxHandle.focus();
        break;
      case "minMaxValue":
        this.getClosestHandle(valueX).focus();
        break;
    }
  }
  emitInput() {
    this.calciteSliderInput.emit();
    this.calciteSliderUpdate.emit();
  }
  emitChange() {
    this.calciteSliderChange.emit();
  }
  /**
   * Set the prop value if changed at the component level
   * @param valueProp
   * @param value
   */
  setValue(valueProp, value) {
    const oldValue = this[valueProp];
    const valueChanged = oldValue !== value;
    if (!valueChanged) {
      return;
    }
    this[valueProp] = value;
    const dragging = this.dragProp;
    if (!dragging) {
      this.emitChange();
    }
    this.emitInput();
  }
  /**
   * If number is outside range, constrain to min or max
   * @internal
   */
  clamp(value, prop) {
    value = math.clamp(value, this.min, this.max);
    // ensure that maxValue and minValue don't swap positions
    if (prop === "maxValue") {
      value = Math.max(value, this.minValue);
    }
    if (prop === "minValue") {
      value = Math.min(value, this.maxValue);
    }
    return value;
  }
  /**
   * Translate a pixel position to value along the range
   * @internal
   */
  translate(x) {
    const range = this.max - this.min;
    const { left, width } = this.trackEl.getBoundingClientRect();
    const percent = (x - left) / width;
    const mirror = this.shouldMirror();
    let value = this.clamp(this.min + range * (mirror ? 1 - percent : percent));
    if (this.snap && this.step) {
      value = this.getClosestStep(value);
    }
    return value;
  }
  /**
   * Get closest allowed value along stepped values
   * @internal
   */
  getClosestStep(num) {
    num = this.clamp(num);
    if (this.step) {
      const step = Math.round(num / this.step) * this.step;
      num = this.clamp(step);
    }
    return num;
  }
  getClosestHandle(valueX) {
    return this.getDistanceX(this.maxHandle, valueX) > this.getDistanceX(this.minHandle, valueX)
      ? this.minHandle
      : this.maxHandle;
  }
  getDistanceX(el, valueX) {
    return Math.abs(el.getBoundingClientRect().left - valueX);
  }
  getFontSizeForElement(element) {
    return Number(window.getComputedStyle(element).getPropertyValue("font-size").match(/\d+/)[0]);
  }
  /**
   * Get position of value along range as fractional value
   * @return {number} number in the unit interval [0,1]
   * @internal
   */
  getUnitInterval(num) {
    num = this.clamp(num);
    const range = this.max - this.min;
    return (num - this.min) / range;
  }
  adjustHostObscuredHandleLabel(name) {
    const label = this.el.shadowRoot.querySelector(`.handle__label--${name}`);
    const labelStatic = this.el.shadowRoot.querySelector(`.handle__label--${name}.static`);
    const labelTransformed = this.el.shadowRoot.querySelector(`.handle__label--${name}.transformed`);
    const labelStaticBounds = labelStatic.getBoundingClientRect();
    const labelStaticOffset = this.getHostOffset(labelStaticBounds.left, labelStaticBounds.right);
    label.style.transform = `translateX(${labelStaticOffset}px)`;
    labelTransformed.style.transform = `translateX(${labelStaticOffset}px)`;
  }
  hyphenateCollidingRangeHandleLabels() {
    const { shadowRoot } = this.el;
    const mirror = this.shouldMirror();
    const leftModifier = mirror ? "value" : "minValue";
    const rightModifier = mirror ? "minValue" : "value";
    const leftValueLabel = shadowRoot.querySelector(`.handle__label--${leftModifier}`);
    const leftValueLabelStatic = shadowRoot.querySelector(`.handle__label--${leftModifier}.static`);
    const leftValueLabelTransformed = shadowRoot.querySelector(`.handle__label--${leftModifier}.transformed`);
    const leftValueLabelStaticHostOffset = this.getHostOffset(leftValueLabelStatic.getBoundingClientRect().left, leftValueLabelStatic.getBoundingClientRect().right);
    const rightValueLabel = shadowRoot.querySelector(`.handle__label--${rightModifier}`);
    const rightValueLabelStatic = shadowRoot.querySelector(`.handle__label--${rightModifier}.static`);
    const rightValueLabelTransformed = shadowRoot.querySelector(`.handle__label--${rightModifier}.transformed`);
    const rightValueLabelStaticHostOffset = this.getHostOffset(rightValueLabelStatic.getBoundingClientRect().left, rightValueLabelStatic.getBoundingClientRect().right);
    const labelFontSize = this.getFontSizeForElement(leftValueLabel);
    const labelTransformedOverlap = this.getRangeLabelOverlap(leftValueLabelTransformed, rightValueLabelTransformed);
    const hyphenLabel = leftValueLabel;
    const labelOffset = labelFontSize / 2;
    if (labelTransformedOverlap > 0) {
      hyphenLabel.classList.add("hyphen");
      if (rightValueLabelStaticHostOffset === 0 && leftValueLabelStaticHostOffset === 0) {
        // Neither handle overlaps the host boundary
        let leftValueLabelTranslate = labelTransformedOverlap / 2 - labelOffset;
        leftValueLabelTranslate =
          Math.sign(leftValueLabelTranslate) === -1
            ? Math.abs(leftValueLabelTranslate)
            : -leftValueLabelTranslate;
        const leftValueLabelTransformedHostOffset = this.getHostOffset(leftValueLabelTransformed.getBoundingClientRect().left +
          leftValueLabelTranslate -
          labelOffset, leftValueLabelTransformed.getBoundingClientRect().right +
          leftValueLabelTranslate -
          labelOffset);
        let rightValueLabelTranslate = labelTransformedOverlap / 2;
        const rightValueLabelTransformedHostOffset = this.getHostOffset(rightValueLabelTransformed.getBoundingClientRect().left + rightValueLabelTranslate, rightValueLabelTransformed.getBoundingClientRect().right + rightValueLabelTranslate);
        if (leftValueLabelTransformedHostOffset !== 0) {
          leftValueLabelTranslate += leftValueLabelTransformedHostOffset;
          rightValueLabelTranslate += leftValueLabelTransformedHostOffset;
        }
        if (rightValueLabelTransformedHostOffset !== 0) {
          leftValueLabelTranslate += rightValueLabelTransformedHostOffset;
          rightValueLabelTranslate += rightValueLabelTransformedHostOffset;
        }
        leftValueLabel.style.transform = `translateX(${leftValueLabelTranslate}px)`;
        leftValueLabelTransformed.style.transform = `translateX(${leftValueLabelTranslate - labelOffset}px)`;
        rightValueLabel.style.transform = `translateX(${rightValueLabelTranslate}px)`;
        rightValueLabelTransformed.style.transform = `translateX(${rightValueLabelTranslate}px)`;
      }
      else if (leftValueLabelStaticHostOffset > 0 || rightValueLabelStaticHostOffset > 0) {
        // labels overlap host boundary on the left side
        leftValueLabel.style.transform = `translateX(${leftValueLabelStaticHostOffset + labelOffset}px)`;
        rightValueLabel.style.transform = `translateX(${labelTransformedOverlap + rightValueLabelStaticHostOffset}px)`;
        rightValueLabelTransformed.style.transform = `translateX(${labelTransformedOverlap + rightValueLabelStaticHostOffset}px)`;
      }
      else if (leftValueLabelStaticHostOffset < 0 || rightValueLabelStaticHostOffset < 0) {
        // labels overlap host boundary on the right side
        let leftValueLabelTranslate = Math.abs(leftValueLabelStaticHostOffset) + labelTransformedOverlap - labelOffset;
        leftValueLabelTranslate =
          Math.sign(leftValueLabelTranslate) === -1
            ? Math.abs(leftValueLabelTranslate)
            : -leftValueLabelTranslate;
        leftValueLabel.style.transform = `translateX(${leftValueLabelTranslate}px)`;
        leftValueLabelTransformed.style.transform = `translateX(${leftValueLabelTranslate - labelOffset}px)`;
      }
    }
    else {
      hyphenLabel.classList.remove("hyphen");
      leftValueLabel.style.transform = `translateX(${leftValueLabelStaticHostOffset}px)`;
      leftValueLabelTransformed.style.transform = `translateX(${leftValueLabelStaticHostOffset}px)`;
      rightValueLabel.style.transform = `translateX(${rightValueLabelStaticHostOffset}px)`;
      rightValueLabelTransformed.style.transform = `translateX(${rightValueLabelStaticHostOffset}px)`;
    }
  }
  /**
   * Hides bounding tick labels that are obscured by either handle.
   */
  hideObscuredBoundingTickLabels() {
    if (!this.hasHistogram && !this.isRange && !this.labelHandles && !this.precise) {
      return;
    }
    if (!this.hasHistogram && !this.isRange && this.labelHandles && !this.precise) {
      return;
    }
    if (!this.hasHistogram && !this.isRange && !this.labelHandles && this.precise) {
      return;
    }
    if (!this.hasHistogram && !this.isRange && this.labelHandles && this.precise) {
      return;
    }
    if (!this.hasHistogram && this.isRange && !this.precise) {
      return;
    }
    if (this.hasHistogram && !this.precise && !this.labelHandles) {
      return;
    }
    const minHandle = this.el.shadowRoot.querySelector(".thumb--minValue");
    const maxHandle = this.el.shadowRoot.querySelector(".thumb--value");
    const minTickLabel = this.el.shadowRoot.querySelector(".tick__label--min");
    const maxTickLabel = this.el.shadowRoot.querySelector(".tick__label--max");
    if (!minHandle && maxHandle && minTickLabel && maxTickLabel) {
      minTickLabel.style.opacity = this.isMinTickLabelObscured(minTickLabel, maxHandle) ? "0" : "1";
      maxTickLabel.style.opacity = this.isMaxTickLabelObscured(maxTickLabel, maxHandle) ? "0" : "1";
    }
    if (minHandle && maxHandle && minTickLabel && maxTickLabel) {
      minTickLabel.style.opacity =
        this.isMinTickLabelObscured(minTickLabel, minHandle) ||
          this.isMinTickLabelObscured(minTickLabel, maxHandle)
          ? "0"
          : "1";
      maxTickLabel.style.opacity =
        this.isMaxTickLabelObscured(maxTickLabel, minHandle) ||
          (this.isMaxTickLabelObscured(maxTickLabel, maxHandle) && this.hasHistogram)
          ? "0"
          : "1";
    }
  }
  /**
   * Returns an integer representing the number of pixels to offset on the left or right side based on desired position behavior.
   * @internal
   */
  getHostOffset(leftBounds, rightBounds) {
    const hostBounds = this.el.getBoundingClientRect();
    const buffer = 7;
    if (leftBounds + buffer < hostBounds.left) {
      return hostBounds.left - leftBounds - buffer;
    }
    if (rightBounds - buffer > hostBounds.right) {
      return -(rightBounds - hostBounds.right) + buffer;
    }
    return 0;
  }
  /**
   * Returns an integer representing the number of pixels that the two given span elements are overlapping, taking into account
   * a space in between the two spans equal to the font-size set on them to account for the space needed to render a hyphen.
   * @param leftLabel
   * @param rightLabel
   */
  getRangeLabelOverlap(leftLabel, rightLabel) {
    const leftLabelBounds = leftLabel.getBoundingClientRect();
    const rightLabelBounds = rightLabel.getBoundingClientRect();
    const leftLabelFontSize = this.getFontSizeForElement(leftLabel);
    const rangeLabelOverlap = leftLabelBounds.right + leftLabelFontSize - rightLabelBounds.left;
    return Math.max(rangeLabelOverlap, 0);
  }
  /**
   * Returns a boolean value representing if the minLabel span element is obscured (being overlapped) by the given handle button element.
   * @param minLabel
   * @param handle
   */
  isMinTickLabelObscured(minLabel, handle) {
    const minLabelBounds = minLabel.getBoundingClientRect();
    const handleBounds = handle.getBoundingClientRect();
    return dom.intersects(minLabelBounds, handleBounds);
  }
  /**
   * Returns a boolean value representing if the maxLabel span element is obscured (being overlapped) by the given handle button element.
   * @param maxLabel
   * @param handle
   */
  isMaxTickLabelObscured(maxLabel, handle) {
    const maxLabelBounds = maxLabel.getBoundingClientRect();
    const handleBounds = handle.getBoundingClientRect();
    return dom.intersects(maxLabelBounds, handleBounds);
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "histogram": ["histogramWatcher"]
  }; }
};
CalciteSlider.style = calciteSliderCss;

exports.calcite_slider = CalciteSlider;
