import{r as i,c as t,h as e,H as o,g as a}from"./p-d703c309.js";import{e as c,g as n,C as l}from"./p-e14d02bd.js";import{g as s}from"./p-0b4cf4f0.js";import{e as r,f as m}from"./p-8b92baa2.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */let d=class{constructor(e){i(this,e),this.calciteComboboxItemChange=t(this,"calciteComboboxItemChange",7),this.disabled=!1,this.selected=!1,this.active=!1,this.guid=s(),this.scale="m",this.itemClickHandler=i=>{i.preventDefault(),this.disabled||(this.selected=!this.selected)}}selectedWatchHandler(){this.calciteComboboxItemChange.emit(this.el)}connectedCallback(){this.ancestors=r(this.el),this.scale=c(this.el,"scale",this.scale)}componentWillLoad(){this.hasDefaultSlot=null!==this.el.querySelector(":not([slot])")}async toggleSelected(i){this.disabled||(this.selected="boolean"==typeof i?i:!this.selected)}renderIcon(i){const{icon:t,disabled:o,selected:a}=this,c="icon--indent";return!i||t||o?e("calcite-icon",{class:{icon:!t,"icon--custom":!!t,"icon--active":t&&a,[c]:!0},icon:t||(o?"circle-disallowed":i?"dot":"check"),scale:"s"}):e("span",{class:{icon:!0,"icon--dot":!0,[c]:!0}})}renderChildren(){return this.hasDefaultSlot?e("ul",null,e("slot",null)):null}render(){const i="single"===c(this.el,"selection-mode","multi"),t=n(this.el),a={[l.rtl]:"rtl"===t,label:!0,"label--selected":this.selected,"label--active":this.active,"label--single":i},s=m(this.el);return e(o,{"aria-hidden":"true"},e("div",{class:`container scale--${this.scale}`,style:{"--calcite-combobox-item-spacing-indent-multiplier":`${s}`}},e("li",{class:a,id:this.guid,onClick:this.itemClickHandler},this.renderIcon(i),e("span",{class:"title"},this.textLabel)),this.renderChildren()))}get el(){return a(this)}static get watchers(){return{selected:["selectedWatchHandler"]}}};d.style='@charset "UTF-8";@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}.scale--s{font-size:var(--calcite-font-size--2);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-item-spacing-indent:0.5rem}.scale--m{font-size:var(--calcite-font-size--1);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-item-spacing-indent:0.75rem}.scale--l{font-size:var(--calcite-font-size-0);line-height:1.25rem;--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-item-spacing-indent:1rem}.container{--calcite-combobox-item-indent-value:calc(\n    var(--calcite-combobox-item-spacing-indent) * var(--calcite-combobox-item-spacing-indent-multiplier)\n  );--calcite-combobox-item-indent-start:var(--calcite-combobox-item-indent-value);--calcite-combobox-item-indent-end:unset}.calcite--rtl{--calcite-combobox-item-indent-start:unset;--calcite-combobox-item-indent-end:var(--calcite-combobox-item-indent-value)}:host(:focus){box-shadow:none}:host,ul{display:flex;flex-direction:column;margin:0;padding:0;outline:2px solid transparent;outline-offset:2px}.label{display:flex;box-sizing:border-box;width:100%;min-width:100%;align-items:center;color:var(--calcite-ui-text-3);cursor:pointer;position:relative;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);outline-offset:0;outline-color:transparent;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;text-decoration:none;padding:var(--calcite-combobox-item-spacing-unit-s) var(--calcite-combobox-item-spacing-unit-l)}:host([disabled]) .label{cursor:default}.label--selected{color:var(--calcite-ui-text-1);font-weight:var(--calcite-font-weight-medium)}.label--active{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.label:hover,.label:active{color:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-2);box-shadow:none;text-decoration:none}.title{padding:0 var(--calcite-combobox-item-spacing-unit-l)}.icon{display:inline-flex;opacity:0;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);color:var(--calcite-ui-border-1)}.icon--indent{padding-left:var(--calcite-combobox-item-indent-start);padding-right:var(--calcite-combobox-item-indent-end)}.icon--custom{margin-top:-1px;color:var(--calcite-ui-text-3)}.icon--active{color:var(--calcite-ui-text-1)}.icon--dot{display:flex;justify-content:flex-end;width:var(--calcite-combobox-item-spacing-unit-l)}.icon--dot:before{content:"•"}.calcite--rtl .icon--dot:before{text-align:right}.label--active .icon{opacity:1}.label--selected .icon{opacity:1;color:var(--calcite-ui-brand)}:host(:hover[disabled]) .icon{opacity:1}';export{d as calcite_combobox_item}