import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-17d4341f.js';

const CalciteOption = class {
    constructor(hostRef) {
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
        this.mutationObserver = new MutationObserver(() => {
            this.ensureTextContentDependentProps();
            this.calciteOptionChange.emit();
        });
        this.calciteOptionChange = createEvent(this, "calciteOptionChange", 7);
    }
    handlePropChange(_newValue, _oldValue, propName) {
        if (propName === "label" || propName === "value") {
            this.ensureTextContentDependentProps();
        }
        this.calciteOptionChange.emit();
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    ensureTextContentDependentProps() {
        const { el: { textContent } } = this;
        if (!this.label || this.label === this.internallySetLabel) {
            this.label = textContent;
            this.internallySetLabel = textContent;
        }
        if (!this.value || this.value === this.internallySetValue) {
            this.value = textContent;
            this.internallySetValue = textContent;
        }
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        this.ensureTextContentDependentProps();
        this.mutationObserver.observe(this.el, {
            characterData: true,
            subtree: true,
            attributeFilter: ["label", "value"]
        });
    }
    disconnectedCallback() {
        this.mutationObserver.disconnect();
    }
    //--------------------------------------------------------------------------
    //
    //  Render Methods
    //
    //--------------------------------------------------------------------------
    render() {
        return (h(Host, null, h("slot", null, this.label)));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "disabled": ["handlePropChange"],
        "label": ["handlePropChange"],
        "selected": ["handlePropChange"],
        "value": ["handlePropChange"]
    }; }
};

export { CalciteOption as calcite_option };
