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
import { g as getElementDir } from './dom-29efd1ef.js';
var CSS = {
    header: "header",
    heading: "heading",
    close: "close",
    container: "container",
    tipContainer: "tip-container",
    tipContainerAdvancing: "tip-container--advancing",
    tipContainerRetreating: "tip-container--retreating",
    pagination: "pagination",
    pagePosition: "page-position",
    pageNext: "page-next",
    pagePrevious: "page-previous"
};
var ICONS = {
    chevronLeft: "chevron-left",
    chevronRight: "chevron-right",
    close: "x"
};
var TEXT = {
    defaultGroupTitle: "Tips",
    defaultPaginationLabel: "Tip",
    close: "Close",
    previous: "Previous",
    next: "Next"
};
var calciteTipManagerCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block;--calcite-tip-manager-height:18vh;--calcite-tip-max-width:540px}:host([closed]){display:none}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;color:var(--calcite-ui-text-2);fill:var(--calcite-ui-text-2)}.heading{padding:0;margin:0;font-weight:var(--calcite-font-weight-medium);line-height:1.5}.header .heading{-ms-flex:1 0 auto;flex:1 0 auto;padding:var(--calcite-spacing-half) var(--calcite-spacing-half)}h1.heading{font-size:var(--calcite-font-size-2)}h2.heading{font-size:var(--calcite-font-size-1)}h3.heading{font-size:var(--calcite-font-size-0)}h4.heading,h5.heading{font-size:var(--calcite-font-size--1)}.header .heading{padding-left:var(--calcite-spacing-half);padding-right:var(--calcite-spacing-half)}.container{overflow:hidden;position:relative;padding:var(--calcite-spacing-half) var(--calcite-spacing-half) 0;min-height:150px;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.container:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:2px}.tip-container{-webkit-animation-name:none;animation-name:none;-webkit-animation-duration:150ms;animation-duration:150ms;-webkit-animation-timing-function:cubic-bezier(0.215, 0.44, 0.42, 0.88);animation-timing-function:cubic-bezier(0.215, 0.44, 0.42, 0.88);height:var(--calcite-tip-manager-height);margin-top:var(--calcite-spacing-quarter);overflow:auto;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:start;align-items:flex-start;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.tip-container:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:2px}::slotted(calcite-tip){border:none;max-width:var(--calcite-tip-max-width)}.tip-container--advancing{-webkit-animation-name:tip-advance;animation-name:tip-advance}.tip-container--retreating{-webkit-animation-name:tip-retreat;animation-name:tip-retreat}.pagination{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:var(--calcite-spacing-quarter) 0}.page-position{font-size:0.75rem;line-height:1.5;margin:0 var(--calcite-spacing-half)}@-webkit-keyframes tip-advance{0%{opacity:0;-webkit-transform:translate3d(50px, 0, 0) scale(0.99);transform:translate3d(50px, 0, 0) scale(0.99)}100%{opacity:1;-webkit-transform:translate3d(0, 0, 0) scale(1);transform:translate3d(0, 0, 0) scale(1)}}@keyframes tip-advance{0%{opacity:0;-webkit-transform:translate3d(50px, 0, 0) scale(0.99);transform:translate3d(50px, 0, 0) scale(0.99)}100%{opacity:1;-webkit-transform:translate3d(0, 0, 0) scale(1);transform:translate3d(0, 0, 0) scale(1)}}@-webkit-keyframes tip-retreat{0%{opacity:0;-webkit-transform:translate3d(-50px, 0, 0) scale(0.99);transform:translate3d(-50px, 0, 0) scale(0.99)}100%{opacity:1;-webkit-transform:translate3d(0, 0, 0) scale(1);transform:translate3d(0, 0, 0) scale(1)}}@keyframes tip-retreat{0%{opacity:0;-webkit-transform:translate3d(-50px, 0, 0) scale(0.99);transform:translate3d(-50px, 0, 0) scale(0.99)}100%{opacity:1;-webkit-transform:translate3d(0, 0, 0) scale(1);transform:translate3d(0, 0, 0) scale(1)}}";
var CalciteTipManager = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        /**
         * Alternate text for closing the `calcite-tip-manager`.
         */
        this.closed = false;
        this.observer = new MutationObserver(function () { return _this.setUpTips(); });
        this.hideTipManager = function () {
            _this.closed = true;
            _this.calciteTipManagerToggle.emit();
        };
        this.previousClicked = function () {
            _this.previousTip();
        };
        this.nextClicked = function () {
            _this.nextTip();
        };
        this.tipManagerKeyUpHandler = function (event) {
            if (event.target !== _this.container) {
                return;
            }
            switch (event.key) {
                case "ArrowRight":
                    event.preventDefault();
                    _this.nextTip();
                    break;
                case "ArrowLeft":
                    event.preventDefault();
                    _this.previousTip();
                    break;
                case "Home":
                    event.preventDefault();
                    _this.selectedIndex = 0;
                    break;
                case "End":
                    event.preventDefault();
                    _this.selectedIndex = _this.total - 1;
                    break;
            }
        };
        this.storeContainerRef = function (el) {
            _this.container = el;
        };
        this.calciteTipManagerToggle = createEvent(this, "calciteTipManagerToggle", 7);
    }
    class_1.prototype.closedChangeHandler = function () {
        this.direction = null;
        this.calciteTipManagerToggle.emit();
    };
    class_1.prototype.selectedChangeHandler = function () {
        this.showSelectedTip();
        this.updateGroupTitle();
    };
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    class_1.prototype.connectedCallback = function () {
        this.setUpTips();
        this.observer.observe(this.el, { childList: true, subtree: true });
    };
    class_1.prototype.disconnectedCallback = function () {
        this.observer.disconnect();
    };
    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------
    class_1.prototype.nextTip = function () {
        return __awaiter(this, void 0, void 0, function () {
            var nextIndex;
            return __generator(this, function (_a) {
                this.direction = "advancing";
                nextIndex = this.selectedIndex + 1;
                this.selectedIndex = (nextIndex + this.total) % this.total;
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.previousTip = function () {
        return __awaiter(this, void 0, void 0, function () {
            var previousIndex;
            return __generator(this, function (_a) {
                this.direction = "retreating";
                previousIndex = this.selectedIndex - 1;
                this.selectedIndex = (previousIndex + this.total) % this.total;
                return [2 /*return*/];
            });
        });
    };
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    class_1.prototype.setUpTips = function () {
        var tips = Array.from(this.el.querySelectorAll("calcite-tip"));
        this.total = tips.length;
        if (this.total === 0) {
            return;
        }
        var selectedTip = this.el.querySelector("calcite-tip[selected]");
        this.tips = tips;
        this.selectedIndex = selectedTip ? tips.indexOf(selectedTip) : 0;
        tips.forEach(function (tip) {
            tip.nonDismissible = true;
        });
        this.showSelectedTip();
        this.updateGroupTitle();
    };
    class_1.prototype.showSelectedTip = function () {
        var _this = this;
        this.tips.forEach(function (tip, index) {
            var isSelected = _this.selectedIndex === index;
            tip.selected = isSelected;
            tip.hidden = !isSelected;
        });
    };
    class_1.prototype.updateGroupTitle = function () {
        var selectedTip = this.tips[this.selectedIndex];
        var tipParent = selectedTip.closest("calcite-tip-group");
        this.groupTitle = (tipParent === null || tipParent === void 0 ? void 0 : tipParent.groupTitle) || this.intlDefaultTitle || TEXT.defaultGroupTitle;
    };
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    class_1.prototype.renderPagination = function () {
        var dir = getElementDir(this.el);
        var _a = this, selectedIndex = _a.selectedIndex, tips = _a.tips, total = _a.total, intlNext = _a.intlNext, intlPrevious = _a.intlPrevious, intlPaginationLabel = _a.intlPaginationLabel;
        var nextLabel = intlNext || TEXT.next;
        var previousLabel = intlPrevious || TEXT.previous;
        var paginationLabel = intlPaginationLabel || TEXT.defaultPaginationLabel;
        return tips.length > 1 ? (h("footer", { class: CSS.pagination }, h("calcite-action", { class: CSS.pagePrevious, icon: dir === "ltr" ? ICONS.chevronLeft : ICONS.chevronRight, onClick: this.previousClicked, text: previousLabel }), h("span", { class: CSS.pagePosition }, paginationLabel + " " + (selectedIndex + 1) + "/" + total), h("calcite-action", { class: CSS.pageNext, icon: dir === "ltr" ? ICONS.chevronRight : ICONS.chevronLeft, onClick: this.nextClicked, text: nextLabel }))) : null;
    };
    class_1.prototype.render = function () {
        var _a;
        var _b = this, closed = _b.closed, direction = _b.direction, groupTitle = _b.groupTitle, selectedIndex = _b.selectedIndex, intlClose = _b.intlClose, total = _b.total;
        var closeLabel = intlClose || TEXT.close;
        if (total === 0) {
            return h(Host, null);
        }
        return (h(Host, null, h("section", { "aria-hidden": closed.toString(), class: CSS.container, hidden: closed, onKeyUp: this.tipManagerKeyUpHandler, ref: this.storeContainerRef, tabIndex: 0 }, h("header", { class: CSS.header }, h("h2", { class: CSS.heading, key: selectedIndex }, groupTitle), h("calcite-action", { class: CSS.close, icon: ICONS.close, onClick: this.hideTipManager, text: closeLabel })), h("div", { class: (_a = {},
                _a[CSS.tipContainer] = true,
                _a[CSS.tipContainerAdvancing] = !closed && direction === "advancing",
                _a[CSS.tipContainerRetreating] = !closed && direction === "retreating",
                _a), key: selectedIndex, tabIndex: 0 }, h("slot", null)), this.renderPagination())));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "closed": ["closedChangeHandler"],
                "selectedIndex": ["selectedChangeHandler"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
CalciteTipManager.style = calciteTipManagerCss;
export { CalciteTipManager as calcite_tip_manager };
