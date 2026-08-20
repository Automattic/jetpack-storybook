import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DyKOxfM8.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{n as o,ui as s}from"./build-module-CDRs4YxF.js";import{Tn as ee,st as te,t as c}from"./src-KiPFRHBP.js";import{J as l,Z as u,at as ne,q as d,tt as f}from"./report-metric-mgfJDJ0k.js";import{n as re}from"./sparkline-mPHQnYyC.js";import{n as p,t as m}from"./src-CsA_y1X9.js";import{Cr as h,Nt as g,Vr as ie,in as ae,x as oe}from"./chart-tooltip-DKfOwesw.js";import{t as se}from"./metric-sparkline-skeleton-DELSsNLW.js";import{t as ce}from"./widget-state-UmEbSe_V.js";import{C as _,D as le,E as ue,S as de,T as v,b as y,t as fe,w as pe,x as b}from"./src-C7fcb0YA.js";var x,S,C,w,T=t((()=>{x=`_root_lau5r_1`,S=`_body_lau5r_9`,C=`_chart_lau5r_21`,w={root:x,body:S,chart:C}}));function E(){let{reportParams:e}=ne(),{primary:t,isLoading:n,isFetching:i,isError:a,error:o,refetch:c}=ae((0,O.useMemo)(()=>ie({...e,stat_fields:`views,visitors`,period:A}),[e])),l=t.data,u=Number(l?.summary?.visitors??0),d=p(u,`number`,M),f=p(u,`number`,u>=1e3?j:M),m=(0,O.useMemo)(()=>(l?.data??[]).map(e=>Number(e.visitors??0)),[l]);return(0,k.jsx)(`div`,{className:w.root,children:(0,k.jsx)(ce,{isLoading:n,isFetching:i,isError:a&&m.length===0,isEmpty:m.length===0,error:oe(o,{retryDescription:r(`We couldn't load your visitors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:c}),empty:{icon:s,description:r(`No visitors in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,k.jsx)(se,{}),children:(0,k.jsxs)(`div`,{className:w.body,children:[(0,k.jsx)(ee,{variant:`heading-2xl`,title:d,children:f===d?f:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`span`,{"aria-hidden":`true`,children:f}),(0,k.jsx)(te,{children:d})]})}),(0,k.jsx)(`div`,{className:w.chart,children:(0,k.jsx)(re,{data:m,maxWidth:1/0})})]})})})}function D({attributes:e={},setError:t}){return(0,k.jsx)(f,{attributes:e,setError:t,children:(0,k.jsx)(E,{})})}var O,k,A,j,M,me=t((()=>{g(),c(),m(),fe(),i(),o(),O=e(n(),1),T(),k=a(),A=`day`,j={useMultipliers:!0,decimals:1},M={decimals:0}})),N,he=t((()=>{o(),N={icon:s}})),P,F,I,L,R,z,B,ge=t((()=>{P=`jpa/total-visitors`,F=`Total visitors`,I=`Total visitors for the selected period, with the trend over time.`,L={content:`The number of visitors to your site. A returning visitor is counted once per day.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/#visitors`}]},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function _e(){return(0,U.jsx)(D,{attributes:{reportParams:h(!1)}})}function V(e){return(0,U.jsx)(D,{attributes:{reportParams:h(!1,e)}})}function H(e){return(0,U.jsx)(v,{...e,widgetType:G,renderModule:W,renderComponent:D,attributes:{reportParams:h(!1)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{g(),d(),ue(),_(),y(),me(),he(),ge(),U=a(),l(),W=`storybook/total-visitors`,G=de(B,N),K={title:`Packages/Premium Analytics/Widgets/TotalVisitors`,component:D,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Total visitors" card: the selected period's visitor total as a large figure over an area sparkline of the trend. The total sums each day's visitors, so a returning visitor counts once per day — the card carries that caveat in its info popover. There is no WithComparison story: the widget strips comparison from its request and renders no delta.`}}}},q={render:_e,decorators:[b]},J={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(u(`stats/visits`,`loading`),()=>u(`stats/visits`,null))},Y={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(u(`stats/visits`,`error`),()=>u(`stats/visits`,null))},X={render:()=>V(`last-12-months`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(u(`stats/visits`,`error-retryable`),()=>u(`stats/visits`,null))},Z={render:()=>V(`last-year`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(u(`stats/visits`,`empty`),()=>u(`stats/visits`,null))},Q={render:e=>(0,U.jsx)(H,{...e}),args:{...pe},argTypes:{...le}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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