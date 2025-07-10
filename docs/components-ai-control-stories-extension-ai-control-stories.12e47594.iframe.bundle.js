"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9433],{"../ai-client/src/components/ai-control/stories/extension-ai-control.stories.tsx":(S,d,e)=>{e.r(d),e.d(d,{Default:()=>t,__namedExportsOrder:()=>_,default:()=>i});var o=e("storybook/actions"),D=e.n(o),u=e("storybook/preview-api"),x=e.n(u),c=e("../ai-client/src/components/ai-control/index.tsx"),r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const i={title:"JS Packages/AI Client/AI Control/Extension AI Control",component:c.FC,decorators:[n=>(0,r.jsx)("div",{style:{backgroundColor:"white"},children:(0,r.jsx)(n,{})})],argTypes:{state:{control:{type:"select"},options:["init","requesting","suggesting","done","error"]},error:{control:{type:"text"}},requestsRemaining:{control:{type:"number"}}},parameters:{controls:{exclude:/on[A-Z].*/}}},p=n=>{const[{value:l},s,a]=(0,u.useArgs)(),C=g=>{s({value:g}),n?.onChange?.(g)},A=()=>{s({state:"requesting",error:null,value:"",placeholder:l}),setTimeout(()=>{s({state:"suggesting"}),setTimeout(()=>{s({state:"done"})},3e3)},1e3),n?.onSend?.(l)},U=()=>{s({state:"done",error:null}),n?.onStop?.()},m=()=>{a(),n?.onClose?.(),a()},E=()=>{a(),n?.onUndo?.(),a()},v=()=>{n?.onUpgrade?.()};return(0,r.jsx)(c.FC,{...n,onChange:C,onSend:A,onStop:U,onClose:m,onUndo:E,onUpgrade:v,value:n?.value??l})},h={value:"",placeholder:"Placeholder",showButtonLabels:!0,disabled:!1,isTransparent:!1,state:"init",showGuideLine:!1,error:null,requestsRemaining:null,showUpgradeMessage:!1,showFairUsageMessage:!1,onChange:(0,o.action)("onChange"),onSend:(0,o.action)("onSend"),onStop:(0,o.action)("onStop"),onClose:(0,o.action)("onClose"),onUndo:(0,o.action)("onUndo"),onUpgrade:(0,o.action)("onUpgrade")},t=p.bind({});t.args=h;const _=["Default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs, resetArgs] = useArgs();
  const handleChange = (newValue: string) => {
    updateArgs({
      value: newValue
    });
    args?.onChange?.(newValue);
  };
  const handleSend = () => {
    updateArgs({
      state: 'requesting',
      error: null,
      value: '',
      placeholder: value
    });
    setTimeout(() => {
      updateArgs({
        state: 'suggesting'
      });
      setTimeout(() => {
        updateArgs({
          state: 'done'
        });
      }, 3000);
    }, 1000);
    args?.onSend?.(value);
  };
  const handleStop = () => {
    updateArgs({
      state: 'done',
      error: null
    });
    args?.onStop?.();
  };
  const handleClose = () => {
    resetArgs();
    args?.onClose?.();
    resetArgs();
  };
  const handleUndo = () => {
    resetArgs();
    args?.onUndo?.();
    resetArgs();
  };
  const handleUpgrade = () => {
    args?.onUpgrade?.();
  };
  return <ExtensionAIControl {...args} onChange={handleChange} onSend={handleSend} onStop={handleStop} onClose={handleClose} onUndo={handleUndo} onUpgrade={handleUpgrade} value={args?.value ?? value} />;
}`,...t.parameters?.docs?.source}}}}}]);
