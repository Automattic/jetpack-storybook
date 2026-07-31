import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{Zt as o,n as s}from"./build-module-DmVuor49.js";import{H as c,J as ee,Q as te,V as l,W as u}from"./report-metric-CSzTDTEC.js";import{A as ne,t as d}from"./src-B3le4dug.js";import{a as re}from"./hooks-DiQVK1YZ.js";import{n as f,t as p}from"./with-chart-theme-DF7E1KD0.js";import{Ct as m,_r as ie,gr as ae,kr as oe,ur as h,wt as g,xt as _}from"./chart-tooltip-C9kWQuko.js";import{t as se}from"./comparative-line-chart-q2XRcLJF.js";import{a as ce}from"./report-records-table-Bmb4X5MG.js";import{t as le}from"./widget-state-ejfU-hpe.js";import{C as v,D as y,E as b,S as x,T as S,b as C,t as ue,w as de,x as w}from"./src-BvIqA6q0.js";import{n as fe,t as pe}from"./src-dAczne-4.js";var me,he,T,ge=e((()=>{me=`_root_gxrb3_3`,he=`_chart_gxrb3_12`,T={root:me,chart:he}}));function _e(e){return t(e===`clicks`?`Total clicks`:`Total opens`,`jetpack-premium-analytics-pkg`)}function ve({metric:e,granularity:n}){let{reportParams:r}=te(),a=oe(r.post_id),o=a>0,s=!!(r.compare_from&&r.compare_to),c=(0,i.useMemo)(()=>({...r,from:r.compare_from??``,to:r.compare_to??``,preset:void 0,comp:void 0,compare_from:void 0,compare_to:void 0,compare_preset:void 0}),[r]),ee=g(a,r,{enabled:o&&e===`opens`}),l=m(a,r,{enabled:o&&e===`clicks`}),u=g(a,c,{enabled:o&&s&&e===`opens`}),d=m(a,c,{enabled:o&&s&&e===`clicks`}),f=e===`clicks`?l:ee,p=e===`clicks`?d:u,h=s&&p.isError&&p.data===void 0,_=(0,i.useCallback)(()=>{f.refetch(),s&&p.refetch()},[f,p,s]),v=f.data,y=s?p.data:void 0,b=k[e],x=(0,i.useMemo)(()=>{if(v)return n===`day`?v:ae(v,n,e=>{let t=Number(e[b]??0);return{value:t,[b]:t}})},[v,n,b]),S=(0,i.useMemo)(()=>{if(!v||!y)return;if(n===`day`)return y;let e=v.data.map(e=>ie(e.time_interval,n));if(!e.length)return;let t=new Map,r=[];return y.data.forEach((n,i)=>{let a=e[Math.min(i,e.length-1)],o=Number(n[b]??0),s=t.get(a);s?s.value+=o:(t.set(a,{start:n,value:o}),r.push(a))}),{...y,data:r.map(e=>{let n=t.get(e);return{...n.start,value:n.value,[b]:n.value}})}},[v,y,n,b]),C=(0,i.useMemo)(()=>x?ce({primary:x,comparison:S,metrics:[{key:b,label:_e(e)}]}):[],[x,S,b,e]),ue=re(C),de=(x?.data?.length??0)>0;return(0,D.jsx)(`div`,{className:T.root,children:(0,D.jsx)(le,{isLoading:f.isLoading,isFetching:f.isFetching||s&&p.isFetching,isError:f.isError||h,isEmpty:!o||!de,error:{description:t(`We couldn't load this email's timeline. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:_}]},empty:{icon:ne,description:t(o?`No activity for this email in this period.`:`Open an email report to see its timeline here.`,`jetpack-premium-analytics-pkg`)},children:(0,D.jsx)(se,{className:T.chart,series:C,styles:ue,dataFormat:O})})})}function E({attributes:e={}}){return(0,D.jsx)(ee,{attributes:e,children:(0,D.jsx)(ve,{metric:e.metric??`opens`,granularity:e.granularity??`day`})})}var D,O,k,ye=e((()=>{_(),d(),ue(),a(),n(),ge(),D=r(),O={type:`number`,options:{useMultipliers:!0,decimals:0}},k={opens:`opens_count`,clicks:`clicks_count`}})),A,be=e((()=>{n(),s(),pe(),A={icon:o,attributes:[{id:`metric`,label:t(`Metric`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:fe,elements:[{label:t(`Opens`,`jetpack-premium-analytics-pkg`),value:`opens`},{label:t(`Clicks`,`jetpack-premium-analytics-pkg`),value:`clicks`}]},{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:fe,elements:[{label:t(`By days`,`jetpack-premium-analytics-pkg`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics-pkg`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics-pkg`),value:`month`}],relevance:`high`}],example:{attributes:{metric:`opens`,granularity:`day`}}}})),j,M,N,P,F,xe,I,Se=e((()=>{j=`jpa/email-time-series`,M=`Email performance`,N=`A single email's opens or clicks over time since it was sent.`,P={content:`How a single email performed over time: opens or clicks per day since it was sent, following the dashboard date range. Weekly and monthly grouping aggregate the daily buckets.`},F=`stats`,xe=`framed`,I={name:j,title:M,description:N,help:P,category:F,presentation:xe}}));function L(e){return A.attributes.find(t=>t.id===e)?.elements?.map(e=>e.value)??[]}function R({withComparison:e,metric:t,granularity:n}){return(0,B.jsx)(E,{attributes:{reportParams:{...h(e),post_id:V},metric:t,granularity:n}})}function z(e){return(0,B.jsx)(E,{attributes:{reportParams:{...h(!1),post_id:e},metric:`opens`,granularity:`day`}})}function Ce({withComparison:e,metric:t,granularity:n,...r}){return(0,B.jsx)(S,{...r,widgetType:x(I,A),renderModule:we,renderComponent:E,attributes:{reportParams:{...h(e),post_id:V},metric:t,granularity:n}})}var B,we,V,H,U,Te,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{_(),l(),p(),b(),v(),C(),ye(),be(),Se(),B=r(),c(),we=`storybook/email-time-series`,V=1234,H=L(`metric`),U=L(`granularity`),Te={title:`Packages/Premium Analytics/Widgets/EmailTimeSeries`,component:E,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},metric:{control:`select`,options:H},granularity:{control:`select`,options:U}},parameters:{docs:{description:{component:"The \"Email performance\" widget. Draws a single sent email's opens or clicks per day as a line chart, spanning the dashboard date range — the chart section of the legacy email detail page. The `granularity` attribute (`relevance: 'high'`) is exposed as a control by the widget host; weekly grouping aggregates the daily buckets client-side because the endpoint only reports hourly/daily. Scoped to one email via a mocked `reportParams.post_id`. With the date picker's comparison on, the compare window is fetched as a second request and drawn as a dashed overlay with date-range legend labels."}}},decorators:[f]},W={render:R,args:{withComparison:!1,metric:`opens`,granularity:`day`},decorators:[w]},G={render:R,args:{withComparison:!0,metric:`opens`,granularity:`day`},decorators:[w]},K={render:R,args:{withComparison:!1,metric:`clicks`,granularity:`day`},decorators:[w]},q={render:R,args:{withComparison:!1,metric:`opens`,granularity:`week`},decorators:[w]},J={render:()=>z(5701),tags:[`!autodocs`],decorators:[w],beforeEach:()=>(u(`stats/opens/emails`,`loading`),()=>u(`stats/opens/emails`,null))},Y={render:()=>z(5702),tags:[`!autodocs`],decorators:[w],beforeEach:()=>(u(`stats/opens/emails`,`error`),()=>u(`stats/opens/emails`,null))},X={render:()=>z(5703),tags:[`!autodocs`],decorators:[w],beforeEach:()=>(u(`stats/opens/emails`,`empty`),()=>u(`stats/opens/emails`,null))},Z={render:()=>(0,B.jsx)(E,{attributes:{reportParams:h(!1),metric:`opens`}}),decorators:[w]},Q={render:e=>(0,B.jsx)(Ce,{...e}),args:{...de,withComparison:!0,metric:`opens`,granularity:`day`},argTypes:{...y,withComparison:{control:`boolean`},metric:{control:`select`,options:H},granularity:{control:`select`,options:U}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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