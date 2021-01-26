import { r as registerInstance, h, H as Host } from './index-17d4341f.js';
var hubCountdownCss = ":host{display:block}";
var HubCountdown = /** @class */ (function () {
    function HubCountdown(hostRef) {
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
    HubCountdown.prototype.calculateDiff = function () {
        console.log("hub-countdown...", [this.start, this.end]);
        console.log("hub-countdown... end", new Date(this.end));
        this.endDate = this.end ? new Date(this.end) : new Date();
        this.startDate = this.start ? new Date(this.start) : new Date();
        console.log("hub-countdown: endDate", this.endDate);
        var diff = Math.abs(this.endDate.getTime() - this.startDate.getTime());
        this.daysRemaining = Math.ceil(diff / (1000 * 3600 * 24));
    };
    HubCountdown.prototype.componentWillRender = function () {
        this.calculateDiff();
    };
    HubCountdown.prototype.render = function () {
        return (h(Host, null, h("slot", null), h("strong", null, this.daysRemaining), " ", this.endText));
    };
    return HubCountdown;
}());
HubCountdown.style = hubCountdownCss;
export { HubCountdown as hub_countdown };
