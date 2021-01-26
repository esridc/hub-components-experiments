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
import { d as getElementProp, b as focusElement, g as getElementDir } from './dom-29efd1ef.js';
var CSS = {
    icon: "icon",
    iconContainer: "icon-container",
    select: "select"
};
var calciteSelectCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{--calcite-icon-size:1rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex;position:relative;width:var(--select-width);--calcite-select-spacing-end:2rem}:host([scale=s]){--calcite-select-font-size:var(--calcite-font-size--2);--calcite-select-spacing:0.5rem}:host([scale=m]){--calcite-select-font-size:var(--calcite-font-size--1);--calcite-select-spacing:0.75rem}:host([scale=l]){--calcite-select-font-size:var(--calcite-font-size-1);--calcite-select-spacing:1rem}:host([width=auto]){--select-width:auto}:host([width=half]){--select-width:50%}:host([width=full]){--select-width:100%}.select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--calcite-ui-foreground-1);border:solid 1px var(--calcite-ui-border-1);border-right:none;border-radius:0;color:var(--calcite-ui-text-2);cursor:pointer;font-family:inherit;font-size:var(--calcite-select-font-size);margin:0;padding:var(--calcite-select-spacing);padding-right:var(--calcite-select-spacing-end);width:100%;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.select:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}.select:hover{background-color:var(--calcite-ui-foreground-2)}:host([dir=rtl]) .select{padding-left:var(--calcite-select-spacing-end);padding-right:var(--calcite-select-spacing);border-right:solid 1px var(--calcite-ui-border-1);border-left:none}select:disabled{border-color:var(--calcite-ui-border-1);opacity:1}:host([disabled]){pointer-events:none;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}.icon-container{-ms-flex-align:center;align-items:center;background-color:transparent;border:solid 1px var(--calcite-ui-border-1);border-left:none;color:var(--calcite-ui-text-2);display:-ms-flexbox;display:flex;padding:0 var(--calcite-spacing-half);pointer-events:none;position:absolute;right:0;bottom:0;top:0}:host([dir=rtl]) .icon-container{border-left:solid 1px var(--calcite-ui-border-1);border-right:none;right:unset;left:0}.select:focus~.icon-container{border-color:transparent}";
function isOption(optionOrGroup) {
    return optionOrGroup.tagName === "CALCITE-OPTION";
}
function isOptionGroup(optionOrGroup) {
    return optionOrGroup.tagName === "CALCITE-OPTION-GROUP";
}
var CalciteSelect = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        /**
         * When true, it prevents the option from being selected.
         */
        this.disabled = false;
        /**
         * The component scale.
         */
        this.scale = "m";
        /**
         * The component width.
         */
        this.width = "auto";
        this.componentToNativeEl = new Map();
        this.mutationObserver = new MutationObserver(function () { return _this.populateInternalSelect(); });
        this.handleInternalSelectChange = function () {
            var selected = _this.selectEl.selectedOptions[0];
            _this.selectFromNativeOption(selected);
            requestAnimationFrame(function () { return _this.emitChangeEvent(); });
        };
        this.populateInternalSelect = function () {
            var optionsAndGroups = Array.from(_this.el.children);
            _this.clearInternalSelect();
            optionsAndGroups.forEach(function (optionOrGroup) { var _a; return (_a = _this.selectEl) === null || _a === void 0 ? void 0 : _a.append(_this.toNativeElement(optionOrGroup)); });
        };
        this.storeSelectRef = function (node) {
            _this.selectEl = node;
            _this.populateInternalSelect();
            var selected = _this.selectEl.selectedOptions[0];
            _this.selectFromNativeOption(selected);
        };
        this.emitChangeEvent = function () {
            _this.calciteSelectChange.emit();
        };
        this.calciteSelectChange = createEvent(this, "calciteSelectChange", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    class_1.prototype.connectedCallback = function () {
        var el = this.el;
        this.mutationObserver.observe(el, {
            subtree: true,
            childList: true
        });
        if (!this.theme)
            this.theme = getElementProp(this.el, "theme", "light");
    };
    class_1.prototype.disconnectedCallback = function () {
        this.mutationObserver.disconnect();
    };
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    class_1.prototype.setFocus = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                focusElement(this.selectEl);
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.handleOptionOrGroupChange = function (event) {
        event.stopPropagation();
        var optionOrGroup = event.target;
        var nativeEl = this.componentToNativeEl.get(optionOrGroup);
        if (!nativeEl) {
            return;
        }
        this.updateNativeElements(optionOrGroup, nativeEl);
        if (isOption(optionOrGroup) && optionOrGroup.selected) {
            this.deselectAllExcept(optionOrGroup);
        }
    };
    class_1.prototype.handleLabelFocus = function (event) {
        var _b = event.detail, requestedInput = _b.requestedInput, labelEl = _b.labelEl;
        var el = this.el;
        if (labelEl.contains(el) || (requestedInput && requestedInput === el.getAttribute("id"))) {
            this.setFocus();
            event.stopImmediatePropagation();
        }
    };
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    class_1.prototype.updateNativeElements = function (optionOrGroup, nativeOptionOrGroup) {
        nativeOptionOrGroup.disabled = optionOrGroup.disabled;
        nativeOptionOrGroup.label = optionOrGroup.label;
        if (isOption(optionOrGroup)) {
            var option = nativeOptionOrGroup;
            option.selected = optionOrGroup.selected;
            option.value = optionOrGroup.value;
        }
    };
    class_1.prototype.clearInternalSelect = function () {
        this.componentToNativeEl.forEach(function (value) { return value.remove(); });
        this.componentToNativeEl.clear();
    };
    class_1.prototype.selectFromNativeOption = function (nativeOption) {
        var _this = this;
        if (!nativeOption) {
            return;
        }
        var futureSelected;
        this.componentToNativeEl.forEach(function (nativeOptionOrGroup, optionOrGroup) {
            if (isOption(optionOrGroup) && nativeOptionOrGroup === nativeOption) {
                optionOrGroup.selected = true;
                futureSelected = optionOrGroup;
                _this.deselectAllExcept(optionOrGroup);
            }
        });
        if (futureSelected) {
            requestAnimationFrame(function () { return (_this.selectedOption = futureSelected); });
        }
    };
    class_1.prototype.toNativeElement = function (optionOrGroup) {
        var _this = this;
        if (isOption(optionOrGroup)) {
            var option = document.createElement("option");
            option.disabled = optionOrGroup.disabled;
            option.label = optionOrGroup.label;
            option.selected = optionOrGroup.selected;
            option.value = optionOrGroup.value;
            this.componentToNativeEl.set(optionOrGroup, option);
            return option;
        }
        if (isOptionGroup(optionOrGroup)) {
            var group_1 = document.createElement("optgroup");
            group_1.disabled = optionOrGroup.disabled;
            group_1.label = optionOrGroup.label;
            Array.from(optionOrGroup.children).forEach(function (option) {
                var nativeOption = _this.toNativeElement(option);
                group_1.append(nativeOption);
                _this.componentToNativeEl.set(optionOrGroup, nativeOption);
            });
            this.componentToNativeEl.set(optionOrGroup, group_1);
            return group_1;
        }
        throw new Error("unsupported element child provided");
    };
    class_1.prototype.deselectAllExcept = function (except) {
        this.el.querySelectorAll("calcite-option").forEach(function (option) {
            if (option === except) {
                return;
            }
            option.selected = false;
        });
    };
    //--------------------------------------------------------------------------
    //
    //  Render Methods
    //
    //--------------------------------------------------------------------------
    class_1.prototype.renderChevron = function () {
        var _b;
        return (h("div", { class: (_b = {}, _b[CSS.iconContainer] = true, _b) }, h("calcite-icon", { class: CSS.icon, icon: "chevron-down", scale: "s" })));
    };
    class_1.prototype.render = function () {
        var _b;
        var dir = getElementDir(this.el);
        return (h(Host, { dir: dir }, h("select", { "aria-label": this.label, class: (_b = {}, _b[CSS.select] = true, _b), disabled: this.disabled, onChange: this.handleInternalSelectChange, ref: this.storeSelectRef }, h("slot", null)), this.renderChevron()));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
CalciteSelect.style = calciteSelectCss;
export { CalciteSelect as calcite_select };
