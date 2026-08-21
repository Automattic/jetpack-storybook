import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{js as o,n as s}from"./build-module-CDRs4YxF.js";import{$ as c,G as l,K as u,Y as d,rt as ee}from"./report-metric-eqkdVAO6.js";import{M as te,t as f}from"./src-BKLK-O8P.js";import{$t as ne,hn as re,i as ie,qt as p,r as ae,t as m}from"./src-CK8duJl6.js";import{n as h,t as g}from"./with-chart-theme-CmYUg3jk.js";import{a as oe,o as se}from"./chart-tooltip-4eI9fOJc.js";import{r as ce,t as le}from"./metric-tabs-chart-skeleton-CprouJ_G.js";import{t as ue}from"./widget-state-Cmw63AzH.js";import{a as de}from"./report-records-table-B49TLLce.js";import{C as fe,D as pe,E as me,S as he,T as ge,b as _e,t as _,w as v,x as y}from"./src-qPkjkupB.js";var b,x,ve=e((()=>{b=`_root_1p0hj_1`,x={root:b}}));function S(e){return t(e===`clicks`?`Total clicks`:`Total opens`,`jetpack-premium-analytics-pkg`)}function ye({metric:e,granularity:n,chartType:r}){let{reportParams:a}=ee(),o=re(a.post_id),s=o>0,c=ie(o,a,{enabled:s&&e===`opens`}),l=ae(o,a,{enabled:s&&e===`clicks`}),u=e===`clicks`?l:c,d=(0,i.useCallback)(()=>{u.refetch()},[u]),f=u.data,p=E[e],m=(0,i.useMemo)(()=>{if(f)return n===`day`?f:ne(f,n,e=>{let t=Number(e[p]??0);return{value:t,[p]:t}})},[f,n,p]),h=(0,i.useMemo)(()=>{let t=m?de({primary:m,metrics:[{key:p,label:S(e)}]})[0]?.data??[]:[];return[{key:p,label:S(e),value:t.reduce((e,t)=>e+t.value,0),current:t}]},[m,p,e]),g=(m?.data?.length??0)>0;return(0,w.jsx)(`div`,{className:x.root,children:(0,w.jsx)(ue,{isLoading:u.isLoading,isFetching:u.isFetching,isError:u.isError,isEmpty:!s||!g,error:{description:t(`We couldn't load this email's timeline. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:d}]},empty:{icon:te,description:t(s?`No activity for this email in this period.`:`Open an email report to see its timeline here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,w.jsx)(le,{}),children:(0,w.jsx)(ce,{metrics:h,dataFormat:T,chartType:r})})})}function C({attributes:e={}}){return(0,w.jsx)(c,{attributes:e,children:(0,w.jsx)(ye,{metric:e.metric??`opens`,granularity:e.granularity??`day`,chartType:e.chartType===`bar`?`bar`:`line`})})}var w,T,E,D=e((()=>{m(),f(),_(),a(),n(),ve(),w=r(),T={type:`number`,options:{useMultipliers:!0,decimals:0}},E={opens:`opens_count`,clicks:`clicks_count`}})),O,be=e((()=>{s(),_(),O={icon:o,attributes:[se([`day`,`week`,`month`]),oe()],example:{attributes:{metric:`opens`,granularity:`day`,chartType:`line`}}}})),k,A,j,M,N,P,F,xe=e((()=>{k=`jpa/email-time-series`,A=`Email performance`,j=`A single email's opens or clicks over time since it was sent.`,M={content:`How a single email performed over time: opens or clicks per day since it was sent, following the dashboard date range. Weekly and monthly grouping aggregate the daily buckets.`},N=`stats`,P=`framed`,F={name:k,title:A,description:j,help:M,category:N,presentation:P}}));function Se(e){return O.attributes.find(t=>t.id===e)?.elements?.map(e=>e.value)??[]}function I({metric:e,granularity:t,chartType:n},r=!1){return{reportParams:{...p(r),post_id:V},metric:e,granularity:t,chartType:n}}function L(e){return(0,z.jsx)(C,{attributes:I(e)})}function R(e){return(0,z.jsx)(C,{attributes:{reportParams:{...p(!1),post_id:e},metric:`opens`,granularity:`day`}})}function Ce({metric:e,granularity:t,chartType:n,...r}){return(0,z.jsx)(ge,{...r,widgetType:he(F,O),renderModule:B,renderComponent:C,attributes:I({metric:e,granularity:t,chartType:n},!0)})}var z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),l(),g(),me(),fe(),_e(),D(),be(),xe(),z=r(),u(),B=`storybook/email-time-series`,V=1234,H=[`opens`,`clicks`],U=Se(`granularity`),W={title:`Packages/Premium Analytics/Widgets/EmailTimeSeries`,component:C,tags:[`autodocs`],argTypes:{metric:{control:`select`,options:H},granularity:{control:`select`,options:U},chartType:{control:`radio`,options:[`line`,`bar`]}},parameters:{docs:{description:{component:"The \"Email performance\" widget. Draws a single sent email's opens or clicks per day as a line chart, spanning the dashboard date range — the chart section of the legacy email detail page. The `granularity` attribute (`relevance: 'high'`) is exposed as a control by the widget host; weekly grouping aggregates the daily buckets client-side because the endpoint only reports hourly/daily. Scoped to one email via a mocked `reportParams.post_id`. The post detail page has no comparison control, so comparison report params are ignored."}}},decorators:[h]},G={render:L,args:{metric:`opens`,granularity:`day`,chartType:`line`},decorators:[y]},K={render:L,args:{metric:`clicks`,granularity:`day`,chartType:`line`},decorators:[y]},q={render:L,args:{metric:`opens`,granularity:`week`,chartType:`line`},decorators:[y]},J={render:()=>R(5701),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(d(`stats/opens/emails`,`loading`),()=>d(`stats/opens/emails`,null))},Y={render:()=>R(5702),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(d(`stats/opens/emails`,`error`),()=>d(`stats/opens/emails`,null))},X={render:()=>R(5703),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(d(`stats/opens/emails`,`empty`),()=>d(`stats/opens/emails`,null))},Z={render:()=>(0,z.jsx)(C,{attributes:{reportParams:p(!1),metric:`opens`}}),decorators:[y]},Q={render:e=>(0,z.jsx)(Ce,{...e}),args:{...v,metric:`opens`,granularity:`day`,chartType:`line`},argTypes:{...pe,metric:{control:`select`,options:H},granularity:{control:`select`,options:U},chartType:{control:`radio`,options:[`line`,`bar`]}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderEmailTimeSeries,
  args: {
    metric: 'opens',
    granularity: 'day',
    chartType: 'line'
  },
  decorators: [withWidgetCanvas]
}`,...G.parameters?.docs?.source},description:{story:`Default populated state — the selected email's opens per day.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderEmailTimeSeries,
  args: {
    metric: 'clicks',
    granularity: 'day',
    chartType: 'line'
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`The clicks timeline used by the fixed Email clicks composition.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderEmailTimeSeries,
  args: {
    metric: 'opens',
    granularity: 'week',
    chartType: 'line'
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`Weekly grouping: the daily buckets aggregate client-side into ISO weeks.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
    metric: 'opens',
    granularity: 'day',
    chartType: 'line'
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    metric: {
      control: 'select',
      options: METRIC_OPTIONS
    },
    granularity: {
      control: 'select',
      options: GRANULARITY_OPTIONS
    },
    chartType: {
      control: 'radio',
      options: ['line', 'bar']
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`Clicks`,`ByWeeks`,`Loading`,`Error`,`Empty`,`NoEmailSelected`,`WidgetDashboardWithWidget`]}))();export{q as ByWeeks,K as Clicks,G as Default,X as Empty,Y as Error,J as Loading,Z as NoEmailSelected,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,W as default};