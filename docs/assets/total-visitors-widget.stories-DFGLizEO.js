import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as ee,t as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{si as a,t as o}from"./build-module-DNhkEVJn.js";import{Rn as te}from"./build-module-B1NPuq5u2.js";import{m as s,v as ne}from"./hooks-HYGeAkGM.js";import{n as re}from"./sparkline-zYbB3LZP.js";import{t as c}from"./src-D6dlrxBx.js";import{$t as l,N as ie,On as u,t as d}from"./src-D7KOO-rM.js";import{n as f}from"./abbreviated-value-RZf8sqTJ.js";import{B as p}from"./helpers-D2SUYba2.js";import{t as m}from"./metric-sparkline-skeleton-ClcEDihq.js";import{n as ae,r as oe,s as h}from"./register-report-mocks-JbZflFPv.js";import{t as se}from"./widget-state-wMDKZ-L1.js";import{t as ce}from"./src-BRzELwkx.js";import{a as le,d as ue,f as g,i as _,n as v,p as y,r as b,u as x}from"./with-widget-canvas-DTYCEm2R.js";var S,C,w,T,de=t((()=>{S=`_root_1sfkc_1`,C=`_body_1sfkc_8`,w=`_chart_1sfkc_20`,T={root:S,body:C,chart:w}}));function E(){let{reportParams:e}=ne(),{primary:t,isLoading:n,isFetching:r,isError:i,error:a,refetch:o}=ie((0,O.useMemo)(()=>u({...e,stat_fields:`views,visitors`,period:A}),[e])),s=t.data,c=Number(s?.summary?.visitors??0),l=(0,O.useMemo)(()=>(s?.data??[]).map(e=>Number(e.visitors??0)),[s]);return(0,k.jsx)(`div`,{className:T.root,children:(0,k.jsx)(se,{isLoading:n,isFetching:r,isError:i&&l.length===0,isEmpty:l.length===0,error:p(a,{retryDescription:ee(`We couldn't load your visitors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:o}),renderLoading:(0,k.jsx)(m,{}),children:(0,k.jsxs)(`div`,{className:T.body,children:[(0,k.jsx)(te,{variant:`heading-2xl`,children:(0,k.jsx)(f,{value:c,dataFormat:j})}),(0,k.jsx)(`div`,{className:T.chart,children:(0,k.jsx)(re,{data:l,maxWidth:1/0})})]})})})}function D({attributes:e={},setError:t}){return(0,k.jsx)(s,{attributes:e,setError:t,children:(0,k.jsx)(E,{})})}var O,k,A,j,M=t((()=>{d(),c(),ce(),r(),O=e(n(),1),de(),k=i(),A=`day`,j={type:`number`,options:{useMultipliers:!0}}})),N,P=t((()=>{o(),N={icon:a}})),F,I,L,R,z,B,V,fe=t((()=>{F=`jpa/total-visitors`,I=`Total visitors`,L=`Total visitors for the selected period, with the trend over time.`,R={content:`The number of visitors to your site. A returning visitor is counted once per day.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/#visitors`}]},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function pe(){return(0,U.jsx)(D,{attributes:{reportParams:l(!1)}})}function H(e){return(0,U.jsx)(D,{attributes:{reportParams:l(!1,e)}})}function me(e){return(0,U.jsx)(ue,{...e,widgetType:G,renderModule:W,renderComponent:D,attributes:{reportParams:l(!1)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{d(),ae(),g(),le(),v(),M(),P(),fe(),U=i(),oe(),W=`storybook/total-visitors`,G=_(V,N),K={title:`Packages/Premium Analytics/Widgets/TotalVisitors`,component:D,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Total visitors" card: the selected period's visitor total as a large figure over an area sparkline of the trend. The total sums each day's visitors, so a returning visitor counts once per day — the card carries that caveat in its info popover. There is no WithComparison story: the widget strips comparison from its request and renders no delta.`}}}},q={render:pe,decorators:[b]},J={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(h(`stats/visits`,`loading`),()=>h(`stats/visits`,null))},Y={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(h(`stats/visits`,`error`),()=>h(`stats/visits`,null))},X={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(h(`stats/visits`,`error-retryable`),()=>h(`stats/visits`,null))},Z={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(h(`stats/visits`,`empty`),()=>h(`stats/visits`,null))},Q={render:e=>(0,U.jsx)(me,{...e}),args:{...x},argTypes:{...y}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,K as default};