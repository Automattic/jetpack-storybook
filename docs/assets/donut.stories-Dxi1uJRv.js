import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{c as n,t as r}from"./src-DzwlO62w.js";import{n as i,t as a}from"./widget-card-CkmlL3P7.js";import{n as o,t as s}from"./with-widget-root-C7uh3n7l.js";import{n as c,t as l}from"./donut-euPmuUoc.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{r(),i(),s(),c(),u=t(),d=[{label:`Returning`,value:3820,previousValue:3e3},{label:`New`,value:1210,previousValue:1400}],f={isLoading:!1,isError:!1},p=e=>(0,u.jsx)(a,{height:`360px`,children:(0,u.jsx)(e,{})}),m={title:`Packages/Premium Analytics/Widgets Toolkit/Components/Donut`,component:l,tags:[`autodocs`],parameters:{docs:{description:{component:"The breakdown widget body: hand it segments and the request status, and it renders the donut chart with the total in the center, the legend with a value and delta per segment, and the loading, error and empty states. Renders inside `WidgetRoot`."}}},decorators:[p,o()],args:{segments:d,status:f}},h={},g={args:{status:{...f,hasComparison:!0}}},_={args:{segments:[{label:`Paid`,value:182400,previousValue:170900},{label:`Unpaid`,value:9650,previousValue:12300}],status:{...f,hasComparison:!0},format:{type:`currency`,options:{useMultipliers:!0}}}},v={args:{segments:[{label:`Booked`,value:48},{label:`Checked In`,value:31},{label:`No Show`,value:6},{label:`Cancelled`,value:9,muted:!0}],format:{type:`number`,options:{useMultipliers:!1,decimals:0}}}},y={args:{segments:[{label:`Booked`,value:10,previousValue:5},{label:`Cancelled`,value:0,previousValue:5,muted:!0}],status:{...f,hasComparison:!0},format:{type:`number`,options:{useMultipliers:!1,decimals:0}}}},b={args:{status:{isLoading:!0}}},x={args:{status:{isLoading:!1,isError:!0,refetch:()=>void 0}}},S={args:{segments:[],empty:{icon:n,description:`No order revenue in this period.`}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      ...READY,
      hasComparison: true
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    segments: [{
      label: 'Paid',
      value: 182_400,
      previousValue: 170_900
    }, {
      label: 'Unpaid',
      value: 9_650,
      previousValue: 12_300
    }],
    status: {
      ...READY,
      hasComparison: true
    },
    format: {
      type: 'currency',
      options: {
        useMultipliers: true
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    segments: [{
      label: 'Booked',
      value: 48
    }, {
      label: 'Checked In',
      value: 31
    }, {
      label: 'No Show',
      value: 6
    }, {
      label: 'Cancelled',
      value: 9,
      muted: true
    }],
    format: {
      type: 'number',
      options: {
        useMultipliers: false,
        decimals: 0
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    segments: [{
      label: 'Booked',
      value: 10,
      previousValue: 5
    }, {
      label: 'Cancelled',
      value: 0,
      previousValue: 5,
      muted: true
    }],
    status: {
      ...READY,
      hasComparison: true
    },
    format: {
      type: 'number',
      options: {
        useMultipliers: false,
        decimals: 0
      }
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      isLoading: true
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      isLoading: false,
      isError: true,
      refetch: () => undefined
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    segments: [],
    empty: {
      icon: payment,
      description: 'No order revenue in this period.'
    }
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`,`WithComparison`,`Currency`,`WithMutedSegment`,`WithAnEmptySegment`,`Loading`,`Failed`,`Empty`]}))();export{_ as Currency,h as Default,S as Empty,x as Failed,b as Loading,y as WithAnEmptySegment,g as WithComparison,v as WithMutedSegment,C as __namedExportsOrder,m as default};