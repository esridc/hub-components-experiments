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
import { d as getElementProp } from './dom-29efd1ef.js';
var TEXT = {
    intlEnablingEditing: "Click to edit",
    intlCancelEditing: "Cancel",
    intlConfirmChanges: "Save"
};
var calciteInlineEditableCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}.sc-calcite-inline-editable:root{--calcite-popper-transition:150ms ease-in-out}[hidden].sc-calcite-inline-editable-h{display:none}[scale=s].sc-calcite-inline-editable-h .calcite-inline-editable-controls-wrapper.sc-calcite-inline-editable{height:32px}[scale=m].sc-calcite-inline-editable-h .calcite-inline-editable-controls-wrapper.sc-calcite-inline-editable{height:44px}[scale=l].sc-calcite-inline-editable-h .calcite-inline-editable-controls-wrapper.sc-calcite-inline-editable{height:56px}.sc-calcite-inline-editable-h:not([editing-enabled]) .calcite-inline-editable-wrapper.sc-calcite-inline-editable:hover{background:var(--calcite-ui-foreground-2)}.calcite-inline-editable-wrapper.sc-calcite-inline-editable{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;background:var(--calcite-ui-foreground-1)}.calcite-inline-editable-wrapper.sc-calcite-inline-editable .calcite-inline-editable-input-wrapper.sc-calcite-inline-editable{-ms-flex:1;flex:1}.calcite-inline-editable-controls-wrapper.sc-calcite-inline-editable{display:-ms-flexbox;display:flex}.calcite-inline-editable-cancel-editing-button-wrapper.sc-calcite-inline-editable{border:1px solid var(--calcite-ui-border-1);border-left:none;border-right:none}[disabled].sc-calcite-inline-editable-h .calcite-inline-editable-cancel-editing-button-wrapper.sc-calcite-inline-editable{border-color:var(--calcite-ui-border-2)}.sc-calcite-inline-editable-h.sc-calcite-inline-editable-s .calcite-input-element-wrapper textarea,.sc-calcite-inline-editable-h.sc-calcite-inline-editable-s .calcite-input-element-wrapper input{-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}.sc-calcite-inline-editable-h:not([editing-enabled]):not([theme=dark]).sc-calcite-inline-editable-s .calcite-input-element-wrapper{background:transparent}.sc-calcite-inline-editable-h:not([editing-enabled]).sc-calcite-inline-editable-s .sc-calcite-input{display:none}.sc-calcite-inline-editable-h:not([editing-enabled]).sc-calcite-inline-editable-s .calcite-input-element-wrapper{display:-ms-flexbox;display:flex;cursor:pointer}.sc-calcite-inline-editable-h:not([editing-enabled]).sc-calcite-inline-editable-s .calcite-input-element-wrapper textarea,.sc-calcite-inline-editable-h:not([editing-enabled]).sc-calcite-inline-editable-s .calcite-input-element-wrapper input{border-color:transparent;padding-left:0;cursor:pointer;display:-ms-flexbox;display:flex}.sc-calcite-inline-editable-h:not([editing-enabled]):hover.sc-calcite-inline-editable-s textarea,.sc-calcite-inline-editable-h:not([editing-enabled]):hover.sc-calcite-inline-editable-s input{background:var(--calcite-ui-foreground-2)}.sc-calcite-inline-editable-h[dir=rtl]:not([editing-enabled]).sc-calcite-inline-editable-s .calcite-input-element-wrapper textarea,.sc-calcite-inline-editable-h[dir=rtl]:not([editing-enabled]).sc-calcite-inline-editable-s .calcite-input-element-wrapper input{padding-right:0;padding-left:unset}[dir=rtl] .sc-calcite-inline-editable-h:not([editing-enabled]).sc-calcite-inline-editable-s .calcite-input-element-wrapper textarea,[dir=rtl] .sc-calcite-inline-editable-h:not([editing-enabled]).sc-calcite-inline-editable-s .calcite-input-element-wrapper input{padding-right:0;padding-left:unset}";
var CalciteInlineEditable = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Props
        //
        //--------------------------------------------------------------------------
        /** specify whether editing can be enabled */
        this.disabled = false;
        /** specify whether the wrapped input element is editable, defaults to false */
        this.editingEnabled = false;
        /** specify whether the confirm button should display a loading state, defaults to false */
        this.loading = false;
        /** specify whether save/cancel controls should be displayed when editingEnabled is true, defaults to false */
        this.controls = false;
        /** specify text to be user for the enable editing button's aria-label, defaults to `Click to edit` */
        this.intlEnableEditing = TEXT.intlEnablingEditing;
        /** specify text to be user for the cancel editing button's aria-label, defaults to `Cancel` */
        this.intlCancelEditing = TEXT.intlCancelEditing;
        /** specify text to be user for the confirm changes button's aria-label, defaults to `Save` */
        this.intlConfirmChanges = TEXT.intlConfirmChanges;
        this.enableEditing = function () {
            _this.htmlInput.tabIndex = undefined;
            _this.valuePriorToEditing = _this.inputElement.value;
            _this.editingEnabled = true;
            _this.inputElement.setFocus();
            _this.calciteInlineEditableEnableEditingChange.emit();
        };
        this.disableEditing = function () {
            _this.htmlInput.tabIndex = -1;
            _this.editingEnabled = false;
        };
        this.cancelEditing = function () {
            _this.inputElement.value = _this.valuePriorToEditing;
            _this.disableEditing();
            setTimeout(function () { return _this.enableEditingButton.setFocus(); }, 100);
            _this.calciteInlineEditableEditingCancel.emit();
        };
        this.escapeKeyHandler = function (e) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (e.key !== "Escape")
                    return [2 /*return*/];
                this.cancelEditing();
                return [2 /*return*/];
            });
        }); };
        this.cancelEditingHandler = function (e) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                e.preventDefault();
                e.stopPropagation();
                this.cancelEditing();
                return [2 /*return*/];
            });
        }); };
        this.enableEditingHandler = function (e) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                e.preventDefault();
                e.stopPropagation();
                if (this.disabled)
                    return [2 /*return*/];
                if (!this.editingEnabled)
                    this.enableEditing();
                return [2 /*return*/];
            });
        }); };
        this.confirmChangesHandler = function (e) { return __awaiter(_this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.preventDefault();
                        e.stopPropagation();
                        this.calciteInlineEditableChangesConfirm.emit();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 6]);
                        if (!this.afterConfirm) return [3 /*break*/, 3];
                        this.loading = true;
                        return [4 /*yield*/, this.afterConfirm()];
                    case 2:
                        _a.sent();
                        this.disableEditing();
                        _a.label = 3;
                    case 3: return [3 /*break*/, 6];
                    case 4:
                        e_1 = _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        this.loading = false;
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        this.calciteInlineEditableEditingCancel = createEvent(this, "calciteInlineEditableEditingCancel", 7);
        this.calciteInlineEditableChangesConfirm = createEvent(this, "calciteInlineEditableChangesConfirm", 7);
        this.calciteInlineEditableEnableEditingChange = createEvent(this, "calciteInlineEditableEnableEditingChange", 7);
    }
    class_1.prototype.disabledWatcher = function (disabled) {
        this.inputElement.disabled = disabled;
    };
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    class_1.prototype.componentWillLoad = function () {
        this.inputElement = this.el.querySelector("calcite-input");
        this.inputElement.disabled = this.disabled;
        this.scale =
            this.scale || this.inputElement.scale || getElementProp(this.el, "scale", undefined);
        this.theme =
            this.theme || this.inputElement.theme || getElementProp(this.el, "theme", undefined);
    };
    class_1.prototype.componentDidLoad = function () {
        this.htmlInput = this.inputElement.querySelector("input");
        if (!this.editingEnabled)
            this.htmlInput.tabIndex = -1;
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (h(Host, null, h("div", { class: "calcite-inline-editable-wrapper", onClick: this.enableEditingHandler, onKeyDown: this.escapeKeyHandler }, h("div", { class: "calcite-inline-editable-input-wrapper" }, h("slot", null)), h("div", { class: "calcite-inline-editable-controls-wrapper" }, !this.editingEnabled && (h("calcite-button", { appearance: "transparent", "aria-label": this.intlEnableEditing, class: "calcite-inline-editable-enable-editing-button", color: "dark", disabled: this.disabled, iconStart: "pencil", onClick: this.enableEditingHandler, ref: function (el) { return (_this.enableEditingButton = el); }, scale: this.scale, theme: this.theme })), this.shouldShowControls && [
            h("div", { class: "calcite-inline-editable-cancel-editing-button-wrapper" }, h("calcite-button", { appearance: "transparent", "aria-label": this.intlCancelEditing, class: "calcite-inline-editable-cancel-editing-button", color: "dark", disabled: this.disabled, iconStart: "x", onClick: this.cancelEditingHandler, scale: this.scale, theme: this.theme })),
            h("calcite-button", { appearance: "solid", "aria-label": this.intlConfirmChanges, class: "calcite-inline-editable-confirm-changes-button", color: "blue", disabled: this.disabled, iconStart: "check", loading: this.loading, onClick: this.confirmChangesHandler, scale: this.scale, theme: this.theme })
        ]))));
    };
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    class_1.prototype.blurHandler = function () {
        if (!this.controls)
            this.disableEditing();
    };
    class_1.prototype.handleLabelFocus = function (e) {
        var htmlTarget = e.target;
        if (!(htmlTarget.parentElement.tagName === "LABEL" ||
            htmlTarget.parentElement.tagName === "CALCITE-LABEL"))
            return;
        if (!htmlTarget.parentElement.contains(this.el))
            return;
        e.preventDefault();
        e.stopPropagation();
        if (this.editingEnabled) {
            this.inputElement.setFocus();
        }
        else {
            this.enableEditingButton.setFocus();
        }
    };
    Object.defineProperty(class_1.prototype, "shouldShowControls", {
        //--------------------------------------------------------------------------
        //
        //  Private Methods
        //
        //--------------------------------------------------------------------------
        get: function () {
            return this.editingEnabled && this.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "disabled": ["disabledWatcher"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
CalciteInlineEditable.style = calciteInlineEditableCss;
export { CalciteInlineEditable as calcite_inline_editable };
