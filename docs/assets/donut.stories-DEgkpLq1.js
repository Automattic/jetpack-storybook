import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{u as n}from"./library-DTloIBum.js";import{t as r}from"./src-fQR6rGKL.js";import{n as i,t as a}from"./widget-card-CkmlL3P7.js";import{n as o,t as s}from"./with-widget-root-C7rUK5j3.js";import{n as c,t as l}from"./donut-69KlT9eT.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{r(),i(),s(),c(),u=t(),d=[{label:`Returning`,value:3820,previousValue:3e3},{label:`New`,value:1210,previousValue:1400}],f={isLoading:!1,isError:!1},p=e=>(0,u.jsx)(a,{height:`360px`,children:(0,u.jsx)(e,{})}),m={title:`Packages/Premium Analytics/Widgets Toolkit/Components/Donut`,component:l,tags:[`autodocs`],parameters:{docs:{description:{component:'The breakdown widget body: hand it segments and the request status, and it renders the chart with the total, the legend with a value and delta per segment, and the loading, error and empty states. `variant="half-ring"` draws the same breakdown as a semi-circle with the total under the arc; there is no separate semi-circle kind. Renders inside `WidgetRoot`.'}}},decorators:[p,o()],args:{segments:d,status:f}},h={},g={args:{status:{...f,hasComparison:!0}}},_={args:{segments:[{label:`Paid`,value:182400,previousValue:170900},{label:`Unpaid`,value:9650,previousValue:12300}],status:{...f,hasComparison:!0},format:{type:`currency`,options:{useMultipliers:!0}}}},v={args:{segments:[{label:`Booked`,value:48},{label:`Checked In`,value:31},{label:`No Show`,value:6},{label:`Cancelled`,value:9,muted:!0}],format:{type:`number`,options:{useMultipliers:!1,decimals:0}}}},y={args:{segments:[{label:`Booked`,value:10,previousValue:5},{label:`Cancelled`,value:0,previousValue:5,muted:!0}],status:{...f,hasComparison:!0},format:{type:`number`,options:{useMultipliers:!1,decimals:0}}}},b={args:{segments:[{label:`Mobile`,value:3820,previousValue:3e3},{label:`Desktop`,value:1210,previousValue:1400},{label:`Tablet`,value:310,previousValue:420}],status:{...f,hasComparison:!0},variant:`half-ring`}},x={args:{segments:[{label:`Desktop`,value:.62,previousValue:.58},{label:`Mobile`,value:.31,previousValue:.36},{label:`Tablet`,value:.07,previousValue:.06}],status:{...f,hasComparison:!0},format:{type:`percentage`,options:{decimals:1,signDisplay:`auto`}},variant:`half-ring`,withTotal:!1}},S={args:{status:{isLoading:!0}}},C={args:{status:{isLoading:!1,isError:!0,refetch:()=>void 0}}},w={args:{segments:[],empty:{icon:n,description:`No order revenue in this period.`}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
    segments: [{
      label: 'Mobile',
      value: 3820,
      previousValue: 3000
    }, {
      label: 'Desktop',
      value: 1210,
      previousValue: 1400
    }, {
      label: 'Tablet',
      value: 310,
      previousValue: 420
    }],
    status: {
      ...READY,
      hasComparison: true
    },
    variant: 'half-ring'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    segments: [{
      label: 'Desktop',
      value: 0.62,
      previousValue: 0.58
    }, {
      label: 'Mobile',
      value: 0.31,
      previousValue: 0.36
    }, {
      label: 'Tablet',
      value: 0.07,
      previousValue: 0.06
    }],
    status: {
      ...READY,
      hasComparison: true
    },
    format: {
      type: 'percentage',
      options: {
        decimals: 1,
        signDisplay: 'auto'
      }
    },
    variant: 'half-ring',
    withTotal: false
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      isLoading: true
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      isLoading: false,
      isError: true,
      refetch: () => undefined
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    segments: [],
    empty: {
      icon: payment,
      description: 'No order revenue in this period.'
    }
  }
}`,...w.parameters?.docs?.source}}},T=[`Default`,`WithComparison`,`Currency`,`WithMutedSegment`,`WithAnEmptySegment`,`HalfRing`,`HalfRingShares`,`Loading`,`Failed`,`Empty`]}))();export{_ as Currency,h as Default,w as Empty,C as Failed,b as HalfRing,x as HalfRingShares,S as Loading,y as WithAnEmptySegment,g as WithComparison,v as WithMutedSegment,T as __namedExportsOrder,m as default};