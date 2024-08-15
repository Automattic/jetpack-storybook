(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3822],{"../ai-client/src/components/ai-control/stories/block-ai-control.stories.tsx":(V,f,e)=>{var z,U,G;"use strict";e.r(f),e.d(f,{Default:()=>x,__namedExportsOrder:()=>i,default:()=>J});var l=e("../../../node_modules/.pnpm/@storybook+addon-actions@8.2.9_storybook@8.2.9/node_modules/@storybook/addon-actions/dist/index.mjs"),u=e("storybook/internal/preview-api"),t=e.n(u),E=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/notice/index.js"),m=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),p=e("../ai-client/src/components/message/index.tsx"),K=e("../ai-client/src/components/ai-control/index.tsx"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const J={title:"JS Packages/AI Client/AI Control/Block AI Control",component:K.MW,decorators:[o=>(0,d.jsx)("div",{style:{backgroundColor:"white"},children:(0,d.jsx)(o,{})})],argTypes:{state:{control:{type:"select"},options:["init","requesting","suggesting","done","error"]},error:{control:{type:"select"},options:["None","Error notice"],mapping:{None:null,"Error notice":(0,d.jsx)(E.Z,{status:"error",isDismissible:!0,children:"Error message"})}},customFooter:{control:{type:"select"},options:["None","Guideline message","Error message","Upgrade message"],mapping:{None:null,"Guideline message":(0,d.jsx)(p.Eo,{}),"Error message":(0,d.jsx)(p.Bc,{onTryAgainClick:(0,l.aD)("onTryAgainClick"),onUpgradeClick:(0,l.aD)("onUpgradeClick")}),"Upgrade message":(0,d.jsx)(p.xi,{requestsRemaining:10,onUpgradeClick:(0,l.aD)("onUpgradeClick")})}}},parameters:{controls:{exclude:/on[A-Z].*/}}},ne=o=>{var c;const[{value:P},I,oe]=(0,u.useArgs)(),le=r=>{var M;I({value:r,showAccept:!1}),(M=o==null?void 0:o.onChange)==null||M.call(o,r)},re=()=>{var r;I({state:"requesting",error:null,showAccept:!1}),setTimeout(()=>{I({state:"suggesting"}),setTimeout(()=>{I({state:"done",showAccept:!0})},3e3)},1e3),(r=o==null?void 0:o.onSend)==null||r.call(o,P)},ce=()=>{var r;I({state:"done",error:null,showAccept:!0}),(r=o==null?void 0:o.onStop)==null||r.call(o)},pe=()=>{var r;oe(),(r=o==null?void 0:o.onAccept)==null||r.call(o)},W=()=>{var r;oe(),(r=o==null?void 0:o.onDiscard)==null||r.call(o)};return(0,d.jsx)(K.MW,{...o,onChange:le,onSend:re,onStop:ce,onAccept:pe,onDiscard:W,value:(c=o==null?void 0:o.value)!=null?c:P})},n={value:"",placeholder:"Placeholder",acceptLabel:"Accept",showButtonLabels:!0,disabled:!1,isTransparent:!1,state:"init",showAccept:!1,showGuideLine:!0,customFooter:null,onChange:(0,l.aD)("onChange"),onSend:(0,l.aD)("onSend"),onStop:(0,l.aD)("onStop"),onAccept:(0,l.aD)("onAccept"),onDiscard:(0,l.aD)("onDiscard"),showRemove:!1,banner:null,error:null},x=ne.bind({});x.args=n;const i=["Default"];x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs, resetArgs] = useArgs();
  const handleChange = (newValue: string) => {
    updateArgs({
      value: newValue,
      showAccept: false
    });
    args?.onChange?.(newValue);
  };
  const handleSend = () => {
    updateArgs({
      state: 'requesting',
      error: null,
      showAccept: false
    });
    setTimeout(() => {
      updateArgs({
        state: 'suggesting'
      });
      setTimeout(() => {
        updateArgs({
          state: 'done',
          showAccept: true
        });
      }, 3000);
    }, 1000);
    args?.onSend?.(value);
  };
  const handleStop = () => {
    updateArgs({
      state: 'done',
      error: null,
      showAccept: true
    });
    args?.onStop?.();
  };
  const handleAccept = () => {
    resetArgs();
    args?.onAccept?.();
  };
  const handleDiscard = () => {
    resetArgs();
    args?.onDiscard?.();
  };
  return <BlockAIControl {...args} onChange={handleChange} onSend={handleSend} onStop={handleStop} onAccept={handleAccept} onDiscard={handleDiscard} value={args?.value ?? value} />;
}`,...(G=(U=x.parameters)==null?void 0:U.docs)==null?void 0:G.source}}}},"../ai-client/src/components/ai-control/index.tsx":(V,f,e)=>{"use strict";e.d(f,{tK:()=>x,MW:()=>_e,C3:()=>ge});var l=e("../../../node_modules/.pnpm/@wordpress+block-editor@14.0.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/block-editor/build-module/index.js"),u=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),E=e("../ai-client/src/components/ai-status-indicator/index.tsx"),m=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=e.n(m),K=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../ai-client/src/components/ai-control/style.scss"),d={};d.insert="head",d.singleton=!1;var J=p()(K.Z,d);const ne=K.Z.locals||{};var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function x({className:_,disabled:s=!1,value:a="",placeholder:B="",isTransparent:N=!1,state:C="init",onChange:b,banner:v=null,error:A=null,actions:q=null,message:y=null,promptUserInputRef:j=null,wrapperRef:$=null}){return(0,n.jsxs)("div",{className:(0,u.Z)("jetpack-components-ai-control__container-wrapper",_),ref:$,children:[A,(0,n.jsxs)("div",{className:"jetpack-components-ai-control__container",children:[v,(0,n.jsxs)("div",{className:(0,u.Z)("jetpack-components-ai-control__wrapper",{"is-transparent":N}),children:[(0,n.jsx)(E.Z,{state:C}),(0,n.jsx)("div",{className:"jetpack-components-ai-control__input-wrapper",children:(0,n.jsx)(l.f3,{value:a,onChange:b,placeholder:B,className:"jetpack-components-ai-control__input",disabled:s,ref:j})}),q]}),y]})]})}try{aicontrol.displayName="aicontrol",aicontrol.__docgenInfo={description:"Base AIControl component. Contains the main structure of the control component and slots for banner, error, actions and message.",displayName:"aicontrol",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}},isTransparent:{defaultValue:{value:"false"},description:"",name:"isTransparent",required:!1,type:{name:"boolean"}},state:{defaultValue:{value:"init"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"init"'},{value:'"requesting"'},{value:'"suggesting"'},{value:'"done"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(newValue: string) => void"}},banner:{defaultValue:{value:"null"},description:"",name:"banner",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},error:{defaultValue:{value:"null"},description:"",name:"error",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},actions:{defaultValue:{value:"null"},description:"",name:"actions",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},message:{defaultValue:{value:"null"},description:"",name:"message",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},promptUserInputRef:{defaultValue:{value:"null"},description:"",name:"promptUserInputRef",required:!1,type:{name:"React.MutableRefObject<HTMLInputElement>"}},wrapperRef:{defaultValue:{value:"null"},description:"",name:"wrapperRef",required:!1,type:{name:"React.MutableRefObject<HTMLDivElement>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/ai-control/ai-control.tsx#aicontrol"]={docgenInfo:aicontrol.__docgenInfo,name:"aicontrol",path:"../ai-client/src/components/ai-control/ai-control.tsx#aicontrol"})}catch(_){}var i=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),z=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/button-group/index.js"),U=e("../../../node_modules/.pnpm/@wordpress+compose@7.5.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-keyboard-shortcut/index.js"),G=e("../../../node_modules/.pnpm/@wordpress+i18n@5.5.0/node_modules/@wordpress/i18n/build-module/index.js"),o=e("../../../node_modules/.pnpm/@wordpress+icons@10.5.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),P=e("../../../node_modules/.pnpm/@wordpress+icons@10.5.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/close-small.js"),I=e("../../../node_modules/.pnpm/@wordpress+icons@10.5.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-up.js"),oe=e("../../../node_modules/.pnpm/@wordpress+icons@10.5.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/trash.js"),le=e("../../../node_modules/.pnpm/@wordpress+icons@10.5.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/reusable-block.js"),re=e("../../../node_modules/.pnpm/@wordpress+icons@10.5.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/check.js"),ce=e("../../../node_modules/.pnpm/debug@4.3.4/node_modules/debug/src/browser.js"),pe=e.n(ce),W=e("../ai-client/src/components/message/index.tsx");const c=G.__,r=pe()("jetpack-ai-client:block-ai-control");function M({disabled:_=!1,value:s="",placeholder:a="",showAccept:B=!1,acceptLabel:N=c("Accept","jetpack-ai-client"),showButtonLabels:C=!0,isTransparent:b=!1,state:v="init",showGuideLine:A=!1,customFooter:q=null,onChange:y,onSend:j,onStop:$,onAccept:S,onDiscard:R,showRemove:F=!1,banner:H=null,error:X=null},Y){const D=v==="requesting"||v==="suggesting",[O,L]=(0,t.useState)(!1),[h,Q]=(0,t.useState)(s||null),g=(0,t.useRef)(null);(0,t.useImperativeHandle)(Y,()=>g.current),(0,t.useEffect)(()=>{var k;O&&((k=g==null?void 0:g.current)==null||k.focus())},[O]);const se=(0,t.useCallback)(()=>{Q(s),L(!1),j==null||j(s)},[s]),T=(0,t.useCallback)(k=>{y==null||y(k),v!=="init"&&L(h?k!==h:k.length>0)},[h,v]),ee=(0,t.useCallback)(()=>{R==null||R()},[]),ie=(0,t.useCallback)(()=>{r("cancelEdit, revert to last value",h),y==null||y(h||""),L(!1)},[h]);(0,U.Z)("mod+enter",()=>{B&&(S==null||S())},{target:g}),(0,U.Z)("enter",k=>{k.preventDefault(),se()},{target:g});const de=(0,n.jsxs)(n.Fragment,{children:[(!B||O)&&(0,n.jsx)("div",{className:"jetpack-components-ai-control__controls-prompt_button_wrapper",children:D?(0,n.jsx)(i.ZP,{className:"jetpack-components-ai-control__controls-prompt_button",onClick:$,variant:"secondary",label:c("Stop request","jetpack-ai-client"),children:C?c("Stop","jetpack-ai-client"):(0,n.jsx)(o.Z,{icon:P.Z})}):(0,n.jsxs)(n.Fragment,{children:[O&&(0,n.jsx)(i.ZP,{className:"jetpack-components-ai-control__controls-prompt_button",onClick:ie,variant:"secondary",label:c("Cancel","jetpack-ai-client"),children:C?c("Cancel","jetpack-ai-client"):(0,n.jsx)(o.Z,{icon:P.Z})}),F&&!O&&!(s!=null&&s.length)&&R&&(0,n.jsx)(i.ZP,{className:"jetpack-components-ai-control__controls-prompt_button",onClick:ee,variant:"secondary",label:c("Cancel","jetpack-ai-client"),children:C?c("Cancel","jetpack-ai-client"):(0,n.jsx)(o.Z,{icon:P.Z})}),(s==null?void 0:s.length)>0&&(0,n.jsx)(i.ZP,{className:"jetpack-components-ai-control__controls-prompt_button",onClick:se,variant:"primary",disabled:!(s!=null&&s.length)||_,label:c("Send request","jetpack-ai-client"),children:C?c("Generate","jetpack-ai-client"):(0,n.jsx)(o.Z,{icon:I.Z})})]})}),B&&!O&&(0,n.jsxs)("div",{className:"jetpack-components-ai-control__controls-prompt_button_wrapper",children:[((s==null?void 0:s.length)>0||h===null)&&(0,n.jsxs)(z.Z,{children:[(0,n.jsx)(i.ZP,{className:"jetpack-components-ai-control__controls-prompt_button",label:c("Discard","jetpack-ai-client"),onClick:ee,tooltipPosition:"top",children:(0,n.jsx)(o.Z,{icon:oe.Z})}),(0,n.jsx)(i.ZP,{className:"jetpack-components-ai-control__controls-prompt_button",label:c("Regenerate","jetpack-ai-client"),onClick:()=>j==null?void 0:j(s),tooltipPosition:"top",disabled:!(s!=null&&s.length)||s===null||_,children:(0,n.jsx)(o.Z,{icon:le.Z})})]}),(0,n.jsx)(i.ZP,{className:"jetpack-components-ai-control__controls-prompt_button",onClick:S,variant:"primary",label:N,children:C?N:(0,n.jsx)(o.Z,{icon:re.Z})})]})]}),ue=A&&!D&&!O&&(q||(0,n.jsx)(W.Eo,{}));return(0,n.jsx)(x,{disabled:_||D,value:s,placeholder:a,isTransparent:b,state:v,onChange:T,banner:H,error:X,actions:de,message:ue,promptUserInputRef:g})}const _e=(0,t.forwardRef)(M);try{M.displayName="BlockAIControl",M.__docgenInfo={description:"BlockAIControl component. Used by the AI Assistant block, adding logic and components to the base AIControl component.",displayName:"BlockAIControl",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/ai-control/block-ai-control.tsx#BlockAIControl"]={docgenInfo:M.__docgenInfo,name:"BlockAIControl",path:"../ai-client/src/components/ai-control/block-ai-control.tsx#BlockAIControl"})}catch(_){}var je=e("../../../node_modules/.pnpm/@wordpress+icons@10.5.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/undo.js");const Z=G.__;function te({className:_,disabled:s=!1,value:a="",placeholder:B="",showButtonLabels:N=!0,isTransparent:C=!1,state:b="init",showGuideLine:v=!1,error:A,requestsRemaining:q,showUpgradeMessage:y=!1,upgradeUrl:j,wrapperRef:$,onChange:S,onSend:R,onStop:F,onClose:H,onUndo:X,onUpgrade:Y,onTryAgain:D},O){const L=b==="requesting"||b==="suggesting",[h,Q]=(0,t.useState)(!1),[g,se]=(0,t.useState)(a||null),T=(0,t.useRef)(null);(0,t.useImperativeHandle)(O,()=>T.current),(0,t.useEffect)(()=>{var w;h&&((w=T==null?void 0:T.current)==null||w.focus())},[h]);const ee=(0,t.useCallback)(()=>{se(a),Q(!1),R==null||R(a)},[R,a]),ie=(0,t.useCallback)(w=>{S==null||S(w),b!=="init"&&Q(g?w!==g:w.length>0)},[S,g,b]),de=(0,t.useCallback)(()=>{F==null||F()},[F]),ue=(0,t.useCallback)(()=>{H==null||H()},[H]),k=(0,t.useCallback)(()=>{X==null||X()},[X]),me=(0,t.useCallback)(w=>{Y==null||Y(w)},[Y]),fe=(0,t.useCallback)(()=>{D==null||D()},[D]);(0,U.Z)("enter",w=>{w.preventDefault(),ee()},{target:T});const xe=(0,n.jsx)(n.Fragment,{children:L?(0,n.jsx)(i.ZP,{className:"jetpack-components-ai-control__controls-prompt_button",onClick:de,variant:"secondary",label:Z("Stop request","jetpack-ai-client"),children:N?Z("Stop","jetpack-ai-client"):(0,n.jsx)(o.Z,{icon:P.Z})}):(0,n.jsxs)(n.Fragment,{children:[(a==null?void 0:a.length)>0&&(0,n.jsx)("div",{className:"jetpack-components-ai-control__controls-prompt_button_wrapper",children:(0,n.jsx)(i.ZP,{className:"jetpack-components-ai-control__controls-prompt_button",onClick:ee,variant:"primary",disabled:!(a!=null&&a.length)||s,label:Z("Send request","jetpack-ai-client"),children:N?Z("Generate","jetpack-ai-client"):(0,n.jsx)(o.Z,{icon:I.Z})})}),(a==null?void 0:a.length)<=0&&b==="done"&&(0,n.jsx)("div",{className:"jetpack-components-ai-control__controls-prompt_button_wrapper",children:(0,n.jsxs)(z.Z,{children:[(0,n.jsx)(i.ZP,{className:"jetpack-components-ai-control__controls-prompt_button",label:Z("Undo","jetpack-ai-client"),onClick:k,tooltipPosition:"top",children:(0,n.jsx)(o.Z,{icon:je.Z})}),(0,n.jsx)(i.ZP,{className:"jetpack-components-ai-control__controls-prompt_button",label:Z("Close","jetpack-ai-client"),onClick:ue,variant:"tertiary",children:Z("Close","jetpack-ai-client")})]})})]})});let ae=null;return A!=null&&A.message?ae=(0,n.jsx)(W.Bc,{error:A.message,code:A.code,onTryAgainClick:fe,onUpgradeClick:me,upgradeUrl:j}):y?ae=(0,n.jsx)(W.xi,{requestsRemaining:q,onUpgradeClick:me,upgradeUrl:j}):v&&(ae=(0,n.jsx)(W.Eo,{})),(0,n.jsx)(x,{className:_,disabled:s||L,value:a,placeholder:B,isTransparent:C,state:b,onChange:ie,actions:xe,message:ae,promptUserInputRef:T,wrapperRef:$})}const ge=(0,t.forwardRef)(te);try{te.displayName="ExtensionAIControl",te.__docgenInfo={description:"ExtensionAIControl component. Used by the AI Assistant inline extensions, adding logic and components to the base AIControl component.",displayName:"ExtensionAIControl",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/ai-control/extension-ai-control.tsx#ExtensionAIControl"]={docgenInfo:te.__docgenInfo,name:"ExtensionAIControl",path:"../ai-client/src/components/ai-control/extension-ai-control.tsx#ExtensionAIControl"})}catch(_){}try{aicontrol.displayName="aicontrol",aicontrol.__docgenInfo={description:"Base AIControl component. Contains the main structure of the control component and slots for banner, error, actions and message.",displayName:"aicontrol",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}},isTransparent:{defaultValue:{value:"false"},description:"",name:"isTransparent",required:!1,type:{name:"boolean"}},state:{defaultValue:{value:"init"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"init"'},{value:'"requesting"'},{value:'"suggesting"'},{value:'"done"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(newValue: string) => void"}},banner:{defaultValue:{value:"null"},description:"",name:"banner",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},error:{defaultValue:{value:"null"},description:"",name:"error",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},actions:{defaultValue:{value:"null"},description:"",name:"actions",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},message:{defaultValue:{value:"null"},description:"",name:"message",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},promptUserInputRef:{defaultValue:{value:"null"},description:"",name:"promptUserInputRef",required:!1,type:{name:"React.MutableRefObject<HTMLInputElement>"}},wrapperRef:{defaultValue:{value:"null"},description:"",name:"wrapperRef",required:!1,type:{name:"React.MutableRefObject<HTMLDivElement>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/ai-control/index.tsx#aicontrol"]={docgenInfo:aicontrol.__docgenInfo,name:"aicontrol",path:"../ai-client/src/components/ai-control/index.tsx#aicontrol"})}catch(_){}},"../ai-client/src/components/ai-status-indicator/index.tsx":(V,f,e)=>{"use strict";e.d(f,{Z:()=>ne});var l=e("../../../node_modules/.pnpm/@wordpress+components@28.5.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),u=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),t=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),E=e.n(t),m=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../ai-client/src/components/ai-status-indicator/style.scss"),p={};p.insert="head",p.singleton=!1;var K=E()(m.Z,p);const d=m.Z.locals||{};var J=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function ne({state:n}){return(0,J.jsx)("div",{className:(0,u.Z)("jetpack-ai-status-indicator__icon-wrapper",{[`is-${n}`]:!0}),children:(0,J.jsx)(l.ZP,{})})}try{aistatusindicator.displayName="aistatusindicator",aistatusindicator.__docgenInfo={description:"AiStatusIndicator component.",displayName:"aistatusindicator",props:{state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"init"'},{value:'"requesting"'},{value:'"suggesting"'},{value:'"done"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"24"},{value:"32"},{value:"48"},{value:"64"}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/ai-status-indicator/index.tsx#aistatusindicator"]={docgenInfo:aistatusindicator.__docgenInfo,name:"aistatusindicator",path:"../ai-client/src/components/ai-status-indicator/index.tsx#aistatusindicator"})}catch(n){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../ai-client/src/components/ai-control/style.scss":(V,f,e)=>{"use strict";e.d(f,{Z:()=>p});var l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(l),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),E=e.n(t),m=E()(u());m.push([V.id,':root{--font-title-large: 36px;--font-title-small: 24px;--font-body: 16px;--font-label: 12px;--jp-black: #000000;--jp-black-80: #2c3338;--jp-white: #ffffff;--jp-white-off: #f9f9f6;--jp-gray: #dcdcde;--jp-gray-0: #F6F7F7;--jp-gray-5: #dcdcde;--jp-gray-10: #c3c4c7;--jp-gray-20: #A7AAAD;--jp-gray-30: #8c8f94;--jp-gray-40: #787C82;--jp-gray-50: #646970;--jp-gray-60: #50575E;--jp-gray-70: #3c434a;--jp-gray-80: #2C3338;--jp-gray-90: #1d2327;--jp-gray-100: #101517;--jp-gray-off: #e2e2df;--jp-yellow-5: #f5e6b3;--jp-yellow-10: #f2cf75;--jp-yellow-40: #c08c00;--jp-orange-20: #faa754;--jp-blue-5: #ced9f2;--jp-red-0: #F7EBEC;--jp-red-50: #D63638;--jp-red-60: #B32D2E;--jp-red-80: #8A2424;--jp-red: #d63639;--jp-pink: #C9356E;--jp-green-0: #f0f2eb;--jp-green-5: #d0e6b8;--jp-green-10: #9dd977;--jp-green-20: #64ca43;--jp-green-30: #2fb41f;--jp-green-40: #069e08;--jp-green-50: #008710;--jp-green-60: #007117;--jp-green-70: #005b18;--jp-green-80: #004515;--jp-green-90: #003010;--jp-green-100: #001c09;--jp-green: #069e08;--jp-green-primary: var(--jp-green-40);--jp-green-secondary: var(--jp-green-30);--jp-border-radius: 4px;--jp-border-radius-rna: 8px;--jp-menu-border-height: 1px;--jp-underline-thickness: 2px;--jp-modal-padding-large: 32px;--jp-modal-padding: 24px;--jp-modal-padding-small: 16px;--jp-modal-radius: 8px;--jp-button-padding: 8px;--jp-button-radius: 4px;--jp-gap: 16px;--jp-highlight: #3858e9}.jetpack-components-ai-control__container-wrapper{position:sticky;bottom:16px}.jetpack-components-ai-control__container{color:var(--jp-gray-80);background-color:var(--jp-white);box-shadow:0px 12px 15px 0px rgba(0,0,0,.12),0px 3px 9px 0px rgba(0,0,0,.12),0px 1px 3px 0px rgba(0,0,0,.15);font-family:"SF Pro Text",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;border-radius:6px;border:1px solid var(--gutenberg-gray-400, #CCC)}.jetpack-components-ai-control__wrapper{display:flex;padding:8px 8px 8px var(--grid-unit-15, 12px);align-items:flex-end;box-sizing:border-box;border-radius:6px 6px 0 0;gap:6px}.jetpack-components-ai-control__wrapper.is-transparent{opacity:.4}.jetpack-components-ai-control__input-wrapper{display:flex;flex-grow:1;align-self:center;min-height:36px;align-items:center}.jetpack-components-ai-control__input-wrapper textarea.jetpack-components-ai-control__input{background-color:var(--jp-white);width:100%;min-height:20px;border-radius:2px;padding:6px 8px;resize:none !important;border:none;box-shadow:none;color:var(--jp-gray-80);font-size:16px;font-weight:400;line-height:20px;transition:box-shadow .1s linear 0s}.jetpack-components-ai-control__input-wrapper textarea.jetpack-components-ai-control__input:focus{box-shadow:none;color:var(--jp-gray-80)}@media(min-width: 600px){.jetpack-components-ai-control__input-wrapper textarea.jetpack-components-ai-control__input{font-size:13px}}.jetpack-components-ai-control__input-wrapper textarea.jetpack-components-ai-control__input::-moz-placeholder{text-overflow:ellipsis;white-space:nowrap;opacity:.75}.jetpack-components-ai-control__input-wrapper textarea.jetpack-components-ai-control__input::placeholder{text-overflow:ellipsis;white-space:nowrap;opacity:.75}.jetpack-components-ai-control__controls-prompt_button_wrapper{display:flex;align-items:center;gap:8px}.jetpack-components-ai-control__controls-prompt_button_wrapper .components-button.is-small:not(.has-label){padding:0}.jetpack-components-ai-control__controls-prompt_button_wrapper .components-button-group .components-button{box-shadow:none;padding:6px 8px}.jetpack-components-ai-control__controls-prompt_button_wrapper .components-button-group{display:flex}.jetpack-components-ai-control__controls-prompt_button:disabled{opacity:.6;cursor:not-allowed}',""]);const p=m},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../ai-client/src/components/ai-status-indicator/style.scss":(V,f,e)=>{"use strict";e.d(f,{Z:()=>p});var l=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(l),t=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),E=e.n(t),m=E()(u());m.push([V.id,':root{--font-title-large: 36px;--font-title-small: 24px;--font-body: 16px;--font-label: 12px;--jp-black: #000000;--jp-black-80: #2c3338;--jp-white: #ffffff;--jp-white-off: #f9f9f6;--jp-gray: #dcdcde;--jp-gray-0: #F6F7F7;--jp-gray-5: #dcdcde;--jp-gray-10: #c3c4c7;--jp-gray-20: #A7AAAD;--jp-gray-30: #8c8f94;--jp-gray-40: #787C82;--jp-gray-50: #646970;--jp-gray-60: #50575E;--jp-gray-70: #3c434a;--jp-gray-80: #2C3338;--jp-gray-90: #1d2327;--jp-gray-100: #101517;--jp-gray-off: #e2e2df;--jp-yellow-5: #f5e6b3;--jp-yellow-10: #f2cf75;--jp-yellow-40: #c08c00;--jp-orange-20: #faa754;--jp-blue-5: #ced9f2;--jp-red-0: #F7EBEC;--jp-red-50: #D63638;--jp-red-60: #B32D2E;--jp-red-80: #8A2424;--jp-red: #d63639;--jp-pink: #C9356E;--jp-green-0: #f0f2eb;--jp-green-5: #d0e6b8;--jp-green-10: #9dd977;--jp-green-20: #64ca43;--jp-green-30: #2fb41f;--jp-green-40: #069e08;--jp-green-50: #008710;--jp-green-60: #007117;--jp-green-70: #005b18;--jp-green-80: #004515;--jp-green-90: #003010;--jp-green-100: #001c09;--jp-green: #069e08;--jp-green-primary: var(--jp-green-40);--jp-green-secondary: var(--jp-green-30);--jp-border-radius: 4px;--jp-border-radius-rna: 8px;--jp-menu-border-height: 1px;--jp-underline-thickness: 2px;--jp-modal-padding-large: 32px;--jp-modal-padding: 24px;--jp-modal-padding-small: 16px;--jp-modal-radius: 8px;--jp-button-padding: 8px;--jp-button-radius: 4px;--jp-gap: 16px;--jp-highlight: #3858e9}:where(body){min-height:100%;margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif}.jp-wrap{display:flex;align-items:center;flex-wrap:wrap;max-width:1128px;margin:0 auto}.jp-row{display:grid;grid-gap:24px;grid-template-columns:repeat(4, 1fr);width:100%;margin:0 16px}@media(min-width: 600px){.jp-row{grid-template-columns:repeat(8, 1fr);margin:0 18px}}@media(min-width: 960px){.jp-row{grid-template-columns:repeat(12, 1fr);max-width:1128px;margin:0 24px}}.sm-col-span-1{grid-column-end:span 1}.sm-col-span-2{grid-column-end:span 2}.sm-col-span-3{grid-column-end:span 3}.sm-col-span-4{grid-column-end:span 4}@media(min-width: 600px){.md-col-span-1{grid-column-end:span 1}.md-col-span-2{grid-column-end:span 2}.md-col-span-3{grid-column-end:span 3}.md-col-span-4{grid-column-end:span 4}.md-col-span-5{grid-column-end:span 5}.md-col-span-6{grid-column-end:span 6}.md-col-span-7{grid-column-end:span 7}.md-col-span-8{grid-column-end:span 8}}@media(min-width: 960px){.lg-col-span-1{grid-column-end:span 1}.lg-col-span-2{grid-column-end:span 2}.lg-col-span-3{grid-column-end:span 3}.lg-col-span-4{grid-column-end:span 4}.lg-col-span-5{grid-column-end:span 5}.lg-col-span-6{grid-column-end:span 6}.lg-col-span-7{grid-column-end:span 7}.lg-col-span-8{grid-column-end:span 8}.lg-col-span-9{grid-column-end:span 9}.lg-col-span-10{grid-column-end:span 10}.lg-col-span-11{grid-column-end:span 11}.lg-col-span-12{grid-column-end:span 12}}@media(max-width: 960px){.md-col-span-0{display:none}}@media(max-width: 600px){.sm-col-span-0{display:none}}.jp-cut{position:relative;display:block;margin:32px 0;padding:16px 64px 16px 24px;border:2px solid var(--jp-green-primary);border-radius:var(--jp-border-radius);text-decoration:none}.jp-cut span{display:block}.jp-cut span:last-of-type{font-weight:600}.jp-cut:hover span:last-of-type,.jp-cut:focus span:last-of-type{text-decoration:underline;text-decoration-thickness:var(--jp-underline-thickness)}.jp-cut:hover:after,.jp-cut:focus:after{transform:translateY(-50%) translateX(8px)}.jp-cut:after{content:"\u2192";position:absolute;top:50%;right:24px;font-size:24px;font-weight:600;color:var(--jp-green-primary);transform:translateY(-50%);transition:transform .15s ease-out}.jetpack-ai-status-indicator__icon-wrapper{transition:opacity .25s ease-in-out,width .25s;width:0;opacity:0;align-self:baseline}.jetpack-ai-status-indicator__icon-wrapper>svg{height:24px;width:24px;margin:6px 0 0}.jetpack-ai-status-indicator__icon-wrapper.is-requesting,.jetpack-ai-status-indicator__icon-wrapper.is-suggesting{opacity:1;width:24px}',""]);const p=m},"?7264":()=>{},"?ff19":()=>{},"?f7da":()=>{},"?2f5a":()=>{},"?cd8c":()=>{}}]);})();
