import { r as registerInstance, h, H as Host } from './index-9fca3863.js';

const hubCountdownCss = ":host{display:block}";

let HubCountdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Start Date as a 'YYYY-MM-DD' string. e.g. "2020-12-31"
     * Leave blank to set to current time
     */
    this.start = null;
    /**
     * End Date as a 'YYYY-MM-DD'string. e.g. "2020-12-31"
     * Leave blank to set to current time
     */
    this.end = null;
    /**
     * Text to add after the date difference
     */
    this.endText = "days left";
  }
  calculateDiff() {
    console.log("hub-countdown...", [this.start, this.end]);
    console.log("hub-countdown... end", new Date(this.end));
    this.endDate = this.end ? new Date(this.end) : new Date();
    this.startDate = this.start ? new Date(this.start) : new Date();
    console.log("hub-countdown: endDate", this.endDate);
    var diff = Math.abs(this.endDate.getTime() - this.startDate.getTime());
    this.daysRemaining = Math.ceil(diff / (1000 * 3600 * 24));
  }
  componentWillRender() {
    this.calculateDiff();
  }
  render() {
    return (h(Host, null, h("slot", null), h("strong", null, this.daysRemaining), " ", this.endText));
  }
};
HubCountdown.style = hubCountdownCss;

export { HubCountdown as hub_countdown };
