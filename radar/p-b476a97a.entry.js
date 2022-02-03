import{r as t,c as i,h as e,H as a,g as s}from"./p-d703c309.js";import{T as n,g as r}from"./p-78a0ee67.js";import{g as o}from"./p-e14d02bd.js";import{d as h,a as c,b as l,s as p,p as d,i as m}from"./p-b896c2af.js";import{g as u}from"./p-927ebebc.js";import{c as v,d as f,g}from"./p-912dcc7d.js";import{c as y,d as b,H as w}from"./p-92497321.js";import{u as x,C as D,c as k}from"./p-058e0f2a.js";import"./p-de4d1d1b.js";import"./p-dd143ab9.js";import"./p-0b4cf4f0.js";let C=class{constructor(e){t(this,e),this.calciteDatePickerChange=i(this,"calciteDatePickerChange",7),this.calciteDatePickerRangeChange=i(this,"calciteDatePickerRangeChange",7),this.calciteInputDatePickerOpen=i(this,"calciteInputDatePickerOpen",7),this.calciteInputDatePickerClose=i(this,"calciteInputDatePickerClose",7),this.disabled=!1,this.active=!1,this.intlPrevMonth=n.prevMonth,this.intlNextMonth=n.nextMonth,this.locale=document.documentElement.lang||"en",this.scale="m",this.range=!1,this.required=!1,this.overlayPositioning="absolute",this.proximitySelectionDisabled=!1,this.layout="horizontal",this.focusedInput="start",this.activeTransitionProp="opacity",this.transitionEnd=t=>{t.propertyName===this.activeTransitionProp&&(this.active?this.calciteInputDatePickerOpen.emit():this.calciteInputDatePickerClose.emit())},this.setStartInput=t=>{this.startInput=t},this.setEndInput=t=>{this.endInput=t},this.deactivate=()=>{this.active=!1},this.keyUpHandler=t=>{"Escape"===u(t.key)&&(this.active=!1)},this.inputBlur=t=>{this.blur(t.detail)},this.startInputFocus=()=>{this.active=!0,this.focusedInput="start"},this.endInputFocus=()=>{this.active=!0,this.focusedInput="end"},this.inputInput=t=>{this.input(t.detail.value)},this.setMenuEl=t=>{t&&(this.menuEl=t,this.createPopper())},this.setStartWrapper=t=>{this.startWrapper=t,this.setReferenceEl()},this.setEndWrapper=t=>{this.endWrapper=t,this.setReferenceEl()},this.handleDateChange=t=>{this.range||(this.value=h(t.detail))},this.handleDateRangeChange=t=>{var i,e;if(!this.range||!t.detail)return;const{startDate:a,endDate:s}=t.detail;this.start=h(a),this.end=h(s),this.value=[this.start,this.end],this.shouldFocusRangeEnd()?null===(i=this.endInput)||void 0===i||i.setFocus():this.shouldFocusRangeStart()&&(null===(e=this.startInput)||void 0===e||e.setFocus())}}valueHandler(t){Array.isArray(t)?(this.valueAsDate=t.map((t=>c(t))),this.start=t[0],this.end=t[1]):t?(this.valueAsDate=c(t),this.start="",this.end=""):(this.valueAsDate=void 0,this.start=void 0,this.end=void 0)}activeHandler(){this.reposition()}calciteDaySelectHandler(){this.shouldFocusRangeStart()||this.shouldFocusRangeEnd()||(this.active=!1)}async setFocus(){var t;null===(t=this.startInput)||void 0===t||t.setFocus()}async reposition(){const{popper:t,menuEl:i}=this,e=this.getModifiers();t?await x({el:i,modifiers:e,placement:"bottom-leading",popper:t}):this.createPopper()}connectedCallback(){Array.isArray(this.value)?(this.valueAsDate=this.value.map((t=>c(t))),this.start=this.value[0],this.end=this.value[1]):this.value&&(this.valueAsDate=c(this.value),this.start="",this.end=""),this.start&&(this.startAsDate=c(this.start)),this.end&&(this.endAsDate=c(this.end)),this.min&&(this.minAsDate=c(this.min)),this.max&&(this.maxAsDate=c(this.max)),this.createPopper(),v(this),y(this)}async componentWillLoad(){await this.loadLocaleData()}disconnectedCallback(){this.destroyPopper(),f(this),b(this)}render(){var t,i;const{disabled:s}=this,n=l(this.range?this.startAsDate:this.valueAsDate,this.minAsDate,this.maxAsDate),r=this.range?l(this.endAsDate,this.minAsDate,this.maxAsDate):null,h=r?r.toLocaleDateString(this.locale):"",c=n?n.toLocaleDateString(this.locale):"",p=o(this.el);return e(a,{onBlur:this.deactivate,onKeyUp:this.keyUpHandler,role:"application"},this.localeData&&e("div",{"aria-expanded":this.active.toString(),class:"input-container",dir:p,role:"application"},e("div",{class:"input-wrapper",ref:this.setStartWrapper},e("calcite-input",{class:"input "+("vertical"===this.layout&&this.range?"no-bottom-border":""),disabled:s,icon:"calendar",label:g(this),"number-button-type":"none",onCalciteInputBlur:this.inputBlur,onCalciteInputFocus:this.startInputFocus,onCalciteInputInput:this.inputInput,placeholder:null===(t=this.localeData)||void 0===t?void 0:t.placeholder,ref:this.setStartInput,scale:this.scale,type:"text",value:c})),e("div",{"aria-hidden":(!this.active).toString(),class:"menu-container",ref:this.setMenuEl},e("div",{class:{"calendar-picker-wrapper":!0,"calendar-picker-wrapper--end":"end"===this.focusedInput,[D.animation]:!0,[D.animationActive]:this.active},onTransitionEnd:this.transitionEnd},e("calcite-date-picker",{activeRange:this.focusedInput,endAsDate:this.endAsDate,headingLevel:this.headingLevel,intlNextMonth:this.intlNextMonth,intlPrevMonth:this.intlPrevMonth,locale:this.locale,max:this.max,maxAsDate:this.maxAsDate,min:this.min,minAsDate:this.minAsDate,onCalciteDatePickerChange:this.handleDateChange,onCalciteDatePickerRangeChange:this.handleDateRangeChange,proximitySelectionDisabled:this.proximitySelectionDisabled,range:this.range,scale:this.scale,startAsDate:this.startAsDate,tabIndex:0,valueAsDate:this.valueAsDate}))),this.range&&"horizontal"===this.layout&&e("div",{class:"horizontal-arrow-container"},e("calcite-icon",{flipRtl:!0,icon:"arrow-right",scale:"s"})),this.range&&"vertical"===this.layout&&"s"!==this.scale&&e("div",{class:"vertical-arrow-container"},e("calcite-icon",{icon:"arrow-down",scale:"s"})),this.range&&e("div",{class:"input-wrapper",ref:this.setEndWrapper},e("calcite-input",{class:{input:!0,"border-t-color-1":"vertical"===this.layout&&this.range},disabled:s,icon:"calendar","number-button-type":"none",onCalciteInputBlur:this.inputBlur,onCalciteInputFocus:this.endInputFocus,onCalciteInputInput:this.inputInput,placeholder:null===(i=this.localeData)||void 0===i?void 0:i.placeholder,ref:this.setEndInput,scale:this.scale,type:"text",value:h}))),e(w,{component:this}))}setReferenceEl(){const{focusedInput:t,layout:i,endWrapper:e,startWrapper:a}=this;this.referenceEl="end"===t||"vertical"===i?e||a:a||e,this.createPopper()}onLabelClick(){this.setFocus()}getModifiers(){return[{name:"flip",enabled:!0,options:{fallbackPlacements:["top-start","top","top-end","bottom-start","bottom","bottom-end"]}}]}createPopper(){this.destroyPopper();const{menuEl:t,referenceEl:i,overlayPositioning:e}=this;if(!t||!i)return;const a=this.getModifiers();this.popper=k({el:t,modifiers:a,overlayPositioning:e,placement:"bottom-leading",referenceEl:i})}destroyPopper(){const{popper:t}=this;t&&t.destroy(),this.popper=null}startWatcher(t){this.startAsDate=c(t)}endWatcher(t){this.endAsDate=c(t)}async loadLocaleData(){const{locale:t}=this;this.localeData=await r(t)}clearCurrentValue(){if(!this.range)return void(this.value="");const{focusedInput:t}=this;"start"===t?(this.value=Array.isArray(this.value)?["",this.value[1]||""]:[""],this.start=void 0):"end"===t&&(this.value=Array.isArray(this.value)?[this.value[0]||"",""]:["",""],this.end=void 0)}input(t){const i=this.getDateFromInput(t);if(!i)return void this.clearCurrentValue();if(!this.range)return void(this.value=h(i));const{focusedInput:e}=this;if("start"===e){if(!this.startAsDate||!p(i,this.startAsDate)){const t=h(i);this.value=Array.isArray(this.value)?[t,this.value[1]||""]:[t],this.start=t,this.calciteDatePickerRangeChange.emit({startDate:i,endDate:this.endAsDate})}}else if(!("end"!==e||this.endAsDate&&p(i,this.endAsDate))){const t=h(i);this.value=Array.isArray(this.value)?[this.value[0]||"",t]:["",t],this.end=t,this.calciteDatePickerRangeChange.emit({startDate:this.startAsDate,endDate:i})}}blur(t){const{locale:i,focusedInput:e,endAsDate:a,range:s,startAsDate:n,valueAsDate:r}=this;this.getDateFromInput(t.value)||(!s&&r?t.value=Array.isArray(r)?r["end"===e?1:0].toLocaleDateString(i):r.toLocaleDateString(i):"start"===e&&n?t.value=n.toLocaleDateString(i):"end"===e&&a&&(t.value=a.toLocaleDateString(i)))}shouldFocusRangeStart(){return!(!this.endAsDate||this.startAsDate||"end"!==this.focusedInput||!this.startInput)}shouldFocusRangeEnd(){return!(!this.startAsDate||this.endAsDate||"start"!==this.focusedInput||!this.endInput)}getDateFromInput(t){if(!this.localeData)return!1;const{separator:i}=this.localeData,{day:e,month:a,year:s}=d(t,this.localeData),n=e>0,r=a>-1,o=new Date(s,a,e);o.setFullYear(s);const h=!isNaN(o.getTime()),c=t.split(i).filter((t=>t)).length>2,l=s.toString().length>0;return!!(n&&r&&h&&c&&l&&m(o,this.min,this.max))&&o}get el(){return s(this)}static get watchers(){return{value:["valueHandler"],active:["activeHandler"],layout:["setReferenceEl"],focusedInput:["setReferenceEl"],start:["startWatcher"],end:["endWatcher"],locale:["loadLocaleData"]}}};C.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{box-shadow:none;display:inline-block;vertical-align:top;width:100%;position:relative;overflow:visible}:host .menu-container .calcite-popper-anim{position:relative;z-index:1;transition:var(--calcite-popper-transition);visibility:hidden;transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:0.25rem}:host .menu-container[data-popper-placement^=bottom] .calcite-popper-anim{transform:translateY(-5px)}:host .menu-container[data-popper-placement^=top] .calcite-popper-anim{transform:translateY(5px)}:host .menu-container[data-popper-placement^=left] .calcite-popper-anim{transform:translateX(5px)}:host .menu-container[data-popper-placement^=right] .calcite-popper-anim{transform:translateX(-5px)}:host .menu-container[data-popper-placement] .calcite-popper-anim--active{opacity:1;visibility:visible;transform:translate(0)}.calendar-picker-wrapper{box-shadow:none;position:static;width:100%;transform:translate3d(0, 0, 0)}.input-wrapper{position:relative}:host([range]) .input-container{display:flex}:host([range]) .input-wrapper{flex:1 1 auto}:host([range]) .horizontal-arrow-container{background-color:var(--calcite-ui-background);padding-top:0;padding-bottom:0;padding-left:0.25rem;padding-right:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);border-left-width:0;border-right-width:0;display:flex;align-items:center}:host([range][layout=vertical]) .input-wrapper{width:100%}:host([range][layout=vertical]) .input-container{flex-direction:column;align-items:flex-start}:host([range][layout=vertical]) .calendar-picker-wrapper--end{transform:translate3d(0, 0, 0)}:host([range][layout=vertical]) .vertical-arrow-container{top:1.5rem;left:0;padding-left:0.625rem;padding-right:0.625rem;margin-left:1px;margin-right:1px;position:absolute;z-index:10;background-color:var(--calcite-ui-foreground-1)}:host([scale=s][range]:not([layout=vertical])) .calendar-picker-wrapper{width:216px}:host([scale=m][range]:not([layout=vertical])) .calendar-picker-wrapper{width:286px}:host([scale=l][range]:not([layout=vertical])) .calendar-picker-wrapper{width:398px}.menu-container{display:block;position:absolute;z-index:900;transform:scale(0);visibility:hidden;pointer-events:none}:host([active]) .menu-container{visibility:visible;pointer-events:auto}.input .calcite-input__wrapper{margin-top:0}:host([range][layout=vertical][scale=m]) .vertical-arrow-container{top:1.5rem;padding-left:0.75rem}:host([range][layout=vertical][scale=m]) .vertical-arrow-container calcite-icon{width:0.75rem;height:0.75rem;min-width:0}:host([range][layout=vertical][scale=l]) .vertical-arrow-container{top:2.25rem;padding-left:0.875rem;padding-right:0.875rem}:host([range][layout=vertical][active]) .vertical-arrow-container{display:none}::slotted(input[slot=hidden-form-input]){bottom:0 !important;left:0 !important;margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;right:0 !important;top:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";export{C as calcite_input_date_picker}