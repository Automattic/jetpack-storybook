import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-BXs6jvWf.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{t as o}from"./conversion-funnel-chart-ty1uveKi.js";import{T as s}from"./library-CQwI0SXA.js";import{t as c}from"./src-LMMGtvdu2.js";import{t as l}from"./src-D8xhFOpT.js";import{i as u,t as d}from"./src-DNObhn3F.js";import{n as f,t as p}from"./widget-card-DJYbhJj7.js";import{J as m,q as h}from"./charts-provider-QtJ9qbIH.js";import{t as g}from"./widget-state-CIbtadTL.js";import{n as _,t as v}from"./utils-UgiRVZN0.js";import{t as y}from"./metric-with-comparison-CEUHR-2B.js";import{t as b}from"./metric-with-comparison-mvhWjNq7.js";import{n as x,t as S}from"./with-widget-root-C1Y6LU-q.js";import{r as C,t as w}from"./widget-state-CGuZ6kjU.js";function T(e,t){return t>0?e/t*100:0}var E=e((()=>{}));function D(e,t){let n=e[0],r=e[e.length-1];return{chartSteps:e.map(e=>({id:e.id,label:e.label,count:e.value,rate:T(e.value,n?.value??0)})),rate:O(r?.value,n?.value)??0,previousRate:t.hasComparison?O(r?.previousValue,n?.previousValue):null}}var O,k=e((()=>{E(),O=(e,t)=>e===void 0||!t?null:e/t})),A,j,M=e((()=>{A=`_chart_s4419_1`,j={chart:A}}));function N({steps:e,status:t,error:n,empty:i,format:a=I,chartTitle:s}){let c=m(s),{isLoading:l,isFetching:d,isError:f,refetch:p}=t,h=!!t.hasComparison,{chartSteps:_,rate:b,previousRate:x}=(0,P.useMemo)(()=>D(e,{hasComparison:h}),[e,h]),S=(0,P.useMemo)(()=>C(n,p),[n,p]),w=(0,P.useCallback)((e,t)=>{let n=v(a),i=v(L);return{value:e.count===void 0?r(`No data`,`jetpack-premium-analytics-pkg`):u(e.count,n.type,n.options),rows:t===0?[]:[{label:r(`Conversion rate`,`jetpack-premium-analytics-pkg`),value:u(e.rate/100,i.type,i.options)}]}},[a]);return(0,F.jsx)(g,{isLoading:l,isFetching:d,isError:!!f,isEmpty:!e[0]?.value,error:S,empty:i,children:(0,F.jsx)(o,{className:j.chart,ariaLabel:c,steps:_,mainRate:b*100,getTooltipContent:w,renderMainMetric:()=>(0,F.jsx)(y,{value:b,previousValue:x,dataFormat:L}),renderStepRate:({step:e,className:t})=>(0,F.jsx)(`span`,{className:t,children:u(e.rate/100,L.type,L.options)})})})}var P,F,I,L,R=e((()=>{l(),d(),i(),P=t(n(),1),h(),_(),b(),w(),k(),M(),F=a(),I={type:`number`,options:{useMultipliers:!0,decimals:0}},L={type:`percentage`,options:{signDisplay:`auto`}}})),z,B,V,H,U,W,G,K,q,J,Y,X;e((()=>{c(),f(),S(),R(),z=a(),B=[{id:`sessions`,label:`Sessions`,value:1250,previousValue:1100},{id:`cart`,label:`Cart`,value:310,previousValue:260},{id:`checkout`,label:`Checkout`,value:140,previousValue:120},{id:`purchase`,label:`Purchase`,value:60,previousValue:45}],V={isLoading:!1,isError:!1},H=(e,{parameters:t})=>(0,z.jsx)(p,{height:t.cardHeight??`360px`,children:(0,z.jsx)(e,{})}),U={title:`Packages/Premium Analytics/Widgets Toolkit/Components/Funnel`,component:N,tags:[`autodocs`],parameters:{docs:{description:{component:"The funnel widget body: hand it the steps in order, as counts, and the request status, and it renders the rate of the whole with its delta, a bar per step with its share of the first step, the tooltip with the count, and the loading, error and empty states. Renders inside `WidgetRoot`."}}},decorators:[H,x()],args:{steps:B,status:V}},W={},G={args:{status:{...V,hasComparison:!0}}},K={args:{status:{isLoading:!0}}},q={args:{status:{isLoading:!1,isError:!0,refetch:()=>void 0}}},J={args:{steps:[],empty:{icon:s,description:`No conversion data in this period.`}}},Y={parameters:{cardHeight:`160px`}},X=[`Default`,`WithComparison`,`Loading`,`Failed`,`Empty`,`ShortTile`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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