import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{Cn as i,P as a,Sn as o,mn as s,pn as c,z as l}from"./charts-provider-CeelvPLC.js";import{Et as u}from"./esm-Dr13H3tf.js";import{h as d}from"./library-Djn3c8VE.js";import{t as f}from"./src-Dklj63E7.js";import{t as p}from"./src-D1epzAXu.js";import{n as m,t as h}from"./widget-card-DJYbhJj7.js";import{t as g}from"./widget-state-BHtIizq9.js";import{n as _,t as v}from"./bar-chart--1MAd_SY.js";import{n as y,t as b}from"./bar-chart-skeleton-ChcJKtq2.js";import{n as x,t as S}from"./with-widget-root--jEp5p42.js";import{r as C,t as w}from"./widget-state-HTKAH2Fn.js";function T(e,t){let{hasComparison:n,labels:r}=t,i=[{label:r.primary,data:e.map(e=>({label:e.label,value:e.value}))}];return n&&e.some(e=>typeof e.previousValue==`number`)&&i.push({label:r.comparison,data:e.map(e=>({label:e.label,value:e.previousValue===null?null:e.previousValue??0}))}),i}var E=e((()=>{}));function D(e){let{getElementStyles:t}=u();return(0,O.useMemo)(()=>e.map((e,n)=>{let{color:r}=t({data:e,index:n});return{stroke:r}}),[e,t])}var O,k=e((()=>{p(),O=t(n(),1)}));function A({columns:e,status:t,error:n,empty:r,format:i=N,chartTitle:a}){let{reportParams:c}=l(),{isLoading:u,isFetching:d,isError:f,refetch:p}=t,m=!!t.hasComparison,h=(0,j.useMemo)(()=>o(c),[c]),_=(0,j.useMemo)(()=>T(e,{hasComparison:m,labels:h}),[e,m,h]),y=D(_),x=(0,j.useMemo)(()=>C(n,p),[n,p]);return(0,M.jsx)(g,{isLoading:u,isFetching:d,isError:!!f,isEmpty:s(_),error:x,empty:r,renderLoading:(0,M.jsx)(b,{columns:e.length}),children:(0,M.jsx)(v,{chartData:_,styles:y,dataFormat:i,chartTitle:a})})}var j,M,N,P=e((()=>{j=t(n(),1),c(),i(),_(),y(),a(),w(),E(),k(),M=r(),N={type:`number`,options:{useMultipliers:!0,decimals:0}}})),F,I,L,R,z,B,V,H,U,W,G,K,q;e((()=>{f(),m(),S(),P(),F=r(),I=[{label:`Returning`,value:3820,previousValue:3e3},{label:`New`,value:1210,previousValue:1400}],L={type:`currency`,options:{useMultipliers:!0}},R={isLoading:!1,isError:!1},z=e=>(0,F.jsx)(h,{height:`360px`,children:(0,F.jsx)(e,{})}),B={title:`Packages/Premium Analytics/Widgets Toolkit/Components/Columns`,component:A,tags:[`autodocs`],parameters:{docs:{description:{component:"The columns widget body: hand it the columns, as figures of the period and of the comparison period, and the request status, and it renders a vertical bar per column and per period, the periods named in the legend from the report params, and the loading, error and empty states. Renders inside `WidgetRoot`."}}},decorators:[z,x()],args:{columns:I,status:R,format:L}},V={},H={args:{status:{...R,hasComparison:!0}}},U={args:{columns:[{label:`SAVE10`,value:4200,previousValue:3900},{label:`WELCOME`,value:2650,previousValue:1800},{label:`VIP20`,value:1300,previousValue:1500},{label:`Other`,value:820,previousValue:640}],status:{...R,hasComparison:!0}}},W={args:{status:{isLoading:!0}}},G={args:{status:{isLoading:!1,isError:!0,refetch:()=>void 0}}},K={args:{columns:[],empty:{icon:d,description:`No customer revenue in this period.`}}},q=[`Default`,`WithComparison`,`FourColumns`,`Loading`,`Failed`,`Empty`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      ...READY,
      hasComparison: true
    }
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      isLoading: true
    }
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      isLoading: false,
      isError: true,
      refetch: () => undefined
    }
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [],
    empty: {
      icon: customer,
      description: 'No customer revenue in this period.'
    }
  }
}`,...K.parameters?.docs?.source}}}}))();export{V as Default,K as Empty,G as Failed,U as FourColumns,W as Loading,H as WithComparison,q as __namedExportsOrder,B as default};