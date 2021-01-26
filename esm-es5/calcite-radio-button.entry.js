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
import { g as guid } from './guid-9ad8042d.js';
var calciteRadioButtonCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}.sc-calcite-radio-button:root{--calcite-popper-transition:150ms ease-in-out}[hidden].sc-calcite-radio-button-h{display:none}[theme=dark].sc-calcite-radio-button-h,[theme=dark] .sc-calcite-radio-button-h{--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}.sc-calcite-radio-button-h{cursor:pointer;display:inline-block}[labeled].sc-calcite-radio-button-h{--calcite-label-margin-bottom:0;-ms-flex-align:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;gap:8px}[disabled].sc-calcite-radio-button-h{cursor:default}.sc-calcite-radio-button-h[disabled]>.sc-calcite-radio-button-s>calcite-label{cursor:default}[scale=s][labeled].sc-calcite-radio-button-h{line-height:1.33;margin-bottom:8px;margin-right:12px}@supports not (display: grid){[scale=s][labeled].sc-calcite-radio-button-h calcite-radio.sc-calcite-radio-button{margin-right:8px}}[scale=m][labeled].sc-calcite-radio-button-h{line-height:1.15;margin-bottom:8px;margin-right:16px}@supports not (display: grid){[scale=m][labeled].sc-calcite-radio-button-h calcite-radio.sc-calcite-radio-button{margin-right:8px}}[scale=l][labeled].sc-calcite-radio-button-h{gap:12px;line-height:1.2;margin-bottom:10px;margin-right:20px}@supports not (display: grid){[scale=l][labeled].sc-calcite-radio-button-h calcite-radio.sc-calcite-radio-button{margin-right:12px}}[hidden].sc-calcite-radio-button-h{display:none}";
var CalciteRadioButton = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        /** The checked state of the radio button. */
        this.checked = false;
        /** The disabled state of the radio button. */
        this.disabled = false;
        /** The focused state of the radio button. */
        this.focused = false;
        /** The radio button's hidden status.  When a radio button is hidden it is not focusable or checkable. */
        this.hidden = false;
        /** The hovered state of the radio button. */
        this.hovered = false;
        /** Requires that a value is selected for the radio button group before the parent form will submit. */
        this.required = false;
        /** The scale (size) of the radio button.  <code>scale</code> is passed as a property automatically from <code>calcite-radio-button-group</code>. */
        this.scale = "m";
        /** The color theme of the radio button, <code>theme</code> is passed as a property automatically from <code>calcite-radio-button-group</code>. */
        this.theme = "light";
        this.formResetHandler = function () {
            var _a;
            _this.checked = _this.initialChecked;
            _this.initialChecked && ((_a = _this.input) === null || _a === void 0 ? void 0 : _a.setAttribute("checked", ""));
        };
        this.onInputBlur = function () {
            _this.focused = false;
            _this.calciteRadioButtonFocusedChange.emit();
        };
        this.onInputFocus = function () {
            _this.focused = true;
            _this.calciteRadioButtonFocusedChange.emit();
        };
        this.calciteRadioButtonChange = createEvent(this, "calciteRadioButtonChange", 7);
        this.calciteRadioButtonCheckedChange = createEvent(this, "calciteRadioButtonCheckedChange", 7);
        this.calciteRadioButtonFocusedChange = createEvent(this, "calciteRadioButtonFocusedChange", 7);
    }
    class_1.prototype.checkedChanged = function (newChecked) {
        if (newChecked) {
            this.uncheckOtherRadioButtonsInGroup();
        }
        if (this.input) {
            this.input.checked = newChecked;
        }
        this.calciteRadioButtonCheckedChange.emit(newChecked);
    };
    class_1.prototype.disabledChanged = function (disabled) {
        this.input.disabled = disabled;
    };
    class_1.prototype.focusedChanged = function (focused) {
        if (!this.input)
            return;
        if (focused && !this.el.hasAttribute("hidden")) {
            this.input.focus();
        }
        else {
            this.input.blur();
        }
    };
    class_1.prototype.hiddenChanged = function (newHidden) {
        this.input.hidden = newHidden;
    };
    class_1.prototype.nameChanged = function (newName) {
        if (this.name === newName) {
            return;
        }
        if (this.input) {
            this.input.name = newName;
        }
        this.checkLastRadioButton();
        var currentValue = this.rootNode.querySelector("input[name=\"" + this.name + "\"]:checked");
        if (!(currentValue === null || currentValue === void 0 ? void 0 : currentValue.value)) {
            this.uncheckAllRadioButtonsInGroup();
        }
    };
    class_1.prototype.requiredChanged = function (required) {
        this.input.required = required;
    };
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    class_1.prototype.checkLastRadioButton = function () {
        var _this = this;
        var radioButtons = Array.from(this.rootNode.querySelectorAll("calcite-radio-button")).filter(function (radioButton) { return radioButton.name === _this.name; });
        var checkedRadioButtons = radioButtons.filter(function (radioButton) { return radioButton.checked; });
        if ((checkedRadioButtons === null || checkedRadioButtons === void 0 ? void 0 : checkedRadioButtons.length) > 1) {
            var lastCheckedRadioButton_1 = checkedRadioButtons[checkedRadioButtons.length - 1];
            checkedRadioButtons
                .filter(function (checkedRadioButton) { return checkedRadioButton !== lastCheckedRadioButton_1; })
                .forEach(function (checkedRadioButton) {
                checkedRadioButton.checked = false;
                checkedRadioButton.emitCheckedChange();
            });
        }
    };
    /** @internal */
    class_1.prototype.emitCheckedChange = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                this.calciteRadioButtonCheckedChange.emit();
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.uncheckAllRadioButtonsInGroup = function () {
        var _this = this;
        var otherRadioButtons = Array.from(this.rootNode.querySelectorAll("calcite-radio-button")).filter(function (radioButton) { return radioButton.name === _this.name; });
        otherRadioButtons.forEach(function (otherRadioButton) {
            if (otherRadioButton.checked) {
                otherRadioButton.checked = false;
                otherRadioButton.focused = false;
            }
        });
    };
    class_1.prototype.uncheckOtherRadioButtonsInGroup = function () {
        var _this = this;
        var otherRadioButtons = Array.from(this.rootNode.querySelectorAll("calcite-radio-button")).filter(function (radioButton) { return radioButton.name === _this.name && radioButton.guid !== _this.guid; });
        otherRadioButtons.forEach(function (otherRadioButton) {
            if (otherRadioButton.checked) {
                otherRadioButton.checked = false;
                otherRadioButton.focused = false;
            }
        });
    };
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    class_1.prototype.check = function (event) {
        // Prevent parent label from clicking the first radio when calcite-radio-button is clicked
        if (this.el.closest("label") && (event.target === this.el || event.target === this.radio)) {
            event.preventDefault();
        }
        if (!this.disabled && !this.hidden) {
            this.uncheckOtherRadioButtonsInGroup();
            this.checked = true;
            this.focused = true;
            this.calciteRadioButtonChange.emit();
        }
    };
    class_1.prototype.mouseenter = function () {
        this.hovered = true;
    };
    class_1.prototype.mouseleave = function () {
        this.hovered = false;
    };
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    class_1.prototype.connectedCallback = function () {
        this.rootNode = this.el.getRootNode();
        this.guid = this.el.id || "calcite-radio-button-" + guid();
        this.initialChecked = this.checked;
        if (this.name) {
            this.checkLastRadioButton();
        }
        var form = this.el.closest("form");
        if (form) {
            form.addEventListener("reset", this.formResetHandler);
        }
    };
    class_1.prototype.componentDidLoad = function () {
        if (this.focused) {
            this.input.focus();
        }
    };
    class_1.prototype.disconnectedCallback = function () {
        var form = this.el.closest("form");
        if (form) {
            form.removeEventListener("reset", this.formResetHandler);
        }
    };
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    class_1.prototype.renderLabel = function () {
        if (this.el.textContent) {
            return (h("calcite-label", { dir: getElementDir(this.el), "disable-spacing": true, disabled: this.disabled, for: this.guid + "-input", layout: "inline", scale: this.scale }, h("slot", null)));
        }
        return h("slot", null);
    };
    class_1.prototype.render = function () {
        var _this = this;
        var inputStyle = { opacity: "0", position: "fixed", zIndex: "-1" };
        return (h(Host, { labeled: !!this.el.textContent }, h("input", { "aria-label": this.value || this.guid, checked: this.checked, disabled: this.disabled, hidden: this.hidden, id: this.guid + "-input", name: this.name, onBlur: this.onInputBlur, onFocus: this.onInputFocus, ref: function (el) { return (_this.input = el); }, required: this.required, style: inputStyle, type: "radio", value: this.value }), h("calcite-radio", { checked: this.checked, disabled: this.disabled, focused: this.focused, hidden: this.hidden, hovered: this.hovered, ref: function (el) { return (_this.radio = el); }, scale: this.scale, theme: this.theme }), this.renderLabel()));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "checked": ["checkedChanged"],
                "disabled": ["disabledChanged"],
                "focused": ["focusedChanged"],
                "hidden": ["hiddenChanged"],
                "name": ["nameChanged"],
                "required": ["requiredChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
CalciteRadioButton.style = calciteRadioButtonCss;
export { CalciteRadioButton as calcite_radio_button };
