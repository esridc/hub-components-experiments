import { r as registerInstance, h, H as Host } from './index-17d4341f.js';
var arcgisSurveyCss = ":host{display:block}iframe{height:100%;width:100%;border:none}";
var ArcgisSurvey = /** @class */ (function () {
    function ArcgisSurvey(hostRef) {
        registerInstance(this, hostRef);
        this.item = "1a712571473448e891978869cd899b38";
    }
    ArcgisSurvey.prototype.componentDidLoad = function () {
        var url = "https://survey123.arcgis.com/share/" + this.item;
        this.iFrameEl.src = url;
    };
    ArcgisSurvey.prototype.embedCode = function () {
        return "<arcgis-survey item='" + this.item + "'></arcgis-survey>";
    };
    ArcgisSurvey.prototype.render = function () {
        var _this = this;
        return (h(Host, null, h("slot", null), h("iframe", { src: "", id: "survey-iframe", ref: function (el) { return _this.iFrameEl = el; } }), h("hub-embed", { code: this.embedCode() })));
    };
    return ArcgisSurvey;
}());
ArcgisSurvey.style = arcgisSurveyCss;
export { ArcgisSurvey as arcgis_survey };
