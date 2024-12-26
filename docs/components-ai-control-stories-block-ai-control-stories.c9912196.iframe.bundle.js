"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3665],{"../ai-client/src/components/ai-control/stories/block-ai-control.stories.tsx":(j,l,o)=>{var p,u,_;o.r(l),o.d(l,{Default:()=>c,__namedExportsOrder:()=>I,default:()=>C});var t=o("../../../node_modules/.pnpm/@storybook+addon-actions@8.3.5_storybook@8.3.5/node_modules/@storybook/addon-actions/dist/index.mjs"),d=o("storybook/internal/preview-api"),f=o.n(d),D=o("../../../node_modules/.pnpm/@wordpress+components@29.0.0_@types+react@18.3.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/notice/index.js"),k=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=o("../ai-client/src/components/message/index.tsx"),i=o("../ai-client/src/components/ai-control/index.tsx"),s=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const C={title:"JS Packages/AI Client/AI Control/Block AI Control",component:i.N0,decorators:[e=>(0,s.jsx)("div",{style:{backgroundColor:"white"},children:(0,s.jsx)(e,{})})],argTypes:{state:{control:{type:"select"},options:["init","requesting","suggesting","done","error"]},error:{control:{type:"select"},options:["None","Error notice"],mapping:{None:null,"Error notice":(0,s.jsx)(D.A,{status:"error",isDismissible:!0,children:"Error message"})}},customFooter:{control:{type:"select"},options:["None","Guideline message","Error message","Upgrade message"],mapping:{None:null,"Guideline message":(0,s.jsx)(a.Yj,{}),"Error message":(0,s.jsx)(a.Kw,{onTryAgainClick:(0,t.XI)("onTryAgainClick"),onUpgradeClick:(0,t.XI)("onUpgradeClick")}),"Upgrade message":(0,s.jsx)(a.AK,{requestsRemaining:10,onUpgradeClick:(0,t.XI)("onUpgradeClick")})}}},parameters:{controls:{exclude:/on[A-Z].*/}}},v=e=>{var h;const[{value:m},r,A]=(0,d.useArgs)(),P=n=>{var E;r({value:n,showAccept:!1}),(E=e==null?void 0:e.onChange)==null||E.call(e,n)},S=()=>{var n;r({state:"requesting",error:null,showAccept:!1}),setTimeout(()=>{r({state:"suggesting"}),setTimeout(()=>{r({state:"done",showAccept:!0})},3e3)},1e3),(n=e==null?void 0:e.onSend)==null||n.call(e,m)},g=()=>{var n;r({state:"done",error:null,showAccept:!0}),(n=e==null?void 0:e.onStop)==null||n.call(e)},O=()=>{var n;A(),(n=e==null?void 0:e.onAccept)==null||n.call(e)},T=()=>{var n;A(),(n=e==null?void 0:e.onDiscard)==null||n.call(e)};return(0,s.jsx)(i.N0,{...e,onChange:P,onSend:S,onStop:g,onAccept:O,onDiscard:T,value:(h=e==null?void 0:e.value)!=null?h:m})},x={value:"",placeholder:"Placeholder",acceptLabel:"Accept",showButtonLabels:!0,disabled:!1,isTransparent:!1,state:"init",showAccept:!1,showGuideLine:!0,customFooter:null,onChange:(0,t.XI)("onChange"),onSend:(0,t.XI)("onSend"),onStop:(0,t.XI)("onStop"),onAccept:(0,t.XI)("onAccept"),onDiscard:(0,t.XI)("onDiscard"),showRemove:!1,banner:null,error:null},c=v.bind({});c.args=x;const I=["Default"];c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
}`,...(_=(u=c.parameters)==null?void 0:u.docs)==null?void 0:_.source}}}}}]);})();
