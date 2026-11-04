import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-sy00sX6O.js";import{t as a}from"./jsx-runtime-CFwixLRt.js";import{P as o,t as s}from"./date-fns-ChiXgC4A.js";import{B as c,I as l,Vt as ee}from"./charts-provider-ARR6XQI-.js";import{C as te,T as u,t as d}from"./src-BDMQoxZq.js";import{m as f,t as ne}from"./src-B1VHSDBi.js";import{dt as re,k as ie,t as p,vn as m}from"./src-CRoMOZVt.js";import{t as ae}from"./widget-state-BXwwUN1D.js";import{G as oe,t as h}from"./src-CYAbiDlj.js";import{t as se}from"./metric-sparkline-skeleton-YTAI5LU-.js";import{n as ce,r as le,s as g}from"./register-report-mocks-AdY-3qvh.js";import{a as ue,c as de,i as _,l as v,n as y,o as fe,r as b,s as pe}from"./with-widget-canvas-Byxvvc4f.js";var x,S,me=e((()=>{x=`_root_1j6if_1`,S={root:x}}));function he(e){return f(e)}function ge(e){let t=te(e.date_start??e.time_interval??e.period);return t?u(t,C):null}function _e(e){let t=e.views??e.value;return typeof t==`number`?t:Number(t??0)||0}function ve(e){let t=Array.from({length:7},()=>({total:0,occurrences:0}));return e.forEach(e=>{let n=ge(e);if(!n)return;let r=(o(n)+6)%7;t[r].total+=_e(e),t[r].occurrences+=1}),t.map(({total:e,occurrences:t},n)=>({weekday:n,label:he(n),total:e,occurrences:t,average:t?e/t:0}))}function ye(e){return e.filter(e=>e.occurrences>0&&e.total>0).reduce((e,t)=>!e||t.average>e.average?t:e,void 0)}var C,be=e((()=>{d(),ne(),s(),C=`yyyy-MM-dd`}));function xe(){let{reportParams:e}=c(),{primary:t,isLoading:n,isFetching:r,isError:i,error:a,refetch:o}=re((0,w.useMemo)(()=>ie({...e,stat_fields:E,period:T}),[e])),s=t.data,l=(0,w.useMemo)(()=>ve(s?.data??[]),[s]);return{buckets:l,peak:(0,w.useMemo)(()=>ye(l),[l]),isLoading:n,isFetching:r,isError:i,error:a,refetch:o}}var w,T,E,D=e((()=>{p(),h(),w=t(n(),1),be(),T=`day`,E=`views,visitors`}));function O(){let{buckets:e,peak:t,isLoading:n,isFetching:i,isError:a,error:o,refetch:s}=xe(),c=(0,A.useMemo)(()=>e.map(e=>e.average),[e]),l=a&&!t;return(0,j.jsx)(`div`,{className:S.root,children:(0,j.jsx)(ae,{isLoading:n,isFetching:i,isError:l,isEmpty:!t,error:l?ee(o,{retryDescription:r(`We couldn't load your popular days. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:s}):null,renderLoading:(0,j.jsx)(se,{withHeadlineCount:!0}),children:(0,j.jsx)(oe,{label:t?.label??``,value:t?.average??0,points:c})})})}function k({attributes:e={},setError:t}){return(0,j.jsx)(l,{attributes:e,setError:t,children:(0,j.jsx)(O,{})})}var A,j,M=e((()=>{h(),i(),A=t(n(),1),me(),D(),j=a()})),N,P,F,I,L,R,z,B,Se=e((()=>{N=`jpa/popular-days`,P=`jpa/calendar`,F=`Popular days`,I=`The day of the week that draws the most views, with the distribution across the week.`,L={content:`The days of the week when your site received the most views on average.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/learn-insights-about-your-website/`}]},R=`stats`,z=`framed`,B={name:N,icon:P,title:F,description:I,help:L,category:R,presentation:z}}));function Ce(){return(0,U.jsx)(k,{attributes:{reportParams:m(!1)}})}function V(e){return(0,U.jsx)(k,{attributes:{reportParams:m(!1,e)}})}function H(e){return(0,U.jsx)(pe,{...e,widgetType:G,renderModule:W,renderComponent:k,attributes:{reportParams:m(!0)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),ce(),de(),ue(),y(),M(),Se(),U=a(),le(),W=`storybook/popular-days`,G=_(B),K={title:`Packages/Premium Analytics/Widgets/PopularDays`,component:k,tags:[`autodocs`],parameters:{docs:{description:{component:'The "Popular days" card: the busiest day of the week for the selected range, as the weekday name and its mean views, over an area chart of the whole week\'s distribution. Both figures are means per occurrence of that weekday, not totals — a user-selected range rarely spans a whole number of weeks, so totals would let a weekday win on having occurred one extra time. Data comes from `stats/visits` at daily granularity, folded into seven buckets client-side; `stats/insights` also reports weekday views but over a window fixed at ten weeks, so it cannot follow the date picker. There is no WithComparison story — the widget strips comparison from its request and renders no delta, so it would be identical to Default.'}}}},q={render:Ce,decorators:[b]},J={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(g(`stats/visits`,`loading`),()=>g(`stats/visits`,null))},Y={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(g(`stats/visits`,`error`),()=>g(`stats/visits`,null))},X={render:()=>V(`last-12-months`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(g(`stats/visits`,`error-retryable`),()=>g(`stats/visits`,null))},Z={render:()=>V(`last-year`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(g(`stats/visits`,`empty`),()=>g(`stats/visits`,null))},Q={render:e=>(0,U.jsx)(H,{...e}),args:{...fe},argTypes:{...v}},$=[`Default`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`WidgetDashboardWithWidget`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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