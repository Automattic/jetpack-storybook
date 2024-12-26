"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9433],{"../ai-client/src/components/ai-control/stories/extension-ai-control.stories.tsx":(T,u,o)=>{var p,_,h;o.r(u),o.d(u,{Default:()=>s,__namedExportsOrder:()=>v,default:()=>A});var t=o("../../../node_modules/.pnpm/@storybook+addon-actions@8.3.5_storybook@8.3.5/node_modules/@storybook/addon-actions/dist/index.mjs"),c=o("storybook/internal/preview-api"),f=o.n(c),y=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),i=o("../ai-client/src/components/ai-control/index.tsx"),a=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const A={title:"JS Packages/AI Client/AI Control/Extension AI Control",component:i.FC,decorators:[n=>(0,a.jsx)("div",{style:{backgroundColor:"white"},children:(0,a.jsx)(n,{})})],argTypes:{state:{control:{type:"select"},options:["init","requesting","suggesting","done","error"]},error:{control:{type:"text"}},requestsRemaining:{control:{type:"number"}}},parameters:{controls:{exclude:/on[A-Z].*/}}},U=n=>{var C;const[{value:r},l,d]=(0,c.useArgs)(),S=e=>{var m;l({value:e}),(m=n==null?void 0:n.onChange)==null||m.call(n,e)},D=()=>{var e;l({state:"requesting",error:null,value:"",placeholder:r}),setTimeout(()=>{l({state:"suggesting"}),setTimeout(()=>{l({state:"done"})},3e3)},1e3),(e=n==null?void 0:n.onSend)==null||e.call(n,r)},x=()=>{var e;l({state:"done",error:null}),(e=n==null?void 0:n.onStop)==null||e.call(n)},I=()=>{var e;d(),(e=n==null?void 0:n.onClose)==null||e.call(n),d()},P=()=>{var e;d(),(e=n==null?void 0:n.onUndo)==null||e.call(n),d()},O=()=>{var e;(e=n==null?void 0:n.onUpgrade)==null||e.call(n)};return(0,a.jsx)(i.FC,{...n,onChange:S,onSend:D,onStop:x,onClose:I,onUndo:P,onUpgrade:O,value:(C=n==null?void 0:n.value)!=null?C:r})},E={value:"",placeholder:"Placeholder",showButtonLabels:!0,disabled:!1,isTransparent:!1,state:"init",showGuideLine:!1,error:null,requestsRemaining:null,showUpgradeMessage:!1,showFairUsageMessage:!1,onChange:(0,t.XI)("onChange"),onSend:(0,t.XI)("onSend"),onStop:(0,t.XI)("onStop"),onClose:(0,t.XI)("onClose"),onUndo:(0,t.XI)("onUndo"),onUpgrade:(0,t.XI)("onUpgrade")},s=U.bind({});s.args=E;const v=["Default"];s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
}`,...(h=(_=s.parameters)==null?void 0:_.docs)==null?void 0:h.source}}}}}]);})();
