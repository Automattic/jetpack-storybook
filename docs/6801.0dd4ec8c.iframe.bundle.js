"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6801],{"../../../node_modules/.pnpm/@emotion+react@11.11.3_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js":(_,u,r)=>{r.d(u,{F4:()=>y,iv:()=>g});var t=r("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=r("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),s=r("../../../node_modules/.pnpm/@emotion+serialize@1.1.3/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),o=r("../../../node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),c=r("../../../node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),f=r.n(c),h={name:"@emotion/react",version:"11.11.3",main:"dist/emotion-react.cjs.js",module:"dist/emotion-react.esm.js",browser:{"./dist/emotion-react.esm.js":"./dist/emotion-react.browser.esm.js"},exports:{".":{module:{worker:"./dist/emotion-react.worker.esm.js",browser:"./dist/emotion-react.browser.esm.js",default:"./dist/emotion-react.esm.js"},import:"./dist/emotion-react.cjs.mjs",default:"./dist/emotion-react.cjs.js"},"./jsx-runtime":{module:{worker:"./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",browser:"./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",default:"./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"},import:"./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",default:"./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"},"./_isolated-hnrs":{module:{worker:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",browser:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",default:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"},import:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",default:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"},"./jsx-dev-runtime":{module:{worker:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",browser:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",default:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"},import:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",default:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"},"./package.json":"./package.json","./types/css-prop":"./types/css-prop.d.ts","./macro":{types:{import:"./macro.d.mts",default:"./macro.d.ts"},default:"./macro.js"}},types:"types/index.d.ts",files:["src","dist","jsx-runtime","jsx-dev-runtime","_isolated-hnrs","types/*.d.ts","macro.*"],sideEffects:!1,author:"Emotion Contributors",license:"MIT",scripts:{"test:typescript":"dtslint types"},dependencies:{"@babel/runtime":"^7.18.3","@emotion/babel-plugin":"^11.11.0","@emotion/cache":"^11.11.0","@emotion/serialize":"^1.1.3","@emotion/use-insertion-effect-with-fallbacks":"^1.0.1","@emotion/utils":"^1.2.1","@emotion/weak-memoize":"^0.3.1","hoist-non-react-statics":"^3.3.1"},peerDependencies:{react:">=16.8.0"},peerDependenciesMeta:{"@types/react":{optional:!0}},devDependencies:{"@definitelytyped/dtslint":"0.0.112","@emotion/css":"11.11.2","@emotion/css-prettifier":"1.1.3","@emotion/server":"11.11.0","@emotion/styled":"11.11.0","html-tag-names":"^1.1.2",react:"16.14.0","svg-tag-names":"^1.1.1",typescript:"^4.5.5"},repository:"https://github.com/emotion-js/emotion/tree/main/packages/react",publishConfig:{access:"public"},"umd:main":"dist/emotion-react.umd.min.js",preconstruct:{entrypoints:["./index.js","./jsx-runtime.js","./jsx-dev-runtime.js","./_isolated-hnrs.js"],umdName:"emotionReact",exports:{envConditions:["browser","worker"],extra:{"./types/css-prop":"./types/css-prop.d.ts","./macro":{types:{import:"./macro.d.mts",default:"./macro.d.ts"},default:"./macro.js"}}}}},B=function(a,n){var i=arguments;if(n==null||!hasOwnProperty.call(n,"css"))return React.createElement.apply(void 0,i);var l=i.length,m=new Array(l);m[0]=Emotion,m[1]=createEmotionProps(a,n);for(var d=2;d<l;d++)m[d]=i[d];return React.createElement.apply(null,m)},w=!1,x=null;function g(){for(var p=arguments.length,a=new Array(p),n=0;n<p;n++)a[n]=arguments[n];return(0,s.O)(a)}var y=function(){var a=g.apply(void 0,arguments),n="animation-"+a.name;return{name:n,styles:"@keyframes "+n+"{"+a.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},j=function p(a){for(var n=a.length,i=0,l="";i<n;i++){var m=a[i];if(m!=null){var d=void 0;switch(typeof m){case"boolean":break;case"object":{if(Array.isArray(m))d=p(m);else{d="";for(var v in m)m[v]&&v&&(d&&(d+=" "),d+=v)}break}default:d=m}d&&(l&&(l+=" "),l+=d)}}return l};function E(p,a,n){var i=[],l=getRegisteredStyles(p,i,n);return i.length<2?n:l+a(i)}var T=function(a){var n=a.cache,i=a.serializedArr;return useInsertionEffectAlwaysWithSyncFallback(function(){for(var l=0;l<i.length;l++)insertStyles(n,i[l],!1)}),null},k=null;if(!1)var C,S,D,I},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(_,u,r)=>{r.d(u,{ZP:()=>k});var t=r("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=r("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),s=r.n(e),o=r("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),c=r("../../../node_modules/.pnpm/@emotion+react@11.11.3_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),f=r("../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),h=r("../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function B(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const w=c.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,x=(0,o.Z)("svg",{target:"ea4tfvq2"})("width:",f.Z.spinnerSize,"px;height:",f.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",h.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),g={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},y=(0,o.Z)("circle",{target:"ea4tfvq1"})(g,";stroke:",h.D.gray[300],";"),j=(0,o.Z)("path",{target:"ea4tfvq0"})(g,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",w,";");function E({className:C,...S},D){return(0,t.createElement)(x,{className:s()("components-spinner",C),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...S,ref:D},(0,t.createElement)(y,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,t.createElement)(j,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const k=(0,t.forwardRef)(E)},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js":(_,u,r)=>{r.d(u,{D:()=>f});const t="#fff",e={900:"#1e1e1e",800:"#2f2f2f",700:"#757575",600:"#949494",400:"#ccc",300:"#ddd",200:"#e0e0e0",100:"#f0f0f0"},s={yellow:"#f0b849",red:"#d94f4f",green:"#4ab866"},o={accent:"var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9))",accentDarker10:"var(--wp-components-color-accent-darker-10, var(--wp-admin-theme-color-darker-10, #2145e6))",accentDarker20:"var(--wp-components-color-accent-darker-20, var(--wp-admin-theme-color-darker-20, #183ad6))",accentInverted:`var(--wp-components-color-accent-inverted, ${t})`,background:`var(--wp-components-color-background, ${t})`,foreground:`var(--wp-components-color-foreground, ${e[900]})`,foregroundInverted:`var(--wp-components-color-foreground-inverted, ${t})`,gray:{900:`var(--wp-components-color-foreground, ${e[900]})`,800:`var(--wp-components-color-gray-800, ${e[800]})`,700:`var(--wp-components-color-gray-700, ${e[700]})`,600:`var(--wp-components-color-gray-600, ${e[600]})`,400:`var(--wp-components-color-gray-400, ${e[400]})`,300:`var(--wp-components-color-gray-300, ${e[300]})`,200:`var(--wp-components-color-gray-200, ${e[200]})`,100:`var(--wp-components-color-gray-100, ${e[100]})`}},c={background:o.background,backgroundDisabled:o.gray[100],border:o.gray[600],borderHover:o.gray[700],borderFocus:o.accent,borderDisabled:o.gray[400],textDisabled:o.gray[600],darkGrayPlaceholder:`color-mix(in srgb, ${o.foreground}, transparent 38%)`,lightGrayPlaceholder:`color-mix(in srgb, ${o.background}, transparent 35%)`},f=Object.freeze({gray:e,white:t,alert:s,theme:o,ui:c});var h=null},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js":(_,u,r)=>{r.d(u,{Z:()=>h});var t=r("../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/space.js"),e=r("../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");const s="36px",o="12px",c={controlSurfaceColor:e.D.white,controlTextActiveColor:e.D.theme.accent,controlPaddingX:o,controlPaddingXLarge:`calc(${o} * 1.3334)`,controlPaddingXSmall:`calc(${o} / 1.3334)`,controlBackgroundColor:e.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${e.D.theme.accent}`,controlDestructiveBorderColor:e.D.alert.red,controlHeight:s,controlHeightXSmall:`calc( ${s} * 0.6 )`,controlHeightSmall:`calc( ${s} * 0.8 )`,controlHeightLarge:`calc( ${s} * 1.2 )`,controlHeightXLarge:`calc( ${s} * 1.4 )`},f={toggleGroupControlBackgroundColor:c.controlBackgroundColor,toggleGroupControlBorderColor:e.D.ui.border,toggleGroupControlBackdropBackgroundColor:c.controlSurfaceColor,toggleGroupControlBackdropBorderColor:e.D.ui.border,toggleGroupControlButtonColorActive:c.controlBackgroundColor},h=Object.assign({},c,f,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.2",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,t.D)(2)}`,cardPaddingSmall:`${(0,t.D)(4)}`,cardPaddingMedium:`${(0,t.D)(4)} ${(0,t.D)(6)}`,cardPaddingLarge:`${(0,t.D)(6)} ${(0,t.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:e.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:e.D.white,surfaceColor:e.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/space.js":(_,u,r)=>{r.d(u,{D:()=>e});const t="4px";function e(s){var c,f;if(typeof s=="undefined")return;if(!s)return"0";const o=typeof s=="number"?s:Number(s);return typeof window!="undefined"&&((f=(c=window.CSS)==null?void 0:c.supports)!=null&&f.call(c,"margin",s.toString()))||Number.isNaN(o)?s.toString():`calc(${t} * ${s})`}},"../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/help.js":(_,u,r)=>{r.d(u,{Z:()=>o});var t=r("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),e=r("../../../node_modules/.pnpm/@wordpress+primitives@3.49.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const o=(0,t.createElement)(e.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(e.y$,{d:"M12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zM3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 8.75a1.5 1.5 0 01.167 2.99c-.465.052-.917.44-.917 1.01V14h1.5v-.845A3 3 0 109 10.25h1.5a1.5 1.5 0 011.5-1.5zM11.25 15v1.5h1.5V15h-1.5z"}))}}]);})();
