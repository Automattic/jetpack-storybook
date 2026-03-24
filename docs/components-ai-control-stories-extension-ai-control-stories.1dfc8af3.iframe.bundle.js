"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[9433],{"../ai-client/src/components/ai-control/stories/extension-ai-control.stories.tsx"(U,i,n){n.r(i),n.d(i,{Default:()=>o,__namedExportsOrder:()=>f,default:()=>c});var a=n("storybook/actions"),E=n.n(a),d=n("storybook/preview-api"),S=n.n(d),u=n("../ai-client/src/components/ai-control/index.tsx"),l=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const c={title:"JS Packages/AI Client/AI Control/Extension AI Control",component:u.FC,decorators:[e=>(0,l.jsx)("div",{style:{backgroundColor:"white"},children:(0,l.jsx)(e,{})})],argTypes:{state:{control:{type:"select"},options:["init","requesting","suggesting","done","error"]},error:{control:{type:"text"}},requestsRemaining:{control:{type:"number"}}},parameters:{controls:{exclude:/on[A-Z].*/}}},g=e=>{const[{value:r},t,s]=(0,d.useArgs)(),h=p=>{t({value:p}),e?.onChange?.(p)},_=()=>{t({state:"requesting",error:null,value:"",placeholder:r}),setTimeout(()=>{t({state:"suggesting"}),setTimeout(()=>{t({state:"done"})},3e3)},1e3),e?.onSend?.(r)},y=()=>{t({state:"done",error:null}),e?.onStop?.()},v=()=>{s(),e?.onClose?.(),s()},C=()=>{s(),e?.onUndo?.(),s()},A=()=>{e?.onUpgrade?.()};return(0,l.jsx)(u.FC,{...e,onChange:h,onSend:_,onStop:y,onClose:v,onUndo:C,onUpgrade:A,value:e?.value??r})},m={value:"",placeholder:"Placeholder",showButtonLabels:!0,disabled:!1,isTransparent:!1,state:"init",showGuideLine:!1,error:null,requestsRemaining:null,showUpgradeMessage:!1,showFairUsageMessage:!1,onChange:(0,a.action)("onChange"),onSend:(0,a.action)("onSend"),onStop:(0,a.action)("onStop"),onClose:(0,a.action)("onClose"),onUndo:(0,a.action)("onUndo"),onUpgrade:(0,a.action)("onUpgrade")},o=g.bind({});o.args=m;const f=["Default"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
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
}`,...o.parameters?.docs?.source}}};try{extensionaicontrol.displayName="extensionaicontrol",extensionaicontrol.__docgenInfo={description:"",displayName:"extensionaicontrol",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},showButtonLabels:{defaultValue:null,description:"",name:"showButtonLabels",required:!1,type:{name:"boolean"}},isTransparent:{defaultValue:null,description:"",name:"isTransparent",required:!1,type:{name:"boolean"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"init"'},{value:'"requesting"'},{value:'"suggesting"'},{value:'"done"'}]}},showGuideLine:{defaultValue:null,description:"",name:"showGuideLine",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"RequestingErrorProps"}},requestsRemaining:{defaultValue:null,description:"",name:"requestsRemaining",required:!1,type:{name:"number"}},showUpgradeMessage:{defaultValue:null,description:"",name:"showUpgradeMessage",required:!1,type:{name:"boolean"}},showFairUsageMessage:{defaultValue:null,description:"",name:"showFairUsageMessage",required:!1,type:{name:"boolean"}},upgradeUrl:{defaultValue:null,description:"",name:"upgradeUrl",required:!1,type:{name:"string"}},wrapperRef:{defaultValue:null,description:"",name:"wrapperRef",required:!1,type:{name:"MutableRefObject<HTMLDivElement>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(newValue: string) => void"}},onSend:{defaultValue:null,description:"",name:"onSend",required:!1,type:{name:"(currentValue: string) => void"}},onStop:{defaultValue:null,description:"",name:"onStop",required:!1,type:{name:"() => void"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"() => void"}},onUndo:{defaultValue:null,description:"",name:"onUndo",required:!1,type:{name:"() => void"}},onUpgrade:{defaultValue:null,description:"",name:"onUpgrade",required:!1,type:{name:"(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"}},onTryAgain:{defaultValue:null,description:"",name:"onTryAgain",required:!1,type:{name:"() => void"}},lastAction:{defaultValue:null,description:"",name:"lastAction",required:!1,type:{name:"string"}},blockType:{defaultValue:null,description:"",name:"blockType",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/ai-control/stories/extension-ai-control.stories.tsx#extensionaicontrol"]={docgenInfo:extensionaicontrol.__docgenInfo,name:"extensionaicontrol",path:"../ai-client/src/components/ai-control/stories/extension-ai-control.stories.tsx#extensionaicontrol"})}catch{}}}]);
