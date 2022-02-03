import { r as registerInstance, h, g as getElement, c as createEvent, H as Host, a as getAssetPath } from './index-9fca3863.js';
import { c as closestElementCrossShadowBoundary, g as getElementDir, C as CSS_UTILITY, f as focusElement, n as nodeListToArray, a as getSlotted, b as filterDirectChildren } from './dom-b47352c7.js';
import { c as connectLabel, d as disconnectLabel, g as getLabelText } from './label-d9c40680.js';
import { c as createObserver } from './observers-cbde1496.js';
import { g as getKey } from './key-38909e8a.js';
import { g as guid } from './guid-ec8a882c.js';
import { c as connectForm, d as disconnectForm, H as HiddenFormInputSlot } from './form-20628b63.js';
import { g as getContent, H as HubType } from './hub-content-ba4934ea.js';
import { s as searchGroupContent, a as search$1 } from './hub-search-992b92f5.js';
import { g as getSiteCatalog } from './hub-site-ea989651.js';
import { s as searchMembers, a as searchTeams } from './hub-team-48304e45.js';
import { r as readSessionFromCookie, t as truncateString } from './utils-49410b4c.js';
import { U as UserSession } from './UserSession-1faae0f0.js';
import { r as request, c as cleanUrl, _ as __assign } from './clean-url-83c51f70.js';
import { a as appendCustomParams } from './get-portal-url-fdc441e5.js';
import { q as queryFeatures } from './search-9451d0d4.js';
import { g as getItem, a as getItemData } from './get-9aed8a75.js';
import { c as createCommonjsModule, a as commonjsGlobal } from './_commonjsHelpers-10467d11.js';
import { s as sendTelemetry } from './telemetry-utils-54622ae3.js';
import './content-16805b54.js';
import './search-b0ff9cfb.js';
import './create-filters-48231911.js';
import './get-prop-a0541ce0.js';
import './get-user-65c98cff.js';
import './get-portal-api-url-fba2ecae.js';

(function(prototype) {
  if (typeof prototype.requestSubmit == "function") return

  prototype.requestSubmit = function(submitter) {
    if (submitter) {
      validateSubmitter(submitter, this);
      submitter.click();
    } else {
      submitter = document.createElement("input");
      submitter.type = "submit";
      submitter.hidden = true;
      this.appendChild(submitter);
      submitter.click();
      this.removeChild(submitter);
    }
  };

  function validateSubmitter(submitter, form) {
    submitter instanceof HTMLElement || raise(TypeError, "parameter 1 is not of type 'HTMLElement'");
    submitter.type == "submit" || raise(TypeError, "The specified element is not a submit button");
    submitter.form == form || raise(DOMException, "The specified element is not owned by this form element", "NotFoundError");
  }

  function raise(errorConstructor, message, name) {
    throw new errorConstructor("Failed to execute 'requestSubmit' on 'HTMLFormElement': " + message + ".", name)
  }
})(HTMLFormElement.prototype);

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const CSS$4 = {
  buttonLoader: "calcite-button--loader",
  content: "content",
  contentSlotted: "content--slotted",
  icon: "icon",
  iconStart: "icon--start",
  iconEnd: "icon--end",
  loadingIn: "loading-in",
  loadingOut: "loading-out"
};
const TEXT$1 = {
  loading: "Loading"
};

const calciteButtonCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:inline-block;width:auto;vertical-align:middle}:host([round]){border-radius:50px}:host([round]) a,:host([round]) button{border-radius:50px}:host button,:host a{outline-offset:0;outline-color:transparent;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host button:focus,:host a:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}:host button,:host a{--calcite-button-content-margin:0.5rem;--calcite-button-padding-x:7px;--calcite-button-padding-y:3px;padding:var(--calcite-button-padding-y) var(--calcite-button-padding-x) var(--calcite-button-padding-y) var(--calcite-button-padding-x);position:relative;display:flex;align-items:center;justify-content:center;text-decoration:none;width:100%;height:100%;border-radius:0;border-style:none;-webkit-user-select:none;user-select:none;-webkit-appearance:none;appearance:none;cursor:pointer;text-align:center;box-sizing:border-box;font-family:inherit;font-weight:var(--calcite-font-weight-normal);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host button:hover,:host a:hover{text-decoration:none}.content{display:flex;flex-basis:auto;margin-left:var(--calcite-button-content-margin);margin-right:var(--calcite-button-content-margin)}:host([scale=m]) button,:host([scale=m]) a{--calcite-button-content-margin:0.75rem}:host([scale=l]) button,:host([scale=l]) a{--calcite-button-content-margin:1rem}:host(:not([icon-start])) .content{margin-left:unset}:host(:not([icon-end])) .content{margin-right:unset}:host([icon-start]:not([icon-end])) .calcite--rtl .content{margin-left:unset;margin-right:var(--calcite-button-content-margin)}:host([icon-end]:not([icon-start])) .calcite--rtl .content{margin-right:unset;margin-left:var(--calcite-button-content-margin)}:host([width=auto]){width:auto}:host([width=half]){width:50%}:host([width=full]){width:100%}:host([alignment=center]:not([width=auto])) a,:host([alignment=center]:not([width=auto])) button{justify-content:center}:host([alignment=start]:not([width=auto])) a,:host([alignment=start]:not([width=auto])) button{justify-content:flex-start}:host([alignment=end]:not([width=auto])) a,:host([alignment=end]:not([width=auto])) button{justify-content:flex-end}:host([alignment*=space-between]:not([width=auto])) a,:host([alignment*=space-between]:not([width=auto])) button{justify-content:space-between}:host([alignment=icon-start-space-between]:not([width=auto])) .icon--start{margin-right:auto}:host([alignment=icon-start-space-between]:not([width=auto])) a,:host([alignment=icon-start-space-between]:not([width=auto])) button{text-align:unset}:host([alignment=icon-end-space-between]:not([width=auto])) .icon--end{margin-left:auto}:host([alignment=icon-end-space-between]:not([width=auto])) a,:host([alignment=icon-end-space-between]:not([width=auto])) button{text-align:unset}:host([alignment=icon-start-space-between]:not([width=auto])) .calcite--rtl .icon--start{margin-right:unset;margin-left:auto}:host([alignment=icon-end-space-between]:not([width=auto])) .calcite--rtl .icon--end{margin-left:unset;margin-right:auto}:host([alignment=center]) a:not(.content--slotted) .icon--start+.icon--end,:host([alignment=center]) button:not(.content--slotted) .icon--start+.icon--end{margin-left:var(--calcite-button-content-margin)}:host([alignment=center]) a.calcite--rtl:not(.content--slotted) .icon--start+.icon--end,:host([alignment=center]) button.calcite--rtl:not(.content--slotted) .icon--start+.icon--end{margin-left:unset;margin-right:var(--calcite-button-content-margin)}.icon{display:inline-flex;position:relative;margin:0;font-weight:var(--calcite-font-weight-normal);line-height:inherit}:host([loading]),:host([disabled]){pointer-events:none}:host([loading]) button,:host([loading]) a,:host([disabled]) button,:host([disabled]) a{pointer-events:none;opacity:var(--calcite-ui-opacity-disabled)}@keyframes loader-in{0%{width:0;opacity:0;transform:scale(0.5)}100%{width:1em;opacity:1;transform:scale(1)}}@keyframes loader-out{0%{width:1em;opacity:1;transform:scale(1)}100%{width:0;opacity:0;transform:scale(0.5)}}.calcite-button--loader{display:flex}.calcite-button--loader calcite-loader{margin:0;transition:width 300ms ease-in-out, opacity 300ms ease-in-out, transform 300ms ease-in-out}.calcite-button--loader calcite-loader.loading-in{animation-name:loader-in;animation-duration:310ms}.calcite-button--loader calcite-loader.loading-out{animation-name:loader-out;animation-duration:310ms}:host([loading]) button.content--slotted .calcite-button--loader calcite-loader,:host([loading]) a.content--slotted .calcite-button--loader calcite-loader{margin-inline-end:var(--calcite-button-content-margin)}:host([loading]) button:not(.content--slotted) .icon--start,:host([loading]) button:not(.content--slotted) .icon--end,:host([loading]) a:not(.content--slotted) .icon--start,:host([loading]) a:not(.content--slotted) .icon--end{display:none}:host([appearance=solid]) button,:host([appearance=solid]) a{border-width:1px;border-style:solid;border-color:transparent}:host([appearance=solid][color=blue]) button,:host([appearance=solid][color=blue]) a{color:var(--calcite-ui-text-inverse);background-color:var(--calcite-ui-brand)}:host([appearance=solid][color=blue]) button:hover,:host([appearance=solid][color=blue]) button:focus,:host([appearance=solid][color=blue]) a:hover,:host([appearance=solid][color=blue]) a:focus{background-color:var(--calcite-ui-brand-hover)}:host([appearance=solid][color=blue]) button:active,:host([appearance=solid][color=blue]) a:active{background-color:var(--calcite-ui-brand-press)}:host([appearance=solid][color=blue]) button calcite-loader,:host([appearance=solid][color=blue]) a calcite-loader{color:var(--calcite-ui-text-inverse)}:host([appearance=solid][color=red]) button,:host([appearance=solid][color=red]) a{color:var(--calcite-ui-text-inverse);background-color:var(--calcite-ui-danger)}:host([appearance=solid][color=red]) button:hover,:host([appearance=solid][color=red]) button:focus,:host([appearance=solid][color=red]) a:hover,:host([appearance=solid][color=red]) a:focus{background-color:var(--calcite-ui-danger-hover)}:host([appearance=solid][color=red]) button:active,:host([appearance=solid][color=red]) a:active{background-color:var(--calcite-ui-danger-press)}:host([appearance=solid][color=red]) button calcite-loader,:host([appearance=solid][color=red]) a calcite-loader{color:var(--calcite-ui-text-inverse)}:host([appearance=solid][color=neutral]) button,:host([appearance=solid][color=neutral]) a{color:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-3)}:host([appearance=solid][color=neutral]) button:hover,:host([appearance=solid][color=neutral]) button:focus,:host([appearance=solid][color=neutral]) a:hover,:host([appearance=solid][color=neutral]) a:focus{background-color:var(--calcite-ui-foreground-2)}:host([appearance=solid][color=neutral]) button:active,:host([appearance=solid][color=neutral]) a:active{background-color:var(--calcite-ui-foreground-1)}:host([appearance=solid][color=neutral]) button calcite-loader,:host([appearance=solid][color=neutral]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=solid][color=inverse]) button,:host([appearance=solid][color=inverse]) a{color:var(--calcite-ui-text-inverse);background-color:var(--calcite-ui-inverse)}:host([appearance=solid][color=inverse]) button:hover,:host([appearance=solid][color=inverse]) button:focus,:host([appearance=solid][color=inverse]) a:hover,:host([appearance=solid][color=inverse]) a:focus{background-color:var(--calcite-ui-inverse-hover)}:host([appearance=solid][color=inverse]) button:active,:host([appearance=solid][color=inverse]) a:active{background-color:var(--calcite-ui-inverse-press)}:host([appearance=solid][color=inverse]) button calcite-loader,:host([appearance=solid][color=inverse]) a calcite-loader{color:var(--calcite-ui-text-inverse)}:host([appearance=outline]) button,:host([appearance=outline]) a{background-color:var(--calcite-ui-foreground-1);border-width:1px;border-style:solid;box-shadow:inset 0 0 0 1px transparent}:host([appearance=outline][color=blue]) button,:host([appearance=outline][color=blue]) a{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-brand)}:host([appearance=outline][color=blue]) button:hover,:host([appearance=outline][color=blue]) a:hover{border-color:var(--calcite-ui-brand-hover);color:var(--calcite-ui-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover)}:host([appearance=outline][color=blue]) button:focus,:host([appearance=outline][color=blue]) a:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-brand);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}:host([appearance=outline][color=blue]) button:active,:host([appearance=outline][color=blue]) a:active{border-color:var(--calcite-ui-brand-press);color:var(--calcite-ui-brand-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand-press)}:host([appearance=outline][color=blue]) button calcite-loader,:host([appearance=outline][color=blue]) a calcite-loader{color:var(--calcite-ui-brand)}:host([appearance=outline][color=red]) button,:host([appearance=outline][color=red]) a{border-color:var(--calcite-ui-danger);color:var(--calcite-ui-danger)}:host([appearance=outline][color=red]) button:hover,:host([appearance=outline][color=red]) a:hover{border-color:var(--calcite-ui-danger-hover);color:var(--calcite-ui-danger-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-danger-hover)}:host([appearance=outline][color=red]) button:focus,:host([appearance=outline][color=red]) a:focus{border-color:var(--calcite-ui-danger);color:var(--calcite-ui-danger);box-shadow:inset 0 0 0 2px var(--calcite-ui-danger)}:host([appearance=outline][color=red]) button:active,:host([appearance=outline][color=red]) a:active{border-color:var(--calcite-ui-danger-press);color:var(--calcite-ui-danger-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-danger-press)}:host([appearance=outline][color=red]) button calcite-loader,:host([appearance=outline][color=red]) a calcite-loader{color:var(--calcite-ui-danger)}:host([appearance=outline][color=neutral]) button,:host([appearance=outline][color=neutral]) a{color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-foreground-3)}:host([appearance=outline][color=neutral]) button:hover,:host([appearance=outline][color=neutral]) a:hover{box-shadow:inset 0 0 0 1px var(--calcite-ui-foreground-3)}:host([appearance=outline][color=neutral]) button:focus,:host([appearance=outline][color=neutral]) a:focus{box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-3)}:host([appearance=outline][color=neutral]) button:active,:host([appearance=outline][color=neutral]) a:active{box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-3)}:host([appearance=outline][color=neutral]) button calcite-loader,:host([appearance=outline][color=neutral]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=outline][color=inverse]) button,:host([appearance=outline][color=inverse]) a{color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-inverse)}:host([appearance=outline][color=inverse]) button:hover,:host([appearance=outline][color=inverse]) a:hover{border-color:var(--calcite-ui-inverse-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-inverse-hover)}:host([appearance=outline][color=inverse]) button:focus,:host([appearance=outline][color=inverse]) a:focus{border-color:var(--calcite-ui-inverse);box-shadow:inset 0 0 0 2px var(--calcite-ui-inverse)}:host([appearance=outline][color=inverse]) button:active,:host([appearance=outline][color=inverse]) a:active{border-color:var(--calcite-ui-inverse-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-inverse-press)}:host([appearance=outline][color=inverse]) button calcite-loader,:host([appearance=outline][color=inverse]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=clear]) button,:host([appearance=clear]) a{background-color:transparent;border-width:1px;border-style:solid;box-shadow:inset 0 0 0 1px transparent}:host([appearance=clear][color=blue]) button,:host([appearance=clear][color=blue]) a{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-brand)}:host([appearance=clear][color=blue]) button:hover,:host([appearance=clear][color=blue]) a:hover{border-color:var(--calcite-ui-brand-hover);color:var(--calcite-ui-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover)}:host([appearance=clear][color=blue]) button:focus,:host([appearance=clear][color=blue]) a:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-brand);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}:host([appearance=clear][color=blue]) button:active,:host([appearance=clear][color=blue]) a:active{border-color:var(--calcite-ui-brand-press);color:var(--calcite-ui-brand-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand-press)}:host([appearance=clear][color=blue]) button calcite-loader,:host([appearance=clear][color=blue]) a calcite-loader{color:var(--calcite-ui-brand)}:host([appearance=clear][color=red]) button,:host([appearance=clear][color=red]) a{border-color:var(--calcite-ui-danger);color:var(--calcite-ui-danger)}:host([appearance=clear][color=red]) button:hover,:host([appearance=clear][color=red]) a:hover{border-color:var(--calcite-ui-danger-hover);color:var(--calcite-ui-danger-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-danger-hover)}:host([appearance=clear][color=red]) button:focus,:host([appearance=clear][color=red]) a:focus{border-color:var(--calcite-ui-danger);color:var(--calcite-ui-danger);box-shadow:inset 0 0 0 2px var(--calcite-ui-danger)}:host([appearance=clear][color=red]) button:active,:host([appearance=clear][color=red]) a:active{border-color:var(--calcite-ui-danger-press);color:var(--calcite-ui-danger-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-danger-press)}:host([appearance=clear][color=red]) button calcite-loader,:host([appearance=clear][color=red]) a calcite-loader{color:var(--calcite-ui-danger)}:host([appearance=clear][color=neutral]) button,:host([appearance=clear][color=neutral]) a{color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-foreground-3)}:host([appearance=clear][color=neutral]) button:hover,:host([appearance=clear][color=neutral]) a:hover{box-shadow:inset 0 0 0 1px var(--calcite-ui-foreground-3)}:host([appearance=clear][color=neutral]) button:focus,:host([appearance=clear][color=neutral]) a:focus{box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-3)}:host([appearance=clear][color=neutral]) button:active,:host([appearance=clear][color=neutral]) a:active{box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-3)}:host([appearance=clear][color=neutral]) button calcite-loader,:host([appearance=clear][color=neutral]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=clear][color=inverse]) button,:host([appearance=clear][color=inverse]) a{color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-inverse)}:host([appearance=clear][color=inverse]) button:hover,:host([appearance=clear][color=inverse]) a:hover{border-color:var(--calcite-ui-inverse-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-inverse-hover)}:host([appearance=clear][color=inverse]) button:focus,:host([appearance=clear][color=inverse]) a:focus{border-color:var(--calcite-ui-inverse);box-shadow:inset 0 0 0 2px var(--calcite-ui-inverse)}:host([appearance=clear][color=inverse]) button:active,:host([appearance=clear][color=inverse]) a:active{border-color:var(--calcite-ui-inverse-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-inverse-press)}:host([appearance=clear][color=inverse]) button calcite-loader,:host([appearance=clear][color=inverse]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=outline][split-child=primary]) button,:host([appearance=clear][split-child=primary]) button{border-right-width:0;border-left-width:1px}:host([appearance=outline][split-child=primary]) button.calcite--rtl,:host([appearance=clear][split-child=primary]) button.calcite--rtl{border-left-width:0;border-right-width:1px}:host([appearance=outline][split-child=secondary]) button,:host([appearance=clear][split-child=secondary]) button{border-left-width:0;border-right-width:1px}:host([appearance=outline][split-child=secondary]) button.calcite--rtl,:host([appearance=clear][split-child=secondary]) button.calcite--rtl{border-right-width:0;border-left-width:1px}:host([appearance=transparent]:not(.enable-editing-button)) button,:host([appearance=transparent]:not(.enable-editing-button)) a{background-color:transparent}:host([appearance=transparent]:not(.enable-editing-button)) button:hover,:host([appearance=transparent]:not(.enable-editing-button)) button:focus,:host([appearance=transparent]:not(.enable-editing-button)) a:hover,:host([appearance=transparent]:not(.enable-editing-button)) a:focus{background-color:var(--calcite-button-transparent-hover)}:host([appearance=transparent]:not(.enable-editing-button)) button:active,:host([appearance=transparent]:not(.enable-editing-button)) a:active{background-color:var(--calcite-button-transparent-press)}:host([appearance=transparent][color=blue]) button,:host([appearance=transparent][color=blue]) a{color:var(--calcite-ui-brand)}:host([appearance=transparent][color=blue]) button:hover,:host([appearance=transparent][color=blue]) a:hover{color:var(--calcite-ui-brand-hover)}:host([appearance=transparent][color=blue]) button:focus,:host([appearance=transparent][color=blue]) a:focus{color:var(--calcite-ui-brand)}:host([appearance=transparent][color=blue]) button:active,:host([appearance=transparent][color=blue]) a:active{color:var(--calcite-ui-brand-press)}:host([appearance=transparent][color=blue]) button calcite-loader,:host([appearance=transparent][color=blue]) a calcite-loader{color:var(--calcite-ui-brand)}:host([appearance=transparent][color=red]) button,:host([appearance=transparent][color=red]) a{color:var(--calcite-ui-danger)}:host([appearance=transparent][color=red]) button:hover,:host([appearance=transparent][color=red]) a:hover{color:var(--calcite-ui-danger-hover)}:host([appearance=transparent][color=red]) button:focus,:host([appearance=transparent][color=red]) a:focus{color:var(--calcite-ui-danger)}:host([appearance=transparent][color=red]) button:active,:host([appearance=transparent][color=red]) a:active{color:var(--calcite-ui-danger-press)}:host([appearance=transparent][color=red]) button calcite-loader,:host([appearance=transparent][color=red]) a calcite-loader{color:var(--calcite-ui-danger)}:host([appearance=transparent][color=neutral]:not(.cancel-editing-button)) button,:host([appearance=transparent][color=neutral]:not(.cancel-editing-button)) a,:host([appearance=transparent][color=neutral]:not(.cancel-editing-button)) calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=transparent][color=neutral].cancel-editing-button) button{color:var(--calcite-ui-text-3);border-top-width:1px;border-top-color:var(--calcite-ui-border-input);border-bottom-width:1px;border-bottom-color:var(--calcite-ui-border-input);border-bottom-style:solid;border-top-style:solid}:host([appearance=transparent][color=neutral].cancel-editing-button) button:not(.content--slotted){--calcite-button-padding-y:0}:host([appearance=transparent][color=neutral].cancel-editing-button) button:hover{color:var(--calcite-ui-text-1)}:host([appearance=transparent][color=neutral].enable-editing-button) button{background-color:transparent}:host(.confirm-changes-button) button:focus,:host(.cancel-editing-button) button:focus,:host(.enable-editing-button) button:focus{outline-offset:-2px}:host([appearance=transparent][color=inverse]) button,:host([appearance=transparent][color=inverse]) a,:host([appearance=transparent][color=inverse]) calcite-loader{color:var(--calcite-ui-text-inverse)}:host([scale=s]) button.content--slotted,:host([scale=s]) a.content--slotted{font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s][appearance=transparent]) button.content--slotted,:host([scale=s][appearance=transparent]) a.content--slotted{--calcite-button-padding-x:0.5rem;--calcite-button-padding-y:0.25rem}:host([scale=m]) button.content--slotted,:host([scale=m]) a.content--slotted{--calcite-button-padding-x:11px;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]:not([appearance=transparent])) button.content--slotted,:host([scale=m]:not([appearance=transparent])) a.content--slotted{--calcite-button-padding-y:7px}:host([scale=m][appearance=transparent]) button.content--slotted,:host([scale=m][appearance=transparent]) a.content--slotted{--calcite-button-padding-x:0.75rem;--calcite-button-padding-y:0.5rem}:host([scale=l]) button.content--slotted,:host([scale=l]) a.content--slotted{--calcite-button-padding-x:15px;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]:not([appearance=transparent])) button.content--slotted,:host([scale=l]:not([appearance=transparent])) a.content--slotted{--calcite-button-padding-y:11px}:host([scale=l][appearance=transparent]) button.content--slotted,:host([scale=l][appearance=transparent]) a.content--slotted{--calcite-button-padding-x:1rem;--calcite-button-padding-y:0.75rem}:host([scale=s]) button:not(.content--slotted),:host([scale=s]) a:not(.content--slotted){--calcite-button-padding-x:0.125rem;--calcite-button-padding-y:3px;font-size:var(--calcite-font-size-0);line-height:1.25rem;width:1.5rem;min-height:1.5rem}:host([scale=s][appearance=transparent]) button:not(.content--slotted),:host([scale=s][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-y:0.25rem}:host([scale=m]) button:not(.content--slotted),:host([scale=m]) a:not(.content--slotted){--calcite-button-padding-x:0.125rem;--calcite-button-padding-y:7px;font-size:var(--calcite-font-size-0);line-height:1.25rem;width:2rem;min-height:2rem}:host([scale=m][appearance=transparent]) button:not(.content--slotted),:host([scale=m][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-y:0.5rem}:host([scale=l]) button:not(.content--slotted),:host([scale=l]) a:not(.content--slotted){--calcite-button-padding-x:0.125rem;--calcite-button-padding-y:9px;font-size:var(--calcite-font-size-0);line-height:1.25rem;width:2.75rem;min-height:2.75rem}:host([scale=l][appearance=transparent]) button:not(.content--slotted),:host([scale=l][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-y:0.625rem}:host([scale=s][icon-start][icon-end]) button:not(.content--slotted),:host([scale=s][icon-start][icon-end]) a:not(.content--slotted){--calcite-button-padding-x:23px;font-size:var(--calcite-font-size-0);line-height:1.25rem;height:1.5rem}:host([scale=s][icon-start][icon-end][appearance=transparent]) button:not(.content--slotted),:host([scale=s][icon-start][icon-end][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-x:1.5rem}:host([scale=m][icon-start][icon-end]) button:not(.content--slotted),:host([scale=m][icon-start][icon-end]) a:not(.content--slotted){--calcite-button-padding-x:2rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;height:2rem}:host([scale=m][icon-start][icon-end][appearance=transparent]) button:not(.content--slotted),:host([scale=m][icon-start][icon-end][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-x:33px}:host([scale=l][icon-start][icon-end]) button:not(.content--slotted),:host([scale=l][icon-start][icon-end]) a:not(.content--slotted){--calcite-button-padding-x:43px;font-size:var(--calcite-font-size-0);line-height:1.25rem;height:2.75rem}:host([scale=l][icon-start][icon-end]) button:not(.content--slotted) .icon--start+.icon--end,:host([scale=l][icon-start][icon-end]) a:not(.content--slotted) .icon--start+.icon--end{margin-inline-start:1rem}:host([scale=l][icon-start][icon-end][appearance=transparent]) button:not(.content--slotted),:host([scale=l][icon-start][icon-end][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-x:2.75rem}";

let CalciteButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** optionally specify alignment of button elements. */
    this.alignment = "center";
    /** specify the appearance style of the button, defaults to solid. */
    this.appearance = "solid";
    /** specify the color of the button, defaults to blue */
    this.color = "blue";
    /** is the button disabled  */
    this.disabled = false;
    /** string to override English loading text
     * @default "Loading"
     */
    this.intlLoading = TEXT$1.loading;
    /** optionally add a calcite-loader component to the button, disabling interaction.  */
    this.loading = false;
    /** optionally add a round style to the button  */
    this.round = false;
    /** specify the scale of the button, defaults to m */
    this.scale = "m";
    /** is the button a child of a calcite-split-button */
    this.splitChild = false;
    /** specify the width of the button, defaults to auto */
    this.width = "auto";
    /** watches for changing text content **/
    this.mutationObserver = createObserver("mutation", () => this.updateHasContent());
    /** the node type of the rendered child element */
    this.childElType = "button";
    /** determine if there is slotted content for styling purposes */
    this.hasContent = false;
    /** determine if loader present for styling purposes */
    this.hasLoader = false;
    // act on a requested or nearby form based on type
    this.handleClick = () => {
      const { childElType, formEl, type } = this;
      // this.type refers to type attribute, not child element type
      if (childElType === "button" && type !== "button") {
        if (type === "submit") {
          formEl === null || formEl === void 0 ? void 0 : formEl.requestSubmit();
        }
        else if (type === "reset") {
          formEl === null || formEl === void 0 ? void 0 : formEl.reset();
        }
      }
    };
  }
  hrefHandler(href) {
    this.childElType = href ? "a" : "button";
  }
  loadingChanged(newValue, oldValue) {
    if (!!newValue && !oldValue) {
      this.hasLoader = true;
    }
    if (!newValue && !!oldValue) {
      window.setTimeout(() => {
        this.hasLoader = false;
      }, 300);
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.childElType = this.href ? "a" : "button";
    this.hasLoader = this.loading;
    this.setupTextContentObserver();
    connectLabel(this);
    this.formEl = closestElementCrossShadowBoundary(this.el, this.form ? `#${this.form}` : "form");
  }
  disconnectedCallback() {
    var _a;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    disconnectLabel(this);
    this.formEl = null;
  }
  componentWillLoad() {
    {
      this.updateHasContent();
      if (this.childElType === "button" && !this.type) {
        this.type = "submit";
      }
    }
  }
  render() {
    const dir = getElementDir(this.el);
    const Tag = this.childElType;
    const loader = (h("div", { class: CSS$4.buttonLoader }, this.hasLoader ? (h("calcite-loader", { active: true, class: this.loading ? CSS$4.loadingIn : CSS$4.loadingOut, inline: true, label: this.intlLoading, scale: "m" })) : null));
    const iconStartEl = (h("calcite-icon", { class: { [CSS$4.icon]: true, [CSS$4.iconStart]: true }, flipRtl: this.iconFlipRtl === "start" || this.iconFlipRtl === "both", icon: this.iconStart, scale: "s" }));
    const iconEndEl = (h("calcite-icon", { class: { [CSS$4.icon]: true, [CSS$4.iconEnd]: true }, flipRtl: this.iconFlipRtl === "end" || this.iconFlipRtl === "both", icon: this.iconEnd, scale: "s" }));
    const contentEl = (h("span", { class: CSS$4.content }, h("slot", null)));
    return (h(Tag, { "aria-label": getLabelText(this), class: { [CSS_UTILITY.rtl]: dir === "rtl", [CSS$4.contentSlotted]: this.hasContent }, disabled: this.disabled || this.loading, href: this.childElType === "a" && this.href, name: this.childElType === "button" && this.name, onClick: this.handleClick, ref: (el) => (this.childEl = el), rel: this.childElType === "a" && this.rel, tabIndex: this.disabled || this.loading ? -1 : null, target: this.childElType === "a" && this.target, type: this.childElType === "button" && this.type }, loader, this.iconStart ? iconStartEl : null, this.hasContent ? contentEl : null, this.iconEnd ? iconEndEl : null));
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    this.childEl.focus();
  }
  updateHasContent() {
    var _a, _b;
    const slottedContent = this.el.textContent.trim().length > 0 || this.el.childNodes.length > 0;
    this.hasContent =
      this.el.childNodes.length === 1 && ((_a = this.el.childNodes[0]) === null || _a === void 0 ? void 0 : _a.nodeName) === "#text"
        ? ((_b = this.el.textContent) === null || _b === void 0 ? void 0 : _b.trim().length) > 0
        : slottedContent;
  }
  setupTextContentObserver() {
    var _a;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.observe(this.el, { childList: true, subtree: true });
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  onLabelClick() {
    this.handleClick();
    this.setFocus();
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "href": ["hrefHandler"],
    "loading": ["loadingChanged"]
  }; }
};
CalciteButton.style = calciteButtonCss;

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const CSS$3 = {
  container: "container",
  header: "header",
  footer: "footer",
  title: "title",
  subtitle: "subtitle",
  thumbnailWrapper: "thumbnail-wrapper",
  checkboxWrapper: "checkbox-wrapper"
};
const SLOTS$1 = {
  thumbnail: "thumbnail",
  title: "title",
  subtitle: "subtitle",
  footerLeading: "footer-leading",
  footerTrailing: "footer-trailing"
};
const TEXT = {
  select: "Select",
  deselect: "Deselect",
  loading: "Loading"
};

const calciteCardCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{max-width:100%;display:block}:host .calcite-card-container{display:flex;height:100%;flex-direction:column;justify-content:space-between;background-color:var(--calcite-ui-foreground-1);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);position:relative;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2);color:var(--calcite-ui-text-3);box-shadow:none}:host .calcite-card-container:hover{box-shadow:0 4px 16px 0 rgba(0, 0, 0, 0.08), 0 2px 8px 0 rgba(0, 0, 0, 0.04);z-index:1}:host .calcite-card-container:active{box-shadow:0 1px 6px -1px rgba(0, 0, 0, 0.16), 0 1px 2px -1px rgba(0, 0, 0, 0.08);transition-duration:75ms;z-index:1}.container{flex:1 1 auto;display:flex;flex-direction:column}:host([loading]) .calcite-card-container *:not(calcite-loader):not(.calcite-card-loader-container){opacity:0;pointer-events:none}:host([loading]) .calcite-card-loader-container{display:flex;align-items:center;position:absolute;top:0;right:0;bottom:0;left:0}.header,.footer{padding-top:0.75rem;padding-bottom:0.25rem;padding-left:0.75rem;padding-right:0.75rem;display:flex}.header{flex-direction:column}.footer{padding-top:0.25rem;padding-bottom:0.75rem;padding-left:0.75rem;padding-right:0.75rem;flex-direction:row;align-content:space-between;justify-content:space-between;margin-top:auto}.card-content{padding:0.75rem;color:var(--calcite-ui-text-3);font-size:var(--calcite-font-size--2);line-height:1.375}:host([selectable]) .calcite-card-container:active{box-shadow:0 1px 6px -1px rgba(0, 0, 0, 0.16), 0 1px 2px -1px rgba(0, 0, 0, 0.08)}:host([selected]) .calcite-card-container{border-color:var(--calcite-ui-brand)}slot[name=title]::slotted(*),*::slotted([slot=title]){font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);margin:0;font-size:var(--calcite-font-size--1);line-height:1.375}slot[name=subtitle]::slotted(*),*::slotted([slot=subtitle]){font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2);margin:0;margin-top:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375}slot[name=thumbnail]::slotted(img),img::slotted([slot=thumbnail]){max-width:100%;min-width:100%}slot[name=footer-leading]::slotted(*),*::slotted([slot=footer-leading]){align-self:center;font-size:var(--calcite-font-size--2);line-height:1.375;margin-inline-end:auto}slot[name=footer-trailing]::slotted(*),*::slotted([slot=footer-trailing]){align-self:center;font-size:var(--calcite-font-size--2);line-height:1.375}.thumbnail-wrapper{font-size:var(--calcite-font-size-0);line-height:1.375}.checkbox-wrapper{position:absolute;margin:0;padding:0;top:0.5rem;right:0.5rem}.calcite--rtl .checkbox-wrapper{right:auto;left:0.5rem}";

let CalciteCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteCardSelect = createEvent(this, "calciteCardSelect", 7);
    //--------------------------------------------------------------------------
    //
    //  Public Properties
    //
    //--------------------------------------------------------------------------
    /**  When true, the cards content is waiting to be loaded. This state shows a busy indicator.*/
    this.loading = false;
    /** Indicates whether the card is selected. */
    this.selected = false;
    /** Indicates whether the card is selectable. */
    this.selectable = false;
    /** string to override English loading text
     * @default "Loading"
     */
    this.intlLoading = TEXT.loading;
    /** string to override English select text for checkbox when selectable is true
     * @default "Select"
     */
    this.intlSelect = TEXT.select;
    /** string to override English deselect text for checkbox when selectable is true
     * @default "Deselect"
     */
    this.intlDeselect = TEXT.deselect;
    //--------------------------------------------------------------------------
    //
    //  Private State/Props
    //
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.cardSelectClick = () => {
      this.selectCard();
    };
    this.cardSelectKeyDown = (e) => {
      switch (getKey(e.key)) {
        case " ":
        case "Enter":
          this.selectCard();
          e.preventDefault();
          break;
      }
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  render() {
    const dir = getElementDir(this.el);
    return (h("div", { class: { "calcite-card-container": true, [CSS_UTILITY.rtl]: dir === "rtl" } }, this.loading ? (h("div", { class: "calcite-card-loader-container" }, h("calcite-loader", { active: true, label: this.intlLoading }))) : null, h("section", { "aria-busy": this.loading.toString(), class: { [CSS$3.container]: true } }, this.selectable ? this.renderCheckbox() : null, this.renderThumbnail(), this.renderHeader(), h("div", { class: "card-content" }, h("slot", null)), this.renderFooter())));
  }
  selectCard() {
    this.selected = !this.selected;
    this.calciteCardSelect.emit();
  }
  renderThumbnail() {
    const hasThumbnail = this.el.querySelector(`[slot=${SLOTS$1.thumbnail}]`);
    return hasThumbnail ? (h("div", { class: CSS$3.thumbnailWrapper }, h("slot", { name: SLOTS$1.thumbnail }))) : null;
  }
  renderCheckbox() {
    const checkboxLabel = this.selected ? this.intlDeselect : this.intlSelect;
    return (h("calcite-label", { class: CSS$3.checkboxWrapper, onClick: this.cardSelectClick, onKeyDown: this.cardSelectKeyDown }, h("calcite-checkbox", { checked: this.selected, label: checkboxLabel })));
  }
  renderHeader() {
    const title = this.el.querySelector(`[slot=${SLOTS$1.title}]`);
    const subtitle = this.el.querySelector(`[slot=${SLOTS$1.subtitle}]`);
    const hasHeader = title || subtitle;
    return hasHeader ? (h("header", { class: CSS$3.header }, h("slot", { name: SLOTS$1.title }), h("slot", { name: SLOTS$1.subtitle }))) : null;
  }
  renderFooter() {
    const leadingFooter = this.el.querySelector(`[slot=${SLOTS$1.footerLeading}]`);
    const trailingFooter = this.el.querySelector(`[slot=${SLOTS$1.footerTrailing}]`);
    const hasFooter = leadingFooter || trailingFooter;
    return hasFooter ? (h("footer", { class: CSS$3.footer }, h("slot", { name: SLOTS$1.footerLeading }), h("slot", { name: SLOTS$1.footerTrailing }))) : null;
  }
  get el() { return getElement(this); }
};
CalciteCard.style = calciteCardCss;

const calciteCheckboxCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]){--calcite-checkbox-size:0.75rem}:host([scale=m]){--calcite-checkbox-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-checkbox-size:1rem}:host{display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}:host .check-svg{overflow:hidden;display:block;background-color:var(--calcite-ui-foreground-1);pointer-events:none;box-sizing:border-box;transition-property:all;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);stroke:currentColor;stroke-width:1;fill:currentColor;width:var(--calcite-checkbox-size);height:var(--calcite-checkbox-size);box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input);color:var(--calcite-ui-background)}:host([checked]) .check-svg,:host([indeterminate]) .check-svg{background-color:var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand)}:host([hovered]) .toggle .check-svg,:host .toggle:hover .check-svg{box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}:host .toggle:focus .check-svg,:host .toggle:active .check-svg{box-shadow:inset 0 0 0 1px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-brand);transition:150ms ease-in-out}:host([disabled]){cursor:default;opacity:var(--calcite-ui-opacity-disabled);pointer-events:none}::slotted(input[slot=hidden-form-input]){bottom:0 !important;left:0 !important;margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;right:0 !important;top:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";

let CalciteCheckbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteInternalCheckboxBlur = createEvent(this, "calciteInternalCheckboxBlur", 7);
    this.calciteCheckboxChange = createEvent(this, "calciteCheckboxChange", 7);
    this.calciteInternalCheckboxFocus = createEvent(this, "calciteInternalCheckboxFocus", 7);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** The checked state of the checkbox. */
    this.checked = false;
    /** True if the checkbox is disabled */
    this.disabled = false;
    /**
     * The hovered state of the checkbox.
     * @internal
     */
    this.hovered = false;
    /**
     * True if the checkbox is initially indeterminate,
     * which is independent from its checked state
     * https://css-tricks.com/indeterminate-checkboxes/
     * */
    this.indeterminate = false;
    /**
     * When true, makes the component required for form-submission.
     *
     * @internal
     */
    this.required = false;
    /** specify the scale of the checkbox, defaults to m */
    this.scale = "m";
    //--------------------------------------------------------------------------
    //
    //  Private Properties
    //
    //--------------------------------------------------------------------------
    this.checkedPath = "M5.5 12L2 8.689l.637-.636L5.5 10.727l8.022-7.87.637.637z";
    this.indeterminatePath = "M13 8v1H3V8z";
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.getPath = () => this.indeterminate ? this.indeterminatePath : this.checked ? this.checkedPath : "";
    this.toggle = () => {
      if (!this.disabled) {
        this.checked = !this.checked;
        this.setFocus();
        this.indeterminate = false;
        this.calciteCheckboxChange.emit();
      }
    };
    this.keyDownHandler = (event) => {
      if (event.key === " " || event.key === "Enter") {
        this.toggle();
        event.preventDefault();
      }
    };
    this.clickHandler = () => {
      this.toggle();
    };
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    this.onToggleBlur = () => {
      this.calciteInternalCheckboxBlur.emit(false);
    };
    this.onToggleFocus = () => {
      this.calciteInternalCheckboxFocus.emit(true);
    };
    this.onLabelClick = () => {
      this.toggle();
    };
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    var _a;
    (_a = this.toggleEl) === null || _a === void 0 ? void 0 : _a.focus();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.guid = this.el.id || `calcite-checkbox-${guid()}`;
    connectLabel(this);
    connectForm(this);
  }
  disconnectedCallback() {
    disconnectLabel(this);
    disconnectForm(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    return (h(Host, { onClick: this.clickHandler, onKeyDown: this.keyDownHandler }, h("div", { "aria-checked": this.checked.toString(), "aria-label": getLabelText(this), class: "toggle", onBlur: this.onToggleBlur, onFocus: this.onToggleFocus, ref: (toggleEl) => (this.toggleEl = toggleEl), role: "checkbox", tabIndex: 0 }, h("svg", { class: "check-svg", viewBox: "0 0 16 16" }, h("path", { d: this.getPath() })), h("slot", null)), h(HiddenFormInputSlot, { component: this })));
  }
  get el() { return getElement(this); }
};
CalciteCheckbox.style = calciteCheckboxCss;

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const CSS$2 = {
  icon: "icon",
  flipRtl: "flip-rtl"
};

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
/**
 * Icon data cache.
 * Exported for testing purposes.
 * @private
 */
const iconCache = {};
/**
 * Icon request cache.
 * Exported for testing purposes.
 * @private
 */
const requestCache = {};
const scaleToPx = {
  s: 16,
  m: 24,
  l: 32
};
async function fetchIcon({ icon, scale }) {
  const size = scaleToPx[scale];
  const name = normalizeIconName(icon);
  const filled = name.charAt(name.length - 1) === "F";
  const iconName = filled ? name.substring(0, name.length - 1) : name;
  const id = `${iconName}${size}${filled ? "F" : ""}`;
  if (iconCache[id]) {
    return iconCache[id];
  }
  if (!requestCache[id]) {
    requestCache[id] = fetch(getAssetPath(`./assets/calcite-icon/${id}.json`))
      .then((resp) => resp.json())
      .catch(() => {
      console.error(`"${id}" is not a valid calcite-ui-icon name`);
      return "";
    });
  }
  const path = await requestCache[id];
  iconCache[id] = path;
  return path;
}
/**
 * Normalize the icon name to match the path data module exports.
 * Exported for testing purposes.
 * @private
 */
function normalizeIconName(name) {
  const numberLeadingName = !isNaN(Number(name.charAt(0)));
  const parts = name.split("-");
  if (parts.length === 1) {
    return numberLeadingName ? `i${name}` : name;
  }
  return parts
    .map((part, index) => {
    if (index === 0) {
      return numberLeadingName ? `i${part.toUpperCase()}` : part;
    }
    return part.charAt(0).toUpperCase() + part.slice(1);
  })
    .join("");
}

const calciteIconCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:inline-flex}:host([scale=s]){width:1rem;height:1rem;min-width:1rem;min-height:1rem}:host([scale=m]){width:1.5rem;height:1.5rem;min-width:1.5rem;min-height:1.5rem}:host([scale=l]){width:2rem;height:2rem;min-width:2rem;min-height:2rem}.flip-rtl{transform:scaleX(-1)}.svg{display:block}";

let CalciteIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /**
     * The name of the icon to display. The value of this property must match the icon name from https://esri.github.io/calcite-ui-icons/.
     */
    this.icon = null;
    /**
     * When true, the icon will be flipped when the element direction is 'rtl'.
     */
    this.flipRtl = false;
    /**
     * Icon scale.
     */
    this.scale = "m";
    this.visible = false;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.waitUntilVisible(() => {
      this.visible = true;
      this.loadIconPathData();
    });
  }
  disconnectedCallback() {
    var _a;
    (_a = this.intersectionObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    this.intersectionObserver = null;
  }
  async componentWillLoad() {
    this.loadIconPathData();
  }
  render() {
    const { el, flipRtl, pathData, scale, textLabel } = this;
    const dir = getElementDir(el);
    const size = scaleToPx[scale];
    const semantic = !!textLabel;
    const paths = [].concat(pathData || "");
    return (h(Host, { "aria-hidden": (!semantic).toString(), "aria-label": semantic ? textLabel : null, role: semantic ? "img" : null }, h("svg", { class: {
        [CSS$2.flipRtl]: dir === "rtl" && flipRtl,
        svg: true
      }, fill: "currentColor", height: "100%", viewBox: `0 0 ${size} ${size}`, width: "100%", xmlns: "http://www.w3.org/2000/svg" }, paths.map((path) => typeof path === "string" ? (h("path", { d: path })) : (h("path", { d: path.d, opacity: "opacity" in path ? path.opacity : 1 }))))));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  async loadIconPathData() {
    const { icon, scale, visible } = this;
    if (!icon || !visible) {
      return;
    }
    this.pathData = await fetchIcon({ icon, scale });
  }
  waitUntilVisible(callback) {
    this.intersectionObserver = createObserver("intersection", (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.intersectionObserver.disconnect();
          this.intersectionObserver = null;
          callback();
        }
      });
    }, { rootMargin: "50px" });
    if (!this.intersectionObserver) {
      callback();
      return;
    }
    this.intersectionObserver.observe(this.el);
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return getElement(this); }
  static get watchers() { return {
    "icon": ["loadIconPathData"],
    "scale": ["loadIconPathData"]
  }; }
};
CalciteIcon.style = calciteIconCss;

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const CSS$1 = {
  container: "container"
};

const calciteLabelCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([alignment=start]),:host([alignment=end]) .calcite--rtl{text-align:left}:host([alignment=end]),:host([alignment=start]) .calcite--rtl{text-align:right}:host([alignment=center]){text-align:center}:host([scale=s]) .container{font-size:var(--calcite-font-size--2);line-height:1rem;margin-bottom:0.5rem}:host([scale=m]) .container{font-size:var(--calcite-font-size--1);line-height:1rem;margin-bottom:0.75rem}:host([scale=l]) .container{font-size:var(--calcite-font-size-0);line-height:1.25rem;margin-bottom:1rem}:host .container{color:var(--calcite-ui-text-1);cursor:pointer;width:100%;margin-top:0;margin-right:0;margin-left:0;line-height:1.375}:host([layout=default]) .container{display:flex;flex-direction:column;grid-gap:0.25rem;gap:0.25rem}:host([layout=inline]) .container,:host([layout=inline-space-between]) .container{display:flex;align-items:center;flex-direction:row;grid-gap:0.5rem;gap:0.5rem}:host([layout=inline][scale=l]) .container{grid-gap:0.75rem;gap:0.75rem}:host([layout=inline-space-between]) .container{justify-content:space-between}:host([disabled])>.container{pointer-events:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted(*){pointer-events:none}:host([disabled]) ::slotted(*[disabled]),:host([disabled]) ::slotted(*[disabled] *){--bg-opacity:1}:host([disabled]) ::slotted(calcite-input-message:not([active])){--bg-opacity:0}:host([disable-spacing]) .container{grid-gap:0;gap:0;margin:0}";

let CalciteLabel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteInternalLabelClick = createEvent(this, "calciteInternalLabelClick", 3);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** specify the text alignment of the label */
    this.alignment = "start";
    /** specify the status of the label and any child input / input messages */
    this.status = "idle";
    /** specify the scale of the label, defaults to m */
    this.scale = "m";
    /** is the wrapped element positioned inline with the label slotted text */
    this.layout = "default";
    /** eliminates any space around the label */
    this.disableSpacing = false;
    /** is the label disabled  */
    this.disabled = false;
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.labelClickHandler = (event) => {
      this.calciteInternalLabelClick.emit({
        sourceEvent: event
      });
    };
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  render() {
    const dir = getElementDir(this.el);
    return (h(Host, { onClick: this.labelClickHandler }, h("div", { class: { [CSS$1.container]: true, [CSS_UTILITY.rtl]: dir === "rtl" } }, h("slot", null))));
  }
  get el() { return getElement(this); }
};
CalciteLabel.style = calciteLabelCss;

const calciteLoaderCss = "@charset \"UTF-8\";@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{align-items:center;position:relative;justify-content:center;display:none;margin-left:auto;margin-right:auto;opacity:1;padding-top:4rem;padding-bottom:4rem;min-height:var(--calcite-loader-size);font-size:var(--calcite-loader-font-size);stroke:var(--calcite-ui-brand);stroke-width:3;fill:none;transform:scale(1, 1);animation:loader-color-shift 6s alternate-reverse infinite linear}:host([scale=s]){--calcite-loader-font-size:var(--calcite-font-size--2);--calcite-loader-size:2rem;--calcite-loader-size-inline:0.75rem}:host([scale=m]){--calcite-loader-font-size:var(--calcite-font-size-0);--calcite-loader-size:4rem;--calcite-loader-size-inline:1rem}:host([scale=l]){--calcite-loader-font-size:var(--calcite-font-size-2);--calcite-loader-size:6rem;--calcite-loader-size-inline:1.25rem}:host([no-padding]){padding-top:0;padding-bottom:0}:host([active]){display:flex}.loader__text{display:block;font-size:var(--calcite-font-size--2);line-height:1rem;text-align:center;color:var(--calcite-ui-text-1);margin-top:calc(var(--calcite-loader-size) + 1.5rem)}.loader__percentage{display:block;position:absolute;color:var(--calcite-ui-text-1);text-align:center;font-size:var(--calcite-loader-font-size);width:var(--calcite-loader-size);left:50%;margin-left:calc(var(--calcite-loader-size) / 2 * -1);line-height:0.25;transform:scale(1, 1)}.loader__svgs{position:absolute;overflow:visible;opacity:1;width:var(--calcite-loader-size);height:var(--calcite-loader-size);left:50%;margin-left:calc(var(--calcite-loader-size) / 2 * -1);transform:scale(1, 1)}.loader__svg{position:absolute;overflow:visible;top:0;left:0;transform-origin:center;width:var(--calcite-loader-size);height:var(--calcite-loader-size);animation-iteration-count:infinite;animation-timing-function:linear;animation-name:loader-clockwise}@supports (display: grid){.loader__svg--1{animation-name:loader-offset-1}.loader__svg--2{animation-name:loader-offset-2}.loader__svg--3{animation-name:loader-offset-3}}:host([type=determinate]){animation:none;stroke:var(--calcite-ui-border-3)}:host([type=determinate]) .loader__svg--3{animation:none;stroke:var(--calcite-ui-brand);stroke-dasharray:150.79632;transform:rotate(-90deg);transition:all 100ms linear}:host([inline]){position:relative;margin:0;padding-top:0;padding-bottom:0;animation:none;stroke:currentColor;stroke-width:2;height:var(--calcite-loader-size-inline);min-height:var(--calcite-loader-size-inline);width:var(--calcite-loader-size-inline);margin-right:calc(var(--calcite-loader-size-inline) * 0.5);vertical-align:calc(var(--calcite-loader-size-inline) * -1 * 0.2)}:host([inline][dir=rtl]){margin-right:0;margin-left:calc(var(--calcite-loader-size-inline) * 0.5)}:host([active][inline]){display:inline-block}:host([inline]) .loader__svgs{top:0;left:0;margin:0;width:var(--calcite-loader-size-inline);height:var(--calcite-loader-size-inline)}:host([inline]) .loader__svg{width:var(--calcite-loader-size-inline);height:var(--calcite-loader-size-inline)}:host([complete]){opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity 200ms linear 1000ms, transform 200ms linear 1000ms}:host([complete]) .loader__svgs{opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity 180ms linear 800ms, transform 180ms linear 800ms}:host([complete]) .loader__percentage{color:var(--calcite-ui-brand);transform:scale(1.05, 1.05);transform-origin:center;transition:color 200ms linear, transform 200ms linear}.loader__svg--1{stroke-dasharray:27.9252444444% 139.6262222222%;animation-duration:0.72s}@keyframes loader-offset-1{0%{stroke-dasharray:27.9252444444% 251.3272%;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222% 139.6262222222%;stroke-dashoffset:-83.7757333333%}100%{stroke-dasharray:27.9252444444% 251.3272%;stroke-dashoffset:-279.2524444444%}}.loader__svg--2{stroke-dasharray:55.8504888889% 139.6262222222%;animation-duration:0.96s}@keyframes loader-offset-2{0%{stroke-dasharray:55.8504888889% 223.4019555556%;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222% 139.6262222222%;stroke-dashoffset:-97.7383555556%}100%{stroke-dasharray:55.8504888889% 223.4019555556%;stroke-dashoffset:-279.2524444444%}}.loader__svg--3{stroke-dasharray:13.9626222222% 139.6262222222%;animation-duration:1.16s}@keyframes loader-offset-3{0%{stroke-dasharray:13.9626222222% 265.2898222222%;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222% 139.6262222222%;stroke-dashoffset:-76.7944222222%}100%{stroke-dasharray:13.9626222222% 265.2898222222%;stroke-dashoffset:-279.2524444444%}}@keyframes loader-color-shift{0%{stroke:var(--calcite-ui-brand)}33%{stroke:var(--calcite-ui-brand-press)}66%{stroke:var(--calcite-ui-brand-hover)}100%{stroke:var(--calcite-ui-brand)}}@keyframes loader-clockwise{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";

let CalciteLoader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** Show the loader */
    this.active = false;
    /** Inline loaders are smaller and will appear to the left of the text */
    this.inline = false;
    /** Speficy the scale of the loader. Defaults to "m" */
    this.scale = "m";
    /** Percent complete of 100, only valid for determinate indicators */
    this.value = 0;
    /** Text which should appear under the loading indicator (optional) */
    this.text = "";
    /** Turn off spacing around the loader */
    this.noPadding = false;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  render() {
    const { el, inline, label, scale, text, type, value } = this;
    const id = el.id || guid();
    const radiusRatio = 0.45;
    const size = inline ? this.getInlineSize(scale) : this.getSize(scale);
    const radius = size * radiusRatio;
    const viewbox = `0 0 ${size} ${size}`;
    const isDeterminate = type === "determinate";
    const circumference = 2 * radius * Math.PI;
    const progress = (value / 100) * circumference;
    const remaining = circumference - progress;
    const valueNow = Math.floor(value);
    const hostAttributes = {
      "aria-valuenow": valueNow,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      complete: valueNow === 100
    };
    const svgAttributes = { r: radius, cx: size / 2, cy: size / 2 };
    const determinateStyle = { "stroke-dasharray": `${progress} ${remaining}` };
    return (h(Host, Object.assign({ "aria-label": label, id: id, role: "progressbar" }, (isDeterminate ? hostAttributes : {})), h("div", { class: "loader__svgs" }, h("svg", { class: "loader__svg loader__svg--1", viewBox: viewbox }, h("circle", Object.assign({}, svgAttributes))), h("svg", { class: "loader__svg loader__svg--2", viewBox: viewbox }, h("circle", Object.assign({}, svgAttributes))), h("svg", Object.assign({ class: "loader__svg loader__svg--3", viewBox: viewbox }, (isDeterminate ? { style: determinateStyle } : {})), h("circle", Object.assign({}, svgAttributes)))), text && h("div", { class: "loader__text" }, text), isDeterminate && h("div", { class: "loader__percentage" }, value)));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Return the proper sizes based on the scale property
   */
  getSize(scale) {
    return {
      s: 32,
      m: 56,
      l: 80
    }[scale];
  }
  getInlineSize(scale) {
    return {
      s: 12,
      m: 16,
      l: 20
    }[scale];
  }
  get el() { return getElement(this); }
};
CalciteLoader.style = calciteLoaderCss;

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
var TreeSelectionMode;
(function (TreeSelectionMode) {
  TreeSelectionMode["Single"] = "single";
  TreeSelectionMode["Multi"] = "multi";
  TreeSelectionMode["Children"] = "children";
  TreeSelectionMode["MultiChildren"] = "multi-children";
  TreeSelectionMode["Ancestors"] = "ancestors";
})(TreeSelectionMode || (TreeSelectionMode = {}));

const calciteTreeCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block;outline:2px solid transparent;outline-offset:2px}";

