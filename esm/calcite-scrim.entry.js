import { r as registerInstance, h, g as getElement } from './index-9fca3863.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const CSS = {
  scrim: "scrim",
  content: "content"
};
const TEXT = {
  loading: "Loading"
};

const calciteScrimCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:flex;position:absolute;z-index:50;flex-direction:column;align-items:stretch;width:100%;height:100%;top:0;right:0;bottom:0;left:0}@keyframes calcite-scrim-fade-in{0%{--bg-opacity:0}100%{--text-opacity:1}}.scrim{display:flex;position:absolute;overflow:hidden;top:0;right:0;bottom:0;left:0;align-content:center;align-items:center;flex-direction:column;justify-content:center;animation:calcite-scrim-fade-in 250ms ease-in-out;background-color:var(--calcite-scrim-background)}.content{padding:1rem}";

let CalciteScrim = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /** string to override English loading text
     * @default "Loading"
     */
    this.intlLoading = TEXT.loading;
    /**
     * Determines if the component will have the loader overlay.
     * Otherwise, will render opaque disabled state.
     */
    this.loading = false;
  }
  // --------------------------------------------------------------------------
  //
  //  Render Method
  //
  // --------------------------------------------------------------------------
  render() {
    const { el, loading, intlLoading } = this;
    const hasContent = el.innerHTML.trim().length > 0;
    const loaderNode = loading ? h("calcite-loader", { active: true, label: intlLoading }) : null;
    const contentNode = hasContent ? (h("div", { class: CSS.content }, h("slot", null))) : null;
    return (h("div", { class: CSS.scrim }, loaderNode, contentNode));
  }
  get el() { return getElement(this); }
};
CalciteScrim.style = calciteScrimCss;

export { CalciteScrim as calcite_scrim };
