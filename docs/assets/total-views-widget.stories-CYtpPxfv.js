import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Tn as o,t as s}from"./build-module-DNhkEVJn.js";import{n as ee}from"./sparkline-lkxbsJCq.js";import{Bn as c}from"./build-module-pI6Uihcg.js";import{t as l}from"./src-Zd8DzAmX.js";import{$ as te,In as u,S as ne,t as d}from"./src-ckB9686_.js";import{n as re}from"./abbreviated-value-CMBH0uNx.js";import{_ as f,dt as ie,x as ae}from"./charts-provider-BXXbDOcW.js";import{t as oe}from"./metric-sparkline-skeleton-Df9G0o8S.js";import{n as se,r as ce,s as p}from"./register-report-mocks-DbShhgbf.js";import{t as m}from"./widget-state-nG6fVhyr.js";import{t as h}from"./src-BJHZQ68Y.js";import{a as g,g as _,h as le,i as ue,m as v,n as y,p as b,r as x}from"./with-widget-canvas-BuSIbRsU.js";var S,C,w,T,E=t((()=>{S=`_root_1sfkc_1`,C=`_body_1sfkc_8`,w=`_chart_1sfkc_20`,T={root:S,body:C,chart:w}}));function de(){let{reportParams:e}=ae(),{primary:t,isLoading:n,isFetching:i,isError:a,error:o,refetch:s}=te((0,O.useMemo)(()=>ne({...e,stat_fields:`views,visitors`,period:A}),[e])),l=t.data,u=Number(l?.summary?.views??0),d=(0,O.useMemo)(()=>(l?.data??[]).map(e=>Number(e.views??0)),[l]);return(0,k.jsx)(`div`,{className:T.root,children:(0,k.jsx)(m,{isLoading:n,isFetching:i,isError:a&&d.length===0,isEmpty:!d.some(e=>e>0),error:ie(o,{retryDescription:r(`We couldn't load your views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:s}),renderLoading:(0,k.jsx)(oe,{}),children:(0,k.jsxs)(`div`,{className:T.body,children:[(0,k.jsx)(c,{variant:`heading-2xl`,children:(0,k.jsx)(re,{value:u,dataFormat:j})}),(0,k.jsx)(`div`,{className:T.chart,children:(0,k.jsx)(ee,{data:d,maxWidth:1/0})})]})})})}function D({attributes:e={},setError:t}){return(0,k.jsx)(f,{attributes:e,setError:t,children:(0,k.jsx)(de,{})})}var O,k,A,j,M=t((()=>{d(),l(),h(),i(),O=e(n(),1),E(),k=a(),A=`day`,j={type:`number`,options:{useMultipliers:!0}}})),N,P=t((()=>{s(),N={icon:o}})),F,I,L,R,z,B,V,fe=t((()=>{F=`jpa/total-views`,I=`Total views`,L=`Total views for the selected period, with the trend over time.`,R={content:`The total number of times your content was viewed.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/#views`}]},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function pe(){return(0,U.jsx)(D,{attributes:{reportParams:u(!1)}})}function H(e){return(0,U.jsx)(D,{attributes:{reportParams:u(!1,e)}})}function me(e){return(0,U.jsx)(v,{...e,widgetType:G,renderModule:W,renderComponent:D,attributes:{reportParams:u(!1)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{d(),se(),le(),g(),y(),M(),P(),fe(),U=a(),ce(),W=`storybook/total-views`,G=ue(V,N),K={title:`Packages/Premium Analytics/Widgets/TotalViews`,component:D,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Total views" card: the selected period's view total as a large figure over an area sparkline of the trend. There is no WithComparison story — the widget strips comparison from its request and renders no delta, so it would be identical to Default.`}}}},q={render:pe,decorators:[x]},J={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(p(`stats/visits`,`loading`),()=>p(`stats/visits`,null))},Y={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(p(`stats/visits`,`error`),()=>p(`stats/visits`,null))},X={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(p(`stats/visits`,`error-retryable`),()=>p(`stats/visits`,null))},Z={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(p(`stats/visits`,`empty`),()=>p(`stats/visits`,null))},Q={render:e=>(0,U.jsx)(me,{...e}),args:{...b},argTypes:{..._}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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