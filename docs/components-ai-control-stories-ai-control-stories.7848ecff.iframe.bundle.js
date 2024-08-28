(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8733],{"../ai-client/src/components/ai-control/stories/ai-control.stories.tsx":(D,g,n)=>{var r,J,M;"use strict";n.r(g),n.d(g,{Default:()=>e,__namedExportsOrder:()=>Y,default:()=>Z});var c=n("../../../node_modules/.pnpm/@storybook+addon-actions@8.2.9_storybook@8.2.9/node_modules/@storybook/addon-actions/dist/index.mjs"),f=n("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),o=n("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/notice/index.js"),w=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=n("../ai-client/src/components/message/index.tsx"),p=n("../ai-client/src/components/ai-control/index.tsx"),i=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const Z={title:"JS Packages/AI Client/AI Control",component:p.tK,decorators:[l=>(0,i.jsx)("div",{style:{backgroundColor:"white"},children:(0,i.jsx)(l,{})})],argTypes:{state:{control:{type:"select"},options:["init","requesting","suggesting","done","error"]},message:{control:{type:"select"},options:["None","Guideline message","Error message","Upgrade message"],mapping:{None:null,"Guideline message":(0,i.jsx)(a.Eo,{}),"Error message":(0,i.jsx)(a.Bc,{onTryAgainClick:(0,c.aD)("onTryAgainClick"),onUpgradeClick:(0,c.aD)("onUpgradeClick")}),"Upgrade message":(0,i.jsx)(a.xi,{requestsRemaining:10,onUpgradeClick:(0,c.aD)("onUpgradeClick")})}},actions:{control:{type:"select"},options:["None","Accept button"],mapping:{None:null,"Accept button":(0,i.jsx)(f.ZP,{children:"Accept"})}},error:{control:{type:"select"},options:["None","Error notice"],mapping:{None:null,"Error notice":(0,i.jsx)(o.Z,{status:"error",isDismissible:!0,children:"Error message"})}}},parameters:{controls:{exclude:/on[A-Z].*/}}},X=l=>{var ee;const[d,N]=(0,w.useState)(""),Q=ne=>{var oe;N(ne),(oe=l==null?void 0:l.onChange)==null||oe.call(l,ne)};return(0,i.jsx)(p.tK,{...l,onChange:Q,value:(ee=l==null?void 0:l.value)!=null?ee:d})},$={placeholder:"Placeholder",disabled:!1,isTransparent:!1,state:"init",onChange:(0,c.aD)("onChange"),message:null,banner:null,error:null,actions:null},e=X.bind({});e.args=$;const Y=["Default"];e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const handleChange = (newValue: string) => {
    setValue(newValue);
    args?.onChange?.(newValue);
  };
  return <AIControl {...args} onChange={handleChange} value={args?.value ?? value} />;
}`,...(M=(J=e.parameters)==null?void 0:J.docs)==null?void 0:M.source}}}},"../ai-client/src/components/ai-control/index.tsx":(D,g,n)=>{"use strict";n.d(g,{tK:()=>Y,MW:()=>_e,C3:()=>ge});var c=n("../../../node_modules/.pnpm/@wordpress+block-editor@14.0.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/block-editor/build-module/index.js"),f=n("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),o=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),w=n("../ai-client/src/components/ai-status-indicator/index.tsx"),a=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=n.n(a),i=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../ai-client/src/components/ai-control/style.scss"),Z={};Z.insert="head",Z.singleton=!1;var X=p()(i.Z,Z);const $=i.Z.locals||{};var e=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function Y({className:_,disabled:s=!1,value:t="",placeholder:T="",isTransparent:P=!1,state:C="init",onChange:x,banner:v=null,error:R=null,actions:G=null,message:b=null,promptUserInputRef:y=null,wrapperRef:B=null}){return(0,e.jsxs)("div",{className:(0,f.Z)("jetpack-components-ai-control__container-wrapper",_),ref:B,children:[R,(0,e.jsxs)("div",{className:"jetpack-components-ai-control__container",children:[v,(0,e.jsxs)("div",{className:(0,f.Z)("jetpack-components-ai-control__wrapper",{"is-transparent":P}),children:[(0,e.jsx)(w.Z,{state:C}),(0,e.jsx)("div",{className:"jetpack-components-ai-control__input-wrapper",children:(0,e.jsx)(c.f3,{value:t,onChange:x,placeholder:T,className:"jetpack-components-ai-control__input",disabled:s,ref:y})}),G]}),b]})]})}try{aicontrol.displayName="aicontrol",aicontrol.__docgenInfo={description:"Base AIControl component. Contains the main structure of the control component and slots for banner, error, actions and message.",displayName:"aicontrol",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}},isTransparent:{defaultValue:{value:"false"},description:"",name:"isTransparent",required:!1,type:{name:"boolean"}},state:{defaultValue:{value:"init"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"init"'},{value:'"requesting"'},{value:'"suggesting"'},{value:'"done"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(newValue: string) => void"}},banner:{defaultValue:{value:"null"},description:"",name:"banner",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},error:{defaultValue:{value:"null"},description:"",name:"error",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},actions:{defaultValue:{value:"null"},description:"",name:"actions",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},message:{defaultValue:{value:"null"},description:"",name:"message",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},promptUserInputRef:{defaultValue:{value:"null"},description:"",name:"promptUserInputRef",required:!1,type:{name:"React.MutableRefObject<HTMLInputElement>"}},wrapperRef:{defaultValue:{value:"null"},description:"",name:"wrapperRef",required:!1,type:{name:"React.MutableRefObject<HTMLDivElement>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/ai-control/ai-control.tsx#aicontrol"]={docgenInfo:aicontrol.__docgenInfo,name:"aicontrol",path:"../ai-client/src/components/ai-control/ai-control.tsx#aicontrol"})}catch(_){}var r=n("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),J=n("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button-group/index.js"),M=n("../../../node_modules/.pnpm/@wordpress+compose@7.5.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-keyboard-shortcut/index.js"),l=n("../../../node_modules/.pnpm/@wordpress+i18n@5.5.0/node_modules/@wordpress/i18n/build-module/index.js"),d=n("../../../node_modules/.pnpm/@wordpress+icons@10.5.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),N=n("../../../node_modules/.pnpm/@wordpress+icons@10.5.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/close-small.js"),Q=n("../../../node_modules/.pnpm/@wordpress+icons@10.5.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-up.js"),ee=n("../../../node_modules/.pnpm/@wordpress+icons@10.5.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/trash.js"),ne=n("../../../node_modules/.pnpm/@wordpress+icons@10.5.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/reusable-block.js"),oe=n("../../../node_modules/.pnpm/@wordpress+icons@10.5.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/check.js"),de=n("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js"),me=n.n(de),z=n("../ai-client/src/components/message/index.tsx");const u=l.__,ue=me()("jetpack-ai-client:block-ai-control");function se({disabled:_=!1,value:s="",placeholder:t="",showAccept:T=!1,acceptLabel:P=u("Accept","jetpack-ai-client"),showButtonLabels:C=!0,isTransparent:x=!1,state:v="init",showGuideLine:R=!1,customFooter:G=null,onChange:b,onSend:y,onStop:B,onAccept:V,onDiscard:A,showRemove:K=!1,banner:L=null,error:U=null},W){const O=v==="requesting"||v==="suggesting",[m,F]=(0,o.useState)(!1),[k,ae]=(0,o.useState)(s||null),j=(0,o.useRef)(null);(0,o.useImperativeHandle)(W,()=>j.current),(0,o.useEffect)(()=>{var h;m&&((h=j==null?void 0:j.current)==null||h.focus())},[m]);const H=(0,o.useCallback)(()=>{ae(s),F(!1),y==null||y(s)},[s]),le=(0,o.useCallback)(h=>{b==null||b(h),v!=="init"&&F(k?h!==k:h.length>0)},[k,v]),S=(0,o.useCallback)(()=>{A==null||A()},[]),re=(0,o.useCallback)(()=>{ue("cancelEdit, revert to last value",k),b==null||b(k||""),F(!1)},[k]);(0,M.Z)("mod+enter",()=>{T&&(V==null||V())},{target:j}),(0,M.Z)("enter",h=>{h.preventDefault(),H()},{target:j});const ce=(0,e.jsxs)(e.Fragment,{children:[(!T||m)&&(0,e.jsx)("div",{className:"jetpack-components-ai-control__controls-prompt_button_wrapper",children:O?(0,e.jsx)(r.ZP,{className:"jetpack-components-ai-control__controls-prompt_button",onClick:B,variant:"secondary",label:u("Stop request","jetpack-ai-client"),children:C?u("Stop","jetpack-ai-client"):(0,e.jsx)(d.Z,{icon:N.Z})}):(0,e.jsxs)(e.Fragment,{children:[m&&(0,e.jsx)(r.ZP,{className:"jetpack-components-ai-control__controls-prompt_button",onClick:re,variant:"secondary",label:u("Cancel","jetpack-ai-client"),children:C?u("Cancel","jetpack-ai-client"):(0,e.jsx)(d.Z,{icon:N.Z})}),K&&!m&&!(s!=null&&s.length)&&A&&(0,e.jsx)(r.ZP,{className:"jetpack-components-ai-control__controls-prompt_button",onClick:S,variant:"secondary",label:u("Cancel","jetpack-ai-client"),children:C?u("Cancel","jetpack-ai-client"):(0,e.jsx)(d.Z,{icon:N.Z})}),(s==null?void 0:s.length)>0&&(0,e.jsx)(r.ZP,{className:"jetpack-components-ai-control__controls-prompt_button",onClick:H,variant:"primary",disabled:!(s!=null&&s.length)||_,label:u("Send request","jetpack-ai-client"),children:C?u("Generate","jetpack-ai-client"):(0,e.jsx)(d.Z,{icon:Q.Z})})]})}),T&&!m&&(0,e.jsxs)("div",{className:"jetpack-components-ai-control__controls-prompt_button_wrapper",children:[((s==null?void 0:s.length)>0||k===null)&&(0,e.jsxs)(J.Z,{children:[(0,e.jsx)(r.ZP,{className:"jetpack-components-ai-control__controls-prompt_button",label:u("Discard","jetpack-ai-client"),onClick:S,tooltipPosition:"top",children:(0,e.jsx)(d.Z,{icon:ee.Z})}),(0,e.jsx)(r.ZP,{className:"jetpack-components-ai-control__controls-prompt_button",label:u("Regenerate","jetpack-ai-client"),onClick:()=>y==null?void 0:y(s),tooltipPosition:"top",disabled:!(s!=null&&s.length)||s===null||_,children:(0,e.jsx)(d.Z,{icon:ne.Z})})]}),(0,e.jsx)(r.ZP,{className:"jetpack-components-ai-control__controls-prompt_button",onClick:V,variant:"primary",label:P,children:C?P:(0,e.jsx)(d.Z,{icon:oe.Z})})]})]}),pe=R&&!O&&!m&&(G||(0,e.jsx)(z.Eo,{}));return(0,e.jsx)(Y,{disabled:_||O,value:s,placeholder:t,isTransparent:x,state:v,onChange:le,banner:L,error:U,actions:ce,message:pe,promptUserInputRef:j})}const _e=(0,o.forwardRef)(se);try{se.displayName="BlockAIControl",se.__docgenInfo={description:"BlockAIControl component. Used by the AI Assistant block, adding logic and components to the base AIControl component.",displayName:"BlockAIControl",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/ai-control/block-ai-control.tsx#BlockAIControl"]={docgenInfo:se.__docgenInfo,name:"BlockAIControl",path:"../ai-client/src/components/ai-control/block-ai-control.tsx#BlockAIControl"})}catch(_){}var je=n("../../../node_modules/.pnpm/@wordpress+icons@10.5.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/undo.js");const I=l.__;function te({className:_,disabled:s=!1,value:t="",placeholder:T="",showButtonLabels:P=!0,isTransparent:C=!1,state:x="init",showGuideLine:v=!1,error:R,requestsRemaining:G,showUpgradeMessage:b=!1,showFairUsageMessage:y=!1,upgradeUrl:B,wrapperRef:V,onChange:A,onSend:K,onStop:L,onClose:U,onUndo:W,onUpgrade:O,onTryAgain:m},F){const k=x==="requesting"||x==="suggesting",[ae,j]=(0,o.useState)(!1),[H,le]=(0,o.useState)(t||null),S=(0,o.useRef)(null);(0,o.useImperativeHandle)(F,()=>S.current),(0,o.useEffect)(()=>{var E;ae&&((E=S==null?void 0:S.current)==null||E.focus())},[ae]);const re=(0,o.useCallback)(()=>{le(t),j(!1),K==null||K(t)},[K,t]),ce=(0,o.useCallback)(E=>{A==null||A(E),x!=="init"&&j(H?E!==H:E.length>0)},[A,H,x]),pe=(0,o.useCallback)(()=>{L==null||L()},[L]),h=(0,o.useCallback)(()=>{U==null||U()},[U]),fe=(0,o.useCallback)(()=>{W==null||W()},[W]),ie=(0,o.useCallback)(E=>{O==null||O(E)},[O]),xe=(0,o.useCallback)(()=>{m==null||m()},[m]);(0,M.Z)("enter",E=>{E.preventDefault(),re()},{target:S});const be=(0,e.jsx)(e.Fragment,{children:k?(0,e.jsx)(r.ZP,{className:"jetpack-components-ai-control__controls-prompt_button",onClick:pe,variant:"secondary",label:I("Stop request","jetpack-ai-client"),children:P?I("Stop","jetpack-ai-client"):(0,e.jsx)(d.Z,{icon:N.Z})}):(0,e.jsxs)(e.Fragment,{children:[(t==null?void 0:t.length)>0&&(0,e.jsx)("div",{className:"jetpack-components-ai-control__controls-prompt_button_wrapper",children:(0,e.jsx)(r.ZP,{className:"jetpack-components-ai-control__controls-prompt_button",onClick:re,variant:"primary",disabled:!(t!=null&&t.length)||s,label:I("Send request","jetpack-ai-client"),children:P?I("Generate","jetpack-ai-client"):(0,e.jsx)(d.Z,{icon:Q.Z})})}),(t==null?void 0:t.length)<=0&&x==="done"&&(0,e.jsx)("div",{className:"jetpack-components-ai-control__controls-prompt_button_wrapper",children:(0,e.jsxs)(J.Z,{children:[(0,e.jsx)(r.ZP,{className:"jetpack-components-ai-control__controls-prompt_button",label:I("Undo","jetpack-ai-client"),onClick:fe,tooltipPosition:"top",children:(0,e.jsx)(d.Z,{icon:je.Z})}),(0,e.jsx)(r.ZP,{className:"jetpack-components-ai-control__controls-prompt_button",label:I("Close","jetpack-ai-client"),onClick:h,variant:"tertiary",children:I("Close","jetpack-ai-client")})]})})]})});let q=null;return R!=null&&R.message?q=(0,e.jsx)(z.Bc,{error:R.message,code:R.code,onTryAgainClick:xe,onUpgradeClick:ie,upgradeUrl:B}):y?q=(0,e.jsx)(z.gh,{}):b?q=(0,e.jsx)(z.xi,{requestsRemaining:G,onUpgradeClick:ie,upgradeUrl:B}):v&&(q=(0,e.jsx)(z.Eo,{})),(0,e.jsx)(Y,{className:_,disabled:s||k,value:t,placeholder:T,isTransparent:C,state:x,onChange:ce,actions:be,message:q,promptUserInputRef:S,wrapperRef:V})}const ge=(0,o.forwardRef)(te);try{te.displayName="ExtensionAIControl",te.__docgenInfo={description:"ExtensionAIControl component. Used by the AI Assistant inline extensions, adding logic and components to the base AIControl component.",displayName:"ExtensionAIControl",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/ai-control/extension-ai-control.tsx#ExtensionAIControl"]={docgenInfo:te.__docgenInfo,name:"ExtensionAIControl",path:"../ai-client/src/components/ai-control/extension-ai-control.tsx#ExtensionAIControl"})}catch(_){}try{aicontrol.displayName="aicontrol",aicontrol.__docgenInfo={description:"Base AIControl component. Contains the main structure of the control component and slots for banner, error, actions and message.",displayName:"aicontrol",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}},isTransparent:{defaultValue:{value:"false"},description:"",name:"isTransparent",required:!1,type:{name:"boolean"}},state:{defaultValue:{value:"init"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"init"'},{value:'"requesting"'},{value:'"suggesting"'},{value:'"done"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(newValue: string) => void"}},banner:{defaultValue:{value:"null"},description:"",name:"banner",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},error:{defaultValue:{value:"null"},description:"",name:"error",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},actions:{defaultValue:{value:"null"},description:"",name:"actions",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},message:{defaultValue:{value:"null"},description:"",name:"message",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},promptUserInputRef:{defaultValue:{value:"null"},description:"",name:"promptUserInputRef",required:!1,type:{name:"React.MutableRefObject<HTMLInputElement>"}},wrapperRef:{defaultValue:{value:"null"},description:"",name:"wrapperRef",required:!1,type:{name:"React.MutableRefObject<HTMLDivElement>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/ai-control/index.tsx#aicontrol"]={docgenInfo:aicontrol.__docgenInfo,name:"aicontrol",path:"../ai-client/src/components/ai-control/index.tsx#aicontrol"})}catch(_){}},"../ai-client/src/components/ai-status-indicator/index.tsx":(D,g,n)=>{"use strict";n.d(g,{Z:()=>$});var c=n("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),f=n("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),o=n("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),w=n.n(o),a=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../ai-client/src/components/ai-status-indicator/style.scss"),p={};p.insert="head",p.singleton=!1;var i=w()(a.Z,p);const Z=a.Z.locals||{};var X=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function $({state:e}){return(0,X.jsx)("div",{className:(0,f.Z)("jetpack-ai-status-indicator__icon-wrapper",{[`is-${e}`]:!0}),children:(0,X.jsx)(c.ZP,{})})}try{aistatusindicator.displayName="aistatusindicator",aistatusindicator.__docgenInfo={description:"AiStatusIndicator component.",displayName:"aistatusindicator",props:{state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"init"'},{value:'"requesting"'},{value:'"suggesting"'},{value:'"done"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"24"},{value:"32"},{value:"48"},{value:"64"}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/ai-status-indicator/index.tsx#aistatusindicator"]={docgenInfo:aistatusindicator.__docgenInfo,name:"aistatusindicator",path:"../ai-client/src/components/ai-status-indicator/index.tsx#aistatusindicator"})}catch(e){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../ai-client/src/components/ai-control/style.scss":(D,g,n)=>{"use strict";n.d(g,{Z:()=>p});var c=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),f=n.n(c),o=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),w=n.n(o),a=w()(f());a.push([D.id,':root{--font-title-large: 36px;--font-title-small: 24px;--font-body: 16px;--font-label: 12px;--jp-black: #000000;--jp-black-80: #2c3338;--jp-white: #ffffff;--jp-white-off: #f9f9f6;--jp-gray: #dcdcde;--jp-gray-0: #F6F7F7;--jp-gray-5: #dcdcde;--jp-gray-10: #c3c4c7;--jp-gray-20: #A7AAAD;--jp-gray-30: #8c8f94;--jp-gray-40: #787C82;--jp-gray-50: #646970;--jp-gray-60: #50575E;--jp-gray-70: #3c434a;--jp-gray-80: #2C3338;--jp-gray-90: #1d2327;--jp-gray-100: #101517;--jp-gray-off: #e2e2df;--jp-yellow-5: #f5e6b3;--jp-yellow-10: #f2cf75;--jp-yellow-40: #c08c00;--jp-orange-20: #faa754;--jp-blue-5: #ced9f2;--jp-red-0: #F7EBEC;--jp-red-50: #D63638;--jp-red-60: #B32D2E;--jp-red-80: #8A2424;--jp-red: #d63639;--jp-pink: #C9356E;--jp-green-0: #f0f2eb;--jp-green-5: #d0e6b8;--jp-green-10: #9dd977;--jp-green-20: #64ca43;--jp-green-30: #2fb41f;--jp-green-40: #069e08;--jp-green-50: #008710;--jp-green-60: #007117;--jp-green-70: #005b18;--jp-green-80: #004515;--jp-green-90: #003010;--jp-green-100: #001c09;--jp-green: #069e08;--jp-green-primary: var(--jp-green-40);--jp-green-secondary: var(--jp-green-30);--jp-border-radius: 4px;--jp-border-radius-rna: 8px;--jp-menu-border-height: 1px;--jp-underline-thickness: 2px;--jp-modal-padding-large: 32px;--jp-modal-padding: 24px;--jp-modal-padding-small: 16px;--jp-modal-radius: 8px;--jp-button-padding: 8px;--jp-button-radius: 4px;--jp-gap: 16px;--jp-highlight: #3858e9}.jetpack-components-ai-control__container-wrapper{position:sticky;bottom:16px}.jetpack-components-ai-control__container{color:var(--jp-gray-80);background-color:var(--jp-white);box-shadow:0px 12px 15px 0px rgba(0,0,0,.12),0px 3px 9px 0px rgba(0,0,0,.12),0px 1px 3px 0px rgba(0,0,0,.15);font-family:"SF Pro Text",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;border-radius:6px;border:1px solid var(--gutenberg-gray-400, #CCC)}.jetpack-components-ai-control__wrapper{display:flex;padding:8px 8px 8px var(--grid-unit-15, 12px);align-items:flex-end;box-sizing:border-box;border-radius:6px 6px 0 0;gap:6px}.jetpack-components-ai-control__wrapper.is-transparent{opacity:.4}.jetpack-components-ai-control__input-wrapper{display:flex;flex-grow:1;align-self:center;min-height:36px;align-items:center}.jetpack-components-ai-control__input-wrapper textarea.jetpack-components-ai-control__input{background-color:var(--jp-white);width:100%;min-height:20px;border-radius:2px;padding:6px 8px;resize:none !important;border:none;box-shadow:none;color:var(--jp-gray-80);font-size:16px;font-weight:400;line-height:20px;transition:box-shadow .1s linear 0s}.jetpack-components-ai-control__input-wrapper textarea.jetpack-components-ai-control__input:focus{box-shadow:none;color:var(--jp-gray-80)}@media(min-width: 600px){.jetpack-components-ai-control__input-wrapper textarea.jetpack-components-ai-control__input{font-size:13px}}.jetpack-components-ai-control__input-wrapper textarea.jetpack-components-ai-control__input::-moz-placeholder{text-overflow:ellipsis;white-space:nowrap;opacity:.75}.jetpack-components-ai-control__input-wrapper textarea.jetpack-components-ai-control__input::placeholder{text-overflow:ellipsis;white-space:nowrap;opacity:.75}.jetpack-components-ai-control__controls-prompt_button_wrapper{display:flex;align-items:center;gap:8px}.jetpack-components-ai-control__controls-prompt_button_wrapper .components-button.is-small:not(.has-label){padding:0}.jetpack-components-ai-control__controls-prompt_button_wrapper .components-button-group .components-button{box-shadow:none;padding:6px 8px}.jetpack-components-ai-control__controls-prompt_button_wrapper .components-button-group{display:flex}.jetpack-components-ai-control__controls-prompt_button:disabled{opacity:.6;cursor:not-allowed}',""]);const p=a},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../ai-client/src/components/ai-status-indicator/style.scss":(D,g,n)=>{"use strict";n.d(g,{Z:()=>p});var c=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),f=n.n(c),o=n("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),w=n.n(o),a=w()(f());a.push([D.id,':root{--font-title-large: 36px;--font-title-small: 24px;--font-body: 16px;--font-label: 12px;--jp-black: #000000;--jp-black-80: #2c3338;--jp-white: #ffffff;--jp-white-off: #f9f9f6;--jp-gray: #dcdcde;--jp-gray-0: #F6F7F7;--jp-gray-5: #dcdcde;--jp-gray-10: #c3c4c7;--jp-gray-20: #A7AAAD;--jp-gray-30: #8c8f94;--jp-gray-40: #787C82;--jp-gray-50: #646970;--jp-gray-60: #50575E;--jp-gray-70: #3c434a;--jp-gray-80: #2C3338;--jp-gray-90: #1d2327;--jp-gray-100: #101517;--jp-gray-off: #e2e2df;--jp-yellow-5: #f5e6b3;--jp-yellow-10: #f2cf75;--jp-yellow-40: #c08c00;--jp-orange-20: #faa754;--jp-blue-5: #ced9f2;--jp-red-0: #F7EBEC;--jp-red-50: #D63638;--jp-red-60: #B32D2E;--jp-red-80: #8A2424;--jp-red: #d63639;--jp-pink: #C9356E;--jp-green-0: #f0f2eb;--jp-green-5: #d0e6b8;--jp-green-10: #9dd977;--jp-green-20: #64ca43;--jp-green-30: #2fb41f;--jp-green-40: #069e08;--jp-green-50: #008710;--jp-green-60: #007117;--jp-green-70: #005b18;--jp-green-80: #004515;--jp-green-90: #003010;--jp-green-100: #001c09;--jp-green: #069e08;--jp-green-primary: var(--jp-green-40);--jp-green-secondary: var(--jp-green-30);--jp-border-radius: 4px;--jp-border-radius-rna: 8px;--jp-menu-border-height: 1px;--jp-underline-thickness: 2px;--jp-modal-padding-large: 32px;--jp-modal-padding: 24px;--jp-modal-padding-small: 16px;--jp-modal-radius: 8px;--jp-button-padding: 8px;--jp-button-radius: 4px;--jp-gap: 16px;--jp-highlight: #3858e9}:where(body){min-height:100%;margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif}.jp-wrap{display:flex;align-items:center;flex-wrap:wrap;max-width:1128px;margin:0 auto}.jp-row{display:grid;grid-gap:24px;grid-template-columns:repeat(4, 1fr);width:100%;margin:0 16px}@media(min-width: 600px){.jp-row{grid-template-columns:repeat(8, 1fr);margin:0 18px}}@media(min-width: 960px){.jp-row{grid-template-columns:repeat(12, 1fr);max-width:1128px;margin:0 24px}}.sm-col-span-1{grid-column-end:span 1}.sm-col-span-2{grid-column-end:span 2}.sm-col-span-3{grid-column-end:span 3}.sm-col-span-4{grid-column-end:span 4}@media(min-width: 600px){.md-col-span-1{grid-column-end:span 1}.md-col-span-2{grid-column-end:span 2}.md-col-span-3{grid-column-end:span 3}.md-col-span-4{grid-column-end:span 4}.md-col-span-5{grid-column-end:span 5}.md-col-span-6{grid-column-end:span 6}.md-col-span-7{grid-column-end:span 7}.md-col-span-8{grid-column-end:span 8}}@media(min-width: 960px){.lg-col-span-1{grid-column-end:span 1}.lg-col-span-2{grid-column-end:span 2}.lg-col-span-3{grid-column-end:span 3}.lg-col-span-4{grid-column-end:span 4}.lg-col-span-5{grid-column-end:span 5}.lg-col-span-6{grid-column-end:span 6}.lg-col-span-7{grid-column-end:span 7}.lg-col-span-8{grid-column-end:span 8}.lg-col-span-9{grid-column-end:span 9}.lg-col-span-10{grid-column-end:span 10}.lg-col-span-11{grid-column-end:span 11}.lg-col-span-12{grid-column-end:span 12}}@media(max-width: 960px){.md-col-span-0{display:none}}@media(max-width: 600px){.sm-col-span-0{display:none}}.jp-cut{position:relative;display:block;margin:32px 0;padding:16px 64px 16px 24px;border:2px solid var(--jp-green-primary);border-radius:var(--jp-border-radius);text-decoration:none}.jp-cut span{display:block}.jp-cut span:last-of-type{font-weight:600}.jp-cut:hover span:last-of-type,.jp-cut:focus span:last-of-type{text-decoration:underline;text-decoration-thickness:var(--jp-underline-thickness)}.jp-cut:hover:after,.jp-cut:focus:after{transform:translateY(-50%) translateX(8px)}.jp-cut:after{content:"\u2192";position:absolute;top:50%;right:24px;font-size:24px;font-weight:600;color:var(--jp-green-primary);transform:translateY(-50%);transition:transform .15s ease-out}.jetpack-ai-status-indicator__icon-wrapper{transition:opacity .25s ease-in-out,width .25s;width:0;opacity:0;align-self:baseline}.jetpack-ai-status-indicator__icon-wrapper>svg{height:24px;width:24px;margin:6px 0 0}.jetpack-ai-status-indicator__icon-wrapper.is-requesting,.jetpack-ai-status-indicator__icon-wrapper.is-suggesting{opacity:1;width:24px}',""]);const p=a},"?7264":()=>{},"?ff19":()=>{},"?f7da":()=>{},"?2f5a":()=>{},"?cd8c":()=>{}}]);})();