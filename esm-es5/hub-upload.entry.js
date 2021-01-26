import { r as registerInstance, c as createEvent, h } from './index-17d4341f.js';
import './index-fd5669bb.js';
import './index-80082925.js';
import { a as authenticateUser } from './utils-877cdb99.js';
var hubUploadCss = ":host{display:block}";
// import { UserSession } from '@esri/arcgis-rest-auth';
// import * as Portal from "@esri/arcgis-rest-portal";
var MAX_UPLOAD_SIZE = 1024; // bytes
var ALLOWED_FILE_TYPES = {
    'image/*': 'Image',
    'application/pdf': 'PDF',
    'text/csv': 'CSV'
};
var HubUpload = /** @class */ (function () {
    function HubUpload(hostRef) {
        registerInstance(this, hostRef);
        /**
         * ClientID to identify the app launching auth
         */
        this.clientid = "WXC842NRBVB6NZ2r";
        this.portal = "https://www.arcgis.com";
        this.uploads = [];
        this.onUploadCompleted = createEvent(this, "onUploadCompleted", 7);
    }
    HubUpload.prototype.fileHandler = function (event) {
        var _this = this;
        console.log("hubUpload fileHandler", event);
        var files = event.detail;
        authenticateUser(this.clientid, this.portal).then(function (session) {
            _this.session = session;
            _this.handleFiles(files);
        });
        return true;
    };
    HubUpload.prototype.handleFiles = function (files) {
        console.log("hubUpload: handleFiles", files);
        for (var i = 0; i < files.length; i++) {
            this.processFile(files[i]);
        }
    };
    HubUpload.prototype.processFile = function (newFile) {
        console.log("hubUpload#processFile");
        var itemType = this.getFileType(newFile.type);
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
    };
    HubUpload.prototype.checkFileSize = function (size) {
        return (size / MAX_UPLOAD_SIZE / MAX_UPLOAD_SIZE) <= MAX_UPLOAD_SIZE;
    };
    HubUpload.prototype.getFileType = function (type) {
        var fileType = null;
        Object.keys(ALLOWED_FILE_TYPES).map(function (mimeType) {
            console.log("mimeType", [type, mimeType, type.match(mimeType)]);
            var testMimeType = mimeType.replace("/*", ".*");
            if (type.match(testMimeType) && type.match(mimeType).length > 0) {
                fileType = ALLOWED_FILE_TYPES[mimeType];
            }
        });
        return fileType;
    };
    HubUpload.prototype.uploadFile = function (file, itemType) {
        this.uploads.push([file, itemType]);
    };
    // TODO: Fix uploads to use params not index values
    HubUpload.prototype.uploadList = function (files) {
        var _this = this;
        console.log("hubUpload#uploadList");
        var update = files.map(function (file) {
            return h("hub-upload-file", { file: file[0], session: _this.session, itemType: file[1] });
        });
        console.log("... uploadList", update);
        return update;
    };
    HubUpload.prototype.render = function () {
        var _this = this;
        if (this.uploads.length == 0) {
            return (h("div", { class: "file-upload" }, h("drop-area", { allowedTypes: Object.keys(ALLOWED_FILE_TYPES) })));
        }
        else {
            return (h("div", { class: "status", ref: function (el) { return _this.statusEl = el; } }, this.uploadList(this.uploads)));
        }
    };
    return HubUpload;
}());
HubUpload.style = hubUploadCss;
export { HubUpload as hub_upload };
