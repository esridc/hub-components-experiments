import { Component, Host, h, Prop, State } from '@stencil/core';
import * as HubAPI from '../../../utils/hub-api';
import { authenticateUser } from '../../../utils/utils';
import { UserSession } from '@esri/arcgis-rest-auth';

@Component({
  tag: 'arcgis-notebook',
  styleUrl: 'arcgis-notebook.css',
  shadow: true
})
export class ArcgisNotebook {
  @Prop() item = "9cd1f9bdc6794e63ae450087b3b67e05";
  @Prop() view:"preview" | "edit" = "preview";

  /**
   * ClientID to identify the app launching auth
   */
  @Prop() clientid: string = "WXC842NRBVB6NZ2r";
  @Prop() portal = "https://www.arcgis.com";

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

    let hub = HubAPI.HubService.create('hub');
    hub.get(this.item).then((item) => {
      console.log("Notebook", item)
      this.notebook = item;
      //@ts-ignore
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
          
          // remove CSS border
          const idx = json.html.indexOf("<body>") + 6;

          json.html =
            json.html.slice(0, idx) +
            "<style>#notebook-container { box-shadow: none; -webkit-box-shadow: none; padding: 0; }</style>" +
            json.html.slice(idx);

          // Write the HTML into the body of the iFrame
          const doc = this.iFrameEl.contentWindow.document;
          doc.open();
          doc.write(json.html);
          doc.close();
        })
    }).catch((e) => {
      console.error("Error in arcgis-notebook getPreview", e)
    })    
    
  }
    
  onCopy(_e) {
    return authenticateUser(this.clientid, this.portal).then(session => {
      this.session = session;
      return this.copyNotebook();
    })
  }  
  copyNotebook() {
    console.log("onCopy starting", this.notebook)
    let hub = HubAPI.HubService.create('hub');

    hub.create(
      this.notebook, 
      UserSession.deserialize(this.session)
    ).then((response) => {
        console.log("onCopy Done", response)
    })  
  } 
  // onCopy(itemId:string) {
  //   console.log("onCopy", this.portal)
  //   return authenticateUser(this.clientid, this.portal).then(session => {
  //     this.session = session;
  //     return this.copyItem(itemId);
  //   })
  // }  

  // copyItem(itemId:string) {
  //   let hub = HubAPI.HubService.create('hub');
  //   hub.get(itemId).then((item) => {
  //     console.log("onCopy starting", item)
  //     hub.create(
  //       item, 
  //       UserSession.deserialize(this.session)
  //     ).then((response) => {
  //         console.log("onCopy Done", response)
  //     })  
  //   });
  // } 
  render() {
    return (
      <Host>
        <h3 id="notebook-title" ref={(el: HTMLElement) => this.titleEl = el}></h3>
        <span  class="notebook-title">
          <slot name="title"></slot>
        </span>
        <hub-button 
          class="notebook-copy-button"
          color="dark"
          text="Copy Notebook"
          action={this.onCopy}>
        </hub-button>
      
        <iframe src="" id="notebook-iframe" ref={(el: HTMLIFrameElement) => this.iFrameEl = el}></iframe>
      </Host>
    );
  }

}