let CalciteTree = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteTreeSelect = createEvent(this, "calciteTreeSelect", 7);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** Display indentation guide lines */
    this.lines = false;
    /** Display input
     * @deprecated use "ancestors" selection-mode for checkbox input
     */
    this.inputEnabled = false;
    /** Specify the scale of the tree, defaults to m */
    this.scale = "m";
    /** Customize how tree selection works (single, multi, children, multi-children, ancestors)
     * @default "single"
     * @see [TreeSelectionMode](https://github.com/Esri/calcite-components/blob/master/src/components/calcite-tree/interfaces.ts#L5)
     */
    this.selectionMode = TreeSelectionMode.Single;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillRender() {
    const parent = this.el.parentElement.closest("calcite-tree");
    this.lines = parent ? parent.lines : this.lines;
    this.scale = parent ? parent.scale : this.scale;
    this.selectionMode = parent ? parent.selectionMode : this.selectionMode;
    this.child = !!parent;
  }
  render() {
    return (h(Host, { "aria-multiselectable": (this.selectionMode === TreeSelectionMode.Multi ||
        this.selectionMode === TreeSelectionMode.MultiChildren).toString(), role: !this.child ? "tree" : undefined, tabIndex: this.getRootTabIndex() }, h("slot", null)));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  onFocus() {
    if (!this.child) {
      const focusTarget = this.el.querySelector("calcite-tree-item[selected]") ||
        this.el.querySelector("calcite-tree-item");
      focusElement(focusTarget);
    }
  }
  onFocusIn(event) {
    const focusedFromRootOrOutsideTree = event.relatedTarget === this.el || !this.el.contains(event.relatedTarget);
    if (focusedFromRootOrOutsideTree) {
      this.el.tabIndex = -1;
    }
  }
  onFocusOut(event) {
    const willFocusOutsideTree = !this.el.contains(event.relatedTarget);
    if (willFocusOutsideTree) {
      this.el.tabIndex = this.getRootTabIndex();
    }
  }
  onClick(e) {
    const target = e.target;
    const childItems = nodeListToArray(target.querySelectorAll("calcite-tree-item"));
    if (this.child) {
      return;
    }
    if (!this.child) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (this.selectionMode === TreeSelectionMode.Ancestors && !this.child) {
      this.updateAncestorTree(e);
      return;
    }
    const shouldSelect = this.selectionMode !== null &&
      (!target.hasChildren ||
        (target.hasChildren &&
          (this.selectionMode === TreeSelectionMode.Children ||
            this.selectionMode === TreeSelectionMode.MultiChildren)));
    const shouldModifyToCurrentSelection = e.detail.modifyCurrentSelection &&
      (this.selectionMode === TreeSelectionMode.Multi ||
        this.selectionMode === TreeSelectionMode.MultiChildren);
    const shouldSelectChildren = this.selectionMode === TreeSelectionMode.MultiChildren ||
      this.selectionMode === TreeSelectionMode.Children;
    const shouldClearCurrentSelection = !shouldModifyToCurrentSelection &&
      (((this.selectionMode === TreeSelectionMode.Single ||
        this.selectionMode === TreeSelectionMode.Multi) &&
        childItems.length <= 0) ||
        this.selectionMode === TreeSelectionMode.Children ||
        this.selectionMode === TreeSelectionMode.MultiChildren);
    const shouldExpandTarget = this.selectionMode === TreeSelectionMode.Children ||
      this.selectionMode === TreeSelectionMode.MultiChildren;
    if (!this.child) {
      const targetItems = [];
      if (shouldSelect) {
        targetItems.push(target);
      }
      if (shouldSelectChildren) {
        childItems.forEach((treeItem) => {
          targetItems.push(treeItem);
        });
      }
      if (shouldClearCurrentSelection) {
        const selectedItems = nodeListToArray(this.el.querySelectorAll("calcite-tree-item[selected]"));
        selectedItems.forEach((treeItem) => {
          if (!targetItems.includes(treeItem)) {
            treeItem.selected = false;
          }
        });
      }
      if (shouldExpandTarget && !e.detail.forceToggle) {
        target.expanded = true;
      }
      if (shouldModifyToCurrentSelection) {
        window.getSelection().removeAllRanges();
      }
      if ((shouldModifyToCurrentSelection && target.selected) ||
        (shouldSelectChildren && e.detail.forceToggle)) {
        targetItems.forEach((treeItem) => {
          treeItem.selected = false;
        });
      }
      else {
        targetItems.forEach((treeItem) => {
          treeItem.selected = true;
        });
      }
    }
    this.calciteTreeSelect.emit({
      selected: nodeListToArray(this.el.querySelectorAll("calcite-tree-item")).filter((i) => i.selected)
    });
  }
  updateAncestorTree(e) {
    const item = e.target;
    const children = item.querySelectorAll("calcite-tree-item");
    const ancestors = [];
    let parent = item.parentElement.closest("calcite-tree-item");
    while (parent) {
      ancestors.push(parent);
      parent = parent.parentElement.closest("calcite-tree-item");
    }
    item.selected = !item.selected;
    item.indeterminate = false;
    if (children === null || children === void 0 ? void 0 : children.length) {
      children.forEach((el) => {
        el.selected = item.selected;
        el.indeterminate = false;
      });
    }
    if (ancestors) {
      ancestors.forEach((ancestor) => {
        const descendants = nodeListToArray(ancestor.querySelectorAll("calcite-tree-item"));
        const activeDescendants = descendants.filter((el) => el.selected);
        if (activeDescendants.length === 0) {
          ancestor.selected = false;
          ancestor.indeterminate = false;
          return;
        }
        const indeterminate = activeDescendants.length < descendants.length;
        ancestor.indeterminate = indeterminate;
        ancestor.selected = !indeterminate;
      });
    }
    this.calciteTreeSelect.emit({
      selected: nodeListToArray(this.el.querySelectorAll("calcite-tree-item")).filter((i) => i.selected)
    });
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  getRootTabIndex() {
    return !this.child ? 0 : -1;
  }
  get el() { return getElement(this); }
};
CalciteTree.style = calciteTreeCss;

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const CSS = {
  checkboxLabel: "checkbox-label",
  checkbox: "checkbox",
  chevron: "chevron",
  nodeContainer: "node-container",
  childrenContainer: "children-container",
  bulletPointIcon: "bullet-point",
  checkmarkIcon: "checkmark"
};
const SLOTS = {
  children: "children"
};
const ICONS = {
  bulletPoint: "bullet-point",
  checkmark: "check",
  chevronRight: "chevron-right"
};

const calciteTreeItemCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block;cursor:pointer;outline:2px solid transparent;outline-offset:2px;max-width:100%;color:var(--calcite-ui-text-3)}:host([scale=s]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .node-container{--calcite-tree-padding-y:0.25rem}:host([scale=s]) .node-container .checkbox,:host([scale=s]) .node-container .chevron,:host([scale=s]) .node-container .checkmark,:host([scale=s]) .node-container .bullet-point{margin-inline:0.25rem}:host([scale=m]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .node-container{--calcite-tree-padding-y:0.5rem}:host([scale=m]) .node-container .checkbox,:host([scale=m]) .node-container .chevron,:host([scale=m]) .node-container .checkmark,:host([scale=m]) .node-container .bullet-point{margin-inline:0.5rem}:host([scale=l]){font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .node-container{--calcite-tree-padding-y:0.75rem}:host([scale=l]) .node-container .checkbox,:host([scale=l]) .node-container .chevron,:host([scale=l]) .node-container .checkmark,:host([scale=l]) .node-container .bullet-point{margin-inline:0.75rem}:host([lines]) .children-container:after{transition-property:all;transition-duration:150ms;transition-timing-function:ease-in-out;transition-delay:0s;transition-property:background-color, border-color, color, fill, stroke;top:0;position:absolute;width:1px;height:96%;content:\"\";background-color:var(--calcite-ui-border-2);z-index:-1}:host(:not([lines])) .node-container:after{display:none}::slotted(*){word-wrap:break-word;overflow-wrap:break-word;min-width:0;max-width:100%;color:inherit;text-decoration:none !important}::slotted(*):hover{text-decoration:none !important}::slotted(a){width:100%;text-decoration:none}:host{outline-offset:0;outline-color:transparent;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.checkbox{outline:2px solid transparent;outline-offset:2px;line-height:0}.checkbox-label{display:flex;align-items:center;pointer-events:none}.children-container{position:relative;overflow:hidden;height:0;margin-inline-start:1.25rem;transform:scaleY(0);opacity:0;transition:0.15s cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity 0.15s cubic-bezier(0.215, 0.44, 0.42, 0.88), all 0.15s ease-in-out;transform-origin:top}:host([expanded])>.children-container{transform:scaleY(1);opacity:1;height:auto}.node-container{display:flex;align-items:center;position:relative;padding:var(--calcite-tree-padding-y) 0}.node-container .checkmark,.node-container .bullet-point{transition-property:all;transition-duration:150ms;transition-timing-function:ease-in-out;transition-delay:0s;opacity:0;color:var(--calcite-ui-border-1)}.node-container:hover .checkmark,.node-container:hover .bullet-point,:host([selected]) .node-container:hover .checkmark,:host([selected]) .node-container:hover .bullet-point,:host(:focus) .node-container .checkmark,:host(:focus) .node-container .bullet-point{opacity:1}:host([selected])>.node-container,:host([selected])>.node-container:hover{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}:host([selected])>.node-container .bullet-point,:host([selected])>.node-container .checkmark,:host([selected])>.node-container:hover .bullet-point,:host([selected])>.node-container:hover .checkmark{opacity:1;color:var(--calcite-ui-brand)}:host(:not([has-children])):host([scale=s])>.node-container[data-selection-mode=ancestors] .checkbox{padding-inline-start:1.25rem}:host(:not([has-children])):host([scale=m])>.node-container[data-selection-mode=ancestors] .checkbox{padding-inline-start:1.5rem}:host(:not([has-children])):host([scale=l])>.node-container[data-selection-mode=ancestors] .checkbox{padding-inline-start:1.75rem}:host([has-children])>.node-container[data-selection-mode=ancestors] .checkbox{margin-inline-start:0}:host([has-children])>.node-container .bullet-point,:host([has-children])>.node-container .checkmark{display:none}:host([has-children][expanded]:not([selected]))>.node-container ::slotted(*){font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}:host([has-children][selected])>.node-container[data-selection-mode=children],:host([has-children][selected])>.node-container[data-selection-mode=multi-children]{color:var(--calcite-ui-brand)}.chevron{transition-property:all;transition-duration:150ms;transition-timing-function:ease-in-out;transition-delay:0s;position:relative;align-self:center;color:var(--calcite-ui-text-3);flex:0 0 auto;transform:rotate(0deg)}.calcite--rtl .chevron{transform:rotate(180deg)}:host([expanded])>.node-container>.chevron{transform:rotate(90deg)}:host([selected]) .checkmark,:host([selected]) .bullet-point{color:var(--calcite-ui-brand)}";

let CalciteTreeItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteTreeItemSelect = createEvent(this, "calciteTreeItemSelect", 7);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** Is the item currently selected */
    this.selected = false;
    /** True if the item is in an expanded state */
    this.expanded = false;
    /** @internal Is the parent of this item expanded? */
    this.parentExpanded = false;
    /** @internal What level of depth is this item at? */
    this.depth = -1;
    /** @internal Does this tree item have a tree inside it? */
    this.hasChildren = null;
    this.iconClickHandler = (event) => {
      event.stopPropagation();
      this.expanded = !this.expanded;
      if (this.selectionMode !== TreeSelectionMode.Ancestors) {
        this.calciteTreeItemSelect.emit({
          modifyCurrentSelection: event.shiftKey,
          forceToggle: true
        });
      }
    };
    this.childrenClickHandler = (event) => event.stopPropagation();
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.updateParentIsExpanded = (el, expanded) => {
      const items = getSlotted(el, SLOTS.children, {
        all: true,
        selector: "calcite-tree-item"
      });
      items.forEach((item) => (item.parentExpanded = expanded));
    };
    this.updateAncestorTree = () => {
      if (this.selected && this.selectionMode === TreeSelectionMode.Ancestors) {
        const ancestors = [];
        let parent = this.parentTreeItem;
        while (parent) {
          ancestors.push(parent);
          parent = parent.parentElement.closest("calcite-tree-item");
        }
        ancestors.forEach((item) => (item.indeterminate = true));
        return;
      }
    };
  }
  expandedHandler(newValue) {
    this.updateParentIsExpanded(this.el, newValue);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.parentTreeItem = this.el.parentElement.closest("calcite-tree-item");
    if (this.parentTreeItem) {
      const { expanded } = this.parentTreeItem;
      this.updateParentIsExpanded(this.parentTreeItem, expanded);
    }
  }
  componentWillRender() {
    this.hasChildren = !!this.el.querySelector("calcite-tree");
    this.depth = 0;
    let parentTree = this.el.closest("calcite-tree");
    if (!parentTree) {
      return;
    }
    this.selectionMode = parentTree.selectionMode;
    this.scale = parentTree.scale || "m";
    this.lines = parentTree.lines;
    let nextParentTree;
    while (parentTree) {
      nextParentTree = parentTree.parentElement.closest("calcite-tree");
      if (nextParentTree === parentTree) {
        break;
      }
      else {
        parentTree = nextParentTree;
        this.depth = this.depth + 1;
      }
    }
  }
  componentDidLoad() {
    this.updateAncestorTree();
  }
  render() {
    const rtl = getElementDir(this.el) === "rtl";
    const showBulletPoint = this.selectionMode === TreeSelectionMode.Single ||
      this.selectionMode === TreeSelectionMode.Children;
    const showCheckmark = this.selectionMode === TreeSelectionMode.Multi ||
      this.selectionMode === TreeSelectionMode.MultiChildren;
    const chevron = this.hasChildren ? (h("calcite-icon", { class: {
        [CSS.chevron]: true,
        [CSS_UTILITY.rtl]: rtl
      }, "data-test-id": "icon", icon: ICONS.chevronRight, onClick: this.iconClickHandler, scale: "s" })) : null;
    const checkbox = this.selectionMode === TreeSelectionMode.Ancestors ? (h("label", { class: CSS.checkboxLabel }, h("calcite-checkbox", { checked: this.selected, class: CSS.checkbox, "data-test-id": "checkbox", indeterminate: this.hasChildren && this.indeterminate, scale: this.scale, tabIndex: -1 }), h("slot", null))) : null;
    const selectedIcon = showBulletPoint
      ? ICONS.bulletPoint
      : showCheckmark
        ? ICONS.checkmark
        : null;
    const bulletOrCheckIcon = selectedIcon ? (h("calcite-icon", { class: {
        [CSS.bulletPointIcon]: selectedIcon === ICONS.bulletPoint,
        [CSS.checkmarkIcon]: selectedIcon === ICONS.checkmark,
        [CSS_UTILITY.rtl]: rtl
      }, icon: selectedIcon, scale: "s" })) : null;
    const hidden = !(this.parentExpanded || this.depth === 1);
    return (h(Host, { "aria-expanded": this.hasChildren ? this.expanded.toString() : undefined, "aria-hidden": hidden.toString(), "aria-selected": this.selected ? "true" : showCheckmark ? "false" : undefined, "calcite-hydrated-hidden": hidden, role: "treeitem", tabindex: this.parentExpanded || this.depth === 1 ? "0" : "-1" }, h("div", { class: {
        [CSS.nodeContainer]: true,
        [CSS_UTILITY.rtl]: rtl
      }, "data-selection-mode": this.selectionMode, ref: (el) => (this.defaultSlotWrapper = el) }, chevron, bulletOrCheckIcon, checkbox ? checkbox : h("slot", null)), h("div", { class: {
        [CSS.childrenContainer]: true,
        [CSS_UTILITY.rtl]: rtl
      }, "data-test-id": "calcite-tree-children", onClick: this.childrenClickHandler, ref: (el) => (this.childrenSlotWrapper = el), role: this.hasChildren ? "group" : undefined }, h("slot", { name: SLOTS.children }))));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  onClick(e) {
    // Solve for if the item is clicked somewhere outside the slotted anchor.
    // Anchor is triggered anywhere you click
    const [link] = filterDirectChildren(this.el, "a");
    if (link && e.composedPath()[0].tagName.toLowerCase() !== "a") {
      const target = link.target === "" ? "_self" : link.target;
      window.open(link.href, target);
    }
    this.expanded = !this.expanded;
    this.calciteTreeItemSelect.emit({
      modifyCurrentSelection: e.shiftKey || this.selectionMode === TreeSelectionMode.Ancestors,
      forceToggle: false
    });
  }
  keyDownHandler(e) {
    let root;
    switch (getKey(e.key)) {
      case " ":
        this.calciteTreeItemSelect.emit({
          modifyCurrentSelection: e.shiftKey,
          forceToggle: false
        });
        e.preventDefault();
        e.stopPropagation();
        break;
      case "Enter":
        // activates a node, i.e., performs its default action. For parent nodes, one possible default action is to open or close the node. In single-select trees where selection does not follow focus (see note below), the default action is typically to select the focused node.
        const link = nodeListToArray(this.el.children).find((e) => e.matches("a"));
        if (link) {
          link.click();
          this.selected = true;
        }
        else {
          this.calciteTreeItemSelect.emit({
            modifyCurrentSelection: e.shiftKey,
            forceToggle: false
          });
        }
        e.preventDefault();
        e.stopPropagation();
        break;
      case "ArrowLeft":
        // When focus is on an open node, closes the node.
        if (this.hasChildren && this.expanded) {
          this.expanded = false;
          e.preventDefault();
          e.stopPropagation();
          break;
        }
        // When focus is on a child node that is also either an end node or a closed node, moves focus to its parent node.
        const parentItem = this.parentTreeItem;
        if (parentItem && (!this.hasChildren || this.expanded === false)) {
          parentItem.focus();
          e.preventDefault();
          e.stopPropagation();
          break;
        }
        // When focus is on a root node that is also either an end node or a closed node, does nothing.
        break;
      case "ArrowRight":
        // When focus is on a closed node, opens the node; focus does not move.
        if (this.hasChildren && this.expanded === false) {
          this.expanded = true;
          e.preventDefault();
          e.stopPropagation();
          break;
        }
        // When focus is on a open node, moves focus to the first child node.
        if (this.hasChildren && this.expanded) {
          this.el.querySelector("calcite-tree-item").focus();
          break;
        }
        // When focus is on an end node, does nothing.
        break;
      case "ArrowUp":
        const previous = this.el.previousElementSibling;
        if (previous && previous.matches("calcite-tree-item")) {
          previous.focus();
        }
        break;
      case "ArrowDown":
        const next = this.el.nextElementSibling;
        if (next && next.matches("calcite-tree-item")) {
          next.focus();
        }
        break;
      case "Home":
        root = this.el.closest("calcite-tree:not([child])");
        const firstNode = root.querySelector("calcite-tree-item");
        firstNode.focus();
        break;
      case "End":
        root = this.el.closest("calcite-tree:not([child])");
        let currentNode = root.children[root.children.length - 1]; // last child
        let currentTree = nodeListToArray(currentNode.children).find((e) => e.matches("calcite-tree"));
        while (currentTree) {
          currentNode = currentTree.children[root.children.length - 1];
          currentTree = nodeListToArray(currentNode.children).find((e) => e.matches("calcite-tree"));
        }
        currentNode.focus();
        break;
    }
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "expanded": ["expandedHandler"]
  }; }
};
CalciteTreeItem.style = calciteTreeItemCss;

const hubCardCss = ":host{display:block;font-family:\"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;font-size:16px}calcite-card{height:100%}hub-card{box-shadow:0 1px 2px rgba(0,0,0,0.15);transition:all 0.3s ease-in-out;padding:2px;margin:3px;transition:all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);position:relative}hub-card::after{content:'';position:absolute;z-index:-1;opacity:0;border-radius:5px;box-shadow:0 5px 15px rgba(0,0,0,0.3);transition:opacity 0.3s ease-in-out;transition:all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)}hub-card:hover{transform:scale(1.2, 1.2)}hub-card:hover::after{opacity:1}.hub-content-footer{grid-area:footer;padding:0 0 10px 60px}.hub-content-card:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2)}.hub-content-title{font:#101f28 !important;font-size:1rem;font-weight:700}.hub-content-url{text-decoration:none;color:black}.hub-content-url:hover{text-decoration:underline}.card-image{height:175px}.hub-content-summary,.hub-content-type{font-size:0.9rem;color:rgb(102, 102, 102);}.layout-vertical.hub-content-card{width:250px}.layout-vertical .hub-content-image{height:150px;flex:0 0 auto}.layout-vertical img.hub-content-image{width:100%;object-fit:cover}.hub-content-metadata{margin:0.5rem 0.8rem}.layout-horizontal.hub-content-card{display:flex}.layout-horizontal .hub-content-image{display:flex;flex:0 0 150px;max-height:115px}.layout-horizontal .hub-content-metadata{flex:1 1 auto;display:flex;flex-direction:column;overflow:hidden}.hub-content-details{color:#4c4c4c;font-size:0.8em;box-shadow:0 -1px #ccc;padding:15px 15px 0;grid-template-columns:repeat(2,50%);grid-gap:2px 5px;align-items:center;flex:1 auto;display:grid}.card-description{min-height:100px;overflow:hidden}.card-title{height:44px;overflow:hidden}";

let HubCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.portalUrl = "http://www.arcgis.com/sharing/rest/";
    this.item = "";
    this.contenttype = "Local Topic";
    /** Specify the layout of the card */
    this.layout = "vertical";
    this.buttonText = "Explore";
    // @Prop() content:any;
    this.metadata = [];
  }
  componentWillRender() {
    // this.metadata = [
    //   {name: "Owner", value: this.content.item.owner},
    //   {name: "Updated", value: timestampToDate(this.content.item.modified)},
    // ]
  }
  render() {
    let output = [];
    // debugger;
    if (this.image !== undefined && this.image !== null && this.image.length > 0) {
      // TODO: improve testing for image URL
      if (this.image.match(/^http/) === null && this.item) {
        output.push(h("img", { class: "card-image", slot: "thumbnail", src: `${this.portalUrl}content/items/${this.item}/info/${this.image}` }));
      }
      else {
        // thumbnail = <img class="hub-content-image" src={this.image} alt="Thumbnail Image" />
        output.push(h("img", { class: "card-image", slot: "thumbnail", src: this.image }));
      }
    }
    if (this.name) {
      let name = this.name;
      if (this.url) {
        name = `<a class="hub-content-url" href="${this.url}">${name}</a>`;
      }
      output.push(h("h3", { class: "card-title", slot: "title", innerHTML: name }));
    }
    if (this.contenttype) {
      output.push(h("span", { class: "card-subtitle", slot: "subtitle" }, this.contenttype));
      // output.push( <span class="hub-content-type">{this.contenttype}</span> )
    }
    if (this.description) {
      // output.push(<p class="hub-content-summary" innerHTML={this.description}></p>)
      output.push(h("div", { class: "card-description", innerHTML: this.description }));
    }
    if (this.metadata && this.metadata.length > 0) {
      output.push(h("div", { class: "hub-content-details" }, this.metadata.map((element) => h("div", null, h("strong", null, element.name), ": ", element.value))));
    }
    if (this.url !== undefined && this.url !== null && this.url.length != 0) {
      output.push(h("calcite-button", { onClick: () => window.open(this.url), slot: "footer-leading", width: "full" }, this.buttonText));
    }
    return (h(Host, null, h("calcite-card", null, output)));
  }
};
HubCard.style = hubCardCss;

const hubContentCardCss = ":host{display:block}";

let HubContentCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.content = "4f5c78bfe89a4304aec3a6cfd492d0cd";
    this.layout = "vertical";
    this.contentItem = null;
    this.children = [];
  }
  componentWillLoad() {
    this.loadContent();
  }
  loadContent() {
    if (this.contentItem === null) {
      getContent(this.content).then(contentResponse => {
        console.log("HubContentCard content", contentResponse);
        this.contentItem = contentResponse;
      });
    }
  }
  render() {
    let output = [];
    if (this.contentItem) {
      output.push(h("hub-card", { item: this.content, contenttype: this.contentItem.type, layout: this.layout, url: this.contentItem.url, image: this.contentItem.thumbnailUrl, name: this.contentItem.name, description: this.contentItem.summary }));
    }
    return (h(Host, null, output));
  }
  get host() { return getElement(this); }
  static get watchers() { return {
    "content": ["loadContent"]
  }; }
};
HubContentCard.style = hubContentCardCss;

const hubFilterCategoryCss = ":host{display:block}label{display:block;margin:4px 0}";

let HubFilterCategory = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.filterChanged = createEvent(this, "filterChanged", 7);
    /**
     * Filter name to display at top
     */
    this.name = "Tree Type";
    /**
     * List of categories to show. Can be set or inferred from facet
     */
    this.categories = [];
    /**
     * Build filter from a facet name
     */
    this.facet = null;
    /**
     * For group categories, choose a groupid
     */
    this.group = null;
    /**
     * Input query for search box
     */
    this.query = "*";
    /**
     * Type of facet
     */
    this.facettype = "checkbox";
    this.selectedCategories = [];
  }
  // TODO: Extract getGroupCategories to general Hub façade
  async getGroupCategories(query, facet, groupId) {
    return await searchGroupContent({
      groupId: groupId,
      q: query,
      num: 0,
      params: {
        countFields: facet,
        countSize: 200
      }
    });
  }
  updateQuery(newQuery, _oldQuery) {
    console.log("hub-filter-category: updateQuery", newQuery);
    this.query = newQuery;
    this.updateCategories();
  }
  async updateCategories() {
    if (this.facet !== null && this.group !== null) {
      let response = await this.getGroupCategories(this.query, this.facet, this.group);
      this.facets = response.aggregations.counts[0].fieldValues;
      console.log("hub-filter-category facets", this.facets);
      this.facets.map(f => {
        this.categories.push(`${f.value} (${f.count})`);
      });
    }
  }
  async componentWillLoad() {
    console.log("Hub Filter Category", this.categories);
    if (this.categories !== undefined && this.categories.length > 0) {
      this.categories.map((category) => {
        this.selectedCategories[category] = { checked: false };
      });
    }
    this.updateCategories();
  }
  handleFilterChange(value) {
    this.selectedCategories[value].checked = !this.selectedCategories[value].checked;
    console.debug("filterChanged", [value, this.selectedCategories]);
    this.filterChanged.emit(this.selectedCategories);
  }
  treeSelected(event) {
    this.selectedCategories = event.detail.selected.reduce((accumulator, currentValue) => {
      console.log("CurrentValue", currentValue, accumulator);
      accumulator.push(currentValue.childNodes[0].id);
      return accumulator;
    }, []);
    console.log("TreeSelected reduced", this.selectedCategories);
    this.filterChanged.emit(this.selectedCategories);
    return 'true';
  }
  renderCheckbox() {
    let output = [];
    this.categories.map((category) => {
      output.push(h("label", null, h("calcite-checkbox", null, h("input", { name: category, value: category, type: "checkbox", onChange: () => this.handleFilterChange(category) })), category));
    });
    return output;
  }
  // Convert array of nested categories into a real tree
  recurseNodes(branch, nodes, id, value) {
    let current = nodes.shift();
    if (current === undefined) {
      return branch;
    }
    if (!branch[current]) {
      branch[current] = { name: current, children: {} };
    }
    if (nodes.length == 0) {
      branch[current]["count"] = value;
      branch[current]["id"] = id;
    }
    return this.recurseNodes(branch[current]["children"], nodes, id, value);
  }
  // enumerate through array and convert to a nested object
  // array: [{value: "/categories/products/arcgis online", count: 80}, ...]
  // tree: { products: { children: { "arcgis online": { count: 80, children: {} }} }}
  convertArrayToTree(array) {
    let tree = {};
    array.map((entry) => {
      let nodes = entry.value.replace('/categories/', '').split('/');
      // Skip `/categories` 
      if (nodes[0] !== "") {
        this.recurseNodes(tree, nodes, entry.value, entry.count);
      }
    });
    return tree;
  }
  toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  renderChildren(branch) {
    let output = [];
    for (let key in branch) {
      let value = branch[key];
      let leaf = this.renderChildren(value.children);
      // Only include another tree if there are children
      if (leaf.length !== 0) {
        leaf = h("calcite-tree", { slot: "children" }, " ", leaf, " ");
      }
      output.push(h("calcite-tree-item", null, h("a", { onClick: () => this.handleFilterChange(value.id), id: value.id }, this.toTitleCase(value.name), " (", value.count, ") "), leaf));
    }
    return output;
  }
  renderTree() {
    let output = [];
    let tree = this.convertArrayToTree(this.facets);
    let root = this.renderChildren(tree);
    output.push(h("calcite-tree", { "selection-mode": "multi-children" }, root));
    return output;
  }
  render() {
    let output = (this.facettype == "tree") ? this.renderTree() : this.renderCheckbox();
    return (h(Host, null, h("h3", null, this.name), h("slot", null), output));
  }
  static get watchers() { return {
    "query": ["updateQuery"]
  }; }
};
HubFilterCategory.style = hubFilterCategoryCss;

