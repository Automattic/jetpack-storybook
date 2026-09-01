import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DyKOxfM8.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{bl as o,t as s}from"./build-module-CR6EsQjA.js";import{$t as c,F as l,X as ee,nt as te,t as ne}from"./date-fns-C16LGmyW.js";import{b as u,g as d}from"./hooks-CaRU2z5t.js";import{t as re,x as ie}from"./src-CldFJNXL.js";import{A as ae,t as oe}from"./src-43WoDL34.js";import{F as f,Sn as se,Zt as p,t as m}from"./src-Ct2poLoH.js";import{l as ce,t as le}from"./src-B_kqMrEv.js";import{A as ue}from"./chart-tooltip-B9YyNhh4.js";import{t as de}from"./metric-sparkline-skeleton-CosefiXn.js";import{G as fe,K as pe,V as me,Y as h}from"./report-metric-Jbi1D7wY.js";import{t as g}from"./widget-state-Bm2YzOrr.js";import{C as _,D as he,E as ge,S as _e,T as ve,b as ye,t as v,w as be,x as y}from"./src-DtTdAJJ_.js";var b,x,xe=t((()=>{b=`_root_1j6if_1`,x={root:b}}));function Se(e){return ce(e)}function Ce(e){let t=ae(e.date_start??e.time_interval??e.period);if(!t)return;let n=l(t,w,T);return c(n)&&te(n,w)===t?n:void 0}function we(e){let t=e.views??e.value;return typeof t==`number`?t:Number(t??0)||0}function S(e){let t=Array.from({length:7},()=>({total:0,occurrences:0}));return e.forEach(e=>{let n=Ce(e);if(!n)return;let r=(ee(n)+6)%7;t[r].total+=we(e),t[r].occurrences+=1}),t.map(({total:e,occurrences:t},n)=>({weekday:n,label:Se(n),total:e,occurrences:t,average:t?e/t:0}))}function C(e){return e.filter(e=>e.occurrences>0&&e.total>0).reduce((e,t)=>!e||t.average>e.average?t:e,void 0)}var w,T,E=t((()=>{oe(),le(),ne(),w=`yyyy-MM-dd`,T=new Date(2001,0,1)}));function D(){let{reportParams:e}=u(),{primary:t,isLoading:n,isFetching:r,isError:i,error:a,refetch:o}=f((0,O.useMemo)(()=>se({...e,stat_fields:A,period:k}),[e])),s=t.data,c=(0,O.useMemo)(()=>S(s?.data??[]),[s]);return{buckets:c,peak:(0,O.useMemo)(()=>C(c),[c]),isLoading:n,isFetching:r,isError:i,error:a,refetch:o}}var O,k,A,Te=t((()=>{m(),v(),O=e(n(),1),E(),k=`day`,A=`views,visitors`}));function Ee(){let{buckets:e,peak:t,isLoading:n,isFetching:i,isError:a,error:o,refetch:s}=D(),c=(0,M.useMemo)(()=>e.map(e=>e.average),[e]),l=a&&!t;return(0,N.jsx)(`div`,{className:x.root,children:(0,N.jsx)(g,{isLoading:n,isFetching:i,isError:l,isEmpty:!t,error:l?ue(o,{retryDescription:r(`We couldn't load your popular days. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:s}):null,empty:{icon:ie,description:r(`No views in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,N.jsx)(de,{withHeadlineCount:!0}),children:(0,N.jsx)(me,{label:t?.label??``,value:t?.average??0,points:c})})})}function j({attributes:e={},setError:t}){return(0,N.jsx)(d,{attributes:e,setError:t,children:(0,N.jsx)(Ee,{})})}var M,N,De=t((()=>{re(),v(),i(),M=e(n(),1),xe(),Te(),N=a()})),P,Oe=t((()=>{s(),P={icon:o}})),F,I,L,R,z,B,V,ke=t((()=>{F=`jpa/popular-days`,I=`Popular days`,L=`The day of the week that draws the most views, with the distribution across the week.`,R={content:`The days of the week when your site received the most views on average.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/stats/learn-insights-about-your-website/`}]},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function Ae(){return(0,U.jsx)(j,{attributes:{reportParams:p(!1)}})}function H(e){return(0,U.jsx)(j,{attributes:{reportParams:p(!1,e)}})}function je(e){return(0,U.jsx)(ve,{...e,widgetType:G,renderModule:W,renderComponent:j,attributes:{reportParams:p(!0)}})}var U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{m(),fe(),ge(),_(),ye(),De(),Oe(),ke(),U=a(),pe(),W=`storybook/popular-days`,G=_e(V,P),K={title:`Packages/Premium Analytics/Widgets/PopularDays`,component:j,tags:[`autodocs`],parameters:{docs:{description:{component:'The "Popular days" card: the busiest day of the week for the selected range, as the weekday name and its mean views, over an area chart of the whole week\'s distribution. Both figures are means per occurrence of that weekday, not totals — a user-selected range rarely spans a whole number of weeks, so totals would let a weekday win on having occurred one extra time. Data comes from `stats/visits` at daily granularity, folded into seven buckets client-side; `stats/insights` also reports weekday views but over a window fixed at ten weeks, so it cannot follow the date picker. There is no WithComparison story — the widget strips comparison from its request and renders no delta, so it would be identical to Default.'}}}},q={render:Ae,decorators:[y]},J={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(h(`stats/visits`,`loading`),()=>h(`stats/visits`,null))},Y={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(h(`stats/visits`,`error`),()=>h(`stats/visits`,null))},X={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(h(`stats/visits`,`error-retryable`),()=>h(`stats/visits`,null))},Z={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(h(`stats/visits`,`empty`),()=>h(`stats/visits`,null))},Q={render:e=>(0,U.jsx)(je,{...e}),args:{...be},argTypes:{...he}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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