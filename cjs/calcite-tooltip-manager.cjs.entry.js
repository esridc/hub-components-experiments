'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ad6d6974.js');
const dom = require('./dom-4924407a.js');
const key = require('./key-d6a0381e.js');
const resources = require('./resources-fb9d67d1.js');

const CalciteTooltipManager = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.hoverTimeouts = new WeakMap();
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        /**
         * CSS Selector to match reference elements for tooltips.
         */
        this.selector = `[${resources.TOOLTIP_REFERENCE}]`;
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.queryTooltip = (el) => {
            return dom.getElementByAttributeId(el.closest(this.selector), resources.TOOLTIP_REFERENCE);
        };
        this.clearHoverTimeout = (tooltip) => {
            const { hoverTimeouts } = this;
            if (hoverTimeouts.has(tooltip)) {
                window.clearTimeout(hoverTimeouts.get(tooltip));
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
            const timeoutId = window.setTimeout(() => this.hoverToggle({ tooltip, value }), resources.TOOLTIP_DELAY_MS );
            hoverTimeouts.set(tooltip, timeoutId);
        };
        this.activeTooltipHover = (event) => {
            const { tooltipEl, hoverTimeouts } = this;
            if (!tooltipEl || !hoverTimeouts.has(tooltipEl)) {
                return;
            }
            const hoveringActiveTooltip = event.composedPath().includes(tooltipEl);
            hoveringActiveTooltip
                ? this.clearHoverTimeout(tooltipEl)
                : this.hoverTooltip({ tooltip: tooltipEl, value: false });
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
            if (!tooltip) {
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
        return index.h(index.Host, null);
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
    focusShow(event) {
        this.focusEvent(event, true);
    }
    blurHide(event) {
        this.focusEvent(event, false);
    }
};

exports.calcite_tooltip_manager = CalciteTooltipManager;
