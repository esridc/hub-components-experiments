import { r as registerInstance, h, H as Host } from './index-17d4341f.js';
import { e as getElementByAttributeId } from './dom-29efd1ef.js';
import { g as getKey } from './key-6f340c70.js';
import { T as TOOLTIP_REFERENCE, a as TOOLTIP_DELAY_MS } from './resources-2498fe08.js';
var CalciteTooltipManager = /** @class */ (function () {
    function CalciteTooltipManager(hostRef) {
        var _this = this;
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
        this.selector = "[" + TOOLTIP_REFERENCE + "]";
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.queryTooltip = function (el) {
            return getElementByAttributeId(el.closest(_this.selector), TOOLTIP_REFERENCE);
        };
        this.clearHoverTimeout = function (tooltip) {
            var hoverTimeouts = _this.hoverTimeouts;
            if (hoverTimeouts.has(tooltip)) {
                window.clearTimeout(hoverTimeouts.get(tooltip));
            }
        };
        this.closeExistingTooltip = function () {
            var tooltipEl = _this.tooltipEl;
            if (tooltipEl) {
                _this.toggleTooltip(tooltipEl, false);
            }
        };
        this.focusTooltip = function (_a) {
            var tooltip = _a.tooltip, value = _a.value;
            _this.closeExistingTooltip();
            if (value) {
                _this.clearHoverTimeout(tooltip);
            }
            _this.toggleTooltip(tooltip, value);
        };
        this.toggleTooltip = function (tooltip, value) {
            tooltip.open = value;
            if (value) {
                _this.tooltipEl = tooltip;
            }
        };
        this.hoverToggle = function (_a) {
            var tooltip = _a.tooltip, value = _a.value;
            var hoverTimeouts = _this.hoverTimeouts;
            hoverTimeouts.delete(tooltip);
            if (value) {
                _this.closeExistingTooltip();
            }
            _this.toggleTooltip(tooltip, value);
        };
        this.hoverTooltip = function (_a) {
            var tooltip = _a.tooltip, value = _a.value;
            _this.clearHoverTimeout(tooltip);
            var hoverTimeouts = _this.hoverTimeouts;
            var timeoutId = window.setTimeout(function () { return _this.hoverToggle({ tooltip: tooltip, value: value }); }, TOOLTIP_DELAY_MS);
            hoverTimeouts.set(tooltip, timeoutId);
        };
        this.activeTooltipHover = function (event) {
            var _a = _this, tooltipEl = _a.tooltipEl, hoverTimeouts = _a.hoverTimeouts;
            if (!tooltipEl || !hoverTimeouts.has(tooltipEl)) {
                return;
            }
            var hoveringActiveTooltip = event.composedPath().includes(tooltipEl);
            hoveringActiveTooltip
                ? _this.clearHoverTimeout(tooltipEl)
                : _this.hoverTooltip({ tooltip: tooltipEl, value: false });
        };
        this.hoverEvent = function (event, value) {
            var tooltip = _this.queryTooltip(event.target);
            _this.activeTooltipHover(event);
            if (!tooltip) {
                return;
            }
            _this.hoverTooltip({ tooltip: tooltip, value: value });
        };
        this.focusEvent = function (event, value) {
            var tooltip = _this.queryTooltip(event.target);
            if (!tooltip) {
                return;
            }
            _this.focusTooltip({ tooltip: tooltip, value: value });
        };
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    CalciteTooltipManager.prototype.render = function () {
        return h(Host, null);
    };
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    CalciteTooltipManager.prototype.keyUpHandler = function (event) {
        if (getKey(event.key) === "Escape") {
            var tooltipEl = this.tooltipEl;
            if (tooltipEl) {
                this.clearHoverTimeout(tooltipEl);
                this.toggleTooltip(tooltipEl, false);
            }
        }
    };
    CalciteTooltipManager.prototype.mouseEnterShow = function (event) {
        this.hoverEvent(event, true);
    };
    CalciteTooltipManager.prototype.mouseLeaveHide = function (event) {
        this.hoverEvent(event, false);
    };
    CalciteTooltipManager.prototype.focusShow = function (event) {
        this.focusEvent(event, true);
    };
    CalciteTooltipManager.prototype.blurHide = function (event) {
        this.focusEvent(event, false);
    };
    return CalciteTooltipManager;
}());
export { CalciteTooltipManager as calcite_tooltip_manager };
