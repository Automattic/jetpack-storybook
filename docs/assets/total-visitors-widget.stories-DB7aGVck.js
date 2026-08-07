import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DyKOxfM8.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{n as o,ui as s}from"./build-module-CDRs4YxF.js";import{Tr as ee,sn as te,t as c}from"./src-C4Ez7lmL.js";import{$ as l,K as u,Y as d,q as f,rt as ne}from"./report-metric-xAW2OzDD.js";import{n as p}from"./sparkline-D0nIlrQZ.js";import{n as m,t as h}from"./src-DTGWQK4B.js";import{Ct as g,Jt as re,i as ie,p as ae,pr as _}from"./chart-tooltip-BmUjCWWw.js";import{C as oe,D as se,E as v,S as y,T as ce,b as le,t as ue,w as de,x as b}from"./src-BwCNbwAR.js";import{t as x}from"./widget-state-Bim5dH8t.js";var S,C,w,T,E=t((()=>{S=`_root_lau5r_1`,C=`_body_lau5r_9`,w=`_chart_lau5r_21`,T={root:S,body:C,chart:w}}));function D(){let{reportParams:e}=ne(),{primary:t,isLoading:n,isFetching:i,isError:a,error:o,refetch:c}=re((0,k.useMemo)(()=>ie({...e,stat_fields:`views,visitors`,period:j}),[e])),l=t.data,u=Number(l?.summary?.visitors??0),d=m(u,`number`,N),f=m(u,`number`,u>=1e3?M:N),h=(0,k.useMemo)(()=>(l?.data??[]).map(e=>Number(e.visitors??0)),[l]);return(0,A.jsx)(`div`,{className:T.root,children:(0,A.jsx)(x,{isLoading:n,isFetching:i,isError:a&&h.length===0,isEmpty:h.length===0,error:ae(o,{retryDescription:r(`We couldn't load your visitors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:c}),empty:{icon:s,description:r(`No visitors in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,A.jsxs)(`div`,{className:T.body,children:[(0,A.jsx)(ee,{variant:`heading-2xl`,title:d,children:f===d?f:(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`span`,{"aria-hidden":`true`,children:f}),(0,A.jsx)(te,{children:d})]})}),(0,A.jsx)(`div`,{className:T.chart,children:(0,A.jsx)(p,{data:h,maxWidth:1/0})})]})})})}function O({attributes:e={},setError:t}){return(0,A.jsx)(l,{attributes:e,setError:t,children:(0,A.jsx)(D,{})})}var k,A,j,M,N,fe=t((()=>{g(),c(),h(),ue(),i(),o(),k=e(n(),1),E(),A=a(),j=`day`,M={useMultipliers:!0,decimals:1},N={decimals:0}})),P,pe=t((()=>{o(),P={icon:s}})),F,I,L,R,z,B,V,me=t((()=>{F=`jpa/total-visitors`,I=`Total visitors`,L=`Total visitors for the selected period, with the trend over time.`,R={content:`The number of visitors to your site. A returning visitor is counted once per day.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/#visitors`}]},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function he(){return(0,U.jsx)(O,{attributes:{reportParams:_(!1)}})}function H(e){return(0,U.jsx)(O,{attributes:{reportParams:_(!1,e)}})}function ge(e){return(0,U.jsx)(ce,{...e,widgetType:G,renderModule:W,renderComponent:O,attributes:{reportParams:_(!1)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{g(),u(),v(),oe(),le(),fe(),pe(),me(),U=a(),f(),W=`storybook/total-visitors`,G=y(V,P),K={title:`Packages/Premium Analytics/Widgets/TotalVisitors`,component:O,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Total visitors" card: the selected period's visitor total as a large figure over an area sparkline of the trend. The total sums each day's visitors, so a returning visitor counts once per day — the card carries that caveat in its info popover. There is no WithComparison story: the widget strips comparison from its request and renders no delta.`}}}},q={render:he,decorators:[b]},J={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(d(`stats/visits`,`loading`),()=>d(`stats/visits`,null))},Y={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(d(`stats/visits`,`error`),()=>d(`stats/visits`,null))},X={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(d(`stats/visits`,`error-retryable`),()=>d(`stats/visits`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(d(`stats/visits`,`empty`),()=>d(`stats/visits`,null))},Q={render:e=>(0,U.jsx)(ge,{...e}),args:{...de},argTypes:{...se}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
  render: () => renderTotalVisitorsOnPreset('last-365-days'),
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