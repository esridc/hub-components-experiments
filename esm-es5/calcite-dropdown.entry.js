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
import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-17d4341f.js';
import { g as getElementDir, b as focusElement } from './dom-29efd1ef.js';
import { g as getKey } from './key-6f340c70.js';
import { C as CSS, u as updatePopper, c as createPopper } from './popper-ba36f96f.js';
var calciteDropdownCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host{position:relative;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-positive:1;flex-grow:1}:host([disabled]){pointer-events:none;opacity:var(--calcite-ui-opacity-disabled)}:host .calcite-dropdown-wrapper{display:block;position:absolute;z-index:999;-webkit-transform:scale(0);transform:scale(0);visibility:hidden;pointer-events:none}.calcite-dropdown-wrapper .calcite-popper-anim{position:relative;z-index:1;-webkit-transition:var(--calcite-popper-transition);transition:var(--calcite-popper-transition);visibility:hidden;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform;opacity:0;-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:var(--calcite-border-radius)}.calcite-dropdown-wrapper[data-popper-placement^=bottom] .calcite-popper-anim{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.calcite-dropdown-wrapper[data-popper-placement^=top] .calcite-popper-anim{-webkit-transform:translateY(5px);transform:translateY(5px)}.calcite-dropdown-wrapper[data-popper-placement^=left] .calcite-popper-anim{-webkit-transform:translateX(5px);transform:translateX(5px)}.calcite-dropdown-wrapper[data-popper-placement^=right] .calcite-popper-anim{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.calcite-dropdown-wrapper[data-popper-placement] .calcite-popper-anim--active{opacity:1;visibility:visible;-webkit-transform:translate(0);transform:translate(0)}:host([active]) .calcite-dropdown-wrapper{pointer-events:initial;visibility:visible}:host .calcite-dropdown-content{background:var(--calcite-ui-foreground-1);max-height:90vh;overflow:hidden;overflow-y:auto;width:auto;width:var(--calcite-dropdown-width)}.calcite-dropdown-trigger-container{position:relative;width:100%}:host([width=s]){--calcite-dropdown-width:12.5em}:host([width=m]){--calcite-dropdown-width:15em}:host([width=l]){--calcite-dropdown-width:20em}:host([scale=s]){--calcite-dropdown-group-padding:0.5rem 0;--calcite-dropdown-item-padding:0.3rem 1rem 0.3rem 2.25rem}:host([scale=m]){--calcite-dropdown-group-padding:0.75rem 0;--calcite-dropdown-item-padding:0.5rem 1rem 0.5rem 2.25rem}:host([scale=l]){--calcite-dropdown-group-padding:1rem 0;--calcite-dropdown-item-padding:0.75rem 1rem 0.75rem 2.25rem}:host([dir=rtl][scale=s]){--calcite-dropdown-item-padding:0.3rem 2.25rem 0.3rem 1rem}:host([dir=rtl][scale=m]){--calcite-dropdown-item-padding:0.5rem 2.25rem 0.5rem 1rem}:host([dir=rtl][scale=l]){--calcite-dropdown-item-padding:0.75rem 2.25rem 0.75rem 1rem}";
var CalciteDropdown = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Public Properties
        //
        //--------------------------------------------------------------------------
        this.active = false;
        /** specify the alignment of dropdown, defaults to start */
        this.alignment = "start";
        /**
         allow the dropdown to remain open after a selection is made
         if the selection-mode of the selected item's containing group is "none", the dropdown will always close
         */
        this.disableCloseOnSelect = false;
        /**
         specify the maximum number of calcite-dropdown-items to display before showing the scroller, must be greater than 0 -
         this value does not include groupTitles passed to calcite-dropdown-group
        */
        this.maxItems = 0;
        /** specify the scale of dropdown, defaults to m */
        this.scale = "m";
        /**
         * **read-only** The currently selected items
         *
         * @readonly
         */
        this.selectedItems = [];
        /** specify whether the dropdown is opened by hover or click of a trigger element */
        this.type = "click";
        /** specify the width of dropdown, defaults to m */
        this.width = "m";
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /** created list of dropdown items */
        this.items = [];
        /** specifies the item wrapper height; it is updated when maxItems is > 0  **/
        this.maxScrollerHeight = 0;
        /** keep track of whether the groups have been sorted so we don't re-sort */
        this.sorted = false;
        //--------------------------------------------------------------------------
        //
        //  Private Methods
        //
        //--------------------------------------------------------------------------
        this.setReferenceEl = function (el) {
            _this.referenceEl = el;
        };
        this.setMenuEl = function (el) {
            _this.menuEl = el;
        };
        this.openDropdown = function (e) {
            var target = e.target;
            if (_this.triggers.includes(target) ||
                _this.triggers.some(function (trigger) { return trigger.contains(target); })) {
                e.preventDefault();
                e.stopPropagation();
                _this.openCalciteDropdown();
            }
        };
        this.keyDownHandler = function (e) {
            var target = e.target;
            var key = getKey(e.key);
            if (_this.triggers.includes(target) ||
                _this.triggers.some(function (trigger) { return trigger.contains(target); })) {
                if (target.nodeName !== "BUTTON" && target.nodeName !== "CALCITE-BUTTON") {
                    switch (key) {
                        case " ":
                        case "Enter":
                            _this.openCalciteDropdown();
                            break;
                        case "Escape":
                            _this.closeCalciteDropdown();
                            break;
                    }
                }
                else if (_this.active && (key === "Escape" || (e.shiftKey && key === "Tab"))) {
                    _this.closeCalciteDropdown();
                }
            }
        };
        this.calciteDropdownSelect = createEvent(this, "calciteDropdownSelect", 7);
        this.calciteDropdownOpen = createEvent(this, "calciteDropdownOpen", 7);
        this.calciteDropdownClose = createEvent(this, "calciteDropdownClose", 7);
    }
    class_1.prototype.activeHandler = function () {
        this.reposition();
    };
    class_1.prototype.alignmentHandler = function () {
        this.reposition();
    };
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    class_1.prototype.connectedCallback = function () {
        this.createPopper();
    };
    class_1.prototype.componentWillLoad = function () {
        // get initially selected items
        this.updateSelectedItems();
    };
    class_1.prototype.componentDidLoad = function () {
        this.triggers = Array.from(this.el.querySelectorAll("[slot=dropdown-trigger]"));
        if (!this.sorted) {
            var groups = this.items.sort(function (a, b) { return a.position - b.position; });
            this.maxScrollerHeight = this.getMaxScrollerHeight(groups);
            this.items = groups.reduce(function (items, group) { return __spreadArrays(items, group.items); }, []);
            this.sorted = true;
        }
    };
    class_1.prototype.disconnectedCallback = function () {
        this.destroyPopper();
    };
    class_1.prototype.render = function () {
        var _c;
        var _d = this, active = _d.active, maxScrollerHeight = _d.maxScrollerHeight;
        var dir = getElementDir(this.el);
        return (h(Host, { dir: dir, tabIndex: this.disabled ? -1 : null }, h("div", { class: "calcite-dropdown-trigger-container", onClick: this.openDropdown, onKeyDown: this.keyDownHandler, ref: this.setReferenceEl }, h("slot", { "aria-expanded": active.toString(), "aria-haspopup": "true", name: "dropdown-trigger" })), h("div", { "aria-hidden": (!active).toString(), class: "calcite-dropdown-wrapper", ref: this.setMenuEl }, h("div", { class: (_c = {},
                _c["calcite-dropdown-content"] = true,
                _c[CSS.animation] = true,
                _c[CSS.animationActive] = active,
                _c), style: {
                maxHeight: maxScrollerHeight > 0 ? maxScrollerHeight + "px" : ""
            } }, h("slot", null)))));
    };
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    class_1.prototype.reposition = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _c, popper, menuEl, modifiers, placement;
            return __generator(this, function (_d) {
                _c = this, popper = _c.popper, menuEl = _c.menuEl;
                modifiers = this.getModifiers();
                placement = this.getPlacement();
                popper
                    ? updatePopper({
                        el: menuEl,
                        modifiers: modifiers,
                        placement: placement,
                        popper: popper
                    })
                    : this.createPopper();
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.closeCalciteDropdownOnClick = function (e) {
        var target = e.target;
        if (this.active &&
            target.nodeName !== "CALCITE-DROPDOWN-ITEM" &&
            target.nodeName !== "CALCITE-DROPDOWN-GROUP") {
            this.closeCalciteDropdown();
        }
    };
    class_1.prototype.closeCalciteDropdownOnEvent = function () {
        this.closeCalciteDropdown();
    };
    class_1.prototype.closeCalciteDropdownOnOpenEvent = function (e) {
        if (e.target !== this.el)
            this.active = false;
    };
    class_1.prototype.mouseEnterHandler = function () {
        if (this.type === "hover") {
            this.openCalciteDropdown();
        }
    };
    class_1.prototype.mouseLeaveHandler = function () {
        if (this.type === "hover") {
            this.closeCalciteDropdown();
        }
    };
    class_1.prototype.calciteDropdownItemKeyEvent = function (e) {
        var keyboardEvent = e.detail.keyboardEvent;
        // handle edge
        var target = keyboardEvent.target;
        var itemToFocus = target.nodeName !== "A" ? target : target.parentNode;
        var isFirstItem = this.itemIndex(itemToFocus) === 0;
        var isLastItem = this.itemIndex(itemToFocus) === this.items.length - 1;
        switch (getKey(keyboardEvent.key)) {
            case "Tab":
                if (isLastItem && !keyboardEvent.shiftKey)
                    this.closeCalciteDropdown();
                else if (isFirstItem && keyboardEvent.shiftKey)
                    this.closeCalciteDropdown();
                else if (keyboardEvent.shiftKey)
                    this.focusPrevItem(itemToFocus);
                else
                    this.focusNextItem(itemToFocus);
                break;
            case "ArrowDown":
                this.focusNextItem(itemToFocus);
                break;
            case "ArrowUp":
                this.focusPrevItem(itemToFocus);
                break;
            case "Home":
                this.focusFirstItem();
                break;
            case "End":
                this.focusLastItem();
                break;
        }
        e.stopPropagation();
    };
    class_1.prototype.handleItemSelect = function (event) {
        this.updateSelectedItems();
        event.stopPropagation();
        this.calciteDropdownSelect.emit();
        if (!this.disableCloseOnSelect || event.detail.requestedDropdownGroup.selectionMode === "none")
            this.closeCalciteDropdown();
    };
    class_1.prototype.registerCalciteDropdownGroup = function (e) {
        var _c = e.detail, items = _c.items, position = _c.position, titleEl = _c.titleEl, separatorEl = _c.separatorEl;
        this.items.push({
            items: items,
            position: position,
            titleEl: titleEl,
            separatorEl: separatorEl
        });
        e.stopPropagation();
        this.updateSelectedItems();
    };
    class_1.prototype.getModifiers = function () {
        var flipModifier = {
            name: "flip",
            enabled: true
        };
        flipModifier.options = {
            fallbackPlacements: ["top-start", "top", "top-end", "bottom-start", "bottom", "bottom-end"]
        };
        return [flipModifier];
    };
    class_1.prototype.getPlacement = function () {
        var alignment = this.alignment;
        if (alignment === "center") {
            return "bottom";
        }
        if (alignment === "end") {
            return "bottom-end";
        }
        return "bottom-start";
    };
    class_1.prototype.createPopper = function () {
        this.destroyPopper();
        var _c = this, menuEl = _c.menuEl, referenceEl = _c.referenceEl;
        var modifiers = this.getModifiers();
        var placement = this.getPlacement();
        this.popper = createPopper({
            el: menuEl,
            modifiers: modifiers,
            placement: placement,
            referenceEl: referenceEl
        });
    };
    class_1.prototype.destroyPopper = function () {
        var popper = this.popper;
        if (popper) {
            popper.destroy();
        }
        this.popper = null;
    };
    class_1.prototype.updateSelectedItems = function () {
        var items = Array.from(this.el.querySelectorAll("calcite-dropdown-item"));
        this.selectedItems = items.filter(function (item) { return item.active; });
    };
    class_1.prototype.getMaxScrollerHeight = function (groups) {
        var maxItems = this.maxItems;
        var itemsToProcess = 0;
        var maxScrollerHeight = 0;
        groups.forEach(function (group) {
            var _a, _b;
            if (maxItems > 0 && itemsToProcess < maxItems) {
                maxScrollerHeight += ((_a = group === null || group === void 0 ? void 0 : group.titleEl) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0;
                maxScrollerHeight += ((_b = group === null || group === void 0 ? void 0 : group.separatorEl) === null || _b === void 0 ? void 0 : _b.offsetHeight) || 0;
                group.items.forEach(function (item) {
                    if (itemsToProcess < maxItems) {
                        maxScrollerHeight += item.offsetHeight;
                        itemsToProcess += 1;
                    }
                });
            }
        });
        return maxScrollerHeight;
    };
    class_1.prototype.closeCalciteDropdown = function () {
        this.calciteDropdownClose.emit();
        this.active = false;
        focusElement(this.triggers[0]);
    };
    class_1.prototype.focusOnFirstActiveOrFirstItem = function () {
        this.getFocusableElement(this.items.find(function (item) { return item.active; }) || this.items[0]);
    };
    class_1.prototype.focusFirstItem = function () {
        var firstItem = this.items[0];
        this.getFocusableElement(firstItem);
    };
    class_1.prototype.focusLastItem = function () {
        var lastItem = this.items[this.items.length - 1];
        this.getFocusableElement(lastItem);
    };
    class_1.prototype.focusNextItem = function (e) {
        var index = this.itemIndex(e);
        var nextItem = this.items[index + 1] || this.items[0];
        this.getFocusableElement(nextItem);
    };
    class_1.prototype.focusPrevItem = function (e) {
        var index = this.itemIndex(e);
        var prevItem = this.items[index - 1] || this.items[this.items.length - 1];
        this.getFocusableElement(prevItem);
    };
    class_1.prototype.itemIndex = function (e) {
        return this.items.indexOf(e);
    };
    class_1.prototype.getFocusableElement = function (item) {
        if (!item) {
            return;
        }
        var target = item.attributes.isLink
            ? item.shadowRoot.querySelector("a")
            : item;
        focusElement(target);
    };
    class_1.prototype.openCalciteDropdown = function () {
        var _this = this;
        this.calciteDropdownOpen.emit();
        this.active = !this.active;
        var animationDelayInMs = 50;
        if (this.active) {
            setTimeout(function () { return _this.focusOnFirstActiveOrFirstItem(); }, animationDelayInMs);
        }
        else {
            this.calciteDropdownClose.emit();
        }
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "active": ["activeHandler"],
                "alignment": ["alignmentHandler"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
CalciteDropdown.style = calciteDropdownCss;
export { CalciteDropdown as calcite_dropdown };
