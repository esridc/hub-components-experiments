import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-17d4341f.js';
var calciteRadioButtonGroupCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;max-width:100vw}:host([layout=horizontal]){-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}:host([layout=vertical]){-ms-flex-direction:column;flex-direction:column}";
var CalciteRadioButtonGroup = /** @class */ (function () {
    function CalciteRadioButtonGroup(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        /** The disabled state of the radio button group. */
        this.disabled = false;
        /** The radio button group's hidden status.  When a radio button group is hidden none of its options are focusable or checkable. */
        this.hidden = false;
        /** The layout direction of the radio buttons in a group. */
        this.layout = "horizontal";
        /** Requires that a value is selected for the radio button group before the parent form will submit. */
        this.required = false;
        /** The scale (size) of the radio button group. */
        this.scale = "m";
        /** The color theme of the radio button group. */
        this.theme = "light";
        //--------------------------------------------------------------------------
        //
        //  Private Methods
        //
        //--------------------------------------------------------------------------
        this.passPropsToRadioButtons = function () {
            var radioButtons = _this.el.querySelectorAll("calcite-radio-button");
            if (radioButtons.length > 0) {
                radioButtons.forEach(function (radioButton) {
                    radioButton.disabled = _this.disabled || radioButton.disabled;
                    radioButton.hidden = _this.hidden;
                    radioButton.name = _this.name;
                    radioButton.required = _this.required;
                    radioButton.scale = _this.scale;
                    radioButton.theme = _this.theme;
                });
            }
        };
        this.calciteRadioButtonGroupChange = createEvent(this, "calciteRadioButtonGroupChange", 7);
    }
    CalciteRadioButtonGroup.prototype.onDisabledChange = function () {
        this.passPropsToRadioButtons();
    };
    CalciteRadioButtonGroup.prototype.onHiddenChange = function () {
        this.passPropsToRadioButtons();
    };
    CalciteRadioButtonGroup.prototype.onLayoutChange = function () {
        this.passPropsToRadioButtons();
    };
    CalciteRadioButtonGroup.prototype.onScaleChange = function () {
        this.passPropsToRadioButtons();
    };
    CalciteRadioButtonGroup.prototype.onThemeChange = function () {
        this.passPropsToRadioButtons();
    };
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    CalciteRadioButtonGroup.prototype.connectedCallback = function () {
        this.passPropsToRadioButtons();
    };
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    CalciteRadioButtonGroup.prototype.radioButtonChangeHandler = function (event) {
        this.calciteRadioButtonGroupChange.emit(event.target.value);
    };
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    CalciteRadioButtonGroup.prototype.render = function () {
        return (h(Host, { role: "radiogroup" }, h("slot", null)));
    };
    Object.defineProperty(CalciteRadioButtonGroup.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalciteRadioButtonGroup, "watchers", {
        get: function () {
            return {
                "disabled": ["onDisabledChange"],
                "hidden": ["onHiddenChange"],
                "layout": ["onLayoutChange"],
                "scale": ["onScaleChange"],
                "theme": ["onThemeChange"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return CalciteRadioButtonGroup;
}());
CalciteRadioButtonGroup.style = calciteRadioButtonGroupCss;
export { CalciteRadioButtonGroup as calcite_radio_button_group };
