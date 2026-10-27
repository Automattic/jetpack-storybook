import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-DQe4AOzJ.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{P as o,t as s}from"./date-fns-V6dsVcup.js";import{F as c,Mt as ee,z as l}from"./charts-provider-CXD9czsp.js";import{S as te,b as ne,t as u}from"./src-DFqe9oto.js";import{l as d,t as f}from"./src-B296hTeo.js";import{ct as re,hn as p,k as ie,t as m}from"./src-BEwaewMJ.js";import{t as ae}from"./widget-state-BHtIizq9.js";import{L as oe,i as h}from"./with-story-router-DxdHc1hO.js";import{t as se}from"./metric-sparkline-skeleton-PRcvatnq.js";import{n as ce,r as g,s as _}from"./register-report-mocks-D47Rougd.js";import{a as le,g as ue,h as de,i as v,m as y,n as b,p as fe,r as x}from"./with-widget-canvas-DLx8XNU3.js";var S,C,pe=e((()=>{S=`_root_1j6if_1`,C={root:S}}));function me(e){return d(e)}function he(e){let t=ne(e.date_start??e.time_interval??e.period);return t?te(t,w):null}function ge(e){let t=e.views??e.value;return typeof t==`number`?t:Number(t??0)||0}function _e(e){let t=Array.from({length:7},()=>({total:0,occurrences:0}));return e.forEach(e=>{let n=he(e);if(!n)return;let r=(o(n)+6)%7;t[r].total+=ge(e),t[r].occurrences+=1}),t.map(({total:e,occurrences:t},n)=>({weekday:n,label:me(n),total:e,occurrences:t,average:t?e/t:0}))}function ve(e){return e.filter(e=>e.occurrences>0&&e.total>0).reduce((e,t)=>!e||t.average>e.average?t:e,void 0)}var w,ye=e((()=>{u(),f(),s(),w=`yyyy-MM-dd`}));function be(){let{reportParams:e}=l(),{primary:t,isLoading:n,isFetching:r,isError:i,error:a,refetch:o}=re((0,T.useMemo)(()=>ie({...e,stat_fields:D,period:E}),[e])),s=t.data,c=(0,T.useMemo)(()=>_e(s?.data??[]),[s]);return{buckets:c,peak:(0,T.useMemo)(()=>ve(c),[c]),isLoading:n,isFetching:r,isError:i,error:a,refetch:o}}var T,E,D,O=e((()=>{m(),h(),T=t(n(),1),ye(),E=`day`,D=`views,visitors`}));function k(){let{buckets:e,peak:t,isLoading:n,isFetching:i,isError:a,error:o,refetch:s}=be(),c=(0,j.useMemo)(()=>e.map(e=>e.average),[e]),l=a&&!t;return(0,M.jsx)(`div`,{className:C.root,children:(0,M.jsx)(ae,{isLoading:n,isFetching:i,isError:l,isEmpty:!t,error:l?ee(o,{retryDescription:r(`We couldn't load your popular days. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:s}):null,renderLoading:(0,M.jsx)(se,{withHeadlineCount:!0}),children:(0,M.jsx)(oe,{label:t?.label??``,value:t?.average??0,points:c})})})}function A({attributes:e={},setError:t}){return(0,M.jsx)(c,{attributes:e,setError:t,children:(0,M.jsx)(k,{})})}var j,M,N=e((()=>{h(),i(),j=t(n(),1),pe(),O(),M=a()})),P,F,I,L,R,z,B,V,xe=e((()=>{P=`jpa/popular-days`,F=`jpa/calendar`,I=`Popular days`,L=`The day of the week that draws the most views, with the distribution across the week.`,R={content:`The days of the week when your site received the most views on average.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/learn-insights-about-your-website/`}]},z=`stats`,B=`framed`,V={name:P,icon:F,title:I,description:L,help:R,category:z,presentation:B}}));function Se(){return(0,U.jsx)(A,{attributes:{reportParams:p(!1)}})}function H(e){return(0,U.jsx)(A,{attributes:{reportParams:p(!1,e)}})}function Ce(e){return(0,U.jsx)(y,{...e,widgetType:G,renderModule:W,renderComponent:A,attributes:{reportParams:p(!0)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),ce(),de(),le(),b(),N(),xe(),U=a(),g(),W=`storybook/popular-days`,G=v(V),K={title:`Packages/Premium Analytics/Widgets/PopularDays`,component:A,tags:[`autodocs`],parameters:{docs:{description:{component:'The "Popular days" card: the busiest day of the week for the selected range, as the weekday name and its mean views, over an area chart of the whole week\'s distribution. Both figures are means per occurrence of that weekday, not totals — a user-selected range rarely spans a whole number of weeks, so totals would let a weekday win on having occurred one extra time. Data comes from `stats/visits` at daily granularity, folded into seven buckets client-side; `stats/insights` also reports weekday views but over a window fixed at ten weeks, so it cannot follow the date picker. There is no WithComparison story — the widget strips comparison from its request and renders no delta, so it would be identical to Default.'}}}},q={render:Se,decorators:[x]},J={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(_(`stats/visits`,`loading`),()=>_(`stats/visits`,null))},Y={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(_(`stats/visits`,`error`),()=>_(`stats/visits`,null))},X={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(_(`stats/visits`,`error-retryable`),()=>_(`stats/visits`,null))},Z={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(_(`stats/visits`,`empty`),()=>_(`stats/visits`,null))},Q={render:e=>(0,U.jsx)(Ce,{...e}),args:{...fe},argTypes:{...ue}},$=[`Default`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderPopularDays,
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`Default state — the peak weekday over the week's distribution.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderPopularDaysOnPreset('last-90-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/visits', 'loading');
    return () => setReportMockState('stats/visits', null);
  }
}`,...J.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderPopularDaysOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/visits', 'error');
    return () => setReportMockState('stats/visits', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`The fetch failed with a permission-gated 403: neutral copy and no Retry
action, since retrying cannot clear a permission gate.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderPopularDaysOnPreset('last-12-months'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/visits', 'error-retryable');
    return () => setReportMockState('stats/visits', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed in a way that can heal — the proxy's \`no_connection\` 403: the
retryable copy with a Retry action, which re-runs the query (still mocked as
failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  // Avoid presenting the same date range as ErrorRetryable in most years.
  render: () => renderPopularDaysOnPreset('last-year'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/visits', 'empty');
    return () => setReportMockState('stats/visits', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no buckets: the widget shows its empty state.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <PopularDaysDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...Q.parameters?.docs?.source}}}}))();export{q as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,K as default};