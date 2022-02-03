import { r as registerInstance, h } from './index-9fca3863.js';
import { s as sendTelemetry } from './telemetry-utils-54622ae3.js';

const hubButtonCss = "";

let HubButton = class {
  constructor(hostRef) {
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
  handleKeyDown() {
    console.log("hub-button click");
    // send Telemetry to <hub-telemetry>
    sendTelemetry({
      category: 'hub-component',
      action: 'hub-button:click',
      label: this.text
    });
    this.action();
  }
  render() {
    // return <button class="hub-btn">
    //     {this.icon}
    //     {this.text}
    //   </button>;
    return h("calcite-button", { appearance: "solid", color: "blue", scale: "m", round: false, href: "" }, this.text);
  }
};
HubButton.style = hubButtonCss;

export { HubButton as hub_button };
