import { r as registerInstance, h, H as Host, g as getElement } from './index-17d4341f.js';
import { a as getSlotted } from './dom-29efd1ef.js';
var CSS = {
    main: "main",
    mainReversed: "main--reversed",
    content: "content",
    footer: "footer"
};
var SLOTS = {
    centerRow: "center-row",
    primaryPanel: "primary-panel",
    contextualPanel: "contextual-panel",
    header: "shell-header",
    footer: "shell-footer"
};
var calciteShellCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{width:100%;height:100%;position:absolute;top:0;bottom:0;left:0;right:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden;--calcite-shell-tip-spacing:26vw}.main{height:100%;width:100%;-ms-flex:1 1 auto;flex:1 1 auto;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;position:relative;border-top:1px solid var(--calcite-ui-border-3);border-bottom:1px solid var(--calcite-ui-border-3);-ms-flex-pack:justify;justify-content:space-between;overflow:hidden}.main--reversed{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.content{height:100%;width:100%;position:absolute;left:0;right:0;bottom:0;top:0;z-index:0}::slotted(.header .heading){font-weight:var(--calcite-font-weight-normal);font-size:0.875rem;line-height:1.5}::slotted(calcite-shell-panel),::slotted(calcite-shell-center-row){position:relative;z-index:1}::slotted(calcite-tip-manager){border-radius:0.25rem;-webkit-box-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);box-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);position:absolute;-webkit-animation:in-up 300ms ease-in-out;animation:in-up 300ms ease-in-out;bottom:var(--calcite-spacing-plus-half);-webkit-box-sizing:border-box;box-sizing:border-box;left:var(--calcite-shell-tip-spacing);right:var(--calcite-shell-tip-spacing);z-index:2}.footer{padding:var(--calcite-spacing-half) var(--calcite-spacing)}";
var CalciteShell = /** @class */ (function () {
    function CalciteShell(hostRef) {
        registerInstance(this, hostRef);
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    CalciteShell.prototype.renderHeader = function () {
        var hasHeader = !!getSlotted(this.el, SLOTS.header);
        return hasHeader ? h("slot", { name: SLOTS.header }) : null;
    };
    CalciteShell.prototype.renderContent = function () {
        return (h("div", { class: CSS.content }, h("slot", null)));
    };
    CalciteShell.prototype.renderFooter = function () {
        var hasFooter = !!getSlotted(this.el, SLOTS.footer);
        return hasFooter ? (h("div", { class: CSS.footer }, h("slot", { name: SLOTS.footer }))) : null;
    };
    CalciteShell.prototype.renderMain = function () {
        var _a;
        var primaryPanel = getSlotted(this.el, SLOTS.primaryPanel);
        var mainClasses = (_a = {},
            _a[CSS.main] = true,
            _a[CSS.mainReversed] = (primaryPanel === null || primaryPanel === void 0 ? void 0 : primaryPanel.position) === "end",
            _a);
        return (h("div", { class: mainClasses }, h("slot", { name: SLOTS.primaryPanel }), this.renderContent(), h("slot", { name: SLOTS.centerRow }), h("slot", { name: SLOTS.contextualPanel })));
    };
    CalciteShell.prototype.render = function () {
        return (h(Host, null, this.renderHeader(), this.renderMain(), this.renderFooter()));
    };
    Object.defineProperty(CalciteShell.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return CalciteShell;
}());
CalciteShell.style = calciteShellCss;
export { CalciteShell as calcite_shell };
