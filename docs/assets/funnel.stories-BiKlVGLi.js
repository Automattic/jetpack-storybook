import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{k as n}from"./library-DTloIBum.js";import{t as r}from"./src-fQR6rGKL.js";import{n as i,t as a}from"./widget-card-CkmlL3P7.js";import{n as o,t as s}from"./with-widget-root-BwcZc4ag.js";import{n as c,t as l}from"./funnel-DffxslPx.js";var u,d,f,p,m,h,g,_,v,y,b;e((()=>{r(),i(),s(),c(),u=t(),d=[{id:`sessions`,label:`Sessions`,value:1250,previousValue:1100},{id:`cart`,label:`Cart`,value:310,previousValue:260},{id:`checkout`,label:`Checkout`,value:140,previousValue:120},{id:`purchase`,label:`Purchase`,value:60,previousValue:45}],f={isLoading:!1,isError:!1},p=e=>(0,u.jsx)(a,{height:`360px`,children:(0,u.jsx)(e,{})}),m={title:`Packages/Premium Analytics/Widgets Toolkit/Components/Funnel`,component:l,tags:[`autodocs`],parameters:{docs:{description:{component:"The funnel widget body: hand it the steps in order, as counts, and the request status, and it renders the rate of the whole with its delta, a bar per step with its share of the first step, the tooltip with the count, and the loading, error and empty states. Renders inside `WidgetRoot`."}}},decorators:[p,o()],args:{steps:d,status:f}},h={},g={args:{status:{...f,hasComparison:!0}}},_={args:{status:{isLoading:!0}}},v={args:{status:{isLoading:!1,isError:!0,refetch:()=>void 0}}},y={args:{steps:[],empty:{icon:n,description:`No conversion data in this period.`}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      ...READY,
      hasComparison: true
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      isLoading: true
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      isLoading: false,
      isError: true,
      refetch: () => undefined
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [],
    empty: {
      icon: goal,
      description: 'No conversion data in this period.'
    }
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`WithComparison`,`Loading`,`Failed`,`Empty`]}))();export{h as Default,y as Empty,v as Failed,_ as Loading,g as WithComparison,b as __namedExportsOrder,m as default};