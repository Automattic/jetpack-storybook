"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4697],{"../../../node_modules/.pnpm/@wordpress+compose@7.7.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js":(m,u,o)=>{o.d(u,{A:()=>s});var l=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const t=new Map;function d(e){if(!e)return null;let n=t.get(e);return n||(typeof window!="undefined"&&typeof window.matchMedia=="function"?(n=window.matchMedia(e),t.set(e,n),n):null)}function s(e){const n=(0,l.useMemo)(()=>{const r=d(e);return{subscribe(a){var p;return r?((p=r.addEventListener)==null||p.call(r,"change",a),()=>{var _;(_=r.removeEventListener)==null||_.call(r,"change",a)}):()=>{}},getValue(){var a;return(a=r==null?void 0:r.matches)!==null&&a!==void 0?a:!1}}},[e]);return(0,l.useSyncExternalStore)(n.subscribe,n.getValue,()=>!1)}},"../../../node_modules/.pnpm/@wordpress+data@10.7.0_react@18.3.1/node_modules/@wordpress/data/build-module/dispatch.js":(m,u,o)=>{o.d(u,{J:()=>t});var l=o("../../../node_modules/.pnpm/@wordpress+data@10.7.0_react@18.3.1/node_modules/@wordpress/data/build-module/default-registry.js");function t(d){return l.A.dispatch(d)}},"../../../node_modules/.pnpm/@wordpress+data@10.7.0_react@18.3.1/node_modules/@wordpress/data/build-module/select.js":(m,u,o)=>{o.d(u,{L:()=>t});var l=o("../../../node_modules/.pnpm/@wordpress+data@10.7.0_react@18.3.1/node_modules/@wordpress/data/build-module/default-registry.js");function t(d){return l.A.select(d)}},"../../../node_modules/.pnpm/@wordpress+deprecated@4.7.0/node_modules/@wordpress/deprecated/build-module/index.js":(m,u,o)=>{o.d(u,{A:()=>d});var l=o("../../../node_modules/.pnpm/@wordpress+hooks@4.7.0/node_modules/@wordpress/hooks/build-module/index.js");const t=Object.create(null);function d(s,e={}){const{since:n,version:r,alternative:a,plugin:p,link:_,hint:c}=e,w=p?` from ${p}`:"",y=n?` since version ${n}`:"",g=r?` and will be removed${w} in version ${r}`:"",i=a?` Please use ${a} instead.`:"",h=_?` See: ${_}`:"",E=c?` Note: ${c}`:"",f=`${s} is deprecated${y}${g}.${i}${h}${E}`;f in t||((0,l.Eo)("deprecated",s,e,f),console.warn(f),t[f]=!0)}},"../../../node_modules/.pnpm/@wordpress+icons@10.7.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(m,u,o)=>{o.d(u,{A:()=>d});var l=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function t({icon:s,size:e=24,...n},r){return(0,l.cloneElement)(s,{width:e,height:e,...n,ref:r})}const d=(0,l.forwardRef)(t)},"../../../node_modules/.pnpm/@wordpress+icons@10.7.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js":(m,u,o)=>{o.d(u,{A:()=>s});var l=o("../../../node_modules/.pnpm/@wordpress+primitives@4.7.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),t=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=(0,t.jsx)(l.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,t.jsx)(l.wA,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"})})},"../../../node_modules/.pnpm/@wordpress+is-shallow-equal@5.7.0/node_modules/@wordpress/is-shallow-equal/build-module/index.js":(m,u,o)=>{o.d(u,{Ay:()=>d});var l=o("../../../node_modules/.pnpm/@wordpress+is-shallow-equal@5.7.0/node_modules/@wordpress/is-shallow-equal/build-module/objects.js");function t(s,e){if(s===e)return!0;if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function d(s,e){if(s&&e){if(s.constructor===Object&&e.constructor===Object)return(0,l.A)(s,e);if(Array.isArray(s)&&Array.isArray(e))return t(s,e)}return s===e}},"../../../node_modules/.pnpm/@wordpress+is-shallow-equal@5.7.0/node_modules/@wordpress/is-shallow-equal/build-module/objects.js":(m,u,o)=>{o.d(u,{A:()=>l});function l(t,d){if(t===d)return!0;const s=Object.keys(t),e=Object.keys(d);if(s.length!==e.length)return!1;let n=0;for(;n<s.length;){const r=s[n],a=t[r];if(a===void 0&&!d.hasOwnProperty(r)||a!==d[r])return!1;n++}return!0}},"../../../node_modules/.pnpm/@wordpress+primitives@4.7.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js":(m,u,o)=>{o.d(u,{G:()=>e,jl:()=>s,rw:()=>p,t4:()=>g,tS:()=>a,wA:()=>r});var l=o("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),t=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=i=>(0,t.createElement)("circle",i),e=i=>(0,t.createElement)("g",i),n=i=>createElement("line",i),r=i=>(0,t.createElement)("path",i),a=i=>(0,t.createElement)("polygon",i),p=i=>(0,t.createElement)("rect",i),_=i=>createElement("defs",i),c=i=>createElement("radialGradient",i),w=i=>createElement("linearGradient",i),y=i=>createElement("stop",i),g=(0,t.forwardRef)(({className:i,isPressed:h,...E},f)=>{const j={...E,className:(0,l.A)(i,{"is-pressed":h})||void 0,"aria-hidden":!0,focusable:!1};return(0,d.jsx)("svg",{...j,ref:f})});g.displayName="SVG"},"../../../node_modules/.pnpm/@wordpress+url@4.7.0/node_modules/@wordpress/url/build-module/add-query-args.js":(m,u,o)=>{o.d(u,{F:()=>d});var l=o("../../../node_modules/.pnpm/@wordpress+url@4.7.0/node_modules/@wordpress/url/build-module/get-query-args.js"),t=o("../../../node_modules/.pnpm/@wordpress+url@4.7.0/node_modules/@wordpress/url/build-module/build-query-string.js");function d(s="",e){if(!e||!Object.keys(e).length)return s;let n=s;const r=s.indexOf("?");return r!==-1&&(e=Object.assign((0,l.u)(s),e),n=n.substr(0,r)),n+"?"+(0,t.G)(e)}},"../../../node_modules/.pnpm/@wordpress+url@4.7.0/node_modules/@wordpress/url/build-module/build-query-string.js":(m,u,o)=>{o.d(u,{G:()=>l});function l(t){let d="";const s=Object.entries(t);let e;for(;e=s.shift();){let[n,r]=e;if(Array.isArray(r)||r&&r.constructor===Object){const p=Object.entries(r).reverse();for(const[_,c]of p)s.unshift([`${n}[${_}]`,c])}else r!==void 0&&(r===null&&(r=""),d+="&"+[n,r].map(encodeURIComponent).join("="))}return d.substr(1)}},"../../../node_modules/.pnpm/@wordpress+url@4.7.0/node_modules/@wordpress/url/build-module/get-query-args.js":(m,u,o)=>{o.d(u,{u:()=>s});function l(e){try{return decodeURIComponent(e)}catch(n){return e}}var t=o("../../../node_modules/.pnpm/@wordpress+url@4.7.0/node_modules/@wordpress/url/build-module/get-query-string.js");function d(e,n,r){const a=n.length,p=a-1;for(let _=0;_<a;_++){let c=n[_];!c&&Array.isArray(e)&&(c=e.length.toString()),c=["__proto__","constructor","prototype"].includes(c)?c.toUpperCase():c;const w=!isNaN(Number(n[_+1]));e[c]=_===p?r:e[c]||(w?[]:{}),Array.isArray(e[c])&&!w&&(e[c]={...e[c]}),e=e[c]}}function s(e){return((0,t.e)(e)||"").replace(/\+/g,"%20").split("&").reduce((n,r)=>{const[a,p=""]=r.split("=").filter(Boolean).map(l);if(a){const _=a.replace(/\]/g,"").split("[");d(n,_,p)}return n},Object.create(null))}},"../../../node_modules/.pnpm/@wordpress+url@4.7.0/node_modules/@wordpress/url/build-module/get-query-string.js":(m,u,o)=>{o.d(u,{e:()=>l});function l(t){let d;try{d=new URL(t,"http://example.com").search.substring(1)}catch(s){}if(d)return d}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(m,u,o)=>{o.d(u,{A:()=>d});function l(s){var e,n,r="";if(typeof s=="string"||typeof s=="number")r+=s;else if(typeof s=="object")if(Array.isArray(s)){var a=s.length;for(e=0;e<a;e++)s[e]&&(n=l(s[e]))&&(r&&(r+=" "),r+=n)}else for(n in s)s[n]&&(r&&(r+=" "),r+=n);return r}function t(){for(var s,e,n=0,r="",a=arguments.length;n<a;n++)(s=arguments[n])&&(e=l(s))&&(r&&(r+=" "),r+=e);return r}const d=t},"../../../node_modules/.pnpm/is-plain-object@5.0.0/node_modules/is-plain-object/dist/is-plain-object.mjs":(m,u,o)=>{o.d(u,{Q:()=>t});/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */function l(d){return Object.prototype.toString.call(d)==="[object Object]"}function t(d){var s,e;return l(d)===!1?!1:(s=d.constructor,s===void 0?!0:(e=s.prototype,!(l(e)===!1||e.hasOwnProperty("isPrototypeOf")===!1)))}}}]);})();
