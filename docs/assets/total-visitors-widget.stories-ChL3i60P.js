import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-BXs6jvWf.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{B as ee,I as o,Vt as s,gt as te}from"./charts-provider-CG5oTpIE.js";import{sa as ne}from"./build-module-BEvijrel.js";import{n as re}from"./sparkline-DhnQ66vO.js";import{t as c}from"./src-DwJsks-j.js";import{Sn as l,k as ie,pt as ae,t as u}from"./src-BcILQ8ng.js";import{n as oe}from"./abbreviated-value-ByCB1kqt.js";import{t as se}from"./widget-state-DnbF8hrz.js";import{t as d}from"./src-BYo4kEZS.js";import{t as ce}from"./metric-sparkline-skeleton-D--yuw66.js";import{n as f,r as p,s as m}from"./register-report-mocks-DEKgkFm4.js";import{a as h,c as g,i as _,l as v,o as y,r as b,s as x,u as S}from"./with-widget-canvas-BilWRZpu.js";var C,w,T,E,le=e((()=>{C=`_root_1sfkc_1`,w=`_body_1sfkc_8`,T=`_chart_1sfkc_20`,E={root:C,body:w,chart:T}}));function ue(){let{reportParams:e}=ee(),{primary:t,isLoading:n,isFetching:i,isError:a,error:o,refetch:c}=ae((0,O.useMemo)(()=>ie({...e,stat_fields:`views,visitors`,period:A}),[e])),l=t.data,u=Number(l?.summary?.visitors??0),d=(0,O.useMemo)(()=>(l?.data??[]).map(e=>Number(e.visitors??0)),[l]);return(0,k.jsx)(`div`,{className:E.root,children:(0,k.jsx)(se,{isLoading:n,isFetching:i,isError:a&&d.length===0,isEmpty:!d.some(e=>e>0),error:s(o,{retryDescription:r(`We couldn't load your visitors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:c}),renderLoading:(0,k.jsx)(ce,{}),children:(0,k.jsxs)(`div`,{className:E.body,children:[(0,k.jsx)(ne,{variant:`heading-2xl`,children:(0,k.jsx)(oe,{value:u,dataFormat:te})}),(0,k.jsx)(`div`,{className:E.chart,children:(0,k.jsx)(re,{data:d,maxWidth:1/0})})]})})})}function D({attributes:e={},setError:t}){return(0,k.jsx)(o,{attributes:e,setError:t,children:(0,k.jsx)(ue,{})})}var O,k,A,j=e((()=>{u(),c(),d(),i(),O=t(n(),1),le(),k=a(),A=`day`})),M,N,P,F,I,L,R,z,B=e((()=>{M=`jpa/total-visitors`,N=`jpa/people`,P=`Total visitors`,F=`Total visitors for the selected period, with the trend over time.`,I={content:`The number of visitors to your site. A returning visitor is counted once per day.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/#visitors`}]},L=`stats`,R=`framed`,z={name:M,icon:N,title:P,description:F,help:I,category:L,presentation:R}}));function V(){return(0,U.jsx)(D,{attributes:{reportParams:l(!1)}})}function H(e){return(0,U.jsx)(D,{attributes:{reportParams:l(!1,e)}})}function de(e){return(0,U.jsx)(g,{...e,widgetType:G,renderModule:W,renderComponent:D,attributes:{reportParams:l(!1)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),f(),v(),y(),b(),j(),B(),U=a(),p(),W=`storybook/total-visitors`,G=h(z),K={title:`Packages/Premium Analytics/Widgets/TotalVisitors`,component:D,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Total visitors" card: the selected period's visitor total as a large figure over an area sparkline of the trend. The total sums each day's visitors, so a returning visitor counts once per day — the card carries that caveat in its info popover. There is no WithComparison story: the widget strips comparison from its request and renders no delta.`}}}},q={render:V,decorators:[_]},J={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(m(`stats/visits`,`loading`),()=>m(`stats/visits`,null))},Y={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(m(`stats/visits`,`error`),()=>m(`stats/visits`,null))},X={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(m(`stats/visits`,`error-retryable`),()=>m(`stats/visits`,null))},Z={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(m(`stats/visits`,`empty`),()=>m(`stats/visits`,null))},Q={tags:[`widget-dashboard`],render:e=>(0,U.jsx)(de,{...e}),args:{...x},argTypes:{...S}},$=[`Default`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
  tags: ['widget-dashboard'],
  render: args => <TotalVisitorsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...Q.parameters?.docs?.source}}}}))();export{q as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,K as default};