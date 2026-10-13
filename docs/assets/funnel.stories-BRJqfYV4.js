import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{d as r,n as i,t as a}from"./build-module-BXPCp--5.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{t as s}from"./conversion-funnel-chart-Cx54Az81.js";import{k as c}from"./library-DTloIBum.js";import{t as l}from"./src-fQR6rGKL.js";import{t as u}from"./src-DP5VfwVT.js";import{n as d,t as f}from"./src-DKLEIv8R.js";import{n as p,t as m}from"./widget-card-CkmlL3P7.js";import{Jt as h,qt as g}from"./charts-provider-DGkg2EPN.js";import{n as _,t as v}from"./tooltip-row-C-NG-WHI.js";import{t as y}from"./metric-with-comparison-2V8I3OTn.js";import{t as b}from"./metric-with-comparison-pAaxldBF.js";import{n as x,t as S}from"./with-widget-root-C1WZOZ75.js";import{t as C}from"./widget-state-DL_BJ35a.js";import{r as w,t as T}from"./widget-state-BKZGvw32.js";function E(e,t){let n=e[0],r=e[e.length-1];return{chartSteps:e.map(e=>({id:e.id,label:e.label,count:e.value,rate:h(e.value,n?.value??0)})),rate:D(r?.value,n?.value)??0,previousRate:t.hasComparison?D(r?.previousValue,n?.previousValue):null}}var D,O=t((()=>{g(),D=(e,t)=>e===void 0||!t?null:e/t})),k,A,j=t((()=>{k=`_chart_s4419_1`,A={chart:k}}));function M({steps:e,status:t,error:n,empty:a,format:o=F}){let{isLoading:c,isFetching:l,isError:u,refetch:f}=t,p=!!t.hasComparison,m=e[0]?.label??``,{chartSteps:h,rate:g,previousRate:_}=(0,N.useMemo)(()=>E(e,{hasComparison:p}),[e,p]),b=(0,N.useMemo)(()=>w(n,f),[n,f]);return(0,P.jsx)(C,{isLoading:c,isFetching:l,isError:!!u,isEmpty:!e[0]?.value,error:b,empty:a,children:(0,P.jsx)(s,{className:A.chart,steps:h,mainRate:g*100,renderMainMetric:()=>(0,P.jsx)(y,{value:g,previousValue:_,dataFormat:I}),renderStepRate:({step:e,className:t})=>(0,P.jsx)(`span`,{className:t,children:d(e.rate/100,I.type,I.options)}),renderTooltip:({step:e,index:t})=>(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(v,{indicator:null,label:e.label,value:e.count??null,dataFormat:o}),t>0&&(0,P.jsx)(v,{indicator:null,label:r(i(`of %s`,`jetpack-premium-analytics-pkg`),m),value:e.rate/100,dataFormat:I})]})})})}var N,P,F,I,L=t((()=>{u(),f(),a(),N=e(n(),1),_(),b(),T(),O(),j(),P=o(),F={type:`number`,options:{useMultipliers:!0,decimals:0}},I={type:`percentage`,options:{signDisplay:`auto`}}})),R,z,B,V,H,U,W,G,K,q,J;t((()=>{l(),p(),S(),L(),R=o(),z=[{id:`sessions`,label:`Sessions`,value:1250,previousValue:1100},{id:`cart`,label:`Cart`,value:310,previousValue:260},{id:`checkout`,label:`Checkout`,value:140,previousValue:120},{id:`purchase`,label:`Purchase`,value:60,previousValue:45}],B={isLoading:!1,isError:!1},V=e=>(0,R.jsx)(m,{height:`360px`,children:(0,R.jsx)(e,{})}),H={title:`Packages/Premium Analytics/Widgets Toolkit/Components/Funnel`,component:M,tags:[`autodocs`],parameters:{docs:{description:{component:"The funnel widget body: hand it the steps in order, as counts, and the request status, and it renders the rate of the whole with its delta, a bar per step with its share of the first step, the tooltip with the count, and the loading, error and empty states. Renders inside `WidgetRoot`."}}},decorators:[V,x()],args:{steps:z,status:B}},U={},W={args:{status:{...B,hasComparison:!0}}},G={args:{status:{isLoading:!0}}},K={args:{status:{isLoading:!1,isError:!0,refetch:()=>void 0}}},q={args:{steps:[],empty:{icon:c,description:`No conversion data in this period.`}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      ...READY,
      hasComparison: true
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
    steps: [],
    empty: {
      icon: goal,
      description: 'No conversion data in this period.'
    }
  }
}`,...q.parameters?.docs?.source}}},J=[`Default`,`WithComparison`,`Loading`,`Failed`,`Empty`]}))();export{U as Default,q as Empty,K as Failed,G as Loading,W as WithComparison,J as __namedExportsOrder,H as default};