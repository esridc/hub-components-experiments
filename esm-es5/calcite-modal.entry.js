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
import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-17d4341f.js';
import { b as focusElement, g as getElementDir } from './dom-29efd1ef.js';
import { g as getKey } from './key-6f340c70.js';
/**
 * Traverses the slots of the open shadowroots and returns all children matching the query.
 * @param {ShadowRoot | HTMLElement} root
 * @param skipNode
 * @param isMatch
 * @param {number} maxDepth
 * @param {number} depth
 * @returns {HTMLElement[]}
 */
function queryShadowRoot(root, skipNode, isMatch, maxDepth, depth) {
    if (maxDepth === void 0) { maxDepth = 20; }
    if (depth === void 0) { depth = 0; }
    var matches = [];
    // If the depth is above the max depth, abort the searching here.
    if (depth >= maxDepth) {
        return matches;
    }
    // Traverses a slot element
    var traverseSlot = function ($slot) {
        // Only check nodes that are of the type Node.ELEMENT_NODE
        // Read more here https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
        var assignedNodes = $slot.assignedNodes().filter(function (node) { return node.nodeType === 1; });
        if (assignedNodes.length > 0) {
            return queryShadowRoot(assignedNodes[0].parentElement, skipNode, isMatch, maxDepth, depth + 1);
        }
        return [];
    };
    // Go through each child and continue the traversing if necessary
    // Even though the typing says that children can't be undefined, Edge 15 sometimes gives an undefined value.
    // Therefore we fallback to an empty array if it is undefined.
    var children = Array.from(root.children || []);
    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
        var $child = children_1[_i];
        // Check if the node and its descendants should be skipped
        if (skipNode($child)) {
            continue;
        }
        // If the child matches we always add it
        if (isMatch($child)) {
            matches.push($child);
        }
        if ($child.shadowRoot != null) {
            matches.push.apply(matches, queryShadowRoot($child.shadowRoot, skipNode, isMatch, maxDepth, depth + 1));
        }
        else if ($child.tagName === "SLOT") {
            matches.push.apply(matches, traverseSlot($child));
        }
        else {
            matches.push.apply(matches, queryShadowRoot($child, skipNode, isMatch, maxDepth, depth + 1));
        }
    }
    return matches;
}
//# sourceMappingURL=shadow.js.map
/**
 * Returns whether the element is hidden.
 * @param $elem
 */
function isHidden($elem) {
    return $elem.hasAttribute("hidden")
        || ($elem.hasAttribute("aria-hidden") && $elem.getAttribute("aria-hidden") !== "false")
        // A quick and dirty way to check whether the element is hidden.
        // For a more fine-grained check we could use "window.getComputedStyle" but we don't because of bad performance.
        // If the element has visibility set to "hidden" or "collapse", display set to "none" or opacity set to "0" through CSS
        // we won't be able to catch it here. We accept it due to the huge performance benefits.
        || $elem.style.display === "none"
        || $elem.style.opacity === "0"
        || $elem.style.visibility === "hidden"
        || $elem.style.visibility === "collapse";
    // If offsetParent is null we can assume that the element is hidden
    // https://stackoverflow.com/questions/306305/what-would-make-offsetparent-null
    //|| $elem.offsetParent == null;
}
/**
 * Returns whether the element is disabled.
 * @param $elem
 */
function isDisabled($elem) {
    return $elem.hasAttribute("disabled")
        || ($elem.hasAttribute("aria-disabled") && $elem.getAttribute("aria-disabled") !== "false");
}
/**
 * Determines whether an element is focusable.
 * Read more here: https://stackoverflow.com/questions/1599660/which-html-elements-can-receive-focus/1600194#1600194
 * Or here: https://stackoverflow.com/questions/18261595/how-to-check-if-a-dom-element-is-focusable
 * @param $elem
 */