const hubGalleryCss = ":host{overflow-x:hidden}.search-grid{display:grid;grid-template:\".   search\" auto\n    \"filters results\" auto /\n    min-content 3fr;padding:0 1rem 0 3rem}hub-suggest-input{grid-area:search}.filters{grid-area:filters}.search-results{grid-area:results;display:flex;flex-wrap:wrap;justify-content:space-between}@media screen and (max-width: 530px){.gallery-card{width:calc((100% - (0 * 30px))/ 1)}}@media screen and (min-width: 530px) and (max-width: 975px){.gallery-card{width:calc((100% - (1 * 30px))/ 2)}}@media screen and (min-width: 975px) and (max-width: 1200px){.gallery-card{width:calc((100% - (2 * 30px))/ 3)}}@media screen and (min-width:1200px){.gallery-card{width:calc((100% - (3 * 30px))/ 4)}}.gallery-card{display:flex;flex-flow:column;color:#4c4c4c;flex-wrap:wrap;margin-bottom:30px;box-shadow:0 0 5px 0 rgba(76,76,76,.25);}";

let HubGallery = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Hub site URL to scope for search
     */
    this.site = null;
    /**
     * Groups to limit search
     */
    this.groups = null;
    /**
     * Choose to show or hide search
     */
    this.showsearch = true;
    /**
     * Search Button text
     */
    this.searchbutton = "Start Search";
    /**
     * Search placeholder text
     */
    this.searchplaceholder = "Search for content";
    /**
     * Text to show in the button
     */
    this.buttontext = "Explore";
    /**
     * Default Query
     */
    this.query = "";
    /**
     * Which Resources to search
     */
    this.hubtype = "content";
    /**
     * Default sort order
     */
    this.sort = "name";
    /**
     * Maximum number of results to return
     */
    this.limit = 12;
    /**
     * Hub site URL to scope for search
     */
    this.layout = "horizontal";
    /**
     * Use the Hub API (true) or the Portal API (false)
     */
    this.hubapi = false;
    this.portal = "https://www.arcgis.com";
    this.clientid = "WXC842NRBVB6NZ2r";
    this.session = null;
    this.suggestions = [];
    this.results = [];
    this.catalog = null;
  }
  queryInputHandler(event) {
    console.log("hub-gallery: queryInputHandler", event);
    this.queryInput = event.detail;
    // this.fetchResults(this.queryInput)
    return 'true';
  }
  querySelectHandler(event) {
    console.log("hub-gallery: querySelectHandler", event);
    this.queryInput = event.detail;
    this.results = [];
    this.updateGallery(this.queryInput);
    return 'true';
  }
  componentWillLoad() {
    this.session = readSessionFromCookie();
    console.log("hub-gallery load: session", this.session);
    this.queryInput = this.query;
    if (this.site) {
      getSiteCatalog(this.site).then((catalog) => {
        this.catalog = catalog;
      });
    }
    else {
      // Don't wait to update
      this.updateGallery(this.queryInput);
    }
  }
  async updateGallery(query, customParams) {
    let auth = (this.session !== undefined && this.session !== null) ? UserSession.deserialize(this.session) : null;
    console.log("hub-gallery updateGallery: [query, hubtype, auth]", [query, this.hubtype, auth]);
    switch (this.hubtype) {
      case 'teams':
        let teams = await searchTeams(query);
        this.results = teams.results;
        break;
      case 'members':
        let members = await searchMembers(query, auth);
        this.results = members.results;
        break;
      default:
        let searchParams = {
          q: query,
          limit: this.limit,
          sort: this.sort
        };
        // TODO: make this more robuts
        if (customParams !== undefined) {
          searchParams.customParams = customParams;
        }
        if (this.catalog) {
          searchParams.groups = this.catalog.groups;
        }
        else if (this.groups !== undefined && this.groups.length > 0) {
          searchParams.groups = this.groups.split(",");
        }
        console.log("hub-gallery updateGallery: [searchParams, customParams] ", [searchParams, customParams]);
        let results = await search$1(searchParams, {
          isPortal: !this.hubapi,
          hubApiUrl: "https://hub.arcgis.com",
          authentication: auth
        });
        console.log("hub-gallery updateGallery: [results] ", [results]);
        this.results = results.results;
      // end case(default)
    }
  }
  // TODO: this is overly specific to group category filters
  filterChanged(event) {
    console.log("Gallery filterChanged", event);
    let customParams = {
      group: {
        id: this.groups.split(',')[0],
        categories: event.detail
      }
    };
    this.updateGallery(this.queryInput, customParams);
  }
  render() {
    let output = [];
    this.results.map(result => {
      let thumbnail = '';
      if (!!result.thumbnailUrl) {
        thumbnail = result.thumbnailUrl;
        if (!!this.session) {
          thumbnail += `?token=${UserSession.deserialize(this.session).token}`;
        }
      }
      console.log("hub-gallery: render result", [result, thumbnail]);
      output.push(h("hub-card", { class: "gallery-card", contenttype: `${HubType[result.hubType]} by ${result.publisher.name}`, url: result.url || "", image: thumbnail, name: truncateString(result.title, 55), description: truncateString(result.summary, 90), buttonText: this.buttontext, onClick: () => "" }));
    });
    return (h(Host, null, h("slot", null), h("div", { class: "search-grid" }, this.showsearch ?
      h("hub-suggest-input", { placeholder: this.searchplaceholder, submit: this.searchbutton, suggestions: this.suggestions, query: this.queryInput })
      : "", h("div", { class: "filters" }, h("slot", { name: "filters" }, " ")), h("div", { class: "search-results gallery-lg " }, output))));
  }
};
HubGallery.style = hubGalleryCss;

/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
// https always
var ARCGIS_ONLINE_GEOCODING_URL = "https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer/";

/* @preserve
* @terraformer/arcgis - v2.0.7 - MIT
* Copyright (c) 2012-2021 Environmental Systems Research Institute, Inc.
* Thu Jul 22 2021 13:58:30 GMT-0700 (Pacific Daylight Time)
*/
/* Copyright (c) 2012-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */

var edgeIntersectsEdge = function edgeIntersectsEdge(a1, a2, b1, b2) {
  var uaT = (b2[0] - b1[0]) * (a1[1] - b1[1]) - (b2[1] - b1[1]) * (a1[0] - b1[0]);
  var ubT = (a2[0] - a1[0]) * (a1[1] - b1[1]) - (a2[1] - a1[1]) * (a1[0] - b1[0]);
  var uB = (b2[1] - b1[1]) * (a2[0] - a1[0]) - (b2[0] - b1[0]) * (a2[1] - a1[1]);

  if (uB !== 0) {
    var ua = uaT / uB;
    var ub = ubT / uB;

    if (ua >= 0 && ua <= 1 && ub >= 0 && ub <= 1) {
      return true;
    }
  }

  return false;
};
var coordinatesContainPoint = function coordinatesContainPoint(coordinates, point) {
  var contains = false;

  for (var i = -1, l = coordinates.length, j = l - 1; ++i < l; j = i) {
    if ((coordinates[i][1] <= point[1] && point[1] < coordinates[j][1] || coordinates[j][1] <= point[1] && point[1] < coordinates[i][1]) && point[0] < (coordinates[j][0] - coordinates[i][0]) * (point[1] - coordinates[i][1]) / (coordinates[j][1] - coordinates[i][1]) + coordinates[i][0]) {
      contains = !contains;
    }
  }

  return contains;
};
var pointsEqual = function pointsEqual(a, b) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
};
var arrayIntersectsArray = function arrayIntersectsArray(a, b) {
  for (var i = 0; i < a.length - 1; i++) {
    for (var j = 0; j < b.length - 1; j++) {
      if (edgeIntersectsEdge(a[i], a[i + 1], b[j], b[j + 1])) {
        return true;
      }
    }
  }

  return false;
};

/* Copyright (c) 2012-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */

var closeRing = function closeRing(coordinates) {
  if (!pointsEqual(coordinates[0], coordinates[coordinates.length - 1])) {
    coordinates.push(coordinates[0]);
  }

  return coordinates;
}; // determine if polygon ring coordinates are clockwise. clockwise signifies outer ring, counter-clockwise an inner ring
// or hole. this logic was found at http://stackoverflow.com/questions/1165647/how-to-determine-if-a-list-of-polygon-
// points-are-in-clockwise-order

var ringIsClockwise = function ringIsClockwise(ringToTest) {
  var total = 0;
  var i = 0;
  var rLength = ringToTest.length;
  var pt1 = ringToTest[i];
  var pt2;

  for (i; i < rLength - 1; i++) {
    pt2 = ringToTest[i + 1];
    total += (pt2[0] - pt1[0]) * (pt2[1] + pt1[1]);
    pt1 = pt2;
  }

  return total >= 0;
}; // This function ensures that rings are oriented in the right directions
// from http://jsperf.com/cloning-an-object/2

var shallowClone = function shallowClone(obj) {
  var target = {};

  for (var i in obj) {
    // both arcgis attributes and geojson props are just hardcoded keys
    if (obj.hasOwnProperty(i)) {
      // eslint-disable-line no-prototype-builtins
      target[i] = obj[i];
    }
  }

  return target;
};

/* Copyright (c) 2012-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */

var coordinatesContainCoordinates = function coordinatesContainCoordinates(outer, inner) {
  var intersects = arrayIntersectsArray(outer, inner);
  var contains = coordinatesContainPoint(outer, inner[0]);

  if (!intersects && contains) {
    return true;
  }

  return false;
}; // do any polygons in this array contain any other polygons in this array?
// used for checking for holes in arcgis rings


var convertRingsToGeoJSON = function convertRingsToGeoJSON(rings) {
  var outerRings = [];
  var holes = [];
  var x; // iterator

  var outerRing; // current outer ring being evaluated

  var hole; // current hole being evaluated
  // for each ring

  for (var r = 0; r < rings.length; r++) {
    var ring = closeRing(rings[r].slice(0));

    if (ring.length < 4) {
      continue;
    } // is this ring an outer ring? is it clockwise?


    if (ringIsClockwise(ring)) {
      var polygon = [ring.slice().reverse()]; // wind outer rings counterclockwise for RFC 7946 compliance

      outerRings.push(polygon); // push to outer rings
    } else {
      holes.push(ring.slice().reverse()); // wind inner rings clockwise for RFC 7946 compliance
    }
  }

  var uncontainedHoles = []; // while there are holes left...

  while (holes.length) {
    // pop a hole off out stack
    hole = holes.pop(); // loop over all outer rings and see if they contain our hole.

    var contained = false;

    for (x = outerRings.length - 1; x >= 0; x--) {
      outerRing = outerRings[x][0];

      if (coordinatesContainCoordinates(outerRing, hole)) {
        // the hole is contained push it into our polygon
        outerRings[x].push(hole);
        contained = true;
        break;
      }
    } // ring is not contained in any outer ring
    // sometimes this happens https://github.com/Esri/esri-leaflet/issues/320


    if (!contained) {
      uncontainedHoles.push(hole);
    }
  } // if we couldn't match any holes using contains we can try intersects...


  while (uncontainedHoles.length) {
    // pop a hole off out stack
    hole = uncontainedHoles.pop(); // loop over all outer rings and see if any intersect our hole.

    var intersects = false;

    for (x = outerRings.length - 1; x >= 0; x--) {
      outerRing = outerRings[x][0];

      if (arrayIntersectsArray(outerRing, hole)) {
        // the hole is contained push it into our polygon
        outerRings[x].push(hole);
        intersects = true;
        break;
      }
    }

    if (!intersects) {
      outerRings.push([hole.reverse()]);
    }
  }

  if (outerRings.length === 1) {
    return {
      type: 'Polygon',
      coordinates: outerRings[0]
    };
  } else {
    return {
      type: 'MultiPolygon',
      coordinates: outerRings
    };
  }
};

var getId = function getId(attributes, idAttribute) {
  var keys = idAttribute ? [idAttribute, 'OBJECTID', 'FID'] : ['OBJECTID', 'FID'];

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    if (key in attributes && (typeof attributes[key] === 'string' || typeof attributes[key] === 'number')) {
      return attributes[key];
    }
  }

  throw Error('No valid id attribute found');
};

var arcgisToGeoJSON = function arcgisToGeoJSON(arcgis, idAttribute) {
  var geojson = {};

  if (arcgis.features) {
    geojson.type = 'FeatureCollection';
    geojson.features = [];

    for (var i = 0; i < arcgis.features.length; i++) {
      geojson.features.push(arcgisToGeoJSON(arcgis.features[i], idAttribute));
    }
  }

  if (typeof arcgis.x === 'number' && typeof arcgis.y === 'number') {
    geojson.type = 'Point';
    geojson.coordinates = [arcgis.x, arcgis.y];

    if (typeof arcgis.z === 'number') {
      geojson.coordinates.push(arcgis.z);
    }
  }

  if (arcgis.points) {
    geojson.type = 'MultiPoint';
    geojson.coordinates = arcgis.points.slice(0);
  }

  if (arcgis.paths) {
    if (arcgis.paths.length === 1) {
      geojson.type = 'LineString';
      geojson.coordinates = arcgis.paths[0].slice(0);
    } else {
      geojson.type = 'MultiLineString';
      geojson.coordinates = arcgis.paths.slice(0);
    }
  }

  if (arcgis.rings) {
    geojson = convertRingsToGeoJSON(arcgis.rings.slice(0));
  }

  if (typeof arcgis.xmin === 'number' && typeof arcgis.ymin === 'number' && typeof arcgis.xmax === 'number' && typeof arcgis.ymax === 'number') {
    geojson.type = 'Polygon';
    geojson.coordinates = [[[arcgis.xmax, arcgis.ymax], [arcgis.xmin, arcgis.ymax], [arcgis.xmin, arcgis.ymin], [arcgis.xmax, arcgis.ymin], [arcgis.xmax, arcgis.ymax]]];
  }

  if (arcgis.geometry || arcgis.attributes) {
    geojson.type = 'Feature';
    geojson.geometry = arcgis.geometry ? arcgisToGeoJSON(arcgis.geometry) : null;
    geojson.properties = arcgis.attributes ? shallowClone(arcgis.attributes) : null;

    if (arcgis.attributes) {
      try {
        geojson.id = getId(arcgis.attributes, idAttribute);
      } catch (err) {// don't set an id
      }
    }
  } // if no valid geometry was encountered


  if (JSON.stringify(geojson.geometry) === JSON.stringify({})) {
    geojson.geometry = null;
  }

  if (arcgis.spatialReference && arcgis.spatialReference.wkid && arcgis.spatialReference.wkid !== 4326) {
    console.warn('Object converted in non-standard crs - ' + JSON.stringify(arcgis.spatialReference));
  }

  return geojson;
};

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { geocode } from '@esri/arcgis-rest-geocoding';
 * //
 * geocode("LAX")
 *   .then((response) => {
 *     response.candidates[0].location; // => { x: -118.409, y: 33.943, spatialReference: ...  }
 *   });
 * //
 * geocode({
 *   address: "1600 Pennsylvania Ave",
 *   postal: 20500,
 *   countryCode: "USA"
 * })
 *   .then((response) => {
 *     response.candidates[1].location; // => { x: -77.036533, y: 38.898719, spatialReference: ... }
 *   });
 * ```
 * Used to determine the location of a single address or point of interest. See the [REST Documentation](https://developers.arcgis.com/rest/geocode/api-reference/geocoding-find-address-candidates.htm) for more information.
 * @param address String representing the address or point of interest or RequestOptions to pass to the endpoint.
 * @returns A Promise that will resolve with address candidates for the request. The spatial reference will be added to candidate locations and extents unless `rawResponse: true` was passed.
 */
function geocode(address) {
    var options = {};
    var endpoint;
    if (typeof address === "string") {
        options.params = { singleLine: address };
        endpoint = ARCGIS_ONLINE_GEOCODING_URL;
    }
    else {
        endpoint = address.endpoint || ARCGIS_ONLINE_GEOCODING_URL;
        options = appendCustomParams(address, [
            "singleLine",
            "address",
            "address2",
            "address3",
            "neighborhood",
            "city",
            "subregion",
            "region",
            "postal",
            "postalExt",
            "countryCode",
            "outFields",
            "magicKey"
        ], { params: __assign({}, address.params) });
    }
    // add spatialReference property to individual matches
    return request(cleanUrl(endpoint) + "/findAddressCandidates", options).then(function (response) {
        if (typeof address !== "string" && address.rawResponse) {
            return response;
        }
        var sr = response.spatialReference;
        response.candidates.forEach(function (candidate) {
            candidate.location.spatialReference = sr;
            if (candidate.extent) {
                candidate.extent.spatialReference = sr;
            }
        });
        // geoJson
        if (sr.wkid === 4326) {
            var features = response.candidates.map(function (candidate) {
                return {
                    type: "Feature",
                    geometry: arcgisToGeoJSON(candidate.location),
                    properties: Object.assign({
                        address: candidate.address,
                        score: candidate.score,
                    }, candidate.attributes),
                };
            });
            response.geoJson = {
                type: "FeatureCollection",
                features: features,
            };
        }
        return response;
    });
}

/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { suggest } from '@esri/arcgis-rest-geocoding';
 * //
 * suggest("Starb")
 *   .then(response) // response.text === "Starbucks"
 * ```
 * Used to return a placename [suggestion](https://developers.arcgis.com/rest/geocode/api-reference/geocoding-suggest.htm) for a partial string.
 *
 * @param requestOptions - Options for the request including authentication and other optional parameters.
 * @returns A Promise that will resolve with the data from the response.
 */
function suggest(partialText, requestOptions) {
    var options = __assign({ endpoint: ARCGIS_ONLINE_GEOCODING_URL, params: {} }, requestOptions);
    options.params.text = partialText;
    return request(cleanUrl(options.endpoint) + "/suggest", options);
}

function suggestLocations(address, extent) {
  return new Promise((resolve, reject) => {
    let geocodeOptions = {
      address: address,
    };
    if (extent !== undefined && extent !== null) {
      const searchExtent = [...extent[0], ...extent[1]].join(',');
      geocodeOptions = Object.assign(geocodeOptions, { "params": { searchExtent } });
    }
    suggest(address, geocodeOptions).then((suggestions) => {
      console.debug("suggestLocations", suggestions);
      resolve(suggestions);
    }).catch(reject);
  });
}
function getLocation(address, extent) {
  return new Promise((resolve, reject) => {
    console.debug("getLocation extent", extent);
    let geocodeOptions = {
      address: address,
    };
    if (extent !== undefined && extent !== null) {
      const searchExtent = [...extent[0], ...extent[1]].join(',');
      geocodeOptions = Object.assign(geocodeOptions, { "params": { searchExtent } });
    }
    console.log("getLocation geocodeOptions", geocodeOptions);
    geocode(geocodeOptions)
      .then((response) => {
      if (response.candidates.length == 0) {
        throw new Error('No locations found at this address.');
      }
      resolve(response.candidates[0].location); // => { x: -77.036533, y: 38.898719, spatialReference: ... }
    })
      .catch(reject);
  });
}
function getMap(id) {
  return new Promise((resolve, reject) => {
    Promise.all([getItem(id), getItemData(id)])
      .then(resolve)
      .catch(reject);
  });
}
function queryMap(mapItemData, coordinates) {
  return new Promise((resolve, reject) => {
    // Get Features from each map layer
    let promises = mapItemData['operationalLayers'].slice().reverse().map(layer => {
      return getFeatures(layer, coordinates);
    });
    Promise.all(promises).then(results => {
      // console.log("getMap Promise all", results)
      let features = [];
      results.map(r => {
        // There may not have been any features from this layer
        if (r['features'].length > 0) {
          r['layer'] = r['title'];
          r['title'] = r['features'][0].title;
          r['description'] = `<em>${r['features'][0].description}</em>`;
        }
        features.push(r);
      });
      resolve(features);
    }).catch(reject);
  });
}
function getFeatures(layer, location) {
  // console.log("getFeatures", layer, location)
  let options = {
    "url": layer.url,
    "outFields": "*",
    "geometryType": "esriGeometryPoint",
    "inSR": "4326"
  };
  if (layer.title.indexOf('Nearby') !== -1) {
    let match = layer.title.match(/Nearby (\d+)/);
    let distance;
    if (match !== null) {
      distance = parseInt(match[1]);
    }
    options["distance"] = distance;
    options["units"] = 'esriSRUnit_Meter';
  }
  // if (location.length !== undefined) {
  options["geometry"] = location;
  // }
  return new Promise((resolve, reject) => {
    queryFeatures(options)
      .then(results => {
      let collection = {
        "title": layer.title,
        "features": interpretResults(layer, results)
      };
      resolve(collection);
    }).catch(reject);
  });
}
// Methods to convert features to interpolated display
function getValue(data, key, fields) {
  if (data.hasOwnProperty(key)) {
    return coerceAttributeValue(data, key, fields);
  }
  else {
    return "";
  }
}
function coerceAttributeValue(data, key, fields) {
  switch (fields[key].type) {
    case "esriFieldTypeDate":
      return new Date(data[key]);
    default:
      return data[key];
  }
}
function interpretResults(layer, results) {
  let fields = {};
  // console.log('results from t-f', results);
  results.fields.forEach((field) => {
    fields[field.name] = field;
  });
  let featureInfos = [];
  // let layerTitle = layer.title;
  let featureTitle = layer.popupInfo.title;
  let featureDescription = layer.popupInfo.description;
  results.features.forEach((feature) => {
    let data = feature.attributes;
    // Template replace `{POP00001}` -> feature['POP00001']
    var featureTitleInterpolated = featureTitle.replace(/\{(\w*)\}/g, (_m, key) => {
      return getValue(data, key, fields);
    });
    if (featureDescription !== null) {
      var featureDescriptionInterpolated = featureDescription.replace(/\{(\w*)\}/g, (_m, key) => {
        return getValue(data, key, fields);
      });
    }
    let featureInfo = {
      "title": featureTitleInterpolated,
      "description": featureDescriptionInterpolated ? featureDescriptionInterpolated : ""
    };
    featureInfos.push(featureInfo);
  });
  // console.log("featureInfos", featureInfos)
  return featureInfos;
}

const hubInputCss = "";

let HubInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.eventAddressUpdated = createEvent(this, "eventAddressUpdated", 7);
  }
  componentWillLoad() {
    this.inputAddress = this.address;
    if (typeof (this.extent) == "string") {
      this.extent = JSON.parse(this.extent);
    }
  }
  queryInputHandler(event) {
    this.inputAddress = event.detail;
    suggestLocations(this.inputAddress, this.extent).then(suggestions => {
      this.addressSuggestions = Array.from(suggestions.suggestions, s => s['text']);
    }).catch(error => {
      console.error('Geocode error', error);
    });
    return 'true';
  }
  querySelectHandler(event) {
    console.debug("radar-input querySelect", event);
    getLocation(event.detail, this.extent).then(coordinates => {
      this.eventAddressUpdated.emit({
        'address': this.address,
        'coordinates': coordinates
      });
    }).catch(error => {
      console.error('Geocode error', error);
    });
    return 'true';
  }
  render() {
    return (h("hub-suggest-input", { placeholder: "Search for an address...", query: this.address, suggestions: this.addressSuggestions }));
  }
  get element() { return getElement(this); }
};
HubInput.style = hubInputCss;

