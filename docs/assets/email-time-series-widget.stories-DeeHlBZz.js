import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{Zt as o,n as s}from"./build-module-DmVuor49.js";import{a as ee}from"./hooks-BTXVTCtE.js";import{A as te,t as c}from"./src-B3le4dug.js";import{dt as l,er as u,mt as d,or as ne,pt as f,sr as re,yr as ie}from"./chart-tooltip-BpbC1Ly_.js";import{n as p,t as m}from"./with-chart-theme-CdT8OVpj.js";import{t as ae}from"./comparative-line-chart-JFaEYCog.js";import{H as oe,M as h,P as g,R as _,j as v}from"./report-metric-DrX_Wimw.js";import{a as se}from"./report-records-table-BOslJ1CD.js";import{t as ce}from"./widget-state-Cthq0GVH.js";import{C as y,S as b,T as x,b as S,t as C,w,x as T}from"./src-eTaSBNiP.js";import{n as E,t as le}from"./src-BUlnQHAi.js";var D,O,k,ue=e((()=>{D=`_root_gxrb3_3`,O=`_chart_gxrb3_12`,k={root:D,chart:O}}));function de(e){return t(e===`clicks`?`Total clicks`:`Total opens`,`jetpack-premium-analytics`)}function fe({metric:e,granularity:n}){let{reportParams:r}=oe(),a=ie(r.post_id),o=a>0,s=!!(r.compare_from&&r.compare_to),c=(0,i.useMemo)(()=>({...r,from:r.compare_from??``,to:r.compare_to??``,preset:void 0,comp:void 0,compare_from:void 0,compare_to:void 0,compare_preset:void 0}),[r]),l=d(a,r,{enabled:o&&e===`opens`}),u=f(a,r,{enabled:o&&e===`clicks`}),p=d(a,c,{enabled:o&&s&&e===`opens`}),m=f(a,c,{enabled:o&&s&&e===`clicks`}),h=e===`clicks`?u:l,g=e===`clicks`?m:p,_=s&&g.isError&&g.data===void 0,v=(0,i.useCallback)(()=>{h.refetch(),s&&g.refetch()},[h,g,s]),y=h.data,b=s?g.data:void 0,x=N[e],S=(0,i.useMemo)(()=>{if(y)return n===`day`?y:ne(y,n,e=>{let t=Number(e[x]??0);return{value:t,[x]:t}})},[y,n,x]),C=(0,i.useMemo)(()=>{if(!y||!b)return;if(n===`day`)return b;let e=y.data.map(e=>re(e.time_interval,n));if(!e.length)return;let t=new Map,r=[];return b.data.forEach((n,i)=>{let a=e[Math.min(i,e.length-1)],o=Number(n[x]??0),s=t.get(a);s?s.value+=o:(t.set(a,{start:n,value:o}),r.push(a))}),{...b,data:r.map(e=>{let n=t.get(e);return{...n.start,value:n.value,[x]:n.value}})}},[y,b,n,x]),w=(0,i.useMemo)(()=>S?se({primary:S,comparison:C,metrics:[{key:x,label:de(e)}]}):[],[S,C,x,e]),T=ee(w),E=(S?.data?.length??0)>0;return(0,j.jsx)(`div`,{className:k.root,children:(0,j.jsx)(ce,{isLoading:h.isLoading,isFetching:h.isFetching||s&&g.isFetching,isError:h.isError||_,isEmpty:!o||!E,error:{description:t(`We couldn't load this email's timeline. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:v}]},empty:{icon:te,description:t(o?`No activity for this email in this period.`:`Open an email report to see its timeline here.`,`jetpack-premium-analytics`)},children:(0,j.jsx)(ae,{className:k.chart,series:w,styles:T,dataFormat:M})})})}function A({attributes:e={}}){return(0,j.jsx)(_,{attributes:e,children:(0,j.jsx)(fe,{metric:e.metric??`opens`,granularity:e.granularity??`day`})})}var j,M,N,pe=e((()=>{l(),c(),C(),a(),n(),ue(),j=r(),M={type:`number`,options:{useMultipliers:!0,decimals:0}},N={opens:`opens_count`,clicks:`clicks_count`}})),P,me=e((()=>{n(),s(),le(),P={name:`jpa/email-time-series`,title:t(`Email performance`,`jetpack-premium-analytics`),icon:o,help:{content:t(`How a single email performed over time: opens or clicks per day since it was sent, following the dashboard date range. Weekly and monthly grouping aggregate the daily buckets.`,`jetpack-premium-analytics`)},attributes:[{id:`metric`,label:t(`Metric`,`jetpack-premium-analytics`),type:`text`,Edit:E,elements:[{label:t(`Opens`,`jetpack-premium-analytics`),value:`opens`},{label:t(`Clicks`,`jetpack-premium-analytics`),value:`clicks`}]},{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics`),type:`text`,Edit:E,elements:[{label:t(`By days`,`jetpack-premium-analytics`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics`),value:`month`}],relevance:`high`}],example:{attributes:{metric:`opens`,granularity:`day`}}}}));function F(e){return P.attributes.find(t=>t.id===e)?.elements?.map(e=>e.value)??[]}function I({withComparison:e,metric:t,granularity:n}){return(0,R.jsx)(A,{attributes:{reportParams:{...u(e),post_id:B},metric:t,granularity:n}})}function L(e){return(0,R.jsx)(A,{attributes:{reportParams:{...u(!1),post_id:e},metric:`opens`,granularity:`day`}})}function he({withComparison:e,metric:t,granularity:n,...r}){return(0,R.jsx)(y,{...r,widgetType:{...P,presentation:`framed`},renderModule:z,renderComponent:A,attributes:{reportParams:{...u(e),post_id:B},metric:t,granularity:n}})}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{l(),v(),m(),w(),S(),pe(),me(),R=r(),h(),z=`storybook/email-time-series`,B=1234,V=F(`metric`),H=F(`granularity`),U={title:`Packages/Premium Analytics/Widgets/EmailTimeSeries`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},metric:{control:`select`,options:V},granularity:{control:`select`,options:H}},parameters:{docs:{description:{component:"The \"Email performance\" widget. Draws a single sent email's opens or clicks per day as a line chart, spanning the dashboard date range — the chart section of the legacy email detail page. The `granularity` attribute (`relevance: 'high'`) is exposed as a control by the widget host; weekly grouping aggregates the daily buckets client-side because the endpoint only reports hourly/daily. Scoped to one email via a mocked `reportParams.post_id`. With the date picker's comparison on, the compare window is fetched as a second request and drawn as a dashed overlay with date-range legend labels."}}},decorators:[p]},W={render:I,args:{withComparison:!1,metric:`opens`,granularity:`day`},decorators:[T]},G={render:I,args:{withComparison:!0,metric:`opens`,granularity:`day`},decorators:[T]},K={render:I,args:{withComparison:!1,metric:`clicks`,granularity:`day`},decorators:[T]},q={render:I,args:{withComparison:!1,metric:`opens`,granularity:`week`},decorators:[T]},J={render:()=>L(5701),tags:[`!autodocs`],decorators:[T],beforeEach:()=>(g(`stats/opens/emails`,`loading`),()=>g(`stats/opens/emails`,null))},Y={render:()=>L(5702),tags:[`!autodocs`],decorators:[T],beforeEach:()=>(g(`stats/opens/emails`,`error`),()=>g(`stats/opens/emails`,null))},X={render:()=>L(5703),tags:[`!autodocs`],decorators:[T],beforeEach:()=>(g(`stats/opens/emails`,`empty`),()=>g(`stats/opens/emails`,null))},Z={render:()=>(0,R.jsx)(A,{attributes:{reportParams:u(!1),metric:`opens`}}),decorators:[T]},Q={render:e=>(0,R.jsx)(he,{...e}),args:{...b,withComparison:!0,metric:`opens`,granularity:`day`},argTypes:{...x,withComparison:{control:`boolean`},metric:{control:`select`,options:V},granularity:{control:`select`,options:H}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Clicks`,`ByWeeks`,`Loading`,`Error`,`Empty`,`NoEmailSelected`,`WidgetDashboardWithWidget`]}))();export{q as ByWeeks,K as Clicks,W as Default,X as Empty,Y as Error,J as Loading,Z as NoEmailSelected,Q as WidgetDashboardWithWidget,G as WithComparison,$ as __namedExportsOrder,U as default};