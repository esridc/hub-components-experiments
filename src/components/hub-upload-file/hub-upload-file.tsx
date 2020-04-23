import { Component, Host, h, Prop, State } from '@stencil/core';
import { UserSession } from '@esri/arcgis-rest-auth';
import * as Portal from "@esri/arcgis-rest-portal";

@Component({
  tag: 'hub-upload-file',
  styleUrl: 'hub-upload-file.css',
  shadow: true
})
export class HubUploadFile {

  @Prop() file:File;
  @Prop() itemType:string;
  /**
   * ClientID to identify the app launching auth
   */
  @Prop() clientid: string = "WXC842NRBVB6NZ2r";
  @Prop() portal = "https://www.arcgis.com";
  @Prop({ mutable: true }) session: string;

  @State() editors:Array<any> = [];

  componentDidLoad() {
    const authentication = UserSession.deserialize(this.session); 
    this.uploadItem(authentication);
  }

  private uploadItem(authentication) {
    Portal.createItem({
      item: {
        title: this.file.name,
        type: this.itemType,
      },
      file: this.file,
      overwrite: false,
      multipart: true, 
      async: true,
      filename: this.file.name,
      authentication
    }).then((response) => {
      console.log("Created Item", response)
      Portal.addItemPart({
        id: response.id,
        file: this.file,
        partNum: 1,
        authentication
      }).then((partResponse) =>  {
        console.log("addItemPart", partResponse)
        Portal.commitItemUpload({
          id: response.id,
          authentication,
          params: {
            title: this.file.name,
            type: this.itemType,
          }
        }).then((statusResponse) => {
          console.log("commitItemUpload", statusResponse)
          this.checkStatus(statusResponse.id);
        })
          
      })
    })  
  }
  private checkStatus(id) {
    const authentication = UserSession.deserialize(this.session);
    Portal.getItemStatus({
      id: id,
      authentication
    }).then((response) => {
      console.log("Check Status", response);
      if(response.status == "partial") {
        setTimeout(() => {this.checkStatus(id)}, 1000);
      } else {
        this.editItem(id);
      }
    })
  }
  private editItem(id) {
    this.editors = [<hub-metadata-editor item={id}></hub-metadata-editor>]
  }
  render() {
    return (
      <Host>
        <slot></slot>
        {this.editors.length == 0 
          ? <calcite-loader text="Fetching data..." is-active></calcite-loader>
          : this.editors 
        }
      </Host>
    );
  }

}
