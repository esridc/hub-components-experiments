'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dad2b533.js');
const telemetryUtils = require('./telemetry-utils-5e765481.js');

const hubButtonCss = "";

let HubButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    telemetryUtils.sendTelemetry({
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
    return index.h("calcite-button", { appearance: "solid", color: "blue", scale: "m", round: false, href: "" }, this.text);
  }
};
HubButton.style = hubButtonCss;

exports.hub_button = HubButton;
