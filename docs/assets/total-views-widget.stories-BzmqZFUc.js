import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Tn as o,t as s}from"./build-module-DNhkEVJn.js";import{Hn as c}from"./build-module-DmDwTLpf2.js";import{m as l,v as ee}from"./hooks-DH3-JNWL.js";import{n as te}from"./sparkline-DWCgVPej.js";import{t as u}from"./src-CLuBpAvm.js";import{H as ne,cn as d,t as f,zn as p}from"./src-DpgL0FdG.js";import{n as re}from"./abbreviated-value-CW1y_fP4.js";import{B as ie}from"./helpers-CJzma_Xa.js";import{t as ae}from"./metric-sparkline-skeleton-C04XjGhN.js";import{n as oe,r as m,s as h}from"./register-report-mocks-DtgScvB3.js";import{t as g}from"./widget-state-DPMTxYWG.js";import{t as _}from"./src-Acb0qbNd.js";import{a as v,d as se,f as ce,i as le,n as y,p as b,r as x,u as S}from"./with-widget-canvas-CUhGZWiM.js";var C,w,T,E,ue=t((()=>{C=`_root_1sfkc_1`,w=`_body_1sfkc_8`,T=`_chart_1sfkc_20`,E={root:C,body:w,chart:T}}));function de(){let{reportParams:e}=ee(),{primary:t,isLoading:n,isFetching:i,isError:a,error:o,refetch:s}=ne((0,O.useMemo)(()=>p({...e,stat_fields:`views,visitors`,period:A}),[e])),l=t.data,u=Number(l?.summary?.views??0),d=(0,O.useMemo)(()=>(l?.data??[]).map(e=>Number(e.views??0)),[l]);return(0,k.jsx)(`div`,{className:E.root,children:(0,k.jsx)(g,{isLoading:n,isFetching:i,isError:a&&d.length===0,isEmpty:!d.some(e=>e>0),error:ie(o,{retryDescription:r(`We couldn't load your views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:s}),renderLoading:(0,k.jsx)(ae,{}),children:(0,k.jsxs)(`div`,{className:E.body,children:[(0,k.jsx)(c,{variant:`heading-2xl`,children:(0,k.jsx)(re,{value:u,dataFormat:j})}),(0,k.jsx)(`div`,{className:E.chart,children:(0,k.jsx)(te,{data:d,maxWidth:1/0})})]})})})}function D({attributes:e={},setError:t}){return(0,k.jsx)(l,{attributes:e,setError:t,children:(0,k.jsx)(de,{})})}var O,k,A,j,M=t((()=>{f(),u(),_(),i(),O=e(n(),1),ue(),k=a(),A=`day`,j={type:`number`,options:{useMultipliers:!0}}})),N,P=t((()=>{s(),N={icon:o}})),F,I,L,R,z,B,V,fe=t((()=>{F=`jpa/total-views`,I=`Total views`,L=`Total views for the selected period, with the trend over time.`,R={content:`The total number of times your content was viewed.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/#views`}]},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function pe(){return(0,U.jsx)(D,{attributes:{reportParams:d(!1)}})}function H(e){return(0,U.jsx)(D,{attributes:{reportParams:d(!1,e)}})}function me(e){return(0,U.jsx)(se,{...e,widgetType:G,renderModule:W,renderComponent:D,attributes:{reportParams:d(!1)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{f(),oe(),ce(),v(),y(),M(),P(),fe(),U=a(),m(),W=`storybook/total-views`,G=le(V,N),K={title:`Packages/Premium Analytics/Widgets/TotalViews`,component:D,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Total views" card: the selected period's view total as a large figure over an area sparkline of the trend. There is no WithComparison story — the widget strips comparison from its request and renders no delta, so it would be identical to Default.`}}}},q={render:pe,decorators:[x]},J={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(h(`stats/visits`,`loading`),()=>h(`stats/visits`,null))},Y={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(h(`stats/visits`,`error`),()=>h(`stats/visits`,null))},X={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(h(`stats/visits`,`error-retryable`),()=>h(`stats/visits`,null))},Z={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(h(`stats/visits`,`empty`),()=>h(`stats/visits`,null))},Q={render:e=>(0,U.jsx)(me,{...e}),args:{...S},argTypes:{...b}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderTotalViews,
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`Default state — the period total over its trend sparkline.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderTotalViewsOnPreset('last-90-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/visits', 'loading');
    return () => setReportMockState('stats/visits', null);
  }
}`,...J.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderTotalViewsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/visits', 'error');
    return () => setReportMockState('stats/visits', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`The fetch failed with a permission-gated 403: neutral copy and no Retry
action, since retrying cannot clear a permission gate.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderTotalViewsOnPreset('last-12-months'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/visits', 'error-retryable');
    return () => setReportMockState('stats/visits', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed in a way that can heal — the proxy's \`no_connection\` 403: the
retryable copy with a Retry action, which re-runs the query (still mocked as
failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderTotalViewsOnPreset('last-year'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/visits', 'empty');
    return () => setReportMockState('stats/visits', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no buckets: the widget shows its empty state.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <TotalViewsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,K as default};