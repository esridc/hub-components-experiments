import { h, H as Host } from './index-17d4341f.js';
import { b as focusElement, a as getSlotted, c as getElementTheme, g as getElementDir } from './dom-29efd1ef.js';
import { d as debounce } from './lodash-4311644d.js';
import { g as getRoundRobinIndex } from './array-e627ad50.js';
import { C as CSS } from './resources-8903dad2.js';
function mutationObserverCallback() {
    this.setUpItems();
    this.setUpFilter();
}
var SUPPORTED_ARROW_KEYS = ["ArrowUp", "ArrowDown"];
// --------------------------------------------------------------------------
//
//  Lifecycle
//
// --------------------------------------------------------------------------
function initialize() {
    this.setUpItems();
    this.setUpFilter();
    this.emitCalciteListChange = debounce(internalCalciteListChangeEvent.bind(this), 0);
}
function initializeObserver() {
    this.observer.observe(this.el, { childList: true, subtree: true });
}
function cleanUpObserver() {
    this.observer.disconnect();
}
// --------------------------------------------------------------------------
//
//  Listeners
//
// --------------------------------------------------------------------------
function calciteListItemChangeHandler(event) {
    var selectedValues = this.selectedValues;
    var _b = event.detail, item = _b.item, value = _b.value, selected = _b.selected, shiftPressed = _b.shiftPressed;
    if (selected) {
        if (!this.multiple) {
            this.deselectSiblingItems(item);
        }
        if (this.multiple && shiftPressed) {
            this.selectSiblings(item);
        }
        selectedValues.set(value, item);
    }
    else {
        selectedValues.delete(value);
        if (this.multiple && shiftPressed) {
            this.selectSiblings(item, true);
        }
    }
    if (!this.multiple) {
        toggleSingleSelectItemTabbing(item, selected);
    }
    this.lastSelectedItem = item;
    this.emitCalciteListChange();
}
function calciteListItemValueChangeHandler(event) {
    event.stopPropagation();
    var oldValue = event.detail.oldValue;
    var selectedValues = this.selectedValues;
    if (selectedValues.has(oldValue)) {
        var item = selectedValues.get(oldValue);
        selectedValues.delete(oldValue);
        selectedValues.set(event.detail.newValue, item);
    }
}
// --------------------------------------------------------------------------
//
//  Private Methods
//
// --------------------------------------------------------------------------
function isValidNavigationKey(key) {
    return !!SUPPORTED_ARROW_KEYS.find(function (k) { return k === key; });
}
function keyDownHandler(event) {
    var key = event.key, target = event.target;
    if (!isValidNavigationKey(key)) {
        return;
    }
    var _b = this, items = _b.items, multiple = _b.multiple;
    var totalItems = items.length;
    var currentIndex = items.indexOf(target);
    if (!totalItems || currentIndex === -1) {
        return;
    }
    event.preventDefault();
    var index = getRoundRobinIndex(currentIndex + (key === "ArrowUp" ? -1 : 1), totalItems);
    var item = items[index];
    toggleSingleSelectItemTabbing(item, true);
    focusElement(item);
    if (!multiple) {
        item.selected = true;
    }
}
function internalCalciteListChangeEvent() {
    this.calciteListChange.emit(this.selectedValues);
}
function removeItem(event) {
    if (event.defaultPrevented) {
        return;
    }
    var item = event.target;
    var selectedValues = this.selectedValues;
    if (item.parentElement.tagName === "CALCITE-PICK-LIST-GROUP") {
        item.parentElement.remove();
        Array.from(item.parentElement.children).forEach(function (item) { return selectedValues.delete(item.value); });
    }
    else {
        item.remove();
        selectedValues.delete(item.value);
    }
    this.emitCalciteListChange();
}
function toggleSingleSelectItemTabbing(item, selectable) {
    // using attribute intentionally
    if (selectable) {
        item.removeAttribute("tabindex");
    }
    else {
        item.setAttribute("tabindex", "-1");
    }
}
function setFocus() {
    var _b = this, multiple = _b.multiple, items = _b.items;
    if (items.length === 0) {
        return;
    }
    if (multiple) {
        return items[0].setFocus();
    }
    var selected = items.find(function (item) { return item.selected; });
    return (selected ? selected : items[0]).setFocus();
}
function setUpItems(tagName) {
    var _this = this;
    this.items = Array.from(this.el.querySelectorAll(tagName));
    var hasSelected = false;
    var items = this.items;
    items.forEach(function (item) {
        item.icon = _this.getIconType();
        if (!_this.multiple) {
            item.disableDeselect = true;
            toggleSingleSelectItemTabbing(item, false);
        }
        if (item.selected) {
            hasSelected = true;
            toggleSingleSelectItemTabbing(item, true);
            _this.selectedValues.set(item.value, item);
        }
    });
    var first = items[0];
    if (!hasSelected && first) {
        toggleSingleSelectItemTabbing(first, true);
    }
}
function deselectSiblingItems(item) {
    var _this = this;
    this.items.forEach(function (currentItem) {
        if (currentItem.value !== item.value) {
            currentItem.toggleSelected(false);
            if (_this.selectedValues.has(currentItem.value)) {
                _this.selectedValues.delete(currentItem.value);
            }
        }
    });
}
function selectSiblings(item, deselect) {
    var _this = this;
    if (deselect === void 0) { deselect = false; }
    if (!this.lastSelectedItem) {
        return;
    }
    var items = this.items;
    var start = items.findIndex(function (currentItem) {
        return currentItem.value === _this.lastSelectedItem.value;
    });
    var end = items.findIndex(function (currentItem) {
        return currentItem.value === item.value;
    });
    items.slice(Math.min(start, end), Math.max(start, end)).forEach(function (currentItem) {
        currentItem.toggleSelected(!deselect);
        if (!deselect) {
            _this.selectedValues.set(currentItem.value, currentItem);
        }
        else {
            _this.selectedValues.delete(currentItem.value);
        }
    });
}
var groups;
function handleFilter(event) {
    var filteredData = event.detail;
    var values = filteredData.map(function (item) { return item.value; });
    if (!groups) {
        groups = new Set();
    }
    var matchedItems = this.items.filter(function (item) {
        var parent = item.parentElement;
        var grouped = parent.matches("calcite-pick-list-group");
        if (grouped) {
            groups.add(parent);
        }
        var matches = values.includes(item.value);
        item.hidden = !matches;
        return matches;
    });
    groups.forEach(function (group) {
        var hasAtLeastOneMatch = matchedItems.some(function (item) { return group.contains(item); });
        group.hidden = !hasAtLeastOneMatch;
        if (!hasAtLeastOneMatch) {
            return;
        }
        var parentItem = getSlotted(group, "parent-item");
        if (parentItem) {
            parentItem.hidden = false;
            if (matchedItems.includes(parentItem)) {
                Array.from(group.children).forEach(function (child) { return (child.hidden = false); });
            }
        }
    });
    groups.clear();
}
function getItemData() {
    return this.items.map(function (item) { return ({
        label: item.label,
        description: item.description,
        metadata: item.metadata,
        value: item.value
    }); });
}
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var List = function (_a) {
    var _b;
    var _c = _a.props, disabled = _c.disabled, loading = _c.loading, filterEnabled = _c.filterEnabled, dataForFilter = _c.dataForFilter, handleFilter = _c.handleFilter, filterPlaceholder = _c.filterPlaceholder, el = _c.el, rest = __rest(_a, ["props"]);
    var defaultSlot = h("slot", null);
    return (h(Host, Object.assign({ "aria-busy": loading.toString(), "aria-disabled": disabled.toString(), role: "menu" }, rest), h("section", null, h("header", { class: (_b = {}, _b[CSS.sticky] = true, _b) }, filterEnabled ? (h("calcite-filter", { "aria-label": filterPlaceholder, data: dataForFilter, dir: getElementDir(el), onCalciteFilterChange: handleFilter, placeholder: filterPlaceholder })) : null, h("slot", { name: "menu-actions" })), loading || disabled ? (h("calcite-scrim", { loading: loading, theme: getElementTheme(el) }, defaultSlot)) : (defaultSlot))));
};
export { List as L, initializeObserver as a, calciteListItemChangeHandler as b, cleanUpObserver as c, deselectSiblingItems as d, calciteListItemValueChangeHandler as e, setUpItems as f, getItemData as g, handleFilter as h, initialize as i, setFocus as j, keyDownHandler as k, mutationObserverCallback as m, removeItem as r, selectSiblings as s };
