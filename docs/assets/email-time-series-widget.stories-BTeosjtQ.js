import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{h as i,t as a}from"./build-module-DuNGIx6S.js";import{As as o,t as s}from"./build-module-CR6EsQjA.js";import{b as ee,g as c}from"./hooks-VffrD4_R.js";import{M as te,t as l}from"./src-CldFJNXL.js";import{f as u,t as d}from"./src-CTC7K3Bw.js";import{Zt as f,d as p,on as ne,r as re,sn as ie,t as m,u as ae,wn as oe}from"./src-DmOy4CBU.js";import{n as h,t as g}from"./with-chart-theme-CP1WjmFK.js";import{T as se,u as _}from"./chart-tooltip-CU5xVDPU.js";import{r as ce,t as le}from"./metric-tabs-chart-skeleton-CvUMxmz6.js";import{G as ue,K as de,Y as v}from"./report-metric-BbViXf3b.js";import{t as fe}from"./widget-state-CErRknDO.js";import{C as pe,D as me,E as he,S as ge,T as _e,b as ve,t as y,w as ye,x as b}from"./src-B_lIgp61.js";import{n as be,t as xe}from"./preset-for-story-interval-CR6vnbN3.js";var x,S,Se=e((()=>{x=`_root_3q2cr_1`,S={root:x}}));function Ce(e){return t(e===`clicks`?`Clicks`:`Opens`,`jetpack-premium-analytics-pkg`)}function we({metric:e,chartType:n}){let{reportParams:r}=ee(),a=oe(r.post_id),o=a>0,s=re(r.interval,ne),c=p(a,r,{enabled:o&&e===`opens`}),l=ae(a,r,{enabled:o&&e===`clicks`}),u=e===`clicks`?l:c,d=(0,i.useCallback)(()=>{u.refetch()},[u]),f=u.data,m=E[e],h=(0,i.useMemo)(()=>{if(f)return s===`day`?f:ie(f,s,e=>{let t=Number(e[m]??0);return{value:t,[m]:t}})},[f,s,m]),g=(0,i.useMemo)(()=>{let t=(h?.data??[]).map(e=>({date:se(e.date_start),value:Number(e[m]??0)}));return[{key:m,label:Ce(e),value:t.reduce((e,t)=>e+t.value,0),current:t}]},[h,m,e]),_=(h?.data?.length??0)>0;return(0,w.jsx)(`div`,{className:S.root,children:(0,w.jsx)(fe,{isLoading:u.isLoading,isFetching:u.isFetching,isError:u.isError,isEmpty:!o||!_,error:{description:t(`We couldn't load this email's timeline. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:d}]},empty:{icon:te,description:t(o?`No activity for this email in this period.`:`Open an email report to see its timeline here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,w.jsx)(le,{}),children:(0,w.jsx)(ce,{metrics:g,dataFormat:T,chartType:n,pointsAreWallClocks:!0})})})}function C({attributes:e={}}){return(0,w.jsx)(c,{attributes:e,children:(0,w.jsx)(we,{metric:e.metric??`opens`,chartType:e.chartType===`bar`?`bar`:`line`})})}var w,T,E,Te=e((()=>{m(),l(),y(),a(),n(),Se(),w=r(),T={type:`number`,options:{useMultipliers:!0,decimals:0}},E={opens:`opens_count`,clicks:`clicks_count`}})),D,Ee=e((()=>{s(),y(),D={icon:o,attributes:[_()],example:{attributes:{metric:`opens`,chartType:`line`}}}})),O,k,A,j,M,N,P,De=e((()=>{O=`jpa/email-time-series`,k=`Email performance`,A=`A single email's opens or clicks over time since it was sent.`,j={content:`How a single email performed over time: opens or clicks per day over the window the page reports — on the post detail page, the first 30 days after the send.`},M=`stats`,N=`framed`,P={name:O,title:k,description:A,help:j,category:M,presentation:N}}));function F({metric:e,interval:t,chartType:n},r=!1){return{reportParams:{...f(r,be(t)),interval:t,post_id:B},metric:e,chartType:n}}function I(e){return(0,R.jsx)(C,{attributes:F(e)})}function L(e){return(0,R.jsx)(C,{attributes:{reportParams:{...f(!1),interval:`day`,post_id:e},metric:`opens`}})}function Oe({metric:e,interval:t,chartType:n,...r}){return(0,R.jsx)(_e,{...r,widgetType:ge(P,D),renderModule:z,renderComponent:C,attributes:F({metric:e,interval:t,chartType:n},!0)})}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),d(),ue(),g(),he(),pe(),xe(),ve(),Te(),Ee(),De(),R=r(),de(),z=`storybook/email-time-series`,B=1234,V=[`opens`,`clicks`],H=[`day`,`week`,`month`],U={title:`Packages/Premium Analytics/Widgets/EmailTimeSeries`,component:C,tags:[`autodocs`],argTypes:{metric:{control:`select`,options:V},interval:{control:`select`,options:H},chartType:{control:`radio`,options:[`line`,`bar`]}},parameters:{docs:{description:{component:`The "Email performance" widget. Draws a single sent email's opens or clicks per day as a line chart, spanning the dashboard date range — the chart section of the legacy email detail page. The bucket size follows the page's chart interval control: an hourly window (the last-24-hours preset) draws the hourly buckets directly, while weekly and monthly grouping aggregate the daily buckets client-side because the endpoint only reports hourly/daily. Scoped to one email via a mocked \`reportParams.post_id\`. The post detail page has no comparison control, so comparison report params are ignored.`}}},decorators:[h]},W={render:I,args:{metric:`opens`,interval:`day`,chartType:`line`},decorators:[b]},G={render:I,args:{metric:`clicks`,interval:`day`,chartType:`line`},decorators:[b]},K={render:I,args:{metric:`opens`,interval:`week`,chartType:`line`},decorators:[b]},q={render:({metric:e,chartType:t})=>(0,R.jsx)(C,{attributes:{reportParams:{...f(!1,u),post_id:B},metric:e,chartType:t}}),args:{metric:`opens`,chartType:`line`},parameters:{controls:{exclude:[`interval`]}},decorators:[b]},J={render:()=>L(5701),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(v(`stats/opens/emails`,`loading`),()=>v(`stats/opens/emails`,null))},Y={render:()=>L(5702),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(v(`stats/opens/emails`,`error`),()=>v(`stats/opens/emails`,null))},X={render:()=>L(5703),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(v(`stats/opens/emails`,`empty`),()=>v(`stats/opens/emails`,null))},Z={render:()=>(0,R.jsx)(C,{attributes:{reportParams:f(!1),metric:`opens`}}),decorators:[b]},Q={render:e=>(0,R.jsx)(Oe,{...e}),args:{...ye,metric:`opens`,interval:`day`,chartType:`line`},argTypes:{...me,metric:{control:`select`,options:V},interval:{control:`select`,options:H},chartType:{control:`radio`,options:[`line`,`bar`]}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: renderEmailTimeSeries,
  args: {
    metric: 'opens',
    interval: 'day',
    chartType: 'line'
  },
  decorators: [withWidgetCanvas]
}`,...W.parameters?.docs?.source},description:{story:`Default populated state — the selected email's opens per day.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderEmailTimeSeries,
  args: {
    metric: 'clicks',
    interval: 'day',
    chartType: 'line'
  },
  decorators: [withWidgetCanvas]
}`,...G.parameters?.docs?.source},description:{story:`The clicks timeline used by the fixed Email clicks composition.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderEmailTimeSeries,
  args: {
    metric: 'opens',
    interval: 'week',
    chartType: 'line'
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`Weekly grouping: the daily buckets aggregate client-side into ISO weeks.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: ({
    metric,
    chartType
  }) => <EmailTimeSeriesRender attributes={{
    reportParams: {
      ...getDefaultQueryParams(false, PRESET_LAST_24_HOURS),
      post_id: MOCK_EMAIL_ID
    },
    metric,
    chartType
  }} />,
  args: {
    metric: 'opens',
    chartType: 'line'
  },
  parameters: {
    controls: {
      exclude: ['interval']
    }
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`The last-24-hours preset: an hourly window that usually spans two calendar
days. The endpoint anchors its hourly buckets on the start day's midnight,
so the mock returns buckets from before the window opens — the data layer
trims them, and the chart draws exactly the selected 24 hours (WOOA7S-1840).
The preset pins the page interval to \`hour\`, so the interval control is
hidden here and no interval arg is wired.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
    interval: 'day',
    chartType: 'line'
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    metric: {
      control: 'select',
      options: METRIC_OPTIONS
    },
    interval: {
      control: 'select',
      options: INTERVAL_OPTIONS
    },
    chartType: {
      control: 'radio',
      options: ['line', 'bar']
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`Clicks`,`ByWeeks`,`LastTwentyFourHours`,`Loading`,`Error`,`Empty`,`NoEmailSelected`,`WidgetDashboardWithWidget`]}))();export{K as ByWeeks,G as Clicks,W as Default,X as Empty,Y as Error,q as LastTwentyFourHours,J as Loading,Z as NoEmailSelected,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,U as default};