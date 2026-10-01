import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as ee,t as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Tn as a,t as o}from"./build-module-DNhkEVJn.js";import{Hn as te}from"./build-module-DmDwTLpf2.js";import{m as s,v as ne}from"./hooks-CF_LwCI8.js";import{n as re}from"./sparkline-C39GvC6F.js";import{t as c}from"./src-D-5FFqFB.js";import{I as ie,jn as ae,nn as l,t as u}from"./src-A4tBBqnI.js";import{n as d}from"./abbreviated-value-dmFXwDIi.js";import{B as f}from"./helpers-4z81XZMn.js";import{t as p}from"./metric-sparkline-skeleton-CKj2l7Jp.js";import{n as oe,r as se,s as m}from"./register-report-mocks-BshZcsLp.js";import{t as ce}from"./widget-state-DLv67xIH.js";import{t as le}from"./src-ByK6ITY6.js";import{a as ue,d as h,f as g,i as _,n as v,p as y,r as b,u as x}from"./with-widget-canvas-DdXeAP5f.js";var S,C,w,T,de=t((()=>{S=`_root_1sfkc_1`,C=`_body_1sfkc_8`,w=`_chart_1sfkc_20`,T={root:S,body:C,chart:w}}));function E(){let{reportParams:e}=ne(),{primary:t,isLoading:n,isFetching:r,isError:i,error:a,refetch:o}=ie((0,O.useMemo)(()=>ae({...e,stat_fields:`views,visitors`,period:A}),[e])),s=t.data,c=Number(s?.summary?.views??0),l=(0,O.useMemo)(()=>(s?.data??[]).map(e=>Number(e.views??0)),[s]);return(0,k.jsx)(`div`,{className:T.root,children:(0,k.jsx)(ce,{isLoading:n,isFetching:r,isError:i&&l.length===0,isEmpty:!l.some(e=>e>0),error:f(a,{retryDescription:ee(`We couldn't load your views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:o}),renderLoading:(0,k.jsx)(p,{}),children:(0,k.jsxs)(`div`,{className:T.body,children:[(0,k.jsx)(te,{variant:`heading-2xl`,children:(0,k.jsx)(d,{value:c,dataFormat:j})}),(0,k.jsx)(`div`,{className:T.chart,children:(0,k.jsx)(re,{data:l,maxWidth:1/0})})]})})})}function D({attributes:e={},setError:t}){return(0,k.jsx)(s,{attributes:e,setError:t,children:(0,k.jsx)(E,{})})}var O,k,A,j,M=t((()=>{u(),c(),le(),r(),O=e(n(),1),de(),k=i(),A=`day`,j={type:`number`,options:{useMultipliers:!0}}})),N,P=t((()=>{o(),N={icon:a}})),F,I,L,R,z,B,V,fe=t((()=>{F=`jpa/total-views`,I=`Total views`,L=`Total views for the selected period, with the trend over time.`,R={content:`The total number of times your content was viewed.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/#views`}]},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function pe(){return(0,U.jsx)(D,{attributes:{reportParams:l(!1)}})}function H(e){return(0,U.jsx)(D,{attributes:{reportParams:l(!1,e)}})}function me(e){return(0,U.jsx)(h,{...e,widgetType:G,renderModule:W,renderComponent:D,attributes:{reportParams:l(!1)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{u(),oe(),g(),ue(),v(),M(),P(),fe(),U=i(),se(),W=`storybook/total-views`,G=_(V,N),K={title:`Packages/Premium Analytics/Widgets/TotalViews`,component:D,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Total views" card: the selected period's view total as a large figure over an area sparkline of the trend. There is no WithComparison story — the widget strips comparison from its request and renders no delta, so it would be identical to Default.`}}}},q={render:pe,decorators:[b]},J={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(m(`stats/visits`,`loading`),()=>m(`stats/visits`,null))},Y={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(m(`stats/visits`,`error`),()=>m(`stats/visits`,null))},X={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(m(`stats/visits`,`error-retryable`),()=>m(`stats/visits`,null))},Z={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(m(`stats/visits`,`empty`),()=>m(`stats/visits`,null))},Q={render:e=>(0,U.jsx)(me,{...e}),args:{...x},argTypes:{...y}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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