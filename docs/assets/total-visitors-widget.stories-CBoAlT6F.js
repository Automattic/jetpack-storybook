import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-BXs6jvWf.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{B as o,I as s,Vt as c,gt as ee}from"./charts-provider-Dywd-o-P.js";import{sa as te}from"./build-module-BEvijrel.js";import{n as ne}from"./sparkline-AfMgupW4.js";import{t as l}from"./src-ETP_GPll.js";import{bn as u,dt as re,k as ie,t as d}from"./src-BG_TKhyf.js";import{n as ae}from"./abbreviated-value-BBa7VxLO.js";import{t as oe}from"./widget-state-Dbd-m3rt.js";import{t as f}from"./src-B5UWDf40.js";import{t as se}from"./metric-sparkline-skeleton-BpRhw8c1.js";import{n as p,r as m,s as h}from"./register-report-mocks-CisljdiM.js";import{a as g,c as _,i as ce,l as v,n as y,o as b,r as x,s as S}from"./with-widget-canvas-BmtrsUpz.js";var C,w,T,E,le=e((()=>{C=`_root_1sfkc_1`,w=`_body_1sfkc_8`,T=`_chart_1sfkc_20`,E={root:C,body:w,chart:T}}));function ue(){let{reportParams:e}=o(),{primary:t,isLoading:n,isFetching:i,isError:a,error:s,refetch:l}=re((0,O.useMemo)(()=>ie({...e,stat_fields:`views,visitors`,period:A}),[e])),u=t.data,d=Number(u?.summary?.visitors??0),f=(0,O.useMemo)(()=>(u?.data??[]).map(e=>Number(e.visitors??0)),[u]);return(0,k.jsx)(`div`,{className:E.root,children:(0,k.jsx)(oe,{isLoading:n,isFetching:i,isError:a&&f.length===0,isEmpty:!f.some(e=>e>0),error:c(s,{retryDescription:r(`We couldn't load your visitors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:l}),renderLoading:(0,k.jsx)(se,{}),children:(0,k.jsxs)(`div`,{className:E.body,children:[(0,k.jsx)(te,{variant:`heading-2xl`,children:(0,k.jsx)(ae,{value:d,dataFormat:ee})}),(0,k.jsx)(`div`,{className:E.chart,children:(0,k.jsx)(ne,{data:f,maxWidth:1/0})})]})})})}function D({attributes:e={},setError:t}){return(0,k.jsx)(s,{attributes:e,setError:t,children:(0,k.jsx)(ue,{})})}var O,k,A,j=e((()=>{d(),l(),f(),i(),O=t(n(),1),le(),k=a(),A=`day`})),M,N,P,F,I,L,R,z,B=e((()=>{M=`jpa/total-visitors`,N=`jpa/people`,P=`Total visitors`,F=`Total visitors for the selected period, with the trend over time.`,I={content:`The number of visitors to your site. A returning visitor is counted once per day.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/#visitors`}]},L=`stats`,R=`framed`,z={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R}}));function V(){return(0,U.jsx)(D,{attributes:{reportParams:u(!1)}})}function H(e){return(0,U.jsx)(D,{attributes:{reportParams:u(!1,e)}})}function de(e){return(0,U.jsx)(S,{...e,widgetType:G,renderModule:W,renderComponent:D,attributes:{reportParams:u(!1)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),p(),_(),g(),y(),j(),B(),U=a(),m(),W=`storybook/total-visitors`,G=ce(z),K={title:`Packages/Premium Analytics/Widgets/TotalVisitors`,component:D,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Total visitors" card: the selected period's visitor total as a large figure over an area sparkline of the trend. The total sums each day's visitors, so a returning visitor counts once per day — the card carries that caveat in its info popover. There is no WithComparison story: the widget strips comparison from its request and renders no delta.`}}}},q={render:V,decorators:[x]},J={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(h(`stats/visits`,`loading`),()=>h(`stats/visits`,null))},Y={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(h(`stats/visits`,`error`),()=>h(`stats/visits`,null))},X={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(h(`stats/visits`,`error-retryable`),()=>h(`stats/visits`,null))},Z={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(h(`stats/visits`,`empty`),()=>h(`stats/visits`,null))},Q={render:e=>(0,U.jsx)(de,{...e}),args:{...b},argTypes:{...v}},$=[`Default`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderTotalVisitors,
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`Default state — the period total over its trend sparkline.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderTotalVisitorsOnPreset('last-90-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/visits', 'loading');
    return () => setReportMockState('stats/visits', null);
  }
}`,...J.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderTotalVisitorsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/visits', 'error');
    return () => setReportMockState('stats/visits', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`The fetch failed with a permission-gated 403: neutral copy and no Retry
action, since retrying cannot clear a permission gate.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderTotalVisitorsOnPreset('last-12-months'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/visits', 'error-retryable');
    return () => setReportMockState('stats/visits', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed in a way that can heal — the proxy's \`no_connection\` 403: the
retryable copy with a Retry action, which re-runs the query (still mocked as
failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderTotalVisitorsOnPreset('last-year'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/visits', 'empty');
    return () => setReportMockState('stats/visits', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no buckets: the widget shows its empty state.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <TotalVisitorsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...Q.parameters?.docs?.source}}}}))();export{q as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,K as default};