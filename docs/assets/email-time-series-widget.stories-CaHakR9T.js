import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{js as o,n as s}from"./build-module-CDRs4YxF.js";import{J as c,Z as l,at as ee,q as u,tt as d}from"./report-metric-BywRn0bl.js";import{M as te,t as f}from"./src-BKLK-O8P.js";import{$t as ne,en as re,gn as ie,i as ae,qt as p,r as oe,t as m}from"./src-BqoIAWGs.js";import{n as h,t as g}from"./with-chart-theme-BtoZP5i0.js";import{a as se,h as ce}from"./chart-tooltip-CBXJFs6e.js";import{r as le,t as ue}from"./metric-tabs-chart-skeleton-BmjwUCuu.js";import{t as de}from"./widget-state-CCVIVgZN.js";import{a as fe}from"./report-records-table-D-HcTbtY.js";import{C as pe,D as _,E as me,S as he,T as ge,b as _e,t as v,w as ve,x as y}from"./src-CNbqXo4B.js";import{n as ye,t as b}from"./preset-for-story-interval-DUVPf5NE.js";var x,S,be=e((()=>{x=`_root_1p0hj_1`,S={root:x}}));function C(e){return t(e===`clicks`?`Total clicks`:`Total opens`,`jetpack-premium-analytics-pkg`)}function xe({metric:e,chartType:n}){let{reportParams:r}=ee(),a=ie(r.post_id),o=a>0,s=ce(r.interval,ne),c=ae(a,r,{enabled:o&&e===`opens`}),l=oe(a,r,{enabled:o&&e===`clicks`}),u=e===`clicks`?l:c,d=(0,i.useCallback)(()=>{u.refetch()},[u]),f=u.data,p=D[e],m=(0,i.useMemo)(()=>{if(f)return s===`day`?f:re(f,s,e=>{let t=Number(e[p]??0);return{value:t,[p]:t}})},[f,s,p]),h=(0,i.useMemo)(()=>{let t=m?fe({primary:m,metrics:[{key:p,label:C(e)}]})[0]?.data??[]:[];return[{key:p,label:C(e),value:t.reduce((e,t)=>e+t.value,0),current:t}]},[m,p,e]),g=(m?.data?.length??0)>0;return(0,T.jsx)(`div`,{className:S.root,children:(0,T.jsx)(de,{isLoading:u.isLoading,isFetching:u.isFetching,isError:u.isError,isEmpty:!o||!g,error:{description:t(`We couldn't load this email's timeline. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:d}]},empty:{icon:te,description:t(o?`No activity for this email in this period.`:`Open an email report to see its timeline here.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,T.jsx)(ue,{}),children:(0,T.jsx)(le,{metrics:h,dataFormat:E,chartType:n})})})}function w({attributes:e={}}){return(0,T.jsx)(d,{attributes:e,children:(0,T.jsx)(xe,{metric:e.metric??`opens`,chartType:e.chartType===`bar`?`bar`:`line`})})}var T,E,D,Se=e((()=>{m(),f(),v(),a(),n(),be(),T=r(),E={type:`number`,options:{useMultipliers:!0,decimals:0}},D={opens:`opens_count`,clicks:`clicks_count`}})),O,Ce=e((()=>{s(),v(),O={icon:o,attributes:[se()],example:{attributes:{metric:`opens`,chartType:`line`}}}})),k,A,j,M,N,P,F,we=e((()=>{k=`jpa/email-time-series`,A=`Email performance`,j=`A single email's opens or clicks over time since it was sent.`,M={content:`How a single email performed over time: opens or clicks per day since it was sent, following the dashboard date range. Weekly and monthly grouping aggregate the daily buckets.`},N=`stats`,P=`framed`,F={name:k,title:A,description:j,help:M,category:N,presentation:P}}));function I({metric:e,interval:t,chartType:n},r=!1){return{reportParams:{...p(r,ye(t)),interval:t,post_id:V},metric:e,chartType:n}}function L(e){return(0,z.jsx)(w,{attributes:I(e)})}function R(e){return(0,z.jsx)(w,{attributes:{reportParams:{...p(!1),interval:`day`,post_id:e},metric:`opens`}})}function Te({metric:e,interval:t,chartType:n,...r}){return(0,z.jsx)(ge,{...r,widgetType:he(F,O),renderModule:B,renderComponent:w,attributes:I({metric:e,interval:t,chartType:n},!0)})}var z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),u(),g(),me(),pe(),b(),_e(),Se(),Ce(),we(),z=r(),c(),B=`storybook/email-time-series`,V=1234,H=[`opens`,`clicks`],U=[`day`,`week`,`month`],W={title:`Packages/Premium Analytics/Widgets/EmailTimeSeries`,component:w,tags:[`autodocs`],argTypes:{metric:{control:`select`,options:H},interval:{control:`select`,options:U},chartType:{control:`radio`,options:[`line`,`bar`]}},parameters:{docs:{description:{component:`The "Email performance" widget. Draws a single sent email's opens or clicks per day as a line chart, spanning the dashboard date range — the chart section of the legacy email detail page. The bucket size follows the page's chart interval control; weekly and monthly grouping aggregate the daily buckets client-side because the endpoint only reports hourly/daily. Scoped to one email via a mocked \`reportParams.post_id\`. The post detail page has no comparison control, so comparison report params are ignored.`}}},decorators:[h]},G={render:L,args:{metric:`opens`,interval:`day`,chartType:`line`},decorators:[y]},K={render:L,args:{metric:`clicks`,interval:`day`,chartType:`line`},decorators:[y]},q={render:L,args:{metric:`opens`,interval:`week`,chartType:`line`},decorators:[y]},J={render:()=>R(5701),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(l(`stats/opens/emails`,`loading`),()=>l(`stats/opens/emails`,null))},Y={render:()=>R(5702),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(l(`stats/opens/emails`,`error`),()=>l(`stats/opens/emails`,null))},X={render:()=>R(5703),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(l(`stats/opens/emails`,`empty`),()=>l(`stats/opens/emails`,null))},Z={render:()=>(0,z.jsx)(w,{attributes:{reportParams:p(!1),metric:`opens`}}),decorators:[y]},Q={render:e=>(0,z.jsx)(Te,{...e}),args:{...ve,metric:`opens`,interval:`day`,chartType:`line`},argTypes:{..._,metric:{control:`select`,options:H},interval:{control:`select`,options:U},chartType:{control:`radio`,options:[`line`,`bar`]}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderEmailTimeSeries,
  args: {
    metric: 'opens',
    interval: 'day',
    chartType: 'line'
  },
  decorators: [withWidgetCanvas]
}`,...G.parameters?.docs?.source},description:{story:`Default populated state — the selected email's opens per day.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderEmailTimeSeries,
  args: {
    metric: 'clicks',
    interval: 'day',
    chartType: 'line'
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`The clicks timeline used by the fixed Email clicks composition.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderEmailTimeSeries,
  args: {
    metric: 'opens',
    interval: 'week',
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`Clicks`,`ByWeeks`,`Loading`,`Error`,`Empty`,`NoEmailSelected`,`WidgetDashboardWithWidget`]}))();export{q as ByWeeks,K as Clicks,G as Default,X as Empty,Y as Error,J as Loading,Z as NoEmailSelected,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,W as default};