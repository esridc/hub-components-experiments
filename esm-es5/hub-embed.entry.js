import { r as registerInstance, h, H as Host } from './index-17d4341f.js';
var hubEmbedCss = ":host{display:block;width:200px}.code{width:100%;font-size:16px;padding:2px}";
var HubEmbed = /** @class */ (function () {
    function HubEmbed(hostRef) {
        registerInstance(this, hostRef);
        this.title = "Embed this card";
        this.description = "You can add this card to your own site. Copy the code below and paste into your site editor.";
        this.code = '<hub-survey />';
    }
    HubEmbed.prototype.componentDidLoad = function () {
        this.inputEl.value = this.code;
    };
    HubEmbed.prototype.copyText = function () {
        /* Select the text field */
        this.inputEl.select();
        this.inputEl.setSelectionRange(0, 99999); /*For mobile devices*/
        /* Copy the text inside the text field */
        document.execCommand("copy");
        console.log("copied code!");
        // this.confirmEl = 
        this.modalEl.active = false;
    };
    HubEmbed.prototype.showModal = function () {
        this.modalEl.active = true;
    };
    HubEmbed.prototype.render = function () {
        var _this = this;
        return (h(Host, null, h("slot", null), h("calcite-button", { onClick: function (_ev) { return _this.showModal(); }, slot: "primary", width: "full" }, "Embed"), h("calcite-modal", { ref: function (el) { return _this.modalEl = el; }, "aria-labelledby": "modal-title" }, h("h3", { slot: "header", id: "modal-title" }, this.title), h("div", { slot: "content" }, h("input", { type: "text", class: "code", ref: function (el) { return _this.inputEl = el; }, readonly: true })), h("calcite-button", { onClick: function (_ev) { return _this.copyText(); }, slot: "primary", width: "full" }, "Copy"))));
    };
    return HubEmbed;
}());
HubEmbed.style = hubEmbedCss;
export { HubEmbed as hub_embed };
