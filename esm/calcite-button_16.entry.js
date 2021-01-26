import { r as registerInstance, h, H as Host, g as getElement, c as createEvent, d as getAssetPath } from './index-17d4341f.js';
import { g as getElementDir, n as nodeListToArray, a as getSlotted, f as filterDirectChildren } from './dom-29efd1ef.js';
import { g as getKey } from './key-6f340c70.js';
import { g as guid } from './guid-9ad8042d.js';
import './index-21611a9b.js';
import { g as getContent, H as HubType } from './hub-content-82335dfd.js';
import { r as request, c as cleanUrl, a as appendCustomParams, _ as __assign } from './index-fd5669bb.js';
import { s as searchGroupContent, g as getItem, a as getItemData } from './index-2b41d503.js';
import './index-31ce56d3.js';
import './index-c55b387e.js';
import { s as search$1 } from './hub-search-eb1585d6.js';
import { g as getSiteCatalog } from './hub-site-ac04c7b3.js';
import { U as UserSession } from './index-80082925.js';
import { q as queryFeatures } from './index-52c4095a.js';
import { s as searchMembers, a as searchTeams } from './hub-team-d39e46f8.js';
import { r as readSessionFromCookie, t as truncateString } from './utils-877cdb99.js';
import { c as createCommonjsModule, u as unwrapExports, a as commonjsGlobal } from './_commonjsHelpers-97e6d7b1.js';
import { s as sendTelemetry } from './telemetry-utils-0201fa0e.js';

const CSS = {
  buttonLoader: "calcite-button--loader",
  content: "content",
  icon: "icon",
  iconStart: "icon--start",
  iconEnd: "icon--end"
};
const TEXT = {
  loading: "Loading"
};

const calciteButtonCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host{display:inline-block;width:auto;vertical-align:middle;--calcite-button-dark:#404040;--calcite-button-dark-hover:#4a4a4a;--calcite-button-dark-press:#353535;--calcite-button-transparent-hover:rgba(0, 0, 0, 0.05);--calcite-button-transparent-press:rgba(0, 0, 0, 0.08)}:host([theme=dark]){--calcite-button-dark:#404040;--calcite-button-dark-hover:#353535;--calcite-button-dark-press:#4a4a4a;--calcite-button-transparent-hover:rgba(255, 255, 255, 0.05);--calcite-button-transparent-press:rgba(255, 255, 255, 0.08)}:host([round]){border-radius:50px}:host([round]) a,:host([round]) button{border-radius:50px}:host button,:host a{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host button:focus,:host a:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:2px}:host button,:host a{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:0.375rem 1rem;text-decoration:none;width:100%;height:100%;border-radius:0;border:none;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;font-family:inherit;-webkit-appearance:none;cursor:pointer;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:background-color 0.15s ease-in-out, border 0.15s ease-in-out, outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out, -webkit-box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out, border 0.15s ease-in-out, outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out, -webkit-box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out, border 0.15s ease-in-out, box-shadow 0.15s ease-in-out, outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:background-color 0.15s ease-in-out, border 0.15s ease-in-out, box-shadow 0.15s ease-in-out, outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out, -webkit-box-shadow 0.15s ease-in-out}:host button:hover,:host a:hover{text-decoration:none}.content{margin-left:0.5rem;margin-right:0.5rem}:host(:not([icon-start])) .content{margin-left:unset}:host(:not([icon-end])) .content{margin-right:unset}:host([icon-start][dir=rtl]:not([icon-end])) .content{margin-left:unset;margin-right:0.5rem}:host([icon-end][dir=rtl]:not([icon-start])) .content{margin-right:unset;margin-left:0.5rem}:host([width=auto]){width:auto}:host([width=half]){width:50%}:host([width=full]){width:100%}:host([alignment=center]:not([width=auto])) a,:host([alignment=center]:not([width=auto])) button{-ms-flex-pack:center;justify-content:center}:host([alignment=start]:not([width=auto])) a,:host([alignment=start]:not([width=auto])) button{-ms-flex-pack:start;justify-content:flex-start}:host([alignment=end]:not([width=auto])) a,:host([alignment=end]:not([width=auto])) button{-ms-flex-pack:end;justify-content:flex-end}:host([alignment*=space-between]:not([width=auto])) a,:host([alignment*=space-between]:not([width=auto])) button{-ms-flex-pack:justify;justify-content:space-between}:host([alignment=icon-start-space-between]:not([width=auto])) .icon--start{margin-right:auto}:host([alignment=icon-end-space-between]:not([width=auto])) .icon--end{margin-left:auto}:host([dir=rtl][alignment=icon-start-space-between]:not([width=auto])) .icon--start{margin-right:unset;margin-left:auto}:host([dir=rtl][alignment=icon-end-space-between]:not([width=auto])) .icon--end{margin-left:unset;margin-right:auto}:host([alignment=center]:not([hastext=true])) .icon--start+.icon--end{margin-left:0.5rem}:host([dir=rtl][alignment=center]:not([hastext=true])) .icon--start+.icon--end{margin-left:unset;margin-right:0.5rem}.icon{display:-ms-inline-flexbox;display:inline-flex;position:relative;margin:0;line-height:inherit;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host([disabled]){pointer-events:none}:host([disabled]) button,:host([disabled]) a{pointer-events:none;opacity:var(--calcite-ui-opacity-disabled)}.calcite-button--loader{display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;right:0;bottom:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.calcite-button--loader calcite-loader{margin:0}:host([loading]) button,:host([loading]) a{color:transparent !important;pointer-events:none}:host([loading]) button .calcite-button--icon,:host([loading]) a .calcite-button--icon{opacity:0}:host([appearance=solid][color=blue]) button,:host([appearance=solid][color=blue]) a{color:var(--calcite-ui-foreground-1);background-color:var(--calcite-ui-blue-1);border:1px solid transparent}:host([appearance=solid][color=blue]) button:hover,:host([appearance=solid][color=blue]) button:focus,:host([appearance=solid][color=blue]) a:hover,:host([appearance=solid][color=blue]) a:focus{background-color:var(--calcite-ui-blue-2)}:host([appearance=solid][color=blue]) button:active,:host([appearance=solid][color=blue]) a:active{background-color:var(--calcite-ui-blue-1)}:host([appearance=solid][color=blue]) button .calcite-button--icon,:host([appearance=solid][color=blue]) a .calcite-button--icon{fill:var(--calcite-ui-foreground-1)}:host([appearance=solid][color=blue]) button calcite-loader,:host([appearance=solid][color=blue]) a calcite-loader{color:var(--calcite-ui-foreground-1)}:host([appearance=solid][color=red]) button,:host([appearance=solid][color=red]) a{color:var(--calcite-ui-foreground-1);background-color:var(--calcite-ui-red-1);border:1px solid transparent}:host([appearance=solid][color=red]) button:hover,:host([appearance=solid][color=red]) button:focus,:host([appearance=solid][color=red]) a:hover,:host([appearance=solid][color=red]) a:focus{background-color:var(--calcite-ui-red-2)}:host([appearance=solid][color=red]) button:active,:host([appearance=solid][color=red]) a:active{background-color:var(--calcite-ui-red-1)}:host([appearance=solid][color=red]) button .calcite-button--icon,:host([appearance=solid][color=red]) a .calcite-button--icon{fill:var(--calcite-ui-foreground-1)}:host([appearance=solid][color=red]) button calcite-loader,:host([appearance=solid][color=red]) a calcite-loader{color:var(--calcite-ui-foreground-1)}:host([appearance=solid][color=light]) button,:host([appearance=solid][color=light]) a{color:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-3);border:1px solid transparent}:host([appearance=solid][color=light]) button:hover,:host([appearance=solid][color=light]) button:focus,:host([appearance=solid][color=light]) a:hover,:host([appearance=solid][color=light]) a:focus{background-color:var(--calcite-ui-foreground-2)}:host([appearance=solid][color=light]) button:active,:host([appearance=solid][color=light]) a:active{background-color:var(--calcite-ui-foreground-3)}:host([appearance=solid][color=light]) button .calcite-button--icon,:host([appearance=solid][color=light]) a .calcite-button--icon{fill:var(--calcite-ui-text-1)}:host([appearance=solid][color=light]) button calcite-loader,:host([appearance=solid][color=light]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=solid][color=dark]) button,:host([appearance=solid][color=dark]) a{color:#ffffff;background-color:var(--calcite-button-dark);border:1px solid transparent}:host([appearance=solid][color=dark]) button:hover,:host([appearance=solid][color=dark]) button:focus,:host([appearance=solid][color=dark]) a:hover,:host([appearance=solid][color=dark]) a:focus{background-color:var(--calcite-button-dark-hover)}:host([appearance=solid][color=dark]) button:active,:host([appearance=solid][color=dark]) a:active{background-color:var(--calcite-button-dark)}:host([appearance=solid][color=dark]) button .calcite-button--icon,:host([appearance=solid][color=dark]) a .calcite-button--icon{fill:#ffffff}:host([appearance=solid][color=dark]) button calcite-loader,:host([appearance=solid][color=dark]) a calcite-loader{color:#ffffff}:host([appearance=outline][color=blue]) button,:host([appearance=outline][color=blue]) a{color:var(--calcite-ui-blue-3);background-color:var(--calcite-ui-foreground-1);border:1px solid var(--calcite-ui-blue-3);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=outline][color=blue]) button:hover,:host([appearance=outline][color=blue]) a:hover{border-color:var(--calcite-ui-blue-3);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-blue-3);box-shadow:inset 0 0 0 1px var(--calcite-ui-blue-3)}:host([appearance=outline][color=blue]) button:active,:host([appearance=outline][color=blue]) button:focus,:host([appearance=outline][color=blue]) a:active,:host([appearance=outline][color=blue]) a:focus{color:var(--calcite-ui-blue-3);border-color:var(--calcite-ui-blue-3);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-blue-3);box-shadow:inset 0 0 0 2px var(--calcite-ui-blue-3)}:host([appearance=outline][color=blue]) button:active .calcite-button--icon,:host([appearance=outline][color=blue]) button:focus .calcite-button--icon,:host([appearance=outline][color=blue]) a:active .calcite-button--icon,:host([appearance=outline][color=blue]) a:focus .calcite-button--icon{fill:var(--calcite-ui-blue-3)}:host([appearance=outline][color=blue]) button .calcite-button--icon,:host([appearance=outline][color=blue]) a .calcite-button--icon{fill:var(--calcite-ui-blue-3)}:host([appearance=outline][color=blue]) button calcite-loader,:host([appearance=outline][color=blue]) a calcite-loader{color:var(--calcite-ui-blue-3)}:host([appearance=outline][color=red]) button,:host([appearance=outline][color=red]) a{color:var(--calcite-ui-red-3);background-color:var(--calcite-ui-foreground-1);border:1px solid var(--calcite-ui-red-3);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=outline][color=red]) button:hover,:host([appearance=outline][color=red]) a:hover{border-color:var(--calcite-ui-red-3);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-red-3);box-shadow:inset 0 0 0 1px var(--calcite-ui-red-3)}:host([appearance=outline][color=red]) button:active,:host([appearance=outline][color=red]) button:focus,:host([appearance=outline][color=red]) a:active,:host([appearance=outline][color=red]) a:focus{color:var(--calcite-ui-red-3);border-color:var(--calcite-ui-red-3);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-red-3);box-shadow:inset 0 0 0 2px var(--calcite-ui-red-3)}:host([appearance=outline][color=red]) button:active .calcite-button--icon,:host([appearance=outline][color=red]) button:focus .calcite-button--icon,:host([appearance=outline][color=red]) a:active .calcite-button--icon,:host([appearance=outline][color=red]) a:focus .calcite-button--icon{fill:var(--calcite-ui-red-3)}:host([appearance=outline][color=red]) button .calcite-button--icon,:host([appearance=outline][color=red]) a .calcite-button--icon{fill:var(--calcite-ui-red-3)}:host([appearance=outline][color=red]) button calcite-loader,:host([appearance=outline][color=red]) a calcite-loader{color:var(--calcite-ui-red-3)}:host([appearance=outline][color=light]) button,:host([appearance=outline][color=light]) a{color:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-1);border:1px solid var(--calcite-ui-foreground-3);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=outline][color=light]) button:hover,:host([appearance=outline][color=light]) a:hover{border-color:var(--calcite-ui-foreground-3);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-foreground-3);box-shadow:inset 0 0 0 1px var(--calcite-ui-foreground-3)}:host([appearance=outline][color=light]) button:active,:host([appearance=outline][color=light]) button:focus,:host([appearance=outline][color=light]) a:active,:host([appearance=outline][color=light]) a:focus{color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-border-2);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-border-2);box-shadow:inset 0 0 0 2px var(--calcite-ui-border-2)}:host([appearance=outline][color=light]) button:active .calcite-button--icon,:host([appearance=outline][color=light]) button:focus .calcite-button--icon,:host([appearance=outline][color=light]) a:active .calcite-button--icon,:host([appearance=outline][color=light]) a:focus .calcite-button--icon{fill:var(--calcite-ui-text-1)}:host([appearance=outline][color=light]) button .calcite-button--icon,:host([appearance=outline][color=light]) a .calcite-button--icon{fill:var(--calcite-ui-text-1)}:host([appearance=outline][color=light]) button calcite-loader,:host([appearance=outline][color=light]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=outline][color=dark]) button,:host([appearance=outline][color=dark]) a{color:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-1);border:1px solid #404040;-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=outline][color=dark]) button:hover,:host([appearance=outline][color=dark]) a:hover{border-color:#404040;-webkit-box-shadow:inset 0 0 0 1px #404040;box-shadow:inset 0 0 0 1px #404040}:host([appearance=outline][color=dark]) button:active,:host([appearance=outline][color=dark]) button:focus,:host([appearance=outline][color=dark]) a:active,:host([appearance=outline][color=dark]) a:focus{color:var(--calcite-ui-text-1);border-color:#4a4a4a;-webkit-box-shadow:inset 0 0 0 2px #4a4a4a;box-shadow:inset 0 0 0 2px #4a4a4a}:host([appearance=outline][color=dark]) button:active .calcite-button--icon,:host([appearance=outline][color=dark]) button:focus .calcite-button--icon,:host([appearance=outline][color=dark]) a:active .calcite-button--icon,:host([appearance=outline][color=dark]) a:focus .calcite-button--icon{fill:var(--calcite-ui-text-1)}:host([appearance=outline][color=dark]) button .calcite-button--icon,:host([appearance=outline][color=dark]) a .calcite-button--icon{fill:var(--calcite-ui-text-1)}:host([appearance=outline][color=dark]) button calcite-loader,:host([appearance=outline][color=dark]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=clear][color=blue]) button,:host([appearance=clear][color=blue]) a{color:var(--calcite-ui-blue-3);background-color:transparent;border:1px solid var(--calcite-ui-blue-3);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=clear][color=blue]) button:hover,:host([appearance=clear][color=blue]) a:hover{border-color:var(--calcite-ui-blue-3);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-blue-3);box-shadow:inset 0 0 0 1px var(--calcite-ui-blue-3)}:host([appearance=clear][color=blue]) button:active,:host([appearance=clear][color=blue]) button:focus,:host([appearance=clear][color=blue]) a:active,:host([appearance=clear][color=blue]) a:focus{color:var(--calcite-ui-blue-3);border-color:var(--calcite-ui-blue-3);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-blue-3);box-shadow:inset 0 0 0 2px var(--calcite-ui-blue-3)}:host([appearance=clear][color=blue]) button:active .calcite-button--icon,:host([appearance=clear][color=blue]) button:focus .calcite-button--icon,:host([appearance=clear][color=blue]) a:active .calcite-button--icon,:host([appearance=clear][color=blue]) a:focus .calcite-button--icon{fill:var(--calcite-ui-blue-3)}:host([appearance=clear][color=blue]) button .calcite-button--icon,:host([appearance=clear][color=blue]) a .calcite-button--icon{fill:var(--calcite-ui-blue-3)}:host([appearance=clear][color=blue]) button calcite-loader,:host([appearance=clear][color=blue]) a calcite-loader{color:var(--calcite-ui-blue-3)}:host([appearance=clear][color=red]) button,:host([appearance=clear][color=red]) a{color:var(--calcite-ui-red-3);background-color:transparent;border:1px solid var(--calcite-ui-red-3);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=clear][color=red]) button:hover,:host([appearance=clear][color=red]) a:hover{border-color:var(--calcite-ui-red-3);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-red-3);box-shadow:inset 0 0 0 1px var(--calcite-ui-red-3)}:host([appearance=clear][color=red]) button:active,:host([appearance=clear][color=red]) button:focus,:host([appearance=clear][color=red]) a:active,:host([appearance=clear][color=red]) a:focus{color:var(--calcite-ui-red-3);border-color:var(--calcite-ui-red-3);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-red-3);box-shadow:inset 0 0 0 2px var(--calcite-ui-red-3)}:host([appearance=clear][color=red]) button:active .calcite-button--icon,:host([appearance=clear][color=red]) button:focus .calcite-button--icon,:host([appearance=clear][color=red]) a:active .calcite-button--icon,:host([appearance=clear][color=red]) a:focus .calcite-button--icon{fill:var(--calcite-ui-red-3)}:host([appearance=clear][color=red]) button .calcite-button--icon,:host([appearance=clear][color=red]) a .calcite-button--icon{fill:var(--calcite-ui-red-3)}:host([appearance=clear][color=red]) button calcite-loader,:host([appearance=clear][color=red]) a calcite-loader{color:var(--calcite-ui-red-3)}:host([appearance=clear][color=light]) button,:host([appearance=clear][color=light]) a{color:var(--calcite-ui-background);background-color:transparent;border:1px solid var(--calcite-ui-foreground-3);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=clear][color=light]) button:hover,:host([appearance=clear][color=light]) a:hover{border-color:var(--calcite-ui-foreground-3);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-foreground-3);box-shadow:inset 0 0 0 1px var(--calcite-ui-foreground-3)}:host([appearance=clear][color=light]) button:active,:host([appearance=clear][color=light]) button:focus,:host([appearance=clear][color=light]) a:active,:host([appearance=clear][color=light]) a:focus{color:var(--calcite-ui-foreground-1);border-color:var(--calcite-ui-border-2);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-border-2);box-shadow:inset 0 0 0 2px var(--calcite-ui-border-2)}:host([appearance=clear][color=light]) button:active .calcite-button--icon,:host([appearance=clear][color=light]) button:focus .calcite-button--icon,:host([appearance=clear][color=light]) a:active .calcite-button--icon,:host([appearance=clear][color=light]) a:focus .calcite-button--icon{fill:var(--calcite-ui-foreground-1)}:host([appearance=clear][color=light]) button .calcite-button--icon,:host([appearance=clear][color=light]) a .calcite-button--icon{fill:var(--calcite-ui-background)}:host([appearance=clear][color=light]) button calcite-loader,:host([appearance=clear][color=light]) a calcite-loader{color:var(--calcite-ui-background)}:host([appearance=clear][color=dark]) button,:host([appearance=clear][color=dark]) a{color:#151515;background-color:transparent;border:1px solid #404040;-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=clear][color=dark]) button:hover,:host([appearance=clear][color=dark]) a:hover{border-color:#404040;-webkit-box-shadow:inset 0 0 0 1px #404040;box-shadow:inset 0 0 0 1px #404040}:host([appearance=clear][color=dark]) button:active,:host([appearance=clear][color=dark]) button:focus,:host([appearance=clear][color=dark]) a:active,:host([appearance=clear][color=dark]) a:focus{color:#151515;border-color:#4a4a4a;-webkit-box-shadow:inset 0 0 0 2px #4a4a4a;box-shadow:inset 0 0 0 2px #4a4a4a}:host([appearance=clear][color=dark]) button:active .calcite-button--icon,:host([appearance=clear][color=dark]) button:focus .calcite-button--icon,:host([appearance=clear][color=dark]) a:active .calcite-button--icon,:host([appearance=clear][color=dark]) a:focus .calcite-button--icon{fill:#151515}:host([appearance=clear][color=dark]) button .calcite-button--icon,:host([appearance=clear][color=dark]) a .calcite-button--icon{fill:#151515}:host([appearance=clear][color=dark]) button calcite-loader,:host([appearance=clear][color=dark]) a calcite-loader{color:#151515}:host([dir=ltr][appearance=outline][split-child=primary]) button,:host([dir=rtl][appearance=outline][split-child=secondary]) button,:host([dir=ltr][appearance=clear][split-child=primary]) button,:host([dir=rtl][appearance=clear][split-child=secondary]) button{border-right:0}:host([dir=ltr][appearance=outline][split-child=secondary]) button,:host([dir=rtl][appearance=outline][split-child=primary]) button,:host([dir=ltr][appearance=clear][split-child=secondary]) button,:host([dir=rtl][appearance=clear][split-child=primary]) button{border-left:0}:host([appearance=transparent][color=blue]) button,:host([appearance=transparent][color=blue]) a{color:var(--calcite-ui-blue-3);background-color:transparent}:host([appearance=transparent][color=blue]) button:hover,:host([appearance=transparent][color=blue]) button:focus,:host([appearance=transparent][color=blue]) a:hover,:host([appearance=transparent][color=blue]) a:focus{background-color:var(--calcite-button-transparent-hover)}:host([appearance=transparent][color=blue]) button:active,:host([appearance=transparent][color=blue]) a:active{background-color:var(--calcite-button-transparent-press)}:host([appearance=transparent][color=blue]) button calcite-loader,:host([appearance=transparent][color=blue]) a calcite-loader{color:var(--calcite-ui-blue-3)}:host([appearance=transparent][color=red]) button,:host([appearance=transparent][color=red]) a{color:var(--calcite-ui-red-3);background-color:transparent}:host([appearance=transparent][color=red]) button:hover,:host([appearance=transparent][color=red]) button:focus,:host([appearance=transparent][color=red]) a:hover,:host([appearance=transparent][color=red]) a:focus{background-color:var(--calcite-button-transparent-hover)}:host([appearance=transparent][color=red]) button:active,:host([appearance=transparent][color=red]) a:active{background-color:var(--calcite-button-transparent-press)}:host([appearance=transparent][color=red]) button calcite-loader,:host([appearance=transparent][color=red]) a calcite-loader{color:var(--calcite-ui-red-3)}:host([appearance=transparent][color=light]) button,:host([appearance=transparent][color=light]) a{color:var(--calcite-ui-foreground-1);background-color:transparent}:host([appearance=transparent][color=light]) button:hover,:host([appearance=transparent][color=light]) button:focus,:host([appearance=transparent][color=light]) a:hover,:host([appearance=transparent][color=light]) a:focus{background-color:var(--calcite-button-transparent-hover)}:host([appearance=transparent][color=light]) button:active,:host([appearance=transparent][color=light]) a:active{background-color:var(--calcite-button-transparent-press)}:host([appearance=transparent][color=light]) button calcite-loader,:host([appearance=transparent][color=light]) a calcite-loader{color:var(--calcite-ui-foreground-1)}:host([appearance=transparent][color=dark]) button,:host([appearance=transparent][color=dark]) a{color:var(--calcite-ui-text-1);background-color:transparent}:host([appearance=transparent][color=dark]) button:hover,:host([appearance=transparent][color=dark]) button:focus,:host([appearance=transparent][color=dark]) a:hover,:host([appearance=transparent][color=dark]) a:focus{background-color:var(--calcite-button-transparent-hover)}:host([appearance=transparent][color=dark]) button:active,:host([appearance=transparent][color=dark]) a:active{background-color:var(--calcite-button-transparent-press)}:host([appearance=transparent][color=dark]) button calcite-loader,:host([appearance=transparent][color=dark]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([scale=s][hastext]:not([appearance=transparent])) button,:host([scale=s][hastext]:not([appearance=transparent])) a{padding:7px 12px;font-size:12px;line-height:1.33}:host([scale=s][hastext][appearance=transparent]) button,:host([scale=s][hastext][appearance=transparent]) a{padding:8px 12px;font-size:12px;line-height:1.33}:host([scale=m][hastext]:not([appearance=transparent])) button,:host([scale=m][hastext]:not([appearance=transparent])) a{padding:13px 20px;font-size:14px;line-height:1.15}:host([scale=m][hastext][appearance=transparent]) button,:host([scale=m][hastext][appearance=transparent]) a{padding:14px 20px;font-size:14px;line-height:1.15}:host([scale=l][hastext]:not([appearance=transparent])) button,:host([scale=l][hastext]:not([appearance=transparent])) a{padding:15px 24px;font-size:18px;line-height:1.2}:host([scale=l][hastext][appearance=transparent]) button,:host([scale=l][hastext][appearance=transparent]) a{padding:16px 24px;font-size:18px;line-height:1.2}:host([scale=s]:not([hastext])) button,:host([scale=s]:not([hastext])) a{height:32px;width:32px;font-size:12px}:host([scale=m]:not([hastext])) button,:host([scale=m]:not([hastext])) a{height:44px;width:44px;font-size:14px}:host([scale=l]:not([hastext])) button,:host([scale=l]:not([hastext])) a{height:56px;width:56px;font-size:18px}:host([scale=s][icon-start][icon-end]:not([hastext])) button,:host([scale=s][icon-start][icon-end]:not([hastext])) a{height:32px;width:48px;font-size:12px}:host([scale=m][icon-start][icon-end]:not([hastext])) button,:host([scale=m][icon-start][icon-end]:not([hastext])) a{height:44px;width:66px;font-size:14px}:host([scale=l][icon-start][icon-end]:not([hastext])) button,:host([scale=l][icon-start][icon-end]:not([hastext])) a{height:56px;width:84px;font-size:18px}";

const CalciteButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        /** specify the appearance style of the button, defaults to solid. */
        this.appearance = "solid";
        /** specify the color of the button, defaults to blue */
        this.color = "blue";
        /** string to override English loading text */
        this.intlLoading = TEXT.loading;
        /** optionally specify alignment of button elements. */
        this.alignment = "center";
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
        /** the node type of the rendered child element */
        this.childElType = "button";
        /** determine if there is slotted text for styling purposes */
        this.hasText = false;
        //--------------------------------------------------------------------------
        //
        //  Private Methods
        //
        //--------------------------------------------------------------------------
        // act on a requested or nearby form based on type
        this.handleClick = (e) => {
            // this.type refers to type attribute, not child element type
            if (this.childElType === "button" && this.type !== "button") {
                const requestedForm = this.el.getAttribute("form");
                const targetForm = requestedForm
                    ? document.getElementsByName(`${requestedForm}`)[0]
                    : this.el.closest("form");
                if (targetForm) {
                    const targetFormSubmitFunction = targetForm.onsubmit;
                    switch (this.type) {
                        case "submit":
                            if (targetFormSubmitFunction)
                                targetFormSubmitFunction();
                            else if (targetForm.checkValidity())
                                targetForm.submit();
                            else
                                targetForm.reportValidity();
                            break;
                        case "reset":
                            targetForm.reset();
                            break;
                    }
                }
                e.preventDefault();
            }
        };
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        this.childElType = this.href ? "a" : "button";
        this.setupTextContentObserver();
    }
    disconnectedCallback() {
        this.observer.disconnect();
    }
    componentWillLoad() {
        {
            this.updateHasText();
            const elType = this.el.getAttribute("type");
            this.type = this.childElType === "button" && elType ? elType : "submit";
        }
    }
    render() {
        const dir = getElementDir(this.el);
        const attributes = this.getAttributes();
        const Tag = this.childElType;
        const loader = (h("div", { class: CSS.buttonLoader }, h("calcite-loader", { active: true, inline: true, label: this.intlLoading })));
        const iconScale = this.scale === "l" ? "m" : "s";
        const iconStartEl = (h("calcite-icon", { class: { [CSS.icon]: true, [CSS.iconStart]: true }, dir: dir, flipRtl: this.iconFlipRtl === "start" || this.iconFlipRtl === "both", icon: this.iconStart, scale: iconScale }));
        const iconEndEl = (h("calcite-icon", { class: { [CSS.icon]: true, [CSS.iconEnd]: true }, dir: dir, flipRtl: this.iconFlipRtl === "end" || this.iconFlipRtl === "both", icon: this.iconEnd, scale: iconScale }));
        const contentEl = (h("span", { class: CSS.content }, h("slot", null)));
        return (h(Host, { dir: dir, hasText: this.hasText }, h(Tag, Object.assign({}, attributes, { disabled: this.disabled, onClick: this.handleClick, ref: (el) => (this.childEl = el), tabIndex: this.disabled ? -1 : null }), this.loading ? loader : null, this.iconStart ? iconStartEl : null, this.hasText ? contentEl : null, this.iconEnd ? iconEndEl : null)));
    }
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    async setFocus() {
        this.childEl.focus();
    }
    updateHasText() {
        this.hasText = this.el.textContent.trim().length > 0;
    }
    setupTextContentObserver() {
        {
            this.observer = new MutationObserver(() => {
                this.updateHasText();
            });
            this.observer.observe(this.el, { childList: true, subtree: true });
        }
    }
    getAttributes() {
        // spread attributes from the component to rendered child, filtering out props
        const props = [
            "appearance",
            "color",
            "dir",
            "hasText",
            "icon-start",
            "icon-end",
            "id",
            "splitChild",
            "loading",
            "scale",
            "slot",
            "width",
            "theme"
        ];
        return Array.from(this.el.attributes)
            .filter((a) => a && !props.includes(a.name))
            .reduce((acc, { name, value }) => (Object.assign(Object.assign({}, acc), { [name]: value })), {});
    }
    get el() { return getElement(this); }
};
CalciteButton.style = calciteButtonCss;

