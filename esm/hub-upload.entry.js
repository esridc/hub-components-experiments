import { r as registerInstance, c as createEvent, h } from './index-9fca3863.js';
import { a as authenticateUser } from './utils-49410b4c.js';
import './UserSession-1faae0f0.js';
import './clean-url-83c51f70.js';

const hubUploadCss = ":host{display:block}";

// import { UserSession } from '@esri/arcgis-rest-auth';
// import * as Portal from "@esri/arcgis-rest-portal";
const MAX_UPLOAD_SIZE = 1024; // bytes
const ALLOWED_FILE_TYPES = {
  'image/*': 'Image',
  'application/pdf': 'PDF',
  'text/csv': 'CSV'
};
let HubUpload = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onUploadCompleted = createEvent(this, "onUploadCompleted", 7);
    /**
     * ClientID to identify the app launching auth
     */
    this.clientid = "WXC842NRBVB6NZ2r";
    this.portal = "https://www.arcgis.com";
    this.uploads = [];
  }
  fileHandler(event) {
    console.log("hubUpload fileHandler", event);
    let files = event.detail;
    authenticateUser(this.clientid, this.portal).then(session => {
      this.session = session;
      this.handleFiles(files);
    });
    return true;
  }
  handleFiles(files) {
    console.log("hubUpload: handleFiles", files);
    for (let i = 0; i < files.length; i++) {
      this.processFile(files[i]);
    }
  }
  processFile(newFile) {
    console.log("hubUpload#processFile");
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
  checkFileSize(size) {
    return (size / MAX_UPLOAD_SIZE / MAX_UPLOAD_SIZE) <= MAX_UPLOAD_SIZE;
  }
  getFileType(type) {
    let fileType = null;
    Object.keys(ALLOWED_FILE_TYPES).map((mimeType) => {
      console.log("mimeType", [type, mimeType, type.match(mimeType)]);
      let testMimeType = mimeType.replace(`/*`, `.*`);
      if (type.match(testMimeType) && type.match(mimeType).length > 0) {
        fileType = ALLOWED_FILE_TYPES[mimeType];
      }
    });
    return fileType;
  }
  uploadFile(file, itemType) {
    this.uploads.push([file, itemType]);
  }
  // TODO: Fix uploads to use params not index values
  uploadList(files) {
    console.log("hubUpload#uploadList");
    let update = files.map((file) => {
      return h("hub-upload-file", { file: file[0], session: this.session, itemType: file[1] });
    });
    console.log("... uploadList", update);
    return update;
  }
  render() {
    if (this.uploads.length == 0) {
      return (h("div", { class: "file-upload" }, h("drop-area", { allowedTypes: Object.keys(ALLOWED_FILE_TYPES) })));
    }
    else {
      return (h("div", { class: "status", ref: (el) => this.statusEl = el }, this.uploadList(this.uploads)));
    }
  }
};
HubUpload.style = hubUploadCss;

export { HubUpload as hub_upload };
