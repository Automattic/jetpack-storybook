(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9423],{"../../../node_modules/.pnpm/@wordpress+data@9.14.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js":(g,u,l)=>{"use strict";l.d(u,{R9:()=>t,UY:()=>C,z2:()=>n});var c=l("../../../node_modules/.pnpm/@wordpress+data@9.14.0_react@18.2.0/node_modules/@wordpress/data/build-module/default-registry.js"),m=l("../../../node_modules/.pnpm/@wordpress+data@9.14.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/combine-reducers.js");const C=m.U,e=c.Z.resolveSelect,d=c.Z.suspendSelect,f=c.Z.subscribe,a=c.Z.registerGenericStore,t=c.Z.registerStore,r=c.Z.use,n=c.Z.register},"../../../node_modules/.pnpm/@wordpress+url@3.45.0/node_modules/@wordpress/url/build-module/add-query-args.js":(g,u,l)=>{"use strict";l.d(u,{f:()=>C});var c=l("../../../node_modules/.pnpm/@wordpress+url@3.45.0/node_modules/@wordpress/url/build-module/get-query-args.js"),m=l("../../../node_modules/.pnpm/@wordpress+url@3.45.0/node_modules/@wordpress/url/build-module/build-query-string.js");function C(e="",d){if(!d||!Object.keys(d).length)return e;let f=e;const a=e.indexOf("?");return a!==-1&&(d=Object.assign((0,c.w)(e),d),f=f.substr(0,a)),f+"?"+(0,m.I)(d)}},"../../../node_modules/.pnpm/@wordpress+url@3.45.0/node_modules/@wordpress/url/build-module/build-query-string.js":(g,u,l)=>{"use strict";l.d(u,{I:()=>c});function c(m){let C="";const e=Object.entries(m);let d;for(;d=e.shift();){let[f,a]=d;if(Array.isArray(a)||a&&a.constructor===Object){const r=Object.entries(a).reverse();for(const[n,o]of r)e.unshift([`${f}[${n}]`,o])}else a!==void 0&&(a===null&&(a=""),C+="&"+[f,a].map(encodeURIComponent).join("="))}return C.substr(1)}},"../../../node_modules/.pnpm/@wordpress+url@3.45.0/node_modules/@wordpress/url/build-module/get-query-args.js":(g,u,l)=>{"use strict";l.d(u,{w:()=>e});function c(d){try{return decodeURIComponent(d)}catch(f){return d}}var m=l("../../../node_modules/.pnpm/@wordpress+url@3.45.0/node_modules/@wordpress/url/build-module/get-query-string.js");function C(d,f,a){const t=f.length,r=t-1;for(let n=0;n<t;n++){let o=f[n];!o&&Array.isArray(d)&&(o=d.length.toString()),o=["__proto__","constructor","prototype"].includes(o)?o.toUpperCase():o;const s=!isNaN(Number(f[n+1]));d[o]=n===r?a:d[o]||(s?[]:{}),Array.isArray(d[o])&&!s&&(d[o]={...d[o]}),d=d[o]}}function e(d){return((0,m.W)(d)||"").replace(/\+/g,"%20").split("&").reduce((f,a)=>{const[t,r=""]=a.split("=").filter(Boolean).map(c);if(t){const n=t.replace(/\]/g,"").split("[");C(f,n,r)}return f},Object.create(null))}},"../../../node_modules/.pnpm/@wordpress+url@3.45.0/node_modules/@wordpress/url/build-module/get-query-string.js":(g,u,l)=>{"use strict";l.d(u,{W:()=>c});function c(m){let C;try{C=new URL(m,"http://example.com").search.substring(1)}catch(e){}if(C)return C}},"../../../node_modules/.pnpm/@wordpress+url@3.45.0/node_modules/@wordpress/url/build-module/remove-query-args.js":(g,u,l)=>{"use strict";l.d(u,{I:()=>C});var c=l("../../../node_modules/.pnpm/@wordpress+url@3.45.0/node_modules/@wordpress/url/build-module/get-query-args.js"),m=l("../../../node_modules/.pnpm/@wordpress+url@3.45.0/node_modules/@wordpress/url/build-module/build-query-string.js");function C(e,...d){const f=e.indexOf("?");if(f===-1)return e;const a=(0,c.w)(e),t=e.substr(0,f);d.forEach(n=>delete a[n]);const r=(0,m.I)(a);return r?t+"?"+r:t}},"../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js":(g,u,l)=>{var c=l("../../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js");u.formatArgs=C,u.save=e,u.load=d,u.useColors=m,u.storage=f(),u.destroy=(()=>{let t=!1;return()=>{t||(t=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),u.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function m(){return typeof window!="undefined"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs)?!0:typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)?!1:typeof document!="undefined"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window!="undefined"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function C(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+g.exports.humanize(this.diff),!this.useColors)return;const r="color: "+this.color;t.splice(1,0,r,"color: inherit");let n=0,o=0;t[0].replace(/%[a-zA-Z%]/g,s=>{s!=="%%"&&(n++,s==="%c"&&(o=n))}),t.splice(o,0,r)}u.log=console.debug||console.log||(()=>{});function e(t){try{t?u.storage.setItem("debug",t):u.storage.removeItem("debug")}catch(r){}}function d(){let t;try{t=u.storage.getItem("debug")}catch(r){}return!t&&typeof c!="undefined"&&"env"in c&&(t=c.env.DEBUG),t}function f(){try{return localStorage}catch(t){}}g.exports=l("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/common.js")(u);const{formatters:a}=g.exports;a.j=function(t){try{return JSON.stringify(t)}catch(r){return"[UnexpectedJSONParseError]: "+r.message}}},"../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/common.js":(g,u,l)=>{function c(m){e.debug=e,e.default=e,e.coerce=n,e.disable=a,e.enable=f,e.enabled=t,e.humanize=l("../../../node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js"),e.destroy=o,Object.keys(m).forEach(s=>{e[s]=m[s]}),e.names=[],e.skips=[],e.formatters={};function C(s){let i=0;for(let p=0;p<s.length;p++)i=(i<<5)-i+s.charCodeAt(p),i|=0;return e.colors[Math.abs(i)%e.colors.length]}e.selectColor=C;function e(s){let i,p=null,h,A;function y(..._){if(!y.enabled)return;const b=y,w=Number(new Date),j=w-(i||w);b.diff=j,b.prev=i,b.curr=w,i=w,_[0]=e.coerce(_[0]),typeof _[0]!="string"&&_.unshift("%O");let F=0;_[0]=_[0].replace(/%([a-zA-Z%])/g,(v,O)=>{if(v==="%%")return"%";F++;const E=e.formatters[O];if(typeof E=="function"){const I=_[F];v=E.call(b,I),_.splice(F,1),F--}return v}),e.formatArgs.call(b,_),(b.log||e.log).apply(b,_)}return y.namespace=s,y.useColors=e.useColors(),y.color=e.selectColor(s),y.extend=d,y.destroy=e.destroy,Object.defineProperty(y,"enabled",{enumerable:!0,configurable:!1,get:()=>p!==null?p:(h!==e.namespaces&&(h=e.namespaces,A=e.enabled(s)),A),set:_=>{p=_}}),typeof e.init=="function"&&e.init(y),y}function d(s,i){const p=e(this.namespace+(typeof i=="undefined"?":":i)+s);return p.log=this.log,p}function f(s){e.save(s),e.namespaces=s,e.names=[],e.skips=[];let i;const p=(typeof s=="string"?s:"").split(/[\s,]+/),h=p.length;for(i=0;i<h;i++)p[i]&&(s=p[i].replace(/\*/g,".*?"),s[0]==="-"?e.skips.push(new RegExp("^"+s.slice(1)+"$")):e.names.push(new RegExp("^"+s+"$")))}function a(){const s=[...e.names.map(r),...e.skips.map(r).map(i=>"-"+i)].join(",");return e.enable(""),s}function t(s){if(s[s.length-1]==="*")return!0;let i,p;for(i=0,p=e.skips.length;i<p;i++)if(e.skips[i].test(s))return!1;for(i=0,p=e.names.length;i<p;i++)if(e.names[i].test(s))return!0;return!1}function r(s){return s.toString().substring(2,s.toString().length-2).replace(/\.\*\?$/,"*")}function n(s){return s instanceof Error?s.stack||s.message:s}function o(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return e.enable(e.load()),e}g.exports=c},"../../../node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js":g=>{var u=1e3,l=u*60,c=l*60,m=c*24,C=m*7,e=m*365.25;g.exports=function(r,n){n=n||{};var o=typeof r;if(o==="string"&&r.length>0)return d(r);if(o==="number"&&isFinite(r))return n.long?a(r):f(r);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(r))};function d(r){if(r=String(r),!(r.length>100)){var n=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(r);if(n){var o=parseFloat(n[1]),s=(n[2]||"ms").toLowerCase();switch(s){case"years":case"year":case"yrs":case"yr":case"y":return o*e;case"weeks":case"week":case"w":return o*C;case"days":case"day":case"d":return o*m;case"hours":case"hour":case"hrs":case"hr":case"h":return o*c;case"minutes":case"minute":case"mins":case"min":case"m":return o*l;case"seconds":case"second":case"secs":case"sec":case"s":return o*u;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return o;default:return}}}}function f(r){var n=Math.abs(r);return n>=m?Math.round(r/m)+"d":n>=c?Math.round(r/c)+"h":n>=l?Math.round(r/l)+"m":n>=u?Math.round(r/u)+"s":r+"ms"}function a(r){var n=Math.abs(r);return n>=m?t(r,n,m,"day"):n>=c?t(r,n,c,"hour"):n>=l?t(r,n,l,"minute"):n>=u?t(r,n,u,"second"):r+" ms"}function t(r,n,o,s){var i=n>=o*1.5;return Math.round(r/o)+" "+s+(i?"s":"")}}}]);})();
