import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{h as n}from"./library-DTloIBum.js";import{t as r}from"./src-fQR6rGKL.js";import{n as i,t as a}from"./widget-card-CkmlL3P7.js";import{n as o,t as s}from"./with-widget-root-D25Jv8gc.js";import{n as c,t as l}from"./columns-CGFqXCMQ.js";var u,d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{r(),i(),s(),c(),u=t(),d=[{label:`Returning`,value:3820,previousValue:3e3},{label:`New`,value:1210,previousValue:1400}],f={type:`currency`,options:{useMultipliers:!0}},p={isLoading:!1,isError:!1},m=e=>(0,u.jsx)(a,{height:`360px`,children:(0,u.jsx)(e,{})}),h={title:`Packages/Premium Analytics/Widgets Toolkit/Components/Columns`,component:l,tags:[`autodocs`],parameters:{docs:{description:{component:"The columns widget body: hand it the columns, as figures of the period and of the comparison period, and the request status, and it renders a vertical bar per column and per period, the periods named in the legend from the report params, and the loading, error and empty states. Renders inside `WidgetRoot`."}}},decorators:[m,o()],args:{columns:d,status:p,format:f}},g={},_={args:{status:{...p,hasComparison:!0}}},v={args:{columns:[{label:`SAVE10`,value:4200,previousValue:3900},{label:`WELCOME`,value:2650,previousValue:1800},{label:`VIP20`,value:1300,previousValue:1500},{label:`Other`,value:820,previousValue:640}],status:{...p,hasComparison:!0}}},y={args:{status:{isLoading:!0}}},b={args:{status:{isLoading:!1,isError:!0,refetch:()=>void 0}}},x={args:{columns:[],empty:{icon:n,description:`No customer revenue in this period.`}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      ...READY,
      hasComparison: true
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      label: 'SAVE10',
      value: 4200,
      previousValue: 3900
    }, {
      label: 'WELCOME',
      value: 2650,
      previousValue: 1800
    }, {
      label: 'VIP20',
      value: 1300,
      previousValue: 1500
    }, {
      label: 'Other',
      value: 820,
      previousValue: 640
    }],
    status: {
      ...READY,
      hasComparison: true
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      isLoading: true
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      isLoading: false,
      isError: true,
      refetch: () => undefined
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [],
    empty: {
      icon: customer,
      description: 'No customer revenue in this period.'
    }
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`WithComparison`,`FourColumns`,`Loading`,`Failed`,`Empty`]}))();export{g as Default,x as Empty,b as Failed,v as FourColumns,y as Loading,_ as WithComparison,S as __namedExportsOrder,h as default};