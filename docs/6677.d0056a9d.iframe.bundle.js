(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6677],{"../../../node_modules/.pnpm/@wordpress+data@10.7.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/async-mode-provider/context.js":(P,C,n)=>{"use strict";n.d(C,{Ay:()=>l,ob:()=>r});var _=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const r=(0,_.createContext)(!1),{Consumer:i,Provider:g}=r,s=null,l=g},"../../../node_modules/.pnpm/@wordpress+data@10.7.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/registry-provider/context.js":(P,C,n)=>{"use strict";n.d(C,{Ay:()=>y,ob:()=>i});var _=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=n("../../../node_modules/.pnpm/@wordpress+data@10.7.0_react@18.3.1/node_modules/@wordpress/data/build-module/default-registry.js");const i=(0,_.createContext)(r.A),{Consumer:g,Provider:s}=i,l=null,y=s},"../../../node_modules/.pnpm/@wordpress+data@10.7.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/registry-provider/use-registry.js":(P,C,n)=>{"use strict";n.d(C,{A:()=>i});var _=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=n("../../../node_modules/.pnpm/@wordpress+data@10.7.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/registry-provider/context.js");function i(){return(0,_.useContext)(r.ob)}},"../../../node_modules/.pnpm/@wordpress+data@10.7.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/use-select/index.js":(P,C,n)=>{"use strict";n.d(C,{A:()=>D});var _=n("../../../node_modules/.pnpm/@wordpress+priority-queue@3.7.0/node_modules/@wordpress/priority-queue/build-module/index.js"),r=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=n("../../../node_modules/.pnpm/@wordpress+is-shallow-equal@5.7.0/node_modules/@wordpress/is-shallow-equal/build-module/index.js"),g=n("../../../node_modules/.pnpm/@wordpress+data@10.7.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/registry-provider/use-registry.js"),s=n("../../../node_modules/.pnpm/@wordpress+data@10.7.0_react@18.3.1/node_modules/@wordpress/data/build-module/components/async-mode-provider/context.js");function l(){return(0,r.useContext)(s.ob)}const y=(0,_.y)();function u(e,c){const m=c?e.suspendSelect:e.select,f={};let M,v,h=!1,T,S,L;const O=new Map;function x(k){var A,R,E;var d;return(d=(E=(R=(A=e.stores[k])==null?void 0:A.store)==null?void 0:R.getState)==null?void 0:E.call(R))!==null&&d!==void 0?d:{}}const W=k=>{const d=[...k],A=new Set;function R(o){if(h)for(const a of d)O.get(a)!==x(a)&&(h=!1);O.clear();const t=()=>{h=!1,o()},w=()=>{T?y.add(f,t):t()},p=[];function I(a){p.push(e.subscribe(w,a))}for(const a of d)I(a);return A.add(I),()=>{A.delete(I);for(const a of p.values())a==null||a();y.cancel(f)}}function E(o){for(const t of o)if(!d.includes(t)){d.push(t);for(const w of A)w(t)}}return{subscribe:R,updateStores:E}};return(k,d)=>{function A(){if(h&&k===M)return v;const E={current:null},o=e.__unstableMarkListeningStores(()=>k(m,e),E);if(S)S.updateStores(E.current);else{for(const t of E.current)O.set(t,x(t));S=W(E.current)}(0,i.Ay)(v,o)||(v=o),M=k,h=!0}function R(){return A(),v}return T&&!d&&(h=!1,y.cancel(f)),A(),T=d,{subscribe:S.subscribe,getValue:R}}}function q(e){return(0,g.A)().select(e)}function j(e,c,m){const f=(0,g.A)(),M=l(),v=(0,r.useMemo)(()=>u(f,e),[f,e]),h=(0,r.useCallback)(c,m),{subscribe:T,getValue:S}=v(h,M),L=(0,r.useSyncExternalStore)(T,S,S);return(0,r.useDebugValue)(L),L}function D(e,c){const m=typeof e!="function",f=(0,r.useRef)(m);if(m!==f.current){const M=f.current?"static":"mapping",v=m?"static":"mapping";throw new Error(`Switching useSelect from ${M} to ${v} is not allowed`)}return m?q(e):j(!1,e,c)}function b(e,c){return j(!0,e,c)}},"../../../node_modules/.pnpm/@wordpress+priority-queue@3.7.0/node_modules/@wordpress/priority-queue/build-module/index.js":(P,C,n)=>{"use strict";n.d(C,{y:()=>g});var _=n("../../../node_modules/.pnpm/requestidlecallback@0.3.0/node_modules/requestidlecallback/index.js");function r(){return typeof window=="undefined"?s=>{setTimeout(()=>s(Date.now()),0)}:window.requestIdleCallback}const i=r(),g=()=>{const s=new Map;let l=!1;const y=b=>{for(const[e,c]of s)if(s.delete(e),c(),typeof b=="number"||b.timeRemaining()<=0)break;if(s.size===0){l=!1;return}i(y)};return{add:(b,e)=>{s.set(b,e),l||(l=!0,i(y))},flush:b=>{const e=s.get(b);return e===void 0?!1:(s.delete(b),e(),!0)},cancel:b=>s.delete(b),reset:()=>{s.clear(),l=!1}}}},"../../../node_modules/.pnpm/requestidlecallback@0.3.0/node_modules/requestidlecallback/index.js":(P,C,n)=>{var _,r,i;(function(g){r=[],_=g,i=typeof _=="function"?_.apply(C,r):_,i!==void 0&&(P.exports=i)})(function(){"use strict";var g,s,l,y,u=typeof window!="undefined"?window:typeof n.g!=null?n.g:this||{},q=u.cancelRequestAnimationFrame&&u.requestAnimationFrame||setTimeout,j=u.cancelRequestAnimationFrame||clearTimeout,D=[],b=0,e=!1,c=7,m=35,f=125,M=0,v=0,h=0,T={get didTimeout(){return!1},timeRemaining:function(){var o=c-(Date.now()-v);return o<0?0:o}},S=L(function(){c=22,f=66,m=0});function L(o){var t,w,p=99,I=function(){var a=Date.now()-w;a<p?t=setTimeout(I,p-a):(t=null,o())};return function(){w=Date.now(),t||(t=setTimeout(I,p))}}function O(){e&&(y&&j(y),l&&clearTimeout(l),e=!1)}function x(){f!=125&&(c=7,f=125,m=35,e&&(O(),d())),S()}function W(){y=null,l=setTimeout(A,0)}function k(){l=null,q(W)}function d(){e||(s=f-(Date.now()-v),g=Date.now(),e=!0,m&&s<m&&(s=m),s>9?l=setTimeout(k,s):(s=0,k()))}function A(){var o,t,w,p=c>9?9:1;if(v=Date.now(),e=!1,l=null,b>2||v-s-50<g)for(t=0,w=D.length;t<w&&T.timeRemaining()>p;t++)o=D.shift(),h++,o&&o(T);D.length?d():b=0}function R(o){return M++,D.push(o),d(),M}function E(o){var t=o-1-h;D[t]&&(D[t]=null)}if(!u.requestIdleCallback||!u.cancelIdleCallback)u.requestIdleCallback=R,u.cancelIdleCallback=E,u.document&&document.addEventListener&&(u.addEventListener("scroll",x,!0),u.addEventListener("resize",x),document.addEventListener("focus",x,!0),document.addEventListener("mouseover",x,!0),["click","keypress","touchstart","mousedown"].forEach(function(o){document.addEventListener(o,x,{capture:!0,passive:!0})}),u.MutationObserver&&new MutationObserver(x).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}));else try{u.requestIdleCallback(function(){},{timeout:0})}catch(o){(function(t){var w,p;if(u.requestIdleCallback=function(I,a){return a&&typeof a.timeout=="number"?t(I,a.timeout):t(I)},u.IdleCallbackDeadline&&(w=IdleCallbackDeadline.prototype)){if(p=Object.getOwnPropertyDescriptor(w,"timeRemaining"),!p||!p.configurable||!p.get)return;Object.defineProperty(w,"timeRemaining",{value:function(){return p.get.call(this)},enumerable:!0,configurable:!0})}})(u.requestIdleCallback)}return{request:R,cancel:E}})}}]);})();