"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8733],{"../ai-client/src/components/ai-control/stories/ai-control.stories.tsx":(O,r,o)=>{var c,d,i;o.r(r),o.d(r,{Default:()=>s,__namedExportsOrder:()=>h,default:()=>C});var t=o("../../../node_modules/.pnpm/@storybook+addon-actions@8.0.9/node_modules/@storybook/addon-actions/dist/index.mjs"),_=o("../../../node_modules/.pnpm/@wordpress+components@27.5.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/button/index.js"),g=o("../../../node_modules/.pnpm/@wordpress+components@27.5.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/notice/index.js"),E=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),a=o("../ai-client/src/components/message/index.tsx"),l=o("../ai-client/src/components/ai-control/index.tsx"),n=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const C={title:"JS Packages/AI Client/AI Control",component:l.tK,decorators:[e=>(0,n.jsx)("div",{style:{backgroundColor:"white"},children:(0,n.jsx)(e,{})})],argTypes:{state:{control:{type:"select"},options:["init","requesting","suggesting","done","error"]},message:{control:{type:"select"},options:["None","Guideline message","Error message","Upgrade message"],mapping:{None:null,"Guideline message":(0,n.jsx)(a.Eo,{}),"Error message":(0,n.jsx)(a.Bc,{onTryAgainClick:(0,t.aD)("onTryAgainClick"),onUpgradeClick:(0,t.aD)("onUpgradeClick")}),"Upgrade message":(0,n.jsx)(a.xi,{requestsRemaining:10,onUpgradeClick:(0,t.aD)("onUpgradeClick")})}},actions:{control:{type:"select"},options:["None","Accept button"],mapping:{None:null,"Accept button":(0,n.jsx)(_.ZP,{children:"Accept"})}},error:{control:{type:"select"},options:["None","Error notice"],mapping:{None:null,"Error notice":(0,n.jsx)(g.Z,{status:"error",isDismissible:!0,children:"Error message"})}}},parameters:{controls:{exclude:/on[A-Z].*/}}},D=e=>{var u;const[j,A]=(0,E.useState)(""),P=m=>{var p;A(m),(p=e==null?void 0:e.onChange)==null||p.call(e,m)};return(0,n.jsx)(l.tK,{...e,onChange:P,value:(u=e==null?void 0:e.value)!=null?u:j})},x={placeholder:"Placeholder",disabled:!1,isTransparent:!1,state:"init",onChange:(0,t.aD)("onChange"),message:null,banner:null,error:null,actions:null},s=D.bind({});s.args=x,s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const handleChange = (newValue: string) => {
    setValue(newValue);
    args?.onChange?.(newValue);
  };
  return <AIControl {...args} onChange={handleChange} value={args?.value ?? value} />;
}`,...(i=(d=s.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const h=["Default"]}}]);})();