const CSS$1 = {
  container: "container",
  header: "header",
  footer: "footer",
  title: "title",
  subtitle: "subtitle",
  thumbnailWrapper: "thumbnail-wrapper",
  checkboxWrapper: "checkbox-wrapper"
};
const SLOTS = {
  thumbnail: "thumbnail",
  title: "title",
  subtitle: "subtitle",
  footerLeading: "footer-leading",
  footerTrailing: "footer-trailing"
};
const TEXT$1 = {
  select: "Select",
  deselect: "Deselect",
  loading: "Loading"
};

const calciteCardCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host{max-width:100%}:host .calcite-card-container{display:-ms-flexbox;display:flex;height:100%;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;background-color:var(--calcite-ui-foreground-1);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;position:relative;border:1px solid var(--calcite-ui-border-2);color:var(--calcite-ui-text-3);-webkit-box-shadow:none;box-shadow:none}:host .calcite-card-container:hover{-webkit-box-shadow:0 4px 16px 0 rgba(0, 0, 0, 0.08), 0 2px 8px 0 rgba(0, 0, 0, 0.04);box-shadow:0 4px 16px 0 rgba(0, 0, 0, 0.08), 0 2px 8px 0 rgba(0, 0, 0, 0.04);z-index:1}:host .calcite-card-container:active{-webkit-box-shadow:0 1px 6px -1px rgba(0, 0, 0, 0.16), 0 1px 2px -1px rgba(0, 0, 0, 0.08);box-shadow:0 1px 6px -1px rgba(0, 0, 0, 0.16), 0 1px 2px -1px rgba(0, 0, 0, 0.08);-webkit-transition-duration:75ms;transition-duration:75ms;z-index:1}.container{-ms-flex:1 1 auto;flex:1 1 auto;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host([loading]) .calcite-card-container *:not(calcite-loader):not(.calcite-card-loader-container){opacity:0;pointer-events:none}:host([loading]) .calcite-card-loader-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:absolute;left:0;right:0;top:0;bottom:0}:host .header,:host .footer{padding:0.75rem;display:-ms-flexbox;display:flex}:host .header{-ms-flex-direction:column;flex-direction:column}:host .footer{padding:0.75rem;-ms-flex-direction:row;flex-direction:row;-ms-flex-line-pack:justify;align-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-top:auto}:host .card-content{padding:0 0.75rem;color:var(--calcite-ui-text-3);font-size:0.875rem;line-height:1.5}:host([selectable]) .calcite-card-container:active{-webkit-box-shadow:0 1px 6px -1px rgba(0, 0, 0, 0.16), 0 1px 2px -1px rgba(0, 0, 0, 0.08);box-shadow:0 1px 6px -1px rgba(0, 0, 0, 0.16), 0 1px 2px -1px rgba(0, 0, 0, 0.08)}:host([selected]) .calcite-card-container{border-color:var(--calcite-ui-blue-1)}slot[name=title]::slotted(*),*::slotted([slot=title]){font-weight:500;color:var(--calcite-ui-text-1);margin:0;font-size:0.9375rem;line-height:1.5}slot[name=subtitle]::slotted(*),*::slotted([slot=subtitle]){font-weight:400;color:var(--calcite-ui-text-2);margin:0;margin-top:0.375rem;font-size:0.875rem;line-height:1.5}slot[name=thumbnail]::slotted(img),img::slotted([slot=thumbnail]){max-width:100%;min-width:100%}slot[name=footer-leading]::slotted(*),*::slotted([slot=footer-leading]){-webkit-margin-end:auto;margin-inline-end:auto;-ms-flex-item-align:center;align-self:center;font-size:0.875rem;line-height:1.5}slot[name=footer-trailing]::slotted(*),*::slotted([slot=footer-trailing]){-ms-flex-item-align:center;align-self:center;font-size:0.875rem;line-height:1.5}:host .thumbnail-wrapper{font-size:0}:host .checkbox-wrapper{position:absolute;top:0.375rem;right:0.375rem;margin:0;padding:0}:host([dir=rtl]) .checkbox-wrapper{left:0.375rem;right:auto}";

const CalciteCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        /** string to override English loading text */
        this.intlLoading = TEXT$1.loading;
        /** string to override English select text for checkbox when selectable is true */
        this.intlSelect = TEXT$1.select;
        /** string to override English deselect text for checkbox when selectable is true */
        this.intlDeselect = TEXT$1.deselect;
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
        this.calciteCardSelect = createEvent(this, "calciteCardSelect", 7);
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    render() {
        const dir = getElementDir(this.el);
        return (h(Host, { dir: dir }, h("div", { class: "calcite-card-container" }, this.loading ? (h("div", { class: "calcite-card-loader-container" }, h("calcite-loader", { active: true, label: this.intlLoading }))) : null, h("section", { "aria-busy": this.loading.toString(), class: { [CSS$1.container]: true } }, this.selectable ? this.renderCheckbox() : null, this.renderThumbnail(), this.renderHeader(), h("div", { class: "card-content" }, h("slot", null)), this.renderFooter()))));
    }
    selectCard() {
        this.selected = !this.selected;
        this.calciteCardSelect.emit();
    }
    renderThumbnail() {
        const hasThumbnail = this.el.querySelector(`[slot=${SLOTS.thumbnail}]`);
        return hasThumbnail ? (h("div", { class: CSS$1.thumbnailWrapper }, h("slot", { name: SLOTS.thumbnail }))) : null;
    }
    renderCheckbox() {
        const checkboxLabel = this.selected ? this.intlDeselect : this.intlSelect;
        return (h("label", { "aria-label": checkboxLabel, class: CSS$1.checkboxWrapper, onClick: this.cardSelectClick, onKeyDown: this.cardSelectKeyDown, title: checkboxLabel }, h("calcite-checkbox", { checked: this.selected, theme: this.theme })));
    }
    renderHeader() {
        const title = this.el.querySelector(`[slot=${SLOTS.title}]`);
        const subtitle = this.el.querySelector(`[slot=${SLOTS.subtitle}]`);
        const hasHeader = title || subtitle;
        return hasHeader ? (h("header", { class: CSS$1.header }, h("slot", { name: SLOTS.title }), h("slot", { name: SLOTS.subtitle }))) : null;
    }
    renderFooter() {
        const leadingFooter = this.el.querySelector(`[slot=${SLOTS.footerLeading}]`);
        const trailingFooter = this.el.querySelector(`[slot=${SLOTS.footerTrailing}]`);
        const hasFooter = leadingFooter || trailingFooter;
        return hasFooter ? (h("footer", { class: CSS$1.footer }, h("slot", { name: SLOTS.footerLeading }), h("slot", { name: SLOTS.footerTrailing }))) : null;
    }
    get el() { return getElement(this); }
};
CalciteCard.style = calciteCardCss;

const calciteCheckboxCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=light]){--calcite-ui-border-4:$blk-100}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host([scale=s]){--calcite-checkbox-size:var(--calcite-font-size--2);--calcite-checkbox-grid-gap:0.5rem}:host([scale=m]){--calcite-checkbox-size:var(--calcite-font-size--1);--calcite-checkbox-grid-gap:0.5rem}:host([scale=l]){--calcite-checkbox-size:var(--calcite-font-size-1);--calcite-checkbox-grid-gap:0.75rem}:host{display:-ms-inline-flexbox;display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}:host .check-svg{width:var(--calcite-checkbox-size);height:var(--calcite-checkbox-size);overflow:hidden;display:inline-block;background-color:var(--calcite-ui-foreground-1);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-border-4);box-shadow:inset 0 0 0 1px var(--calcite-ui-border-4);fill:var(--calcite-ui-background);pointer-events:none;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out}:host .hasLabel{display:grid;grid-gap:var(--calcite-checkbox-grid-gap);-ms-flex-align:center;align-items:center;--calcite-label-margin-bottom:0}:host(:hover) .check-svg,:host([hovered]) .check-svg{-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-blue-1);box-shadow:inset 0 0 0 2px var(--calcite-ui-blue-1)}:host([checked]) .check-svg,:host([indeterminate]) .check-svg{background-color:var(--calcite-ui-blue-1);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-blue-1);box-shadow:inset 0 0 0 1px var(--calcite-ui-blue-1)}:host(:focus) .check-svg,:host([focused]) .check-svg{-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-blue-1), 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-blue-1);box-shadow:inset 0 0 0 1px var(--calcite-ui-blue-1), 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-blue-1);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host([disabled]){cursor:default;opacity:var(--calcite-ui-opacity-disabled);pointer-events:none}:host([scale=s]) .hasLabel{grid-template-columns:12px 1fr 4px;grid-template-rows:16px 1fr}:host([scale=m]) .hasLabel{grid-template-columns:16px 1fr 4px;grid-template-rows:20px 1fr}:host([scale=l]) .hasLabel{grid-template-columns:20px 1fr 4px;grid-template-rows:24px 1fr}";

