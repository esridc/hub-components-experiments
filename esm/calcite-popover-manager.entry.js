import { r as registerInstance, h, g as getElement, H as Host } from './index-17d4341f.js';
import { e as getElementByAttributeId } from './dom-29efd1ef.js';
import { P as POPOVER_REFERENCE } from './resources-f3ad7abe.js';

const CalcitePopoverManager = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        /**
         * CSS Selector to match reference elements for popovers.
         */
        this.selector = `[${POPOVER_REFERENCE}]`;
        //--------------------------------------------------------------------------
        //
        //  Private Methods
        //
        //--------------------------------------------------------------------------
        this.getRelatedPopover = (el) => {
            return getElementByAttributeId(el.closest(this.selector), POPOVER_REFERENCE);
        };
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    render() {
        return h(Host, null);
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    closeOpenPopovers(event) {
        const target = event.target;
        const { autoClose, el } = this;
        const popoverSelector = "calcite-popover";
        const isTargetInsidePopover = target.closest(popoverSelector);
        const relatedPopover = this.getRelatedPopover(target);
        if (autoClose && !isTargetInsidePopover) {
            Array.from(document.body.querySelectorAll(popoverSelector))
                .filter((popover) => popover.open && popover !== relatedPopover)
                .forEach((popover) => popover.toggle(false));
        }
        if (!el.contains(target) || !relatedPopover) {
            return;
        }
        relatedPopover.toggle();
    }
    get el() { return getElement(this); }
};

export { CalcitePopoverManager as calcite_popover_manager };
