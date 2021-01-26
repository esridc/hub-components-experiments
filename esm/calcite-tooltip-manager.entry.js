import { r as registerInstance, h, H as Host } from './index-17d4341f.js';
import { e as getElementByAttributeId } from './dom-29efd1ef.js';
import { g as getKey } from './key-6f340c70.js';
import { T as TOOLTIP_REFERENCE, a as TOOLTIP_DELAY_MS } from './resources-2498fe08.js';

const CalciteTooltipManager = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.hoverTimeouts = new WeakMap();
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        /**
         * CSS Selector to match reference elements for tooltips.
         */
        this.selector = `[${TOOLTIP_REFERENCE}]`;
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.queryTooltip = (el) => {
            return getElementByAttributeId(el.closest(this.selector), TOOLTIP_REFERENCE);
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
            const timeoutId = window.setTimeout(() => this.hoverToggle({ tooltip, value }), TOOLTIP_DELAY_MS );
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
        return h(Host, null);
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    keyUpHandler(event) {
        if (getKey(event.key) === "Escape") {
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

export { CalciteTooltipManager as calcite_tooltip_manager };
