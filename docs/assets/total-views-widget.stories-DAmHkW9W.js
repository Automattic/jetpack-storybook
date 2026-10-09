import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{n as ee}from"./sparkline-C6ilv_Kl.js";import{Hn as o}from"./build-module-D2aEjqke.js";import{t as s}from"./src-B4McG4EE.js";import{$ as c,Mn as l,S as te,t as u}from"./src-DQYt8jCH.js";import{n as ne}from"./abbreviated-value-rW4opeox.js";import{_ as d,dt as re,x as ie}from"./charts-provider-THvfZibh.js";import{t as ae}from"./metric-sparkline-skeleton-CsNUyX5s.js";import{n as f,r as oe,s as p}from"./register-report-mocks-CKRy3LZg.js";import{t as se}from"./widget-state-CADyyZl5.js";import{t as m}from"./src-C7ZjB0TJ.js";import{a as h,g,h as _,i as ce,m as le,n as ue,p as de,r as v}from"./with-widget-canvas-Cr9xwJOJ.js";var y,b,x,S,C=t((()=>{y=`_root_1sfkc_1`,b=`_body_1sfkc_8`,x=`_chart_1sfkc_20`,S={root:y,body:b,chart:x}}));function w(){let{reportParams:e}=ie(),{primary:t,isLoading:n,isFetching:i,isError:a,error:s,refetch:l}=c((0,E.useMemo)(()=>te({...e,stat_fields:`views,visitors`,period:O}),[e])),u=t.data,d=Number(u?.summary?.views??0),f=(0,E.useMemo)(()=>(u?.data??[]).map(e=>Number(e.views??0)),[u]);return(0,D.jsx)(`div`,{className:S.root,children:(0,D.jsx)(se,{isLoading:n,isFetching:i,isError:a&&f.length===0,isEmpty:!f.some(e=>e>0),error:re(s,{retryDescription:r(`We couldn't load your views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:l}),renderLoading:(0,D.jsx)(ae,{}),children:(0,D.jsxs)(`div`,{className:S.body,children:[(0,D.jsx)(o,{variant:`heading-2xl`,children:(0,D.jsx)(ne,{value:d,dataFormat:k})}),(0,D.jsx)(`div`,{className:S.chart,children:(0,D.jsx)(ee,{data:f,maxWidth:1/0})})]})})})}function T({attributes:e={},setError:t}){return(0,D.jsx)(d,{attributes:e,setError:t,children:(0,D.jsx)(w,{})})}var E,D,O,k,fe=t((()=>{u(),s(),m(),i(),E=e(n(),1),C(),D=a(),O=`day`,k={type:`number`,options:{useMultipliers:!0}}})),A,j=t((()=>{A={}})),M,N,P,F,I,L,R,z,B=t((()=>{M=`jpa/total-views`,N=`jpa/seen`,P=`Total views`,F=`Total views for the selected period, with the trend over time.`,I={content:`The total number of times your content was viewed.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/#views`}]},L=`stats`,R=`framed`,z={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R}}));function pe(){return(0,U.jsx)(T,{attributes:{reportParams:l(!1)}})}function V(e){return(0,U.jsx)(T,{attributes:{reportParams:l(!1,e)}})}function H(e){return(0,U.jsx)(le,{...e,widgetType:G,renderModule:W,renderComponent:T,attributes:{reportParams:l(!1)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{u(),f(),_(),h(),ue(),fe(),j(),B(),U=a(),oe(),W=`storybook/total-views`,G=ce(z,A),K={title:`Packages/Premium Analytics/Widgets/TotalViews`,component:T,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Total views" card: the selected period's view total as a large figure over an area sparkline of the trend. There is no WithComparison story — the widget strips comparison from its request and renders no delta, so it would be identical to Default.`}}}},q={render:pe,decorators:[v]},J={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(p(`stats/visits`,`loading`),()=>p(`stats/visits`,null))},Y={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(p(`stats/visits`,`error`),()=>p(`stats/visits`,null))},X={render:()=>V(`last-12-months`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(p(`stats/visits`,`error-retryable`),()=>p(`stats/visits`,null))},Z={render:()=>V(`last-year`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(p(`stats/visits`,`empty`),()=>p(`stats/visits`,null))},Q={render:e=>(0,U.jsx)(H,{...e}),args:{...de},argTypes:{...g}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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