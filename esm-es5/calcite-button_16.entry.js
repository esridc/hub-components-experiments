var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
var CSS = {
    buttonLoader: "calcite-button--loader",
    content: "content",
    icon: "icon",
    iconStart: "icon--start",
    iconEnd: "icon--end"
};
var TEXT = {
    loading: "Loading"
};
var calciteButtonCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host{display:inline-block;width:auto;vertical-align:middle;--calcite-button-dark:#404040;--calcite-button-dark-hover:#4a4a4a;--calcite-button-dark-press:#353535;--calcite-button-transparent-hover:rgba(0, 0, 0, 0.05);--calcite-button-transparent-press:rgba(0, 0, 0, 0.08)}:host([theme=dark]){--calcite-button-dark:#404040;--calcite-button-dark-hover:#353535;--calcite-button-dark-press:#4a4a4a;--calcite-button-transparent-hover:rgba(255, 255, 255, 0.05);--calcite-button-transparent-press:rgba(255, 255, 255, 0.08)}:host([round]){border-radius:50px}:host([round]) a,:host([round]) button{border-radius:50px}:host button,:host a{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host button:focus,:host a:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:2px}:host button,:host a{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:0.375rem 1rem;text-decoration:none;width:100%;height:100%;border-radius:0;border:none;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;font-family:inherit;-webkit-appearance:none;cursor:pointer;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:background-color 0.15s ease-in-out, border 0.15s ease-in-out, outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out, -webkit-box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out, border 0.15s ease-in-out, outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out, -webkit-box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out, border 0.15s ease-in-out, box-shadow 0.15s ease-in-out, outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:background-color 0.15s ease-in-out, border 0.15s ease-in-out, box-shadow 0.15s ease-in-out, outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out, -webkit-box-shadow 0.15s ease-in-out}:host button:hover,:host a:hover{text-decoration:none}.content{margin-left:0.5rem;margin-right:0.5rem}:host(:not([icon-start])) .content{margin-left:unset}:host(:not([icon-end])) .content{margin-right:unset}:host([icon-start][dir=rtl]:not([icon-end])) .content{margin-left:unset;margin-right:0.5rem}:host([icon-end][dir=rtl]:not([icon-start])) .content{margin-right:unset;margin-left:0.5rem}:host([width=auto]){width:auto}:host([width=half]){width:50%}:host([width=full]){width:100%}:host([alignment=center]:not([width=auto])) a,:host([alignment=center]:not([width=auto])) button{-ms-flex-pack:center;justify-content:center}:host([alignment=start]:not([width=auto])) a,:host([alignment=start]:not([width=auto])) button{-ms-flex-pack:start;justify-content:flex-start}:host([alignment=end]:not([width=auto])) a,:host([alignment=end]:not([width=auto])) button{-ms-flex-pack:end;justify-content:flex-end}:host([alignment*=space-between]:not([width=auto])) a,:host([alignment*=space-between]:not([width=auto])) button{-ms-flex-pack:justify;justify-content:space-between}:host([alignment=icon-start-space-between]:not([width=auto])) .icon--start{margin-right:auto}:host([alignment=icon-end-space-between]:not([width=auto])) .icon--end{margin-left:auto}:host([dir=rtl][alignment=icon-start-space-between]:not([width=auto])) .icon--start{margin-right:unset;margin-left:auto}:host([dir=rtl][alignment=icon-end-space-between]:not([width=auto])) .icon--end{margin-left:unset;margin-right:auto}:host([alignment=center]:not([hastext=true])) .icon--start+.icon--end{margin-left:0.5rem}:host([dir=rtl][alignment=center]:not([hastext=true])) .icon--start+.icon--end{margin-left:unset;margin-right:0.5rem}.icon{display:-ms-inline-flexbox;display:inline-flex;position:relative;margin:0;line-height:inherit;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host([disabled]){pointer-events:none}:host([disabled]) button,:host([disabled]) a{pointer-events:none;opacity:var(--calcite-ui-opacity-disabled)}.calcite-button--loader{display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;right:0;bottom:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.calcite-button--loader calcite-loader{margin:0}:host([loading]) button,:host([loading]) a{color:transparent !important;pointer-events:none}:host([loading]) button .calcite-button--icon,:host([loading]) a .calcite-button--icon{opacity:0}:host([appearance=solid][color=blue]) button,:host([appearance=solid][color=blue]) a{color:var(--calcite-ui-foreground-1);background-color:var(--calcite-ui-blue-1);border:1px solid transparent}:host([appearance=solid][color=blue]) button:hover,:host([appearance=solid][color=blue]) button:focus,:host([appearance=solid][color=blue]) a:hover,:host([appearance=solid][color=blue]) a:focus{background-color:var(--calcite-ui-blue-2)}:host([appearance=solid][color=blue]) button:active,:host([appearance=solid][color=blue]) a:active{background-color:var(--calcite-ui-blue-1)}:host([appearance=solid][color=blue]) button .calcite-button--icon,:host([appearance=solid][color=blue]) a .calcite-button--icon{fill:var(--calcite-ui-foreground-1)}:host([appearance=solid][color=blue]) button calcite-loader,:host([appearance=solid][color=blue]) a calcite-loader{color:var(--calcite-ui-foreground-1)}:host([appearance=solid][color=red]) button,:host([appearance=solid][color=red]) a{color:var(--calcite-ui-foreground-1);background-color:var(--calcite-ui-red-1);border:1px solid transparent}:host([appearance=solid][color=red]) button:hover,:host([appearance=solid][color=red]) button:focus,:host([appearance=solid][color=red]) a:hover,:host([appearance=solid][color=red]) a:focus{background-color:var(--calcite-ui-red-2)}:host([appearance=solid][color=red]) button:active,:host([appearance=solid][color=red]) a:active{background-color:var(--calcite-ui-red-1)}:host([appearance=solid][color=red]) button .calcite-button--icon,:host([appearance=solid][color=red]) a .calcite-button--icon{fill:var(--calcite-ui-foreground-1)}:host([appearance=solid][color=red]) button calcite-loader,:host([appearance=solid][color=red]) a calcite-loader{color:var(--calcite-ui-foreground-1)}:host([appearance=solid][color=light]) button,:host([appearance=solid][color=light]) a{color:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-3);border:1px solid transparent}:host([appearance=solid][color=light]) button:hover,:host([appearance=solid][color=light]) button:focus,:host([appearance=solid][color=light]) a:hover,:host([appearance=solid][color=light]) a:focus{background-color:var(--calcite-ui-foreground-2)}:host([appearance=solid][color=light]) button:active,:host([appearance=solid][color=light]) a:active{background-color:var(--calcite-ui-foreground-3)}:host([appearance=solid][color=light]) button .calcite-button--icon,:host([appearance=solid][color=light]) a .calcite-button--icon{fill:var(--calcite-ui-text-1)}:host([appearance=solid][color=light]) button calcite-loader,:host([appearance=solid][color=light]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=solid][color=dark]) button,:host([appearance=solid][color=dark]) a{color:#ffffff;background-color:var(--calcite-button-dark);border:1px solid transparent}:host([appearance=solid][color=dark]) button:hover,:host([appearance=solid][color=dark]) button:focus,:host([appearance=solid][color=dark]) a:hover,:host([appearance=solid][color=dark]) a:focus{background-color:var(--calcite-button-dark-hover)}:host([appearance=solid][color=dark]) button:active,:host([appearance=solid][color=dark]) a:active{background-color:var(--calcite-button-dark)}:host([appearance=solid][color=dark]) button .calcite-button--icon,:host([appearance=solid][color=dark]) a .calcite-button--icon{fill:#ffffff}:host([appearance=solid][color=dark]) button calcite-loader,:host([appearance=solid][color=dark]) a calcite-loader{color:#ffffff}:host([appearance=outline][color=blue]) button,:host([appearance=outline][color=blue]) a{color:var(--calcite-ui-blue-3);background-color:var(--calcite-ui-foreground-1);border:1px solid var(--calcite-ui-blue-3);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=outline][color=blue]) button:hover,:host([appearance=outline][color=blue]) a:hover{border-color:var(--calcite-ui-blue-3);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-blue-3);box-shadow:inset 0 0 0 1px var(--calcite-ui-blue-3)}:host([appearance=outline][color=blue]) button:active,:host([appearance=outline][color=blue]) button:focus,:host([appearance=outline][color=blue]) a:active,:host([appearance=outline][color=blue]) a:focus{color:var(--calcite-ui-blue-3);border-color:var(--calcite-ui-blue-3);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-blue-3);box-shadow:inset 0 0 0 2px var(--calcite-ui-blue-3)}:host([appearance=outline][color=blue]) button:active .calcite-button--icon,:host([appearance=outline][color=blue]) button:focus .calcite-button--icon,:host([appearance=outline][color=blue]) a:active .calcite-button--icon,:host([appearance=outline][color=blue]) a:focus .calcite-button--icon{fill:var(--calcite-ui-blue-3)}:host([appearance=outline][color=blue]) button .calcite-button--icon,:host([appearance=outline][color=blue]) a .calcite-button--icon{fill:var(--calcite-ui-blue-3)}:host([appearance=outline][color=blue]) button calcite-loader,:host([appearance=outline][color=blue]) a calcite-loader{color:var(--calcite-ui-blue-3)}:host([appearance=outline][color=red]) button,:host([appearance=outline][color=red]) a{color:var(--calcite-ui-red-3);background-color:var(--calcite-ui-foreground-1);border:1px solid var(--calcite-ui-red-3);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=outline][color=red]) button:hover,:host([appearance=outline][color=red]) a:hover{border-color:var(--calcite-ui-red-3);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-red-3);box-shadow:inset 0 0 0 1px var(--calcite-ui-red-3)}:host([appearance=outline][color=red]) button:active,:host([appearance=outline][color=red]) button:focus,:host([appearance=outline][color=red]) a:active,:host([appearance=outline][color=red]) a:focus{color:var(--calcite-ui-red-3);border-color:var(--calcite-ui-red-3);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-red-3);box-shadow:inset 0 0 0 2px var(--calcite-ui-red-3)}:host([appearance=outline][color=red]) button:active .calcite-button--icon,:host([appearance=outline][color=red]) button:focus .calcite-button--icon,:host([appearance=outline][color=red]) a:active .calcite-button--icon,:host([appearance=outline][color=red]) a:focus .calcite-button--icon{fill:var(--calcite-ui-red-3)}:host([appearance=outline][color=red]) button .calcite-button--icon,:host([appearance=outline][color=red]) a .calcite-button--icon{fill:var(--calcite-ui-red-3)}:host([appearance=outline][color=red]) button calcite-loader,:host([appearance=outline][color=red]) a calcite-loader{color:var(--calcite-ui-red-3)}:host([appearance=outline][color=light]) button,:host([appearance=outline][color=light]) a{color:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-1);border:1px solid var(--calcite-ui-foreground-3);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=outline][color=light]) button:hover,:host([appearance=outline][color=light]) a:hover{border-color:var(--calcite-ui-foreground-3);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-foreground-3);box-shadow:inset 0 0 0 1px var(--calcite-ui-foreground-3)}:host([appearance=outline][color=light]) button:active,:host([appearance=outline][color=light]) button:focus,:host([appearance=outline][color=light]) a:active,:host([appearance=outline][color=light]) a:focus{color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-border-2);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-border-2);box-shadow:inset 0 0 0 2px var(--calcite-ui-border-2)}:host([appearance=outline][color=light]) button:active .calcite-button--icon,:host([appearance=outline][color=light]) button:focus .calcite-button--icon,:host([appearance=outline][color=light]) a:active .calcite-button--icon,:host([appearance=outline][color=light]) a:focus .calcite-button--icon{fill:var(--calcite-ui-text-1)}:host([appearance=outline][color=light]) button .calcite-button--icon,:host([appearance=outline][color=light]) a .calcite-button--icon{fill:var(--calcite-ui-text-1)}:host([appearance=outline][color=light]) button calcite-loader,:host([appearance=outline][color=light]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=outline][color=dark]) button,:host([appearance=outline][color=dark]) a{color:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-1);border:1px solid #404040;-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=outline][color=dark]) button:hover,:host([appearance=outline][color=dark]) a:hover{border-color:#404040;-webkit-box-shadow:inset 0 0 0 1px #404040;box-shadow:inset 0 0 0 1px #404040}:host([appearance=outline][color=dark]) button:active,:host([appearance=outline][color=dark]) button:focus,:host([appearance=outline][color=dark]) a:active,:host([appearance=outline][color=dark]) a:focus{color:var(--calcite-ui-text-1);border-color:#4a4a4a;-webkit-box-shadow:inset 0 0 0 2px #4a4a4a;box-shadow:inset 0 0 0 2px #4a4a4a}:host([appearance=outline][color=dark]) button:active .calcite-button--icon,:host([appearance=outline][color=dark]) button:focus .calcite-button--icon,:host([appearance=outline][color=dark]) a:active .calcite-button--icon,:host([appearance=outline][color=dark]) a:focus .calcite-button--icon{fill:var(--calcite-ui-text-1)}:host([appearance=outline][color=dark]) button .calcite-button--icon,:host([appearance=outline][color=dark]) a .calcite-button--icon{fill:var(--calcite-ui-text-1)}:host([appearance=outline][color=dark]) button calcite-loader,:host([appearance=outline][color=dark]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=clear][color=blue]) button,:host([appearance=clear][color=blue]) a{color:var(--calcite-ui-blue-3);background-color:transparent;border:1px solid var(--calcite-ui-blue-3);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=clear][color=blue]) button:hover,:host([appearance=clear][color=blue]) a:hover{border-color:var(--calcite-ui-blue-3);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-blue-3);box-shadow:inset 0 0 0 1px var(--calcite-ui-blue-3)}:host([appearance=clear][color=blue]) button:active,:host([appearance=clear][color=blue]) button:focus,:host([appearance=clear][color=blue]) a:active,:host([appearance=clear][color=blue]) a:focus{color:var(--calcite-ui-blue-3);border-color:var(--calcite-ui-blue-3);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-blue-3);box-shadow:inset 0 0 0 2px var(--calcite-ui-blue-3)}:host([appearance=clear][color=blue]) button:active .calcite-button--icon,:host([appearance=clear][color=blue]) button:focus .calcite-button--icon,:host([appearance=clear][color=blue]) a:active .calcite-button--icon,:host([appearance=clear][color=blue]) a:focus .calcite-button--icon{fill:var(--calcite-ui-blue-3)}:host([appearance=clear][color=blue]) button .calcite-button--icon,:host([appearance=clear][color=blue]) a .calcite-button--icon{fill:var(--calcite-ui-blue-3)}:host([appearance=clear][color=blue]) button calcite-loader,:host([appearance=clear][color=blue]) a calcite-loader{color:var(--calcite-ui-blue-3)}:host([appearance=clear][color=red]) button,:host([appearance=clear][color=red]) a{color:var(--calcite-ui-red-3);background-color:transparent;border:1px solid var(--calcite-ui-red-3);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=clear][color=red]) button:hover,:host([appearance=clear][color=red]) a:hover{border-color:var(--calcite-ui-red-3);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-red-3);box-shadow:inset 0 0 0 1px var(--calcite-ui-red-3)}:host([appearance=clear][color=red]) button:active,:host([appearance=clear][color=red]) button:focus,:host([appearance=clear][color=red]) a:active,:host([appearance=clear][color=red]) a:focus{color:var(--calcite-ui-red-3);border-color:var(--calcite-ui-red-3);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-red-3);box-shadow:inset 0 0 0 2px var(--calcite-ui-red-3)}:host([appearance=clear][color=red]) button:active .calcite-button--icon,:host([appearance=clear][color=red]) button:focus .calcite-button--icon,:host([appearance=clear][color=red]) a:active .calcite-button--icon,:host([appearance=clear][color=red]) a:focus .calcite-button--icon{fill:var(--calcite-ui-red-3)}:host([appearance=clear][color=red]) button .calcite-button--icon,:host([appearance=clear][color=red]) a .calcite-button--icon{fill:var(--calcite-ui-red-3)}:host([appearance=clear][color=red]) button calcite-loader,:host([appearance=clear][color=red]) a calcite-loader{color:var(--calcite-ui-red-3)}:host([appearance=clear][color=light]) button,:host([appearance=clear][color=light]) a{color:var(--calcite-ui-background);background-color:transparent;border:1px solid var(--calcite-ui-foreground-3);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=clear][color=light]) button:hover,:host([appearance=clear][color=light]) a:hover{border-color:var(--calcite-ui-foreground-3);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-foreground-3);box-shadow:inset 0 0 0 1px var(--calcite-ui-foreground-3)}:host([appearance=clear][color=light]) button:active,:host([appearance=clear][color=light]) button:focus,:host([appearance=clear][color=light]) a:active,:host([appearance=clear][color=light]) a:focus{color:var(--calcite-ui-foreground-1);border-color:var(--calcite-ui-border-2);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-border-2);box-shadow:inset 0 0 0 2px var(--calcite-ui-border-2)}:host([appearance=clear][color=light]) button:active .calcite-button--icon,:host([appearance=clear][color=light]) button:focus .calcite-button--icon,:host([appearance=clear][color=light]) a:active .calcite-button--icon,:host([appearance=clear][color=light]) a:focus .calcite-button--icon{fill:var(--calcite-ui-foreground-1)}:host([appearance=clear][color=light]) button .calcite-button--icon,:host([appearance=clear][color=light]) a .calcite-button--icon{fill:var(--calcite-ui-background)}:host([appearance=clear][color=light]) button calcite-loader,:host([appearance=clear][color=light]) a calcite-loader{color:var(--calcite-ui-background)}:host([appearance=clear][color=dark]) button,:host([appearance=clear][color=dark]) a{color:#151515;background-color:transparent;border:1px solid #404040;-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=clear][color=dark]) button:hover,:host([appearance=clear][color=dark]) a:hover{border-color:#404040;-webkit-box-shadow:inset 0 0 0 1px #404040;box-shadow:inset 0 0 0 1px #404040}:host([appearance=clear][color=dark]) button:active,:host([appearance=clear][color=dark]) button:focus,:host([appearance=clear][color=dark]) a:active,:host([appearance=clear][color=dark]) a:focus{color:#151515;border-color:#4a4a4a;-webkit-box-shadow:inset 0 0 0 2px #4a4a4a;box-shadow:inset 0 0 0 2px #4a4a4a}:host([appearance=clear][color=dark]) button:active .calcite-button--icon,:host([appearance=clear][color=dark]) button:focus .calcite-button--icon,:host([appearance=clear][color=dark]) a:active .calcite-button--icon,:host([appearance=clear][color=dark]) a:focus .calcite-button--icon{fill:#151515}:host([appearance=clear][color=dark]) button .calcite-button--icon,:host([appearance=clear][color=dark]) a .calcite-button--icon{fill:#151515}:host([appearance=clear][color=dark]) button calcite-loader,:host([appearance=clear][color=dark]) a calcite-loader{color:#151515}:host([dir=ltr][appearance=outline][split-child=primary]) button,:host([dir=rtl][appearance=outline][split-child=secondary]) button,:host([dir=ltr][appearance=clear][split-child=primary]) button,:host([dir=rtl][appearance=clear][split-child=secondary]) button{border-right:0}:host([dir=ltr][appearance=outline][split-child=secondary]) button,:host([dir=rtl][appearance=outline][split-child=primary]) button,:host([dir=ltr][appearance=clear][split-child=secondary]) button,:host([dir=rtl][appearance=clear][split-child=primary]) button{border-left:0}:host([appearance=transparent][color=blue]) button,:host([appearance=transparent][color=blue]) a{color:var(--calcite-ui-blue-3);background-color:transparent}:host([appearance=transparent][color=blue]) button:hover,:host([appearance=transparent][color=blue]) button:focus,:host([appearance=transparent][color=blue]) a:hover,:host([appearance=transparent][color=blue]) a:focus{background-color:var(--calcite-button-transparent-hover)}:host([appearance=transparent][color=blue]) button:active,:host([appearance=transparent][color=blue]) a:active{background-color:var(--calcite-button-transparent-press)}:host([appearance=transparent][color=blue]) button calcite-loader,:host([appearance=transparent][color=blue]) a calcite-loader{color:var(--calcite-ui-blue-3)}:host([appearance=transparent][color=red]) button,:host([appearance=transparent][color=red]) a{color:var(--calcite-ui-red-3);background-color:transparent}:host([appearance=transparent][color=red]) button:hover,:host([appearance=transparent][color=red]) button:focus,:host([appearance=transparent][color=red]) a:hover,:host([appearance=transparent][color=red]) a:focus{background-color:var(--calcite-button-transparent-hover)}:host([appearance=transparent][color=red]) button:active,:host([appearance=transparent][color=red]) a:active{background-color:var(--calcite-button-transparent-press)}:host([appearance=transparent][color=red]) button calcite-loader,:host([appearance=transparent][color=red]) a calcite-loader{color:var(--calcite-ui-red-3)}:host([appearance=transparent][color=light]) button,:host([appearance=transparent][color=light]) a{color:var(--calcite-ui-foreground-1);background-color:transparent}:host([appearance=transparent][color=light]) button:hover,:host([appearance=transparent][color=light]) button:focus,:host([appearance=transparent][color=light]) a:hover,:host([appearance=transparent][color=light]) a:focus{background-color:var(--calcite-button-transparent-hover)}:host([appearance=transparent][color=light]) button:active,:host([appearance=transparent][color=light]) a:active{background-color:var(--calcite-button-transparent-press)}:host([appearance=transparent][color=light]) button calcite-loader,:host([appearance=transparent][color=light]) a calcite-loader{color:var(--calcite-ui-foreground-1)}:host([appearance=transparent][color=dark]) button,:host([appearance=transparent][color=dark]) a{color:var(--calcite-ui-text-1);background-color:transparent}:host([appearance=transparent][color=dark]) button:hover,:host([appearance=transparent][color=dark]) button:focus,:host([appearance=transparent][color=dark]) a:hover,:host([appearance=transparent][color=dark]) a:focus{background-color:var(--calcite-button-transparent-hover)}:host([appearance=transparent][color=dark]) button:active,:host([appearance=transparent][color=dark]) a:active{background-color:var(--calcite-button-transparent-press)}:host([appearance=transparent][color=dark]) button calcite-loader,:host([appearance=transparent][color=dark]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([scale=s][hastext]:not([appearance=transparent])) button,:host([scale=s][hastext]:not([appearance=transparent])) a{padding:7px 12px;font-size:12px;line-height:1.33}:host([scale=s][hastext][appearance=transparent]) button,:host([scale=s][hastext][appearance=transparent]) a{padding:8px 12px;font-size:12px;line-height:1.33}:host([scale=m][hastext]:not([appearance=transparent])) button,:host([scale=m][hastext]:not([appearance=transparent])) a{padding:13px 20px;font-size:14px;line-height:1.15}:host([scale=m][hastext][appearance=transparent]) button,:host([scale=m][hastext][appearance=transparent]) a{padding:14px 20px;font-size:14px;line-height:1.15}:host([scale=l][hastext]:not([appearance=transparent])) button,:host([scale=l][hastext]:not([appearance=transparent])) a{padding:15px 24px;font-size:18px;line-height:1.2}:host([scale=l][hastext][appearance=transparent]) button,:host([scale=l][hastext][appearance=transparent]) a{padding:16px 24px;font-size:18px;line-height:1.2}:host([scale=s]:not([hastext])) button,:host([scale=s]:not([hastext])) a{height:32px;width:32px;font-size:12px}:host([scale=m]:not([hastext])) button,:host([scale=m]:not([hastext])) a{height:44px;width:44px;font-size:14px}:host([scale=l]:not([hastext])) button,:host([scale=l]:not([hastext])) a{height:56px;width:56px;font-size:18px}:host([scale=s][icon-start][icon-end]:not([hastext])) button,:host([scale=s][icon-start][icon-end]:not([hastext])) a{height:32px;width:48px;font-size:12px}:host([scale=m][icon-start][icon-end]:not([hastext])) button,:host([scale=m][icon-start][icon-end]:not([hastext])) a{height:44px;width:66px;font-size:14px}:host([scale=l][icon-start][icon-end]:not([hastext])) button,:host([scale=l][icon-start][icon-end]:not([hastext])) a{height:56px;width:84px;font-size:18px}";
var CalciteButton = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
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
        this.handleClick = function (e) {
            // this.type refers to type attribute, not child element type
            if (_this.childElType === "button" && _this.type !== "button") {
                var requestedForm = _this.el.getAttribute("form");
                var targetForm = requestedForm
                    ? document.getElementsByName("" + requestedForm)[0]
                    : _this.el.closest("form");
                if (targetForm) {
                    var targetFormSubmitFunction = targetForm.onsubmit;
                    switch (_this.type) {
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
    class_1.prototype.connectedCallback = function () {
        this.childElType = this.href ? "a" : "button";
        this.setupTextContentObserver();
    };
    class_1.prototype.disconnectedCallback = function () {
        this.observer.disconnect();
    };
    class_1.prototype.componentWillLoad = function () {
        {
            this.updateHasText();
            var elType = this.el.getAttribute("type");
            this.type = this.childElType === "button" && elType ? elType : "submit";
        }
    };
    class_1.prototype.render = function () {
        var _b, _c;
        var _this = this;
        var dir = getElementDir(this.el);
        var attributes = this.getAttributes();
        var Tag = this.childElType;
        var loader = (h("div", { class: CSS.buttonLoader }, h("calcite-loader", { active: true, inline: true, label: this.intlLoading })));
        var iconScale = this.scale === "l" ? "m" : "s";
        var iconStartEl = (h("calcite-icon", { class: (_b = {}, _b[CSS.icon] = true, _b[CSS.iconStart] = true, _b), dir: dir, flipRtl: this.iconFlipRtl === "start" || this.iconFlipRtl === "both", icon: this.iconStart, scale: iconScale }));
        var iconEndEl = (h("calcite-icon", { class: (_c = {}, _c[CSS.icon] = true, _c[CSS.iconEnd] = true, _c), dir: dir, flipRtl: this.iconFlipRtl === "end" || this.iconFlipRtl === "both", icon: this.iconEnd, scale: iconScale }));
        var contentEl = (h("span", { class: CSS.content }, h("slot", null)));
        return (h(Host, { dir: dir, hasText: this.hasText }, h(Tag, Object.assign({}, attributes, { disabled: this.disabled, onClick: this.handleClick, ref: function (el) { return (_this.childEl = el); }, tabIndex: this.disabled ? -1 : null }), this.loading ? loader : null, this.iconStart ? iconStartEl : null, this.hasText ? contentEl : null, this.iconEnd ? iconEndEl : null)));
    };
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    class_1.prototype.setFocus = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                this.childEl.focus();
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.updateHasText = function () {
        this.hasText = this.el.textContent.trim().length > 0;
    };
    class_1.prototype.setupTextContentObserver = function () {
        var _this = this;
        {
            this.observer = new MutationObserver(function () {
                _this.updateHasText();
            });
            this.observer.observe(this.el, { childList: true, subtree: true });
        }
    };
    class_1.prototype.getAttributes = function () {
        // spread attributes from the component to rendered child, filtering out props
        var props = [
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
            .filter(function (a) { return a && !props.includes(a.name); })
            .reduce(function (acc, _b) {
            var _c;
            var name = _b.name, value = _b.value;
            return (Object.assign(Object.assign({}, acc), (_c = {}, _c[name] = value, _c)));
        }, {});
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
CalciteButton.style = calciteButtonCss;
var CSS$1 = {
    container: "container",
    header: "header",
    footer: "footer",
    title: "title",
    subtitle: "subtitle",
    thumbnailWrapper: "thumbnail-wrapper",
    checkboxWrapper: "checkbox-wrapper"
};
var SLOTS = {
    thumbnail: "thumbnail",
    title: "title",
    subtitle: "subtitle",
    footerLeading: "footer-leading",
    footerTrailing: "footer-trailing"
};
var TEXT$1 = {
    select: "Select",
    deselect: "Deselect",
    loading: "Loading"
};
var calciteCardCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host{max-width:100%}:host .calcite-card-container{display:-ms-flexbox;display:flex;height:100%;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;background-color:var(--calcite-ui-foreground-1);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;position:relative;border:1px solid var(--calcite-ui-border-2);color:var(--calcite-ui-text-3);-webkit-box-shadow:none;box-shadow:none}:host .calcite-card-container:hover{-webkit-box-shadow:0 4px 16px 0 rgba(0, 0, 0, 0.08), 0 2px 8px 0 rgba(0, 0, 0, 0.04);box-shadow:0 4px 16px 0 rgba(0, 0, 0, 0.08), 0 2px 8px 0 rgba(0, 0, 0, 0.04);z-index:1}:host .calcite-card-container:active{-webkit-box-shadow:0 1px 6px -1px rgba(0, 0, 0, 0.16), 0 1px 2px -1px rgba(0, 0, 0, 0.08);box-shadow:0 1px 6px -1px rgba(0, 0, 0, 0.16), 0 1px 2px -1px rgba(0, 0, 0, 0.08);-webkit-transition-duration:75ms;transition-duration:75ms;z-index:1}.container{-ms-flex:1 1 auto;flex:1 1 auto;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host([loading]) .calcite-card-container *:not(calcite-loader):not(.calcite-card-loader-container){opacity:0;pointer-events:none}:host([loading]) .calcite-card-loader-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:absolute;left:0;right:0;top:0;bottom:0}:host .header,:host .footer{padding:0.75rem;display:-ms-flexbox;display:flex}:host .header{-ms-flex-direction:column;flex-direction:column}:host .footer{padding:0.75rem;-ms-flex-direction:row;flex-direction:row;-ms-flex-line-pack:justify;align-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-top:auto}:host .card-content{padding:0 0.75rem;color:var(--calcite-ui-text-3);font-size:0.875rem;line-height:1.5}:host([selectable]) .calcite-card-container:active{-webkit-box-shadow:0 1px 6px -1px rgba(0, 0, 0, 0.16), 0 1px 2px -1px rgba(0, 0, 0, 0.08);box-shadow:0 1px 6px -1px rgba(0, 0, 0, 0.16), 0 1px 2px -1px rgba(0, 0, 0, 0.08)}:host([selected]) .calcite-card-container{border-color:var(--calcite-ui-blue-1)}slot[name=title]::slotted(*),*::slotted([slot=title]){font-weight:500;color:var(--calcite-ui-text-1);margin:0;font-size:0.9375rem;line-height:1.5}slot[name=subtitle]::slotted(*),*::slotted([slot=subtitle]){font-weight:400;color:var(--calcite-ui-text-2);margin:0;margin-top:0.375rem;font-size:0.875rem;line-height:1.5}slot[name=thumbnail]::slotted(img),img::slotted([slot=thumbnail]){max-width:100%;min-width:100%}slot[name=footer-leading]::slotted(*),*::slotted([slot=footer-leading]){-webkit-margin-end:auto;margin-inline-end:auto;-ms-flex-item-align:center;align-self:center;font-size:0.875rem;line-height:1.5}slot[name=footer-trailing]::slotted(*),*::slotted([slot=footer-trailing]){-ms-flex-item-align:center;align-self:center;font-size:0.875rem;line-height:1.5}:host .thumbnail-wrapper{font-size:0}:host .checkbox-wrapper{position:absolute;top:0.375rem;right:0.375rem;margin:0;padding:0}:host([dir=rtl]) .checkbox-wrapper{left:0.375rem;right:auto}";
var CalciteCard = /** @class */ (function () {
    function CalciteCard(hostRef) {
        var _this = this;
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
        this.cardSelectClick = function () {
            _this.selectCard();
        };
        this.cardSelectKeyDown = function (e) {
            switch (getKey(e.key)) {
                case " ":
                case "Enter":
                    _this.selectCard();
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
    CalciteCard.prototype.render = function () {
        var _b;
        var dir = getElementDir(this.el);
        return (h(Host, { dir: dir }, h("div", { class: "calcite-card-container" }, this.loading ? (h("div", { class: "calcite-card-loader-container" }, h("calcite-loader", { active: true, label: this.intlLoading }))) : null, h("section", { "aria-busy": this.loading.toString(), class: (_b = {}, _b[CSS$1.container] = true, _b) }, this.selectable ? this.renderCheckbox() : null, this.renderThumbnail(), this.renderHeader(), h("div", { class: "card-content" }, h("slot", null)), this.renderFooter()))));
    };
    CalciteCard.prototype.selectCard = function () {
        this.selected = !this.selected;
        this.calciteCardSelect.emit();
    };
    CalciteCard.prototype.renderThumbnail = function () {
        var hasThumbnail = this.el.querySelector("[slot=" + SLOTS.thumbnail + "]");
        return hasThumbnail ? (h("div", { class: CSS$1.thumbnailWrapper }, h("slot", { name: SLOTS.thumbnail }))) : null;
    };
    CalciteCard.prototype.renderCheckbox = function () {
        var checkboxLabel = this.selected ? this.intlDeselect : this.intlSelect;
        return (h("label", { "aria-label": checkboxLabel, class: CSS$1.checkboxWrapper, onClick: this.cardSelectClick, onKeyDown: this.cardSelectKeyDown, title: checkboxLabel }, h("calcite-checkbox", { checked: this.selected, theme: this.theme })));
    };
    CalciteCard.prototype.renderHeader = function () {
        var title = this.el.querySelector("[slot=" + SLOTS.title + "]");
        var subtitle = this.el.querySelector("[slot=" + SLOTS.subtitle + "]");
        var hasHeader = title || subtitle;
        return hasHeader ? (h("header", { class: CSS$1.header }, h("slot", { name: SLOTS.title }), h("slot", { name: SLOTS.subtitle }))) : null;
    };
    CalciteCard.prototype.renderFooter = function () {
        var leadingFooter = this.el.querySelector("[slot=" + SLOTS.footerLeading + "]");
        var trailingFooter = this.el.querySelector("[slot=" + SLOTS.footerTrailing + "]");
        var hasFooter = leadingFooter || trailingFooter;
        return hasFooter ? (h("footer", { class: CSS$1.footer }, h("slot", { name: SLOTS.footerLeading }), h("slot", { name: SLOTS.footerTrailing }))) : null;
    };
    Object.defineProperty(CalciteCard.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return CalciteCard;
}());
CalciteCard.style = calciteCardCss;
var calciteCheckboxCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=light]){--calcite-ui-border-4:$blk-100}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host([scale=s]){--calcite-checkbox-size:var(--calcite-font-size--2);--calcite-checkbox-grid-gap:0.5rem}:host([scale=m]){--calcite-checkbox-size:var(--calcite-font-size--1);--calcite-checkbox-grid-gap:0.5rem}:host([scale=l]){--calcite-checkbox-size:var(--calcite-font-size-1);--calcite-checkbox-grid-gap:0.75rem}:host{display:-ms-inline-flexbox;display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}:host .check-svg{width:var(--calcite-checkbox-size);height:var(--calcite-checkbox-size);overflow:hidden;display:inline-block;background-color:var(--calcite-ui-foreground-1);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-border-4);box-shadow:inset 0 0 0 1px var(--calcite-ui-border-4);fill:var(--calcite-ui-background);pointer-events:none;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out}:host .hasLabel{display:grid;grid-gap:var(--calcite-checkbox-grid-gap);-ms-flex-align:center;align-items:center;--calcite-label-margin-bottom:0}:host(:hover) .check-svg,:host([hovered]) .check-svg{-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-blue-1);box-shadow:inset 0 0 0 2px var(--calcite-ui-blue-1)}:host([checked]) .check-svg,:host([indeterminate]) .check-svg{background-color:var(--calcite-ui-blue-1);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-blue-1);box-shadow:inset 0 0 0 1px var(--calcite-ui-blue-1)}:host(:focus) .check-svg,:host([focused]) .check-svg{-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-blue-1), 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-blue-1);box-shadow:inset 0 0 0 1px var(--calcite-ui-blue-1), 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-blue-1);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host([disabled]){cursor:default;opacity:var(--calcite-ui-opacity-disabled);pointer-events:none}:host([scale=s]) .hasLabel{grid-template-columns:12px 1fr 4px;grid-template-rows:16px 1fr}:host([scale=m]) .hasLabel{grid-template-columns:16px 1fr 4px;grid-template-rows:20px 1fr}:host([scale=l]) .hasLabel{grid-template-columns:20px 1fr 4px;grid-template-rows:24px 1fr}";
var CalciteCheckbox = /** @class */ (function () {
    function CalciteCheckbox(hostRef) {
        var _this = this;
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
        this.getPath = function () { return _this.indeterminate ? _this.indeterminatePath : _this.checked ? _this.checkedPath : ""; };
        this.toggle = function () {
            if (!_this.disabled) {
                _this.checked = !_this.checked;
                _this.focused = true;
                _this.indeterminate = false;
                _this.calciteCheckboxChange.emit();
            }
        };
        this.formResetHandler = function () {
            _this.checked = _this.initialChecked;
        };
        this.nativeLabelClickHandler = function (_b) {
            var target = _b.target;
            if (!_this.el.closest("calcite-label") &&
                target.nodeName === "LABEL" &&
                target.parentNode.nodeName !== "CALCITE-LABEL" &&
                _this.el.id &&
                target.htmlFor === _this.el.id) {
                _this.toggle();
            }
        };
        this.calciteCheckboxChange = createEvent(this, "calciteCheckboxChange", 7);
        this.calciteCheckboxFocusedChange = createEvent(this, "calciteCheckboxFocusedChange", 7);
    }
    CalciteCheckbox.prototype.checkedWatcher = function (newChecked) {
        this.input.checked = newChecked;
    };
    CalciteCheckbox.prototype.disabledChanged = function (disabled) {
        this.input.disabled = disabled;
    };
    CalciteCheckbox.prototype.focusedChanged = function (focused) {
        if (focused && !this.el.hasAttribute("hidden")) {
            this.input.focus();
        }
        else {
            this.input.blur();
        }
    };
    CalciteCheckbox.prototype.nameChanged = function (newName) {
        this.input.name = newName;
    };
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    CalciteCheckbox.prototype.onClick = function (event) {
        // This line prevents double-triggering when wrapped inside either a <label> or a <calcite-label>
        // by preventing the browser default behavior, which is to click the label's first input child element
        if (event.target === this.el) {
            event.preventDefault();
        }
        this.toggle();
    };
    CalciteCheckbox.prototype.mouseenter = function () {
        this.hovered = true;
    };
    CalciteCheckbox.prototype.mouseleave = function () {
        this.hovered = false;
    };
    CalciteCheckbox.prototype.onInputBlur = function () {
        this.focused = false;
        this.calciteCheckboxFocusedChange.emit();
    };
    CalciteCheckbox.prototype.onInputFocus = function () {
        this.focused = true;
        this.calciteCheckboxFocusedChange.emit();
    };
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    CalciteCheckbox.prototype.connectedCallback = function () {
        this.guid = this.el.id || "calcite-checkbox-" + guid();
        this.initialChecked = this.checked;
        this.renderHiddenCheckboxInput();
        var form = this.el.closest("form");
        if (form) {
            form.addEventListener("reset", this.formResetHandler);
        }
        document.addEventListener("click", this.nativeLabelClickHandler);
    };
    CalciteCheckbox.prototype.disconnectedCallback = function () {
        this.input.parentNode.removeChild(this.input);
        var form = this.el.closest("form");
        if (form) {
            form.removeEventListener("reset", this.formResetHandler);
        }
        document.removeEventListener("click", this.nativeLabelClickHandler);
    };
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    CalciteCheckbox.prototype.renderHiddenCheckboxInput = function () {
        this.input = document.createElement("input");
        this.checked && this.input.setAttribute("checked", "");
        this.input.disabled = this.disabled;
        this.input.id = this.guid + "-input";
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
    };
    CalciteCheckbox.prototype.render = function () {
        if (this.el.textContent) {
            return (h(Host, { "aria-checked": this.checked.toString(), role: "checkbox" }, h("div", { class: "hasLabel" }, h("svg", { class: "check-svg", viewBox: "0 0 16 16" }, h("path", { d: this.getPath() })), h("calcite-label", { dir: getElementDir(this.el), "disable-spacing": true, scale: this.scale }, h("slot", null)))));
        }
        return (h(Host, { "aria-checked": this.checked.toString(), role: "checkbox" }, h("svg", { class: "check-svg", viewBox: "0 0 16 16" }, h("path", { d: this.getPath() })), h("slot", null)));
    };
    Object.defineProperty(CalciteCheckbox.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalciteCheckbox, "watchers", {
        get: function () {
            return {
                "checked": ["checkedWatcher"],
                "disabled": ["disabledChanged"],
                "focused": ["focusedChanged"],
                "name": ["nameChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return CalciteCheckbox;
}());
CalciteCheckbox.style = calciteCheckboxCss;
var CSS$2 = {
    icon: "icon",
    flipRtl: "flip-rtl"
};
/**
 * Icon data cache.
 * Exported for testing purposes.
 * @private
 */
var iconCache = {};
/**
 * Icon request cache.
 * Exported for testing purposes.
 * @private
 */
var requestCache = {};
var scaleToPx = {
    s: 16,
    m: 24,
    l: 32
};
function fetchIcon(_b) {
    var icon = _b.icon, scale = _b.scale;
    return __awaiter(this, void 0, void 0, function () {
        var size, name, filled, iconName, id, path;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    size = scaleToPx[scale];
                    name = normalizeIconName(icon);
                    filled = name.charAt(name.length - 1) === "F";
                    iconName = filled ? name.substring(0, name.length - 1) : name;
                    id = "" + iconName + size + (filled ? "F" : "");
                    if (iconCache[id]) {
                        return [2 /*return*/, iconCache[id]];
                    }
                    if (!requestCache[id]) {
                        requestCache[id] = fetch(getAssetPath("./assets/calcite-icon/" + id + ".json"))
                            .then(function (resp) { return resp.json(); })
                            .catch(function () {
                            console.error("\"" + id + "\" is not a valid calcite-ui-icon name");
                            return "";
                        });
                    }
                    return [4 /*yield*/, requestCache[id]];
                case 1:
                    path = _c.sent();
                    iconCache[id] = path;
                    return [2 /*return*/, path];
            }
        });
    });
}
/**
 * Normalize the icon name to match the path data module exports.
 * Exported for testing purposes.
 * @private
 */
function normalizeIconName(name) {
    var numberLeadingName = !isNaN(Number(name.charAt(0)));
    var parts = name.split("-");
    if (parts.length === 1) {
        return numberLeadingName ? "i" + name : name;
    }
    return parts
        .map(function (part, index) {
        if (index === 0) {
            return numberLeadingName ? "i" + part.toUpperCase() : part;
        }
        return part.charAt(0).toUpperCase() + part.slice(1);
    })
        .join("");
}
var calciteIconCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-inline-flexbox;display:inline-flex}:host([scale=s]){width:1rem;height:1rem;min-width:1rem;min-height:1rem}:host([scale=m]){width:1.5rem;height:1.5rem;min-width:1.5rem;min-height:1.5rem}:host([scale=l]){width:2rem;height:2rem;min-width:2rem;min-height:2rem}.flip-rtl{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.svg{display:block}";
var CalciteIcon = /** @class */ (function () {
    function class_2(hostRef) {
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
    class_2.prototype.connectedCallback = function () {
        var _this = this;
        this.waitUntilVisible(function () {
            _this.visible = true;
            _this.loadIconPathData();
        });
    };
    class_2.prototype.disconnectedCallback = function () {
        if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            this.intersectionObserver = null;
        }
    };
    class_2.prototype.componentWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                this.loadIconPathData();
                return [2 /*return*/];
            });
        });
    };
    class_2.prototype.render = function () {
        var _b;
        var _c = this, el = _c.el, flipRtl = _c.flipRtl, pathData = _c.pathData, scale = _c.scale, textLabel = _c.textLabel;
        var dir = getElementDir(el);
        var size = scaleToPx[scale];
        var semantic = !!textLabel;
        var paths = [].concat(pathData || "");
        return (h(Host, { "aria-hidden": (!semantic).toString(), "aria-label": semantic ? textLabel : null, role: semantic ? "img" : null }, h("svg", { class: (_b = {},
                _b[CSS$2.flipRtl] = dir === "rtl" && flipRtl,
                _b.svg = true,
                _b), fill: "currentColor", height: "100%", viewBox: "0 0 " + size + " " + size, width: "100%", xmlns: "http://www.w3.org/2000/svg" }, paths.map(function (path) { return typeof path === "string" ? (h("path", { d: path })) : (h("path", { d: path.d, opacity: "opacity" in path ? path.opacity : 1 })); }))));
    };
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    class_2.prototype.loadIconPathData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _b, icon, scale, visible, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = this, icon = _b.icon, scale = _b.scale, visible = _b.visible;
                        if (!icon || !visible) {
                            return [2 /*return*/];
                        }
                        _c = this;
                        return [4 /*yield*/, fetchIcon({ icon: icon, scale: scale })];
                    case 1:
                        _c.pathData = _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_2.prototype.waitUntilVisible = function (callback) {
        var _this = this;
        if (typeof window === "undefined" ||
            !window.IntersectionObserver) {
            callback();
            return;
        }
        this.intersectionObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    _this.intersectionObserver.disconnect();
                    _this.intersectionObserver = null;
                    callback();
                }
            });
        }, { rootMargin: "50px" });
        this.intersectionObserver.observe(this.el);
    };
    Object.defineProperty(class_2, "assetsDirs", {
        get: function () { return ["assets"]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_2.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_2, "watchers", {
        get: function () {
            return {
                "icon": ["loadIconPathData"],
                "scale": ["loadIconPathData"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return class_2;
}());
CalciteIcon.style = calciteIconCss;
var calciteLabelCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}.sc-calcite-label:root{--calcite-popper-transition:150ms ease-in-out}[hidden].sc-calcite-label-h{display:none}[theme=dark].sc-calcite-label-h,[theme=dark] .sc-calcite-label-h{--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}[alignment=start].sc-calcite-label-h,[alignment=end][dir=rtl].sc-calcite-label-h{text-align:left}[alignment=end].sc-calcite-label-h,[alignment=start][dir=rtl].sc-calcite-label-h{text-align:right}[alignment=center].sc-calcite-label-h{text-align:center}[scale=s].sc-calcite-label-h{--calcite-label-margin-bottom:12px}[scale=s].sc-calcite-label-h label.sc-calcite-label{font-size:var(--calcite-font-size--2)}[scale=m].sc-calcite-label-h{--calcite-label-margin-bottom:14px}[scale=m].sc-calcite-label-h label.sc-calcite-label{font-size:var(--calcite-font-size--1)}[scale=l].sc-calcite-label-h{--calcite-label-margin-bottom:18px}[scale=l].sc-calcite-label-h label.sc-calcite-label{font-size:var(--calcite-font-size-1)}.sc-calcite-label-h label.sc-calcite-label{cursor:pointer;width:100%;margin:0 0 var(--calcite-label-margin-bottom, 1.5rem) 0;line-height:1.3}[layout=default].sc-calcite-label-h label.sc-calcite-label{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:4px}[layout=inline].sc-calcite-label-h label.sc-calcite-label,[layout=inline-space-between].sc-calcite-label-h label.sc-calcite-label{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;gap:0.75rem}[layout=inline-space-between].sc-calcite-label-h label.sc-calcite-label{-ms-flex-pack:justify;justify-content:space-between}[disabled].sc-calcite-label-h>label.sc-calcite-label{pointer-events:none;opacity:var(--calcite-ui-opacity-disabled)}.sc-calcite-label-h[disabled] .sc-calcite-label-s>*{pointer-events:none}.sc-calcite-label-h[disabled] .sc-calcite-label-s>*[disabled],.sc-calcite-label-h[disabled] .sc-calcite-label-s>*[disabled] *{opacity:1}.sc-calcite-label-h[disabled] .sc-calcite-label-s>calcite-input-message:not([active]){opacity:0}[status=invalid].sc-calcite-label-h label.sc-calcite-label{color:var(--calcite-ui-red-1)}[status=valid].sc-calcite-label-h label.sc-calcite-label{color:var(--calcite-ui-text-2)}[status=idle].sc-calcite-label-h label.sc-calcite-label{color:var(--calcite-ui-text-2)}[disable-spacing].sc-calcite-label-h label.sc-calcite-label{gap:0;margin:0}";
var CalciteLabel = /** @class */ (function () {
    function CalciteLabel(hostRef) {
        var _this = this;
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
        this.handleCalciteHtmlForClicks = function (target) {
            // 1. has htmlFor
            if (!_this.for)
                return;
            // 2. htmlFor matches a calcite component
            var inputForThisLabel = document.getElementById(_this.for);
            if (!inputForThisLabel)
                return;
            if (!inputForThisLabel.localName.startsWith("calcite"))
                return;
            // 5. target is NOT the calcite component that this label matches
            if (target === inputForThisLabel)
                return;
            // 3. target is not a labelable native form element
            var labelableNativeElements = [
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
            var labelableCalciteElements = [
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
            for (var i = 0; i < labelableCalciteElements.length; i++) {
                if (target.closest(labelableCalciteElements[i])) {
                    return;
                }
            }
            inputForThisLabel.click();
        };
        this.calciteLabelFocus = createEvent(this, "calciteLabelFocus", 7);
    }
    CalciteLabel.prototype.disabledWatcher = function () {
        if (this.disabled)
            this.setDisabledControls();
    };
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    CalciteLabel.prototype.onClick = function (event) {
        var target = event.target;
        this.calciteLabelFocus.emit({
            labelEl: this.el,
            interactedEl: target,
            requestedInput: this.for
        });
        this.handleCalciteHtmlForClicks(target);
    };
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    CalciteLabel.prototype.getAttributes = function () {
        // spread attributes from the component to rendered child, filtering out props
        var props = ["disabled", "id", "layout", "scale", "status", "theme"];
        return Array.from(this.el.attributes)
            .filter(function (a) { return a && !props.includes(a.name); })
            .reduce(function (acc, _b) {
            var _c;
            var name = _b.name, value = _b.value;
            return (Object.assign(Object.assign({}, acc), (_c = {}, _c[name] = value, _c)));
        }, {});
    };
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    CalciteLabel.prototype.connectedCallback = function () {
        var status = ["invalid", "valid", "idle"];
        if (!status.includes(this.status))
            this.status = "idle";
        var layout = ["inline", "inline-space-between", "default"];
        if (!layout.includes(this.layout))
            this.layout = "default";
        var scale = ["s", "m", "l"];
        if (!scale.includes(this.scale))
            this.scale = "m";
    };
    CalciteLabel.prototype.componentDidLoad = function () {
        if (this.disabled)
            this.setDisabledControls();
    };
    CalciteLabel.prototype.render = function () {
        var _this = this;
        var attributes = this.getAttributes();
        var dir = getElementDir(this.el);
        return (h(Host, { dir: dir }, h("label", Object.assign({}, attributes, { ref: function (el) { return (_this.labelEl = el); } }), h("slot", null))));
    };
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    CalciteLabel.prototype.setDisabledControls = function () {
        var _a;
        (_a = this.labelEl) === null || _a === void 0 ? void 0 : _a.childNodes.forEach(function (item) {
            if (item.nodeName.includes("CALCITE")) {
                item.setAttribute("disabled", "");
            }
        });
    };
    Object.defineProperty(CalciteLabel.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalciteLabel, "watchers", {
        get: function () {
            return {
                "disabled": ["disabledWatcher"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return CalciteLabel;
}());
CalciteLabel.style = calciteLabelCss;
var calciteLoaderCss = "@charset \"UTF-8\";@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:relative;display:none;padding-bottom:4rem;padding-top:4rem;margin-left:auto;margin-right:auto;min-height:var(--loader-size);stroke:var(--calcite-ui-blue-1);stroke-width:3;fill:none;opacity:1;-webkit-transform:scale(1, 1);transform:scale(1, 1);animation:loader-color-shift 6s alternate-reverse infinite linear}:host([scale=s]){--loader-size:33px;--loader-size-inline:13px;font-size:0.8125rem;line-height:1.5}:host([scale=s]) .loader__percentage{font-size:0.625rem}:host([scale=m]){--loader-size:57px;--loader-size-inline:17px;font-size:0.875rem;line-height:1.5}:host([scale=m]) .loader__percentage{font-size:0.875rem}:host([scale=l]){--loader-size:81px;--loader-size-inline:21px;font-size:0.9375rem;line-height:1.5}:host([scale=l]) .loader__percentage{font-size:1.25rem}:host([no-padding]){padding-top:0;padding-bottom:0}:host([active]){display:-ms-flexbox;display:flex}.loader__text{display:block;margin-top:calc(var(--loader-size) + 3rem);text-align:center}.loader__percentage{display:block;width:var(--loader-size);position:absolute;top:4rem;left:50%;margin-left:calc(var(--loader-size) / 2 * -1);margin-top:calc(var(--loader-size) / 2);text-align:center;color:var(--calcite-ui-text-1);line-height:0.25;-webkit-transform:scale(1, 1);transform:scale(1, 1)}.loader__svgs{width:var(--loader-size);height:var(--loader-size);position:absolute;top:4rem;left:50%;margin-left:calc(var(--loader-size) / 2 * -1);overflow:visible;opacity:1;-webkit-transform:scale(1, 1);transform:scale(1, 1)}.loader__svg{width:var(--loader-size);height:var(--loader-size);position:absolute;top:0;left:0;overflow:visible;-webkit-transform-origin:center;transform-origin:center;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-name:loader-clockwise;animation-name:loader-clockwise}@supports (display: grid){.loader__svg--1{-webkit-animation-name:loader-offset-1;animation-name:loader-offset-1}.loader__svg--2{-webkit-animation-name:loader-offset-2;animation-name:loader-offset-2}.loader__svg--3{-webkit-animation-name:loader-offset-3;animation-name:loader-offset-3}}:host([type=determinate]){stroke:var(--calcite-ui-border-3);-webkit-animation:none;animation:none}:host([type=determinate]) .loader__svg--3{stroke:var(--calcite-ui-blue-1);stroke-dasharray:157.0795;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-animation:none;animation:none;-webkit-transition:all 100ms linear;transition:all 100ms linear}:host([inline]){stroke:currentColor;stroke-width:2;-webkit-animation:none;animation:none;margin:0;padding-bottom:0;padding-top:0;position:relative;height:var(--loader-size-inline);min-height:var(--loader-size-inline);width:var(--loader-size-inline);margin-right:var(--loader-size-inline)/2;vertical-align:-var(--loader-size-inline)/5}:host([inline][dir=rtl]){margin-left:var(--loader-size-inline)/2;margin-right:0}:host([active][inline]){display:inline-block}:host([inline]) .loader__svgs{top:0;left:0;margin:0;width:var(--loader-size-inline);height:var(--loader-size-inline)}:host([inline]) .loader__svg{width:var(--loader-size-inline);height:var(--loader-size-inline)}:host([complete]){opacity:0;-webkit-transform:scale(0.75, 0.75);transform:scale(0.75, 0.75);-webkit-transform-origin:center;transform-origin:center;-webkit-transition:opacity 200ms linear 1000ms, -webkit-transform 200ms linear 1000ms;transition:opacity 200ms linear 1000ms, -webkit-transform 200ms linear 1000ms;transition:opacity 200ms linear 1000ms, transform 200ms linear 1000ms;transition:opacity 200ms linear 1000ms, transform 200ms linear 1000ms, -webkit-transform 200ms linear 1000ms}:host([complete]) .loader__svgs{opacity:0;-webkit-transform:scale(0.75, 0.75);transform:scale(0.75, 0.75);-webkit-transform-origin:center;transform-origin:center;-webkit-transition:opacity 180ms linear 800ms, -webkit-transform 180ms linear 800ms;transition:opacity 180ms linear 800ms, -webkit-transform 180ms linear 800ms;transition:opacity 180ms linear 800ms, transform 180ms linear 800ms;transition:opacity 180ms linear 800ms, transform 180ms linear 800ms, -webkit-transform 180ms linear 800ms}:host([complete]) .loader__percentage{color:var(--calcite-ui-blue-1);-webkit-transform:scale(1.05, 1.05);transform:scale(1.05, 1.05);-webkit-transform-origin:center;transform-origin:center;-webkit-transition:color 200ms linear, -webkit-transform 200ms linear;transition:color 200ms linear, -webkit-transform 200ms linear;transition:color 200ms linear, transform 200ms linear;transition:color 200ms linear, transform 200ms linear, -webkit-transform 200ms linear}.loader__svg--1{stroke-dasharray:28.0499107143% 140.2495535714%;-webkit-animation-duration:0.72s;animation-duration:0.72s}@-webkit-keyframes loader-offset-1{0%{stroke-dasharray:28.0499107143% 252.4491964286%;stroke-dashoffset:0}50%{stroke-dasharray:140.2495535714% 140.2495535714%;stroke-dashoffset:-84.1497321429%}100%{stroke-dasharray:28.0499107143% 252.4491964286%;stroke-dashoffset:-280.4991071429%}}@keyframes loader-offset-1{0%{stroke-dasharray:28.0499107143% 252.4491964286%;stroke-dashoffset:0}50%{stroke-dasharray:140.2495535714% 140.2495535714%;stroke-dashoffset:-84.1497321429%}100%{stroke-dasharray:28.0499107143% 252.4491964286%;stroke-dashoffset:-280.4991071429%}}.loader__svg--2{stroke-dasharray:56.0998214286% 140.2495535714%;-webkit-animation-duration:0.96s;animation-duration:0.96s}@-webkit-keyframes loader-offset-2{0%{stroke-dasharray:56.0998214286% 224.3992857143%;stroke-dashoffset:0}50%{stroke-dasharray:140.2495535714% 140.2495535714%;stroke-dashoffset:-98.1746875%}100%{stroke-dasharray:56.0998214286% 224.3992857143%;stroke-dashoffset:-280.4991071429%}}@keyframes loader-offset-2{0%{stroke-dasharray:56.0998214286% 224.3992857143%;stroke-dashoffset:0}50%{stroke-dasharray:140.2495535714% 140.2495535714%;stroke-dashoffset:-98.1746875%}100%{stroke-dasharray:56.0998214286% 224.3992857143%;stroke-dashoffset:-280.4991071429%}}.loader__svg--3{stroke-dasharray:14.0249553571% 140.2495535714%;-webkit-animation-duration:1.16s;animation-duration:1.16s}@-webkit-keyframes loader-offset-3{0%{stroke-dasharray:14.0249553571% 266.4741517857%;stroke-dashoffset:0}50%{stroke-dasharray:140.2495535714% 140.2495535714%;stroke-dashoffset:-77.1372544643%}100%{stroke-dasharray:14.0249553571% 266.4741517857%;stroke-dashoffset:-280.4991071429%}}@keyframes loader-offset-3{0%{stroke-dasharray:14.0249553571% 266.4741517857%;stroke-dashoffset:0}50%{stroke-dasharray:140.2495535714% 140.2495535714%;stroke-dashoffset:-77.1372544643%}100%{stroke-dasharray:14.0249553571% 266.4741517857%;stroke-dashoffset:-280.4991071429%}}@-webkit-keyframes loader-color-shift{0%{stroke:var(--calcite-ui-blue-1)}33%{stroke:var(--calcite-ui-blue-3)}66%{stroke:var(--calcite-ui-blue-2)}100%{stroke:var(--calcite-ui-blue-1)}}@keyframes loader-color-shift{0%{stroke:var(--calcite-ui-blue-1)}33%{stroke:var(--calcite-ui-blue-3)}66%{stroke:var(--calcite-ui-blue-2)}100%{stroke:var(--calcite-ui-blue-1)}}@-webkit-keyframes loader-clockwise{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loader-clockwise{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";
var CalciteLoader = /** @class */ (function () {
    function CalciteLoader(hostRef) {
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
    CalciteLoader.prototype.render = function () {
        var _b = this, el = _b.el, inline = _b.inline, label = _b.label, scale = _b.scale, text = _b.text, type = _b.type, value = _b.value;
        var id = el.id || guid();
        var radiusRatio = 0.45;
        var size = inline ? this.getInlineSize(scale) : this.getSize(scale);
        var radius = size * radiusRatio;
        var viewbox = "0 0 " + size + " " + size;
        var isDeterminate = type === "determinate";
        var circumference = 2 * radius * Math.PI;
        var progress = (value / 100) * circumference;
        var remaining = circumference - progress;
        var valueNow = Math.floor(value);
        var hostAttributes = {
            "aria-valuenow": valueNow,
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            complete: valueNow === 100
        };
        var svgAttributes = { r: radius, cx: size / 2, cy: size / 2 };
        var determinateStyle = { "stroke-dasharray": progress + " " + remaining };
        return (h(Host, Object.assign({ "aria-label": label, id: id, role: "progressbar" }, (isDeterminate ? hostAttributes : {})), h("div", { class: "loader__svgs" }, h("svg", { class: "loader__svg loader__svg--1", viewBox: viewbox }, h("circle", Object.assign({}, svgAttributes))), h("svg", { class: "loader__svg loader__svg--2", viewBox: viewbox }, h("circle", Object.assign({}, svgAttributes))), h("svg", Object.assign({ class: "loader__svg loader__svg--3", viewBox: viewbox }, (isDeterminate ? { style: determinateStyle } : {})), h("circle", Object.assign({}, svgAttributes)))), text && h("div", { class: "loader__text" }, text), isDeterminate && h("div", { class: "loader__percentage" }, value)));
    };
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    /**
     * Return the proper sizes based on the scale property
     */
    CalciteLoader.prototype.getSize = function (scale) {
        return {
            s: 32,
            m: 56,
            l: 80
        }[scale];
    };
    CalciteLoader.prototype.getInlineSize = function (scale) {
        return {
            s: 12,
            m: 16,
            l: 20
        }[scale];
    };
    Object.defineProperty(CalciteLoader.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return CalciteLoader;
}());
CalciteLoader.style = calciteLoaderCss;
var TreeSelectionMode;
(function (TreeSelectionMode) {
    TreeSelectionMode["Single"] = "single";
    TreeSelectionMode["Multi"] = "multi";
    TreeSelectionMode["Children"] = "children";
    TreeSelectionMode["MultiChildren"] = "multi-children";
})(TreeSelectionMode || (TreeSelectionMode = {}));
var calciteTreeCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block;outline:none}";
var CalciteTree = /** @class */ (function () {
    function CalciteTree(hostRef) {
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
    CalciteTree.prototype.componentWillRender = function () {
        var parent = this.el.parentElement.closest("calcite-tree");
        // this.theme = getElementTheme(this.el);
        this.lines = parent ? parent.lines : this.lines;
        this.scale = parent ? parent.scale : this.scale;
        this.selectionMode = parent ? parent.selectionMode : this.selectionMode;
        this.root = parent ? false : true;
    };
    CalciteTree.prototype.render = function () {
        return (h(Host, { "aria-multiselectable": this.selectionMode === TreeSelectionMode.Multi ||
                this.selectionMode === TreeSelectionMode.MultiChildren, role: this.root ? "tree" : undefined, tabindex: this.root ? "0" : undefined }, h("slot", null)));
    };
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    CalciteTree.prototype.onFocus = function () {
        if (this.root) {
            var selectedNode = this.el.querySelector("calcite-tree-item[selected]");
            var firstNode = this.el.querySelector("calcite-tree-item");
            (selectedNode || firstNode).focus();
        }
    };
    CalciteTree.prototype.onClick = function (e) {
        var target = e.target;
        var childItems = nodeListToArray(target.querySelectorAll("calcite-tree-item"));
        var shouldSelect = this.selectionMode !== null &&
            (!target.hasChildren ||
                (target.hasChildren &&
                    (this.selectionMode === TreeSelectionMode.Children ||
                        this.selectionMode === TreeSelectionMode.MultiChildren)));
        var shouldModifyToCurrentSelection = e.detail.modifyCurrentSelection &&
            (this.selectionMode === TreeSelectionMode.Multi ||
                this.selectionMode === TreeSelectionMode.MultiChildren);
        var shouldSelectChildren = this.selectionMode === TreeSelectionMode.MultiChildren ||
            this.selectionMode === TreeSelectionMode.Children;
        var shouldClearCurrentSelection = !shouldModifyToCurrentSelection &&
            (((this.selectionMode === TreeSelectionMode.Single ||
                this.selectionMode === TreeSelectionMode.Multi) &&
                childItems.length <= 0) ||
                this.selectionMode === TreeSelectionMode.Children ||
                this.selectionMode === TreeSelectionMode.MultiChildren);
        var shouldExpandTarget = this.selectionMode === TreeSelectionMode.Children ||
            this.selectionMode === TreeSelectionMode.MultiChildren;
        if (this.root) {
            var targetItems_1 = [];
            if (shouldSelect) {
                targetItems_1.push(target);
            }
            if (shouldSelectChildren) {
                childItems.forEach(function (treeItem) {
                    targetItems_1.push(treeItem);
                });
            }
            if (shouldClearCurrentSelection) {
                var selectedItems = nodeListToArray(this.el.querySelectorAll("calcite-tree-item[selected]"));
                selectedItems.forEach(function (treeItem) {
                    if (!targetItems_1.includes(treeItem)) {
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
                targetItems_1.forEach(function (treeItem) {
                    treeItem.selected = false;
                });
            }
            else {
                targetItems_1.forEach(function (treeItem) {
                    treeItem.selected = true;
                });
            }
        }
        if (this.root) {
            e.preventDefault();
            e.stopPropagation();
        }
        this.calciteTreeSelect.emit({
            selected: nodeListToArray(this.el.querySelectorAll("calcite-tree-item")).filter(function (i) { return i.selected; })
        });
    };
    Object.defineProperty(CalciteTree.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return CalciteTree;
}());
CalciteTree.style = calciteTreeCss;
var calciteTreeItemCss = "@charset \"UTF-8\";@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host{display:block;color:var(--calcite-tree-text);cursor:pointer;outline:none;font-size:0.875rem;line-height:1.5;max-width:100%;--calcite-tree-text:var(--calcite-ui-text-2);--calcite-tree-text:var(--calcite-ui-text-1);--calcite-tree-text:var(--calcite-ui-text-1);--calcite-tree-chevron:var(--calcite-ui-border-1);--calcite-tree-chevron-hover:var(--calcite-ui-text-3);--calcite-tree-vertical-padding:0.375rem;--calcite-tree-indicator:var(--calcite-ui-border-1);--calcite-tree-indicator-active:var(--calcite-ui-blue-1);--calcite-tree-indicator-first-start:0.1rem;--calcite-tree-indicator-first-end:auto;--calcite-tree-indicator-distance-start:0.15rem;--calcite-tree-indicator-distance-end:auto;--calcite-tree-icon-edge-distance-start:-0.2rem;--calcite-tree-icon-edge-distance-end:0;--calcite-tree-icon-content-distance-start:0.375rem;--calcite-tree-icon-content-distance-end:0;--calcite-tree-indent-start:1.4rem;--calcite-tree-indent-end:0;--calcite-tree-children-indent-start:0.25rem;--calcite-tree-children-indent-end:0;--calcite-tree-children-padding-start:1rem;--calcite-tree-children-padding-end:0;--calcite-tree-line-position-start:0.05rem;--calcite-tree-line-position-end:0;--calcite-tree-parent-line-position-start:-0.95rem;--calcite-tree-parent-line-position-end:0;--calcite-tree-line-width:1px;--calcite-tree-hover-line-width:3px}:host([lines]){--calcite-tree-line:var(--calcite-ui-border-3);--calcite-tree-line-hover:var(--calcite-ui-border-1)}:host([lines]) .calcite-tree-node:before{display:none}:host(:not([lines])) .calcite-tree-node:after{display:none}:host([scale=s]){--calcite-tree-hover-line-width:2px;--calcite-tree-vertical-padding:0.1875rem;--calcite-tree-children-indent-start:0rem;--calcite-tree-children-padding-start:0.8rem;--calcite-tree-line-position-start:0.3rem;--calcite-tree-parent-line-position-start:-0.5rem}:host([dir=rtl]){--calcite-tree-indicator-first-start:0;--calcite-tree-indicator-first-end:0.1rem;--calcite-tree-indicator-distance-start:auto;--calcite-tree-indicator-distance-end:0.15rem;--calcite-tree-icon-edge-distance-start:auto;--calcite-tree-icon-edge-distance-end:-0.2rem;--calcite-tree-icon-content-distance-start:0;--calcite-tree-icon-content-distance-end:0.375rem;--calcite-tree-indent-start:0;--calcite-tree-indent-end:1.4rem;--calcite-tree-children-indent-start:0;--calcite-tree-children-indent-end:0.25rem;--calcite-tree-children-padding-start:0;--calcite-tree-children-padding-end:1rem;--calcite-tree-line-position-start:0;--calcite-tree-line-position-end:0.05rem;--calcite-tree-parent-line-position-start:0;--calcite-tree-parent-line-position-end:-0.95rem}:host([dir=rtl][scale=s]){--calcite-tree-children-indent-end:0rem;--calcite-tree-children-padding-end:0.8rem;--calcite-tree-line-position-end:0.3rem;--calcite-tree-parent-line-position-end:-0.5rem}::slotted(*){color:inherit;font-size:0.875rem;line-height:1.5;text-decoration:none !important;word-wrap:break-word;overflow-wrap:break-word;min-width:0;max-width:100%}::slotted(*):hover{text-decoration:none !important}::slotted(a){width:100%;text-decoration:none}:host{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus){outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}.calcite-tree-children{z-index:1;margin-left:var(--calcite-tree-children-indent-start);margin-right:var(--calcite-tree-children-indent-end);padding-left:var(--calcite-tree-children-padding-start);padding-right:var(--calcite-tree-children-padding-end);position:relative;-webkit-transform:scaleY(0);transform:scaleY(0);opacity:0;overflow:hidden;-webkit-transition:0.15s cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity 0.15s cubic-bezier(0.215, 0.44, 0.42, 0.88), all 0.15s ease-in-out;transition:0.15s cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity 0.15s cubic-bezier(0.215, 0.44, 0.42, 0.88), all 0.15s ease-in-out;height:0;-webkit-transform-origin:top;transform-origin:top}.calcite-tree-children:after{-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out;content:\"\";height:100%;width:var(--calcite-tree-line-width);background:var(--calcite-tree-line);left:var(--calcite-tree-line-position-start);right:var(--calcite-tree-line-position-end);top:0;position:absolute}:host([expanded])>.calcite-tree-children{-webkit-transform:scaleY(1);transform:scaleY(1);opacity:1;height:auto}:host([has-children]) .calcite-tree-children:hover:after,:host([has-children]) .calcite-tree-children:focus:after{background:var(--calcite-tree-line-hover)}.calcite-tree-node{display:-ms-flexbox;display:flex;padding:var(--calcite-tree-vertical-padding) 0;padding-left:var(--calcite-tree-indent-start);padding-right:var(--calcite-tree-indent-end);position:relative}.calcite-tree-node:before{content:\"•\";position:absolute;left:var(--calcite-tree-indicator-distance-start);right:var(--calcite-tree-indicator-distance-end);opacity:0;color:var(--calcite-tree-indicator);-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out}.calcite-tree-node:after{-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out;content:\"\";height:100%;width:var(--calcite-tree-line-width);background:var(--calcite-tree-line);left:var(--calcite-tree-parent-line-position-start);right:var(--calcite-tree-parent-line-position-end);top:0;position:absolute}:host([depth=\"1\"])>.calcite-tree-node:after{display:none}:host([has-children])>.calcite-tree-node{padding-left:0;padding-right:0}:host([has-children])>.calcite-tree-node:before{display:none}:host([depth=\"1\"])>.calcite-tree-node:before,:host([depth=\"1\"])>.calcite-tree-children:before{left:var(--calcite-tree-indicator-first-start);right:var(--calcite-tree-indicator-first-end)}.calcite-tree-node:hover:before,:host([selected]) .calcite-tree-node:hover:before,:host(:focus) .calcite-tree-node:before{opacity:1}.calcite-tree-node:hover:after,:host([selected]) .calcite-tree-node:hover:after,:host(:focus) .calcite-tree-node:after{width:var(--calcite-tree-hover-line-width);background:var(--calcite-tree-line-hover);z-index:2}.calcite-tree-node:hover ::slotted(*),:host([selected]) .calcite-tree-node:hover ::slotted(*),:host(:focus) .calcite-tree-node ::slotted(*){color:var(--calcite-tree-text-hover)}.calcite-tree-node:hover .calcite-tree-chevron,:host([selected]) .calcite-tree-node:hover .calcite-tree-chevron,:host(:focus) .calcite-tree-node .calcite-tree-chevron{fill:var(--calcite-tree-chevron-hover)}.calcite-tree-node:hover .calcite-tree-indicator,:host([selected]) .calcite-tree-node:hover .calcite-tree-indicator,:host(:focus) .calcite-tree-node .calcite-tree-indicator{fill:var(--calcite-tree-indicator-hover)}:host([selected])>.calcite-tree-node,:host([selected])>.calcite-tree-node:hover{color:var(--calcite-tree-text-active);font-weight:500}:host([selected])>.calcite-tree-node:before,:host([selected])>.calcite-tree-node:hover:before{opacity:1;color:var(--calcite-tree-indicator-active)}:host([selected])>.calcite-tree-node:after,:host([selected])>.calcite-tree-node:hover:after{background:var(--calcite-ui-blue-1);width:var(--calcite-tree-hover-line-width);z-index:2}:host([selected])>.calcite-tree-node ::slotted(*),:host([selected])>.calcite-tree-node:hover ::slotted(*){color:var(--calcite-tree-text-active)}:host([has-children][expanded])>.calcite-tree-node{color:var(--calcite-tree-text-active);font-weight:500}:host([has-children][expanded])>.calcite-tree-node:after{background:var(--calcite-ui-blue-1)}:host([has-children][expanded])>.calcite-tree-node:before{opacity:1;color:var(--calcite-tree-indicator-active)}:host([has-children][expanded])>.calcite-tree-node ::slotted(*){color:var(--calcite-tree-text-active)}:host([has-children][expanded][selected])>.calcite-tree-node:after{background:var(--calcite-ui-blue-1);width:var(--calcite-tree-hover-line-width);z-index:2}.calcite-tree-chevron{-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out;-ms-flex:0 0 auto;flex:0 0 auto;position:relative;-ms-flex-item-align:center;align-self:center;left:var(--calcite-tree-icon-edge-distance-start);right:var(--calcite-tree-icon-edge-distance-end);margin-right:var(--calcite-tree-icon-content-distance-start);margin-left:var(--calcite-tree-icon-content-distance-end);-webkit-transform:rotate(0deg);transform:rotate(0deg);fill:var(--calcite-tree-chevron)}:host([dir=rtl]) .calcite-tree-chevron{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(:hover) .calcite-tree-chevron,:host(:focus) .calcite-tree-chevron{fill:var(--calcite-tree-chevron-hover);stroke:var(--calcite-tree-chevron-hover);stroke-width:0.75}:host([expanded])>.calcite-tree-node>.calcite-tree-chevron{-webkit-transform:rotate(90deg);transform:rotate(90deg);fill:var(--calcite-ui-blue-1);stroke-width:0.75;stroke:var(--calcite-ui-blue-1)}";
var CalciteTreeItem = /** @class */ (function () {
    function CalciteTreeItem(hostRef) {
        var _this = this;
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
        this.iconClickHandler = function (event) {
            event.stopPropagation();
            _this.expanded = !_this.expanded;
            _this.calciteTreeItemSelect.emit({
                modifyCurrentSelection: event.shiftKey,
                forceToggle: true
            });
        };
        this.childrenClickHandler = function (event) { return event.stopPropagation(); };
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
    CalciteTreeItem.prototype.expandedHandler = function (newValue) {
        var items = getSlotted(this.el, "children", {
            all: true,
            selector: "calcite-tree-item"
        });
        items.forEach(function (item) { return (item.parentExpanded = newValue); });
    };
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    CalciteTreeItem.prototype.componentWillRender = function () {
        this.hasChildren = !!this.el.querySelector("calcite-tree");
        this.depth = 0;
        this.el.dir = getElementDir(this.el);
        var parentTree = this.el.closest("calcite-tree");
        if (!parentTree) {
            return;
        }
        this.selectionMode = parentTree.selectionMode;
        this.scale = parentTree.scale || "m";
        this.lines = parentTree.lines;
        var nextParentTree;
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
    };
    CalciteTreeItem.prototype.render = function () {
        var _this = this;
        var icon = this.hasChildren ? (h("calcite-icon", { class: "calcite-tree-chevron", "data-test-id": "icon", icon: "chevron-right", onClick: this.iconClickHandler, scale: "s" })) : null;
        var hidden = !(this.parentExpanded || this.depth === 1);
        return (h(Host, { "aria-expanded": this.hasChildren ? this.expanded.toString() : undefined, "aria-hidden": hidden.toString(), "aria-selected": this.selected
                ? "true"
                : this.selectionMode === TreeSelectionMode.Multi ||
                    this.selectionMode === TreeSelectionMode.MultiChildren
                    ? "false"
                    : undefined, "calcite-hydrated-hidden": hidden, role: "treeitem", tabindex: this.parentExpanded || this.depth === 1 ? "0" : "-1" }, h("div", { class: "calcite-tree-node", ref: function (el) { return (_this.defaultSlotWrapper = el); } }, icon, h("slot", null)), h("div", { class: "calcite-tree-children", "data-test-id": "calcite-tree-children", onClick: this.childrenClickHandler, ref: function (el) { return (_this.childrenSlotWrapper = el); }, role: this.hasChildren ? "group" : undefined }, h("slot", { name: "children" }))));
    };
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    CalciteTreeItem.prototype.onClick = function (e) {
        // Solve for if the item is clicked somewhere outside the slotted anchor.
        // Anchor is triggered anywhere you click
        var link = filterDirectChildren(this.el, "a")[0];
        if (link && e.composedPath()[0].tagName.toLowerCase() !== "a") {
            var target = link.target === "" ? "_self" : link.target;
            window.open(link.href, target);
        }
        this.expanded = !this.expanded;
        this.calciteTreeItemSelect.emit({
            modifyCurrentSelection: e.shiftKey,
            forceToggle: false
        });
    };
    CalciteTreeItem.prototype.keyDownHandler = function (e) {
        var root;
        switch (getKey(e.key)) {
            case " ":
                this.selected = !this.selected;
                e.preventDefault();
                e.stopPropagation();
                break;
            case "Enter":
                // activates a node, i.e., performs its default action. For parent nodes, one possible default action is to open or close the node. In single-select trees where selection does not follow focus (see note below), the default action is typically to select the focused node.
                var link = nodeListToArray(this.el.children).find(function (e) { return e.matches("a"); });
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
                var parentItem = this.el.parentElement.closest("calcite-tree-item");
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
                var previous = this.el.previousElementSibling;
                if (previous && previous.matches("calcite-tree-item")) {
                    previous.focus();
                }
                break;
            case "ArrowDown":
                var next = this.el.nextElementSibling;
                if (next && next.matches("calcite-tree-item")) {
                    next.focus();
                }
                break;
            case "Home":
                root = this.el.closest("calcite-tree[root]");
                var firstNode = root.querySelector("calcite-tree-item");
                firstNode.focus();
                break;
            case "End":
                root = this.el.closest("calcite-tree[root]");
                var currentNode = root.children[root.children.length - 1]; // last child
                var currentTree = nodeListToArray(currentNode.children).find(function (e) { return e.matches("calcite-tree"); });
                while (currentTree) {
                    currentNode = currentTree.children[root.children.length - 1];
                    currentTree = nodeListToArray(currentNode.children).find(function (e) { return e.matches("calcite-tree"); });
                }
                currentNode.focus();
                break;
        }
    };
    Object.defineProperty(CalciteTreeItem.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalciteTreeItem, "watchers", {
        get: function () {
            return {
                "expanded": ["expandedHandler"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return CalciteTreeItem;
}());
CalciteTreeItem.style = calciteTreeItemCss;
var hubCardCss = ":host{display:block;font-family:\"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;font-size:16px}calcite-card{height:100%}hub-card{-webkit-box-shadow:0 1px 2px rgba(0,0,0,0.15);box-shadow:0 1px 2px rgba(0,0,0,0.15);-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;padding:2px;margin:3px;-webkit-transition:all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);transition:all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);position:relative}hub-card::after{content:'';position:absolute;z-index:-1;opacity:0;border-radius:5px;-webkit-box-shadow:0 5px 15px rgba(0,0,0,0.3);box-shadow:0 5px 15px rgba(0,0,0,0.3);-webkit-transition:opacity 0.3s ease-in-out;transition:opacity 0.3s ease-in-out;-webkit-transition:all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);transition:all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)}hub-card:hover{-webkit-transform:scale(1.2, 1.2);transform:scale(1.2, 1.2)}hub-card:hover::after{opacity:1}.hub-content-footer{grid-area:footer;padding:0 0 10px 60px}.hub-content-card:hover{-webkit-box-shadow:0 8px 16px 0 rgba(0,0,0,0.2);box-shadow:0 8px 16px 0 rgba(0,0,0,0.2)}.hub-content-title{font:#101f28 !important;font-size:1rem;font-weight:700}.hub-content-url{text-decoration:none;color:black}.hub-content-url:hover{text-decoration:underline}.card-image{height:175px}.hub-content-summary,.hub-content-type{font-size:0.9rem;color:rgb(102, 102, 102);}.layout-vertical.hub-content-card{width:250px}.layout-vertical .hub-content-image{height:150px;-ms-flex:0 0 auto;flex:0 0 auto}.layout-vertical img.hub-content-image{width:100%;-o-object-fit:cover;object-fit:cover}.hub-content-metadata{margin:0.5rem 0.8rem}.layout-horizontal.hub-content-card{display:-ms-flexbox;display:flex}.layout-horizontal .hub-content-image{display:-ms-flexbox;display:flex;-ms-flex:0 0 150px;flex:0 0 150px;max-height:115px}.layout-horizontal .hub-content-metadata{-ms-flex:1 1 auto;flex:1 1 auto;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}.hub-content-details{color:#4c4c4c;font-size:0.8em;-webkit-box-shadow:0 -1px #ccc;box-shadow:0 -1px #ccc;padding:15px 15px 0;grid-template-columns:repeat(2,50%);grid-gap:2px 5px;-ms-flex-align:center;align-items:center;-ms-flex:1 auto;flex:1 auto;display:grid}.card-description{min-height:100px;overflow:hidden}.card-title{height:44px;overflow:hidden}";
var HubCard = /** @class */ (function () {
    function HubCard(hostRef) {
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
    HubCard.prototype.componentWillRender = function () {
        // this.metadata = [
        //   {name: "Owner", value: this.content.item.owner},
        //   {name: "Updated", value: timestampToDate(this.content.item.modified)},
        // ]
    };
    HubCard.prototype.render = function () {
        var _this = this;
        var output = [];
        // debugger;
        if (this.image !== undefined && this.image !== null && this.image.length > 0) {
            // TODO: improve testing for image URL
            if (this.image.match(/^http/) === null && this.item) {
                output.push(h("img", { class: "card-image", slot: "thumbnail", src: this.portalUrl + "content/items/" + this.item + "/info/" + this.image }));
            }
            else {
                // thumbnail = <img class="hub-content-image" src={this.image} alt="Thumbnail Image" />
                output.push(h("img", { class: "card-image", slot: "thumbnail", src: this.image }));
            }
        }
        if (this.name) {
            var name = this.name;
            if (this.url) {
                name = "<a class=\"hub-content-url\" href=\"" + this.url + "\">" + name + "</a>";
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
            output.push(h("div", { class: "hub-content-details" }, this.metadata.map(function (element) { return h("div", null, h("strong", null, element.name), ": ", element.value); })));
        }
        if (this.url !== undefined && this.url !== null && this.url.length != 0) {
            output.push(h("calcite-button", { onClick: function () { return window.open(_this.url); }, slot: "footer-leading", width: "full" }, this.buttonText));
        }
        return (h(Host, null, h("calcite-card", null, output)));
    };
    return HubCard;
}());
HubCard.style = hubCardCss;
var hubContentCardCss = ":host{display:block}";
var HubContentCard = /** @class */ (function () {
    function HubContentCard(hostRef) {
        registerInstance(this, hostRef);
        this.content = "4f5c78bfe89a4304aec3a6cfd492d0cd";
        this.layout = "vertical";
        this.contentItem = null;
        this.children = [];
    }
    HubContentCard.prototype.componentWillLoad = function () {
        this.loadContent();
    };
    HubContentCard.prototype.loadContent = function () {
        var _this = this;
        if (this.contentItem === null) {
            getContent(this.content).then(function (contentResponse) {
                console.log("HubContentCard content", contentResponse);
                _this.contentItem = contentResponse;
            });
        }
    };
    HubContentCard.prototype.render = function () {
        var output = [];
        if (this.contentItem) {
            output.push(h("hub-card", { item: this.content, contenttype: this.contentItem.type, layout: this.layout, url: this.contentItem.url, image: this.contentItem.thumbnailUrl, name: this.contentItem.name, description: this.contentItem.summary }));
        }
        return (h(Host, null, output));
    };
    Object.defineProperty(HubContentCard.prototype, "host", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HubContentCard, "watchers", {
        get: function () {
            return {
                "content": ["loadContent"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return HubContentCard;
}());
HubContentCard.style = hubContentCardCss;
var hubFilterCategoryCss = ":host{display:block}label{display:block;margin:4px 0}";
var HubFilterCategory = /** @class */ (function () {
    function class_3(hostRef) {
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
    class_3.prototype.getGroupCategories = function (query, facet, groupId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, searchGroupContent({
                            groupId: groupId,
                            q: query,
                            num: 0,
                            params: {
                                countFields: facet,
                                countSize: 200
                            }
                        })];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    class_3.prototype.updateQuery = function (newQuery, _oldQuery) {
        console.log("hub-filter-category: updateQuery", newQuery);
        this.query = newQuery;
        this.updateCategories();
    };
    class_3.prototype.updateCategories = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.facet !== null && this.group !== null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getGroupCategories(this.query, this.facet, this.group)];
                    case 1:
                        response = _b.sent();
                        this.facets = response.aggregations.counts[0].fieldValues;
                        console.log("hub-filter-category facets", this.facets);
                        this.facets.map(function (f) {
                            _this.categories.push(f.value + " (" + f.count + ")");
                        });
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    class_3.prototype.componentWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_b) {
                console.log("Hub Filter Category", this.categories);
                if (this.categories !== undefined && this.categories.length > 0) {
                    this.categories.map(function (category) {
                        _this.selectedCategories[category] = { checked: false };
                    });
                }
                this.updateCategories();
                return [2 /*return*/];
            });
        });
    };
    class_3.prototype.handleFilterChange = function (value) {
        this.selectedCategories[value].checked = !this.selectedCategories[value].checked;
        console.debug("filterChanged", [value, this.selectedCategories]);
        this.filterChanged.emit(this.selectedCategories);
    };
    class_3.prototype.treeSelected = function (event) {
        this.selectedCategories = event.detail.selected.reduce(function (accumulator, currentValue) {
            console.log("CurrentValue", currentValue, accumulator);
            accumulator.push(currentValue.childNodes[0].id);
            return accumulator;
        }, []);
        console.log("TreeSelected reduced", this.selectedCategories);
        this.filterChanged.emit(this.selectedCategories);
        return 'true';
    };
    class_3.prototype.renderCheckbox = function () {
        var _this = this;
        var output = [];
        this.categories.map(function (category) {
            output.push(h("label", null, h("calcite-checkbox", null, h("input", { name: category, value: category, type: "checkbox", onChange: function () { return _this.handleFilterChange(category); } })), category));
        });
        return output;
    };
    // Convert array of nested categories into a real tree
    class_3.prototype.recurseNodes = function (branch, nodes, id, value) {
        var current = nodes.shift();
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
    };
    // enumerate through array and convert to a nested object
    // array: [{value: "/categories/products/arcgis online", count: 80}, ...]
    // tree: { products: { children: { "arcgis online": { count: 80, children: {} }} }}
    class_3.prototype.convertArrayToTree = function (array) {
        var _this = this;
        var tree = {};
        array.map(function (entry) {
            var nodes = entry.value.replace('/categories/', '').split('/');
            // Skip `/categories` 
            if (nodes[0] !== "") {
                _this.recurseNodes(tree, nodes, entry.value, entry.count);
            }
        });
        return tree;
    };
    class_3.prototype.toTitleCase = function (str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    class_3.prototype.renderChildren = function (branch) {
        var _this = this;
        var output = [];
        var _loop_1 = function (key) {
            var value = branch[key];
            var leaf = this_1.renderChildren(value.children);
            // Only include another tree if there are children
            if (leaf.length !== 0) {
                leaf = h("calcite-tree", { slot: "children" }, " ", leaf, " ");
            }
            output.push(h("calcite-tree-item", null, h("a", { onClick: function () { return _this.handleFilterChange(value.id); }, id: value.id }, this_1.toTitleCase(value.name), " (", value.count, ") "), leaf));
        };
        var this_1 = this;
        for (var key in branch) {
            _loop_1(key);
        }
        return output;
    };
    class_3.prototype.renderTree = function () {
        var output = [];
        var tree = this.convertArrayToTree(this.facets);
        var root = this.renderChildren(tree);
        output.push(h("calcite-tree", { "selection-mode": "multi-children", theme: "light" }, root));
        return output;
    };
    class_3.prototype.render = function () {
        var output = (this.facettype == "tree") ? this.renderTree() : this.renderCheckbox();
        return (h(Host, null, h("h3", null, this.name), h("slot", null), output));
    };
    Object.defineProperty(class_3, "watchers", {
        get: function () {
            return {
                "query": ["updateQuery"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return class_3;
}());
HubFilterCategory.style = hubFilterCategoryCss;
var hubGalleryCss = ":host{overflow-x:hidden}.search-grid{display:grid;grid-template:\".   search\" auto\n    \"filters results\" auto /\n    -webkit-min-content 3fr;grid-template:\".   search\" auto\n    \"filters results\" auto /\n    min-content 3fr;padding:0 1rem 0 3rem}hub-suggest-input{grid-area:search}.filters{grid-area:filters}.search-results{grid-area:results;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:justify;justify-content:space-between}@media screen and (max-width: 530px){.gallery-card{width:calc((100% - (0 * 30px))/ 1)}}@media screen and (min-width: 530px) and (max-width: 975px){.gallery-card{width:calc((100% - (1 * 30px))/ 2)}}@media screen and (min-width: 975px) and (max-width: 1200px){.gallery-card{width:calc((100% - (2 * 30px))/ 3)}}@media screen and (min-width:1200px){.gallery-card{width:calc((100% - (3 * 30px))/ 4)}}.gallery-card{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;color:#4c4c4c;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:30px;-webkit-box-shadow:0 0 5px 0 rgba(76,76,76,.25);box-shadow:0 0 5px 0 rgba(76,76,76,.25);}";
var HubGallery = /** @class */ (function () {
    function class_4(hostRef) {
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
    class_4.prototype.queryInputHandler = function (event) {
        console.log("hub-gallery: queryInputHandler", event);
        this.queryInput = event.detail;
        // this.fetchResults(this.queryInput)
        return 'true';
    };
    class_4.prototype.querySelectHandler = function (event) {
        console.log("hub-gallery: querySelectHandler", event);
        this.queryInput = event.detail;
        this.results = [];
        this.updateGallery(this.queryInput);
        return 'true';
    };
    class_4.prototype.componentWillLoad = function () {
        var _this = this;
        this.session = readSessionFromCookie();
        console.log("hub-gallery load: session", this.session);
        this.queryInput = this.query;
        if (this.site) {
            getSiteCatalog(this.site).then(function (catalog) {
                _this.catalog = catalog;
            });
        }
        else {
            // Don't wait to update
            this.updateGallery(this.queryInput);
        }
    };
    class_4.prototype.updateGallery = function (query, customParams) {
        return __awaiter(this, void 0, void 0, function () {
            var auth, _b, teams, members, searchParams, results;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        auth = (this.session !== undefined && this.session !== null) ? UserSession.deserialize(this.session) : null;
                        console.log("hub-gallery updateGallery: [query, hubtype, auth]", [query, this.hubtype, auth]);
                        _b = this.hubtype;
                        switch (_b) {
                            case 'teams': return [3 /*break*/, 1];
                            case 'members': return [3 /*break*/, 3];
                        }
                        return [3 /*break*/, 5];
                    case 1: return [4 /*yield*/, searchTeams(query)];
                    case 2:
                        teams = _c.sent();
                        this.results = teams.results;
                        return [3 /*break*/, 7];
                    case 3: return [4 /*yield*/, searchMembers(query, auth)];
                    case 4:
                        members = _c.sent();
                        this.results = members.results;
                        return [3 /*break*/, 7];
                    case 5:
                        searchParams = {
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
                        return [4 /*yield*/, search$1(searchParams, {
                                isPortal: !this.hubapi,
                                hubApiUrl: "https://hub.arcgis.com",
                                authentication: auth
                            })];
                    case 6:
                        results = _c.sent();
                        console.log("hub-gallery updateGallery: [results] ", [results]);
                        this.results = results.results;
                        _c.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    // TODO: this is overly specific to group category filters
    class_4.prototype.filterChanged = function (event) {
        console.log("Gallery filterChanged", event);
        var customParams = {
            group: {
                id: this.groups.split(',')[0],
                categories: event.detail
            }
        };
        this.updateGallery(this.queryInput, customParams);
    };
    class_4.prototype.render = function () {
        var _this = this;
        var output = [];
        this.results.map(function (result) {
            var thumbnail = '';
            if (!!result.thumbnailUrl) {
                thumbnail = result.thumbnailUrl;
                if (!!_this.session) {
                    thumbnail += "?token=" + UserSession.deserialize(_this.session).token;
                }
            }
            console.log("hub-gallery: render result", [result, thumbnail]);
            output.push(h("hub-card", { class: "gallery-card", contenttype: HubType[result.hubType] + " by " + result.publisher.name, url: result.url || "", image: thumbnail, name: truncateString(result.title, 55), description: truncateString(result.summary, 90), buttonText: _this.buttontext, onClick: function () { return ""; } }));
        });
        return (h(Host, null, h("slot", null), h("div", { class: "search-grid" }, this.showsearch ?
            h("hub-suggest-input", { placeholder: this.searchplaceholder, submit: this.searchbutton, suggestions: this.suggestions, query: this.queryInput })
            : "", h("div", { class: "filters" }, h("slot", { name: "filters" }, " ")), h("div", { class: "search-results gallery-lg " }, output))));
    };
    return class_4;
}());
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
    return new Promise(function (resolve, reject) {
        var geocodeOptions = {
            address: address,
        };
        if (extent !== undefined && extent !== null) {
            var searchExtent = __spreadArrays(extent[0], extent[1]).join(',');
            geocodeOptions = Object.assign(geocodeOptions, { "params": { searchExtent: searchExtent } });
        }
        suggest(address, geocodeOptions).then(function (suggestions) {
            console.debug("suggestLocations", suggestions);
            resolve(suggestions);
        }).catch(reject);
    });
}
function getLocation(address, extent) {
    return new Promise(function (resolve, reject) {
        console.debug("getLocation extent", extent);
        var geocodeOptions = {
            address: address,
        };
        if (extent !== undefined && extent !== null) {
            var searchExtent = __spreadArrays(extent[0], extent[1]).join(',');
            geocodeOptions = Object.assign(geocodeOptions, { "params": { searchExtent: searchExtent } });
        }
        console.log("getLocation geocodeOptions", geocodeOptions);
        geocode(geocodeOptions)
            .then(function (response) {
            if (response.candidates.length == 0) {
                throw new Error('No locations found at this address.');
            }
            resolve(response.candidates[0].location); // => { x: -77.036533, y: 38.898719, spatialReference: ... }
        })
            .catch(reject);
    });
}
function getMap(id) {
    return new Promise(function (resolve, reject) {
        Promise.all([getItem(id), getItemData(id)])
            .then(resolve)
            .catch(reject);
    });
}
function queryMap(mapItemData, coordinates) {
    return new Promise(function (resolve, reject) {
        // Get Features from each map layer
        var promises = mapItemData['operationalLayers'].slice().reverse().map(function (layer) {
            return getFeatures(layer, coordinates);
        });
        Promise.all(promises).then(function (results) {
            // console.log("getMap Promise all", results)
            var features = [];
            results.map(function (r) {
                // There may not have been any features from this layer
                if (r['features'].length > 0) {
                    r['layer'] = r['title'];
                    r['title'] = r['features'][0].title;
                    r['description'] = "<em>" + r['features'][0].description + "</em>";
                }
                features.push(r);
            });
            resolve(features);
        }).catch(reject);
    });
}
function getFeatures(layer, location) {
    // console.log("getFeatures", layer, location)
    var options = {
        "url": layer.url,
        "outFields": "*",
        "geometryType": "esriGeometryPoint",
        "inSR": "4326"
    };
    if (layer.title.indexOf('Nearby') !== -1) {
        var match = layer.title.match(/Nearby (\d+)/);
        var distance = void 0;
        if (match !== null) {
            distance = parseInt(match[1]);
        }
        options["distance"] = distance;
        options["units"] = 'esriSRUnit_Meter';
    }
    // if (location.length !== undefined) {
    options["geometry"] = location;
    // }
    return new Promise(function (resolve, reject) {
        queryFeatures(options)
            .then(function (results) {
            var collection = {
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
    var fields = {};
    // console.log('results from t-f', results);
    results.fields.forEach(function (field) {
        fields[field.name] = field;
    });
    var featureInfos = [];
    // let layerTitle = layer.title;
    var featureTitle = layer.popupInfo.title;
    var featureDescription = layer.popupInfo.description;
    results.features.forEach(function (feature) {
        var data = feature.attributes;
        // Template replace `{POP00001}` -> feature['POP00001']
        var featureTitleInterpolated = featureTitle.replace(/\{(\w*)\}/g, function (_m, key) {
            return getValue(data, key, fields);
        });
        if (featureDescription !== null) {
            var featureDescriptionInterpolated = featureDescription.replace(/\{(\w*)\}/g, function (_m, key) {
                return getValue(data, key, fields);
            });
        }
        var featureInfo = {
            "title": featureTitleInterpolated,
            "description": featureDescriptionInterpolated ? featureDescriptionInterpolated : ""
        };
        featureInfos.push(featureInfo);
    });
    // console.log("featureInfos", featureInfos)
    return featureInfos;
}
var hubInputCss = "";
var HubInput = /** @class */ (function () {
    function HubInput(hostRef) {
        registerInstance(this, hostRef);
        this.eventAddressUpdated = createEvent(this, "eventAddressUpdated", 7);
    }
    HubInput.prototype.componentWillLoad = function () {
        this.inputAddress = this.address;
        if (typeof (this.extent) == "string") {
            this.extent = JSON.parse(this.extent);
        }
    };
    HubInput.prototype.queryInputHandler = function (event) {
        var _this = this;
        this.inputAddress = event.detail;
        suggestLocations(this.inputAddress, this.extent).then(function (suggestions) {
            _this.addressSuggestions = Array.from(suggestions.suggestions, function (s) { return s['text']; });
        }).catch(function (error) {
            console.error('Geocode error', error);
        });
        return 'true';
    };
    HubInput.prototype.querySelectHandler = function (event) {
        var _this = this;
        console.debug("radar-input querySelect", event);
        getLocation(event.detail, this.extent).then(function (coordinates) {
            _this.eventAddressUpdated.emit({
                'address': _this.address,
                'coordinates': coordinates
            });
        }).catch(function (error) {
            console.error('Geocode error', error);
        });
        return 'true';
    };
    HubInput.prototype.render = function () {
        return (h("hub-suggest-input", { placeholder: "Search for an address...", query: this.address, suggestions: this.addressSuggestions }));
    };
    Object.defineProperty(HubInput.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return HubInput;
}());
HubInput.style = hubInputCss;
var esriLoader = createCommonjsModule(function (module, exports) {
    (function (global, factory) {
        factory(exports);
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
            if (version === void 0) {
                version = DEFAULT_VERSION;
            }
            return "https://js.arcgis.com/" + version + "/";
        }
        /**
         * Get the CDN url for a the CSS for a given version and/or theme
         *
         * @param version Ex: '4.15', '3.32', or 'next'. Defaults to the latest 4.x version.
         */
        function getCdnCssUrl(version) {
            if (version === void 0) {
                version = DEFAULT_VERSION;
            }
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
            if (options === void 0) {
                options = {};
            }
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
            if (options === void 0) {
                options = {};
            }
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
            if (loadScriptOptions === void 0) {
                loadScriptOptions = {};
            }
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
var hubMapCss = "@import url(\"https://js.arcgis.com/4.15/esri/themes/light/main.css\");:host{height:100%;min-height:100%}.hub-map{height:100%;min-height:100%}.drawing-button{display:none;position:relative;bottom:20px;left:200px}.fullscreen-button{position:relative;bottom:40px;left:20px}";
var HubMap = /** @class */ (function () {
    // municipalitiesFeatureLayer: __esri.FeatureLayer;
    function HubMap(hostRef) {
        var _this = this;
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
            url: "https://js.arcgis.com/4.14/"
        };
        // loadCss(`${this.esriMapOptions.url}/esri/css/main.css`);
        // this.esriMapOptions['css'] = true
        // this.esriMapOptions['insertCssBefore'] = 'style'
        esriLoader_3(["esri/Map"], this.esriMapOptions).then(function (_b) {
            var EsriMap = _b[0];
            _this.esriMap = new EsriMap({
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
    HubMap.prototype.centerDidChangeHandler = function (newCenter) {
        console.debug("map: centerDidChangeHandler 1", [newCenter, this.esriMapView]);
        if (newCenter !== undefined && this.esriMapView) {
            this.mapCenter = JSON.parse(newCenter);
            console.debug("map: centerDidChangeHandler 2", [this.mapCenter, this.zoom]);
            this.esriMapView.goTo({ zoom: this.zoom, center: this.mapCenter });
        }
    };
    HubMap.prototype.zoomDidChangeHandler = function (newZoom) {
        console.debug("map: zoomDidChangeHandler 1", [newZoom, this.esriMapView]);
        if (newZoom !== undefined && this.esriMapView) {
            console.debug("map: zoomDidChangeHandler 2", [this.mapCenter, this.zoom]);
            this.esriMapView.goTo({ zoom: this.zoom, center: this.mapCenter });
        }
    };
    HubMap.prototype.geometryDidChangeHandler = function (newGeometry) {
        console.debug("Hub-Map: geometryHandler", newGeometry);
        if (newGeometry.length > 0) {
            this.geometry = newGeometry;
            this.addGeometry(this.geometry);
        }
    };
    HubMap.prototype.componentWillLoad = function () {
        if (this.center) {
            console.debug("HubMap componentWillLoad", this.center);
            this.mapCenter = JSON.parse(this.center);
        }
    };
    HubMap.prototype.componentDidUpdate = function () {
        // this.zoomToUrlObjectId(600);
    };
    /**
     * The component is loaded and has rendered.
     * Only called once per component lifecycle
     */
    HubMap.prototype.componentDidLoad = function () {
        this.createEsriMapView();
        if (this.drawing) {
            this.addSketch();
        }
        if (this.geometry.length > 0) {
            this.addGeometry(this.geometry);
        }
        // .then(() => this.zoomToUrlObjectId())
        // .then(() => this.addZoomOnClickAndUrlUpdate());
    };
    /**
     * Creates the mapview used in the application
     */
    HubMap.prototype.createEsriMapView = function () {
        var _this = this;
        return esriLoader_3(["esri/WebMap", "esri/views/MapView"], this.esriMapOptions).then(function (_b) {
            var WebMap = _b[0], MapView = _b[1];
            console.debug("Hub Map createEsriMapView", [_this.mapCenter, _this.zoom]);
            var mapDiv = _this.hostElement.querySelector("div");
            var mapOptions = { container: mapDiv };
            // Check how the map is initally set
            if (_this.webmap) {
                mapOptions.map = new WebMap({
                    portalItem: {
                        id: _this.webmap
                    }
                });
            }
            else {
                mapOptions.map = _this.esriMap;
            }
            if (_this.mapCenter && _this.zoom) {
                mapOptions.center = _this.mapCenter;
                mapOptions.zoom = _this.zoom;
            }
            _this.esriMapView = new MapView(mapOptions);
        });
    };
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
    HubMap.prototype.zoomToAndHighlighFeature = function (feature, duration) {
        var _this = this;
        if (duration === void 0) { duration = 1600; }
        this.esriMapView.when(function () {
            var symbol = {
                type: "simple-fill",
                color: [51, 51, 204, 0.9],
                style: "solid",
                outline: {
                    color: "white",
                    width: 1
                }
            };
            var highlightPolygon = feature.clone();
            highlightPolygon.set("symbol", symbol);
            _this.esriMapView.graphics.removeAll();
            _this.esriMapView.graphics.add(highlightPolygon);
            _this.esriMapView.goTo(feature.geometry, {
                duration: duration,
                easing: "ease-in"
            });
        });
    };
    HubMap.prototype.addGeometry = function (geometry) {
        var _this = this;
        esriLoader_3(["esri/Graphic",
            "esri/layers/GraphicsLayer"]).then(function (_b) {
            var Graphic = _b[0], GraphicsLayer = _b[1];
            var geometryLayer = new GraphicsLayer();
            _this.esriMap.add(geometryLayer);
            geometry.map(function (polygon) {
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
                _this.esriMapView.goTo(polygonGraphic);
            });
            // Zoom to first geometry
            // TODO make this zoom to all
            //   , {
            //   duration: 1,
            //   easing: "ease-in"
            // });        
        });
    };
    HubMap.prototype.addSketch = function () {
        var _this = this;
        esriLoader_3(["esri/widgets/Sketch",
            "esri/layers/GraphicsLayer"]).then(function (_b) {
            var Sketch = _b[0], GraphicsLayer = _b[1];
            var notesLayer = new GraphicsLayer();
            var sketch = new Sketch({
                layer: notesLayer,
                view: _this.esriMapView,
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
            _this.esriMap.add(notesLayer);
            _this.esriMapView.ui.add(sketch, "top-right");
            sketch.on("update", function (_event) {
                // debugger;
            });
            sketch.on('create', function (event) {
                try {
                    if (event.state === 'complete') { // || ['reshape-stop', 'move-stop'].includes(event.toolEventInfo.type)) {
                        console.debug("Sketch Complete", event.graphic);
                        _this.drawingComplete.emit(event.graphic);
                    }
                }
                catch (e) {
                    debugger;
                }
            });
        });
    };
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
    HubMap.prototype.requestFullScreen = function () {
        this.hostElement.requestFullscreen();
    };
    HubMap.prototype.startDrawing = function () {
        if (!this.drawing) {
            this.drawing = true;
            this.addSketch();
            this.drawingButton.style.display = "none";
        }
    };
    HubMap.prototype.render = function () {
        var _this = this;
        return (h(Host, null, h("div", { class: "hub-map" }), h("calcite-button", { class: "drawing-button", onClick: function () { return _this.startDrawing(); }, ref: function (el) { return _this.drawingButton = el; } }, "Add a Note"), this.showFullscreen ?
            h("calcite-button", { class: "fullscreen-button", onClick: function () { return _this.requestFullScreen(); }, ref: function (el) { return _this.fullScreenButton = el; } }, "Full Screen")
            : ""));
    };
    Object.defineProperty(HubMap.prototype, "hostElement", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HubMap, "watchers", {
        get: function () {
            return {
                "center": ["centerDidChangeHandler"],
                "zoom": ["zoomDidChangeHandler"],
                "geometry": ["geometryDidChangeHandler"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return HubMap;
}());
HubMap.style = hubMapCss;
var hubRadarCss = ".radar-map{height:200px}";
var HubRadar = /** @class */ (function () {
    function HubRadar(hostRef) {
        registerInstance(this, hostRef);
        this.showmap = false;
        this.isLoading = false;
    }
    HubRadar.prototype.handleAddressUpdated = function (event) {
        this.updateRadar(event.detail.address, event.detail.coordinates);
    };
    HubRadar.prototype.updateRadar = function (address, coordinates) {
        var _this = this;
        this.address = address;
        this.mapCenter = "[" + coordinates['x'] + ", " + coordinates['y'] + "]";
        this.mapZoom = 16;
        this.isLoading = true;
        queryMap(this.mapItemData, coordinates).then(function (results) {
            _this.messages = results;
            _this.isLoading = false;
        });
    };
    HubRadar.prototype.componentWillLoad = function () {
    };
    HubRadar.prototype.componentDidLoad = function () {
        var _this = this;
        // Load the map after the component renders so the map is available
        getMap(this.webmap).then(function (_b) {
            var mapItem = _b[0], mapItemData = _b[1];
            _this.mapItem = mapItem;
            _this.mapItemData = mapItemData;
            // The component embedded an address, so load the radar.
            if (_this.address) {
                getLocation(_this.address, mapItem.extent).then(function (coordinates) {
                    _this.updateRadar(_this.address, coordinates);
                }).catch(function (error) {
                    console.log('Geocode error', error);
                });
            }
        });
    };
    HubRadar.prototype.render = function () {
        var output = [];
        // Get Address
        var inputProps = {
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
                this.messages.forEach(function (m) {
                    output.push(h("hub-card", { layout: "horizontal", contenttype: m.layer, name: m.title, description: m.description ? m.description : "<em>None</em>" }));
                });
                // output.push( <slot name="after-results" /> )        
            }
        }
        return (h(Host, null, output, h("slot", { name: "after-results" })));
    };
    return HubRadar;
}());
HubRadar.style = hubRadarCss;
/**
 * Fuse.js v5.2.3 - Lightweight fuzzy-search (http://fusejs.io)
 *
 * Copyright (c) 2020 Kiro Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */
var INFINITY = 1 / 0;
var isArray = function (value) {
    return !Array.isArray
        ? Object.prototype.toString.call(value) === '[object Array]'
        : Array.isArray(value);
};
// Adapted from:
// https://github.com/lodash/lodash/blob/f4ca396a796435422bd4fd41fadbd225edddf175/.internal/baseToString.js
var baseToString = function (value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
        return value;
    }
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
};
var toString = function (value) { return (value == null ? '' : baseToString(value)); };
var isString = function (value) { return typeof value === 'string'; };
var isNumber = function (value) { return typeof value === 'number'; };
var isDefined = function (value) { return value !== undefined && value !== null; };
var isBlank = function (value) { return !value.trim().length; };
function get(obj, path) {
    var list = [];
    var arr = false;
    var _get = function (obj, path) {
        if (!path) {
            // If there's no path left, we've gotten to the object we care about.
            list.push(obj);
        }
        else {
            var dotIndex = path.indexOf('.');
            var key = path;
            var remaining = null;
            if (dotIndex !== -1) {
                key = path.slice(0, dotIndex);
                remaining = path.slice(dotIndex + 1);
            }
            var value = obj[key];
            if (isDefined(value)) {
                if (!remaining && (isString(value) || isNumber(value))) {
                    list.push(toString(value));
                }
                else if (isArray(value)) {
                    arr = true;
                    // Search each item in the array.
                    for (var i = 0, len = value.length; i < len; i += 1) {
                        _get(value[i], remaining);
                    }
                }
                else if (remaining) {
                    // An object. Recurse further.
                    _get(value, remaining);
                }
            }
        }
    };
    _get(obj, path);
    if (arr) {
        return list;
    }
    return list[0];
}
var MatchOptions = {
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
var BasicOptions = {
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
    sortFn: function (a, b) {
        return a.score === b.score ? (a.idx < b.idx ? -1 : 1) : a.score < b.score ? -1 : 1;
    }
};
var FuzzyOptions = {
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
var AdvancedOptions = {
    // When true, it enables the use of unix-like search commands
    useExtendedSearch: false,
    // The get function to use when fetching an object's properties.
    // The default will search nested paths *ie foo.bar.baz*
    getFn: get
};
var Config = __assign(__assign(__assign(__assign({}, BasicOptions), MatchOptions), FuzzyOptions), AdvancedOptions);
function computeScore(pattern, _b) {
    var _c = _b === void 0 ? {} : _b, _d = _c.errors, errors = _d === void 0 ? 0 : _d, _e = _c.currentLocation, currentLocation = _e === void 0 ? 0 : _e, _f = _c.expectedLocation, expectedLocation = _f === void 0 ? 0 : _f, _g = _c.distance, distance = _g === void 0 ? Config.distance : _g;
    var accuracy = errors / pattern.length;
    var proximity = Math.abs(expectedLocation - currentLocation);
    if (!distance) {
        // Dodge divide by zero error.
        return proximity ? 1.0 : accuracy;
    }
    return accuracy + proximity / distance;
}
function convertMaskToIndices(matchmask, minMatchCharLength) {
    if (matchmask === void 0) { matchmask = []; }
    if (minMatchCharLength === void 0) { minMatchCharLength = Config.minMatchCharLength; }
    var matchedIndices = [];
    var start = -1;
    var end = -1;
    var i = 0;
    for (var len = matchmask.length; i < len; i += 1) {
        var match = matchmask[i];
        if (match && start === -1) {
            start = i;
        }
        else if (!match && start !== -1) {
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
    return matchedIndices;
}
// Machine word size
var MAX_BITS = 32;
function search(text, pattern, patternAlphabet, _b) {
    var _c = _b === void 0 ? {} : _b, _d = _c.location, location = _d === void 0 ? Config.location : _d, _e = _c.distance, distance = _e === void 0 ? Config.distance : _e, _f = _c.threshold, threshold = _f === void 0 ? Config.threshold : _f, _g = _c.findAllMatches, findAllMatches = _g === void 0 ? Config.findAllMatches : _g, _h = _c.minMatchCharLength, minMatchCharLength = _h === void 0 ? Config.minMatchCharLength : _h, _j = _c.includeMatches, includeMatches = _j === void 0 ? Config.includeMatches : _j;
    if (pattern.length > MAX_BITS) {
        throw new Error("Pattern length exceeds max of " + MAX_BITS + ".");
    }
    var patternLen = pattern.length;
    // Set starting location at beginning text and initialize the alphabet.
    var textLen = text.length;
    // Handle the case when location > text.length
    var expectedLocation = Math.max(0, Math.min(location, textLen));
    // Highest score beyond which we give up.
    var currentThreshold = threshold;
    // Is there a nearby exact match? (speedup)
    var bestLocation = expectedLocation;
    // A mask of the matches, used for building the indices
    var matchMask = [];
    if (includeMatches) {
        for (var i = 0; i < textLen; i += 1) {
            matchMask[i] = 0;
        }
    }
    var index;
    // Get all exact matches, here for speed up
    while ((index = text.indexOf(pattern, bestLocation)) > -1) {
        var score = computeScore(pattern, {
            currentLocation: index,
            expectedLocation: expectedLocation,
            distance: distance
        });
        currentThreshold = Math.min(score, currentThreshold);
        bestLocation = index + patternLen;
        if (includeMatches) {
            var i = 0;
            while (i < patternLen) {
                matchMask[index + i] = 1;
                i += 1;
            }
        }
    }
    // Reset the best location
    bestLocation = -1;
    var lastBitArr = [];
    var finalScore = 1;
    var binMax = patternLen + textLen;
    var mask = 1 << (patternLen <= MAX_BITS - 1 ? patternLen - 1 : MAX_BITS - 2);
    for (var i = 0; i < patternLen; i += 1) {
        // Scan for the best match; each iteration allows for one more error.
        // Run a binary search to determine how far from the match location we can stray
        // at this error level.
        var binMin = 0;
        var binMid = binMax;
        while (binMin < binMid) {
            var score_1 = computeScore(pattern, {
                errors: i,
                currentLocation: expectedLocation + binMid,
                expectedLocation: expectedLocation,
                distance: distance
            });
            if (score_1 <= currentThreshold) {
                binMin = binMid;
            }
            else {
                binMax = binMid;
            }
            binMid = Math.floor((binMax - binMin) / 2 + binMin);
        }
        // Use the result from this iteration as the maximum for the next.
        binMax = binMid;
        var start = Math.max(1, expectedLocation - binMid + 1);
        var finish = findAllMatches
            ? textLen
            : Math.min(expectedLocation + binMid, textLen) + patternLen;
        // Initialize the bit array
        var bitArr = Array(finish + 2);
        bitArr[finish + 1] = (1 << i) - 1;
        for (var j = finish; j >= start; j -= 1) {
            var currentLocation = j - 1;
            var charMatch = patternAlphabet[text.charAt(currentLocation)];
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
                    currentLocation: currentLocation,
                    expectedLocation: expectedLocation,
                    distance: distance
                });
                // This match will almost certainly be better than any existing match.
                // But check anyway.
                if (finalScore <= currentThreshold) {
                    // Indeed it is
                    currentThreshold = finalScore;
                    bestLocation = currentLocation;
                    // Already passed `loc`, downhill from here on in.
                    if (bestLocation <= expectedLocation) {
                        break;
                    }
                    // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.
                    start = Math.max(1, 2 * expectedLocation - bestLocation);
                }
            }
        }
        // No hope for a (better) match at greater error levels.
        var score = computeScore(pattern, {
            errors: i + 1,
            currentLocation: expectedLocation,
            expectedLocation: expectedLocation,
            distance: distance
        });
        if (score > currentThreshold) {
            break;
        }
        lastBitArr = bitArr;
    }
    var result = {
        isMatch: bestLocation >= 0,
        // Count exact matches (those with a score of 0) to be "almost" exact
        score: !finalScore ? 0.001 : finalScore
    };
    if (includeMatches) {
        result.matchedIndices = convertMaskToIndices(matchMask, minMatchCharLength);
    }
    return result;
}
function createPatternAlphabet(pattern) {
    var mask = {};
    var len = pattern.length;
    for (var i = 0; i < len; i += 1) {
        mask[pattern.charAt(i)] = 0;
    }
    for (var i = 0; i < len; i += 1) {
        mask[pattern.charAt(i)] |= 1 << (len - i - 1);
    }
    return mask;
}
var BitapSearch = /** @class */ (function () {
    function BitapSearch(pattern, _b) {
        var _c = _b === void 0 ? {} : _b, _d = _c.location, location = _d === void 0 ? Config.location : _d, _e = _c.threshold, threshold = _e === void 0 ? Config.threshold : _e, _f = _c.distance, distance = _f === void 0 ? Config.distance : _f, _g = _c.includeMatches, includeMatches = _g === void 0 ? Config.includeMatches : _g, _h = _c.findAllMatches, findAllMatches = _h === void 0 ? Config.findAllMatches : _h, _j = _c.minMatchCharLength, minMatchCharLength = _j === void 0 ? Config.minMatchCharLength : _j, _k = _c.isCaseSensitive, isCaseSensitive = _k === void 0 ? Config.isCaseSensitive : _k;
        this.options = {
            location: location,
            threshold: threshold,
            distance: distance,
            includeMatches: includeMatches,
            findAllMatches: findAllMatches,
            minMatchCharLength: minMatchCharLength,
            isCaseSensitive: isCaseSensitive
        };
        this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
        this.chunks = [];
        var index = 0;
        while (index < this.pattern.length) {
            var pattern_1 = this.pattern.substring(index, index + MAX_BITS);
            this.chunks.push({
                pattern: pattern_1,
                alphabet: createPatternAlphabet(pattern_1)
            });
            index += MAX_BITS;
        }
    }
    BitapSearch.prototype.searchIn = function (value) {
        var text = value.$;
        return this.searchInString(text);
    };
    BitapSearch.prototype.searchInString = function (text) {
        var _b = this.options, isCaseSensitive = _b.isCaseSensitive, includeMatches = _b.includeMatches;
        if (!isCaseSensitive) {
            text = text.toLowerCase();
        }
        // Exact match
        if (this.pattern === text) {
            var result_1 = {
                isMatch: true,
                score: 0
            };
            if (includeMatches) {
                result_1.matchedIndices = [[0, text.length - 1]];
            }
            return result_1;
        }
        // Otherwise, use Bitap algorithm
        var _c = this.options, location = _c.location, distance = _c.distance, threshold = _c.threshold, findAllMatches = _c.findAllMatches, minMatchCharLength = _c.minMatchCharLength;
        var allMatchedIndices = [];
        var totalScore = 0;
        var hasMatches = false;
        for (var i = 0, len = this.chunks.length; i < len; i += 1) {
            var _d = this.chunks[i], pattern = _d.pattern, alphabet = _d.alphabet;
            var result_2 = search(text, pattern, alphabet, {
                location: location + MAX_BITS * i,
                distance: distance,
                threshold: threshold,
                findAllMatches: findAllMatches,
                minMatchCharLength: minMatchCharLength,
                includeMatches: includeMatches
            });
            var isMatch = result_2.isMatch, score = result_2.score, matchedIndices = result_2.matchedIndices;
            if (isMatch) {
                hasMatches = true;
            }
            totalScore += score;
            if (isMatch && matchedIndices) {
                allMatchedIndices = __spreadArrays(allMatchedIndices, matchedIndices);
            }
        }
        var result = {
            isMatch: hasMatches,
            score: hasMatches ? totalScore / this.chunks.length : 1
        };
        if (hasMatches && includeMatches) {
            result.matchedIndices = allMatchedIndices;
        }
        return result;
    };
    return BitapSearch;
}());
var BaseMatch = /** @class */ (function () {
    function BaseMatch(pattern) {
        this.pattern = pattern;
    }
    BaseMatch.isMultiMatch = function (pattern) {
        return getMatch(pattern, this.multiRegex);
    };
    BaseMatch.isSingleMatch = function (pattern) {
        return getMatch(pattern, this.singleRegex);
    };
    BaseMatch.prototype.search = function ( /*text*/) { };
    return BaseMatch;
}());
function getMatch(pattern, exp) {
    var matches = pattern.match(exp);
    return matches ? matches[1] : null;
}
// Token: 'file
var ExactMatch = /** @class */ (function (_super) {
    __extends(ExactMatch, _super);
    function ExactMatch(pattern) {
        return _super.call(this, pattern) || this;
    }
    Object.defineProperty(ExactMatch, "type", {
        get: function () {
            return 'exact';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExactMatch, "multiRegex", {
        get: function () {
            return /^'"(.*)"$/;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExactMatch, "singleRegex", {
        get: function () {
            return /^'(.*)$/;
        },
        enumerable: true,
        configurable: true
    });
    ExactMatch.prototype.search = function (text) {
        var location = 0;
        var index;
        var matchedIndices = [];
        var patternLen = this.pattern.length;
        // Get all exact matches
        while ((index = text.indexOf(this.pattern, location)) > -1) {
            location = index + patternLen;
            matchedIndices.push([index, location - 1]);
        }
        var isMatch = !!matchedIndices.length;
        return {
            isMatch: isMatch,
            score: isMatch ? 1 : 0,
            matchedIndices: matchedIndices
        };
    };
    return ExactMatch;
}(BaseMatch));
// Token: !fire
var InverseExactMatch = /** @class */ (function (_super) {
    __extends(InverseExactMatch, _super);
    function InverseExactMatch(pattern) {
        return _super.call(this, pattern) || this;
    }
    Object.defineProperty(InverseExactMatch, "type", {
        get: function () {
            return 'inverse-exact';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InverseExactMatch, "multiRegex", {
        get: function () {
            return /^!"(.*)"$/;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InverseExactMatch, "singleRegex", {
        get: function () {
            return /^!(.*)$/;
        },
        enumerable: true,
        configurable: true
    });
    InverseExactMatch.prototype.search = function (text) {
        var index = text.indexOf(this.pattern);
        var isMatch = index === -1;
        return {
            isMatch: isMatch,
            score: isMatch ? 0 : 1,
            matchedIndices: [0, text.length - 1]
        };
    };
    return InverseExactMatch;
}(BaseMatch));
// Token: ^file
var PrefixExactMatch = /** @class */ (function (_super) {
    __extends(PrefixExactMatch, _super);
    function PrefixExactMatch(pattern) {
        return _super.call(this, pattern) || this;
    }
    Object.defineProperty(PrefixExactMatch, "type", {
        get: function () {
            return 'prefix-exact';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrefixExactMatch, "multiRegex", {
        get: function () {
            return /^\^"(.*)"$/;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrefixExactMatch, "singleRegex", {
        get: function () {
            return /^\^(.*)$/;
        },
        enumerable: true,
        configurable: true
    });
    PrefixExactMatch.prototype.search = function (text) {
        var isMatch = text.startsWith(this.pattern);
        return {
            isMatch: isMatch,
            score: isMatch ? 0 : 1,
            matchedIndices: [0, this.pattern.length - 1]
        };
    };
    return PrefixExactMatch;
}(BaseMatch));
// Token: !^fire
var InversePrefixExactMatch = /** @class */ (function (_super) {
    __extends(InversePrefixExactMatch, _super);
    function InversePrefixExactMatch(pattern) {
        return _super.call(this, pattern) || this;
    }
    Object.defineProperty(InversePrefixExactMatch, "type", {
        get: function () {
            return 'inverse-prefix-exact';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InversePrefixExactMatch, "multiRegex", {
        get: function () {
            return /^!\^"(.*)"$/;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InversePrefixExactMatch, "singleRegex", {
        get: function () {
            return /^!\^(.*)$/;
        },
        enumerable: true,
        configurable: true
    });
    InversePrefixExactMatch.prototype.search = function (text) {
        var isMatch = !text.startsWith(this.pattern);
        return {
            isMatch: isMatch,
            score: isMatch ? 0 : 1,
            matchedIndices: [0, text.length - 1]
        };
    };
    return InversePrefixExactMatch;
}(BaseMatch));
// Token: .file$
var SuffixExactMatch = /** @class */ (function (_super) {
    __extends(SuffixExactMatch, _super);
    function SuffixExactMatch(pattern) {
        return _super.call(this, pattern) || this;
    }
    Object.defineProperty(SuffixExactMatch, "type", {
        get: function () {
            return 'suffix-exact';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuffixExactMatch, "multiRegex", {
        get: function () {
            return /^"(.*)"\$$/;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuffixExactMatch, "singleRegex", {
        get: function () {
            return /^(.*)\$$/;
        },
        enumerable: true,
        configurable: true
    });
    SuffixExactMatch.prototype.search = function (text) {
        var isMatch = text.endsWith(this.pattern);
        return {
            isMatch: isMatch,
            score: isMatch ? 0 : 1,
            matchedIndices: [text.length - this.pattern.length, text.length - 1]
        };
    };
    return SuffixExactMatch;
}(BaseMatch));
// Token: !.file$
var InverseSuffixExactMatch = /** @class */ (function (_super) {
    __extends(InverseSuffixExactMatch, _super);
    function InverseSuffixExactMatch(pattern) {
        return _super.call(this, pattern) || this;
    }
    Object.defineProperty(InverseSuffixExactMatch, "type", {
        get: function () {
            return 'inverse-suffix-exact';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InverseSuffixExactMatch, "multiRegex", {
        get: function () {
            return /^!"(.*)"\$$/;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InverseSuffixExactMatch, "singleRegex", {
        get: function () {
            return /^!(.*)\$$/;
        },
        enumerable: true,
        configurable: true
    });
    InverseSuffixExactMatch.prototype.search = function (text) {
        var isMatch = !text.endsWith(this.pattern);
        return {
            isMatch: isMatch,
            score: isMatch ? 0 : 1,
            matchedIndices: [0, text.length - 1]
        };
    };
    return InverseSuffixExactMatch;
}(BaseMatch));
var FuzzyMatch = /** @class */ (function (_super) {
    __extends(FuzzyMatch, _super);
    function FuzzyMatch(pattern, _b) {
        var _c = _b === void 0 ? {} : _b, _d = _c.location, location = _d === void 0 ? Config.location : _d, _e = _c.threshold, threshold = _e === void 0 ? Config.threshold : _e, _f = _c.distance, distance = _f === void 0 ? Config.distance : _f, _g = _c.includeMatches, includeMatches = _g === void 0 ? Config.includeMatches : _g, _h = _c.findAllMatches, findAllMatches = _h === void 0 ? Config.findAllMatches : _h, _j = _c.minMatchCharLength, minMatchCharLength = _j === void 0 ? Config.minMatchCharLength : _j, _k = _c.isCaseSensitive, isCaseSensitive = _k === void 0 ? Config.isCaseSensitive : _k;
        var _this = _super.call(this, pattern) || this;
        _this._bitapSearch = new BitapSearch(pattern, {
            location: location,
            threshold: threshold,
            distance: distance,
            includeMatches: includeMatches,
            findAllMatches: findAllMatches,
            minMatchCharLength: minMatchCharLength,
            isCaseSensitive: isCaseSensitive
        });
        return _this;
    }
    Object.defineProperty(FuzzyMatch, "type", {
        get: function () {
            return 'fuzzy';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FuzzyMatch, "multiRegex", {
        get: function () {
            return /^"(.*)"$/;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FuzzyMatch, "singleRegex", {
        get: function () {
            return /^(.*)$/;
        },
        enumerable: true,
        configurable: true
    });
    FuzzyMatch.prototype.search = function (text) {
        return this._bitapSearch.searchInString(text);
    };
    return FuzzyMatch;
}(BaseMatch));
// ❗Order is important. DO NOT CHANGE.
var searchers = [
    ExactMatch,
    PrefixExactMatch,
    InversePrefixExactMatch,
    InverseSuffixExactMatch,
    SuffixExactMatch,
    InverseExactMatch,
    FuzzyMatch
];
var searchersLen = searchers.length;
// Regex to split by spaces, but keep anything in quotes together
var SPACE_RE = / +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/;
var OR_TOKEN = '|';
// Return a 2D array representation of the query, for simpler parsing.
// Example:
// "^core go$ | rb$ | py$ xy$" => [["^core", "go$"], ["rb$"], ["py$", "xy$"]]
function parseQuery(pattern, options) {
    if (options === void 0) { options = {}; }
    return pattern.split(OR_TOKEN).map(function (item) {
        var query = item
            .trim()
            .split(SPACE_RE)
            .filter(function (item) { return item && !!item.trim(); });
        var results = [];
        for (var i = 0, len = query.length; i < len; i += 1) {
            var queryItem = query[i];
            // 1. Handle multiple query match (i.e, once that are quoted, like `"hello world"`)
            var found = false;
            var idx = -1;
            while (!found && ++idx < searchersLen) {
                var searcher = searchers[idx];
                var token = searcher.isMultiMatch(queryItem);
                if (token) {
                    results.push(new searcher(token, options));
                    found = true;
                }
            }
            if (found) {
                continue;
            }
            // 2. Handle single query matches (i.e, once that are *not* quoted)
            idx = -1;
            while (++idx < searchersLen) {
                var searcher = searchers[idx];
                var token = searcher.isSingleMatch(queryItem);
                if (token) {
                    results.push(new searcher(token, options));
                    break;
                }
            }
        }
        return results;
    });
}
// These extended matchers can return an array of matches, as opposed
// to a singl match
var MultiMatchSet = new Set([FuzzyMatch.type, ExactMatch.type]);
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
var ExtendedSearch = /** @class */ (function () {
    function ExtendedSearch(pattern, _b) {
        var _c = _b === void 0 ? {} : _b, _d = _c.isCaseSensitive, isCaseSensitive = _d === void 0 ? Config.isCaseSensitive : _d, _e = _c.includeMatches, includeMatches = _e === void 0 ? Config.includeMatches : _e, _f = _c.minMatchCharLength, minMatchCharLength = _f === void 0 ? Config.minMatchCharLength : _f, _g = _c.findAllMatches, findAllMatches = _g === void 0 ? Config.findAllMatches : _g, _h = _c.location, location = _h === void 0 ? Config.location : _h, _j = _c.threshold, threshold = _j === void 0 ? Config.threshold : _j, _k = _c.distance, distance = _k === void 0 ? Config.distance : _k;
        this.query = null;
        this.options = {
            isCaseSensitive: isCaseSensitive,
            includeMatches: includeMatches,
            minMatchCharLength: minMatchCharLength,
            findAllMatches: findAllMatches,
            location: location,
            threshold: threshold,
            distance: distance
        };
        this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
        this.query = parseQuery(this.pattern, this.options);
    }
    ExtendedSearch.condition = function (_, options) {
        return options.useExtendedSearch;
    };
    ExtendedSearch.prototype.searchIn = function (value) {
        var query = this.query;
        if (!query) {
            return {
                isMatch: false,
                score: 1
            };
        }
        var text = value.$;
        var _b = this.options, includeMatches = _b.includeMatches, isCaseSensitive = _b.isCaseSensitive;
        text = isCaseSensitive ? text : text.toLowerCase();
        var numMatches = 0;
        var indices = [];
        var totalScore = 0;
        // ORs
        for (var i = 0, qLen = query.length; i < qLen; i += 1) {
            var searchers_1 = query[i];
            // Reset indices
            indices.length = 0;
            numMatches = 0;
            // ANDs
            for (var j = 0, pLen = searchers_1.length; j < pLen; j += 1) {
                var searcher = searchers_1[j];
                var _c = searcher.search(text), isMatch = _c.isMatch, matchedIndices = _c.matchedIndices, score = _c.score;
                if (isMatch) {
                    numMatches += 1;
                    totalScore += score;
                    if (includeMatches) {
                        var type = searcher.constructor.type;
                        if (MultiMatchSet.has(type)) {
                            indices = __spreadArrays(indices, matchedIndices);
                        }
                        else {
                            indices.push(matchedIndices);
                        }
                    }
                }
                else {
                    totalScore = 0;
                    numMatches = 0;
                    indices.length = 0;
                    break;
                }
            }
            // OR condition, so if TRUE, return
            if (numMatches) {
                var result = {
                    isMatch: true,
                    score: totalScore / numMatches
                };
                if (includeMatches) {
                    result.matchedIndices = indices;
                }
                return result;
            }
        }
        // Nothing was matched
        return {
            isMatch: false,
            score: 1
        };
    };
    return ExtendedSearch;
}());
var SPACE = /[^ ]+/g;
function createIndex(keys, list, _b) {
    var _c = (_b === void 0 ? {} : _b).getFn, getFn = _c === void 0 ? Config.getFn : _c;
    var indexedList = [];
    // List is Array<String>
    if (isString(list[0])) {
        // Iterate over every string in the list
        for (var i = 0, len = list.length; i < len; i += 1) {
            var value = list[i];
            if (isDefined(value) && !isBlank(value)) {
                var record = {
                    $: value,
                    idx: i,
                    t: value.match(SPACE).length
                };
                indexedList.push(record);
            }
        }
    }
    else {
        // List is Array<Object>
        var keysLen = keys.length;
        for (var i = 0, len = list.length; i < len; i += 1) {
            var item = list[i];
            var record = { idx: i, $: {} };
            // Iterate over every key (i.e, path), and fetch the value at that key
            for (var j = 0; j < keysLen; j += 1) {
                var key = keys[j];
                var value = getFn(item, key);
                if (!isDefined(value)) {
                    continue;
                }
                if (isArray(value)) {
                    var subRecords = [];
                    var stack = [{ arrayIndex: -1, value: value }];
                    while (stack.length) {
                        var _d = stack.pop(), arrayIndex = _d.arrayIndex, value_1 = _d.value;
                        if (!isDefined(value_1)) {
                            continue;
                        }
                        if (isString(value_1) && !isBlank(value_1)) {
                            var subRecord = {
                                $: value_1,
                                idx: arrayIndex,
                                t: value_1.match(SPACE).length
                            };
                            subRecords.push(subRecord);
                        }
                        else if (isArray(value_1)) {
                            for (var k = 0, arrLen = value_1.length; k < arrLen; k += 1) {
                                stack.push({
                                    arrayIndex: k,
                                    value: value_1[k]
                                });
                            }
                        }
                    }
                    record.$[key] = subRecords;
                }
                else if (!isBlank(value)) {
                    var subRecord = {
                        $: value,
                        t: value.match(SPACE).length
                    };
                    record.$[key] = subRecord;
                }
            }
            indexedList.push(record);
        }
    }
    return indexedList;
}
var KeyStore = /** @class */ (function () {
    function KeyStore(keys) {
        this._keys = {};
        this._keyNames = [];
        this._length = keys.length;
        // Iterate over every key
        if (keys.length && isString(keys[0])) {
            for (var i = 0; i < this._length; i += 1) {
                var key = keys[i];
                this._keys[key] = {
                    weight: 1
                };
                this._keyNames.push(key);
            }
        }
        else {
            var totalWeight = 0;
            for (var i = 0; i < this._length; i += 1) {
                var key = keys[i];
                if (!Object.prototype.hasOwnProperty.call(key, 'name')) {
                    throw new Error('Missing "name" property in key object');
                }
                var keyName = key.name;
                this._keyNames.push(keyName);
                if (!Object.prototype.hasOwnProperty.call(key, 'weight')) {
                    throw new Error('Missing "weight" property in key object');
                }
                var weight = key.weight;
                if (weight <= 0 || weight >= 1) {
                    throw new Error('"weight" property in key must be in the range of (0, 1)');
                }
                this._keys[keyName] = {
                    weight: weight
                };
                totalWeight += weight;
            }
            // Normalize weights so that their sum is equal to 1
            for (var i = 0; i < this._length; i += 1) {
                var keyName = this._keyNames[i];
                var keyWeight = this._keys[keyName].weight;
                this._keys[keyName].weight = keyWeight / totalWeight;
            }
        }
    }
    KeyStore.prototype.get = function (key, name) {
        return this._keys[key] ? this._keys[key][name] : -1;
    };
    KeyStore.prototype.keys = function () {
        return this._keyNames;
    };
    KeyStore.prototype.count = function () {
        return this._length;
    };
    KeyStore.prototype.toJSON = function () {
        return JSON.stringify(this._keys);
    };
    return KeyStore;
}());
function transformMatches(result, data) {
    var matches = result.matches;
    data.matches = [];
    if (!isDefined(matches)) {
        return;
    }
    for (var i = 0, len = matches.length; i < len; i += 1) {
        var match = matches[i];
        if (!isDefined(match.indices) || match.indices.length === 0) {
            continue;
        }
        var obj = {
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
var registeredSearchers = [];
function register() {
    var args = [];
    for (var _b = 0; _b < arguments.length; _b++) {
        args[_b] = arguments[_b];
    }
    registeredSearchers.push.apply(registeredSearchers, args);
}
var Fuse = /** @class */ (function () {
    function Fuse(list, options, index) {
        if (options === void 0) { options = {}; }
        if (index === void 0) { index = null; }
        this.options = __assign(__assign({}, Config), options);
        this._processKeys(this.options.keys);
        this.setCollection(list, index);
    }
    Fuse.prototype.setCollection = function (list, index) {
        if (index === void 0) { index = null; }
        this.list = list;
        this.listIsStringArray = isString(list[0]);
        if (index) {
            this.setIndex(index);
        }
        else {
            this.setIndex(this._createIndex());
        }
    };
    Fuse.prototype.setIndex = function (listIndex) {
        this._indexedList = listIndex;
    };
    Fuse.prototype._processKeys = function (keys) {
        this._keyStore = new KeyStore(keys);
    };
    Fuse.prototype._createIndex = function () {
        return createIndex(this._keyStore.keys(), this.list, {
            getFn: this.options.getFn
        });
    };
    Fuse.prototype.search = function (pattern, opts) {
        if (opts === void 0) { opts = { limit: false }; }
        pattern = pattern.trim();
        if (!pattern.length) {
            return [];
        }
        var shouldSort = this.options.shouldSort;
        var searcher = null;
        for (var i = 0, len = registeredSearchers.length; i < len; i += 1) {
            var searcherClass = registeredSearchers[i];
            if (searcherClass.condition(pattern, this.options)) {
                searcher = new searcherClass(pattern, this.options);
                break;
            }
        }
        if (!searcher) {
            searcher = new BitapSearch(pattern, this.options);
        }
        var results = this._searchUsing(searcher);
        this._computeScore(results);
        if (shouldSort) {
            this._sort(results);
        }
        if (opts.limit && isNumber(opts.limit)) {
            results = results.slice(0, opts.limit);
        }
        return this._format(results);
    };
    Fuse.prototype._searchUsing = function (searcher) {
        var list = this._indexedList;
        var results = [];
        var includeMatches = this.options.includeMatches;
        // List is Array<String>
        if (this.listIsStringArray) {
            // Iterate over every string in the list
            for (var i = 0, len = list.length; i < len; i += 1) {
                var value = list[i];
                var text = value.$, idx = value.idx, t = value.t;
                if (!isDefined(text)) {
                    continue;
                }
                var searchResult = searcher.searchIn(value);
                var isMatch = searchResult.isMatch, score = searchResult.score;
                if (!isMatch) {
                    continue;
                }
                var match = { score: score, value: text, t: t };
                if (includeMatches) {
                    match.indices = searchResult.matchedIndices;
                }
                results.push({
                    item: text,
                    idx: idx,
                    matches: [match]
                });
            }
        }
        else {
            // List is Array<Object>
            var keyNames = this._keyStore.keys();
            var keysLen = this._keyStore.count();
            for (var i = 0, len = list.length; i < len; i += 1) {
                var _b = list[i], item = _b.$, idx = _b.idx;
                if (!isDefined(item)) {
                    continue;
                }
                var matches = [];
                // Iterate over every key (i.e, path), and fetch the value at that key
                for (var j = 0; j < keysLen; j += 1) {
                    var key = keyNames[j];
                    var value = item[key];
                    if (!isDefined(value)) {
                        continue;
                    }
                    if (isArray(value)) {
                        for (var k = 0, len_1 = value.length; k < len_1; k += 1) {
                            var arrItem = value[k];
                            var text = arrItem.$, idx_1 = arrItem.idx, t = arrItem.t;
                            if (!isDefined(text)) {
                                continue;
                            }
                            var searchResult = searcher.searchIn(arrItem);
                            var isMatch = searchResult.isMatch, score = searchResult.score;
                            if (!isMatch) {
                                continue;
                            }
                            var match = { score: score, key: key, value: text, idx: idx_1, t: t };
                            if (includeMatches) {
                                match.indices = searchResult.matchedIndices;
                            }
                            matches.push(match);
                        }
                    }
                    else {
                        var text = value.$, t = value.t;
                        var searchResult = searcher.searchIn(value);
                        var isMatch = searchResult.isMatch, score = searchResult.score;
                        if (!isMatch) {
                            continue;
                        }
                        var match = { score: score, key: key, value: text, t: t };
                        if (includeMatches) {
                            match.indices = searchResult.matchedIndices;
                        }
                        matches.push(match);
                    }
                }
                if (matches.length) {
                    results.push({
                        idx: idx,
                        item: item,
                        matches: matches
                    });
                }
            }
        }
        return results;
    };
    // Practical scoring function
    Fuse.prototype._computeScore = function (results) {
        var resultsLen = results.length;
        for (var i = 0; i < resultsLen; i += 1) {
            var result = results[i];
            var matches = result.matches;
            var numMatches = matches.length;
            var totalScore = 1;
            for (var j = 0; j < numMatches; j += 1) {
                var match = matches[j];
                var key = match.key, t = match.t;
                var keyWeight = this._keyStore.get(key, 'weight');
                var weight = keyWeight > -1 ? keyWeight : 1;
                var score = match.score === 0 && keyWeight > -1 ? Number.EPSILON : match.score;
                // Field-length norm: the shorter the field, the higher the weight.
                var norm = 1 / Math.sqrt(t);
                totalScore *= Math.pow(score, weight * norm);
            }
            result.score = totalScore;
        }
    };
    Fuse.prototype._sort = function (results) {
        results.sort(this.options.sortFn);
    };
    Fuse.prototype._format = function (results) {
        var finalOutput = [];
        var _b = this.options, includeMatches = _b.includeMatches, includeScore = _b.includeScore;
        var transformers = [];
        if (includeMatches)
            transformers.push(transformMatches);
        if (includeScore)
            transformers.push(transformScore);
        for (var i = 0, len = results.length; i < len; i += 1) {
            var result = results[i];
            var idx = result.idx;
            var data = {
                item: this.list[idx],
                refIndex: idx
            };
            if (transformers.length) {
                for (var j = 0, len_2 = transformers.length; j < len_2; j += 1) {
                    transformers[j](result, data);
                }
            }
            finalOutput.push(data);
        }
        return finalOutput;
    };
    return Fuse;
}());
register(ExtendedSearch);
Fuse.version = '5.2.3';
Fuse.createIndex = createIndex;
Fuse.config = Config;
var hubSuggestInputCss = ":host{-webkit-transition:all 0.15s ease-in-out 0s;transition:all 0.15s ease-in-out 0s;font-family:\"Avenir Next W01\", \"Avenir Next W00\", \"Avenir Next\", \"Avenir\", \"Helvetica Neue\", sans-serif}input[type=text]{border:none;border-bottom:2px solid grey;font-size:1.2rem;margin:5px 10px}.autocomplete{position:relative;display:inline-block}input{border:1px solid transparent;padding:10px;font-size:16px}input[type=text]{width:60%}input[type=submit]{background-color:DodgerBlue;color:#fff;cursor:pointer}input[type=submit]:hover{-webkit-box-shadow:0 8px 16px 0 rgba(0,0,0,0.2);box-shadow:0 8px 16px 0 rgba(0,0,0,0.2)}.autocomplete-items{position:absolute;border:1px solid #d4d4d4;border-bottom:none;border-top:none;z-index:99;top:100%;left:0;right:0}.autocomplete-items div{padding:10px;cursor:pointer;background-color:#fff;border-bottom:1px solid #d4d4d4}.autocomplete-items div:hover{background-color:#e9e9e9}.autocomplete-active{background-color:DodgerBlue !important;color:#ffffff}.hub-suggestions-div{position:relative}.hub-suggestions-input{width:100%}.hub-suggestions-ul{list-style:none;border:1px lightblue solid;background-color:white;position:absolute;margin:-5px 0 0 10px;padding:0;width:60%;z-index:100;color:#333}.hub-suggestions-li{line-height:1.5;padding-left:5px;font-size:1.1em}.hub-suggestions-li:hover{cursor:pointer;background-color:lightgray;color:black}.hub-suggestions-selected{background-color:lightgray;color:black}";
var HubSuggestInput = /** @class */ (function () {
    function HubSuggestInput(hostRef) {
        var _this = this;
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
        this.findMatch = function (searchTerm) {
            if (searchTerm.length === 0) {
                return [];
            }
            var indexResults = _this.fuseIndex.search(searchTerm);
            console.log("findMatch", [indexResults]);
            return indexResults.map(function (r) { return r.item.name; }).slice(0, 9);
        };
        this.onSelect = function (selection) {
            _this.inputQuery = selection;
            _this.selectedSuggestionIndex = undefined;
            _this.showSuggestions = false;
            _this.querySelect.emit(_this.inputQuery);
        };
        this.onFocus = function () {
            _this.showSuggestions = true;
            _this.selectedSuggestionIndex = undefined;
            _this.suggestionArr = _this.findMatch(_this.inputQuery);
        };
        this.onKeyDown = function (e) {
            switch (e.key) {
                case 'ArrowUp':
                    if (_this.suggestionArr.length > 0) {
                        _this.selectedSuggestionIndex =
                            (_this.selectedSuggestionIndex === undefined || _this.selectedSuggestionIndex === 0) ?
                                _this.suggestionArr.length - 1 : _this.selectedSuggestionIndex - 1;
                    }
                    break;
                case 'ArrowDown':
                    if (_this.suggestionArr.length > 0) {
                        _this.selectedSuggestionIndex =
                            (_this.selectedSuggestionIndex === undefined || _this.selectedSuggestionIndex === _this.suggestionArr.length - 1) ?
                                0 : _this.selectedSuggestionIndex + 1;
                    }
                    break;
            }
        };
        this.onKeyPress = function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                if (_this.selectedSuggestionIndex !== undefined) {
                    _this.onSelect(_this.suggestionArr[_this.selectedSuggestionIndex]);
                }
                else {
                    // User <enter> on form <input>
                    _this.onSelect(_this.inputQuery);
                }
            }
        };
        this.getSuggestionElement = function (suggestion) {
            var isSelected = _this.selectedSuggestionIndex !== undefined
                && suggestion === _this.suggestionArr[_this.selectedSuggestionIndex];
            return (h("li", { class: 'hub-suggestions-li ' + (isSelected ? 'hub-suggestions-selected' : ''), onClick: function () { return _this.onSelect(suggestion); } }, suggestion));
        };
        this.querySelect = createEvent(this, "querySelect", 7);
        this.queryInput = createEvent(this, "queryInput", 7);
    }
    HubSuggestInput.prototype.componentWillLoad = function () {
        this.inputQuery = this.query;
        this.buildIndex(this.suggestions);
        sendTelemetry({
            category: 'hub-component',
            action: 'hub-suggest-input:loaded',
            label: this.submit
        });
    };
    HubSuggestInput.prototype.buildIndex = function (suggestions) {
        var options = {
            keys: [{
                    name: 'name',
                    weight: 0.9
                }]
        };
        console.debug("Suggest Input buildIndex", suggestions);
        var db = suggestions.map(function (s) { return { "name": s }; });
        this.fuseIndex = new Fuse(db, options);
    };
    HubSuggestInput.prototype.suggestionsDidChangeHandler = function (newSuggestions) {
        console.debug("Suggest Input suggestionsDidChangeHandler", newSuggestions);
        this.buildIndex(newSuggestions);
        this.suggestionArr = this.findMatch(this.inputQuery);
        this.showSuggestions = true;
    };
    HubSuggestInput.prototype.handleWindowClick = function (e) {
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
    };
    HubSuggestInput.prototype.onInput = function (e) {
        this.inputQuery = e.target.value;
        this.queryInput.emit(this.inputQuery);
        this.onFocus();
        return 'true';
    };
    HubSuggestInput.prototype.onSubmit = function (e) {
        e.preventDefault();
        this.query = this.inputQuery;
        this.onSelect(this.query);
    };
    HubSuggestInput.prototype.render = function () {
        var _this = this;
        return (h("div", { class: 'hub-suggestions-div' }, h("slot", { name: "before-input" }), h("input", { class: 'hub-suggestions-input', type: 'text', placeholder: this.placeholder, value: this.inputQuery, onInput: function (e) { return _this.onInput(e); }, onFocus: function () { return _this.onFocus(); }, onKeyDown: function (e) { return _this.onKeyDown(e); }, onKeyPress: function (e) { return _this.onKeyPress(e); }, onSubmit: function (e) { return _this.onSubmit(e); } }), h("ul", { class: 'hub-suggestions-ul', role: 'listbox', hidden: !this.showSuggestions }, this.suggestionArr.map(function (suggestion) { return _this.getSuggestionElement(suggestion); })), h("calcite-button", { onClick: function (e) { _this.onSubmit(e); } }, this.submit)));
    };
    Object.defineProperty(HubSuggestInput.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HubSuggestInput, "watchers", {
        get: function () {
            return {
                "suggestions": ["suggestionsDidChangeHandler"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return HubSuggestInput;
}());
HubSuggestInput.style = hubSuggestInputCss;
export { CalciteButton as calcite_button, CalciteCard as calcite_card, CalciteCheckbox as calcite_checkbox, CalciteIcon as calcite_icon, CalciteLabel as calcite_label, CalciteLoader as calcite_loader, CalciteTree as calcite_tree, CalciteTreeItem as calcite_tree_item, HubCard as hub_card, HubContentCard as hub_content_card, HubFilterCategory as hub_filter_category, HubGallery as hub_gallery, HubInput as hub_input, HubMap as hub_map, HubRadar as hub_radar, HubSuggestInput as hub_suggest_input };
