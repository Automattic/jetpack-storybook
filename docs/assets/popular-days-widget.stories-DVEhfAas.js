import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-DQe4AOzJ.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{P as o,t as s}from"./date-fns-V6dsVcup.js";import{B as c,Ft as l,I as u}from"./charts-provider-BXWttMH6.js";import{C as d,T as ee,t as te}from"./src-IVwX_Vnu.js";import{f,t as p}from"./src-S3NAzjzZ.js";import{dt as ne,k as re,t as m,vn as h}from"./src-DvzWgCqE.js";import{t as ie}from"./widget-state-B-3KFlZy.js";import{U as ae,i as g}from"./with-story-router-TeMi98u_.js";import{t as oe}from"./metric-sparkline-skeleton-DGO_ybnP.js";import{n as se,r as _,s as v}from"./register-report-mocks-CI2bPEM7.js";import{a as ce,g as le,h as ue,i as y,m as b,n as x,p as de,r as S}from"./with-widget-canvas-ke8j5asA.js";var C,w,fe=e((()=>{C=`_root_1j6if_1`,w={root:C}}));function pe(e){return f(e)}function me(e){let t=d(e.date_start??e.time_interval??e.period);return t?ee(t,T):null}function he(e){let t=e.views??e.value;return typeof t==`number`?t:Number(t??0)||0}function ge(e){let t=Array.from({length:7},()=>({total:0,occurrences:0}));return e.forEach(e=>{let n=me(e);if(!n)return;let r=(o(n)+6)%7;t[r].total+=he(e),t[r].occurrences+=1}),t.map(({total:e,occurrences:t},n)=>({weekday:n,label:pe(n),total:e,occurrences:t,average:t?e/t:0}))}function _e(e){return e.filter(e=>e.occurrences>0&&e.total>0).reduce((e,t)=>!e||t.average>e.average?t:e,void 0)}var T,ve=e((()=>{te(),p(),s(),T=`yyyy-MM-dd`}));function ye(){let{reportParams:e}=c(),{primary:t,isLoading:n,isFetching:r,isError:i,error:a,refetch:o}=ne((0,E.useMemo)(()=>re({...e,stat_fields:O,period:D}),[e])),s=t.data,l=(0,E.useMemo)(()=>ge(s?.data??[]),[s]);return{buckets:l,peak:(0,E.useMemo)(()=>_e(l),[l]),isLoading:n,isFetching:r,isError:i,error:a,refetch:o}}var E,D,O,k=e((()=>{m(),g(),E=t(n(),1),ve(),D=`day`,O=`views,visitors`}));function A(){let{buckets:e,peak:t,isLoading:n,isFetching:i,isError:a,error:o,refetch:s}=ye(),c=(0,M.useMemo)(()=>e.map(e=>e.average),[e]),u=a&&!t;return(0,N.jsx)(`div`,{className:w.root,children:(0,N.jsx)(ie,{isLoading:n,isFetching:i,isError:u,isEmpty:!t,error:u?l(o,{retryDescription:r(`We couldn't load your popular days. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:s}):null,renderLoading:(0,N.jsx)(oe,{withHeadlineCount:!0}),children:(0,N.jsx)(ae,{label:t?.label??``,value:t?.average??0,points:c})})})}function j({attributes:e={},setError:t}){return(0,N.jsx)(u,{attributes:e,setError:t,children:(0,N.jsx)(A,{})})}var M,N,be=e((()=>{g(),i(),M=t(n(),1),fe(),k(),N=a()})),P,F,I,L,R,z,B,V,xe=e((()=>{P=`jpa/popular-days`,F=`jpa/calendar`,I=`Popular days`,L=`The day of the week that draws the most views, with the distribution across the week.`,R={content:`The days of the week when your site received the most views on average.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/learn-insights-about-your-website/`}]},z=`stats`,B=`framed`,V={name:P,icon:F,title:I,description:L,help:R,category:z,presentation:B}}));function Se(){return(0,U.jsx)(j,{attributes:{reportParams:h(!1)}})}function H(e){return(0,U.jsx)(j,{attributes:{reportParams:h(!1,e)}})}function Ce(e){return(0,U.jsx)(b,{...e,widgetType:G,renderModule:W,renderComponent:j,attributes:{reportParams:h(!0)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),se(),ue(),ce(),x(),be(),xe(),U=a(),_(),W=`storybook/popular-days`,G=y(V),K={title:`Packages/Premium Analytics/Widgets/PopularDays`,component:j,tags:[`autodocs`],parameters:{docs:{description:{component:'The "Popular days" card: the busiest day of the week for the selected range, as the weekday name and its mean views, over an area chart of the whole week\'s distribution. Both figures are means per occurrence of that weekday, not totals — a user-selected range rarely spans a whole number of weeks, so totals would let a weekday win on having occurred one extra time. Data comes from `stats/visits` at daily granularity, folded into seven buckets client-side; `stats/insights` also reports weekday views but over a window fixed at ten weeks, so it cannot follow the date picker. There is no WithComparison story — the widget strips comparison from its request and renders no delta, so it would be identical to Default.'}}}},q={render:Se,decorators:[S]},J={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(v(`stats/visits`,`loading`),()=>v(`stats/visits`,null))},Y={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(v(`stats/visits`,`error`),()=>v(`stats/visits`,null))},X={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(v(`stats/visits`,`error-retryable`),()=>v(`stats/visits`,null))},Z={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(v(`stats/visits`,`empty`),()=>v(`stats/visits`,null))},Q={render:e=>(0,U.jsx)(Ce,{...e}),args:{...de},argTypes:{...le}},$=[`Default`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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