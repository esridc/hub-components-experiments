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
import { b as focusElement, a as getSlotted, g as getElementDir } from './dom-29efd1ef.js';
import { C as CSS_UTILITY } from './resources-c23b068d.js';
import { g as getRoundRobinIndex } from './array-e627ad50.js';
var CSS = {
    backButton: "back-button",
    container: "container",
    header: "header",
    heading: "heading",
    summary: "summary",
    headerContent: "header-content",
    headerActions: "header-actions",
    headerActionsEnd: "header-actions--end",
    headerActionsStart: "header-actions--start",
    contentContainer: "content-container",
    fabContainer: "fab-container",
    footer: "footer",
    menuContainer: "menu-container",
    menuButton: "menu-button",
    menu: "menu",
    menuOpen: "menu--open"
};
var ICONS = {
    close: "x",
    menu: "ellipsis",
    backLeft: "chevron-left",
    backRight: "chevron-right"
};
var SLOTS = {
    headerActionsStart: "header-actions-start",
    headerActionsEnd: "header-actions-end",
    headerMenuActions: "header-menu-actions",
    headerContent: "header-content",
    fab: "fab",
    footer: "footer",
    footerActions: "footer-actions"
};
var TEXT = {
    back: "Back",
    close: "Close",
    open: "Open",
    options: "Options"
};
var calcitePanelCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;position:relative;max-height:var(--calcite-panel-max-height);width:var(--calcite-panel-width);max-width:var(--calcite-panel-max-width);min-width:var(--calcite-panel-min-width);-webkit-transition:max-height 150ms ease-in-out, width 150ms ease-in-out;transition:max-height 150ms ease-in-out, width 150ms ease-in-out;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3);--calcite-panel-max-height:unset;--calcite-panel-width:100%;--calcite-panel-min-width:unset;--calcite-panel-max-width:unset}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;color:var(--calcite-ui-text-2);fill:var(--calcite-ui-text-2)}.heading{padding:0;margin:0;font-weight:var(--calcite-font-weight-medium);line-height:1.5}.header .heading{-ms-flex:1 0 auto;flex:1 0 auto;padding:var(--calcite-spacing-half) var(--calcite-spacing-half)}h1.heading{font-size:var(--calcite-font-size-2)}h2.heading{font-size:var(--calcite-font-size-1)}h3.heading{font-size:var(--calcite-font-size-0)}h4.heading,h5.heading{font-size:var(--calcite-font-size--1)}.container{-ms-flex-align:stretch;align-items:stretch;background-color:var(--calcite-ui-background);height:100%;width:100%;padding:0;margin:0;display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column}calcite-scrim{-ms-flex-align:stretch;align-items:stretch;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;pointer-events:none}:host([height-scale=s]){--calcite-panel-max-height:40vh}:host([height-scale=m]){--calcite-panel-max-height:60vh}:host([height-scale=l]){--calcite-panel-max-height:80vh}:host([width-scale=s]){--calcite-panel-width:12vw;--calcite-panel-max-width:300px;--calcite-panel-min-width:150px}:host([width-scale=m]){--calcite-panel-width:20vw;--calcite-panel-max-width:420px;--calcite-panel-min-width:240px}:host([width-scale=l]){--calcite-panel-width:45vw;--calcite-panel-max-width:680px;--calcite-panel-min-width:340px}.container[hidden]{display:none}:host([loading]) .container,:host([disabled]) .container{position:relative;z-index:1}.header{-ms-flex-align:stretch;align-items:stretch;background-color:var(--calcite-ui-foreground-1);-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-pack:start;justify-content:flex-start;min-height:var(--calcite-header-min-height);position:-webkit-sticky;position:sticky;top:0;z-index:2;border-bottom:1px solid var(--calcite-ui-border-3);width:100%}.header-content{display:block;overflow:hidden;margin-right:auto;padding:var(--calcite-spacing) var(--calcite-spacing-three-quarters)}.header-content .heading,.header-content .summary{padding:0;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.header-content .heading{font-weight:var(--calcite-font-weight-medium);margin:0 0 var(--calcite-spacing-quarter);font-size:var(--calcite-font-size-0)}.header-content .heading:only-child{margin-bottom:0}.header-content .summary{color:var(--calcite-ui-text-3);font-size:var(--calcite-font-size--2)}.header-actions{-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap}.menu-container:only-child{margin-left:auto}.menu-button{-ms-flex-item-align:stretch;align-self:stretch;-ms-flex:0 1 auto;flex:0 1 auto;height:100%;position:relative}.menu{min-width:var(--calcite-menu-min-width);-ms-flex-flow:column nowrap;flex-flow:column nowrap}.content-container{-ms-flex-align:stretch;align-items:stretch;background-color:var(--calcite-ui-background);display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex:1 1 auto;flex:1 1 auto;overflow:auto}.footer{background-color:var(--calcite-ui-foreground-1);border-top:1px solid var(--calcite-ui-border-3);display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-pack:space-evenly;justify-content:space-evenly;min-height:var(--calcite-footer-min-height);padding:var(--calcite-spacing-half) var(--calcite-spacing-half);position:-webkit-sticky;position:sticky;bottom:0;width:100%}.calcite--rtl .header-content{margin-left:auto;margin-right:unset}.calcite--rtl .menu-container:only-child{margin-left:unset;margin-right:auto}.fab-container{position:-webkit-sticky;position:sticky;z-index:1;bottom:0;display:inline-block;margin:0 auto;padding:var(--calcite-spacing-half) var(--calcite-spacing-half);left:0;right:0}";
var SUPPORTED_ARROW_KEYS = ["ArrowUp", "ArrowDown"];
var CalcitePanel = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        /**
         * Hides the panel.
         */
        this.dismissed = false;
        /**
         * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
         */
        this.disabled = false;
        /**
         * Displays a close button in the trailing side of the header.
         */
        this.dismissible = false;
        /**
         * Shows a back button in the header.
         */
        this.showBackButton = false;
        /**
         * When true, content is waiting to be loaded. This state shows a busy indicator.
         */
        this.loading = false;
        /**
         * 'Options' text string for the actions menu.
         */
        this.intlOptions = TEXT.options;
        /**
         * Opens the action menu.
         */
        this.menuOpen = false;
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.setContainerRef = function (node) {
            _this.containerEl = node;
        };
        this.setMenuButonRef = function (node) {
            _this.menuButtonEl = node;
        };
        this.setDismissRef = function (node) {
            _this.dismissButtonEl = node;
        };
        this.setBackRef = function (node) {
            _this.backButtonEl = node;
        };
        this.panelKeyUpHandler = function (event) {
            if (event.key === "Escape") {
                _this.dismiss();
            }
        };
        this.dismiss = function () {
            _this.dismissed = true;
        };
        this.panelScrollHandler = function () {
            _this.calcitePanelScroll.emit();
        };
        this.backButtonClick = function () {
            _this.calcitePanelBackClick.emit();
        };
        this.toggleMenuOpen = function () {
            _this.menuOpen = !_this.menuOpen;
        };
        this.menuButtonKeyDown = function (event) {
            var key = event.key;
            var menuOpen = _this.menuOpen;
            if (!_this.isValidKey(key, SUPPORTED_ARROW_KEYS)) {
                return;
            }
            var actions = _this.queryActions();
            var length = actions.length;
            if (!length) {
                return;
            }
            event.preventDefault();
            if (!menuOpen) {
                _this.menuOpen = true;
            }
            if (key === "ArrowUp") {
                var lastAction = actions[length - 1];
                focusElement(lastAction);
            }
            if (key === "ArrowDown") {
                var firstAction = actions[0];
                focusElement(firstAction);
            }
        };
        this.menuActionsKeydown = function (event) {
            var key = event.key, target = event.target;
            if (!_this.isValidKey(key, SUPPORTED_ARROW_KEYS)) {
                return;
            }
            var actions = _this.queryActions();
            var length = actions.length;
            var currentIndex = actions.indexOf(target);
            if (!length || currentIndex === -1) {
                return;
            }
            event.preventDefault();
            if (key === "ArrowUp") {
                var value = getRoundRobinIndex(currentIndex - 1, length);
                var previousAction = actions[value];
                focusElement(previousAction);
            }
            if (key === "ArrowDown") {
                var value = getRoundRobinIndex(currentIndex + 1, length);
                var nextAction = actions[value];
                focusElement(nextAction);
            }
        };
        this.menuActionsContainerKeyDown = function (event) {
            var key = event.key;
            if (key === "Escape") {
                _this.menuOpen = false;
            }
        };
        this.calcitePanelDismissedChange = createEvent(this, "calcitePanelDismissedChange", 7);
        this.calcitePanelScroll = createEvent(this, "calcitePanelScroll", 7);
        this.calcitePanelBackClick = createEvent(this, "calcitePanelBackClick", 7);
    }
    class_1.prototype.dismissedHandler = function () {
        this.calcitePanelDismissedChange.emit();
    };
    class_1.prototype.queryActions = function () {
        return getSlotted(this.el, SLOTS.headerActionsEnd, {
            all: true
        });
    };
    class_1.prototype.isValidKey = function (key, supportedKeys) {
        return !!supportedKeys.find(function (k) { return k === key; });
    };
    // --------------------------------------------------------------------------
    //
    //  Methods
    //
    // --------------------------------------------------------------------------
    class_1.prototype.setFocus = function (focusId) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                if (focusId === "dismiss-button") {
                    (_a = this.dismissButtonEl) === null || _a === void 0 ? void 0 : _a.setFocus();
                    return [2 /*return*/];
                }
                if (focusId === "back-button") {
                    (_b = this.backButtonEl) === null || _b === void 0 ? void 0 : _b.setFocus();
                    return [2 /*return*/];
                }
                (_c = this.containerEl) === null || _c === void 0 ? void 0 : _c.focus();
                return [2 /*return*/];
            });
        });
    };
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    class_1.prototype.renderBackButton = function () {
        var el = this.el;
        var rtl = getElementDir(el) === "rtl";
        var _d = this, showBackButton = _d.showBackButton, intlBack = _d.intlBack, backButtonClick = _d.backButtonClick;
        var label = intlBack || TEXT.back;
        var icon = rtl ? ICONS.backRight : ICONS.backLeft;
        return showBackButton ? (h("calcite-action", { "aria-label": label, class: CSS.backButton, icon: icon, key: "back-button", onClick: backButtonClick, ref: this.setBackRef, scale: "s", slot: SLOTS.headerActionsStart, text: label })) : null;
    };
    class_1.prototype.renderHeaderContent = function () {
        var _d = this, heading = _d.heading, summary = _d.summary;
        var headingNode = heading ? h("h3", { class: CSS.heading }, heading) : null;
        var summaryNode = summary ? h("span", { class: CSS.summary }, summary) : null;
        return headingNode || summaryNode ? (h("div", { class: CSS.headerContent, key: "header-content" }, headingNode, summaryNode)) : null;
    };
    /**
     * Allows user to override the entire header-content node.
     */
    class_1.prototype.renderHeaderSlottedContent = function () {
        return (h("div", { class: CSS.headerContent, key: "header-content" }, h("slot", { name: SLOTS.headerContent })));
    };
    class_1.prototype.renderHeaderStartActions = function () {
        var _d;
        var el = this.el;
        var hasStartActions = getSlotted(el, SLOTS.headerActionsStart);
        return hasStartActions ? (h("div", { class: (_d = {}, _d[CSS.headerActionsStart] = true, _d[CSS.headerActions] = true, _d), key: "header-actions-start" }, h("slot", { name: SLOTS.headerActionsStart }))) : null;
    };
    class_1.prototype.renderHeaderActionsEnd = function () {
        var _d;
        var _e = this, dismiss = _e.dismiss, dismissible = _e.dismissible, el = _e.el, intlClose = _e.intlClose;
        var text = intlClose || TEXT.close;
        var dismissibleNode = dismissible ? (h("calcite-action", { "aria-label": text, icon: ICONS.close, onClick: dismiss, ref: this.setDismissRef, text: text })) : null;
        var slotNode = h("slot", { name: SLOTS.headerActionsEnd });
        var hasEndActions = getSlotted(el, SLOTS.headerActionsEnd);
        return hasEndActions || dismissibleNode ? (h("div", { class: (_d = {}, _d[CSS.headerActionsEnd] = true, _d[CSS.headerActions] = true, _d), key: "header-actions-end" }, slotNode, dismissibleNode)) : null;
    };
    class_1.prototype.renderMenuItems = function () {
        var _d = this, menuOpen = _d.menuOpen, menuButtonEl = _d.menuButtonEl, intlOptions = _d.intlOptions;
        return (h("calcite-popover", { disablePointer: true, flipPlacements: ["bottom-end", "top-end"], label: intlOptions, offsetDistance: 0, onKeyDown: this.menuActionsKeydown, open: menuOpen, placement: "bottom-end", referenceElement: menuButtonEl }, h("div", { class: CSS.menu }, h("slot", { name: SLOTS.headerMenuActions }))));
    };
    class_1.prototype.renderMenuButton = function () {
        var _d = this, menuOpen = _d.menuOpen, intlOpen = _d.intlOpen, intlClose = _d.intlClose;
        var closeLabel = intlClose || TEXT.close;
        var openLabel = intlOpen || TEXT.open;
        var menuLabel = menuOpen ? closeLabel : openLabel;
        return (h("calcite-action", { "aria-label": menuLabel, class: CSS.menuButton, icon: ICONS.menu, onClick: this.toggleMenuOpen, onKeyDown: this.menuButtonKeyDown, ref: this.setMenuButonRef, text: menuLabel }));
    };
    class_1.prototype.renderMenu = function () {
        var el = this.el;
        var hasMenuItems = getSlotted(el, SLOTS.headerMenuActions);
        return hasMenuItems ? (h("div", { class: CSS.menuContainer, onKeyDown: this.menuActionsContainerKeyDown }, this.renderMenuButton(), this.renderMenuItems())) : null;
    };
    class_1.prototype.renderHeaderNode = function () {
        var _d = this, el = _d.el, showBackButton = _d.showBackButton;
        var backButtonNode = this.renderBackButton();
        var hasHeaderSlottedContent = getSlotted(el, SLOTS.headerContent);
        var headerContentNode = hasHeaderSlottedContent
            ? this.renderHeaderSlottedContent()
            : this.renderHeaderContent();
        var actionsNodeStart = this.renderHeaderStartActions();
        var actionsNodeEnd = this.renderHeaderActionsEnd();
        var headerMenuNode = this.renderMenu();
        return actionsNodeStart ||
            headerContentNode ||
            actionsNodeEnd ||
            headerMenuNode ||
            showBackButton ? (h("header", { class: CSS.header }, backButtonNode, actionsNodeStart, headerContentNode, actionsNodeEnd, headerMenuNode)) : null;
    };
    /**
     * Allows user to override the entire footer node.
     */
    class_1.prototype.renderFooterSlottedContent = function () {
        var el = this.el;
        var hasFooterSlottedContent = getSlotted(el, SLOTS.footer);
        return hasFooterSlottedContent ? (h("footer", { class: CSS.footer }, h("slot", { name: SLOTS.footer }))) : null;
    };
    class_1.prototype.renderFooterActions = function () {
        var el = this.el;
        var hasFooterActions = getSlotted(el, SLOTS.footerActions);
        return hasFooterActions ? (h("footer", { class: CSS.footer }, h("slot", { name: SLOTS.footerActions }))) : null;
    };
    class_1.prototype.renderContent = function () {
        return (h("section", { class: CSS.contentContainer, onScroll: this.panelScrollHandler, tabIndex: 0 }, h("slot", null), this.renderFab()));
    };
    class_1.prototype.renderFab = function () {
        var el = this.el;
        var hasFab = getSlotted(el, SLOTS.fab);
        return hasFab ? (h("div", { class: CSS.fabContainer }, h("slot", { name: SLOTS.fab }))) : null;
    };
    class_1.prototype.render = function () {
        var _d;
        var _e = this, dismissed = _e.dismissed, disabled = _e.disabled, dismissible = _e.dismissible, el = _e.el, loading = _e.loading, panelKeyUpHandler = _e.panelKeyUpHandler;
        var rtl = getElementDir(el) === "rtl";
        var panelNode = (h("article", { "aria-busy": loading.toString(), class: (_d = {},
                _d[CSS.container] = true,
                _d[CSS_UTILITY.rtl] = rtl,
                _d), hidden: dismissible && dismissed, onKeyUp: panelKeyUpHandler, ref: this.setContainerRef, tabIndex: dismissible ? 0 : -1 }, this.renderHeaderNode(), this.renderContent(), this.renderFooterSlottedContent() || this.renderFooterActions()));
        return (h(Host, null, loading || disabled ? (h("calcite-scrim", { loading: loading }, panelNode)) : (panelNode)));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "dismissed": ["dismissedHandler"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
CalcitePanel.style = calcitePanelCss;
export { CalcitePanel as calcite_panel };
