"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3213],{"../../../node_modules/.pnpm/@emotion+react@11.11.4_react@18.3.1/node_modules/@emotion/react/dist/emotion-element-43c6fea0.browser.esm.js":(I,v,e)=>{e.d(v,{C:()=>p,T:()=>d,_:()=>r,w:()=>s});var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),c=e("../../../node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),u=e("../../../node_modules/.pnpm/@emotion+serialize@1.1.4/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),h=e("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.3.1/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),_=!0,a={}.hasOwnProperty,l=t.createContext(typeof HTMLElement!="undefined"?(0,c.Z)({key:"css"}):null),p=l.Provider,r=function(){return(0,t.useContext)(l)},s=function(o){return(0,t.forwardRef)(function(n,m){var O=(0,t.useContext)(l);return o(n,O,m)})};_||(s=function(o){return function(n){var m=(0,t.useContext)(l);return m===null?(m=(0,c.Z)({key:"css"}),t.createElement(l.Provider,{value:m},o(n,m))):o(n,m)}});var d=t.createContext({}),D=function(){return React.useContext(d)},T=function(o,n){if(typeof n=="function"){var m=n(o);return m}return _extends({},o,n)},P=null,g=function(o){var n=React.useContext(d);return o.theme!==n&&(n=P(n)(o.theme)),React.createElement(d.Provider,{value:n},o.children)};function i(E){var o=E.displayName||E.name||"Component",n=function(R,B){var S=React.useContext(d);return React.createElement(E,_extends({theme:S,ref:B},R))},m=React.forwardRef(n);return m.displayName="WithTheme("+o+")",hoistNonReactStatics(m,E)}var C=function(o){var n=o.split(".");return n[n.length-1]},b=function(o){var n=/^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(o);if(n||(n=/^([A-Za-z0-9$.]+)@/.exec(o),n))return C(n[1])},y=new Set(["renderWithHooks","processChild","finishClassComponent","renderToString"]),f=function(o){return o.replace(/\$/g,"-")},M=function(o){if(o)for(var n=o.split(`
`),m=0;m<n.length;m++){var O=b(n[m]);if(O){if(y.has(O))break;if(/^[A-Z]/.test(O))return f(O)}}},A="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",L="__EMOTION_LABEL_PLEASE_DO_NOT_USE__",j=function(o,n){var m={};for(var O in n)a.call(n,O)&&(m[O]=n[O]);if(m[A]=o,!1)var R;return m},x=function(o){var n=o.cache,m=o.serialized,O=o.isStringTag;return registerStyles(n,m,O),useInsertionEffectAlwaysWithSyncFallback(function(){return insertStyles(n,m,O)}),null},w=null,U=null},"../../../node_modules/.pnpm/@emotion+styled@11.11.5_@emotion+react@11.11.4_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js":(I,v,e)=>{e.d(v,{Z:()=>P});var t=e("../../../node_modules/.pnpm/@babel+runtime@7.24.0/node_modules/@babel/runtime/helpers/esm/extends.js"),c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),u=e("../../../node_modules/.pnpm/@emotion+is-prop-valid@1.2.2/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js"),h=e("../../../node_modules/.pnpm/@emotion+react@11.11.4_react@18.3.1/node_modules/@emotion/react/dist/emotion-element-43c6fea0.browser.esm.js"),_=e("../../../node_modules/.pnpm/@emotion+utils@1.2.1/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),a=e("../../../node_modules/.pnpm/@emotion+serialize@1.1.4/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),l=e("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.3.1/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),p=u.Z,r=function(i){return i!=="theme"},s=function(i){return typeof i=="string"&&i.charCodeAt(0)>96?p:r},d=function(i,C,b){var y;if(C){var f=C.shouldForwardProp;y=i.__emotion_forwardProp&&f?function(M){return i.__emotion_forwardProp(M)&&f(M)}:f}return typeof y!="function"&&b&&(y=i.__emotion_forwardProp),y},D=`You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,T=function(i){var C=i.cache,b=i.serialized,y=i.isStringTag;return(0,_.hC)(C,b,y),(0,l.L)(function(){return(0,_.My)(C,b,y)}),null},P=function g(i,C){var b=i.__emotion_real===i,y=b&&i.__emotion_base||i,f,M;C!==void 0&&(f=C.label,M=C.target);var A=d(i,C,b),L=A||s(y),j=!L("as");return function(){var x=arguments,w=b&&i.__emotion_styles!==void 0?i.__emotion_styles.slice(0):[];if(f!==void 0&&w.push("label:"+f+";"),x[0]==null||x[0].raw===void 0)w.push.apply(w,x);else{w.push(x[0][0]);for(var U=x.length,E=1;E<U;E++)w.push(x[E],x[0][E])}var o=(0,h.w)(function(n,m,O){var R=j&&n.as||y,B="",S=[],N=n;if(n.theme==null){N={};for(var F in n)N[F]=n[F];N.theme=c.useContext(h.T)}typeof n.className=="string"?B=(0,_.fp)(m.registered,S,n.className):n.className!=null&&(B=n.className+" ");var z=(0,a.O)(w.concat(S),m.registered,N);B+=m.key+"-"+z.name,M!==void 0&&(B+=" "+M);var Z=j&&A===void 0?s(R):L,K={};for(var W in n)j&&W==="as"||Z(W)&&(K[W]=n[W]);return K.className=B,K.ref=O,c.createElement(c.Fragment,null,c.createElement(T,{cache:m,serialized:z,isStringTag:typeof R=="string"}),c.createElement(R,K))});return o.displayName=f!==void 0?f:"Styled("+(typeof y=="string"?y:y.displayName||y.name||"Component")+")",o.defaultProps=i.defaultProps,o.__emotion_real=o,o.__emotion_base=y,o.__emotion_styles=w,o.__emotion_forwardProp=A,Object.defineProperty(o,"toString",{value:function(){return"."+M}}),o.withComponent=function(n,m){return g(n,(0,t.Z)({},C,m,{shouldForwardProp:d(o,m,!0)})).apply(void 0,w)},o}}},"../../../node_modules/.pnpm/@wordpress+components@27.5.0_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js":(I,v,e)=>{e.d(v,{ZP:()=>P,zx:()=>T});var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),c=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),u=e.n(c),h=e("../../../node_modules/.pnpm/@wordpress+deprecated@3.57.0/node_modules/@wordpress/deprecated/build-module/index.js"),_=e("../../../node_modules/.pnpm/@wordpress+compose@6.34.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+components@27.5.0_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/tooltip/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+components@27.5.0_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/icon/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+components@27.5.0_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),r=e("../../../node_modules/.pnpm/@wordpress+components@27.5.0_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/popover/utils.js");const s=["onMouseDown","onClick"];function d({isDefault:g,isPrimary:i,isSecondary:C,isTertiary:b,isLink:y,isPressed:f,isSmall:M,size:A,variant:L,...j}){let x=A,w=L;const U={"aria-pressed":f};if(M){var E;(E=x)!==null&&E!==void 0||(x="small")}if(i){var o;(o=w)!==null&&o!==void 0||(w="primary")}if(b){var n;(n=w)!==null&&n!==void 0||(w="tertiary")}if(C){var m;(m=w)!==null&&m!==void 0||(w="secondary")}if(g){var O;(0,h.Z)("wp.components.Button `isDefault` prop",{since:"5.4",alternative:'variant="secondary"'}),(O=w)!==null&&O!==void 0||(w="secondary")}if(y){var R;(R=w)!==null&&R!==void 0||(w="link")}return{...U,...j,size:x,variant:w}}function D(g,i){var Q,q;const{__next40pxDefaultSize:C,isBusy:b,isDestructive:y,className:f,disabled:M,icon:A,iconPosition:L="left",iconSize:j,showTooltip:x,tooltipPosition:w,shortcut:U,label:E,children:o,size:n="default",text:m,variant:O,__experimentalIsFocusable:R,describedBy:B,...S}=d(g),{href:N,target:F,"aria-checked":z,"aria-pressed":Z,"aria-selected":K,...W}="href"in S?S:{href:void 0,target:void 0,...S},ee=(0,_.Z)(T,"components-button__description"),te=typeof o=="string"&&!!o||Array.isArray(o)&&(o==null?void 0:o[0])&&o[0]!==null&&((q=(Q=o==null?void 0:o[0])==null?void 0:Q.props)==null?void 0:q.className)!=="components-tooltip",oe=[!0,"true","mixed"],ne=u()("components-button",f,{"is-next-40px-default-size":C,"is-secondary":O==="secondary","is-primary":O==="primary","is-small":n==="small","is-compact":n==="compact","is-tertiary":O==="tertiary","is-pressed":oe.includes(Z),"is-pressed-mixed":Z==="mixed","is-busy":b,"is-link":O==="link","is-destructive":y,"has-text":!!A&&(te||m),"has-icon":!!A}),k=M&&!R,X=N!==void 0&&!k?"a":"button",$=X==="button"?{type:"button",disabled:k,"aria-checked":z,"aria-pressed":Z,"aria-selected":K}:{},H=X==="a"?{href:N,target:F}:{};if(M&&R){$["aria-disabled"]=!0,H["aria-disabled"]=!0;for(const ae of s)W[ae]=Y=>{Y&&(Y.stopPropagation(),Y.preventDefault())}}const se=!k&&(x&&!!E||!!U||!!E&&!(o!=null&&o.length)&&x!==!1),G=B?ee:void 0,re=W["aria-describedby"]||G,V={className:ne,"aria-label":W["aria-label"]||E,"aria-describedby":re,ref:i},J=(0,t.createElement)(t.Fragment,null,A&&L==="left"&&(0,t.createElement)(l.Z,{icon:A,size:j}),m&&(0,t.createElement)(t.Fragment,null,m),o,A&&L==="right"&&(0,t.createElement)(l.Z,{icon:A,size:j})),de=X==="a"?(0,t.createElement)("a",{...H,...W,...V},J):(0,t.createElement)("button",{...$,...W,...V},J),ie=se?{text:o!=null&&o.length&&B?B:E,shortcut:U,placement:w&&(0,r.KF)(w)}:{};return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(a.ZP,{...ie},de),B&&(0,t.createElement)(p.Z,null,(0,t.createElement)("span",{id:G},B)))}const T=(0,t.forwardRef)(D),P=T},"../../../node_modules/.pnpm/@wordpress+components@27.5.0_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/context/constants.js":(I,v,e)=>{e.d(v,{_3:()=>c,cT:()=>t,rE:()=>u});const t="data-wp-component",c="data-wp-c16t",u="__contextSystemKey__"},"../../../node_modules/.pnpm/@wordpress+components@27.5.0_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js":(I,v,e)=>{e.d(v,{H:()=>r,Iq:()=>_,Kc:()=>a});var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),c=e("../../../node_modules/.pnpm/@wordpress+warning@2.57.0/node_modules/@wordpress/warning/build-module/index.js"),u=e("../../../node_modules/.pnpm/@wordpress+components@27.5.0_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/context/constants.js"),h=e("../../../node_modules/.pnpm/@wordpress+components@27.5.0_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/context/get-styled-class-name-from-key.js");function _(s,d){return l(s,d,{forwardsRef:!0})}function a(s,d){return l(s,d)}function l(s,d,D){const T=D!=null&&D.forwardsRef?(0,t.forwardRef)(s):s;typeof d=="undefined"&&typeof SCRIPT_DEBUG!="undefined"&&SCRIPT_DEBUG===!0&&(0,c.Z)("contextConnect: Please provide a namespace");let P=T[u.rE]||[d];return Array.isArray(d)&&(P=[...P,...d]),typeof d=="string"&&(P=[...P,d]),Object.assign(T,{[u.rE]:[...new Set(P)],displayName:d,selector:`.${(0,h.l)(d)}`})}function p(s){if(!s)return[];let d=[];return s[u.rE]&&(d=s[u.rE]),s.type&&s.type[u.rE]&&(d=s.type[u.rE]),d}function r(s,d){return s?typeof d=="string"?p(s).includes(d):Array.isArray(d)?d.some(D=>p(s).includes(D)):!1:!1}},"../../../node_modules/.pnpm/@wordpress+components@27.5.0_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/context/context-system-provider.js":(I,v,e)=>{e.d(v,{Cd:()=>r,G8:()=>T,eb:()=>s});var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),c=e("../../../node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js"),u=e.n(c),h=e("../../../node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/es6/index.js"),_=e.n(h),a=e("../../../node_modules/.pnpm/is-plain-object@5.0.0/node_modules/is-plain-object/dist/is-plain-object.mjs"),l=e("../../../node_modules/.pnpm/@wordpress+warning@2.57.0/node_modules/@wordpress/warning/build-module/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+components@27.5.0_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/utils/hooks/use-update-effect.js");const r=(0,t.createContext)({}),s=()=>(0,t.useContext)(r);function d({value:P}){const g=s(),i=(0,t.useRef)(P);return(0,p.Z)(()=>{_()(i.current,P)&&i.current!==P&&typeof SCRIPT_DEBUG!="undefined"&&SCRIPT_DEBUG===!0&&(0,l.Z)(`Please memoize your context: ${JSON.stringify(P)}`)},[P]),(0,t.useMemo)(()=>u()(g!=null?g:{},P!=null?P:{},{isMergeableObject:a.P}),[g,P])}const D=({children:P,value:g})=>{const i=d({value:g});return(0,t.createElement)(r.Provider,{value:i},P)},T=(0,t.memo)(D)},"../../../node_modules/.pnpm/@wordpress+components@27.5.0_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/context/get-styled-class-name-from-key.js":(I,v,e)=>{e.d(v,{l:()=>h});var t=e("../../../node_modules/.pnpm/param-case@3.0.4/node_modules/param-case/dist.es2015/index.js"),c=e("../../../node_modules/.pnpm/memize@2.1.0/node_modules/memize/dist/index.js");function u(_){return`components-${(0,t.o)(_)}`}const h=(0,c.Z)(u)},"../../../node_modules/.pnpm/@wordpress+components@27.5.0_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/context/use-context-system.js":(I,v,e)=>{e.d(v,{y:()=>p});var t=e("../../../node_modules/.pnpm/@wordpress+warning@2.57.0/node_modules/@wordpress/warning/build-module/index.js"),c=e("../../../node_modules/.pnpm/@wordpress+components@27.5.0_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/context/context-system-provider.js"),u=e("../../../node_modules/.pnpm/@wordpress+components@27.5.0_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/context/constants.js");function h(r){return{[u.cT]:r}}function _(){return{[u._3]:!0}}var a=e("../../../node_modules/.pnpm/@wordpress+components@27.5.0_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/context/get-styled-class-name-from-key.js"),l=e("../../../node_modules/.pnpm/@wordpress+components@27.5.0_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js");function p(r,s){const d=(0,c.eb)();typeof s=="undefined"&&typeof SCRIPT_DEBUG!="undefined"&&SCRIPT_DEBUG===!0&&(0,t.Z)("useContextSystem: Please provide a namespace");const D=(d==null?void 0:d[s])||{},T={..._(),...h(s)},{_overrides:P,...g}=D,i=Object.entries(g).length?Object.assign({},g,r):r,b=(0,l.I)()((0,a.l)(s),r.className),y=typeof i.renderChildren=="function"?i.renderChildren(i):i.children;for(const f in i)T[f]=i[f];for(const f in P)T[f]=P[f];return y!==void 0&&(T.children=y),T.className=b,T}},"../../../node_modules/.pnpm/@wordpress+components@27.5.0_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/dashicon/index.js":(I,v,e)=>{e.d(v,{Z:()=>u});var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function c({icon:h,className:_,size:a=20,style:l={},...p}){const r=["dashicon","dashicons","dashicons-"+h,_].filter(Boolean).join(" "),d={...a!=20?{fontSize:`${a}px`,width:`${a}px`,height:`${a}px`}:{},...l};return(0,t.createElement)("span",{className:r,style:d,...p})}const u=c},"../../../node_modules/.pnpm/@wordpress+components@27.5.0_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/icon/index.js":(I,v,e)=>{e.d(v,{Z:()=>_});var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),c=e("../../../node_modules/.pnpm/@wordpress+primitives@3.55.0/node_modules/@wordpress/primitives/build-module/svg/index.js"),u=e("../../../node_modules/.pnpm/@wordpress+components@27.5.0_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/dashicon/index.js");function h({icon:a=null,size:l=typeof a=="string"?20:24,...p}){if(typeof a=="string")return(0,t.createElement)(u.Z,{icon:a,size:l,...p});if((0,t.isValidElement)(a)&&u.Z===a.type)return(0,t.cloneElement)(a,{...p});if(typeof a=="function")return(0,t.createElement)(a,{size:l,...p});if(a&&(a.type==="svg"||a.type===c.Wj)){const r={...a.props,width:l,height:l,...p};return(0,t.createElement)(c.Wj,{...r})}return(0,t.isValidElement)(a)?(0,t.cloneElement)(a,{size:l,...p}):a}const _=h},"../../../node_modules/.pnpm/@wordpress+components@27.5.0_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/popover/utils.js":(I,v,e)=>{e.d(v,{CK:()=>l,KF:()=>c,d9:()=>h,sw:()=>p});const t={bottom:"bottom",top:"top","middle left":"left","middle right":"right","bottom left":"bottom-end","bottom center":"bottom","bottom right":"bottom-start","top left":"top-end","top center":"top","top right":"top-start","middle left left":"left","middle left right":"left","middle left bottom":"left-end","middle left top":"left-start","middle right left":"right","middle right right":"right","middle right bottom":"right-end","middle right top":"right-start","bottom left left":"bottom-end","bottom left right":"bottom-end","bottom left bottom":"bottom-end","bottom left top":"bottom-end","bottom center left":"bottom","bottom center right":"bottom","bottom center bottom":"bottom","bottom center top":"bottom","bottom right left":"bottom-start","bottom right right":"bottom-start","bottom right bottom":"bottom-start","bottom right top":"bottom-start","top left left":"top-end","top left right":"top-end","top left bottom":"top-end","top left top":"top-end","top center left":"top","top center right":"top","top center bottom":"top","top center top":"top","top right left":"top-start","top right right":"top-start","top right bottom":"top-start","top right top":"top-start",middle:"bottom","middle center":"bottom","middle center bottom":"bottom","middle center left":"bottom","middle center right":"bottom","middle center top":"bottom"},c=r=>{var s;return(s=t[r])!==null&&s!==void 0?s:"bottom"},u={top:{originX:.5,originY:1},"top-start":{originX:0,originY:1},"top-end":{originX:1,originY:1},right:{originX:0,originY:.5},"right-start":{originX:0,originY:0},"right-end":{originX:0,originY:1},bottom:{originX:.5,originY:0},"bottom-start":{originX:0,originY:0},"bottom-end":{originX:1,originY:0},left:{originX:1,originY:.5},"left-start":{originX:1,originY:0},"left-end":{originX:1,originY:1},overlay:{originX:.5,originY:.5}},h=r=>{const s=r.startsWith("top")||r.startsWith("bottom")?"translateY":"translateX",d=r.startsWith("top")||r.startsWith("left")?1:-1;return{style:u[r],initial:{opacity:0,scale:0,[s]:`${2*d}em`},animate:{opacity:1,scale:1,[s]:0},transition:{duration:.1,ease:[0,0,.2,1]}}};function _(r){return!!(r!=null&&r.top)}function a(r){return!!(r!=null&&r.current)}const l=({anchor:r,anchorRef:s,anchorRect:d,getAnchorRect:D,fallbackReferenceElement:T})=>{var P;let g=null;return r?g=r:_(s)?g={getBoundingClientRect(){const i=s.top.getBoundingClientRect(),C=s.bottom.getBoundingClientRect();return new window.DOMRect(i.x,i.y,i.width,C.bottom-i.top)}}:a(s)?g=s.current:s?g=s:d?g={getBoundingClientRect(){return d}}:D?g={getBoundingClientRect(){var i,C,b,y;const f=D(T);return new window.DOMRect((i=f.x)!==null&&i!==void 0?i:f.left,(C=f.y)!==null&&C!==void 0?C:f.top,(b=f.width)!==null&&b!==void 0?b:f.right-f.left,(y=f.height)!==null&&y!==void 0?y:f.bottom-f.top)}}:T&&(g=T.parentElement),(P=g)!==null&&P!==void 0?P:null},p=r=>r===null||Number.isNaN(r)?void 0:Math.round(r)},"../../../node_modules/.pnpm/@wordpress+components@27.5.0_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/shortcut/index.js":(I,v,e)=>{e.d(v,{Z:()=>u});var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function c(h){const{shortcut:_,className:a}=h;if(!_)return null;let l,p;return typeof _=="string"&&(l=_),_!==null&&typeof _=="object"&&(l=_.display,p=_.ariaLabel),(0,t.createElement)("span",{className:a,"aria-label":p},l)}const u=c},"../../../node_modules/.pnpm/@wordpress+components@27.5.0_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/tooltip/index.js":(I,v,e)=>{e.d(v,{ZP:()=>g});var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),c=e("../../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/2QMN5E6B.js"),u=e("../../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1/node_modules/@ariakit/react-core/esm/__chunks/FSFPRQFR.js"),h=e("../../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1/node_modules/@ariakit/react-core/esm/tooltip/tooltip-anchor.js"),_=e("../../../node_modules/.pnpm/@ariakit+react-core@0.3.14_react-dom@18.3.1_react@18.3.1/node_modules/@ariakit/react-core/esm/tooltip/tooltip.js"),a=e("../../../node_modules/.pnpm/@wordpress+compose@6.34.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),l=e("../../../node_modules/.pnpm/@wordpress+deprecated@3.57.0/node_modules/@wordpress/deprecated/build-module/index.js"),p=e("../../../node_modules/.pnpm/@wordpress+components@27.5.0_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/shortcut/index.js"),r=e("../../../node_modules/.pnpm/@wordpress+components@27.5.0_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/popover/utils.js");const s=(0,t.createContext)({isNestedInTooltip:!1}),d=700,D={isNestedInTooltip:!0};function T(i,C){const{children:b,delay:y=d,hideOnClick:f=!0,placement:M,position:A,shortcut:L,text:j,...x}=i,{isNestedInTooltip:w}=(0,t.useContext)(s),U=(0,a.Z)(P,"tooltip"),E=j||L?U:void 0,o=t.Children.count(b)===1;let n;M!==void 0?n=M:A!==void 0&&(n=(0,r.KF)(A),(0,l.Z)("`position` prop in wp.components.tooltip",{since:"6.4",alternative:"`placement` prop"})),n=n||"bottom";const m=c._,O=m({placement:n,showTimeout:y});return w?o?(0,t.createElement)(u.u,{...x,render:b}):b:(0,t.createElement)(s.Provider,{value:D},(0,t.createElement)(h.e,{onClick:f?O.hide:void 0,store:O,render:o?b:void 0,ref:C},o?void 0:b),o&&(j||L)&&(0,t.createElement)(_.u,{...x,className:"components-tooltip",unmountOnHide:!0,gutter:4,id:E,overflowPadding:.5,store:O},j,L&&(0,t.createElement)(p.Z,{className:j?"components-tooltip__shortcut":"",shortcut:L})))}const P=(0,t.forwardRef)(T),g=P},"../../../node_modules/.pnpm/@wordpress+components@27.5.0_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js":(I,v,e)=>{e.d(v,{I:()=>a});var t=e("../../../node_modules/.pnpm/@emotion+react@11.11.4_react@18.3.1/node_modules/@emotion/react/dist/emotion-element-43c6fea0.browser.esm.js"),c=e("../../../node_modules/.pnpm/@emotion+utils@1.2.1/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),u=e("../../../node_modules/.pnpm/@emotion+css@11.11.2/node_modules/@emotion/css/dist/emotion-css.esm.js"),h=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const _=l=>typeof l!="undefined"&&l!==null&&["name","styles"].every(p=>typeof l[p]!="undefined"),a=()=>{const l=(0,t._)();return(0,h.useCallback)((...r)=>{if(l===null)throw new Error("The `useCx` hook should be only used within a valid Emotion Cache Context");return(0,u.cx)(...r.map(s=>_(s)?((0,c.My)(l,s,!1),`${l.key}-${s.name}`):s))},[l])}},"../../../node_modules/.pnpm/@wordpress+components@27.5.0_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/utils/hooks/use-update-effect.js":(I,v,e)=>{e.d(v,{Z:()=>u});var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function c(h,_){const a=(0,t.useRef)(!1);(0,t.useEffect)(()=>{if(a.current)return h();a.current=!0},_)}const u=c},"../../../node_modules/.pnpm/@wordpress+components@27.5.0_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/view/component.js":(I,v,e)=>{e.d(v,{Z:()=>a});var t=e("../../../node_modules/.pnpm/@emotion+styled@11.11.5_@emotion+react@11.11.4_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),c=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const u=(0,t.Z)("div",{target:"e19lxcc00"})("");function h({as:l,...p},r){return(0,c.createElement)(u,{as:l,ref:r,...p})}const a=Object.assign((0,c.forwardRef)(h),{selector:".components-view"})},"../../../node_modules/.pnpm/@wordpress+components@27.5.0_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js":(I,v,e)=>{e.d(v,{Z:()=>p});var t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),c=e("../../../node_modules/.pnpm/@wordpress+components@27.5.0_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/context/use-context-system.js"),u=e("../../../node_modules/.pnpm/@wordpress+components@27.5.0_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js");const h={border:0,clip:"rect(1px, 1px, 1px, 1px)",WebkitClipPath:"inset( 50% )",clipPath:"inset( 50% )",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",wordWrap:"normal"};var _=e("../../../node_modules/.pnpm/@wordpress+components@27.5.0_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/view/component.js");function a(r,s){const{style:d,...D}=(0,c.y)(r,"VisuallyHidden");return(0,t.createElement)(_.Z,{ref:s,...D,style:{...h,...d||{}}})}const p=(0,u.Iq)(a,"VisuallyHidden")}}]);})();