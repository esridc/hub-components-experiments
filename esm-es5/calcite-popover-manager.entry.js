import { r as registerInstance, h, g as getElement, H as Host } from './index-17d4341f.js';
import { e as getElementByAttributeId } from './dom-29efd1ef.js';
import { P as POPOVER_REFERENCE } from './resources-f3ad7abe.js';
var CalcitePopoverManager = /** @class */ (function () {
    function CalcitePopoverManager(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        /**
         * CSS Selector to match reference elements for popovers.
         */
        this.selector = "[" + POPOVER_REFERENCE + "]";
        //--------------------------------------------------------------------------
        //
        //  Private Methods
        //
        //--------------------------------------------------------------------------
        this.getRelatedPopover = function (el) {
            return getElementByAttributeId(el.closest(_this.selector), POPOVER_REFERENCE);
        };
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    CalcitePopoverManager.prototype.render = function () {
        return h(Host, null);
    };
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    CalcitePopoverManager.prototype.closeOpenPopovers = function (event) {
        var target = event.target;
        var _a = this, autoClose = _a.autoClose, el = _a.el;
        var popoverSelector = "calcite-popover";
        var isTargetInsidePopover = target.closest(popoverSelector);
        var relatedPopover = this.getRelatedPopover(target);
        if (autoClose && !isTargetInsidePopover) {
            Array.from(document.body.querySelectorAll(popoverSelector))
                .filter(function (popover) { return popover.open && popover !== relatedPopover; })
                .forEach(function (popover) { return popover.toggle(false); });
        }
        if (!el.contains(target) || !relatedPopover) {
            return;
        }
        relatedPopover.toggle();
    };
    Object.defineProperty(CalcitePopoverManager.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return CalcitePopoverManager;
}());
export { CalcitePopoverManager as calcite_popover_manager };
