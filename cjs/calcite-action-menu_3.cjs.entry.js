'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dad2b533.js');
const resources = require('./resources-0f71316d.js');
const dom = require('./dom-c158885c.js');
const array = require('./array-83c006eb.js');
const guid = require('./guid-1ecb63ba.js');
const observers = require('./observers-e8c2a0ed.js');
const resources$1 = require('./resources-4565b62c.js');
const popper = require('./popper-11c688a0.js');
const CalciteHeading = require('./CalciteHeading-0a313fbe.js');
const resources$2 = require('./resources-0cf72c5f.js');
const key = require('./key-244ba28e.js');

const calciteActionMenuCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:flex;flex-direction:column;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size-1)}.menu ::slotted(calcite-action){display:flex;outline-offset:0;outline-color:transparent;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;margin:0.125rem}::slotted(calcite-action[active]){outline:2px solid var(--calcite-ui-brand);outline-offset:2px;outline-offset:0px}.default-trigger{align-self:stretch;flex:0 1 auto;height:100%;position:relative}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){align-self:stretch;flex:0 1 auto;height:100%;position:relative}.menu{flex-direction:column;flex-wrap:nowrap;outline:2px solid transparent;outline-offset:2px}";

const SUPPORTED_BUTTON_NAV_KEYS = ["ArrowUp", "ArrowDown"];
const SUPPORTED_MENU_NAV_KEYS = ["ArrowUp", "ArrowDown", "End", "Home"];
let CalciteActionMenu = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteActionMenuOpenChange = index.createEvent(this, "calciteActionMenuOpenChange", 7);
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * Indicates whether widget is expanded.
     */
    this.expanded = false;
    /**
     * Opens the action menu.
     */
    this.open = false;
    /** Describes the type of positioning to use for the overlaid content. If your element is in a fixed container, use the 'fixed' value. */
    this.overlayPositioning = "absolute";
    /**
     * Determines where the component will be positioned relative to the referenceElement.
     * @see [PopperPlacement](https://github.com/Esri/calcite-components/blob/master/src/utils/popper.ts#L25)
     */
    this.placement = "auto";
    this.actionElements = [];
    this.mutationObserver = observers.createObserver("mutation", () => this.getActions());
    this.guid = `calcite-action-menu-${guid.guid()}`;
    this.menuId = `${this.guid}-menu`;
    this.menuButtonId = `${this.guid}-menu-button`;
    this.activeMenuItemIndex = -1;
    // --------------------------------------------------------------------------
    //
    //  Component Methods
    //
    // --------------------------------------------------------------------------
    this.connectMenuButtonEl = () => {
      const { el, menuButtonId, menuId, open, label } = this;
      const menuButtonEl = dom.getSlotted(el, resources.SLOTS.trigger) || this.defaultMenuButtonEl;
      if (this.menuButtonEl === menuButtonEl) {
        return;
      }
      this.disconnectMenuButtonEl();
      this.menuButtonEl = menuButtonEl;
      this.setTooltipReferenceElement();
      if (!menuButtonEl) {
        return;
      }
      menuButtonEl.active = open;
      menuButtonEl.setAttribute("aria-controls", menuId);
      menuButtonEl.setAttribute("aria-expanded", open.toString());
      menuButtonEl.setAttribute("aria-haspopup", "true");
      if (!menuButtonEl.id) {
        menuButtonEl.id = menuButtonId;
      }
      if (!menuButtonEl.label) {
        menuButtonEl.label = label;
      }
      if (!menuButtonEl.text) {
        menuButtonEl.text = label;
      }
      menuButtonEl.addEventListener("click", this.menuButtonClick);
      menuButtonEl.addEventListener("keydown", this.menuButtonKeyDown);
      menuButtonEl.addEventListener("keyup", this.menuButtonKeyUp);
    };
    this.disconnectMenuButtonEl = () => {
      const { menuButtonEl } = this;
      if (!menuButtonEl) {
        return;
      }
      menuButtonEl.removeEventListener("click", this.menuButtonClick);
      menuButtonEl.removeEventListener("keydown", this.menuButtonKeyDown);
      menuButtonEl.removeEventListener("keyup", this.menuButtonKeyUp);
    };
    this.setDefaultMenuButtonEl = (el) => {
      this.defaultMenuButtonEl = el;
      this.connectMenuButtonEl();
    };
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.handleCalciteActionClick = () => {
      this.open = false;
      this.setFocus();
    };
    this.menuButtonClick = () => {
      this.toggleOpen();
    };
    this.setTooltipReferenceElement = () => {
      const { el, expanded, menuButtonEl } = this;
      const slotted = dom.getSlotted(el, resources.SLOTS.tooltip);
      const tooltip = (slotted === null || slotted === void 0 ? void 0 : slotted.tagName) === "SLOT" ? slotted.assignedElements()[0] : slotted;
      if ((tooltip === null || tooltip === void 0 ? void 0 : tooltip.tagName) === "CALCITE-TOOLTIP") {
        tooltip.referenceElement = !expanded ? menuButtonEl : null;
      }
    };
    this.updateAction = (action, index) => {
      const { guid, activeMenuItemIndex } = this;
      const id = `${guid}-action-${index}`;
      action.tabIndex = -1;
      action.setAttribute("role", "menuitem");
      if (!action.id) {
        action.id = id;
      }
      action.active = index === activeMenuItemIndex;
    };
    this.updateActions = (actions) => {
      actions === null || actions === void 0 ? void 0 : actions.forEach(this.updateAction);
    };
    this.getActions = () => {
      const { el } = this;
      const assignedActions = this.getAssignedElements().filter((element) => element.tagName === "CALCITE-ACTION" && element.slot !== "trigger");
      const actionElements = assignedActions.length
        ? assignedActions
        : Array.from(el.querySelectorAll("calcite-action:not([slot=trigger])"));
      this.updateActions(actionElements);
      this.actionElements = actionElements;
      this.connectMenuButtonEl();
    };
    this.menuButtonKeyUp = (event) => {
      const { key } = event;
      const { actionElements } = this;
      if (!this.isValidKey(key, SUPPORTED_BUTTON_NAV_KEYS)) {
        return;
      }
      event.preventDefault();
      if (!actionElements.length) {
        return;
      }
      this.toggleOpen(true);
      this.handleActionNavigation(key, actionElements);
    };
    this.menuButtonKeyDown = (event) => {
      const { key } = event;
      if (!this.isValidKey(key, SUPPORTED_BUTTON_NAV_KEYS)) {
        return;
      }
      event.preventDefault();
    };
    this.menuActionsContainerKeyDown = (event) => {
      const { key } = event;
      const { actionElements, activeMenuItemIndex } = this;
      if (key === "Tab") {
        this.open = false;
        return;
      }
      if (key === " " || key === "Enter") {
        event.preventDefault();
        const action = actionElements[activeMenuItemIndex];
        action ? action.click() : this.toggleOpen(false);
        return;
      }
      if (this.isValidKey(key, SUPPORTED_MENU_NAV_KEYS)) {
        event.preventDefault();
      }
    };
    this.menuActionsContainerKeyUp = (event) => {
      const { key } = event;
      const { actionElements } = this;
      if (key === "Escape") {
        this.toggleOpen(false);
        return;
      }
      if (!this.isValidKey(key, SUPPORTED_MENU_NAV_KEYS)) {
        return;
      }
      event.preventDefault();
      if (!actionElements.length) {
        return;
      }
      this.handleActionNavigation(key, actionElements);
    };
    this.handleActionNavigation = (key, actions) => {
      const currentIndex = this.activeMenuItemIndex;
      if (key === "Home") {
        this.activeMenuItemIndex = 0;
      }
      if (key === "End") {
        this.activeMenuItemIndex = actions.length - 1;
      }
      if (key === "ArrowUp") {
        this.activeMenuItemIndex = array.getRoundRobinIndex(Math.max(currentIndex - 1, -1), actions.length);
      }
      if (key === "ArrowDown") {
        this.activeMenuItemIndex = array.getRoundRobinIndex(currentIndex + 1, actions.length);
      }
    };
    this.toggleOpenEnd = () => {
      this.setFocus();
      this.el.removeEventListener("calcitePopoverOpen", this.toggleOpenEnd);
    };
    this.toggleOpen = (value = !this.open) => {
      this.el.addEventListener("calcitePopoverOpen", this.toggleOpenEnd);
      this.open = value;
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    var _a;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.observe(this.el, { childList: true, subtree: true });
    this.getActions();
  }
  disconnectedCallback() {
    var _a;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    this.disconnectMenuButtonEl();
  }
  expandedHandler() {
    this.open = false;
    this.setTooltipReferenceElement();
  }
  openHandler(open) {
    this.activeMenuItemIndex = this.open ? 0 : -1;
    if (this.menuButtonEl) {
      this.menuButtonEl.active = open;
    }
    this.calciteActionMenuOpenChange.emit(open);
  }
  closeCalciteActionMenuOnClick(event) {
    const composedPath = event.composedPath();
    if (composedPath.includes(this.el)) {
      return;
    }
    this.open = false;
  }
  activeMenuItemIndexHandler() {
    this.updateActions(this.actionElements);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    dom.focusElement(this.open ? this.menuEl : this.menuButtonEl);
  }
  renderMenuButton() {
    const { el, label, scale } = this;
    const menuButtonSlot = (index.h("slot", { name: resources.SLOTS.trigger }, index.h("calcite-action", { class: resources.CSS.defaultTrigger, icon: resources.ICONS.menu, ref: this.setDefaultMenuButtonEl, scale: scale, text: label })));
    return dom.getSlotted(el, resources.SLOTS.tooltip) ? (index.h("calcite-tooltip-manager", null, menuButtonSlot)) : (menuButtonSlot);
  }
  renderMenuItems() {
    const { actionElements, activeMenuItemIndex, open, menuId, menuButtonEl, label, placement, overlayPositioning } = this;
    const activeAction = actionElements[activeMenuItemIndex];
    const activeDescendantId = (activeAction === null || activeAction === void 0 ? void 0 : activeAction.id) || null;
    return (index.h("calcite-popover", { disablePointer: true, label: label, offsetDistance: 0, open: open, overlayPositioning: overlayPositioning, placement: placement, referenceElement: menuButtonEl }, index.h("div", { "aria-activedescendant": activeDescendantId, "aria-labelledby": menuButtonEl === null || menuButtonEl === void 0 ? void 0 : menuButtonEl.id, class: resources.CSS.menu, id: menuId, onClick: this.handleCalciteActionClick, onKeyDown: this.menuActionsContainerKeyDown, onKeyUp: this.menuActionsContainerKeyUp, ref: (el) => (this.menuEl = el), role: "menu", tabIndex: -1 }, index.h("slot", null))));
  }
  render() {
    return (index.h(index.Fragment, null, this.renderMenuButton(), this.renderMenuItems(), index.h("slot", { name: resources.SLOTS.tooltip })));
  }
  getAssignedElements() {
    return Array.from(this.el.querySelectorAll("slot"))
      .map((slot) => slot.assignedElements({ flatten: true }))
      .reduce((ar, val) => ar.concat(val), []);
  }
  isValidKey(key, supportedKeys) {
    return !!supportedKeys.find((k) => k === key);
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "expanded": ["expandedHandler"],
    "open": ["openHandler"],
    "activeMenuItemIndex": ["activeMenuItemIndexHandler"]
  }; }
};
CalciteActionMenu.style = calciteActionMenuCss;

const calcitePopoverCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block;position:absolute;z-index:900;transform:scale(0)}.calcite-popper-anim{position:relative;z-index:1;transition:var(--calcite-popper-transition);visibility:hidden;transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:0.25rem}:host([data-popper-placement^=bottom]) .calcite-popper-anim{transform:translateY(-5px)}:host([data-popper-placement^=top]) .calcite-popper-anim{transform:translateY(5px)}:host([data-popper-placement^=left]) .calcite-popper-anim{transform:translateX(5px)}:host([data-popper-placement^=right]) .calcite-popper-anim{transform:translateX(-5px)}:host([data-popper-placement]) .calcite-popper-anim--active{opacity:1;visibility:visible;transform:translate(0)}.arrow,.arrow::before{position:absolute;width:8px;height:8px;z-index:-1}.arrow::before{content:\"\";box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);transform:rotate(45deg);background:var(--calcite-ui-foreground-1)}:host([data-popper-placement^=top]) .arrow{bottom:-4px}:host([data-popper-placement^=bottom]) .arrow{top:-4px}:host([data-popper-placement^=left]) .arrow{right:-4px}:host([data-popper-placement^=right]) .arrow{left:-4px}:host{pointer-events:none}:host([open]){pointer-events:initial}.calcite-popper-anim{background-color:var(--calcite-ui-foreground-1);border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);border-radius:0.25rem}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}.header{border-width:0;border-bottom-width:1px;border-bottom-color:var(--calcite-ui-border-3);border-style:solid;display:flex;flex:1 1 auto;align-items:stretch;background-color:var(--calcite-ui-foreground-1);justify-content:flex-start}.heading{display:block;flex:1 1 auto;font-weight:var(--calcite-font-weight-medium);margin:0;padding-left:1rem;padding-right:1rem;padding-top:0.75rem;padding-bottom:0.75rem;align-self:center;color:var(--calcite-ui-text-1);font-size:var(--calcite-font-size-0);line-height:1.375;white-space:normal;word-wrap:break-word;word-break:break-word}.container{background-color:var(--calcite-ui-foreground-1);position:relative;display:flex;overflow:hidden;flex-wrap:nowrap;flex-direction:row;height:100%;color:var(--calcite-ui-text-1);border-radius:0.25rem}.container.has-header{flex-direction:column}.content{display:flex;flex-direction:column;flex-wrap:nowrap;align-self:center;height:100%;width:100%}.calcite--rtl .close-button{border-radius:0.25rem 0 0 0.25rem}::slotted(calcite-panel),::slotted(calcite-flow){height:100%}";

let CalcitePopover = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calcitePopoverClose = index.createEvent(this, "calcitePopoverClose", 7);
    this.calcitePopoverOpen = index.createEvent(this, "calcitePopoverOpen", 7);
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * Display a close button within the Popover.
     * @deprecated use dismissible instead.
     */
    this.closeButton = false;
    /**
     * Display a close button within the Popover.
     */
    this.dismissible = false;
    /**
     * Prevents flipping the popover's placement when it starts to overlap its reference element.
     */
    this.disableFlip = false;
    /**
     * Removes the caret pointer.
     */
    this.disablePointer = false;
    /**
     * Offset the position of the popover away from the reference element.
     * @default 6
     */
    this.offsetDistance = popper.defaultOffsetDistance;
    /**
     * Offset the position of the popover along the reference element.
     */
    this.offsetSkidding = 0;
    /**
     * Display and position the component.
     */
    this.open = false;
    /** Describes the type of positioning to use for the overlaid content. If your element is in a fixed container, use the 'fixed' value. */
    this.overlayPositioning = "absolute";
    /**
     * Determines where the component will be positioned relative to the referenceElement.
     * @see [PopperPlacement](https://github.com/Esri/calcite-components/blob/master/src/utils/popper.ts#L25)
     */
    this.placement = "auto";
    /** Text for close button.
     * @default "Close"
     */
    this.intlClose = resources$1.TEXT.close;
    this.guid = `calcite-popover-${guid.guid()}`;
    this.activeTransitionProp = "opacity";
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.setUpReferenceElement = () => {
      this.removeReferences();
      this.effectiveReferenceElement = this.getReferenceElement();
      const { el, referenceElement, effectiveReferenceElement } = this;
      if (referenceElement && !effectiveReferenceElement) {
        console.warn(`${el.tagName}: reference-element id "${referenceElement}" was not found.`, {
          el
        });
      }
      this.addReferences();
      this.createPopper();
    };
    this.getId = () => {
      return this.el.id || this.guid;
    };
    this.setExpandedAttr = () => {
      const { effectiveReferenceElement, open } = this;
      if (!effectiveReferenceElement) {
        return;
      }
      effectiveReferenceElement.setAttribute(resources$1.ARIA_EXPANDED, open.toString());
    };
    this.addReferences = () => {
      const { effectiveReferenceElement } = this;
      if (!effectiveReferenceElement) {
        return;
      }
      const id = this.getId();
      effectiveReferenceElement.setAttribute(resources$1.POPOVER_REFERENCE, id);
      effectiveReferenceElement.setAttribute(resources$1.ARIA_CONTROLS, id);
      this.setExpandedAttr();
    };
    this.removeReferences = () => {
      const { effectiveReferenceElement } = this;
      if (!effectiveReferenceElement) {
        return;
      }
      effectiveReferenceElement.removeAttribute(resources$1.POPOVER_REFERENCE);
      effectiveReferenceElement.removeAttribute(resources$1.ARIA_CONTROLS);
      effectiveReferenceElement.removeAttribute(resources$1.ARIA_EXPANDED);
    };
    this.hide = () => {
      this.open = false;
    };
    this.transitionEnd = (event) => {
      if (event.propertyName === this.activeTransitionProp) {
        this.open ? this.calcitePopoverOpen.emit() : this.calcitePopoverClose.emit();
      }
    };
  }
  offsetDistanceOffsetHandler() {
    this.reposition();
  }
  offsetSkiddingHandler() {
    this.reposition();
  }
  openHandler() {
    this.reposition();
    this.setExpandedAttr();
  }
  placementHandler() {
    this.reposition();
  }
  referenceElementHandler() {
    this.setUpReferenceElement();
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  componentWillLoad() {
    this.setUpReferenceElement();
  }
  componentDidLoad() {
    this.reposition();
  }
  disconnectedCallback() {
    this.removeReferences();
    this.destroyPopper();
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Updates the position of the component. */
  async reposition() {
    const { popper: popper$1, el, placement } = this;
    const modifiers = this.getModifiers();
    popper$1
      ? await popper.updatePopper({
        el,
        modifiers,
        placement,
        popper: popper$1
      })
      : this.createPopper();
  }
  /** Sets focus on the component. */
  async setFocus(focusId) {
    var _a;
    const { closeButtonEl } = this;
    if (focusId === "close-button" && closeButtonEl) {
      index.forceUpdate(closeButtonEl);
      closeButtonEl.setFocus();
      return;
    }
    (_a = this.el) === null || _a === void 0 ? void 0 : _a.focus();
  }
  /** Toggles the popover's open property. */
  async toggle(value = !this.open) {
    this.open = value;
  }
  getReferenceElement() {
    const { referenceElement, el } = this;
    return ((typeof referenceElement === "string"
      ? dom.queryElementRoots(el, `#${referenceElement}`)
      : referenceElement) || null);
  }
  getModifiers() {
    const { arrowEl, flipPlacements, disableFlip, disablePointer, offsetDistance, offsetSkidding } = this;
    const flipModifier = {
      name: "flip",
      enabled: !disableFlip
    };
    if (flipPlacements) {
      flipModifier.options = {
        fallbackPlacements: flipPlacements
      };
    }
    const arrowModifier = {
      name: "arrow",
      enabled: !disablePointer
    };
    if (arrowEl) {
      arrowModifier.options = {
        element: arrowEl
      };
    }
    const offsetModifier = {
      name: "offset",
      enabled: true,
      options: {
        offset: [offsetSkidding, offsetDistance]
      }
    };
    return [arrowModifier, flipModifier, offsetModifier];
  }
  createPopper() {
    this.destroyPopper();
    const { el, placement, effectiveReferenceElement: referenceEl, overlayPositioning } = this;
    const modifiers = this.getModifiers();
    this.popper = popper.createPopper({
      el,
      modifiers,
      overlayPositioning,
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
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderCloseButton() {
    const { dismissible, closeButton, intlClose } = this;
    return dismissible || closeButton ? (index.h("calcite-action", { class: resources$1.CSS.closeButton, onClick: this.hide, ref: (closeButtonEl) => (this.closeButtonEl = closeButtonEl), text: intlClose }, index.h("calcite-icon", { icon: "x", scale: "m" }))) : null;
  }
  renderHeader() {
    const { heading, headingLevel } = this;
    const headingNode = heading ? (index.h(CalciteHeading.CalciteHeading, { class: resources$1.CSS.heading, level: headingLevel || resources$1.HEADING_LEVEL }, heading)) : null;
    return headingNode ? (index.h("div", { class: resources$1.CSS.header }, headingNode, this.renderCloseButton())) : null;
  }
  render() {
    const { effectiveReferenceElement, el, heading, label, open, disablePointer } = this;
    const rtl = dom.getElementDir(el) === "rtl";
    const displayed = effectiveReferenceElement && open;
    const hidden = !displayed;
    const arrowNode = !disablePointer ? (index.h("div", { class: resources$1.CSS.arrow, ref: (arrowEl) => (this.arrowEl = arrowEl) })) : null;
    return (index.h(index.Host, { "aria-hidden": hidden.toString(), "aria-label": label, "calcite-hydrated-hidden": hidden, id: this.getId(), role: "dialog" }, index.h("div", { class: {
        [dom.CSS_UTILITY.rtl]: rtl,
        [popper.CSS.animation]: true,
        [popper.CSS.animationActive]: displayed
      }, onTransitionEnd: this.transitionEnd }, arrowNode, index.h("div", { class: {
        [resources$1.CSS.hasHeader]: !!heading,
        [resources$1.CSS.container]: true
      } }, this.renderHeader(), index.h("div", { class: resources$1.CSS.content }, index.h("slot", null)), !heading ? this.renderCloseButton() : null))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "offsetDistance": ["offsetDistanceOffsetHandler"],
    "offsetSkidding": ["offsetSkiddingHandler"],
    "open": ["openHandler"],
    "placement": ["placementHandler"],
    "referenceElement": ["referenceElementHandler"]
  }; }
};
CalcitePopover.style = calcitePopoverCss;

const calciteTooltipManagerCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block}";

let CalciteTooltipManager = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.hoverTimeouts = new WeakMap();
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * CSS Selector to match reference elements for tooltips. Reference elements will be identified by this selector in order to open their associated tooltip.
     * @default `[data-calcite-tooltip-reference]`
     */
    this.selector = `[${resources$2.TOOLTIP_REFERENCE}]`;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.queryTooltip = (element) => {
      var _a;
      const { selector, el } = this;
      const id = (_a = element.closest(selector)) === null || _a === void 0 ? void 0 : _a.getAttribute(resources$2.TOOLTIP_REFERENCE);
      return dom.queryElementRoots(el, `#${id}`);
    };
    this.clearHoverTimeout = (tooltip) => {
      const { hoverTimeouts } = this;
      if (hoverTimeouts.has(tooltip)) {
        window.clearTimeout(hoverTimeouts.get(tooltip));
        hoverTimeouts.delete(tooltip);
      }
    };
    this.closeExistingTooltip = () => {
      const { tooltipEl } = this;
      if (tooltipEl) {
        this.toggleTooltip(tooltipEl, false);
      }
    };
    this.focusTooltip = ({ tooltip, value }) => {
      this.closeExistingTooltip();
      if (value) {
        this.clearHoverTimeout(tooltip);
      }
      this.toggleTooltip(tooltip, value);
    };
    this.toggleTooltip = (tooltip, value) => {
      tooltip.open = value;
      if (value) {
        this.tooltipEl = tooltip;
      }
    };
    this.hoverToggle = ({ tooltip, value }) => {
      const { hoverTimeouts } = this;
      hoverTimeouts.delete(tooltip);
      if (value) {
        this.closeExistingTooltip();
      }
      this.toggleTooltip(tooltip, value);
    };
    this.hoverTooltip = ({ tooltip, value }) => {
      this.clearHoverTimeout(tooltip);
      const { hoverTimeouts } = this;
      const timeoutId = window.setTimeout(() => this.hoverToggle({ tooltip, value }), resources$2.TOOLTIP_DELAY_MS );
      hoverTimeouts.set(tooltip, timeoutId);
    };
    this.activeTooltipHover = (event) => {
      const { tooltipEl, hoverTimeouts } = this;
      const { type } = event;
      if (!tooltipEl) {
        return;
      }
      if (type === "mouseover" && event.composedPath().includes(tooltipEl)) {
        this.clearHoverTimeout(tooltipEl);
      }
      else if (type === "mouseout" && !hoverTimeouts.has(tooltipEl)) {
        this.hoverTooltip({ tooltip: tooltipEl, value: false });
      }
    };
    this.hoverEvent = (event, value) => {
      const tooltip = this.queryTooltip(event.target);
      this.activeTooltipHover(event);
      if (!tooltip) {
        return;
      }
      this.hoverTooltip({ tooltip, value });
    };
    this.focusEvent = (event, value) => {
      const tooltip = this.queryTooltip(event.target);
      if (!tooltip || tooltip === this.clickedTooltip) {
        this.clickedTooltip = null;
        return;
      }
      this.focusTooltip({ tooltip, value });
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    return index.h("slot", null);
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  keyUpHandler(event) {
    if (key.getKey(event.key) === "Escape") {
      const { tooltipEl } = this;
      if (tooltipEl) {
        this.clearHoverTimeout(tooltipEl);
        this.toggleTooltip(tooltipEl, false);
      }
    }
  }
  mouseEnterShow(event) {
    this.hoverEvent(event, true);
  }
  mouseLeaveHide(event) {
    this.hoverEvent(event, false);
  }
  clickHandler(event) {
    const clickedTooltip = this.queryTooltip(event.target);
    this.clickedTooltip = clickedTooltip;
    if (clickedTooltip) {
      this.toggleTooltip(clickedTooltip, false);
    }
  }
  focusShow(event) {
    this.focusEvent(event, true);
  }
  blurHide(event) {
    this.focusEvent(event, false);
  }
  get el() { return index.getElement(this); }
};
CalciteTooltipManager.style = calciteTooltipManagerCss;

exports.calcite_action_menu = CalciteActionMenu;
exports.calcite_popover = CalcitePopover;
exports.calcite_tooltip_manager = CalciteTooltipManager;
