import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DyKOxfM8.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{n as o,ui as s}from"./build-module-CDRs4YxF.js";import{Tn as ee,st as te,t as c}from"./src-rMJfBqHP.js";import{b as l,g as u}from"./hooks-csw1yzhh.js";import{n as ne}from"./sparkline-GyEE2GWE.js";import{O as re,mn as ie,qt as d,t as f}from"./src-DPAsbAPk.js";import{n as p,t as m}from"./src--Yi6TqHI.js";import{T as ae}from"./chart-tooltip-tvDs7kYz.js";import{t as oe}from"./metric-sparkline-skeleton-DIVdzo7v.js";import{K as h,X as g,q as se}from"./report-metric-4nQdJxyx.js";import{t as ce}from"./widget-state-C3zpjw_k.js";import{C as _,D as le,E as v,S as y,T as b,b as ue,t as de,w as fe,x}from"./src-DnQmivfN.js";var S,C,w,T,pe=t((()=>{S=`_root_lau5r_1`,C=`_body_lau5r_9`,w=`_chart_lau5r_21`,T={root:S,body:C,chart:w}}));function me(){let{reportParams:e}=l(),{primary:t,isLoading:n,isFetching:i,isError:a,error:o,refetch:c}=re((0,D.useMemo)(()=>ie({...e,stat_fields:`views,visitors`,period:k}),[e])),u=t.data,d=Number(u?.summary?.visitors??0),f=p(d,`number`,j),m=p(d,`number`,d>=1e3?A:j),h=(0,D.useMemo)(()=>(u?.data??[]).map(e=>Number(e.visitors??0)),[u]);return(0,O.jsx)(`div`,{className:T.root,children:(0,O.jsx)(ce,{isLoading:n,isFetching:i,isError:a&&h.length===0,isEmpty:h.length===0,error:ae(o,{retryDescription:r(`We couldn't load your visitors. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:c}),empty:{icon:s,description:r(`No visitors in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,O.jsx)(oe,{}),children:(0,O.jsxs)(`div`,{className:T.body,children:[(0,O.jsx)(ee,{variant:`heading-2xl`,title:f,children:m===f?m:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`span`,{"aria-hidden":`true`,children:m}),(0,O.jsx)(te,{children:f})]})}),(0,O.jsx)(`div`,{className:T.chart,children:(0,O.jsx)(ne,{data:h,maxWidth:1/0})})]})})})}function E({attributes:e={},setError:t}){return(0,O.jsx)(u,{attributes:e,setError:t,children:(0,O.jsx)(me,{})})}var D,O,k,A,j,he=t((()=>{f(),c(),m(),de(),i(),o(),D=e(n(),1),pe(),O=a(),k=`day`,A={useMultipliers:!0,decimals:1},j={decimals:0}})),M,N=t((()=>{o(),M={icon:s}})),P,F,I,L,R,z,B,ge=t((()=>{P=`jpa/total-visitors`,F=`Total visitors`,I=`Total visitors for the selected period, with the trend over time.`,L={content:`The number of visitors to your site. A returning visitor is counted once per day.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/#visitors`}]},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function _e(){return(0,U.jsx)(E,{attributes:{reportParams:d(!1)}})}function V(e){return(0,U.jsx)(E,{attributes:{reportParams:d(!1,e)}})}function H(e){return(0,U.jsx)(b,{...e,widgetType:G,renderModule:W,renderComponent:E,attributes:{reportParams:d(!1)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{f(),h(),v(),_(),ue(),he(),N(),ge(),U=a(),se(),W=`storybook/total-visitors`,G=y(B,M),K={title:`Packages/Premium Analytics/Widgets/TotalVisitors`,component:E,tags:[`autodocs`],parameters:{docs:{description:{component:`The "Total visitors" card: the selected period's visitor total as a large figure over an area sparkline of the trend. The total sums each day's visitors, so a returning visitor counts once per day — the card carries that caveat in its info popover. There is no WithComparison story: the widget strips comparison from its request and renders no delta.`}}}},q={render:_e,decorators:[x]},J={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(g(`stats/visits`,`loading`),()=>g(`stats/visits`,null))},Y={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(g(`stats/visits`,`error`),()=>g(`stats/visits`,null))},X={render:()=>V(`last-12-months`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(g(`stats/visits`,`error-retryable`),()=>g(`stats/visits`,null))},Z={render:()=>V(`last-year`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(g(`stats/visits`,`empty`),()=>g(`stats/visits`,null))},Q={render:e=>(0,U.jsx)(H,{...e}),args:{...fe},argTypes:{...le}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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