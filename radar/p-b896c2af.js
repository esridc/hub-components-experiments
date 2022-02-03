/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
function n(n,t,e){const a=n.getTime(),r=!(t instanceof Date)||a>=t.getTime(),s=!(e instanceof Date)||a<=e.getTime();return r&&s}function t(n,t,e){if(!(n instanceof Date))return null;const a=n.getTime(),r=t instanceof Date&&a<t.getTime(),s=e instanceof Date&&a>e.getTime();return r?t:s?e:n}function e(n){if(n instanceof Date)return n;if(!n||"string"!=typeof n)return null;const t=n.split(/[: T-]/).map(parseFloat),e=new Date(t[0],(t[1]||1)-1,t[2]||1);if(e.setFullYear(t[0]),isNaN(e.getTime()))throw new Error(`Invalid ISO 8601 date: "${n}"`);return e}function a(n){return"string"==typeof n?n:n instanceof Date?new Date(n.getTime()-6e4*n.getTimezoneOffset()).toISOString().split("T")[0]:""}function r(n,t){return n instanceof Date&&t instanceof Date&&n.getDate()===t.getDate()&&n.getMonth()===t.getMonth()&&n.getFullYear()===t.getFullYear()}function s(n){const t=n.getMonth(),e=new Date(n);return e.setMonth(t-1),t===e.getMonth()?new Date(n.getFullYear(),t,0):e}function o(n){const t=n.getMonth(),e=new Date(n);return e.setMonth(t+1),(t+2)%7==e.getMonth()%7?new Date(n.getFullYear(),t+2,0):e}function u(n,t){return String(n).split("").map((n=>t.numerals[n])).join("")}function i(n,t){return parseInt(n.split("").map((n=>"0123456789"[t.numerals.indexOf(n)])).filter((n=>n)).join(""))}function f(n,t){const{separator:e,unitOrder:a}=t,r=c(a),s=function(n=""){return n.replace(/[\u0660-\u0669]/g,(n=>n.charCodeAt(0)-1632)).replace(/[\u06f0-\u06f9]/g,(n=>n.charCodeAt(0)-1776))}(n).split(e);return{day:parseInt(s[r.indexOf("d")]),month:parseInt(s[r.indexOf("m")])-1,year:parseInt(s[r.indexOf("y")])}}function c(n){const t=n.toLowerCase();return["d","m","y"].sort(((n,e)=>t.indexOf(n)-t.indexOf(e)))}function D(n,t){return(n.getTime()-t.getTime())/864e5}export{e as a,t as b,c,a as d,s as e,i as f,D as g,n as i,u as l,o as n,f as p,r as s}