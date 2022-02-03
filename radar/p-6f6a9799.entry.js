import{r as t,c as i,h as e,F as a,g as n}from"./p-d703c309.js";import{f as r,g as s,C as o}from"./p-e14d02bd.js";import{d as c}from"./p-58421494.js";import{f as l}from"./p-caf80cd7.js";import"./p-0b4cf4f0.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */let p=class{constructor(e){t(this,e),this.calciteFilterChange=i(this,"calciteFilterChange",7),this.disabled=!1,this.filteredItems=[],this.filter=c((t=>{const i=new RegExp(t,"i");if(0===this.items.length)return void this.updateFiltered([]);const e=(t,i)=>{let a=!1;return l(t,(t=>{"function"!=typeof t&&(Array.isArray(t)||"object"==typeof t&&null!==t?e(t,i)&&(a=!0):i.test(t)&&(a=!0))})),a},a=this.items.filter((t=>e(t,i)));this.updateFiltered(a)}),250),this.inputHandler=t=>{this.value=t.target.value},this.keyDownHandler=({key:t})=>{"Escape"===t&&this.clear()},this.clear=()=>{this.value="",this.setFocus()}}watchDataHandler(t){this.items=t}watchItemsHandler(){this.filter(this.value)}valueHandler(t){this.filter(t)}connectedCallback(){this.data&&!this.items&&(this.items=this.data)}async setFocus(){r(this.textInput)}updateFiltered(t){this.filteredItems.length=0,this.filteredItems=this.filteredItems.concat(t),this.calciteFilterChange.emit(t)}render(){const t="rtl"===s(this.el),{disabled:i}=this;return e(a,null,i?e("calcite-scrim",null):null,e("div",{class:"container"},e("label",{class:t?o.rtl:null},e("calcite-input",{"aria-label":this.intlLabel||"Filter",class:t?o.rtl:null,disabled:this.disabled,icon:"search",onCalciteInputInput:this.inputHandler,onKeyDown:this.keyDownHandler,placeholder:this.placeholder,ref:t=>{this.textInput=t},type:"text",value:this.value})),this.value?e("button",{"aria-label":this.intlClear||"Clear filter",class:"clear-button",onClick:this.clear},e("calcite-icon",{icon:"x"})):null))}get el(){return n(this)}static get watchers(){return{data:["watchDataHandler"],items:["watchItemsHandler"],value:["valueHandler"]}}};p.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:flex;width:100%}.container{display:flex;width:100%;padding:0.5rem}label{display:flex;align-items:center;overflow:hidden;position:relative;width:100%;margin-left:0.25rem;margin-right:0.25rem;margin-top:0;margin-bottom:0}input[type=text]{background-color:transparent;border-style:none;font-family:inherit;color:var(--calcite-ui-text-1);font-size:var(--calcite-font-size--2);line-height:1rem;margin-bottom:0.25rem;width:100%;padding-top:0.25rem;padding-bottom:0.25rem;padding-right:0.25rem;padding-left:1.5rem;transition:padding 150ms ease-in-out, box-shadow 150ms ease-in-out}input[type=text]::-ms-clear{display:none}calcite-input{width:100%}.search-icon{display:flex;left:0;position:absolute;color:var(--calcite-ui-text-2);transition:left 150ms ease-in-out, right 150ms ease-in-out, opacity 150ms ease-in-out}.calcite--rtl .search-icon{right:0}input[type=text]:focus{border-color:var(--calcite-ui-brand);outline:2px solid transparent;outline-offset:2px;padding-left:0.25rem;padding-right:0.25rem}input[type=text]:focus~.search-icon{left:calc(1rem * -1);opacity:0}.calcite--rtl input[type=text]{padding-left:0.25rem;padding-right:1.5rem}.calcite--rtl input[type=text]:focus{padding-right:1.25rem}.calcite--rtl input[type=text]:focus~.search-icon{right:calc(1rem * -1)}.clear-button{color:var(--calcite-ui-text-2);background-color:transparent;border-width:0;cursor:pointer;display:flex;align-items:center}.clear-button:hover,.clear-button:focus{color:var(--calcite-ui-text-1)}";export{p as calcite_filter}