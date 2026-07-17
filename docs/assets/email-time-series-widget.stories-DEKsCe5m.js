import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{Zt as o,n as s}from"./build-module-DmVuor49.js";import{a as ee}from"./hooks-CUD7_adF.js";import{A as c,t as l}from"./src-B3le4dug.js";import{$n as u,ar as te,ft as ne,pt as re,ut as d}from"./chart-tooltip-eabjOj5b.js";import{n as f,t as p}from"./with-chart-theme-BDoEP6xc.js";import{t as m}from"./comparative-line-chart-Cs4De861.js";import{C as h,N as g,S as _,T as v,k as ie}from"./report-metric-CpNiem7H.js";import{a as ae}from"./report-records-table-49D0m0TE.js";import{t as oe}from"./widget-state-zXR6zt8m.js";import{C as se,S as ce,T as le,b as ue,t as de,w as fe,x as y}from"./src-CBWigdaH.js";import{n as b,t as x}from"./src-P5D_NMZM.js";var S,C,w,pe=e((()=>{S=`_root_gxrb3_3`,C=`_chart_gxrb3_12`,w={root:S,chart:C}}));function T(e){return t(e===`clicks`?`Total clicks`:`Total opens`,`jetpack-premium-analytics`)}function E(e){let t=typeof e==`number`?e:Number.parseInt(e??``,10);return Number.isInteger(t)&&t>0?t:0}function me({metric:e,granularity:n}){let{reportParams:r}=g(),a=E(r.post_id),o=a>0,s=re(a,r,{enabled:o&&e===`opens`}),l=ne(a,r,{enabled:o&&e===`clicks`}),u=e===`clicks`?l:s,d=u.primary.data,f=A[e],p=(0,i.useMemo)(()=>{if(d)return n===`day`?d:te(d,n,e=>{let t=Number(e[f]??0);return{value:t,[f]:t}})},[d,n,f]),h=(0,i.useMemo)(()=>p?ae({primary:p,metrics:[{key:f,label:T(e)}]}):[],[p,f,e]),_=ee(h),v=(p?.data?.length??0)>0;return(0,O.jsx)(`div`,{className:w.root,children:(0,O.jsx)(oe,{isLoading:u.isLoading,isFetching:u.isFetching,isError:u.isError,isEmpty:!o||!v,error:{description:t(`We couldn't load this email's timeline. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:u.refetch}]},empty:{icon:c,description:t(o?`No activity for this email in this period.`:`Open an email report to see its timeline here.`,`jetpack-premium-analytics`)},children:(0,O.jsx)(m,{className:w.chart,series:h,styles:_,dataFormat:k})})})}function D({attributes:e={}}){return(0,O.jsx)(ie,{attributes:e,children:(0,O.jsx)(me,{metric:e.metric??`opens`,granularity:e.granularity??`day`})})}var O,k,A,j=e((()=>{d(),l(),de(),a(),n(),pe(),O=r(),k={type:`number`,options:{useMultipliers:!0,decimals:0}},A={opens:`opens_count`,clicks:`clicks_count`}})),M,N=e((()=>{n(),s(),x(),M={name:`jpa/email-time-series`,title:t(`Email performance`,`jetpack-premium-analytics`),icon:o,help:{content:t(`How a single email performed over time: opens or clicks per day since it was sent, following the dashboard date range. Weekly and monthly grouping aggregate the daily buckets.`,`jetpack-premium-analytics`)},attributes:[{id:`metric`,label:t(`Metric`,`jetpack-premium-analytics`),type:`text`,Edit:b,elements:[{label:t(`Opens`,`jetpack-premium-analytics`),value:`opens`},{label:t(`Clicks`,`jetpack-premium-analytics`),value:`clicks`}]},{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics`),type:`text`,Edit:b,elements:[{label:t(`By days`,`jetpack-premium-analytics`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics`),value:`month`}],relevance:`high`}],example:{attributes:{metric:`opens`,granularity:`day`}}}}));function P(e){return M.attributes.find(t=>t.id===e)?.elements?.map(e=>e.value)??[]}function F({withComparison:e,metric:t,granularity:n}){return(0,R.jsx)(D,{attributes:{reportParams:{...u(e),post_id:B},metric:t,granularity:n}})}function I(e){return(0,R.jsx)(D,{attributes:{reportParams:{...u(!1),post_id:e},metric:`opens`,granularity:`day`}})}function L({withComparison:e,metric:t,granularity:n,...r}){return(0,R.jsx)(se,{...r,widgetType:{...M,presentation:`framed`},renderModule:z,renderComponent:D,attributes:{reportParams:{...u(e),post_id:B},metric:t,granularity:n}})}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),_(),p(),fe(),ue(),j(),N(),R=r(),h(),z=`storybook/email-time-series`,B=1234,V=P(`metric`),H=P(`granularity`),U={title:`Packages/Premium Analytics/Widgets/EmailTimeSeries`,component:D,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},metric:{control:`select`,options:V},granularity:{control:`select`,options:H}},parameters:{docs:{description:{component:"The \"Email performance\" widget. Draws a single sent email's opens or clicks per day as a line chart, spanning the dashboard date range — the chart section of the legacy email detail page. The `granularity` attribute (`relevance: 'high'`) is exposed as a control by the widget host; weekly grouping aggregates the daily buckets client-side because the endpoint only reports hourly/daily. Scoped to one email via a mocked `reportParams.post_id`. The endpoint has no comparison period, so the chart stays a single line even when the date picker injects comparison params."}}},decorators:[f]},W={render:F,args:{withComparison:!1,metric:`opens`,granularity:`day`},decorators:[y]},G={render:F,args:{withComparison:!1,metric:`clicks`,granularity:`day`},decorators:[y]},K={render:F,args:{withComparison:!1,metric:`opens`,granularity:`week`},decorators:[y]},q={render:F,args:{withComparison:!0,metric:`opens`,granularity:`day`},decorators:[y]},J={render:()=>I(5701),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(v(`stats/opens/emails`,`loading`),()=>v(`stats/opens/emails`,null))},Y={render:()=>I(5702),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(v(`stats/opens/emails`,`error`),()=>v(`stats/opens/emails`,null))},X={render:()=>I(5703),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(v(`stats/opens/emails`,`empty`),()=>v(`stats/opens/emails`,null))},Z={render:()=>(0,R.jsx)(D,{attributes:{reportParams:u(!1),metric:`opens`}}),decorators:[y]},Q={render:e=>(0,R.jsx)(L,{...e}),args:{...ce,withComparison:!1,metric:`opens`,granularity:`day`},argTypes:{...le,withComparison:{control:`boolean`},metric:{control:`select`,options:V},granularity:{control:`select`,options:H}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: renderEmailTimeSeries,
  args: {
    withComparison: false,
    metric: 'opens',
    granularity: 'day'
  },
  decorators: [withWidgetCanvas]
}`,...W.parameters?.docs?.source},description:{story:`Default populated state — the selected email's opens per day.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderEmailTimeSeries,
  args: {
    withComparison: false,
    metric: 'clicks',
    granularity: 'day'
  },
  decorators: [withWidgetCanvas]
}`,...G.parameters?.docs?.source},description:{story:`The clicks timeline used by the fixed Email clicks composition.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderEmailTimeSeries,
  args: {
    withComparison: false,
    metric: 'opens',
    granularity: 'week'
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`Weekly grouping: the daily buckets aggregate client-side into ISO weeks.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderEmailTimeSeries,
  args: {
    withComparison: true,
    metric: 'opens',
    granularity: 'day'
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:"Comparison `reportParams` from the date picker. The timeline endpoint returns\nno comparison period, so the chart still draws a single line.",...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderEmailTimeSeriesForState(5701),
  // Off the shared autodocs page — path-keyed override; see setReportMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/opens/emails', 'loading');
    return () => setReportMockState('stats/opens/emails', null);
  }
}`,...J.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderEmailTimeSeriesForState(5702),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/opens/emails', 'error');
    return () => setReportMockState('stats/opens/emails', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderEmailTimeSeriesForState(5703),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/opens/emails', 'empty');
    return () => setReportMockState('stats/opens/emails', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`Resolved with no buckets: the widget shows its empty state.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <EmailTimeSeriesRender attributes={{
    reportParams: getDefaultQueryParams(false),
    metric: 'opens'
  }} />,
  decorators: [withWidgetCanvas]
}`,...Z.parameters?.docs?.source},description:{story:'No email selected: `reportParams.post_id` is unset, so no request is made and\nthe empty state prompts to open an email report instead of "no activity".',...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <EmailTimeSeriesDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    withComparison: false,
    metric: 'opens',
    granularity: 'day'
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean'
    },
    metric: {
      control: 'select',
      options: METRIC_OPTIONS
    },
    granularity: {
      control: 'select',
      options: GRANULARITY_OPTIONS
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`Clicks`,`ByWeeks`,`WithComparison`,`Loading`,`Error`,`Empty`,`NoEmailSelected`,`WidgetDashboardWithWidget`]}))();export{K as ByWeeks,G as Clicks,W as Default,X as Empty,Y as Error,J as Loading,Z as NoEmailSelected,Q as WidgetDashboardWithWidget,q as WithComparison,$ as __namedExportsOrder,U as default};