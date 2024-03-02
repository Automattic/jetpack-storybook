"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[150],{"../../../node_modules/.pnpm/@emotion+react@11.11.3_@types+react@18.2.61_react@18.2.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js":(S,t,r)=>{r.d(t,{F4:()=>P,iv:()=>v});var u=r("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=r("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.0.1_react@18.2.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),i=r("../../../node_modules/.pnpm/@emotion+serialize@1.1.3/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),n=r("../../../node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),m=r("../../../node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),p=r.n(m),_={name:"@emotion/react",version:"11.11.3",main:"dist/emotion-react.cjs.js",module:"dist/emotion-react.esm.js",browser:{"./dist/emotion-react.esm.js":"./dist/emotion-react.browser.esm.js"},exports:{".":{module:{worker:"./dist/emotion-react.worker.esm.js",browser:"./dist/emotion-react.browser.esm.js",default:"./dist/emotion-react.esm.js"},import:"./dist/emotion-react.cjs.mjs",default:"./dist/emotion-react.cjs.js"},"./jsx-runtime":{module:{worker:"./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",browser:"./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",default:"./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"},import:"./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",default:"./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"},"./_isolated-hnrs":{module:{worker:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",browser:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",default:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"},import:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",default:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"},"./jsx-dev-runtime":{module:{worker:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",browser:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",default:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"},import:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",default:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"},"./package.json":"./package.json","./types/css-prop":"./types/css-prop.d.ts","./macro":{types:{import:"./macro.d.mts",default:"./macro.d.ts"},default:"./macro.js"}},types:"types/index.d.ts",files:["src","dist","jsx-runtime","jsx-dev-runtime","_isolated-hnrs","types/*.d.ts","macro.*"],sideEffects:!1,author:"Emotion Contributors",license:"MIT",scripts:{"test:typescript":"dtslint types"},dependencies:{"@babel/runtime":"^7.18.3","@emotion/babel-plugin":"^11.11.0","@emotion/cache":"^11.11.0","@emotion/serialize":"^1.1.3","@emotion/use-insertion-effect-with-fallbacks":"^1.0.1","@emotion/utils":"^1.2.1","@emotion/weak-memoize":"^0.3.1","hoist-non-react-statics":"^3.3.1"},peerDependencies:{react:">=16.8.0"},peerDependenciesMeta:{"@types/react":{optional:!0}},devDependencies:{"@definitelytyped/dtslint":"0.0.112","@emotion/css":"11.11.2","@emotion/css-prettifier":"1.1.3","@emotion/server":"11.11.0","@emotion/styled":"11.11.0","html-tag-names":"^1.1.2",react:"16.14.0","svg-tag-names":"^1.1.1",typescript:"^4.5.5"},repository:"https://github.com/emotion-js/emotion/tree/main/packages/react",publishConfig:{access:"public"},"umd:main":"dist/emotion-react.umd.min.js",preconstruct:{entrypoints:["./index.js","./jsx-runtime.js","./jsx-dev-runtime.js","./_isolated-hnrs.js"],umdName:"emotionReact",exports:{envConditions:["browser","worker"],extra:{"./types/css-prop":"./types/css-prop.d.ts","./macro":{types:{import:"./macro.d.mts",default:"./macro.d.ts"},default:"./macro.js"}}}}},E=function(o,s){var l=arguments;if(s==null||!hasOwnProperty.call(s,"css"))return React.createElement.apply(void 0,l);var d=l.length,y=new Array(d);y[0]=Emotion,y[1]=createEmotionProps(o,s);for(var f=2;f<d;f++)y[f]=l[f];return React.createElement.apply(null,y)},k=!1,b=null;function v(){for(var e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];return(0,i.O)(o)}var P=function(){var o=v.apply(void 0,arguments),s="animation-"+o.name;return{name:s,styles:"@keyframes "+s+"{"+o.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},j=function e(o){for(var s=o.length,l=0,d="";l<s;l++){var y=o[l];if(y!=null){var f=void 0;switch(typeof y){case"boolean":break;case"object":{if(Array.isArray(y))f=e(y);else{f="";for(var O in y)y[O]&&O&&(f&&(f+=" "),f+=O)}break}default:f=y}f&&(d&&(d+=" "),d+=f)}}return d};function w(e,o,s){var l=[],d=getRegisteredStyles(e,l,s);return l.length<2?s:d+o(l)}var h=function(o){var s=o.cache,l=o.serializedArr;return useInsertionEffectAlwaysWithSyncFallback(function(){for(var d=0;d<l.length;d++)insertStyles(s,l[d],!1)}),null},g=null;if(!1)var x,$,c,R},"../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/colors-values.js":(S,t,r)=>{r.d(t,{D:()=>p});const u="#fff",a={900:"#1e1e1e",800:"#2f2f2f",700:"#757575",600:"#949494",400:"#ccc",300:"#ddd",200:"#e0e0e0",100:"#f0f0f0"},i={yellow:"#f0b849",red:"#d94f4f",green:"#4ab866"},n={accent:"var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9))",accentDarker10:"var(--wp-components-color-accent-darker-10, var(--wp-admin-theme-color-darker-10, #2145e6))",accentDarker20:"var(--wp-components-color-accent-darker-20, var(--wp-admin-theme-color-darker-20, #183ad6))",accentInverted:`var(--wp-components-color-accent-inverted, ${u})`,background:`var(--wp-components-color-background, ${u})`,foreground:`var(--wp-components-color-foreground, ${a[900]})`,foregroundInverted:`var(--wp-components-color-foreground-inverted, ${u})`,gray:{900:`var(--wp-components-color-foreground, ${a[900]})`,800:`var(--wp-components-color-gray-800, ${a[800]})`,700:`var(--wp-components-color-gray-700, ${a[700]})`,600:`var(--wp-components-color-gray-600, ${a[600]})`,400:`var(--wp-components-color-gray-400, ${a[400]})`,300:`var(--wp-components-color-gray-300, ${a[300]})`,200:`var(--wp-components-color-gray-200, ${a[200]})`,100:`var(--wp-components-color-gray-100, ${a[100]})`}},m={background:n.background,backgroundDisabled:n.gray[100],border:n.gray[600],borderHover:n.gray[700],borderFocus:n.accent,borderDisabled:n.gray[400],textDisabled:n.gray[600],darkGrayPlaceholder:`color-mix(in srgb, ${n.foreground}, transparent 38%)`,lightGrayPlaceholder:`color-mix(in srgb, ${n.background}, transparent 35%)`},p=Object.freeze({gray:a,white:u,alert:i,theme:n,ui:m});var _=null},"../../../node_modules/.pnpm/@wordpress+components@27.0.0_@types+react@18.2.61_react-dom@18.2.0_react@18.2.0/node_modules/@wordpress/components/build-module/utils/space.js":(S,t,r)=>{r.d(t,{D:()=>a});const u="4px";function a(i){var m,p;if(typeof i=="undefined")return;if(!i)return"0";const n=typeof i=="number"?i:Number(i);return typeof window!="undefined"&&((p=(m=window.CSS)==null?void 0:m.supports)!=null&&p.call(m,"margin",i.toString()))||Number.isNaN(n)?i.toString():`calc(${u} * ${i})`}},"../../../node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":(S,t,r)=>{var u=r("../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js"),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},m={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},p={};p[u.ForwardRef]=n,p[u.Memo]=m;function _(h){return u.isMemo(h)?m:p[h.$$typeof]||a}var E=Object.defineProperty,k=Object.getOwnPropertyNames,b=Object.getOwnPropertySymbols,v=Object.getOwnPropertyDescriptor,P=Object.getPrototypeOf,j=Object.prototype;function w(h,g,x){if(typeof g!="string"){if(j){var $=P(g);$&&$!==j&&w(h,$,x)}var c=k(g);b&&(c=c.concat(b(g)));for(var R=_(h),e=_(g),o=0;o<c.length;++o){var s=c[o];if(!i[s]&&!(x&&x[s])&&!(e&&e[s])&&!(R&&R[s])){var l=v(g,s);try{E(h,s,l)}catch(d){}}}}return h}S.exports=w},"../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js":(S,t)=>{/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=typeof Symbol=="function"&&Symbol.for,u=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,n=r?Symbol.for("react.strict_mode"):60108,m=r?Symbol.for("react.profiler"):60114,p=r?Symbol.for("react.provider"):60109,_=r?Symbol.for("react.context"):60110,E=r?Symbol.for("react.async_mode"):60111,k=r?Symbol.for("react.concurrent_mode"):60111,b=r?Symbol.for("react.forward_ref"):60112,v=r?Symbol.for("react.suspense"):60113,P=r?Symbol.for("react.suspense_list"):60120,j=r?Symbol.for("react.memo"):60115,w=r?Symbol.for("react.lazy"):60116,h=r?Symbol.for("react.block"):60121,g=r?Symbol.for("react.fundamental"):60117,x=r?Symbol.for("react.responder"):60118,$=r?Symbol.for("react.scope"):60119;function c(e){if(typeof e=="object"&&e!==null){var o=e.$$typeof;switch(o){case u:switch(e=e.type,e){case E:case k:case i:case m:case n:case v:return e;default:switch(e=e&&e.$$typeof,e){case _:case b:case w:case j:case p:return e;default:return o}}case a:return o}}}function R(e){return c(e)===k}t.AsyncMode=E,t.ConcurrentMode=k,t.ContextConsumer=_,t.ContextProvider=p,t.Element=u,t.ForwardRef=b,t.Fragment=i,t.Lazy=w,t.Memo=j,t.Portal=a,t.Profiler=m,t.StrictMode=n,t.Suspense=v,t.isAsyncMode=function(e){return R(e)||c(e)===E},t.isConcurrentMode=R,t.isContextConsumer=function(e){return c(e)===_},t.isContextProvider=function(e){return c(e)===p},t.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===u},t.isForwardRef=function(e){return c(e)===b},t.isFragment=function(e){return c(e)===i},t.isLazy=function(e){return c(e)===w},t.isMemo=function(e){return c(e)===j},t.isPortal=function(e){return c(e)===a},t.isProfiler=function(e){return c(e)===m},t.isStrictMode=function(e){return c(e)===n},t.isSuspense=function(e){return c(e)===v},t.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===i||e===k||e===m||e===n||e===v||e===P||typeof e=="object"&&e!==null&&(e.$$typeof===w||e.$$typeof===j||e.$$typeof===p||e.$$typeof===_||e.$$typeof===b||e.$$typeof===g||e.$$typeof===x||e.$$typeof===$||e.$$typeof===h)},t.typeOf=c},"../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js":(S,t,r)=>{S.exports=r("../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js")}}]);})();
