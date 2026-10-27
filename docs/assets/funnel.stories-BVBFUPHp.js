import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-DQe4AOzJ.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{$ as o,Z as s,in as c,rn as l}from"./charts-provider-CeelvPLC.js";import{t as u}from"./conversion-funnel-chart-ho2yOQDd.js";import{T as d}from"./library-Djn3c8VE.js";import{t as f}from"./src-Dklj63E7.js";import{t as p}from"./src-D1epzAXu.js";import{n as m,t as h}from"./src-B91kWDFb.js";import{n as g,t as _}from"./widget-card-DJYbhJj7.js";import{t as v}from"./widget-state-BHtIizq9.js";import{n as y,t as b}from"./utils-UgiRVZN0.js";import{t as x}from"./metric-with-comparison-BWzO6ZSc.js";import{t as S}from"./metric-with-comparison-BGpFQozE.js";import{n as C,t as w}from"./with-widget-root--jEp5p42.js";import{r as T,t as E}from"./widget-state-HTKAH2Fn.js";function D(e,t){let n=e[0],r=e[e.length-1];return{chartSteps:e.map(e=>({id:e.id,label:e.label,count:e.value,rate:c(e.value,n?.value??0)})),rate:O(r?.value,n?.value)??0,previousRate:t.hasComparison?O(r?.previousValue,n?.previousValue):null}}var O,k=e((()=>{l(),O=(e,t)=>e===void 0||!t?null:e/t})),A,j,M=e((()=>{A=`_chart_s4419_1`,j={chart:A}}));function N({steps:e,status:t,error:n,empty:i,format:a=I,chartTitle:o}){let{isLoading:c,isFetching:l,isError:d,refetch:f}=t,p=!!t.hasComparison,{chartSteps:h,rate:g,previousRate:_}=(0,P.useMemo)(()=>D(e,{hasComparison:p}),[e,p]),y=(0,P.useMemo)(()=>T(n,f),[n,f]),S=(0,P.useCallback)((e,t)=>{let n=b(a),i=b(L);return{value:e.count===void 0?r(`No data`,`jetpack-premium-analytics-pkg`):m(e.count,n.type,n.options),rows:t===0?[]:[{label:r(`Conversion rate`,`jetpack-premium-analytics-pkg`),value:m(e.rate/100,i.type,i.options)}]}},[a]);return(0,F.jsx)(v,{isLoading:c,isFetching:l,isError:!!d,isEmpty:!e[0]?.value,error:y,empty:i,children:(0,F.jsx)(u,{className:j.chart,ariaLabel:s(o),steps:h,mainRate:g*100,getTooltipContent:S,renderMainMetric:()=>(0,F.jsx)(x,{value:g,previousValue:_,dataFormat:L}),renderStepRate:({step:e,className:t})=>(0,F.jsx)(`span`,{className:t,children:m(e.rate/100,L.type,L.options)})})})}var P,F,I,L,R=e((()=>{p(),h(),i(),P=t(n(),1),o(),y(),S(),E(),k(),M(),F=a(),I={type:`number`,options:{useMultipliers:!0,decimals:0}},L={type:`percentage`,options:{signDisplay:`auto`}}})),z,B,V,H,U,W,G,K,q,J,Y,X;e((()=>{f(),g(),w(),R(),z=a(),B=[{id:`sessions`,label:`Sessions`,value:1250,previousValue:1100},{id:`cart`,label:`Cart`,value:310,previousValue:260},{id:`checkout`,label:`Checkout`,value:140,previousValue:120},{id:`purchase`,label:`Purchase`,value:60,previousValue:45}],V={isLoading:!1,isError:!1},H=(e,{parameters:t})=>(0,z.jsx)(_,{height:t.cardHeight??`360px`,children:(0,z.jsx)(e,{})}),U={title:`Packages/Premium Analytics/Widgets Toolkit/Components/Funnel`,component:N,tags:[`autodocs`],parameters:{docs:{description:{component:"The funnel widget body: hand it the steps in order, as counts, and the request status, and it renders the rate of the whole with its delta, a bar per step with its share of the first step, the tooltip with the count, and the loading, error and empty states. Renders inside `WidgetRoot`."}}},decorators:[H,C()],args:{steps:B,status:V}},W={},G={args:{status:{...V,hasComparison:!0}}},K={args:{status:{isLoading:!0}}},q={args:{status:{isLoading:!1,isError:!0,refetch:()=>void 0}}},J={args:{steps:[],empty:{icon:d,description:`No conversion data in this period.`}}},Y={parameters:{cardHeight:`160px`}},X=[`Default`,`WithComparison`,`Loading`,`Failed`,`Empty`,`ShortTile`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      ...READY,
      hasComparison: true
    }
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      isLoading: true
    }
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      isLoading: false,
      isError: true,
      refetch: () => undefined
    }
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [],
    empty: {
      icon: goal,
      description: 'No conversion data in this period.'
    }
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  parameters: {
    cardHeight: '160px'
  }
}`,...Y.parameters?.docs?.source},description:{story:`A one-row dashboard tile: the funnel tightens its spacing so the bars keep their room.`,...Y.parameters?.docs?.description}}}}))();export{W as Default,J as Empty,q as Failed,K as Loading,Y as ShortTile,G as WithComparison,X as __namedExportsOrder,U as default};