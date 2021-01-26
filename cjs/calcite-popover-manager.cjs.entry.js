'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ad6d6974.js');
const dom = require('./dom-4924407a.js');
const resources = require('./resources-3d824dd4.js');

const CalcitePopoverManager = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        /**
         * CSS Selector to match reference elements for popovers.
         */
        this.selector = `[${resources.POPOVER_REFERENCE}]`;
        //--------------------------------------------------------------------------
        //
        //  Private Methods
        //
        //--------------------------------------------------------------------------
        this.getRelatedPopover = (el) => {
            return dom.getElementByAttributeId(el.closest(this.selector), resources.POPOVER_REFERENCE);
        };
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    render() {
        return index.h(index.Host, null);
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
    get el() { return index.getElement(this); }
};

exports.calcite_popover_manager = CalcitePopoverManager;