function isFocusable($elem) {
    // Discard elements that are removed from the tab order.
    if ($elem.getAttribute("tabindex") === "-1" || isHidden($elem) || isDisabled($elem)) {
        return false;
    }
    return (
    // At this point we know that the element can have focus (eg. won't be -1) if the tabindex attribute exists
    $elem.hasAttribute("tabindex")
        // Anchor tags or area tags with a href set
        || ($elem instanceof HTMLAnchorElement || $elem instanceof HTMLAreaElement) && $elem.hasAttribute("href")
        // Form elements which are not disabled
        || ($elem instanceof HTMLButtonElement
            || $elem instanceof HTMLInputElement
            || $elem instanceof HTMLTextAreaElement
            || $elem instanceof HTMLSelectElement)
        // IFrames
        || $elem instanceof HTMLIFrameElement);
}
//# sourceMappingURL=focusable.js.map
var calciteModalCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{position:fixed;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;overflow-y:hidden;color:var(--calcite-ui-text-2);opacity:0;visibility:hidden !important;-webkit-transition:visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);z-index:101;--calcite-modal-padding:0.75rem;--calcite-modal-padding-large:1rem;--calcite-modal-title-text:var(--calcite-font-size-2);--calcite-modal-content-text:var(--calcite-font-size-0)}:host([scale=s]){--calcite-modal-padding:0.5rem;--calcite-modal-padding-large:0.75rem;--calcite-modal-title-text:var(--calcite-font-size-1);--calcite-modal-content-text:var(--calcite-font-size--1)}:host([scale=l]){--calcite-modal-padding:1rem;--calcite-modal-padding-large:1.25rem;--calcite-modal-title-text:var(--calcite-font-size-3);--calcite-modal-content-text:var(--calcite-font-size-1)}.scrim{position:fixed;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;overflow-y:hidden}.modal{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-webkit-box-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);box-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);-webkit-box-sizing:border-box;box-sizing:border-box;float:none;margin:1.5rem;border-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);width:100%;z-index:102;-webkit-overflow-scrolling:touch;opacity:0;visibility:hidden;pointer-events:none;-webkit-transition:visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);-webkit-transform:translate3d(0, 20px, 0);transform:translate3d(0, 20px, 0)}:host([is-active]){opacity:1;visibility:visible !important;-webkit-transition-delay:0ms;transition-delay:0ms}:host([is-active]) .modal{opacity:1;pointer-events:auto;visibility:visible;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-webkit-transition:visibility 0ms linear, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:visibility 0ms linear, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);-webkit-transition-delay:0ms;transition-delay:0ms}.header{display:-ms-flexbox;display:flex;max-width:100%;min-width:0;border-top-left-radius:0.25rem;border-top-right-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);-ms-flex:0 0 auto;flex:0 0 auto;z-index:2;border-bottom:1px solid}.close{margin:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-style:none;color:var(--calcite-ui-text-1);-ms-flex-order:2;order:2;cursor:pointer;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;padding:var(--calcite-modal-padding);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;background-color:transparent;border-radius:0 var(--calcite-border-radius) 0 0}.close calcite-icon{pointer-events:none;vertical-align:-2px}.close:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}.close:hover,.close:focus{background-color:var(--calcite-ui-foreground-2)}.close:active{background-color:var(--calcite-ui-foreground-3)}:host([dir=rtl]) .close{border-radius:var(--calcite-border-radius) 0 0 0}.title{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-order:1;order:1;min-width:0;-ms-flex:1 1 auto;flex:1 1 auto;padding:var(--calcite-modal-padding) var(--calcite-modal-padding-large)}slot[name=header]::slotted(*),*::slotted([slot=header]){margin:0;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1);font-size:var(--calcite-modal-title-text)}.content{position:relative;padding:0;height:100%;overflow:auto;display:block;background-color:var(--calcite-ui-foreground-1);-webkit-box-sizing:border-box;box-sizing:border-box;max-height:calc(100vh - 12rem);z-index:1}.content--spaced{padding:var(--calcite-modal-padding-large)}slot[name=content]::slotted(*),*::slotted([slot=content]){font-size:var(--calcite-modal-content-text);line-height:1.5}:host([background-color=grey]) .content{background-color:var(--calcite-ui-background)}.footer{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;margin-top:auto;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom-right-radius:0.25rem;border-bottom-left-radius:0.25rem;width:100%;background-color:var(--calcite-ui-foreground-1);-ms-flex:0 0 auto;flex:0 0 auto;padding:var(--calcite-modal-padding);border-top:1px solid var(--calcite-ui-border-3);z-index:2}.footer--hide-back .back,.footer--hide-secondary .secondary{display:none}.back{display:block;margin-right:auto}:host([dir=rtl]) .back{margin-left:auto;margin-right:0}.secondary{display:block;margin-left:0.25rem;margin-right:0.25rem}slot[name=primary]{display:block}:host([width=small]) .modal{width:auto}:host([width=s]) .modal{max-width:32rem}@media screen and (max-width: 35rem){:host([width=s]) .modal{height:100%;max-height:100%;width:100%;max-width:100%;margin:0;border-radius:0}:host([width=s]) .content{-ms-flex:1 1 auto;flex:1 1 auto;max-height:unset}:host([width=s][docked]){-ms-flex-align:end;align-items:flex-end}}:host([width=m]) .modal{max-width:48rem}@media screen and (max-width: 51rem){:host([width=m]) .modal{height:100%;max-height:100%;width:100%;max-width:100%;margin:0;border-radius:0}:host([width=m]) .content{-ms-flex:1 1 auto;flex:1 1 auto;max-height:unset}:host([width=m][docked]){-ms-flex-align:end;align-items:flex-end}}:host([width=l]) .modal{max-width:94rem}@media screen and (max-width: 97rem){:host([width=l]) .modal{height:100%;max-height:100%;width:100%;max-width:100%;margin:0;border-radius:0}:host([width=l]) .content{-ms-flex:1 1 auto;flex:1 1 auto;max-height:unset}:host([width=l][docked]){-ms-flex-align:end;align-items:flex-end}}:host([fullscreen]){background-color:transparent}:host([fullscreen]) .modal{height:100%;max-height:100%;width:100%;max-width:100%;margin:0;-webkit-transform:translate3D(0, 20px, 0) scale(0.95);transform:translate3D(0, 20px, 0) scale(0.95)}:host([fullscreen]) .content{max-height:100%;-ms-flex:1 1 auto;flex:1 1 auto}:host([is-active][fullscreen]) .modal{-webkit-transform:translate3D(0, 0, 0) scale(1);transform:translate3D(0, 0, 0) scale(1)}:host([is-active][fullscreen]) .header{border-radius:0}:host([is-active][fullscreen]) .footer{border-radius:0}:host([docked]) .modal{height:auto}:host([docked]) .content{height:auto;-ms-flex:1 1 auto;flex:1 1 auto}@media screen and (max-width: 860px){:host([docked]) .modal{border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}:host([docked]) .close{border-radius:0 var(--calcite-border-radius) 0 0}}@media screen and (max-width: 860px){:host([docked][dir=rtl]) .close{border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}}:host([color=red]) .modal{border-top:4px solid var(--calcite-ui-red-1)}:host([color=blue]) .modal{border-top:4px solid var(--calcite-ui-blue-1)}:host([color=red]) .header,:host([color=blue]) .header{border-radius:0.25rem}@media screen and (max-width: 860px){slot[name=header]::slotted(*),*::slotted([slot=header]){font-size:var(--calcite-font-size-1)}.footer{position:-webkit-sticky;position:sticky;bottom:0}}@media screen and (max-width: 480px){.footer{-ms-flex-direction:column;flex-direction:column}:host([dir=rtl]) .back,.back,.secondary{margin:0;margin-bottom:0.25rem}}";
function isCalciteFocusable(el) {
    return typeof el.setFocus === "function" || isFocusable(el);
}
function getFocusableElements(el) {
    return queryShadowRoot(el, isHidden, isCalciteFocusable);
}
var CalciteModal = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        /** Optionally pass a function to run before close */
        this.beforeClose = function () { return Promise.resolve(); };
        /** Aria label for the close button */
        this.intlClose = "Close";
        /** specify the scale of modal, defaults to m */
        this.scale = "m";
        /** Set the width of the modal. Can use stock sizes or pass a number (in pixels) */
        this.width = "m";
        /** Background color of modal content */
        this.backgroundColor = "white";
        /** Close the modal, first running the `beforeClose` method */
        this.close = function () {
            return _this.beforeClose(_this.el).then(function () {
                _this.active = false;
                _this.isActive = false;
                focusElement(_this.previousActiveElement);
                _this.removeOverflowHiddenClass();
                setTimeout(function () { return _this.calciteModalClose.emit(); }, 300);
            });
        };
        this.focusFirstElement = function () {
            focusElement(_this.closeButtonEl);
        };
        this.focusLastElement = function () {
            var focusableElements = getFocusableElements(_this.el).filter(function (el) { return !el.getAttribute("data-focus-fence"); });
            if (focusableElements.length > 0) {
                focusElement(focusableElements[focusableElements.length - 1]);
            }
            else {
                focusElement(_this.closeButtonEl);
            }
        };
        this.calciteModalOpen = createEvent(this, "calciteModalOpen", 7);
        this.calciteModalClose = createEvent(this, "calciteModalClose", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    class_1.prototype.componentWillLoad = function () {
        // when modal initially renders, if active was set we need to open as watcher doesn't fire
        if (this.active) {
            this.open();
        }
    };
    class_1.prototype.disconnectedCallback = function () {
        this.removeOverflowHiddenClass();
    };
    class_1.prototype.render = function () {
        var _this = this;
        var dir = getElementDir(this.el);
        return (h(Host, { "aria-modal": "true", dir: dir, "is-active": this.isActive, role: "dialog" }, h("calcite-scrim", { class: "scrim", theme: "dark" }), this.renderStyle(), h("div", { class: "modal" }, h("div", { "data-focus-fence": true, onFocus: this.focusLastElement, tabindex: "0" }), h("div", { class: "header" }, this.renderCloseButton(), h("header", { class: "title" }, h("slot", { name: "header" }))), h("div", { class: {
                content: true,
                "content--spaced": !this.noPadding
            }, ref: function (el) { return (_this.modalContent = el); } }, h("slot", { name: "content" })), this.renderFooter(), h("div", { "data-focus-fence": true, onFocus: this.focusFirstElement, tabindex: "0" }))));
    };
    class_1.prototype.renderFooter = function () {
        return this.el.querySelector("[slot=back], [slot=secondary], [slot=primary]") ? (h("div", { class: "footer" }, h("span", { class: "back" }, h("slot", { name: "back" })), h("span", { class: "secondary" }, h("slot", { name: "secondary" })), h("span", { class: "primary" }, h("slot", { name: "primary" })))) : null;
    };
    class_1.prototype.renderCloseButton = function () {
        var _this = this;
        return !this.disableCloseButton ? (h("button", { "aria-label": this.intlClose, class: "close", onClick: this.close, ref: function (el) { return (_this.closeButtonEl = el); }, title: this.intlClose }, h("calcite-icon", { icon: "x", scale: "l" }))) : null;
    };
    class_1.prototype.renderStyle = function () {
        var hasCustomWidth = !isNaN(parseInt("" + this.width));
        return hasCustomWidth ? (h("style", null, "\n        .modal {\n          max-width: " + this.width + "px;\n        }\n        @media screen and (max-width: " + this.width + "px) {\n          .modal {\n            height: 100%;\n            max-height: 100%;\n            width: 100%;\n            max-width: 100%;\n            margin: 0;\n            border-radius: 0;\n          }\n          .content {\n            flex: 1 1 auto;\n            max-height: unset;\n          }\n        }\n      ")) : null;
    };
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    class_1.prototype.handleEscape = function (e) {
        if (this.active && !this.disableEscape && getKey(e.key) === "Escape") {
            this.close();
        }
    };
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    /** Focus first interactive element */
    class_1.prototype.focusElement = function (el) {
        return __awaiter(this, void 0, void 0, function () {
            var focusableElements;
            return __generator(this, function (_a) {
                if (el) {
                    focusElement(el);
                    return [2 /*return*/];
                }
                focusableElements = getFocusableElements(this.el);
                if (focusableElements.length > 0) {
                    focusElement(focusableElements[0]);
                }
                else {
                    focusElement(this.closeButtonEl);
                }
                return [2 /*return*/];
            });
        });
    };
    /** Set the scroll top of the modal content */
    class_1.prototype.scrollContent = function (top, left) {
        if (top === void 0) { top = 0; }
        if (left === void 0) { left = 0; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.modalContent) {
                    if (this.modalContent.scrollTo) {
                        this.modalContent.scrollTo({ top: top, left: left, behavior: "smooth" });
                    }
                    else {
                        this.modalContent.scrollTop = top;
                        this.modalContent.scrollLeft = left;
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    class_1.prototype.toggleModal = function (value, oldValue) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (value !== oldValue) {
                    if (value) {
                        this.open();
                    }
                    else if (!value) {
                        this.close();
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    /** Open the modal */
    class_1.prototype.open = function () {
        var _this = this;
        this.previousActiveElement = document.activeElement;
        this.isActive = true;
        // wait for the modal to open, then handle focus.
        setTimeout(function () {
            _this.focusElement(_this.firstFocus);
            _this.calciteModalOpen.emit();
        }, 300);
        document.documentElement.classList.add("overflow-hidden");
    };
    class_1.prototype.removeOverflowHiddenClass = function () {
        document.documentElement.classList.remove("overflow-hidden");
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "active": ["toggleModal"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
CalciteModal.style = calciteModalCss;
export { CalciteModal as calcite_modal };
