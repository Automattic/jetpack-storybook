import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{Zt as o,n as s}from"./build-module-DmVuor49.js";import{a as ee}from"./hooks-grhlHtsz.js";import{A as te,t as c}from"./src-B3le4dug.js";import{Dr as ne,St as l,cr as u,hr as re,mr as ie,xt as d,yt as f}from"./chart-tooltip-BlKjI_Wq.js";import{n as ae,t as oe}from"./with-chart-theme-BqwvMwUD.js";import{t as se}from"./comparative-line-chart-AvP1I6FY.js";import{F as p,G as ce,L as m,P as h,V as g}from"./report-metric-DKRyj5b-.js";import{a as le}from"./report-records-table-DrEtafJk.js";import{t as ue}from"./widget-state-BGeUKz9u.js";import{C as _,D as v,E as y,S as b,T as x,b as S,t as de,w as fe,x as C}from"./src-CINJv1gg.js";import{n as pe,t as me}from"./src-BbbYb-w1.js";var he,ge,w,_e=e((()=>{he=`_root_gxrb3_3`,ge=`_chart_gxrb3_12`,w={root:he,chart:ge}}));function ve(e){return t(e===`clicks`?`Total clicks`:`Total opens`,`jetpack-premium-analytics`)}function ye({metric:e,granularity:n}){let{reportParams:r}=ce(),a=ne(r.post_id),o=a>0,s=!!(r.compare_from&&r.compare_to),c=(0,i.useMemo)(()=>({...r,from:r.compare_from??``,to:r.compare_to??``,preset:void 0,comp:void 0,compare_from:void 0,compare_to:void 0,compare_preset:void 0}),[r]),u=l(a,r,{enabled:o&&e===`opens`}),f=d(a,r,{enabled:o&&e===`clicks`}),ae=l(a,c,{enabled:o&&s&&e===`opens`}),oe=d(a,c,{enabled:o&&s&&e===`clicks`}),p=e===`clicks`?f:u,m=e===`clicks`?oe:ae,h=s&&m.isError&&m.data===void 0,g=(0,i.useCallback)(()=>{p.refetch(),s&&m.refetch()},[p,m,s]),_=p.data,v=s?m.data:void 0,y=O[e],b=(0,i.useMemo)(()=>{if(_)return n===`day`?_:ie(_,n,e=>{let t=Number(e[y]??0);return{value:t,[y]:t}})},[_,n,y]),x=(0,i.useMemo)(()=>{if(!_||!v)return;if(n===`day`)return v;let e=_.data.map(e=>re(e.time_interval,n));if(!e.length)return;let t=new Map,r=[];return v.data.forEach((n,i)=>{let a=e[Math.min(i,e.length-1)],o=Number(n[y]??0),s=t.get(a);s?s.value+=o:(t.set(a,{start:n,value:o}),r.push(a))}),{...v,data:r.map(e=>{let n=t.get(e);return{...n.start,value:n.value,[y]:n.value}})}},[_,v,n,y]),S=(0,i.useMemo)(()=>b?le({primary:b,comparison:x,metrics:[{key:y,label:ve(e)}]}):[],[b,x,y,e]),de=ee(S),fe=(b?.data?.length??0)>0;return(0,E.jsx)(`div`,{className:w.root,children:(0,E.jsx)(ue,{isLoading:p.isLoading,isFetching:p.isFetching||s&&m.isFetching,isError:p.isError||h,isEmpty:!o||!fe,error:{description:t(`We couldn't load this email's timeline. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:g}]},empty:{icon:te,description:t(o?`No activity for this email in this period.`:`Open an email report to see its timeline here.`,`jetpack-premium-analytics`)},children:(0,E.jsx)(se,{className:w.chart,series:S,styles:de,dataFormat:D})})})}function T({attributes:e={}}){return(0,E.jsx)(g,{attributes:e,children:(0,E.jsx)(ye,{metric:e.metric??`opens`,granularity:e.granularity??`day`})})}var E,D,O,be=e((()=>{f(),c(),de(),a(),n(),_e(),E=r(),D={type:`number`,options:{useMultipliers:!0,decimals:0}},O={opens:`opens_count`,clicks:`clicks_count`}})),k,xe=e((()=>{n(),s(),me(),k={icon:o,attributes:[{id:`metric`,label:t(`Metric`,`jetpack-premium-analytics`),type:`text`,Edit:pe,elements:[{label:t(`Opens`,`jetpack-premium-analytics`),value:`opens`},{label:t(`Clicks`,`jetpack-premium-analytics`),value:`clicks`}]},{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics`),type:`text`,Edit:pe,elements:[{label:t(`By days`,`jetpack-premium-analytics`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics`),value:`month`}],relevance:`high`}],example:{attributes:{metric:`opens`,granularity:`day`}}}})),A,j,M,N,P,F,I,Se=e((()=>{A=`jpa/email-time-series`,j=`Email performance`,M=`A single email's opens or clicks over time since it was sent.`,N={content:`How a single email performed over time: opens or clicks per day since it was sent, following the dashboard date range. Weekly and monthly grouping aggregate the daily buckets.`},P=`stats`,F=`framed`,I={name:A,title:j,description:M,help:N,category:P,presentation:F}}));function L(e){return k.attributes.find(t=>t.id===e)?.elements?.map(e=>e.value)??[]}function R({withComparison:e,metric:t,granularity:n}){return(0,B.jsx)(T,{attributes:{reportParams:{...u(e),post_id:V},metric:t,granularity:n}})}function z(e){return(0,B.jsx)(T,{attributes:{reportParams:{...u(!1),post_id:e},metric:`opens`,granularity:`day`}})}function Ce({withComparison:e,metric:t,granularity:n,...r}){return(0,B.jsx)(x,{...r,widgetType:b(I,k),renderModule:we,renderComponent:T,attributes:{reportParams:{...u(e),post_id:V},metric:t,granularity:n}})}var B,we,V,H,U,Te,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{f(),h(),oe(),y(),_(),S(),be(),xe(),Se(),B=r(),p(),we=`storybook/email-time-series`,V=1234,H=L(`metric`),U=L(`granularity`),Te={title:`Packages/Premium Analytics/Widgets/EmailTimeSeries`,component:T,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},metric:{control:`select`,options:H},granularity:{control:`select`,options:U}},parameters:{docs:{description:{component:"The \"Email performance\" widget. Draws a single sent email's opens or clicks per day as a line chart, spanning the dashboard date range — the chart section of the legacy email detail page. The `granularity` attribute (`relevance: 'high'`) is exposed as a control by the widget host; weekly grouping aggregates the daily buckets client-side because the endpoint only reports hourly/daily. Scoped to one email via a mocked `reportParams.post_id`. With the date picker's comparison on, the compare window is fetched as a second request and drawn as a dashed overlay with date-range legend labels."}}},decorators:[ae]},W={render:R,args:{withComparison:!1,metric:`opens`,granularity:`day`},decorators:[C]},G={render:R,args:{withComparison:!0,metric:`opens`,granularity:`day`},decorators:[C]},K={render:R,args:{withComparison:!1,metric:`clicks`,granularity:`day`},decorators:[C]},q={render:R,args:{withComparison:!1,metric:`opens`,granularity:`week`},decorators:[C]},J={render:()=>z(5701),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(m(`stats/opens/emails`,`loading`),()=>m(`stats/opens/emails`,null))},Y={render:()=>z(5702),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(m(`stats/opens/emails`,`error`),()=>m(`stats/opens/emails`,null))},X={render:()=>z(5703),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(m(`stats/opens/emails`,`empty`),()=>m(`stats/opens/emails`,null))},Z={render:()=>(0,B.jsx)(T,{attributes:{reportParams:u(!1),metric:`opens`}}),decorators:[C]},Q={render:e=>(0,B.jsx)(Ce,{...e}),args:{...fe,withComparison:!0,metric:`opens`,granularity:`day`},argTypes:{...v,withComparison:{control:`boolean`},metric:{control:`select`,options:H},granularity:{control:`select`,options:U}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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