import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,r as n,t as r}from"./build-module-BXs6jvWf.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{p as a,t as o}from"./build-module-nWjoY2Yf.js";import{it as s,m as ee,t as c}from"./src-DRzf3CGX.js";import{R as te,_n as ne,an as re,d as ie,in as ae,t as l,yn as u,z as oe}from"./src-B9qeFKnP.js";import{H as se,I as d,Mt as ce,bt as le,f as ue}from"./charts-provider-BcvHR9h_.js";import{t as de}from"./widget-state-CKBw0Wsm.js";import{i as f}from"./with-story-router-ONKeXPDE.js";import{n as p,t as m}from"./with-chart-theme-DcrZiXpo.js";import{t as fe}from"./chart-empty-state-C0VatJ1P.js";import{n as h,r as pe,s as g}from"./register-report-mocks-CNHdgyTS.js";import{r as me,t as he}from"./metric-tabs-chart-skeleton-Cad_Vc4P.js";import{a as ge,c as _e,i as _,l as ve,o as ye,r as be,s as v,u as xe}from"./with-widget-canvas-BeknBvf-.js";import{n as Se,t as Ce}from"./preset-for-story-interval-D7wtxhkq.js";import{n as we,r as Te,t as Ee}from"./with-site-time-zone-RgAxKbai.js";var y,b,x=e((()=>{y=`_root_3q2cr_1`,b={root:y}}));function De(e){return t(e===`clicks`?`Clicks`:`Opens`,`jetpack-premium-analytics-pkg`)}function Oe(e){return e===`clicks`?e=>n(`%s Click`,`%s Clicks`,e,`jetpack-premium-analytics-pkg`):e=>n(`%s Open`,`%s Opens`,e,`jetpack-premium-analytics-pkg`)}function ke({metric:e,chartType:n}){let{reportParams:r}=se(),i=ne(r.post_id),o=i>0,s=ie(r.interval,ae),c=oe(i,r,{enabled:o&&e===`opens`}),l=te(i,r,{enabled:o&&e===`clicks`}),u=e===`clicks`?l:c,d=(0,a.useCallback)(()=>{u.refetch()},[u]),f=u.data,p=w[e],m=(0,a.useMemo)(()=>{if(f)return s===`day`?f:re(f,s,e=>{let t=Number(e[p]??0);return{value:t,[p]:t}})},[f,s,p]),h=(0,a.useMemo)(()=>{let t=(m?.data??[]).flatMap(e=>{let t=ee(e.date_start,u.timezone);return t?[{date:t,value:Number(e[p]??0)}]:[]});return[{key:p,label:De(e),countLabel:Oe(e),value:t.reduce((e,t)=>e+t.value,0),current:t}]},[m,p,e,u.timezone]);return ue({csv:{...(0,a.useMemo)(()=>ce(h[0].current.some(e=>(e.value??0)>0)?h:[],{zone:u.timezone,withTime:r.interval===`hour`,dateLabel:t(`Date`,`jetpack-premium-analytics-pkg`)}),[h,u.timezone,r.interval]),filenamePrefix:`email-${i}-${e}`,hasDateRange:!0,status:{isLoading:u.isLoading,isFetching:u.isFetching,isError:u.isError,isPlaceholderData:u.isPlaceholderData}}}),(0,C.jsx)(`div`,{className:b.root,children:(0,C.jsx)(de,{isLoading:u.isLoading,isFetching:u.isFetching,isError:u.isError,isEmpty:!o,error:{description:t(`We couldn't load this email's timeline. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:d}]},empty:{description:t(`Open an email report to see its timeline here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,C.jsx)(he,{}),children:(0,C.jsx)(me,{metrics:h,dataFormat:le,chartType:n,empty:(0,C.jsx)(fe,{}),hideSingleMetricLabel:!0})})})}function S({attributes:e={}}){return(0,C.jsx)(d,{attributes:e,children:(0,C.jsx)(ke,{metric:e.metric??`opens`,chartType:e.chartType===`bar`?`bar`:`line`})})}var C,w,Ae=e((()=>{l(),c(),f(),o(),r(),x(),C=i(),w={opens:`opens_count`,clicks:`clicks_count`}})),T,je=e((()=>{T={example:{attributes:{metric:`opens`,chartType:`line`}}}})),E,D,O,k,A,j,M,N,P,Me=e((()=>{E=`jpa/email-time-series`,D=`jpa/envelope`,O=`Email performance`,k=`A single email's opens or clicks over time since it was sent.`,A={content:`How a single email performed over time: opens or clicks per day over the window the page reports — on the post detail page, the first 30 days after the send.`},j=`stats`,M=`framed`,N=[{id:`chartType`,type:`jpa/toggle-group`,label:`Chart type`,relevance:`high`,elements:[{value:`line`,label:`Line chart`,icon:`jpa/chart-line`},{value:`bar`,label:`Bar chart`,icon:`jpa/chart-bar`}]}],P={name:E,icon:D,title:O,description:k,help:A,category:j,presentation:M,attributes:N}}));function F({metric:e,interval:t,chartType:n},r=!1){return{reportParams:{...u(r,Se(t)),interval:t,post_id:B},metric:e,chartType:n}}function I(e){return(0,R.jsx)(S,{attributes:F(e)})}function L(e){return(0,R.jsx)(S,{attributes:{reportParams:{...u(!1),interval:`day`,post_id:e},metric:`opens`}})}function Ne({metric:e,interval:t,chartType:n,...r}){return(0,R.jsx)(_e,{...r,widgetType:ge(P,T),renderModule:z,renderComponent:S,attributes:F({metric:e,interval:t,chartType:n},!0)})}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{l(),c(),h(),m(),ve(),ye(),Ce(),be(),Ee(),Ae(),je(),Me(),R=i(),pe(),z=`storybook/email-time-series`,B=1234,V=[`opens`,`clicks`],H=[`day`,`week`,`month`],U={title:`Packages/Premium Analytics/Widgets/EmailTimeSeries`,component:S,tags:[`autodocs`],argTypes:{...we,metric:{control:`select`,options:V},interval:{control:`select`,options:H},chartType:{control:`radio`,options:[`line`,`bar`]}},parameters:{docs:{description:{component:`The "Email performance" widget. Draws a single sent email's opens or clicks per day as a line chart, spanning the dashboard date range — the chart section of the legacy email detail page. The bucket size follows the page's chart interval control: an hourly window (the last-24-hours preset) draws the hourly buckets directly, while weekly and monthly grouping aggregate the daily buckets client-side because the endpoint only reports hourly/daily. Scoped to one email via a mocked \`reportParams.post_id\`. The post detail page has no comparison control, so comparison report params are ignored.`}}},decorators:[p,Te]},W={render:I,args:{metric:`opens`,interval:`day`,chartType:`line`},decorators:[_]},G={render:I,args:{metric:`clicks`,interval:`day`,chartType:`line`},decorators:[_]},K={render:I,args:{metric:`opens`,interval:`week`,chartType:`line`},decorators:[_]},q={render:({metric:e,chartType:t})=>(0,R.jsx)(S,{attributes:{reportParams:{...u(!1,s),post_id:B},metric:e,chartType:t}}),args:{metric:`opens`,chartType:`line`},parameters:{controls:{exclude:[`interval`]}},decorators:[_]},J={render:()=>L(5701),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(g(`stats/opens/emails`,`loading`),()=>g(`stats/opens/emails`,null))},Y={render:()=>L(5702),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(g(`stats/opens/emails`,`error`),()=>g(`stats/opens/emails`,null))},X={render:()=>L(5703),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(g(`stats/opens/emails`,`empty`),()=>g(`stats/opens/emails`,null))},Z={render:()=>(0,R.jsx)(S,{attributes:{reportParams:u(!1),metric:`opens`}}),decorators:[_]},Q={tags:[`widget-dashboard`],render:e=>(0,R.jsx)(Ne,{...e}),args:{...v,metric:`opens`,interval:`day`,chartType:`line`},argTypes:{...xe,metric:{control:`select`,options:V},interval:{control:`select`,options:H},chartType:{control:`radio`,options:[`line`,`bar`]}}},$=[`Default`,`Clicks`,`ByWeeks`,`LastTwentyFourHours`,`Loading`,`Error`,`Empty`,`NoEmailSelected`,`WidgetDashboardWithWidget`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
  tags: ['widget-dashboard'],
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
}`,...Q.parameters?.docs?.source}}}}))();export{K as ByWeeks,G as Clicks,W as Default,X as Empty,Y as Error,q as LastTwentyFourHours,J as Loading,Z as NoEmailSelected,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,U as default};