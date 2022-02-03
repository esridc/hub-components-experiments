import{f as t,a as s,g as i}from"./p-e14d02bd.js";import{g as n}from"./p-b680e425.js";import{d as e}from"./p-58421494.js";import{h as r,H as o}from"./p-d703c309.js";import{C as a,S as l}from"./p-946864b0.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */function c(){this.setUpItems(),this.setUpFilter()}const h=["ArrowUp","ArrowDown"];function u(){this.setUpItems(),this.setUpFilter(),this.emitCalciteListChange=e(v.bind(this),0)}function f(){var t;null===(t=this.mutationObserver)||void 0===t||t.observe(this.el,{childList:!0,subtree:!0})}function d(){var t;null===(t=this.mutationObserver)||void 0===t||t.disconnect()}function p(s){const{selectedValues:i}=this,{item:n,value:e,selected:r,shiftPressed:o}=s.detail;r?(this.multiple&&o&&this.selectSiblings(n),this.multiple||this.deselectSiblingItems(n),i.set(e,n)):(i.delete(e),this.multiple&&o&&this.selectSiblings(n,!0)),this.multiple||(F(n,r),r&&t(n)),this.lastSelectedItem=n,this.emitCalciteListChange()}function m(t){t.stopPropagation();const s=t.detail.oldValue,i=this.selectedValues;if(i.has(s)){const n=i.get(s);i.delete(s),i.set(t.detail.newValue,n)}}function b(t){const{el:s,items:i,multiple:n,selectedValues:e}=this;n||(s.contains(t.relatedTarget)?F(t.target,!1):i.forEach((s=>F(s,0===e.size?t.target===s:s.selected))))}function j(s){const{key:i,target:e}=s;if(!function(t){return!!h.find((s=>s===t))}(i))return;const{items:r,multiple:o,selectionFollowsFocus:a}=this,{length:l}=r,c=r.indexOf(e);if(!l||-1===c)return;s.preventDefault();const u=r[n(c+("ArrowUp"===i?-1:1),l)];r.forEach((t=>F(t,t===u))),!o&&a&&(u.selected=!0),t(u)}function v(){this.calciteListChange.emit(this.selectedValues)}function g(t){if(t.defaultPrevented)return;const s=t.target,i=this.selectedValues;"CALCITE-PICK-LIST-GROUP"===s.parentElement.tagName?(s.parentElement.remove(),Array.from(s.parentElement.children).forEach((t=>i.delete(t.value)))):(s.remove(),i.delete(s.value)),this.emitCalciteListChange()}function F(t,s){s?t.removeAttribute("tabindex"):t.setAttribute("tabindex","-1")}async function w(s){if(this.filterEnabled&&"filter"===s)return void await t(this.filterEl);const{items:i,multiple:n,selectionFollowsFocus:e}=this;if(0===i.length)return;if(n)return i[0].setFocus();const r=i.find((t=>t.selected))||i[0];return e&&(r.selected=!0),r.setFocus()}function y(t){this.items=Array.from(this.el.querySelectorAll(t));let s=!1;const{items:i}=this;i.forEach((t=>{t.icon=this.getIconType(),this.multiple||(t.disableDeselect=!0,F(t,!1)),t.selected&&(s=!0,F(t,!0),this.selectedValues.set(t.value,t))}));const[n]=i;!s&&n&&F(n,!0)}function A(t){this.items.forEach((s=>{s.value!==t.value&&(s.toggleSelected(!1),this.selectedValues.has(s.value)&&this.selectedValues.delete(s.value))}))}function C(t,s=!1){if(!this.lastSelectedItem)return;const{items:i}=this,n=i.findIndex((t=>t.value===this.lastSelectedItem.value)),e=i.findIndex((s=>s.value===t.value));i.slice(Math.min(n,e),Math.max(n,e)).forEach((t=>{t.toggleSelected(!s),s?this.selectedValues.delete(t.value):this.selectedValues.set(t.value,t)}))}let O;function L(t){const i=t.detail.map((t=>t.value));let n=!1;O||(O=new Set);const e=this.items.filter((t=>{const s=t.parentElement;s.matches("calcite-pick-list-group")&&O.add(s);const e=i.includes(t.value);return t.hidden=!e,n||(n=e&&t.selected),e}));O.forEach((t=>{const i=e.some((s=>t.contains(s)));if(t.hidden=!i,!i)return;const n=s(t,"parent-item");n&&(n.hidden=!1,e.includes(n)&&Array.from(t.children).forEach((t=>t.hidden=!1)))})),O.clear(),e.length>0&&!n&&!this.multiple&&F(e[0],!0)}function P(){return this.items.map((t=>({label:t.label,description:t.description,metadata:t.metadata,value:t.value})))}
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */const k=t=>{var{props:{disabled:s,loading:n,filterEnabled:e,dataForFilter:c,handleFilter:h,filterPlaceholder:u,el:f,setFilterEl:d}}=t,p=function(t,s){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&s.indexOf(n)<0&&(i[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var e=0;for(n=Object.getOwnPropertySymbols(t);e<n.length;e++)s.indexOf(n[e])<0&&Object.prototype.propertyIsEnumerable.call(t,n[e])&&(i[n[e]]=t[n[e]])}return i}(t,["props"]);const m=r("slot",null);return r(o,Object.assign({"aria-busy":n.toString(),"aria-disabled":s.toString(),role:"menu"},p),r("section",null,r("header",{class:{[a.sticky]:!0}},e?r("calcite-filter",{"aria-label":u,data:c,dir:i(f),disabled:n||s,onCalciteFilterChange:h,placeholder:u,ref:d}):null,r("slot",{name:l.menuActions})),n||s?r("calcite-scrim",{loading:n}):null,m))};export{k as L,f as a,p as b,d as c,A as d,m as e,b as f,P as g,L as h,u as i,y as j,j as k,w as l,c as m,g as r,C as s}