const CalciteCheckbox = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        /** The checked state of the checkbox. */
        this.checked = false;
        /** True if the checkbox is disabled */
        this.disabled = false;
        /** The focused state of the checkbox. */
        this.focused = false;
        /** The hovered state of the checkbox. */
        this.hovered = false;
        /**
         * True if the checkbox is initially indeterminate,
         * which is independent from its checked state
         * https://css-tricks.com/indeterminate-checkboxes/
         * */
        this.indeterminate = false;
        /** The name of the checkbox input */
        this.name = "";
        /** specify the scale of the checkbox, defaults to m */
        this.scale = "m";
        //--------------------------------------------------------------------------
        //
        //  Private Properties
        //
        //--------------------------------------------------------------------------
        this.checkedPath = "M12.753 3l-7.319 7.497L3.252 8.31 2 9.373l3.434 3.434L14 4.24z";
        this.indeterminatePath = "M4 7h8v2H4z";
        //--------------------------------------------------------------------------
        //
        //  Private Methods
        //
        //--------------------------------------------------------------------------
        this.getPath = () => this.indeterminate ? this.indeterminatePath : this.checked ? this.checkedPath : "";
        this.toggle = () => {
            if (!this.disabled) {
                this.checked = !this.checked;
                this.focused = true;
                this.indeterminate = false;
                this.calciteCheckboxChange.emit();
            }
        };
        this.formResetHandler = () => {
            this.checked = this.initialChecked;
        };
        this.nativeLabelClickHandler = ({ target }) => {
            if (!this.el.closest("calcite-label") &&
                target.nodeName === "LABEL" &&
                target.parentNode.nodeName !== "CALCITE-LABEL" &&
                this.el.id &&
                target.htmlFor === this.el.id) {
                this.toggle();
            }
        };
        this.calciteCheckboxChange = createEvent(this, "calciteCheckboxChange", 7);
        this.calciteCheckboxFocusedChange = createEvent(this, "calciteCheckboxFocusedChange", 7);
    }
    checkedWatcher(newChecked) {
        this.input.checked = newChecked;
    }
    disabledChanged(disabled) {
        this.input.disabled = disabled;
    }
    focusedChanged(focused) {
        if (focused && !this.el.hasAttribute("hidden")) {
            this.input.focus();
        }
        else {
            this.input.blur();
        }
    }
    nameChanged(newName) {
        this.input.name = newName;
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    onClick(event) {
        // This line prevents double-triggering when wrapped inside either a <label> or a <calcite-label>
        // by preventing the browser default behavior, which is to click the label's first input child element
        if (event.target === this.el) {
            event.preventDefault();
        }
        this.toggle();
    }
    mouseenter() {
        this.hovered = true;
    }
    mouseleave() {
        this.hovered = false;
    }
    onInputBlur() {
        this.focused = false;
        this.calciteCheckboxFocusedChange.emit();
    }
    onInputFocus() {
        this.focused = true;
        this.calciteCheckboxFocusedChange.emit();
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        this.guid = this.el.id || `calcite-checkbox-${guid()}`;
        this.initialChecked = this.checked;
        this.renderHiddenCheckboxInput();
        const form = this.el.closest("form");
        if (form) {
            form.addEventListener("reset", this.formResetHandler);
        }
        document.addEventListener("click", this.nativeLabelClickHandler);
    }
    disconnectedCallback() {
        this.input.parentNode.removeChild(this.input);
        const form = this.el.closest("form");
        if (form) {
            form.removeEventListener("reset", this.formResetHandler);
        }
        document.removeEventListener("click", this.nativeLabelClickHandler);
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    renderHiddenCheckboxInput() {
        this.input = document.createElement("input");
        this.checked && this.input.setAttribute("checked", "");
        this.input.disabled = this.disabled;
        this.input.id = `${this.guid}-input`;
        this.input.name = this.name;
        this.input.onblur = this.onInputBlur.bind(this);
        this.input.onfocus = this.onInputFocus.bind(this);
        this.input.style.opacity = "0";
        this.input.style.position = "absolute";
        this.input.style.zIndex = "-1";
        this.input.type = "checkbox";
        if (this.value) {
            this.input.value = this.value;
        }
        this.el.appendChild(this.input);
    }
    render() {
        if (this.el.textContent) {
            return (h(Host, { "aria-checked": this.checked.toString(), role: "checkbox" }, h("div", { class: "hasLabel" }, h("svg", { class: "check-svg", viewBox: "0 0 16 16" }, h("path", { d: this.getPath() })), h("calcite-label", { dir: getElementDir(this.el), "disable-spacing": true, scale: this.scale }, h("slot", null)))));
        }
        return (h(Host, { "aria-checked": this.checked.toString(), role: "checkbox" }, h("svg", { class: "check-svg", viewBox: "0 0 16 16" }, h("path", { d: this.getPath() })), h("slot", null)));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "checked": ["checkedWatcher"],
        "disabled": ["disabledChanged"],
        "focused": ["focusedChanged"],
        "name": ["nameChanged"]
    }; }
};
CalciteCheckbox.style = calciteCheckboxCss;

const CSS$2 = {
  icon: "icon",
  flipRtl: "flip-rtl"
};

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

const calciteIconCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-inline-flexbox;display:inline-flex}:host([scale=s]){width:1rem;height:1rem;min-width:1rem;min-height:1rem}:host([scale=m]){width:1.5rem;height:1.5rem;min-width:1.5rem;min-height:1.5rem}:host([scale=l]){width:2rem;height:2rem;min-width:2rem;min-height:2rem}.flip-rtl{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.svg{display:block}";

const CalciteIcon = class {
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
        if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            this.intersectionObserver = null;
        }
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
        if ( !icon || !visible) {
            return;
        }
        this.pathData = await fetchIcon({ icon, scale });
    }
    waitUntilVisible(callback) {
        if (
            typeof window === "undefined" ||
            !window.IntersectionObserver) {
            callback();
            return;
        }
        this.intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.intersectionObserver.disconnect();
                    this.intersectionObserver = null;
                    callback();
                }
            });
        }, { rootMargin: "50px" });
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

const calciteLabelCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}.sc-calcite-label:root{--calcite-popper-transition:150ms ease-in-out}[hidden].sc-calcite-label-h{display:none}[theme=dark].sc-calcite-label-h,[theme=dark] .sc-calcite-label-h{--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}[alignment=start].sc-calcite-label-h,[alignment=end][dir=rtl].sc-calcite-label-h{text-align:left}[alignment=end].sc-calcite-label-h,[alignment=start][dir=rtl].sc-calcite-label-h{text-align:right}[alignment=center].sc-calcite-label-h{text-align:center}[scale=s].sc-calcite-label-h{--calcite-label-margin-bottom:12px}[scale=s].sc-calcite-label-h label.sc-calcite-label{font-size:var(--calcite-font-size--2)}[scale=m].sc-calcite-label-h{--calcite-label-margin-bottom:14px}[scale=m].sc-calcite-label-h label.sc-calcite-label{font-size:var(--calcite-font-size--1)}[scale=l].sc-calcite-label-h{--calcite-label-margin-bottom:18px}[scale=l].sc-calcite-label-h label.sc-calcite-label{font-size:var(--calcite-font-size-1)}.sc-calcite-label-h label.sc-calcite-label{cursor:pointer;width:100%;margin:0 0 var(--calcite-label-margin-bottom, 1.5rem) 0;line-height:1.3}[layout=default].sc-calcite-label-h label.sc-calcite-label{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:4px}[layout=inline].sc-calcite-label-h label.sc-calcite-label,[layout=inline-space-between].sc-calcite-label-h label.sc-calcite-label{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;gap:0.75rem}[layout=inline-space-between].sc-calcite-label-h label.sc-calcite-label{-ms-flex-pack:justify;justify-content:space-between}[disabled].sc-calcite-label-h>label.sc-calcite-label{pointer-events:none;opacity:var(--calcite-ui-opacity-disabled)}.sc-calcite-label-h[disabled] .sc-calcite-label-s>*{pointer-events:none}.sc-calcite-label-h[disabled] .sc-calcite-label-s>*[disabled],.sc-calcite-label-h[disabled] .sc-calcite-label-s>*[disabled] *{opacity:1}.sc-calcite-label-h[disabled] .sc-calcite-label-s>calcite-input-message:not([active]){opacity:0}[status=invalid].sc-calcite-label-h label.sc-calcite-label{color:var(--calcite-ui-red-1)}[status=valid].sc-calcite-label-h label.sc-calcite-label{color:var(--calcite-ui-text-2)}[status=idle].sc-calcite-label-h label.sc-calcite-label{color:var(--calcite-ui-text-2)}[disable-spacing].sc-calcite-label-h label.sc-calcite-label{gap:0;margin:0}";

