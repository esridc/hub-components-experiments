import { r as registerInstance, h, H as Host } from './index-9fca3863.js';

const arcgisSurveyCss = ":host{display:block}iframe{height:100%;width:100%;border:none}";

let ArcgisSurvey = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.item = "1a712571473448e891978869cd899b38";
  }
  componentDidLoad() {
    const url = `https://survey123.arcgis.com/share/${this.item}`;
    this.iFrameEl.src = url;
  }
  embedCode() {
    return `<arcgis-survey item='${this.item}'></arcgis-survey>`;
  }
  render() {
    return (h(Host, null, h("slot", null), h("iframe", { src: "", id: "survey-iframe", ref: (el) => this.iFrameEl = el }), h("hub-embed", { code: this.embedCode() })));
  }
};
ArcgisSurvey.style = arcgisSurveyCss;

export { ArcgisSurvey as arcgis_survey };
