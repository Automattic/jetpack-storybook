"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8267,8017],{"../../../node_modules/.pnpm/@emotion+react@11.13.3_@types+react@18.3.3_react@18.3.1/node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js":(M,P,e)=>{e.d(P,{C:()=>o,T:()=>w,_:()=>m,w:()=>O});var c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=e("../../../node_modules/.pnpm/@emotion+cache@11.13.1/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),h=e("../../../node_modules/.pnpm/@emotion+serialize@1.3.2/node_modules/@emotion/serialize/dist/emotion-serialize.esm.js"),n=e("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.1.0_react@18.3.1/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),_=!1,p=c.createContext(typeof HTMLElement!="undefined"?(0,i.A)({key:"css"}):null),o=p.Provider,m=function(){return(0,c.useContext)(p)},O=function(f){return(0,c.forwardRef)(function(d,g){var y=(0,c.useContext)(p);return f(d,y,g)})},w=c.createContext({}),D=function(){return React.useContext(w)},S=function(f,d){if(typeof d=="function"){var g=d(f);return g}return _extends({},f,d)},x=null,j=function(f){var d=React.useContext(w);return f.theme!==d&&(d=x(d)(f.theme)),React.createElement(w.Provider,{value:d},f.children)};function l(a){var f=a.displayName||a.name||"Component",d=function(R,C){var r=React.useContext(w);return React.createElement(a,_extends({theme:r,ref:C},R))},g=React.forwardRef(d);return g.displayName="WithTheme("+f+")",hoistNonReactStatics(g,a)}var u={}.hasOwnProperty,T="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",b=function(f,d){var g={};for(var y in d)u.call(d,y)&&(g[y]=d[y]);return g[T]=f,g},t=function(f){var d=f.cache,g=f.serialized,y=f.isStringTag;return registerStyles(d,g,y),useInsertionEffectAlwaysWithSyncFallback(function(){return insertStyles(d,g,y)}),null},E=null,s=null},"../../../node_modules/.pnpm/@emotion+styled@11.13.0_@emotion+react@11.13.3_@types+react@18.3.3_react@18.3.1__@types+react@18.3.3_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js":(M,P,e)=>{e.d(P,{A:()=>j});var c=e("../../../node_modules/.pnpm/@babel+runtime@7.24.7/node_modules/@babel/runtime/helpers/esm/extends.js"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),h=e("../../../node_modules/.pnpm/@emotion+is-prop-valid@1.3.1/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js"),n=e("../../../node_modules/.pnpm/@emotion+react@11.13.3_@types+react@18.3.3_react@18.3.1/node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js"),_=e("../../../node_modules/.pnpm/@emotion+utils@1.4.1/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),p=e("../../../node_modules/.pnpm/@emotion+serialize@1.3.2/node_modules/@emotion/serialize/dist/emotion-serialize.esm.js"),o=e("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.1.0_react@18.3.1/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),m=h.A,O=function(u){return u!=="theme"},w=function(u){return typeof u=="string"&&u.charCodeAt(0)>96?m:O},D=function(u,T,b){var t;if(T){var E=T.shouldForwardProp;t=u.__emotion_forwardProp&&E?function(s){return u.__emotion_forwardProp(s)&&E(s)}:E}return typeof t!="function"&&b&&(t=u.__emotion_forwardProp),t},S=!1,x=function(u){var T=u.cache,b=u.serialized,t=u.isStringTag;return(0,_.SF)(T,b,t),(0,o.s)(function(){return(0,_.sk)(T,b,t)}),null},j=function l(u,T){var b=u.__emotion_real===u,t=b&&u.__emotion_base||u,E,s;T!==void 0&&(E=T.label,s=T.target);var a=D(u,T,b),f=a||w(t),d=!f("as");return function(){var g=arguments,y=b&&u.__emotion_styles!==void 0?u.__emotion_styles.slice(0):[];if(E!==void 0&&y.push("label:"+E+";"),g[0]==null||g[0].raw===void 0)y.push.apply(y,g);else{y.push(g[0][0]);for(var R=g.length,C=1;C<R;C++)y.push(g[C],g[0][C])}var r=(0,n.w)(function(v,A,L){var I=d&&v.as||t,W="",U=[],N=v;if(v.theme==null){N={};for(var k in v)N[k]=v[k];N.theme=i.useContext(n.T)}typeof v.className=="string"?W=(0,_.Rk)(A.registered,U,v.className):v.className!=null&&(W=v.className+" ");var z=(0,p.J)(y.concat(U),A.registered,N);W+=A.key+"-"+z.name,s!==void 0&&(W+=" "+s);var F=d&&a===void 0?w(I):f,B={};for(var K in v)d&&K==="as"||F(K)&&(B[K]=v[K]);return B.className=W,L&&(B.ref=L),i.createElement(i.Fragment,null,i.createElement(x,{cache:A,serialized:z,isStringTag:typeof I=="string"}),i.createElement(I,B))});return r.displayName=E!==void 0?E:"Styled("+(typeof t=="string"?t:t.displayName||t.name||"Component")+")",r.defaultProps=u.defaultProps,r.__emotion_real=r,r.__emotion_base=t,r.__emotion_styles=y,r.__emotion_forwardProp=a,Object.defineProperty(r,"toString",{value:function(){return s===void 0&&S?"NO_COMPONENT_SELECTOR":"."+s}}),r.withComponent=function(v,A){return l(v,(0,c.A)({},T,A,{shouldForwardProp:D(r,A,!0)})).apply(void 0,y)},r}}},"../../../node_modules/.pnpm/@storybook+addon-actions@8.3.5_storybook@8.3.5/node_modules/@storybook/addon-actions/dist/index.mjs":(M,P,e)=>{e.d(P,{XI:()=>T});var c=e("storybook/internal/preview-api"),i=e("storybook/internal/preview-errors"),h=e("@storybook/global"),n=e("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),_="actions",p="storybook/actions",o=null,m=`${p}/action-event`,O=null,w="$___storybook.isCyclic",D={depth:10,clearOnStoryChange:!0,limit:50},S=(t={})=>{Object.assign(D,t)},x=(t,E)=>{let s=Object.getPrototypeOf(t);return!s||E(s)?s:x(s,E)},j=t=>!!(typeof t=="object"&&t&&x(t,E=>/^Synthetic(?:Base)?Event$/.test(E.constructor.name))&&typeof t.persist=="function"),l=t=>{if(j(t)){let E=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));E.persist();let s=Object.getOwnPropertyDescriptor(E,"view"),a=s==null?void 0:s.value;return typeof a=="object"&&(a==null?void 0:a.constructor.name)==="Window"&&Object.defineProperty(E,"view",{...s,value:Object.create(a.constructor.prototype)}),E}return t},u=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,n.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function T(t,E={}){let s={...D,...E},a=function(...f){var v,A;if(E.implicit){let L=(v="__STORYBOOK_PREVIEW__"in h.global?h.global.__STORYBOOK_PREVIEW__:void 0)==null?void 0:v.storyRenders.find(I=>I.phase==="playing"||I.phase==="rendering");if(L){let I=!((A=window==null?void 0:window.FEATURES)!=null&&A.disallowImplicitActionsInRenderV8),W=new i.ImplicitActionsDuringRendering({phase:L.phase,name:t,deprecated:I});if(I)console.warn(W);else throw W}}let d=c.addons.getChannel(),g=u(),y=5,R=f.map(l),C=f.length>1?R:R[0],r={id:g,count:0,data:{name:t,args:C},options:{...s,maxDepth:y+(s.depth||3),allowFunction:s.allowFunction||!1}};d.emit(m,r)};return a.isAction=!0,a.implicit=E.implicit,a}var b=(...t)=>{let E=D,s=t;s.length===1&&Array.isArray(s[0])&&([s]=s),s.length!==1&&typeof s[s.length-1]!="string"&&(E={...D,...s.pop()});let a=s[0];(s.length!==1||typeof a=="string")&&(a={},s.forEach(d=>{a[d]=d}));let f={};return Object.keys(a).forEach(d=>{f[d]=T(a[d],E)}),f}},"../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js":(M,P,e)=>{e.d(P,{Ay:()=>u});var c=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),i=e("../../../node_modules/.pnpm/@emotion+styled@11.13.0_@emotion+react@11.13.3_@types+react@18.3.3_react@18.3.1__@types+react@18.3.3_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),h=e("../../../node_modules/.pnpm/@emotion+react@11.13.3_@types+react@18.3.3_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),n=e("../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js"),_=e("../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js");function p(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const o=(0,h.i7)`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,m=(0,i.A)("svg",{target:"ea4tfvq2"})("width:",n.A.spinnerSize,"px;height:",n.A.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",_.l.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),O={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},w=(0,i.A)("circle",{target:"ea4tfvq1"})(O,";stroke:",_.l.gray[300],";"),D=(0,i.A)("path",{target:"ea4tfvq0"})(O,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",o,";");var S=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),x=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function j({className:T,...b},t){return(0,x.jsxs)(m,{className:(0,c.A)("components-spinner",T),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...b,ref:t,children:[(0,x.jsx)(w,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,x.jsx)(D,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"})]})}const u=(0,S.forwardRef)(j)},"../../../node_modules/.pnpm/@wordpress+compose@7.8.3_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-debounce/index.js":(M,P,e)=>{e.d(P,{A:()=>n});var c=e("../../../node_modules/.pnpm/use-memo-one@1.1.3_react@18.3.1/node_modules/use-memo-one/dist/use-memo-one.esm.js"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+compose@7.8.3_react@18.3.1/node_modules/@wordpress/compose/build-module/utils/debounce/index.js");function n(_,p,o){const m=(0,c.MA)(()=>(0,h.s)(_,p!=null?p:0,o),[_,p,o]);return(0,i.useEffect)(()=>()=>m.cancel(),[m]),m}},"../../../node_modules/.pnpm/@wordpress+compose@7.8.3_react@18.3.1/node_modules/@wordpress/compose/build-module/utils/debounce/index.js":(M,P,e)=>{e.d(P,{s:()=>c});const c=(i,h,n)=>{let _,p,o=0,m,O,w,D=0,S=!1,x=!1,j=!0;n&&(S=!!n.leading,x="maxWait"in n,n.maxWait!==void 0&&(o=Math.max(n.maxWait,h)),j="trailing"in n?!!n.trailing:j);function l(r){const v=_,A=p;return _=void 0,p=void 0,D=r,m=i.apply(A,v),m}function u(r,v){O=setTimeout(r,v)}function T(){O!==void 0&&clearTimeout(O)}function b(r){return D=r,u(a,h),S?l(r):m}function t(r){return r-(w||0)}function E(r){const v=t(r),A=r-D,L=h-v;return x?Math.min(L,o-A):L}function s(r){const v=t(r),A=r-D;return w===void 0||v>=h||v<0||x&&A>=o}function a(){const r=Date.now();if(s(r))return d(r);u(a,E(r))}function f(){O=void 0}function d(r){return f(),j&&_?l(r):(_=p=void 0,m)}function g(){T(),D=0,f(),_=w=p=void 0}function y(){return R()?d(Date.now()):m}function R(){return O!==void 0}function C(...r){const v=Date.now(),A=s(v);if(_=r,p=this,w=v,A){if(!R())return b(w);if(x)return u(a,h),l(w)}return R()||u(a,h),m}return C.cancel=g,C.flush=y,C.pending=R,C}},"../../../node_modules/.pnpm/@wordpress+icons@10.8.2_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(M,P,e)=>{e.d(P,{A:()=>h});var c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function i({icon:n,size:_=24,...p},o){return(0,c.cloneElement)(n,{width:_,height:_,...p,ref:o})}const h=(0,c.forwardRef)(i)},"../../../node_modules/.pnpm/@wordpress+icons@10.8.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/close-small.js":(M,P,e)=>{e.d(P,{A:()=>n});var c=e("../../../node_modules/.pnpm/@wordpress+primitives@4.8.1_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=(0,i.jsx)(c.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,i.jsx)(c.wA,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.8.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/map-marker.js":(M,P,e)=>{e.d(P,{A:()=>n});var c=e("../../../node_modules/.pnpm/@wordpress+primitives@4.8.1_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=(0,i.jsx)(c.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,i.jsx)(c.wA,{d:"M12 9c-.8 0-1.5.7-1.5 1.5S11.2 12 12 12s1.5-.7 1.5-1.5S12.8 9 12 9zm0-5c-3.6 0-6.5 2.8-6.5 6.2 0 .8.3 1.8.9 3.1.5 1.1 1.2 2.3 2 3.6.7 1 3 3.8 3.2 3.9l.4.5.4-.5c.2-.2 2.6-2.9 3.2-3.9.8-1.2 1.5-2.5 2-3.6.6-1.3.9-2.3.9-3.1C18.5 6.8 15.6 4 12 4zm4.3 8.7c-.5 1-1.1 2.2-1.9 3.4-.5.7-1.7 2.2-2.4 3-.7-.8-1.9-2.3-2.4-3-.8-1.2-1.4-2.3-1.9-3.3-.6-1.4-.7-2.2-.7-2.5 0-2.6 2.2-4.7 5-4.7s5 2.1 5 4.7c0 .2-.1 1-.7 2.4z"})})},"../../../node_modules/.pnpm/@wordpress+primitives@4.8.1_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js":(M,P,e)=>{e.d(P,{G:()=>_,jl:()=>n,rw:()=>O,t4:()=>j,tS:()=>m,wA:()=>o});var c=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),h=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=l=>(0,i.createElement)("circle",l),_=l=>(0,i.createElement)("g",l),p=l=>createElement("line",l),o=l=>(0,i.createElement)("path",l),m=l=>(0,i.createElement)("polygon",l),O=l=>(0,i.createElement)("rect",l),w=l=>createElement("defs",l),D=l=>createElement("radialGradient",l),S=l=>createElement("linearGradient",l),x=l=>createElement("stop",l),j=(0,i.forwardRef)(({className:l,isPressed:u,...T},b)=>{const t={...T,className:(0,c.A)(l,{"is-pressed":u})||void 0,"aria-hidden":!0,focusable:!1};return(0,h.jsx)("svg",{...t,ref:b})});j.displayName="SVG"},"../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(M,P,e)=>{e.d(P,{A:()=>h});function c(n){var _,p,o="";if(typeof n=="string"||typeof n=="number")o+=n;else if(typeof n=="object")if(Array.isArray(n)){var m=n.length;for(_=0;_<m;_++)n[_]&&(p=c(n[_]))&&(o&&(o+=" "),o+=p)}else for(p in n)n[p]&&(o&&(o+=" "),o+=p);return o}function i(){for(var n,_,p=0,o="",m=arguments.length;p<m;p++)(n=arguments[p])&&(_=c(n))&&(o&&(o+=" "),o+=_);return o}const h=i},"../../../node_modules/.pnpm/use-memo-one@1.1.3_react@18.3.1/node_modules/use-memo-one/dist/use-memo-one.esm.js":(M,P,e)=>{e.d(P,{MA:()=>h});var c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function i(o,m){if(o.length!==m.length)return!1;for(var O=0;O<o.length;O++)if(o[O]!==m[O])return!1;return!0}function h(o,m){var O=(0,c.useState)(function(){return{inputs:m,result:o()}})[0],w=(0,c.useRef)(!0),D=(0,c.useRef)(O),S=w.current||!!(m&&D.current.inputs&&i(m,D.current.inputs)),x=S?D.current:{inputs:m,result:o()};return(0,c.useEffect)(function(){w.current=!1,D.current=x},[x]),x.result}function n(o,m){return h(function(){return o},m)}var _=null,p=null}}]);})();
