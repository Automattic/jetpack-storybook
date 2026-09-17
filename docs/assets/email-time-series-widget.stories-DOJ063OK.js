import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Ms as i,Uu as a,ju as o,t as s}from"./build-module-2iv4IIRq.js";import{X as c,b as ee,g as l}from"./hooks-B4xWNSo3.js";import{M as te,t as u}from"./src-C-E2d-Lb.js";import{g as ne,q as d,t as f}from"./src-D1E5MwTJ.js";import{$t as p,a as re,cn as ie,f as ae,kn as oe,ln as se,p as ce,r as m}from"./date-period-dropdown-DFFxSAbH.js";import{n as h,t as g}from"./with-chart-theme-TK8AAA76.js";import{r as le,t as ue}from"./metric-tabs-chart-skeleton-Bod231yV.js";import{i as de,r as fe,s as _}from"./register-report-mocks-Ddv1-acm.js";import{t as pe}from"./widget-state-CHDb_lmp.js";import{t as v}from"./src-CWyhsZxW.js";import{a as me,c as he,i as ge,l as _e,n as ve,o as ye,r as y,s as be}from"./with-widget-canvas-B0lPgXMt.js";import{n as xe,t as Se}from"./preset-for-story-interval-B2NjNWiB.js";import{n as Ce,r as we,t as Te}from"./with-site-time-zone-ngtW_VDw.js";var b,x,Ee=e((()=>{b=`_root_3q2cr_1`,x={root:b}}));function De(e){return t(e===`clicks`?`Clicks`:`Opens`,`jetpack-premium-analytics-pkg`)}function Oe({metric:e,chartType:n}){let{reportParams:r}=ee(),i=oe(r.post_id),o=i>0,s=re(r.interval,ie),c=ce(i,r,{enabled:o&&e===`opens`}),l=ae(i,r,{enabled:o&&e===`clicks`}),u=e===`clicks`?l:c,d=(0,a.useCallback)(()=>{u.refetch()},[u]),f=u.data,p=T[e],m=(0,a.useMemo)(()=>{if(f)return s===`day`?f:se(f,s,e=>{let t=Number(e[p]??0);return{value:t,[p]:t}})},[f,s,p]),h=(0,a.useMemo)(()=>{let t=(m?.data??[]).flatMap(e=>{let t=ne(e.date_start,u.timezone);return t?[{date:t,value:Number(e[p]??0)}]:[]});return[{key:p,label:De(e),value:t.reduce((e,t)=>e+t.value,0),current:t}]},[m,p,e,u.timezone]),g=(m?.data?.length??0)>0;return(0,C.jsx)(`div`,{className:x.root,children:(0,C.jsx)(pe,{isLoading:u.isLoading,isFetching:u.isFetching,isError:u.isError,isEmpty:!o||!g,error:{description:t(`We couldn't load this email's timeline. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:d}]},empty:{icon:te,description:t(o?`No activity for this email in this period.`:`Open an email report to see its timeline here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,C.jsx)(ue,{}),children:(0,C.jsx)(le,{metrics:h,dataFormat:w,chartType:n})})})}function S({attributes:e={}}){return(0,C.jsx)(l,{attributes:e,children:(0,C.jsx)(Oe,{metric:e.metric??`opens`,chartType:e.chartType===`bar`?`bar`:`line`})})}var C,w,T,ke=e((()=>{m(),f(),u(),v(),o(),n(),Ee(),C=r(),w={type:`number`,options:{useMultipliers:!0,decimals:0}},T={opens:`opens_count`,clicks:`clicks_count`}})),E,Ae=e((()=>{s(),v(),E={icon:i,attributes:[c()],example:{attributes:{metric:`opens`,chartType:`line`}}}})),D,O,k,A,j,M,N,je=e((()=>{D=`jpa/email-time-series`,O=`Email performance`,k=`A single email's opens or clicks over time since it was sent.`,A={content:`How a single email performed over time: opens or clicks per day over the window the page reports — on the post detail page, the first 30 days after the send.`},j=`stats`,M=`framed`,N={name:D,title:O,description:k,help:A,category:j,presentation:M}}));function P({metric:e,interval:t,chartType:n},r=!1){return{reportParams:{...p(r,xe(t)),interval:t,post_id:B},metric:e,chartType:n}}function F(e){return(0,R.jsx)(S,{attributes:P(e)})}function I(e){return(0,R.jsx)(S,{attributes:{reportParams:{...p(!1),interval:`day`,post_id:e},metric:`opens`}})}function L({metric:e,interval:t,chartType:n,...r}){return(0,R.jsx)(be,{...r,widgetType:ge(N,E),renderModule:z,renderComponent:S,attributes:P({metric:e,interval:t,chartType:n},!0)})}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),f(),fe(),g(),he(),me(),Se(),ve(),Te(),ke(),Ae(),je(),R=r(),de(),z=`storybook/email-time-series`,B=1234,V=[`opens`,`clicks`],H=[`day`,`week`,`month`],U={title:`Packages/Premium Analytics/Widgets/EmailTimeSeries`,component:S,tags:[`autodocs`],argTypes:{...Ce,metric:{control:`select`,options:V},interval:{control:`select`,options:H},chartType:{control:`radio`,options:[`line`,`bar`]}},parameters:{docs:{description:{component:`The "Email performance" widget. Draws a single sent email's opens or clicks per day as a line chart, spanning the dashboard date range — the chart section of the legacy email detail page. The bucket size follows the page's chart interval control: an hourly window (the last-24-hours preset) draws the hourly buckets directly, while weekly and monthly grouping aggregate the daily buckets client-side because the endpoint only reports hourly/daily. Scoped to one email via a mocked \`reportParams.post_id\`. The post detail page has no comparison control, so comparison report params are ignored.`}}},decorators:[h,we]},W={render:F,args:{metric:`opens`,interval:`day`,chartType:`line`},decorators:[y]},G={render:F,args:{metric:`clicks`,interval:`day`,chartType:`line`},decorators:[y]},K={render:F,args:{metric:`opens`,interval:`week`,chartType:`line`},decorators:[y]},q={render:({metric:e,chartType:t})=>(0,R.jsx)(S,{attributes:{reportParams:{...p(!1,d),post_id:B},metric:e,chartType:t}}),args:{metric:`opens`,chartType:`line`},parameters:{controls:{exclude:[`interval`]}},decorators:[y]},J={render:()=>I(5701),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(_(`stats/opens/emails`,`loading`),()=>_(`stats/opens/emails`,null))},Y={render:()=>I(5702),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(_(`stats/opens/emails`,`error`),()=>_(`stats/opens/emails`,null))},X={render:()=>I(5703),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(_(`stats/opens/emails`,`empty`),()=>_(`stats/opens/emails`,null))},Z={render:()=>(0,R.jsx)(S,{attributes:{reportParams:p(!1),metric:`opens`}}),decorators:[y]},Q={render:e=>(0,R.jsx)(L,{...e}),args:{...ye,metric:`opens`,interval:`day`,chartType:`line`},argTypes:{..._e,metric:{control:`select`,options:V},interval:{control:`select`,options:H},chartType:{control:`radio`,options:[`line`,`bar`]}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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