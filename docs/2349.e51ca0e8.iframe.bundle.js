(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2349],{"../../../node_modules/.pnpm/@wordpress+components@25.14.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/utils.js":(C,g,o)=>{"use strict";o.d(g,{CK:()=>i,KF:()=>_,d9:()=>u,sw:()=>m});const d={bottom:"bottom",top:"top","middle left":"left","middle right":"right","bottom left":"bottom-end","bottom center":"bottom","bottom right":"bottom-start","top left":"top-end","top center":"top","top right":"top-start","middle left left":"left","middle left right":"left","middle left bottom":"left-end","middle left top":"left-start","middle right left":"right","middle right right":"right","middle right bottom":"right-end","middle right top":"right-start","bottom left left":"bottom-end","bottom left right":"bottom-end","bottom left bottom":"bottom-end","bottom left top":"bottom-end","bottom center left":"bottom","bottom center right":"bottom","bottom center bottom":"bottom","bottom center top":"bottom","bottom right left":"bottom-start","bottom right right":"bottom-start","bottom right bottom":"bottom-start","bottom right top":"bottom-start","top left left":"top-end","top left right":"top-end","top left bottom":"top-end","top left top":"top-end","top center left":"top","top center right":"top","top center bottom":"top","top center top":"top","top right left":"top-start","top right right":"top-start","top right bottom":"top-start","top right top":"top-start",middle:"bottom","middle center":"bottom","middle center bottom":"bottom","middle center left":"bottom","middle center right":"bottom","middle center top":"bottom"},_=e=>{var s;return(s=d[e])!==null&&s!==void 0?s:"bottom"},w={top:{originX:.5,originY:1},"top-start":{originX:0,originY:1},"top-end":{originX:1,originY:1},right:{originX:0,originY:.5},"right-start":{originX:0,originY:0},"right-end":{originX:0,originY:1},bottom:{originX:.5,originY:0},"bottom-start":{originX:0,originY:0},"bottom-end":{originX:1,originY:0},left:{originX:1,originY:.5},"left-start":{originX:1,originY:0},"left-end":{originX:1,originY:1},overlay:{originX:.5,originY:.5}},u=e=>{const s=e.startsWith("top")||e.startsWith("bottom")?"translateY":"translateX",I=e.startsWith("top")||e.startsWith("left")?1:-1;return{style:w[e],initial:{opacity:0,scale:0,[s]:`${2*I}em`},animate:{opacity:1,scale:1,[s]:0},transition:{duration:.1,ease:[0,0,.2,1]}}};function l(e){return!!(e!=null&&e.top)}function p(e){return!!(e!=null&&e.current)}const i=({anchor:e,anchorRef:s,anchorRect:I,getAnchorRect:j,fallbackReferenceElement:H})=>{var x;let A=null;return e?A=e:l(s)?A={getBoundingClientRect(){const f=s.top.getBoundingClientRect(),y=s.bottom.getBoundingClientRect();return new window.DOMRect(f.x,f.y,f.width,y.bottom-f.top)}}:p(s)?A=s.current:s?A=s:I?A={getBoundingClientRect(){return I}}:j?A={getBoundingClientRect(){var f,y,D,M;const h=j(H);return new window.DOMRect((f=h.x)!==null&&f!==void 0?f:h.left,(y=h.y)!==null&&y!==void 0?y:h.top,(D=h.width)!==null&&D!==void 0?D:h.right-h.left,(M=h.height)!==null&&M!==void 0?M:h.bottom-h.top)}}:H&&(A=H.parentElement),(x=A)!==null&&x!==void 0?x:null},m=e=>e===null||Number.isNaN(e)?void 0:Math.round(e)},"../../../node_modules/.pnpm/@wordpress+components@25.14.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/shortcut/index.js":(C,g,o)=>{"use strict";o.d(g,{Z:()=>w});var d=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function _(u){const{shortcut:l,className:p}=u;if(!l)return null;let i,m;return typeof l=="string"&&(i=l),l!==null&&typeof l=="object"&&(i=l.display,m=l.ariaLabel),(0,d.createElement)("span",{className:p,"aria-label":m},i)}const w=_},"../../../node_modules/.pnpm/@wordpress+components@25.14.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/tooltip/index.js":(C,g,o)=>{"use strict";o.d(g,{Z:()=>I});var d=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=o("../../../node_modules/.pnpm/@ariakit+react-core@0.3.12_react-dom@18.2.0_react@18.2.0/node_modules/@ariakit/react-core/esm/__chunks/2QMN5E6B.js"),w=o("../../../node_modules/.pnpm/@ariakit+react-core@0.3.12_react-dom@18.2.0_react@18.2.0/node_modules/@ariakit/react-core/esm/tooltip/tooltip-anchor.js"),u=o("../../../node_modules/.pnpm/@ariakit+react-core@0.3.12_react-dom@18.2.0_react@18.2.0/node_modules/@ariakit/react-core/esm/tooltip/tooltip.js"),l=o("../../../node_modules/.pnpm/@wordpress+compose@6.25.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),p=o("../../../node_modules/.pnpm/@wordpress+deprecated@3.48.0/node_modules/@wordpress/deprecated/build-module/index.js"),i=o("../../../node_modules/.pnpm/@wordpress+components@25.14.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/shortcut/index.js"),m=o("../../../node_modules/.pnpm/@wordpress+components@25.14.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/popover/utils.js");const e=700;function s(j){const{children:H,delay:x=e,hideOnClick:A=!0,placement:f,position:y,shortcut:D,text:M}=j,h=(0,l.Z)(s,"tooltip"),K=M||D?h:void 0,B=d.Children.count(H)===1;let k;f!==void 0?k=f:y!==void 0&&(k=(0,m.KF)(y),(0,p.Z)("`position` prop in wp.components.tooltip",{since:"6.4",alternative:"`placement` prop"})),k=k||"bottom";const L=_._({placement:k,timeout:x});return(0,d.createElement)(d.Fragment,null,(0,d.createElement)(w.e,{onClick:A?L.hide:void 0,store:L,render:B?H:void 0},B?void 0:H),B&&(M||D)&&(0,d.createElement)(u.u,{unmountOnHide:!0,className:"components-tooltip",gutter:4,id:K,overflowPadding:.5,store:L},M,D&&(0,d.createElement)(i.Z,{className:M?"components-tooltip__shortcut":"",shortcut:D})))}const I=s},"../../../node_modules/.pnpm/@wordpress+hooks@3.48.0/node_modules/@wordpress/hooks/build-module/index.js":(C,g,o)=>{"use strict";o.d(g,{KG:()=>k,KJ:()=>L,O:()=>X,Hu:()=>K,JQ:()=>B,Kw:()=>S,H7:()=>R,iR:()=>W});function d(n){return typeof n!="string"||n===""?(console.error("The namespace must be a non-empty string."),!1):/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(n)?!0:(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)}const _=d;function w(n){return typeof n!="string"||n===""?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(n)?(console.error("The hook name cannot begin with `__`."),!1):/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(n)?!0:(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)}const u=w;function l(n,E){return function(r,t,a,c=10){const v=n[E];if(!u(r)||!_(t))return;if(typeof a!="function"){console.error("The hook callback must be a function.");return}if(typeof c!="number"){console.error("If specified, the hook priority must be a number.");return}const O={callback:a,priority:c,namespace:t};if(v[r]){const P=v[r].handlers;let b;for(b=P.length;b>0&&!(c>=P[b-1].priority);b--);b===P.length?P[b]=O:P.splice(b,0,O),v.__current.forEach(F=>{F.name===r&&F.currentIndex>=b&&F.currentIndex++})}else v[r]={handlers:[O],runs:0};r!=="hookAdded"&&n.doAction("hookAdded",r,t,a,c)}}const p=l;function i(n,E,T=!1){return function(t,a){const c=n[E];if(!u(t)||!T&&!_(a))return;if(!c[t])return 0;let v=0;if(T)v=c[t].handlers.length,c[t]={runs:c[t].runs,handlers:[]};else{const O=c[t].handlers;for(let P=O.length-1;P>=0;P--)O[P].namespace===a&&(O.splice(P,1),v++,c.__current.forEach(b=>{b.name===t&&b.currentIndex>=P&&b.currentIndex--}))}return t!=="hookRemoved"&&n.doAction("hookRemoved",t,a),v}}const m=i;function e(n,E){return function(r,t){const a=n[E];return typeof t!="undefined"?r in a&&a[r].handlers.some(c=>c.namespace===t):r in a}}const s=e;function I(n,E,T=!1){return function(t,...a){const c=n[E];c[t]||(c[t]={handlers:[],runs:0}),c[t].runs++;const v=c[t].handlers;if(!v||!v.length)return T?a[0]:void 0;const O={name:t,currentIndex:0};for(c.__current.push(O);O.currentIndex<v.length;){const b=v[O.currentIndex].callback.apply(null,a);T&&(a[0]=b),O.currentIndex++}if(c.__current.pop(),T)return a[0]}}const j=I;function H(n,E){return function(){var a;var r;const t=n[E];return(r=(a=t.__current[t.__current.length-1])==null?void 0:a.name)!==null&&r!==void 0?r:null}}const x=H;function A(n,E){return function(r){const t=n[E];return typeof r=="undefined"?typeof t.__current[0]!="undefined":t.__current[0]?r===t.__current[0].name:!1}}const f=A;function y(n,E){return function(r){const t=n[E];if(u(r))return t[r]&&t[r].runs?t[r].runs:0}}const D=y;class M{constructor(){this.actions=Object.create(null),this.actions.__current=[],this.filters=Object.create(null),this.filters.__current=[],this.addAction=p(this,"actions"),this.addFilter=p(this,"filters"),this.removeAction=m(this,"actions"),this.removeFilter=m(this,"filters"),this.hasAction=s(this,"actions"),this.hasFilter=s(this,"filters"),this.removeAllActions=m(this,"actions",!0),this.removeAllFilters=m(this,"filters",!0),this.doAction=j(this,"actions"),this.applyFilters=j(this,"filters",!0),this.currentAction=x(this,"actions"),this.currentFilter=x(this,"filters"),this.doingAction=f(this,"actions"),this.doingFilter=f(this,"filters"),this.didAction=D(this,"actions"),this.didFilter=D(this,"filters")}}function h(){return new M}const K=h,B=K(),{addAction:k,addFilter:L,removeAction:W,removeFilter:U,hasAction:Z,hasFilter:R,removeAllActions:Y,removeAllFilters:$,doAction:S,applyFilters:X,currentAction:V,currentFilter:z,doingAction:G,doingFilter:J,didAction:Q,didFilter:N,actions:q,filters:tt}=B},"../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js":(C,g,o)=>{"use strict";o.d(g,{Z:()=>w});var d=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function _({icon:u,size:l=24,...p},i){return(0,d.cloneElement)(u,{width:l,height:l,...p,ref:i})}const w=(0,d.forwardRef)(_)},"../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/post-list.js":(C,g,o)=>{"use strict";o.d(g,{Z:()=>u});var d=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=o("../../../node_modules/.pnpm/@wordpress+primitives@3.46.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const u=(0,d.createElement)(_.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,d.createElement)(_.y$,{d:"M18 5.5H6a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5ZM6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm1 5h1.5v1.5H7V9Zm1.5 4.5H7V15h1.5v-1.5ZM10 9h7v1.5h-7V9Zm7 4.5h-7V15h7v-1.5Z"}))},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(C,g)=>{var o,d;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var _={}.hasOwnProperty,w="[native code]";function u(){for(var l=[],p=0;p<arguments.length;p++){var i=arguments[p];if(i){var m=typeof i;if(m==="string"||m==="number")l.push(i);else if(Array.isArray(i)){if(i.length){var e=u.apply(null,i);e&&l.push(e)}}else if(m==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){l.push(i.toString());continue}for(var s in i)_.call(i,s)&&i[s]&&l.push(s)}}}return l.join(" ")}C.exports?(u.default=u,C.exports=u):(o=[],d=function(){return u}.apply(g,o),d!==void 0&&(C.exports=d))})()}}]);})();