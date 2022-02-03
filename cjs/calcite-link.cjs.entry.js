'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dad2b533.js');
const dom = require('./dom-c158885c.js');
require('./guid-1ecb63ba.js');

const calciteLinkCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host a,:host span{display:flex;position:relative;align-items:center;justify-content:center;border-radius:0;border-style:none;font-family:inherit;cursor:pointer;transition-property:all;transition-duration:150ms;transition-timing-function:ease-in-out;transition-delay:0s;text-decoration:none;line-height:inherit;font-size:inherit;-webkit-appearance:none}:host a:hover,:host span:hover{text-decoration:none}:host a,:host span{outline-offset:0;outline-color:transparent;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host a:focus,:host span:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}calcite-icon{width:1em;height:1em;min-width:unset;min-height:unset}.calcite-link--icon{transition-property:all;transition-duration:150ms;transition-timing-function:ease-in-out;transition-delay:0s;vertical-align:text-top;margin-top:0.125rem}:host([disabled]){pointer-events:none}:host([disabled]) span,:host([disabled]) a{pointer-events:none;opacity:var(--calcite-ui-opacity-disabled)}:host .calcite-link--icon.icon-start{margin-right:0.5rem}.calcite--rtl .calcite-link--icon.icon-start{margin-right:0;margin-left:0.5rem}:host .calcite-link--icon.icon-end{margin-left:0.5rem}.calcite--rtl .calcite-link--icon.icon-end{margin-left:0;margin-right:0.5rem}:host span,:host a{display:inline;padding:0;border-style:none;background-color:transparent;position:relative;color:var(--calcite-ui-text-link);line-height:inherit;white-space:initial;background-image:linear-gradient(currentColor, currentColor), linear-gradient(var(--calcite-link-blue-underline), var(--calcite-link-blue-underline));background-position:0% 100%, 100% 100%;background-repeat:no-repeat, no-repeat;background-size:0% 1px, 100% 1px;transition:all 0.15s ease-in-out, background-size 0.3s ease-in-out}:host span:hover,:host span:focus,:host a:hover,:host a:focus{background-size:100% 1px, 100% 1px}:host span:active,:host a:active{background-size:100% 2px, 100% 2px}span.calcite--rtl,a.calcite--rtl{background-position:100% 100%, 100% 100%}";

let CalciteLink = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** is the link disabled  */
    this.disabled = false;
    /** the node type of the rendered child element */
    this.childElType = "span";
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.storeTagRef = (el) => {
      this.childEl = el;
    };
  }
  hrefHandler(href) {
    this.childElType = href ? "a" : "span";
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.childElType = this.href ? "a" : "span";
  }
  render() {
    const dir = dom.getElementDir(this.el);
    const iconStartEl = (index.h("calcite-icon", { class: "calcite-link--icon icon-start", flipRtl: this.iconFlipRtl === "start" || this.iconFlipRtl === "both", icon: this.iconStart, scale: "s" }));
    const iconEndEl = (index.h("calcite-icon", { class: "calcite-link--icon icon-end", flipRtl: this.iconFlipRtl === "end" || this.iconFlipRtl === "both", icon: this.iconEnd, scale: "s" }));
    const Tag = this.childElType;
    const role = this.childElType === "span" ? "link" : null;
    const tabIndex = this.disabled ? -1 : this.childElType === "span" ? 0 : null;
    return (index.h(index.Host, { role: "presentation" }, index.h(Tag, { class: { [dom.CSS_UTILITY.rtl]: dir === "rtl" }, dir: dir, href: Tag === "a" && this.href, ref: this.storeTagRef, rel: Tag === "a" && this.rel, role: role, tabIndex: tabIndex, target: Tag === "a" && this.target }, this.iconStart ? iconStartEl : null, index.h("slot", null), this.iconEnd ? iconEndEl : null)));
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    dom.focusElement(this.childEl);
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "href": ["hrefHandler"]
  }; }
};
CalciteLink.style = calciteLinkCss;

exports.calcite_link = CalciteLink;
