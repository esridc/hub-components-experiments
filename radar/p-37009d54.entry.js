import{r as s,h as t,H as i}from"./p-d703c309.js";import{r as o}from"./p-0050330c.js";import{f as r,u as p}from"./p-9a3108ff.js";import{U as a}from"./p-82285f77.js";import"./p-8dae81d7.js";import"./p-6343e8b1.js";import"./p-ae8fd155.js";import"./p-a8ccf5d0.js";import"./p-6bdf64e1.js";import"./p-834ef0aa.js";import"./p-46d9ff3a.js";import"./p-90bbd14a.js";import"./p-797f9b51.js";import"./p-7c13aa15.js";import"./p-4b2e8de5.js";import"./p-fae24807.js";let e=class{constructor(t){s(this,t),this.username="aturner_cityx",this.clientid="WXC842NRBVB6NZ2r",this.portal="https://www.arcgis.com",this.session=null,this.user=null}async componentWillLoad(){this.session=o();const s=a.deserialize(this.session);this.user=await r(this.username,s)}saveForm(s){s.preventDefault(),s.stopPropagation(),console.log("trace hub-profile-editor: onSave",s,this.user);const t=a.deserialize(this.session),i=Object.assign(r(this.username,t),this.user);p(this.username,i,t)}render(){return t(i,null,t("metadata-form",{sections:["user","places"],resource:this.user}),t("calcite-button",{onClick:s=>this.saveForm(s)},"Save Profile"))}};e.style=":host{display:block}";export{e as hub_profile_editor}