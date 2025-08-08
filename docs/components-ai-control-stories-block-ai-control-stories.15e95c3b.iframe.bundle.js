"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3665],{"../ai-client/src/components/ai-control/stories/block-ai-control.stories.tsx":(P,c,e)=>{e.r(c),e.d(c,{Default:()=>s,__namedExportsOrder:()=>h,default:()=>A});var g=e("../../../node_modules/.pnpm/@wordpress+components@30.0.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/notice/index.js"),n=e("storybook/actions"),S=e.n(n),l=e("storybook/preview-api"),O=e.n(l),r=e("../ai-client/src/components/message/index.tsx"),d=e("../ai-client/src/components/ai-control/index.tsx"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const A={title:"JS Packages/AI Client/AI Control/Block AI Control",component:d.N0,decorators:[o=>(0,t.jsx)("div",{style:{backgroundColor:"white"},children:(0,t.jsx)(o,{})})],argTypes:{state:{control:{type:"select"},options:["init","requesting","suggesting","done","error"]},error:{control:{type:"select"},options:["None","Error notice"],mapping:{None:null,"Error notice":(0,t.jsx)(g.A,{status:"error",isDismissible:!0,children:"Error message"})}},customFooter:{control:{type:"select"},options:["None","Guideline message","Error message","Upgrade message"],mapping:{None:null,"Guideline message":(0,t.jsx)(r.Yj,{}),"Error message":(0,t.jsx)(r.Kw,{onTryAgainClick:(0,n.action)("onTryAgainClick"),onUpgradeClick:(0,n.action)("onUpgradeClick")}),"Upgrade message":(0,t.jsx)(r.AK,{requestsRemaining:10,onUpgradeClick:(0,n.action)("onUpgradeClick")})}}},parameters:{controls:{exclude:/on[A-Z].*/}}},_=o=>{const[{value:i},a,p]=(0,l.useArgs)(),E=u=>{a({value:u,showAccept:!1}),o?.onChange?.(u)},D=()=>{a({state:"requesting",error:null,showAccept:!1}),setTimeout(()=>{a({state:"suggesting"}),setTimeout(()=>{a({state:"done",showAccept:!0})},3e3)},1e3),o?.onSend?.(i)},C=()=>{a({state:"done",error:null,showAccept:!0}),o?.onStop?.()},v=()=>{p(),o?.onAccept?.()},x=()=>{p(),o?.onDiscard?.()};return(0,t.jsx)(d.N0,{...o,onChange:E,onSend:D,onStop:C,onAccept:v,onDiscard:x,value:o?.value??i})},m={value:"",placeholder:"Placeholder",acceptLabel:"Accept",showButtonLabels:!0,disabled:!1,isTransparent:!1,state:"init",showAccept:!1,showGuideLine:!0,customFooter:null,onChange:(0,n.action)("onChange"),onSend:(0,n.action)("onSend"),onStop:(0,n.action)("onStop"),onAccept:(0,n.action)("onAccept"),onDiscard:(0,n.action)("onDiscard"),showRemove:!1,banner:null,error:null},s=_.bind({});s.args=m;const h=["Default"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
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
}`,...s.parameters?.docs?.source}}}}}]);
