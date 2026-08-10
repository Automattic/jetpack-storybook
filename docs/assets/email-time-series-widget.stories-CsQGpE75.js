import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{js as o,n as s}from"./build-module-CDRs4YxF.js";import{$ as c,K as l,Y as u,q as d,rt as ee}from"./report-metric-B86vORgJ.js";import{A as te,t as f}from"./src-B-M_FbbE.js";import{a as ne}from"./hooks-Dh6TPeMX.js";import{n as p,t as m}from"./with-chart-theme-Cty485uu.js";import{Ct as h,Et as re,Tt as ie,jr as ae,pr as g,yr as oe}from"./chart-tooltip-CG5U6VLC.js";import{t as se}from"./comparative-line-chart-DVq1-NF3.js";import{C as ce,D as le,E as ue,S as de,T as fe,b as pe,t as _,w as me,x as v}from"./src-DDXkCLgB.js";import{t as he}from"./widget-state-CvdMFL_6.js";import{a as ge}from"./report-records-table-BwusfPEo.js";import{n as y,t as _e}from"./src-BoGqwtWH.js";var b,x,S,ve=e((()=>{b=`_root_gxrb3_3`,x=`_chart_gxrb3_12`,S={root:b,chart:x}}));function ye(e){return t(e===`clicks`?`Total clicks`:`Total opens`,`jetpack-premium-analytics-pkg`)}function be({metric:e,granularity:n}){let{reportParams:r}=ee(),a=ae(r.post_id),o=a>0,s=re(a,r,{enabled:o&&e===`opens`}),c=ie(a,r,{enabled:o&&e===`clicks`}),l=e===`clicks`?c:s,u=(0,i.useCallback)(()=>{l.refetch()},[l]),d=l.data,f=E[e],p=(0,i.useMemo)(()=>{if(d)return n===`day`?d:oe(d,n,e=>{let t=Number(e[f]??0);return{value:t,[f]:t}})},[d,n,f]),m=(0,i.useMemo)(()=>p?ge({primary:p,metrics:[{key:f,label:ye(e)}]}):[],[p,f,e]),h=ne(m),g=(p?.data?.length??0)>0;return(0,w.jsx)(`div`,{className:S.root,children:(0,w.jsx)(he,{isLoading:l.isLoading,isFetching:l.isFetching,isError:l.isError,isEmpty:!o||!g,error:{description:t(`We couldn't load this email's timeline. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},empty:{icon:te,description:t(o?`No activity for this email in this period.`:`Open an email report to see its timeline here.`,`jetpack-premium-analytics-pkg`)},children:(0,w.jsx)(se,{className:S.chart,series:m,styles:h,dataFormat:T})})})}function C({attributes:e={}}){return(0,w.jsx)(c,{attributes:e,children:(0,w.jsx)(be,{metric:e.metric??`opens`,granularity:e.granularity??`day`})})}var w,T,E,xe=e((()=>{h(),f(),_(),a(),n(),ve(),w=r(),T={type:`number`,options:{useMultipliers:!0,decimals:0}},E={opens:`opens_count`,clicks:`clicks_count`}})),D,Se=e((()=>{n(),s(),_e(),D={icon:o,attributes:[{id:`metric`,label:t(`Metric`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:y,elements:[{label:t(`Opens`,`jetpack-premium-analytics-pkg`),value:`opens`},{label:t(`Clicks`,`jetpack-premium-analytics-pkg`),value:`clicks`}]},{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:y,elements:[{label:t(`By days`,`jetpack-premium-analytics-pkg`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics-pkg`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics-pkg`),value:`month`}],relevance:`high`}],example:{attributes:{metric:`opens`,granularity:`day`}}}})),O,k,A,j,M,N,P,Ce=e((()=>{O=`jpa/email-time-series`,k=`Email performance`,A=`A single email's opens or clicks over time since it was sent.`,j={content:`How a single email performed over time: opens or clicks per day since it was sent, following the dashboard date range. Weekly and monthly grouping aggregate the daily buckets.`},M=`stats`,N=`framed`,P={name:O,title:k,description:A,help:j,category:M,presentation:N}}));function F(e){return D.attributes.find(t=>t.id===e)?.elements?.map(e=>e.value)??[]}function I({metric:e,granularity:t},n=!1){return{reportParams:{...g(n),post_id:V},metric:e,granularity:t}}function L(e){return(0,z.jsx)(C,{attributes:I(e)})}function R(e){return(0,z.jsx)(C,{attributes:{reportParams:{...g(!1),post_id:e},metric:`opens`,granularity:`day`}})}function we({metric:e,granularity:t,...n}){return(0,z.jsx)(fe,{...n,widgetType:de(P,D),renderModule:B,renderComponent:C,attributes:I({metric:e,granularity:t},!0)})}var z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),l(),m(),ue(),ce(),pe(),xe(),Se(),Ce(),z=r(),d(),B=`storybook/email-time-series`,V=1234,H=F(`metric`),U=F(`granularity`),W={title:`Packages/Premium Analytics/Widgets/EmailTimeSeries`,component:C,tags:[`autodocs`],argTypes:{metric:{control:`select`,options:H},granularity:{control:`select`,options:U}},parameters:{docs:{description:{component:"The \"Email performance\" widget. Draws a single sent email's opens or clicks per day as a line chart, spanning the dashboard date range — the chart section of the legacy email detail page. The `granularity` attribute (`relevance: 'high'`) is exposed as a control by the widget host; weekly grouping aggregates the daily buckets client-side because the endpoint only reports hourly/daily. Scoped to one email via a mocked `reportParams.post_id`. The post detail page has no comparison control, so comparison report params are ignored."}}},decorators:[p]},G={render:L,args:{metric:`opens`,granularity:`day`},decorators:[v]},K={render:L,args:{metric:`clicks`,granularity:`day`},decorators:[v]},q={render:L,args:{metric:`opens`,granularity:`week`},decorators:[v]},J={render:()=>R(5701),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(u(`stats/opens/emails`,`loading`),()=>u(`stats/opens/emails`,null))},Y={render:()=>R(5702),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(u(`stats/opens/emails`,`error`),()=>u(`stats/opens/emails`,null))},X={render:()=>R(5703),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(u(`stats/opens/emails`,`empty`),()=>u(`stats/opens/emails`,null))},Z={render:()=>(0,z.jsx)(C,{attributes:{reportParams:g(!1),metric:`opens`}}),decorators:[v]},Q={render:e=>(0,z.jsx)(we,{...e}),args:{...me,metric:`opens`,granularity:`day`},argTypes:{...le,metric:{control:`select`,options:H},granularity:{control:`select`,options:U}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderEmailTimeSeries,
  args: {
    metric: 'opens',
    granularity: 'day'
  },
  decorators: [withWidgetCanvas]
}`,...G.parameters?.docs?.source},description:{story:`Default populated state — the selected email's opens per day.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderEmailTimeSeries,
  args: {
    metric: 'clicks',
    granularity: 'day'
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`The clicks timeline used by the fixed Email clicks composition.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderEmailTimeSeries,
  args: {
    metric: 'opens',
    granularity: 'week'
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
    granularity: 'day'
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
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`Clicks`,`ByWeeks`,`Loading`,`Error`,`Empty`,`NoEmailSelected`,`WidgetDashboardWithWidget`]}))();export{q as ByWeeks,K as Clicks,G as Default,X as Empty,Y as Error,J as Loading,Z as NoEmailSelected,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,W as default};