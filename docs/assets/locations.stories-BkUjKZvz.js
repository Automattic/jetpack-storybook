import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{E as n}from"./library-DTloIBum.js";import{t as r}from"./src-fQR6rGKL.js";import{n as i,t as a}from"./widget-card-CkmlL3P7.js";import{n as o,t as s}from"./with-widget-root-Ce2UAPZE.js";import{n as c,t as l}from"./locations-6muSOVo8.js";var u,d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{r(),i(),s(),c(),u=t(),d=[{id:`us`,label:`United States`,value:12400,previousValue:11e3},{id:`gb`,label:`United Kingdom`,value:3100,previousValue:3600},{id:`ca`,label:`Canada`,value:2050,previousValue:1900},{id:`de`,label:`Germany`,value:980,previousValue:1200},{id:`au`,label:`Australia`,value:640,previousValue:500}],f=[{id:`California`,label:`California`,value:4200,previousValue:3900},{id:`Texas`,label:`Texas`,value:2650,previousValue:2800},{id:`New York`,label:`New York`,value:2100,previousValue:1700},{id:`Florida`,label:`Florida`,value:1300,previousValue:1250}],p={isLoading:!1,isError:!1},m=e=>(0,u.jsx)(a,{height:`360px`,width:`800px`,children:(0,u.jsx)(e,{})}),h={title:`Packages/Premium Analytics/Widgets Toolkit/Components/Locations`,component:l,tags:[`autodocs`],parameters:{docs:{description:{component:"The locations widget body: hand it the ranking, as countries or as the regions of one country, and the request status, and it renders the list with a flag, share and delta per location beside the map that places them, and the loading, error and empty states. Renders inside `WidgetRoot`."}}},decorators:[m,o()],args:{rows:d,status:p,valueLabel:`Views`}},g={},_={args:{status:{...p,hasComparison:!0}}},v={args:{rows:f,status:{...p,hasComparison:!0},country:{code:`US`,name:`United States`}}},y={args:{status:{isLoading:!0}}},b={args:{status:{isLoading:!1,isError:!0,refetch:()=>void 0}}},x={args:{rows:[],empty:{icon:n,description:`No location data in this period.`}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      ...READY,
      hasComparison: true
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    rows: STATES,
    status: {
      ...READY,
      hasComparison: true
    },
    country: {
      code: 'US',
      name: 'United States'
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
    rows: [],
    empty: {
      icon: location,
      description: 'No location data in this period.'
    }
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`WithComparison`,`UnitedStates`,`Loading`,`Failed`,`Empty`]}))();export{g as Default,x as Empty,b as Failed,y as Loading,v as UnitedStates,_ as WithComparison,S as __namedExportsOrder,h as default};