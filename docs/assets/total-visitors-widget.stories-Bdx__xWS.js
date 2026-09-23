import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{li as o,t as s}from"./build-module-2iv4IIRq.js";import{Rn as ee}from"./build-module-l8c-_EUg2.js";import{Ot as te,m as c,v as ne}from"./hooks-BUZ9Zoks.js";import{n as re}from"./sparkline-Bpl2fDW6.js";import{t as l}from"./src-BVc__o-w.js";import{$t as u,I as d,On as ie,t as f}from"./src-Wxkln24X.js";import{n as ae}from"./abbreviated-value-D1p8UUwY.js";import{t as oe}from"./metric-sparkline-skeleton-Br7U95KW.js";import{c as p,i as se,r as ce}from"./register-report-mocks-CqoR1wHP.js";import{t as m}from"./widget-state-CxKn5D7s.js";import{t as h}from"./src-u1EzvIeu.js";import{a as g,d as _,f as v,i as y,n as le,p as ue,r as b,u as x}from"./with-widget-canvas-BUM4SWZO.js";var S,C,w,T,E=t((()=>{S=`_root_1sfkc_1`,C=`_body_1sfkc_8`,w=`_chart_1sfkc_20`,T={root:S,body:C,chart:w}}));function D(){let{reportParams:e}=ne(),{primary:t,isLoading:n,isFetching:i,isError:a,error:s,refetch:c}=d((0,k.useMemo)(()=>ie({...e,stat_fields:`views,visitors`,period:j}),[e])),l=t.data,u=Number(l?.summary?.visitors??0),f=(0,k.useMemo)(()=>(l?.data??[]).map(e=>Number(e.visitors??0)),[l]);return(0,A.jsx)(`div`,{className:T.root,children:(0,A.jsx)(m,{isLoading:n,isFetching:i,isError:a&&f.length===0,isEmpty:f.length===0,error:te(s,{retryDescription:r(`We couldn't load your visitors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:c}),empty:{icon:o,description:r(`No visitors in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,A.jsx)(oe,{}),children:(0,A.jsxs)(`div`,{className:T.body,children:[(0,A.jsx)(ee,{variant:`heading-2xl`,children:(0,A.jsx)(ae,{value:u,dataFormat:M})}),(0,A.jsx)(`div`,{className:T.chart,children:(0,A.jsx)(re,{data:f,maxWidth:1/0})})]})})})}function O({attributes:e={},setError:t}){return(0,A.jsx)(c,{attributes:e,setError:t,children:(0,A.jsx)(D,{})})}var k,A,j,M,de=t((()=>{f(),l(),h(),i(),s(),k=e(n(),1),E(),A=a(),j=`day`,M={type:`number`,options:{useMultipliers:!0}}})),N,P=t((()=>{s(),N={icon:o}})),F,I,L,R,z,B,V,fe=t((()=>{F=`jpa/total-visitors`,I=`Total visitors`,L=`Total visitors for the selected period, with the trend over time.`,R={content:`The number of visitors to your site. A returning visitor is counted once per day.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/#visitors`}]},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function pe(){return(0,U.jsx)(O,{attributes:{reportParams:u(!1)}})}function H(e){return(0,U.jsx)(O,{attributes:{reportParams:u(!1,e)}})}function me(e){return(0,U.jsx)(_,{...e,widgetType:G,renderModule:W,renderComponent:O,attributes:{reportParams:u(!1)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{f(),ce(),v(),g(),le(),de(),P(),fe(),U=a(),se(),W=`storybook/total-visitors`,G=y(V,N),K={title:`Packages/Premium Analytics/Widgets/TotalVisitors`,component:O,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Total visitors" card: the selected period's visitor total as a large figure over an area sparkline of the trend. The total sums each day's visitors, so a returning visitor counts once per day — the card carries that caveat in its info popover. There is no WithComparison story: the widget strips comparison from its request and renders no delta.`}}}},q={render:pe,decorators:[b]},J={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(p(`stats/visits`,`loading`),()=>p(`stats/visits`,null))},Y={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(p(`stats/visits`,`error`),()=>p(`stats/visits`,null))},X={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(p(`stats/visits`,`error-retryable`),()=>p(`stats/visits`,null))},Z={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(p(`stats/visits`,`empty`),()=>p(`stats/visits`,null))},Q={render:e=>(0,U.jsx)(me,{...e}),args:{...x},argTypes:{...ue}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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