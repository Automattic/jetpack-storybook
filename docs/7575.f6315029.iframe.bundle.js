"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7575],{"../../../node_modules/.pnpm/@wordpress+compose@6.29.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-constrained-tabbing/index.js":(O,f,o)=>{o.d(f,{Z:()=>t});var n=o("../../../node_modules/.pnpm/@wordpress+dom@3.52.0/node_modules/@wordpress/dom/build-module/index.js"),r=o("../../../node_modules/.pnpm/@wordpress+compose@6.29.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-ref-effect/index.js");function b(){return(0,r.Z)(s=>{function u(d){const{key:c,shiftKey:a,target:i}=d;if(c!=="Tab")return;const _=a?"findPrevious":"findNext",m=n.T_.tabbable[_](i)||null;if(i.contains(m)){d.preventDefault(),m==null||m.focus();return}if(s.contains(m))return;const T=a?"append":"prepend",{ownerDocument:D}=s,w=D.createElement("div");w.tabIndex=-1,s[T](w),w.addEventListener("blur",()=>s.removeChild(w)),w.focus()}return s.addEventListener("keydown",u),()=>{s.removeEventListener("keydown",u)}},[])}const t=b},"../../../node_modules/.pnpm/@wordpress+compose@6.29.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-focus-on-mount/index.js":(O,f,o)=>{o.d(f,{Z:()=>b});var n=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=o("../../../node_modules/.pnpm/@wordpress+dom@3.52.0/node_modules/@wordpress/dom/build-module/index.js");function b(t="firstElement"){const s=(0,n.useRef)(t),u=c=>{c.focus({preventScroll:!0})},d=(0,n.useRef)();return(0,n.useEffect)(()=>{s.current=t},[t]),(0,n.useEffect)(()=>()=>{d.current&&clearTimeout(d.current)},[]),(0,n.useCallback)(c=>{var i;var a;if(!(!c||s.current===!1)&&!c.contains((a=(i=c.ownerDocument)==null?void 0:i.activeElement)!==null&&a!==void 0?a:null)){if(s.current==="firstElement"){d.current=setTimeout(()=>{const _=r.T_.tabbable.find(c)[0];_&&u(_)},0);return}u(c)}},[])}},"../../../node_modules/.pnpm/@wordpress+compose@6.29.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-focus-return/index.js":(O,f,o)=>{o.d(f,{Z:()=>t});var n=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let r=null;function b(s){const u=(0,n.useRef)(null),d=(0,n.useRef)(null),c=(0,n.useRef)(s);return(0,n.useEffect)(()=>{c.current=s},[s]),(0,n.useCallback)(a=>{var _,m,T,D;if(a){if(u.current=a,d.current)return;d.current=a.ownerDocument.activeElement}else if(d.current){const w=(m=u.current)==null?void 0:m.contains((_=u.current)==null?void 0:_.ownerDocument.activeElement);if((T=u.current)!=null&&T.isConnected&&!w){var i;(i=r)!==null&&i!==void 0||(r=d.current);return}c.current?c.current():(D=d.current.isConnected?d.current:r)==null||D.focus(),r=null}},[])}const t=b},"../../../node_modules/.pnpm/@wordpress+compose@6.29.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js":(O,f,o)=>{o.d(f,{Z:()=>b});var n=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function r(t,s){typeof t=="function"?t(s):t&&t.hasOwnProperty("current")&&(t.current=s)}function b(t){const s=(0,n.useRef)(),u=(0,n.useRef)(!1),d=(0,n.useRef)(!1),c=(0,n.useRef)([]),a=(0,n.useRef)(t);return a.current=t,(0,n.useLayoutEffect)(()=>{d.current===!1&&u.current===!0&&t.forEach((i,_)=>{const m=c.current[_];i!==m&&(r(m,null),r(i,s.current))}),c.current=t},t),(0,n.useLayoutEffect)(()=>{d.current=!1}),(0,n.useCallback)(i=>{r(s,i),d.current=!0,u.current=i!==null;const _=i?a.current:c.current;for(const m of _)r(m,i)},[])}},"../../../node_modules/.pnpm/@wordpress+compose@6.29.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-ref-effect/index.js":(O,f,o)=>{o.d(f,{Z:()=>r});var n=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function r(b,t){const s=(0,n.useRef)();return(0,n.useCallback)(u=>{u?s.current=b(u):s.current&&s.current()},t)}},"../../../node_modules/.pnpm/@wordpress+dom@3.52.0/node_modules/@wordpress/dom/build-module/index.js":(O,f,o)=>{o.d(f,{T_:()=>C});var n={};o.r(n),o.d(n,{find:()=>u});var r={};o.r(r),o.d(r,{find:()=>D,findNext:()=>v,findPrevious:()=>w,isTabbableIndex:()=>c});function b(e){return[e?'[tabindex]:not([tabindex^="-"])':"[tabindex]","a[href]","button:not([disabled])",'input:not([type="hidden"]):not([disabled])',"select:not([disabled])","textarea:not([disabled])",'iframe:not([tabindex^="-"])',"object","embed","area[href]","[contenteditable]:not([contenteditable=false])"].join(",")}function t(e){return e.offsetWidth>0||e.offsetHeight>0||e.getClientRects().length>0}function s(e){const l=e.closest("map[name]");if(!l)return!1;const p=e.ownerDocument.querySelector('img[usemap="#'+l.name+'"]');return!!p&&t(p)}function u(e,{sequential:l=!1}={}){const p=e.querySelectorAll(b(l));return Array.from(p).filter(E=>{if(!t(E))return!1;const{nodeName:P}=E;return P==="AREA"?s(E):!0})}function d(e){const l=e.getAttribute("tabindex");return l===null?0:parseInt(l,10)}function c(e){return d(e)!==-1}function a(){const e={};return function(p,E){const{nodeName:P,type:h,checked:j,name:R}=E;if(P!=="INPUT"||h!=="radio"||!R)return p.concat(E);const x=e.hasOwnProperty(R);if(!(j||!x))return p;if(x){const A=e[R];p=p.filter(I=>I!==A)}return e[R]=E,p.concat(E)}}function i(e,l){return{element:e,index:l}}function _(e){return e.element}function m(e,l){const p=d(e.element),E=d(l.element);return p===E?e.index-l.index:p-E}function T(e){return e.filter(c).map(i).sort(m).map(_).reduce(a(),[])}function D(e){return T(u(e))}function w(e){return T(u(e.ownerDocument.body)).reverse().find(l=>e.compareDocumentPosition(l)&e.DOCUMENT_POSITION_PRECEDING)}function v(e){return T(u(e.ownerDocument.body)).find(l=>e.compareDocumentPosition(l)&e.DOCUMENT_POSITION_FOLLOWING)}const C={focusable:n,tabbable:r}},"../../../node_modules/.pnpm/@wordpress+icons@9.43.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close.js":(O,f,o)=>{o.d(f,{Z:()=>t});var n=o("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=o("../../../node_modules/.pnpm/@wordpress+primitives@3.50.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const t=(0,n.createElement)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(r.y$,{d:"M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"}))}}]);})();