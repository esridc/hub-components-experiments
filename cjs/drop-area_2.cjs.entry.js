'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ad6d6974.js');
require('./index-859d80b7.js');
const index$3 = require('./index-c635a7b6.js');
const index$6 = require('./index-52faf404.js');

const dropAreaCss = ":host{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:\"Avenir Next W01\", \"Avenir Next W00\", \"Avenir Next\", \"Avenir\", \"Helvetica Neue\", sans-serif;width:90%}#drop-area form{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;text-align:center;width:100%;height:100%;padding:50px 0px;margin:0px;-ms-flex-align:baseline;align-items:baseline;padding-left:50px;border:2px dashed lightgray;border-radius:4px;overflow:scroll;background-color:#DDD}#drop-area form p{margin:0px;color:#333}#drop-area form.highlight{border:2px solid green;background:rgba(0, 128, 0, 0.1)}#drop-area form #fileElem{display:none}#drop-area .retry{color:white;background-color:#007ac2;font-size:15px;height:30px;margin-top:20px;padding:8px 18px 0px 18px;cursor:pointer}#drop-area .retry:hover{background-color:#0069b1}@media (min-width: 768px) and (max-width: 991.98px){#drop-area #gallery{grid-template-columns:calc(50% - 1.5ch) calc(50% - 1.5ch)}}@media (min-width: 992px) and (max-width: 1199.98px){#drop-area #gallery{grid-template-columns:calc(33.33% - 2ch) calc(33.33% - 2ch) calc(33.33% - 2ch)}}@media (min-width: 1200px){#drop-area #gallery{grid-template-columns:calc(25% - 2.28ch) calc(25% - 2.28ch) calc(25% - 2.28ch) calc(25% - 2.28ch)}}";

const DropArea = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.allowedTypes = ["image/*"];
        this.highlighted = false;
        this.handleDrop = (e) => {
            var dt = e.dataTransfer;
            var files = dt.files;
            this.handleFiles(files);
        };
        this.handleFiles = (files) => {
            files = [...files];
            console.log("Handle Files", files);
            this.onFilesSubmitted.emit(files);
        };
        this.onFilesSubmitted = index.createEvent(this, "onFilesSubmitted", 7);
    }
    // @State() public uploads: DropElement[] = [];
    componentDidLoad() {
        // Prevent default drag behaviors
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            this.dropArea.addEventListener(eventName, this.preventDefaults, false);
            document.body.addEventListener(eventName, this.preventDefaults, false);
        });
        // // Highlight drop area when item is dragged over it
        ['dragenter', 'dragover'].forEach(eventName => {
            this.dropArea.addEventListener(eventName, () => this.highlighted = true, false);
        });
        ['dragleave', 'drop'].forEach(eventName => {
            this.dropArea.addEventListener(eventName, () => this.highlighted = false, false);
        });
        this.dropArea.addEventListener('drop', this.handleDrop, false);
    }
    preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    render() {
        return index.h("div", { id: "drop-area" }, index.h("form", { class: { 'highlight': this.highlighted } }, index.h("h3", null, "Drag Files to Upload"), index.h("p", null, "Maximum Size: 200 gb "), index.h("p", null, "Supported types: Spreadsheet CSV, Excel, Shapefile, GeoJSON, PDF, Word Doc, Images"), index.h("input", { type: "file", id: "fileElem", multiple: true, accept: this.allowedTypes.join(","), onChange: (event) => this.handleFiles(event.target.files) }), index.h("label", { class: "button retry", htmlFor: "fileElem" }, "Browse")));
    }
    get dropArea() { return index.getElement(this); }
};
DropArea.style = dropAreaCss;

const hubUploadFileCss = ":host{display:block}";

const HubUploadFile = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * ClientID to identify the app launching auth
         */
        this.clientid = "WXC842NRBVB6NZ2r";
        this.portal = "https://www.arcgis.com";
        this.editors = [];
    }
    componentDidLoad() {
        const authentication = index$6.UserSession.deserialize(this.session);
        this.uploadItem(authentication);
    }
    uploadItem(authentication) {
        index$3.createItem({
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
            console.log("Created Item", response);
            index$3.addItemPart({
                id: response.id,
                file: this.file,
                partNum: 1,
                authentication
            }).then((partResponse) => {
                console.log("addItemPart", partResponse);
                index$3.commitItemUpload({
                    id: response.id,
                    authentication,
                    params: {
                        title: this.file.name,
                        type: this.itemType,
                    }
                }).then((statusResponse) => {
                    console.log("commitItemUpload", statusResponse);
                    this.checkStatus(statusResponse.id);
                });
            });
        }).catch((error) => {
            console.error("uploadItem error", error);
            this.showError(error.message);
        });
    }
    showError(message) {
        this.editors = [index.h("calcite-notice", { color: "red", width: "full", scale: "s", active: true }, index.h("div", { slot: "notice-title" }, "Upload Error: ", this.file.name), index.h("div", { slot: "notice-message" }, message))];
    }
    checkStatus(id) {
        const authentication = index$6.UserSession.deserialize(this.session);
        index$3.getItemStatus({
            id: id,
            authentication
        }).then((response) => {
            console.log("Check Status", response);
            if (response.status == "completed") {
                this.editItem(id);
            }
            else {
                //         response.status == "partial" || response.status == "processing") {
                setTimeout(() => { this.checkStatus(id); }, 1000);
            }
        });
    }
    editItem(id) {
        this.editors = [index.h("hub-metadata-editor", { item: id })];
    }
    render() {
        return (index.h(index.Host, null, index.h("slot", null), this.editors.length == 0
            ? index.h("calcite-loader", { text: "Fetching data...", "is-active": true })
            : this.editors));
    }
};
HubUploadFile.style = hubUploadFileCss;

exports.drop_area = DropArea;
exports.hub_upload_file = HubUploadFile;
