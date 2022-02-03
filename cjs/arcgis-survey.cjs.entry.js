'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dad2b533.js');

const arcgisSurveyCss = ":host{display:block}iframe{height:100%;width:100%;border:none}";

let ArcgisSurvey = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, null, index.h("slot", null), index.h("iframe", { src: "", id: "survey-iframe", ref: (el) => this.iFrameEl = el }), index.h("hub-embed", { code: this.embedCode() })));
  }
};
ArcgisSurvey.style = arcgisSurveyCss;

exports.arcgis_survey = ArcgisSurvey;
