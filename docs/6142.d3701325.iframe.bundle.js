(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6142],{"../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/popover/utils.js":(j,f,r)=>{"use strict";r.d(f,{CK:()=>t,KF:()=>p,d9:()=>e,sw:()=>a});const u={bottom:"bottom",top:"top","middle left":"left","middle right":"right","bottom left":"bottom-end","bottom center":"bottom","bottom right":"bottom-start","top left":"top-end","top center":"top","top right":"top-start","middle left left":"left","middle left right":"left","middle left bottom":"left-end","middle left top":"left-start","middle right left":"right","middle right right":"right","middle right bottom":"right-end","middle right top":"right-start","bottom left left":"bottom-end","bottom left right":"bottom-end","bottom left bottom":"bottom-end","bottom left top":"bottom-end","bottom center left":"bottom","bottom center right":"bottom","bottom center bottom":"bottom","bottom center top":"bottom","bottom right left":"bottom-start","bottom right right":"bottom-start","bottom right bottom":"bottom-start","bottom right top":"bottom-start","top left left":"top-end","top left right":"top-end","top left bottom":"top-end","top left top":"top-end","top center left":"top","top center right":"top","top center bottom":"top","top center top":"top","top right left":"top-start","top right right":"top-start","top right bottom":"top-start","top right top":"top-start",middle:"bottom","middle center":"bottom","middle center bottom":"bottom","middle center left":"bottom","middle center right":"bottom","middle center top":"bottom"},p=s=>{var d;return(d=u[s])!==null&&d!==void 0?d:"bottom"},g={top:{originX:.5,originY:1},"top-start":{originX:0,originY:1},"top-end":{originX:1,originY:1},right:{originX:0,originY:.5},"right-start":{originX:0,originY:0},"right-end":{originX:0,originY:1},bottom:{originX:.5,originY:0},"bottom-start":{originX:0,originY:0},"bottom-end":{originX:1,originY:0},left:{originX:1,originY:.5},"left-start":{originX:1,originY:0},"left-end":{originX:1,originY:1},overlay:{originX:.5,originY:.5}},e=s=>{const d=s.startsWith("top")||s.startsWith("bottom")?"translateY":"translateX",D=s.startsWith("top")||s.startsWith("left")?1:-1;return{style:g[s],initial:{opacity:0,scale:0,[d]:`${2*D}em`},animate:{opacity:1,scale:1,[d]:0},transition:{duration:.1,ease:[0,0,.2,1]}}};function n(s){return!!(s!=null&&s.top)}function i(s){return!!(s!=null&&s.current)}const t=({anchor:s,anchorRef:d,anchorRect:D,getAnchorRect:I,fallbackReferenceElement:H})=>{var C;let E=null;return s?E=s:n(d)?E={getBoundingClientRect(){const v=d.top.getBoundingClientRect(),y=d.bottom.getBoundingClientRect();return new window.DOMRect(v.x,v.y,v.width,y.bottom-v.top)}}:i(d)?E=d.current:d?E=d:D?E={getBoundingClientRect(){return D}}:I?E={getBoundingClientRect(){var v,y,M,w;const h=I(H);return new window.DOMRect((v=h.x)!==null&&v!==void 0?v:h.left,(y=h.y)!==null&&y!==void 0?y:h.top,(M=h.width)!==null&&M!==void 0?M:h.right-h.left,(w=h.height)!==null&&w!==void 0?w:h.bottom-h.top)}}:H&&(E=H.parentElement),(C=E)!==null&&C!==void 0?C:null},a=s=>s===null||Number.isNaN(s)?void 0:Math.round(s)},"../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/shortcut/index.js":(j,f,r)=>{"use strict";r.d(f,{Z:()=>g});var u=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function p(e){const{shortcut:n,className:i}=e;if(!n)return null;let t,a;return typeof n=="string"&&(t=n),n!==null&&typeof n=="object"&&(t=n.display,a=n.ariaLabel),(0,u.jsx)("span",{className:i,"aria-label":a,children:t})}const g=p},"../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/tooltip/index.js":(j,f,r)=>{"use strict";r.d(f,{ZP:()=>v});var u=r("../../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/2QMN5E6B.js"),p=r("../../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/FSFPRQFR.js"),g=r("../../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1/node_modules/@ariakit/react-core/esm/tooltip/tooltip-anchor.js"),e=r("../../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1/node_modules/@ariakit/react-core/esm/tooltip/tooltip.js"),n=r("../../../node_modules/.pnpm/@wordpress+compose@7.0.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),i=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),t=r("../../../node_modules/.pnpm/@wordpress+deprecated@4.0.0/node_modules/@wordpress/deprecated/build-module/index.js"),a=r("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/shortcut/index.js"),s=r("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/popover/utils.js"),d=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const D=(0,i.createContext)({isNestedInTooltip:!1}),I=700,H={isNestedInTooltip:!0};function C(y,M){const{children:w,delay:h=I,hideOnClick:W=!0,placement:K,position:U,shortcut:L,text:k,...S}=y,{isNestedInTooltip:Y}=(0,i.useContext)(D),X=(0,n.Z)(E,"tooltip"),$=k||L?X:void 0,R=i.Children.count(w)===1;let B;K!==void 0?B=K:U!==void 0&&(B=(0,s.KF)(U),(0,t.Z)("`position` prop in wp.components.tooltip",{since:"6.4",alternative:"`placement` prop"})),B=B||"bottom";const F=u._({placement:B,showTimeout:h});return Y?R?(0,d.jsx)(p.u,{...S,render:w}):w:(0,d.jsxs)(D.Provider,{value:H,children:[(0,d.jsx)(g.e,{onClick:W?F.hide:void 0,store:F,render:R?w:void 0,ref:M,children:R?void 0:w}),R&&(k||L)&&(0,d.jsxs)(e.u,{...S,className:"components-tooltip",unmountOnHide:!0,gutter:4,id:$,overflowPadding:.5,store:F,children:[k,L&&(0,d.jsx)(a.Z,{className:k?"components-tooltip__shortcut":"",shortcut:L})]})]})}const E=(0,i.forwardRef)(C),v=E},"../../../node_modules/.pnpm/@wordpress+hooks@4.0.0/node_modules/@wordpress/hooks/build-module/index.js":(j,f,r)=>{"use strict";r.d(f,{KG:()=>U,KJ:()=>L,O:()=>F,Hu:()=>W,JQ:()=>K,Kw:()=>B,H7:()=>X,iR:()=>k});function u(l){return typeof l!="string"||l===""?(console.error("The namespace must be a non-empty string."),!1):/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(l)?!0:(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)}const p=u;function g(l){return typeof l!="string"||l===""?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(l)?(console.error("The hook name cannot begin with `__`."),!1):/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(l)?!0:(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)}const e=g;function n(l,A){return function(c,o,m,_=10){const P=l[A];if(!e(c)||!p(o))return;if(typeof m!="function"){console.error("The hook callback must be a function.");return}if(typeof _!="number"){console.error("If specified, the hook priority must be a number.");return}const O={callback:m,priority:_,namespace:o};if(P[c]){const T=P[c].handlers;let b;for(b=T.length;b>0&&!(_>=T[b-1].priority);b--);b===T.length?T[b]=O:T.splice(b,0,O),P.__current.forEach(Z=>{Z.name===c&&Z.currentIndex>=b&&Z.currentIndex++})}else P[c]={handlers:[O],runs:0};c!=="hookAdded"&&l.doAction("hookAdded",c,o,m,_)}}const i=n;function t(l,A,x=!1){return function(o,m){const _=l[A];if(!e(o)||!x&&!p(m))return;if(!_[o])return 0;let P=0;if(x)P=_[o].handlers.length,_[o]={runs:_[o].runs,handlers:[]};else{const O=_[o].handlers;for(let T=O.length-1;T>=0;T--)O[T].namespace===m&&(O.splice(T,1),P++,_.__current.forEach(b=>{b.name===o&&b.currentIndex>=T&&b.currentIndex--}))}return o!=="hookRemoved"&&l.doAction("hookRemoved",o,m),P}}const a=t;function s(l,A){return function(c,o){const m=l[A];return typeof o!="undefined"?c in m&&m[c].handlers.some(_=>_.namespace===o):c in m}}const d=s;function D(l,A,x=!1){return function(o,...m){const _=l[A];_[o]||(_[o]={handlers:[],runs:0}),_[o].runs++;const P=_[o].handlers;if(!P||!P.length)return x?m[0]:void 0;const O={name:o,currentIndex:0};for(_.__current.push(O);O.currentIndex<P.length;){const b=P[O.currentIndex].callback.apply(null,m);x&&(m[0]=b),O.currentIndex++}if(_.__current.pop(),x)return m[0]}}const I=D;function H(l,A){return function(){var m;var c;const o=l[A];return(c=(m=o.__current[o.__current.length-1])==null?void 0:m.name)!==null&&c!==void 0?c:null}}const C=H;function E(l,A){return function(c){const o=l[A];return typeof c=="undefined"?typeof o.__current[0]!="undefined":o.__current[0]?c===o.__current[0].name:!1}}const v=E;function y(l,A){return function(c){const o=l[A];if(e(c))return o[c]&&o[c].runs?o[c].runs:0}}const M=y;class w{constructor(){this.actions=Object.create(null),this.actions.__current=[],this.filters=Object.create(null),this.filters.__current=[],this.addAction=i(this,"actions"),this.addFilter=i(this,"filters"),this.removeAction=a(this,"actions"),this.removeFilter=a(this,"filters"),this.hasAction=d(this,"actions"),this.hasFilter=d(this,"filters"),this.removeAllActions=a(this,"actions",!0),this.removeAllFilters=a(this,"filters",!0),this.doAction=I(this,"actions"),this.applyFilters=I(this,"filters",!0),this.currentAction=C(this,"actions"),this.currentFilter=C(this,"filters"),this.doingAction=v(this,"actions"),this.doingFilter=v(this,"filters"),this.didAction=M(this,"actions"),this.didFilter=M(this,"filters")}}function h(){return new w}const W=h,K=W(),{addAction:U,addFilter:L,removeAction:k,removeFilter:S,hasAction:Y,hasFilter:X,removeAllActions:$,removeAllFilters:R,doAction:B,applyFilters:F,currentAction:V,currentFilter:z,doingAction:Q,doingFilter:G,didAction:J,didFilter:N,actions:q,filters:tt}=K},"../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(j,f,r)=>{"use strict";r.d(f,{Z:()=>g});var u=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function p({icon:e,size:n=24,...i},t){return(0,u.cloneElement)(e,{width:n,height:n,...i,ref:t})}const g=(0,u.forwardRef)(p)},"../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/post-list.js":(j,f,r)=>{"use strict";r.d(f,{Z:()=>e});var u=r("../../../node_modules/.pnpm/@wordpress+primitives@4.0.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),p=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const e=(0,p.jsx)(u.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,p.jsx)(u.y$,{d:"M18 5.5H6a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5ZM6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm1 5h1.5v1.5H7V9Zm1.5 4.5H7V15h1.5v-1.5ZM10 9h7v1.5h-7V9Zm7 4.5h-7V15h7v-1.5Z"})})},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(j,f)=>{var r,u;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var p={}.hasOwnProperty,g="[native code]";function e(){for(var n=[],i=0;i<arguments.length;i++){var t=arguments[i];if(t){var a=typeof t;if(a==="string"||a==="number")n.push(t);else if(Array.isArray(t)){if(t.length){var s=e.apply(null,t);s&&n.push(s)}}else if(a==="object"){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){n.push(t.toString());continue}for(var d in t)p.call(t,d)&&t[d]&&n.push(d)}}}return n.join(" ")}j.exports?(e.default=e,j.exports=e):(r=[],u=function(){return e}.apply(f,r),u!==void 0&&(j.exports=u))})()},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(j,f,r)=>{"use strict";r.d(f,{Z:()=>g});function u(e){var n,i,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(n=0;n<a;n++)e[n]&&(i=u(e[n]))&&(t&&(t+=" "),t+=i)}else for(i in e)e[i]&&(t&&(t+=" "),t+=i);return t}function p(){for(var e,n,i=0,t="",a=arguments.length;i<a;i++)(e=arguments[i])&&(n=u(e))&&(t&&(t+=" "),t+=n);return t}const g=p}}]);})();
