"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2968],{"../../../node_modules/.pnpm/@emotion+react@11.13.3_@types+react@18.3.3_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js":(k,t,o)=>{o.d(t,{AH:()=>h,i7:()=>_});var r=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),p=o("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.1.0_react@18.3.1/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),l=o("../../../node_modules/.pnpm/@emotion+serialize@1.3.2/node_modules/@emotion/serialize/dist/emotion-serialize.esm.js"),d=o("../../../node_modules/.pnpm/@emotion+cache@11.13.1/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),s=o("../../../node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),a=o.n(s),m=function(u,i){var f=arguments;if(i==null||!hasOwn.call(i,"css"))return React.createElement.apply(void 0,f);var c=f.length,y=new Array(c);y[0]=Emotion,y[1]=createEmotionProps(u,i);for(var e=2;e<c;e++)y[e]=f[e];return React.createElement.apply(null,y)},n=null;function h(){for(var g=arguments.length,u=new Array(g),i=0;i<g;i++)u[i]=arguments[i];return(0,l.J)(u)}var _=function(){var u=h.apply(void 0,arguments),i="animation-"+u.name;return{name:i,styles:"@keyframes "+i+"{"+u.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},C=function g(u){for(var i=u.length,f=0,c="";f<i;f++){var y=u[f];if(y!=null){var e=void 0;switch(typeof y){case"boolean":break;case"object":{if(Array.isArray(y))e=g(y);else{e="";for(var b in y)y[b]&&b&&(e&&(e+=" "),e+=b)}break}default:e=y}e&&(c&&(c+=" "),c+=e)}}return c};function v(g,u,i){var f=[],c=getRegisteredStyles(g,f,i);return f.length<2?i:c+u(f)}var O=function(u){var i=u.cache,f=u.serializedArr;return useInsertionEffectAlwaysWithSyncFallback(function(){for(var c=0;c<f.length;c++)insertStyles(i,f[c],!1)}),null},S=null},"../components/components/toggle-control/stories/index.stories.tsx":(k,t,o)=>{var y,e,b,w,A,R,P,I,N,B,W,K,$,D,L;o.r(t),o.d(t,{Default:()=>S,Disabled:()=>u,HelpText:()=>f,Slow:()=>g,Small:()=>i,__namedExportsOrder:()=>c,default:()=>O});var r=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),p=o("../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-control/index.js"),l=o("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),d=o("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=o.n(d),a=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/toggle-control/styles.module.scss"),m={};m.insert="head",m.singleton=!1;var n=s()(a.A,m);const h=a.A.locals||{};var _=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const v=({checked:j,className:x,disabled:T,help:E,toggling:M,label:z,size:F="normal",onChange:H})=>{const U=M!==void 0?j&&!M||!j&&M:j,Y=(0,r.useCallback)(J=>{M||H(J)},[M,H]);return(0,_.jsx)(p.A,{__nextHasNoMarginBottom:!0,checked:U,className:(0,l.A)(h.toggle,x,{[h["is-toggling"]]:M,[h["is-small"]]:F==="small",[h["no-label"]]:!z}),disabled:T,help:E,label:z,onChange:Y})};try{togglecontrol.displayName="togglecontrol",togglecontrol.__docgenInfo={description:"",displayName:"togglecontrol",props:{checked:{defaultValue:null,description:"Whether or not the toggle is currently enabled.",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Custom class name to append to the component.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Whether or not the toggle is currently disabled.",name:"disabled",required:!1,type:{name:"boolean"}},help:{defaultValue:null,description:"Additional information to display below the toggle.",name:"help",required:!1,type:{name:"ReactNode"}},toggling:{defaultValue:null,description:"Whether or not the toggling is currently toggling.",name:"toggling",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"The label for the toggle.",name:"label",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"normal"},description:"The size of the toggle.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'}]}},onChange:{defaultValue:null,description:"A callback function invoked when the toggle is clicked.",name:"onChange",required:!0,type:{name:"(value: boolean) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/index.tsx#togglecontrol"]={docgenInfo:togglecontrol.__docgenInfo,name:"togglecontrol",path:"../components/components/toggle-control/index.tsx#togglecontrol"})}catch(j){}const O={title:"JS Packages/Components/Toggle Control",component:v,parameters:{layout:"centered"}},S=j=>{const[x,T]=(0,r.useState)(!1),E=(0,r.useCallback)(()=>{T(!x)},[x]);return(0,_.jsx)(v,{checked:x,onChange:E,label:"Code is poetry."})},g=j=>{const[x,T]=(0,r.useState)(!1),[E,M]=(0,r.useState)(!1),z=(0,r.useCallback)(()=>{T(!0),setTimeout(()=>{T(!1),M(!E)},2e3)},[E]);return(0,_.jsx)(v,{checked:E,toggling:x,onChange:z,label:"Code is poetry."})},u=j=>{const[x,T]=(0,r.useState)(!1),E=(0,r.useCallback)(()=>{T(!x)},[x]);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(v,{checked:!0,disabled:!0,label:"Code is poetry.",onChange:E}),(0,_.jsx)(v,{checked:!1,disabled:!0,label:"Code is poetry.",onChange:E})]})},i=j=>{const[x,T]=(0,r.useState)(!1),E=(0,r.useCallback)(()=>{T(!x)},[x]);return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(v,{checked:x,size:"small",label:"Code is poetry.",onChange:E})})},f=j=>{const[x,T]=(0,r.useState)(!1),E=(0,r.useCallback)(()=>{T(!x)},[x]);return(0,_.jsx)(v,{checked:x,label:"Code is poetry.",help:"Code is poetry. Code is poetry. Code is poetry.",onChange:E})},c=["Default","Slow","Disabled","Small","HelpText"];S.parameters={...S.parameters,docs:{...(y=S.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <ToggleControl checked={checked} onChange={handleChecked} label="Code is poetry." />;
}`,...(b=(e=S.parameters)==null?void 0:e.docs)==null?void 0:b.source}}},g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setChecked(!checked);
    }, 2000);
  }, [checked]);
  return <ToggleControl checked={checked} toggling={loading} onChange={handleChecked} label="Code is poetry." />;
}`,...(R=(A=g.parameters)==null?void 0:A.docs)==null?void 0:R.source}}},u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <>
            <ToggleControl checked={true} disabled label="Code is poetry." onChange={handleChecked} />
            <ToggleControl checked={false} disabled label="Code is poetry." onChange={handleChecked} />
        </>;
}`,...(N=(I=u.parameters)==null?void 0:I.docs)==null?void 0:N.source}}},i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <>
            <ToggleControl checked={checked} size="small" label="Code is poetry." onChange={handleChecked} />
        </>;
}`,...(K=(W=i.parameters)==null?void 0:W.docs)==null?void 0:K.source}}},f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <ToggleControl checked={checked} label="Code is poetry." help="Code is poetry. Code is poetry. Code is poetry." onChange={handleChecked} />;
}`,...(L=(D=f.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};try{S.displayName="Default",S.__docgenInfo={description:"",displayName:"Default",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Default"]={docgenInfo:S.__docgenInfo,name:"Default",path:"../components/components/toggle-control/stories/index.stories.tsx#Default"})}catch(j){}try{g.displayName="Slow",g.__docgenInfo={description:"",displayName:"Slow",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Slow"]={docgenInfo:g.__docgenInfo,name:"Slow",path:"../components/components/toggle-control/stories/index.stories.tsx#Slow"})}catch(j){}try{u.displayName="Disabled",u.__docgenInfo={description:"",displayName:"Disabled",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Disabled"]={docgenInfo:u.__docgenInfo,name:"Disabled",path:"../components/components/toggle-control/stories/index.stories.tsx#Disabled"})}catch(j){}try{i.displayName="Small",i.__docgenInfo={description:"",displayName:"Small",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Small"]={docgenInfo:i.__docgenInfo,name:"Small",path:"../components/components/toggle-control/stories/index.stories.tsx#Small"})}catch(j){}try{f.displayName="HelpText",f.__docgenInfo={description:"",displayName:"HelpText",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#HelpText"]={docgenInfo:f.__docgenInfo,name:"HelpText",path:"../components/components/toggle-control/stories/index.stories.tsx#HelpText"})}catch(j){}},"../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex-block/component.js":(k,t,o)=>{o.d(t,{A:()=>h});var r=o("../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js"),p=o("../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/view/component.js"),l=o("../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/use-context-system.js"),d=o("../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex-item/hook.js");function s(_){const C=(0,l.A)(_,"FlexBlock");return(0,d.K)({isBlock:!0,...C})}var a=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function m(_,C){const v=s(_);return(0,a.jsx)(p.A,{...v,ref:C})}const h=(0,r.KZ)(m,"FlexBlock")},"../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/component.js":(k,t,o)=>{o.d(t,{A:()=>m});var r=o("../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js"),p=o("../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/view/component.js"),l=o("../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/hook.js"),d=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function s(n,h){const _=(0,l.A)(n);return(0,d.jsx)(p.A,{..._,ref:h})}const m=(0,r.KZ)(s,"HStack")},"../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-control/index.js":(k,t,o)=>{o.d(t,{A:()=>f});var r=o("../../../node_modules/.pnpm/@emotion+react@11.13.3_@types+react@18.3.3_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),p=o("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),l=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=o("../../../node_modules/.pnpm/@wordpress+compose@7.8.3_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),s=o("../../../node_modules/.pnpm/@wordpress+deprecated@4.9.0/node_modules/@wordpress/deprecated/build-module/index.js"),a=o("../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex-block/component.js"),m=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const n=()=>{};function h(c,y){const{className:e,checked:b,id:w,disabled:A,onChange:R=n,...P}=c,I=(0,p.A)("components-form-toggle",e,{"is-checked":b,"is-disabled":A});return(0,m.jsxs)("span",{className:I,children:[(0,m.jsx)("input",{className:"components-form-toggle__input",id:w,type:"checkbox",checked:b,onChange:R,disabled:A,...P,ref:y}),(0,m.jsx)("span",{className:"components-form-toggle__track"}),(0,m.jsx)("span",{className:"components-form-toggle__thumb"})]})}const C=(0,l.forwardRef)(h);var v=o("../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/index.js"),O=o("../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/component.js"),S=o("../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js"),g=o("../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/space.js");function u({__nextHasNoMarginBottom:c,label:y,checked:e,help:b,className:w,onChange:A,disabled:R},P){function I(L){A(L.target.checked)}const B=`inspector-toggle-control-${(0,d.A)(i)}`,K=(0,S.l)()("components-toggle-control",w,!c&&(0,r.AH)({marginBottom:(0,g.x)(3)},"",""));c||(0,s.A)("Bottom margin styles for wp.components.ToggleControl",{since:"6.7",version:"7.0",hint:"Set the `__nextHasNoMarginBottom` prop to true to start opting into the new styles, which will become the default in a future version."});let $,D;return b&&(typeof b=="function"?e!==void 0&&(D=b(e)):D=b,D&&($=B+"__help")),(0,m.jsx)(v.Ay,{id:B,help:D&&(0,m.jsx)("span",{className:"components-toggle-control__help",children:D}),className:K,__nextHasNoMarginBottom:!0,children:(0,m.jsxs)(O.A,{justify:"flex-start",spacing:2,children:[(0,m.jsx)(C,{id:B,checked:e,onChange:I,"aria-describedby":$,disabled:R,ref:P}),(0,m.jsx)(a.A,{as:"label",htmlFor:B,className:(0,p.A)("components-toggle-control__label",{"is-disabled":R}),children:y})]})})}const i=(0,l.forwardRef)(u),f=i},"../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js":(k,t,o)=>{o.d(t,{l:()=>a});const r="#fff",p={900:"#1e1e1e",800:"#2f2f2f",700:"#757575",600:"#949494",400:"#ccc",300:"#ddd",200:"#e0e0e0",100:"#f0f0f0"},l={yellow:"#f0b849",red:"#d94f4f",green:"#4ab866"},d={accent:"var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9))",accentDarker10:"var(--wp-components-color-accent-darker-10, var(--wp-admin-theme-color-darker-10, #2145e6))",accentDarker20:"var(--wp-components-color-accent-darker-20, var(--wp-admin-theme-color-darker-20, #183ad6))",accentInverted:`var(--wp-components-color-accent-inverted, ${r})`,background:`var(--wp-components-color-background, ${r})`,foreground:`var(--wp-components-color-foreground, ${p[900]})`,foregroundInverted:`var(--wp-components-color-foreground-inverted, ${r})`,gray:{900:`var(--wp-components-color-foreground, ${p[900]})`,800:`var(--wp-components-color-gray-800, ${p[800]})`,700:`var(--wp-components-color-gray-700, ${p[700]})`,600:`var(--wp-components-color-gray-600, ${p[600]})`,400:`var(--wp-components-color-gray-400, ${p[400]})`,300:`var(--wp-components-color-gray-300, ${p[300]})`,200:`var(--wp-components-color-gray-200, ${p[200]})`,100:`var(--wp-components-color-gray-100, ${p[100]})`}},s={background:d.background,backgroundDisabled:d.gray[100],border:d.gray[600],borderHover:d.gray[700],borderFocus:d.accent,borderDisabled:d.gray[400],textDisabled:d.gray[600],darkGrayPlaceholder:`color-mix(in srgb, ${d.foreground}, transparent 38%)`,lightGrayPlaceholder:`color-mix(in srgb, ${d.background}, transparent 35%)`},a=Object.freeze({gray:p,white:r,alert:l,theme:d,ui:s});var m=null},"../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/space.js":(k,t,o)=>{o.d(t,{x:()=>p});const r="4px";function p(l){var s,a;if(typeof l=="undefined")return;if(!l)return"0";const d=typeof l=="number"?l:Number(l);return typeof window!="undefined"&&((a=(s=window.CSS)==null?void 0:s.supports)!=null&&a.call(s,"margin",l.toString()))||Number.isNaN(d)?l.toString():`calc(${r} * ${l})`}},"../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js":(k,t,o)=>{o.d(t,{A:()=>n});var r=o("../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/use-context-system.js"),p=o("../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js");const l={border:0,clip:"rect(1px, 1px, 1px, 1px)",WebkitClipPath:"inset( 50% )",clipPath:"inset( 50% )",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",wordWrap:"normal"};var d=o("../../../node_modules/.pnpm/@wordpress+components@28.8.4_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/view/component.js"),s=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function a(h,_){const{style:C,...v}=(0,r.A)(h,"VisuallyHidden");return(0,s.jsx)(d.A,{ref:_,...v,style:{...l,...C||{}}})}const n=(0,p.KZ)(a,"VisuallyHidden")},"../../../node_modules/.pnpm/@wordpress+compose@7.8.3_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js":(k,t,o)=>{o.d(t,{A:()=>s});var r=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const p=new WeakMap;function l(a){const m=p.get(a)||0;return p.set(a,m+1),m}function d(a,m,n){return(0,r.useMemo)(()=>{if(n)return n;const h=l(a);return m?`${m}-${h}`:h},[a,n,m])}const s=d},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/toggle-control/styles.module.scss":(k,t,o)=>{o.d(t,{A:()=>a});var r=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=o.n(r),l=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),d=o.n(l),s=d()(p());s.push([k.id,".oH070sCBKmmSCsJW4qCg{--base-width: 8px}.oH070sCBKmmSCsJW4qCg.Y3PMNlFXh5x11Sj52c_o{--base-width: 6px}.oH070sCBKmmSCsJW4qCg.apmOjtu5hzpJmHPMMKCb .components-toggle-control__label{display:none}.oH070sCBKmmSCsJW4qCg .components-form-toggle{--wp-admin-theme-color: var( --jp-green-40 );height:calc(var(--base-width)*3)}.oH070sCBKmmSCsJW4qCg .components-form-toggle__input:focus+.components-form-toggle__track{box-shadow:0 0 0 2px var(--jp-white),0 0 0 4px var(--jp-green-50)}.oH070sCBKmmSCsJW4qCg .components-form-toggle .components-form-toggle__track{width:calc(var(--base-width)*6);height:calc(var(--base-width)*3);border-radius:12px;border-width:2px}.oH070sCBKmmSCsJW4qCg .components-form-toggle .components-form-toggle__thumb{width:calc(var(--base-width)*2);height:calc(var(--base-width)*2);top:calc(var(--base-width)/2);left:calc(var(--base-width)/2)}.oH070sCBKmmSCsJW4qCg .components-form-toggle.is-checked .components-form-toggle__thumb{transform:translateX(calc(var(--base-width) * 3))}.oH070sCBKmmSCsJW4qCg.EX6n744Crf5bz8oOe02m .components-form-toggle{opacity:.6}",""]),s.locals={toggle:"oH070sCBKmmSCsJW4qCg","is-small":"Y3PMNlFXh5x11Sj52c_o","no-label":"apmOjtu5hzpJmHPMMKCb","is-toggling":"EX6n744Crf5bz8oOe02m"};const a=s},"../../../node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":(k,t,o)=>{var r=o("../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js"),p={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},l={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},d={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};a[r.ForwardRef]=d,a[r.Memo]=s;function m(g){return r.isMemo(g)?s:a[g.$$typeof]||p}var n=Object.defineProperty,h=Object.getOwnPropertyNames,_=Object.getOwnPropertySymbols,C=Object.getOwnPropertyDescriptor,v=Object.getPrototypeOf,O=Object.prototype;function S(g,u,i){if(typeof u!="string"){if(O){var f=v(u);f&&f!==O&&S(g,f,i)}var c=h(u);_&&(c=c.concat(_(u)));for(var y=m(g),e=m(u),b=0;b<c.length;++b){var w=c[b];if(!l[w]&&!(i&&i[w])&&!(e&&e[w])&&!(y&&y[w])){var A=C(u,w);try{n(g,w,A)}catch(R){}}}}return g}k.exports=S},"../../../node_modules/.pnpm/memize@2.1.0/node_modules/memize/dist/index.js":(k,t,o)=>{o.d(t,{A:()=>r});function r(p,l){var d=0,s,a;l=l||{};function m(){var n=s,h=arguments.length,_,C;e:for(;n;){if(n.args.length!==arguments.length){n=n.next;continue}for(C=0;C<h;C++)if(n.args[C]!==arguments[C]){n=n.next;continue e}return n!==s&&(n===a&&(a=n.prev),n.prev.next=n.next,n.next&&(n.next.prev=n.prev),n.next=s,n.prev=null,s.prev=n,s=n),n.val}for(_=new Array(h),C=0;C<h;C++)_[C]=arguments[C];return n={args:_,val:p.apply(null,_)},s?(s.prev=n,n.next=s):a=n,d===l.maxSize?(a=a.prev,a.next=null):d++,s=n,n.val}return m.clear=function(){s=null,a=null,d=0},m}},"../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js":(k,t)=>{/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=typeof Symbol=="function"&&Symbol.for,r=o?Symbol.for("react.element"):60103,p=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,d=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,a=o?Symbol.for("react.provider"):60109,m=o?Symbol.for("react.context"):60110,n=o?Symbol.for("react.async_mode"):60111,h=o?Symbol.for("react.concurrent_mode"):60111,_=o?Symbol.for("react.forward_ref"):60112,C=o?Symbol.for("react.suspense"):60113,v=o?Symbol.for("react.suspense_list"):60120,O=o?Symbol.for("react.memo"):60115,S=o?Symbol.for("react.lazy"):60116,g=o?Symbol.for("react.block"):60121,u=o?Symbol.for("react.fundamental"):60117,i=o?Symbol.for("react.responder"):60118,f=o?Symbol.for("react.scope"):60119;function c(e){if(typeof e=="object"&&e!==null){var b=e.$$typeof;switch(b){case r:switch(e=e.type,e){case n:case h:case l:case s:case d:case C:return e;default:switch(e=e&&e.$$typeof,e){case m:case _:case S:case O:case a:return e;default:return b}}case p:return b}}}function y(e){return c(e)===h}t.AsyncMode=n,t.ConcurrentMode=h,t.ContextConsumer=m,t.ContextProvider=a,t.Element=r,t.ForwardRef=_,t.Fragment=l,t.Lazy=S,t.Memo=O,t.Portal=p,t.Profiler=s,t.StrictMode=d,t.Suspense=C,t.isAsyncMode=function(e){return y(e)||c(e)===n},t.isConcurrentMode=y,t.isContextConsumer=function(e){return c(e)===m},t.isContextProvider=function(e){return c(e)===a},t.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===r},t.isForwardRef=function(e){return c(e)===_},t.isFragment=function(e){return c(e)===l},t.isLazy=function(e){return c(e)===S},t.isMemo=function(e){return c(e)===O},t.isPortal=function(e){return c(e)===p},t.isProfiler=function(e){return c(e)===s},t.isStrictMode=function(e){return c(e)===d},t.isSuspense=function(e){return c(e)===C},t.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===l||e===h||e===s||e===d||e===C||e===v||typeof e=="object"&&e!==null&&(e.$$typeof===S||e.$$typeof===O||e.$$typeof===a||e.$$typeof===m||e.$$typeof===_||e.$$typeof===u||e.$$typeof===i||e.$$typeof===f||e.$$typeof===g)},t.typeOf=c},"../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js":(k,t,o)=>{k.exports=o("../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js")}}]);})();
