import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DyKOxfM8.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{n as o,ui as s}from"./build-module-CDRs4YxF.js";import{Tn as c,st as ee,t as l}from"./src-Canu895G.js";import{J as u,Z as d,at as te,q as f,tt as p}from"./report-metric-CdKPbOS4.js";import{n as ne}from"./sparkline-DAuU-OKo.js";import{O as re,pn as ie,qt as m,t as h}from"./src-Ci2M5OLA.js";import{n as g,t as ae}from"./src-DE8Ki5qG.js";import{x as oe}from"./chart-tooltip-DBFsPjtF.js";import{t as se}from"./metric-sparkline-skeleton-CWOehnkS.js";import{t as _}from"./widget-state-D-WCzMRJ.js";import{C as ce,D as v,E as y,S as b,T as le,b as ue,t as de,w as fe,x}from"./src-B2_q1OjX.js";var S,C,w,T,E=t((()=>{S=`_root_lau5r_1`,C=`_body_lau5r_9`,w=`_chart_lau5r_21`,T={root:S,body:C,chart:w}}));function pe(){let{reportParams:e}=te(),{primary:t,isLoading:n,isFetching:i,isError:a,error:o,refetch:l}=re((0,O.useMemo)(()=>ie({...e,stat_fields:`views,visitors`,period:A}),[e])),u=t.data,d=Number(u?.summary?.visitors??0),f=g(d,`number`,M),p=g(d,`number`,d>=1e3?j:M),m=(0,O.useMemo)(()=>(u?.data??[]).map(e=>Number(e.visitors??0)),[u]);return(0,k.jsx)(`div`,{className:T.root,children:(0,k.jsx)(_,{isLoading:n,isFetching:i,isError:a&&m.length===0,isEmpty:m.length===0,error:oe(o,{retryDescription:r(`We couldn't load your visitors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:l}),empty:{icon:s,description:r(`No visitors in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,k.jsx)(se,{}),children:(0,k.jsxs)(`div`,{className:T.body,children:[(0,k.jsx)(c,{variant:`heading-2xl`,title:f,children:p===f?p:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`span`,{"aria-hidden":`true`,children:p}),(0,k.jsx)(ee,{children:f})]})}),(0,k.jsx)(`div`,{className:T.chart,children:(0,k.jsx)(ne,{data:m,maxWidth:1/0})})]})})})}function D({attributes:e={},setError:t}){return(0,k.jsx)(p,{attributes:e,setError:t,children:(0,k.jsx)(pe,{})})}var O,k,A,j,M,me=t((()=>{h(),l(),ae(),de(),i(),o(),O=e(n(),1),E(),k=a(),A=`day`,j={useMultipliers:!0,decimals:1},M={decimals:0}})),N,P=t((()=>{o(),N={icon:s}})),F,I,L,R,z,B,V,he=t((()=>{F=`jpa/total-visitors`,I=`Total visitors`,L=`Total visitors for the selected period, with the trend over time.`,R={content:`The number of visitors to your site. A returning visitor is counted once per day.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/#visitors`}]},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function ge(){return(0,U.jsx)(D,{attributes:{reportParams:m(!1)}})}function H(e){return(0,U.jsx)(D,{attributes:{reportParams:m(!1,e)}})}function _e(e){return(0,U.jsx)(le,{...e,widgetType:G,renderModule:W,renderComponent:D,attributes:{reportParams:m(!1)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{h(),f(),y(),ce(),ue(),me(),P(),he(),U=a(),u(),W=`storybook/total-visitors`,G=b(V,N),K={title:`Packages/Premium Analytics/Widgets/TotalVisitors`,component:D,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Total visitors" card: the selected period's visitor total as a large figure over an area sparkline of the trend. The total sums each day's visitors, so a returning visitor counts once per day — the card carries that caveat in its info popover. There is no WithComparison story: the widget strips comparison from its request and renders no delta.`}}}},q={render:ge,decorators:[x]},J={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(d(`stats/visits`,`loading`),()=>d(`stats/visits`,null))},Y={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(d(`stats/visits`,`error`),()=>d(`stats/visits`,null))},X={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(d(`stats/visits`,`error-retryable`),()=>d(`stats/visits`,null))},Z={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(d(`stats/visits`,`empty`),()=>d(`stats/visits`,null))},Q={render:e=>(0,U.jsx)(_e,{...e}),args:{...fe},argTypes:{...v}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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