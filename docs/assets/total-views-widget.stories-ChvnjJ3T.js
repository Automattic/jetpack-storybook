import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Tn as o,t as s}from"./build-module-2iv4IIRq.js";import{Rn as ee}from"./build-module-l8c-_EUg2.js";import{Ct as te,m as c,v as ne}from"./hooks-D_-KwK9o.js";import{n as re}from"./sparkline-3F3srM4K.js";import{t as l}from"./src-DvIRuH3Z.js";import{R as ie,kn as u,r as d,tn as f}from"./date-period-dropdown-G9YUPeqM.js";import{n as p}from"./abbreviated-value-CI8roox9.js";import{t as m}from"./metric-sparkline-skeleton-3TnjN20S.js";import{c as h,i as g,r as _}from"./register-report-mocks-Bkj09xXC.js";import{t as v}from"./widget-state-C7QUic5j.js";import{t as ae}from"./src-BJzObm5Z.js";import{a as oe,c as se,i as ce,l as le,n as y,o as b,r as x,s as S}from"./with-widget-canvas-KqQDaNTN.js";var C,w,T,E,ue=t((()=>{C=`_root_1sfkc_1`,w=`_body_1sfkc_8`,T=`_chart_1sfkc_20`,E={root:C,body:w,chart:T}}));function D(){let{reportParams:e}=ne(),{primary:t,isLoading:n,isFetching:i,isError:a,error:s,refetch:c}=ie((0,k.useMemo)(()=>u({...e,stat_fields:`views,visitors`,period:j}),[e])),l=t.data,d=Number(l?.summary?.views??0),f=(0,k.useMemo)(()=>(l?.data??[]).map(e=>Number(e.views??0)),[l]);return(0,A.jsx)(`div`,{className:E.root,children:(0,A.jsx)(v,{isLoading:n,isFetching:i,isError:a&&f.length===0,isEmpty:f.length===0,error:te(s,{retryDescription:r(`We couldn't load your views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:c}),empty:{icon:o,description:r(`No views in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,A.jsx)(m,{}),children:(0,A.jsxs)(`div`,{className:E.body,children:[(0,A.jsx)(ee,{variant:`heading-2xl`,children:(0,A.jsx)(p,{value:d,dataFormat:M})}),(0,A.jsx)(`div`,{className:E.chart,children:(0,A.jsx)(re,{data:f,maxWidth:1/0})})]})})})}function O({attributes:e={},setError:t}){return(0,A.jsx)(c,{attributes:e,setError:t,children:(0,A.jsx)(D,{})})}var k,A,j,M,de=t((()=>{d(),l(),ae(),i(),s(),k=e(n(),1),ue(),A=a(),j=`day`,M={type:`number`,options:{useMultipliers:!0}}})),N,P=t((()=>{s(),N={icon:o}})),F,I,L,R,z,B,V,fe=t((()=>{F=`jpa/total-views`,I=`Total views`,L=`Total views for the selected period, with the trend over time.`,R={content:`The total number of times your content was viewed.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/#views`}]},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function pe(){return(0,U.jsx)(O,{attributes:{reportParams:f(!1)}})}function H(e){return(0,U.jsx)(O,{attributes:{reportParams:f(!1,e)}})}function me(e){return(0,U.jsx)(S,{...e,widgetType:G,renderModule:W,renderComponent:O,attributes:{reportParams:f(!1)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{d(),_(),se(),oe(),y(),de(),P(),fe(),U=a(),g(),W=`storybook/total-views`,G=ce(V,N),K={title:`Packages/Premium Analytics/Widgets/TotalViews`,component:O,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Total views" card: the selected period's view total as a large figure over an area sparkline of the trend. There is no WithComparison story — the widget strips comparison from its request and renders no delta, so it would be identical to Default.`}}}},q={render:pe,decorators:[x]},J={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(h(`stats/visits`,`loading`),()=>h(`stats/visits`,null))},Y={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(h(`stats/visits`,`error`),()=>h(`stats/visits`,null))},X={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(h(`stats/visits`,`error-retryable`),()=>h(`stats/visits`,null))},Z={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(h(`stats/visits`,`empty`),()=>h(`stats/visits`,null))},Q={render:e=>(0,U.jsx)(me,{...e}),args:{...b},argTypes:{...le}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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