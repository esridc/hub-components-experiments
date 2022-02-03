import { r as registerInstance, h, g as getElement } from './index-9fca3863.js';
import { c as color } from './index-c0a4c2b9.js';
import { d as getThemeName } from './dom-b47352c7.js';
import './_commonjsHelpers-10467d11.js';
import './guid-ec8a882c.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const CSS = {
  swatch: "swatch",
  noColorIcon: "no-color-icon"
};
const COLORS = {
  borderLight: "rgba(0, 0, 0, 0.15)",
  borderDark: "rgba(255, 255, 255, 0.15)"
};

const calciteColorPickerSwatchCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:inline-flex;position:relative}:host([scale=s]){height:1.25rem;width:1.25rem}:host([scale=m]){height:1.5rem;width:1.5rem}:host([scale=l]){height:2rem;width:2rem}.swatch{overflow:visible;height:inherit;width:inherit}.swatch rect{transition-property:all;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.no-color-icon{height:100%;width:100%;top:0;right:0;bottom:0;left:0;position:absolute}";

let CalciteColorPickerSwatch = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /**
     * Used to display whether the swatch is active or not.
     */
    this.active = false;
    /**
     * The component scale.
     */
    this.scale = "m";
  }
  handleColorChange(color$1) {
    this.internalColor = color(color$1);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    this.handleColorChange(this.color);
  }
  render() {
    const { active, el, internalColor } = this;
    const borderRadius = active ? "100%" : "0";
    const hex = internalColor.hex();
    const theme = getThemeName(el);
    const borderColor = theme === "light" ? COLORS.borderLight : COLORS.borderDark;
    return (h("svg", { class: CSS.swatch, xmlns: "http://www.w3.org/2000/svg" }, h("title", null, hex), h("rect", { fill: hex, height: "100%", id: "swatch", rx: borderRadius, stroke: borderColor, "stroke-width": "2", style: { "clip-path": `inset(0 round ${borderRadius})` }, width: "100%" })));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "color": ["handleColorChange"]
  }; }
};
CalciteColorPickerSwatch.style = calciteColorPickerSwatchCss;

export { CalciteColorPickerSwatch as calcite_color_picker_swatch };
