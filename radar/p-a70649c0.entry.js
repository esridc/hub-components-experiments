import{r as e,c as s,h as l}from"./p-d703c309.js";import{a as t}from"./p-0050330c.js";import"./p-82285f77.js";import"./p-ae8fd155.js";const i={"image/*":"Image","application/pdf":"PDF","text/csv":"CSV"};let o=class{constructor(l){e(this,l),this.onUploadCompleted=s(this,"onUploadCompleted",7),this.clientid="WXC842NRBVB6NZ2r",this.portal="https://www.arcgis.com",this.uploads=[]}fileHandler(e){console.log("hubUpload fileHandler",e);let s=e.detail;return t(this.clientid,this.portal).then((e=>{this.session=e,this.handleFiles(s)})),!0}handleFiles(e){console.log("hubUpload: handleFiles",e);for(let s=0;s<e.length;s++)this.processFile(e[s])}processFile(e){console.log("hubUpload#processFile");let s=this.getFileType(e.type);return this.checkFileSize(e.size)?s?this.uploadFile(e,s):(console.error("File type is not allowed"),!1):(console.error("Maximum file size exceeded. Max file size is: 1024"),!1)}checkFileSize(e){return e/1024/1024<=1024}getFileType(e){let s=null;return Object.keys(i).map((l=>{console.log("mimeType",[e,l,e.match(l)]);let t=l.replace("/*",".*");e.match(t)&&e.match(l).length>0&&(s=i[l])})),s}uploadFile(e,s){this.uploads.push([e,s])}uploadList(e){console.log("hubUpload#uploadList");let s=e.map((e=>l("hub-upload-file",{file:e[0],session:this.session,itemType:e[1]})));return console.log("... uploadList",s),s}render(){return 0==this.uploads.length?l("div",{class:"file-upload"},l("drop-area",{allowedTypes:Object.keys(i)})):l("div",{class:"status",ref:e=>this.statusEl=e},this.uploadList(this.uploads))}};o.style=":host{display:block}";export{o as hub_upload}