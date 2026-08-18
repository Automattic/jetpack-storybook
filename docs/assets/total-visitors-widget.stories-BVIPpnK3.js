import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DyKOxfM8.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{n as o,ui as s}from"./build-module-CDRs4YxF.js";import{Cn as ee,at as te,t as c}from"./src-Bazpt58d.js";import{J as l,Z as u,at as d,q as f,tt as p}from"./report-metric-TMKCu6gf.js";import{n as m}from"./sparkline-D6qopIYy.js";import{n as h,t as g}from"./src-CsA_y1X9.js";import{Cr as _,Nt as v,Vr as ne,in as re,x as ie}from"./chart-tooltip-Be73Yb4J.js";import{t as ae}from"./widget-state-C-TJKMCy.js";import{C as oe,D as y,E as se,S as ce,T as le,b as ue,t as b,w as de,x}from"./src-C9u1tQDw.js";var S,C,w,T,E=t((()=>{S=`_root_lau5r_1`,C=`_body_lau5r_9`,w=`_chart_lau5r_21`,T={root:S,body:C,chart:w}}));function D(){let{reportParams:e}=d(),{primary:t,isLoading:n,isFetching:i,isError:a,error:o,refetch:c}=re((0,k.useMemo)(()=>ne({...e,stat_fields:`views,visitors`,period:j}),[e])),l=t.data,u=Number(l?.summary?.visitors??0),f=h(u,`number`,N),p=h(u,`number`,u>=1e3?M:N),g=(0,k.useMemo)(()=>(l?.data??[]).map(e=>Number(e.visitors??0)),[l]);return(0,A.jsx)(`div`,{className:T.root,children:(0,A.jsx)(ae,{isLoading:n,isFetching:i,isError:a&&g.length===0,isEmpty:g.length===0,error:ie(o,{retryDescription:r(`We couldn't load your visitors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:c}),empty:{icon:s,description:r(`No visitors in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,A.jsxs)(`div`,{className:T.body,children:[(0,A.jsx)(ee,{variant:`heading-2xl`,title:f,children:p===f?p:(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`span`,{"aria-hidden":`true`,children:p}),(0,A.jsx)(te,{children:f})]})}),(0,A.jsx)(`div`,{className:T.chart,children:(0,A.jsx)(m,{data:g,maxWidth:1/0})})]})})})}function O({attributes:e={},setError:t}){return(0,A.jsx)(p,{attributes:e,setError:t,children:(0,A.jsx)(D,{})})}var k,A,j,M,N,fe=t((()=>{v(),c(),g(),b(),i(),o(),k=e(n(),1),E(),A=a(),j=`day`,M={useMultipliers:!0,decimals:1},N={decimals:0}})),P,pe=t((()=>{o(),P={icon:s}})),F,I,L,R,z,B,V,me=t((()=>{F=`jpa/total-visitors`,I=`Total visitors`,L=`Total visitors for the selected period, with the trend over time.`,R={content:`The number of visitors to your site. A returning visitor is counted once per day.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/#visitors`}]},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function he(){return(0,U.jsx)(O,{attributes:{reportParams:_(!1)}})}function H(e){return(0,U.jsx)(O,{attributes:{reportParams:_(!1,e)}})}function ge(e){return(0,U.jsx)(le,{...e,widgetType:G,renderModule:W,renderComponent:O,attributes:{reportParams:_(!1)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{v(),f(),se(),oe(),ue(),fe(),pe(),me(),U=a(),l(),W=`storybook/total-visitors`,G=ce(V,P),K={title:`Packages/Premium Analytics/Widgets/TotalVisitors`,component:O,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Total visitors" card: the selected period's visitor total as a large figure over an area sparkline of the trend. The total sums each day's visitors, so a returning visitor counts once per day — the card carries that caveat in its info popover. There is no WithComparison story: the widget strips comparison from its request and renders no delta.`}}}},q={render:he,decorators:[x]},J={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(u(`stats/visits`,`loading`),()=>u(`stats/visits`,null))},Y={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(u(`stats/visits`,`error`),()=>u(`stats/visits`,null))},X={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(u(`stats/visits`,`error-retryable`),()=>u(`stats/visits`,null))},Z={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(u(`stats/visits`,`empty`),()=>u(`stats/visits`,null))},Q={render:e=>(0,U.jsx)(ge,{...e}),args:{...de},argTypes:{...y}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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