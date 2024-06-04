"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3822],{"../ai-client/src/components/ai-control/stories/block-ai-control.stories.tsx":(f,r,o)=>{var p,u,_;o.r(r),o.d(r,{Default:()=>c,__namedExportsOrder:()=>P,default:()=>C});var t=o("../../../node_modules/.pnpm/@storybook+addon-actions@8.0.9/node_modules/@storybook/addon-actions/dist/index.mjs"),d=o("@storybook/preview-api"),j=o.n(d),E=o("../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/notice/index.js"),k=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=o("../ai-client/src/components/message/index.tsx"),i=o("../ai-client/src/components/ai-control/index.tsx"),s=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const C={title:"JS Packages/AI Client/AI Control/Block AI Control",component:i.MW,decorators:[e=>(0,s.jsx)("div",{style:{backgroundColor:"white"},children:(0,s.jsx)(e,{})})],argTypes:{state:{control:{type:"select"},options:["init","requesting","suggesting","done","error"]},error:{control:{type:"select"},options:["None","Error notice"],mapping:{None:null,"Error notice":(0,s.jsx)(E.Z,{status:"error",isDismissible:!0,children:"Error message"})}},customFooter:{control:{type:"select"},options:["None","Guideline message","Error message","Upgrade message"],mapping:{None:null,"Guideline message":(0,s.jsx)(l.Eo,{}),"Error message":(0,s.jsx)(l.Bc,{onTryAgainClick:(0,t.aD)("onTryAgainClick"),onUpgradeClick:(0,t.aD)("onUpgradeClick")}),"Upgrade message":(0,s.jsx)(l.xi,{requestsRemaining:10,onUpgradeClick:(0,t.aD)("onUpgradeClick")})}}},parameters:{controls:{exclude:/on[A-Z].*/}}},v=e=>{var h;const[{value:m},a,A]=(0,d.useArgs)(),S=n=>{var D;a({value:n,showAccept:!1}),(D=e==null?void 0:e.onChange)==null||D.call(e,n)},g=()=>{var n;a({state:"requesting",error:null,showAccept:!1}),setTimeout(()=>{a({state:"suggesting"}),setTimeout(()=>{a({state:"done",showAccept:!0})},3e3)},1e3),(n=e==null?void 0:e.onSend)==null||n.call(e,m)},O=()=>{var n;a({state:"done",error:null,showAccept:!0}),(n=e==null?void 0:e.onStop)==null||n.call(e)},T=()=>{var n;A(),(n=e==null?void 0:e.onAccept)==null||n.call(e)},M=()=>{var n;A(),(n=e==null?void 0:e.onDiscard)==null||n.call(e)};return(0,s.jsx)(i.MW,{...e,onChange:S,onSend:g,onStop:O,onAccept:T,onDiscard:M,value:(h=e==null?void 0:e.value)!=null?h:m})},x={value:"",placeholder:"Placeholder",acceptLabel:"Accept",showButtonLabels:!0,disabled:!1,isTransparent:!1,state:"init",showAccept:!1,showGuideLine:!0,customFooter:null,onChange:(0,t.aD)("onChange"),onSend:(0,t.aD)("onSend"),onStop:(0,t.aD)("onStop"),onAccept:(0,t.aD)("onAccept"),onDiscard:(0,t.aD)("onDiscard"),showRemove:!1,banner:null,error:null},c=v.bind({});c.args=x,c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
}`,...(_=(u=c.parameters)==null?void 0:u.docs)==null?void 0:_.source}}};const P=["Default"]}}]);})();
