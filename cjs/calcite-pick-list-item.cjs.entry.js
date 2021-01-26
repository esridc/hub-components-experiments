'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ad6d6974.js');
const dom = require('./dom-4924407a.js');
const resources = require('./resources-1447adb6.js');
const resources$1 = require('./resources-56abd2fb.js');

const calcitePickListItemCss = "@charset \"UTF-8\";@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex;margin:0 0 1px 0;color:var(--calcite-ui-text-1);-webkit-transition:background-color 150ms ease-in-out;transition:background-color 150ms ease-in-out;-webkit-animation:calcite-fade-in 150ms ease-in-out;animation:calcite-fade-in 150ms ease-in-out;-webkit-box-shadow:0 1px 0 var(--calcite-ui-border-3);box-shadow:0 1px 0 var(--calcite-ui-border-3);--calcite-icon-dot-size:16px}:host(:hover){background-color:var(--calcite-ui-foreground-2)}.icon{-ms-flex-align:center;align-items:center;color:var(--calcite-ui-brand);display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;line-height:0;margin:0 var(--calcite-spacing-half);opacity:0}.icon-dot{width:calc(var(--calcite-icon-dot-size) / 2);margin:calc(var(--calcite-icon-dot-size) / 2)}.icon-dot:before{content:\"•\"}:host([selected]) .icon{-webkit-transition:opacity 150ms ease-in-out;transition:opacity 150ms ease-in-out;opacity:1}.label{background-color:transparent;display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;padding:var(--calcite-spacing-three-quarters);-ms-flex-align:center;align-items:center;cursor:pointer;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.label:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}.text-container{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;overflow:hidden;pointer-events:none;padding:0 var(--calcite-spacing-quarter)}.title{font-size:0.75rem;line-height:1.5;word-wrap:break-word;word-break:break-word;color:var(--calcite-ui-text-1)}.description{color:var(--calcite-ui-text-3);font-family:var(--calcite-code-family);margin-top:var(--calcite-spacing-quarter);font-size:0.75rem;line-height:1.5;word-wrap:break-word;word-break:break-word}.actions{-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;justify-self:flex-end;margin:0}.actions--start~.label{padding-left:var(--calcite-spacing-quarter)}.calcite--rtl .actions--start~.label{padding-left:unset;padding-right:var(--calcite-spacing-quarter)}";

const CalcitePickListItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        this.intlRemove = resources$1.TEXT.remove;
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.pickListClickHandler = (event) => {
            if (this.disabled || (this.disableDeselect && this.selected)) {
                return;
            }
            this.shiftPressed = event.shiftKey;
            this.selected = !this.selected;
        };
        this.pickListKeyDownHandler = (event) => {
            if (event.key === " ") {
                event.preventDefault();
                if (this.disableDeselect && this.selected) {
                    return;
                }
                this.selected = !this.selected;
            }
        };
        this.removeClickHandler = () => {
            this.calciteListItemRemove.emit();
        };
        this.calciteListItemChange = index.createEvent(this, "calciteListItemChange", 7);
        this.calciteListItemRemove = index.createEvent(this, "calciteListItemRemove", 7);
        this.calciteListItemPropsChange = index.createEvent(this, "calciteListItemPropsChange", 7);
        this.calciteListItemValueChange = index.createEvent(this, "calciteListItemValueChange", 7);
    }
    descriptionWatchHandler() {
        this.calciteListItemPropsChange.emit();
    }
    labelWatchHandler() {
        this.calciteListItemPropsChange.emit();
    }
    metadataWatchHandler() {
        this.calciteListItemPropsChange.emit();
    }
    selectedWatchHandler() {
        this.calciteListItemChange.emit({
            item: this.el,
            value: this.value,
            selected: this.selected,
            shiftPressed: this.shiftPressed
        });
        this.shiftPressed = false;
    }
    valueWatchHandler(newValue, oldValue) {
        this.calciteListItemValueChange.emit({ oldValue, newValue });
    }
    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------
    /**
     * Used to toggle the selection state. By default this won't trigger an event.
     * The first argument allows the value to be coerced, rather than swapping values.
     */
    async toggleSelected(coerce) {
        if (this.disabled) {
            return;
        }
        this.selected = typeof coerce === "boolean" ? coerce : !this.selected;
    }
    async setFocus() {
        var _a;
        (_a = this.focusEl) === null || _a === void 0 ? void 0 : _a.focus();
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    renderIcon() {
        const { icon } = this;
        if (!icon) {
            return null;
        }
        return (index.h("span", { class: {
                [resources$1.CSS.icon]: true,
                [resources$1.CSS.iconDot]: icon === resources.ICON_TYPES.circle
            } }, icon === resources.ICON_TYPES.square ? index.h("calcite-icon", { icon: resources$1.ICONS.checked, scale: "s" }) : null));
    }
    renderRemoveAction() {
        return this.removable ? (index.h("calcite-action", { class: resources$1.CSS.remove, icon: resources$1.ICONS.remove, onClick: this.removeClickHandler, slot: resources$1.SLOTS.actionsEnd, text: this.intlRemove })) : null;
    }
    renderActionsStart() {
        const { el } = this;
        const hasActionsStart = dom.getSlotted(el, resources$1.SLOTS.actionsStart);
        return hasActionsStart ? (index.h("div", { class: { [resources$1.CSS.actions]: true, [resources$1.CSS.actionsStart]: true } }, index.h("slot", { name: resources$1.SLOTS.actionsStart }))) : null;
    }
    renderActionsEnd() {
        const { el, removable } = this;
        const hasActionsEnd = dom.getSlotted(el, resources$1.SLOTS.actionsEnd);
        return hasActionsEnd || removable ? (index.h("div", { class: { [resources$1.CSS.actions]: true, [resources$1.CSS.actionsEnd]: true } }, index.h("slot", { name: resources$1.SLOTS.actionsEnd }), this.renderRemoveAction())) : null;
    }
    render() {
        const { description, label } = this;
        return (index.h(index.Host, { "aria-checked": this.selected.toString(), role: "menuitemcheckbox" }, this.renderIcon(), this.renderActionsStart(), index.h("label", { "aria-label": label, class: resources$1.CSS.label, onClick: this.pickListClickHandler, onKeyDown: this.pickListKeyDownHandler, ref: (focusEl) => (this.focusEl = focusEl), tabIndex: 0 }, index.h("div", { class: resources$1.CSS.textContainer }, index.h("span", { class: resources$1.CSS.title }, label), description ? index.h("span", { class: resources$1.CSS.description }, description) : null)), this.renderActionsEnd()));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "description": ["descriptionWatchHandler"],
        "label": ["labelWatchHandler"],
        "metadata": ["metadataWatchHandler"],
        "selected": ["selectedWatchHandler"],
        "value": ["valueWatchHandler"]
    }; }
};
CalcitePickListItem.style = calcitePickListItemCss;

exports.calcite_pick_list_item = CalcitePickListItem;
