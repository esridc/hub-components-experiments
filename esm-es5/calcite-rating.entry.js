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
import { h as hasLabel, g as getElementDir } from './dom-29efd1ef.js';
import { g as guid } from './guid-9ad8042d.js';
var TEXT = {
    rating: "Rating",
    stars: "stars: ${num}"
};
var calciteRatingCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]){--calcite-rating-spacing-unit:0.25rem}:host{--calcite-rating-spacing-unit:0.5rem}:host([scale=l]){--calcite-rating-spacing-unit:0.75rem}:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}:host([disabled]){pointer-events:none;opacity:0.5}:host([read-only]){pointer-events:none}.fieldset{padding:0;margin:0;border-width:0;display:inline-block}.wrapper{margin-right:var(--calcite-rating-spacing-unit)}:host([dir=rtl]) .wrapper{margin-right:0;margin-left:var(--calcite-rating-spacing-unit)}.star{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;position:relative;display:inline-block;color:var(--calcite-ui-border-1);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;-webkit-transform:scale(1);transform:scale(1);cursor:pointer}.star:active{-webkit-transform:scale(1.1);transform:scale(1.1)}.focused{outline:2px solid var(--calcite-ui-blue-1);outline-offset:2px}.average,.fraction{color:var(--calcite-ui-yellow-1)}.hovered,.selected,:host([read-only]) .average,:host([read-only]) .fraction{color:var(--calcite-ui-blue-1)}.hovered:not(.selected){-webkit-transform:scale(0.9);transform:scale(0.9)}:host .fraction{position:absolute;overflow:hidden;pointer-events:none;top:0;left:0;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host([dir=rtl]) .fraction{right:0;left:unset}calcite-chip{cursor:default;pointer-events:none}.number--average{font-weight:700}.number--count{font-style:italic;color:var(--calcite-ui-text-2)}.number--count:not(:first-child){margin-left:var(--calcite-rating-spacing-unit)}:host([dir=rtl]) .number--count:not(:first-child){margin-right:var(--calcite-rating-spacing-unit);margin-left:0}.visually-hidden{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}";
var CalciteRating = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        /** specify the scale of the component, defaults to m */
        this.scale = "m";
        /** the value of the rating component */
        this.value = 0;
        /** is the rating component in a selectable mode */
        this.readOnly = false;
        /** is the rating component in a selectable mode */
        this.disabled = false;
        /** display rating value */
        this.displayValue = false;
        /** Localized string for "Rating" (used for aria label) */
        this.intlRating = TEXT.rating;
        /** Localized string for labelling each star, `${num}` in the string will be replaced by the number */
        this.intlStars = TEXT.stars;
        this.guid = "calcite-ratings-" + guid();
        this.calciteRatingChange = createEvent(this, "calciteRatingChange", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    class_1.prototype.handleLabelFocus = function (e) {
        if (hasLabel(e.detail.labelEl, this.el) &&
            e.detail.interactedEl !== this.el &&
            !this.el.contains(e.detail.interactedEl)) {
            this.setFocus();
        }
    };
    class_1.prototype.blurHandler = function () {
        this.hasFocus = false;
    };
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    class_1.prototype.renderStars = function () {
        var _this = this;
        return [1, 2, 3, 4, 5].map(function (i) {
            var selected = _this.value >= i;
            var average = _this.average && !_this.value && i <= _this.average;
            var hovered = i <= _this.hoverValue;
            var fraction = _this.average && _this.average + 1 - i;
            var partial = !_this.value && !hovered && fraction > 0 && fraction < 1;
            var focused = _this.hasFocus && _this.focusValue === i;
            return (h("span", { class: { wrapper: true } }, h("label", { class: { star: true, focused: focused, selected: selected, average: average, hovered: hovered, partial: partial }, htmlFor: _this.guid + "-" + i, onMouseOver: function () {
                    _this.hoverValue = i;
                } }, h("calcite-icon", { "aria-hidden": "true", class: "icon", icon: selected || average || _this.readOnly ? "star-f" : "star", scale: _this.scale }), partial && (h("div", { class: "fraction", style: { width: fraction * 100 + "%" } }, h("calcite-icon", { icon: "star-f", scale: _this.scale, theme: _this.theme }))), h("span", { class: "visually-hidden" }, _this.intlStars.replace("${num}", "" + i))), h("input", { checked: i === _this.value, class: "visually-hidden", disabled: _this.disabled || _this.readOnly, id: _this.guid + "-" + i, name: _this.guid, onChange: function () { return _this.updateValue(i); }, onFocus: function () {
                    _this.hasFocus = true;
                    _this.focusValue = i;
                }, ref: function (el) { return (i === 1 || i === _this.value) && (_this.inputFocusRef = el); }, type: "radio", value: i })));
        });
    };
    class_1.prototype.render = function () {
        var _this = this;
        var _a, _b;
        var dir = getElementDir(this.el);
        return (h(Host, { dir: dir }, h("fieldset", { class: "fieldset", onBlur: function () { return (_this.hoverValue = null); }, onMouseLeave: function () { return (_this.hoverValue = null); }, onTouchEnd: function () { return (_this.hoverValue = null); } }, h("legend", { class: "visually-hidden" }, this.intlRating), this.renderStars()), this.count || this.average ? (h("calcite-chip", { dir: dir, scale: this.scale, theme: this.theme, value: (_a = this.count) === null || _a === void 0 ? void 0 : _a.toString() }, this.average && h("span", { class: "number--average" }, this.average.toString()), this.count && h("span", { class: "number--count" }, "(", (_b = this.count) === null || _b === void 0 ? void 0 :
            _b.toString(), ")"))) : null));
    };
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    class_1.prototype.updateValue = function (value) {
        this.value = value;
        this.calciteRatingChange.emit({ value: value });
    };
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    class_1.prototype.setFocus = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_c) {
                this.inputFocusRef.focus();
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
CalciteRating.style = calciteRatingCss;
export { CalciteRating as calcite_rating };
