import { r as registerInstance, c as createEvent, h, H as Host } from './index-17d4341f.js';

const CalciteOptionGroup = class {
    constructor(hostRef) {
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
    handlePropChange() {
        this.calciteOptionGroupChange.emit();
    }
    //--------------------------------------------------------------------------
    //
    //  Render Methods
    //
    //--------------------------------------------------------------------------
    render() {
        return (h(Host, null, h("div", null, this.label), h("slot", null)));
    }
    static get watchers() { return {
        "disabled": ["handlePropChange"],
        "label": ["handlePropChange"]
    }; }
};

export { CalciteOptionGroup as calcite_option_group };
