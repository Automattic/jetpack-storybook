import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{Zt as o,n as s}from"./build-module-DoJYX5DX.js";import{G as c,W as ee,Z as te,q as l,tt as ne}from"./report-metric-D1vALTh_.js";import{A as re,t as u}from"./src-CtuUAdXm.js";import{a as ie}from"./hooks-H8q9qMEb.js";import{n as d,t as f}from"./with-chart-theme-C3ZROFRJ.js";import{Ct as p,_r as ae,gr as oe,kr as se,ur as m,wt as ce,xt as h}from"./chart-tooltip-BA4nt7Vv.js";import{t as le}from"./comparative-line-chart-BhY6eNDn.js";import{C as g,D as _,E as v,S as y,T as b,b as x,t as S,w as ue,x as C}from"./src-BHsXmrzc.js";import{t as de}from"./widget-state-BfeOVzR1.js";import{a as fe}from"./report-records-table-CR0XGKZX.js";import{n as pe,t as me}from"./src-DUHeFOON.js";var he,ge,w,_e=e((()=>{he=`_root_gxrb3_3`,ge=`_chart_gxrb3_12`,w={root:he,chart:ge}}));function ve(e){return t(e===`clicks`?`Total clicks`:`Total opens`,`jetpack-premium-analytics-pkg`)}function ye({metric:e,granularity:n}){let{reportParams:r}=ne(),a=se(r.post_id),o=a>0,s=!!(r.compare_from&&r.compare_to),c=(0,i.useMemo)(()=>({...r,from:r.compare_from??``,to:r.compare_to??``,preset:void 0,comp:void 0,compare_from:void 0,compare_to:void 0,compare_preset:void 0}),[r]),ee=ce(a,r,{enabled:o&&e===`opens`}),te=p(a,r,{enabled:o&&e===`clicks`}),l=ce(a,c,{enabled:o&&s&&e===`opens`}),u=p(a,c,{enabled:o&&s&&e===`clicks`}),d=e===`clicks`?te:ee,f=e===`clicks`?u:l,m=s&&f.isError&&f.data===void 0,h=(0,i.useCallback)(()=>{d.refetch(),s&&f.refetch()},[d,f,s]),g=d.data,_=s?f.data:void 0,v=O[e],y=(0,i.useMemo)(()=>{if(g)return n===`day`?g:oe(g,n,e=>{let t=Number(e[v]??0);return{value:t,[v]:t}})},[g,n,v]),b=(0,i.useMemo)(()=>{if(!g||!_)return;if(n===`day`)return _;let e=g.data.map(e=>ae(e.time_interval,n));if(!e.length)return;let t=new Map,r=[];return _.data.forEach((n,i)=>{let a=e[Math.min(i,e.length-1)],o=Number(n[v]??0),s=t.get(a);s?s.value+=o:(t.set(a,{start:n,value:o}),r.push(a))}),{..._,data:r.map(e=>{let n=t.get(e);return{...n.start,value:n.value,[v]:n.value}})}},[g,_,n,v]),x=(0,i.useMemo)(()=>y?fe({primary:y,comparison:b,metrics:[{key:v,label:ve(e)}]}):[],[y,b,v,e]),S=ie(x),ue=(y?.data?.length??0)>0;return(0,E.jsx)(`div`,{className:w.root,children:(0,E.jsx)(de,{isLoading:d.isLoading,isFetching:d.isFetching||s&&f.isFetching,isError:d.isError||m,isEmpty:!o||!ue,error:{description:t(`We couldn't load this email's timeline. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:h}]},empty:{icon:re,description:t(o?`No activity for this email in this period.`:`Open an email report to see its timeline here.`,`jetpack-premium-analytics-pkg`)},children:(0,E.jsx)(le,{className:w.chart,series:x,styles:S,dataFormat:D})})})}function T({attributes:e={}}){return(0,E.jsx)(te,{attributes:e,children:(0,E.jsx)(ye,{metric:e.metric??`opens`,granularity:e.granularity??`day`})})}var E,D,O,be=e((()=>{h(),u(),S(),a(),n(),_e(),E=r(),D={type:`number`,options:{useMultipliers:!0,decimals:0}},O={opens:`opens_count`,clicks:`clicks_count`}})),k,xe=e((()=>{n(),s(),me(),k={icon:o,attributes:[{id:`metric`,label:t(`Metric`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:pe,elements:[{label:t(`Opens`,`jetpack-premium-analytics-pkg`),value:`opens`},{label:t(`Clicks`,`jetpack-premium-analytics-pkg`),value:`clicks`}]},{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:pe,elements:[{label:t(`By days`,`jetpack-premium-analytics-pkg`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics-pkg`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics-pkg`),value:`month`}],relevance:`high`}],example:{attributes:{metric:`opens`,granularity:`day`}}}})),A,j,M,N,P,Se,F,Ce=e((()=>{A=`jpa/email-time-series`,j=`Email performance`,M=`A single email's opens or clicks over time since it was sent.`,N={content:`How a single email performed over time: opens or clicks per day since it was sent, following the dashboard date range. Weekly and monthly grouping aggregate the daily buckets.`},P=`stats`,Se=`framed`,F={name:A,title:j,description:M,help:N,category:P,presentation:Se}}));function I(e){return k.attributes.find(t=>t.id===e)?.elements?.map(e=>e.value)??[]}function L({withComparison:e,metric:t,granularity:n}){return(0,z.jsx)(T,{attributes:{reportParams:{...m(e),post_id:V},metric:t,granularity:n}})}function R(e){return(0,z.jsx)(T,{attributes:{reportParams:{...m(!1),post_id:e},metric:`opens`,granularity:`day`}})}function we({withComparison:e,metric:t,granularity:n,...r}){return(0,z.jsx)(b,{...r,widgetType:y(F,k),renderModule:B,renderComponent:T,attributes:{reportParams:{...m(e),post_id:V},metric:t,granularity:n}})}var z,B,V,H,U,Te,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),ee(),f(),v(),g(),x(),be(),xe(),Ce(),z=r(),c(),B=`storybook/email-time-series`,V=1234,H=I(`metric`),U=I(`granularity`),Te={title:`Packages/Premium Analytics/Widgets/EmailTimeSeries`,component:T,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},metric:{control:`select`,options:H},granularity:{control:`select`,options:U}},parameters:{docs:{description:{component:"The \"Email performance\" widget. Draws a single sent email's opens or clicks per day as a line chart, spanning the dashboard date range — the chart section of the legacy email detail page. The `granularity` attribute (`relevance: 'high'`) is exposed as a control by the widget host; weekly grouping aggregates the daily buckets client-side because the endpoint only reports hourly/daily. Scoped to one email via a mocked `reportParams.post_id`. With the date picker's comparison on, the compare window is fetched as a second request and drawn as a dashed overlay with date-range legend labels."}}},decorators:[d]},W={render:L,args:{withComparison:!1,metric:`opens`,granularity:`day`},decorators:[C]},G={render:L,args:{withComparison:!0,metric:`opens`,granularity:`day`},decorators:[C]},K={render:L,args:{withComparison:!1,metric:`clicks`,granularity:`day`},decorators:[C]},q={render:L,args:{withComparison:!1,metric:`opens`,granularity:`week`},decorators:[C]},J={render:()=>R(5701),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(l(`stats/opens/emails`,`loading`),()=>l(`stats/opens/emails`,null))},Y={render:()=>R(5702),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(l(`stats/opens/emails`,`error`),()=>l(`stats/opens/emails`,null))},X={render:()=>R(5703),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(l(`stats/opens/emails`,`empty`),()=>l(`stats/opens/emails`,null))},Z={render:()=>(0,z.jsx)(T,{attributes:{reportParams:m(!1),metric:`opens`}}),decorators:[C]},Q={render:e=>(0,z.jsx)(we,{...e}),args:{...ue,withComparison:!0,metric:`opens`,granularity:`day`},argTypes:{..._,withComparison:{control:`boolean`},metric:{control:`select`,options:H},granularity:{control:`select`,options:U}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
    withComparison: true,
    metric: 'opens',
    granularity: 'day'
  },
  decorators: [withWidgetCanvas]
}`,...G.parameters?.docs?.source},description:{story:`Comparison from the date picker: the compare window fetches as a second
request and draws as a dashed overlay, with date-range legend labels.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderEmailTimeSeries,
  args: {
    withComparison: false,
    metric: 'clicks',
    granularity: 'day'
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`The clicks timeline used by the fixed Email clicks composition.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderEmailTimeSeries,
  args: {
    withComparison: false,
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
    withComparison: true,
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Clicks`,`ByWeeks`,`Loading`,`Error`,`Empty`,`NoEmailSelected`,`WidgetDashboardWithWidget`]}))();export{q as ByWeeks,K as Clicks,W as Default,X as Empty,Y as Error,J as Loading,Z as NoEmailSelected,Q as WidgetDashboardWithWidget,G as WithComparison,$ as __namedExportsOrder,Te as default};