import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'arcgis-survey',
  styleUrl: 'arcgis-survey.css',
  shadow: true,
})
export class ArcgisSurvey {
  @Prop() item = "1a712571473448e891978869cd899b38";
  iFrameEl: HTMLIFrameElement; 

  componentDidLoad() {
    const url = `https://survey123.arcgis.com/share/${this.item}`
    this.iFrameEl.src = url
  }
  embedCode() {
    return `<arcgis-survey item='${this.item}'></arcgis-survey>`
  }
  render() {
    return (
      <Host>
        <slot></slot>
        <iframe src="" id="survey-iframe" ref={(el: HTMLIFrameElement) => this.iFrameEl = el}></iframe>
        <hub-embed code={this.embedCode()} />
      </Host>
    );
  }

}