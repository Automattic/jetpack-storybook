"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7941],{"../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/popover/utils.js":(L,g,o)=>{o.d(g,{CK:()=>e,KF:()=>p,d9:()=>n,sw:()=>f});const m={bottom:"bottom",top:"top","middle left":"left","middle right":"right","bottom left":"bottom-end","bottom center":"bottom","bottom right":"bottom-start","top left":"top-end","top center":"top","top right":"top-start","middle left left":"left","middle left right":"left","middle left bottom":"left-end","middle left top":"left-start","middle right left":"right","middle right right":"right","middle right bottom":"right-end","middle right top":"right-start","bottom left left":"bottom-end","bottom left right":"bottom-end","bottom left bottom":"bottom-end","bottom left top":"bottom-end","bottom center left":"bottom","bottom center right":"bottom","bottom center bottom":"bottom","bottom center top":"bottom","bottom right left":"bottom-start","bottom right right":"bottom-start","bottom right bottom":"bottom-start","bottom right top":"bottom-start","top left left":"top-end","top left right":"top-end","top left bottom":"top-end","top left top":"top-end","top center left":"top","top center right":"top","top center bottom":"top","top center top":"top","top right left":"top-start","top right right":"top-start","top right bottom":"top-start","top right top":"top-start",middle:"bottom","middle center":"bottom","middle center bottom":"bottom","middle center left":"bottom","middle center right":"bottom","middle center top":"bottom"},p=r=>{var u;return(u=m[r])!==null&&u!==void 0?u:"bottom"},A={top:{originX:.5,originY:1},"top-start":{originX:0,originY:1},"top-end":{originX:1,originY:1},right:{originX:0,originY:.5},"right-start":{originX:0,originY:0},"right-end":{originX:0,originY:1},bottom:{originX:.5,originY:0},"bottom-start":{originX:0,originY:0},"bottom-end":{originX:1,originY:0},left:{originX:1,originY:.5},"left-start":{originX:1,originY:0},"left-end":{originX:1,originY:1},overlay:{originX:.5,originY:.5}},n=r=>{const u=r.startsWith("top")||r.startsWith("bottom")?"translateY":"translateX",P=r.startsWith("top")||r.startsWith("left")?1:-1;return{style:A[r],initial:{opacity:0,scale:0,[u]:`${2*P}em`},animate:{opacity:1,scale:1,[u]:0},transition:{duration:.1,ease:[0,0,.2,1]}}};function s(r){return!!(r!=null&&r.top)}function l(r){return!!(r!=null&&r.current)}const e=({anchor:r,anchorRef:u,anchorRect:P,getAnchorRect:j,fallbackReferenceElement:C})=>{var y;let O=null;return r?O=r:s(u)?O={getBoundingClientRect(){const h=u.top.getBoundingClientRect(),D=u.bottom.getBoundingClientRect();return new window.DOMRect(h.x,h.y,h.width,D.bottom-h.top)}}:l(u)?O=u.current:u?O=u:P?O={getBoundingClientRect(){return P}}:j?O={getBoundingClientRect(){var h,D,M,I;const a=j(C);return new window.DOMRect((h=a.x)!==null&&h!==void 0?h:a.left,(D=a.y)!==null&&D!==void 0?D:a.top,(M=a.width)!==null&&M!==void 0?M:a.right-a.left,(I=a.height)!==null&&I!==void 0?I:a.bottom-a.top)}}:C&&(O=C.parentElement),(y=O)!==null&&y!==void 0?y:null},f=r=>r===null||Number.isNaN(r)?void 0:Math.round(r)},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/shortcut/index.js":(L,g,o)=>{o.d(g,{Z:()=>A});var m=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function p(n){const{shortcut:s,className:l}=n;if(!s)return null;let e,f;return typeof s=="string"&&(e=s),s!==null&&typeof s=="object"&&(e=s.display,f=s.ariaLabel),(0,m.jsx)("span",{className:l,"aria-label":f,children:e})}const A=p},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/tooltip/index.js":(L,g,o)=>{o.d(g,{ZP:()=>D});var m=o("../../../node_modules/.pnpm/@ariakit+react-core@0.4.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/VJLRJATI.js"),p=o("../../../node_modules/.pnpm/@ariakit+react-core@0.4.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/4KVV4LMJ.js"),A=o("../../../node_modules/.pnpm/@ariakit+react-core@0.4.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/tooltip/tooltip-anchor.js"),n=o("../../../node_modules/.pnpm/@ariakit+react-core@0.4.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/tooltip/tooltip.js"),s=o("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),l=o("../../../node_modules/.pnpm/@wordpress+compose@7.5.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),e=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),f=o("../../../node_modules/.pnpm/@wordpress+deprecated@4.5.0/node_modules/@wordpress/deprecated/build-module/index.js"),r=o("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/shortcut/index.js"),u=o("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/popover/utils.js"),P=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const j=(0,e.createContext)({isNestedInTooltip:!1}),C=700,y={isNestedInTooltip:!0};function O(M,I){const{children:a,className:U,delay:F=C,hideOnClick:S=!0,placement:X,position:Z,shortcut:B,text:K,...Y}=M,{isNestedInTooltip:J}=(0,e.useContext)(j),z=(0,l.Z)(h,"tooltip"),R=K||B?z:void 0,H=e.Children.count(a)===1;let k;X!==void 0?k=X:Z!==void 0&&(k=(0,u.KF)(Z),(0,f.Z)("`position` prop in wp.components.tooltip",{since:"6.4",alternative:"`placement` prop"})),k=k||"bottom";const W=m._({placement:k,showTimeout:F}),G=W.useState("mounted");if(J)return H?(0,P.jsx)(p.u,{...Y,render:a}):a;function Q(V){return R&&G?(0,e.cloneElement)(V,{"aria-describedby":R}):V}return(0,P.jsxs)(j.Provider,{value:y,children:[(0,P.jsx)(A.e,{onClick:S?W.hide:void 0,store:W,render:H?Q(a):void 0,ref:I,children:H?void 0:a}),H&&(K||B)&&(0,P.jsxs)(n.u,{...Y,className:(0,s.Z)("components-tooltip",U),unmountOnHide:!0,gutter:4,id:R,overflowPadding:.5,store:W,children:[K,B&&(0,P.jsx)(r.Z,{className:K?"components-tooltip__shortcut":"",shortcut:B})]})]})}const h=(0,e.forwardRef)(O),D=h},"../../../node_modules/.pnpm/@wordpress+hooks@4.5.0/node_modules/@wordpress/hooks/build-module/index.js":(L,g,o)=>{o.d(g,{KG:()=>S,KJ:()=>X,O:()=>H,Hu:()=>U,JQ:()=>F,Kw:()=>R,H7:()=>Y,iR:()=>Z});function m(i){return typeof i!="string"||i===""?(console.error("The namespace must be a non-empty string."),!1):/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(i)?!0:(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)}const p=m;function A(i){return typeof i!="string"||i===""?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(i)?(console.error("The hook name cannot begin with `__`."),!1):/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(i)?!0:(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)}const n=A;function s(i,E){return function(d,t,_,c=10){const v=i[E];if(!n(d)||!p(t))return;if(typeof _!="function"){console.error("The hook callback must be a function.");return}if(typeof c!="number"){console.error("If specified, the hook priority must be a number.");return}const T={callback:_,priority:c,namespace:t};if(v[d]){const x=v[d].handlers;let b;for(b=x.length;b>0&&!(c>=x[b-1].priority);b--);b===x.length?x[b]=T:x.splice(b,0,T),v.__current.forEach($=>{$.name===d&&$.currentIndex>=b&&$.currentIndex++})}else v[d]={handlers:[T],runs:0};d!=="hookAdded"&&i.doAction("hookAdded",d,t,_,c)}}const l=s;function e(i,E,w=!1){return function(t,_){const c=i[E];if(!n(t)||!w&&!p(_))return;if(!c[t])return 0;let v=0;if(w)v=c[t].handlers.length,c[t]={runs:c[t].runs,handlers:[]};else{const T=c[t].handlers;for(let x=T.length-1;x>=0;x--)T[x].namespace===_&&(T.splice(x,1),v++,c.__current.forEach(b=>{b.name===t&&b.currentIndex>=x&&b.currentIndex--}))}return t!=="hookRemoved"&&i.doAction("hookRemoved",t,_),v}}const f=e;function r(i,E){return function(d,t){const _=i[E];return typeof t!="undefined"?d in _&&_[d].handlers.some(c=>c.namespace===t):d in _}}const u=r;function P(i,E,w=!1){return function(t,..._){const c=i[E];c[t]||(c[t]={handlers:[],runs:0}),c[t].runs++;const v=c[t].handlers;if(!v||!v.length)return w?_[0]:void 0;const T={name:t,currentIndex:0};for(c.__current.push(T);T.currentIndex<v.length;){const b=v[T.currentIndex].callback.apply(null,_);w&&(_[0]=b),T.currentIndex++}if(c.__current.pop(),w)return _[0]}}const j=P;function C(i,E){return function(){var _;var d;const t=i[E];return(d=(_=t.__current[t.__current.length-1])==null?void 0:_.name)!==null&&d!==void 0?d:null}}const y=C;function O(i,E){return function(d){const t=i[E];return typeof d=="undefined"?typeof t.__current[0]!="undefined":t.__current[0]?d===t.__current[0].name:!1}}const h=O;function D(i,E){return function(d){const t=i[E];if(n(d))return t[d]&&t[d].runs?t[d].runs:0}}const M=D;class I{constructor(){this.actions=Object.create(null),this.actions.__current=[],this.filters=Object.create(null),this.filters.__current=[],this.addAction=l(this,"actions"),this.addFilter=l(this,"filters"),this.removeAction=f(this,"actions"),this.removeFilter=f(this,"filters"),this.hasAction=u(this,"actions"),this.hasFilter=u(this,"filters"),this.removeAllActions=f(this,"actions",!0),this.removeAllFilters=f(this,"filters",!0),this.doAction=j(this,"actions"),this.applyFilters=j(this,"filters",!0),this.currentAction=y(this,"actions"),this.currentFilter=y(this,"filters"),this.doingAction=h(this,"actions"),this.doingFilter=h(this,"filters"),this.didAction=M(this,"actions"),this.didFilter=M(this,"filters")}}function a(){return new I}const U=a,F=U(),{addAction:S,addFilter:X,removeAction:Z,removeFilter:B,hasAction:K,hasFilter:Y,removeAllActions:J,removeAllFilters:z,doAction:R,applyFilters:H,currentAction:k,currentFilter:W,doingAction:G,doingFilter:Q,didAction:V,didFilter:N,actions:q,filters:tt}=F},"../../../node_modules/.pnpm/@wordpress+icons@10.5.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(L,g,o)=>{o.d(g,{Z:()=>A});var m=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function p({icon:n,size:s=24,...l},e){return(0,m.cloneElement)(n,{width:s,height:s,...l,ref:e})}const A=(0,m.forwardRef)(p)},"../../../node_modules/.pnpm/@wordpress+icons@10.5.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/post-list.js":(L,g,o)=>{o.d(g,{Z:()=>n});var m=o("../../../node_modules/.pnpm/@wordpress+primitives@4.5.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),p=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=(0,p.jsx)(m.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,p.jsx)(m.y$,{d:"M18 5.5H6a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5ZM6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm1 5h1.5v1.5H7V9Zm1.5 4.5H7V15h1.5v-1.5ZM10 9h7v1.5h-7V9Zm7 4.5h-7V15h7v-1.5Z"})})},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(L,g,o)=>{o.d(g,{Z:()=>A});function m(n){var s,l,e="";if(typeof n=="string"||typeof n=="number")e+=n;else if(typeof n=="object")if(Array.isArray(n)){var f=n.length;for(s=0;s<f;s++)n[s]&&(l=m(n[s]))&&(e&&(e+=" "),e+=l)}else for(l in n)n[l]&&(e&&(e+=" "),e+=l);return e}function p(){for(var n,s,l=0,e="",f=arguments.length;l<f;l++)(n=arguments[l])&&(s=m(n))&&(e&&(e+=" "),e+=s);return e}const A=p}}]);})();
