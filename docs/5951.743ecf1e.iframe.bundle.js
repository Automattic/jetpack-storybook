(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5951],{"../../../node_modules/.pnpm/@floating-ui+react-dom@2.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs":(M,h,a)=>{"use strict";a.d(h,{BN:()=>y,ER:()=>b,Ej:()=>K,UE:()=>D,UU:()=>O,cY:()=>m,we:()=>C});var s=a("../../../node_modules/.pnpm/@floating-ui+dom@1.6.13/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),o=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),g=a("../../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js"),d=typeof document<"u"?o.useLayoutEffect:o.useEffect;function n(i,r){if(i===r)return!0;if(typeof i!=typeof r)return!1;if(typeof i=="function"&&i.toString()===r.toString())return!0;let k,u,e;if(i&&r&&typeof i=="object"){if(Array.isArray(i)){if(k=i.length,k!==r.length)return!1;for(u=k;u--!==0;)if(!n(i[u],r[u]))return!1;return!0}if(e=Object.keys(i),k=e.length,k!==Object.keys(r).length)return!1;for(u=k;u--!==0;)if(!{}.hasOwnProperty.call(r,e[u]))return!1;for(u=k;u--!==0;){const t=e[u];if(!(t==="_owner"&&i.$$typeof)&&!n(i[t],r[t]))return!1}return!0}return i!==i&&r!==r}function c(i){return typeof window>"u"?1:(i.ownerDocument.defaultView||window).devicePixelRatio||1}function p(i,r){const k=c(i);return Math.round(r*k)/k}function w(i){const r=o.useRef(i);return d(()=>{r.current=i}),r}function C(i){i===void 0&&(i={});const{placement:r="bottom",strategy:k="absolute",middleware:u=[],platform:e,elements:{reference:t,floating:f}={},transform:A=!0,whileElementsMounted:U,open:L}=i,[N,T]=o.useState({x:0,y:0,strategy:k,placement:r,middlewareData:{},isPositioned:!1}),[I,W]=o.useState(u);n(I,u)||W(u);const[z,G]=o.useState(null),[X,J]=o.useState(null),v=o.useCallback(F=>{F!==P.current&&(P.current=F,G(F))},[]),E=o.useCallback(F=>{F!==B.current&&(B.current=F,J(F))},[]),x=t||z,_=f||X,P=o.useRef(null),B=o.useRef(null),R=o.useRef(N),S=U!=null,Y=w(U),q=w(e),ee=w(L),$=o.useCallback(()=>{if(!P.current||!B.current)return;const F={placement:r,strategy:k,middleware:I};q.current&&(F.platform=q.current),(0,s.rD)(P.current,B.current,F).then(te=>{const Z={...te,isPositioned:ee.current!==!1};ne.current&&!n(R.current,Z)&&(R.current=Z,g.flushSync(()=>{T(Z)}))})},[I,r,k,q,ee]);d(()=>{L===!1&&R.current.isPositioned&&(R.current.isPositioned=!1,T(F=>({...F,isPositioned:!1})))},[L]);const ne=o.useRef(!1);d(()=>(ne.current=!0,()=>{ne.current=!1}),[]),d(()=>{if(x&&(P.current=x),_&&(B.current=_),x&&_){if(Y.current)return Y.current(x,_,$);$()}},[x,_,$,Y,S]);const ie=o.useMemo(()=>({reference:P,floating:B,setReference:v,setFloating:E}),[v,E]),Q=o.useMemo(()=>({reference:x,floating:_}),[x,_]),ae=o.useMemo(()=>{const F={position:k,left:0,top:0};if(!Q.floating)return F;const te=p(Q.floating,N.x),Z=p(Q.floating,N.y);return A?{...F,transform:"translate("+te+"px, "+Z+"px)",...c(Q.floating)>=1.5&&{willChange:"transform"}}:{position:k,left:te,top:Z}},[k,A,Q.floating,N.x,N.y]);return o.useMemo(()=>({...N,update:$,refs:ie,elements:Q,floatingStyles:ae}),[N,$,ie,Q,ae])}const j=i=>{function r(k){return{}.hasOwnProperty.call(k,"current")}return{name:"arrow",options:i,fn(k){const{element:u,padding:e}=typeof i=="function"?i(k):i;return u&&r(u)?u.current!=null?(0,s.UE)({element:u.current,padding:e}).fn(k):{}:u?(0,s.UE)({element:u,padding:e}).fn(k):{}}}},m=(i,r)=>({...(0,s.cY)(i),options:[i,r]}),y=(i,r)=>({...(0,s.BN)(i),options:[i,r]}),b=(i,r)=>({...(0,s.ER)(i),options:[i,r]}),O=(i,r)=>({...(0,s.UU)(i),options:[i,r]}),K=(i,r)=>({...(0,s.Ej)(i),options:[i,r]}),V=(i,r)=>({...autoPlacement$1(i),options:[i,r]}),H=(i,r)=>({...hide$1(i),options:[i,r]}),l=(i,r)=>({...inline$1(i),options:[i,r]}),D=(i,r)=>({...j(i),options:[i,r]})},"../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js":(M,h,a)=>{"use strict";a.d(h,{Ay:()=>V});var s=a("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),o=a("../../../node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@18.3.18_react@18.3.1__@types+react@18.3.18_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),g=a("../../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.18_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),d=a("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js"),n=a("../../../node_modules/.pnpm/@wordpress+components@29.3.0_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js");function c(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const p=(0,g.i7)`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,w=(0,o.A)("svg",{target:"ea4tfvq2"})("width:",d.A.spinnerSize,"px;height:",d.A.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",n.l.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),C={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},j=(0,o.A)("circle",{target:"ea4tfvq1"})(C,";stroke:",n.l.gray[300],";"),m=(0,o.A)("path",{target:"ea4tfvq0"})(C,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",p,";");var y=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),b=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function O({className:H,...l},D){return(0,b.jsxs)(w,{className:(0,s.A)("components-spinner",H),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...l,ref:D,children:[(0,b.jsx)(j,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,b.jsx)(m,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"})]})}const V=(0,y.forwardRef)(O)},"../../../node_modules/.pnpm/@wordpress+compose@7.17.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js":(M,h,a)=>{"use strict";a.d(h,{A:()=>g});var s=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function o(d,n){typeof d=="function"?d(n):d&&d.hasOwnProperty("current")&&(d.current=n)}function g(d){const n=(0,s.useRef)(),c=(0,s.useRef)(!1),p=(0,s.useRef)(!1),w=(0,s.useRef)([]),C=(0,s.useRef)(d);return C.current=d,(0,s.useLayoutEffect)(()=>{p.current===!1&&c.current===!0&&d.forEach((j,m)=>{const y=w.current[m];j!==y&&(o(y,null),o(j,n.current))}),w.current=d},d),(0,s.useLayoutEffect)(()=>{p.current=!1}),(0,s.useCallback)(j=>{o(n,j),p.current=!0,c.current=j!==null;const m=j?C.current:w.current;for(const y of m)o(y,j)},[])}},"../../../node_modules/.pnpm/@wordpress+dom@4.19.0/node_modules/@wordpress/dom/build-module/index.js":(M,h,a)=>{"use strict";a.d(h,{XC:()=>H});var s={};a.r(s),a.d(s,{find:()=>c});var o={};a.r(o),a.d(o,{find:()=>O,findNext:()=>V,findPrevious:()=>K,isTabbableIndex:()=>w});function g(l){return[l?'[tabindex]:not([tabindex^="-"])':"[tabindex]","a[href]","button:not([disabled])",'input:not([type="hidden"]):not([disabled])',"select:not([disabled])","textarea:not([disabled])",'iframe:not([tabindex^="-"])',"object","embed","area[href]","[contenteditable]:not([contenteditable=false])"].join(",")}function d(l){return l.offsetWidth>0||l.offsetHeight>0||l.getClientRects().length>0}function n(l){const D=l.closest("map[name]");if(!D)return!1;const i=l.ownerDocument.querySelector('img[usemap="#'+D.name+'"]');return!!i&&d(i)}function c(l,{sequential:D=!1}={}){const i=l.querySelectorAll(g(D));return Array.from(i).filter(r=>{if(!d(r))return!1;const{nodeName:k}=r;return k==="AREA"?n(r):!0})}function p(l){const D=l.getAttribute("tabindex");return D===null?0:parseInt(D,10)}function w(l){return p(l)!==-1}function C(){const l={};return function(i,r){const{nodeName:k,type:u,checked:e,name:t}=r;if(k!=="INPUT"||u!=="radio"||!t)return i.concat(r);const f=l.hasOwnProperty(t);if(!(e||!f))return i;if(f){const U=l[t];i=i.filter(L=>L!==U)}return l[t]=r,i.concat(r)}}function j(l,D){return{element:l,index:D}}function m(l){return l.element}function y(l,D){const i=p(l.element),r=p(D.element);return i===r?l.index-D.index:i-r}function b(l){return l.filter(w).map(j).sort(y).map(m).reduce(C(),[])}function O(l){return b(c(l))}function K(l){return b(c(l.ownerDocument.body)).reverse().find(D=>l.compareDocumentPosition(D)&l.DOCUMENT_POSITION_PRECEDING)}function V(l){return b(c(l.ownerDocument.body)).find(D=>l.compareDocumentPosition(D)&l.DOCUMENT_POSITION_FOLLOWING)}const H={focusable:s,tabbable:o}},"../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(M,h,a)=>{"use strict";a.d(h,{A:()=>g});var s=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function o({icon:d,size:n=24,...c},p){return(0,s.cloneElement)(d,{width:n,height:n,...c,ref:p})}const g=(0,s.forwardRef)(o)},"../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/color.js":(M,h,a)=>{"use strict";a.d(h,{A:()=>d});var s=a("../../../node_modules/.pnpm/@wordpress+primitives@4.17.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const d=(0,o.jsx)(s.t4,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)(s.wA,{d:"M17.2 10.9c-.5-1-1.2-2.1-2.1-3.2-.6-.9-1.3-1.7-2.1-2.6L12 4l-1 1.1c-.6.9-1.3 1.7-2 2.6-.8 1.2-1.5 2.3-2 3.2-.6 1.2-1 2.2-1 3 0 3.4 2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1c0-.8-.3-1.8-1-3zm-5.1 7.6c-2.5 0-4.6-2.1-4.6-4.6 0-.3.1-1 .8-2.3.5-.9 1.1-1.9 2-3.1.7-.9 1.3-1.7 1.8-2.3.7.8 1.3 1.6 1.8 2.3.8 1.1 1.5 2.2 2 3.1.7 1.3.8 2 .8 2.3 0 2.5-2.1 4.6-4.6 4.6z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js":(M,h,a)=>{"use strict";a.d(h,{A:()=>d});var s=a("../../../node_modules/.pnpm/@wordpress+primitives@4.17.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const d=(0,o.jsx)(s.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(s.wA,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/plugins.js":(M,h,a)=>{"use strict";a.d(h,{A:()=>d});var s=a("../../../node_modules/.pnpm/@wordpress+primitives@4.17.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const d=(0,o.jsx)(s.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(s.wA,{d:"M10.5 4v4h3V4H15v4h1.5a1 1 0 011 1v4l-3 4v2a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2l-3-4V9a1 1 0 011-1H9V4h1.5zm.5 12.5v2h2v-2l3-4v-3H8v3l3 4z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/shield.js":(M,h,a)=>{"use strict";a.d(h,{A:()=>d});var s=a("../../../node_modules/.pnpm/@wordpress+primitives@4.17.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const d=(0,o.jsx)(s.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(s.wA,{d:"M12 3.176l6.75 3.068v4.574c0 3.9-2.504 7.59-6.035 8.755a2.283 2.283 0 01-1.43 0c-3.53-1.164-6.035-4.856-6.035-8.755V6.244L12 3.176zM6.75 7.21v3.608c0 3.313 2.145 6.388 5.005 7.33.159.053.331.053.49 0 2.86-.942 5.005-4.017 5.005-7.33V7.21L12 4.824 6.75 7.21z",fillRule:"evenodd",clipRule:"evenodd"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.17.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/wordpress.js":(M,h,a)=>{"use strict";a.d(h,{A:()=>d});var s=a("../../../node_modules/.pnpm/@wordpress+primitives@4.17.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=a("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const d=(0,o.jsx)(s.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24",children:(0,o.jsx)(s.wA,{d:"M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z"})})},"../../../node_modules/.pnpm/@wordpress+priority-queue@3.19.0/node_modules/@wordpress/priority-queue/build-module/index.js":(M,h,a)=>{"use strict";a.d(h,{y:()=>d});var s=a("../../../node_modules/.pnpm/requestidlecallback@0.3.0/node_modules/requestidlecallback/index.js");function o(){return typeof window>"u"?n=>{setTimeout(()=>n(Date.now()),0)}:window.requestIdleCallback}const g=o(),d=()=>{const n=new Map;let c=!1;const p=y=>{for(const[b,O]of n)if(n.delete(b),O(),typeof y=="number"||y.timeRemaining()<=0)break;if(n.size===0){c=!1;return}g(p)};return{add:(y,b)=>{n.set(y,b),c||(c=!0,g(p))},flush:y=>{const b=n.get(y);return b===void 0?!1:(n.delete(y),b(),!0)},cancel:y=>n.delete(y),reset:()=>{n.clear(),c=!1}}}},"../../../node_modules/.pnpm/@wordpress+undo-manager@1.19.0/node_modules/@wordpress/undo-manager/build-module/index.js":(M,h,a)=>{"use strict";a.d(h,{u:()=>d});var s=a("../../../node_modules/.pnpm/@wordpress+is-shallow-equal@5.19.0/node_modules/@wordpress/is-shallow-equal/build-module/index.js");function o(n,c){const p={...n};return Object.entries(c).forEach(([w,C])=>{p[w]?p[w]={...p[w],to:C.to}:p[w]=C}),p}const g=(n,c)=>{const p=n?.findIndex(({id:C})=>typeof C=="string"?C===c.id:(0,s.Ay)(C,c.id)),w=[...n];return p!==-1?w[p]={id:c.id,changes:o(w[p].changes,c.changes)}:w.push(c),w};function d(){let n=[],c=[],p=0;const w=()=>{n=n.slice(0,p||void 0),p=0},C=()=>{var m;const y=n.length===0?0:n.length-1;let b=(m=n[y])!==null&&m!==void 0?m:[];c.forEach(O=>{b=g(b,O)}),c=[],n[y]=b},j=m=>!m.filter(({changes:b})=>Object.values(b).some(({from:O,to:K})=>typeof O!="function"&&typeof K!="function"&&!(0,s.Ay)(O,K))).length;return{addRecord(m,y=!1){const b=!m||j(m);if(y){if(b)return;m.forEach(O=>{c=g(c,O)})}else{if(w(),c.length&&C(),b)return;n.push(m)}},undo(){c.length&&(w(),C());const m=n[n.length-1+p];if(m)return p-=1,m},redo(){const m=n[n.length+p];if(m)return p+=1,m},hasUndo(){return!!n[n.length-1+p]},hasRedo(){return!!n[n.length+p]}}}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/@wordpress+dataviews@4.14.0_patch_hash=9971bdb899e2fb0a4421ab8b7f0a54a41f03b10ef1b51d72_4f64866006ce05799f56992df09fdc2c/node_modules/@wordpress/dataviews/build-style/style.css":(M,h,a)=>{"use strict";a.d(h,{A:()=>c});var s=a("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=a.n(s),g=a("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),d=a.n(g),n=d()(o());n.push([M.id,`/**
*  Converts a hex value into the rgb equivalent.
*
* @param {string} hex - the hexadecimal value to convert
* @return {string} comma separated rgb values
*/
/**
 * Colors
 */
/**
 * Breakpoints & Media Queries
 */
/**
 * SCSS Variables.
 *
 * Please use variables from this sheet to ensure consistency across the UI.
 * Don't add to this sheet unless you're pretty sure the value will be reused in many places.
 * For example, don't add rules to this sheet that affect block visuals. It's purely for UI.
 */
/**
*  Converts a hex value into the rgb equivalent.
*
* @param {string} hex - the hexadecimal value to convert
* @return {string} comma separated rgb values
*/
/**
 * Colors
 */
/**
 * Fonts & basic variables.
 */
/**
 * Typography
 */
/**
 * Grid System.
 * https://make.wordpress.org/design/2019/10/31/proposal-a-consistent-spacing-system-for-wordpress/
 */
/**
 * Radius scale.
 */
/**
 * Elevation scale.
 */
/**
 * Dimensions.
 */
/**
 * Mobile specific styles
 */
/**
 * Editor styles.
 */
/**
 * Block & Editor UI.
 */
/**
 * Block paddings.
 */
/**
 * React Native specific.
 * These variables do not appear to be used anywhere else.
 */
/**
*  Converts a hex value into the rgb equivalent.
*
* @param {string} hex - the hexadecimal value to convert
* @return {string} comma separated rgb values
*/
/**
 * Long content fade mixin
 *
 * Creates a fading overlay to signify that the content is longer
 * than the space allows.
 */
/**
 * Typography
 */
/**
 * Breakpoint mixins
 */
/**
 * Focus styles.
 */
/**
 * Applies editor left position to the selector passed as argument
 */
/**
 * Styles that are reused verbatim in a few places
 */
/**
 * Allows users to opt-out of animations via OS-level preferences.
 */
/**
 * Reset default styles for JavaScript UI based pages.
 * This is a WP-admin agnostic reset
 */
/**
 * Reset the WP Admin page styles for Gutenberg-like pages.
 */
:root {
  --wp-admin-theme-color: #007cba;
  --wp-admin-theme-color--rgb: 0, 124, 186;
  --wp-admin-theme-color-darker-10: #006ba1;
  --wp-admin-theme-color-darker-10--rgb: 0, 107, 161;
  --wp-admin-theme-color-darker-20: #005a87;
  --wp-admin-theme-color-darker-20--rgb: 0, 90, 135;
  --wp-admin-border-width-focus: 2px;
  --wp-block-synced-color: #7a00df;
  --wp-block-synced-color--rgb: 122, 0, 223;
  --wp-bound-block-color: var(--wp-block-synced-color);
}
@media (min-resolution: 192dpi) {
  :root {
    --wp-admin-border-width-focus: 1.5px;
  }
}

.dataviews-wrapper {
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  scroll-padding-bottom: 64px;
  /* stylelint-disable-next-line property-no-unknown -- '@container' not globally permitted */
  container: dataviews-wrapper/inline-size;
  display: flex;
  flex-direction: column;
  font-size: 13px;
  line-height: 1.4;
}

.dataviews__view-actions,
.dataviews-filters__container {
  box-sizing: border-box;
  padding: 16px 48px;
  flex-shrink: 0;
  position: sticky;
  left: 0;
}
@media not (prefers-reduced-motion) {
  .dataviews__view-actions,
.dataviews-filters__container {
    transition: padding ease-out 0.1s;
  }
}

.dataviews-no-results,
.dataviews-loading {
  padding: 0 48px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media not (prefers-reduced-motion) {
  .dataviews-no-results,
.dataviews-loading {
    transition: padding ease-out 0.1s;
  }
}

@container (max-width: 430px) {
  .dataviews__view-actions,
.dataviews-filters__container {
    padding: 12px 24px;
  }
  .dataviews-no-results,
.dataviews-loading {
    padding-left: 24px;
    padding-right: 24px;
  }
}
.dataviews-title-field {
  font-size: 13px;
  font-weight: 500;
  color: #2f2f2f;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}
.dataviews-title-field a {
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  flex-grow: 0;
  color: #2f2f2f;
}
.dataviews-title-field a:hover {
  color: var(--wp-admin-theme-color);
}
.dataviews-title-field a:focus {
  color: var(--wp-admin-theme-color--rgb);
  box-shadow: 0 0 0 var(--wp-admin-border-width-focus) var(--wp-admin-theme-color, #007cba);
  border-radius: 2px;
}
.dataviews-title-field button.components-button.is-link {
  text-decoration: none;
  font-weight: inherit;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  width: 100%;
  color: #1e1e1e;
}
.dataviews-title-field button.components-button.is-link:hover {
  color: var(--wp-admin-theme-color);
}

.dataviews-title-field--clickable {
  cursor: pointer;
  color: #2f2f2f;
}
.dataviews-title-field--clickable:hover {
  color: var(--wp-admin-theme-color);
}
.dataviews-title-field--clickable:focus {
  color: var(--wp-admin-theme-color--rgb);
  box-shadow: 0 0 0 var(--wp-admin-border-width-focus) var(--wp-admin-theme-color, #007cba);
  border-radius: 2px;
}

.dataviews-bulk-actions-footer__item-count {
  color: #1e1e1e;
  font-weight: 500;
  font-size: 11px;
  text-transform: uppercase;
}

.dataviews-bulk-actions-footer__container {
  margin-right: auto;
  min-height: 32px;
}

.dataviews-filters__button {
  position: relative;
}

.dataviews-filters__container {
  padding-top: 0;
}

.dataviews-filters__reset-button.dataviews-filters__reset-button[aria-disabled=true], .dataviews-filters__reset-button.dataviews-filters__reset-button[aria-disabled=true]:hover {
  opacity: 0;
}
.dataviews-filters__reset-button.dataviews-filters__reset-button[aria-disabled=true]:focus {
  opacity: 1;
}

.dataviews-filters__summary-popover {
  font-size: 13px;
  line-height: 1.4;
}
.dataviews-filters__summary-popover .components-popover__content {
  width: 230px;
  border-radius: 4px;
}
.dataviews-filters__summary-popover.components-dropdown__content .components-popover__content {
  padding: 0;
}

.dataviews-filters__summary-operators-container {
  padding: 8px 8px 0;
}
.dataviews-filters__summary-operators-container:has(+ .dataviews-filters__search-widget-listbox) {
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 8px;
}
.dataviews-filters__summary-operators-container:empty {
  display: none;
}
.dataviews-filters__summary-operators-container .dataviews-filters__summary-operators-filter-name {
  color: #757575;
}

.dataviews-filters__summary-chip-container {
  position: relative;
  white-space: pre-wrap;
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip {
  border-radius: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  padding: 4px 12px;
  min-height: 32px;
  background: #f0f0f0;
  color: #2f2f2f;
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip.has-reset {
  padding-inline-end: 28px;
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip:hover, .dataviews-filters__summary-chip-container .dataviews-filters__summary-chip:focus-visible, .dataviews-filters__summary-chip-container .dataviews-filters__summary-chip[aria-expanded=true] {
  background: #e0e0e0;
  color: #1e1e1e;
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip.has-values {
  color: var(--wp-admin-theme-color);
  background: rgba(var(--wp-admin-theme-color--rgb), 0.04);
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip.has-values:hover, .dataviews-filters__summary-chip-container .dataviews-filters__summary-chip.has-values[aria-expanded=true] {
  background: rgba(var(--wp-admin-theme-color--rgb), 0.12);
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip:focus-visible {
  outline: none;
  box-shadow: 0 0 0 var(--wp-admin-border-width-focus) var(--wp-admin-theme-color);
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip .dataviews-filters-__summary-filter-text-name {
  font-weight: 500;
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip-remove {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 0;
  padding: 0;
  position: absolute;
  right: 4px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  cursor: pointer;
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip-remove svg {
  fill: #757575;
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip-remove:hover, .dataviews-filters__summary-chip-container .dataviews-filters__summary-chip-remove:focus {
  background: #e0e0e0;
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip-remove:hover svg, .dataviews-filters__summary-chip-container .dataviews-filters__summary-chip-remove:focus svg {
  fill: #1e1e1e;
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip-remove.has-values svg {
  fill: var(--wp-admin-theme-color);
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip-remove.has-values:hover {
  background: rgba(var(--wp-admin-theme-color--rgb), 0.08);
}
.dataviews-filters__summary-chip-container .dataviews-filters__summary-chip-remove:focus-visible {
  outline: none;
  box-shadow: 0 0 0 var(--wp-admin-border-width-focus) var(--wp-admin-theme-color);
}

.dataviews-filters__search-widget-filter-combobox-list {
  max-height: 184px;
  padding: 4px;
  overflow: auto;
  border-top: 1px solid #e0e0e0;
}
.dataviews-filters__search-widget-filter-combobox-list .dataviews-filters__search-widget-filter-combobox-item-value [data-user-value] {
  font-weight: 600;
}

.dataviews-filters__search-widget-listbox {
  padding: 4px;
  overflow: auto;
}

.dataviews-filters__search-widget-listitem {
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 2px;
  box-sizing: border-box;
  padding: 8px 12px;
  cursor: default;
  margin-block-end: 2px;
}
.dataviews-filters__search-widget-listitem:last-child {
  margin-block-end: 0;
}
.dataviews-filters__search-widget-listitem:hover, .dataviews-filters__search-widget-listitem[data-active-item], .dataviews-filters__search-widget-listitem:focus {
  background-color: var(--wp-admin-theme-color);
  color: #fff;
}
.dataviews-filters__search-widget-listitem:hover .dataviews-filters__search-widget-listitem-check, .dataviews-filters__search-widget-listitem[data-active-item] .dataviews-filters__search-widget-listitem-check, .dataviews-filters__search-widget-listitem:focus .dataviews-filters__search-widget-listitem-check {
  fill: #fff;
}
.dataviews-filters__search-widget-listitem:hover .dataviews-filters__search-widget-listitem-description, .dataviews-filters__search-widget-listitem[data-active-item] .dataviews-filters__search-widget-listitem-description, .dataviews-filters__search-widget-listitem:focus .dataviews-filters__search-widget-listitem-description {
  color: #fff;
}
.dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-check {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}
.dataviews-filters__search-widget-listitem .dataviews-filters__search-widget-listitem-description {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  line-height: 16px;
  color: #757575;
}

.dataviews-filters__search-widget-filter-combobox__wrapper {
  position: relative;
  padding: 8px;
}
.dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  padding: 6px 8px;
  box-shadow: 0 0 0 transparent;
  border-radius: 2px;
  border: 1px solid #949494;
  /* Fonts smaller than 16px causes mobile safari to zoom. */
  font-size: 16px;
  /* Override core line-height. To be reviewed. */
  line-height: normal;
  display: block;
  padding: 0 32px 0 8px;
  background: #f0f0f0;
  border: none;
  width: 100%;
  height: 32px;
  margin-left: 0;
  margin-right: 0;
  /* Fonts smaller than 16px causes mobile safari to zoom. */
  font-size: 16px;
}
@media not (prefers-reduced-motion) {
  .dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input {
    transition: box-shadow 0.1s linear;
  }
}
@media (min-width: 600px) {
  .dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input {
    font-size: 13px;
    /* Override core line-height. To be reviewed. */
    line-height: normal;
  }
}
.dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input:focus {
  border-color: var(--wp-admin-theme-color);
  box-shadow: 0 0 0 0.5px var(--wp-admin-theme-color);
  outline: 2px solid transparent;
}
.dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input::-webkit-input-placeholder {
  color: rgba(30, 30, 30, 0.62);
}
.dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input::-moz-placeholder {
  opacity: 1;
  color: rgba(30, 30, 30, 0.62);
}
.dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input:-ms-input-placeholder {
  color: rgba(30, 30, 30, 0.62);
}
@media (min-width: 600px) {
  .dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input {
    font-size: 13px;
  }
}
.dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input:focus {
  background: #fff;
  box-shadow: inset 0 0 0 var(--wp-admin-border-width-focus) var(--wp-admin-theme-color);
}
.dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input::placeholder {
  color: #757575;
}
.dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input::-webkit-search-decoration, .dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input::-webkit-search-cancel-button, .dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input::-webkit-search-results-button, .dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__input::-webkit-search-results-decoration {
  -webkit-appearance: none;
}
.dataviews-filters__search-widget-filter-combobox__wrapper .dataviews-filters__search-widget-filter-combobox__icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
}

.dataviews-filters__container-visibility-toggle {
  position: relative;
  flex-shrink: 0;
}

.dataviews-filters-toggle__count {
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  background: var(--wp-admin-theme-color, #3858e9);
  height: 16px;
  min-width: 16px;
  line-height: 16px;
  padding: 0 4px;
  text-align: center;
  border-radius: 8px;
  font-size: 11px;
  outline: var(--wp-admin-border-width-focus) solid #fff;
  color: #fff;
  box-sizing: border-box;
}

.dataviews-search {
  width: fit-content;
}

.dataviews-footer {
  position: sticky;
  bottom: 0;
  left: 0;
  background-color: #fff;
  padding: 12px 48px;
  border-top: 1px solid #f0f0f0;
  flex-shrink: 0;
  z-index: 2;
}
@media not (prefers-reduced-motion) {
  .dataviews-footer {
    transition: padding ease-out 0.1s;
  }
}

@container (max-width: 430px) {
  .dataviews-footer {
    padding: 12px 24px;
  }
}
@container (max-width: 560px) {
  .dataviews-footer {
    flex-direction: column !important;
  }
  .dataviews-footer .dataviews-bulk-actions-footer__container {
    width: 100%;
  }
  .dataviews-footer .dataviews-bulk-actions-footer__item-count {
    flex-grow: 1;
  }
  .dataviews-footer .dataviews-pagination {
    width: 100%;
    justify-content: space-between;
  }
}
.dataviews-pagination__page-select {
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
}
@media (min-width: 600px) {
  .dataviews-pagination__page-select .components-select-control__input {
    font-size: 11px !important;
    font-weight: 500;
  }
}

.dataviews-action-modal {
  z-index: 1000001;
}

.dataviews-selection-checkbox {
  --checkbox-input-size: 24px;
  line-height: 0;
  flex-shrink: 0;
}
@media (min-width: 600px) {
  .dataviews-selection-checkbox {
    --checkbox-input-size: 16px;
  }
}
.dataviews-selection-checkbox .components-checkbox-control__input-container {
  margin: 0;
}

.dataviews-view-config {
  width: 320px;
  /* stylelint-disable-next-line property-no-unknown -- the linter needs to be updated to accepted the container-type property */
  container-type: inline-size;
  font-size: 13px;
  line-height: 1.4;
}

.dataviews-config__popover.is-expanded .dataviews-config__popover-content-wrapper {
  overflow-y: scroll;
  height: 100%;
}
.dataviews-config__popover.is-expanded .dataviews-config__popover-content-wrapper .dataviews-view-config {
  width: auto;
}

.dataviews-view-config__sort-direction .components-toggle-group-control-option-base {
  text-transform: uppercase;
}

.dataviews-settings-section__title.dataviews-settings-section__title {
  line-height: 24px;
  font-size: 15px;
}

.dataviews-settings-section__sidebar {
  grid-column: span 4;
}

.dataviews-settings-section__content,
.dataviews-settings-section__content > * {
  grid-column: span 8;
}

.dataviews-settings-section__content .is-divided-in-two {
  display: contents;
}
.dataviews-settings-section__content .is-divided-in-two > * {
  grid-column: span 4;
}

.dataviews-settings-section:has(.dataviews-settings-section__content:empty) {
  display: none;
}

@container (max-width: 500px) {
  .dataviews-settings-section.dataviews-settings-section {
    grid-template-columns: repeat(2, 1fr);
  }
  .dataviews-settings-section.dataviews-settings-section .dataviews-settings-section__sidebar {
    grid-column: span 2;
  }
  .dataviews-settings-section.dataviews-settings-section .dataviews-settings-section__content {
    grid-column: span 2;
  }
}
.dataviews-field-control__field {
  height: 32px;
}

.dataviews-field-control__actions {
  position: absolute;
  top: -9999em;
}

.dataviews-field-control__actions.dataviews-field-control__actions {
  gap: 4px;
}

.dataviews-field-control__field:hover .dataviews-field-control__actions,
.dataviews-field-control__field:focus-within .dataviews-field-control__actions,
.dataviews-field-control__field.is-interacting .dataviews-field-control__actions {
  position: unset;
  top: unset;
}

.dataviews-field-control__icon {
  display: flex;
  width: 24px;
}

.dataviews-field-control__label-sub-label-container {
  flex-grow: 1;
}

.dataviews-field-control__label {
  display: block;
}

.dataviews-field-control__sub-label {
  margin-top: 8px;
  margin-bottom: 0;
  font-size: 11px;
  font-style: normal;
  color: #757575;
}

.dataviews-view-grid {
  margin-bottom: auto;
  grid-template-rows: max-content;
  padding: 0 48px 24px;
  container-type: inline-size;
}
@media not (prefers-reduced-motion) {
  .dataviews-view-grid {
    transition: padding ease-out 0.1s;
  }
}
.dataviews-view-grid .dataviews-view-grid__card {
  height: 100%;
  justify-content: flex-start;
  position: relative;
}
.dataviews-view-grid .dataviews-view-grid__card .dataviews-view-grid__title-actions {
  padding: 8px 0 4px;
}
.dataviews-view-grid .dataviews-view-grid__card .dataviews-view-grid__title-field {
  min-height: 24px;
  display: flex;
  align-items: center;
}
.dataviews-view-grid .dataviews-view-grid__card .dataviews-view-grid__title-field--clickable {
  width: fit-content;
}
.dataviews-view-grid .dataviews-view-grid__card.is-selected .dataviews-view-grid__fields .dataviews-view-grid__field .dataviews-view-grid__field-value {
  color: #1e1e1e;
}
.dataviews-view-grid .dataviews-view-grid__card.is-selected .dataviews-view-grid__media::after,
.dataviews-view-grid .dataviews-view-grid__card .dataviews-view-grid__media:focus::after {
  background-color: rgba(var(--wp-admin-theme-color--rgb), 0.08);
}
.dataviews-view-grid .dataviews-view-grid__card.is-selected .dataviews-view-grid__media::after {
  box-shadow: inset 0 0 0 1px var(--wp-admin-theme-color);
}
.dataviews-view-grid .dataviews-view-grid__card .dataviews-view-grid__media:focus::after {
  box-shadow: inset 0 0 0 var(--wp-admin-border-width-focus) var(--wp-admin-theme-color);
}
.dataviews-view-grid .dataviews-view-grid__media {
  width: 100%;
  min-height: 200px;
  aspect-ratio: 1/1;
  background-color: #f0f0f0;
  border-radius: 4px;
  position: relative;
}
.dataviews-view-grid .dataviews-view-grid__media img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.dataviews-view-grid .dataviews-view-grid__media::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  pointer-events: none;
}
.dataviews-view-grid .dataviews-view-grid__fields {
  position: relative;
  font-size: 12px;
  line-height: 16px;
}
.dataviews-view-grid .dataviews-view-grid__fields:not(:empty) {
  padding: 0 0 12px;
}
.dataviews-view-grid .dataviews-view-grid__fields .dataviews-view-grid__field-value:not(:empty) {
  min-height: 24px;
  line-height: 20px;
  padding-top: 2px;
}
.dataviews-view-grid .dataviews-view-grid__fields .dataviews-view-grid__field {
  min-height: 24px;
  align-items: center;
}
.dataviews-view-grid .dataviews-view-grid__fields .dataviews-view-grid__field .dataviews-view-grid__field-name {
  width: 35%;
  color: #757575;
}
.dataviews-view-grid .dataviews-view-grid__fields .dataviews-view-grid__field .dataviews-view-grid__field-value {
  width: 65%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.dataviews-view-grid .dataviews-view-grid__fields .dataviews-view-grid__field:not(:has(.dataviews-view-grid__field-value:not(:empty))) {
  display: none;
}
.dataviews-view-grid .dataviews-view-grid__badge-fields:not(:empty) {
  padding-bottom: 12px;
}

.dataviews-view-grid.dataviews-view-grid {
  /**
   * Breakpoints were adjusted from media queries breakpoints to account for
   * the sidebar width. This was done to match the existing styles we had.
   */
}
@container (max-width: 480px) {
  .dataviews-view-grid.dataviews-view-grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding-left: 24px;
    padding-right: 24px;
  }
}
@container (min-width: 480px) {
  .dataviews-view-grid.dataviews-view-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@container (min-width: 780px) {
  .dataviews-view-grid.dataviews-view-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
@container (min-width: 1140px) {
  .dataviews-view-grid.dataviews-view-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
@container (min-width: 1520px) {
  .dataviews-view-grid.dataviews-view-grid {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}

.dataviews-view-grid__field-value:empty,
.dataviews-view-grid__field:empty {
  display: none;
}

.dataviews-view-grid__card .dataviews-selection-checkbox {
  position: absolute;
  top: -9999em;
  left: 8px;
  z-index: 1;
}

.dataviews-view-grid__card:hover .dataviews-selection-checkbox,
.dataviews-view-grid__card:focus-within .dataviews-selection-checkbox,
.dataviews-view-grid__card.is-selected .dataviews-selection-checkbox {
  top: 8px;
}

.dataviews-view-grid__media--clickable {
  cursor: pointer;
}

div.dataviews-view-list {
  list-style-type: none;
}

.dataviews-view-list {
  margin: 0 0 auto;
}
.dataviews-view-list div[role=row] {
  margin: 0;
  border-top: 1px solid #f0f0f0;
}
.dataviews-view-list div[role=row] .dataviews-view-list__item-wrapper {
  position: relative;
  padding: 16px 24px;
  box-sizing: border-box;
}
.dataviews-view-list div[role=row] .dataviews-view-list__item-actions {
  flex: 0;
  overflow: hidden;
}
.dataviews-view-list div[role=row] .dataviews-view-list__item-actions > div {
  height: 24px;
}
.dataviews-view-list div[role=row] .dataviews-view-list__item-actions .components-button {
  position: relative;
  z-index: 1;
  opacity: 0;
}
.dataviews-view-list div[role=row]:where(.is-selected, .is-hovered, :focus-within) .dataviews-view-list__item-actions {
  flex-basis: min-content;
  overflow: unset;
  padding-inline-end: 4px;
}
.dataviews-view-list div[role=row]:where(.is-selected, .is-hovered, :focus-within) .dataviews-view-list__item-actions .components-button {
  opacity: 1;
}
.dataviews-view-list div[role=row].is-selected.is-selected {
  border-top: 1px solid rgba(var(--wp-admin-theme-color--rgb), 0.12);
}
.dataviews-view-list div[role=row].is-selected.is-selected + div[role=row] {
  border-top: 1px solid rgba(var(--wp-admin-theme-color--rgb), 0.12);
}
.dataviews-view-list div[role=row]:not(.is-selected) .dataviews-view-list__title-field {
  color: #1e1e1e;
}
.dataviews-view-list div[role=row]:not(.is-selected):hover, .dataviews-view-list div[role=row]:not(.is-selected).is-hovered, .dataviews-view-list div[role=row]:not(.is-selected):focus-within {
  color: var(--wp-admin-theme-color);
  background-color: #f8f8f8;
}
.dataviews-view-list div[role=row]:not(.is-selected):hover .dataviews-view-list__title-field,
.dataviews-view-list div[role=row]:not(.is-selected):hover .dataviews-view-list__fields, .dataviews-view-list div[role=row]:not(.is-selected).is-hovered .dataviews-view-list__title-field,
.dataviews-view-list div[role=row]:not(.is-selected).is-hovered .dataviews-view-list__fields, .dataviews-view-list div[role=row]:not(.is-selected):focus-within .dataviews-view-list__title-field,
.dataviews-view-list div[role=row]:not(.is-selected):focus-within .dataviews-view-list__fields {
  color: var(--wp-admin-theme-color);
}
.dataviews-view-list div[role=row].is-selected .dataviews-view-list__item-wrapper,
.dataviews-view-list div[role=row].is-selected:focus-within .dataviews-view-list__item-wrapper {
  background-color: rgba(var(--wp-admin-theme-color--rgb), 0.04);
  color: #1e1e1e;
}
.dataviews-view-list div[role=row].is-selected .dataviews-view-list__item-wrapper .dataviews-view-list__title-field,
.dataviews-view-list div[role=row].is-selected .dataviews-view-list__item-wrapper .dataviews-view-list__fields,
.dataviews-view-list div[role=row].is-selected:focus-within .dataviews-view-list__item-wrapper .dataviews-view-list__title-field,
.dataviews-view-list div[role=row].is-selected:focus-within .dataviews-view-list__item-wrapper .dataviews-view-list__fields {
  color: var(--wp-admin-theme-color);
}
.dataviews-view-list .dataviews-view-list__item {
  position: absolute;
  z-index: 1;
  inset: 0;
  scroll-margin: 8px 0;
  appearance: none;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
}
.dataviews-view-list .dataviews-view-list__item:focus-visible {
  outline: none;
}
.dataviews-view-list .dataviews-view-list__item:focus-visible::before {
  position: absolute;
  content: "";
  inset: var(--wp-admin-border-width-focus);
  box-shadow: inset 0 0 0 var(--wp-admin-border-width-focus) var(--wp-admin-theme-color);
  border-radius: 2px;
  outline: 2px solid transparent;
}
.dataviews-view-list .dataviews-view-list__title-field {
  flex: 1;
  min-height: 24px;
  line-height: 24px;
  overflow: hidden;
}
.dataviews-view-list .dataviews-view-list__title-field:has(a, button) {
  z-index: 1;
}
.dataviews-view-list .dataviews-view-list__media-wrapper {
  width: 52px;
  height: 52px;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
  background-color: #f0f0f0;
  border-radius: 4px;
}
.dataviews-view-list .dataviews-view-list__media-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.dataviews-view-list .dataviews-view-list__media-wrapper::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
.dataviews-view-list .dataviews-view-list__field-wrapper {
  min-height: 52px;
  flex-grow: 1;
}
.dataviews-view-list .dataviews-view-list__fields {
  color: #757575;
  display: flex;
  gap: 12px;
  row-gap: 4px;
  flex-wrap: wrap;
  font-size: 12px;
}
.dataviews-view-list .dataviews-view-list__fields:empty {
  display: none;
}
.dataviews-view-list .dataviews-view-list__fields .dataviews-view-list__field:has(.dataviews-view-list__field-value:empty) {
  display: none;
}
.dataviews-view-list .dataviews-view-list__fields .dataviews-view-list__field-value {
  min-height: 24px;
  line-height: 20px;
  display: flex;
  align-items: center;
}
.dataviews-view-list + .dataviews-pagination {
  justify-content: space-between;
}

.dataviews-view-table {
  width: 100%;
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse;
  position: relative;
  color: #757575;
  margin-bottom: auto;
}
.dataviews-view-table th {
  text-align: left;
  color: #1e1e1e;
  font-weight: normal;
  font-size: 13px;
}
.dataviews-view-table td,
.dataviews-view-table th {
  padding: 12px;
  white-space: nowrap;
}
.dataviews-view-table td.dataviews-view-table__actions-column,
.dataviews-view-table th.dataviews-view-table__actions-column {
  text-align: right;
}
.dataviews-view-table td.dataviews-view-table__checkbox-column,
.dataviews-view-table th.dataviews-view-table__checkbox-column {
  padding-right: 0;
}
.dataviews-view-table tr {
  border-top: 1px solid #f0f0f0;
}
.dataviews-view-table tr .dataviews-view-table-header-button {
  gap: 4px;
}
.dataviews-view-table tr td:first-child,
.dataviews-view-table tr th:first-child {
  padding-left: 48px;
}
.dataviews-view-table tr td:first-child .dataviews-view-table-header-button,
.dataviews-view-table tr td:first-child .dataviews-view-table-header,
.dataviews-view-table tr th:first-child .dataviews-view-table-header-button,
.dataviews-view-table tr th:first-child .dataviews-view-table-header {
  margin-left: -8px;
}
.dataviews-view-table tr td:last-child,
.dataviews-view-table tr th:last-child {
  padding-right: 48px;
}
.dataviews-view-table tr:last-child {
  border-bottom: 0;
}
.dataviews-view-table tr.is-hovered {
  background-color: #f8f8f8;
}
.dataviews-view-table tr .components-checkbox-control__input.components-checkbox-control__input {
  opacity: 0;
}
.dataviews-view-table tr .components-checkbox-control__input.components-checkbox-control__input:checked, .dataviews-view-table tr .components-checkbox-control__input.components-checkbox-control__input:indeterminate, .dataviews-view-table tr .components-checkbox-control__input.components-checkbox-control__input:focus {
  opacity: 1;
}
.dataviews-view-table tr .dataviews-item-actions .components-button:not(.dataviews-all-actions-button) {
  opacity: 0;
}
.dataviews-view-table tr:focus-within .components-checkbox-control__input,
.dataviews-view-table tr:focus-within .dataviews-item-actions .components-button:not(.dataviews-all-actions-button), .dataviews-view-table tr.is-hovered .components-checkbox-control__input,
.dataviews-view-table tr.is-hovered .dataviews-item-actions .components-button:not(.dataviews-all-actions-button), .dataviews-view-table tr:hover .components-checkbox-control__input,
.dataviews-view-table tr:hover .dataviews-item-actions .components-button:not(.dataviews-all-actions-button) {
  opacity: 1;
}
@media (hover: none) {
  .dataviews-view-table tr .components-checkbox-control__input.components-checkbox-control__input,
.dataviews-view-table tr .dataviews-item-actions .components-button:not(.dataviews-all-actions-button) {
    opacity: 1;
  }
}
.dataviews-view-table tr.is-selected {
  background-color: rgba(var(--wp-admin-theme-color--rgb), 0.04);
  color: #757575;
}
.dataviews-view-table tr.is-selected, .dataviews-view-table tr.is-selected + tr {
  border-top: 1px solid rgba(var(--wp-admin-theme-color--rgb), 0.12);
}
.dataviews-view-table tr.is-selected:hover {
  background-color: rgba(var(--wp-admin-theme-color--rgb), 0.08);
}
.dataviews-view-table thead {
  position: sticky;
  inset-block-start: 0;
  z-index: 1;
}
.dataviews-view-table thead tr {
  border: 0;
}
.dataviews-view-table thead th {
  background-color: #fff;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  font-size: 11px;
  text-transform: uppercase;
  font-weight: 500;
}
.dataviews-view-table thead th:has(.dataviews-view-table-header-button):not(:first-child) {
  padding-left: 4px;
}
.dataviews-view-table tbody td {
  vertical-align: top;
}
.dataviews-view-table tbody .dataviews-view-table__cell-content-wrapper {
  min-height: 32px;
  display: flex;
  align-items: center;
}
.dataviews-view-table tbody .components-v-stack > .dataviews-view-table__cell-content-wrapper:not(:first-child) {
  min-height: 0;
}
.dataviews-view-table .dataviews-view-table-header-button {
  padding: 4px 8px;
  font-size: 11px;
  text-transform: uppercase;
  font-weight: 500;
}
.dataviews-view-table .dataviews-view-table-header-button:not(:hover) {
  color: #1e1e1e;
}
.dataviews-view-table .dataviews-view-table-header-button span {
  speak: none;
}
.dataviews-view-table .dataviews-view-table-header-button span:empty {
  display: none;
}
.dataviews-view-table .dataviews-view-table-header {
  padding-left: 4px;
}
.dataviews-view-table .dataviews-view-table__actions-column {
  width: 1%;
}
.dataviews-view-table:has(tr.is-selected) .components-checkbox-control__input {
  opacity: 1;
}
.dataviews-view-table.has-compact-density thead th:has(.dataviews-view-table-header-button):not(:first-child) {
  padding-left: 0;
}
.dataviews-view-table.has-compact-density td,
.dataviews-view-table.has-compact-density th {
  padding: 4px 8px;
}
.dataviews-view-table.has-comfortable-density td,
.dataviews-view-table.has-comfortable-density th {
  padding: 16px 12px;
}
.dataviews-view-table.has-compact-density td.dataviews-view-table__checkbox-column,
.dataviews-view-table.has-compact-density th.dataviews-view-table__checkbox-column, .dataviews-view-table.has-comfortable-density td.dataviews-view-table__checkbox-column,
.dataviews-view-table.has-comfortable-density th.dataviews-view-table__checkbox-column {
  padding-right: 0;
}

@container (max-width: 430px) {
  .dataviews-view-table tr td:first-child,
.dataviews-view-table tr th:first-child {
    padding-left: 24px;
  }
  .dataviews-view-table tr td:last-child,
.dataviews-view-table tr th:last-child {
    padding-right: 24px;
  }
}
.dataviews-view-table-selection-checkbox {
  --checkbox-input-size: 24px;
}
@media (min-width: 600px) {
  .dataviews-view-table-selection-checkbox {
    --checkbox-input-size: 16px;
  }
}

.dataviews-column-primary__media {
  max-width: 60px;
}

.dataviews-controls__datetime {
  border: none;
  padding: 0;
}

.dataforms-layouts-panel__field {
  width: 100%;
  min-height: 32px;
  justify-content: flex-start !important;
  align-items: flex-start !important;
}

.dataforms-layouts-panel__field-label {
  width: 38%;
  flex-shrink: 0;
  min-height: 32px;
  display: flex;
  align-items: center;
  padding: 6px 0;
  line-height: 20px;
  hyphens: auto;
}

.dataforms-layouts-panel__field-control {
  flex-grow: 1;
  min-height: 32px;
  display: flex;
  align-items: center;
}
.dataforms-layouts-panel__field-control .components-button {
  max-width: 100%;
  text-align: left;
  white-space: normal;
  text-wrap: balance;
  text-wrap: pretty;
  min-height: 32px;
}
.dataforms-layouts-panel__field-control .components-dropdown {
  max-width: 100%;
}

.dataforms-layouts-panel__field-dropdown .components-popover__content {
  min-width: 320px;
  padding: 16px;
}

.dataforms-layouts-panel__dropdown-header {
  margin-bottom: 16px;
}

.components-popover.components-dropdown__content.dataforms-layouts-panel__field-dropdown {
  z-index: 159990;
}

.dataforms-layouts-regular__field {
  width: 100%;
  min-height: 32px;
  justify-content: flex-start !important;
  align-items: flex-start !important;
}

.dataforms-layouts-regular__field .components-base-control__label {
  font-size: inherit;
  font-weight: normal;
  text-transform: none;
}

.dataforms-layouts-regular__field-label {
  width: 38%;
  flex-shrink: 0;
  min-height: 32px;
  display: flex;
  align-items: center;
  padding: 6px 0;
  line-height: 20px;
  hyphens: auto;
}

.dataforms-layouts-regular__field-control {
  flex-grow: 1;
  min-height: 32px;
  display: flex;
  align-items: center;
}`,""]);const c=n},"../../../node_modules/.pnpm/mousetrap@1.6.5/node_modules/mousetrap/mousetrap.js":(M,h,a)=>{var s;(function(o,g,d){if(!o)return;for(var n={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},c={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},p={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},w={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},C,j=1;j<20;++j)n[111+j]="f"+j;for(j=0;j<=9;++j)n[j+96]=j.toString();function m(e,t,f){if(e.addEventListener){e.addEventListener(t,f,!1);return}e.attachEvent("on"+t,f)}function y(e){if(e.type=="keypress"){var t=String.fromCharCode(e.which);return e.shiftKey||(t=t.toLowerCase()),t}return n[e.which]?n[e.which]:c[e.which]?c[e.which]:String.fromCharCode(e.which).toLowerCase()}function b(e,t){return e.sort().join(",")===t.sort().join(",")}function O(e){var t=[];return e.shiftKey&&t.push("shift"),e.altKey&&t.push("alt"),e.ctrlKey&&t.push("ctrl"),e.metaKey&&t.push("meta"),t}function K(e){if(e.preventDefault){e.preventDefault();return}e.returnValue=!1}function V(e){if(e.stopPropagation){e.stopPropagation();return}e.cancelBubble=!0}function H(e){return e=="shift"||e=="ctrl"||e=="alt"||e=="meta"}function l(){if(!C){C={};for(var e in n)e>95&&e<112||n.hasOwnProperty(e)&&(C[n[e]]=e)}return C}function D(e,t,f){return f||(f=l()[e]?"keydown":"keypress"),f=="keypress"&&t.length&&(f="keydown"),f}function i(e){return e==="+"?["+"]:(e=e.replace(/\+{2}/g,"+plus"),e.split("+"))}function r(e,t){var f,A,U,L=[];for(f=i(e),U=0;U<f.length;++U)A=f[U],w[A]&&(A=w[A]),t&&t!="keypress"&&p[A]&&(A=p[A],L.push("shift")),H(A)&&L.push(A);return t=D(A,L,t),{key:A,modifiers:L,action:t}}function k(e,t){return e===null||e===g?!1:e===t?!0:k(e.parentNode,t)}function u(e){var t=this;if(e=e||g,!(t instanceof u))return new u(e);t.target=e,t._callbacks={},t._directMap={};var f={},A,U=!1,L=!1,N=!1;function T(v){v=v||{};var E=!1,x;for(x in f){if(v[x]){E=!0;continue}f[x]=0}E||(N=!1)}function I(v,E,x,_,P,B){var R,S,Y=[],q=x.type;if(!t._callbacks[v])return[];for(q=="keyup"&&H(v)&&(E=[v]),R=0;R<t._callbacks[v].length;++R)if(S=t._callbacks[v][R],!(!_&&S.seq&&f[S.seq]!=S.level)&&q==S.action&&(q=="keypress"&&!x.metaKey&&!x.ctrlKey||b(E,S.modifiers))){var ee=!_&&S.combo==P,$=_&&S.seq==_&&S.level==B;(ee||$)&&t._callbacks[v].splice(R,1),Y.push(S)}return Y}function W(v,E,x,_){t.stopCallback(E,E.target||E.srcElement,x,_)||v(E,x)===!1&&(K(E),V(E))}t._handleKey=function(v,E,x){var _=I(v,E,x),P,B={},R=0,S=!1;for(P=0;P<_.length;++P)_[P].seq&&(R=Math.max(R,_[P].level));for(P=0;P<_.length;++P){if(_[P].seq){if(_[P].level!=R)continue;S=!0,B[_[P].seq]=1,W(_[P].callback,x,_[P].combo,_[P].seq);continue}S||W(_[P].callback,x,_[P].combo)}var Y=x.type=="keypress"&&L;x.type==N&&!H(v)&&!Y&&T(B),L=S&&x.type=="keydown"};function z(v){typeof v.which!="number"&&(v.which=v.keyCode);var E=y(v);if(E){if(v.type=="keyup"&&U===E){U=!1;return}t.handleKey(E,O(v),v)}}function G(){clearTimeout(A),A=setTimeout(T,1e3)}function X(v,E,x,_){f[v]=0;function P(q){return function(){N=q,++f[v],G()}}function B(q){W(x,q,v),_!=="keyup"&&(U=y(q)),setTimeout(T,10)}for(var R=0;R<E.length;++R){var S=R+1===E.length,Y=S?B:P(_||r(E[R+1]).action);J(E[R],Y,_,v,R)}}function J(v,E,x,_,P){t._directMap[v+":"+x]=E,v=v.replace(/\s+/g," ");var B=v.split(" "),R;if(B.length>1){X(v,B,E,x);return}R=r(v,x),t._callbacks[R.key]=t._callbacks[R.key]||[],I(R.key,R.modifiers,{type:R.action},_,v,P),t._callbacks[R.key][_?"unshift":"push"]({callback:E,modifiers:R.modifiers,action:R.action,seq:_,level:P,combo:v})}t._bindMultiple=function(v,E,x){for(var _=0;_<v.length;++_)J(v[_],E,x)},m(e,"keypress",z),m(e,"keydown",z),m(e,"keyup",z)}u.prototype.bind=function(e,t,f){var A=this;return e=e instanceof Array?e:[e],A._bindMultiple.call(A,e,t,f),A},u.prototype.unbind=function(e,t){var f=this;return f.bind.call(f,e,function(){},t)},u.prototype.trigger=function(e,t){var f=this;return f._directMap[e+":"+t]&&f._directMap[e+":"+t]({},e),f},u.prototype.reset=function(){var e=this;return e._callbacks={},e._directMap={},e},u.prototype.stopCallback=function(e,t){var f=this;if((" "+t.className+" ").indexOf(" mousetrap ")>-1||k(t,f.target))return!1;if("composedPath"in e&&typeof e.composedPath=="function"){var A=e.composedPath()[0];A!==e.target&&(t=A)}return t.tagName=="INPUT"||t.tagName=="SELECT"||t.tagName=="TEXTAREA"||t.isContentEditable},u.prototype.handleKey=function(){var e=this;return e._handleKey.apply(e,arguments)},u.addKeycodes=function(e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);C=null},u.init=function(){var e=u(g);for(var t in e)t.charAt(0)!=="_"&&(u[t]=function(f){return function(){return e[f].apply(e,arguments)}}(t))},u.init(),o.Mousetrap=u,M.exports&&(M.exports=u),s=function(){return u}.call(h,a,h,M),s!==d&&(M.exports=s)})(typeof window<"u"?window:null,typeof window<"u"?document:null)},"../../../node_modules/.pnpm/mousetrap@1.6.5/node_modules/mousetrap/plugins/global-bind/mousetrap-global-bind.js":()=>{(function(M){if(M){var h={},a=M.prototype.stopCallback;M.prototype.stopCallback=function(s,o,g,d){var n=this;return n.paused?!0:h[g]||h[d]?!1:a.call(n,s,o,g)},M.prototype.bindGlobal=function(s,o,g){var d=this;if(d.bind(s,o,g),s instanceof Array){for(var n=0;n<s.length;n++)h[s[n]]=!0;return}h[s]=!0},M.init()}})(typeof Mousetrap<"u"?Mousetrap:void 0)},"../../../node_modules/.pnpm/requestidlecallback@0.3.0/node_modules/requestidlecallback/index.js":(M,h,a)=>{var s,o,g;(function(d){o=[],s=d,g=typeof s=="function"?s.apply(h,o):s,g!==void 0&&(M.exports=g)})(function(){"use strict";var d,n,c,p,w=typeof window<"u"?window:typeof a.g!=null?a.g:this||{},C=w.cancelRequestAnimationFrame&&w.requestAnimationFrame||setTimeout,j=w.cancelRequestAnimationFrame||clearTimeout,m=[],y=0,b=!1,O=7,K=35,V=125,H=0,l=0,D=0,i={get didTimeout(){return!1},timeRemaining:function(){var T=O-(Date.now()-l);return T<0?0:T}},r=k(function(){O=22,V=66,K=0});function k(T){var I,W,z=99,G=function(){var X=Date.now()-W;X<z?I=setTimeout(G,z-X):(I=null,T())};return function(){W=Date.now(),I||(I=setTimeout(G,z))}}function u(){b&&(p&&j(p),c&&clearTimeout(c),b=!1)}function e(){V!=125&&(O=7,V=125,K=35,b&&(u(),A())),r()}function t(){p=null,c=setTimeout(U,0)}function f(){c=null,C(t)}function A(){b||(n=V-(Date.now()-l),d=Date.now(),b=!0,K&&n<K&&(n=K),n>9?c=setTimeout(f,n):(n=0,f()))}function U(){var T,I,W,z=O>9?9:1;if(l=Date.now(),b=!1,c=null,y>2||l-n-50<d)for(I=0,W=m.length;I<W&&i.timeRemaining()>z;I++)T=m.shift(),D++,T&&T(i);m.length?A():y=0}function L(T){return H++,m.push(T),A(),H}function N(T){var I=T-1-D;m[I]&&(m[I]=null)}if(!w.requestIdleCallback||!w.cancelIdleCallback)w.requestIdleCallback=L,w.cancelIdleCallback=N,w.document&&document.addEventListener&&(w.addEventListener("scroll",e,!0),w.addEventListener("resize",e),document.addEventListener("focus",e,!0),document.addEventListener("mouseover",e,!0),["click","keypress","touchstart","mousedown"].forEach(function(T){document.addEventListener(T,e,{capture:!0,passive:!0})}),w.MutationObserver&&new MutationObserver(e).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}));else try{w.requestIdleCallback(function(){},{timeout:0})}catch{(function(I){var W,z;if(w.requestIdleCallback=function(G,X){return X&&typeof X.timeout=="number"?I(G,X.timeout):I(G)},w.IdleCallbackDeadline&&(W=IdleCallbackDeadline.prototype)){if(z=Object.getOwnPropertyDescriptor(W,"timeRemaining"),!z||!z.configurable||!z.get)return;Object.defineProperty(W,"timeRemaining",{value:function(){return z.get.call(this)},enumerable:!0,configurable:!0})}})(w.requestIdleCallback)}return{request:L,cancel:N}})}}]);
