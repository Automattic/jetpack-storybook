(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4325],{"../../../node_modules/.pnpm/@wordpress+data@10.5.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/async-mode-provider/context.js":(T,C,n)=>{"use strict";n.d(C,{ZP:()=>l,_y:()=>r});var _=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const r=(0,_.createContext)(!1),{Consumer:i,Provider:g}=r,s=null,l=g},"../../../node_modules/.pnpm/@wordpress+data@10.5.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/registry-provider/context.js":(T,C,n)=>{"use strict";n.d(C,{ZP:()=>E,_y:()=>i});var _=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=n("../../../node_modules/.pnpm/@wordpress+data@10.5.0_react@18.3.1/node_modules/@wordpress/data/build-module/default-registry.js");const i=(0,_.createContext)(r.Z),{Consumer:g,Provider:s}=i,l=null,E=s},"../../../node_modules/.pnpm/@wordpress+data@10.5.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/registry-provider/use-registry.js":(T,C,n)=>{"use strict";n.d(C,{Z:()=>i});var _=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=n("../../../node_modules/.pnpm/@wordpress+data@10.5.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/registry-provider/context.js");function i(){return(0,_.useContext)(r._y)}},"../../../node_modules/.pnpm/@wordpress+data@10.5.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/use-select/index.js":(T,C,n)=>{"use strict";n.d(C,{Z:()=>M});var _=n("../../../node_modules/.pnpm/@wordpress+priority-queue@3.5.0/node_modules/@wordpress/priority-queue/build-module/index.js"),r=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=n("../../../node_modules/.pnpm/@wordpress+is-shallow-equal@5.5.0/node_modules/@wordpress/is-shallow-equal/build-module/index.js"),g=n("../../../node_modules/.pnpm/@wordpress+data@10.5.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/registry-provider/use-registry.js"),s=n("../../../node_modules/.pnpm/@wordpress+data@10.5.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/async-mode-provider/context.js");function l(){return(0,r.useContext)(s._y)}const E=(0,_.j)();function u(e,c){const m=c?e.suspendSelect:e.select,f={};let S,v,h=!1,I,x,L;const O=new Map;function A(D){var R,k,y;var d;return(d=(y=(k=(R=e.stores[D])==null?void 0:R.store)==null?void 0:k.getState)==null?void 0:y.call(k))!==null&&d!==void 0?d:{}}const W=D=>{const d=[...D],R=new Set;function k(o){if(h)for(const a of d)O.get(a)!==A(a)&&(h=!1);O.clear();const t=()=>{h=!1,o()},w=()=>{I?E.add(f,t):t()},p=[];function P(a){p.push(e.subscribe(w,a))}for(const a of d)P(a);return R.add(P),()=>{R.delete(P);for(const a of p.values())a==null||a();E.cancel(f)}}function y(o){for(const t of o)if(!d.includes(t)){d.push(t);for(const w of R)w(t)}}return{subscribe:k,updateStores:y}};return(D,d)=>{function R(){if(h&&D===S)return v;const y={current:null},o=e.__unstableMarkListeningStores(()=>D(m,e),y);if(x)x.updateStores(y.current);else{for(const t of y.current)O.set(t,A(t));x=W(y.current)}(0,i.ZP)(v,o)||(v=o),S=D,h=!0}function k(){return R(),v}return I&&!d&&(h=!1,E.cancel(f)),R(),I=d,{subscribe:x.subscribe,getValue:k}}}function q(e){return(0,g.Z)().select(e)}function j(e,c,m){const f=(0,g.Z)(),S=l(),v=(0,r.useMemo)(()=>u(f,e),[f,e]),h=(0,r.useCallback)(c,m),{subscribe:I,getValue:x}=v(h,S),L=(0,r.useSyncExternalStore)(I,x,x);return(0,r.useDebugValue)(L),L}function M(e,c){const m=typeof e!="function",f=(0,r.useRef)(m);if(m!==f.current){const S=f.current?"static":"mapping",v=m?"static":"mapping";throw new Error(`Switching useSelect from ${S} to ${v} is not allowed`)}return m?q(e):j(!1,e,c)}function b(e,c){return j(!0,e,c)}},"../../../node_modules/.pnpm/@wordpress+priority-queue@3.5.0/node_modules/@wordpress/priority-queue/build-module/index.js":(T,C,n)=>{"use strict";n.d(C,{j:()=>g});var _=n("../../../node_modules/.pnpm/requestidlecallback@0.3.0/node_modules/requestidlecallback/index.js");function r(){return typeof window=="undefined"?s=>{setTimeout(()=>s(Date.now()),0)}:window.requestIdleCallback}const i=r(),g=()=>{const s=new Map;let l=!1;const E=b=>{for(const[e,c]of s)if(s.delete(e),c(),typeof b=="number"||b.timeRemaining()<=0)break;if(s.size===0){l=!1;return}i(E)};return{add:(b,e)=>{s.set(b,e),l||(l=!0,i(E))},flush:b=>{const e=s.get(b);return e===void 0?!1:(s.delete(b),e(),!0)},cancel:b=>s.delete(b),reset:()=>{s.clear(),l=!1}}}},"../../../node_modules/.pnpm/requestidlecallback@0.3.0/node_modules/requestidlecallback/index.js":(T,C,n)=>{var _,r,i;(function(g){r=[],_=g,i=typeof _=="function"?_.apply(C,r):_,i!==void 0&&(T.exports=i)})(function(){"use strict";var g,s,l,E,u=typeof window!="undefined"?window:typeof n.g!=null?n.g:this||{},q=u.cancelRequestAnimationFrame&&u.requestAnimationFrame||setTimeout,j=u.cancelRequestAnimationFrame||clearTimeout,M=[],b=0,e=!1,c=7,m=35,f=125,S=0,v=0,h=0,I={get didTimeout(){return!1},timeRemaining:function(){var o=c-(Date.now()-v);return o<0?0:o}},x=L(function(){c=22,f=66,m=0});function L(o){var t,w,p=99,P=function(){var a=Date.now()-w;a<p?t=setTimeout(P,p-a):(t=null,o())};return function(){w=Date.now(),t||(t=setTimeout(P,p))}}function O(){e&&(E&&j(E),l&&clearTimeout(l),e=!1)}function A(){f!=125&&(c=7,f=125,m=35,e&&(O(),d())),x()}function W(){E=null,l=setTimeout(R,0)}function D(){l=null,q(W)}function d(){e||(s=f-(Date.now()-v),g=Date.now(),e=!0,m&&s<m&&(s=m),s>9?l=setTimeout(D,s):(s=0,D()))}function R(){var o,t,w,p=c>9?9:1;if(v=Date.now(),e=!1,l=null,b>2||v-s-50<g)for(t=0,w=M.length;t<w&&I.timeRemaining()>p;t++)o=M.shift(),h++,o&&o(I);M.length?d():b=0}function k(o){return S++,M.push(o),d(),S}function y(o){var t=o-1-h;M[t]&&(M[t]=null)}if(!u.requestIdleCallback||!u.cancelIdleCallback)u.requestIdleCallback=k,u.cancelIdleCallback=y,u.document&&document.addEventListener&&(u.addEventListener("scroll",A,!0),u.addEventListener("resize",A),document.addEventListener("focus",A,!0),document.addEventListener("mouseover",A,!0),["click","keypress","touchstart","mousedown"].forEach(function(o){document.addEventListener(o,A,{capture:!0,passive:!0})}),u.MutationObserver&&new MutationObserver(A).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}));else try{u.requestIdleCallback(function(){},{timeout:0})}catch(o){(function(t){var w,p;if(u.requestIdleCallback=function(P,a){return a&&typeof a.timeout=="number"?t(P,a.timeout):t(P)},u.IdleCallbackDeadline&&(w=IdleCallbackDeadline.prototype)){if(p=Object.getOwnPropertyDescriptor(w,"timeRemaining"),!p||!p.configurable||!p.get)return;Object.defineProperty(w,"timeRemaining",{value:function(){return p.get.call(this)},enumerable:!0,configurable:!0})}})(u.requestIdleCallback)}return{request:k,cancel:y}})}}]);})();
