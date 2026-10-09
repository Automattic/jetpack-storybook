import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,r as n,t as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Gu as a,Nu as o}from"./build-module-Cm3Kd3py.js";import{P as ee}from"./library-DTloIBum.js";import{t as s}from"./src-fQR6rGKL.js";import{J as c,g as te,t as l}from"./src-rrY7vAoW.js";import{En as ne,O as re,On as u,k as ie,mn as ae,pn as oe,r as se,t as d}from"./src-EFVFQWJ1.js";import{_ as f,rt as p,x as ce}from"./charts-provider-BcXi6Auj.js";import{n as m,t as h}from"./with-chart-theme-De7GND5P.js";import{t as le}from"./chart-empty-state-BNVI4QY7.js";import{n as ue,r as de,s as g}from"./register-report-mocks-ByCR7QC_.js";import{t as fe}from"./widget-state-DFLDEYqh.js";import{r as pe,t as me}from"./metric-tabs-chart-skeleton-DdPwb9x6.js";import{t as _}from"./src-CCU8io4M.js";import{a as he,g as ge,h as _e,i as ve,m as ye,n as be,p as xe,r as v}from"./with-widget-canvas-CuaJpnBg.js";import{n as Se,t as Ce}from"./preset-for-story-interval-BxZLK6jB.js";import{n as we,r as Te,t as Ee}from"./with-site-time-zone-rx7NXQ-3.js";var y,b,De=e((()=>{y=`_root_3q2cr_1`,b={root:y}}));function Oe(e){return t(e===`clicks`?`Clicks`:`Opens`,`jetpack-premium-analytics-pkg`)}function ke(e){return e===`clicks`?e=>n(`%s Click`,`%s Clicks`,e,`jetpack-premium-analytics-pkg`):e=>n(`%s Open`,`%s Opens`,e,`jetpack-premium-analytics-pkg`)}function Ae({metric:e,chartType:n}){let{reportParams:r}=ce(),i=ne(r.post_id),o=i>0,s=se(r.interval,oe),c=ie(i,r,{enabled:o&&e===`opens`}),l=re(i,r,{enabled:o&&e===`clicks`}),u=e===`clicks`?l:c,d=(0,a.useCallback)(()=>{u.refetch()},[u]),f=u.data,p=w[e],m=(0,a.useMemo)(()=>{if(f)return s===`day`?f:ae(f,s,e=>{let t=Number(e[p]??0);return{value:t,[p]:t}})},[f,s,p]),h=(0,a.useMemo)(()=>{let t=(m?.data??[]).flatMap(e=>{let t=te(e.date_start,u.timezone);return t?[{date:t,value:Number(e[p]??0)}]:[]});return[{key:p,label:Oe(e),countLabel:ke(e),value:t.reduce((e,t)=>e+t.value,0),current:t}]},[m,p,e,u.timezone]);return(0,S.jsx)(`div`,{className:b.root,children:(0,S.jsx)(fe,{isLoading:u.isLoading,isFetching:u.isFetching,isError:u.isError,isEmpty:!o,error:{description:t(`We couldn't load this email's timeline. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:d}]},empty:{icon:ee,description:t(`Open an email report to see its timeline here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,S.jsx)(me,{}),children:(0,S.jsx)(pe,{metrics:h,dataFormat:C,chartType:n,empty:(0,S.jsx)(le,{})})})})}function x({attributes:e={}}){return(0,S.jsx)(f,{attributes:e,children:(0,S.jsx)(Ae,{metric:e.metric??`opens`,chartType:e.chartType===`bar`?`bar`:`line`})})}var S,C,w,je=e((()=>{d(),l(),s(),_(),o(),r(),De(),S=i(),C={type:`number`,options:{useMultipliers:!0,decimals:0}},w={opens:`opens_count`,clicks:`clicks_count`}})),T,E=e((()=>{r(),_(),T={attributes:[{id:`chartType`,label:t(`Chart type`,`jetpack-premium-analytics-pkg`),type:`jpa/toggle-group`,elements:p,relevance:`high`}],example:{attributes:{metric:`opens`,chartType:`line`}}}})),D,O,k,A,j,M,N,P,Me=e((()=>{D=`jpa/email-time-series`,O=`jpa/envelope`,k=`Email performance`,A=`A single email's opens or clicks over time since it was sent.`,j={content:`How a single email performed over time: opens or clicks per day over the window the page reports — on the post detail page, the first 30 days after the send.`},M=`stats`,N=`framed`,P={name:D,icon:O,title:k,description:A,help:j,category:M,presentation:N}}));function F({metric:e,interval:t,chartType:n},r=!1){return{reportParams:{...u(r,Se(t)),interval:t,post_id:B},metric:e,chartType:n}}function I(e){return(0,R.jsx)(x,{attributes:F(e)})}function L(e){return(0,R.jsx)(x,{attributes:{reportParams:{...u(!1),interval:`day`,post_id:e},metric:`opens`}})}function Ne({metric:e,interval:t,chartType:n,...r}){return(0,R.jsx)(ye,{...r,widgetType:ve(P,T),renderModule:z,renderComponent:x,attributes:F({metric:e,interval:t,chartType:n},!0)})}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),l(),ue(),h(),_e(),he(),Ce(),be(),Ee(),je(),E(),Me(),R=i(),de(),z=`storybook/email-time-series`,B=1234,V=[`opens`,`clicks`],H=[`day`,`week`,`month`],U={title:`Packages/Premium Analytics/Widgets/EmailTimeSeries`,component:x,tags:[`autodocs`],argTypes:{...we,metric:{control:`select`,options:V},interval:{control:`select`,options:H},chartType:{control:`radio`,options:[`line`,`bar`]}},parameters:{docs:{description:{component:`The "Email performance" widget. Draws a single sent email's opens or clicks per day as a line chart, spanning the dashboard date range — the chart section of the legacy email detail page. The bucket size follows the page's chart interval control: an hourly window (the last-24-hours preset) draws the hourly buckets directly, while weekly and monthly grouping aggregate the daily buckets client-side because the endpoint only reports hourly/daily. Scoped to one email via a mocked \`reportParams.post_id\`. The post detail page has no comparison control, so comparison report params are ignored.`}}},decorators:[m,Te]},W={render:I,args:{metric:`opens`,interval:`day`,chartType:`line`},decorators:[v]},G={render:I,args:{metric:`clicks`,interval:`day`,chartType:`line`},decorators:[v]},K={render:I,args:{metric:`opens`,interval:`week`,chartType:`line`},decorators:[v]},q={render:({metric:e,chartType:t})=>(0,R.jsx)(x,{attributes:{reportParams:{...u(!1,c),post_id:B},metric:e,chartType:t}}),args:{metric:`opens`,chartType:`line`},parameters:{controls:{exclude:[`interval`]}},decorators:[v]},J={render:()=>L(5701),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(g(`stats/opens/emails`,`loading`),()=>g(`stats/opens/emails`,null))},Y={render:()=>L(5702),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(g(`stats/opens/emails`,`error`),()=>g(`stats/opens/emails`,null))},X={render:()=>L(5703),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(g(`stats/opens/emails`,`empty`),()=>g(`stats/opens/emails`,null))},Z={render:()=>(0,R.jsx)(x,{attributes:{reportParams:u(!1),metric:`opens`}}),decorators:[v]},Q={render:e=>(0,R.jsx)(Ne,{...e}),args:{...xe,metric:`opens`,interval:`day`,chartType:`line`},argTypes:{...ge,metric:{control:`select`,options:V},interval:{control:`select`,options:H},chartType:{control:`radio`,options:[`line`,`bar`]}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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