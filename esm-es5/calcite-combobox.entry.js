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
import { g as getKey } from './key-6f340c70.js';
import { g as guid } from './guid-9ad8042d.js';
import { f as forIn, d as debounce } from './lodash-4311644d.js';
import { u as updatePopper, c as createPopper, C as CSS } from './popper-ba36f96f.js';
var filter = function (data, value) {
    var regex = new RegExp(value, "ig");
    if (data.length === 0) {
        console.warn("No data was passed to the filter function.\n    The data argument should be an array of objects");
    }
    var find = function (input, RE) {
        var found = false;
        forIn(input, function (val) {
            if (typeof val === "function") {
                return;
            }
            if (Array.isArray(val) || (typeof val === "object" && val !== null)) {
                if (find(val, RE)) {
                    found = true;
                }
            }
            else if (RE.test(val)) {
                found = true;
            }
        });
        return found;
    };
    var result = data.filter(function (item) {
        return find(item, regex);
    });
    return result;
};
var calciteComboboxCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block;position:relative}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host([disabled]){pointer-events:none;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;opacity:0.5}:host([scale=s]){font-size:var(--calcite-font-size--2);--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-m:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem}:host([scale=s]) .input{height:1.25rem;line-height:1.25rem;margin-bottom:0.5rem}:host([scale=m]){font-size:var(--calcite-font-size--1);--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-m:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem}:host([scale=m]) .input{height:2rem;line-height:2rem;margin-bottom:0.75rem}:host([scale=l]){font-size:var(--calcite-font-size-0);--calcite-combobox-item-spacing-unit-l:1.25rem;--calcite-combobox-item-spacing-unit-m:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem}:host([scale=l]) .input{height:2.5rem;line-height:2.5rem;margin-bottom:1rem}.wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:var(--calcite-combobox-item-spacing-unit-m) var(--calcite-combobox-item-spacing-unit-l) 0 var(--calcite-combobox-item-spacing-unit-l);background-color:var(--calcite-ui-foreground-1);border:1px solid var(--calcite-ui-border-1);color:var(--calcite-ui-text-1);outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.wrapper--active{outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}.input{-ms-flex-positive:1;flex-grow:1;font-size:inherit;font-family:inherit;padding:0;background-color:transparent;border:none;color:var(--calcite-ui-text-1);-webkit-appearance:none;-moz-appearance:none;appearance:none;min-width:120px;margin-top:1px}.input:focus{outline:none}.input--hidden{opacity:0}.popper-container{display:block;position:absolute;z-index:999;-webkit-transform:scale(0);transform:scale(0);visibility:hidden;pointer-events:none;width:100%}.popper-container .calcite-popper-anim{position:relative;z-index:1;-webkit-transition:var(--calcite-popper-transition);transition:var(--calcite-popper-transition);visibility:hidden;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform;opacity:0;-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:var(--calcite-border-radius)}.popper-container[data-popper-placement^=bottom] .calcite-popper-anim{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.popper-container[data-popper-placement^=top] .calcite-popper-anim{-webkit-transform:translateY(5px);transform:translateY(5px)}.popper-container[data-popper-placement^=left] .calcite-popper-anim{-webkit-transform:translateX(5px);transform:translateX(5px)}.popper-container[data-popper-placement^=right] .calcite-popper-anim{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.popper-container[data-popper-placement] .calcite-popper-anim--active{opacity:1;visibility:visible;-webkit-transform:translate(0);transform:translate(0)}:host([active]) .popper-container{pointer-events:initial;visibility:visible}.screen-readers-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.list-container{overflow-y:auto;max-height:100vh;width:var(--calcite-dropdown-width);background:var(--calcite-ui-foreground-1)}.list{display:block;margin:0;padding:0}.chip{margin-right:var(--calcite-combobox-item-spacing-unit-s);margin-bottom:var(--calcite-combobox-item-spacing-unit-s)}.chip--active{background-color:var(--calcite-ui-foreground-3)}.chip:last-child{margin-right:0}:host([dir=rtl]) .chip{margin-right:unset;margin-left:var(--calcite-combobox-item-spacing-unit-m)}:host([dir=rtl]) .chip:last-child{margin-left:0}.item{display:block}";
var COMBO_BOX_ITEM = "calcite-combobox-item";
var DEFAULT_PLACEMENT = "bottom-start";
var CalciteCombobox = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Public Properties
        //
        //--------------------------------------------------------------------------
        /** Open and close combobox */
        this.active = false;
        /** Disable combobox input */
        this.disabled = false;
        /** Specify the maximum number of combobox items (including nested children) to display before showing the scroller */
        this.maxItems = 0;
        /** Specify the scale of the combobox, defaults to m */
        this.scale = "m";
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        this.items = [];
        this.selectedItems = [];
        this.visibleItems = [];
        this.activeItemIndex = -1;
        this.activeChipIndex = -1;
        this.activeDescendant = "";
        this.text = "";
        this.textInput = null;
        this.observer = null;
        this.guid = guid();
        /** specifies the item wrapper height; it is updated when maxItems is > 0  **/
        this.maxScrollerHeight = 0;
        this.inputHeight = 0;
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.setInactiveIfNotContained = function (target) {
            if (!_this.active || _this.el.contains(target)) {
                return;
            }
            _this.active = false;
        };
        this.setMenuEl = function (el) {
            _this.menuEl = el;
        };
        this.setListContainerEl = function (el) {
            _this.listContainerEl = el;
        };
        this.setReferenceEl = function (el) {
            _this.referenceEl = el;
        };
        this.inputHandler = function (event) {
            var value = event.target.value;
            _this.text = value;
            _this.filterItems(value);
            if (value) {
                _this.activeChipIndex = -1;
            }
        };
        this.filterItems = debounce(function (value) {
            var filteredData = filter(_this.data, value);
            var values = filteredData.map(function (item) { return item.value; });
            _this.items.forEach(function (item) {
                var hidden = values.indexOf(item.value) === -1;
                item.hidden = hidden;
                var _b = item.anscestors, parent = _b[0], grandparent = _b[1];
                if ((parent || grandparent) &&
                    (values.indexOf(parent === null || parent === void 0 ? void 0 : parent.value) > -1 || values.indexOf(grandparent === null || grandparent === void 0 ? void 0 : grandparent.value) > -1)) {
                    item.hidden = false;
                }
                if (!hidden) {
                    item.anscestors.forEach(function (anscestor) { return (anscestor.hidden = false); });
                }
            });
            _this.visibleItems = _this.getVisibleItems();
        }, 100);
        this.updateItems = function () {
            _this.items = _this.getItems();
            _this.data = _this.getData();
            _this.selectedItems = _this.getSelectedItems();
            _this.visibleItems = _this.getVisibleItems();
        };
        this.comboboxFocusHandler = function () {
            _this.active = true;
        };
        this.comboboxBlurHandler = function (event) {
            var relatedTarget = event.relatedTarget;
            _this.setInactiveIfNotContained(relatedTarget);
        };
        this.calciteLookupChange = createEvent(this, "calciteLookupChange", 7);
        this.calciteComboboxChipDismiss = createEvent(this, "calciteComboboxChipDismiss", 7);
    }
    class_1.prototype.activeHandler = function () {
        this.reposition();
    };
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    class_1.prototype.documentClickHandler = function (event) {
        var target = event.target;
        this.setInactiveIfNotContained(target);
    };
    class_1.prototype.calciteComboboxItemChangeHandler = function (event) {
        this.toggleSelection(event.detail);
    };
    class_1.prototype.calciteChipDismissHandler = function (event) {
        var _a;
        this.active = false;
        var value = (_a = event.detail) === null || _a === void 0 ? void 0 : _a.value;
        var comboboxItem = this.items.find(function (item) { return item.value === value; });
        if (comboboxItem) {
            this.toggleSelection(comboboxItem, false);
        }
        this.calciteComboboxChipDismiss.emit(event.detail);
    };
    class_1.prototype.keydownHandler = function (event) {
        var key = getKey(event.key, getElementDir(this.el));
        switch (key) {
            case "Tab":
                this.activeChipIndex = -1;
                this.activeItemIndex = -1;
                this.active = false;
                break;
            case "ArrowLeft":
                this.previousChip();
                break;
            case "ArrowRight":
                this.nextChip();
                break;
            case "ArrowUp":
                event.preventDefault();
                this.active = true;
                this.shiftActiveItemIndex(-1);
                break;
            case "ArrowDown":
                event.preventDefault();
                this.active = true;
                this.shiftActiveItemIndex(1);
                break;
            case "Home":
                this.active = true;
                this.updateActiveItemIndex(0);
                break;
            case "End":
                this.active = true;
                this.updateActiveItemIndex(this.visibleItems.length - 1);
                break;
            case "Escape":
                this.active = false;
                break;
            case "Enter":
                if (this.activeItemIndex > -1) {
                    this.toggleSelection(this.visibleItems[this.activeItemIndex]);
                }
                else if (this.activeChipIndex > -1) {
                    this.removeActiveChip();
                }
                else if (this.allowCustomValues && this.text) {
                    this.addCustomChip(this.text);
                }
                break;
            case "Delete":
            case "Backspace":
                if (this.activeChipIndex > -1) {
                    this.removeActiveChip();
                }
                else if (!this.text) {
                    this.removeLastChip();
                }
                break;
            default:
                if (!this.active) {
                    this.setFocus();
                }
                break;
        }
    };
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    class_1.prototype.reposition = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _b, popper, menuEl, modifiers;
            return __generator(this, function (_c) {
                _b = this, popper = _b.popper, menuEl = _b.menuEl;
                modifiers = this.getModifiers();
                popper
                    ? updatePopper({
                        el: menuEl,
                        modifiers: modifiers,
                        placement: DEFAULT_PLACEMENT,
                        popper: popper
                    })
                    : this.createPopper();
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.setFocus = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                this.active = true;
                (_a = this.textInput) === null || _a === void 0 ? void 0 : _a.focus();
                this.activeChipIndex = -1;
                this.activeItemIndex = -1;
                return [2 /*return*/];
            });
        });
    };
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    class_1.prototype.connectedCallback = function () {
        {
            this.observer = new MutationObserver(this.updateItems);
        }
        this.createPopper();
    };
    class_1.prototype.componentWillLoad = function () {
        this.updateItems();
    };
    class_1.prototype.componentDidLoad = function () {
        var _a;
        (_a = this.observer) === null || _a === void 0 ? void 0 : _a.observe(this.el, { childList: true, subtree: true });
        this.maxScrollerHeight = this.getMaxScrollerHeight(this.items);
    };
    class_1.prototype.componentDidRender = function () {
        if (this.el.offsetHeight !== this.inputHeight) {
            this.reposition();
            this.inputHeight = this.el.offsetHeight;
        }
    };
    class_1.prototype.disconnectedCallback = function () {
        var _a;
        (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
        this.destroyPopper();
    };
    /** when search text is cleared, reset active to  */
    class_1.prototype.textHandler = function () {
        this.updateActiveItemIndex(-1);
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
    class_1.prototype.createPopper = function () {
        this.destroyPopper();
        var _b = this, menuEl = _b.menuEl, referenceEl = _b.referenceEl;
        var modifiers = this.getModifiers();
        this.popper = createPopper({
            el: menuEl,
            modifiers: modifiers,
            placement: DEFAULT_PLACEMENT,
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
    class_1.prototype.getMaxScrollerHeight = function (items) {
        var _this = this;
        var maxItems = this.maxItems;
        var itemsToProcess = 0;
        var maxScrollerHeight = 0;
        items.forEach(function (item) {
            if (itemsToProcess < maxItems && maxItems > 0) {
                maxScrollerHeight += _this.calculateSingleItemHeight(item);
                itemsToProcess++;
            }
        });
        return maxScrollerHeight;
    };
    class_1.prototype.calculateSingleItemHeight = function (item) {
        var height = item.offsetHeight;
        // if item has children items, don't count their height twice
        var children = item.querySelectorAll("calcite-combobox-item");
        children.forEach(function (child) {
            height -= child.offsetHeight;
        });
        return height;
    };
    class_1.prototype.toggleSelection = function (item, value) {
        if (value === void 0) { value = !item.selected; }
        item.selected = value;
        this.selectedItems = this.getSelectedItems();
        this.calciteLookupChange.emit(this.selectedItems);
        this.resetText();
        this.textInput.focus();
        this.filterItems("");
    };
    class_1.prototype.getVisibleItems = function () {
        return this.items.filter(function (item) { return !item.hidden; });
    };
    class_1.prototype.getSelectedItems = function () {
        var _this = this;
        return (this.items
            .filter(function (item) { return item.selected; })
            /** Preserve order of entered tags */
            .sort(function (a, b) {
            var aIdx = _this.selectedItems.indexOf(a);
            var bIdx = _this.selectedItems.indexOf(b);
            if (aIdx > -1 && bIdx > -1) {
                return aIdx - bIdx;
            }
            return bIdx - aIdx;
        }));
    };
    class_1.prototype.getData = function () {
        return this.items.map(function (item) { return ({
            value: item.value,
            label: item.textLabel,
            guid: item.guid
        }); });
    };
    class_1.prototype.resetText = function () {
        this.textInput.value = "";
        this.text = "";
    };
    class_1.prototype.getItems = function () {
        var items = Array.from(this.el.querySelectorAll(COMBO_BOX_ITEM));
        return items.filter(function (item) { return !item.disabled; });
    };
    class_1.prototype.addCustomChip = function (value) {
        var existingItem = this.items.find(function (el) { return el.value === value || el.textLabel === value; });
        if (existingItem) {
            this.toggleSelection(existingItem, true);
        }
        else {
            var item = document.createElement("calcite-combobox-item");
            item.value = value;
            item.textLabel = value;
            item.guid = guid();
            item.selected = true;
            this.el.appendChild(item);
            this.resetText();
            this.setFocus();
            this.updateItems();
            this.filterItems("");
        }
    };
    class_1.prototype.removeActiveChip = function () {
        this.toggleSelection(this.selectedItems[this.activeChipIndex], false);
        this.setFocus();
    };
    class_1.prototype.removeLastChip = function () {
        this.toggleSelection(this.selectedItems[this.selectedItems.length - 1], false);
        this.setFocus();
    };
    class_1.prototype.previousChip = function () {
        if (this.text) {
            return;
        }
        var length = this.selectedItems.length - 1;
        var active = this.activeChipIndex;
        this.activeChipIndex = active === -1 ? length : Math.max(active - 1, 0);
        this.updateActiveItemIndex(-1);
        this.focusChip();
    };
    class_1.prototype.nextChip = function () {
        if (this.text || this.activeChipIndex === -1) {
            return;
        }
        var last = this.selectedItems.length - 1;
        var newIndex = this.activeChipIndex + 1;
        if (newIndex > last) {
            this.activeChipIndex = -1;
            this.setFocus();
        }
        else {
            this.activeChipIndex = newIndex;
            this.focusChip();
        }
        this.updateActiveItemIndex(-1);
    };
    class_1.prototype.focusChip = function () {
        var _a;
        var guid = (_a = this.selectedItems[this.activeChipIndex]) === null || _a === void 0 ? void 0 : _a.guid;
        var chip = this.referenceEl.querySelector("#chip-" + guid);
        chip === null || chip === void 0 ? void 0 : chip.setFocus();
    };
    class_1.prototype.shiftActiveItemIndex = function (delta) {
        var length = this.visibleItems.length;
        var newIndex = (this.activeItemIndex + length + delta) % length;
        this.updateActiveItemIndex(newIndex);
        // ensure active item is in view if we have scrolling
        var activeItem = this.visibleItems[this.activeItemIndex];
        var height = this.calculateSingleItemHeight(activeItem);
        var _b = this.listContainerEl, offsetHeight = _b.offsetHeight, scrollTop = _b.scrollTop;
        if (offsetHeight + scrollTop < activeItem.offsetTop + height) {
            this.listContainerEl.scrollTop = activeItem.offsetTop - offsetHeight + height;
        }
        else if (activeItem.offsetTop < scrollTop) {
            this.listContainerEl.scrollTop = activeItem.offsetTop;
        }
    };
    class_1.prototype.updateActiveItemIndex = function (index) {
        this.activeItemIndex = index;
        var activeDescendant = null;
        this.visibleItems.forEach(function (el, i) {
            if (i === index) {
                el.active = true;
                activeDescendant = el.guid;
            }
            else {
                el.active = false;
            }
        });
        this.activeDescendant = activeDescendant;
        if (this.activeItemIndex > -1) {
            this.activeChipIndex = -1;
            this.textInput.focus();
        }
    };
    //--------------------------------------------------------------------------
    //
    //  Render Methods
    //
    //--------------------------------------------------------------------------
    class_1.prototype.renderChips = function () {
        var _b = this, activeChipIndex = _b.activeChipIndex, scale = _b.scale;
        return this.selectedItems.map(function (item, i) {
            var chipClasses = { chip: true, "chip--active": activeChipIndex === i };
            return (h("calcite-chip", { class: chipClasses, dismissLabel: "remove tag", dismissible: true, id: "chip-" + item.guid, key: item.value, scale: scale, value: item.value }, item.textLabel));
        });
    };
    class_1.prototype.renderListBoxOptions = function () {
        return this.visibleItems.map(function (item) { return (h("li", { "aria-selected": (!!item.selected).toString(), id: item.guid, role: "option", tabindex: "-1" }, item.value)); });
    };
    class_1.prototype.renderPopperContainer = function () {
        var _b;
        var _c = this, active = _c.active, maxScrollerHeight = _c.maxScrollerHeight, setMenuEl = _c.setMenuEl, setListContainerEl = _c.setListContainerEl;
        var classes = (_b = {
                "list-container": true
            },
            _b[CSS.animation] = true,
            _b[CSS.animationActive] = active,
            _b);
        var style = {
            maxHeight: maxScrollerHeight > 0 ? maxScrollerHeight + "px" : ""
        };
        return (h("div", { "aria-hidden": "true", class: "popper-container", ref: setMenuEl }, h("div", { class: classes, ref: setListContainerEl, style: style }, h("ul", { class: "list" }, h("slot", null)))));
    };
    class_1.prototype.render = function () {
        var _this = this;
        var _b = this, guid = _b.guid, active = _b.active, disabled = _b.disabled, el = _b.el, label = _b.label, placeholder = _b.placeholder;
        var dir = getElementDir(el);
        var labelId = guid + "-label";
        return (h(Host, { active: active, dir: dir }, h("div", { "aria-autocomplete": "list", "aria-expanded": active.toString(), "aria-haspopup": "listbox", "aria-labelledby": labelId, "aria-owns": guid, class: { wrapper: true, "wrapper--active": active }, onClick: function () { return _this.setFocus(); }, ref: this.setReferenceEl, role: "combobox" }, this.renderChips(), h("label", { class: "screen-readers-only", htmlFor: guid + "-input", id: labelId }, label), h("input", { "aria-activedescendant": this.activeDescendant, "aria-autocomplete": "list", "aria-controls": guid, class: { input: true, "input--hidden": this.activeChipIndex > -1 }, disabled: disabled, id: guid + "-input", onBlur: this.comboboxBlurHandler, onFocus: this.comboboxFocusHandler, onInput: this.inputHandler, placeholder: placeholder, ref: function (el) { return (_this.textInput = el); }, type: "text" })), h("ul", { "aria-labelledby": labelId, "aria-multiselectable": "true", class: "screen-readers-only", id: guid, role: "listbox", tabIndex: -1 }, this.renderListBoxOptions()), this.renderPopperContainer()));
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
                "text": ["textHandler"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
CalciteCombobox.style = calciteComboboxCss;
export { CalciteCombobox as calcite_combobox };