var esriLoader = createCommonjsModule(function (module, exports) {
(function (global, factory) {
	factory(exports) ;
}(commonjsGlobal, (function (exports) {
/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
var isBrowser = typeof window !== 'undefined';
// allow consuming libraries to provide their own Promise implementations
var utils = {
    Promise: isBrowser ? window['Promise'] : undefined
};

/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
var DEFAULT_VERSION = '4.21';
var NEXT = 'next';
function parseVersion(version) {
    if (version.toLowerCase() === NEXT) {
        return NEXT;
    }
    var match = version && version.match(/^(\d)\.(\d+)/);
    return match && {
        major: parseInt(match[1], 10),
        minor: parseInt(match[2], 10)
    };
}
/**
 * Get the CDN url for a given version
 *
 * @param version Ex: '4.21' or '3.38'. Defaults to the latest 4.x version.
 */
function getCdnUrl(version) {
    if (version === void 0) { version = DEFAULT_VERSION; }
    return "https://js.arcgis.com/" + version + "/";
}
/**
 * Get the CDN url for a the CSS for a given version and/or theme
 *
 * @param version Ex: '4.21', '3.38', or 'next'. Defaults to the latest 4.x version.
 */
function getCdnCssUrl(version) {
    if (version === void 0) { version = DEFAULT_VERSION; }
    var baseUrl = getCdnUrl(version);
    var parsedVersion = parseVersion(version);
    if (parsedVersion !== NEXT && parsedVersion.major === 3) {
        // NOTE: at 3.11 the CSS moved from the /js folder to the root
        var path = parsedVersion.minor <= 10 ? 'js/' : '';
        return "" + baseUrl + path + "esri/css/esri.css";
    }
    else {
        // assume 4.x
        return baseUrl + "esri/themes/light/main.css";
    }
}

/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
function createStylesheetLink(href) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    return link;
}
function insertLink(link, before) {
    if (before) {
        // the link should be inserted before a specific node
        var beforeNode = document.querySelector(before);
        beforeNode.parentNode.insertBefore(link, beforeNode);
    }
    else {
        // append the link to then end of the head tag
        document.head.appendChild(link);
    }
}
// check if the css url has been injected or added manually
function getCss(url) {
    return document.querySelector("link[href*=\"" + url + "\"]");
}
function getCssUrl(urlOrVersion) {
    return !urlOrVersion || parseVersion(urlOrVersion)
        // if it's a valid version string return the CDN URL
        ? getCdnCssUrl(urlOrVersion)
        // otherwise assume it's a URL and return that
        : urlOrVersion;
}
// lazy load the CSS needed for the ArcGIS API
function loadCss(urlOrVersion, before) {
    var url = getCssUrl(urlOrVersion);
    var link = getCss(url);
    if (!link) {
        // create & load the css link
        link = createStylesheetLink(url);
        insertLink(link, before);
    }
    return link;
}

/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
var defaultOptions = {};
function createScript(url) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.setAttribute('data-esri-loader', 'loading');
    return script;
}
// add a one-time load handler to script
// and optionally add a one time error handler as well
function handleScriptLoad(script, callback, errback) {
    var onScriptError;
    if (errback) {
        // set up an error handler as well
        onScriptError = handleScriptError(script, errback);
    }
    var onScriptLoad = function () {
        // pass the script to the callback
        callback(script);
        // remove this event listener
        script.removeEventListener('load', onScriptLoad, false);
        if (onScriptError) {
            // remove the error listener as well
            script.removeEventListener('error', onScriptError, false);
        }
    };
    script.addEventListener('load', onScriptLoad, false);
}
// add a one-time error handler to the script
function handleScriptError(script, callback) {
    var onScriptError = function (e) {
        // reject the promise and remove this event listener
        callback(e.error || new Error("There was an error attempting to load " + script.src));
        // remove this event listener
        script.removeEventListener('error', onScriptError, false);
    };
    script.addEventListener('error', onScriptError, false);
    return onScriptError;
}
// allow the user to configure default script options rather than passing options to `loadModules` each time
function setDefaultOptions(options) {
    if (options === void 0) { options = {}; }
    defaultOptions = options;
}
// get the script injected by this library
function getScript() {
    return document.querySelector('script[data-esri-loader]');
}
// has ArcGIS API been loaded on the page yet?
function isLoaded() {
    var globalRequire = window['require'];
    // .on() ensures that it's Dojo's AMD loader
    return globalRequire && globalRequire.on;
}
// load the ArcGIS API on the page
function loadScript(options) {
    if (options === void 0) { options = {}; }
    // we would have liked to use spread like { ...defaultOptions, ...options }
    // but TS would inject a polyfill that would require use to configure rollup w content: 'window'
    // if we have another occasion to use spread, let's do that and replace this for...in
    var opts = {};
    [defaultOptions, options].forEach(function (obj) {
        for (var prop in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                opts[prop] = obj[prop];
            }
        }
    });
    // URL to load
    var version = opts.version;
    var url = opts.url || getCdnUrl(version);
    return new utils.Promise(function (resolve, reject) {
        var script = getScript();
        if (script) {
            // the API is already loaded or in the process of loading...
            // NOTE: have to test against scr attribute value, not script.src
            // b/c the latter will return the full url for relative paths
            var src = script.getAttribute('src');
            if (src !== url) {
                // potentially trying to load a different version of the API
                reject(new Error("The ArcGIS API for JavaScript is already loaded (" + src + ")."));
            }
            else {
                if (isLoaded()) {
                    // the script has already successfully loaded
                    resolve(script);
                }
                else {
                    // wait for the script to load and then resolve
                    handleScriptLoad(script, resolve, reject);
                }
            }
        }
        else {
            if (isLoaded()) {
                // the API has been loaded by some other means
                // potentially trying to load a different version of the API
                reject(new Error("The ArcGIS API for JavaScript is already loaded."));
            }
            else {
                // this is the first time attempting to load the API
                var css = opts.css;
                if (css) {
                    var useVersion = css === true;
                    // load the css before loading the script
                    loadCss(useVersion ? version : css, opts.insertCssBefore);
                }
                // create a script object whose source points to the API
                script = createScript(url);
                // _currentUrl = url;
                // once the script is loaded...
                handleScriptLoad(script, function () {
                    // update the status of the script
                    script.setAttribute('data-esri-loader', 'loaded');
                    // return the script
                    resolve(script);
                }, reject);
                // load the script
                document.body.appendChild(script);
            }
        }
    });
}

/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
// wrap Dojo's require() in a promise
function requireModules(modules) {
    return new utils.Promise(function (resolve, reject) {
        // If something goes wrong loading the esri/dojo scripts, reject with the error.
        var errorHandler = window['require'].on('error', reject);
        window['require'](modules, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // remove error handler
            errorHandler.remove();
            // Resolve with the parameters from dojo require as an array.
            resolve(args);
        });
    });
}
// returns a promise that resolves with an array of the required modules
// also will attempt to lazy load the ArcGIS API if it has not already been loaded
function loadModules(modules, loadScriptOptions) {
    if (loadScriptOptions === void 0) { loadScriptOptions = {}; }
    if (!isLoaded()) {
        // script is not yet loaded, is it in the process of loading?
        var script = getScript();
        var src = script && script.getAttribute('src');
        if (!loadScriptOptions.url && src) {
            // script is still loading and user did not specify a URL
            // in this case we want to default to the URL that's being loaded
            // instead of defaulting to the latest 4.x URL
            loadScriptOptions.url = src;
        }
        // attempt to load the script then load the modules
        return loadScript(loadScriptOptions).then(function () { return requireModules(modules); });
    }
    else {
        // script is already loaded, just load the modules
        return requireModules(modules);
    }
}

/*
  Copyright (c) 2017 Esri
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
// re-export the functions that are part of the public API

exports.utils = utils;
exports.loadModules = loadModules;
exports.getScript = getScript;
exports.isLoaded = isLoaded;
exports.loadScript = loadScript;
exports.setDefaultOptions = setDefaultOptions;
exports.loadCss = loadCss;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=esri-loader.js.map
});

const hubMapCss = "@import url(\"https://js.arcgis.com/4.15/esri/themes/light/main.css\");:host{height:100%;min-height:100%}.hub-map{height:100%;min-height:100%}.drawing-button{display:none;position:relative;bottom:20px;left:200px}.fullscreen-button{position:relative;bottom:40px;left:20px}";

let HubMap = class {
  // municipalitiesFeatureLayer: __esri.FeatureLayer;
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.drawingComplete = createEvent(this, "drawingComplete", 7);
    // this.webmap = this.webmap ? this.webmap : "41281c51f9de45edaf1c8ed44bb10e30"
    /**
     * Map zoom level: 1=world ... 20=street
     */
    this.zoom = 4;
    /**
     * Option to show drawing tools
     */
    this.drawing = false;
    this.showFullscreen = false;
    /**
     * Optional Geometry to display
     */
    this.geometry = [];
    /**
     * Current Map Extent
     */
    this.mapExtent = null;
    this.mapCenter = [-107, 38.9];
    /**
     * esri-loader options
     */
    this.esriMapOptions = {
      url: `https://js.arcgis.com/4.14/`
    };
    // loadCss(`${this.esriMapOptions.url}/esri/css/main.css`);
    // this.esriMapOptions['css'] = true
    // this.esriMapOptions['insertCssBefore'] = 'style'
    esriLoader.loadModules(["esri/Map"], this.esriMapOptions).then(([EsriMap]) => {
      this.esriMap = new EsriMap({
        basemap: "streets"
      });
      // this.centerDidChangeHandler(this.center)
      // this.zoomDidChangeHandler(this.zoom)
      // this.municipalitiesFeatureLayer = new FeatureLayer({
      //   url:
      //     "https://services.arcgis.com/Li1xnxaTwJ2lGrgz/arcgis/rest/services/Kommuner/FeatureServer/0"
      // });
      // this.esriMap.add(this.municipalitiesFeatureLayer);
    });
  }
  centerDidChangeHandler(newCenter) {
    console.debug("map: centerDidChangeHandler 1", [newCenter, this.esriMapView]);
    if (newCenter !== undefined && this.esriMapView) {
      this.mapCenter = JSON.parse(newCenter);
      console.debug("map: centerDidChangeHandler 2", [this.mapCenter, this.zoom]);
      this.esriMapView.goTo({ zoom: this.zoom, center: this.mapCenter });
    }
  }
  zoomDidChangeHandler(newZoom) {
    console.debug("map: zoomDidChangeHandler 1", [newZoom, this.esriMapView]);
    if (newZoom !== undefined && this.esriMapView) {
      console.debug("map: zoomDidChangeHandler 2", [this.mapCenter, this.zoom]);
      this.esriMapView.goTo({ zoom: this.zoom, center: this.mapCenter });
    }
  }
  geometryDidChangeHandler(newGeometry) {
    console.debug("Hub-Map: geometryHandler", newGeometry);
    if (newGeometry.length > 0) {
      this.geometry = newGeometry;
      this.addGeometry(this.geometry);
    }
  }
  componentWillLoad() {
    if (this.center) {
      console.debug("HubMap componentWillLoad", this.center);
      this.mapCenter = JSON.parse(this.center);
    }
  }
  componentDidUpdate() {
    // this.zoomToUrlObjectId(600);
  }
  /**
   * The component is loaded and has rendered.
   * Only called once per component lifecycle
   */
  componentDidLoad() {
    this.createEsriMapView();
    if (this.drawing) {
      this.addSketch();
    }
    if (this.geometry.length > 0) {
      this.addGeometry(this.geometry);
    }
    // .then(() => this.zoomToUrlObjectId())
    // .then(() => this.addZoomOnClickAndUrlUpdate());
  }
  /**
   * Creates the mapview used in the application
   */
  createEsriMapView() {
    return esriLoader.loadModules(["esri/WebMap", "esri/views/MapView", "esri/core/watchUtils"], this.esriMapOptions).then(([WebMap, MapView, watchUtils]) => {
      console.debug("Hub Map createEsriMapView", [this.mapCenter, this.zoom]);
      const mapDiv = this.hostElement.querySelector("div");
      let mapOptions = { container: mapDiv };
      // Check how the map is initally set
      if (this.webmap) {
        mapOptions.map = new WebMap({
          portalItem: {
            id: this.webmap
          }
        });
      }
      else {
        mapOptions.map = this.esriMap;
      }
      if (this.mapCenter && this.zoom) {
        mapOptions.center = this.mapCenter;
        mapOptions.zoom = this.zoom;
      }
      this.esriMapView = new MapView(mapOptions);
      let componentRef = this;
      this.esriMapView.on("drag", function (_event) {
        componentRef.mapExtent = componentRef.esriMapView.extent;
        console.debug("Drag Map Extent: ", [componentRef.mapExtent, componentRef.esriMapView, componentRef.esriMapView.extent]);
      });
      watchUtils.whenTrue(this.esriMapView, "stationary", function () {
        // For sending back out to listening components
        componentRef.mapExtent = componentRef.esriMapView.extent;
        console.debug("Stationary Map Extent: ", [componentRef.mapExtent, componentRef.esriMapView, componentRef.esriMapView.extent]);
      });
    });
  }
  /**
   * Zooms to objectid passed in url map/{objectid}
   */
  // zoomToUrlObjectId(duration = 1600) {
  // if (this.match && this.match.params && this.match.params.objectid) {
  //   this.municipalitiesFeatureLayer
  //     .queryFeatures({
  //       where: "objectid = " + this.match.params.objectid,
  //       num: 1,
  //       returnGeometry: true
  //     })
  //     .then(results => {
  //       if (results.features.length) {
  //         const firstResult = results.features[0];
  // this.zoomToAndHighlighFeature(firstResult, duration);
  //       }
  //     });
  // }
  // }
  zoomToAndHighlighFeature(feature, duration = 1600) {
    this.esriMapView.when(() => {
      const symbol = {
        type: "simple-fill",
        color: [51, 51, 204, 0.9],
        style: "solid",
        outline: {
          color: "white",
          width: 1
        }
      };
      const highlightPolygon = feature.clone();
      highlightPolygon.set("symbol", symbol);
      this.esriMapView.graphics.removeAll();
      this.esriMapView.graphics.add(highlightPolygon);
      this.esriMapView.goTo(feature.geometry, {
        duration: duration,
        easing: "ease-in"
      });
    });
  }
  addGeometry(geometry) {
    esriLoader.loadModules(["esri/Graphic",
      "esri/layers/GraphicsLayer"]).then(([Graphic, GraphicsLayer]) => {
      const geometryLayer = new GraphicsLayer();
      this.esriMap.add(geometryLayer);
      geometry.map((polygon) => {
        polygon['type'] = "polygon";
        var simpleFillSymbol = {
          type: "simple-fill",
          color: [227, 139, 79, 0.8],
          outline: {
            color: [255, 255, 255],
            width: 1
          }
        };
        var polygonGraphic = new Graphic({
          geometry: polygon,
          symbol: simpleFillSymbol
        });
        geometryLayer.add(polygonGraphic);
        this.esriMapView.goTo(polygonGraphic);
      });
      // Zoom to first geometry
      // TODO make this zoom to all
      //   , {
      //   duration: 1,
      //   easing: "ease-in"
      // });        
    });
  }
  addSketch() {
    esriLoader.loadModules(["esri/widgets/Sketch",
      "esri/layers/GraphicsLayer"]).then(([Sketch, GraphicsLayer]) => {
      const notesLayer = new GraphicsLayer();
      const sketch = new Sketch({
        layer: notesLayer,
        view: this.esriMapView,
        availableCreateTools: ['rectangle', 'polygon'],
        creationMode: 'single',
        defaultCreateOptions: {
          mode: 'hybrid'
        },
        defaultUpdateOptions: {
          enableRotation: false,
          enableScaling: false,
          multipleSelectionEnabled: false,
          toggleToolOnClick: false
        }
      });
      this.esriMap.add(notesLayer);
      this.esriMapView.ui.add(sketch, "top-right");
      sketch.on("update", _event => {
        // debugger;
      });
      sketch.on('create', event => {
        try {
          if (event.state === 'complete') { // || ['reshape-stop', 'move-stop'].includes(event.toolEventInfo.type)) {
            console.debug("Sketch Complete", event.graphic);
            this.drawingComplete.emit(event.graphic);
          }
        }
        catch (e) {
          debugger;
        }
      });
    });
  }
  // addZoomOnClickAndUrlUpdate() {
  //   this.esriMapView.on("click", evt => {
  //     this.esriMapView
  //       .whenLayerView(this.municipalitiesFeatureLayer)
  //       .then((lyrView: __esri.FeatureLayerView) => {
  //         lyrView.queryFeatures().then(results => {
  //           results.features.some(f => {
  //             const polygon = f.geometry as __esri.Polygon;
  //             if (polygon.contains(evt.mapPoint)) {
  //               // this.history.push(`/map/${f.attributes.ObjectId}`, {});
  //               this.zoomToAndHighlighFeature(f, 500);
  //               return true;
  //             }
  //             return false;
  //           });
  //         });
  //       });
  //   });
  // }
  // TODO: Determine if this should be a component <hub-fullscreen ...>
  requestFullScreen() {
    this.hostElement.requestFullscreen();
  }
  startDrawing() {
    if (!this.drawing) {
      this.drawing = true;
      this.addSketch();
      this.drawingButton.style.display = "none";
    }
  }
  render() {
    return (h(Host, null, h("div", { class: "hub-map" }), h("calcite-button", { class: "drawing-button", onClick: () => this.startDrawing(), ref: (el) => this.drawingButton = el }, "Add a Note"), this.showFullscreen ?
      h("calcite-button", { class: "fullscreen-button", onClick: () => this.requestFullScreen(), ref: (el) => this.fullScreenButton = el }, "Full Screen")
      : ""));
  }
  get hostElement() { return getElement(this); }
  static get watchers() { return {
    "center": ["centerDidChangeHandler"],
    "zoom": ["zoomDidChangeHandler"],
    "geometry": ["geometryDidChangeHandler"]
  }; }
};
HubMap.style = hubMapCss;

const hubRadarCss = ".radar-map{height:200px}";

let HubRadar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.showmap = false;
    this.isLoading = false;
  }
  handleAddressUpdated(event) {
    this.updateRadar(event.detail.address, event.detail.coordinates);
  }
  updateRadar(address, coordinates) {
    this.address = address;
    this.mapCenter = `[${coordinates['x']}, ${coordinates['y']}]`;
    this.mapZoom = 16;
    this.isLoading = true;
    queryMap(this.mapItemData, coordinates).then(results => {
      this.messages = results;
      this.isLoading = false;
    });
  }
  componentWillLoad() {
  }
  componentDidLoad() {
    // Load the map after the component renders so the map is available
    getMap(this.webmap).then(([mapItem, mapItemData]) => {
      this.mapItem = mapItem;
      this.mapItemData = mapItemData;
      // The component embedded an address, so load the radar.
      if (this.address) {
        getLocation(this.address, mapItem.extent).then(coordinates => {
          this.updateRadar(this.address, coordinates);
        }).catch(error => {
          console.log('Geocode error', error);
        });
      }
    });
  }
  render() {
    let output = [];
    // Get Address
    let inputProps = {
      address: this.address,
      extent: this.mapItem ? this.mapItem.extent : null,
    };
    output.push(h("hub-input", Object.assign({}, inputProps)));
    if (this.showmap) {
      output.push(h("div", { class: "radar-map" }, h("hub-map", { center: this.mapCenter, zoom: this.mapZoom, webmap: this.webmap })));
    }
    if (this.isLoading) {
      output.push(h("calcite-loader", { label: "label", text: "Scanning radar...", "is-active": true }));
    }
    else {
      // Get Results
      if (this.messages !== undefined && this.messages.length > 0) {
        output.push(h("slot", { name: "before-results" }));
        this.messages.forEach(m => {
          output.push(h("hub-card", { layout: "horizontal", contenttype: m.layer, name: m.title, description: m.description ? m.description : "<em>None</em>" }));
        });
        // output.push( <slot name="after-results" /> )        
      }
    }
    return (h(Host, null, output, h("slot", { name: "after-results" })));
  }
};
HubRadar.style = hubRadarCss;

