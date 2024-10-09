"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2968],{"../../../node_modules/.pnpm/@emotion+react@11.13.3_@types+react@18.3.3_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js":(x,t,o)=>{o.d(t,{AH:()=>f,i7:()=>g});var s=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=o("../../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.1.0_react@18.3.1/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),i=o("../../../node_modules/.pnpm/@emotion+serialize@1.3.2/node_modules/@emotion/serialize/dist/emotion-serialize.esm.js"),m=o("../../../node_modules/.pnpm/@emotion+cache@11.13.1/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),p=o("../../../node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),u=o.n(p),l=function(c,r){var a=arguments;if(r==null||!hasOwn.call(r,"css"))return React.createElement.apply(void 0,a);var n=a.length,h=new Array(n);h[0]=Emotion,h[1]=createEmotionProps(c,r);for(var e=2;e<n;e++)h[e]=a[e];return React.createElement.apply(null,h)},C=null;function f(){for(var _=arguments.length,c=new Array(_),r=0;r<_;r++)c[r]=arguments[r];return(0,i.J)(c)}var g=function(){var c=f.apply(void 0,arguments),r="animation-"+c.name;return{name:r,styles:"@keyframes "+r+"{"+c.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},v=function _(c){for(var r=c.length,a=0,n="";a<r;a++){var h=c[a];if(h!=null){var e=void 0;switch(typeof h){case"boolean":break;case"object":{if(Array.isArray(h))e=_(h);else{e="";for(var y in h)h[y]&&y&&(e&&(e+=" "),e+=y)}break}default:e=h}e&&(n&&(n+=" "),n+=e)}}return n};function b(_,c,r){var a=[],n=getRegisteredStyles(_,a,r);return a.length<2?r:n+c(a)}var j=function(c){var r=c.cache,a=c.serializedArr;return useInsertionEffectAlwaysWithSyncFallback(function(){for(var n=0;n<a.length;n++)insertStyles(r,a[n],!1)}),null},S=null},"../components/components/toggle-control/stories/index.stories.tsx":(x,t,o)=>{var h,e,y,k,A,R,P,$,W,I,z,K,B,D,L;o.r(t),o.d(t,{Default:()=>S,Disabled:()=>c,HelpText:()=>a,Slow:()=>_,Small:()=>r,__namedExportsOrder:()=>n,default:()=>j});var s=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),d=o("../../../node_modules/.pnpm/@wordpress+components@28.9.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-control/index.js"),i=o("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),m=o("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=o.n(m),u=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/toggle-control/styles.module.scss"),l={};l.insert="head",l.singleton=!1;var C=p()(u.A,l);const f=u.A.locals||{};var g=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const b=({checked:E,className:w,disabled:T,help:O,toggling:M,label:N,size:F="normal",onChange:H})=>{const U=M!==void 0?E&&!M||!E&&M:E,Y=(0,s.useCallback)(J=>{M||H(J)},[M,H]);return(0,g.jsx)(d.A,{__nextHasNoMarginBottom:!0,checked:U,className:(0,i.A)(f.toggle,w,{[f["is-toggling"]]:M,[f["is-small"]]:F==="small",[f["no-label"]]:!N}),disabled:T,help:O,label:N,onChange:Y})};try{togglecontrol.displayName="togglecontrol",togglecontrol.__docgenInfo={description:"",displayName:"togglecontrol",props:{checked:{defaultValue:null,description:"Whether or not the toggle is currently enabled.",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Custom class name to append to the component.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Whether or not the toggle is currently disabled.",name:"disabled",required:!1,type:{name:"boolean"}},help:{defaultValue:null,description:"Additional information to display below the toggle.",name:"help",required:!1,type:{name:"ReactNode"}},toggling:{defaultValue:null,description:"Whether or not the toggling is currently toggling.",name:"toggling",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"The label for the toggle.",name:"label",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"normal"},description:"The size of the toggle.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'}]}},onChange:{defaultValue:null,description:"A callback function invoked when the toggle is clicked.",name:"onChange",required:!0,type:{name:"(value: boolean) => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/index.tsx#togglecontrol"]={docgenInfo:togglecontrol.__docgenInfo,name:"togglecontrol",path:"../components/components/toggle-control/index.tsx#togglecontrol"})}catch(E){}const j={title:"JS Packages/Components/Toggle Control",component:b,parameters:{layout:"centered"}},S=E=>{const[w,T]=(0,s.useState)(!1),O=(0,s.useCallback)(()=>{T(!w)},[w]);return(0,g.jsx)(b,{checked:w,onChange:O,label:"Code is poetry."})},_=E=>{const[w,T]=(0,s.useState)(!1),[O,M]=(0,s.useState)(!1),N=(0,s.useCallback)(()=>{T(!0),setTimeout(()=>{T(!1),M(!O)},2e3)},[O]);return(0,g.jsx)(b,{checked:O,toggling:w,onChange:N,label:"Code is poetry."})},c=E=>{const[w,T]=(0,s.useState)(!1),O=(0,s.useCallback)(()=>{T(!w)},[w]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(b,{checked:!0,disabled:!0,label:"Code is poetry.",onChange:O}),(0,g.jsx)(b,{checked:!1,disabled:!0,label:"Code is poetry.",onChange:O})]})},r=E=>{const[w,T]=(0,s.useState)(!1),O=(0,s.useCallback)(()=>{T(!w)},[w]);return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(b,{checked:w,size:"small",label:"Code is poetry.",onChange:O})})},a=E=>{const[w,T]=(0,s.useState)(!1),O=(0,s.useCallback)(()=>{T(!w)},[w]);return(0,g.jsx)(b,{checked:w,label:"Code is poetry.",help:"Code is poetry. Code is poetry. Code is poetry.",onChange:O})},n=["Default","Slow","Disabled","Small","HelpText"];S.parameters={...S.parameters,docs:{...(h=S.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <ToggleControl checked={checked} onChange={handleChecked} label="Code is poetry." />;
}`,...(y=(e=S.parameters)==null?void 0:e.docs)==null?void 0:y.source}}},_.parameters={..._.parameters,docs:{...(k=_.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
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
}`,...(R=(A=_.parameters)==null?void 0:A.docs)==null?void 0:R.source}}},c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <>
            <ToggleControl checked={true} disabled label="Code is poetry." onChange={handleChecked} />
            <ToggleControl checked={false} disabled label="Code is poetry." onChange={handleChecked} />
        </>;
}`,...(W=($=c.parameters)==null?void 0:$.docs)==null?void 0:W.source}}},r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <>
            <ToggleControl checked={checked} size="small" label="Code is poetry." onChange={handleChecked} />
        </>;
}`,...(K=(z=r.parameters)==null?void 0:z.docs)==null?void 0:K.source}}},a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(false);
  const handleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);
  return <ToggleControl checked={checked} label="Code is poetry." help="Code is poetry. Code is poetry. Code is poetry." onChange={handleChecked} />;
}`,...(L=(D=a.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};try{S.displayName="Default",S.__docgenInfo={description:"",displayName:"Default",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Default"]={docgenInfo:S.__docgenInfo,name:"Default",path:"../components/components/toggle-control/stories/index.stories.tsx#Default"})}catch(E){}try{_.displayName="Slow",_.__docgenInfo={description:"",displayName:"Slow",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Slow"]={docgenInfo:_.__docgenInfo,name:"Slow",path:"../components/components/toggle-control/stories/index.stories.tsx#Slow"})}catch(E){}try{c.displayName="Disabled",c.__docgenInfo={description:"",displayName:"Disabled",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Disabled"]={docgenInfo:c.__docgenInfo,name:"Disabled",path:"../components/components/toggle-control/stories/index.stories.tsx#Disabled"})}catch(E){}try{r.displayName="Small",r.__docgenInfo={description:"",displayName:"Small",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#Small"]={docgenInfo:r.__docgenInfo,name:"Small",path:"../components/components/toggle-control/stories/index.stories.tsx#Small"})}catch(E){}try{a.displayName="HelpText",a.__docgenInfo={description:"",displayName:"HelpText",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../components/components/toggle-control/stories/index.stories.tsx#HelpText"]={docgenInfo:a.__docgenInfo,name:"HelpText",path:"../components/components/toggle-control/stories/index.stories.tsx#HelpText"})}catch(E){}},"../../../node_modules/.pnpm/@wordpress+components@28.9.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex-block/component.js":(x,t,o)=>{o.d(t,{A:()=>f});var s=o("../../../node_modules/.pnpm/@wordpress+components@28.9.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js"),d=o("../../../node_modules/.pnpm/@wordpress+components@28.9.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/view/component.js"),i=o("../../../node_modules/.pnpm/@wordpress+components@28.9.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/use-context-system.js"),m=o("../../../node_modules/.pnpm/@wordpress+components@28.9.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex-item/hook.js");function p(g){const v=(0,i.A)(g,"FlexBlock");return(0,m.K)({isBlock:!0,...v})}var u=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function l(g,v){const b=p(g);return(0,u.jsx)(d.A,{...b,ref:v})}const f=(0,s.KZ)(l,"FlexBlock")},"../../../node_modules/.pnpm/@wordpress+components@28.9.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/component.js":(x,t,o)=>{o.d(t,{A:()=>l});var s=o("../../../node_modules/.pnpm/@wordpress+components@28.9.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js"),d=o("../../../node_modules/.pnpm/@wordpress+components@28.9.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/view/component.js"),i=o("../../../node_modules/.pnpm/@wordpress+components@28.9.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/hook.js"),m=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function p(C,f){const g=(0,i.A)(C);return(0,m.jsx)(d.A,{...g,ref:f})}const l=(0,s.KZ)(p,"HStack")},"../../../node_modules/.pnpm/@wordpress+components@28.9.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/toggle-control/index.js":(x,t,o)=>{o.d(t,{A:()=>a});var s=o("../../../node_modules/.pnpm/@emotion+react@11.13.3_@types+react@18.3.3_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),d=o("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),i=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=o("../../../node_modules/.pnpm/@wordpress+compose@7.9.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js"),p=o("../../../node_modules/.pnpm/@wordpress+deprecated@4.9.0/node_modules/@wordpress/deprecated/build-module/index.js"),u=o("../../../node_modules/.pnpm/@wordpress+components@28.9.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/flex/flex-block/component.js"),l=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const C=()=>{};function f(n,h){const{className:e,checked:y,id:k,disabled:A,onChange:R=C,...P}=n,$=(0,d.A)("components-form-toggle",e,{"is-checked":y,"is-disabled":A});return(0,l.jsxs)("span",{className:$,children:[(0,l.jsx)("input",{className:"components-form-toggle__input",id:k,type:"checkbox",checked:y,onChange:R,disabled:A,...P,ref:h}),(0,l.jsx)("span",{className:"components-form-toggle__track"}),(0,l.jsx)("span",{className:"components-form-toggle__thumb"})]})}const v=(0,i.forwardRef)(f);var b=o("../../../node_modules/.pnpm/@wordpress+components@28.9.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/base-control/index.js"),j=o("../../../node_modules/.pnpm/@wordpress+components@28.9.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/h-stack/component.js"),S=o("../../../node_modules/.pnpm/@wordpress+components@28.9.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/hooks/use-cx.js"),_=o("../../../node_modules/.pnpm/@wordpress+components@28.9.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/space.js");function c({__nextHasNoMarginBottom:n,label:h,checked:e,help:y,className:k,onChange:A,disabled:R},P){function $(L){A(L.target.checked)}const I=`inspector-toggle-control-${(0,m.A)(r)}`,K=(0,S.l)()("components-toggle-control",k,!n&&(0,s.AH)({marginBottom:(0,_.x)(3)},"",""));n||(0,p.A)("Bottom margin styles for wp.components.ToggleControl",{since:"6.7",version:"7.0",hint:"Set the `__nextHasNoMarginBottom` prop to true to start opting into the new styles, which will become the default in a future version."});let B,D;return y&&(typeof y=="function"?e!==void 0&&(D=y(e)):D=y,D&&(B=I+"__help")),(0,l.jsx)(b.Ay,{id:I,help:D&&(0,l.jsx)("span",{className:"components-toggle-control__help",children:D}),className:K,__nextHasNoMarginBottom:!0,children:(0,l.jsxs)(j.A,{justify:"flex-start",spacing:2,children:[(0,l.jsx)(v,{id:I,checked:e,onChange:$,"aria-describedby":B,disabled:R,ref:P}),(0,l.jsx)(u.A,{as:"label",htmlFor:I,className:(0,d.A)("components-toggle-control__label",{"is-disabled":R}),children:h})]})})}const r=(0,i.forwardRef)(c),a=r},"../../../node_modules/.pnpm/@wordpress+components@28.9.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/colors-values.js":(x,t,o)=>{o.d(t,{l:()=>u});const s="#fff",d={900:"#1e1e1e",800:"#2f2f2f",700:"#757575",600:"#949494",400:"#ccc",300:"#ddd",200:"#e0e0e0",100:"#f0f0f0"},i={yellow:"#f0b849",red:"#d94f4f",green:"#4ab866"},m={accent:"var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9))",accentDarker10:"var(--wp-components-color-accent-darker-10, var(--wp-admin-theme-color-darker-10, #2145e6))",accentDarker20:"var(--wp-components-color-accent-darker-20, var(--wp-admin-theme-color-darker-20, #183ad6))",accentInverted:`var(--wp-components-color-accent-inverted, ${s})`,background:`var(--wp-components-color-background, ${s})`,foreground:`var(--wp-components-color-foreground, ${d[900]})`,foregroundInverted:`var(--wp-components-color-foreground-inverted, ${s})`,gray:{900:`var(--wp-components-color-foreground, ${d[900]})`,800:`var(--wp-components-color-gray-800, ${d[800]})`,700:`var(--wp-components-color-gray-700, ${d[700]})`,600:`var(--wp-components-color-gray-600, ${d[600]})`,400:`var(--wp-components-color-gray-400, ${d[400]})`,300:`var(--wp-components-color-gray-300, ${d[300]})`,200:`var(--wp-components-color-gray-200, ${d[200]})`,100:`var(--wp-components-color-gray-100, ${d[100]})`}},p={background:m.background,backgroundDisabled:m.gray[100],border:m.gray[600],borderHover:m.gray[700],borderFocus:m.accent,borderDisabled:m.gray[400],textDisabled:m.gray[600],darkGrayPlaceholder:`color-mix(in srgb, ${m.foreground}, transparent 38%)`,lightGrayPlaceholder:`color-mix(in srgb, ${m.background}, transparent 35%)`},u=Object.freeze({gray:d,white:s,alert:i,theme:m,ui:p});var l=null},"../../../node_modules/.pnpm/@wordpress+components@28.9.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/utils/space.js":(x,t,o)=>{o.d(t,{x:()=>d});const s="4px";function d(i){var p,u;if(typeof i=="undefined")return;if(!i)return"0";const m=typeof i=="number"?i:Number(i);return typeof window!="undefined"&&((u=(p=window.CSS)==null?void 0:p.supports)!=null&&u.call(p,"margin",i.toString()))||Number.isNaN(m)?i.toString():`calc(${s} * ${i})`}},"../../../node_modules/.pnpm/@wordpress+components@28.9.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/visually-hidden/component.js":(x,t,o)=>{o.d(t,{A:()=>C});var s=o("../../../node_modules/.pnpm/@wordpress+components@28.9.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/use-context-system.js"),d=o("../../../node_modules/.pnpm/@wordpress+components@28.9.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/context/context-connect.js");const i={border:0,clip:"rect(1px, 1px, 1px, 1px)",WebkitClipPath:"inset( 50% )",clipPath:"inset( 50% )",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",wordWrap:"normal"};var m=o("../../../node_modules/.pnpm/@wordpress+components@28.9.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/view/component.js"),p=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function u(f,g){const{style:v,...b}=(0,s.A)(f,"VisuallyHidden");return(0,p.jsx)(m.A,{ref:g,...b,style:{...i,...v||{}}})}const C=(0,d.KZ)(u,"VisuallyHidden")},"../../../node_modules/.pnpm/@wordpress+compose@7.9.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js":(x,t,o)=>{o.d(t,{A:()=>p});var s=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const d=new WeakMap;function i(u){const l=d.get(u)||0;return d.set(u,l+1),l}function m(u,l,C){return(0,s.useMemo)(()=>{if(C)return C;const f=i(u);return l?`${l}-${f}`:f},[u,C,l])}const p=m},"../../../node_modules/.pnpm/@wordpress+deprecated@4.9.0/node_modules/@wordpress/deprecated/build-module/index.js":(x,t,o)=>{o.d(t,{A:()=>i});var s=o("../../../node_modules/.pnpm/@wordpress+hooks@4.9.0/node_modules/@wordpress/hooks/build-module/index.js");const d=Object.create(null);function i(m,p={}){const{since:u,version:l,alternative:C,plugin:f,link:g,hint:v}=p,b=f?` from ${f}`:"",j=u?` since version ${u}`:"",S=l?` and will be removed${b} in version ${l}`:"",_=C?` Please use ${C} instead.`:"",c=g?` See: ${g}`:"",r=v?` Note: ${v}`:"",a=`${m} is deprecated${j}${S}.${_}${c}${r}`;a in d||((0,s.Eo)("deprecated",m,p,a),console.warn(a),d[a]=!0)}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../components/components/toggle-control/styles.module.scss":(x,t,o)=>{o.d(t,{A:()=>u});var s=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=o.n(s),i=o("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),m=o.n(i),p=m()(d());p.push([x.id,".oH070sCBKmmSCsJW4qCg{--base-width: 8px}.oH070sCBKmmSCsJW4qCg.Y3PMNlFXh5x11Sj52c_o{--base-width: 6px}.oH070sCBKmmSCsJW4qCg.apmOjtu5hzpJmHPMMKCb .components-toggle-control__label{display:none}.oH070sCBKmmSCsJW4qCg .components-form-toggle{--wp-admin-theme-color: var( --jp-green-40 );height:calc(var(--base-width)*3)}.oH070sCBKmmSCsJW4qCg .components-form-toggle__input:focus+.components-form-toggle__track{box-shadow:0 0 0 2px var(--jp-white),0 0 0 4px var(--jp-green-50)}.oH070sCBKmmSCsJW4qCg .components-form-toggle .components-form-toggle__track{width:calc(var(--base-width)*6);height:calc(var(--base-width)*3);border-radius:12px;border-width:2px}.oH070sCBKmmSCsJW4qCg .components-form-toggle .components-form-toggle__thumb{width:calc(var(--base-width)*2);height:calc(var(--base-width)*2);top:calc(var(--base-width)/2);left:calc(var(--base-width)/2)}.oH070sCBKmmSCsJW4qCg .components-form-toggle.is-checked .components-form-toggle__thumb{transform:translateX(calc(var(--base-width) * 3))}.oH070sCBKmmSCsJW4qCg.EX6n744Crf5bz8oOe02m .components-form-toggle{opacity:.6}",""]),p.locals={toggle:"oH070sCBKmmSCsJW4qCg","is-small":"Y3PMNlFXh5x11Sj52c_o","no-label":"apmOjtu5hzpJmHPMMKCb","is-toggling":"EX6n744Crf5bz8oOe02m"};const u=p},"../../../node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":(x,t,o)=>{var s=o("../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js"),d={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},m={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},p={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u={};u[s.ForwardRef]=m,u[s.Memo]=p;function l(_){return s.isMemo(_)?p:u[_.$$typeof]||d}var C=Object.defineProperty,f=Object.getOwnPropertyNames,g=Object.getOwnPropertySymbols,v=Object.getOwnPropertyDescriptor,b=Object.getPrototypeOf,j=Object.prototype;function S(_,c,r){if(typeof c!="string"){if(j){var a=b(c);a&&a!==j&&S(_,a,r)}var n=f(c);g&&(n=n.concat(g(c)));for(var h=l(_),e=l(c),y=0;y<n.length;++y){var k=n[y];if(!i[k]&&!(r&&r[k])&&!(e&&e[k])&&!(h&&h[k])){var A=v(c,k);try{C(_,k,A)}catch(R){}}}}return _}x.exports=S},"../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js":(x,t)=>{/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=typeof Symbol=="function"&&Symbol.for,s=o?Symbol.for("react.element"):60103,d=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,m=o?Symbol.for("react.strict_mode"):60108,p=o?Symbol.for("react.profiler"):60114,u=o?Symbol.for("react.provider"):60109,l=o?Symbol.for("react.context"):60110,C=o?Symbol.for("react.async_mode"):60111,f=o?Symbol.for("react.concurrent_mode"):60111,g=o?Symbol.for("react.forward_ref"):60112,v=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.suspense_list"):60120,j=o?Symbol.for("react.memo"):60115,S=o?Symbol.for("react.lazy"):60116,_=o?Symbol.for("react.block"):60121,c=o?Symbol.for("react.fundamental"):60117,r=o?Symbol.for("react.responder"):60118,a=o?Symbol.for("react.scope"):60119;function n(e){if(typeof e=="object"&&e!==null){var y=e.$$typeof;switch(y){case s:switch(e=e.type,e){case C:case f:case i:case p:case m:case v:return e;default:switch(e=e&&e.$$typeof,e){case l:case g:case S:case j:case u:return e;default:return y}}case d:return y}}}function h(e){return n(e)===f}t.AsyncMode=C,t.ConcurrentMode=f,t.ContextConsumer=l,t.ContextProvider=u,t.Element=s,t.ForwardRef=g,t.Fragment=i,t.Lazy=S,t.Memo=j,t.Portal=d,t.Profiler=p,t.StrictMode=m,t.Suspense=v,t.isAsyncMode=function(e){return h(e)||n(e)===C},t.isConcurrentMode=h,t.isContextConsumer=function(e){return n(e)===l},t.isContextProvider=function(e){return n(e)===u},t.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===s},t.isForwardRef=function(e){return n(e)===g},t.isFragment=function(e){return n(e)===i},t.isLazy=function(e){return n(e)===S},t.isMemo=function(e){return n(e)===j},t.isPortal=function(e){return n(e)===d},t.isProfiler=function(e){return n(e)===p},t.isStrictMode=function(e){return n(e)===m},t.isSuspense=function(e){return n(e)===v},t.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===i||e===f||e===p||e===m||e===v||e===b||typeof e=="object"&&e!==null&&(e.$$typeof===S||e.$$typeof===j||e.$$typeof===u||e.$$typeof===l||e.$$typeof===g||e.$$typeof===c||e.$$typeof===r||e.$$typeof===a||e.$$typeof===_)},t.typeOf=n},"../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js":(x,t,o)=>{x.exports=o("../../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js")}}]);})();
