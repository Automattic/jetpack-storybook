import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,r as n,t as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{As as a,Vu as o,ku as s,t as c}from"./build-module-DNhkEVJn.js";import{M as l,t as u}from"./src-DzwlO62w.js";import{J as d,g as ee,t as f}from"./src-rrY7vAoW.js";import{In as p,O as te,Pn as ne,Sn as re,k as ie,r as ae,t as m,xn as oe}from"./src-Ferr21sN.js";import{_ as h,rt as g,x as se}from"./charts-provider-DxgSZITe.js";import{n as ce,t as le}from"./with-chart-theme-CzmBDXLQ.js";import{t as ue}from"./chart-empty-state-CEFIPzov.js";import{n as de,r as fe,s as _}from"./register-report-mocks-kbDmbfoa.js";import{t as pe}from"./widget-state-B3svSGRb.js";import{r as me,t as he}from"./metric-tabs-chart-skeleton-Dv82jJCT.js";import{t as v}from"./src-C4KwzsSl.js";import{a as ge,g as _e,h as ve,i as ye,m as be,n as xe,p as Se,r as y}from"./with-widget-canvas-DV93GYy7.js";import{n as Ce,t as we}from"./preset-for-story-interval-BxZLK6jB.js";import{n as Te,r as Ee,t as De}from"./with-site-time-zone-rx7NXQ-3.js";var b,x,Oe=e((()=>{b=`_root_3q2cr_1`,x={root:b}}));function ke(e){return t(e===`clicks`?`Clicks`:`Opens`,`jetpack-premium-analytics-pkg`)}function Ae(e){return e===`clicks`?e=>n(`%s Click`,`%s Clicks`,e,`jetpack-premium-analytics-pkg`):e=>n(`%s Open`,`%s Opens`,e,`jetpack-premium-analytics-pkg`)}function je({metric:e,chartType:n}){let{reportParams:r}=se(),i=ne(r.post_id),a=i>0,s=ae(r.interval,oe),c=ie(i,r,{enabled:a&&e===`opens`}),u=te(i,r,{enabled:a&&e===`clicks`}),d=e===`clicks`?u:c,f=(0,o.useCallback)(()=>{d.refetch()},[d]),p=d.data,m=T[e],h=(0,o.useMemo)(()=>{if(p)return s===`day`?p:re(p,s,e=>{let t=Number(e[m]??0);return{value:t,[m]:t}})},[p,s,m]),g=(0,o.useMemo)(()=>{let t=(h?.data??[]).flatMap(e=>{let t=ee(e.date_start,d.timezone);return t?[{date:t,value:Number(e[m]??0)}]:[]});return[{key:m,label:ke(e),countLabel:Ae(e),value:t.reduce((e,t)=>e+t.value,0),current:t}]},[h,m,e,d.timezone]);return(0,C.jsx)(`div`,{className:x.root,children:(0,C.jsx)(pe,{isLoading:d.isLoading,isFetching:d.isFetching,isError:d.isError,isEmpty:!a,error:{description:t(`We couldn't load this email's timeline. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:f}]},empty:{icon:l,description:t(`Open an email report to see its timeline here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,C.jsx)(he,{}),children:(0,C.jsx)(me,{metrics:g,dataFormat:w,chartType:n,empty:(0,C.jsx)(ue,{})})})})}function S({attributes:e={}}){return(0,C.jsx)(h,{attributes:e,children:(0,C.jsx)(je,{metric:e.metric??`opens`,chartType:e.chartType===`bar`?`bar`:`line`})})}var C,w,T,Me=e((()=>{m(),f(),u(),v(),s(),r(),Oe(),C=i(),w={type:`number`,options:{useMultipliers:!0,decimals:0}},T={opens:`opens_count`,clicks:`clicks_count`}})),E,D=e((()=>{c(),v(),E={icon:a,attributes:[g()],example:{attributes:{metric:`opens`,chartType:`line`}}}})),O,k,A,j,M,N,P,Ne=e((()=>{O=`jpa/email-time-series`,k=`Email performance`,A=`A single email's opens or clicks over time since it was sent.`,j={content:`How a single email performed over time: opens or clicks per day over the window the page reports — on the post detail page, the first 30 days after the send.`},M=`stats`,N=`framed`,P={name:O,title:k,description:A,help:j,category:M,presentation:N}}));function F({metric:e,interval:t,chartType:n},r=!1){return{reportParams:{...p(r,Ce(t)),interval:t,post_id:B},metric:e,chartType:n}}function I(e){return(0,R.jsx)(S,{attributes:F(e)})}function L(e){return(0,R.jsx)(S,{attributes:{reportParams:{...p(!1),interval:`day`,post_id:e},metric:`opens`}})}function Pe({metric:e,interval:t,chartType:n,...r}){return(0,R.jsx)(be,{...r,widgetType:ye(P,E),renderModule:z,renderComponent:S,attributes:F({metric:e,interval:t,chartType:n},!0)})}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),f(),de(),le(),ve(),ge(),we(),xe(),De(),Me(),D(),Ne(),R=i(),fe(),z=`storybook/email-time-series`,B=1234,V=[`opens`,`clicks`],H=[`day`,`week`,`month`],U={title:`Packages/Premium Analytics/Widgets/EmailTimeSeries`,component:S,tags:[`autodocs`],argTypes:{...Te,metric:{control:`select`,options:V},interval:{control:`select`,options:H},chartType:{control:`radio`,options:[`line`,`bar`]}},parameters:{docs:{description:{component:`The "Email performance" widget. Draws a single sent email's opens or clicks per day as a line chart, spanning the dashboard date range — the chart section of the legacy email detail page. The bucket size follows the page's chart interval control: an hourly window (the last-24-hours preset) draws the hourly buckets directly, while weekly and monthly grouping aggregate the daily buckets client-side because the endpoint only reports hourly/daily. Scoped to one email via a mocked \`reportParams.post_id\`. The post detail page has no comparison control, so comparison report params are ignored.`}}},decorators:[ce,Ee]},W={render:I,args:{metric:`opens`,interval:`day`,chartType:`line`},decorators:[y]},G={render:I,args:{metric:`clicks`,interval:`day`,chartType:`line`},decorators:[y]},K={render:I,args:{metric:`opens`,interval:`week`,chartType:`line`},decorators:[y]},q={render:({metric:e,chartType:t})=>(0,R.jsx)(S,{attributes:{reportParams:{...p(!1,d),post_id:B},metric:e,chartType:t}}),args:{metric:`opens`,chartType:`line`},parameters:{controls:{exclude:[`interval`]}},decorators:[y]},J={render:()=>L(5701),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(_(`stats/opens/emails`,`loading`),()=>_(`stats/opens/emails`,null))},Y={render:()=>L(5702),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(_(`stats/opens/emails`,`error`),()=>_(`stats/opens/emails`,null))},X={render:()=>L(5703),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(_(`stats/opens/emails`,`empty`),()=>_(`stats/opens/emails`,null))},Z={render:()=>(0,R.jsx)(S,{attributes:{reportParams:p(!1),metric:`opens`}}),decorators:[y]},Q={render:e=>(0,R.jsx)(Pe,{...e}),args:{...Se,metric:`opens`,interval:`day`,chartType:`line`},argTypes:{..._e,metric:{control:`select`,options:V},interval:{control:`select`,options:H},chartType:{control:`radio`,options:[`line`,`bar`]}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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