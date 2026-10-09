import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{X as o,t as s}from"./date-fns-I6jayRk5.js";import{S as c,b as l,t as ee}from"./src-rrY7vAoW.js";import{l as te,t as ne}from"./src-CroLlUt4.js";import{$ as re,Mn as u,S as d,t as f}from"./src-DQYt8jCH.js";import{_ as ie,dt as ae,x as oe}from"./charts-provider-THvfZibh.js";import{t as p}from"./metric-sparkline-skeleton-CsNUyX5s.js";import{n as m,r as h,s as g}from"./register-report-mocks-CKRy3LZg.js";import{t as se}from"./widget-state-CADyyZl5.js";import{k as ce}from"./components-Bh7_pEK4.js";import{t as _}from"./src-C7ZjB0TJ.js";import{a as le,g as ue,h as de,i as v,m as y,n as fe,p as pe,r as b}from"./with-widget-canvas-Cr9xwJOJ.js";var x,S,me=t((()=>{x=`_root_1j6if_1`,S={root:x}}));function he(e){return te(e)}function ge(e){let t=l(e.date_start??e.time_interval??e.period);return t?c(t,C):null}function _e(e){let t=e.views??e.value;return typeof t==`number`?t:Number(t??0)||0}function ve(e){let t=Array.from({length:7},()=>({total:0,occurrences:0}));return e.forEach(e=>{let n=ge(e);if(!n)return;let r=(o(n)+6)%7;t[r].total+=_e(e),t[r].occurrences+=1}),t.map(({total:e,occurrences:t},n)=>({weekday:n,label:he(n),total:e,occurrences:t,average:t?e/t:0}))}function ye(e){return e.filter(e=>e.occurrences>0&&e.total>0).reduce((e,t)=>!e||t.average>e.average?t:e,void 0)}var C,be=t((()=>{ee(),ne(),s(),C=`yyyy-MM-dd`}));function xe(){let{reportParams:e}=oe(),{primary:t,isLoading:n,isFetching:r,isError:i,error:a,refetch:o}=re((0,w.useMemo)(()=>d({...e,stat_fields:E,period:T}),[e])),s=t.data,c=(0,w.useMemo)(()=>ve(s?.data??[]),[s]);return{buckets:c,peak:(0,w.useMemo)(()=>ye(c),[c]),isLoading:n,isFetching:r,isError:i,error:a,refetch:o}}var w,T,E,D=t((()=>{f(),_(),w=e(n(),1),be(),T=`day`,E=`views,visitors`}));function O(){let{buckets:e,peak:t,isLoading:n,isFetching:i,isError:a,error:o,refetch:s}=xe(),c=(0,A.useMemo)(()=>e.map(e=>e.average),[e]),l=a&&!t;return(0,j.jsx)(`div`,{className:S.root,children:(0,j.jsx)(se,{isLoading:n,isFetching:i,isError:l,isEmpty:!t,error:l?ae(o,{retryDescription:r(`We couldn't load your popular days. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:s}):null,renderLoading:(0,j.jsx)(p,{withHeadlineCount:!0}),children:(0,j.jsx)(ce,{label:t?.label??``,value:t?.average??0,points:c})})})}function k({attributes:e={},setError:t}){return(0,j.jsx)(ie,{attributes:e,setError:t,children:(0,j.jsx)(O,{})})}var A,j,M=t((()=>{_(),i(),A=e(n(),1),me(),D(),j=a()})),N,Se=t((()=>{N={}})),P,F,I,L,R,z,B,V,Ce=t((()=>{P=`jpa/popular-days`,F=`jpa/calendar`,I=`Popular days`,L=`The day of the week that draws the most views, with the distribution across the week.`,R={content:`The days of the week when your site received the most views on average.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/learn-insights-about-your-website/`}]},z=`stats`,B=`framed`,V={name:P,icon:F,title:I,description:L,help:R,category:z,presentation:B}}));function we(){return(0,U.jsx)(k,{attributes:{reportParams:u(!1)}})}function H(e){return(0,U.jsx)(k,{attributes:{reportParams:u(!1,e)}})}function Te(e){return(0,U.jsx)(y,{...e,widgetType:G,renderModule:W,renderComponent:k,attributes:{reportParams:u(!0)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{f(),m(),de(),le(),fe(),M(),Se(),Ce(),U=a(),h(),W=`storybook/popular-days`,G=v(V,N),K={title:`Packages/Premium Analytics/Widgets/PopularDays`,component:k,tags:[`autodocs`],parameters:{docs:{description:{component:'The "Popular days" card: the busiest day of the week for the selected range, as the weekday name and its mean views, over an area chart of the whole week\'s distribution. Both figures are means per occurrence of that weekday, not totals — a user-selected range rarely spans a whole number of weeks, so totals would let a weekday win on having occurred one extra time. Data comes from `stats/visits` at daily granularity, folded into seven buckets client-side; `stats/insights` also reports weekday views but over a window fixed at ten weeks, so it cannot follow the date picker. There is no WithComparison story — the widget strips comparison from its request and renders no delta, so it would be identical to Default.'}}}},q={render:we,decorators:[b]},J={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(g(`stats/visits`,`loading`),()=>g(`stats/visits`,null))},Y={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(g(`stats/visits`,`error`),()=>g(`stats/visits`,null))},X={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(g(`stats/visits`,`error-retryable`),()=>g(`stats/visits`,null))},Z={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(g(`stats/visits`,`empty`),()=>g(`stats/visits`,null))},Q={render:e=>(0,U.jsx)(Te,{...e}),args:{...pe},argTypes:{...ue}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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