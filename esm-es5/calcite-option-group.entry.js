import { r as registerInstance, c as createEvent, h, H as Host } from './index-17d4341f.js';
var CalciteOptionGroup = /** @class */ (function () {
    function CalciteOptionGroup(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        /**
         * When true, it prevents selection from any of its associated options.
         */
        this.disabled = false;
        this.calciteOptionGroupChange = createEvent(this, "calciteOptionGroupChange", 7);
    }
    CalciteOptionGroup.prototype.handlePropChange = function () {
        this.calciteOptionGroupChange.emit();
    };
    //--------------------------------------------------------------------------
    //
    //  Render Methods
    //
    //--------------------------------------------------------------------------
    CalciteOptionGroup.prototype.render = function () {
        return (h(Host, null, h("div", null, this.label), h("slot", null)));
    };
    Object.defineProperty(CalciteOptionGroup, "watchers", {
        get: function () {
            return {
                "disabled": ["handlePropChange"],
                "label": ["handlePropChange"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return CalciteOptionGroup;
}());
export { CalciteOptionGroup as calcite_option_group };
