import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{d as r,n as i,t as a}from"./build-module-BXPCp--5.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{t as s}from"./conversion-funnel-chart-ty2wRRKN.js";import{T as c}from"./library-Q-e0UJqd.js";import{t as l}from"./src-BNxh73fH.js";import{t as u}from"./src-op_zX6IT.js";import{n as d,t as f}from"./src-DusPqD0-.js";import{n as p,t as m}from"./widget-card-CkmlL3P7.js";import{M as h,P as g,bt as _,xt as v}from"./charts-provider-DxxypibQ.js";import{n as y,t as b}from"./tooltip-row-fU_or4X7.js";import{t as x}from"./metric-with-comparison-BRVHGSjl.js";import{t as S}from"./metric-with-comparison-CgB9kLiw.js";import{n as C,t as w}from"./with-widget-root-VSgorSsr.js";import{t as T}from"./widget-state-Cge9hyen.js";import{r as E,t as D}from"./widget-state-BYvzwbNq.js";function O(e,t){let n=e[0],r=e[e.length-1];return{chartSteps:e.map(e=>({id:e.id,label:e.label,count:e.value,rate:v(e.value,n?.value??0)})),rate:k(r?.value,n?.value)??0,previousRate:t.hasComparison?k(r?.previousValue,n?.previousValue):null}}var k,A=t((()=>{_(),k=(e,t)=>e===void 0||!t?null:e/t})),j,M,N=t((()=>{j=`_chart_s4419_1`,M={chart:j}}));function P({steps:e,status:t,error:n,empty:a,format:o=L,chartTitle:c}){let{isLoading:l,isFetching:u,isError:f,refetch:p}=t,m=!!t.hasComparison,g=e[0]?.label??``,{chartSteps:_,rate:v,previousRate:y}=(0,F.useMemo)(()=>O(e,{hasComparison:m}),[e,m]),S=(0,F.useMemo)(()=>E(n,p),[n,p]);return(0,I.jsx)(T,{isLoading:l,isFetching:u,isError:!!f,isEmpty:!e[0]?.value,error:S,empty:a,children:(0,I.jsx)(s,{className:M.chart,ariaLabel:h(c),steps:_,mainRate:v*100,renderMainMetric:()=>(0,I.jsx)(x,{value:v,previousValue:y,dataFormat:R}),renderStepRate:({step:e,className:t})=>(0,I.jsx)(`span`,{className:t,children:d(e.rate/100,R.type,R.options)}),renderTooltip:({step:e,index:t})=>(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(b,{indicator:null,label:e.label,value:e.count??null,dataFormat:o}),t>0&&(0,I.jsx)(b,{indicator:null,label:r(i(`of %s`,`jetpack-premium-analytics-pkg`),g),value:e.rate/100,dataFormat:R})]})})})}var F,I,L,R,z=t((()=>{u(),f(),a(),F=e(n(),1),g(),y(),S(),D(),A(),N(),I=o(),L={type:`number`,options:{useMultipliers:!0,decimals:0}},R={type:`percentage`,options:{signDisplay:`auto`}}})),B,V,H,U,W,G,K,q,J,Y,X,Z;t((()=>{l(),p(),w(),z(),B=o(),V=[{id:`sessions`,label:`Sessions`,value:1250,previousValue:1100},{id:`cart`,label:`Cart`,value:310,previousValue:260},{id:`checkout`,label:`Checkout`,value:140,previousValue:120},{id:`purchase`,label:`Purchase`,value:60,previousValue:45}],H={isLoading:!1,isError:!1},U=(e,{parameters:t})=>(0,B.jsx)(m,{height:t.cardHeight??`360px`,children:(0,B.jsx)(e,{})}),W={title:`Packages/Premium Analytics/Widgets Toolkit/Components/Funnel`,component:P,tags:[`autodocs`],parameters:{docs:{description:{component:"The funnel widget body: hand it the steps in order, as counts, and the request status, and it renders the rate of the whole with its delta, a bar per step with its share of the first step, the tooltip with the count, and the loading, error and empty states. Renders inside `WidgetRoot`."}}},decorators:[U,C()],args:{steps:V,status:H}},G={},K={args:{status:{...H,hasComparison:!0}}},q={args:{status:{isLoading:!0}}},J={args:{status:{isLoading:!1,isError:!0,refetch:()=>void 0}}},Y={args:{steps:[],empty:{icon:c,description:`No conversion data in this period.`}}},X={parameters:{cardHeight:`160px`}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      ...READY,
      hasComparison: true
    }
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      isLoading: true
    }
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      isLoading: false,
      isError: true,
      refetch: () => undefined
    }
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [],
    empty: {
      icon: goal,
      description: 'No conversion data in this period.'
    }
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  parameters: {
    cardHeight: '160px'
  }
}`,...X.parameters?.docs?.source},description:{story:`A one-row dashboard tile: the funnel tightens its spacing so the bars keep their room.`,...X.parameters?.docs?.description}}},Z=[`Default`,`WithComparison`,`Loading`,`Failed`,`Empty`,`ShortTile`]}))();export{G as Default,Y as Empty,J as Failed,q as Loading,X as ShortTile,K as WithComparison,Z as __namedExportsOrder,W as default};