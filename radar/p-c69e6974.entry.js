import{r as t,c as i,h as a,g as e}from"./p-d703c309.js";import{n,i as s,a as r,r as o,h as l,b as c}from"./p-255def5b.js";import{c as h}from"./p-b741ea7f.js";import{g as m,f as p}from"./p-e14d02bd.js";import{T as u}from"./p-2bd3998b.js";import{g as f}from"./p-927ebebc.js";import"./p-16e63a98.js";import"./p-0b4cf4f0.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */const d=h();let g=class{constructor(a){t(this,a),this.calciteColorPickerHexInputChange=i(this,"calciteColorPickerHexInputChange",7),this.allowEmpty=!1,this.intlHex=u.hex,this.intlNoColor=u.noColor,this.scale="m",this.value=n(d.hex()),this.onCalciteInputBlur=()=>{const t=this.inputNode,i=t.value,a=`#${i}`;this.allowEmpty&&!i||s(a)&&r(a)||(t.value=this.allowEmpty&&!this.internalColor?"":this.formatForInternalInput(o(this.internalColor.object())))},this.onInputChange=()=>{const t=this.inputNode.value;let i;if(t){const a=t;if(!l(`#${a}`))return;i=n(a)}else this.allowEmpty&&(i=null);this.value=i,this.calciteColorPickerHexInputChange.emit()},this.internalColor=d,this.previousNonNullValue=this.value,this.storeInputRef=t=>{this.inputNode=t}}connectedCallback(){const{allowEmpty:t,value:i}=this;if(i){const t=n(i);s(t)&&(this.internalColor=h(t),this.value=t)}else t&&(this.internalColor=null,this.value=null)}handleValueChange(t,i){if(t){const i=n(t);if(s(i)){const{internalColor:t}=this,a=!t||i!==n(t.hex());return this.internalColor=h(i),this.previousNonNullValue=i,this.value=i,void(a&&this.calciteColorPickerHexInputChange.emit())}}else if(this.allowEmpty)return this.internalColor=null,this.value=null,void this.calciteColorPickerHexInputChange.emit();this.value=i}onInputKeyDown(t){const{altKey:i,ctrlKey:a,metaKey:e,shiftKey:s}=t,{internalColor:r,value:o}=this,l=f(t.key);if("Tab"===l||"Enter"===l)return void this.onInputChange();if("ArrowDown"===l||"ArrowUp"===l)return o?(this.value=n(this.nudgeRGBChannels(r,(s?10:1)*("ArrowUp"===l?1:-1)).hex()),void t.preventDefault()):(this.value=this.previousNonNullValue,void t.preventDefault());const h=i||a||e,m=1===l.length,p=c.test(l);!m||h||p||t.preventDefault()}render(){const{el:t,intlHex:i,value:e}=this,n=this.formatForInternalInput(e),s=m(t);return a("div",{class:"container"},a("calcite-input",{class:"input",dir:s,label:i,maxLength:6,onCalciteInputBlur:this.onCalciteInputBlur,onCalciteInputChange:this.onInputChange,prefixText:"#",ref:this.storeInputRef,scale:this.scale,value:n}),n?a("calcite-color-picker-swatch",{active:!0,class:"preview",color:`#${n}`,scale:this.scale}):null)}async setFocus(){p(this.inputNode)}formatForInternalInput(t){return t?t.replace("#",""):""}nudgeRGBChannels(t,i){return h.rgb(t.array().map((t=>t+i)))}get el(){return e(this)}static get watchers(){return{value:["handleValueChange"]}}};g.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block}.container{width:100%;display:inline-grid;align-items:center;grid-template-columns:1fr auto}.preview{grid-column:2/3;display:flex;align-items:center;pointer-events:none;margin-top:0;margin-bottom:0;margin-left:0.25rem;margin-right:0.25rem;z-index:1}.preview,.input{grid-row:1}.input{grid-column:1/3;text-transform:uppercase;width:100%}";export{g as calcite_color_picker_hex_input}