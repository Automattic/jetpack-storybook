(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2625],{"../../../node_modules/.pnpm/@babel+runtime@7.22.11/node_modules/@babel/runtime/helpers/defineProperty.js":(l,d,o)=>{var i=o("../../../node_modules/.pnpm/@babel+runtime@7.22.11/node_modules/@babel/runtime/helpers/toPropertyKey.js");function m(u,e,n){return e=i(e),e in u?Object.defineProperty(u,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):u[e]=n,u}l.exports=m,l.exports.__esModule=!0,l.exports.default=l.exports},"../../../node_modules/.pnpm/@babel+runtime@7.22.11/node_modules/@babel/runtime/helpers/toPrimitive.js":(l,d,o)=>{var i=o("../../../node_modules/.pnpm/@babel+runtime@7.22.11/node_modules/@babel/runtime/helpers/typeof.js").default;function m(u,e){if(i(u)!=="object"||u===null)return u;var n=u[Symbol.toPrimitive];if(n!==void 0){var f=n.call(u,e||"default");if(i(f)!=="object")return f;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(u)}l.exports=m,l.exports.__esModule=!0,l.exports.default=l.exports},"../../../node_modules/.pnpm/@babel+runtime@7.22.11/node_modules/@babel/runtime/helpers/toPropertyKey.js":(l,d,o)=>{var i=o("../../../node_modules/.pnpm/@babel+runtime@7.22.11/node_modules/@babel/runtime/helpers/typeof.js").default,m=o("../../../node_modules/.pnpm/@babel+runtime@7.22.11/node_modules/@babel/runtime/helpers/toPrimitive.js");function u(e){var n=m(e,"string");return i(n)==="symbol"?n:String(n)}l.exports=u,l.exports.__esModule=!0,l.exports.default=l.exports},"../../../node_modules/.pnpm/@babel+runtime@7.22.11/node_modules/@babel/runtime/helpers/typeof.js":l=>{function d(o){"@babel/helpers - typeof";return l.exports=d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},l.exports.__esModule=!0,l.exports.default=l.exports,d(o)}l.exports=d,l.exports.__esModule=!0,l.exports.default=l.exports},"../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js":(l,d,o)=>{"use strict";o.d(d,{R9:()=>r,UY:()=>e,z2:()=>c});var i=o("../../../node_modules/.pnpm/turbo-combine-reducers@1.0.2/node_modules/turbo-combine-reducers/index.js"),m=o.n(i),u=o("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/default-registry.js");const e=m(),n=u.Z.resolveSelect,f=u.Z.suspendSelect,C=u.Z.subscribe,a=u.Z.registerGenericStore,r=u.Z.registerStore,s=u.Z.use,c=u.Z.register},"../../../node_modules/.pnpm/@wordpress+url@3.42.0/node_modules/@wordpress/url/build-module/add-query-args.js":(l,d,o)=>{"use strict";o.d(d,{f:()=>u});var i=o("../../../node_modules/.pnpm/@wordpress+url@3.42.0/node_modules/@wordpress/url/build-module/get-query-args.js"),m=o("../../../node_modules/.pnpm/@wordpress+url@3.42.0/node_modules/@wordpress/url/build-module/build-query-string.js");function u(e="",n){if(!n||!Object.keys(n).length)return e;let f=e;const C=e.indexOf("?");return C!==-1&&(n=Object.assign((0,i.w)(e),n),f=f.substr(0,C)),f+"?"+(0,m.I)(n)}},"../../../node_modules/.pnpm/@wordpress+url@3.42.0/node_modules/@wordpress/url/build-module/build-query-string.js":(l,d,o)=>{"use strict";o.d(d,{I:()=>i});function i(m){let u="";const e=Object.entries(m);let n;for(;n=e.shift();){let[f,C]=n;if(Array.isArray(C)||C&&C.constructor===Object){const r=Object.entries(C).reverse();for(const[s,c]of r)e.unshift([`${f}[${s}]`,c])}else C!==void 0&&(C===null&&(C=""),u+="&"+[f,C].map(encodeURIComponent).join("="))}return u.substr(1)}},"../../../node_modules/.pnpm/@wordpress+url@3.42.0/node_modules/@wordpress/url/build-module/get-query-args.js":(l,d,o)=>{"use strict";o.d(d,{w:()=>e});function i(n){try{return decodeURIComponent(n)}catch(f){return n}}var m=o("../../../node_modules/.pnpm/@wordpress+url@3.42.0/node_modules/@wordpress/url/build-module/get-query-string.js");function u(n,f,C){const a=f.length,r=a-1;for(let s=0;s<a;s++){let c=f[s];!c&&Array.isArray(n)&&(c=n.length.toString()),c=["__proto__","constructor","prototype"].includes(c)?c.toUpperCase():c;const t=!isNaN(Number(f[s+1]));n[c]=s===r?C:n[c]||(t?[]:{}),Array.isArray(n[c])&&!t&&(n[c]={...n[c]}),n=n[c]}}function e(n){return((0,m.W)(n)||"").replace(/\+/g,"%20").split("&").reduce((f,C)=>{const[a,r=""]=C.split("=").filter(Boolean).map(i);if(a){const s=a.replace(/\]/g,"").split("[");u(f,s,r)}return f},Object.create(null))}},"../../../node_modules/.pnpm/@wordpress+url@3.42.0/node_modules/@wordpress/url/build-module/get-query-string.js":(l,d,o)=>{"use strict";o.d(d,{W:()=>i});function i(m){let u;try{u=new URL(m,"http://example.com").search.substring(1)}catch(e){}if(u)return u}},"../../../node_modules/.pnpm/@wordpress+url@3.42.0/node_modules/@wordpress/url/build-module/remove-query-args.js":(l,d,o)=>{"use strict";o.d(d,{I:()=>u});var i=o("../../../node_modules/.pnpm/@wordpress+url@3.42.0/node_modules/@wordpress/url/build-module/get-query-args.js"),m=o("../../../node_modules/.pnpm/@wordpress+url@3.42.0/node_modules/@wordpress/url/build-module/build-query-string.js");function u(e,...n){const f=e.indexOf("?");if(f===-1)return e;const C=(0,i.w)(e),a=e.substr(0,f);n.forEach(s=>delete C[s]);const r=(0,m.I)(C);return r?a+"?"+r:a}},"../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js":(l,d,o)=>{var i=o("../../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js");d.formatArgs=u,d.save=e,d.load=n,d.useColors=m,d.storage=f(),d.destroy=(()=>{let a=!1;return()=>{a||(a=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),d.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function m(){return typeof window!="undefined"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs)?!0:typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)?!1:typeof document!="undefined"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window!="undefined"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function u(a){if(a[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+a[0]+(this.useColors?"%c ":" ")+"+"+l.exports.humanize(this.diff),!this.useColors)return;const r="color: "+this.color;a.splice(1,0,r,"color: inherit");let s=0,c=0;a[0].replace(/%[a-zA-Z%]/g,t=>{t!=="%%"&&(s++,t==="%c"&&(c=s))}),a.splice(c,0,r)}d.log=console.debug||console.log||(()=>{});function e(a){try{a?d.storage.setItem("debug",a):d.storage.removeItem("debug")}catch(r){}}function n(){let a;try{a=d.storage.getItem("debug")}catch(r){}return!a&&typeof i!="undefined"&&"env"in i&&(a=i.env.DEBUG),a}function f(){try{return localStorage}catch(a){}}l.exports=o("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/common.js")(d);const{formatters:C}=l.exports;C.j=function(a){try{return JSON.stringify(a)}catch(r){return"[UnexpectedJSONParseError]: "+r.message}}},"../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/common.js":(l,d,o)=>{function i(m){e.debug=e,e.default=e,e.coerce=s,e.disable=C,e.enable=f,e.enabled=a,e.humanize=o("../../../node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js"),e.destroy=c,Object.keys(m).forEach(t=>{e[t]=m[t]}),e.names=[],e.skips=[],e.formatters={};function u(t){let p=0;for(let _=0;_<t.length;_++)p=(p<<5)-p+t.charCodeAt(_),p|=0;return e.colors[Math.abs(p)%e.colors.length]}e.selectColor=u;function e(t){let p,_=null,h,x;function g(...b){if(!g.enabled)return;const y=g,w=Number(new Date),E=w-(p||w);y.diff=E,y.prev=p,y.curr=w,p=w,b[0]=e.coerce(b[0]),typeof b[0]!="string"&&b.unshift("%O");let F=0;b[0]=b[0].replace(/%([a-zA-Z%])/g,(v,A)=>{if(v==="%%")return"%";F++;const j=e.formatters[A];if(typeof j=="function"){const P=b[F];v=j.call(y,P),b.splice(F,1),F--}return v}),e.formatArgs.call(y,b),(y.log||e.log).apply(y,b)}return g.namespace=t,g.useColors=e.useColors(),g.color=e.selectColor(t),g.extend=n,g.destroy=e.destroy,Object.defineProperty(g,"enabled",{enumerable:!0,configurable:!1,get:()=>_!==null?_:(h!==e.namespaces&&(h=e.namespaces,x=e.enabled(t)),x),set:b=>{_=b}}),typeof e.init=="function"&&e.init(g),g}function n(t,p){const _=e(this.namespace+(typeof p=="undefined"?":":p)+t);return _.log=this.log,_}function f(t){e.save(t),e.namespaces=t,e.names=[],e.skips=[];let p;const _=(typeof t=="string"?t:"").split(/[\s,]+/),h=_.length;for(p=0;p<h;p++)_[p]&&(t=_[p].replace(/\*/g,".*?"),t[0]==="-"?e.skips.push(new RegExp("^"+t.slice(1)+"$")):e.names.push(new RegExp("^"+t+"$")))}function C(){const t=[...e.names.map(r),...e.skips.map(r).map(p=>"-"+p)].join(",");return e.enable(""),t}function a(t){if(t[t.length-1]==="*")return!0;let p,_;for(p=0,_=e.skips.length;p<_;p++)if(e.skips[p].test(t))return!1;for(p=0,_=e.names.length;p<_;p++)if(e.names[p].test(t))return!0;return!1}function r(t){return t.toString().substring(2,t.toString().length-2).replace(/\.\*\?$/,"*")}function s(t){return t instanceof Error?t.stack||t.message:t}function c(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return e.enable(e.load()),e}l.exports=i},"../../../node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js":l=>{var d=1e3,o=d*60,i=o*60,m=i*24,u=m*7,e=m*365.25;l.exports=function(r,s){s=s||{};var c=typeof r;if(c==="string"&&r.length>0)return n(r);if(c==="number"&&isFinite(r))return s.long?C(r):f(r);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(r))};function n(r){if(r=String(r),!(r.length>100)){var s=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(r);if(s){var c=parseFloat(s[1]),t=(s[2]||"ms").toLowerCase();switch(t){case"years":case"year":case"yrs":case"yr":case"y":return c*e;case"weeks":case"week":case"w":return c*u;case"days":case"day":case"d":return c*m;case"hours":case"hour":case"hrs":case"hr":case"h":return c*i;case"minutes":case"minute":case"mins":case"min":case"m":return c*o;case"seconds":case"second":case"secs":case"sec":case"s":return c*d;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}}}function f(r){var s=Math.abs(r);return s>=m?Math.round(r/m)+"d":s>=i?Math.round(r/i)+"h":s>=o?Math.round(r/o)+"m":s>=d?Math.round(r/d)+"s":r+"ms"}function C(r){var s=Math.abs(r);return s>=m?a(r,s,m,"day"):s>=i?a(r,s,i,"hour"):s>=o?a(r,s,o,"minute"):s>=d?a(r,s,d,"second"):r+" ms"}function a(r,s,c,t){var p=s>=c*1.5;return Math.round(r/c)+" "+t+(p?"s":"")}}}]);})();
