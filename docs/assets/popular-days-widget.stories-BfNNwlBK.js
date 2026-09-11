import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-yGZutq_9.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{t as o,wl as s}from"./build-module-zwSmKorH.js";import{W as c,t as l}from"./date-fns-BSWzdn8-.js";import{C as ee,st as te,y as ne}from"./wp-date-settings-C5iJaIA5.js";import{t as u,x as re}from"./src-DFNM1k7F.js";import{S as ie,b as ae,t as oe}from"./src-CZluB9Zn.js";import{l as se,t as ce}from"./src-BM4_xBwP.js";import{R as d,Tn as le,en as f,i as p}from"./date-filters-panel-Bqg5_A9X.js";import{t as ue}from"./metric-sparkline-skeleton-CIzhYIoj.js";import{J as m,U as h,Z as g,q as _}from"./report-metric-EaBiet9z.js";import{t as de}from"./widget-state-BqH9898D.js";import{C as fe,D as pe,E as me,S as he,T as ge,b as _e,t as v,w as ve,x as y}from"./src-DXGaYeCf.js";var b,x,ye=t((()=>{b=`_root_1j6if_1`,x={root:b}}));function be(e){return se(e)}function xe(e){let t=ae(e.date_start??e.time_interval??e.period);return t?ie(t,C):null}function Se(e){let t=e.views??e.value;return typeof t==`number`?t:Number(t??0)||0}function Ce(e){let t=Array.from({length:7},()=>({total:0,occurrences:0}));return e.forEach(e=>{let n=xe(e);if(!n)return;let r=(c(n)+6)%7;t[r].total+=Se(e),t[r].occurrences+=1}),t.map(({total:e,occurrences:t},n)=>({weekday:n,label:be(n),total:e,occurrences:t,average:t?e/t:0}))}function S(e){return e.filter(e=>e.occurrences>0&&e.total>0).reduce((e,t)=>!e||t.average>e.average?t:e,void 0)}var C,w=t((()=>{oe(),ce(),l(),C=`yyyy-MM-dd`}));function T(){let{reportParams:e}=ee(),{primary:t,isLoading:n,isFetching:r,isError:i,error:a,refetch:o}=d((0,E.useMemo)(()=>le({...e,stat_fields:O,period:D}),[e])),s=t.data,c=(0,E.useMemo)(()=>Ce(s?.data??[]),[s]);return{buckets:c,peak:(0,E.useMemo)(()=>S(c),[c]),isLoading:n,isFetching:r,isError:i,error:a,refetch:o}}var E,D,O,k=t((()=>{p(),v(),E=e(n(),1),w(),D=`day`,O=`views,visitors`}));function A(){let{buckets:e,peak:t,isLoading:n,isFetching:i,isError:a,error:o,refetch:s}=T(),c=(0,M.useMemo)(()=>e.map(e=>e.average),[e]),l=a&&!t;return(0,N.jsx)(`div`,{className:x.root,children:(0,N.jsx)(de,{isLoading:n,isFetching:i,isError:l,isEmpty:!t,error:l?te(o,{retryDescription:r(`We couldn't load your popular days. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:s}):null,empty:{icon:re,description:r(`No views in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,N.jsx)(ue,{withHeadlineCount:!0}),children:(0,N.jsx)(h,{label:t?.label??``,value:t?.average??0,points:c})})})}function j({attributes:e={},setError:t}){return(0,N.jsx)(ne,{attributes:e,setError:t,children:(0,N.jsx)(A,{})})}var M,N,we=t((()=>{u(),v(),i(),M=e(n(),1),ye(),k(),N=a()})),P,Te=t((()=>{o(),P={icon:s}})),F,I,L,R,z,B,V,Ee=t((()=>{F=`jpa/popular-days`,I=`Popular days`,L=`The day of the week that draws the most views, with the distribution across the week.`,R={content:`The days of the week when your site received the most views on average.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/learn-insights-about-your-website/`}]},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function De(){return(0,U.jsx)(j,{attributes:{reportParams:f(!1)}})}function H(e){return(0,U.jsx)(j,{attributes:{reportParams:f(!1,e)}})}function Oe(e){return(0,U.jsx)(ge,{...e,widgetType:G,renderModule:W,renderComponent:j,attributes:{reportParams:f(!0)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{p(),_(),me(),fe(),_e(),we(),Te(),Ee(),U=a(),m(),W=`storybook/popular-days`,G=he(V,P),K={title:`Packages/Premium Analytics/Widgets/PopularDays`,component:j,tags:[`autodocs`],parameters:{docs:{description:{component:'The "Popular days" card: the busiest day of the week for the selected range, as the weekday name and its mean views, over an area chart of the whole week\'s distribution. Both figures are means per occurrence of that weekday, not totals — a user-selected range rarely spans a whole number of weeks, so totals would let a weekday win on having occurred one extra time. Data comes from `stats/visits` at daily granularity, folded into seven buckets client-side; `stats/insights` also reports weekday views but over a window fixed at ten weeks, so it cannot follow the date picker. There is no WithComparison story — the widget strips comparison from its request and renders no delta, so it would be identical to Default.'}}}},q={render:De,decorators:[y]},J={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(g(`stats/visits`,`loading`),()=>g(`stats/visits`,null))},Y={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(g(`stats/visits`,`error`),()=>g(`stats/visits`,null))},X={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(g(`stats/visits`,`error-retryable`),()=>g(`stats/visits`,null))},Z={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(g(`stats/visits`,`empty`),()=>g(`stats/visits`,null))},Q={render:e=>(0,U.jsx)(Oe,{...e}),args:{...ve},argTypes:{...pe}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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