/**
 * Fuse.js v6.4.6 - Lightweight fuzzy-search (http://fusejs.io)
 *
 * Copyright (c) 2021 Kiro Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

function isArray(value) {
  return !Array.isArray
    ? getTag(value) === '[object Array]'
    : Array.isArray(value)
}

// Adapted from: https://github.com/lodash/lodash/blob/master/.internal/baseToString.js
const INFINITY = 1 / 0;
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value
  }
  let result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result
}

function toString(value) {
  return value == null ? '' : baseToString(value)
}

function isString(value) {
  return typeof value === 'string'
}

function isNumber(value) {
  return typeof value === 'number'
}

// Adapted from: https://github.com/lodash/lodash/blob/master/isBoolean.js
function isBoolean(value) {
  return (
    value === true ||
    value === false ||
    (isObjectLike(value) && getTag(value) == '[object Boolean]')
  )
}

function isObject(value) {
  return typeof value === 'object'
}

// Checks if `value` is object-like.
function isObjectLike(value) {
  return isObject(value) && value !== null
}

function isDefined(value) {
  return value !== undefined && value !== null
}

function isBlank(value) {
  return !value.trim().length
}

// Gets the `toStringTag` of `value`.
// Adapted from: https://github.com/lodash/lodash/blob/master/.internal/getTag.js
function getTag(value) {
  return value == null
    ? value === undefined
      ? '[object Undefined]'
      : '[object Null]'
    : Object.prototype.toString.call(value)
}

const EXTENDED_SEARCH_UNAVAILABLE = 'Extended search is not available';

const INCORRECT_INDEX_TYPE = "Incorrect 'index' type";

const LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key) =>
  `Invalid value for key ${key}`;

const PATTERN_LENGTH_TOO_LARGE = (max) =>
  `Pattern length exceeds max of ${max}.`;

const MISSING_KEY_PROPERTY = (name) => `Missing ${name} property in key`;

const INVALID_KEY_WEIGHT_VALUE = (key) =>
  `Property 'weight' in key '${key}' must be a positive integer`;

const hasOwn = Object.prototype.hasOwnProperty;

class KeyStore {
  constructor(keys) {
    this._keys = [];
    this._keyMap = {};

    let totalWeight = 0;

    keys.forEach((key) => {
      let obj = createKey(key);

      totalWeight += obj.weight;

      this._keys.push(obj);
      this._keyMap[obj.id] = obj;

      totalWeight += obj.weight;
    });

    // Normalize weights so that their sum is equal to 1
    this._keys.forEach((key) => {
      key.weight /= totalWeight;
    });
  }
  get(keyId) {
    return this._keyMap[keyId]
  }
  keys() {
    return this._keys
  }
  toJSON() {
    return JSON.stringify(this._keys)
  }
}

function createKey(key) {
  let path = null;
  let id = null;
  let src = null;
  let weight = 1;

  if (isString(key) || isArray(key)) {
    src = key;
    path = createKeyPath(key);
    id = createKeyId(key);
  } else {
    if (!hasOwn.call(key, 'name')) {
      throw new Error(MISSING_KEY_PROPERTY('name'))
    }

    const name = key.name;
    src = name;

    if (hasOwn.call(key, 'weight')) {
      weight = key.weight;

      if (weight <= 0) {
        throw new Error(INVALID_KEY_WEIGHT_VALUE(name))
      }
    }

    path = createKeyPath(name);
    id = createKeyId(name);
  }

  return { path, id, weight, src }
}

function createKeyPath(key) {
  return isArray(key) ? key : key.split('.')
}

function createKeyId(key) {
  return isArray(key) ? key.join('.') : key
}

function get(obj, path) {
  let list = [];
  let arr = false;

  const deepGet = (obj, path, index) => {
    if (!isDefined(obj)) {
      return
    }
    if (!path[index]) {
      // If there's no path left, we've arrived at the object we care about.
      list.push(obj);
    } else {
      let key = path[index];

      const value = obj[key];

      if (!isDefined(value)) {
        return
      }

      // If we're at the last value in the path, and if it's a string/number/bool,
      // add it to the list
      if (
        index === path.length - 1 &&
        (isString(value) || isNumber(value) || isBoolean(value))
      ) {
        list.push(toString(value));
      } else if (isArray(value)) {
        arr = true;
        // Search each item in the array.
        for (let i = 0, len = value.length; i < len; i += 1) {
          deepGet(value[i], path, index + 1);
        }
      } else if (path.length) {
        // An object. Recurse further.
        deepGet(value, path, index + 1);
      }
    }
  };

  // Backwards compatibility (since path used to be a string)
  deepGet(obj, isString(path) ? path.split('.') : path, 0);

  return arr ? list : list[0]
}

const MatchOptions = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: false,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: false,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
};

const BasicOptions = {
  // When `true`, the algorithm continues searching to the end of the input even if a perfect
  // match is found before the end of the same input.
  isCaseSensitive: false,
  // When true, the matching function will continue to the end of a search pattern even if
  includeScore: false,
  // List of properties that will be searched. This also supports nested properties.
  keys: [],
  // Whether to sort the result list, by score
  shouldSort: true,
  // Default sort function: sort by ascending score, ascending index
  sortFn: (a, b) =>
    a.score === b.score ? (a.idx < b.idx ? -1 : 1) : a.score < b.score ? -1 : 1
};

const FuzzyOptions = {
  // Approximately where in the text is the pattern expected to be found?
  location: 0,
  // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
  // (of both letters and location), a threshold of '1.0' would match anything.
  threshold: 0.6,
  // Determines how close the match must be to the fuzzy location (specified above).
  // An exact letter match which is 'distance' characters away from the fuzzy location
  // would score as a complete mismatch. A distance of '0' requires the match be at
  // the exact location specified, a threshold of '1000' would require a perfect match
  // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
  distance: 100
};

const AdvancedOptions = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: false,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: get,
  // When `true`, search will ignore `location` and `distance`, so it won't matter
  // where in the string the pattern appears.
  // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
  ignoreLocation: false,
  // When `true`, the calculation for the relevance score (used for sorting) will
  // ignore the field-length norm.
  // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
  ignoreFieldNorm: false
};

var Config = {
  ...BasicOptions,
  ...MatchOptions,
  ...FuzzyOptions,
  ...AdvancedOptions
};

const SPACE = /[^ ]+/g;

// Field-length norm: the shorter the field, the higher the weight.
// Set to 3 decimals to reduce index size.
function norm(mantissa = 3) {
  const cache = new Map();
  const m = Math.pow(10, mantissa);

  return {
    get(value) {
      const numTokens = value.match(SPACE).length;

      if (cache.has(numTokens)) {
        return cache.get(numTokens)
      }

      const norm = 1 / Math.sqrt(numTokens);

      // In place of `toFixed(mantissa)`, for faster computation
      const n = parseFloat(Math.round(norm * m) / m);

      cache.set(numTokens, n);

      return n
    },
    clear() {
      cache.clear();
    }
  }
}

class FuseIndex {
  constructor({ getFn = Config.getFn } = {}) {
    this.norm = norm(3);
    this.getFn = getFn;
    this.isCreated = false;

    this.setIndexRecords();
  }
  setSources(docs = []) {
    this.docs = docs;
  }
  setIndexRecords(records = []) {
    this.records = records;
  }
  setKeys(keys = []) {
    this.keys = keys;
    this._keysMap = {};
    keys.forEach((key, idx) => {
      this._keysMap[key.id] = idx;
    });
  }
  create() {
    if (this.isCreated || !this.docs.length) {
      return
    }

    this.isCreated = true;

    // List is Array<String>
    if (isString(this.docs[0])) {
      this.docs.forEach((doc, docIndex) => {
        this._addString(doc, docIndex);
      });
    } else {
      // List is Array<Object>
      this.docs.forEach((doc, docIndex) => {
        this._addObject(doc, docIndex);
      });
    }

    this.norm.clear();
  }
  // Adds a doc to the end of the index
  add(doc) {
    const idx = this.size();

    if (isString(doc)) {
      this._addString(doc, idx);
    } else {
      this._addObject(doc, idx);
    }
  }
  // Removes the doc at the specified index of the index
  removeAt(idx) {
    this.records.splice(idx, 1);

    // Change ref index of every subsquent doc
    for (let i = idx, len = this.size(); i < len; i += 1) {
      this.records[i].i -= 1;
    }
  }
  getValueForItemAtKeyId(item, keyId) {
    return item[this._keysMap[keyId]]
  }
  size() {
    return this.records.length
  }
  _addString(doc, docIndex) {
    if (!isDefined(doc) || isBlank(doc)) {
      return
    }

    let record = {
      v: doc,
      i: docIndex,
      n: this.norm.get(doc)
    };

    this.records.push(record);
  }
  _addObject(doc, docIndex) {
    let record = { i: docIndex, $: {} };

    // Iterate over every key (i.e, path), and fetch the value at that key
    this.keys.forEach((key, keyIndex) => {
      // console.log(key)
      let value = this.getFn(doc, key.path);

      if (!isDefined(value)) {
        return
      }

      if (isArray(value)) {
        let subRecords = [];
        const stack = [{ nestedArrIndex: -1, value }];

        while (stack.length) {
          const { nestedArrIndex, value } = stack.pop();

          if (!isDefined(value)) {
            continue
          }

          if (isString(value) && !isBlank(value)) {
            let subRecord = {
              v: value,
              i: nestedArrIndex,
              n: this.norm.get(value)
            };

            subRecords.push(subRecord);
          } else if (isArray(value)) {
            value.forEach((item, k) => {
              stack.push({
                nestedArrIndex: k,
                value: item
              });
            });
          }
        }
        record.$[keyIndex] = subRecords;
      } else if (!isBlank(value)) {
        let subRecord = {
          v: value,
          n: this.norm.get(value)
        };

        record.$[keyIndex] = subRecord;
      }
    });

    this.records.push(record);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    }
  }
}

function createIndex(keys, docs, { getFn = Config.getFn } = {}) {
  const myIndex = new FuseIndex({ getFn });
  myIndex.setKeys(keys.map(createKey));
  myIndex.setSources(docs);
  myIndex.create();
  return myIndex
}

function parseIndex(data, { getFn = Config.getFn } = {}) {
  const { keys, records } = data;
  const myIndex = new FuseIndex({ getFn });
  myIndex.setKeys(keys);
  myIndex.setIndexRecords(records);
  return myIndex
}

function computeScore(
  pattern,
  {
    errors = 0,
    currentLocation = 0,
    expectedLocation = 0,
    distance = Config.distance,
    ignoreLocation = Config.ignoreLocation
  } = {}
) {
  const accuracy = errors / pattern.length;

  if (ignoreLocation) {
    return accuracy
  }

  const proximity = Math.abs(expectedLocation - currentLocation);

  if (!distance) {
    // Dodge divide by zero error.
    return proximity ? 1.0 : accuracy
  }

  return accuracy + proximity / distance
}

function convertMaskToIndices(
  matchmask = [],
  minMatchCharLength = Config.minMatchCharLength
) {
  let indices = [];
  let start = -1;
  let end = -1;
  let i = 0;

  for (let len = matchmask.length; i < len; i += 1) {
    let match = matchmask[i];
    if (match && start === -1) {
      start = i;
    } else if (!match && start !== -1) {
      end = i - 1;
      if (end - start + 1 >= minMatchCharLength) {
        indices.push([start, end]);
      }
      start = -1;
    }
  }

  // (i-1 - start) + 1 => i - start
  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    indices.push([start, i - 1]);
  }

  return indices
}

// Machine word size
const MAX_BITS = 32;

function search(
  text,
  pattern,
  patternAlphabet,
  {
    location = Config.location,
    distance = Config.distance,
    threshold = Config.threshold,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    includeMatches = Config.includeMatches,
    ignoreLocation = Config.ignoreLocation
  } = {}
) {
  if (pattern.length > MAX_BITS) {
    throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS))
  }

  const patternLen = pattern.length;
  // Set starting location at beginning text and initialize the alphabet.
  const textLen = text.length;
  // Handle the case when location > text.length
  const expectedLocation = Math.max(0, Math.min(location, textLen));
  // Highest score beyond which we give up.
  let currentThreshold = threshold;
  // Is there a nearby exact match? (speedup)
  let bestLocation = expectedLocation;

  // Performance: only computer matches when the minMatchCharLength > 1
  // OR if `includeMatches` is true.
  const computeMatches = minMatchCharLength > 1 || includeMatches;
  // A mask of the matches, used for building the indices
  const matchMask = computeMatches ? Array(textLen) : [];

  let index;

  // Get all exact matches, here for speed up
  while ((index = text.indexOf(pattern, bestLocation)) > -1) {
    let score = computeScore(pattern, {
      currentLocation: index,
      expectedLocation,
      distance,
      ignoreLocation
    });

    currentThreshold = Math.min(score, currentThreshold);
    bestLocation = index + patternLen;

    if (computeMatches) {
      let i = 0;
      while (i < patternLen) {
        matchMask[index + i] = 1;
        i += 1;
      }
    }
  }

  // Reset the best location
  bestLocation = -1;

  let lastBitArr = [];
  let finalScore = 1;
  let binMax = patternLen + textLen;

  const mask = 1 << (patternLen - 1);

  for (let i = 0; i < patternLen; i += 1) {
    // Scan for the best match; each iteration allows for one more error.
    // Run a binary search to determine how far from the match location we can stray
    // at this error level.
    let binMin = 0;
    let binMid = binMax;

    while (binMin < binMid) {
      const score = computeScore(pattern, {
        errors: i,
        currentLocation: expectedLocation + binMid,
        expectedLocation,
        distance,
        ignoreLocation
      });

      if (score <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }

      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    }

    // Use the result from this iteration as the maximum for the next.
    binMax = binMid;

    let start = Math.max(1, expectedLocation - binMid + 1);
    let finish = findAllMatches
      ? textLen
      : Math.min(expectedLocation + binMid, textLen) + patternLen;

    // Initialize the bit array
    let bitArr = Array(finish + 2);

    bitArr[finish + 1] = (1 << i) - 1;

    for (let j = finish; j >= start; j -= 1) {
      let currentLocation = j - 1;
      let charMatch = patternAlphabet[text.charAt(currentLocation)];

      if (computeMatches) {
        // Speed up: quick bool to int conversion (i.e, `charMatch ? 1 : 0`)
        matchMask[currentLocation] = +!!charMatch;
      }

      // First pass: exact match
      bitArr[j] = ((bitArr[j + 1] << 1) | 1) & charMatch;

      // Subsequent passes: fuzzy match
      if (i) {
        bitArr[j] |=
          ((lastBitArr[j + 1] | lastBitArr[j]) << 1) | 1 | lastBitArr[j + 1];
      }

      if (bitArr[j] & mask) {
        finalScore = computeScore(pattern, {
          errors: i,
          currentLocation,
          expectedLocation,
          distance,
          ignoreLocation
        });

        // This match will almost certainly be better than any existing match.
        // But check anyway.
        if (finalScore <= currentThreshold) {
          // Indeed it is
          currentThreshold = finalScore;
          bestLocation = currentLocation;

          // Already passed `loc`, downhill from here on in.
          if (bestLocation <= expectedLocation) {
            break
          }

          // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.
          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    }

    // No hope for a (better) match at greater error levels.
    const score = computeScore(pattern, {
      errors: i + 1,
      currentLocation: expectedLocation,
      expectedLocation,
      distance,
      ignoreLocation
    });

    if (score > currentThreshold) {
      break
    }

    lastBitArr = bitArr;
  }

  const result = {
    isMatch: bestLocation >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(0.001, finalScore)
  };

  if (computeMatches) {
    const indices = convertMaskToIndices(matchMask, minMatchCharLength);
    if (!indices.length) {
      result.isMatch = false;
    } else if (includeMatches) {
      result.indices = indices;
    }
  }

  return result
}

function createPatternAlphabet(pattern) {
  let mask = {};

  for (let i = 0, len = pattern.length; i < len; i += 1) {
    const char = pattern.charAt(i);
    mask[char] = (mask[char] || 0) | (1 << (len - i - 1));
  }

  return mask
}

class BitapSearch {
  constructor(
    pattern,
    {
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreLocation = Config.ignoreLocation
    } = {}
  ) {
    this.options = {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreLocation
    };

    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();

    this.chunks = [];

    if (!this.pattern.length) {
      return
    }

    const addChunk = (pattern, startIndex) => {
      this.chunks.push({
        pattern,
        alphabet: createPatternAlphabet(pattern),
        startIndex
      });
    };

    const len = this.pattern.length;

    if (len > MAX_BITS) {
      let i = 0;
      const remainder = len % MAX_BITS;
      const end = len - remainder;

      while (i < end) {
        addChunk(this.pattern.substr(i, MAX_BITS), i);
        i += MAX_BITS;
      }

      if (remainder) {
        const startIndex = len - MAX_BITS;
        addChunk(this.pattern.substr(startIndex), startIndex);
      }
    } else {
      addChunk(this.pattern, 0);
    }
  }

  searchIn(text) {
    const { isCaseSensitive, includeMatches } = this.options;

    if (!isCaseSensitive) {
      text = text.toLowerCase();
    }

    // Exact match
    if (this.pattern === text) {
      let result = {
        isMatch: true,
        score: 0
      };

      if (includeMatches) {
        result.indices = [[0, text.length - 1]];
      }

      return result
    }

    // Otherwise, use Bitap algorithm
    const {
      location,
      distance,
      threshold,
      findAllMatches,
      minMatchCharLength,
      ignoreLocation
    } = this.options;

    let allIndices = [];
    let totalScore = 0;
    let hasMatches = false;

    this.chunks.forEach(({ pattern, alphabet, startIndex }) => {
      const { isMatch, score, indices } = search(text, pattern, alphabet, {
        location: location + startIndex,
        distance,
        threshold,
        findAllMatches,
        minMatchCharLength,
        includeMatches,
        ignoreLocation
      });

      if (isMatch) {
        hasMatches = true;
      }

      totalScore += score;

      if (isMatch && indices) {
        allIndices = [...allIndices, ...indices];
      }
    });

    let result = {
      isMatch: hasMatches,
      score: hasMatches ? totalScore / this.chunks.length : 1
    };

    if (hasMatches && includeMatches) {
      result.indices = allIndices;
    }

    return result
  }
}

class BaseMatch {
  constructor(pattern) {
    this.pattern = pattern;
  }
  static isMultiMatch(pattern) {
    return getMatch(pattern, this.multiRegex)
  }
  static isSingleMatch(pattern) {
    return getMatch(pattern, this.singleRegex)
  }
  search(/*text*/) {}
}

function getMatch(pattern, exp) {
  const matches = pattern.match(exp);
  return matches ? matches[1] : null
}

// Token: 'file

class ExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'exact'
  }
  static get multiRegex() {
    return /^="(.*)"$/
  }
  static get singleRegex() {
    return /^=(.*)$/
  }
  search(text) {
    const isMatch = text === this.pattern;

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    }
  }
}

// Token: !fire

class InverseExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'inverse-exact'
  }
  static get multiRegex() {
    return /^!"(.*)"$/
  }
  static get singleRegex() {
    return /^!(.*)$/
  }
  search(text) {
    const index = text.indexOf(this.pattern);
    const isMatch = index === -1;

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    }
  }
}

// Token: ^file

class PrefixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'prefix-exact'
  }
  static get multiRegex() {
    return /^\^"(.*)"$/
  }
  static get singleRegex() {
    return /^\^(.*)$/
  }
  search(text) {
    const isMatch = text.startsWith(this.pattern);

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    }
  }
}

// Token: !^fire

class InversePrefixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'inverse-prefix-exact'
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/
  }
  static get singleRegex() {
    return /^!\^(.*)$/
  }
  search(text) {
    const isMatch = !text.startsWith(this.pattern);

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    }
  }
}

// Token: .file$

class SuffixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'suffix-exact'
  }
  static get multiRegex() {
    return /^"(.*)"\$$/
  }
  static get singleRegex() {
    return /^(.*)\$$/
  }
  search(text) {
    const isMatch = text.endsWith(this.pattern);

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [text.length - this.pattern.length, text.length - 1]
    }
  }
}

// Token: !.file$

class InverseSuffixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'inverse-suffix-exact'
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/
  }
  static get singleRegex() {
    return /^!(.*)\$$/
  }
  search(text) {
    const isMatch = !text.endsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    }
  }
}

class FuzzyMatch extends BaseMatch {
  constructor(
    pattern,
    {
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreLocation = Config.ignoreLocation
    } = {}
  ) {
    super(pattern);
    this._bitapSearch = new BitapSearch(pattern, {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreLocation
    });
  }
  static get type() {
    return 'fuzzy'
  }
  static get multiRegex() {
    return /^"(.*)"$/
  }
  static get singleRegex() {
    return /^(.*)$/
  }
  search(text) {
    return this._bitapSearch.searchIn(text)
  }
}

// Token: 'file

class IncludeMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'include'
  }
  static get multiRegex() {
    return /^'"(.*)"$/
  }
  static get singleRegex() {
    return /^'(.*)$/
  }
  search(text) {
    let location = 0;
    let index;

    const indices = [];
    const patternLen = this.pattern.length;

    // Get all exact matches
    while ((index = text.indexOf(this.pattern, location)) > -1) {
      location = index + patternLen;
      indices.push([index, location - 1]);
    }

    const isMatch = !!indices.length;

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices
    }
  }
}

// ❗Order is important. DO NOT CHANGE.
const searchers = [
  ExactMatch,
  IncludeMatch,
  PrefixExactMatch,
  InversePrefixExactMatch,
  InverseSuffixExactMatch,
  SuffixExactMatch,
  InverseExactMatch,
  FuzzyMatch
];

const searchersLen = searchers.length;

// Regex to split by spaces, but keep anything in quotes together
const SPACE_RE = / +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/;
const OR_TOKEN = '|';

// Return a 2D array representation of the query, for simpler parsing.
// Example:
// "^core go$ | rb$ | py$ xy$" => [["^core", "go$"], ["rb$"], ["py$", "xy$"]]
function parseQuery(pattern, options = {}) {
  return pattern.split(OR_TOKEN).map((item) => {
    let query = item
      .trim()
      .split(SPACE_RE)
      .filter((item) => item && !!item.trim());

    let results = [];
    for (let i = 0, len = query.length; i < len; i += 1) {
      const queryItem = query[i];

      // 1. Handle multiple query match (i.e, once that are quoted, like `"hello world"`)
      let found = false;
      let idx = -1;
      while (!found && ++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isMultiMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          found = true;
        }
      }

      if (found) {
        continue
      }

      // 2. Handle single query matches (i.e, once that are *not* quoted)
      idx = -1;
      while (++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isSingleMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          break
        }
      }
    }

    return results
  })
}

// These extended matchers can return an array of matches, as opposed
// to a singl match
const MultiMatchSet = new Set([FuzzyMatch.type, IncludeMatch.type]);

/**
 * Command-like searching
 * ======================
 *
 * Given multiple search terms delimited by spaces.e.g. `^jscript .python$ ruby !java`,
 * search in a given text.
 *
 * Search syntax:
 *
 * | Token       | Match type                 | Description                            |
 * | ----------- | -------------------------- | -------------------------------------- |
 * | `jscript`   | fuzzy-match                | Items that fuzzy match `jscript`       |
 * | `=scheme`   | exact-match                | Items that are `scheme`                |
 * | `'python`   | include-match              | Items that include `python`            |
 * | `!ruby`     | inverse-exact-match        | Items that do not include `ruby`       |
 * | `^java`     | prefix-exact-match         | Items that start with `java`           |
 * | `!^earlang` | inverse-prefix-exact-match | Items that do not start with `earlang` |
 * | `.js$`      | suffix-exact-match         | Items that end with `.js`              |
 * | `!.go$`     | inverse-suffix-exact-match | Items that do not end with `.go`       |
 *
 * A single pipe character acts as an OR operator. For example, the following
 * query matches entries that start with `core` and end with either`go`, `rb`,
 * or`py`.
 *
 * ```
 * ^core go$ | rb$ | py$
 * ```
 */
class ExtendedSearch {
  constructor(
    pattern,
    {
      isCaseSensitive = Config.isCaseSensitive,
      includeMatches = Config.includeMatches,
      minMatchCharLength = Config.minMatchCharLength,
      ignoreLocation = Config.ignoreLocation,
      findAllMatches = Config.findAllMatches,
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance
    } = {}
  ) {
    this.query = null;
    this.options = {
      isCaseSensitive,
      includeMatches,
      minMatchCharLength,
      findAllMatches,
      ignoreLocation,
      location,
      threshold,
      distance
    };

    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    this.query = parseQuery(this.pattern, this.options);
  }

  static condition(_, options) {
    return options.useExtendedSearch
  }

  searchIn(text) {
    const query = this.query;

    if (!query) {
      return {
        isMatch: false,
        score: 1
      }
    }

    const { includeMatches, isCaseSensitive } = this.options;

    text = isCaseSensitive ? text : text.toLowerCase();

    let numMatches = 0;
    let allIndices = [];
    let totalScore = 0;

    // ORs
    for (let i = 0, qLen = query.length; i < qLen; i += 1) {
      const searchers = query[i];

      // Reset indices
      allIndices.length = 0;
      numMatches = 0;

      // ANDs
      for (let j = 0, pLen = searchers.length; j < pLen; j += 1) {
        const searcher = searchers[j];
        const { isMatch, indices, score } = searcher.search(text);

        if (isMatch) {
          numMatches += 1;
          totalScore += score;
          if (includeMatches) {
            const type = searcher.constructor.type;
            if (MultiMatchSet.has(type)) {
              allIndices = [...allIndices, ...indices];
            } else {
              allIndices.push(indices);
            }
          }
        } else {
          totalScore = 0;
          numMatches = 0;
          allIndices.length = 0;
          break
        }
      }

      // OR condition, so if TRUE, return
      if (numMatches) {
        let result = {
          isMatch: true,
          score: totalScore / numMatches
        };

        if (includeMatches) {
          result.indices = allIndices;
        }

        return result
      }
    }

    // Nothing was matched
    return {
      isMatch: false,
      score: 1
    }
  }
}

const registeredSearchers = [];

function register(...args) {
  registeredSearchers.push(...args);
}

function createSearcher(pattern, options) {
  for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
    let searcherClass = registeredSearchers[i];
    if (searcherClass.condition(pattern, options)) {
      return new searcherClass(pattern, options)
    }
  }

  return new BitapSearch(pattern, options)
}

const LogicalOperator = {
  AND: '$and',
  OR: '$or'
};

const KeyType = {
  PATH: '$path',
  PATTERN: '$val'
};

const isExpression = (query) =>
  !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);

const isPath = (query) => !!query[KeyType.PATH];

const isLeaf = (query) =>
  !isArray(query) && isObject(query) && !isExpression(query);

const convertToExplicit = (query) => ({
  [LogicalOperator.AND]: Object.keys(query).map((key) => ({
    [key]: query[key]
  }))
});

// When `auto` is `true`, the parse function will infer and initialize and add
// the appropriate `Searcher` instance
function parse(query, options, { auto = true } = {}) {
  const next = (query) => {
    let keys = Object.keys(query);

    const isQueryPath = isPath(query);

    if (!isQueryPath && keys.length > 1 && !isExpression(query)) {
      return next(convertToExplicit(query))
    }

    if (isLeaf(query)) {
      const key = isQueryPath ? query[KeyType.PATH] : keys[0];

      const pattern = isQueryPath ? query[KeyType.PATTERN] : query[key];

      if (!isString(pattern)) {
        throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key))
      }

      const obj = {
        keyId: createKeyId(key),
        pattern
      };

      if (auto) {
        obj.searcher = createSearcher(pattern, options);
      }

      return obj
    }

    let node = {
      children: [],
      operator: keys[0]
    };

    keys.forEach((key) => {
      const value = query[key];

      if (isArray(value)) {
        value.forEach((item) => {
          node.children.push(next(item));
        });
      }
    });

    return node
  };

  if (!isExpression(query)) {
    query = convertToExplicit(query);
  }

  return next(query)
}

// Practical scoring function
function computeScore$1(
  results,
  { ignoreFieldNorm = Config.ignoreFieldNorm }
) {
  results.forEach((result) => {
    let totalScore = 1;

    result.matches.forEach(({ key, norm, score }) => {
      const weight = key ? key.weight : null;

      totalScore *= Math.pow(
        score === 0 && weight ? Number.EPSILON : score,
        (weight || 1) * (ignoreFieldNorm ? 1 : norm)
      );
    });

    result.score = totalScore;
  });
}

function transformMatches(result, data) {
  const matches = result.matches;
  data.matches = [];

  if (!isDefined(matches)) {
    return
  }

  matches.forEach((match) => {
    if (!isDefined(match.indices) || !match.indices.length) {
      return
    }

    const { indices, value } = match;

    let obj = {
      indices,
      value
    };

    if (match.key) {
      obj.key = match.key.src;
    }

    if (match.idx > -1) {
      obj.refIndex = match.idx;
    }

    data.matches.push(obj);
  });
}

function transformScore(result, data) {
  data.score = result.score;
}

function format(
  results,
  docs,
  {
    includeMatches = Config.includeMatches,
    includeScore = Config.includeScore
  } = {}
) {
  const transformers = [];

  if (includeMatches) transformers.push(transformMatches);
  if (includeScore) transformers.push(transformScore);

  return results.map((result) => {
    const { idx } = result;

    const data = {
      item: docs[idx],
      refIndex: idx
    };

    if (transformers.length) {
      transformers.forEach((transformer) => {
        transformer(result, data);
      });
    }

    return data
  })
}

class Fuse {
  constructor(docs, options = {}, index) {
    this.options = { ...Config, ...options };

    if (
      this.options.useExtendedSearch &&
      !true
    ) {
      throw new Error(EXTENDED_SEARCH_UNAVAILABLE)
    }

    this._keyStore = new KeyStore(this.options.keys);

    this.setCollection(docs, index);
  }

  setCollection(docs, index) {
    this._docs = docs;

    if (index && !(index instanceof FuseIndex)) {
      throw new Error(INCORRECT_INDEX_TYPE)
    }

    this._myIndex =
      index ||
      createIndex(this.options.keys, this._docs, {
        getFn: this.options.getFn
      });
  }

  add(doc) {
    if (!isDefined(doc)) {
      return
    }

    this._docs.push(doc);
    this._myIndex.add(doc);
  }

  remove(predicate = (/* doc, idx */) => false) {
    const results = [];

    for (let i = 0, len = this._docs.length; i < len; i += 1) {
      const doc = this._docs[i];
      if (predicate(doc, i)) {
        this.removeAt(i);
        i -= 1;
        len -= 1;

        results.push(doc);
      }
    }

    return results
  }

  removeAt(idx) {
    this._docs.splice(idx, 1);
    this._myIndex.removeAt(idx);
  }

  getIndex() {
    return this._myIndex
  }

  search(query, { limit = -1 } = {}) {
    const {
      includeMatches,
      includeScore,
      shouldSort,
      sortFn,
      ignoreFieldNorm
    } = this.options;

    let results = isString(query)
      ? isString(this._docs[0])
        ? this._searchStringList(query)
        : this._searchObjectList(query)
      : this._searchLogical(query);

    computeScore$1(results, { ignoreFieldNorm });

    if (shouldSort) {
      results.sort(sortFn);
    }

    if (isNumber(limit) && limit > -1) {
      results = results.slice(0, limit);
    }

    return format(results, this._docs, {
      includeMatches,
      includeScore
    })
  }

  _searchStringList(query) {
    const searcher = createSearcher(query, this.options);
    const { records } = this._myIndex;
    const results = [];

    // Iterate over every string in the index
    records.forEach(({ v: text, i: idx, n: norm }) => {
      if (!isDefined(text)) {
        return
      }

      const { isMatch, score, indices } = searcher.searchIn(text);

      if (isMatch) {
        results.push({
          item: text,
          idx,
          matches: [{ score, value: text, norm, indices }]
        });
      }
    });

    return results
  }

  _searchLogical(query) {

    const expression = parse(query, this.options);

    const evaluate = (node, item, idx) => {
      if (!node.children) {
        const { keyId, searcher } = node;

        const matches = this._findMatches({
          key: this._keyStore.get(keyId),
          value: this._myIndex.getValueForItemAtKeyId(item, keyId),
          searcher
        });

        if (matches && matches.length) {
          return [
            {
              idx,
              item,
              matches
            }
          ]
        }

        return []
      }

      /*eslint indent: [2, 2, {"SwitchCase": 1}]*/
      switch (node.operator) {
        case LogicalOperator.AND: {
          const res = [];
          for (let i = 0, len = node.children.length; i < len; i += 1) {
            const child = node.children[i];
            const result = evaluate(child, item, idx);
            if (result.length) {
              res.push(...result);
            } else {
              return []
            }
          }
          return res
        }
        case LogicalOperator.OR: {
          const res = [];
          for (let i = 0, len = node.children.length; i < len; i += 1) {
            const child = node.children[i];
            const result = evaluate(child, item, idx);
            if (result.length) {
              res.push(...result);
              break
            }
          }
          return res
        }
      }
    };

    const records = this._myIndex.records;
    const resultMap = {};
    const results = [];

    records.forEach(({ $: item, i: idx }) => {
      if (isDefined(item)) {
        let expResults = evaluate(expression, item, idx);

        if (expResults.length) {
          // Dedupe when adding
          if (!resultMap[idx]) {
            resultMap[idx] = { idx, item, matches: [] };
            results.push(resultMap[idx]);
          }
          expResults.forEach(({ matches }) => {
            resultMap[idx].matches.push(...matches);
          });
        }
      }
    });

    return results
  }

  _searchObjectList(query) {
    const searcher = createSearcher(query, this.options);
    const { keys, records } = this._myIndex;
    const results = [];

    // List is Array<Object>
    records.forEach(({ $: item, i: idx }) => {
      if (!isDefined(item)) {
        return
      }

      let matches = [];

      // Iterate over every key (i.e, path), and fetch the value at that key
      keys.forEach((key, keyIndex) => {
        matches.push(
          ...this._findMatches({
            key,
            value: item[keyIndex],
            searcher
          })
        );
      });

      if (matches.length) {
        results.push({
          idx,
          item,
          matches
        });
      }
    });

    return results
  }
  _findMatches({ key, value, searcher }) {
    if (!isDefined(value)) {
      return []
    }

    let matches = [];

    if (isArray(value)) {
      value.forEach(({ v: text, i: idx, n: norm }) => {
        if (!isDefined(text)) {
          return
        }

        const { isMatch, score, indices } = searcher.searchIn(text);

        if (isMatch) {
          matches.push({
            score,
            key,
            value: text,
            idx,
            norm,
            indices
          });
        }
      });
    } else {
      const { v: text, n: norm } = value;

      const { isMatch, score, indices } = searcher.searchIn(text);

      if (isMatch) {
        matches.push({ score, key, value: text, norm, indices });
      }
    }

    return matches
  }
}

Fuse.version = '6.4.6';
Fuse.createIndex = createIndex;
Fuse.parseIndex = parseIndex;
Fuse.config = Config;

{
  Fuse.parseQuery = parse;
}

{
  register(ExtendedSearch);
}

const hubSuggestInputCss = ":host{transition:all 0.15s ease-in-out 0s;font-family:\"Avenir Next W01\", \"Avenir Next W00\", \"Avenir Next\", \"Avenir\", \"Helvetica Neue\", sans-serif}input[type=text]{border:none;border-bottom:2px solid grey;font-size:1.2rem;margin:5px 10px}.autocomplete{position:relative;display:inline-block}input{border:1px solid transparent;padding:10px;font-size:16px}input[type=text]{width:60%}input[type=submit]{background-color:DodgerBlue;color:#fff;cursor:pointer}input[type=submit]:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2)}.autocomplete-items{position:absolute;border:1px solid #d4d4d4;border-bottom:none;border-top:none;z-index:99;top:100%;left:0;right:0}.autocomplete-items div{padding:10px;cursor:pointer;background-color:#fff;border-bottom:1px solid #d4d4d4}.autocomplete-items div:hover{background-color:#e9e9e9}.autocomplete-active{background-color:DodgerBlue !important;color:#ffffff}.hub-suggestions-div{position:relative}.hub-suggestions-input{width:100%}.hub-suggestions-ul{list-style:none;border:1px lightblue solid;background-color:white;position:absolute;margin:-5px 0 0 10px;padding:0;width:60%;z-index:100;color:#333}.hub-suggestions-li{line-height:1.5;padding-left:5px;font-size:1.1em}.hub-suggestions-li:hover{cursor:pointer;background-color:lightgray;color:black}.hub-suggestions-selected{background-color:lightgray;color:black}";

let HubSuggestInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.querySelect = createEvent(this, "querySelect", 7);
    this.queryInput = createEvent(this, "queryInput", 7);
    /** Default search */
    this.query = "";
    /** Value for input placeholder */
    this.placeholder = "What are you looking for?";
    /** Value for submit button */
    this.submit = "Start Search";
    /** Values that the auto-complete textbox should search for */
    this.suggestions = ['Apple', 'Avocado', 'Aardvark', 'Banana', 'Coconut', 'Cucumber', 'Mango'];
    this.inputQuery = '';
    this.suggestionArr = [];
    this.findMatch = (searchTerm) => {
      if (searchTerm.length === 0) {
        return [];
      }
      let indexResults = this.fuseIndex.search(searchTerm);
      console.log("findMatch", [indexResults]);
      return indexResults.map((r) => { return r.item.name; }).slice(0, 9);
    };
    this.onSelect = (selection) => {
      this.inputQuery = selection;
      this.selectedSuggestionIndex = undefined;
      this.showSuggestions = false;
      this.querySelect.emit(this.inputQuery);
    };
    this.onFocus = () => {
      this.showSuggestions = true;
      this.selectedSuggestionIndex = undefined;
      this.suggestionArr = this.findMatch(this.inputQuery);
    };
    this.onKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          if (this.suggestionArr.length > 0) {
            this.selectedSuggestionIndex =
              (this.selectedSuggestionIndex === undefined || this.selectedSuggestionIndex === 0) ?
                this.suggestionArr.length - 1 : this.selectedSuggestionIndex - 1;
          }
          break;
        case 'ArrowDown':
          if (this.suggestionArr.length > 0) {
            this.selectedSuggestionIndex =
              (this.selectedSuggestionIndex === undefined || this.selectedSuggestionIndex === this.suggestionArr.length - 1) ?
                0 : this.selectedSuggestionIndex + 1;
          }
          break;
      }
    };
    this.onKeyPress = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (this.selectedSuggestionIndex !== undefined) {
          this.onSelect(this.suggestionArr[this.selectedSuggestionIndex]);
        }
        else {
          // User <enter> on form <input>
          this.onSelect(this.inputQuery);
        }
      }
    };
    this.getSuggestionElement = (suggestion) => {
      const isSelected = this.selectedSuggestionIndex !== undefined
        && suggestion === this.suggestionArr[this.selectedSuggestionIndex];
      return (h("li", { class: 'hub-suggestions-li ' + (isSelected ? 'hub-suggestions-selected' : ''), onClick: () => this.onSelect(suggestion) }, suggestion));
    };
  }
  componentWillLoad() {
    this.inputQuery = this.query;
    this.buildIndex(this.suggestions);
    sendTelemetry({
      category: 'hub-component',
      action: 'hub-suggest-input:loaded',
      label: this.submit
    });
  }
  buildIndex(suggestions) {
    var options = {
      keys: [{
          name: 'name',
          weight: 0.9
        }]
    };
    console.debug("Suggest Input buildIndex", suggestions);
    let db = suggestions.map((s) => { return { "name": s }; });
    this.fuseIndex = new Fuse(db, options);
  }
  suggestionsDidChangeHandler(newSuggestions) {
    console.debug("Suggest Input suggestionsDidChangeHandler", newSuggestions);
    this.buildIndex(newSuggestions);
    this.suggestionArr = this.findMatch(this.inputQuery);
    this.showSuggestions = true;
  }
  handleWindowClick(e) {
    if (!this.element.contains(e.target)) {
      this.showSuggestions = false;
      this.selectedSuggestionIndex = undefined;
    }
    sendTelemetry({
      category: 'hub-component',
      action: 'hub-suggest-input:click',
      label: this.submit
    });
    sendTelemetry({
      category: 'hub-component',
      action: 'hub-suggest-input:query',
      label: this.query
    });
  }
  onInput(e) {
    this.inputQuery = e.target.value;
    this.queryInput.emit(this.inputQuery);
    this.onFocus();
    return 'true';
  }
  onSubmit(e) {
    e.preventDefault();
    this.query = this.inputQuery;
    this.onSelect(this.query);
  }
  render() {
    return (h("div", { class: 'hub-suggestions-div' }, h("slot", { name: "before-input" }), h("input", { class: 'hub-suggestions-input', type: 'text', placeholder: this.placeholder, value: this.inputQuery, onInput: e => this.onInput(e), onFocus: () => this.onFocus(), onKeyDown: e => this.onKeyDown(e), onKeyPress: e => this.onKeyPress(e), onSubmit: (e) => this.onSubmit(e) }), h("ul", { class: 'hub-suggestions-ul', role: 'listbox', hidden: !this.showSuggestions }, this.suggestionArr.map(suggestion => this.getSuggestionElement(suggestion))), h("calcite-button", { onClick: (e) => { this.onSubmit(e); } }, this.submit)));
  }
  get element() { return getElement(this); }
  static get watchers() { return {
    "suggestions": ["suggestionsDidChangeHandler"]
  }; }
};
HubSuggestInput.style = hubSuggestInputCss;

export { CalciteButton as calcite_button, CalciteCard as calcite_card, CalciteCheckbox as calcite_checkbox, CalciteIcon as calcite_icon, CalciteLabel as calcite_label, CalciteLoader as calcite_loader, CalciteTree as calcite_tree, CalciteTreeItem as calcite_tree_item, HubCard as hub_card, HubContentCard as hub_content_card, HubFilterCategory as hub_filter_category, HubGallery as hub_gallery, HubInput as hub_input, HubMap as hub_map, HubRadar as hub_radar, HubSuggestInput as hub_suggest_input };
