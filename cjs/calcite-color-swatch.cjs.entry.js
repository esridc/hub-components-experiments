'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ad6d6974.js');
require('./_commonjsHelpers-72d386ba.js');
const index$1 = require('./index-0766ff9f.js');

const CSS = {
  swatch: "swatch",
  noColorIcon: "no-color-icon"
};
const COLORS = {
  emptyFill: "rgba(0, 0, 0, 0)",
  activeBorder: "rgba(0, 0, 0, 0.15)"
};

const calciteColorSwatchCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-inline-flexbox;display:inline-flex;position:relative}:host([scale=s]){height:20px;width:20px}:host([scale=m]){height:24px;width:24px}:host([scale=l]){height:28px;width:28px}.swatch{height:inherit;width:inherit;overflow:visible}.swatch rect{-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out}.no-color-icon{height:100%;width:100%;top:0;left:0;bottom:0;right:0;position:absolute}";

const CalciteColorSwatch = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        /**
         * The component's theme.
         */
        this.theme = "light";
    }
    handleColorChange(color) {
        this.internalColor = index$1.Color(color);
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
        const { active, internalColor, theme } = this;
        const borderRadius = active ? "100%" : "0";
        const hex = internalColor.hex();
        const borderColor = active
            ? COLORS.activeBorder
            : internalColor[theme === "light" ? "darken" : "whiten"](0.25).hex();
        return (index.h(index.Host, { "aria-label": hex, title: hex }, index.h("svg", { class: CSS.swatch, xmlns: "http://www.w3.org/2000/svg" }, index.h("rect", { fill: hex, height: "100%", rx: borderRadius, stroke: borderColor, width: "100%" }))));
    }
    static get watchers() { return {
        "color": ["handleColorChange"]
    }; }
};
CalciteColorSwatch.style = calciteColorSwatchCss;

exports.calcite_color_swatch = CalciteColorSwatch;
