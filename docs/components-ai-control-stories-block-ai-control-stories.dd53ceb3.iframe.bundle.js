"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3665],{"../ai-client/src/components/ai-control/stories/block-ai-control.stories.tsx":(S,l,e)=>{e.r(l),e.d(l,{Default:()=>a,__namedExportsOrder:()=>f,default:()=>g});var m=e("../../../node_modules/.pnpm/@wordpress+components@30.3.0_@types+react@18.3.23_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/notice/index.js"),o=e("storybook/actions"),b=e.n(o),c=e("storybook/preview-api"),D=e.n(c),r=e("../ai-client/src/components/message/index.tsx"),i=e("../ai-client/src/components/ai-control/index.tsx"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const g={title:"JS Packages/AI Client/AI Control/Block AI Control",component:i.N0,decorators:[n=>(0,t.jsx)("div",{style:{backgroundColor:"white"},children:(0,t.jsx)(n,{})})],argTypes:{state:{control:{type:"select"},options:["init","requesting","suggesting","done","error"]},error:{control:{type:"select"},options:["None","Error notice"],mapping:{None:null,"Error notice":(0,t.jsx)(m.A,{status:"error",isDismissible:!0,children:"Error message"})}},customFooter:{control:{type:"select"},options:["None","Guideline message","Error message","Upgrade message"],mapping:{None:null,"Guideline message":(0,t.jsx)(r.Yj,{}),"Error message":(0,t.jsx)(r.Kw,{onTryAgainClick:(0,o.action)("onTryAgainClick"),onUpgradeClick:(0,o.action)("onUpgradeClick")}),"Upgrade message":(0,t.jsx)(r.AK,{requestsRemaining:10,onUpgradeClick:(0,o.action)("onUpgradeClick")})}}},parameters:{controls:{exclude:/on[A-Z].*/}}},_=n=>{const[{value:d},s,u]=(0,c.useArgs)(),h=p=>{s({value:p,showAccept:!1}),n?.onChange?.(p)},y=()=>{s({state:"requesting",error:null,showAccept:!1}),setTimeout(()=>{s({state:"suggesting"}),setTimeout(()=>{s({state:"done",showAccept:!0})},3e3)},1e3),n?.onSend?.(d)},E=()=>{s({state:"done",error:null,showAccept:!0}),n?.onStop?.()},C=()=>{u(),n?.onAccept?.()},v=()=>{u(),n?.onDiscard?.()};return(0,t.jsx)(i.N0,{...n,onChange:h,onSend:y,onStop:E,onAccept:C,onDiscard:v,value:n?.value??d})},A={value:"",placeholder:"Placeholder",acceptLabel:"Accept",showButtonLabels:!0,disabled:!1,isTransparent:!1,state:"init",showAccept:!1,showGuideLine:!0,customFooter:null,onChange:(0,o.action)("onChange"),onSend:(0,o.action)("onSend"),onStop:(0,o.action)("onStop"),onAccept:(0,o.action)("onAccept"),onDiscard:(0,o.action)("onDiscard"),showRemove:!1,banner:null,error:null},a=_.bind({});a.args=A;const f=["Default"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
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
}`,...a.parameters?.docs?.source}}};try{blockaicontrol.displayName="blockaicontrol",blockaicontrol.__docgenInfo={description:"",displayName:"blockaicontrol",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},showAccept:{defaultValue:null,description:"",name:"showAccept",required:!1,type:{name:"boolean"}},acceptLabel:{defaultValue:null,description:"",name:"acceptLabel",required:!1,type:{name:"string"}},showButtonLabels:{defaultValue:null,description:"",name:"showButtonLabels",required:!1,type:{name:"boolean"}},isTransparent:{defaultValue:null,description:"",name:"isTransparent",required:!1,type:{name:"boolean"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"init"'},{value:'"requesting"'},{value:'"suggesting"'},{value:'"done"'}]}},showGuideLine:{defaultValue:null,description:"",name:"showGuideLine",required:!1,type:{name:"boolean"}},customFooter:{defaultValue:null,description:"",name:"customFooter",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(newValue: string) => void"}},onSend:{defaultValue:null,description:"",name:"onSend",required:!1,type:{name:"(currentValue: string) => void"}},onStop:{defaultValue:null,description:"",name:"onStop",required:!1,type:{name:"() => void"}},onAccept:{defaultValue:null,description:"",name:"onAccept",required:!1,type:{name:"() => void"}},onDiscard:{defaultValue:null,description:"",name:"onDiscard",required:!1,type:{name:"() => void"}},showRemove:{defaultValue:null,description:"",name:"showRemove",required:!1,type:{name:"boolean"}},banner:{defaultValue:null,description:"",name:"banner",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},lastAction:{defaultValue:null,description:"",name:"lastAction",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../ai-client/src/components/ai-control/stories/block-ai-control.stories.tsx#blockaicontrol"]={docgenInfo:blockaicontrol.__docgenInfo,name:"blockaicontrol",path:"../ai-client/src/components/ai-control/stories/block-ai-control.stories.tsx#blockaicontrol"})}catch{}}}]);
