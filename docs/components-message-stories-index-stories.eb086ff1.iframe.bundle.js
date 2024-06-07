"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1726],{"../ai-client/src/components/message/stories/index.stories.tsx":(m,n,e)=>{var M,U,w,O,T,A,R,y,f,k,h,L;e.r(n),e.d(n,{Default:()=>i,Error:()=>c,Guideline:()=>_,Upgrade:()=>l,__namedExportsOrder:()=>x,default:()=>g});var r=e("../../../node_modules/.pnpm/@storybook+addon-actions@8.0.9/node_modules/@storybook/addon-actions/dist/index.mjs"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),o=e("../ai-client/src/types.ts"),s=e("../ai-client/src/components/message/index.tsx"),t=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const g={title:"JS Packages/AI Client/Message",component:s.ZP,decorators:[a=>(0,t.jsx)("div",{style:{backgroundColor:"transparent"},children:(0,t.jsx)(a,{})})]},p=a=>(0,t.jsx)(s.ZP,{...a}),E={children:(0,t.jsx)("span",{children:"Message"})},i=p.bind({});i.args=E;const u=a=>(0,t.jsx)(s.Eo,{...a}),j={},_=u.bind({});_.args=j;const D=a=>(0,t.jsx)(s.xi,{requestsRemaining:a.requestsRemaining,severity:a.severity,onUpgradeClick:(0,r.aD)("onUpgradeClick")}),P={requestsRemaining:10,severity:null},l=D.bind({});l.args=P,l.argTypes={severity:{control:{type:"select"},options:["Default","Info","Warning","Error","Success"],mapping:{Default:null,Info:s.by,Warning:s.Vl,Error:s._l,Success:s.av}}};const v=a=>(0,t.jsx)(s.Bc,{error:a.error,code:a.code,onTryAgainClick:(0,r.aD)("onTryAgainClick"),onUpgradeClick:(0,r.aD)("onUpgradeClick")}),C={error:"An error occurred.",code:"error_service_unavailable"},c=v.bind({});c.args=C,c.argTypes={code:{control:{type:"select"},options:["Service Unavailable","Quota Exceeded","Moderation","Context Too Large","Network","Unclear Prompt","Response"],mapping:{"Service Unavailable":o.$u,"Quota Exceeded":o.$L,Moderation:o.q4,"Context Too Large":o.cv,Network:o.co,"Unclear Prompt":o.bC,Response:o.vF}}},i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  return <Message {...args} />;
}`,...(w=(U=i.parameters)==null?void 0:U.docs)==null?void 0:w.source}}},_.parameters={..._.parameters,docs:{...(O=_.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  return <GuidelineMessage {...args} />;
}`,...(A=(T=_.parameters)==null?void 0:T.docs)==null?void 0:A.source}}},l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  return <UpgradeMessage requestsRemaining={args.requestsRemaining} severity={args.severity} onUpgradeClick={action('onUpgradeClick')} />;
}`,...(f=(y=l.parameters)==null?void 0:y.docs)==null?void 0:f.source}}},c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  return <ErrorMessage error={args.error} code={args.code} onTryAgainClick={action('onTryAgainClick')} onUpgradeClick={action('onUpgradeClick')} />;
}`,...(L=(h=c.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};const x=["Default","Guideline","Upgrade","Error"]},"../../../node_modules/.pnpm/@wordpress+components@28.0.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@wordpress/components/build-module/external-link/index.js":(m,n,e)=>{e.d(n,{Z:()=>p});var r=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),d=e("../../../node_modules/.pnpm/@wordpress+i18n@5.0.0/node_modules/@wordpress/i18n/build-module/index.js"),o=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");function t(E,i){const{href:u,children:j,className:_,rel:D="",...P}=E,l=[...new Set([...D.split(" "),"external","noreferrer","noopener"].filter(Boolean))].join(" "),v=(0,r.Z)("components-external-link",_),C=!!(u!=null&&u.startsWith("#")),c=x=>{C&&x.preventDefault(),E.onClick&&E.onClick(x)};return(0,s.jsxs)("a",{...P,className:v,href:u,onClick:c,target:"_blank",rel:l,ref:i,children:[(0,s.jsx)("span",{className:"components-external-link__contents",children:j}),(0,s.jsx)("span",{className:"components-external-link__icon","aria-label":(0,d.__)("(opens in a new tab)"),children:"\u2197"})]})}const p=(0,o.forwardRef)(t)},"../../../node_modules/.pnpm/@wordpress+data@10.0.0_react@18.3.1/node_modules/@wordpress/data/build-module/dispatch.js":(m,n,e)=>{e.d(n,{W:()=>d});var r=e("../../../node_modules/.pnpm/@wordpress+data@10.0.0_react@18.3.1/node_modules/@wordpress/data/build-module/default-registry.js");function d(o){return r.Z.dispatch(o)}},"../../../node_modules/.pnpm/@wordpress+data@10.0.0_react@18.3.1/node_modules/@wordpress/data/build-module/select.js":(m,n,e)=>{e.d(n,{Y:()=>d});var r=e("../../../node_modules/.pnpm/@wordpress+data@10.0.0_react@18.3.1/node_modules/@wordpress/data/build-module/default-registry.js");function d(o){return r.Z.select(o)}},"../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":(m,n,e)=>{e.d(n,{Z:()=>o});var r=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");function d({icon:s,size:t=24,...g},p){return(0,r.cloneElement)(s,{width:t,height:t,...g,ref:p})}const o=(0,r.forwardRef)(d)},"../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/arrow-right.js":(m,n,e)=>{e.d(n,{Z:()=>s});var r=e("../../../node_modules/.pnpm/@wordpress+primitives@4.0.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=(0,d.jsx)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,d.jsx)(r.y$,{d:"m14.5 6.5-1 1 3.7 3.7H4v1.6h13.2l-3.7 3.7 1 1 5.6-5.5z"})})},"../../../node_modules/.pnpm/@wordpress+icons@10.0.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/check.js":(m,n,e)=>{e.d(n,{Z:()=>s});var r=e("../../../node_modules/.pnpm/@wordpress+primitives@4.0.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js"),d=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const s=(0,d.jsx)(r.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,d.jsx)(r.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"})})}}]);})();