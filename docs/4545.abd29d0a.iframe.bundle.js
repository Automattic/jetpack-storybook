(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4545],{"../../../node_modules/.pnpm/@storybook+addon-actions@8.0.6/node_modules/@storybook/addon-actions/dist/index.mjs":(f,p,t)=>{"use strict";t.d(p,{aD:()=>v});var e=t("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),_=t("@storybook/preview-api"),l=t("@storybook/global"),i=t("@storybook/core-events/preview-errors"),n="actions",u="storybook/actions",a=`${u}/panel`,E=`${u}/action-event`,r=`${u}/action-clear`,c="$___storybook.isCyclic",h={depth:10,clearOnStoryChange:!0,limit:50},C=(d={})=>{Object.assign(h,d)},w=(d,o)=>{let s=Object.getPrototypeOf(d);return!s||o(s)?s:w(s,o)},D=d=>!!(typeof d=="object"&&d&&w(d,o=>/^Synthetic(?:Base)?Event$/.test(o.constructor.name))&&typeof d.persist=="function"),g=d=>{if(D(d)){let o=Object.create(d.constructor.prototype,Object.getOwnPropertyDescriptors(d));o.persist();let s=Object.getOwnPropertyDescriptor(o,"view"),m=s==null?void 0:s.value;return typeof m=="object"&&(m==null?void 0:m.constructor.name)==="Window"&&Object.defineProperty(o,"view",{...s,value:Object.create(m.constructor.prototype)}),o}return d},b=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,e.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2);function v(d,o={}){let s={...h,...o},m=function(...y){var A,B;if(o.implicit){let j=(A="__STORYBOOK_PREVIEW__"in l.global?l.global.__STORYBOOK_PREVIEW__:void 0)==null?void 0:A.storyRenders.find(M=>M.phase==="playing"||M.phase==="rendering");if(j){let M=!((B=window==null?void 0:window.FEATURES)!=null&&B.disallowImplicitActionsInRenderV8),K=new i.ImplicitActionsDuringRendering({phase:j.phase,name:d,deprecated:M});if(M)console.warn(K);else throw K}}let O=_.addons.getChannel(),I=b(),L=5,R=y.map(g),W=y.length>1?R:R[0],T={id:I,count:0,data:{name:d,args:W},options:{...s,maxDepth:L+(s.depth||3),allowFunction:s.allowFunction||!1}};O.emit(E,T)};return m.isAction=!0,m.implicit=o.implicit,m}var P=(...d)=>{let o=h,s=d;s.length===1&&Array.isArray(s[0])&&([s]=s),s.length!==1&&typeof s[s.length-1]!="string"&&(o={...h,...s.pop()});let m=s[0];(s.length!==1||typeof m=="string")&&(m={},s.forEach(O=>{m[O]=O}));let y={};return Object.keys(m).forEach(O=>{y[O]=v(m[O],o)}),y}},"../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/utils.js":(f,p,t)=>{"use strict";t.d(p,{CK:()=>a,KF:()=>_,d9:()=>i,sw:()=>E});const e={bottom:"bottom",top:"top","middle left":"left","middle right":"right","bottom left":"bottom-end","bottom center":"bottom","bottom right":"bottom-start","top left":"top-end","top center":"top","top right":"top-start","middle left left":"left","middle left right":"left","middle left bottom":"left-end","middle left top":"left-start","middle right left":"right","middle right right":"right","middle right bottom":"right-end","middle right top":"right-start","bottom left left":"bottom-end","bottom left right":"bottom-end","bottom left bottom":"bottom-end","bottom left top":"bottom-end","bottom center left":"bottom","bottom center right":"bottom","bottom center bottom":"bottom","bottom center top":"bottom","bottom right left":"bottom-start","bottom right right":"bottom-start","bottom right bottom":"bottom-start","bottom right top":"bottom-start","top left left":"top-end","top left right":"top-end","top left bottom":"top-end","top left top":"top-end","top center left":"top","top center right":"top","top center bottom":"top","top center top":"top","top right left":"top-start","top right right":"top-start","top right bottom":"top-start","top right top":"top-start",middle:"bottom","middle center":"bottom","middle center bottom":"bottom","middle center left":"bottom","middle center right":"bottom","middle center top":"bottom"},_=r=>{var c;return(c=e[r])!==null&&c!==void 0?c:"bottom"},l={top:{originX:.5,originY:1},"top-start":{originX:0,originY:1},"top-end":{originX:1,originY:1},right:{originX:0,originY:.5},"right-start":{originX:0,originY:0},"right-end":{originX:0,originY:1},bottom:{originX:.5,originY:0},"bottom-start":{originX:0,originY:0},"bottom-end":{originX:1,originY:0},left:{originX:1,originY:.5},"left-start":{originX:1,originY:0},"left-end":{originX:1,originY:1},overlay:{originX:.5,originY:.5}},i=r=>{const c=r.startsWith("top")||r.startsWith("bottom")?"translateY":"translateX",h=r.startsWith("top")||r.startsWith("left")?1:-1;return{style:l[r],initial:{opacity:0,scale:0,[c]:`${2*h}em`},animate:{opacity:1,scale:1,[c]:0},transition:{duration:.1,ease:[0,0,.2,1]}}};function n(r){return!!(r!=null&&r.top)}function u(r){return!!(r!=null&&r.current)}const a=({anchor:r,anchorRef:c,anchorRect:h,getAnchorRect:C,fallbackReferenceElement:w})=>{var D;let g=null;return r?g=r:n(c)?g={getBoundingClientRect(){const b=c.top.getBoundingClientRect(),v=c.bottom.getBoundingClientRect();return new window.DOMRect(b.x,b.y,b.width,v.bottom-b.top)}}:u(c)?g=c.current:c?g=c:h?g={getBoundingClientRect(){return h}}:C?g={getBoundingClientRect(){var b,v,P,d;const o=C(w);return new window.DOMRect((b=o.x)!==null&&b!==void 0?b:o.left,(v=o.y)!==null&&v!==void 0?v:o.top,(P=o.width)!==null&&P!==void 0?P:o.right-o.left,(d=o.height)!==null&&d!==void 0?d:o.bottom-o.top)}}:w&&(g=w.parentElement),(D=g)!==null&&D!==void 0?D:null},E=r=>r===null||Number.isNaN(r)?void 0:Math.round(r)},"../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/shortcut/index.js":(f,p,t)=>{"use strict";t.d(p,{Z:()=>l});var e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function _(i){const{shortcut:n,className:u}=i;if(!n)return null;let a,E;return typeof n=="string"&&(a=n),n!==null&&typeof n=="object"&&(a=n.display,E=n.ariaLabel),(0,e.createElement)("span",{className:u,"aria-label":E},a)}const l=_},"../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/tooltip/index.js":(f,p,t)=>{"use strict";t.d(p,{ZP:()=>g});var e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=t("../../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.2.0_react@18.2.0/node_modules/@ariakit/react-core/esm/__chunks/2QMN5E6B.js"),l=t("../../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.2.0_react@18.2.0/node_modules/@ariakit/react-core/esm/__chunks/FSFPRQFR.js"),i=t("../../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.2.0_react@18.2.0/node_modules/@ariakit/react-core/esm/tooltip/tooltip-anchor.js"),n=t("../../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.2.0_react@18.2.0/node_modules/@ariakit/react-core/esm/tooltip/tooltip.js"),u=t("../../../node_modules/.pnpm/@wordpress+compose@6.32.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),a=t("../../../node_modules/.pnpm/@wordpress+deprecated@3.55.0/node_modules/@wordpress/deprecated/build-module/index.js"),E=t("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/shortcut/index.js"),r=t("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/utils.js");const c=(0,e.createContext)({isNestedInTooltip:!1}),h=700,C={isNestedInTooltip:!0};function w(b,v){const{children:P,delay:d=h,hideOnClick:o=!0,placement:s,position:m,shortcut:y,text:O,...I}=b,{isNestedInTooltip:L}=(0,e.useContext)(c),R=(0,u.Z)(D,"tooltip"),W=O||y?R:void 0,T=e.Children.count(P)===1;let A;s!==void 0?A=s:m!==void 0&&(A=(0,r.KF)(m),(0,a.Z)("`position` prop in wp.components.tooltip",{since:"6.4",alternative:"`placement` prop"})),A=A||"bottom";const B=_._,j=B({placement:A,showTimeout:d});return L?T?(0,e.createElement)(l.u,{...I,render:P}):P:(0,e.createElement)(c.Provider,{value:C},(0,e.createElement)(i.e,{onClick:o?j.hide:void 0,store:j,render:T?P:void 0,ref:v},T?void 0:P),T&&(O||y)&&(0,e.createElement)(n.u,{...I,className:"components-tooltip",unmountOnHide:!0,gutter:4,id:W,overflowPadding:.5,store:j},O,y&&(0,e.createElement)(E.Z,{className:O?"components-tooltip__shortcut":"",shortcut:y})))}const D=(0,e.forwardRef)(w),g=D},"../../../node_modules/.pnpm/@wordpress+data@9.25.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js":(f,p,t)=>{"use strict";t.d(p,{Z:()=>l});var e=t("../../../node_modules/.pnpm/@wordpress+data@9.25.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/registry-provider/use-registry.js");const l=i=>{const{dispatch:n}=(0,e.Z)();return i===void 0?n:n(i)}},"../../../node_modules/.pnpm/@wordpress+data@9.25.0_react@18.2.0/node_modules/@wordpress/data/build-module/dispatch.js":(f,p,t)=>{"use strict";t.d(p,{W:()=>_});var e=t("../../../node_modules/.pnpm/@wordpress+data@9.25.0_react@18.2.0/node_modules/@wordpress/data/build-module/default-registry.js");function _(l){return e.Z.dispatch(l)}},"../../../node_modules/.pnpm/@wordpress+data@9.25.0_react@18.2.0/node_modules/@wordpress/data/build-module/select.js":(f,p,t)=>{"use strict";t.d(p,{Y:()=>_});var e=t("../../../node_modules/.pnpm/@wordpress+data@9.25.0_react@18.2.0/node_modules/@wordpress/data/build-module/default-registry.js");function _(l){return e.Z.select(l)}},"../../../node_modules/.pnpm/@wordpress+icons@9.46.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js":(f,p,t)=>{"use strict";t.d(p,{Z:()=>l});var e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function _({icon:i,size:n=24,...u},a){return(0,e.cloneElement)(i,{width:n,height:n,...u,ref:a})}const l=(0,e.forwardRef)(_)},"../../../node_modules/.pnpm/@wordpress+icons@9.46.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/info.js":(f,p,t)=>{"use strict";t.d(p,{Z:()=>i});var e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=t("../../../node_modules/.pnpm/@wordpress+primitives@3.53.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const i=(0,e.createElement)(_.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(_.y$,{d:"M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z"}))},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(f,p)=>{var t,e;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var _={}.hasOwnProperty,l="[native code]";function i(){for(var n=[],u=0;u<arguments.length;u++){var a=arguments[u];if(a){var E=typeof a;if(E==="string"||E==="number")n.push(a);else if(Array.isArray(a)){if(a.length){var r=i.apply(null,a);r&&n.push(r)}}else if(E==="object"){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){n.push(a.toString());continue}for(var c in a)_.call(a,c)&&a[c]&&n.push(c)}}}return n.join(" ")}f.exports?(i.default=i,f.exports=i):(t=[],e=function(){return i}.apply(p,t),e!==void 0&&(f.exports=e))})()},"../../../node_modules/.pnpm/is-plain-object@5.0.0/node_modules/is-plain-object/dist/is-plain-object.mjs":(f,p,t)=>{"use strict";t.d(p,{P:()=>_});/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */function e(l){return Object.prototype.toString.call(l)==="[object Object]"}function _(l){var i,n;return e(l)===!1?!1:(i=l.constructor,i===void 0?!0:(n=i.prototype,!(e(n)===!1||n.hasOwnProperty("isPrototypeOf")===!1)))}}}]);})();
