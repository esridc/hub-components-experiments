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
          item: {
            title: this.file.name,
            type: this.itemType,
          },
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
    }).catch((error) => {
      console.error("uploadItem error", error);
      this.showError(error.message);
    })
  }

  private showError(message) {
    this.editors = [<calcite-notice color="red" width="full" scale="s" active={true}>
      <div slot="notice-title">Upload Error: {this.file.name}</div>
    <div slot="notice-message">
    {message}
    </div>
    </calcite-notice>]
  }
  private checkStatus(id) {
    const authentication = UserSession.deserialize(this.session);
    Portal.getItemStatus({
      id: id,
      authentication
    }).then((response) => {
      console.log("Check Status", response);
      if(response.status == "completed") {
        this.editItem(id);
      } else {
//         response.status == "partial" || response.status == "processing") {
        setTimeout(() => {this.checkStatus(id)}, 1000);

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
          ? <calcite-loader label="label" text="Fetching data..." is-active></calcite-loader>
          : this.editors 
        }
      </Host>
    );
  }

}
