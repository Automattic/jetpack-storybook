"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2668],{"../../../node_modules/.pnpm/@emotion+react@11.11.3_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js":(w,d,e)=>{e.d(d,{F4:()=>E,iv:()=>y});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),n=e("../../../node_modules/.pnpm/@emotion+serialize@1.1.3/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),t=e("../../../node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),a=e("../../../node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),h=e.n(a),b={name:"@emotion/react",version:"11.11.3",main:"dist/emotion-react.cjs.js",module:"dist/emotion-react.esm.js",browser:{"./dist/emotion-react.esm.js":"./dist/emotion-react.browser.esm.js"},exports:{".":{module:{worker:"./dist/emotion-react.worker.esm.js",browser:"./dist/emotion-react.browser.esm.js",default:"./dist/emotion-react.esm.js"},import:"./dist/emotion-react.cjs.mjs",default:"./dist/emotion-react.cjs.js"},"./jsx-runtime":{module:{worker:"./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",browser:"./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",default:"./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"},import:"./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",default:"./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"},"./_isolated-hnrs":{module:{worker:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",browser:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",default:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"},import:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",default:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"},"./jsx-dev-runtime":{module:{worker:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",browser:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",default:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"},import:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",default:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"},"./package.json":"./package.json","./types/css-prop":"./types/css-prop.d.ts","./macro":{types:{import:"./macro.d.mts",default:"./macro.d.ts"},default:"./macro.js"}},types:"types/index.d.ts",files:["src","dist","jsx-runtime","jsx-dev-runtime","_isolated-hnrs","types/*.d.ts","macro.*"],sideEffects:!1,author:"Emotion Contributors",license:"MIT",scripts:{"test:typescript":"dtslint types"},dependencies:{"@babel/runtime":"^7.18.3","@emotion/babel-plugin":"^11.11.0","@emotion/cache":"^11.11.0","@emotion/serialize":"^1.1.3","@emotion/use-insertion-effect-with-fallbacks":"^1.0.1","@emotion/utils":"^1.2.1","@emotion/weak-memoize":"^0.3.1","hoist-non-react-statics":"^3.3.1"},peerDependencies:{react:">=16.8.0"},peerDependenciesMeta:{"@types/react":{optional:!0}},devDependencies:{"@definitelytyped/dtslint":"0.0.112","@emotion/css":"11.11.2","@emotion/css-prettifier":"1.1.3","@emotion/server":"11.11.0","@emotion/styled":"11.11.0","html-tag-names":"^1.1.2",react:"16.14.0","svg-tag-names":"^1.1.1",typescript:"^4.5.5"},repository:"https://github.com/emotion-js/emotion/tree/main/packages/react",publishConfig:{access:"public"},"umd:main":"dist/emotion-react.umd.min.js",preconstruct:{entrypoints:["./index.js","./jsx-runtime.js","./jsx-dev-runtime.js","./_isolated-hnrs.js"],umdName:"emotionReact",exports:{envConditions:["browser","worker"],extra:{"./types/css-prop":"./types/css-prop.d.ts","./macro":{types:{import:"./macro.d.mts",default:"./macro.d.ts"},default:"./macro.js"}}}}},R=function(l,r){var c=arguments;if(r==null||!hasOwnProperty.call(r,"css"))return React.createElement.apply(void 0,c);var i=c.length,_=new Array(i);_[0]=Emotion,_[1]=createEmotionProps(l,r);for(var u=2;u<i;u++)_[u]=c[u];return React.createElement.apply(null,_)},C=!1,O=null;function y(){for(var p=arguments.length,l=new Array(p),r=0;r<p;r++)l[r]=arguments[r];return(0,n.O)(l)}var E=function(){var l=y.apply(void 0,arguments),r="animation-"+l.name;return{name:r,styles:"@keyframes "+r+"{"+l.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},g=function p(l){for(var r=l.length,c=0,i="";c<r;c++){var _=l[c];if(_!=null){var u=void 0;switch(typeof _){case"boolean":break;case"object":{if(Array.isArray(_))u=p(_);else{u="";for(var P in _)_[P]&&P&&(u&&(u+=" "),u+=P)}break}default:u=_}u&&(i&&(i+=" "),i+=u)}}return i};function m(p,l,r){var c=[],i=getRegisteredStyles(p,c,r);return c.length<2?r:i+l(c)}var f=function(l){var r=l.cache,c=l.serializedArr;return useInsertionEffectAlwaysWithSyncFallback(function(){for(var i=0;i<c.length;i++)insertStyles(r,c[i],!1)}),null},v=null;if(!1)var x,j,M,k},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/index.js":(w,d,e)=>{e.d(d,{Xp:()=>O,ZP:()=>y});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),n=e.n(o),t=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),a=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/styles/base-control-styles.js"),h=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/use-context-system.js"),b=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/context/context-connect.js");const R=E=>{const{__nextHasNoMarginBottom:g=!1,id:m,label:f,hideLabelFromVision:v=!1,help:x,className:j,children:M}=(0,h.y)(E,"BaseControl");return(0,s.createElement)(a.im,{className:j},(0,s.createElement)(a.ob,{className:"components-base-control__field",__nextHasNoMarginBottom:g},f&&m&&(v?(0,s.createElement)(t.Z,{as:"label",htmlFor:m},f):(0,s.createElement)(a.ar,{className:"components-base-control__label",htmlFor:m},f)),f&&!m&&(v?(0,s.createElement)(t.Z,{as:"label"},f):(0,s.createElement)(C,null,f)),M),!!x&&(0,s.createElement)(a.vB,{id:m?m+"__help":void 0,className:"components-base-control__help",__nextHasNoMarginBottom:g},x))},C=({className:E,children:g,...m})=>(0,s.createElement)(a.yF,{...m,className:n()("components-base-control__label",E)},g),O=Object.assign((0,b.Kc)(R,"BaseControl"),{VisualLabel:C}),y=O},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/styles/base-control-styles.js":(w,d,e)=>{e.d(d,{ar:()=>g,im:()=>C,ob:()=>y,vB:()=>v,yF:()=>x});var s=e("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),o=e("../../../node_modules/.pnpm/@emotion+react@11.11.3_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),n=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/font.js"),t=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/box-sizing.js"),a=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/base-label.js"),h=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js"),b=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/space.js");function R(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const C=(0,s.Z)("div",{target:"ej5x27r4"})("font-family:",(0,n.L)("default.fontFamily"),";font-size:",(0,n.L)("default.fontSize"),";",t.p,";"),O=({__nextHasNoMarginBottom:j=!1})=>!j&&(0,o.iv)("margin-bottom:",(0,b.D)(2),";",""),y=(0,s.Z)("div",{target:"ej5x27r3"})(O," .components-panel__row &{margin-bottom:inherit;}"),E=(0,o.iv)(a.S,";display:inline-block;margin-bottom:",(0,b.D)(2),";padding:0;",""),g=(0,s.Z)("label",{target:"ej5x27r2"})(E,";");var m={name:"11yad0w",styles:"margin-bottom:revert"};const f=({__nextHasNoMarginBottom:j=!1})=>!j&&m,v=(0,s.Z)("p",{target:"ej5x27r1"})("margin-top:",(0,b.D)(2),";margin-bottom:0;font-size:",(0,n.L)("helpText.fontSize"),";font-style:normal;color:",h.D.gray[700],";",f,";"),x=(0,s.Z)("span",{target:"ej5x27r0"})(E,";")},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/checkbox-control/index.js":(w,d,e)=>{e.d(d,{C:()=>E});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),n=e.n(o),t=e("../../../node_modules/.pnpm/@wordpress+compose@6.28.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-ref-effect/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+compose@6.28.0_react@18.2.0/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),h=e("../../../node_modules/.pnpm/@wordpress+deprecated@3.51.0/node_modules/@wordpress/deprecated/build-module/index.js"),b=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js"),R=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/reset.js"),C=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js"),O=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/base-control/index.js");function y(g){const{__nextHasNoMarginBottom:m,label:f,className:v,heading:x,checked:j,indeterminate:M,help:k,id:p,onChange:l,...r}=g;x&&(0,h.Z)("`heading` prop in `CheckboxControl`",{alternative:"a separate element to implement a heading",since:"5.8"});const[c,i]=(0,s.useState)(!1),[_,u]=(0,s.useState)(!1),P=(0,t.Z)(D=>{D&&(D.indeterminate=!!M,i(D.matches(":checked")),u(D.matches(":indeterminate")))},[j,M]),I=(0,a.Z)(y,"inspector-checkbox-control",p),T=D=>l(D.target.checked);return(0,s.createElement)(O.ZP,{__nextHasNoMarginBottom:m,label:x,id:I,help:k,className:n()("components-checkbox-control",v)},(0,s.createElement)("span",{className:"components-checkbox-control__input-container"},(0,s.createElement)("input",{ref:P,id:I,className:"components-checkbox-control__input",type:"checkbox",value:"1",onChange:T,checked:j,"aria-describedby":k?I+"__help":void 0,...r}),_?(0,s.createElement)(b.Z,{icon:R.Z,className:"components-checkbox-control__indeterminate",role:"presentation"}):null,c?(0,s.createElement)(b.Z,{icon:C.Z,className:"components-checkbox-control__checked",role:"presentation"}):null),f&&(0,s.createElement)("label",{className:"components-checkbox-control__label",htmlFor:I},f))}const E=y},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/external-link/index.js":(w,d,e)=>{e.d(d,{Z:()=>g});var s=e("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),n=e.n(o),t=e("../../../node_modules/.pnpm/@wordpress+i18n@4.51.0/node_modules/@wordpress/i18n/build-module/index.js"),a=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js"),h=e("../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),b=e("../../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.3_react@18.2.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),R=e("../../../node_modules/.pnpm/@wordpress+icons@9.42.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js");function C(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const O=(0,b.Z)(R.Z,{target:"esh4a730"})({name:"rvs7bx",styles:"width:1em;height:1em;margin:0;vertical-align:middle;fill:currentColor"});function y(m,f){const{href:v,children:x,className:j,rel:M="",...k}=m,p=[...new Set([...M.split(" "),"external","noreferrer","noopener"].filter(Boolean))].join(" "),l=n()("components-external-link",j),r=!!(v!=null&&v.startsWith("#")),c=i=>{r&&i.preventDefault(),m.onClick&&m.onClick(i)};return(0,s.createElement)("a",{...k,className:l,href:v,onClick:c,target:"_blank",rel:p,ref:f},x,(0,s.createElement)(h.Z,{as:"span"},(0,t.__)("(opens in a new tab)")),(0,s.createElement)(O,{icon:a.Z,className:"components-external-link__icon"}))}const g=(0,s.forwardRef)(y)},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/base-label.js":(w,d,e)=>{e.d(d,{S:()=>o});function s(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const o={name:"9amh4a",styles:"font-size:11px;font-weight:500;line-height:1.4;text-transform:uppercase"}},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/box-sizing.js":(w,d,e)=>{e.d(d,{p:()=>o});function s(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}const o={name:"kv6lnz",styles:"box-sizing:border-box;*,*::before,*::after{box-sizing:inherit;}"}},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js":(w,d,e)=>{e.d(d,{D:()=>h});const s="#fff",o={900:"#1e1e1e",800:"#2f2f2f",700:"#757575",600:"#949494",400:"#ccc",300:"#ddd",200:"#e0e0e0",100:"#f0f0f0"},n={yellow:"#f0b849",red:"#d94f4f",green:"#4ab866"},t={accent:"var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9))",accentDarker10:"var(--wp-components-color-accent-darker-10, var(--wp-admin-theme-color-darker-10, #2145e6))",accentDarker20:"var(--wp-components-color-accent-darker-20, var(--wp-admin-theme-color-darker-20, #183ad6))",accentInverted:`var(--wp-components-color-accent-inverted, ${s})`,background:`var(--wp-components-color-background, ${s})`,foreground:`var(--wp-components-color-foreground, ${o[900]})`,foregroundInverted:`var(--wp-components-color-foreground-inverted, ${s})`,gray:{900:`var(--wp-components-color-foreground, ${o[900]})`,800:`var(--wp-components-color-gray-800, ${o[800]})`,700:`var(--wp-components-color-gray-700, ${o[700]})`,600:`var(--wp-components-color-gray-600, ${o[600]})`,400:`var(--wp-components-color-gray-400, ${o[400]})`,300:`var(--wp-components-color-gray-300, ${o[300]})`,200:`var(--wp-components-color-gray-200, ${o[200]})`,100:`var(--wp-components-color-gray-100, ${o[100]})`}},a={background:t.background,backgroundDisabled:t.gray[100],border:t.gray[600],borderHover:t.gray[700],borderFocus:t.accent,borderDisabled:t.gray[400],textDisabled:t.gray[600],darkGrayPlaceholder:`color-mix(in srgb, ${t.foreground}, transparent 38%)`,lightGrayPlaceholder:`color-mix(in srgb, ${t.background}, transparent 35%)`},h=Object.freeze({gray:o,white:s,alert:n,theme:t,ui:a});var b=null},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/font.js":(w,d,e)=>{e.d(d,{L:()=>o});const s={"default.fontFamily":"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif","default.fontSize":"13px","helpText.fontSize":"12px",mobileTextMinFontSize:"16px"};function o(n){var t;return(t=s[n])!==null&&t!==void 0?t:""}},"../../../node_modules/.pnpm/@wordpress+components@26.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/space.js":(w,d,e)=>{e.d(d,{D:()=>o});const s="4px";function o(n){var a,h;if(typeof n=="undefined")return;if(!n)return"0";const t=typeof n=="number"?n:Number(n);return typeof window!="undefined"&&((h=(a=window.CSS)==null?void 0:a.supports)!=null&&h.call(a,"margin",n.toString()))||Number.isNaN(t)?n.toString():`calc(${s} * ${n})`}},"../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js":(w,d,e)=>{e.d(d,{Z:()=>n});var s=e("../../../node_modules/.pnpm/@wordpress+data@9.21.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/registry-provider/use-registry.js");const n=t=>{const{dispatch:a}=(0,s.Z)();return t===void 0?a:a(t)}}}]);})();
