import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-17d4341f.js';
var CalciteOption = /** @class */ (function () {
    function CalciteOption(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        /**
         * When true, it prevents the option from being selected.
         */
        this.disabled = false;
        this.mutationObserver = new MutationObserver(function () {
            _this.ensureTextContentDependentProps();
            _this.calciteOptionChange.emit();
        });
        this.calciteOptionChange = createEvent(this, "calciteOptionChange", 7);
    }
    CalciteOption.prototype.handlePropChange = function (_newValue, _oldValue, propName) {
        if (propName === "label" || propName === "value") {
            this.ensureTextContentDependentProps();
        }
        this.calciteOptionChange.emit();
    };
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    CalciteOption.prototype.ensureTextContentDependentProps = function () {
        var textContent = this.el.textContent;
        if (!this.label || this.label === this.internallySetLabel) {
            this.label = textContent;
            this.internallySetLabel = textContent;
        }
        if (!this.value || this.value === this.internallySetValue) {
            this.value = textContent;
            this.internallySetValue = textContent;
        }
    };
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    CalciteOption.prototype.connectedCallback = function () {
        this.ensureTextContentDependentProps();
        this.mutationObserver.observe(this.el, {
            characterData: true,
            subtree: true,
            attributeFilter: ["label", "value"]
        });
    };
    CalciteOption.prototype.disconnectedCallback = function () {
        this.mutationObserver.disconnect();
    };
    //--------------------------------------------------------------------------
    //
    //  Render Methods
    //
    //--------------------------------------------------------------------------
    CalciteOption.prototype.render = function () {
        return (h(Host, null, h("slot", null, this.label)));
    };
    Object.defineProperty(CalciteOption.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalciteOption, "watchers", {
        get: function () {
            return {
                "disabled": ["handlePropChange"],
                "label": ["handlePropChange"],
                "selected": ["handlePropChange"],
                "value": ["handlePropChange"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return CalciteOption;
}());
export { CalciteOption as calcite_option };
