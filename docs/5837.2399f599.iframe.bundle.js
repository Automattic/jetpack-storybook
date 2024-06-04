"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5837],{"../../../node_modules/.pnpm/@wordpress+compose@7.0.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-constrained-tabbing/index.js":(O,f,o)=>{o.d(f,{Z:()=>t});var n=o("../../../node_modules/.pnpm/@wordpress+dom@4.0.0/node_modules/@wordpress/dom/build-module/index.js"),r=o("../../../node_modules/.pnpm/@wordpress+compose@7.0.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-ref-effect/index.js");function b(){return(0,r.Z)(s=>{function u(d){const{key:m,shiftKey:i,target:c}=d;if(m!=="Tab")return;const _=i?"findPrevious":"findNext",l=n.T_.tabbable[_](c)||null;if(c.contains(l)){d.preventDefault(),l==null||l.focus();return}if(s.contains(l))return;const T=i?"append":"prepend",{ownerDocument:D}=s,w=D.createElement("div");w.tabIndex=-1,s[T](w),w.addEventListener("blur",()=>s.removeChild(w)),w.focus()}return s.addEventListener("keydown",u),()=>{s.removeEventListener("keydown",u)}},[])}const t=b},"../../../node_modules/.pnpm/@wordpress+compose@7.0.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focus-on-mount/index.js":(O,f,o)=>{o.d(f,{Z:()=>t});var n=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=o("../../../node_modules/.pnpm/@wordpress+dom@4.0.0/node_modules/@wordpress/dom/build-module/index.js"),b=o("../../../node_modules/.pnpm/@wordpress+compose@7.0.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-ref-effect/index.js");function t(s="firstElement"){const u=(0,n.useRef)(s),d=i=>{i.focus({preventScroll:!0})},m=(0,n.useRef)();return(0,n.useEffect)(()=>{u.current=s},[s]),(0,b.Z)(i=>{var _;var c;if(!(!i||u.current===!1)&&!i.contains((c=(_=i.ownerDocument)==null?void 0:_.activeElement)!==null&&c!==void 0?c:null)){if(u.current==="firstElement"){m.current=setTimeout(()=>{const l=r.T_.tabbable.find(i)[0];l&&d(l)},0);return}return d(i),()=>{m.current&&clearTimeout(m.current)}}},[])}},"../../../node_modules/.pnpm/@wordpress+compose@7.0.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-focus-return/index.js":(O,f,o)=>{o.d(f,{Z:()=>t});var n=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let r=null;function b(s){const u=(0,n.useRef)(null),d=(0,n.useRef)(null),m=(0,n.useRef)(s);return(0,n.useEffect)(()=>{m.current=s},[s]),(0,n.useCallback)(i=>{var _,l,T,D;if(i){if(u.current=i,d.current)return;d.current=i.ownerDocument.activeElement}else if(d.current){const w=(l=u.current)==null?void 0:l.contains((_=u.current)==null?void 0:_.ownerDocument.activeElement);if((T=u.current)!=null&&T.isConnected&&!w){var c;(c=r)!==null&&c!==void 0||(r=d.current);return}m.current?m.current():(D=d.current.isConnected?d.current:r)==null||D.focus(),r=null}},[])}const t=b},"../../../node_modules/.pnpm/@wordpress+compose@7.0.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js":(O,f,o)=>{o.d(f,{Z:()=>b});var n=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function r(t,s){typeof t=="function"?t(s):t&&t.hasOwnProperty("current")&&(t.current=s)}function b(t){const s=(0,n.useRef)(),u=(0,n.useRef)(!1),d=(0,n.useRef)(!1),m=(0,n.useRef)([]),i=(0,n.useRef)(t);return i.current=t,(0,n.useLayoutEffect)(()=>{d.current===!1&&u.current===!0&&t.forEach((c,_)=>{const l=m.current[_];c!==l&&(r(l,null),r(c,s.current))}),m.current=t},t),(0,n.useLayoutEffect)(()=>{d.current=!1}),(0,n.useCallback)(c=>{r(s,c),d.current=!0,u.current=c!==null;const _=c?i.current:m.current;for(const l of _)r(l,c)},[])}},"../../../node_modules/.pnpm/@wordpress+compose@7.0.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-ref-effect/index.js":(O,f,o)=>{o.d(f,{Z:()=>r});var n=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function r(b,t){const s=(0,n.useRef)();return(0,n.useCallback)(u=>{u?s.current=b(u):s.current&&s.current()},t)}},"../../../node_modules/.pnpm/@wordpress+dom@4.0.0/node_modules/@wordpress/dom/build-module/index.js":(O,f,o)=>{o.d(f,{T_:()=>C});var n={};o.r(n),o.d(n,{find:()=>u});var r={};o.r(r),o.d(r,{find:()=>D,findNext:()=>v,findPrevious:()=>w,isTabbableIndex:()=>m});function b(e){return[e?'[tabindex]:not([tabindex^="-"])':"[tabindex]","a[href]","button:not([disabled])",'input:not([type="hidden"]):not([disabled])',"select:not([disabled])","textarea:not([disabled])",'iframe:not([tabindex^="-"])',"object","embed","area[href]","[contenteditable]:not([contenteditable=false])"].join(",")}function t(e){return e.offsetWidth>0||e.offsetHeight>0||e.getClientRects().length>0}function s(e){const a=e.closest("map[name]");if(!a)return!1;const p=e.ownerDocument.querySelector('img[usemap="#'+a.name+'"]');return!!p&&t(p)}function u(e,{sequential:a=!1}={}){const p=e.querySelectorAll(b(a));return Array.from(p).filter(E=>{if(!t(E))return!1;const{nodeName:R}=E;return R==="AREA"?s(E):!0})}function d(e){const a=e.getAttribute("tabindex");return a===null?0:parseInt(a,10)}function m(e){return d(e)!==-1}function i(){const e={};return function(p,E){const{nodeName:R,type:h,checked:j,name:x}=E;if(R!=="INPUT"||h!=="radio"||!x)return p.concat(E);const P=e.hasOwnProperty(x);if(!(j||!P))return p;if(P){const A=e[x];p=p.filter(I=>I!==A)}return e[x]=E,p.concat(E)}}function c(e,a){return{element:e,index:a}}function _(e){return e.element}function l(e,a){const p=d(e.element),E=d(a.element);return p===E?e.index-a.index:p-E}function T(e){return e.filter(m).map(c).sort(l).map(_).reduce(i(),[])}function D(e){return T(u(e))}function w(e){return T(u(e.ownerDocument.body)).reverse().find(a=>e.compareDocumentPosition(a)&e.DOCUMENT_POSITION_PRECEDING)}function v(e){return T(u(e.ownerDocument.body)).find(a=>e.compareDocumentPosition(a)&e.DOCUMENT_POSITION_FOLLOWING)}const C={focusable:n,tabbable:r}},"../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/close.js":(O,f,o)=>{o.d(f,{Z:()=>t});var n=o("../../../node_modules/.pnpm/@wordpress+primitives@4.0.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),r=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=(0,r.jsx)(n.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,r.jsx)(n.y$,{d:"M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"})})}}]);})();
