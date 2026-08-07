import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{js as o,n as s}from"./build-module-CDRs4YxF.js";import{$ as c,K as ee,Y as l,q as u,rt as te}from"./report-metric-xAW2OzDD.js";import{A as ne,t as d}from"./src-q13B8HIT.js";import{a as re}from"./hooks-DxXL8OYg.js";import{n as f,t as p}from"./with-chart-theme-DbcUsklT.js";import{Ct as m,Et as h,Mr as ie,Tt as ae,br as oe,pr as g,yr as se}from"./chart-tooltip-BmUjCWWw.js";import{t as ce}from"./comparative-line-chart-BFCazT9q.js";import{C as _,D as v,E as y,S as b,T as x,b as S,t as le,w as ue,x as C}from"./src-BwCNbwAR.js";import{t as de}from"./widget-state-Bim5dH8t.js";import{a as fe}from"./report-records-table-B4CuP9LW.js";import{n as pe,t as me}from"./src-vQZoXcXq.js";var he,ge,w,_e=e((()=>{he=`_root_gxrb3_3`,ge=`_chart_gxrb3_12`,w={root:he,chart:ge}}));function ve(e){return t(e===`clicks`?`Total clicks`:`Total opens`,`jetpack-premium-analytics-pkg`)}function ye({metric:e,granularity:n}){let{reportParams:r}=te(),a=ie(r.post_id),o=a>0,s=!!(r.compare_from&&r.compare_to),c=(0,i.useMemo)(()=>({...r,from:r.compare_from??``,to:r.compare_to??``,preset:void 0,comp:void 0,compare_from:void 0,compare_to:void 0,compare_preset:void 0}),[r]),ee=h(a,r,{enabled:o&&e===`opens`}),l=ae(a,r,{enabled:o&&e===`clicks`}),u=h(a,c,{enabled:o&&s&&e===`opens`}),d=ae(a,c,{enabled:o&&s&&e===`clicks`}),f=e===`clicks`?l:ee,p=e===`clicks`?d:u,m=s&&p.isError&&p.data===void 0,g=(0,i.useCallback)(()=>{f.refetch(),s&&p.refetch()},[f,p,s]),_=f.data,v=s?p.data:void 0,y=O[e],b=(0,i.useMemo)(()=>{if(_)return n===`day`?_:se(_,n,e=>{let t=Number(e[y]??0);return{value:t,[y]:t}})},[_,n,y]),x=(0,i.useMemo)(()=>{if(!_||!v)return;if(n===`day`)return v;let e=_.data.map(e=>oe(e.time_interval,n));if(!e.length)return;let t=new Map,r=[];return v.data.forEach((n,i)=>{let a=e[Math.min(i,e.length-1)],o=Number(n[y]??0),s=t.get(a);s?s.value+=o:(t.set(a,{start:n,value:o}),r.push(a))}),{...v,data:r.map(e=>{let n=t.get(e);return{...n.start,value:n.value,[y]:n.value}})}},[_,v,n,y]),S=(0,i.useMemo)(()=>b?fe({primary:b,comparison:x,metrics:[{key:y,label:ve(e)}]}):[],[b,x,y,e]),le=re(S),ue=(b?.data?.length??0)>0;return(0,E.jsx)(`div`,{className:w.root,children:(0,E.jsx)(de,{isLoading:f.isLoading,isFetching:f.isFetching||s&&p.isFetching,isError:f.isError||m,isEmpty:!o||!ue,error:{description:t(`We couldn't load this email's timeline. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:g}]},empty:{icon:ne,description:t(o?`No activity for this email in this period.`:`Open an email report to see its timeline here.`,`jetpack-premium-analytics-pkg`)},children:(0,E.jsx)(ce,{className:w.chart,series:S,styles:le,dataFormat:D})})})}function T({attributes:e={}}){return(0,E.jsx)(c,{attributes:e,children:(0,E.jsx)(ye,{metric:e.metric??`opens`,granularity:e.granularity??`day`})})}var E,D,O,be=e((()=>{m(),d(),le(),a(),n(),_e(),E=r(),D={type:`number`,options:{useMultipliers:!0,decimals:0}},O={opens:`opens_count`,clicks:`clicks_count`}})),k,xe=e((()=>{n(),s(),me(),k={icon:o,attributes:[{id:`metric`,label:t(`Metric`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:pe,elements:[{label:t(`Opens`,`jetpack-premium-analytics-pkg`),value:`opens`},{label:t(`Clicks`,`jetpack-premium-analytics-pkg`),value:`clicks`}]},{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:pe,elements:[{label:t(`By days`,`jetpack-premium-analytics-pkg`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics-pkg`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics-pkg`),value:`month`}],relevance:`high`}],example:{attributes:{metric:`opens`,granularity:`day`}}}})),A,j,M,N,P,Se,F,Ce=e((()=>{A=`jpa/email-time-series`,j=`Email performance`,M=`A single email's opens or clicks over time since it was sent.`,N={content:`How a single email performed over time: opens or clicks per day since it was sent, following the dashboard date range. Weekly and monthly grouping aggregate the daily buckets.`},P=`stats`,Se=`framed`,F={name:A,title:j,description:M,help:N,category:P,presentation:Se}}));function I(e){return k.attributes.find(t=>t.id===e)?.elements?.map(e=>e.value)??[]}function L({withComparison:e,metric:t,granularity:n}){return(0,z.jsx)(T,{attributes:{reportParams:{...g(e),post_id:V},metric:t,granularity:n}})}function R(e){return(0,z.jsx)(T,{attributes:{reportParams:{...g(!1),post_id:e},metric:`opens`,granularity:`day`}})}function we({withComparison:e,metric:t,granularity:n,...r}){return(0,z.jsx)(x,{...r,widgetType:b(F,k),renderModule:B,renderComponent:T,attributes:{reportParams:{...g(e),post_id:V},metric:t,granularity:n}})}var z,B,V,H,U,Te,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),ee(),p(),y(),_(),S(),be(),xe(),Ce(),z=r(),u(),B=`storybook/email-time-series`,V=1234,H=I(`metric`),U=I(`granularity`),Te={title:`Packages/Premium Analytics/Widgets/EmailTimeSeries`,component:T,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},metric:{control:`select`,options:H},granularity:{control:`select`,options:U}},parameters:{docs:{description:{component:"The \"Email performance\" widget. Draws a single sent email's opens or clicks per day as a line chart, spanning the dashboard date range — the chart section of the legacy email detail page. The `granularity` attribute (`relevance: 'high'`) is exposed as a control by the widget host; weekly grouping aggregates the daily buckets client-side because the endpoint only reports hourly/daily. Scoped to one email via a mocked `reportParams.post_id`. With the date picker's comparison on, the compare window is fetched as a second request and drawn as a dashed overlay with date-range legend labels."}}},decorators:[f]},W={render:L,args:{withComparison:!1,metric:`opens`,granularity:`day`},decorators:[C]},G={render:L,args:{withComparison:!0,metric:`opens`,granularity:`day`},decorators:[C]},K={render:L,args:{withComparison:!1,metric:`clicks`,granularity:`day`},decorators:[C]},q={render:L,args:{withComparison:!1,metric:`opens`,granularity:`week`},decorators:[C]},J={render:()=>R(5701),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(l(`stats/opens/emails`,`loading`),()=>l(`stats/opens/emails`,null))},Y={render:()=>R(5702),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(l(`stats/opens/emails`,`error`),()=>l(`stats/opens/emails`,null))},X={render:()=>R(5703),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(l(`stats/opens/emails`,`empty`),()=>l(`stats/opens/emails`,null))},Z={render:()=>(0,z.jsx)(T,{attributes:{reportParams:g(!1),metric:`opens`}}),decorators:[C]},Q={render:e=>(0,z.jsx)(we,{...e}),args:{...ue,withComparison:!0,metric:`opens`,granularity:`day`},argTypes:{...v,withComparison:{control:`boolean`},metric:{control:`select`,options:H},granularity:{control:`select`,options:U}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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