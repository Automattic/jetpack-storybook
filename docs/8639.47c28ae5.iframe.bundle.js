(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8639],{"../../../node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/dist/emotion-element-43c6fea0.browser.esm.js":(T,E,r)=>{"use strict";r.d(E,{C:()=>S,T:()=>P,_:()=>C,w:()=>v});var l=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=r("../../../node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),f=r("../../../node_modules/.pnpm/@emotion+serialize@1.1.4/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),m=r("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.3.1/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),c=!0,g={}.hasOwnProperty,s=l.createContext(typeof HTMLElement!="undefined"?(0,n.Z)({key:"css"}):null),S=s.Provider,C=function(){return(0,l.useContext)(s)},v=function(o){return(0,l.forwardRef)(function(e,t){var u=(0,l.useContext)(s);return o(e,u,t)})};c||(v=function(o){return function(e){var t=(0,l.useContext)(s);return t===null?(t=(0,n.Z)({key:"css"}),l.createElement(s.Provider,{value:t},o(e,t))):o(e,t)}});var P=l.createContext({}),M=function(){return React.useContext(P)},R=function(o,e){if(typeof e=="function"){var t=e(o);return t}return _extends({},o,e)},B=null,O=function(o){var e=React.useContext(P);return o.theme!==e&&(e=B(e)(o.theme)),React.createElement(P.Provider,{value:e},o.children)};function a(i){var o=i.displayName||i.name||"Component",e=function(D,x){var z=React.useContext(P);return React.createElement(i,_extends({theme:z,ref:x},D))},t=React.forwardRef(e);return t.displayName="WithTheme("+o+")",hoistNonReactStatics(t,i)}var p=function(o){var e=o.split(".");return e[e.length-1]},_=function(o){var e=/^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(o);if(e||(e=/^([A-Za-z0-9$.]+)@/.exec(o),e))return p(e[1])},d=new Set(["renderWithHooks","processChild","finishClassComponent","renderToString"]),h=function(o){return o.replace(/\$/g,"-")},b=function(o){if(o)for(var e=o.split(`
`),t=0;t<e.length;t++){var u=_(e[t]);if(u){if(d.has(u))break;if(/^[A-Z]/.test(u))return h(u)}}},N="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",I="__EMOTION_LABEL_PLEASE_DO_NOT_USE__",j=function(o,e){var t={};for(var u in e)g.call(e,u)&&(t[u]=e[u]);if(t[N]=o,!1)var D;return t},w=function(o){var e=o.cache,t=o.serialized,u=o.isStringTag;return registerStyles(e,t,u),useInsertionEffectAlwaysWithSyncFallback(function(){return insertStyles(e,t,u)}),null},y=null,U=null},"../../../node_modules/.pnpm/@emotion+styled@11.11.5_@emotion+react@11.11.4_@types+react@18.3.1_react@18.3.1__@types+react@18.3.1_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js":(T,E,r)=>{"use strict";r.d(E,{Z:()=>B});var l=r("../../../node_modules/.pnpm/@babel+runtime@7.24.0/node_modules/@babel/runtime/helpers/esm/extends.js"),n=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),f=r("../../../node_modules/.pnpm/@emotion+is-prop-valid@1.2.2/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js"),m=r("../../../node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/dist/emotion-element-43c6fea0.browser.esm.js"),c=r("../../../node_modules/.pnpm/@emotion+utils@1.2.1/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),g=r("../../../node_modules/.pnpm/@emotion+serialize@1.1.4/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),s=r("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.3.1/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),S=f.Z,C=function(a){return a!=="theme"},v=function(a){return typeof a=="string"&&a.charCodeAt(0)>96?S:C},P=function(a,p,_){var d;if(p){var h=p.shouldForwardProp;d=a.__emotion_forwardProp&&h?function(b){return a.__emotion_forwardProp(b)&&h(b)}:h}return typeof d!="function"&&_&&(d=a.__emotion_forwardProp),d},M=`You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,R=function(a){var p=a.cache,_=a.serialized,d=a.isStringTag;return(0,c.hC)(p,_,d),(0,s.L)(function(){return(0,c.My)(p,_,d)}),null},B=function O(a,p){var _=a.__emotion_real===a,d=_&&a.__emotion_base||a,h,b;p!==void 0&&(h=p.label,b=p.target);var N=P(a,p,_),I=N||v(d),j=!I("as");return function(){var w=arguments,y=_&&a.__emotion_styles!==void 0?a.__emotion_styles.slice(0):[];if(h!==void 0&&y.push("label:"+h+";"),w[0]==null||w[0].raw===void 0)y.push.apply(y,w);else{y.push(w[0][0]);for(var U=w.length,i=1;i<U;i++)y.push(w[i],w[0][i])}var o=(0,m.w)(function(e,t,u){var D=j&&e.as||d,x="",z=[],L=e;if(e.theme==null){L={};for(var k in e)L[k]=e[k];L.theme=n.useContext(m.T)}typeof e.className=="string"?x=(0,c.fp)(t.registered,z,e.className):e.className!=null&&(x=e.className+" ");var W=(0,g.O)(y.concat(z),t.registered,L);x+=t.key+"-"+W.name,b!==void 0&&(x+=" "+b);var H=j&&N===void 0?v(D):I,A={};for(var F in e)j&&F==="as"||H(F)&&(A[F]=e[F]);return A.className=x,A.ref=u,n.createElement(n.Fragment,null,n.createElement(R,{cache:t,serialized:W,isStringTag:typeof D=="string"}),n.createElement(D,A))});return o.displayName=h!==void 0?h:"Styled("+(typeof d=="string"?d:d.displayName||d.name||"Component")+")",o.defaultProps=a.defaultProps,o.__emotion_real=o,o.__emotion_base=d,o.__emotion_styles=y,o.__emotion_forwardProp=N,Object.defineProperty(o,"toString",{value:function(){return"."+b}}),o.withComponent=function(e,t){return O(e,(0,l.Z)({},p,t,{shouldForwardProp:P(o,t,!0)})).apply(void 0,y)},o}}},"../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js":(T,E,r)=>{"use strict";r.d(E,{ZP:()=>a});var l=r("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),n=r("../../../node_modules/.pnpm/@emotion+styled@11.11.5_@emotion+react@11.11.4_@types+react@18.3.1_react@18.3.1__@types+react@18.3.1_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),f=r("../../../node_modules/.pnpm/@emotion+react@11.11.4_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),m=r("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js"),c=r("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js");function g(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const s=f.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,S=(0,n.Z)("svg",{target:"ea4tfvq2"})("width:",m.Z.spinnerSize,"px;height:",m.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",c.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),C={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},v=(0,n.Z)("circle",{target:"ea4tfvq1"})(C,";stroke:",c.D.gray[300],";"),P=(0,n.Z)("path",{target:"ea4tfvq0"})(C,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",s,";");var M=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),R=r("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function B({className:p,..._},d){return(0,R.jsxs)(S,{className:(0,l.Z)("components-spinner",p),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",..._,ref:d,children:[(0,R.jsx)(v,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,R.jsx)(P,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"})]})}const a=(0,M.forwardRef)(B)},"../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/config-values.js":(T,E,r)=>{"use strict";r.d(E,{Z:()=>s});var l=r("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/space.js"),n=r("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js");const f="36px",m="12px",c={controlSurfaceColor:n.D.white,controlTextActiveColor:n.D.theme.accent,controlPaddingX:m,controlPaddingXLarge:`calc(${m} * 1.3334)`,controlPaddingXSmall:`calc(${m} / 1.3334)`,controlBackgroundColor:n.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${n.D.theme.accent}`,controlDestructiveBorderColor:n.D.alert.red,controlHeight:f,controlHeightXSmall:`calc( ${f} * 0.6 )`,controlHeightSmall:`calc( ${f} * 0.8 )`,controlHeightLarge:`calc( ${f} * 1.2 )`,controlHeightXLarge:`calc( ${f} * 1.4 )`},g={toggleGroupControlBackgroundColor:c.controlBackgroundColor,toggleGroupControlBorderColor:n.D.ui.border,toggleGroupControlBackdropBackgroundColor:c.controlSurfaceColor,toggleGroupControlBackdropBorderColor:n.D.ui.border,toggleGroupControlButtonColorActive:c.controlBackgroundColor},s=Object.assign({},c,g,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.4",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,l.D)(2)}`,cardPaddingSmall:`${(0,l.D)(4)}`,cardPaddingMedium:`${(0,l.D)(4)} ${(0,l.D)(6)}`,cardPaddingLarge:`${(0,l.D)(6)} ${(0,l.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:n.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:n.D.white,surfaceColor:n.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":(T,E)=>{var r,l;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var n={}.hasOwnProperty,f="[native code]";function m(){for(var c=[],g=0;g<arguments.length;g++){var s=arguments[g];if(s){var S=typeof s;if(S==="string"||S==="number")c.push(s);else if(Array.isArray(s)){if(s.length){var C=m.apply(null,s);C&&c.push(C)}}else if(S==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){c.push(s.toString());continue}for(var v in s)n.call(s,v)&&s[v]&&c.push(v)}}}return c.join(" ")}T.exports?(m.default=m,T.exports=m):(r=[],l=function(){return m}.apply(E,r),l!==void 0&&(T.exports=l))})()}}]);})();
