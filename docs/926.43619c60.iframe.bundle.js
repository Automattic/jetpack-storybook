"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[926],{"../../../node_modules/.pnpm/@storybook+addon-actions@7.4.6_@types+react-dom@18.2.7_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-actions/dist/index.mjs":(p,r,e)=>{e.d(r,{aD:()=>A});var s="actions",o="storybook/actions",_=`${o}/panel`,t=`${o}/action-event`,n=`${o}/action-clear`,c="$___storybook.isCyclic",i=e("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),w=e("@storybook/preview-api"),y={depth:10,clearOnStoryChange:!0,limit:50},E=(a={})=>{Object.assign(y,a)},m=(a,l)=>{let d=Object.getPrototypeOf(a);return!d||l(d)?d:m(d,l)},f=a=>!!(typeof a=="object"&&a&&m(a,l=>/^Synthetic(?:Base)?Event$/.test(l.constructor.name))&&typeof a.persist=="function"),b=a=>{if(f(a)){let l=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));l.persist();let d=Object.getOwnPropertyDescriptor(l,"view"),u=d==null?void 0:d.value;return typeof u=="object"&&(u==null?void 0:u.constructor.name)==="Window"&&Object.defineProperty(l,"view",{...d,value:Object.create(u.constructor.prototype)}),l}return a};function A(a,l={}){let d={...y,...l},u=function(...O){let g=w.addons.getChannel(),v=(0,i.Z)(),M=5,P=O.map(b),h=O.length>1?P:P[0],j={id:v,count:0,data:{name:a,args:h},options:{...d,maxDepth:M+(d.depth||3),allowFunction:d.allowFunction||!1}};g.emit(t,j)};return u.isAction=!0,u}var I=(...a)=>{let l=config,d=a;d.length===1&&Array.isArray(d[0])&&([d]=d),d.length!==1&&typeof d[d.length-1]!="string"&&(l={...config,...d.pop()});let u=d[0];(d.length!==1||typeof u=="string")&&(u={},d.forEach(g=>{u[g]=g}));let O={};return Object.keys(u).forEach(g=>{O[g]=action(u[g],l)}),O}},"../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/notice/index.js":(p,r,e)=>{e.d(r,{Z:()=>a});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),_=e.n(o),t=e("../../../node_modules/.pnpm/@wordpress+i18n@4.44.0/node_modules/@wordpress/i18n/build-module/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+element@5.21.0/node_modules/@wordpress/element/build-module/serialize.js"),c=e("../../../node_modules/.pnpm/@wordpress+element@5.21.0/node_modules/@wordpress/element/build-module/raw-html.js"),i=e("../../../node_modules/.pnpm/@wordpress+a11y@3.44.0/node_modules/@wordpress/a11y/build-module/index.js"),w=e("../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close.js"),y=e("../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/button/index.js"),E=e("../../../node_modules/.pnpm/@wordpress+components@25.10.0_@types+react@18.2.19_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/visually-hidden/component.js");const m=()=>{};function f(l,d){const u=typeof l=="string"?l:(0,n.ZP)(l);(0,s.useEffect)(()=>{u&&(0,i.D)(u,d)},[u,d])}function b(l){switch(l){case"success":case"warning":case"info":return"polite";default:return"assertive"}}function A(l){switch(l){case"warning":return(0,t.__)("Warning notice");case"info":return(0,t.__)("Information notice");case"error":return(0,t.__)("Error notice");default:return(0,t.__)("Notice")}}function I({className:l,status:d="info",children:u,spokenMessage:O=u,onRemove:g=m,isDismissible:v=!0,actions:M=[],politeness:P=b(d),__unstableHTML:h,onDismiss:j=m}){f(O,P);const T=_()(l,"components-notice","is-"+d,{"is-dismissible":v});h&&typeof u=="string"&&(u=(0,s.createElement)(c.Z,null,u));const W=()=>{j(),g()};return(0,s.createElement)("div",{className:T},(0,s.createElement)(E.Z,null,A(d)),(0,s.createElement)("div",{className:"components-notice__content"},u,(0,s.createElement)("div",{className:"components-notice__actions"},M.map(({className:U,label:B,isPrimary:L,variant:R,noDefaultClasses:K=!1,onClick:x,url:C},Z)=>{let D=R;return R!=="primary"&&!K&&(D=C?"link":"secondary"),typeof D=="undefined"&&L&&(D="primary"),(0,s.createElement)(y.ZP,{key:Z,href:C,variant:D,onClick:C?void 0:x,className:_()("components-notice__action",U)},B)}))),v&&(0,s.createElement)(y.ZP,{className:"components-notice__dismiss",icon:w.Z,label:(0,t.__)("Close"),onClick:W}))}const a=I},"../../../node_modules/.pnpm/@wordpress+data@9.14.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js":(p,r,e)=>{e.d(r,{Z:()=>_});var s=e("../../../node_modules/.pnpm/@wordpress+data@9.14.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/registry-provider/use-registry.js");const _=t=>{const{dispatch:n}=(0,s.Z)();return t===void 0?n:n(t)}},"../../../node_modules/.pnpm/@wordpress+data@9.14.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js":(p,r,e)=>{e.d(r,{W:()=>o});var s=e("../../../node_modules/.pnpm/@wordpress+data@9.14.0_react@18.2.0/node_modules/@wordpress/data/build-module/default-registry.js");function o(_){return s.Z.dispatch(_)}},"../../../node_modules/.pnpm/@wordpress+data@9.14.0_react@18.2.0/node_modules/@wordpress/data/build-module/index.js":(p,r,e)=>{e.d(r,{R9:()=>w,UY:()=>_,z2:()=>E});var s=e("../../../node_modules/.pnpm/@wordpress+data@9.14.0_react@18.2.0/node_modules/@wordpress/data/build-module/default-registry.js"),o=e("../../../node_modules/.pnpm/@wordpress+data@9.14.0_react@18.2.0/node_modules/@wordpress/data/build-module/redux-store/combine-reducers.js");const _=o.U,t=s.Z.resolveSelect,n=s.Z.suspendSelect,c=s.Z.subscribe,i=s.Z.registerGenericStore,w=s.Z.registerStore,y=s.Z.use,E=s.Z.register},"../../../node_modules/.pnpm/@wordpress+data@9.14.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js":(p,r,e)=>{e.d(r,{Y:()=>o});var s=e("../../../node_modules/.pnpm/@wordpress+data@9.14.0_react@18.2.0/node_modules/@wordpress/data/build-module/default-registry.js");function o(_){return s.Z.select(_)}},"../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js":(p,r,e)=>{e.d(r,{Z:()=>_});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function o({icon:t,size:n=24,...c},i){return(0,s.cloneElement)(t,{width:n,height:n,...c,ref:i})}const _=(0,s.forwardRef)(o)},"../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js":(p,r,e)=>{e.d(r,{Z:()=>t});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.42.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,s.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,s.createElement)(o.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close.js":(p,r,e)=>{e.d(r,{Z:()=>t});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.42.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,s.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,s.createElement)(o.y$,{d:"M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js":(p,r,e)=>{e.d(r,{Z:()=>t});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.42.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,s.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,s.createElement)(o.y$,{d:"M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.35.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/warning.js":(p,r,e)=>{e.d(r,{Z:()=>t});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+primitives@3.42.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,s.createElement)(o.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,s.createElement)(o.y$,{d:"M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm1.13 9.38l.35-6.46H8.52l.35 6.46h2.26zm-.09 3.36c.24-.23.37-.55.37-.96 0-.42-.12-.74-.36-.97s-.59-.35-1.06-.35-.82.12-1.07.35-.37.55-.37.97c0 .41.13.73.38.96.26.23.61.34 1.06.34s.8-.11 1.05-.34z"}))},"../../../node_modules/.pnpm/@wordpress+url@3.45.0/node_modules/@wordpress/url/build-module/add-query-args.js":(p,r,e)=>{e.d(r,{f:()=>_});var s=e("../../../node_modules/.pnpm/@wordpress+url@3.45.0/node_modules/@wordpress/url/build-module/get-query-args.js"),o=e("../../../node_modules/.pnpm/@wordpress+url@3.45.0/node_modules/@wordpress/url/build-module/build-query-string.js");function _(t="",n){if(!n||!Object.keys(n).length)return t;let c=t;const i=t.indexOf("?");return i!==-1&&(n=Object.assign((0,s.w)(t),n),c=c.substr(0,i)),c+"?"+(0,o.I)(n)}},"../../../node_modules/.pnpm/@wordpress+url@3.45.0/node_modules/@wordpress/url/build-module/build-query-string.js":(p,r,e)=>{e.d(r,{I:()=>s});function s(o){let _="";const t=Object.entries(o);let n;for(;n=t.shift();){let[c,i]=n;if(Array.isArray(i)||i&&i.constructor===Object){const y=Object.entries(i).reverse();for(const[E,m]of y)t.unshift([`${c}[${E}]`,m])}else i!==void 0&&(i===null&&(i=""),_+="&"+[c,i].map(encodeURIComponent).join("="))}return _.substr(1)}},"../../../node_modules/.pnpm/@wordpress+url@3.45.0/node_modules/@wordpress/url/build-module/get-query-args.js":(p,r,e)=>{e.d(r,{w:()=>t});function s(n){try{return decodeURIComponent(n)}catch(c){return n}}var o=e("../../../node_modules/.pnpm/@wordpress+url@3.45.0/node_modules/@wordpress/url/build-module/get-query-string.js");function _(n,c,i){const w=c.length,y=w-1;for(let E=0;E<w;E++){let m=c[E];!m&&Array.isArray(n)&&(m=n.length.toString()),m=["__proto__","constructor","prototype"].includes(m)?m.toUpperCase():m;const f=!isNaN(Number(c[E+1]));n[m]=E===y?i:n[m]||(f?[]:{}),Array.isArray(n[m])&&!f&&(n[m]={...n[m]}),n=n[m]}}function t(n){return((0,o.W)(n)||"").replace(/\+/g,"%20").split("&").reduce((c,i)=>{const[w,y=""]=i.split("=").filter(Boolean).map(s);if(w){const E=w.replace(/\]/g,"").split("[");_(c,E,y)}return c},Object.create(null))}},"../../../node_modules/.pnpm/@wordpress+url@3.45.0/node_modules/@wordpress/url/build-module/get-query-string.js":(p,r,e)=>{e.d(r,{W:()=>s});function s(o){let _;try{_=new URL(o,"http://example.com").search.substring(1)}catch(t){}if(_)return _}}}]);})();