const CalciteLabel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        /** specify the text alignment of the label */
        this.alignment = "start";
        /** specify the status of the label and any child input / input messages */
        this.status = "idle";
        /** specify the scale of the input, defaults to m */
        this.scale = "m";
        /** is the wrapped element positioned inline with the label slotted text */
        this.layout = "default";
        this.handleCalciteHtmlForClicks = (target) => {
            // 1. has htmlFor
            if (!this.for)
                return;
            // 2. htmlFor matches a calcite component
            const inputForThisLabel = document.getElementById(this.for);
            if (!inputForThisLabel)
                return;
            if (!inputForThisLabel.localName.startsWith("calcite"))
                return;
            // 5. target is NOT the calcite component that this label matches
            if (target === inputForThisLabel)
                return;
            // 3. target is not a labelable native form element
            const labelableNativeElements = [
                "button",
                "input",
                "meter",
                "output",
                "progress",
                "select",
                "textarea"
            ];
            if (labelableNativeElements.includes(target.localName))
                return;
            // 4. target is not a labelable calcite form element
            const labelableCalciteElements = [
                "calcite-button",
                "calcite-checkbox",
                "calcite-date",
                "calcite-inline-editable",
                "calcite-input",
                "calcite-radio",
                "calcite-radio-button",
                "calcite-radio-button-group",
                "calcite-radio-group",
                "calcite-rating",
                "calcite-select",
                "calcite-slider",
                "calcite-switch"
            ];
            if (labelableCalciteElements.includes(target.localName))
                return;
            // 5. target is not a child of a labelable calcite form element
            for (let i = 0; i < labelableCalciteElements.length; i++) {
                if (target.closest(labelableCalciteElements[i])) {
                    return;
                }
            }
            inputForThisLabel.click();
        };
        this.calciteLabelFocus = createEvent(this, "calciteLabelFocus", 7);
    }
    disabledWatcher() {
        if (this.disabled)
            this.setDisabledControls();
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    onClick(event) {
        const target = event.target;
        this.calciteLabelFocus.emit({
            labelEl: this.el,
            interactedEl: target,
            requestedInput: this.for
        });
        this.handleCalciteHtmlForClicks(target);
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    getAttributes() {
        // spread attributes from the component to rendered child, filtering out props
        const props = ["disabled", "id", "layout", "scale", "status", "theme"];
        return Array.from(this.el.attributes)
            .filter((a) => a && !props.includes(a.name))
            .reduce((acc, { name, value }) => (Object.assign(Object.assign({}, acc), { [name]: value })), {});
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        const status = ["invalid", "valid", "idle"];
        if (!status.includes(this.status))
            this.status = "idle";
        const layout = ["inline", "inline-space-between", "default"];
        if (!layout.includes(this.layout))
            this.layout = "default";
        const scale = ["s", "m", "l"];
        if (!scale.includes(this.scale))
            this.scale = "m";
    }
    componentDidLoad() {
        if (this.disabled)
            this.setDisabledControls();
    }
    render() {
        const attributes = this.getAttributes();
        const dir = getElementDir(this.el);
        return (h(Host, { dir: dir }, h("label", Object.assign({}, attributes, { ref: (el) => (this.labelEl = el) }), h("slot", null))));
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    setDisabledControls() {
        var _a;
        (_a = this.labelEl) === null || _a === void 0 ? void 0 : _a.childNodes.forEach((item) => {
            if (item.nodeName.includes("CALCITE")) {
                item.setAttribute("disabled", "");
            }
        });
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "disabled": ["disabledWatcher"]
    }; }
};
CalciteLabel.style = calciteLabelCss;

const calciteLoaderCss = "@charset \"UTF-8\";@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:relative;display:none;padding-bottom:4rem;padding-top:4rem;margin-left:auto;margin-right:auto;min-height:var(--loader-size);stroke:var(--calcite-ui-blue-1);stroke-width:3;fill:none;opacity:1;-webkit-transform:scale(1, 1);transform:scale(1, 1);animation:loader-color-shift 6s alternate-reverse infinite linear}:host([scale=s]){--loader-size:33px;--loader-size-inline:13px;font-size:0.8125rem;line-height:1.5}:host([scale=s]) .loader__percentage{font-size:0.625rem}:host([scale=m]){--loader-size:57px;--loader-size-inline:17px;font-size:0.875rem;line-height:1.5}:host([scale=m]) .loader__percentage{font-size:0.875rem}:host([scale=l]){--loader-size:81px;--loader-size-inline:21px;font-size:0.9375rem;line-height:1.5}:host([scale=l]) .loader__percentage{font-size:1.25rem}:host([no-padding]){padding-top:0;padding-bottom:0}:host([active]){display:-ms-flexbox;display:flex}.loader__text{display:block;margin-top:calc(var(--loader-size) + 3rem);text-align:center}.loader__percentage{display:block;width:var(--loader-size);position:absolute;top:4rem;left:50%;margin-left:calc(var(--loader-size) / 2 * -1);margin-top:calc(var(--loader-size) / 2);text-align:center;color:var(--calcite-ui-text-1);line-height:0.25;-webkit-transform:scale(1, 1);transform:scale(1, 1)}.loader__svgs{width:var(--loader-size);height:var(--loader-size);position:absolute;top:4rem;left:50%;margin-left:calc(var(--loader-size) / 2 * -1);overflow:visible;opacity:1;-webkit-transform:scale(1, 1);transform:scale(1, 1)}.loader__svg{width:var(--loader-size);height:var(--loader-size);position:absolute;top:0;left:0;overflow:visible;-webkit-transform-origin:center;transform-origin:center;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-name:loader-clockwise;animation-name:loader-clockwise}@supports (display: grid){.loader__svg--1{-webkit-animation-name:loader-offset-1;animation-name:loader-offset-1}.loader__svg--2{-webkit-animation-name:loader-offset-2;animation-name:loader-offset-2}.loader__svg--3{-webkit-animation-name:loader-offset-3;animation-name:loader-offset-3}}:host([type=determinate]){stroke:var(--calcite-ui-border-3);-webkit-animation:none;animation:none}:host([type=determinate]) .loader__svg--3{stroke:var(--calcite-ui-blue-1);stroke-dasharray:157.0795;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-animation:none;animation:none;-webkit-transition:all 100ms linear;transition:all 100ms linear}:host([inline]){stroke:currentColor;stroke-width:2;-webkit-animation:none;animation:none;margin:0;padding-bottom:0;padding-top:0;position:relative;height:var(--loader-size-inline);min-height:var(--loader-size-inline);width:var(--loader-size-inline);margin-right:var(--loader-size-inline)/2;vertical-align:-var(--loader-size-inline)/5}:host([inline][dir=rtl]){margin-left:var(--loader-size-inline)/2;margin-right:0}:host([active][inline]){display:inline-block}:host([inline]) .loader__svgs{top:0;left:0;margin:0;width:var(--loader-size-inline);height:var(--loader-size-inline)}:host([inline]) .loader__svg{width:var(--loader-size-inline);height:var(--loader-size-inline)}:host([complete]){opacity:0;-webkit-transform:scale(0.75, 0.75);transform:scale(0.75, 0.75);-webkit-transform-origin:center;transform-origin:center;-webkit-transition:opacity 200ms linear 1000ms, -webkit-transform 200ms linear 1000ms;transition:opacity 200ms linear 1000ms, -webkit-transform 200ms linear 1000ms;transition:opacity 200ms linear 1000ms, transform 200ms linear 1000ms;transition:opacity 200ms linear 1000ms, transform 200ms linear 1000ms, -webkit-transform 200ms linear 1000ms}:host([complete]) .loader__svgs{opacity:0;-webkit-transform:scale(0.75, 0.75);transform:scale(0.75, 0.75);-webkit-transform-origin:center;transform-origin:center;-webkit-transition:opacity 180ms linear 800ms, -webkit-transform 180ms linear 800ms;transition:opacity 180ms linear 800ms, -webkit-transform 180ms linear 800ms;transition:opacity 180ms linear 800ms, transform 180ms linear 800ms;transition:opacity 180ms linear 800ms, transform 180ms linear 800ms, -webkit-transform 180ms linear 800ms}:host([complete]) .loader__percentage{color:var(--calcite-ui-blue-1);-webkit-transform:scale(1.05, 1.05);transform:scale(1.05, 1.05);-webkit-transform-origin:center;transform-origin:center;-webkit-transition:color 200ms linear, -webkit-transform 200ms linear;transition:color 200ms linear, -webkit-transform 200ms linear;transition:color 200ms linear, transform 200ms linear;transition:color 200ms linear, transform 200ms linear, -webkit-transform 200ms linear}.loader__svg--1{stroke-dasharray:28.0499107143% 140.2495535714%;-webkit-animation-duration:0.72s;animation-duration:0.72s}@-webkit-keyframes loader-offset-1{0%{stroke-dasharray:28.0499107143% 252.4491964286%;stroke-dashoffset:0}50%{stroke-dasharray:140.2495535714% 140.2495535714%;stroke-dashoffset:-84.1497321429%}100%{stroke-dasharray:28.0499107143% 252.4491964286%;stroke-dashoffset:-280.4991071429%}}@keyframes loader-offset-1{0%{stroke-dasharray:28.0499107143% 252.4491964286%;stroke-dashoffset:0}50%{stroke-dasharray:140.2495535714% 140.2495535714%;stroke-dashoffset:-84.1497321429%}100%{stroke-dasharray:28.0499107143% 252.4491964286%;stroke-dashoffset:-280.4991071429%}}.loader__svg--2{stroke-dasharray:56.0998214286% 140.2495535714%;-webkit-animation-duration:0.96s;animation-duration:0.96s}@-webkit-keyframes loader-offset-2{0%{stroke-dasharray:56.0998214286% 224.3992857143%;stroke-dashoffset:0}50%{stroke-dasharray:140.2495535714% 140.2495535714%;stroke-dashoffset:-98.1746875%}100%{stroke-dasharray:56.0998214286% 224.3992857143%;stroke-dashoffset:-280.4991071429%}}@keyframes loader-offset-2{0%{stroke-dasharray:56.0998214286% 224.3992857143%;stroke-dashoffset:0}50%{stroke-dasharray:140.2495535714% 140.2495535714%;stroke-dashoffset:-98.1746875%}100%{stroke-dasharray:56.0998214286% 224.3992857143%;stroke-dashoffset:-280.4991071429%}}.loader__svg--3{stroke-dasharray:14.0249553571% 140.2495535714%;-webkit-animation-duration:1.16s;animation-duration:1.16s}@-webkit-keyframes loader-offset-3{0%{stroke-dasharray:14.0249553571% 266.4741517857%;stroke-dashoffset:0}50%{stroke-dasharray:140.2495535714% 140.2495535714%;stroke-dashoffset:-77.1372544643%}100%{stroke-dasharray:14.0249553571% 266.4741517857%;stroke-dashoffset:-280.4991071429%}}@keyframes loader-offset-3{0%{stroke-dasharray:14.0249553571% 266.4741517857%;stroke-dashoffset:0}50%{stroke-dasharray:140.2495535714% 140.2495535714%;stroke-dashoffset:-77.1372544643%}100%{stroke-dasharray:14.0249553571% 266.4741517857%;stroke-dashoffset:-280.4991071429%}}@-webkit-keyframes loader-color-shift{0%{stroke:var(--calcite-ui-blue-1)}33%{stroke:var(--calcite-ui-blue-3)}66%{stroke:var(--calcite-ui-blue-2)}100%{stroke:var(--calcite-ui-blue-1)}}@keyframes loader-color-shift{0%{stroke:var(--calcite-ui-blue-1)}33%{stroke:var(--calcite-ui-blue-3)}66%{stroke:var(--calcite-ui-blue-2)}100%{stroke:var(--calcite-ui-blue-1)}}@-webkit-keyframes loader-clockwise{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loader-clockwise{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";

const CalciteLoader = class {
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

var TreeSelectionMode;
(function (TreeSelectionMode) {
  TreeSelectionMode["Single"] = "single";
  TreeSelectionMode["Multi"] = "multi";
  TreeSelectionMode["Children"] = "children";
  TreeSelectionMode["MultiChildren"] = "multi-children";
})(TreeSelectionMode || (TreeSelectionMode = {}));

const calciteTreeCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block;outline:none}";

const CalciteTree = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        /** Display indentation guide lines */
        this.lines = false;
        /** Specify the scale of the tree, defaults to m */
        this.scale = "m";
        /** Customize how tree selection works (single, multi, children, multi-children) */
        this.selectionMode = TreeSelectionMode.Single;
        //--------------------------------------------------------------------------
        //
        //  Public Methods
        //
        //--------------------------------------------------------------------------
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /** @internal If this tree is nested within another tree, set to false */
        this.root = true;
        this.calciteTreeSelect = createEvent(this, "calciteTreeSelect", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    componentWillRender() {
        const parent = this.el.parentElement.closest("calcite-tree");
        // this.theme = getElementTheme(this.el);
        this.lines = parent ? parent.lines : this.lines;
        this.scale = parent ? parent.scale : this.scale;
        this.selectionMode = parent ? parent.selectionMode : this.selectionMode;
        this.root = parent ? false : true;
    }
    render() {
        return (h(Host, { "aria-multiselectable": this.selectionMode === TreeSelectionMode.Multi ||
                this.selectionMode === TreeSelectionMode.MultiChildren, role: this.root ? "tree" : undefined, tabindex: this.root ? "0" : undefined }, h("slot", null)));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    onFocus() {
        if (this.root) {
            const selectedNode = this.el.querySelector("calcite-tree-item[selected]");
            const firstNode = this.el.querySelector("calcite-tree-item");
            (selectedNode || firstNode).focus();
        }
    }
    onClick(e) {
        const target = e.target;
        const childItems = nodeListToArray(target.querySelectorAll("calcite-tree-item"));
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
        if (this.root) {
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
        if (this.root) {
            e.preventDefault();
            e.stopPropagation();
        }
        this.calciteTreeSelect.emit({
            selected: nodeListToArray(this.el.querySelectorAll("calcite-tree-item")).filter((i) => i.selected)
        });
    }
    get el() { return getElement(this); }
};
CalciteTree.style = calciteTreeCss;

const calciteTreeItemCss = "@charset \"UTF-8\";@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host{display:block;color:var(--calcite-tree-text);cursor:pointer;outline:none;font-size:0.875rem;line-height:1.5;max-width:100%;--calcite-tree-text:var(--calcite-ui-text-2);--calcite-tree-text:var(--calcite-ui-text-1);--calcite-tree-text:var(--calcite-ui-text-1);--calcite-tree-chevron:var(--calcite-ui-border-1);--calcite-tree-chevron-hover:var(--calcite-ui-text-3);--calcite-tree-vertical-padding:0.375rem;--calcite-tree-indicator:var(--calcite-ui-border-1);--calcite-tree-indicator-active:var(--calcite-ui-blue-1);--calcite-tree-indicator-first-start:0.1rem;--calcite-tree-indicator-first-end:auto;--calcite-tree-indicator-distance-start:0.15rem;--calcite-tree-indicator-distance-end:auto;--calcite-tree-icon-edge-distance-start:-0.2rem;--calcite-tree-icon-edge-distance-end:0;--calcite-tree-icon-content-distance-start:0.375rem;--calcite-tree-icon-content-distance-end:0;--calcite-tree-indent-start:1.4rem;--calcite-tree-indent-end:0;--calcite-tree-children-indent-start:0.25rem;--calcite-tree-children-indent-end:0;--calcite-tree-children-padding-start:1rem;--calcite-tree-children-padding-end:0;--calcite-tree-line-position-start:0.05rem;--calcite-tree-line-position-end:0;--calcite-tree-parent-line-position-start:-0.95rem;--calcite-tree-parent-line-position-end:0;--calcite-tree-line-width:1px;--calcite-tree-hover-line-width:3px}:host([lines]){--calcite-tree-line:var(--calcite-ui-border-3);--calcite-tree-line-hover:var(--calcite-ui-border-1)}:host([lines]) .calcite-tree-node:before{display:none}:host(:not([lines])) .calcite-tree-node:after{display:none}:host([scale=s]){--calcite-tree-hover-line-width:2px;--calcite-tree-vertical-padding:0.1875rem;--calcite-tree-children-indent-start:0rem;--calcite-tree-children-padding-start:0.8rem;--calcite-tree-line-position-start:0.3rem;--calcite-tree-parent-line-position-start:-0.5rem}:host([dir=rtl]){--calcite-tree-indicator-first-start:0;--calcite-tree-indicator-first-end:0.1rem;--calcite-tree-indicator-distance-start:auto;--calcite-tree-indicator-distance-end:0.15rem;--calcite-tree-icon-edge-distance-start:auto;--calcite-tree-icon-edge-distance-end:-0.2rem;--calcite-tree-icon-content-distance-start:0;--calcite-tree-icon-content-distance-end:0.375rem;--calcite-tree-indent-start:0;--calcite-tree-indent-end:1.4rem;--calcite-tree-children-indent-start:0;--calcite-tree-children-indent-end:0.25rem;--calcite-tree-children-padding-start:0;--calcite-tree-children-padding-end:1rem;--calcite-tree-line-position-start:0;--calcite-tree-line-position-end:0.05rem;--calcite-tree-parent-line-position-start:0;--calcite-tree-parent-line-position-end:-0.95rem}:host([dir=rtl][scale=s]){--calcite-tree-children-indent-end:0rem;--calcite-tree-children-padding-end:0.8rem;--calcite-tree-line-position-end:0.3rem;--calcite-tree-parent-line-position-end:-0.5rem}::slotted(*){color:inherit;font-size:0.875rem;line-height:1.5;text-decoration:none !important;word-wrap:break-word;overflow-wrap:break-word;min-width:0;max-width:100%}::slotted(*):hover{text-decoration:none !important}::slotted(a){width:100%;text-decoration:none}:host{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus){outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}.calcite-tree-children{z-index:1;margin-left:var(--calcite-tree-children-indent-start);margin-right:var(--calcite-tree-children-indent-end);padding-left:var(--calcite-tree-children-padding-start);padding-right:var(--calcite-tree-children-padding-end);position:relative;-webkit-transform:scaleY(0);transform:scaleY(0);opacity:0;overflow:hidden;-webkit-transition:0.15s cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity 0.15s cubic-bezier(0.215, 0.44, 0.42, 0.88), all 0.15s ease-in-out;transition:0.15s cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity 0.15s cubic-bezier(0.215, 0.44, 0.42, 0.88), all 0.15s ease-in-out;height:0;-webkit-transform-origin:top;transform-origin:top}.calcite-tree-children:after{-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out;content:\"\";height:100%;width:var(--calcite-tree-line-width);background:var(--calcite-tree-line);left:var(--calcite-tree-line-position-start);right:var(--calcite-tree-line-position-end);top:0;position:absolute}:host([expanded])>.calcite-tree-children{-webkit-transform:scaleY(1);transform:scaleY(1);opacity:1;height:auto}:host([has-children]) .calcite-tree-children:hover:after,:host([has-children]) .calcite-tree-children:focus:after{background:var(--calcite-tree-line-hover)}.calcite-tree-node{display:-ms-flexbox;display:flex;padding:var(--calcite-tree-vertical-padding) 0;padding-left:var(--calcite-tree-indent-start);padding-right:var(--calcite-tree-indent-end);position:relative}.calcite-tree-node:before{content:\"•\";position:absolute;left:var(--calcite-tree-indicator-distance-start);right:var(--calcite-tree-indicator-distance-end);opacity:0;color:var(--calcite-tree-indicator);-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out}.calcite-tree-node:after{-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out;content:\"\";height:100%;width:var(--calcite-tree-line-width);background:var(--calcite-tree-line);left:var(--calcite-tree-parent-line-position-start);right:var(--calcite-tree-parent-line-position-end);top:0;position:absolute}:host([depth=\"1\"])>.calcite-tree-node:after{display:none}:host([has-children])>.calcite-tree-node{padding-left:0;padding-right:0}:host([has-children])>.calcite-tree-node:before{display:none}:host([depth=\"1\"])>.calcite-tree-node:before,:host([depth=\"1\"])>.calcite-tree-children:before{left:var(--calcite-tree-indicator-first-start);right:var(--calcite-tree-indicator-first-end)}.calcite-tree-node:hover:before,:host([selected]) .calcite-tree-node:hover:before,:host(:focus) .calcite-tree-node:before{opacity:1}.calcite-tree-node:hover:after,:host([selected]) .calcite-tree-node:hover:after,:host(:focus) .calcite-tree-node:after{width:var(--calcite-tree-hover-line-width);background:var(--calcite-tree-line-hover);z-index:2}.calcite-tree-node:hover ::slotted(*),:host([selected]) .calcite-tree-node:hover ::slotted(*),:host(:focus) .calcite-tree-node ::slotted(*){color:var(--calcite-tree-text-hover)}.calcite-tree-node:hover .calcite-tree-chevron,:host([selected]) .calcite-tree-node:hover .calcite-tree-chevron,:host(:focus) .calcite-tree-node .calcite-tree-chevron{fill:var(--calcite-tree-chevron-hover)}.calcite-tree-node:hover .calcite-tree-indicator,:host([selected]) .calcite-tree-node:hover .calcite-tree-indicator,:host(:focus) .calcite-tree-node .calcite-tree-indicator{fill:var(--calcite-tree-indicator-hover)}:host([selected])>.calcite-tree-node,:host([selected])>.calcite-tree-node:hover{color:var(--calcite-tree-text-active);font-weight:500}:host([selected])>.calcite-tree-node:before,:host([selected])>.calcite-tree-node:hover:before{opacity:1;color:var(--calcite-tree-indicator-active)}:host([selected])>.calcite-tree-node:after,:host([selected])>.calcite-tree-node:hover:after{background:var(--calcite-ui-blue-1);width:var(--calcite-tree-hover-line-width);z-index:2}:host([selected])>.calcite-tree-node ::slotted(*),:host([selected])>.calcite-tree-node:hover ::slotted(*){color:var(--calcite-tree-text-active)}:host([has-children][expanded])>.calcite-tree-node{color:var(--calcite-tree-text-active);font-weight:500}:host([has-children][expanded])>.calcite-tree-node:after{background:var(--calcite-ui-blue-1)}:host([has-children][expanded])>.calcite-tree-node:before{opacity:1;color:var(--calcite-tree-indicator-active)}:host([has-children][expanded])>.calcite-tree-node ::slotted(*){color:var(--calcite-tree-text-active)}:host([has-children][expanded][selected])>.calcite-tree-node:after{background:var(--calcite-ui-blue-1);width:var(--calcite-tree-hover-line-width);z-index:2}.calcite-tree-chevron{-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out;-ms-flex:0 0 auto;flex:0 0 auto;position:relative;-ms-flex-item-align:center;align-self:center;left:var(--calcite-tree-icon-edge-distance-start);right:var(--calcite-tree-icon-edge-distance-end);margin-right:var(--calcite-tree-icon-content-distance-start);margin-left:var(--calcite-tree-icon-content-distance-end);-webkit-transform:rotate(0deg);transform:rotate(0deg);fill:var(--calcite-tree-chevron)}:host([dir=rtl]) .calcite-tree-chevron{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(:hover) .calcite-tree-chevron,:host(:focus) .calcite-tree-chevron{fill:var(--calcite-tree-chevron-hover);stroke:var(--calcite-tree-chevron-hover);stroke-width:0.75}:host([expanded])>.calcite-tree-node>.calcite-tree-chevron{-webkit-transform:rotate(90deg);transform:rotate(90deg);fill:var(--calcite-ui-blue-1);stroke-width:0.75;stroke:var(--calcite-ui-blue-1)}";

const CalciteTreeItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        /** Is the item currently selected */
        this.selected = false;
        /** True if the item is in an expanded state */
        this.expanded = false;
        this.iconClickHandler = (event) => {
            event.stopPropagation();
            this.expanded = !this.expanded;
            this.calciteTreeItemSelect.emit({
                modifyCurrentSelection: event.shiftKey,
                forceToggle: true
            });
        };
        this.childrenClickHandler = (event) => event.stopPropagation();
        //--------------------------------------------------------------------------
        //
        //  Public Methods
        //
        //--------------------------------------------------------------------------
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /** @internal Is the parent of this item expanded? */
        this.parentExpanded = false;
        /** @internal What level of depth is this item at? */
        this.depth = -1;
        /** @internal Does this tree item have a tree inside it? */
        this.hasChildren = null;
        this.calciteTreeItemSelect = createEvent(this, "calciteTreeItemSelect", 7);
    }
    expandedHandler(newValue) {
        const items = getSlotted(this.el, "children", {
            all: true,
            selector: "calcite-tree-item"
        });
        items.forEach((item) => (item.parentExpanded = newValue));
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    componentWillRender() {
        this.hasChildren = !!this.el.querySelector("calcite-tree");
        this.depth = 0;
        this.el.dir = getElementDir(this.el);
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
    render() {
        const icon = this.hasChildren ? (h("calcite-icon", { class: "calcite-tree-chevron", "data-test-id": "icon", icon: "chevron-right", onClick: this.iconClickHandler, scale: "s" })) : null;
        const hidden = !(this.parentExpanded || this.depth === 1);
        return (h(Host, { "aria-expanded": this.hasChildren ? this.expanded.toString() : undefined, "aria-hidden": hidden.toString(), "aria-selected": this.selected
                ? "true"
                : this.selectionMode === TreeSelectionMode.Multi ||
                    this.selectionMode === TreeSelectionMode.MultiChildren
                    ? "false"
                    : undefined, "calcite-hydrated-hidden": hidden, role: "treeitem", tabindex: this.parentExpanded || this.depth === 1 ? "0" : "-1" }, h("div", { class: "calcite-tree-node", ref: (el) => (this.defaultSlotWrapper = el) }, icon, h("slot", null)), h("div", { class: "calcite-tree-children", "data-test-id": "calcite-tree-children", onClick: this.childrenClickHandler, ref: (el) => (this.childrenSlotWrapper = el), role: this.hasChildren ? "group" : undefined }, h("slot", { name: "children" }))));
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
            modifyCurrentSelection: e.shiftKey,
            forceToggle: false
        });
    }
    keyDownHandler(e) {
        let root;
        switch (getKey(e.key)) {
            case " ":
                this.selected = !this.selected;
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
                    this.selected = !this.selected;
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
                const parentItem = this.el.parentElement.closest("calcite-tree-item");
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
                root = this.el.closest("calcite-tree[root]");
                const firstNode = root.querySelector("calcite-tree-item");
                firstNode.focus();
                break;
            case "End":
                root = this.el.closest("calcite-tree[root]");
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

const hubCardCss = ":host{display:block;font-family:\"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;font-size:16px}calcite-card{height:100%}hub-card{-webkit-box-shadow:0 1px 2px rgba(0,0,0,0.15);box-shadow:0 1px 2px rgba(0,0,0,0.15);-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;padding:2px;margin:3px;-webkit-transition:all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);transition:all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);position:relative}hub-card::after{content:'';position:absolute;z-index:-1;opacity:0;border-radius:5px;-webkit-box-shadow:0 5px 15px rgba(0,0,0,0.3);box-shadow:0 5px 15px rgba(0,0,0,0.3);-webkit-transition:opacity 0.3s ease-in-out;transition:opacity 0.3s ease-in-out;-webkit-transition:all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);transition:all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)}hub-card:hover{-webkit-transform:scale(1.2, 1.2);transform:scale(1.2, 1.2)}hub-card:hover::after{opacity:1}.hub-content-footer{grid-area:footer;padding:0 0 10px 60px}.hub-content-card:hover{-webkit-box-shadow:0 8px 16px 0 rgba(0,0,0,0.2);box-shadow:0 8px 16px 0 rgba(0,0,0,0.2)}.hub-content-title{font:#101f28 !important;font-size:1rem;font-weight:700}.hub-content-url{text-decoration:none;color:black}.hub-content-url:hover{text-decoration:underline}.card-image{height:175px}.hub-content-summary,.hub-content-type{font-size:0.9rem;color:rgb(102, 102, 102);}.layout-vertical.hub-content-card{width:250px}.layout-vertical .hub-content-image{height:150px;-ms-flex:0 0 auto;flex:0 0 auto}.layout-vertical img.hub-content-image{width:100%;-o-object-fit:cover;object-fit:cover}.hub-content-metadata{margin:0.5rem 0.8rem}.layout-horizontal.hub-content-card{display:-ms-flexbox;display:flex}.layout-horizontal .hub-content-image{display:-ms-flexbox;display:flex;-ms-flex:0 0 150px;flex:0 0 150px;max-height:115px}.layout-horizontal .hub-content-metadata{-ms-flex:1 1 auto;flex:1 1 auto;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}.hub-content-details{color:#4c4c4c;font-size:0.8em;-webkit-box-shadow:0 -1px #ccc;box-shadow:0 -1px #ccc;padding:15px 15px 0;grid-template-columns:repeat(2,50%);grid-gap:2px 5px;-ms-flex-align:center;align-items:center;-ms-flex:1 auto;flex:1 auto;display:grid}.card-description{min-height:100px;overflow:hidden}.card-title{height:44px;overflow:hidden}";

const HubCard = class {
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

const HubContentCard = class {
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

const HubFilterCategory = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        this.filterChanged = createEvent(this, "filterChanged", 7);
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
        output.push(h("calcite-tree", { "selection-mode": "multi-children", theme: "light" }, root));
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

const hubGalleryCss = ":host{overflow-x:hidden}.search-grid{display:grid;grid-template:\".   search\" auto\n    \"filters results\" auto /\n    -webkit-min-content 3fr;grid-template:\".   search\" auto\n    \"filters results\" auto /\n    min-content 3fr;padding:0 1rem 0 3rem}hub-suggest-input{grid-area:search}.filters{grid-area:filters}.search-results{grid-area:results;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:justify;justify-content:space-between}@media screen and (max-width: 530px){.gallery-card{width:calc((100% - (0 * 30px))/ 1)}}@media screen and (min-width: 530px) and (max-width: 975px){.gallery-card{width:calc((100% - (1 * 30px))/ 2)}}@media screen and (min-width: 975px) and (max-width: 1200px){.gallery-card{width:calc((100% - (2 * 30px))/ 3)}}@media screen and (min-width:1200px){.gallery-card{width:calc((100% - (3 * 30px))/ 4)}}.gallery-card{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;color:#4c4c4c;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:30px;-webkit-box-shadow:0 0 5px 0 rgba(76,76,76,.25);box-shadow:0 0 5px 0 rgba(76,76,76,.25);}";

const HubGallery = class {
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
var ARCGIS_ONLINE_GEOCODING_URL = "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/";
//# sourceMappingURL=helpers.js.map

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
        return response;
    });
}
//# sourceMappingURL=geocode.js.map

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
//# sourceMappingURL=suggest.js.map

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

const HubInput = class {
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
var DEFAULT_VERSION = '4.15';
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
 * @param version Ex: '4.15' or '3.32'. Defaults to the latest 4.x version.
 */
function getCdnUrl(version) {
    if (version === void 0) { version = DEFAULT_VERSION; }
    return "https://js.arcgis.com/" + version + "/";
}
/**
 * Get the CDN url for a the CSS for a given version and/or theme
 *
 * @param version Ex: '4.15', '3.32', or 'next'. Defaults to the latest 4.x version.
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
var isBrowser = typeof window !== 'undefined';
// allow consuming libraries to provide their own Promise implementations
var utils = {
    Promise: isBrowser ? window['Promise'] : undefined
};

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
    // if we have another occasion to use spread, let'd do that and replace this for...in
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
                if (opts.dojoConfig) {
                    // set dojo configuration parameters before loading the script
                    window['dojoConfig'] = opts.dojoConfig;
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
// NOTE: rollup ignores the default export
// and builds the UMD namespace out of the above named exports
// so this is only needed so that consumers of the ESM build
// can do esriLoader.loadModules(), etc
// TODO: remove this next breaking change
var esriLoader = {
    getScript: getScript,
    isLoaded: isLoaded,
    loadModules: loadModules,
    loadScript: loadScript,
    loadCss: loadCss,
    setDefaultOptions: setDefaultOptions,
    utils: utils
};

exports.getScript = getScript;
exports.isLoaded = isLoaded;
exports.loadModules = loadModules;
exports.loadScript = loadScript;
exports.loadCss = loadCss;
exports.setDefaultOptions = setDefaultOptions;
exports.utils = utils;
exports['default'] = esriLoader;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=esri-loader.js.map
});

unwrapExports(esriLoader);
var esriLoader_3 = esriLoader.loadModules;

const hubMapCss = "@import url(\"https://js.arcgis.com/4.15/esri/themes/light/main.css\");:host{height:100%;min-height:100%}.hub-map{height:100%;min-height:100%}.drawing-button{display:none;position:relative;bottom:20px;left:200px}.fullscreen-button{position:relative;bottom:40px;left:20px}";

const HubMap = class {
    // municipalitiesFeatureLayer: __esri.FeatureLayer;
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        esriLoader_3(["esri/Map"], this.esriMapOptions).then(([EsriMap]) => {
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
        this.drawingComplete = createEvent(this, "drawingComplete", 7);
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
        return esriLoader_3(["esri/WebMap", "esri/views/MapView"], this.esriMapOptions).then(([WebMap, MapView]) => {
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
        esriLoader_3(["esri/Graphic",
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
        esriLoader_3(["esri/widgets/Sketch",
            "esri/layers/GraphicsLayer"]).then(([Sketch, GraphicsLayer]) => {
            const notesLayer = new GraphicsLayer();
            const sketch = new Sketch({
                layer: notesLayer,
                view: this.esriMapView,
                availableCreateTools: ['point', 'polyline', 'polygon'],
                creationMode: 'single',
                defaultCreateOptions: {
                    mode: 'freehand'
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

const HubRadar = class {
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
            output.push(h("calcite-loader", { text: "Scanning radar...", "is-active": true }));
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
 * Fuse.js v5.2.3 - Lightweight fuzzy-search (http://fusejs.io)
 *
 * Copyright (c) 2020 Kiro Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

const INFINITY = 1 / 0;

const isArray = (value) =>
  !Array.isArray
    ? Object.prototype.toString.call(value) === '[object Array]'
    : Array.isArray(value);

// Adapted from:
// https://github.com/lodash/lodash/blob/f4ca396a796435422bd4fd41fadbd225edddf175/.internal/baseToString.js
const baseToString = (value) => {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value
  }
  let result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result
};

const toString = (value) => (value == null ? '' : baseToString(value));

const isString = (value) => typeof value === 'string';

const isNumber = (value) => typeof value === 'number';

const isDefined = (value) => value !== undefined && value !== null;

const isBlank = (value) => !value.trim().length;

function get(obj, path) {
  let list = [];
  let arr = false;

  const _get = (obj, path) => {
    if (!path) {
      // If there's no path left, we've gotten to the object we care about.
      list.push(obj);
    } else {
      const dotIndex = path.indexOf('.');

      let key = path;
      let remaining = null;

      if (dotIndex !== -1) {
        key = path.slice(0, dotIndex);
        remaining = path.slice(dotIndex + 1);
      }

      const value = obj[key];

      if (isDefined(value)) {
        if (!remaining && (isString(value) || isNumber(value))) {
          list.push(toString(value));
        } else if (isArray(value)) {
          arr = true;
          // Search each item in the array.
          for (let i = 0, len = value.length; i < len; i += 1) {
            _get(value[i], remaining);
          }
        } else if (remaining) {
          // An object. Recurse further.
          _get(value, remaining);
        }
      }
    }
  };

  _get(obj, path);

  if (arr) {
    return list
  }

  return list[0]
}

const MatchOptions = {
  // Whether the matches should be included in the result set. When true, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: false,
  // When true, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: false,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
};

const BasicOptions = {
  // When true, the algorithm continues searching to the end of the input even if a perfect
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
  // When true, it enables the use of unix-like search commands
  useExtendedSearch: false,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: get
};

var Config = {
  ...BasicOptions,
  ...MatchOptions,
  ...FuzzyOptions,
  ...AdvancedOptions
};

function computeScore(
  pattern,
  {
    errors = 0,
    currentLocation = 0,
    expectedLocation = 0,
    distance = Config.distance
  } = {}
) {
  const accuracy = errors / pattern.length;
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
  let matchedIndices = [];
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
        matchedIndices.push([start, end]);
      }
      start = -1;
    }
  }

  // (i-1 - start) + 1 => i - start
  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    matchedIndices.push([start, i - 1]);
  }

  return matchedIndices
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
    includeMatches = Config.includeMatches
  } = {}
) {
  if (pattern.length > MAX_BITS) {
    throw new Error(`Pattern length exceeds max of ${MAX_BITS}.`)
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

  // A mask of the matches, used for building the indices
  const matchMask = [];

  if (includeMatches) {
    for (let i = 0; i < textLen; i += 1) {
      matchMask[i] = 0;
    }
  }

  let index;

  // Get all exact matches, here for speed up
  while ((index = text.indexOf(pattern, bestLocation)) > -1) {
    let score = computeScore(pattern, {
      currentLocation: index,
      expectedLocation,
      distance
    });

    currentThreshold = Math.min(score, currentThreshold);
    bestLocation = index + patternLen;

    if (includeMatches) {
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

  const mask = 1 << (patternLen <= MAX_BITS - 1 ? patternLen - 1 : MAX_BITS - 2);

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
        distance
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

      if (charMatch && includeMatches) {
        matchMask[currentLocation] = 1;
      }

      // First pass: exact match
      bitArr[j] = ((bitArr[j + 1] << 1) | 1) & charMatch;

      // Subsequent passes: fuzzy match
      if (i !== 0) {
        bitArr[j] |=
          ((lastBitArr[j + 1] | lastBitArr[j]) << 1) | 1 | lastBitArr[j + 1];
      }

      if (bitArr[j] & mask) {
        finalScore = computeScore(pattern, {
          errors: i,
          currentLocation,
          expectedLocation,
          distance
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
      distance
    });

    if (score > currentThreshold) {
      break
    }

    lastBitArr = bitArr;
  }

  let result = {
    isMatch: bestLocation >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: !finalScore ? 0.001 : finalScore
  };

  if (includeMatches) {
    result.matchedIndices = convertMaskToIndices(matchMask, minMatchCharLength);
  }

  return result
}

function createPatternAlphabet(pattern) {
  let mask = {};
  let len = pattern.length;

  for (let i = 0; i < len; i += 1) {
    mask[pattern.charAt(i)] = 0;
  }

  for (let i = 0; i < len; i += 1) {
    mask[pattern.charAt(i)] |= 1 << (len - i - 1);
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
      isCaseSensitive = Config.isCaseSensitive
    } = {}
  ) {
    this.options = {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive
    };

    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();

    this.chunks = [];

    let index = 0;
    while (index < this.pattern.length) {
      let pattern = this.pattern.substring(index, index + MAX_BITS);
      this.chunks.push({
        pattern,
        alphabet: createPatternAlphabet(pattern)
      });
      index += MAX_BITS;
    }
  }

  searchIn(value) {
    let text = value.$;
    return this.searchInString(text)
  }

  searchInString(text) {
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
        result.matchedIndices = [[0, text.length - 1]];
      }

      return result
    }

    // Otherwise, use Bitap algorithm
    const {
      location,
      distance,
      threshold,
      findAllMatches,
      minMatchCharLength
    } = this.options;

    let allMatchedIndices = [];
    let totalScore = 0;
    let hasMatches = false;

    for (let i = 0, len = this.chunks.length; i < len; i += 1) {
      let { pattern, alphabet } = this.chunks[i];

      let result = search(text, pattern, alphabet, {
        location: location + MAX_BITS * i,
        distance,
        threshold,
        findAllMatches,
        minMatchCharLength,
        includeMatches
      });

      const { isMatch, score, matchedIndices } = result;

      if (isMatch) {
        hasMatches = true;
      }

      totalScore += score;

      if (isMatch && matchedIndices) {
        allMatchedIndices = [...allMatchedIndices, ...matchedIndices];
      }
    }

    let result = {
      isMatch: hasMatches,
      score: hasMatches ? totalScore / this.chunks.length : 1
    };

    if (hasMatches && includeMatches) {
      result.matchedIndices = allMatchedIndices;
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
    return /^'"(.*)"$/
  }
  static get singleRegex() {
    return /^'(.*)$/
  }
  search(text) {
    let location = 0;
    let index;

    const matchedIndices = [];
    const patternLen = this.pattern.length;

    // Get all exact matches
    while ((index = text.indexOf(this.pattern, location)) > -1) {
      location = index + patternLen;
      matchedIndices.push([index, location - 1]);
    }

    const isMatch = !!matchedIndices.length;

    return {
      isMatch,
      score: isMatch ? 1 : 0,
      matchedIndices
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
      matchedIndices: [0, text.length - 1]
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
      matchedIndices: [0, this.pattern.length - 1]
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
      matchedIndices: [0, text.length - 1]
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
      matchedIndices: [text.length - this.pattern.length, text.length - 1]
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
      matchedIndices: [0, text.length - 1]
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
      isCaseSensitive = Config.isCaseSensitive
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
      isCaseSensitive
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
    return this._bitapSearch.searchInString(text)
  }
}

// ❗Order is important. DO NOT CHANGE.
const searchers = [
  ExactMatch,
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
const MultiMatchSet = new Set([FuzzyMatch.type, ExactMatch.type]);

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
 * | `jscript`   | fuzzy-match                | Items that match `jscript`             |
 * | `'python`   | exact-match                | Items that include `python`            |
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

  searchIn(value) {
    const query = this.query;

    if (!query) {
      return {
        isMatch: false,
        score: 1
      }
    }

    let text = value.$;

    const { includeMatches, isCaseSensitive } = this.options;

    text = isCaseSensitive ? text : text.toLowerCase();

    let numMatches = 0;
    let indices = [];
    let totalScore = 0;

    // ORs
    for (let i = 0, qLen = query.length; i < qLen; i += 1) {
      const searchers = query[i];

      // Reset indices
      indices.length = 0;
      numMatches = 0;

      // ANDs
      for (let j = 0, pLen = searchers.length; j < pLen; j += 1) {
        const searcher = searchers[j];
        const { isMatch, matchedIndices, score } = searcher.search(text);

        if (isMatch) {
          numMatches += 1;
          totalScore += score;
          if (includeMatches) {
            const type = searcher.constructor.type;
            if (MultiMatchSet.has(type)) {
              indices = [...indices, ...matchedIndices];
            } else {
              indices.push(matchedIndices);
            }
          }
        } else {
          totalScore = 0;
          numMatches = 0;
          indices.length = 0;
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
          result.matchedIndices = indices;
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

const SPACE = /[^ ]+/g;

function createIndex(keys, list, { getFn = Config.getFn } = {}) {
  let indexedList = [];

  // List is Array<String>
  if (isString(list[0])) {
    // Iterate over every string in the list
    for (let i = 0, len = list.length; i < len; i += 1) {
      const value = list[i];

      if (isDefined(value) && !isBlank(value)) {
        let record = {
          $: value,
          idx: i,
          t: value.match(SPACE).length
        };

        indexedList.push(record);
      }
    }
  } else {
    // List is Array<Object>
    const keysLen = keys.length;

    for (let i = 0, len = list.length; i < len; i += 1) {
      let item = list[i];

      let record = { idx: i, $: {} };

      // Iterate over every key (i.e, path), and fetch the value at that key
      for (let j = 0; j < keysLen; j += 1) {
        let key = keys[j];
        let value = getFn(item, key);

        if (!isDefined(value)) {
          continue
        }

        if (isArray(value)) {
          let subRecords = [];
          const stack = [{ arrayIndex: -1, value }];

          while (stack.length) {
            const { arrayIndex, value } = stack.pop();

            if (!isDefined(value)) {
              continue
            }

            if (isString(value) && !isBlank(value)) {
              let subRecord = {
                $: value,
                idx: arrayIndex,
                t: value.match(SPACE).length
              };
              subRecords.push(subRecord);
            } else if (isArray(value)) {
              for (let k = 0, arrLen = value.length; k < arrLen; k += 1) {
                stack.push({
                  arrayIndex: k,
                  value: value[k]
                });
              }
            }
          }
          record.$[key] = subRecords;
        } else if (!isBlank(value)) {
          let subRecord = {
            $: value,
            t: value.match(SPACE).length
          };

          record.$[key] = subRecord;
        }
      }

      indexedList.push(record);
    }
  }

  return indexedList
}

class KeyStore {
  constructor(keys) {
    this._keys = {};
    this._keyNames = [];
    this._length = keys.length;

    // Iterate over every key
    if (keys.length && isString(keys[0])) {
      for (let i = 0; i < this._length; i += 1) {
        const key = keys[i];
        this._keys[key] = {
          weight: 1
        };
        this._keyNames.push(key);
      }
    } else {
      let totalWeight = 0;

      for (let i = 0; i < this._length; i += 1) {
        const key = keys[i];

        if (!Object.prototype.hasOwnProperty.call(key, 'name')) {
          throw new Error('Missing "name" property in key object')
        }

        const keyName = key.name;
        this._keyNames.push(keyName);

        if (!Object.prototype.hasOwnProperty.call(key, 'weight')) {
          throw new Error('Missing "weight" property in key object')
        }

        const weight = key.weight;

        if (weight <= 0 || weight >= 1) {
          throw new Error(
            '"weight" property in key must be in the range of (0, 1)'
          )
        }

        this._keys[keyName] = {
          weight
        };

        totalWeight += weight;
      }

      // Normalize weights so that their sum is equal to 1
      for (let i = 0; i < this._length; i += 1) {
        const keyName = this._keyNames[i];
        const keyWeight = this._keys[keyName].weight;
        this._keys[keyName].weight = keyWeight / totalWeight;
      }
    }
  }
  get(key, name) {
    return this._keys[key] ? this._keys[key][name] : -1
  }
  keys() {
    return this._keyNames
  }
  count() {
    return this._length
  }
  toJSON() {
    return JSON.stringify(this._keys)
  }
}

function transformMatches(result, data) {
  const matches = result.matches;
  data.matches = [];

  if (!isDefined(matches)) {
    return
  }

  for (let i = 0, len = matches.length; i < len; i += 1) {
    let match = matches[i];

    if (!isDefined(match.indices) || match.indices.length === 0) {
      continue
    }

    let obj = {
      indices: match.indices,
      value: match.value
    };

    if (match.key) {
      obj.key = match.key;
    }

    if (match.idx > -1) {
      obj.refIndex = match.idx;
    }

    data.matches.push(obj);
  }
}

function transformScore(result, data) {
  data.score = result.score;
}

const registeredSearchers = [];

function register(...args) {
  registeredSearchers.push(...args);
}

class Fuse {
  constructor(list, options = {}, index = null) {
    this.options = { ...Config, ...options };

    this._processKeys(this.options.keys);
    this.setCollection(list, index);
  }

  setCollection(list, index = null) {
    this.list = list;
    this.listIsStringArray = isString(list[0]);

    if (index) {
      this.setIndex(index);
    } else {
      this.setIndex(this._createIndex());
    }
  }

  setIndex(listIndex) {
    this._indexedList = listIndex;
  }

  _processKeys(keys) {
    this._keyStore = new KeyStore(keys);
  }

  _createIndex() {
    return createIndex(this._keyStore.keys(), this.list, {
      getFn: this.options.getFn
    })
  }

  search(pattern, opts = { limit: false }) {
    pattern = pattern.trim();

    if (!pattern.length) {
      return []
    }

    const { shouldSort } = this.options;

    let searcher = null;

    for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
      let searcherClass = registeredSearchers[i];
      if (searcherClass.condition(pattern, this.options)) {
        searcher = new searcherClass(pattern, this.options);
        break
      }
    }

    if (!searcher) {
      searcher = new BitapSearch(pattern, this.options);
    }

    let results = this._searchUsing(searcher);

    this._computeScore(results);

    if (shouldSort) {
      this._sort(results);
    }

    if (opts.limit && isNumber(opts.limit)) {
      results = results.slice(0, opts.limit);
    }

    return this._format(results)
  }

  _searchUsing(searcher) {
    const list = this._indexedList;
    const results = [];
    const { includeMatches } = this.options;

    // List is Array<String>
    if (this.listIsStringArray) {
      // Iterate over every string in the list
      for (let i = 0, len = list.length; i < len; i += 1) {
        let value = list[i];
        let { $: text, idx, t } = value;

        if (!isDefined(text)) {
          continue
        }

        let searchResult = searcher.searchIn(value);

        const { isMatch, score } = searchResult;

        if (!isMatch) {
          continue
        }

        let match = { score, value: text, t };

        if (includeMatches) {
          match.indices = searchResult.matchedIndices;
        }

        results.push({
          item: text,
          idx,
          matches: [match]
        });
      }
    } else {
      // List is Array<Object>
      const keyNames = this._keyStore.keys();
      const keysLen = this._keyStore.count();

      for (let i = 0, len = list.length; i < len; i += 1) {
        let { $: item, idx } = list[i];

        if (!isDefined(item)) {
          continue
        }

        let matches = [];

        // Iterate over every key (i.e, path), and fetch the value at that key
        for (let j = 0; j < keysLen; j += 1) {
          let key = keyNames[j];
          let value = item[key];

          if (!isDefined(value)) {
            continue
          }

          if (isArray(value)) {
            for (let k = 0, len = value.length; k < len; k += 1) {
              let arrItem = value[k];
              const { $: text, idx, t } = arrItem;

              if (!isDefined(text)) {
                continue
              }

              let searchResult = searcher.searchIn(arrItem);

              const { isMatch, score } = searchResult;

              if (!isMatch) {
                continue
              }

              let match = { score, key, value: text, idx, t };

              if (includeMatches) {
                match.indices = searchResult.matchedIndices;
              }

              matches.push(match);
            }
          } else {
            const { $: text, t } = value;

            let searchResult = searcher.searchIn(value);

            const { isMatch, score } = searchResult;

            if (!isMatch) {
              continue
            }

            let match = { score, key, value: text, t };

            if (includeMatches) {
              match.indices = searchResult.matchedIndices;
            }

            matches.push(match);
          }
        }

        if (matches.length) {
          results.push({
            idx,
            item,
            matches
          });
        }
      }
    }

    return results
  }

  // Practical scoring function
  _computeScore(results) {
    const resultsLen = results.length;

    for (let i = 0; i < resultsLen; i += 1) {
      const result = results[i];
      const matches = result.matches;
      const numMatches = matches.length;

      let totalScore = 1;

      for (let j = 0; j < numMatches; j += 1) {
        const match = matches[j];
        const { key, t } = match;

        const keyWeight = this._keyStore.get(key, 'weight');
        const weight = keyWeight > -1 ? keyWeight : 1;
        const score =
          match.score === 0 && keyWeight > -1 ? Number.EPSILON : match.score;

        // Field-length norm: the shorter the field, the higher the weight.
        const norm = 1 / Math.sqrt(t);

        totalScore *= Math.pow(score, weight * norm);
      }

      result.score = totalScore;
    }
  }

  _sort(results) {
    results.sort(this.options.sortFn);
  }

  _format(results) {
    const finalOutput = [];

    const { includeMatches, includeScore } = this.options;

    let transformers = [];

    if (includeMatches) transformers.push(transformMatches);
    if (includeScore) transformers.push(transformScore);

    for (let i = 0, len = results.length; i < len; i += 1) {
      const result = results[i];
      const { idx } = result;

      const data = {
        item: this.list[idx],
        refIndex: idx
      };

      if (transformers.length) {
        for (let j = 0, len = transformers.length; j < len; j += 1) {
          transformers[j](result, data);
        }
      }

      finalOutput.push(data);
    }

    return finalOutput
  }
}

register(ExtendedSearch);

Fuse.version = '5.2.3';
Fuse.createIndex = createIndex;
Fuse.config = Config;

const hubSuggestInputCss = ":host{-webkit-transition:all 0.15s ease-in-out 0s;transition:all 0.15s ease-in-out 0s;font-family:\"Avenir Next W01\", \"Avenir Next W00\", \"Avenir Next\", \"Avenir\", \"Helvetica Neue\", sans-serif}input[type=text]{border:none;border-bottom:2px solid grey;font-size:1.2rem;margin:5px 10px}.autocomplete{position:relative;display:inline-block}input{border:1px solid transparent;padding:10px;font-size:16px}input[type=text]{width:60%}input[type=submit]{background-color:DodgerBlue;color:#fff;cursor:pointer}input[type=submit]:hover{-webkit-box-shadow:0 8px 16px 0 rgba(0,0,0,0.2);box-shadow:0 8px 16px 0 rgba(0,0,0,0.2)}.autocomplete-items{position:absolute;border:1px solid #d4d4d4;border-bottom:none;border-top:none;z-index:99;top:100%;left:0;right:0}.autocomplete-items div{padding:10px;cursor:pointer;background-color:#fff;border-bottom:1px solid #d4d4d4}.autocomplete-items div:hover{background-color:#e9e9e9}.autocomplete-active{background-color:DodgerBlue !important;color:#ffffff}.hub-suggestions-div{position:relative}.hub-suggestions-input{width:100%}.hub-suggestions-ul{list-style:none;border:1px lightblue solid;background-color:white;position:absolute;margin:-5px 0 0 10px;padding:0;width:60%;z-index:100;color:#333}.hub-suggestions-li{line-height:1.5;padding-left:5px;font-size:1.1em}.hub-suggestions-li:hover{cursor:pointer;background-color:lightgray;color:black}.hub-suggestions-selected{background-color:lightgray;color:black}";

const HubSuggestInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        this.querySelect = createEvent(this, "querySelect", 7);
        this.queryInput = createEvent(this, "queryInput", 7);
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
