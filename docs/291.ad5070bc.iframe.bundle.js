(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[291],{"../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/utils.js":(I,h,o)=>{"use strict";o.d(h,{CK:()=>r,KF:()=>_,d9:()=>c,sw:()=>m});const n={bottom:"bottom",top:"top","middle left":"left","middle right":"right","bottom left":"bottom-end","bottom center":"bottom","bottom right":"bottom-start","top left":"top-end","top center":"top","top right":"top-start","middle left left":"left","middle left right":"left","middle left bottom":"left-end","middle left top":"left-start","middle right left":"right","middle right right":"right","middle right bottom":"right-end","middle right top":"right-start","bottom left left":"bottom-end","bottom left right":"bottom-end","bottom left bottom":"bottom-end","bottom left top":"bottom-end","bottom center left":"bottom","bottom center right":"bottom","bottom center bottom":"bottom","bottom center top":"bottom","bottom right left":"bottom-start","bottom right right":"bottom-start","bottom right bottom":"bottom-start","bottom right top":"bottom-start","top left left":"top-end","top left right":"top-end","top left bottom":"top-end","top left top":"top-end","top center left":"top","top center right":"top","top center bottom":"top","top center top":"top","top right left":"top-start","top right right":"top-start","top right bottom":"top-start","top right top":"top-start",middle:"bottom","middle center":"bottom","middle center bottom":"bottom","middle center left":"bottom","middle center right":"bottom","middle center top":"bottom"},_=e=>{var s;return(s=n[e])!==null&&s!==void 0?s:"bottom"},A={top:{originX:.5,originY:1},"top-start":{originX:0,originY:1},"top-end":{originX:1,originY:1},right:{originX:0,originY:.5},"right-start":{originX:0,originY:0},"right-end":{originX:0,originY:1},bottom:{originX:.5,originY:0},"bottom-start":{originX:0,originY:0},"bottom-end":{originX:1,originY:0},left:{originX:1,originY:.5},"left-start":{originX:1,originY:0},"left-end":{originX:1,originY:1},overlay:{originX:.5,originY:.5}},c=e=>{const s=e.startsWith("top")||e.startsWith("bottom")?"translateY":"translateX",M=e.startsWith("top")||e.startsWith("left")?1:-1;return{style:A[e],initial:{opacity:0,scale:0,[s]:`${2*M}em`},animate:{opacity:1,scale:1,[s]:0},transition:{duration:.1,ease:[0,0,.2,1]}}};function i(e){return!!(e!=null&&e.top)}function p(e){return!!(e!=null&&e.current)}const r=({anchor:e,anchorRef:s,anchorRect:M,getAnchorRect:x,fallbackReferenceElement:H})=>{var D;let b=null;return e?b=e:i(s)?b={getBoundingClientRect(){const g=s.top.getBoundingClientRect(),C=s.bottom.getBoundingClientRect();return new window.DOMRect(g.x,g.y,g.width,C.bottom-g.top)}}:p(s)?b=s.current:s?b=s:M?b={getBoundingClientRect(){return M}}:x?b={getBoundingClientRect(){var g,C,f,k;const E=x(H);return new window.DOMRect((g=E.x)!==null&&g!==void 0?g:E.left,(C=E.y)!==null&&C!==void 0?C:E.top,(f=E.width)!==null&&f!==void 0?f:E.right-E.left,(k=E.height)!==null&&k!==void 0?k:E.bottom-E.top)}}:H&&(b=H.parentElement),(D=b)!==null&&D!==void 0?D:null},m=e=>e===null||Number.isNaN(e)?void 0:Math.round(e)},"../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/shortcut/index.js":(I,h,o)=>{"use strict";o.d(h,{Z:()=>A});var n=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function _(c){const{shortcut:i,className:p}=c;if(!i)return null;let r,m;return typeof i=="string"&&(r=i),i!==null&&typeof i=="object"&&(r=i.display,m=i.ariaLabel),(0,n.createElement)("span",{className:p,"aria-label":m},r)}const A=_},"../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/tooltip/index.js":(I,h,o)=>{"use strict";o.d(h,{ZP:()=>b});var n=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=o("../../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.2.0_react@18.2.0/node_modules/@ariakit/react-core/esm/__chunks/2QMN5E6B.js"),A=o("../../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.2.0_react@18.2.0/node_modules/@ariakit/react-core/esm/__chunks/FSFPRQFR.js"),c=o("../../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.2.0_react@18.2.0/node_modules/@ariakit/react-core/esm/tooltip/tooltip-anchor.js"),i=o("../../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.2.0_react@18.2.0/node_modules/@ariakit/react-core/esm/tooltip/tooltip.js"),p=o("../../../node_modules/.pnpm/@wordpress+compose@6.32.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),r=o("../../../node_modules/.pnpm/@wordpress+deprecated@3.55.0/node_modules/@wordpress/deprecated/build-module/index.js"),m=o("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/shortcut/index.js"),e=o("../../../node_modules/.pnpm/@wordpress+components@27.3.0_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/utils.js");const s=(0,n.createContext)({isNestedInTooltip:!1}),M=700,x={isNestedInTooltip:!0};function H(g,C){const{children:f,delay:k=M,hideOnClick:E=!0,placement:R,position:F,shortcut:j,text:B,...S}=g,{isNestedInTooltip:Z}=(0,n.useContext)(s),Y=(0,p.Z)(D,"tooltip"),$=B||j?Y:void 0,L=n.Children.count(f)===1;let K;R!==void 0?K=R:F!==void 0&&(K=(0,e.KF)(F),(0,r.Z)("`position` prop in wp.components.tooltip",{since:"6.4",alternative:"`placement` prop"})),K=K||"bottom";const U=_._,W=U({placement:K,showTimeout:k});return Z?L?(0,n.createElement)(A.u,{...S,render:f}):f:(0,n.createElement)(s.Provider,{value:x},(0,n.createElement)(c.e,{onClick:E?W.hide:void 0,store:W,render:L?f:void 0,ref:C},L?void 0:f),L&&(B||j)&&(0,n.createElement)(i.u,{...S,className:"components-tooltip",unmountOnHide:!0,gutter:4,id:$,overflowPadding:.5,store:W},B,j&&(0,n.createElement)(m.Z,{className:B?"components-tooltip__shortcut":"",shortcut:j})))}const D=(0,n.forwardRef)(H),b=D},"../../../node_modules/.pnpm/@wordpress+deprecated@3.55.0/node_modules/@wordpress/deprecated/build-module/index.js":(I,h,o)=>{"use strict";o.d(h,{Z:()=>A});var n=o("../../../node_modules/.pnpm/@wordpress+hooks@3.55.0/node_modules/@wordpress/hooks/build-module/index.js");const _=Object.create(null);function A(c,i={}){const{since:p,version:r,alternative:m,plugin:e,link:s,hint:M}=i,x=e?` from ${e}`:"",H=p?` since version ${p}`:"",D=r?` and will be removed${x} in version ${r}`:"",b=m?` Please use ${m} instead.`:"",g=s?` See: ${s}`:"",C=M?` Note: ${M}`:"",f=`${c} is deprecated${H}${D}.${b}${g}${C}`;f in _||((0,n.Kw)("deprecated",c,i,f),console.warn(f),_[f]=!0)}},"../../../node_modules/.pnpm/@wordpress+hooks@3.55.0/node_modules/@wordpress/hooks/build-module/index.js":(I,h,o)=>{"use strict";o.d(h,{KG:()=>j,KJ:()=>B,O:()=>W,Hu:()=>R,JQ:()=>F,Kw:()=>U,H7:()=>$,iR:()=>S});function n(d){return typeof d!="string"||d===""?(console.error("The namespace must be a non-empty string."),!1):/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(d)?!0:(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)}const _=n;function A(d){return typeof d!="string"||d===""?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(d)?(console.error("The hook name cannot begin with `__`."),!1):/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(d)?!0:(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)}const c=A;function i(d,w){return function(l,t,a,u=10){const P=d[w];if(!c(l)||!_(t))return;if(typeof a!="function"){console.error("The hook callback must be a function.");return}if(typeof u!="number"){console.error("If specified, the hook priority must be a number.");return}const O={callback:a,priority:u,namespace:t};if(P[l]){const T=P[l].handlers;let v;for(v=T.length;v>0&&!(u>=T[v-1].priority);v--);v===T.length?T[v]=O:T.splice(v,0,O),P.__current.forEach(X=>{X.name===l&&X.currentIndex>=v&&X.currentIndex++})}else P[l]={handlers:[O],runs:0};l!=="hookAdded"&&d.doAction("hookAdded",l,t,a,u)}}const p=i;function r(d,w,y=!1){return function(t,a){const u=d[w];if(!c(t)||!y&&!_(a))return;if(!u[t])return 0;let P=0;if(y)P=u[t].handlers.length,u[t]={runs:u[t].runs,handlers:[]};else{const O=u[t].handlers;for(let T=O.length-1;T>=0;T--)O[T].namespace===a&&(O.splice(T,1),P++,u.__current.forEach(v=>{v.name===t&&v.currentIndex>=T&&v.currentIndex--}))}return t!=="hookRemoved"&&d.doAction("hookRemoved",t,a),P}}const m=r;function e(d,w){return function(l,t){const a=d[w];return typeof t!="undefined"?l in a&&a[l].handlers.some(u=>u.namespace===t):l in a}}const s=e;function M(d,w,y=!1){return function(t,...a){const u=d[w];u[t]||(u[t]={handlers:[],runs:0}),u[t].runs++;const P=u[t].handlers;if(!P||!P.length)return y?a[0]:void 0;const O={name:t,currentIndex:0};for(u.__current.push(O);O.currentIndex<P.length;){const v=P[O.currentIndex].callback.apply(null,a);y&&(a[0]=v),O.currentIndex++}if(u.__current.pop(),y)return a[0]}}const x=M;function H(d,w){return function(){var a;var l;const t=d[w];return(l=(a=t.__current[t.__current.length-1])==null?void 0:a.name)!==null&&l!==void 0?l:null}}const D=H;function b(d,w){return function(l){const t=d[w];return typeof l=="undefined"?typeof t.__current[0]!="undefined":t.__current[0]?l===t.__current[0].name:!1}}const g=b;function C(d,w){return function(l){const t=d[w];if(c(l))return t[l]&&t[l].runs?t[l].runs:0}}const f=C;class k{constructor(){this.actions=Object.create(null),this.actions.__current=[],this.filters=Object.create(null),this.filters.__current=[],this.addAction=p(this,"actions"),this.addFilter=p(this,"filters"),this.removeAction=m(this,"actions"),this.removeFilter=m(this,"filters"),this.hasAction=s(this,"actions"),this.hasFilter=s(this,"filters"),this.removeAllActions=m(this,"actions",!0),this.removeAllFilters=m(this,"filters",!0),this.doAction=x(this,"actions"),this.applyFilters=x(this,"filters",!0),this.currentAction=D(this,"actions"),this.currentFilter=D(this,"filters"),this.doingAction=g(this,"actions"),this.doingFilter=g(this,"filters"),this.didAction=f(this,"actions"),this.didFilter=f(this,"filters")}}function E(){return new k}const R=E,F=R(),{addAction:j,addFilter:B,removeAction:S,removeFilter:Z,hasAction:Y,hasFilter:$,removeAllActions:L,removeAllFilters:K,doAction:U,applyFilters:W,currentAction:V,currentFilter:z,doingAction:Q,doingFilter:G,didAction:J,didFilter:N,actions:q,filters:tt}=F},"../../../node_modules/.pnpm/@wordpress+icons@9.46.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js":(I,h,o)=>{"use strict";o.d(h,{Z:()=>A});var n=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function _({icon:c,size:i=24,...p},r){return(0,n.cloneElement)(c,{width:i,height:i,...p,ref:r})}const A=(0,n.forwardRef)(_)},"../../../node_modules/.pnpm/@wordpress+icons@9.46.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/post-list.js":(I,h,o)=>{"use strict";o.d(h,{Z:()=>c});var n=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=o("../../../node_modules/.pnpm/@wordpress+primitives@3.53.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const c=(0,n.createElement)(_.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)(_.y$,{d:"M18 5.5H6a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5ZM6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm1 5h1.5v1.5H7V9Zm1.5 4.5H7V15h1.5v-1.5ZM10 9h7v1.5h-7V9Zm7 4.5h-7V15h7v-1.5Z"}))},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(I,h)=>{var o,n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var _={}.hasOwnProperty,A="[native code]";function c(){for(var i=[],p=0;p<arguments.length;p++){var r=arguments[p];if(r){var m=typeof r;if(m==="string"||m==="number")i.push(r);else if(Array.isArray(r)){if(r.length){var e=c.apply(null,r);e&&i.push(e)}}else if(m==="object"){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){i.push(r.toString());continue}for(var s in r)_.call(r,s)&&r[s]&&i.push(s)}}}return i.join(" ")}I.exports?(c.default=c,I.exports=c):(o=[],n=function(){return c}.apply(h,o),n!==void 0&&(I.exports=n))})()}}]);})();
