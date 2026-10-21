import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-BXPCp--5.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{P as o,t as s}from"./date-fns-CHwAqcMr.js";import{S as c,b as l,t as u}from"./src-BGYQLfcD.js";import{l as ee,t as te}from"./src-B7nZi5Zr.js";import{D as d,ot as f,pn as p,t as m}from"./src-CtqqO_eU.js";import{m as ne,pt as re,v as ie}from"./charts-provider-CK3RXp2S.js";import{t as ae}from"./metric-sparkline-skeleton-B6vh-rno.js";import{n as oe,r as se,s as h}from"./register-report-mocks-CzboNbHM.js";import{t as ce}from"./widget-state-dweyprLp.js";import{K as g,t as _}from"./src-BOXDr76j.js";import{a as le,g as ue,h as de,i as v,m as y,n as b,p as fe,r as x}from"./with-widget-canvas-j2EQpHPQ.js";var S,C,pe=t((()=>{S=`_root_1j6if_1`,C={root:S}}));function me(e){return ee(e)}function he(e){let t=l(e.date_start??e.time_interval??e.period);return t?c(t,w):null}function ge(e){let t=e.views??e.value;return typeof t==`number`?t:Number(t??0)||0}function _e(e){let t=Array.from({length:7},()=>({total:0,occurrences:0}));return e.forEach(e=>{let n=he(e);if(!n)return;let r=(o(n)+6)%7;t[r].total+=ge(e),t[r].occurrences+=1}),t.map(({total:e,occurrences:t},n)=>({weekday:n,label:me(n),total:e,occurrences:t,average:t?e/t:0}))}function ve(e){return e.filter(e=>e.occurrences>0&&e.total>0).reduce((e,t)=>!e||t.average>e.average?t:e,void 0)}var w,ye=t((()=>{u(),te(),s(),w=`yyyy-MM-dd`}));function be(){let{reportParams:e}=ie(),{primary:t,isLoading:n,isFetching:r,isError:i,error:a,refetch:o}=f((0,T.useMemo)(()=>d({...e,stat_fields:D,period:E}),[e])),s=t.data,c=(0,T.useMemo)(()=>_e(s?.data??[]),[s]);return{buckets:c,peak:(0,T.useMemo)(()=>ve(c),[c]),isLoading:n,isFetching:r,isError:i,error:a,refetch:o}}var T,E,D,O=t((()=>{m(),_(),T=e(n(),1),ye(),E=`day`,D=`views,visitors`}));function k(){let{buckets:e,peak:t,isLoading:n,isFetching:i,isError:a,error:o,refetch:s}=be(),c=(0,j.useMemo)(()=>e.map(e=>e.average),[e]),l=a&&!t;return(0,M.jsx)(`div`,{className:C.root,children:(0,M.jsx)(ce,{isLoading:n,isFetching:i,isError:l,isEmpty:!t,error:l?re(o,{retryDescription:r(`We couldn't load your popular days. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:s}):null,renderLoading:(0,M.jsx)(ae,{withHeadlineCount:!0}),children:(0,M.jsx)(g,{label:t?.label??``,value:t?.average??0,points:c})})})}function A({attributes:e={},setError:t}){return(0,M.jsx)(ne,{attributes:e,setError:t,children:(0,M.jsx)(k,{})})}var j,M,N=t((()=>{_(),i(),j=e(n(),1),pe(),O(),M=a()})),P,F,I,L,R,z,B,V,xe=t((()=>{P=`jpa/popular-days`,F=`jpa/calendar`,I=`Popular days`,L=`The day of the week that draws the most views, with the distribution across the week.`,R={content:`The days of the week when your site received the most views on average.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/learn-insights-about-your-website/`}]},z=`stats`,B=`framed`,V={name:P,icon:F,title:I,description:L,help:R,category:z,presentation:B}}));function Se(){return(0,U.jsx)(A,{attributes:{reportParams:p(!1)}})}function H(e){return(0,U.jsx)(A,{attributes:{reportParams:p(!1,e)}})}function Ce(e){return(0,U.jsx)(y,{...e,widgetType:G,renderModule:W,renderComponent:A,attributes:{reportParams:p(!0)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{m(),oe(),de(),le(),b(),N(),xe(),U=a(),se(),W=`storybook/popular-days`,G=v(V),K={title:`Packages/Premium Analytics/Widgets/PopularDays`,component:A,tags:[`autodocs`],parameters:{docs:{description:{component:'The "Popular days" card: the busiest day of the week for the selected range, as the weekday name and its mean views, over an area chart of the whole week\'s distribution. Both figures are means per occurrence of that weekday, not totals — a user-selected range rarely spans a whole number of weeks, so totals would let a weekday win on having occurred one extra time. Data comes from `stats/visits` at daily granularity, folded into seven buckets client-side; `stats/insights` also reports weekday views but over a window fixed at ten weeks, so it cannot follow the date picker. There is no WithComparison story — the widget strips comparison from its request and renders no delta, so it would be identical to Default.'}}}},q={render:Se,decorators:[x]},J={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(h(`stats/visits`,`loading`),()=>h(`stats/visits`,null))},Y={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(h(`stats/visits`,`error`),()=>h(`stats/visits`,null))},X={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(h(`stats/visits`,`error-retryable`),()=>h(`stats/visits`,null))},Z={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(h(`stats/visits`,`empty`),()=>h(`stats/visits`,null))},Q={render:e=>(0,U.jsx)(Ce,{...e}),args:{...fe},argTypes:{...ue}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,K as default};