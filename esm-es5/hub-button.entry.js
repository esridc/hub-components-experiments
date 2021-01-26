import { r as registerInstance, h } from './index-17d4341f.js';
import { s as sendTelemetry } from './telemetry-utils-0201fa0e.js';
var hubButtonCss = "";
var HubButton = /** @class */ (function () {
    function HubButton(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Button text to display
         */
        this.text = "Click Me";
        /**
         * action to trigger when the button is clicked
         */
        this.action = function () { return 'foo'; };
    }
    HubButton.prototype.handleKeyDown = function () {
        console.log("hub-button click");
        // send Telemetry to <hub-telemetry>
        sendTelemetry({
            category: 'hub-component',
            action: 'hub-button:click',
            label: this.text
        });
        this.action();
    };
    HubButton.prototype.render = function () {
        // return <button class="hub-btn">
        //     {this.icon}
        //     {this.text}
        //   </button>;
        return h("calcite-button", { appearance: "solid", color: "blue", scale: "m", round: false, floating: true, href: "" }, this.text);
    };
    return HubButton;
}());
HubButton.style = hubButtonCss;
export { HubButton as hub_button };
