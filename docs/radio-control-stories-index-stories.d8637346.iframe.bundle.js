"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[6319],{"../../../node_modules/.pnpm/@emotion+react@11.13.3_@types+react@18.3.3_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js":(S,t,o)=>{o.d(t,{AH:()=>y,i7:()=>h});var m=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=o("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.1.0_react@18.3.1/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),d=o("../../../node_modules/.pnpm/@emotion+serialize@1.3.1/node_modules/@emotion/serialize/dist/emotion-serialize.esm.js"),r=o("../../../node_modules/.pnpm/@emotion+cache@11.13.1/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),l=o("../../../node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),a=o.n(l),f=function(i,c){var u=arguments;if(c==null||!hasOwn.call(c,"css"))return React.createElement.apply(void 0,u);var n=u.length,v=new Array(n);v[0]=Emotion,v[1]=createEmotionProps(i,c);for(var e=2;e<n;e++)v[e]=u[e];return React.createElement.apply(null,v)},p=null;function y(){for(var _=arguments.length,i=new Array(_),c=0;c<_;c++)i[c]=arguments[c];return(0,d.J)(i)}var h=function(){var i=y.apply(void 0,arguments),c="animation-"+i.name;return{name:c,styles:"@keyframes "+c+"{"+i.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},b=function _(i){for(var c=i.length,u=0,n="";u<c;u++){var v=i[u];if(v!=null){var e=void 0;switch(typeof v){case"boolean":break;case"object":{if(Array.isArray(v))e=_(v);else{e="";for(var g in v)v[g]&&g&&(e&&(e+=" "),e+=g)}break}default:e=v}e&&(n&&(n+=" "),n+=e)}}return n};function w(_,i,c){var u=[],n=getRegisteredStyles(_,u,c);return u.length<2?c:n+i(u)}var j=function(i){var c=i.cache,u=i.serializedArr;return useInsertionEffectAlwaysWithSyncFallback(function(){for(var n=0;n<u.length;n++)insertStyles(c,u[n],!1)}),null},E=null},"../components/components/radio-control/stories/index.stories.tsx":(S,t,o)=>{var L,N,z;o.r(t),o.d(t,{Default:()=>x,__namedExportsOrder:()=>I,default:()=>g});var m=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=o("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),d=o("../../../node_modules/.pnpm/@wordpress+compose@7.7.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),r=o("../../../node_modules/.pnpm/@wordpress+components@28.7.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/index.js"),l=o("../../../node_modules/.pnpm/@wordpress+components@28.7.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/v-stack/component.js"),a=o("../../../node_modules/.pnpm/@wordpress+components@28.7.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/styles/base-control-styles.js"),f=o("../../../node_modules/.pnpm/@wordpress+components@28.7.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js"),p=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function y(O,k){return`${O}-${k}-option-description`}function h(O,k){return`${O}-${k}`}function b(O){return`${O}__help`}function w(O){const{label:k,className:T,selected:M,help:C,onChange:V,hideLabelFromVision:W,options:$=[],id:B,...F}=O,P=(0,d.A)(w,"inspector-radio-control",B),K=R=>V(R.target.value);return $!=null&&$.length?(0,p.jsxs)("fieldset",{id:P,className:(0,s.A)(T,"components-radio-control"),"aria-describedby":C?b(P):void 0,children:[W?(0,p.jsx)(f.A,{as:"legend",children:k}):(0,p.jsx)(r.Ay.VisualLabel,{as:"legend",children:k}),(0,p.jsx)(l.A,{spacing:3,className:(0,s.A)("components-radio-control__group-wrapper",{"has-help":!!C}),children:$.map((R,D)=>(0,p.jsxs)("div",{className:"components-radio-control__option",children:[(0,p.jsx)("input",{id:h(P,D),className:"components-radio-control__input",type:"radio",name:P,value:R.value,onChange:K,checked:R.value===M,"aria-describedby":R.description?y(P,D):void 0,...F}),(0,p.jsx)("label",{className:"components-radio-control__label",htmlFor:h(P,D),children:R.label}),R.description?(0,p.jsx)(a.te,{__nextHasNoMarginBottom:!0,id:y(P,D),className:"components-radio-control__option-description",children:R.description}):null]},h(P,D)))}),!!C&&(0,p.jsx)(a.te,{__nextHasNoMarginBottom:!0,id:b(P),className:"components-base-control__help",children:C})]}):null}const j=w;var E=o("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=o.n(E),i=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/radio-control/styles.module.scss"),c={};c.insert="head",c.singleton=!1;var u=_()(i.A,c);const n=i.A.locals||{},e=({selected:O,className:k,disabled:T,help:M,label:C,hideLabelFromVision:V,options:W,onChange:$})=>(0,p.jsx)(j,{selected:O,className:(0,s.A)(n.radio,k),disabled:T,help:M,label:C,hideLabelFromVision:V,options:W,onChange:$});try{radiocontrol.displayName="radiocontrol",radiocontrol.__docgenInfo={description:"",displayName:"radiocontrol",props:{selected:{defaultValue:null,description:"The current value.",name:"selected",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"Custom class name to append to the component.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Whether or not the radio control is currently disabled.",name:"disabled",required:!1,type:{name:"boolean"}},help:{defaultValue:null,description:"Additional information to display below the radio control.",name:"help",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"The label for the radio control.",name:"label",required:!1,type:{name:"ReactNode"}},hideLabelFromVision:{defaultValue:null,description:"If true, the label will only be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"A list of options to show.",name:"options",required:!0,type:{name:"{ label: string; value: string; }[]"}},onChange:{defaultValue:null,description:"A callback function invoked when the value is changed.",name:"onChange",required:!0,type:{name:"(value: string) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/radio-control/index.tsx#radiocontrol"]={docgenInfo:radiocontrol.__docgenInfo,name:"radiocontrol",path:"../components/components/radio-control/index.tsx#radiocontrol"})}catch(O){}const g={title:"JS Packages/Components/Radio Control",component:e,parameters:{layout:"centered"},argTypes:{disabled:{control:"boolean",defaultValue:!1,description:"Whether or not the radio control is currently disabled.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},help:{control:"text",description:"Additional information to display below the radio control."},label:{control:"text",description:"The label for the radio control."},hideLabelFromVision:{control:"boolean",defaultValue:!1,description:"If true, the label will only be visible to screen readers.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}}},A=[{label:"One",value:"one"},{label:"Two",value:"two"}],x=O=>{const[k,T]=(0,m.useState)("one"),M=(0,m.useCallback)(C=>{T(C)},[]);return(0,p.jsx)(e,{...O,selected:k,options:A,onChange:M})},I=["Default"];x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  const [selected, setSelected] = useState('one');
  const handleChange = useCallback(value => {
    setSelected(value);
  }, []);
  return <RadioControl {...args} selected={selected} options={options} onChange={handleChange} />;
}`,...(z=(N=x.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};try{x.displayName="Default",x.__docgenInfo={description:"",displayName:"Default",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/radio-control/stories/index.stories.tsx#Default"]={docgenInfo:x.__docgenInfo,name:"Default",path:"../components/components/radio-control/stories/index.stories.tsx#Default"})}catch(O){}},"../../../node_modules/.pnpm/@wordpress+components@28.7.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js":(S,t,o)=>{o.d(t,{l:()=>a});const m="#fff",s={900:"#1e1e1e",800:"#2f2f2f",700:"#757575",600:"#949494",400:"#ccc",300:"#ddd",200:"#e0e0e0",100:"#f0f0f0"},d={yellow:"#f0b849",red:"#d94f4f",green:"#4ab866"},r={accent:"var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9))",accentDarker10:"var(--wp-components-color-accent-darker-10, var(--wp-admin-theme-color-darker-10, #2145e6))",accentDarker20:"var(--wp-components-color-accent-darker-20, var(--wp-admin-theme-color-darker-20, #183ad6))",accentInverted:`var(--wp-components-color-accent-inverted, ${m})`,background:`var(--wp-components-color-background, ${m})`,foreground:`var(--wp-components-color-foreground, ${s[900]})`,foregroundInverted:`var(--wp-components-color-foreground-inverted, ${m})`,gray:{900:`var(--wp-components-color-foreground, ${s[900]})`,800:`var(--wp-components-color-gray-800, ${s[800]})`,700:`var(--wp-components-color-gray-700, ${s[700]})`,600:`var(--wp-components-color-gray-600, ${s[600]})`,400:`var(--wp-components-color-gray-400, ${s[400]})`,300:`var(--wp-components-color-gray-300, ${s[300]})`,200:`var(--wp-components-color-gray-200, ${s[200]})`,100:`var(--wp-components-color-gray-100, ${s[100]})`}},l={background:r.background,backgroundDisabled:r.gray[100],border:r.gray[600],borderHover:r.gray[700],borderFocus:r.accent,borderDisabled:r.gray[400],textDisabled:r.gray[600],darkGrayPlaceholder:`color-mix(in srgb, ${r.foreground}, transparent 38%)`,lightGrayPlaceholder:`color-mix(in srgb, ${r.background}, transparent 35%)`},a=Object.freeze({gray:s,white:m,alert:d,theme:r,ui:l});var f=null},"../../../node_modules/.pnpm/@wordpress+components@28.7.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/space.js":(S,t,o)=>{o.d(t,{x:()=>s});const m="4px";function s(d){var l,a;if(typeof d=="undefined")return;if(!d)return"0";const r=typeof d=="number"?d:Number(d);return typeof window!="undefined"&&((a=(l=window.CSS)==null?void 0:l.supports)!=null&&a.call(l,"margin",d.toString()))||Number.isNaN(r)?d.toString():`calc(${m} * ${d})`}},"../../../node_modules/.pnpm/@wordpress+components@28.7.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/v-stack/component.js":(S,t,o)=>{o.d(t,{A:()=>y});var m=o("../../../node_modules/.pnpm/@wordpress+components@28.7.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js"),s=o("../../../node_modules/.pnpm/@wordpress+components@28.7.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/view/component.js"),d=o("../../../node_modules/.pnpm/@wordpress+components@28.7.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/use-context-system.js"),r=o("../../../node_modules/.pnpm/@wordpress+components@28.7.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/hook.js");function l(h){const{expanded:b=!1,alignment:w="stretch",...j}=(0,d.A)(h,"VStack");return(0,r.A)({direction:"column",expanded:b,alignment:w,...j})}var a=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function f(h,b){const w=l(h);return(0,a.jsx)(s.A,{...w,ref:b})}const y=(0,m.KZ)(f,"VStack")},"../../../node_modules/.pnpm/@wordpress+components@28.7.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js":(S,t,o)=>{o.d(t,{A:()=>p});var m=o("../../../node_modules/.pnpm/@wordpress+components@28.7.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/use-context-system.js"),s=o("../../../node_modules/.pnpm/@wordpress+components@28.7.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js");const d={border:0,clip:"rect(1px, 1px, 1px, 1px)",WebkitClipPath:"inset( 50% )",clipPath:"inset( 50% )",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",wordWrap:"normal"};var r=o("../../../node_modules/.pnpm/@wordpress+components@28.7.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/view/component.js"),l=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function a(y,h){const{style:b,...w}=(0,m.A)(y,"VisuallyHidden");return(0,l.jsx)(r.A,{ref:h,...w,style:{...d,...b||{}}})}const p=(0,s.KZ)(a,"VisuallyHidden")},"../../../node_modules/.pnpm/@wordpress+compose@7.7.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js":(S,t,o)=>{o.d(t,{A:()=>l});var m=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const s=new WeakMap;function d(a){const f=s.get(a)||0;return s.set(a,f+1),f}function r(a,f,p){return(0,m.useMemo)(()=>{if(p)return p;const y=d(a);return f?`${f}-${y}`:y},[a,p,f])}const l=r},"../../../node_modules/.pnpm/@wordpress+deprecated@4.7.0/node_modules/@wordpress/deprecated/build-module/index.js":(S,t,o)=>{o.d(t,{A:()=>d});var m=o("../../../node_modules/.pnpm/@wordpress+hooks@4.7.0/node_modules/@wordpress/hooks/build-module/index.js");const s=Object.create(null);function d(r,l={}){const{since:a,version:f,alternative:p,plugin:y,link:h,hint:b}=l,w=y?` from ${y}`:"",j=a?` since version ${a}`:"",E=f?` and will be removed${w} in version ${f}`:"",_=p?` Please use ${p} instead.`:"",i=h?` See: ${h}`:"",c=b?` Note: ${b}`:"",u=`${r} is deprecated${j}${E}.${_}${i}${c}`;u in s||((0,m.Eo)("deprecated",r,l,u),console.warn(u),s[u]=!0)}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/radio-control/styles.module.scss":(S,t,o)=>{o.d(t,{A:()=>a});var m=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=o.n(m),d=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),r=o.n(d),l=r()(s());l.push([S.id,".WBOHA4eO4_q0oWOa41tw .components-radio-control__input[type=radio]:checked{background:var(--jp-green-40);border-color:var(--jp-green-40)}.WBOHA4eO4_q0oWOa41tw .components-radio-control__input[type=radio]:focus{border-color:var(--jp-green-50);box-shadow:0 0 0 2px var(--jp-white),0 0 0 4px var(--jp-green-50)}",""]),l.locals={radio:"WBOHA4eO4_q0oWOa41tw"};const a=l},"../../../node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":(S,t,o)=>{var m=o("../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js"),s={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},d={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};a[m.ForwardRef]=r,a[m.Memo]=l;function f(_){return m.isMemo(_)?l:a[_.$$typeof]||s}var p=Object.defineProperty,y=Object.getOwnPropertyNames,h=Object.getOwnPropertySymbols,b=Object.getOwnPropertyDescriptor,w=Object.getPrototypeOf,j=Object.prototype;function E(_,i,c){if(typeof i!="string"){if(j){var u=w(i);u&&u!==j&&E(_,u,c)}var n=y(i);h&&(n=n.concat(h(i)));for(var v=f(_),e=f(i),g=0;g<n.length;++g){var A=n[g];if(!d[A]&&!(c&&c[A])&&!(e&&e[A])&&!(v&&v[A])){var x=b(i,A);try{p(_,A,x)}catch(I){}}}}return _}S.exports=E},"../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js":(S,t)=>{/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=typeof Symbol=="function"&&Symbol.for,m=o?Symbol.for("react.element"):60103,s=o?Symbol.for("react.portal"):60106,d=o?Symbol.for("react.fragment"):60107,r=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,a=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.async_mode"):60111,y=o?Symbol.for("react.concurrent_mode"):60111,h=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,w=o?Symbol.for("react.suspense_list"):60120,j=o?Symbol.for("react.memo"):60115,E=o?Symbol.for("react.lazy"):60116,_=o?Symbol.for("react.block"):60121,i=o?Symbol.for("react.fundamental"):60117,c=o?Symbol.for("react.responder"):60118,u=o?Symbol.for("react.scope"):60119;function n(e){if(typeof e=="object"&&e!==null){var g=e.$$typeof;switch(g){case m:switch(e=e.type,e){case p:case y:case d:case l:case r:case b:return e;default:switch(e=e&&e.$$typeof,e){case f:case h:case E:case j:case a:return e;default:return g}}case s:return g}}}function v(e){return n(e)===y}t.AsyncMode=p,t.ConcurrentMode=y,t.ContextConsumer=f,t.ContextProvider=a,t.Element=m,t.ForwardRef=h,t.Fragment=d,t.Lazy=E,t.Memo=j,t.Portal=s,t.Profiler=l,t.StrictMode=r,t.Suspense=b,t.isAsyncMode=function(e){return v(e)||n(e)===p},t.isConcurrentMode=v,t.isContextConsumer=function(e){return n(e)===f},t.isContextProvider=function(e){return n(e)===a},t.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===m},t.isForwardRef=function(e){return n(e)===h},t.isFragment=function(e){return n(e)===d},t.isLazy=function(e){return n(e)===E},t.isMemo=function(e){return n(e)===j},t.isPortal=function(e){return n(e)===s},t.isProfiler=function(e){return n(e)===l},t.isStrictMode=function(e){return n(e)===r},t.isSuspense=function(e){return n(e)===b},t.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===d||e===y||e===l||e===r||e===b||e===w||typeof e=="object"&&e!==null&&(e.$$typeof===E||e.$$typeof===j||e.$$typeof===a||e.$$typeof===f||e.$$typeof===h||e.$$typeof===i||e.$$typeof===c||e.$$typeof===u||e.$$typeof===_)},t.typeOf=n},"../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js":(S,t,o)=>{S.exports=o("../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js")}}]);})();