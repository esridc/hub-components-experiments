import{a as n}from"./p-d703c309.js";import{l as t}from"./p-de4d1d1b.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */const o={},s={};async function e(r){const a=function(n=""){if(t.indexOf(n)>-1)return n;{const o=n.split("-")[0];return t.indexOf(o)>-1?o:"en"}}(r);if(o[a])return o[a];s[a]||(s[a]=fetch(n(`./assets/calcite-date-picker/nls/${a}.json`)).then((n=>n.json())).catch((()=>(console.error(`Translations for "${a}" not found or invalid, falling back to english`),e("en")))));const c=await s[a];return o[a]=c,c}
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */const r=2,a={nextMonth:"Next month",prevMonth:"Previous month"};export{r as H,a as T,e as g}