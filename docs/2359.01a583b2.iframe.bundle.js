"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2359],{"../../../node_modules/.pnpm/@storybook+addon-actions@8.2.9_storybook@8.2.9/node_modules/@storybook/addon-actions/dist/index.mjs":(g,_,t)=>{t.d(_,{XI:()=>O});var d=t("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),a=t("storybook/internal/preview-api"),r=t("@storybook/global"),e=t("storybook/internal/preview-errors"),o="actions",l="storybook/actions",s=null,m=`${l}/action-event`,c=null,p="$___storybook.isCyclic",b={depth:10,clearOnStoryChange:!0,limit:50},w=(u={})=>{Object.assign(b,u)},A=(u,i)=>{let n=Object.getPrototypeOf(u);return!n||i(n)?n:A(n,i)},v=u=>!!(typeof u=="object"&&u&&A(u,i=>/^Synthetic(?:Base)?Event$/.test(i.constructor.name))&&typeof u.persist=="function"),E=u=>{if(v(u)){let i=Object.create(u.constructor.prototype,Object.getOwnPropertyDescriptors(u));i.persist();let n=Object.getOwnPropertyDescriptor(i,"view"),f=n==null?void 0:n.value;return typeof f=="object"&&(f==null?void 0:f.constructor.name)==="Window"&&Object.defineProperty(i,"view",{...n,value:Object.create(f.constructor.prototype)}),i}return u},h=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,d.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function O(u,i={}){let n={...b,...i},f=function(...D){var L,K;if(i.implicit){let M=(L="__STORYBOOK_PREVIEW__"in r.global?r.global.__STORYBOOK_PREVIEW__:void 0)==null?void 0:L.storyRenders.find(y=>y.phase==="playing"||y.phase==="rendering");if(M){let y=!((K=window==null?void 0:window.FEATURES)!=null&&K.disallowImplicitActionsInRenderV8),j=new e.ImplicitActionsDuringRendering({phase:M.phase,name:u,deprecated:y});if(y)console.warn(j);else throw j}}let P=a.addons.getChannel(),x=h(),R=5,T=D.map(E),I=D.length>1?T:T[0],B={id:x,count:0,data:{name:u,args:I},options:{...n,maxDepth:R+(n.depth||3),allowFunction:n.allowFunction||!1}};P.emit(m,B)};return f.isAction=!0,f.implicit=i.implicit,f}var C=(...u)=>{let i=b,n=u;n.length===1&&Array.isArray(n[0])&&([n]=n),n.length!==1&&typeof n[n.length-1]!="string"&&(i={...b,...n.pop()});let f=n[0];(n.length!==1||typeof f=="string")&&(f={},n.forEach(P=>{f[P]=P}));let D={};return Object.keys(f).forEach(P=>{D[P]=O(f[P],i)}),D}},"../../../node_modules/.pnpm/@wordpress+components@28.7.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/popover/utils.js":(g,_,t)=>{t.d(_,{Vn:()=>e,WS:()=>m,YK:()=>a,_G:()=>s});const d={bottom:"bottom",top:"top","middle left":"left","middle right":"right","bottom left":"bottom-end","bottom center":"bottom","bottom right":"bottom-start","top left":"top-end","top center":"top","top right":"top-start","middle left left":"left","middle left right":"left","middle left bottom":"left-end","middle left top":"left-start","middle right left":"right","middle right right":"right","middle right bottom":"right-end","middle right top":"right-start","bottom left left":"bottom-end","bottom left right":"bottom-end","bottom left bottom":"bottom-end","bottom left top":"bottom-end","bottom center left":"bottom","bottom center right":"bottom","bottom center bottom":"bottom","bottom center top":"bottom","bottom right left":"bottom-start","bottom right right":"bottom-start","bottom right bottom":"bottom-start","bottom right top":"bottom-start","top left left":"top-end","top left right":"top-end","top left bottom":"top-end","top left top":"top-end","top center left":"top","top center right":"top","top center bottom":"top","top center top":"top","top right left":"top-start","top right right":"top-start","top right bottom":"top-start","top right top":"top-start",middle:"bottom","middle center":"bottom","middle center bottom":"bottom","middle center left":"bottom","middle center right":"bottom","middle center top":"bottom"},a=c=>{var p;return(p=d[c])!==null&&p!==void 0?p:"bottom"},r={top:{originX:.5,originY:1},"top-start":{originX:0,originY:1},"top-end":{originX:1,originY:1},right:{originX:0,originY:.5},"right-start":{originX:0,originY:0},"right-end":{originX:0,originY:1},bottom:{originX:.5,originY:0},"bottom-start":{originX:0,originY:0},"bottom-end":{originX:1,originY:0},left:{originX:1,originY:.5},"left-start":{originX:1,originY:0},"left-end":{originX:1,originY:1},overlay:{originX:.5,originY:.5}},e=c=>{const p=c.startsWith("top")||c.startsWith("bottom")?"translateY":"translateX",b=c.startsWith("top")||c.startsWith("left")?1:-1;return{style:r[c],initial:{opacity:0,scale:0,[p]:`${2*b}em`},animate:{opacity:1,scale:1,[p]:0},transition:{duration:.1,ease:[0,0,.2,1]}}};function o(c){return!!(c!=null&&c.top)}function l(c){return!!(c!=null&&c.current)}const s=({anchor:c,anchorRef:p,anchorRect:b,getAnchorRect:w,fallbackReferenceElement:A})=>{var v;let E=null;return c?E=c:o(p)?E={getBoundingClientRect(){const h=p.top.getBoundingClientRect(),O=p.bottom.getBoundingClientRect();return new window.DOMRect(h.x,h.y,h.width,O.bottom-h.top)}}:l(p)?E=p.current:p?E=p:b?E={getBoundingClientRect(){return b}}:w?E={getBoundingClientRect(){var h,O,C,u;const i=w(A);return new window.DOMRect((h=i.x)!==null&&h!==void 0?h:i.left,(O=i.y)!==null&&O!==void 0?O:i.top,(C=i.width)!==null&&C!==void 0?C:i.right-i.left,(u=i.height)!==null&&u!==void 0?u:i.bottom-i.top)}}:A&&(E=A.parentElement),(v=E)!==null&&v!==void 0?v:null},m=c=>c===null||Number.isNaN(c)?void 0:Math.round(c)},"../../../node_modules/.pnpm/@wordpress+components@28.7.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/shortcut/index.js":(g,_,t)=>{t.d(_,{A:()=>r});var d=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function a(e){const{shortcut:o,className:l}=e;if(!o)return null;let s,m;return typeof o=="string"&&(s=o),o!==null&&typeof o=="object"&&(s=o.display,m=o.ariaLabel),(0,d.jsx)("span",{className:l,"aria-label":m,children:s})}const r=a},"../../../node_modules/.pnpm/@wordpress+components@28.7.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/tooltip/index.js":(g,_,t)=>{t.d(_,{Ay:()=>C});var d=t("../../../node_modules/.pnpm/@ariakit+react-core@0.4.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/2D53SX6Q.js"),a=t("../../../node_modules/.pnpm/@ariakit+react-core@0.4.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/AXRBYZQP.js"),r=t("../../../node_modules/.pnpm/@ariakit+react-core@0.4.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/tooltip/tooltip-anchor.js"),e=t("../../../node_modules/.pnpm/@ariakit+react-core@0.4.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/tooltip/tooltip.js"),o=t("../../../node_modules/.pnpm/@ariakit+react-core@0.4.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/2GXGCHW6.js"),l=t("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),s=t("../../../node_modules/.pnpm/@wordpress+compose@7.7.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),m=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),c=t("../../../node_modules/.pnpm/@wordpress+deprecated@4.7.0/node_modules/@wordpress/deprecated/build-module/index.js"),p=t("../../../node_modules/.pnpm/@wordpress+components@28.7.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/shortcut/index.js"),b=t("../../../node_modules/.pnpm/@wordpress+components@28.7.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/popover/utils.js"),w=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const A=(0,m.createContext)({isNestedInTooltip:!1}),v=700,E={isNestedInTooltip:!0};function h(u,i){const{children:n,className:f,delay:D=v,hideOnClick:P=!0,placement:x,position:R,shortcut:T,text:I,...B}=u,{isNestedInTooltip:L}=(0,m.useContext)(A),K=(0,s.A)(O,"tooltip"),M=I||T?K:void 0,y=m.Children.count(n)===1;let j;x!==void 0?j=x:R!==void 0&&(j=(0,b.YK)(R),(0,c.A)("`position` prop in wp.components.tooltip",{since:"6.4",alternative:"`placement` prop"})),j=j||"bottom";const W=d._({placement:j,showTimeout:D}),k=(0,o.O$)(W,"mounted");if(L)return y?(0,w.jsx)(a.X,{...B,render:n}):n;function X(U){return M&&k?(0,m.cloneElement)(U,{"aria-describedby":M}):U}return(0,w.jsxs)(A.Provider,{value:E,children:[(0,w.jsx)(r.f,{onClick:P?W.hide:void 0,store:W,render:y?X(n):void 0,ref:i,children:y?void 0:n}),y&&(I||T)&&(0,w.jsxs)(e.m,{...B,className:(0,l.A)("components-tooltip",f),unmountOnHide:!0,gutter:4,id:M,overflowPadding:.5,store:W,children:[I,T&&(0,w.jsx)(p.A,{className:I?"components-tooltip__shortcut":"",shortcut:T})]})]})}const O=(0,m.forwardRef)(h),C=O},"../../../node_modules/.pnpm/@wordpress+data@10.7.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js":(g,_,t)=>{t.d(_,{A:()=>r});var d=t("../../../node_modules/.pnpm/@wordpress+data@10.7.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/registry-provider/use-registry.js");const r=e=>{const{dispatch:o}=(0,d.A)();return e===void 0?o:o(e)}},"../../../node_modules/.pnpm/@wordpress+data@10.7.0_react@18.3.1/node_modules/@wordpress/data/build-module/dispatch.js":(g,_,t)=>{t.d(_,{J:()=>a});var d=t("../../../node_modules/.pnpm/@wordpress+data@10.7.0_react@18.3.1/node_modules/@wordpress/data/build-module/default-registry.js");function a(r){return d.A.dispatch(r)}},"../../../node_modules/.pnpm/@wordpress+data@10.7.0_react@18.3.1/node_modules/@wordpress/data/build-module/select.js":(g,_,t)=>{t.d(_,{L:()=>a});var d=t("../../../node_modules/.pnpm/@wordpress+data@10.7.0_react@18.3.1/node_modules/@wordpress/data/build-module/default-registry.js");function a(r){return d.A.select(r)}},"../../../node_modules/.pnpm/@wordpress+icons@10.7.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(g,_,t)=>{t.d(_,{A:()=>r});var d=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function a({icon:e,size:o=24,...l},s){return(0,d.cloneElement)(e,{width:o,height:o,...l,ref:s})}const r=(0,d.forwardRef)(a)},"../../../node_modules/.pnpm/@wordpress+icons@10.7.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/info.js":(g,_,t)=>{t.d(_,{A:()=>e});var d=t("../../../node_modules/.pnpm/@wordpress+primitives@4.7.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),a=t("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const e=(0,a.jsx)(d.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,a.jsx)(d.wA,{d:"M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z"})})},"../../../node_modules/.pnpm/@wordpress+is-shallow-equal@5.7.0/node_modules/@wordpress/is-shallow-equal/build-module/index.js":(g,_,t)=>{t.d(_,{Ay:()=>r});var d=t("../../../node_modules/.pnpm/@wordpress+is-shallow-equal@5.7.0/node_modules/@wordpress/is-shallow-equal/build-module/objects.js");function a(e,o){if(e===o)return!0;if(e.length!==o.length)return!1;for(let l=0,s=e.length;l<s;l++)if(e[l]!==o[l])return!1;return!0}function r(e,o){if(e&&o){if(e.constructor===Object&&o.constructor===Object)return(0,d.A)(e,o);if(Array.isArray(e)&&Array.isArray(o))return a(e,o)}return e===o}},"../../../node_modules/.pnpm/@wordpress+is-shallow-equal@5.7.0/node_modules/@wordpress/is-shallow-equal/build-module/objects.js":(g,_,t)=>{t.d(_,{A:()=>d});function d(a,r){if(a===r)return!0;const e=Object.keys(a),o=Object.keys(r);if(e.length!==o.length)return!1;let l=0;for(;l<e.length;){const s=e[l],m=a[s];if(m===void 0&&!r.hasOwnProperty(s)||m!==r[s])return!1;l++}return!0}},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(g,_,t)=>{t.d(_,{A:()=>r});function d(e){var o,l,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var m=e.length;for(o=0;o<m;o++)e[o]&&(l=d(e[o]))&&(s&&(s+=" "),s+=l)}else for(l in e)e[l]&&(s&&(s+=" "),s+=l);return s}function a(){for(var e,o,l=0,s="",m=arguments.length;l<m;l++)(e=arguments[l])&&(o=d(e))&&(s&&(s+=" "),s+=o);return s}const r=a},"../../../node_modules/.pnpm/is-plain-object@5.0.0/node_modules/is-plain-object/dist/is-plain-object.mjs":(g,_,t)=>{t.d(_,{Q:()=>a});/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */function d(r){return Object.prototype.toString.call(r)==="[object Object]"}function a(r){var e,o;return d(r)===!1?!1:(e=r.constructor,e===void 0?!0:(o=e.prototype,!(d(o)===!1||o.hasOwnProperty("isPrototypeOf")===!1)))}}}]);})();
