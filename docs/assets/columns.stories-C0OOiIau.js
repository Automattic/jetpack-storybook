import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Et as i}from"./esm-CoaEiq9m.js";import{h as a}from"./library-BaZ90bK7.js";import{t as o}from"./src-DZQPY6UA.js";import{t as s}from"./src-D_mi6p4G.js";import{n as c,t as l}from"./widget-card-CkmlL3P7.js";import{Lt as u,Ot as d,Rt as f,kt as p,p as m,v as h}from"./charts-provider-QX_cDkPR.js";import{i as g,n as _,r as v,t as y}from"./bar-chart-skeleton-DHe-Pw4O.js";import{n as b,t as x}from"./with-widget-root-CxqDFsLc.js";import{t as S}from"./widget-state-MuQaaV71.js";import{r as C,t as w}from"./widget-state-DatcPO-v.js";function T(e,t){let{hasComparison:n,labels:r}=t,i=[{label:r.primary,data:e.map(e=>({label:e.label,value:e.value}))}];return n&&e.some(e=>e.previousValue!==void 0)&&i.push({label:r.comparison,data:e.map(e=>({label:e.label,value:e.previousValue??0}))}),i}var E=t((()=>{}));function D(e){let{getElementStyles:t}=i();return(0,O.useMemo)(()=>e.map((e,n)=>{let{color:r}=t({data:e,index:n});return{stroke:r}}),[e,t])}var O,k=t((()=>{s(),O=e(n(),1)}));function A({columns:e,status:t,error:n,empty:r,format:i=N}){let{reportParams:a}=h(),{isLoading:o,isFetching:s,isError:c,refetch:l}=t,d=!!t.hasComparison,f=(0,j.useMemo)(()=>u(a),[a]),m=(0,j.useMemo)(()=>T(e,{hasComparison:d,labels:f}),[e,d,f]),g=D(m),_=(0,j.useMemo)(()=>C(n,l),[n,l]);return(0,M.jsx)(S,{isLoading:o,isFetching:s,isError:!!c,isEmpty:p(m),error:_,empty:r,renderLoading:(0,M.jsx)(y,{columns:e.length}),children:(0,M.jsx)(v,{chartData:m,styles:g,dataFormat:i})})}var j,M,N,P=t((()=>{j=e(n(),1),d(),f(),g(),_(),m(),w(),E(),k(),M=r(),N={type:`number`,options:{useMultipliers:!0,decimals:0}}})),F,I,L,R,z,B,V,H,U,W,G,K,q;t((()=>{o(),c(),x(),P(),F=r(),I=[{label:`Returning`,value:3820,previousValue:3e3},{label:`New`,value:1210,previousValue:1400}],L={type:`currency`,options:{useMultipliers:!0}},R={isLoading:!1,isError:!1},z=e=>(0,F.jsx)(l,{height:`360px`,children:(0,F.jsx)(e,{})}),B={title:`Packages/Premium Analytics/Widgets Toolkit/Components/Columns`,component:A,tags:[`autodocs`],parameters:{docs:{description:{component:"The columns widget body: hand it the columns, as figures of the period and of the comparison period, and the request status, and it renders a vertical bar per column and per period, the periods named in the legend from the report params, and the loading, error and empty states. Renders inside `WidgetRoot`."}}},decorators:[z,b()],args:{columns:I,status:R,format:L}},V={},H={args:{status:{...R,hasComparison:!0}}},U={args:{columns:[{label:`SAVE10`,value:4200,previousValue:3900},{label:`WELCOME`,value:2650,previousValue:1800},{label:`VIP20`,value:1300,previousValue:1500},{label:`Other`,value:820,previousValue:640}],status:{...R,hasComparison:!0}}},W={args:{status:{isLoading:!0}}},G={args:{status:{isLoading:!1,isError:!0,refetch:()=>void 0}}},K={args:{columns:[],empty:{icon:a,description:`No customer revenue in this period.`}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q=[`Default`,`WithComparison`,`FourColumns`,`Loading`,`Failed`,`Empty`]}))();export{V as Default,K as Empty,G as Failed,U as FourColumns,W as Loading,H as WithComparison,q as __namedExportsOrder,B as default};