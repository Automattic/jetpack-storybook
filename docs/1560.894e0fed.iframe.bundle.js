(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1560],{"../../../node_modules/.pnpm/@babel+runtime@7.22.11/node_modules/@babel/runtime/helpers/defineProperty.js":(n,d,e)=>{var s=e("../../../node_modules/.pnpm/@babel+runtime@7.22.11/node_modules/@babel/runtime/helpers/toPropertyKey.js");function u(o,t,r){return t=s(t),t in o?Object.defineProperty(o,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[t]=r,o}n.exports=u,n.exports.__esModule=!0,n.exports.default=n.exports},"../../../node_modules/.pnpm/@babel+runtime@7.22.11/node_modules/@babel/runtime/helpers/toPrimitive.js":(n,d,e)=>{var s=e("../../../node_modules/.pnpm/@babel+runtime@7.22.11/node_modules/@babel/runtime/helpers/typeof.js").default;function u(o,t){if(s(o)!=="object"||o===null)return o;var r=o[Symbol.toPrimitive];if(r!==void 0){var l=r.call(o,t||"default");if(s(l)!=="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(o)}n.exports=u,n.exports.__esModule=!0,n.exports.default=n.exports},"../../../node_modules/.pnpm/@babel+runtime@7.22.11/node_modules/@babel/runtime/helpers/toPropertyKey.js":(n,d,e)=>{var s=e("../../../node_modules/.pnpm/@babel+runtime@7.22.11/node_modules/@babel/runtime/helpers/typeof.js").default,u=e("../../../node_modules/.pnpm/@babel+runtime@7.22.11/node_modules/@babel/runtime/helpers/toPrimitive.js");function o(t){var r=u(t,"string");return s(r)==="symbol"?r:String(r)}n.exports=o,n.exports.__esModule=!0,n.exports.default=n.exports},"../../../node_modules/.pnpm/@babel+runtime@7.22.11/node_modules/@babel/runtime/helpers/typeof.js":n=>{function d(e){"@babel/helpers - typeof";return n.exports=d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},n.exports.__esModule=!0,n.exports.default=n.exports,d(e)}n.exports=d,n.exports.__esModule=!0,n.exports.default=n.exports},"../../../node_modules/.pnpm/@storybook+addon-actions@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs":(n,d,e)=>{"use strict";e.d(d,{aD:()=>s.aD});var s=e("../../../node_modules/.pnpm/@storybook+addon-actions@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs"),u=(...t)=>{let r=config,l=t;l.length===1&&Array.isArray(l[0])&&([l]=l),l.length!==1&&typeof l[l.length-1]!="string"&&(r={...config,...l.pop()});let _=l[0];(l.length!==1||typeof _=="string")&&(_={},l.forEach(m=>{_[m]=m}));let a={};return Object.keys(_).forEach(m=>{a[m]=action(_[m],r)}),a},o=e("../../../node_modules/.pnpm/@storybook+addon-actions@7.1.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs")},"../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/notice/index.js":(n,d,e)=>{"use strict";e.d(d,{Z:()=>M});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),o=e.n(u),t=e("../../../node_modules/.pnpm/@wordpress+i18n@4.41.0/node_modules/@wordpress/i18n/build-module/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+element@5.18.0/node_modules/@wordpress/element/build-module/serialize.js"),l=e("../../../node_modules/.pnpm/@wordpress+element@5.18.0/node_modules/@wordpress/element/build-module/raw-html.js"),_=e("../../../node_modules/.pnpm/@wordpress+a11y@3.41.0/node_modules/@wordpress/a11y/build-module/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/close.js"),m=e("../../../node_modules/.pnpm/@wordpress+components@25.7.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js");const p=()=>{};function i(E,f){const c=typeof E=="string"?E:(0,r.ZP)(E);(0,s.useEffect)(()=>{c&&(0,_.D)(c,f)},[c,f])}function y(E){switch(E){case"success":case"warning":case"info":return"polite";case"error":default:return"assertive"}}function O({className:E,status:f="info",children:c,spokenMessage:h=c,onRemove:j=p,isDismissible:v=!0,actions:x=[],politeness:A=y(f),__unstableHTML:C,onDismiss:T=p}){i(h,A);const W=o()(E,"components-notice","is-"+f,{"is-dismissible":v});C&&typeof c=="string"&&(c=(0,s.createElement)(l.Z,null,c));const U=b=>{var w;(w=b==null?void 0:b.preventDefault)==null||w.call(b),T(),j()};return(0,s.createElement)("div",{className:W},(0,s.createElement)("div",{className:"components-notice__content"},c,(0,s.createElement)("div",{className:"components-notice__actions"},x.map(({className:b,label:w,isPrimary:B,variant:D,noDefaultClasses:R=!1,onClick:I,url:g},K)=>{let P=D;return D!=="primary"&&!R&&(P=g?"link":"secondary"),typeof P=="undefined"&&B&&(P="primary"),(0,s.createElement)(m.ZP,{key:K,href:g,variant:P,onClick:g?void 0:I,className:o()("components-notice__action",b)},w)}))),v&&(0,s.createElement)(m.ZP,{className:"components-notice__dismiss",icon:a.Z,label:(0,t.__)("Dismiss this notice"),onClick:U,showTooltip:!1}))}const M=O},"../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js":(n,d,e)=>{"use strict";e.d(d,{Z:()=>o});var s=e("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/registry-provider/use-registry.js");const o=t=>{const{dispatch:r}=(0,s.Z)();return t===void 0?r:r(t)}},"../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js":(n,d,e)=>{"use strict";e.d(d,{W:()=>u});var s=e("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/default-registry.js");function u(o){return s.Z.dispatch(o)}},"../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js":(n,d,e)=>{"use strict";e.d(d,{R9:()=>m,UY:()=>t,z2:()=>i});var s=e("../../../node_modules/.pnpm/turbo-combine-reducers@1.0.2/node_modules/turbo-combine-reducers/index.js"),u=e.n(s),o=e("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/default-registry.js");const t=u(),r=o.Z.resolveSelect,l=o.Z.suspendSelect,_=o.Z.subscribe,a=o.Z.registerGenericStore,m=o.Z.registerStore,p=o.Z.use,i=o.Z.register},"../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js":(n,d,e)=>{"use strict";e.d(d,{Y:()=>u});var s=e("../../../node_modules/.pnpm/@wordpress+data@9.11.0_react@18.2.0/node_modules/@wordpress/data/build-module/default-registry.js");function u(o){return s.Z.select(o)}},"../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/icon/index.js":(n,d,e)=>{"use strict";e.d(d,{Z:()=>o});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function u({icon:t,size:r=24,...l}){return(0,s.cloneElement)(t,{width:r,height:r,...l})}const o=u},"../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/check.js":(n,d,e)=>{"use strict";e.d(d,{Z:()=>t});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("../../../node_modules/.pnpm/@wordpress+primitives@3.39.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,s.createElement)(u.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,s.createElement)(u.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/info.js":(n,d,e)=>{"use strict";e.d(d,{Z:()=>t});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("../../../node_modules/.pnpm/@wordpress+primitives@3.39.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,s.createElement)(u.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,s.createElement)(u.y$,{d:"M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.32.0/node_modules/@wordpress/icons/build-module/library/warning.js":(n,d,e)=>{"use strict";e.d(d,{Z:()=>t});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("../../../node_modules/.pnpm/@wordpress+primitives@3.39.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,s.createElement)(u.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,s.createElement)(u.y$,{d:"M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm1.13 9.38l.35-6.46H8.52l.35 6.46h2.26zm-.09 3.36c.24-.23.37-.55.37-.96 0-.42-.12-.74-.36-.97s-.59-.35-1.06-.35-.82.12-1.07.35-.37.55-.37.97c0 .41.13.73.38.96.26.23.61.34 1.06.34s.8-.11 1.05-.34z"}))},"../../../node_modules/.pnpm/@wordpress+url@3.42.0/node_modules/@wordpress/url/build-module/add-query-args.js":(n,d,e)=>{"use strict";e.d(d,{f:()=>o});var s=e("../../../node_modules/.pnpm/@wordpress+url@3.42.0/node_modules/@wordpress/url/build-module/get-query-args.js"),u=e("../../../node_modules/.pnpm/@wordpress+url@3.42.0/node_modules/@wordpress/url/build-module/build-query-string.js");function o(t="",r){if(!r||!Object.keys(r).length)return t;let l=t;const _=t.indexOf("?");return _!==-1&&(r=Object.assign((0,s.w)(t),r),l=l.substr(0,_)),l+"?"+(0,u.I)(r)}},"../../../node_modules/.pnpm/@wordpress+url@3.42.0/node_modules/@wordpress/url/build-module/build-query-string.js":(n,d,e)=>{"use strict";e.d(d,{I:()=>s});function s(u){let o="";const t=Object.entries(u);let r;for(;r=t.shift();){let[l,_]=r;if(Array.isArray(_)||_&&_.constructor===Object){const m=Object.entries(_).reverse();for(const[p,i]of m)t.unshift([`${l}[${p}]`,i])}else _!==void 0&&(_===null&&(_=""),o+="&"+[l,_].map(encodeURIComponent).join("="))}return o.substr(1)}},"../../../node_modules/.pnpm/@wordpress+url@3.42.0/node_modules/@wordpress/url/build-module/get-query-args.js":(n,d,e)=>{"use strict";e.d(d,{w:()=>t});function s(r){try{return decodeURIComponent(r)}catch(l){return r}}var u=e("../../../node_modules/.pnpm/@wordpress+url@3.42.0/node_modules/@wordpress/url/build-module/get-query-string.js");function o(r,l,_){const a=l.length,m=a-1;for(let p=0;p<a;p++){let i=l[p];!i&&Array.isArray(r)&&(i=r.length.toString()),i=["__proto__","constructor","prototype"].includes(i)?i.toUpperCase():i;const y=!isNaN(Number(l[p+1]));r[i]=p===m?_:r[i]||(y?[]:{}),Array.isArray(r[i])&&!y&&(r[i]={...r[i]}),r=r[i]}}function t(r){return((0,u.W)(r)||"").replace(/\+/g,"%20").split("&").reduce((l,_)=>{const[a,m=""]=_.split("=").filter(Boolean).map(s);if(a){const p=a.replace(/\]/g,"").split("[");o(l,p,m)}return l},Object.create(null))}},"../../../node_modules/.pnpm/@wordpress+url@3.42.0/node_modules/@wordpress/url/build-module/get-query-string.js":(n,d,e)=>{"use strict";e.d(d,{W:()=>s});function s(u){let o;try{o=new URL(u,"http://example.com").search.substring(1)}catch(t){}if(o)return o}}}]);})();
