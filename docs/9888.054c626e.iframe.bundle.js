"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9888],{"../../../node_modules/.pnpm/@emotion+react@11.13.3_@types+react@18.3.3_react@18.3.1/node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js":(j,u,e)=>{e.d(u,{C:()=>i,T:()=>o,_:()=>O,w:()=>y});var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=e("../../../node_modules/.pnpm/@emotion+cache@11.13.1/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),r=e("../../../node_modules/.pnpm/@emotion+serialize@1.3.2/node_modules/@emotion/serialize/dist/emotion-serialize.esm.js"),v=e("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.1.0_react@18.3.1/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),P=!1,m=s.createContext(typeof HTMLElement!="undefined"?(0,a.A)({key:"css"}):null),i=m.Provider,O=function(){return(0,s.useContext)(m)},y=function(l){return(0,s.forwardRef)(function(d,_){var E=(0,s.useContext)(m);return l(d,E,_)})},o=s.createContext({}),n=function(){return React.useContext(o)},x=function(l,d){if(typeof d=="function"){var _=d(l);return _}return _extends({},l,d)},D=null,M=function(l){var d=React.useContext(o);return l.theme!==d&&(d=D(d)(l.theme)),React.createElement(o.Provider,{value:d},l.children)};function c(h){var l=h.displayName||h.name||"Component",d=function(S,N){var T=React.useContext(o);return React.createElement(h,_extends({theme:T,ref:N},S))},_=React.forwardRef(d);return _.displayName="WithTheme("+l+")",hoistNonReactStatics(_,h)}var t={}.hasOwnProperty,p="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",g=function(l,d){var _={};for(var E in d)t.call(d,E)&&(_[E]=d[E]);return _[p]=l,_},f=function(l){var d=l.cache,_=l.serialized,E=l.isStringTag;return registerStyles(d,_,E),useInsertionEffectAlwaysWithSyncFallback(function(){return insertStyles(d,_,E)}),null},C=null,A=null},"../../../node_modules/.pnpm/@emotion+styled@11.13.0_@emotion+react@11.13.3_@types+react@18.3.3_react@18.3.1__@types+react@18.3.3_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js":(j,u,e)=>{e.d(u,{A:()=>M});var s=e("../../../node_modules/.pnpm/@babel+runtime@7.24.7/node_modules/@babel/runtime/helpers/esm/extends.js"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@emotion+is-prop-valid@1.3.1/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js"),v=e("../../../node_modules/.pnpm/@emotion+react@11.13.3_@types+react@18.3.3_react@18.3.1/node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js"),P=e("../../../node_modules/.pnpm/@emotion+utils@1.4.1/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),m=e("../../../node_modules/.pnpm/@emotion+serialize@1.3.2/node_modules/@emotion/serialize/dist/emotion-serialize.esm.js"),i=e("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.1.0_react@18.3.1/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),O=r.A,y=function(t){return t!=="theme"},o=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?O:y},n=function(t,p,g){var f;if(p){var C=p.shouldForwardProp;f=t.__emotion_forwardProp&&C?function(A){return t.__emotion_forwardProp(A)&&C(A)}:C}return typeof f!="function"&&g&&(f=t.__emotion_forwardProp),f},x=!1,D=function(t){var p=t.cache,g=t.serialized,f=t.isStringTag;return(0,P.SF)(p,g,f),(0,i.s)(function(){return(0,P.sk)(p,g,f)}),null},M=function c(t,p){var g=t.__emotion_real===t,f=g&&t.__emotion_base||t,C,A;p!==void 0&&(C=p.label,A=p.target);var h=n(t,p,g),l=h||o(f),d=!l("as");return function(){var _=arguments,E=g&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(C!==void 0&&E.push("label:"+C+";"),_[0]==null||_[0].raw===void 0)E.push.apply(E,_);else{E.push(_[0][0]);for(var S=_.length,N=1;N<S;N++)E.push(_[N],_[0][N])}var T=(0,v.w)(function(w,R,K){var B=d&&w.as||f,b="",L=[],I=w;if(w.theme==null){I={};for(var z in w)I[z]=w[z];I.theme=a.useContext(v.T)}typeof w.className=="string"?b=(0,P.Rk)(R.registered,L,w.className):w.className!=null&&(b=w.className+" ");var F=(0,m.J)(E.concat(L),R.registered,I);b+=R.key+"-"+F.name,A!==void 0&&(b+=" "+A);var k=d&&h===void 0?o(B):l,W={};for(var U in w)d&&U==="as"||k(U)&&(W[U]=w[U]);return W.className=b,K&&(W.ref=K),a.createElement(a.Fragment,null,a.createElement(D,{cache:R,serialized:F,isStringTag:typeof B=="string"}),a.createElement(B,W))});return T.displayName=C!==void 0?C:"Styled("+(typeof f=="string"?f:f.displayName||f.name||"Component")+")",T.defaultProps=t.defaultProps,T.__emotion_real=T,T.__emotion_base=f,T.__emotion_styles=E,T.__emotion_forwardProp=h,Object.defineProperty(T,"toString",{value:function(){return A===void 0&&x?"NO_COMPONENT_SELECTOR":"."+A}}),T.withComponent=function(w,R){return c(w,(0,s.A)({},p,R,{shouldForwardProp:n(T,R,!0)})).apply(void 0,E)},T}}},"../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/constants.js":(j,u,e)=>{e.d(u,{Yr:()=>r,yG:()=>s,yy:()=>a});const s="data-wp-component",a="data-wp-c16t",r="__contextSystemKey__"},"../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js":(j,u,e)=>{e.d(u,{KZ:()=>P,SZ:()=>y,zS:()=>m});var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+warning@3.8.1/node_modules/@wordpress/warning/build-module/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/constants.js"),v=e("../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/get-styled-class-name-from-key.js");function P(o,n){return i(o,n,{forwardsRef:!0})}function m(o,n){return i(o,n)}function i(o,n,x){const D=x!=null&&x.forwardsRef?(0,s.forwardRef)(o):o;typeof n=="undefined"&&globalThis.SCRIPT_DEBUG===!0&&(0,a.A)("contextConnect: Please provide a namespace");let M=D[r.Yr]||[n];return Array.isArray(n)&&(M=[...M,...n]),typeof n=="string"&&(M=[...M,n]),Object.assign(D,{[r.Yr]:[...new Set(M)],displayName:n,selector:`.${(0,v.o)(n)}`})}function O(o){if(!o)return[];let n=[];return o[r.Yr]&&(n=o[r.Yr]),o.type&&o.type[r.Yr]&&(n=o.type[r.Yr]),n}function y(o,n){return o?typeof n=="string"?O(o).includes(n):Array.isArray(n)?n.some(x=>O(o).includes(x)):!1:!1}},"../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-system-provider.js":(j,u,e)=>{e.d(u,{aG:()=>o,c7:()=>M,rm:()=>n});var s=e("../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"),a=e.n(s),r=e("../../../node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/es6/index.js"),v=e.n(r),P=e("../../../node_modules/.pnpm/is-plain-object@5.0.0/node_modules/is-plain-object/dist/is-plain-object.mjs"),m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+warning@3.8.1/node_modules/@wordpress/warning/build-module/index.js"),O=e("../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/hooks/use-update-effect.js"),y=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,m.createContext)({}),n=()=>(0,m.useContext)(o);function x({value:c}){const t=n(),p=(0,m.useRef)(c);return(0,O.A)(()=>{v()(p.current,c)&&p.current!==c&&globalThis.SCRIPT_DEBUG===!0&&(0,i.A)(`Please memoize your context: ${JSON.stringify(c)}`)},[c]),(0,m.useMemo)(()=>a()(t!=null?t:{},c!=null?c:{},{isMergeableObject:P.Q}),[t,c])}const D=({children:c,value:t})=>{const p=x({value:t});return(0,y.jsx)(o.Provider,{value:p,children:c})},M=(0,m.memo)(D)},"../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/get-styled-class-name-from-key.js":(j,u,e)=>{e.d(u,{o:()=>v});var s=e("../../../node_modules/.pnpm/param-case@3.0.4/node_modules/param-case/dist.es2015/index.js"),a=e("../../../node_modules/.pnpm/memize@2.1.0/node_modules/memize/dist/index.js");function r(P){return`components-${(0,s.c)(P)}`}const v=(0,a.A)(r)},"../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/use-context-system.js":(j,u,e)=>{e.d(u,{A:()=>O});var s=e("../../../node_modules/.pnpm/@wordpress+warning@3.8.1/node_modules/@wordpress/warning/build-module/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-system-provider.js"),r=e("../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/constants.js");function v(y){return{[r.yG]:y}}function P(){return{[r.yy]:!0}}var m=e("../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/get-styled-class-name-from-key.js"),i=e("../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js");function O(y,o){const n=(0,a.rm)();typeof o=="undefined"&&globalThis.SCRIPT_DEBUG===!0&&(0,s.A)("useContextSystem: Please provide a namespace");const x=(n==null?void 0:n[o])||{},D={...P(),...v(o)},{_overrides:M,...c}=x,t=Object.entries(c).length?Object.assign({},c,y):y,g=(0,i.l)()((0,m.o)(o),y.className),f=typeof t.renderChildren=="function"?t.renderChildren(t):t.children;for(const C in t)D[C]=t[C];for(const C in M)D[C]=M[C];return f!==void 0&&(D.children=f),D.className=g,D}},"../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js":(j,u,e)=>{e.d(u,{l:()=>m});var s=e("../../../node_modules/.pnpm/@emotion+react@11.13.3_@types+react@18.3.3_react@18.3.1/node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js"),a=e("../../../node_modules/.pnpm/@emotion+utils@1.4.1/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),r=e("../../../node_modules/.pnpm/@emotion+css@11.13.4/node_modules/@emotion/css/dist/emotion-css.esm.js"),v=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const P=i=>typeof i!="undefined"&&i!==null&&["name","styles"].every(O=>typeof i[O]!="undefined"),m=()=>{const i=(0,s._)();return(0,v.useCallback)((...y)=>{if(i===null)throw new Error("The `useCx` hook should be only used within a valid Emotion Cache Context");return(0,r.cx)(...y.map(o=>P(o)?((0,a.sk)(i,o,!1),`${i.key}-${o.name}`):o))},[i])}},"../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/hooks/use-update-effect.js":(j,u,e)=>{e.d(u,{A:()=>r});var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function a(v,P){const m=(0,s.useRef)(!1);(0,s.useEffect)(()=>{if(m.current)return v();m.current=!0},P),(0,s.useEffect)(()=>()=>{m.current=!1},[])}const r=a},"../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/view/component.js":(j,u,e)=>{e.d(u,{A:()=>i});var s=e("../../../node_modules/.pnpm/@emotion+styled@11.13.0_@emotion+react@11.13.3_@types+react@18.3.3_react@18.3.1__@types+react@18.3.3_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const v=(0,s.A)("div",{target:"e19lxcc00"})("");function P({as:O,...y},o){return(0,r.jsx)(v,{as:O,ref:o,...y})}const i=Object.assign((0,a.forwardRef)(P),{selector:".components-view"})}}]);})();