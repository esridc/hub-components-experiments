import { Component, Host, h, Prop, State } from '@stencil/core';
import * as HubAPI from '../../utils/hub-api';
import { authenticateUser } from '../../utils/utils';
import { UserSession } from '@esri/arcgis-rest-auth';

@Component({
  tag: 'arcgis-notebook',
  styleUrl: 'arcgis-notebook.css',
  shadow: true
})
export class Notebook {
  @Prop() item = "9cd1f9bdc6794e63ae450087b3b67e05";
  @Prop() portal = "https://www.arcgis.com";
  @Prop() view:"preview" | "edit" = "preview";

  /**
   * ClientID to identify the app launching auth
   */
  @Prop() clientid: string = "WXC842NRBVB6NZ2r";

  /**
   * url of the ArcGIS Online organization
   */
  @Prop() orgurl: string = "https://www.arcgis.com";  

  /**
   * Serialized authentication information.
   */
  @Prop({ mutable: true }) session: string;

  @State() previewUrl;
  @State() notebook;

  iFrameEl: HTMLIFrameElement; 
  titleEl: HTMLElement; 

  componentDidLoad() {
    if(this.view == "edit") {
      this.getEdit();
    } else {
      this.getPreview();
    }

    let hub = new HubAPI.HubResource;
    hub.get(this.item).then((item) => {
      console.log("Notebook", item)
      this.notebook = item;
      this.titleEl.innerText = item.title;
    });
  }
  getEdit() {
    const editUrl = `${this.portal}/home/notebook/notebook.html?id=${this.item}`;
    console.debug("ArcGIS Notebook getEdit", editUrl)
    this.iFrameEl.src = editUrl;
  }
  getPreview() {
    const resourceName = "notebook_preview.json";
    const previewUrl = `${this.portal}/sharing/rest/content/items/${this.item}/resources/${resourceName}`;

    console.log("Notebook getPreview", previewUrl)

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
    
  onCopy(e) {
    return authenticateUser(this.clientid, this.orgurl).then(session => {
      this.session = session;
      return this.copyNotebook();
    })
  }  
  copyNotebook() {
    console.log("onCopy starting", this.notebook)
    let hub = new HubAPI.HubResource;

    hub.create(
      this.notebook, 
      UserSession.deserialize(this.session)
    ).then((response) => {
        console.log("onCopy Done", response)
    })  
  } 

  render() {
    return (
      <Host>
        <span  class="notebook-title">
          <slot name="title" id="notebook-title" ref={(el: HTMLElement) => this.titleEl = el}></slot>
        </span>
        <hub-button 
          class="notebook-copy-button"
          appearance="solid"
          color="dark"
          text="Copy Notebook"
          action={this.onCopy}>
        </hub-button>
      
        <iframe src="" id="notebook-iframe" ref={(el: HTMLIFrameElement) => this.iFrameEl = el}></iframe>
      </Host>
    );
  }

}
