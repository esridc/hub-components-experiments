import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-17d4341f.js';
import { g as getElementDir, b as focusElement } from './dom-29efd1ef.js';
import { g as getKey } from './key-6f340c70.js';
import { C as CSS, u as updatePopper, c as createPopper } from './popper-ba36f96f.js';

const calciteDropdownCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host{position:relative;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-positive:1;flex-grow:1}:host([disabled]){pointer-events:none;opacity:var(--calcite-ui-opacity-disabled)}:host .calcite-dropdown-wrapper{display:block;position:absolute;z-index:999;-webkit-transform:scale(0);transform:scale(0);visibility:hidden;pointer-events:none}.calcite-dropdown-wrapper .calcite-popper-anim{position:relative;z-index:1;-webkit-transition:var(--calcite-popper-transition);transition:var(--calcite-popper-transition);visibility:hidden;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform;opacity:0;-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:var(--calcite-border-radius)}.calcite-dropdown-wrapper[data-popper-placement^=bottom] .calcite-popper-anim{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.calcite-dropdown-wrapper[data-popper-placement^=top] .calcite-popper-anim{-webkit-transform:translateY(5px);transform:translateY(5px)}.calcite-dropdown-wrapper[data-popper-placement^=left] .calcite-popper-anim{-webkit-transform:translateX(5px);transform:translateX(5px)}.calcite-dropdown-wrapper[data-popper-placement^=right] .calcite-popper-anim{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.calcite-dropdown-wrapper[data-popper-placement] .calcite-popper-anim--active{opacity:1;visibility:visible;-webkit-transform:translate(0);transform:translate(0)}:host([active]) .calcite-dropdown-wrapper{pointer-events:initial;visibility:visible}:host .calcite-dropdown-content{background:var(--calcite-ui-foreground-1);max-height:90vh;overflow:hidden;overflow-y:auto;width:auto;width:var(--calcite-dropdown-width)}.calcite-dropdown-trigger-container{position:relative;width:100%}:host([width=s]){--calcite-dropdown-width:12.5em}:host([width=m]){--calcite-dropdown-width:15em}:host([width=l]){--calcite-dropdown-width:20em}:host([scale=s]){--calcite-dropdown-group-padding:0.5rem 0;--calcite-dropdown-item-padding:0.3rem 1rem 0.3rem 2.25rem}:host([scale=m]){--calcite-dropdown-group-padding:0.75rem 0;--calcite-dropdown-item-padding:0.5rem 1rem 0.5rem 2.25rem}:host([scale=l]){--calcite-dropdown-group-padding:1rem 0;--calcite-dropdown-item-padding:0.75rem 1rem 0.75rem 2.25rem}:host([dir=rtl][scale=s]){--calcite-dropdown-item-padding:0.3rem 2.25rem 0.3rem 1rem}:host([dir=rtl][scale=m]){--calcite-dropdown-item-padding:0.5rem 2.25rem 0.5rem 1rem}:host([dir=rtl][scale=l]){--calcite-dropdown-item-padding:0.75rem 2.25rem 0.75rem 1rem}";

const CalciteDropdown = class {
    constructor(hostRef) {
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
        this.setReferenceEl = (el) => {
            this.referenceEl = el;
        };
        this.setMenuEl = (el) => {
            this.menuEl = el;
        };
        this.openDropdown = (e) => {
            const target = e.target;
            if (this.triggers.includes(target) ||
                this.triggers.some((trigger) => trigger.contains(target))) {
                e.preventDefault();
                e.stopPropagation();
                this.openCalciteDropdown();
            }
        };
        this.keyDownHandler = (e) => {
            const target = e.target;
            const key = getKey(e.key);
            if (this.triggers.includes(target) ||
                this.triggers.some((trigger) => trigger.contains(target))) {
                if (target.nodeName !== "BUTTON" && target.nodeName !== "CALCITE-BUTTON") {
                    switch (key) {
                        case " ":
                        case "Enter":
                            this.openCalciteDropdown();
                            break;
                        case "Escape":
                            this.closeCalciteDropdown();
                            break;
                    }
                }
                else if (this.active && (key === "Escape" || (e.shiftKey && key === "Tab"))) {
                    this.closeCalciteDropdown();
                }
            }
        };
        this.calciteDropdownSelect = createEvent(this, "calciteDropdownSelect", 7);
        this.calciteDropdownOpen = createEvent(this, "calciteDropdownOpen", 7);
        this.calciteDropdownClose = createEvent(this, "calciteDropdownClose", 7);
    }
    activeHandler() {
        this.reposition();
    }
    alignmentHandler() {
        this.reposition();
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        this.createPopper();
    }
    componentWillLoad() {
        // get initially selected items
        this.updateSelectedItems();
    }
    componentDidLoad() {
        this.triggers = Array.from(this.el.querySelectorAll("[slot=dropdown-trigger]"));
        if (!this.sorted) {
            const groups = this.items.sort((a, b) => a.position - b.position);
            this.maxScrollerHeight = this.getMaxScrollerHeight(groups);
            this.items = groups.reduce((items, group) => [...items, ...group.items], []);
            this.sorted = true;
        }
    }
    disconnectedCallback() {
        this.destroyPopper();
    }
    render() {
        const { active, maxScrollerHeight } = this;
        const dir = getElementDir(this.el);
        return (h(Host, { dir: dir, tabIndex: this.disabled ? -1 : null }, h("div", { class: "calcite-dropdown-trigger-container", onClick: this.openDropdown, onKeyDown: this.keyDownHandler, ref: this.setReferenceEl }, h("slot", { "aria-expanded": active.toString(), "aria-haspopup": "true", name: "dropdown-trigger" })), h("div", { "aria-hidden": (!active).toString(), class: "calcite-dropdown-wrapper", ref: this.setMenuEl }, h("div", { class: {
                ["calcite-dropdown-content"]: true,
                [CSS.animation]: true,
                [CSS.animationActive]: active
            }, style: {
                maxHeight: maxScrollerHeight > 0 ? `${maxScrollerHeight}px` : ""
            } }, h("slot", null)))));
    }
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    async reposition() {
        const { popper, menuEl } = this;
        const modifiers = this.getModifiers();
        const placement = this.getPlacement();
        popper
            ? updatePopper({
                el: menuEl,
                modifiers,
                placement,
                popper
            })
            : this.createPopper();
    }
    closeCalciteDropdownOnClick(e) {
        const target = e.target;
        if (this.active &&
            target.nodeName !== "CALCITE-DROPDOWN-ITEM" &&
            target.nodeName !== "CALCITE-DROPDOWN-GROUP") {
            this.closeCalciteDropdown();
        }
    }
    closeCalciteDropdownOnEvent() {
        this.closeCalciteDropdown();
    }
    closeCalciteDropdownOnOpenEvent(e) {
        if (e.target !== this.el)
            this.active = false;
    }
    mouseEnterHandler() {
        if (this.type === "hover") {
            this.openCalciteDropdown();
        }
    }
    mouseLeaveHandler() {
        if (this.type === "hover") {
            this.closeCalciteDropdown();
        }
    }
    calciteDropdownItemKeyEvent(e) {
        const { keyboardEvent } = e.detail;
        // handle edge
        const target = keyboardEvent.target;
        const itemToFocus = target.nodeName !== "A" ? target : target.parentNode;
        const isFirstItem = this.itemIndex(itemToFocus) === 0;
        const isLastItem = this.itemIndex(itemToFocus) === this.items.length - 1;
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
    }
    handleItemSelect(event) {
        this.updateSelectedItems();
        event.stopPropagation();
        this.calciteDropdownSelect.emit();
        if (!this.disableCloseOnSelect || event.detail.requestedDropdownGroup.selectionMode === "none")
            this.closeCalciteDropdown();
    }
    registerCalciteDropdownGroup(e) {
        const { detail: { items, position, titleEl, separatorEl } } = e;
        this.items.push({
            items,
            position,
            titleEl,
            separatorEl
        });
        e.stopPropagation();
        this.updateSelectedItems();
    }
    getModifiers() {
        const flipModifier = {
            name: "flip",
            enabled: true
        };
        flipModifier.options = {
            fallbackPlacements: ["top-start", "top", "top-end", "bottom-start", "bottom", "bottom-end"]
        };
        return [flipModifier];
    }
    getPlacement() {
        const { alignment } = this;
        if (alignment === "center") {
            return "bottom";
        }
        if (alignment === "end") {
            return "bottom-end";
        }
        return "bottom-start";
    }
    createPopper() {
        this.destroyPopper();
        const { menuEl, referenceEl } = this;
        const modifiers = this.getModifiers();
        const placement = this.getPlacement();
        this.popper = createPopper({
            el: menuEl,
            modifiers,
            placement,
            referenceEl
        });
    }
    destroyPopper() {
        const { popper } = this;
        if (popper) {
            popper.destroy();
        }
        this.popper = null;
    }
    updateSelectedItems() {
        const items = Array.from(this.el.querySelectorAll("calcite-dropdown-item"));
        this.selectedItems = items.filter((item) => item.active);
    }
    getMaxScrollerHeight(groups) {
        const { maxItems } = this;
        let itemsToProcess = 0;
        let maxScrollerHeight = 0;
        groups.forEach((group) => {
            var _a, _b;
            if (maxItems > 0 && itemsToProcess < maxItems) {
                maxScrollerHeight += ((_a = group === null || group === void 0 ? void 0 : group.titleEl) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0;
                maxScrollerHeight += ((_b = group === null || group === void 0 ? void 0 : group.separatorEl) === null || _b === void 0 ? void 0 : _b.offsetHeight) || 0;
                group.items.forEach((item) => {
                    if (itemsToProcess < maxItems) {
                        maxScrollerHeight += item.offsetHeight;
                        itemsToProcess += 1;
                    }
                });
            }
        });
        return maxScrollerHeight;
    }
    closeCalciteDropdown() {
        this.calciteDropdownClose.emit();
        this.active = false;
        focusElement(this.triggers[0]);
    }
    focusOnFirstActiveOrFirstItem() {
        this.getFocusableElement(this.items.find((item) => item.active) || this.items[0]);
    }
    focusFirstItem() {
        const firstItem = this.items[0];
        this.getFocusableElement(firstItem);
    }
    focusLastItem() {
        const lastItem = this.items[this.items.length - 1];
        this.getFocusableElement(lastItem);
    }
    focusNextItem(e) {
        const index = this.itemIndex(e);
        const nextItem = this.items[index + 1] || this.items[0];
        this.getFocusableElement(nextItem);
    }
    focusPrevItem(e) {
        const index = this.itemIndex(e);
        const prevItem = this.items[index - 1] || this.items[this.items.length - 1];
        this.getFocusableElement(prevItem);
    }
    itemIndex(e) {
        return this.items.indexOf(e);
    }
    getFocusableElement(item) {
        if (!item) {
            return;
        }
        const target = item.attributes.isLink
            ? item.shadowRoot.querySelector("a")
            : item;
        focusElement(target);
    }
    openCalciteDropdown() {
        this.calciteDropdownOpen.emit();
        this.active = !this.active;
        const animationDelayInMs = 50;
        if (this.active) {
            setTimeout(() => this.focusOnFirstActiveOrFirstItem(), animationDelayInMs);
        }
        else {
            this.calciteDropdownClose.emit();
        }
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "active": ["activeHandler"],
        "alignment": ["alignmentHandler"]
    }; }
};
CalciteDropdown.style = calciteDropdownCss;

export { CalciteDropdown as calcite_dropdown };
