import{r as t,c as i,h as e,F as a,g as n}from"./p-d703c309.js";import{T as o,I as s,C as r,S as c}from"./p-79bc8b75.js";import{I as l}from"./p-946864b0.js";import{a as h}from"./p-e14d02bd.js";import"./p-0b4cf4f0.js";let d=class{constructor(e){t(this,e),this.calciteListItemChange=i(this,"calciteListItemChange",7),this.calciteListItemRemove=i(this,"calciteListItemRemove",7),this.calciteListItemPropsChange=i(this,"calciteListItemPropsChange",7),this.calciteListItemValueChange=i(this,"calciteListItemValueChange",7),this.disabled=!1,this.disableDeselect=!1,this.nonInteractive=!1,this.icon=null,this.removable=!1,this.selected=!1,this.intlRemove=o.remove,this.pickListClickHandler=t=>{this.disabled||this.disableDeselect&&this.selected||this.nonInteractive||(this.shiftPressed=t.shiftKey,this.selected=!this.selected)},this.pickListKeyDownHandler=t=>{if(" "===t.key){if(t.preventDefault(),this.disableDeselect&&this.selected||this.nonInteractive)return;this.selected=!this.selected}},this.removeClickHandler=()=>{this.calciteListItemRemove.emit()}}descriptionWatchHandler(){this.calciteListItemPropsChange.emit()}labelWatchHandler(){this.calciteListItemPropsChange.emit()}metadataWatchHandler(){this.calciteListItemPropsChange.emit()}selectedWatchHandler(){this.calciteListItemChange.emit({item:this.el,value:this.value,selected:this.selected,shiftPressed:this.shiftPressed}),this.shiftPressed=!1}valueWatchHandler(t,i){this.calciteListItemValueChange.emit({oldValue:i,newValue:t})}async toggleSelected(t){this.disabled||(this.selected="boolean"==typeof t?t:!this.selected)}async setFocus(){var t;null===(t=this.focusEl)||void 0===t||t.focus()}renderIcon(){const{icon:t}=this;return t?e("span",{class:{[r.icon]:!0,[r.iconDot]:t===l.circle},onClick:this.pickListClickHandler},t===l.square?e("calcite-icon",{icon:s.checked,scale:"s"}):null):null}renderRemoveAction(){return this.removable?e("calcite-action",{class:r.remove,icon:s.remove,onCalciteActionClick:this.removeClickHandler,slot:c.actionsEnd,text:this.intlRemove}):null}renderActionsStart(){const{el:t}=this;return h(t,c.actionsStart)?e("div",{class:{[r.actions]:!0,[r.actionsStart]:!0}},e("slot",{name:c.actionsStart})):null}renderActionsEnd(){const{el:t,removable:i}=this;return h(t,c.actionsEnd)||i?e("div",{class:{[r.actions]:!0,[r.actionsEnd]:!0}},e("slot",{name:c.actionsEnd}),this.renderRemoveAction()):null}render(){const{description:t,label:i}=this;return e(a,null,this.renderIcon(),this.renderActionsStart(),e("label",{"aria-label":i,class:r.label,onClick:this.pickListClickHandler,onKeyDown:this.pickListKeyDownHandler,ref:t=>this.focusEl=t,tabIndex:0},e("div",{"aria-checked":this.selected.toString(),class:r.textContainer,role:"menuitemcheckbox"},e("span",{class:r.title},i),t?e("span",{class:r.description},t):null)),this.renderActionsEnd())}get el(){return n(this)}static get watchers(){return{description:["descriptionWatchHandler"],label:["labelWatchHandler"],metadata:["metadataWatchHandler"],selected:["selectedWatchHandler"],value:["valueWatchHandler"]}}};d.style='@charset "UTF-8";@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{background-color:var(--calcite-ui-foreground-1);box-sizing:border-box;align-items:stretch;display:flex;font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-1);box-shadow:0 1px 0 var(--calcite-ui-border-3);margin:0;margin-bottom:1px;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);line-height:1rem;transition:background-color 150ms ease-in-out;animation:calcite-fade-in 150ms ease-in-out}:host *{box-sizing:border-box}.label{background-color:transparent;display:flex;flex:1 1 auto;align-items:center;cursor:pointer;outline-offset:0;outline-color:transparent;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.label:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.label:hover{background-color:var(--calcite-ui-foreground-2)}:host([non-interactive]:hover){background-color:var(--calcite-ui-foreground-1)}:host([non-interactive]) .label,:host([non-interactive]) .icon{pointer-events:none}.icon{align-items:center;display:flex;margin-top:0;margin-bottom:0;padding:0.25rem;cursor:pointer;color:var(--calcite-ui-brand);flex:0 0 auto;line-height:0}.icon:hover{background-color:var(--calcite-ui-foreground-2)}.icon-dot{align-items:center;display:flex;width:1.5rem;padding:0.5rem}.icon-dot:before{opacity:0;content:"•"}.icon calcite-icon{opacity:0}:host([selected]) .icon-dot:before,:host([selected]) .icon calcite-icon{transition:opacity 150ms ease-in-out;opacity:1}.text-container{display:flex;overflow:hidden;pointer-events:none;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.75rem;padding-right:0.75rem;font-size:var(--calcite-font-size--2);line-height:1.375;word-wrap:break-word;word-break:break-word;flex-direction:column;flex-wrap:nowrap}.title{color:var(--calcite-ui-text-1);font-weight:var(--calcite-font-weight-normal)}.description{margin-top:0.125rem;color:var(--calcite-ui-text-3);font-weight:var(--calcite-font-weight-normal)}.actions{align-items:stretch;display:flex;justify-content:flex-end;margin:0;flex:0 1 auto}.actions--start~.label{padding-left:0.25rem}.calcite--rtl .actions--start~.label{padding-left:unset;padding-right:0.25rem}';export{d as calcite_pick_list_item}