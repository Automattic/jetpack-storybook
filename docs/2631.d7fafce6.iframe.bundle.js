"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2631],{"../../../node_modules/.pnpm/@wordpress+components@28.6.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/style-provider/index.js":(g,d,s)=>{s.d(d,{A:()=>y,N:()=>v});var r=s("../../../node_modules/.pnpm/@emotion+react@11.13.0_@types+react@18.3.3_react@18.3.1/node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js"),o=s("../../../node_modules/.pnpm/@emotion+cache@11.13.1/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),e=s("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),n=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=new Set,l=new WeakMap,i=c=>{if(l.has(c))return l.get(c);let _=e.A().replace(/[0-9]/g,"");for(;t.has(_);)_=e.A().replace(/[0-9]/g,"");t.add(_);const E=(0,o.A)({container:c,key:_});return l.set(c,E),E};function v(c){const{children:_,document:E}=c;if(!E)return null;const A=i(E.head);return(0,n.jsx)(r.C,{value:A,children:_})}const y=v},"../../../node_modules/.pnpm/@wordpress+components@28.6.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/with-ignore-ime-events.js":(g,d,s)=>{s.d(d,{n:()=>r});function r(o){return e=>{const{isComposing:n}="nativeEvent"in e?e.nativeEvent:e;n||e.keyCode===229||o(e)}}},"../../../node_modules/.pnpm/@wordpress+dom@4.6.0/node_modules/@wordpress/dom/build-module/dom/get-computed-style.js":(g,d,s)=>{s.d(d,{A:()=>o});var r=s("../../../node_modules/.pnpm/@wordpress+dom@4.6.0/node_modules/@wordpress/dom/build-module/utils/assert-is-defined.js");function o(e){return(0,r.e)(e.ownerDocument.defaultView,"element.ownerDocument.defaultView"),e.ownerDocument.defaultView.getComputedStyle(e)}},"../../../node_modules/.pnpm/@wordpress+dom@4.6.0/node_modules/@wordpress/dom/build-module/dom/get-scroll-container.js":(g,d,s)=>{s.d(d,{A:()=>o});var r=s("../../../node_modules/.pnpm/@wordpress+dom@4.6.0/node_modules/@wordpress/dom/build-module/dom/get-computed-style.js");function o(e,n="vertical"){if(e){if((n==="vertical"||n==="all")&&e.scrollHeight>e.clientHeight){const{overflowY:t}=(0,r.A)(e);if(/(auto|scroll)/.test(t))return e}if((n==="horizontal"||n==="all")&&e.scrollWidth>e.clientWidth){const{overflowX:t}=(0,r.A)(e);if(/(auto|scroll)/.test(t))return e}return e.ownerDocument===e.parentNode?e:o(e.parentNode,n)}}},"../../../node_modules/.pnpm/@wordpress+dom@4.6.0/node_modules/@wordpress/dom/build-module/utils/assert-is-defined.js":(g,d,s)=>{s.d(d,{e:()=>r});function r(o,e){}},"../../../node_modules/.pnpm/@wordpress+element@6.6.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js":(g,d,s)=>{s.d(d,{A:()=>D});var r=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");let o,e,n,t;const l=/<(\/)?(\w+)\s*(\/)?>/g;function i(m,a,w,f,u){return{element:m,tokenStart:a,tokenLength:w,prevOffset:f,leadingTextStart:u,children:[]}}const v=(m,a)=>{if(o=m,e=0,n=[],t=[],l.lastIndex=0,!y(a))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are React Elements");do;while(c(a));return(0,r.createElement)(r.Fragment,null,...n)},y=m=>{const a=typeof m=="object",w=a&&Object.values(m);return a&&w.length&&w.every(f=>(0,r.isValidElement)(f))};function c(m){const a=_(),[w,f,u,p]=a,h=t.length,b=u>e?e:null;if(!m[f])return E(),!1;switch(w){case"no-more-tokens":if(h!==0){const{leadingTextStart:C,tokenStart:T}=t.pop();n.push(o.substr(C,T))}return E(),!1;case"self-closed":return h===0?(b!==null&&n.push(o.substr(b,u-b)),n.push(m[f]),e=u+p,!0):(A(i(m[f],u,p)),e=u+p,!0);case"opener":return t.push(i(m[f],u,p,u+p,b)),e=u+p,!0;case"closer":if(h===1)return x(u),e=u+p,!0;const O=t.pop(),P=o.substr(O.prevOffset,u-O.prevOffset);O.children.push(P),O.prevOffset=u+p;const j=i(O.element,O.tokenStart,O.tokenLength,u+p);return j.children=O.children,A(j),e=u+p,!0;default:return E(),!1}}function _(){const m=l.exec(o);if(m===null)return["no-more-tokens"];const a=m.index,[w,f,u,p]=m,h=w.length;return p?["self-closed",u,a,h]:f?["closer",u,a,h]:["opener",u,a,h]}function E(){const m=o.length-e;m!==0&&n.push(o.substr(e,m))}function A(m){const{element:a,tokenStart:w,tokenLength:f,prevOffset:u,children:p}=m,h=t[t.length-1],b=o.substr(h.prevOffset,w-h.prevOffset);b&&h.children.push(b),h.children.push((0,r.cloneElement)(a,null,...p)),h.prevOffset=u||w+f}function x(m){const{element:a,leadingTextStart:w,prevOffset:f,tokenStart:u,children:p}=t.pop(),h=m?o.substr(f,m-f):o.substr(f);h&&p.push(h),w!==null&&n.push(o.substr(w,u-w)),n.push((0,r.cloneElement)(a,null,...p))}const D=v},"../../../node_modules/.pnpm/@wordpress+icons@10.6.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(g,d,s)=>{s.d(d,{A:()=>e});var r=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function o({icon:n,size:t=24,...l},i){return(0,r.cloneElement)(n,{width:t,height:t,...l,ref:i})}const e=(0,r.forwardRef)(o)},"../../../node_modules/.pnpm/@wordpress+icons@10.6.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/chevron-right.js":(g,d,s)=>{s.d(d,{A:()=>n});var r=s("../../../node_modules/.pnpm/@wordpress+primitives@4.6.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=(0,o.jsx)(r.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(r.wA,{d:"M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.6.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/external.js":(g,d,s)=>{s.d(d,{A:()=>n});var r=s("../../../node_modules/.pnpm/@wordpress+primitives@4.6.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),o=s("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=(0,o.jsx)(r.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(r.wA,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"})})},"../../../node_modules/.pnpm/@wordpress+url@4.6.0/node_modules/@wordpress/url/build-module/add-query-args.js":(g,d,s)=>{s.d(d,{F:()=>e});var r=s("../../../node_modules/.pnpm/@wordpress+url@4.6.0/node_modules/@wordpress/url/build-module/get-query-args.js"),o=s("../../../node_modules/.pnpm/@wordpress+url@4.6.0/node_modules/@wordpress/url/build-module/build-query-string.js");function e(n="",t){if(!t||!Object.keys(t).length)return n;let l=n;const i=n.indexOf("?");return i!==-1&&(t=Object.assign((0,r.u)(n),t),l=l.substr(0,i)),l+"?"+(0,o.G)(t)}},"../../../node_modules/.pnpm/@wordpress+url@4.6.0/node_modules/@wordpress/url/build-module/build-query-string.js":(g,d,s)=>{s.d(d,{G:()=>r});function r(o){let e="";const n=Object.entries(o);let t;for(;t=n.shift();){let[l,i]=t;if(Array.isArray(i)||i&&i.constructor===Object){const y=Object.entries(i).reverse();for(const[c,_]of y)n.unshift([`${l}[${c}]`,_])}else i!==void 0&&(i===null&&(i=""),e+="&"+[l,i].map(encodeURIComponent).join("="))}return e.substr(1)}},"../../../node_modules/.pnpm/@wordpress+url@4.6.0/node_modules/@wordpress/url/build-module/get-query-args.js":(g,d,s)=>{s.d(d,{u:()=>n});function r(t){try{return decodeURIComponent(t)}catch(l){return t}}var o=s("../../../node_modules/.pnpm/@wordpress+url@4.6.0/node_modules/@wordpress/url/build-module/get-query-string.js");function e(t,l,i){const v=l.length,y=v-1;for(let c=0;c<v;c++){let _=l[c];!_&&Array.isArray(t)&&(_=t.length.toString()),_=["__proto__","constructor","prototype"].includes(_)?_.toUpperCase():_;const E=!isNaN(Number(l[c+1]));t[_]=c===y?i:t[_]||(E?[]:{}),Array.isArray(t[_])&&!E&&(t[_]={...t[_]}),t=t[_]}}function n(t){return((0,o.e)(t)||"").replace(/\+/g,"%20").split("&").reduce((l,i)=>{const[v,y=""]=i.split("=").filter(Boolean).map(r);if(v){const c=v.replace(/\]/g,"").split("[");e(l,c,y)}return l},Object.create(null))}},"../../../node_modules/.pnpm/@wordpress+url@4.6.0/node_modules/@wordpress/url/build-module/get-query-string.js":(g,d,s)=>{s.d(d,{e:()=>r});function r(o){let e;try{e=new URL(o,"http://example.com").search.substring(1)}catch(n){}if(e)return e}}}]);})();