"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4447],{"../../../node_modules/.pnpm/@emotion+react@11.11.4_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js":(b,u,r)=>{r.d(u,{F4:()=>x,iv:()=>l});var n=r("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=r("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),s=r("../../../node_modules/.pnpm/@emotion+serialize@1.1.3/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),o=r("../../../node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),c=r("../../../node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),g=r.n(c),y={name:"@emotion/react",version:"11.11.4",main:"dist/emotion-react.cjs.js",module:"dist/emotion-react.esm.js",browser:{"./dist/emotion-react.esm.js":"./dist/emotion-react.browser.esm.js"},exports:{".":{module:{worker:"./dist/emotion-react.worker.esm.js",browser:"./dist/emotion-react.browser.esm.js",default:"./dist/emotion-react.esm.js"},import:"./dist/emotion-react.cjs.mjs",default:"./dist/emotion-react.cjs.js"},"./jsx-runtime":{module:{worker:"./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",browser:"./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",default:"./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"},import:"./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",default:"./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"},"./_isolated-hnrs":{module:{worker:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",browser:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",default:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"},import:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",default:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"},"./jsx-dev-runtime":{module:{worker:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",browser:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",default:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"},import:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",default:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"},"./package.json":"./package.json","./types/css-prop":"./types/css-prop.d.ts","./macro":{types:{import:"./macro.d.mts",default:"./macro.d.ts"},default:"./macro.js"}},types:"types/index.d.ts",files:["src","dist","jsx-runtime","jsx-dev-runtime","_isolated-hnrs","types/*.d.ts","macro.*"],sideEffects:!1,author:"Emotion Contributors",license:"MIT",scripts:{"test:typescript":"dtslint types"},dependencies:{"@babel/runtime":"^7.18.3","@emotion/babel-plugin":"^11.11.0","@emotion/cache":"^11.11.0","@emotion/serialize":"^1.1.3","@emotion/use-insertion-effect-with-fallbacks":"^1.0.1","@emotion/utils":"^1.2.1","@emotion/weak-memoize":"^0.3.1","hoist-non-react-statics":"^3.3.1"},peerDependencies:{react:">=16.8.0"},peerDependenciesMeta:{"@types/react":{optional:!0}},devDependencies:{"@definitelytyped/dtslint":"0.0.112","@emotion/css":"11.11.2","@emotion/css-prettifier":"1.1.3","@emotion/server":"11.11.0","@emotion/styled":"11.11.0","html-tag-names":"^1.1.2",react:"16.14.0","svg-tag-names":"^1.1.1",typescript:"^4.5.5"},repository:"https://github.com/emotion-js/emotion/tree/main/packages/react",publishConfig:{access:"public"},"umd:main":"dist/emotion-react.umd.min.js",preconstruct:{entrypoints:["./index.js","./jsx-runtime.js","./jsx-dev-runtime.js","./_isolated-hnrs.js"],umdName:"emotionReact",exports:{envConditions:["browser","worker"],extra:{"./types/css-prop":"./types/css-prop.d.ts","./macro":{types:{import:"./macro.d.mts",default:"./macro.d.ts"},default:"./macro.js"}}}}},e=function(d,a){var m=arguments;if(a==null||!hasOwn.call(a,"css"))return React.createElement.apply(void 0,m);var f=m.length,_=new Array(f);_[0]=Emotion,_[1]=createEmotionProps(d,a);for(var h=2;h<f;h++)_[h]=m[h];return React.createElement.apply(null,_)},p=!1,i=null;function l(){for(var v=arguments.length,d=new Array(v),a=0;a<v;a++)d[a]=arguments[a];return(0,s.O)(d)}var x=function(){var d=l.apply(void 0,arguments),a="animation-"+d.name;return{name:a,styles:"@keyframes "+a+"{"+d.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},E=function v(d){for(var a=d.length,m=0,f="";m<a;m++){var _=d[m];if(_!=null){var h=void 0;switch(typeof _){case"boolean":break;case"object":{if(Array.isArray(_))h=v(_);else{h="";for(var w in _)_[w]&&w&&(h&&(h+=" "),h+=w)}break}default:h=_}h&&(f&&(f+=" "),f+=h)}}return f};function k(v,d,a){var m=[],f=getRegisteredStyles(v,m,a);return m.length<2?a:f+d(m)}var T=function(d){var a=d.cache,m=d.serializedArr;return useInsertionEffectAlwaysWithSyncFallback(function(){for(var f=0;f<m.length;f++)insertStyles(a,m[f],!1)}),null},C=null;if(!1)var S,D,z,I},"../../../node_modules/.pnpm/@wordpress+components@27.2.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/spinner/index.js":(b,u,r)=>{r.d(u,{ZP:()=>C});var n=r("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=r("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),s=r.n(t),o=r("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.4_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),c=r("../../../node_modules/.pnpm/@emotion+react@11.11.4_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),g=r("../../../node_modules/.pnpm/@wordpress+components@27.2.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js"),y=r("../../../node_modules/.pnpm/@wordpress+components@27.2.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");function e(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const p=c.F4`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
 `,i=(0,o.Z)("svg",{target:"ea4tfvq2"})("width:",g.Z.spinnerSize,"px;height:",g.Z.spinnerSize,"px;display:inline-block;margin:5px 11px 0;position:relative;color:",y.D.theme.accent,";overflow:visible;opacity:1;background-color:transparent;"),l={name:"9s4963",styles:"fill:transparent;stroke-width:1.5px"},x=(0,o.Z)("circle",{target:"ea4tfvq1"})(l,";stroke:",y.D.gray[300],";"),E=(0,o.Z)("path",{target:"ea4tfvq0"})(l,";stroke:currentColor;stroke-linecap:round;transform-origin:50% 50%;animation:1.4s linear infinite both ",p,";");function k({className:S,...D},z){return(0,n.createElement)(i,{className:s()("components-spinner",S),viewBox:"0 0 100 100",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",role:"presentation",focusable:"false",...D,ref:z},(0,n.createElement)(x,{cx:"50",cy:"50",r:"50",vectorEffect:"non-scaling-stroke"}),(0,n.createElement)(E,{d:"m 50 0 a 50 50 0 0 1 50 50",vectorEffect:"non-scaling-stroke"}))}const C=(0,n.forwardRef)(k)},"../../../node_modules/.pnpm/@wordpress+components@27.2.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js":(b,u,r)=>{r.d(u,{D:()=>g});const n="#fff",t={900:"#1e1e1e",800:"#2f2f2f",700:"#757575",600:"#949494",400:"#ccc",300:"#ddd",200:"#e0e0e0",100:"#f0f0f0"},s={yellow:"#f0b849",red:"#d94f4f",green:"#4ab866"},o={accent:"var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9))",accentDarker10:"var(--wp-components-color-accent-darker-10, var(--wp-admin-theme-color-darker-10, #2145e6))",accentDarker20:"var(--wp-components-color-accent-darker-20, var(--wp-admin-theme-color-darker-20, #183ad6))",accentInverted:`var(--wp-components-color-accent-inverted, ${n})`,background:`var(--wp-components-color-background, ${n})`,foreground:`var(--wp-components-color-foreground, ${t[900]})`,foregroundInverted:`var(--wp-components-color-foreground-inverted, ${n})`,gray:{900:`var(--wp-components-color-foreground, ${t[900]})`,800:`var(--wp-components-color-gray-800, ${t[800]})`,700:`var(--wp-components-color-gray-700, ${t[700]})`,600:`var(--wp-components-color-gray-600, ${t[600]})`,400:`var(--wp-components-color-gray-400, ${t[400]})`,300:`var(--wp-components-color-gray-300, ${t[300]})`,200:`var(--wp-components-color-gray-200, ${t[200]})`,100:`var(--wp-components-color-gray-100, ${t[100]})`}},c={background:o.background,backgroundDisabled:o.gray[100],border:o.gray[600],borderHover:o.gray[700],borderFocus:o.accent,borderDisabled:o.gray[400],textDisabled:o.gray[600],darkGrayPlaceholder:`color-mix(in srgb, ${o.foreground}, transparent 38%)`,lightGrayPlaceholder:`color-mix(in srgb, ${o.background}, transparent 35%)`},g=Object.freeze({gray:t,white:n,alert:s,theme:o,ui:c});var y=null},"../../../node_modules/.pnpm/@wordpress+components@27.2.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/config-values.js":(b,u,r)=>{r.d(u,{Z:()=>y});var n=r("../../../node_modules/.pnpm/@wordpress+components@27.2.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/space.js"),t=r("../../../node_modules/.pnpm/@wordpress+components@27.2.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js");const s="36px",o="12px",c={controlSurfaceColor:t.D.white,controlTextActiveColor:t.D.theme.accent,controlPaddingX:o,controlPaddingXLarge:`calc(${o} * 1.3334)`,controlPaddingXSmall:`calc(${o} / 1.3334)`,controlBackgroundColor:t.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${t.D.theme.accent}`,controlDestructiveBorderColor:t.D.alert.red,controlHeight:s,controlHeightXSmall:`calc( ${s} * 0.6 )`,controlHeightSmall:`calc( ${s} * 0.8 )`,controlHeightLarge:`calc( ${s} * 1.2 )`,controlHeightXLarge:`calc( ${s} * 1.4 )`},g={toggleGroupControlBackgroundColor:c.controlBackgroundColor,toggleGroupControlBorderColor:t.D.ui.border,toggleGroupControlBackdropBackgroundColor:c.controlSurfaceColor,toggleGroupControlBackdropBorderColor:t.D.ui.border,toggleGroupControlButtonColorActive:c.controlBackgroundColor},y=Object.assign({},c,g,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.4",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,n.D)(2)}`,cardPaddingSmall:`${(0,n.D)(4)}`,cardPaddingMedium:`${(0,n.D)(4)} ${(0,n.D)(6)}`,cardPaddingLarge:`${(0,n.D)(6)} ${(0,n.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:t.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:t.D.white,surfaceColor:t.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"../../../node_modules/.pnpm/@wordpress+components@27.2.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/space.js":(b,u,r)=>{r.d(u,{D:()=>t});const n="4px";function t(s){var c,g;if(typeof s=="undefined")return;if(!s)return"0";const o=typeof s=="number"?s:Number(s);return typeof window!="undefined"&&((g=(c=window.CSS)==null?void 0:c.supports)!=null&&g.call(c,"margin",s.toString()))||Number.isNaN(o)?s.toString():`calc(${n} * ${s})`}},"../../../node_modules/.pnpm/@wordpress+icons@9.45.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/help.js":(b,u,r)=>{r.d(u,{Z:()=>o});var n=r("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=r("../../../node_modules/.pnpm/@wordpress+primitives@3.52.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const o=(0,n.createElement)(t.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(t.y$,{d:"M12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zM3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 8.75a1.5 1.5 0 01.167 2.99c-.465.052-.917.44-.917 1.01V14h1.5v-.845A3 3 0 109 10.25h1.5a1.5 1.5 0 011.5-1.5zM11.25 15v1.5h1.5V15h-1.5z"}))},"../../../node_modules/.pnpm/camelize@1.0.1/node_modules/camelize/index.js":b=>{b.exports=function(e){return typeof e=="string"?r(e):u(e)};function u(e){return!e||typeof e!="object"||t(e)||s(e)?e:n(e)?g(e,u):y(c(e),function(p,i){var l=r(i);return p[l]=u(e[i]),p},{})}function r(e){return e.replace(/[_.-](\w|$)/g,function(p,i){return i.toUpperCase()})}var n=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},t=function(e){return Object.prototype.toString.call(e)==="[object Date]"},s=function(e){return Object.prototype.toString.call(e)==="[object RegExp]"},o=Object.prototype.hasOwnProperty,c=Object.keys||function(e){var p=[];for(var i in e)o.call(e,i)&&p.push(i);return p};function g(e,p){if(e.map)return e.map(p);for(var i=[],l=0;l<e.length;l++)i.push(p(e[l],l));return i}function y(e,p,i){if(e.reduce)return e.reduce(p,i);for(var l=0;l<e.length;l++)i=p(i,e[l],l);return i}}}]);})();