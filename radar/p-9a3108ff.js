import{H as t,V as e}from"./p-8dae81d7.js";import{b as a,a as r}from"./p-834ef0aa.js";import{r as n,_ as s}from"./p-ae8fd155.js";import{g as o,s as u}from"./p-46d9ff3a.js";import{g as i}from"./p-a8ccf5d0.js";import{g as c}from"./p-7c13aa15.js";import{q as m,g as l,a as p,s as d}from"./p-4b2e8de5.js";function h(t){return t.outFields||(t.outFields=["OBJECTID","author","updater","created_at","updated_at","description","source","status","target","dataset_id"]),t.where+=" AND parent_id IS NULL",m(t).then((e=>{const a=[],r=[];e.features.forEach((t=>{const e=t.attributes,n=t.geometry,s={id:e.OBJECTID,type:"annotations",attributes:e};n&&(s.geometry=n),r.push(s),-1===a.indexOf(e.author)&&a.push(e.author)}));const n=a.filter((t=>""!==t)).map((e=>c({username:e,portal:t.portal,authentication:t.authentication}).catch((()=>null))));return Promise.all(n).then((t=>{const e=[];return t.forEach((t=>{t&&e.push({id:t.username,type:"users",attributes:t})})),{included:e,data:r}}))}))}function f(t,e){return u(Object.assign({q:`typekeywords:hubAnnotationLayer AND orgid:${t}`},e)).then((t=>{if(t.results&&t.results.length>0){let e=t.results[0].url;return e=e.replace(/^http:/gi,"https:"),e}throw Error("No annotation service found. Commenting is likely not enabled.")}))}class b extends Error{constructor(t){super("All attempted edits failed"),this.errors=t;const e=t[0].description;t.every((t=>t.description===e))&&(this.message=e)}}function w(t){const e=[];if(t.reduce(((t,e)=>(e.success||t.push(e.error),t)),e),e.length===t.length)throw new b(e);return t}async function y(t,e){return{results:(await function(t){return o(t,"user")}({q:t,authentication:e})).results.reduce(((t,e)=>(t.push(S(e)),t)),[])}}async function g(t,e,a){console.log("hub-member: updateMember",t,e);let r=async function(t){var e;return(e=t).tags=e.tags.concat(e.metadata.interests.map((t=>`interest:${t}`))),e}(e);var o,u,c;return u=(o={user:Object.assign({username:t},r),authentication:a}).user.username||o.authentication.username,c=i(o)+"/community/users/"+encodeURIComponent(u)+"/update",o.params=s(s({},o.user),o.params),delete o.user,n(c,o),D(t,a)}async function D(t,e){return S(await c({username:t,authentication:e}))}function j(){return S({username:"",fullName:"Anonymous",thumbnail:""})}async function v(e){let r=[],n=(await a({q:"tags:Hub Event Group",params:{searchUserAccess:"groupMember",num:100},authentication:e})).results.reduce(((t,e)=>(t.push(`groupId = '${e.id}'`),t)),[]),s=await l(null,{authentication:e});try{const a=p("upcoming",{url:`https://hub.arcgis.com/api/v3/events/${s.id}/Hub%20Events/FeatureServer/0/`,authentication:e});n&&(a.where+=` AND (${n.join(" OR ")})`);let o=await d(a);console.log("hub-member: getMemberEvents",[a,o]),r=o.data.reduce(((e,a)=>(e.push({id:a.id,name:a.attributes.title,summary:a.attributes.venue,description:a.attributes.description,hubtype:t.event}),e)),[])}catch(t){}return{results:r,meta:{total:n.length,count:r.length,start:1}}}async function $(t,e,a){let r=await function(t){const e=`https://www.arcgis.com/sharing/rest/community/users/${t.username}/addresource`;return t.params=Object.assign({text:t.content,key:t.name,file:t.resource},t.params),n(e,t)}({username:t,name:"places.json",content:JSON.stringify({places:e}),authentication:a});return console.log("hub-member: getMemberPlaces",e),r.success}async function N(t,e){let a;try{a=await async function(t,e,a){const r=`https://www.arcgis.com/sharing/rest/community/users/${t}/resources/places.json`,s=Object.assign({},a);return s.params=Object.assign({num:1e3},s.params),n(r,s)}(t,0,{authentication:e})}catch(t){a={places:[]}}return console.log("hub-member: getMemberPlaces",a),a.places}async function A(t){let e=await a({q:"tags:initiativeCollaborationGroup",params:{searchUserAccess:"groupMember",num:100},authentication:t});return{results:e.results.reduce(((t,e)=>(t.push(I(e)),t)),[]),meta:{total:e.total,count:e.num,start:e.start}}}async function O(t,e){let a=["1=1"];a.push(`Creator LIKE '${t}'`);let n,s=await l(null,{authentication:e});try{let t=await f(s.id);t+="/0",console.log("hub-discussion: Search",[r,a,{url:t,params:{where:a.join(" AND ")}}]),n=await h({url:t,where:a.join(" AND ")})}catch(t){n={data:[]}}return n.data}async function E(t,e){return console.log("searchMemberContent",[t,e]),await r({owner:t,sort:"modified",order:"desc"},{isPortal:!0,hubApiUrl:"https://hub.arcgis.com",authentication:e})}function M(t){var e;return null===(e=t.tags)||void 0===e?void 0:e.reduce(((t,e)=>{let a=e.match(/^interest:(.*)/);return console.log("usersInterests",a),a&&t.push(a[1]),t}),[])}function S(a){let r=Object.assign(a,{id:a.username,name:a.fullName||a.username,publisher:{name:a.username,username:a.username},hubtype:t.member,summary:a.description||"No profile summary.",description:a.description||"No profile description.",hubType:t.member,url:`https://www.arcgis.com/home/user.html?user=${a.username}`,permissions:{visibility:e.public},createdDate:new Date(a.created),createdDateSource:"user.created",updatedDate:new Date(a.modified),updatedDateSource:"user.modified",thumbnailUrl:"",culture:a.culture,region:a.region,metadata:{interests:M(a)}});return null!=a.thumbnail&&(r.thumbnailUrl=`https://www.arcgis.com/sharing/rest/community/users/${a.username}/info/${a.thumbnail}`),r}async function U(t){let e=await a(t);return{results:e.results.reduce(((t,e)=>(t.push(I(e)),t)),[]),meta:{total:e.total,count:e.num,start:e.start}}}async function C(t){return I(await function(t,e){var a=i(e)+"/community/groups/"+t,r=s({httpMethod:"GET"},e);return n(a,r)}(t))}function I(a){let r=Object.assign(a,{id:a.id,name:a.title,hubtype:t.team,publisher:{name:a.owner,username:a.owner},summary:a.snippet||a.description||"No profile summary.",description:a.description||"No profile description.",hubType:t.team,url:`https://www.arcgis.com/home/group.html?id=${a.id}`,permissions:{visibility:e[a.access]},createdDate:new Date(a.created),createdDateSource:"group.created",updatedDate:new Date(a.modified),updatedDateSource:"group.modified",thumbnailUrl:"",culture:a.culture,region:a.region});return void 0!==a.thumbnail&&null!==r.thumbnail&&(r.thumbnailUrl=`https://www.arcgis.com/sharing/rest/community/groups/${a.id}/info/${a.thumbnail}`),r}export{U as a,h as b,j as c,S as d,C as e,D as f,f as g,A as h,v as i,N as j,E as k,O as l,w as m,$ as n,y as s,g as u}