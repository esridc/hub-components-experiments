import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'arcgis-notebook',
  styleUrl: 'arcgis-notebook.css',
  shadow: true
})
export class Notebook {
  @Prop() item = "23bc9a4ea59d4bcea85b55b39ffcd866";
  @Prop() portal = "https://www.arcgis.com";
  @Prop() view:"preview" | "edit" = "preview";

  @State() previewUrl;
  
  iFrameEl: HTMLIFrameElement; 

  componentDidLoad() {
    if(this.view == "edit") {
      this.getEdit();
    } else {
      this.getPreview();
    }
  }
  getEdit() {
    const editUrl = `${this.portal}/home/notebook/notebook.html?id=${this.item}`;
    console.debug("ArcGIS Notebook getEdit", editUrl)
    this.iFrameEl.src = editUrl;
  }
  getPreview() {
    const resourceName = "notebook_preview.json";
    const previewUrl = `${this.portal}/sharing/rest/content/items/${this.item}/resources/${resourceName}`;
    
    fetch(previewUrl).then((response) => {
        response.json().then(json => {
          
          const doc = this.iFrameEl.contentWindow.document;
          doc.open();
          doc.write(json.html);
          doc.close();
        })
    }).catch((e) => {
      console.error("Error in arcgis-notebook getPreview", e)
    })    
    
  }
    
  render() {
    return (
      <Host>
        <span  class="notebook-title">
          <slot name="title"></slot>
        </span>
        <calcite-button 
          class="notebook-copy-button"
          appearance="solid"
          color="dark">
            Copy Notebook
          </calcite-button>
        <iframe src="" id="notebook-iframe" ref={(el: HTMLIFrameElement) => this.iFrameEl = el}></iframe>
      </Host>
    );
  }

}
