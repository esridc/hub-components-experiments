import{c as t}from"./p-16e63a98.js";var n={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},e=t((function(t){var n=Array.prototype.concat,e=Array.prototype.slice,r=t.exports=function(t){for(var r,s=[],a=0,o=t.length;a<o;a++){var i=t[a];(r=i)&&"string"!=typeof r&&(r instanceof Array||Array.isArray(r)||r.length>=0&&(r.splice instanceof Function||Object.getOwnPropertyDescriptor(r,r.length-1)&&"String"!==r.constructor.name))?s=n.call(s,e.call(i)):s.push(i)}return s};r.wrap=function(t){return function(){return t(r(arguments))}}})),r=t((function(t){var r=Object.hasOwnProperty,s={};for(var a in n)r.call(n,a)&&(s[n[a]]=a);var o=t.exports={to:{},get:{}};function i(t,n,e){return Math.min(Math.max(n,t),e)}function l(t){var n=Math.round(t).toString(16).toUpperCase();return n.length<2?"0"+n:n}o.get=function(t){var n,e;switch(t.substring(0,3).toLowerCase()){case"hsl":n=o.get.hsl(t),e="hsl";break;case"hwb":n=o.get.hwb(t),e="hwb";break;default:n=o.get.rgb(t),e="rgb"}return n?{model:e,value:n}:null},o.get.rgb=function(t){if(!t)return null;var e,s,a,o=[0,0,0,1];if(e=t.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){for(a=e[2],e=e[1],s=0;s<3;s++){var l=2*s;o[s]=parseInt(e.slice(l,l+2),16)}a&&(o[3]=parseInt(a,16)/255)}else if(e=t.match(/^#([a-f0-9]{3,4})$/i)){for(a=(e=e[1])[3],s=0;s<3;s++)o[s]=parseInt(e[s]+e[s],16);a&&(o[3]=parseInt(a+a,16)/255)}else if(e=t.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)){for(s=0;s<3;s++)o[s]=parseInt(e[s+1],0);e[4]&&(o[3]=e[5]?.01*parseFloat(e[4]):parseFloat(e[4]))}else{if(!(e=t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)))return(e=t.match(/^(\w+)$/))?"transparent"===e[1]?[0,0,0,0]:r.call(n,e[1])?((o=n[e[1]])[3]=1,o):null:null;for(s=0;s<3;s++)o[s]=Math.round(2.55*parseFloat(e[s+1]));e[4]&&(o[3]=e[5]?.01*parseFloat(e[4]):parseFloat(e[4]))}for(s=0;s<3;s++)o[s]=i(o[s],0,255);return o[3]=i(o[3],0,1),o},o.get.hsl=function(t){if(!t)return null;var n=t.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?[\d\.]+)\s*)?\)$/);if(n){var e=parseFloat(n[4]);return[(parseFloat(n[1])%360+360)%360,i(parseFloat(n[2]),0,100),i(parseFloat(n[3]),0,100),i(isNaN(e)?1:e,0,1)]}return null},o.get.hwb=function(t){if(!t)return null;var n=t.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);if(n){var e=parseFloat(n[4]);return[(parseFloat(n[1])%360+360)%360,i(parseFloat(n[2]),0,100),i(parseFloat(n[3]),0,100),i(isNaN(e)?1:e,0,1)]}return null},o.to.hex=function(){var t=e(arguments);return"#"+l(t[0])+l(t[1])+l(t[2])+(t[3]<1?l(Math.round(255*t[3])):"")},o.to.rgb=function(){var t=e(arguments);return t.length<4||1===t[3]?"rgb("+Math.round(t[0])+", "+Math.round(t[1])+", "+Math.round(t[2])+")":"rgba("+Math.round(t[0])+", "+Math.round(t[1])+", "+Math.round(t[2])+", "+t[3]+")"},o.to.rgb.percent=function(){var t=e(arguments),n=Math.round(t[0]/255*100),r=Math.round(t[1]/255*100),s=Math.round(t[2]/255*100);return t.length<4||1===t[3]?"rgb("+n+"%, "+r+"%, "+s+"%)":"rgba("+n+"%, "+r+"%, "+s+"%, "+t[3]+")"},o.to.hsl=function(){var t=e(arguments);return t.length<4||1===t[3]?"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)":"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+t[3]+")"},o.to.hwb=function(){var t=e(arguments),n="";return t.length>=4&&1!==t[3]&&(n=", "+t[3]),"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+n+")"},o.to.keyword=function(t){return s[t.slice(0,3)]}}));const s={};for(const t of Object.keys(n))s[n[t]]=t;const a={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};var o=a;for(const t of Object.keys(a)){if(!("channels"in a[t]))throw new Error("missing channels property: "+t);if(!("labels"in a[t]))throw new Error("missing channel labels property: "+t);if(a[t].labels.length!==a[t].channels)throw new Error("channel and label counts mismatch: "+t);const{channels:n,labels:e}=a[t];delete a[t].channels,delete a[t].labels,Object.defineProperty(a[t],"channels",{value:n}),Object.defineProperty(a[t],"labels",{value:e})}function i(t,n){return function(e){return n(t(e))}}function l(t,n){const e=[n[t].parent,t];let r=o[n[t].parent][t],s=n[t].parent;for(;n[s].parent;)e.unshift(n[s].parent),r=i(o[n[s].parent][s],r),s=n[s].parent;return r.conversion=e,r}a.rgb.hsl=function(t){const n=t[0]/255,e=t[1]/255,r=t[2]/255,s=Math.min(n,e,r),a=Math.max(n,e,r),o=a-s;let i,l;a===s?i=0:n===a?i=(e-r)/o:e===a?i=2+(r-n)/o:r===a&&(i=4+(n-e)/o),i=Math.min(60*i,360),i<0&&(i+=360);const u=(s+a)/2;return l=a===s?0:u<=.5?o/(a+s):o/(2-a-s),[i,100*l,100*u]},a.rgb.hsv=function(t){let n,e,r,s,a;const o=t[0]/255,i=t[1]/255,l=t[2]/255,u=Math.max(o,i,l),c=u-Math.min(o,i,l),h=function(t){return(u-t)/6/c+.5};return 0===c?(s=0,a=0):(a=c/u,n=h(o),e=h(i),r=h(l),o===u?s=r-e:i===u?s=1/3+n-r:l===u&&(s=2/3+e-n),s<0?s+=1:s>1&&(s-=1)),[360*s,100*a,100*u]},a.rgb.hwb=function(t){const n=t[0],e=t[1];let r=t[2];const s=a.rgb.hsl(t)[0],o=1/255*Math.min(n,Math.min(e,r));return r=1-1/255*Math.max(n,Math.max(e,r)),[s,100*o,100*r]},a.rgb.cmyk=function(t){const n=t[0]/255,e=t[1]/255,r=t[2]/255,s=Math.min(1-n,1-e,1-r);return[100*((1-n-s)/(1-s)||0),100*((1-e-s)/(1-s)||0),100*((1-r-s)/(1-s)||0),100*s]},a.rgb.keyword=function(t){const e=s[t];if(e)return e;let r,a=1/0;for(const e of Object.keys(n)){const s=((o=t)[0]-(i=n[e])[0])**2+(o[1]-i[1])**2+(o[2]-i[2])**2;s<a&&(a=s,r=e)}var o,i;return r},a.keyword.rgb=function(t){return n[t]},a.rgb.xyz=function(t){let n=t[0]/255,e=t[1]/255,r=t[2]/255;return n=n>.04045?((n+.055)/1.055)**2.4:n/12.92,e=e>.04045?((e+.055)/1.055)**2.4:e/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92,[100*(.4124*n+.3576*e+.1805*r),100*(.2126*n+.7152*e+.0722*r),100*(.0193*n+.1192*e+.9505*r)]},a.rgb.lab=function(t){const n=a.rgb.xyz(t);let e=n[0],r=n[1],s=n[2];return e/=95.047,r/=100,s/=108.883,e=e>.008856?e**(1/3):7.787*e+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,s=s>.008856?s**(1/3):7.787*s+16/116,[116*r-16,500*(e-r),200*(r-s)]},a.hsl.rgb=function(t){const n=t[0]/360,e=t[1]/100,r=t[2]/100;let s,a,o;if(0===e)return o=255*r,[o,o,o];s=r<.5?r*(1+e):r+e-r*e;const i=2*r-s,l=[0,0,0];for(let t=0;t<3;t++)a=n+1/3*-(t-1),a<0&&a++,a>1&&a--,o=6*a<1?i+6*(s-i)*a:2*a<1?s:3*a<2?i+(s-i)*(2/3-a)*6:i,l[t]=255*o;return l},a.hsl.hsv=function(t){const n=t[0];let e=t[1]/100,r=t[2]/100,s=e;const a=Math.max(r,.01);return r*=2,e*=r<=1?r:2-r,s*=a<=1?a:2-a,[n,100*(0===r?2*s/(a+s):2*e/(r+e)),(r+e)/2*100]},a.hsv.rgb=function(t){const n=t[0]/60,e=t[1]/100;let r=t[2]/100;const s=Math.floor(n)%6,a=n-Math.floor(n),o=255*r*(1-e),i=255*r*(1-e*a),l=255*r*(1-e*(1-a));switch(r*=255,s){case 0:return[r,l,o];case 1:return[i,r,o];case 2:return[o,r,l];case 3:return[o,i,r];case 4:return[l,o,r];case 5:return[r,o,i]}},a.hsv.hsl=function(t){const n=t[0],e=t[1]/100,r=t[2]/100,s=Math.max(r,.01);let a,o;o=(2-e)*r;const i=(2-e)*s;return a=e*s,a/=i<=1?i:2-i,a=a||0,o/=2,[n,100*a,100*o]},a.hwb.rgb=function(t){const n=t[0]/360;let e=t[1]/100,r=t[2]/100;const s=e+r;let a;s>1&&(e/=s,r/=s);const o=Math.floor(6*n),i=1-r;a=6*n-o,0!=(1&o)&&(a=1-a);const l=e+a*(i-e);let u,c,h;switch(o){default:case 6:case 0:u=i,c=l,h=e;break;case 1:u=l,c=i,h=e;break;case 2:u=e,c=i,h=l;break;case 3:u=e,c=l,h=i;break;case 4:u=l,c=e,h=i;break;case 5:u=i,c=e,h=l}return[255*u,255*c,255*h]},a.cmyk.rgb=function(t){const n=t[1]/100,e=t[2]/100,r=t[3]/100;return[255*(1-Math.min(1,t[0]/100*(1-r)+r)),255*(1-Math.min(1,n*(1-r)+r)),255*(1-Math.min(1,e*(1-r)+r))]},a.xyz.rgb=function(t){const n=t[0]/100,e=t[1]/100,r=t[2]/100;let s,a,o;return s=3.2406*n+-1.5372*e+-.4986*r,a=-.9689*n+1.8758*e+.0415*r,o=.0557*n+-.204*e+1.057*r,s=s>.0031308?1.055*s**(1/2.4)-.055:12.92*s,a=a>.0031308?1.055*a**(1/2.4)-.055:12.92*a,o=o>.0031308?1.055*o**(1/2.4)-.055:12.92*o,s=Math.min(Math.max(0,s),1),a=Math.min(Math.max(0,a),1),o=Math.min(Math.max(0,o),1),[255*s,255*a,255*o]},a.xyz.lab=function(t){let n=t[0],e=t[1],r=t[2];return n/=95.047,e/=100,r/=108.883,n=n>.008856?n**(1/3):7.787*n+16/116,e=e>.008856?e**(1/3):7.787*e+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,[116*e-16,500*(n-e),200*(e-r)]},a.lab.xyz=function(t){let n,e,r;e=(t[0]+16)/116,n=t[1]/500+e,r=e-t[2]/200;const s=e**3,a=n**3,o=r**3;return e=s>.008856?s:(e-16/116)/7.787,n=a>.008856?a:(n-16/116)/7.787,r=o>.008856?o:(r-16/116)/7.787,n*=95.047,e*=100,r*=108.883,[n,e,r]},a.lab.lch=function(t){const n=t[0],e=t[1],r=t[2];let s;return s=360*Math.atan2(r,e)/2/Math.PI,s<0&&(s+=360),[n,Math.sqrt(e*e+r*r),s]},a.lch.lab=function(t){const n=t[1],e=t[2]/360*2*Math.PI;return[t[0],n*Math.cos(e),n*Math.sin(e)]},a.rgb.ansi16=function(t,n=null){const[e,r,s]=t;let o=null===n?a.rgb.hsv(t)[2]:n;if(o=Math.round(o/50),0===o)return 30;let i=30+(Math.round(s/255)<<2|Math.round(r/255)<<1|Math.round(e/255));return 2===o&&(i+=60),i},a.hsv.ansi16=function(t){return a.rgb.ansi16(a.hsv.rgb(t),t[2])},a.rgb.ansi256=function(t){const n=t[0],e=t[1],r=t[2];return n===e&&e===r?n<8?16:n>248?231:Math.round((n-8)/247*24)+232:16+36*Math.round(n/255*5)+6*Math.round(e/255*5)+Math.round(r/255*5)},a.ansi16.rgb=function(t){let n=t%10;if(0===n||7===n)return t>50&&(n+=3.5),n=n/10.5*255,[n,n,n];const e=.5*(1+~~(t>50));return[(1&n)*e*255,(n>>1&1)*e*255,(n>>2&1)*e*255]},a.ansi256.rgb=function(t){if(t>=232){const n=10*(t-232)+8;return[n,n,n]}let n;return t-=16,[Math.floor(t/36)/5*255,Math.floor((n=t%36)/6)/5*255,n%6/5*255]},a.rgb.hex=function(t){const n=(((255&Math.round(t[0]))<<16)+((255&Math.round(t[1]))<<8)+(255&Math.round(t[2]))).toString(16).toUpperCase();return"000000".substring(n.length)+n},a.hex.rgb=function(t){const n=t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!n)return[0,0,0];let e=n[0];3===n[0].length&&(e=e.split("").map((t=>t+t)).join(""));const r=parseInt(e,16);return[r>>16&255,r>>8&255,255&r]},a.rgb.hcg=function(t){const n=t[0]/255,e=t[1]/255,r=t[2]/255,s=Math.max(Math.max(n,e),r),a=Math.min(Math.min(n,e),r),o=s-a;let i,l;return i=o<1?a/(1-o):0,l=o<=0?0:s===n?(e-r)/o%6:s===e?2+(r-n)/o:4+(n-e)/o,l/=6,l%=1,[360*l,100*o,100*i]},a.hsl.hcg=function(t){const n=t[1]/100,e=t[2]/100,r=e<.5?2*n*e:2*n*(1-e);let s=0;return r<1&&(s=(e-.5*r)/(1-r)),[t[0],100*r,100*s]},a.hsv.hcg=function(t){const n=t[2]/100,e=t[1]/100*n;let r=0;return e<1&&(r=(n-e)/(1-e)),[t[0],100*e,100*r]},a.hcg.rgb=function(t){const n=t[1]/100,e=t[2]/100;if(0===n)return[255*e,255*e,255*e];const r=[0,0,0],s=t[0]/360%1*6,a=s%1,o=1-a;let i=0;switch(Math.floor(s)){case 0:r[0]=1,r[1]=a,r[2]=0;break;case 1:r[0]=o,r[1]=1,r[2]=0;break;case 2:r[0]=0,r[1]=1,r[2]=a;break;case 3:r[0]=0,r[1]=o,r[2]=1;break;case 4:r[0]=a,r[1]=0,r[2]=1;break;default:r[0]=1,r[1]=0,r[2]=o}return i=(1-n)*e,[255*(n*r[0]+i),255*(n*r[1]+i),255*(n*r[2]+i)]},a.hcg.hsv=function(t){const n=t[1]/100,e=n+t[2]/100*(1-n);let r=0;return e>0&&(r=n/e),[t[0],100*r,100*e]},a.hcg.hsl=function(t){const n=t[1]/100,e=t[2]/100*(1-n)+.5*n;let r=0;return e>0&&e<.5?r=n/(2*e):e>=.5&&e<1&&(r=n/(2*(1-e))),[t[0],100*r,100*e]},a.hcg.hwb=function(t){const n=t[1]/100,e=n+t[2]/100*(1-n);return[t[0],100*(e-n),100*(1-e)]},a.hwb.hcg=function(t){const n=1-t[2]/100,e=n-t[1]/100;let r=0;return e<1&&(r=(n-e)/(1-e)),[t[0],100*e,100*r]},a.apple.rgb=function(t){return[t[0]/65535*255,t[1]/65535*255,t[2]/65535*255]},a.rgb.apple=function(t){return[t[0]/255*65535,t[1]/255*65535,t[2]/255*65535]},a.gray.rgb=function(t){return[t[0]/100*255,t[0]/100*255,t[0]/100*255]},a.gray.hsl=function(t){return[0,0,t[0]]},a.gray.hsv=a.gray.hsl,a.gray.hwb=function(t){return[0,100,t[0]]},a.gray.cmyk=function(t){return[0,0,0,t[0]]},a.gray.lab=function(t){return[t[0],0,0]},a.gray.hex=function(t){const n=255&Math.round(t[0]/100*255),e=((n<<16)+(n<<8)+n).toString(16).toUpperCase();return"000000".substring(e.length)+e},a.rgb.gray=function(t){return[(t[0]+t[1]+t[2])/3/255*100]};const u={};Object.keys(o).forEach((t=>{u[t]={},Object.defineProperty(u[t],"channels",{value:o[t].channels}),Object.defineProperty(u[t],"labels",{value:o[t].labels});const n=function(t){const n=function(t){const n=function(){const t={},n=Object.keys(o);for(let e=n.length,r=0;r<e;r++)t[n[r]]={distance:-1,parent:null};return t}(),e=[t];for(n[t].distance=0;e.length;){const t=e.pop(),r=Object.keys(o[t]);for(let s=r.length,a=0;a<s;a++){const s=r[a],o=n[s];-1===o.distance&&(o.distance=n[t].distance+1,o.parent=t,e.unshift(s))}}return n}(t),e={},r=Object.keys(n);for(let t=r.length,s=0;s<t;s++){const t=r[s];null!==n[t].parent&&(e[t]=l(t,n))}return e}(t);Object.keys(n).forEach((e=>{const r=n[e];u[t][e]=function(t){const n=function(...n){const e=n[0];if(null==e)return e;e.length>1&&(n=e);const r=t(n);if("object"==typeof r)for(let t=r.length,n=0;n<t;n++)r[n]=Math.round(r[n]);return r};return"conversion"in t&&(n.conversion=t.conversion),n}(r),u[t][e].raw=function(t){const n=function(...n){const e=n[0];return null==e?e:(e.length>1&&(n=e),t(n))};return"conversion"in t&&(n.conversion=t.conversion),n}(r)}))}));var c=u;const h=[].slice,f=["keyword","gray","hex"],b={};for(const t of Object.keys(c))b[h.call(c[t].labels).sort().join("")]=t;const g={};function d(t,n){if(!(this instanceof d))return new d(t,n);if(n&&n in f&&(n=null),n&&!(n in c))throw new Error("Unknown model: "+n);let e,s;if(null==t)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(t instanceof d)this.model=t.model,this.color=t.color.slice(),this.valpha=t.valpha;else if("string"==typeof t){const n=r.get(t);if(null===n)throw new Error("Unable to parse color from string: "+t);this.model=n.model,s=c[this.model].channels,this.color=n.value.slice(0,s),this.valpha="number"==typeof n.value[s]?n.value[s]:1}else if(t.length>0){this.model=n||"rgb",s=c[this.model].channels;const e=h.call(t,0,s);this.color=M(e,s),this.valpha="number"==typeof t[s]?t[s]:1}else if("number"==typeof t)this.model="rgb",this.color=[t>>16&255,t>>8&255,255&t],this.valpha=1;else{this.valpha=1;const n=Object.keys(t);"alpha"in t&&(n.splice(n.indexOf("alpha"),1),this.valpha="number"==typeof t.alpha?t.alpha:0);const r=n.sort().join("");if(!(r in b))throw new Error("Unable to parse color from object: "+JSON.stringify(t));this.model=b[r];const s=c[this.model].labels,a=[];for(e=0;e<s.length;e++)a.push(t[s[e]]);this.color=M(a)}if(g[this.model])for(s=c[this.model].channels,e=0;e<s;e++){const t=g[this.model][e];t&&(this.color[e]=t(this.color[e]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}d.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(t){let n=this.model in r.to?this:this.rgb();n=n.round("number"==typeof t?t:1);const e=1===n.valpha?n.color:n.color.concat(this.valpha);return r.to[n.model](e)},percentString(t){const n=this.rgb().round("number"==typeof t?t:1),e=1===n.valpha?n.color:n.color.concat(this.valpha);return r.to.rgb.percent(e)},array(){return 1===this.valpha?this.color.slice():this.color.concat(this.valpha)},object(){const t={},n=c[this.model].channels,e=c[this.model].labels;for(let r=0;r<n;r++)t[e[r]]=this.color[r];return 1!==this.valpha&&(t.alpha=this.valpha),t},unitArray(){const t=this.rgb().color;return t[0]/=255,t[1]/=255,t[2]/=255,1!==this.valpha&&t.push(this.valpha),t},unitObject(){const t=this.rgb().object();return t.r/=255,t.g/=255,t.b/=255,1!==this.valpha&&(t.alpha=this.valpha),t},round(t){return t=Math.max(t||0,0),new d(this.color.map(function(t){return function(n){return function(t,n){return Number(t.toFixed(n))}(n,t)}}(t)).concat(this.valpha),this.model)},alpha(t){return arguments.length>0?new d(this.color.concat(Math.max(0,Math.min(1,t))),this.model):this.valpha},red:y("rgb",0,p(255)),green:y("rgb",1,p(255)),blue:y("rgb",2,p(255)),hue:y(["hsl","hsv","hsl","hwb","hcg"],0,(t=>(t%360+360)%360)),saturationl:y("hsl",1,p(100)),lightness:y("hsl",2,p(100)),saturationv:y("hsv",1,p(100)),value:y("hsv",2,p(100)),chroma:y("hcg",1,p(100)),gray:y("hcg",2,p(100)),white:y("hwb",1,p(100)),wblack:y("hwb",2,p(100)),cyan:y("cmyk",0,p(100)),magenta:y("cmyk",1,p(100)),yellow:y("cmyk",2,p(100)),black:y("cmyk",3,p(100)),x:y("xyz",0,p(100)),y:y("xyz",1,p(100)),z:y("xyz",2,p(100)),l:y("lab",0,p(100)),a:y("lab",1),b:y("lab",2),keyword(t){return arguments.length>0?new d(t):c[this.model].keyword(this.color)},hex(t){return arguments.length>0?new d(t):r.to.hex(this.rgb().round().color)},rgbNumber(){const t=this.rgb().color;return(255&t[0])<<16|(255&t[1])<<8|255&t[2]},luminosity(){const t=this.rgb().color,n=[];for(const[e,r]of t.entries()){const t=r/255;n[e]=t<=.03928?t/12.92:((t+.055)/1.055)**2.4}return.2126*n[0]+.7152*n[1]+.0722*n[2]},contrast(t){const n=this.luminosity(),e=t.luminosity();return n>e?(n+.05)/(e+.05):(e+.05)/(n+.05)},level(t){const n=this.contrast(t);return n>=7.1?"AAA":n>=4.5?"AA":""},isDark(){const t=this.rgb().color;return(299*t[0]+587*t[1]+114*t[2])/1e3<128},isLight(){return!this.isDark()},negate(){const t=this.rgb();for(let n=0;n<3;n++)t.color[n]=255-t.color[n];return t},lighten(t){const n=this.hsl();return n.color[2]+=n.color[2]*t,n},darken(t){const n=this.hsl();return n.color[2]-=n.color[2]*t,n},saturate(t){const n=this.hsl();return n.color[1]+=n.color[1]*t,n},desaturate(t){const n=this.hsl();return n.color[1]-=n.color[1]*t,n},whiten(t){const n=this.hwb();return n.color[1]+=n.color[1]*t,n},blacken(t){const n=this.hwb();return n.color[2]+=n.color[2]*t,n},grayscale(){const t=this.rgb().color,n=.3*t[0]+.59*t[1]+.11*t[2];return d.rgb(n,n,n)},fade(t){return this.alpha(this.valpha-this.valpha*t)},opaquer(t){return this.alpha(this.valpha+this.valpha*t)},rotate(t){const n=this.hsl();let e=n.color[0];return e=(e+t)%360,e=e<0?360+e:e,n.color[0]=e,n},mix(t,n){if(!t||!t.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof t);const e=t.rgb(),r=this.rgb(),s=void 0===n?.5:n,a=2*s-1,o=e.alpha()-r.alpha(),i=((a*o==-1?a:(a+o)/(1+a*o))+1)/2,l=1-i;return d.rgb(i*e.red()+l*r.red(),i*e.green()+l*r.green(),i*e.blue()+l*r.blue(),e.alpha()*s+r.alpha()*(1-s))}};for(const t of Object.keys(c)){if(f.includes(t))continue;const n=c[t].channels;d.prototype[t]=function(){if(this.model===t)return new d(this);if(arguments.length>0)return new d(arguments,t);const e="number"==typeof arguments[n]?n:this.valpha;return new d(m(c[this.model][t].raw(this.color)).concat(e),t)},d[t]=function(e){return"number"==typeof e&&(e=M(h.call(arguments),n)),new d(e,t)}}function y(t,n,e){t=Array.isArray(t)?t:[t];for(const r of t)(g[r]||(g[r]=[]))[n]=e;return t=t[0],function(r){let s;return arguments.length>0?(e&&(r=e(r)),s=this[t](),s.color[n]=r,s):(s=this[t]().color[n],e&&(s=e(s)),s)}}function p(t){return function(n){return Math.max(0,Math.min(t,n))}}function m(t){return Array.isArray(t)?t:[t]}function M(t,n){for(let e=0;e<n;e++)"number"!=typeof t[e]&&(t[e]=0);return t}var w=d;export{w as c}