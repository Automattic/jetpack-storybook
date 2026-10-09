import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{At as i}from"./build-module-D2aEjqke.js";import{u as a}from"./library-DTloIBum.js";import{t as o}from"./src-fQR6rGKL.js";import{t as s}from"./src-DSKrH2vS.js";import{n as c,t as l}from"./src-Bkk-KpcD.js";import{n as u,t as d}from"./widget-card-CkmlL3P7.js";import{i as f,k as p,p as m}from"./charts-provider-CG5jlyMR.js";import{i as h,n as g,r as _,t as v}from"./donut-chart-skeleton--4Iqm2jQ.js";import{n as y,t as b}from"./with-widget-root-GHPbdxt1.js";import{t as x}from"./widget-state-Dy1Xd117.js";import{r as S,t as C}from"./widget-state-BcMzrWuc.js";function w(e,t){let{hasComparison:n,format:r,styles:i,mutedColor:a}=t,o=e.map((e,t)=>e.muted?a:i[t]?.color);return{chartData:e.map((e,t)=>({label:e.label,value:e.value,color:o[t]})),legendData:e.map((e,t)=>({label:e.label,value:e.value,displayValue:c(e.value,r.type,r.options),color:o[t],comparison:n?e.previousValue:void 0})),total:e.reduce((e,t)=>e+t.value,0),previousTotal:n?e.reduce((e,t)=>e+(t.previousValue??0),0):null}}var T=t((()=>{l()})),E,D,O=t((()=>{E=`_root_gkspi_1`,D={root:E}}));function k({segments:e,status:t,error:n,empty:r,format:a=M}){let{isLoading:o,isFetching:s,isError:c,refetch:l}=t,u=!!t.hasComparison,[d,f]=p(`surface-secondary`,N),h=m(e),{chartData:g,legendData:y,total:b,previousTotal:C}=(0,A.useMemo)(()=>w(e,{hasComparison:u,format:a,styles:h,mutedColor:f}),[e,u,a,h,f]),T=(0,A.useMemo)(()=>S(n,l),[n,l]);return(0,j.jsx)(x,{isLoading:o,isFetching:s,isError:!!c,isEmpty:b===0,error:T,empty:r,renderLoading:(0,j.jsx)(v,{}),children:(0,j.jsx)(i,{ref:d,className:D.root,direction:`column`,align:`center`,justify:`center`,children:(0,j.jsx)(_,{chartData:g,value:b,comparisonValue:C,dataFormat:a,legendData:y,maxSize:null,withTooltips:!0})})})}var A,j,M,N,P=t((()=>{s(),A=e(n(),1),f(),h(),g(),C(),T(),O(),j=r(),M={type:`number`,options:{useMultipliers:!0,decimals:0}},N=`#f4f4f4`})),F,I,L,R,z,B,V,H,U,W,G,K,q,J;t((()=>{o(),u(),b(),P(),F=r(),I=[{label:`Returning`,value:3820,previousValue:3e3},{label:`New`,value:1210,previousValue:1400}],L={isLoading:!1,isError:!1},R=e=>(0,F.jsx)(d,{height:`360px`,children:(0,F.jsx)(e,{})}),z={title:`Packages/Premium Analytics/Widgets Toolkit/Components/Donut`,component:k,tags:[`autodocs`],parameters:{docs:{description:{component:"The breakdown widget body: hand it segments and the request status, and it renders the donut chart with the total in the center, the legend with a value and delta per segment, and the loading, error and empty states. Renders inside `WidgetRoot`."}}},decorators:[R,y()],args:{segments:I,status:L}},B={},V={args:{status:{...L,hasComparison:!0}}},H={args:{segments:[{label:`Paid`,value:182400,previousValue:170900},{label:`Unpaid`,value:9650,previousValue:12300}],status:{...L,hasComparison:!0},format:{type:`currency`,options:{useMultipliers:!0}}}},U={args:{segments:[{label:`Booked`,value:48},{label:`Checked In`,value:31},{label:`No Show`,value:6},{label:`Cancelled`,value:9,muted:!0}],format:{type:`number`,options:{useMultipliers:!1,decimals:0}}}},W={args:{segments:[{label:`Booked`,value:10,previousValue:5},{label:`Cancelled`,value:0,previousValue:5,muted:!0}],status:{...L,hasComparison:!0},format:{type:`number`,options:{useMultipliers:!1,decimals:0}}}},G={args:{status:{isLoading:!0}}},K={args:{status:{isLoading:!1,isError:!0,refetch:()=>void 0}}},q={args:{segments:[],empty:{icon:a,description:`No order revenue in this period.`}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      ...READY,
      hasComparison: true
    }
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      isLoading: true
    }
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      isLoading: false,
      isError: true,
      refetch: () => undefined
    }
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    segments: [],
    empty: {
      icon: payment,
      description: 'No order revenue in this period.'
    }
  }
}`,...q.parameters?.docs?.source}}},J=[`Default`,`WithComparison`,`Currency`,`WithMutedSegment`,`WithAnEmptySegment`,`Loading`,`Failed`,`Empty`]}))();export{H as Currency,B as Default,q as Empty,K as Failed,G as Loading,W as WithAnEmptySegment,V as WithComparison,U as WithMutedSegment,J as __namedExportsOrder,z as default};