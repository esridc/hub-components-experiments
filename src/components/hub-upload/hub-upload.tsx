import { Component, Event, EventEmitter, Listen, h, Prop, State } from '@stencil/core';
import { authenticateUser } from '../../utils/utils';
// import { UserSession } from '@esri/arcgis-rest-auth';
// import * as Portal from "@esri/arcgis-rest-portal";

const MAX_UPLOAD_SIZE = 1024; // bytes
const ALLOWED_FILE_TYPES = {
  'image/*': 'Image', 
  'application/pdf': 'PDF', 
  'text/csv': 'CSV'
};

@Component({
  tag: 'hub-upload',
  styleUrl: 'hub-upload.css',
  shadow: true
})
export class HubUpload {

  dropArea: HTMLElement; 
  statusEl: HTMLDivElement;

  // @Element() private elementHost: HTMLElement;
  @Event() onUploadCompleted: EventEmitter<Blob>;

  /**
   * ClientID to identify the app launching auth
   */
  @Prop() clientid: string = "WXC842NRBVB6NZ2r";
  @Prop() portal = "https://www.arcgis.com";
  @Prop({ mutable: true }) session: string;

  @State() uploads:Array<any> = [];

  @Listen("onFilesSubmitted")
  fileHandler(event: CustomEvent): boolean {
    console.log("hubUpload fileHandler", event)
    let files:FileList = event.detail;
    authenticateUser(this.clientid, this.portal).then(session => {
      this.session = session;
      this.handleFiles(files);
    });
    return true;
  }

  public handleFiles(files: FileList) {
    console.log("hubUpload: handleFiles", files);
    for(let i=0; i < files.length; i++) {
        this.processFile(files[i])
    }
  }

  private processFile(newFile:File) {  
    console.log("hubUpload#processFile")
    let itemType = this.getFileType(newFile.type);
    
    // check if the user isn't trying to upload a file larger then the MAX_UPLOAD_SIZE
    if (!this.checkFileSize(newFile.size)) {
      console.error('Maximum file size exceeded. Max file size is: ' + MAX_UPLOAD_SIZE);
      return false;
    }
    // check if the user isn't trying to upload anything else then an image
    else if (!itemType) {
      console.error('File type is not allowed');
      return false;
    }
    return this.uploadFile(newFile, itemType);
  }

  private checkFileSize(size: number): boolean {
    return (size / MAX_UPLOAD_SIZE / MAX_UPLOAD_SIZE) <= MAX_UPLOAD_SIZE;
  }

  private getFileType(type: string): string {
    let fileType = null;
    Object.keys(ALLOWED_FILE_TYPES).map((mimeType) => {
      console.log("mimeType", [type, mimeType, type.match(mimeType)]);
      let testMimeType = mimeType.replace(`/*`, `.*`);
      if(type.match(testMimeType) && type.match(mimeType).length > 0) {
        fileType = ALLOWED_FILE_TYPES[mimeType]
      }
    })
    return fileType;
    
  }
  private uploadFile(file, itemType) {
    this.uploads.push([file, itemType])
  }  

  // TODO: Fix uploads to use params not index values
  private uploadList(files):Array<JSX.Element> {
    console.log("hubUpload#uploadList")
    let update = files.map((file) => {
      return <hub-upload-file file={file[0]} session={this.session} itemType={file[1]}></hub-upload-file>
    })
    console.log("... uploadList", update  )
    return update;
  }

  render() {
    if(this.uploads.length == 0) {
      return (<div class="file-upload"><drop-area allowedTypes={Object.keys(ALLOWED_FILE_TYPES)}></drop-area></div>);
    } else {
      return (
        <div class="status" ref={(el: HTMLDivElement) => this.statusEl = el}>
        {this.uploadList(this.uploads)}
        </div>
      );
    }
  }
}