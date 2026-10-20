import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,r as n,t as r}from"./build-module-BXPCp--5.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Gu as a,Nu as o}from"./build-module-CDZL_1rk.js";import{J as s,_ as ee,t as c}from"./src-BGYQLfcD.js";import{$t as te,N as l,P as ne,Qt as re,c as ie,dn as ae,pn as u,t as d}from"./src-ZjHV2sqR.js";import{m as f,v as oe}from"./charts-provider-DmTfgW6u.js";import{n as p,t as m}from"./with-chart-theme-BRvm7qCQ.js";import{t as se}from"./chart-empty-state-CU82AGP8.js";import{n as h,r as g,s as _}from"./register-report-mocks-BmL3qzYr.js";import{t as ce}from"./widget-state-B6BF76Fg.js";import{r as le,t as ue}from"./metric-tabs-chart-skeleton-BlOnUqxa.js";import{t as de}from"./src-B0Rsgp69.js";import{a as fe,g as pe,h as me,i as he,m as ge,n as _e,p as ve,r as v}from"./with-widget-canvas-fgX8Iy8a.js";import{n as ye,t as be}from"./preset-for-story-interval-y5q-zHTU.js";import{n as xe,r as Se,t as Ce}from"./with-site-time-zone-Cv62QLkb.js";var y,b,we=e((()=>{y=`_root_3q2cr_1`,b={root:y}}));function Te(e){return t(e===`clicks`?`Clicks`:`Opens`,`jetpack-premium-analytics-pkg`)}function Ee(e){return e===`clicks`?e=>n(`%s Click`,`%s Clicks`,e,`jetpack-premium-analytics-pkg`):e=>n(`%s Open`,`%s Opens`,e,`jetpack-premium-analytics-pkg`)}function De({metric:e,chartType:n}){let{reportParams:r}=oe(),i=ae(r.post_id),o=i>0,s=ie(r.interval,re),c=ne(i,r,{enabled:o&&e===`opens`}),u=l(i,r,{enabled:o&&e===`clicks`}),d=e===`clicks`?u:c,f=(0,a.useCallback)(()=>{d.refetch()},[d]),p=d.data,m=w[e],h=(0,a.useMemo)(()=>{if(p)return s===`day`?p:te(p,s,e=>{let t=Number(e[m]??0);return{value:t,[m]:t}})},[p,s,m]),g=(0,a.useMemo)(()=>{let t=(h?.data??[]).flatMap(e=>{let t=ee(e.date_start,d.timezone);return t?[{date:t,value:Number(e[m]??0)}]:[]});return[{key:m,label:Te(e),countLabel:Ee(e),value:t.reduce((e,t)=>e+t.value,0),current:t}]},[h,m,e,d.timezone]);return(0,S.jsx)(`div`,{className:b.root,children:(0,S.jsx)(ce,{isLoading:d.isLoading,isFetching:d.isFetching,isError:d.isError,isEmpty:!o,error:{description:t(`We couldn't load this email's timeline. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:f}]},empty:{description:t(`Open an email report to see its timeline here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,S.jsx)(ue,{}),children:(0,S.jsx)(le,{metrics:g,dataFormat:C,chartType:n,chartTitle:t(`Email performance`,`jetpack-premium-analytics-pkg`),empty:(0,S.jsx)(se,{}),hideSingleMetricLabel:!0})})})}function x({attributes:e={}}){return(0,S.jsx)(f,{attributes:e,children:(0,S.jsx)(De,{metric:e.metric??`opens`,chartType:e.chartType===`bar`?`bar`:`line`})})}var S,C,w,Oe=e((()=>{d(),c(),de(),o(),r(),we(),S=i(),C={type:`number`,options:{useMultipliers:!0,decimals:0}},w={opens:`opens_count`,clicks:`clicks_count`}})),T,ke=e((()=>{T={example:{attributes:{metric:`opens`,chartType:`line`}}}})),E,D,O,k,A,j,M,N,P,Ae=e((()=>{E=`jpa/email-time-series`,D=`jpa/envelope`,O=`Email performance`,k=`A single email's opens or clicks over time since it was sent.`,A={content:`How a single email performed over time: opens or clicks per day over the window the page reports — on the post detail page, the first 30 days after the send.`},j=`stats`,M=`framed`,N=[{id:`chartType`,type:`jpa/toggle-group`,label:`Chart type`,relevance:`high`,elements:[{value:`line`,label:`Line chart`,icon:`jpa/chart-line`},{value:`bar`,label:`Bar chart`,icon:`jpa/chart-bar`}]}],P={name:E,icon:D,title:O,description:k,help:A,category:j,presentation:M,attributes:N}}));function F({metric:e,interval:t,chartType:n},r=!1){return{reportParams:{...u(r,ye(t)),interval:t,post_id:B},metric:e,chartType:n}}function I(e){return(0,R.jsx)(x,{attributes:F(e)})}function L(e){return(0,R.jsx)(x,{attributes:{reportParams:{...u(!1),interval:`day`,post_id:e},metric:`opens`}})}function je({metric:e,interval:t,chartType:n,...r}){return(0,R.jsx)(ge,{...r,widgetType:he(P,T),renderModule:z,renderComponent:x,attributes:F({metric:e,interval:t,chartType:n},!0)})}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),c(),h(),m(),me(),fe(),be(),_e(),Ce(),Oe(),ke(),Ae(),R=i(),g(),z=`storybook/email-time-series`,B=1234,V=[`opens`,`clicks`],H=[`day`,`week`,`month`],U={title:`Packages/Premium Analytics/Widgets/EmailTimeSeries`,component:x,tags:[`autodocs`],argTypes:{...xe,metric:{control:`select`,options:V},interval:{control:`select`,options:H},chartType:{control:`radio`,options:[`line`,`bar`]}},parameters:{docs:{description:{component:`The "Email performance" widget. Draws a single sent email's opens or clicks per day as a line chart, spanning the dashboard date range — the chart section of the legacy email detail page. The bucket size follows the page's chart interval control: an hourly window (the last-24-hours preset) draws the hourly buckets directly, while weekly and monthly grouping aggregate the daily buckets client-side because the endpoint only reports hourly/daily. Scoped to one email via a mocked \`reportParams.post_id\`. The post detail page has no comparison control, so comparison report params are ignored.`}}},decorators:[p,Se]},W={render:I,args:{metric:`opens`,interval:`day`,chartType:`line`},decorators:[v]},G={render:I,args:{metric:`clicks`,interval:`day`,chartType:`line`},decorators:[v]},K={render:I,args:{metric:`opens`,interval:`week`,chartType:`line`},decorators:[v]},q={render:({metric:e,chartType:t})=>(0,R.jsx)(x,{attributes:{reportParams:{...u(!1,s),post_id:B},metric:e,chartType:t}}),args:{metric:`opens`,chartType:`line`},parameters:{controls:{exclude:[`interval`]}},decorators:[v]},J={render:()=>L(5701),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(_(`stats/opens/emails`,`loading`),()=>_(`stats/opens/emails`,null))},Y={render:()=>L(5702),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(_(`stats/opens/emails`,`error`),()=>_(`stats/opens/emails`,null))},X={render:()=>L(5703),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(_(`stats/opens/emails`,`empty`),()=>_(`stats/opens/emails`,null))},Z={render:()=>(0,R.jsx)(x,{attributes:{reportParams:u(!1),metric:`opens`}}),decorators:[v]},Q={render:e=>(0,R.jsx)(je,{...e}),args:{...ve,metric:`opens`,interval:`day`,chartType:`line`},argTypes:{...pe,metric:{control:`select`,options:V},interval:{control:`select`,options:H},chartType:{control:`radio`,options:[`line`,`bar`]}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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