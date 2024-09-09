"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[30],{"../../../node_modules/.pnpm/@wordpress+components@28.7.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/popover/utils.js":(k,g,e)=>{e.d(g,{Vn:()=>o,WS:()=>u,YK:()=>p,_G:()=>s});const m={bottom:"bottom",top:"top","middle left":"left","middle right":"right","bottom left":"bottom-end","bottom center":"bottom","bottom right":"bottom-start","top left":"top-end","top center":"top","top right":"top-start","middle left left":"left","middle left right":"left","middle left bottom":"left-end","middle left top":"left-start","middle right left":"right","middle right right":"right","middle right bottom":"right-end","middle right top":"right-start","bottom left left":"bottom-end","bottom left right":"bottom-end","bottom left bottom":"bottom-end","bottom left top":"bottom-end","bottom center left":"bottom","bottom center right":"bottom","bottom center bottom":"bottom","bottom center top":"bottom","bottom right left":"bottom-start","bottom right right":"bottom-start","bottom right bottom":"bottom-start","bottom right top":"bottom-start","top left left":"top-end","top left right":"top-end","top left bottom":"top-end","top left top":"top-end","top center left":"top","top center right":"top","top center bottom":"top","top center top":"top","top right left":"top-start","top right right":"top-start","top right bottom":"top-start","top right top":"top-start",middle:"bottom","middle center":"bottom","middle center bottom":"bottom","middle center left":"bottom","middle center right":"bottom","middle center top":"bottom"},p=n=>{var _;return(_=m[n])!==null&&_!==void 0?_:"bottom"},v={top:{originX:.5,originY:1},"top-start":{originX:0,originY:1},"top-end":{originX:1,originY:1},right:{originX:0,originY:.5},"right-start":{originX:0,originY:0},"right-end":{originX:0,originY:1},bottom:{originX:.5,originY:0},"bottom-start":{originX:0,originY:0},"bottom-end":{originX:1,originY:0},left:{originX:1,originY:.5},"left-start":{originX:1,originY:0},"left-end":{originX:1,originY:1},overlay:{originX:.5,originY:.5}},o=n=>{const _=n.startsWith("top")||n.startsWith("bottom")?"translateY":"translateX",j=n.startsWith("top")||n.startsWith("left")?1:-1;return{style:v[n],initial:{opacity:0,scale:0,[_]:`${2*j}em`},animate:{opacity:1,scale:1,[_]:0},transition:{duration:.1,ease:[0,0,.2,1]}}};function r(n){return!!(n!=null&&n.top)}function l(n){return!!(n!=null&&n.current)}const s=({anchor:n,anchorRef:_,anchorRect:j,getAnchorRect:x,fallbackReferenceElement:y})=>{var C;let P=null;return n?P=n:r(_)?P={getBoundingClientRect(){const b=_.top.getBoundingClientRect(),w=_.bottom.getBoundingClientRect();return new window.DOMRect(b.x,b.y,b.width,w.bottom-b.top)}}:l(_)?P=_.current:_?P=_:j?P={getBoundingClientRect(){return j}}:x?P={getBoundingClientRect(){var b,w,M,H;const f=x(y);return new window.DOMRect((b=f.x)!==null&&b!==void 0?b:f.left,(w=f.y)!==null&&w!==void 0?w:f.top,(M=f.width)!==null&&M!==void 0?M:f.right-f.left,(H=f.height)!==null&&H!==void 0?H:f.bottom-f.top)}}:y&&(P=y.parentElement),(C=P)!==null&&C!==void 0?C:null},u=n=>n===null||Number.isNaN(n)?void 0:Math.round(n)},"../../../node_modules/.pnpm/@wordpress+components@28.7.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/shortcut/index.js":(k,g,e)=>{e.d(g,{A:()=>v});var m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function p(o){const{shortcut:r,className:l}=o;if(!r)return null;let s,u;return typeof r=="string"&&(s=r),r!==null&&typeof r=="object"&&(s=r.display,u=r.ariaLabel),(0,m.jsx)("span",{className:l,"aria-label":u,children:s})}const v=p},"../../../node_modules/.pnpm/@wordpress+components@28.7.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/tooltip/index.js":(k,g,e)=>{e.d(g,{Ay:()=>M});var m=e("../../../node_modules/.pnpm/@ariakit+react-core@0.4.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/2D53SX6Q.js"),p=e("../../../node_modules/.pnpm/@ariakit+react-core@0.4.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/AXRBYZQP.js"),v=e("../../../node_modules/.pnpm/@ariakit+react-core@0.4.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/tooltip/tooltip-anchor.js"),o=e("../../../node_modules/.pnpm/@ariakit+react-core@0.4.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/tooltip/tooltip.js"),r=e("../../../node_modules/.pnpm/@ariakit+react-core@0.4.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/2GXGCHW6.js"),l=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),s=e("../../../node_modules/.pnpm/@wordpress+compose@7.7.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+deprecated@4.7.0/node_modules/@wordpress/deprecated/build-module/index.js"),_=e("../../../node_modules/.pnpm/@wordpress+components@28.7.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/shortcut/index.js"),j=e("../../../node_modules/.pnpm/@wordpress+components@28.7.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/popover/utils.js"),x=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const y=(0,u.createContext)({isNestedInTooltip:!1}),C=700,P={isNestedInTooltip:!0};function b(H,f){const{children:I,className:K,delay:Y=C,hideOnClick:S=!0,placement:F,position:Z,shortcut:R,text:B,...V}=H,{isNestedInTooltip:Q}=(0,u.useContext)(y),$=(0,s.A)(w,"tooltip"),U=B||R?$:void 0,L=u.Children.count(I)===1;let W;F!==void 0?W=F:Z!==void 0&&(W=(0,j.YK)(Z),(0,n.A)("`position` prop in wp.components.tooltip",{since:"6.4",alternative:"`placement` prop"})),W=W||"bottom";const X=m._({placement:W,showTimeout:Y}),J=(0,r.O$)(X,"mounted");if(Q)return L?(0,x.jsx)(p.X,{...V,render:I}):I;function N(G){return U&&J?(0,u.cloneElement)(G,{"aria-describedby":U}):G}return(0,x.jsxs)(y.Provider,{value:P,children:[(0,x.jsx)(v.f,{onClick:S?X.hide:void 0,store:X,render:L?N(I):void 0,ref:f,children:L?void 0:I}),L&&(B||R)&&(0,x.jsxs)(o.m,{...V,className:(0,l.A)("components-tooltip",K),unmountOnHide:!0,gutter:4,id:U,overflowPadding:.5,store:X,children:[B,R&&(0,x.jsx)(_.A,{className:B?"components-tooltip__shortcut":"",shortcut:R})]})]})}const w=(0,u.forwardRef)(b),M=w},"../../../node_modules/.pnpm/@wordpress+hooks@4.7.0/node_modules/@wordpress/hooks/build-module/index.js":(k,g,e)=>{e.d(g,{ip:()=>Y,U2:()=>S,W5:()=>U,FF:()=>I,se:()=>K,Eo:()=>$,FC:()=>B,V5:()=>F});function m(i){return typeof i!="string"||i===""?(console.error("The namespace must be a non-empty string."),!1):/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(i)?!0:(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)}const p=m;function v(i){return typeof i!="string"||i===""?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(i)?(console.error("The hook name cannot begin with `__`."),!1):/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(i)?!0:(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)}const o=v;function r(i,E){return function(d,t,a,c=10){const A=i[E];if(!o(d)||!p(t))return;if(typeof a!="function"){console.error("The hook callback must be a function.");return}if(typeof c!="number"){console.error("If specified, the hook priority must be a number.");return}const O={callback:a,priority:c,namespace:t};if(A[d]){const T=A[d].handlers;let h;for(h=T.length;h>0&&!(c>=T[h-1].priority);h--);h===T.length?T[h]=O:T.splice(h,0,O),A.__current.forEach(z=>{z.name===d&&z.currentIndex>=h&&z.currentIndex++})}else A[d]={handlers:[O],runs:0};d!=="hookAdded"&&i.doAction("hookAdded",d,t,a,c)}}const l=r;function s(i,E,D=!1){return function(t,a){const c=i[E];if(!o(t)||!D&&!p(a))return;if(!c[t])return 0;let A=0;if(D)A=c[t].handlers.length,c[t]={runs:c[t].runs,handlers:[]};else{const O=c[t].handlers;for(let T=O.length-1;T>=0;T--)O[T].namespace===a&&(O.splice(T,1),A++,c.__current.forEach(h=>{h.name===t&&h.currentIndex>=T&&h.currentIndex--}))}return t!=="hookRemoved"&&i.doAction("hookRemoved",t,a),A}}const u=s;function n(i,E){return function(d,t){const a=i[E];return typeof t!="undefined"?d in a&&a[d].handlers.some(c=>c.namespace===t):d in a}}const _=n;function j(i,E,D=!1){return function(t,...a){const c=i[E];c[t]||(c[t]={handlers:[],runs:0}),c[t].runs++;const A=c[t].handlers;if(!A||!A.length)return D?a[0]:void 0;const O={name:t,currentIndex:0};for(c.__current.push(O);O.currentIndex<A.length;){const h=A[O.currentIndex].callback.apply(null,a);D&&(a[0]=h),O.currentIndex++}if(c.__current.pop(),D)return a[0]}}const x=j;function y(i,E){return function(){var a;var d;const t=i[E];return(d=(a=t.__current[t.__current.length-1])==null?void 0:a.name)!==null&&d!==void 0?d:null}}const C=y;function P(i,E){return function(d){const t=i[E];return typeof d=="undefined"?typeof t.__current[0]!="undefined":t.__current[0]?d===t.__current[0].name:!1}}const b=P;function w(i,E){return function(d){const t=i[E];if(o(d))return t[d]&&t[d].runs?t[d].runs:0}}const M=w;class H{constructor(){this.actions=Object.create(null),this.actions.__current=[],this.filters=Object.create(null),this.filters.__current=[],this.addAction=l(this,"actions"),this.addFilter=l(this,"filters"),this.removeAction=u(this,"actions"),this.removeFilter=u(this,"filters"),this.hasAction=_(this,"actions"),this.hasFilter=_(this,"filters"),this.removeAllActions=u(this,"actions",!0),this.removeAllFilters=u(this,"filters",!0),this.doAction=x(this,"actions"),this.applyFilters=x(this,"filters",!0),this.currentAction=C(this,"actions"),this.currentFilter=C(this,"filters"),this.doingAction=b(this,"actions"),this.doingFilter=b(this,"filters"),this.didAction=M(this,"actions"),this.didFilter=M(this,"filters")}}function f(){return new H}const I=f,K=I(),{addAction:Y,addFilter:S,removeAction:F,removeFilter:Z,hasAction:R,hasFilter:B,removeAllActions:V,removeAllFilters:Q,doAction:$,applyFilters:U,currentAction:L,currentFilter:W,doingAction:X,doingFilter:J,didAction:N,didFilter:G,actions:q,filters:tt}=K},"../../../node_modules/.pnpm/@wordpress+icons@10.7.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(k,g,e)=>{e.d(g,{A:()=>v});var m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function p({icon:o,size:r=24,...l},s){return(0,m.cloneElement)(o,{width:r,height:r,...l,ref:s})}const v=(0,m.forwardRef)(p)},"../../../node_modules/.pnpm/@wordpress+icons@10.7.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/post-list.js":(k,g,e)=>{e.d(g,{A:()=>o});var m=e("../../../node_modules/.pnpm/@wordpress+primitives@4.7.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),p=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,p.jsx)(m.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,p.jsx)(m.wA,{d:"M18 5.5H6a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5ZM6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm1 5h1.5v1.5H7V9Zm1.5 4.5H7V15h1.5v-1.5ZM10 9h7v1.5h-7V9Zm7 4.5h-7V15h7v-1.5Z"})})},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(k,g,e)=>{e.d(g,{A:()=>v});function m(o){var r,l,s="";if(typeof o=="string"||typeof o=="number")s+=o;else if(typeof o=="object")if(Array.isArray(o)){var u=o.length;for(r=0;r<u;r++)o[r]&&(l=m(o[r]))&&(s&&(s+=" "),s+=l)}else for(l in o)o[l]&&(s&&(s+=" "),s+=l);return s}function p(){for(var o,r,l=0,s="",u=arguments.length;l<u;l++)(o=arguments[l])&&(r=m(o))&&(s&&(s+=" "),s+=r);return s}const v=p}}]);})();
