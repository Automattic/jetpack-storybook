"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[7613],{"../../../node_modules/.pnpm/@emotion+react@11.13.0_react@18.3.1/node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js":(R,f,e)=>{e.d(f,{C:()=>n,T:()=>t,_:()=>p,w:()=>o});var d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=e("../../../node_modules/.pnpm/@emotion+cache@11.13.1/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),l=e("../../../node_modules/.pnpm/@emotion+serialize@1.3.0/node_modules/@emotion/serialize/dist/emotion-serialize.esm.js"),E=e("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.1.0_react@18.3.1/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),_=!1,i=d.createContext(typeof HTMLElement!="undefined"?(0,m.Z)({key:"css"}):null),n=i.Provider,p=function(){return(0,d.useContext)(i)},o=function(P){return(0,d.forwardRef)(function(v,O){var g=(0,d.useContext)(i);return P(v,g,O)})},t=d.createContext({}),r=function(){return React.useContext(t)},T=function(P,v){if(typeof v=="function"){var O=v(P);return O}return _extends({},P,v)},D=null,M=function(P){var v=React.useContext(t);return P.theme!==v&&(v=D(v)(P.theme)),React.createElement(t.Provider,{value:v},P.children)};function u(y){var P=y.displayName||y.name||"Component",v=function(B,C){var b=React.useContext(t);return React.createElement(y,_extends({theme:b,ref:C},B))},O=React.forwardRef(v);return O.displayName="WithTheme("+P+")",hoistNonReactStatics(O,y)}var s={}.hasOwnProperty,h="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",w=function(P,v){var O={};for(var g in v)s.call(v,g)&&(O[g]=v[g]);return O[h]=P,O},x=function(P){var v=P.cache,O=P.serialized,g=P.isStringTag;return registerStyles(v,O,g),useInsertionEffectAlwaysWithSyncFallback(function(){return insertStyles(v,O,g)}),null},c=null,L=null},"../../../node_modules/.pnpm/@emotion+styled@11.13.0_@emotion+react@11.13.0_react@18.3.1__react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js":(R,f,e)=>{e.d(f,{Z:()=>M});var d=e("../../../node_modules/.pnpm/@babel+runtime@7.24.7/node_modules/@babel/runtime/helpers/esm/extends.js"),m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/@emotion+is-prop-valid@1.3.0/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js"),E=e("../../../node_modules/.pnpm/@emotion+react@11.13.0_react@18.3.1/node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js"),_=e("../../../node_modules/.pnpm/@emotion+utils@1.4.0/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),i=e("../../../node_modules/.pnpm/@emotion+serialize@1.3.0/node_modules/@emotion/serialize/dist/emotion-serialize.esm.js"),n=e("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.1.0_react@18.3.1/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),p=l.Z,o=function(s){return s!=="theme"},t=function(s){return typeof s=="string"&&s.charCodeAt(0)>96?p:o},r=function(s,h,w){var x;if(h){var c=h.shouldForwardProp;x=s.__emotion_forwardProp&&c?function(L){return s.__emotion_forwardProp(L)&&c(L)}:c}return typeof x!="function"&&w&&(x=s.__emotion_forwardProp),x},T=!1,D=function(s){var h=s.cache,w=s.serialized,x=s.isStringTag;return(0,_.hC)(h,w,x),(0,n.L)(function(){return(0,_.My)(h,w,x)}),null},M=function u(s,h){var w=s.__emotion_real===s,x=w&&s.__emotion_base||s,c,L;h!==void 0&&(c=h.label,L=h.target);var y=r(s,h,w),P=y||t(x),v=!P("as");return function(){var O=arguments,g=w&&s.__emotion_styles!==void 0?s.__emotion_styles.slice(0):[];if(c!==void 0&&g.push("label:"+c+";"),O[0]==null||O[0].raw===void 0)g.push.apply(g,O);else{g.push(O[0][0]);for(var B=O.length,C=1;C<B;C++)g.push(O[C],O[0][C])}var b=(0,E.w)(function(a,A,W){var I=v&&a.as||x,j="",U=[],K=a;if(a.theme==null){K={};for(var S in a)K[S]=a[S];K.theme=m.useContext(E.T)}typeof a.className=="string"?j=(0,_.fp)(A.registered,U,a.className):a.className!=null&&(j=a.className+" ");var F=(0,i.O)(g.concat(U),A.registered,K);j+=A.key+"-"+F.name,L!==void 0&&(j+=" "+L);var z=v&&y===void 0?t(I):P,Z={};for(var N in a)v&&N==="as"||z(N)&&(Z[N]=a[N]);return Z.className=j,W&&(Z.ref=W),m.createElement(m.Fragment,null,m.createElement(D,{cache:A,serialized:F,isStringTag:typeof I=="string"}),m.createElement(I,Z))});return b.displayName=c!==void 0?c:"Styled("+(typeof x=="string"?x:x.displayName||x.name||"Component")+")",b.defaultProps=s.defaultProps,b.__emotion_real=b,b.__emotion_base=x,b.__emotion_styles=g,b.__emotion_forwardProp=y,Object.defineProperty(b,"toString",{value:function(){return L===void 0&&T?"NO_COMPONENT_SELECTOR":"."+L}}),b.withComponent=function(a,A){return u(a,(0,d.Z)({},h,A,{shouldForwardProp:r(b,A,!0)})).apply(void 0,g)},b}}},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js":(R,f,e)=>{e.d(f,{ZP:()=>M,zx:()=>D});var d=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),m=e("../../../node_modules/.pnpm/@wordpress+deprecated@4.5.0/node_modules/@wordpress/deprecated/build-module/index.js"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),E=e("../../../node_modules/.pnpm/@wordpress+compose@7.5.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),_=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/tooltip/index.js"),i=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/icon/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),p=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/popover/utils.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=["onMouseDown","onClick"];function r({__experimentalIsFocusable:u,isDefault:s,isPrimary:h,isSecondary:w,isTertiary:x,isLink:c,isPressed:L,isSmall:y,size:P,variant:v,describedBy:O,...g}){let B=P,C=v;const b={accessibleWhenDisabled:u,"aria-pressed":L,description:O};if(y){var a;(a=B)!==null&&a!==void 0||(B="small")}if(h){var A;(A=C)!==null&&A!==void 0||(C="primary")}if(x){var W;(W=C)!==null&&W!==void 0||(C="tertiary")}if(w){var I;(I=C)!==null&&I!==void 0||(C="secondary")}if(s){var j;(0,m.Z)("wp.components.Button `isDefault` prop",{since:"5.4",alternative:'variant="secondary"'}),(j=C)!==null&&j!==void 0||(C="secondary")}if(c){var U;(U=C)!==null&&U!==void 0||(C="link")}return{...b,...g,size:B,variant:C}}function T(u,s){var q,ee;const{__next40pxDefaultSize:h,accessibleWhenDisabled:w,isBusy:x,isDestructive:c,className:L,disabled:y,icon:P,iconPosition:v="left",iconSize:O,showTooltip:g,tooltipPosition:B,shortcut:C,label:b,children:a,size:A="default",text:W,variant:I,description:j,...U}=r(u),{href:K,target:S,"aria-checked":F,"aria-pressed":z,"aria-selected":Z,...N}="href"in U?U:{href:void 0,target:void 0,...U},oe=(0,E.Z)(D,"components-button__description"),te=typeof a=="string"&&!!a||Array.isArray(a)&&(a==null?void 0:a[0])&&a[0]!==null&&((ee=(q=a==null?void 0:a[0])==null?void 0:q.props)==null?void 0:ee.className)!=="components-tooltip",ne=[!0,"true","mixed"],se=(0,d.Z)("components-button",L,{"is-next-40px-default-size":h,"is-secondary":I==="secondary","is-primary":I==="primary","is-small":A==="small","is-compact":A==="compact","is-tertiary":I==="tertiary","is-pressed":ne.includes(z),"is-pressed-mixed":z==="mixed","is-busy":x,"is-link":I==="link","is-destructive":c,"has-text":!!P&&(te||W),"has-icon":!!P}),k=y&&!w,X=K!==void 0&&!y?"a":"button",H=X==="button"?{type:"button",disabled:k,"aria-checked":F,"aria-pressed":z,"aria-selected":Z}:{},V=X==="a"?{href:K,target:S}:{},Y={};if(y&&w){H["aria-disabled"]=!0,V["aria-disabled"]=!0;for(const ae of t)Y[ae]=$=>{$&&($.stopPropagation(),$.preventDefault())}}const re=!k&&(g&&!!b||!!C||!!b&&!(a!=null&&a.length)&&g!==!1),G=j?oe:void 0,de=N["aria-describedby"]||G,J={className:se,"aria-label":N["aria-label"]||b,"aria-describedby":de,ref:s},Q=(0,o.jsxs)(o.Fragment,{children:[P&&v==="left"&&(0,o.jsx)(i.Z,{icon:P,size:O}),W&&(0,o.jsx)(o.Fragment,{children:W}),a,P&&v==="right"&&(0,o.jsx)(i.Z,{icon:P,size:O})]}),ie=X==="a"?(0,o.jsx)("a",{...V,...N,...Y,...J,children:Q}):(0,o.jsx)("button",{...H,...N,...Y,...J,children:Q}),le=re?{text:a!=null&&a.length&&j?j:b,shortcut:C,placement:B&&(0,p.KF)(B)}:{};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(_.ZP,{...le,children:ie}),j&&(0,o.jsx)(n.Z,{children:(0,o.jsx)("span",{id:G,children:j})})]})}const D=(0,l.forwardRef)(T),M=D},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/constants.js":(R,f,e)=>{e.d(f,{_3:()=>m,cT:()=>d,rE:()=>l});const d="data-wp-component",m="data-wp-c16t",l="__contextSystemKey__"},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js":(R,f,e)=>{e.d(f,{H:()=>o,Iq:()=>_,Kc:()=>i});var d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+warning@3.5.0/node_modules/@wordpress/warning/build-module/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/constants.js"),E=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/get-styled-class-name-from-key.js");function _(t,r){return n(t,r,{forwardsRef:!0})}function i(t,r){return n(t,r)}function n(t,r,T){const D=T!=null&&T.forwardsRef?(0,d.forwardRef)(t):t;typeof r=="undefined"&&globalThis.SCRIPT_DEBUG===!0&&(0,m.Z)("contextConnect: Please provide a namespace");let M=D[l.rE]||[r];return Array.isArray(r)&&(M=[...M,...r]),typeof r=="string"&&(M=[...M,r]),Object.assign(D,{[l.rE]:[...new Set(M)],displayName:r,selector:`.${(0,E.l)(r)}`})}function p(t){if(!t)return[];let r=[];return t[l.rE]&&(r=t[l.rE]),t.type&&t.type[l.rE]&&(r=t.type[l.rE]),r}function o(t,r){return t?typeof r=="string"?p(t).includes(r):Array.isArray(r)?r.some(T=>p(t).includes(T)):!1:!1}},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-system-provider.js":(R,f,e)=>{e.d(f,{Cd:()=>t,G8:()=>M,eb:()=>r});var d=e("../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"),m=e.n(d),l=e("../../../node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/es6/index.js"),E=e.n(l),_=e("../../../node_modules/.pnpm/is-plain-object@5.0.0/node_modules/is-plain-object/dist/is-plain-object.mjs"),i=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/@wordpress+warning@3.5.0/node_modules/@wordpress/warning/build-module/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/hooks/use-update-effect.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const t=(0,i.createContext)({}),r=()=>(0,i.useContext)(t);function T({value:u}){const s=r(),h=(0,i.useRef)(u);return(0,p.Z)(()=>{E()(h.current,u)&&h.current!==u&&globalThis.SCRIPT_DEBUG===!0&&(0,n.Z)(`Please memoize your context: ${JSON.stringify(u)}`)},[u]),(0,i.useMemo)(()=>m()(s!=null?s:{},u!=null?u:{},{isMergeableObject:_.P}),[s,u])}const D=({children:u,value:s})=>{const h=T({value:s});return(0,o.jsx)(t.Provider,{value:h,children:u})},M=(0,i.memo)(D)},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/get-styled-class-name-from-key.js":(R,f,e)=>{e.d(f,{l:()=>E});var d=e("../../../node_modules/.pnpm/param-case@3.0.4/node_modules/param-case/dist.es2015/index.js"),m=e("../../../node_modules/.pnpm/memize@2.1.0/node_modules/memize/dist/index.js");function l(_){return`components-${(0,d.o)(_)}`}const E=(0,m.Z)(l)},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/use-context-system.js":(R,f,e)=>{e.d(f,{y:()=>p});var d=e("../../../node_modules/.pnpm/@wordpress+warning@3.5.0/node_modules/@wordpress/warning/build-module/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-system-provider.js"),l=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/constants.js");function E(o){return{[l.cT]:o}}function _(){return{[l._3]:!0}}var i=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/get-styled-class-name-from-key.js"),n=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js");function p(o,t){const r=(0,m.eb)();typeof t=="undefined"&&globalThis.SCRIPT_DEBUG===!0&&(0,d.Z)("useContextSystem: Please provide a namespace");const T=(r==null?void 0:r[t])||{},D={..._(),...E(t)},{_overrides:M,...u}=T,s=Object.entries(u).length?Object.assign({},u,o):o,w=(0,n.I)()((0,i.l)(t),o.className),x=typeof s.renderChildren=="function"?s.renderChildren(s):s.children;for(const c in s)D[c]=s[c];for(const c in M)D[c]=M[c];return x!==void 0&&(D.children=x),D.className=w,D}},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/dashicon/index.js":(R,f,e)=>{e.d(f,{Z:()=>l});var d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function m({icon:E,className:_,size:i=20,style:n={},...p}){const o=["dashicon","dashicons","dashicons-"+E,_].filter(Boolean).join(" "),r={...i!=20?{fontSize:`${i}px`,width:`${i}px`,height:`${i}px`}:{},...n};return(0,d.jsx)("span",{className:o,style:r,...p})}const l=m},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/icon/index.js":(R,f,e)=>{e.d(f,{Z:()=>i});var d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+primitives@4.5.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/dashicon/index.js"),E=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function _({icon:n=null,size:p=typeof n=="string"?20:24,...o}){if(typeof n=="string")return(0,E.jsx)(l.Z,{icon:n,size:p,...o});if((0,d.isValidElement)(n)&&l.Z===n.type)return(0,d.cloneElement)(n,{...o});if(typeof n=="function")return(0,d.createElement)(n,{size:p,...o});if(n&&(n.type==="svg"||n.type===m.Wj)){const t={...n.props,width:p,height:p,...o};return(0,E.jsx)(m.Wj,{...t})}return(0,d.isValidElement)(n)?(0,d.cloneElement)(n,{size:p,...o}):n}const i=_},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/popover/utils.js":(R,f,e)=>{e.d(f,{CK:()=>n,KF:()=>m,d9:()=>E,sw:()=>p});const d={bottom:"bottom",top:"top","middle left":"left","middle right":"right","bottom left":"bottom-end","bottom center":"bottom","bottom right":"bottom-start","top left":"top-end","top center":"top","top right":"top-start","middle left left":"left","middle left right":"left","middle left bottom":"left-end","middle left top":"left-start","middle right left":"right","middle right right":"right","middle right bottom":"right-end","middle right top":"right-start","bottom left left":"bottom-end","bottom left right":"bottom-end","bottom left bottom":"bottom-end","bottom left top":"bottom-end","bottom center left":"bottom","bottom center right":"bottom","bottom center bottom":"bottom","bottom center top":"bottom","bottom right left":"bottom-start","bottom right right":"bottom-start","bottom right bottom":"bottom-start","bottom right top":"bottom-start","top left left":"top-end","top left right":"top-end","top left bottom":"top-end","top left top":"top-end","top center left":"top","top center right":"top","top center bottom":"top","top center top":"top","top right left":"top-start","top right right":"top-start","top right bottom":"top-start","top right top":"top-start",middle:"bottom","middle center":"bottom","middle center bottom":"bottom","middle center left":"bottom","middle center right":"bottom","middle center top":"bottom"},m=o=>{var t;return(t=d[o])!==null&&t!==void 0?t:"bottom"},l={top:{originX:.5,originY:1},"top-start":{originX:0,originY:1},"top-end":{originX:1,originY:1},right:{originX:0,originY:.5},"right-start":{originX:0,originY:0},"right-end":{originX:0,originY:1},bottom:{originX:.5,originY:0},"bottom-start":{originX:0,originY:0},"bottom-end":{originX:1,originY:0},left:{originX:1,originY:.5},"left-start":{originX:1,originY:0},"left-end":{originX:1,originY:1},overlay:{originX:.5,originY:.5}},E=o=>{const t=o.startsWith("top")||o.startsWith("bottom")?"translateY":"translateX",r=o.startsWith("top")||o.startsWith("left")?1:-1;return{style:l[o],initial:{opacity:0,scale:0,[t]:`${2*r}em`},animate:{opacity:1,scale:1,[t]:0},transition:{duration:.1,ease:[0,0,.2,1]}}};function _(o){return!!(o!=null&&o.top)}function i(o){return!!(o!=null&&o.current)}const n=({anchor:o,anchorRef:t,anchorRect:r,getAnchorRect:T,fallbackReferenceElement:D})=>{var M;let u=null;return o?u=o:_(t)?u={getBoundingClientRect(){const s=t.top.getBoundingClientRect(),h=t.bottom.getBoundingClientRect();return new window.DOMRect(s.x,s.y,s.width,h.bottom-s.top)}}:i(t)?u=t.current:t?u=t:r?u={getBoundingClientRect(){return r}}:T?u={getBoundingClientRect(){var s,h,w,x;const c=T(D);return new window.DOMRect((s=c.x)!==null&&s!==void 0?s:c.left,(h=c.y)!==null&&h!==void 0?h:c.top,(w=c.width)!==null&&w!==void 0?w:c.right-c.left,(x=c.height)!==null&&x!==void 0?x:c.bottom-c.top)}}:D&&(u=D.parentElement),(M=u)!==null&&M!==void 0?M:null},p=o=>o===null||Number.isNaN(o)?void 0:Math.round(o)},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/shortcut/index.js":(R,f,e)=>{e.d(f,{Z:()=>l});var d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function m(E){const{shortcut:_,className:i}=E;if(!_)return null;let n,p;return typeof _=="string"&&(n=_),_!==null&&typeof _=="object"&&(n=_.display,p=_.ariaLabel),(0,d.jsx)("span",{className:i,"aria-label":p,children:n})}const l=m},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/tooltip/index.js":(R,f,e)=>{e.d(f,{ZP:()=>h});var d=e("../../../node_modules/.pnpm/@ariakit+react-core@0.4.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/VJLRJATI.js"),m=e("../../../node_modules/.pnpm/@ariakit+react-core@0.4.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/4KVV4LMJ.js"),l=e("../../../node_modules/.pnpm/@ariakit+react-core@0.4.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/tooltip/tooltip-anchor.js"),E=e("../../../node_modules/.pnpm/@ariakit+react-core@0.4.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ariakit/react-core/esm/tooltip/tooltip.js"),_=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),i=e("../../../node_modules/.pnpm/@wordpress+compose@7.5.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+deprecated@4.5.0/node_modules/@wordpress/deprecated/build-module/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/shortcut/index.js"),t=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/popover/utils.js"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const T=(0,n.createContext)({isNestedInTooltip:!1}),D=700,M={isNestedInTooltip:!0};function u(w,x){const{children:c,className:L,delay:y=D,hideOnClick:P=!0,placement:v,position:O,shortcut:g,text:B,...C}=w,{isNestedInTooltip:b}=(0,n.useContext)(T),a=(0,i.Z)(s,"tooltip"),A=B||g?a:void 0,W=n.Children.count(c)===1;let I;v!==void 0?I=v:O!==void 0&&(I=(0,t.KF)(O),(0,p.Z)("`position` prop in wp.components.tooltip",{since:"6.4",alternative:"`placement` prop"})),I=I||"bottom";const j=d._({placement:I,showTimeout:y}),U=j.useState("mounted");if(b)return W?(0,r.jsx)(m.u,{...C,render:c}):c;function K(S){return A&&U?(0,n.cloneElement)(S,{"aria-describedby":A}):S}return(0,r.jsxs)(T.Provider,{value:M,children:[(0,r.jsx)(l.e,{onClick:P?j.hide:void 0,store:j,render:W?K(c):void 0,ref:x,children:W?void 0:c}),W&&(B||g)&&(0,r.jsxs)(E.u,{...C,className:(0,_.Z)("components-tooltip",L),unmountOnHide:!0,gutter:4,id:A,overflowPadding:.5,store:j,children:[B,g&&(0,r.jsx)(o.Z,{className:B?"components-tooltip__shortcut":"",shortcut:g})]})]})}const s=(0,n.forwardRef)(u),h=s},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js":(R,f,e)=>{e.d(f,{I:()=>i});var d=e("../../../node_modules/.pnpm/@emotion+react@11.13.0_react@18.3.1/node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js"),m=e("../../../node_modules/.pnpm/@emotion+utils@1.4.0/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),l=e("../../../node_modules/.pnpm/@emotion+css@11.13.0/node_modules/@emotion/css/dist/emotion-css.esm.js"),E=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const _=n=>typeof n!="undefined"&&n!==null&&["name","styles"].every(p=>typeof n[p]!="undefined"),i=()=>{const n=(0,d._)();return(0,E.useCallback)((...o)=>{if(n===null)throw new Error("The `useCx` hook should be only used within a valid Emotion Cache Context");return(0,l.cx)(...o.map(t=>_(t)?((0,m.My)(n,t,!1),`${n.key}-${t.name}`):t))},[n])}},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/hooks/use-update-effect.js":(R,f,e)=>{e.d(f,{Z:()=>l});var d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function m(E,_){const i=(0,d.useRef)(!1);(0,d.useEffect)(()=>{if(i.current)return E();i.current=!0},_),(0,d.useEffect)(()=>()=>{i.current=!1},[])}const l=m},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/view/component.js":(R,f,e)=>{e.d(f,{Z:()=>n});var d=e("../../../node_modules/.pnpm/@emotion+styled@11.13.0_@emotion+react@11.13.0_react@18.3.1__react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const E=(0,d.Z)("div",{target:"e19lxcc00"})("");function _({as:p,...o},t){return(0,l.jsx)(E,{as:p,ref:t,...o})}const n=Object.assign((0,m.forwardRef)(_),{selector:".components-view"})},"../../../node_modules/.pnpm/@wordpress+components@28.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js":(R,f,e)=>{e.d(f,{Z:()=>p});var d=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/use-context-system.js"),m=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js");const l={border:0,clip:"rect(1px, 1px, 1px, 1px)",WebkitClipPath:"inset( 50% )",clipPath:"inset( 50% )",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",wordWrap:"normal"};var E=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/view/component.js"),_=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function i(o,t){const{style:r,...T}=(0,d.y)(o,"VisuallyHidden");return(0,_.jsx)(E.Z,{ref:t,...T,style:{...l,...r||{}}})}const p=(0,m.Iq)(i,"VisuallyHidden")}}]);})();