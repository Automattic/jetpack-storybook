"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1714],{"../../../node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.2.61_react@18.2.0/node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js":(M,p,e)=>{e.d(p,{C:()=>O,T:()=>s,_:()=>E,w:()=>n});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),m=e("../../../node_modules/.pnpm/@emotion+serialize@1.1.3/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),C=e("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),f=!0,w={}.hasOwnProperty,c=a.createContext(typeof HTMLElement!="undefined"?(0,i.Z)({key:"css"}):null),O=c.Provider,E=function(){return(0,a.useContext)(c)},n=function(t){return(0,a.forwardRef)(function(o,d){var P=(0,a.useContext)(c);return t(o,P,d)})};f||(n=function(t){return function(o){var d=(0,a.useContext)(c);return d===null?(d=(0,i.Z)({key:"css"}),a.createElement(c.Provider,{value:d},t(o,d))):t(o,d)}});var s=a.createContext({}),x=function(){return React.useContext(s)},g=function(t,o){if(typeof o=="function"){var d=o(t);return d}return _extends({},t,o)},l=null,y=function(t){var o=React.useContext(s);return t.theme!==o&&(o=l(o)(t.theme)),React.createElement(s.Provider,{value:o},t.children)};function r(_){var t=_.displayName||_.name||"Component",o=function(j,b){var I=React.useContext(s);return React.createElement(_,_extends({theme:I,ref:b},j))},d=React.forwardRef(o);return d.displayName="WithTheme("+t+")",hoistNonReactStatics(d,_)}var h=function(t){var o=t.split(".");return o[o.length-1]},T=function(t){var o=/^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(t);if(o||(o=/^([A-Za-z0-9$.]+)@/.exec(t),o))return h(o[1])},u=new Set(["renderWithHooks","processChild","finishClassComponent","renderToString"]),v=function(t){return t.replace(/\$/g,"-")},D=function(t){if(t)for(var o=t.split(`
`),d=0;d<o.length;d++){var P=T(o[d]);if(P){if(u.has(P))break;if(/^[A-Z]/.test(P))return v(P)}}},A="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",W="__EMOTION_LABEL_PLEASE_DO_NOT_USE__",L=function(t,o){var d={};for(var P in o)w.call(o,P)&&(d[P]=o[P]);if(d[A]=t,!1)var j;return d},S=function(t){var o=t.cache,d=t.serialized,P=t.isStringTag;return registerStyles(o,d,P),useInsertionEffectAlwaysWithSyncFallback(function(){return insertStyles(o,d,P)}),null},R=null,F=null},"../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_@types+react@18.2.61_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js":(M,p,e)=>{e.d(p,{Z:()=>l});var a=e("../../../node_modules/.pnpm/@babel+runtime@7.24.0/node_modules/@babel/runtime/helpers/esm/extends.js"),i=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=e("../../../node_modules/.pnpm/@emotion+is-prop-valid@1.2.1/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js"),C=e("../../../node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.2.61_react@18.2.0/node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),f=e("../../../node_modules/.pnpm/@emotion+utils@1.2.1/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),w=e("../../../node_modules/.pnpm/@emotion+serialize@1.1.3/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),c=e("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),O=m.Z,E=function(r){return r!=="theme"},n=function(r){return typeof r=="string"&&r.charCodeAt(0)>96?O:E},s=function(r,h,T){var u;if(h){var v=h.shouldForwardProp;u=r.__emotion_forwardProp&&v?function(D){return r.__emotion_forwardProp(D)&&v(D)}:v}return typeof u!="function"&&T&&(u=r.__emotion_forwardProp),u},x=`You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,g=function(r){var h=r.cache,T=r.serialized,u=r.isStringTag;return(0,f.hC)(h,T,u),(0,c.L)(function(){return(0,f.My)(h,T,u)}),null},l=function y(r,h){var T=r.__emotion_real===r,u=T&&r.__emotion_base||r,v,D;h!==void 0&&(v=h.label,D=h.target);var A=s(r,h,T),W=A||n(u),L=!W("as");return function(){var S=arguments,R=T&&r.__emotion_styles!==void 0?r.__emotion_styles.slice(0):[];if(v!==void 0&&R.push("label:"+v+";"),S[0]==null||S[0].raw===void 0)R.push.apply(R,S);else{R.push(S[0][0]);for(var F=S.length,_=1;_<F;_++)R.push(S[_],S[0][_])}var t=(0,C.w)(function(o,d,P){var j=L&&o.as||u,b="",I=[],N=o;if(o.theme==null){N={};for(var K in o)N[K]=o[K];N.theme=i.useContext(C.T)}typeof o.className=="string"?b=(0,f.fp)(d.registered,I,o.className):o.className!=null&&(b=o.className+" ");var z=(0,w.O)(R.concat(I),d.registered,N);b+=d.key+"-"+z.name,D!==void 0&&(b+=" "+D);var k=L&&A===void 0?n(j):W,U={};for(var B in o)L&&B==="as"||k(B)&&(U[B]=o[B]);return U.className=b,U.ref=P,i.createElement(i.Fragment,null,i.createElement(g,{cache:d,serialized:z,isStringTag:typeof j=="string"}),i.createElement(j,U))});return t.displayName=v!==void 0?v:"Styled("+(typeof u=="string"?u:u.displayName||u.name||"Component")+")",t.defaultProps=r.defaultProps,t.__emotion_real=t,t.__emotion_base=u,t.__emotion_styles=R,t.__emotion_forwardProp=A,Object.defineProperty(t,"toString",{value:function(){return"."+D}}),t.withComponent=function(o,d){return y(o,(0,a.Z)({},h,d,{shouldForwardProp:s(t,d,!0)})).apply(void 0,R)},t}}},"../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/constants.js":(M,p,e)=>{e.d(p,{_3:()=>i,cT:()=>a,rE:()=>m});const a="data-wp-component",i="data-wp-c16t",m="__contextSystemKey__"},"../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/context-connect.js":(M,p,e)=>{e.d(p,{H:()=>E,Iq:()=>f,Kc:()=>w});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+warning@2.52.0/node_modules/@wordpress/warning/build-module/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/constants.js"),C=e("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/get-styled-class-name-from-key.js");function f(n,s){return c(n,s,{forwardsRef:!0})}function w(n,s){return c(n,s)}function c(n,s,x){const g=x!=null&&x.forwardsRef?(0,a.forwardRef)(n):n;typeof s=="undefined"&&typeof SCRIPT_DEBUG!="undefined"&&SCRIPT_DEBUG===!0&&(0,i.Z)("contextConnect: Please provide a namespace");let l=g[m.rE]||[s];return Array.isArray(s)&&(l=[...l,...s]),typeof s=="string"&&(l=[...l,s]),Object.assign(g,{[m.rE]:[...new Set(l)],displayName:s,selector:`.${(0,C.l)(s)}`})}function O(n){if(!n)return[];let s=[];return n[m.rE]&&(s=n[m.rE]),n.type&&n.type[m.rE]&&(s=n.type[m.rE]),s}function E(n,s){return n?typeof s=="string"?O(n).includes(s):Array.isArray(s)?s.some(x=>O(n).includes(x)):!1:!1}},"../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/context-system-provider.js":(M,p,e)=>{e.d(p,{Cd:()=>E,G8:()=>g,eb:()=>n});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"),m=e.n(i),C=e("../../../node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/es6/index.js"),f=e.n(C),w=e("../../../node_modules/.pnpm/is-plain-object@5.0.0/node_modules/is-plain-object/dist/is-plain-object.mjs"),c=e("../../../node_modules/.pnpm/@wordpress+warning@2.52.0/node_modules/@wordpress/warning/build-module/index.js"),O=e("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-update-effect.js");const E=(0,a.createContext)({}),n=()=>(0,a.useContext)(E);function s({value:l}){const y=n(),r=(0,a.useRef)(l);return(0,O.Z)(()=>{f()(r.current,l)&&r.current!==l&&typeof SCRIPT_DEBUG!="undefined"&&SCRIPT_DEBUG===!0&&(0,c.Z)(`Please memoize your context: ${JSON.stringify(l)}`)},[l]),(0,a.useMemo)(()=>m()(y!=null?y:{},l!=null?l:{},{isMergeableObject:w.P}),[y,l])}const x=({children:l,value:y})=>{const r=s({value:y});return(0,a.createElement)(E.Provider,{value:r},l)},g=(0,a.memo)(x)},"../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/get-styled-class-name-from-key.js":(M,p,e)=>{e.d(p,{l:()=>C});var a=e("../../../node_modules/.pnpm/param-case@3.0.4/node_modules/param-case/dist.es2015/index.js"),i=e("../../../node_modules/.pnpm/memize@2.1.0/node_modules/memize/dist/index.js");function m(f){return`components-${(0,a.o)(f)}`}const C=(0,i.Z)(m)},"../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/use-context-system.js":(M,p,e)=>{e.d(p,{y:()=>O});var a=e("../../../node_modules/.pnpm/@wordpress+warning@2.52.0/node_modules/@wordpress/warning/build-module/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/context-system-provider.js"),m=e("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/constants.js");function C(E){return{[m.cT]:E}}function f(){return{[m._3]:!0}}var w=e("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/get-styled-class-name-from-key.js"),c=e("../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js");function O(E,n){const s=(0,i.eb)();typeof n=="undefined"&&typeof SCRIPT_DEBUG!="undefined"&&SCRIPT_DEBUG===!0&&(0,a.Z)("useContextSystem: Please provide a namespace");const x=(s==null?void 0:s[n])||{},g={...f(),...C(n)},{_overrides:l,...y}=x,r=Object.entries(y).length?Object.assign({},y,E):E,T=(0,c.I)()((0,w.l)(n),E.className),u=typeof r.renderChildren=="function"?r.renderChildren(r):r.children;for(const v in r)g[v]=r[v];for(const v in l)g[v]=l[v];return u!==void 0&&(g.children=u),g.className=T,g}},"../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js":(M,p,e)=>{e.d(p,{I:()=>w});var a=e("../../../node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.2.61_react@18.2.0/node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),i=e("../../../node_modules/.pnpm/@emotion+utils@1.2.1/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),m=e("../../../node_modules/.pnpm/@emotion+css@11.11.2/node_modules/@emotion/css/dist/emotion-css.esm.js"),C=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const f=c=>typeof c!="undefined"&&c!==null&&["name","styles"].every(O=>typeof c[O]!="undefined"),w=()=>{const c=(0,a._)();return(0,C.useCallback)((...E)=>{if(c===null)throw new Error("The `useCx` hook should be only used within a valid Emotion Cache Context");return(0,m.cx)(...E.map(n=>f(n)?((0,i.My)(c,n,!1),`${c.key}-${n.name}`):n))},[c])}},"../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/hooks/use-update-effect.js":(M,p,e)=>{e.d(p,{Z:()=>m});var a=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function i(C,f){const w=(0,a.useRef)(!1);(0,a.useEffect)(()=>{if(w.current)return C();w.current=!0},f)}const m=i},"../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/view/component.js":(M,p,e)=>{e.d(p,{Z:()=>m});var a=e("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_@types+react@18.2.61_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");const i=(0,a.Z)("div",{target:"e19lxcc00"})("");i.selector=".components-view",i.displayName="View";const m=i}}]);})();
