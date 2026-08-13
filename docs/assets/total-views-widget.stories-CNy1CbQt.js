import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DyKOxfM8.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{On as o,n as s}from"./build-module-CDRs4YxF.js";import{Tr as ee,sn as te,t as c}from"./src-B3VrXdtG.js";import{J as l,Q as u,Y as d,nt as f,ot as p}from"./report-metric-BfYGxsdE.js";import{n as ne}from"./sparkline-DcZ1-6wt.js";import{n as m,t as h}from"./src-Cuyd7ZVr.js";import{Dt as g,Qt as re,_r as _,h as ie,o as ae}from"./chart-tooltip-DuuBaBe_.js";import{t as oe}from"./widget-state-B9J9IL__.js";import{C as se,D as v,E as y,S as b,T as ce,b as le,t as ue,w as x,x as S}from"./src-DrAmzh1l.js";var C,w,T,E,de=t((()=>{C=`_root_lau5r_1`,w=`_body_lau5r_9`,T=`_chart_lau5r_21`,E={root:C,body:w,chart:T}}));function D(){let{reportParams:e}=p(),{primary:t,isLoading:n,isFetching:i,isError:a,error:s,refetch:c}=re((0,k.useMemo)(()=>ae({...e,stat_fields:`views,visitors`,period:j}),[e])),l=t.data,u=Number(l?.summary?.views??0),d=m(u,`number`,N),f=m(u,`number`,u>=1e3?M:N),h=(0,k.useMemo)(()=>(l?.data??[]).map(e=>Number(e.views??0)),[l]);return(0,A.jsx)(`div`,{className:E.root,children:(0,A.jsx)(oe,{isLoading:n,isFetching:i,isError:a&&h.length===0,isEmpty:h.length===0,error:ie(s,{retryDescription:r(`We couldn't load your views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:c}),empty:{icon:o,description:r(`No views in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,A.jsxs)(`div`,{className:E.body,children:[(0,A.jsx)(ee,{variant:`heading-2xl`,title:d,children:f===d?f:(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`span`,{"aria-hidden":`true`,children:f}),(0,A.jsx)(te,{children:d})]})}),(0,A.jsx)(`div`,{className:E.chart,children:(0,A.jsx)(ne,{data:h,maxWidth:1/0})})]})})})}function O({attributes:e={},setError:t}){return(0,A.jsx)(f,{attributes:e,setError:t,children:(0,A.jsx)(D,{})})}var k,A,j,M,N,fe=t((()=>{g(),c(),h(),ue(),i(),s(),k=e(n(),1),de(),A=a(),j=`day`,M={useMultipliers:!0,decimals:1},N={decimals:0}})),P,pe=t((()=>{s(),P={icon:o}})),F,I,L,R,z,B,V,me=t((()=>{F=`jpa/total-views`,I=`Total views`,L=`Total views for the selected period, with the trend over time.`,R={content:`The total number of times your content was viewed.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/#views`}]},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function he(){return(0,U.jsx)(O,{attributes:{reportParams:_(!1)}})}function H(e){return(0,U.jsx)(O,{attributes:{reportParams:_(!1,e)}})}function ge(e){return(0,U.jsx)(ce,{...e,widgetType:G,renderModule:W,renderComponent:O,attributes:{reportParams:_(!1)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{g(),l(),y(),se(),le(),fe(),pe(),me(),U=a(),d(),W=`storybook/total-views`,G=b(V,P),K={title:`Packages/Premium Analytics/Widgets/TotalViews`,component:O,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Total views" card: the selected period's view total as a large figure over an area sparkline of the trend. There is no WithComparison story — the widget strips comparison from its request and renders no delta, so it would be identical to Default.`}}}},q={render:he,decorators:[S]},J={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(u(`stats/visits`,`loading`),()=>u(`stats/visits`,null))},Y={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(u(`stats/visits`,`error`),()=>u(`stats/visits`,null))},X={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(u(`stats/visits`,`error-retryable`),()=>u(`stats/visits`,null))},Z={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(u(`stats/visits`,`empty`),()=>u(`stats/visits`,null))},Q={render:e=>(0,U.jsx)(ge,{...e}),args:{...x},argTypes:{...v}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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