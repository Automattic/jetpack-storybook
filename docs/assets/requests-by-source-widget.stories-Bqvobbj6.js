import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{b as r,n as i,t as a}from"./build-module-BXs6jvWf.js";import{t as o}from"./jsx-runtime-CFwixLRt.js";import{In as s,Zn as c,bn as l,ct as ee,p as te,t as u,un as d,ut as f}from"./src-BVv1R588.js";import{_ as ne,t as re}from"./src-CFLkDNMV.js";import{i as p,t as m}from"./src-D0IZ3Tm7.js";import{Jt as h,R as g,W as ie,u as ae,wt as _}from"./charts-provider-DVBrFPaa.js";import{t as oe}from"./widget-state-CqPm5upe.js";import{i as se}from"./with-story-router-Buc1zMFG.js";import{t as ce}from"./metric-value-B4sEOfTs.js";import{n as le}from"./chart-tooltip-BnrRYAp5.js";import{t as ue}from"./stacked-area-chart-CkEjhNGo.js";import{n as de,r as fe}from"./register-report-mocks-Dzl9RUVR.js";import{o as pe}from"./metric-tabs-chart-skeleton-s6MNywiJ.js";import{a as me,c as he,i as v,l as ge,o as _e,r as ve,s as ye,u as be}from"./with-widget-canvas-BqMy9p20.js";import{n as xe,t as Se}from"./register-stats-mocks-CutN0CmB.js";import{n as Ce,t as y}from"./force-stats-mock-state-DltsELiR.js";var b,x,S,C,w,T,E,D,we=e((()=>{b=`_root_mppgz_1`,x=`_body_mppgz_9`,S=`_totals_mppgz_17`,C=`_total_mppgz_17`,w=`_label_mppgz_38`,T=`_share_mppgz_45`,E=`_chart_mppgz_50`,D={root:b,body:x,totals:S,total:C,label:w,share:T,chart:E}}));function Te(){return{human:i(`Human`,`jetpack-premium-analytics-pkg`),ai:i(`AI bots`,`jetpack-premium-analytics-pkg`),other:i(`Other bots`,`jetpack-premium-analytics-pkg`),blocked:i(`Blocked`,`jetpack-premium-analytics-pkg`)}}function Ee(e){let t=c(e.from,e.to)<=k?`hour`:te(e.interval,l),n=(0,O.useMemo)(()=>({...e,period:t}),[e,t]),r=f(n),{primary:i,timezone:a,isLoading:o,isFetching:s,isError:u,error:re,refetch:p}=ee(n),m=i.data,h=(0,O.useMemo)(()=>{let e=Te(),t=m?.summary,n=d.reduce((e,n)=>e+(t?.[n]??0),0);return d.map(r=>{let i=t?.[r]??0,o=(m?.data??[]).flatMap(e=>{let t=ne(e.date_start,a),n=ne(e.date_end,a);return t?[{date:t,endDate:n,value:e[r]}]:[]});return{key:r,label:e[r],total:i,share:n>0?i/n:null,series:{label:e[r],data:o,options:r===`blocked`?{stroke:A}:{}}}})},[m,a]),g=h.some(e=>e.total>0);return{sources:h,period:t,isLoading:o,isFetching:s,isError:u&&!m?.data.length,isEmpty:r||!o&&!g,isRangeTooLong:r,error:re,refetch:p}}var O,k,A,De=e((()=>{u(),re(),a(),O=t(n(),1),k=2,A=`var(--a8c-charts-color-trend-down)`}));function Oe({chartType:e}){let{reportParams:t}=ie(),{sources:n,period:a,isLoading:o,isFetching:s,isError:c,isEmpty:l,isRangeTooLong:ee,error:te,refetch:u}=Ee(t),d=(0,M.useMemo)(()=>n.map(e=>e.series),[n]),f=ae(d);return(0,N.jsx)(`div`,{className:D.root,children:(0,N.jsx)(oe,{isLoading:o,isFetching:s,isError:c,isEmpty:l,error:h(te,{retryDescription:i(`We couldn't load your requests. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:u}),empty:ee?{description:i(`Requests are available for up to a year at a time. Choose a shorter period.`,`jetpack-premium-analytics-pkg`)}:void 0,children:(0,N.jsxs)(`div`,{className:D.body,children:[(0,N.jsx)(`ul`,{className:D.totals,children:n.map((t,n)=>(0,N.jsxs)(`li`,{className:D.total,children:[(0,N.jsxs)(`span`,{className:D.label,children:[(0,N.jsx)(le,{indicatorType:e===`bar`?`rect`:`line`,style:f[n]}),t.label]}),(0,N.jsx)(ce,{value:t.total,dataFormat:_,fontSize:`2xl`}),t.share!==null&&(0,N.jsx)(`span`,{className:D.share,children:r(i(`%s of requests`,`jetpack-premium-analytics-pkg`),p(t.share,`percentage`,{decimals:1,signDisplay:`never`}))})]},t.key))}),e===`bar`?(0,N.jsx)(pe,{className:D.chart,series:d,layout:`stacked`,dataFormat:_,tickResolution:a,showLegend:!1}):(0,N.jsx)(ue,{className:D.chart,series:d,dataFormat:_,tickResolution:a})]})})})}function j({attributes:e={},setError:t}){return(0,N.jsx)(g,{attributes:e,setError:t,children:(0,N.jsx)(Oe,{chartType:e?.chartType===`bar`?`bar`:`area`})})}var M,N,ke=e((()=>{m(),se(),a(),M=t(n(),1),we(),De(),N=o()})),P,F,I,L,R,z,B,V,Ae,je=e((()=>{P=`ai-traffic/requests-by-source`,F=`jpa/people`,I=`Requests by source`,L=`See how many requests came from people, AI bots and other bots, and how many were blocked.`,R={content:`Every request your site received, split by who made it. These are requests, not views, so totals include bots and will be higher than the views in your Traffic tab.`},z=`traffic`,B=`framed`,V=[{id:`chartType`,type:`jpa/toggle-group`,label:`Chart type`,relevance:`high`,elements:[{value:`area`,label:`Area chart`,icon:`jpa/chart-line`},{value:`bar`,label:`Bar chart`,icon:`jpa/chart-bar`}]}],Ae={name:P,icon:F,title:I,description:L,help:R,category:z,presentation:B,attributes:V}}));function H(e){return(0,U.jsx)(j,{attributes:{reportParams:s(!1,e)}})}function Me(e){return(0,U.jsx)(j,{...e})}var U,Ne,W,Pe,Fe,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),ge(),_e(),ve(),de(),Se(),Ce(),ke(),je(),U=o(),fe(),xe(),Ne=`storybook/requests-by-source`,W=`stats/ua-queries`,Pe=me(Ae),Fe={title:`Packages/Premium Analytics/Widgets/RequestsBySource`,component:j,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Requests by source" widget of the AI tab. Totals the requests the edge saw from people, AI bots and other bots, and those it blocked, and stacks them over the dashboard date range.`}}}},G={render:()=>H(`last-30-days`),decorators:[v]},K={render:()=>H(`today`),decorators:[v]},q={render:()=>(0,U.jsx)(j,{attributes:{reportParams:s(!1,`last-30-days`),chartType:`bar`}}),decorators:[v]},J={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(y(W,`loading`),()=>y(W,null))},Y={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(y(W,`error`),()=>y(W,null))},X={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(y(W,`error-retryable`),()=>y(W,null))},Z={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(y(W,`empty`),()=>y(W,null))},Q={tags:[`widget-dashboard`],render:e=>(0,U.jsx)(he,{...e,widgetType:Pe,renderModule:Ne,renderComponent:Me,attributes:{reportParams:s(!1)}}),args:ye,argTypes:be},$=[`Default`,`Hourly`,`Bars`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => renderOnPreset('last-30-days'),
  decorators: [withWidgetCanvas]
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => renderOnPreset('today'),
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`A window of two days or fewer is drawn by the hour.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <RequestsBySourceRender attributes={{
    reportParams: getDefaultQueryParams(false, 'last-30-days'),
    chartType: 'bar'
  }} />,
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`The chart type setting swaps the stacked areas for stacked bars.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState(ENDPOINT, 'loading');
    return () => forceStatsMockState(ENDPOINT, null);
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState(ENDPOINT, 'error');
    return () => forceStatsMockState(ENDPOINT, null);
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderOnPreset('last-12-months'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState(ENDPOINT, 'error-retryable');
    return () => forceStatsMockState(ENDPOINT, null);
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderOnPreset('last-year'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState(ENDPOINT, 'empty');
    return () => forceStatsMockState(ENDPOINT, null);
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  tags: ['widget-dashboard'],
  render: args => <WidgetDashboardWithWidgetStory {...args} widgetType={storyWidgetType} renderModule={RENDER_MODULE} renderComponent={DashboardRender as ComponentType<WidgetRenderProps<unknown>>} attributes={{
    reportParams: getDefaultQueryParams(false)
  }} />,
  args: DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
  argTypes: widgetDashboardWithWidgetArgTypes
}`,...Q.parameters?.docs?.source}}}}))();export{q as Bars,G as Default,Z as Empty,Y as Error,X as ErrorRetryable,K as Hourly,J as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,Fe as default};