"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9159],{"../../../node_modules/.pnpm/@emotion+react@11.11.3_react@18.2.0/node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js":(M,p,e)=>{e.d(p,{C:()=>O,T:()=>s,_:()=>E,w:()=>t});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),m=e("../../../node_modules/.pnpm/@emotion+serialize@1.1.3/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),C=e("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),f=!0,w={}.hasOwnProperty,c=a.createContext(typeof HTMLElement!="undefined"?(0,i.Z)({key:"css"}):null),O=c.Provider,E=function(){return(0,a.useContext)(c)},t=function(n){return(0,a.forwardRef)(function(o,d){var P=(0,a.useContext)(c);return n(o,P,d)})};f||(t=function(n){return function(o){var d=(0,a.useContext)(c);return d===null?(d=(0,i.Z)({key:"css"}),a.createElement(c.Provider,{value:d},n(o,d))):n(o,d)}});var s=a.createContext({}),x=function(){return React.useContext(s)},g=function(n,o){if(typeof o=="function"){var d=o(n);return d}return _extends({},n,o)},l=null,h=function(n){var o=React.useContext(s);return n.theme!==o&&(o=l(o)(n.theme)),React.createElement(s.Provider,{value:o},n.children)};function r(u){var n=u.displayName||u.name||"Component",o=function(j,b){var I=React.useContext(s);return React.createElement(u,_extends({theme:I,ref:b},j))},d=React.forwardRef(o);return d.displayName="WithTheme("+n+")",hoistNonReactStatics(d,u)}var y=function(n){var o=n.split(".");return o[o.length-1]},T=function(n){var o=/^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(n);if(o||(o=/^([A-Za-z0-9$.]+)@/.exec(n),o))return y(o[1])},_=new Set(["renderWithHooks","processChild","finishClassComponent","renderToString"]),v=function(n){return n.replace(/\$/g,"-")},D=function(n){if(n)for(var o=n.split(`
`),d=0;d<o.length;d++){var P=T(o[d]);if(P){if(_.has(P))break;if(/^[A-Z]/.test(P))return v(P)}}},A="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",W="__EMOTION_LABEL_PLEASE_DO_NOT_USE__",L=function(n,o){var d={};for(var P in o)w.call(o,P)&&(d[P]=o[P]);if(d[A]=n,!1)var j;return d},S=function(n){var o=n.cache,d=n.serialized,P=n.isStringTag;return registerStyles(o,d,P),useInsertionEffectAlwaysWithSyncFallback(function(){return insertStyles(o,d,P)}),null},R=null,F=null},"../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js":(M,p,e)=>{e.d(p,{Z:()=>l});var a=e("../../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/extends.js"),i=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=e("../../../node_modules/.pnpm/@emotion+is-prop-valid@1.2.1/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js"),C=e("../../../node_modules/.pnpm/@emotion+react@11.11.3_react@18.2.0/node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),f=e("../../../node_modules/.pnpm/@emotion+utils@1.2.1/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),w=e("../../../node_modules/.pnpm/@emotion+serialize@1.1.3/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),c=e("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),O=m.Z,E=function(r){return r!=="theme"},t=function(r){return typeof r=="string"&&r.charCodeAt(0)>96?O:E},s=function(r,y,T){var _;if(y){var v=y.shouldForwardProp;_=r.__emotion_forwardProp&&v?function(D){return r.__emotion_forwardProp(D)&&v(D)}:v}return typeof _!="function"&&T&&(_=r.__emotion_forwardProp),_},x=`You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,g=function(r){var y=r.cache,T=r.serialized,_=r.isStringTag;return(0,f.hC)(y,T,_),(0,c.L)(function(){return(0,f.My)(y,T,_)}),null},l=function h(r,y){var T=r.__emotion_real===r,_=T&&r.__emotion_base||r,v,D;y!==void 0&&(v=y.label,D=y.target);var A=s(r,y,T),W=A||t(_),L=!W("as");return function(){var S=arguments,R=T&&r.__emotion_styles!==void 0?r.__emotion_styles.slice(0):[];if(v!==void 0&&R.push("label:"+v+";"),S[0]==null||S[0].raw===void 0)R.push.apply(R,S);else{R.push(S[0][0]);for(var F=S.length,u=1;u<F;u++)R.push(S[u],S[0][u])}var n=(0,C.w)(function(o,d,P){var j=L&&o.as||_,b="",I=[],N=o;if(o.theme==null){N={};for(var K in o)N[K]=o[K];N.theme=i.useContext(C.T)}typeof o.className=="string"?b=(0,f.fp)(d.registered,I,o.className):o.className!=null&&(b=o.className+" ");var z=(0,w.O)(R.concat(I),d.registered,N);b+=d.key+"-"+z.name,D!==void 0&&(b+=" "+D);var k=L&&A===void 0?t(j):W,U={};for(var B in o)L&&B==="as"||k(B)&&(U[B]=o[B]);return U.className=b,U.ref=P,i.createElement(i.Fragment,null,i.createElement(g,{cache:d,serialized:z,isStringTag:typeof j=="string"}),i.createElement(j,U))});return n.displayName=v!==void 0?v:"Styled("+(typeof _=="string"?_:_.displayName||_.name||"Component")+")",n.defaultProps=r.defaultProps,n.__emotion_real=n,n.__emotion_base=_,n.__emotion_styles=R,n.__emotion_forwardProp=A,Object.defineProperty(n,"toString",{value:function(){return"."+D}}),n.withComponent=function(o,d){return h(o,(0,a.Z)({},y,d,{shouldForwardProp:s(n,d,!0)})).apply(void 0,R)},n}}},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/constants.js":(M,p,e)=>{e.d(p,{_3:()=>i,cT:()=>a,rE:()=>m});const a="data-wp-component",i="data-wp-c16t",m="__contextSystemKey__"},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/context-connect.js":(M,p,e)=>{e.d(p,{H:()=>E,Iq:()=>f,Kc:()=>w});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+warning@2.51.0/node_modules/@wordpress/warning/build-module/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/constants.js"),C=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/get-styled-class-name-from-key.js");function f(t,s){return c(t,s,{forwardsRef:!0})}function w(t,s){return c(t,s)}function c(t,s,x){const g=x!=null&&x.forwardsRef?(0,a.forwardRef)(t):t;typeof s=="undefined"&&typeof SCRIPT_DEBUG!="undefined"&&SCRIPT_DEBUG===!0&&(0,i.Z)("contextConnect: Please provide a namespace");let l=g[m.rE]||[s];return Array.isArray(s)&&(l=[...l,...s]),typeof s=="string"&&(l=[...l,s]),Object.assign(g,{[m.rE]:[...new Set(l)],displayName:s,selector:`.${(0,C.l)(s)}`})}function O(t){if(!t)return[];let s=[];return t[m.rE]&&(s=t[m.rE]),t.type&&t.type[m.rE]&&(s=t.type[m.rE]),s}function E(t,s){return t?typeof s=="string"?O(t).includes(s):Array.isArray(s)?s.some(x=>O(t).includes(x)):!1:!1}},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/context-system-provider.js":(M,p,e)=>{e.d(p,{Cd:()=>E,G8:()=>g,eb:()=>t});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"),m=e.n(i),C=e("../../../node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/es6/index.js"),f=e.n(C),w=e("../../../node_modules/.pnpm/is-plain-object@5.0.0/node_modules/is-plain-object/dist/is-plain-object.mjs"),c=e("../../../node_modules/.pnpm/@wordpress+warning@2.51.0/node_modules/@wordpress/warning/build-module/index.js"),O=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-update-effect.js");const E=(0,a.createContext)({}),t=()=>(0,a.useContext)(E);function s({value:l}){const h=t(),r=(0,a.useRef)(l);return(0,O.Z)(()=>{f()(r.current,l)&&r.current!==l&&typeof SCRIPT_DEBUG!="undefined"&&SCRIPT_DEBUG===!0&&(0,c.Z)(`Please memoize your context: ${JSON.stringify(l)}`)},[l]),(0,a.useMemo)(()=>m()(h!=null?h:{},l!=null?l:{},{isMergeableObject:w.P}),[h,l])}const x=({children:l,value:h})=>{const r=s({value:h});return(0,a.createElement)(E.Provider,{value:r},l)},g=(0,a.memo)(x)},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/get-styled-class-name-from-key.js":(M,p,e)=>{e.d(p,{l:()=>C});var a=e("../../../node_modules/.pnpm/param-case@3.0.4/node_modules/param-case/dist.es2015/index.js"),i=e("../../../node_modules/.pnpm/memize@2.1.0/node_modules/memize/dist/index.js");function m(f){return`components-${(0,a.o)(f)}`}const C=(0,i.Z)(m)},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/use-context-system.js":(M,p,e)=>{e.d(p,{y:()=>O});var a=e("../../../node_modules/.pnpm/@wordpress+warning@2.51.0/node_modules/@wordpress/warning/build-module/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/context-system-provider.js"),m=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/constants.js");function C(E){return{[m.cT]:E}}function f(){return{[m._3]:!0}}var w=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/get-styled-class-name-from-key.js"),c=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js");function O(E,t){const s=(0,i.eb)();typeof t=="undefined"&&typeof SCRIPT_DEBUG!="undefined"&&SCRIPT_DEBUG===!0&&(0,a.Z)("useContextSystem: Please provide a namespace");const x=(s==null?void 0:s[t])||{},g={...f(),...C(t)},{_overrides:l,...h}=x,r=Object.entries(h).length?Object.assign({},h,E):E,T=(0,c.I)()((0,w.l)(t),E.className),_=typeof r.renderChildren=="function"?r.renderChildren(r):r.children;for(const v in r)g[v]=r[v];for(const v in l)g[v]=l[v];return _!==void 0&&(g.children=_),g.className=T,g}},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js":(M,p,e)=>{e.d(p,{I:()=>w});var a=e("../../../node_modules/.pnpm/@emotion+react@11.11.3_react@18.2.0/node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),i=e("../../../node_modules/.pnpm/@emotion+utils@1.2.1/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),m=e("../../../node_modules/.pnpm/@emotion+css@11.11.2/node_modules/@emotion/css/dist/emotion-css.esm.js"),C=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const f=c=>typeof c!="undefined"&&c!==null&&["name","styles"].every(O=>typeof c[O]!="undefined"),w=()=>{const c=(0,a._)();return(0,C.useCallback)((...E)=>{if(c===null)throw new Error("The `useCx` hook should be only used within a valid Emotion Cache Context");return(0,m.cx)(...E.map(t=>f(t)?((0,i.My)(c,t,!1),`${c.key}-${t.name}`):t))},[c])}},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-update-effect.js":(M,p,e)=>{e.d(p,{Z:()=>m});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function i(C,f){const w=(0,a.useRef)(!1);(0,a.useEffect)(()=>{if(w.current)return C();w.current=!0},f)}const m=i},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/view/component.js":(M,p,e)=>{e.d(p,{Z:()=>m});var a=e("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");const i=(0,a.Z)("div",{target:"e19lxcc00"})("");i.selector=".components-view",i.displayName="View";const m=i}}]);})();
