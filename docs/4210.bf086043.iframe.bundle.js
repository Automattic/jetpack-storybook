"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4210,3897],{"../../../node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.2.33_react@18.2.0/node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js":(B,P,t)=>{t.d(P,{C:()=>f,T:()=>g,_:()=>b,w:()=>C});var n=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=t("../../../node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),l=t("../../../node_modules/.pnpm/@emotion+serialize@1.1.3/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),u=t("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),_=!0,h={}.hasOwnProperty,c=n.createContext(typeof HTMLElement!="undefined"?(0,a.Z)({key:"css"}):null),f=c.Provider,b=function(){return(0,n.useContext)(c)},C=function(e){return(0,n.forwardRef)(function(o,s){var O=(0,n.useContext)(c);return e(o,O,s)})};_||(C=function(e){return function(o){var s=(0,n.useContext)(c);return s===null?(s=(0,a.Z)({key:"css"}),n.createElement(c.Provider,{value:s},e(o,s))):e(o,s)}});var g=n.createContext({}),A=function(){return React.useContext(g)},w=function(e,o){if(typeof o=="function"){var s=o(e);return s}return _extends({},e,o)},T=null,d=function(e){var o=React.useContext(g);return e.theme!==o&&(o=T(o)(e.theme)),React.createElement(g.Provider,{value:o},e.children)};function m(p){var e=p.displayName||p.name||"Component",o=function(R,j){var W=React.useContext(g);return React.createElement(p,_extends({theme:W,ref:j},R))},s=React.forwardRef(o);return s.displayName="WithTheme("+e+")",hoistNonReactStatics(s,p)}var y=function(e){var o=e.split(".");return o[o.length-1]},S=function(e){var o=/^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(e);if(o||(o=/^([A-Za-z0-9$.]+)@/.exec(e),o))return y(o[1])},r=new Set(["renderWithHooks","processChild","finishClassComponent","renderToString"]),v=function(e){return e.replace(/\$/g,"-")},i=function(e){if(e)for(var o=e.split(`
`),s=0;s<o.length;s++){var O=S(o[s]);if(O){if(r.has(O))break;if(/^[A-Z]/.test(O))return v(O)}}},E="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",L="__EMOTION_LABEL_PLEASE_DO_NOT_USE__",D=function(e,o){var s={};for(var O in o)h.call(o,O)&&(s[O]=o[O]);if(s[E]=e,!1)var R;return s},M=function(e){var o=e.cache,s=e.serialized,O=e.isStringTag;return registerStyles(o,s,O),useInsertionEffectAlwaysWithSyncFallback(function(){return insertStyles(o,s,O)}),null},x=null,I=null},"../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_@types+react@18.2.33_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js":(B,P,t)=>{t.d(P,{Z:()=>T});var n=t("../../../node_modules/.pnpm/@babel+runtime@7.23.8/node_modules/@babel/runtime/helpers/esm/extends.js"),a=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=t("../../../node_modules/.pnpm/@emotion+is-prop-valid@1.2.1/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js"),u=t("../../../node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.2.33_react@18.2.0/node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),_=t("../../../node_modules/.pnpm/@emotion+utils@1.2.1/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),h=t("../../../node_modules/.pnpm/@emotion+serialize@1.1.3/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),c=t("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),f=l.Z,b=function(m){return m!=="theme"},C=function(m){return typeof m=="string"&&m.charCodeAt(0)>96?f:b},g=function(m,y,S){var r;if(y){var v=y.shouldForwardProp;r=m.__emotion_forwardProp&&v?function(i){return m.__emotion_forwardProp(i)&&v(i)}:v}return typeof r!="function"&&S&&(r=m.__emotion_forwardProp),r},A=`You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,w=function(m){var y=m.cache,S=m.serialized,r=m.isStringTag;return(0,_.hC)(y,S,r),(0,c.L)(function(){return(0,_.My)(y,S,r)}),null},T=function d(m,y){var S=m.__emotion_real===m,r=S&&m.__emotion_base||m,v,i;y!==void 0&&(v=y.label,i=y.target);var E=g(m,y,S),L=E||C(r),D=!L("as");return function(){var M=arguments,x=S&&m.__emotion_styles!==void 0?m.__emotion_styles.slice(0):[];if(v!==void 0&&x.push("label:"+v+";"),M[0]==null||M[0].raw===void 0)x.push.apply(x,M);else{x.push(M[0][0]);for(var I=M.length,p=1;p<I;p++)x.push(M[p],M[0][p])}var e=(0,u.w)(function(o,s,O){var R=D&&o.as||r,j="",W=[],k=o;if(o.theme==null){k={};for(var F in o)k[F]=o[F];k.theme=a.useContext(u.T)}typeof o.className=="string"?j=(0,_.fp)(s.registered,W,o.className):o.className!=null&&(j=o.className+" ");var U=(0,h.O)(x.concat(W),s.registered,k);j+=s.key+"-"+U.name,i!==void 0&&(j+=" "+i);var K=D&&E===void 0?C(R):L,z={};for(var N in o)D&&N==="as"||K(N)&&(z[N]=o[N]);return z.className=j,z.ref=O,a.createElement(a.Fragment,null,a.createElement(w,{cache:s,serialized:U,isStringTag:typeof R=="string"}),a.createElement(R,z))});return e.displayName=v!==void 0?v:"Styled("+(typeof r=="string"?r:r.displayName||r.name||"Component")+")",e.defaultProps=m.defaultProps,e.__emotion_real=e,e.__emotion_base=r,e.__emotion_styles=x,e.__emotion_forwardProp=E,Object.defineProperty(e,"toString",{value:function(){return"."+i}}),e.withComponent=function(o,s){return d(o,(0,n.Z)({},y,s,{shouldForwardProp:g(e,s,!0)})).apply(void 0,x)},e}}},"../../../node_modules/.pnpm/@storybook+addon-actions@7.6.17/node_modules/@storybook/addon-actions/dist/index.mjs":(B,P,t)=>{t.d(P,{aD:()=>y});var n=t("../../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),a=t("@storybook/preview-api"),l=t("@storybook/global"),u=t("../../../node_modules/.pnpm/@storybook+core-events@7.6.17/node_modules/@storybook/core-events/dist/errors/preview-errors.mjs"),_="actions",h="storybook/actions",c=`${h}/panel`,f=`${h}/action-event`,b=`${h}/action-clear`,C="$___storybook.isCyclic",g={depth:10,clearOnStoryChange:!0,limit:50},A=(r={})=>{Object.assign(g,r)},w=(r,v)=>{let i=Object.getPrototypeOf(r);return!i||v(i)?i:w(i,v)},T=r=>!!(typeof r=="object"&&r&&w(r,v=>/^Synthetic(?:Base)?Event$/.test(v.constructor.name))&&typeof r.persist=="function"),d=r=>{if(T(r)){let v=Object.create(r.constructor.prototype,Object.getOwnPropertyDescriptors(r));v.persist();let i=Object.getOwnPropertyDescriptor(v,"view"),E=i==null?void 0:i.value;return typeof E=="object"&&(E==null?void 0:E.constructor.name)==="Window"&&Object.defineProperty(v,"view",{...i,value:Object.create(E.constructor.prototype)}),v}return r},m=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,n.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2);function y(r,v={}){let i={...g,...v},E=function(...L){var o,s;if(v.implicit){let O=(o="__STORYBOOK_PREVIEW__"in l.global?l.global.__STORYBOOK_PREVIEW__:void 0)==null?void 0:o.storyRenders.find(R=>R.phase==="playing"||R.phase==="rendering");if(O){let R=!((s=window==null?void 0:window.FEATURES)!=null&&s.disallowImplicitActionsInRenderV8),j=new u.is({phase:O.phase,name:r,deprecated:R});if(R)console.warn(j);else throw j}}let D=a.addons.getChannel(),M=m(),x=5,I=L.map(d),p=L.length>1?I:I[0],e={id:M,count:0,data:{name:r,args:p},options:{...i,maxDepth:x+(i.depth||3),allowFunction:i.allowFunction||!1}};D.emit(f,e)};return E.isAction=!0,E}var S=(...r)=>{let v=g,i=r;i.length===1&&Array.isArray(i[0])&&([i]=i),i.length!==1&&typeof i[i.length-1]!="string"&&(v={...g,...i.pop()});let E=i[0];(i.length!==1||typeof E=="string")&&(E={},i.forEach(D=>{E[D]=D}));let L={};return Object.keys(E).forEach(D=>{L[D]=y(E[D],v)}),L}},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(B,P,t)=>{t.d(P,{ZP:()=>m});var n=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),l=t.n(a),u=t("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_@types+react@18.2.33_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),_=t("../../../node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.2.33_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),h=t("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),c=t("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function f(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const b=_.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,C=(0,u.Z)("svg",{target:"ea4tfvq2"})("width:",h.Z.spinnerSize,"px;height:",h.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",c.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),g={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},A=(0,u.Z)("circle",{target:"ea4tfvq1"})(g,";stroke:",c.D.gray[300],";"),w=(0,u.Z)("path",{target:"ea4tfvq0"})(g,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",b,";");function T({className:y,...S},r){return(0,n.createElement)(C,{className:l()("components-spinner",y),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...S,ref:r},(0,n.createElement)(A,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,n.createElement)(w,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const m=(0,n.forwardRef)(T)},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js":(B,P,t)=>{t.d(P,{Z:()=>c});var n=t("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/space.js"),a=t("../../../node_modules/.pnpm/@wordpress+components@26.0.0_@types+react@18.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");const l="36px",u="12px",_={controlSurfaceColor:a.D.white,controlTextActiveColor:a.D.theme.accent,controlPaddingX:u,controlPaddingXLarge:`calc(${u} * 1.3334)`,controlPaddingXSmall:`calc(${u} / 1.3334)`,controlBackgroundColor:a.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${a.D.theme.accent}`,controlDestructiveBorderColor:a.D.alert.red,controlHeight:l,controlHeightXSmall:`calc( ${l} * 0.6 )`,controlHeightSmall:`calc( ${l} * 0.8 )`,controlHeightLarge:`calc( ${l} * 1.2 )`,controlHeightXLarge:`calc( ${l} * 1.4 )`},h={toggleGroupControlBackgroundColor:_.controlBackgroundColor,toggleGroupControlBorderColor:a.D.ui.border,toggleGroupControlBackdropBackgroundColor:_.controlSurfaceColor,toggleGroupControlBackdropBorderColor:a.D.ui.border,toggleGroupControlButtonColorActive:_.controlBackgroundColor},c=Object.assign({},_,h,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.2",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,n.D)(2)}`,cardPaddingSmall:`${(0,n.D)(4)}`,cardPaddingMedium:`${(0,n.D)(4)} ${(0,n.D)(6)}`,cardPaddingLarge:`${(0,n.D)(6)} ${(0,n.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:a.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:a.D.white,surfaceColor:a.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/@wordpress+compose@6.28.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-debounce/index.js":(B,P,t)=>{t.d(P,{Z:()=>u});var n=t("../../../node_modules/.pnpm/use-memo-one@1.1.3_react@18.2.0/node_modules/use-memo-one/dist/use-memo-one.esm.js"),a=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=t("../../../node_modules/.pnpm/@wordpress+compose@6.28.0_react@18.2.0/node_modules/@wordpress/compose/build-module/utils/debounce/index.js");function u(_,h,c){const f=(0,n.Pr)(()=>(0,l.D)(_,h!=null?h:0,c),[_,h,c]);return(0,a.useEffect)(()=>()=>f.cancel(),[f]),f}},"../../../node_modules/.pnpm/@wordpress+compose@6.28.0_react@18.2.0/node_modules/@wordpress/compose/build-module/utils/debounce/index.js":(B,P,t)=>{t.d(P,{D:()=>n});const n=(a,l,u)=>{let _,h,c=0,f,b,C,g=0,A=!1,w=!1,T=!0;u&&(A=!!u.leading,w="maxWait"in u,u.maxWait!==void 0&&(c=Math.max(u.maxWait,l)),T="trailing"in u?!!u.trailing:T);function d(e){const o=_,s=h;return _=void 0,h=void 0,g=e,f=a.apply(s,o),f}function m(e,o){b=setTimeout(e,o)}function y(){b!==void 0&&clearTimeout(b)}function S(e){return g=e,m(E,l),A?d(e):f}function r(e){return e-(C||0)}function v(e){const o=r(e),s=e-g,O=l-o;return w?Math.min(O,c-s):O}function i(e){const o=r(e),s=e-g;return C===void 0||o>=l||o<0||w&&s>=c}function E(){const e=Date.now();if(i(e))return D(e);m(E,v(e))}function L(){b=void 0}function D(e){return L(),T&&_?d(e):(_=h=void 0,f)}function M(){y(),g=0,L(),_=C=h=void 0}function x(){return I()?D(Date.now()):f}function I(){return b!==void 0}function p(...e){const o=Date.now(),s=i(o);if(_=e,h=this,C=o,s){if(!I())return S(C);if(w)return m(E,l),d(C)}return I()||m(E,l),f}return p.cancel=M,p.flush=x,p.pending=I,p}},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js":(B,P,t)=>{t.d(P,{Z:()=>l});var n=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function a({icon:u,size:_=24,...h},c){return(0,n.cloneElement)(u,{width:_,height:_,...h,ref:c})}const l=(0,n.forwardRef)(a)},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close-small.js":(B,P,t)=>{t.d(P,{Z:()=>u});var n=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=t("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const u=(0,n.createElement)(a.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(a.y$,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/map-marker.js":(B,P,t)=>{t.d(P,{Z:()=>u});var n=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=t("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const u=(0,n.createElement)(a.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(a.y$,{d:"M12 9c-.8 0-1.5.7-1.5 1.5S11.2 12 12 12s1.5-.7 1.5-1.5S12.8 9 12 9zm0-5c-3.6 0-6.5 2.8-6.5 6.2 0 .8.3 1.8.9 3.1.5 1.1 1.2 2.3 2 3.6.7 1 3 3.8 3.2 3.9l.4.5.4-.5c.2-.2 2.6-2.9 3.2-3.9.8-1.2 1.5-2.5 2-3.6.6-1.3.9-2.3.9-3.1C18.5 6.8 15.6 4 12 4zm4.3 8.7c-.5 1-1.1 2.2-1.9 3.4-.5.7-1.7 2.2-2.4 3-.7-.8-1.9-2.3-2.4-3-.8-1.2-1.4-2.3-1.9-3.3-.6-1.4-.7-2.2-.7-2.5 0-2.6 2.2-4.7 5-4.7s5 2.1 5 4.7c0 .2-.1 1-.7 2.4z"}))},"../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js":(B,P,t)=>{t.d(P,{Cd:()=>u,G:()=>_,UL:()=>b,Wj:()=>T,mg:()=>f,y$:()=>c});var n=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),a=t.n(n),l=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const u=d=>(0,l.createElement)("circle",d),_=d=>(0,l.createElement)("g",d),h=d=>createElement("line",d),c=d=>(0,l.createElement)("path",d),f=d=>(0,l.createElement)("polygon",d),b=d=>(0,l.createElement)("rect",d),C=d=>createElement("defs",d),g=d=>createElement("radialGradient",d),A=d=>createElement("linearGradient",d),w=d=>createElement("stop",d),T=(0,l.forwardRef)(({className:d,isPressed:m,...y},S)=>{const r={...y,className:a()(d,{"is-pressed":m})||void 0,"aria-hidden":!0,focusable:!1};return(0,l.createElement)("svg",{...r,ref:S})});T.displayName="SVG"},"../../../node_modules/.pnpm/use-memo-one@1.1.3_react@18.2.0/node_modules/use-memo-one/dist/use-memo-one.esm.js":(B,P,t)=>{t.d(P,{Pr:()=>l});var n=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function a(c,f){if(c.length!==f.length)return!1;for(var b=0;b<c.length;b++)if(c[b]!==f[b])return!1;return!0}function l(c,f){var b=(0,n.useState)(function(){return{inputs:f,result:c()}})[0],C=(0,n.useRef)(!0),g=(0,n.useRef)(b),A=C.current||!!(f&&g.current.inputs&&a(f,g.current.inputs)),w=A?g.current:{inputs:f,result:c()};return(0,n.useEffect)(function(){C.current=!1,g.current=w},[w]),w.result}function u(c,f){return l(function(){return c},f)}var _=null,h=null}}]);})();
