"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[5102],{"../../../node_modules/.pnpm/@emotion+react@11.13.0_@types+react@18.3.3_react@18.3.1/node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js":(j,u,e)=>{e.d(u,{C:()=>i,T:()=>o,_:()=>O,w:()=>y});var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=e("../../../node_modules/.pnpm/@emotion+cache@11.13.1/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),r=e("../../../node_modules/.pnpm/@emotion+serialize@1.3.0/node_modules/@emotion/serialize/dist/emotion-serialize.esm.js"),v=e("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.1.0_react@18.3.1/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),P=!1,m=s.createContext(typeof HTMLElement!="undefined"?(0,a.Z)({key:"css"}):null),i=m.Provider,O=function(){return(0,s.useContext)(m)},y=function(l){return(0,s.forwardRef)(function(d,_){var E=(0,s.useContext)(m);return l(d,E,_)})},o=s.createContext({}),n=function(){return React.useContext(o)},x=function(l,d){if(typeof d=="function"){var _=d(l);return _}return _extends({},l,d)},T=null,D=function(l){var d=React.useContext(o);return l.theme!==d&&(d=T(d)(l.theme)),React.createElement(o.Provider,{value:d},l.children)};function c(h){var l=h.displayName||h.name||"Component",d=function(I,b){var M=React.useContext(o);return React.createElement(h,_extends({theme:M,ref:b},I))},_=React.forwardRef(d);return _.displayName="WithTheme("+l+")",hoistNonReactStatics(_,h)}var t={}.hasOwnProperty,p="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",g=function(l,d){var _={};for(var E in d)t.call(d,E)&&(_[E]=d[E]);return _[p]=l,_},f=function(l){var d=l.cache,_=l.serialized,E=l.isStringTag;return registerStyles(d,_,E),useInsertionEffectAlwaysWithSyncFallback(function(){return insertStyles(d,_,E)}),null},C=null,R=null},"../../../node_modules/.pnpm/@emotion+styled@11.13.0_@emotion+react@11.13.0_@types+react@18.3.3_react@18.3.1__@types+react@18.3.3_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js":(j,u,e)=>{e.d(u,{Z:()=>D});var s=e("../../../node_modules/.pnpm/@babel+runtime@7.24.7/node_modules/@babel/runtime/helpers/esm/extends.js"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/@emotion+is-prop-valid@1.3.0/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js"),v=e("../../../node_modules/.pnpm/@emotion+react@11.13.0_@types+react@18.3.3_react@18.3.1/node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js"),P=e("../../../node_modules/.pnpm/@emotion+utils@1.4.0/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),m=e("../../../node_modules/.pnpm/@emotion+serialize@1.3.0/node_modules/@emotion/serialize/dist/emotion-serialize.esm.js"),i=e("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.1.0_react@18.3.1/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),O=r.Z,y=function(t){return t!=="theme"},o=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?O:y},n=function(t,p,g){var f;if(p){var C=p.shouldForwardProp;f=t.__emotion_forwardProp&&C?function(R){return t.__emotion_forwardProp(R)&&C(R)}:C}return typeof f!="function"&&g&&(f=t.__emotion_forwardProp),f},x=!1,T=function(t){var p=t.cache,g=t.serialized,f=t.isStringTag;return(0,P.hC)(p,g,f),(0,i.L)(function(){return(0,P.My)(p,g,f)}),null},D=function c(t,p){var g=t.__emotion_real===t,f=g&&t.__emotion_base||t,C,R;p!==void 0&&(C=p.label,R=p.target);var h=n(t,p,g),l=h||o(f),d=!l("as");return function(){var _=arguments,E=g&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(C!==void 0&&E.push("label:"+C+";"),_[0]==null||_[0].raw===void 0)E.push.apply(E,_);else{E.push(_[0][0]);for(var I=_.length,b=1;b<I;b++)E.push(_[b],_[0][b])}var M=(0,v.w)(function(w,A,L){var B=d&&w.as||f,N="",K=[],S=w;if(w.theme==null){S={};for(var z in w)S[z]=w[z];S.theme=a.useContext(v.T)}typeof w.className=="string"?N=(0,P.fp)(A.registered,K,w.className):w.className!=null&&(N=w.className+" ");var F=(0,m.O)(E.concat(K),A.registered,S);N+=A.key+"-"+F.name,R!==void 0&&(N+=" "+R);var Z=d&&h===void 0?o(B):l,W={};for(var U in w)d&&U==="as"||Z(U)&&(W[U]=w[U]);return W.className=N,L&&(W.ref=L),a.createElement(a.Fragment,null,a.createElement(T,{cache:A,serialized:F,isStringTag:typeof B=="string"}),a.createElement(B,W))});return M.displayName=C!==void 0?C:"Styled("+(typeof f=="string"?f:f.displayName||f.name||"Component")+")",M.defaultProps=t.defaultProps,M.__emotion_real=M,M.__emotion_base=f,M.__emotion_styles=E,M.__emotion_forwardProp=h,Object.defineProperty(M,"toString",{value:function(){return R===void 0&&x?"NO_COMPONENT_SELECTOR":"."+R}}),M.withComponent=function(w,A){return c(w,(0,s.Z)({},p,A,{shouldForwardProp:n(M,A,!0)})).apply(void 0,E)},M}}},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/constants.js":(j,u,e)=>{e.d(u,{_3:()=>a,cT:()=>s,rE:()=>r});const s="data-wp-component",a="data-wp-c16t",r="__contextSystemKey__"},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js":(j,u,e)=>{e.d(u,{H:()=>y,Iq:()=>P,Kc:()=>m});var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+warning@3.5.0/node_modules/@wordpress/warning/build-module/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/constants.js"),v=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/get-styled-class-name-from-key.js");function P(o,n){return i(o,n,{forwardsRef:!0})}function m(o,n){return i(o,n)}function i(o,n,x){const T=x!=null&&x.forwardsRef?(0,s.forwardRef)(o):o;typeof n=="undefined"&&globalThis.SCRIPT_DEBUG===!0&&(0,a.Z)("contextConnect: Please provide a namespace");let D=T[r.rE]||[n];return Array.isArray(n)&&(D=[...D,...n]),typeof n=="string"&&(D=[...D,n]),Object.assign(T,{[r.rE]:[...new Set(D)],displayName:n,selector:`.${(0,v.l)(n)}`})}function O(o){if(!o)return[];let n=[];return o[r.rE]&&(n=o[r.rE]),o.type&&o.type[r.rE]&&(n=o.type[r.rE]),n}function y(o,n){return o?typeof n=="string"?O(o).includes(n):Array.isArray(n)?n.some(x=>O(o).includes(x)):!1:!1}},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-system-provider.js":(j,u,e)=>{e.d(u,{Cd:()=>o,G8:()=>D,eb:()=>n});var s=e("../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"),a=e.n(s),r=e("../../../node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/es6/index.js"),v=e.n(r),P=e("../../../node_modules/.pnpm/is-plain-object@5.0.0/node_modules/is-plain-object/dist/is-plain-object.mjs"),m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+warning@3.5.0/node_modules/@wordpress/warning/build-module/index.js"),O=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/hooks/use-update-effect.js"),y=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const o=(0,m.createContext)({}),n=()=>(0,m.useContext)(o);function x({value:c}){const t=n(),p=(0,m.useRef)(c);return(0,O.Z)(()=>{v()(p.current,c)&&p.current!==c&&globalThis.SCRIPT_DEBUG===!0&&(0,i.Z)(`Please memoize your context: ${JSON.stringify(c)}`)},[c]),(0,m.useMemo)(()=>a()(t!=null?t:{},c!=null?c:{},{isMergeableObject:P.P}),[t,c])}const T=({children:c,value:t})=>{const p=x({value:t});return(0,y.jsx)(o.Provider,{value:p,children:c})},D=(0,m.memo)(T)},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/get-styled-class-name-from-key.js":(j,u,e)=>{e.d(u,{l:()=>v});var s=e("../../../node_modules/.pnpm/param-case@3.0.4/node_modules/param-case/dist.es2015/index.js"),a=e("../../../node_modules/.pnpm/memize@2.1.0/node_modules/memize/dist/index.js");function r(P){return`components-${(0,s.o)(P)}`}const v=(0,a.Z)(r)},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/use-context-system.js":(j,u,e)=>{e.d(u,{y:()=>O});var s=e("../../../node_modules/.pnpm/@wordpress+warning@3.5.0/node_modules/@wordpress/warning/build-module/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-system-provider.js"),r=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/constants.js");function v(y){return{[r.cT]:y}}function P(){return{[r._3]:!0}}var m=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/get-styled-class-name-from-key.js"),i=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js");function O(y,o){const n=(0,a.eb)();typeof o=="undefined"&&globalThis.SCRIPT_DEBUG===!0&&(0,s.Z)("useContextSystem: Please provide a namespace");const x=(n==null?void 0:n[o])||{},T={...P(),...v(o)},{_overrides:D,...c}=x,t=Object.entries(c).length?Object.assign({},c,y):y,g=(0,i.I)()((0,m.l)(o),y.className),f=typeof t.renderChildren=="function"?t.renderChildren(t):t.children;for(const C in t)T[C]=t[C];for(const C in D)T[C]=D[C];return f!==void 0&&(T.children=f),T.className=g,T}},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js":(j,u,e)=>{e.d(u,{I:()=>m});var s=e("../../../node_modules/.pnpm/@emotion+react@11.13.0_@types+react@18.3.3_react@18.3.1/node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js"),a=e("../../../node_modules/.pnpm/@emotion+utils@1.4.0/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),r=e("../../../node_modules/.pnpm/@emotion+css@11.13.0/node_modules/@emotion/css/dist/emotion-css.esm.js"),v=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const P=i=>typeof i!="undefined"&&i!==null&&["name","styles"].every(O=>typeof i[O]!="undefined"),m=()=>{const i=(0,s._)();return(0,v.useCallback)((...y)=>{if(i===null)throw new Error("The `useCx` hook should be only used within a valid Emotion Cache Context");return(0,r.cx)(...y.map(o=>P(o)?((0,a.My)(i,o,!1),`${i.key}-${o.name}`):o))},[i])}},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/hooks/use-update-effect.js":(j,u,e)=>{e.d(u,{Z:()=>r});var s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function a(v,P){const m=(0,s.useRef)(!1);(0,s.useEffect)(()=>{if(m.current)return v();m.current=!0},P),(0,s.useEffect)(()=>()=>{m.current=!1},[])}const r=a},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/view/component.js":(j,u,e)=>{e.d(u,{Z:()=>i});var s=e("../../../node_modules/.pnpm/@emotion+styled@11.13.0_@emotion+react@11.13.0_@types+react@18.3.3_react@18.3.1__@types+react@18.3.3_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const v=(0,s.Z)("div",{target:"e19lxcc00"})("");function P({as:O,...y},o){return(0,r.jsx)(v,{as:O,ref:o,...y})}const i=Object.assign((0,a.forwardRef)(P),{selector:".components-view"})}}]);})();
