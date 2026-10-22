import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{Et as i}from"./esm-BnFPwsUt.js";import{h as a}from"./library-Djn3c8VE.js";import{t as o}from"./src-Dklj63E7.js";import{t as s}from"./src-FMtXFCwi.js";import{n as c,t as l}from"./widget-card-DJYbhJj7.js";import{$t as u,Gt as d,P as f,Wt as p,en as m,z as h}from"./charts-provider-m9wcfGJI.js";import{t as g}from"./widget-state-CgiqWOxt.js";import{n as _,t as v}from"./bar-chart-BRtqR8gp.js";import{n as y,t as b}from"./bar-chart-skeleton-DRGLYmnn.js";import{r as x,t as S}from"./widget-state-B6SJsJzX.js";import{n as C,t as w}from"./with-widget-root-beyV-3Zl.js";function T(e,t){let{hasComparison:n,labels:r}=t,i=[{label:r.primary,data:e.map(e=>({label:e.label,value:e.value}))}];return n&&e.some(e=>typeof e.previousValue==`number`)&&i.push({label:r.comparison,data:e.map(e=>({label:e.label,value:e.previousValue===null?null:e.previousValue??0}))}),i}var E=e((()=>{}));function D(e){let{getElementStyles:t}=i();return(0,O.useMemo)(()=>e.map((e,n)=>{let{color:r}=t({data:e,index:n});return{stroke:r}}),[e,t])}var O,k=e((()=>{s(),O=t(n(),1)}));function A({columns:e,status:t,error:n,empty:r,format:i=N,chartTitle:a}){let{reportParams:o}=h(),{isLoading:s,isFetching:c,isError:l,refetch:f}=t,p=!!t.hasComparison,m=(0,j.useMemo)(()=>u(o),[o]),_=(0,j.useMemo)(()=>T(e,{hasComparison:p,labels:m}),[e,p,m]),y=D(_),S=(0,j.useMemo)(()=>x(n,f),[n,f]);return(0,M.jsx)(g,{isLoading:s,isFetching:c,isError:!!l,isEmpty:d(_),error:S,empty:r,renderLoading:(0,M.jsx)(b,{columns:e.length}),children:(0,M.jsx)(v,{chartData:_,styles:y,dataFormat:i,chartTitle:a})})}var j,M,N,P=e((()=>{j=t(n(),1),p(),m(),_(),y(),f(),S(),E(),k(),M=r(),N={type:`number`,options:{useMultipliers:!0,decimals:0}}})),F,I,L,R,z,B,V,H,U,W,G,K,q;e((()=>{o(),c(),w(),P(),F=r(),I=[{label:`Returning`,value:3820,previousValue:3e3},{label:`New`,value:1210,previousValue:1400}],L={type:`currency`,options:{useMultipliers:!0}},R={isLoading:!1,isError:!1},z=e=>(0,F.jsx)(l,{height:`360px`,children:(0,F.jsx)(e,{})}),B={title:`Packages/Premium Analytics/Widgets Toolkit/Components/Columns`,component:A,tags:[`autodocs`],parameters:{docs:{description:{component:"The columns widget body: hand it the columns, as figures of the period and of the comparison period, and the request status, and it renders a vertical bar per column and per period, the periods named in the legend from the report params, and the loading, error and empty states. Renders inside `WidgetRoot`."}}},decorators:[z,C()],args:{columns:I,status:R,format:L}},V={},H={args:{status:{...R,hasComparison:!0}}},U={args:{columns:[{label:`SAVE10`,value:4200,previousValue:3900},{label:`WELCOME`,value:2650,previousValue:1800},{label:`VIP20`,value:1300,previousValue:1500},{label:`Other`,value:820,previousValue:640}],status:{...R,hasComparison:!0}}},W={args:{status:{isLoading:!0}}},G={args:{status:{isLoading:!1,isError:!0,refetch:()=>void 0}}},K={args:{columns:[],empty:{icon:a,description:`No customer revenue in this period.`}}},q=[`Default`,`WithComparison`,`FourColumns`,`Loading`,`Failed`,`Empty`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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