import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DyKOxfM8.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{On as o,n as s}from"./build-module-CDRs4YxF.js";import{Tn as c,st as ee,t as l}from"./src-B_CQrSgG.js";import{$ as u,G as d,K as f,Y as p,rt as te}from"./report-metric-BUoHKDb0.js";import{n as ne}from"./sparkline-mPHQnYyC.js";import{E as re,Gt as m,dn as ie,t as h}from"./src-DndNfqv8.js";import{n as g,t as ae}from"./src-7KyPhUmN.js";import{x as oe}from"./chart-tooltip-hTPvqu7H.js";import{t as se}from"./metric-sparkline-skeleton-DRf0lC8j.js";import{t as _}from"./widget-state-4iGVY-lb.js";import{C as v,D as y,E as b,S as ce,T as le,b as ue,t as de,w as x,x as S}from"./src-D55L5dnN.js";var C,w,T,E,fe=t((()=>{C=`_root_lau5r_1`,w=`_body_lau5r_9`,T=`_chart_lau5r_21`,E={root:C,body:w,chart:T}}));function pe(){let{reportParams:e}=te(),{primary:t,isLoading:n,isFetching:i,isError:a,error:s,refetch:l}=re((0,O.useMemo)(()=>ie({...e,stat_fields:`views,visitors`,period:A}),[e])),u=t.data,d=Number(u?.summary?.views??0),f=g(d,`number`,M),p=g(d,`number`,d>=1e3?j:M),m=(0,O.useMemo)(()=>(u?.data??[]).map(e=>Number(e.views??0)),[u]);return(0,k.jsx)(`div`,{className:E.root,children:(0,k.jsx)(_,{isLoading:n,isFetching:i,isError:a&&m.length===0,isEmpty:m.length===0,error:oe(s,{retryDescription:r(`We couldn't load your views. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:l}),empty:{icon:o,description:r(`No views in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,k.jsx)(se,{}),children:(0,k.jsxs)(`div`,{className:E.body,children:[(0,k.jsx)(c,{variant:`heading-2xl`,title:f,children:p===f?p:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`span`,{"aria-hidden":`true`,children:p}),(0,k.jsx)(ee,{children:f})]})}),(0,k.jsx)(`div`,{className:E.chart,children:(0,k.jsx)(ne,{data:m,maxWidth:1/0})})]})})})}function D({attributes:e={},setError:t}){return(0,k.jsx)(u,{attributes:e,setError:t,children:(0,k.jsx)(pe,{})})}var O,k,A,j,M,me=t((()=>{h(),l(),ae(),de(),i(),s(),O=e(n(),1),fe(),k=a(),A=`day`,j={useMultipliers:!0,decimals:1},M={decimals:0}})),N,P=t((()=>{s(),N={icon:o}})),F,I,L,R,z,B,V,he=t((()=>{F=`jpa/total-views`,I=`Total views`,L=`Total views for the selected period, with the trend over time.`,R={content:`The total number of times your content was viewed.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/#views`}]},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function ge(){return(0,U.jsx)(D,{attributes:{reportParams:m(!1)}})}function H(e){return(0,U.jsx)(D,{attributes:{reportParams:m(!1,e)}})}function _e(e){return(0,U.jsx)(le,{...e,widgetType:G,renderModule:W,renderComponent:D,attributes:{reportParams:m(!1)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{h(),d(),b(),v(),ue(),me(),P(),he(),U=a(),f(),W=`storybook/total-views`,G=ce(V,N),K={title:`Packages/Premium Analytics/Widgets/TotalViews`,component:D,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Total views" card: the selected period's view total as a large figure over an area sparkline of the trend. There is no WithComparison story — the widget strips comparison from its request and renders no delta, so it would be identical to Default.`}}}},q={render:ge,decorators:[S]},J={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(p(`stats/visits`,`loading`),()=>p(`stats/visits`,null))},Y={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(p(`stats/visits`,`error`),()=>p(`stats/visits`,null))},X={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(p(`stats/visits`,`error-retryable`),()=>p(`stats/visits`,null))},Z={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(p(`stats/visits`,`empty`),()=>p(`stats/visits`,null))},Q={render:e=>(0,U.jsx)(_e,{...e}),args:{...x},argTypes:{...y}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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