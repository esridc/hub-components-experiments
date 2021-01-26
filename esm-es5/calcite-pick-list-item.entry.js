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
import { a as getSlotted } from './dom-29efd1ef.js';
import { I as ICON_TYPES } from './resources-8903dad2.js';
import { T as TEXT, C as CSS, I as ICONS, S as SLOTS } from './resources-68a36a83.js';
var calcitePickListItemCss = "@charset \"UTF-8\";@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex;margin:0 0 1px 0;color:var(--calcite-ui-text-1);-webkit-transition:background-color 150ms ease-in-out;transition:background-color 150ms ease-in-out;-webkit-animation:calcite-fade-in 150ms ease-in-out;animation:calcite-fade-in 150ms ease-in-out;-webkit-box-shadow:0 1px 0 var(--calcite-ui-border-3);box-shadow:0 1px 0 var(--calcite-ui-border-3);--calcite-icon-dot-size:16px}:host(:hover){background-color:var(--calcite-ui-foreground-2)}.icon{-ms-flex-align:center;align-items:center;color:var(--calcite-ui-brand);display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;line-height:0;margin:0 var(--calcite-spacing-half);opacity:0}.icon-dot{width:calc(var(--calcite-icon-dot-size) / 2);margin:calc(var(--calcite-icon-dot-size) / 2)}.icon-dot:before{content:\"•\"}:host([selected]) .icon{-webkit-transition:opacity 150ms ease-in-out;transition:opacity 150ms ease-in-out;opacity:1}.label{background-color:transparent;display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;padding:var(--calcite-spacing-three-quarters);-ms-flex-align:center;align-items:center;cursor:pointer;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.label:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}.text-container{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;overflow:hidden;pointer-events:none;padding:0 var(--calcite-spacing-quarter)}.title{font-size:0.75rem;line-height:1.5;word-wrap:break-word;word-break:break-word;color:var(--calcite-ui-text-1)}.description{color:var(--calcite-ui-text-3);font-family:var(--calcite-code-family);margin-top:var(--calcite-spacing-quarter);font-size:0.75rem;line-height:1.5;word-wrap:break-word;word-break:break-word}.actions{-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;justify-self:flex-end;margin:0}.actions--start~.label{padding-left:var(--calcite-spacing-quarter)}.calcite--rtl .actions--start~.label{padding-left:unset;padding-right:var(--calcite-spacing-quarter)}";
var CalcitePickListItem = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        /**
         * When true, the item cannot be clicked and is visually muted.
         */
        this.disabled = false;
        /**
         * When false, the item cannot be deselected by user interaction.
         */
        this.disableDeselect = false;
        /**
         * Determines the icon SVG symbol that will be shown. Options are circle, square, grid or null.
         */
        this.icon = null;
        /**
         * Set this to true to display a remove action that removes the item from the list.
         */
        this.removable = false;
        /**
         * Set this to true to pre-select an item. Toggles when an item is checked/unchecked.
         */
        this.selected = false;
        /**
         * The text for the remove item buttons. Only applicable if removable is true.
         */
        this.intlRemove = TEXT.remove;
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.pickListClickHandler = function (event) {
            if (_this.disabled || (_this.disableDeselect && _this.selected)) {
                return;
            }
            _this.shiftPressed = event.shiftKey;
            _this.selected = !_this.selected;
        };
        this.pickListKeyDownHandler = function (event) {
            if (event.key === " ") {
                event.preventDefault();
                if (_this.disableDeselect && _this.selected) {
                    return;
                }
                _this.selected = !_this.selected;
            }
        };
        this.removeClickHandler = function () {
            _this.calciteListItemRemove.emit();
        };
        this.calciteListItemChange = createEvent(this, "calciteListItemChange", 7);
        this.calciteListItemRemove = createEvent(this, "calciteListItemRemove", 7);
        this.calciteListItemPropsChange = createEvent(this, "calciteListItemPropsChange", 7);
        this.calciteListItemValueChange = createEvent(this, "calciteListItemValueChange", 7);
    }
    class_1.prototype.descriptionWatchHandler = function () {
        this.calciteListItemPropsChange.emit();
    };
    class_1.prototype.labelWatchHandler = function () {
        this.calciteListItemPropsChange.emit();
    };
    class_1.prototype.metadataWatchHandler = function () {
        this.calciteListItemPropsChange.emit();
    };
    class_1.prototype.selectedWatchHandler = function () {
        this.calciteListItemChange.emit({
            item: this.el,
            value: this.value,
            selected: this.selected,
            shiftPressed: this.shiftPressed
        });
        this.shiftPressed = false;
    };
    class_1.prototype.valueWatchHandler = function (newValue, oldValue) {
        this.calciteListItemValueChange.emit({ oldValue: oldValue, newValue: newValue });
    };
    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------
    /**
     * Used to toggle the selection state. By default this won't trigger an event.
     * The first argument allows the value to be coerced, rather than swapping values.
     */
    class_1.prototype.toggleSelected = function (coerce) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                if (this.disabled) {
                    return [2 /*return*/];
                }
                this.selected = typeof coerce === "boolean" ? coerce : !this.selected;
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.setFocus = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                (_a = this.focusEl) === null || _a === void 0 ? void 0 : _a.focus();
                return [2 /*return*/];
            });
        });
    };
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    class_1.prototype.renderIcon = function () {
        var _b;
        var icon = this.icon;
        if (!icon) {
            return null;
        }
        return (h("span", { class: (_b = {},
                _b[CSS.icon] = true,
                _b[CSS.iconDot] = icon === ICON_TYPES.circle,
                _b) }, icon === ICON_TYPES.square ? h("calcite-icon", { icon: ICONS.checked, scale: "s" }) : null));
    };
    class_1.prototype.renderRemoveAction = function () {
        return this.removable ? (h("calcite-action", { class: CSS.remove, icon: ICONS.remove, onClick: this.removeClickHandler, slot: SLOTS.actionsEnd, text: this.intlRemove })) : null;
    };
    class_1.prototype.renderActionsStart = function () {
        var _b;
        var el = this.el;
        var hasActionsStart = getSlotted(el, SLOTS.actionsStart);
        return hasActionsStart ? (h("div", { class: (_b = {}, _b[CSS.actions] = true, _b[CSS.actionsStart] = true, _b) }, h("slot", { name: SLOTS.actionsStart }))) : null;
    };
    class_1.prototype.renderActionsEnd = function () {
        var _b;
        var _c = this, el = _c.el, removable = _c.removable;
        var hasActionsEnd = getSlotted(el, SLOTS.actionsEnd);
        return hasActionsEnd || removable ? (h("div", { class: (_b = {}, _b[CSS.actions] = true, _b[CSS.actionsEnd] = true, _b) }, h("slot", { name: SLOTS.actionsEnd }), this.renderRemoveAction())) : null;
    };
    class_1.prototype.render = function () {
        var _this = this;
        var _b = this, description = _b.description, label = _b.label;
        return (h(Host, { "aria-checked": this.selected.toString(), role: "menuitemcheckbox" }, this.renderIcon(), this.renderActionsStart(), h("label", { "aria-label": label, class: CSS.label, onClick: this.pickListClickHandler, onKeyDown: this.pickListKeyDownHandler, ref: function (focusEl) { return (_this.focusEl = focusEl); }, tabIndex: 0 }, h("div", { class: CSS.textContainer }, h("span", { class: CSS.title }, label), description ? h("span", { class: CSS.description }, description) : null)), this.renderActionsEnd()));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "description": ["descriptionWatchHandler"],
                "label": ["labelWatchHandler"],
                "metadata": ["metadataWatchHandler"],
                "selected": ["selectedWatchHandler"],
                "value": ["valueWatchHandler"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
CalcitePickListItem.style = calcitePickListItemCss;
export { CalcitePickListItem as calcite_pick_list_item };
