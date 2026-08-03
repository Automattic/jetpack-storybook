import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{Zt as o,n as s}from"./build-module-DoJYX5DX.js";import{G as c,W as ee,Z as te,q as l,tt as ne}from"./report-metric-ci9FaX7m.js";import{A as re,t as u}from"./src-B3le4dug.js";import{a as ie}from"./hooks-1XnoANKR.js";import{n as d,t as f}from"./with-chart-theme-DZQG5vM0.js";import{Ct as p,_r as ae,gr as oe,kr as se,ur as m,wt as ce,xt as h}from"./chart-tooltip-DhFNGd_B.js";import{t as le}from"./comparative-line-chart-DZACDAKK.js";import{t as ue}from"./widget-state-BW9cbP2U.js";import{a as de}from"./report-records-table-CZLmzrPo.js";import{C as g,D as _,E as v,S as y,T as b,b as x,t as fe,w as pe,x as S}from"./src-D3XXi1TL.js";import{n as me,t as he}from"./src-YHK2Z47G.js";var ge,_e,C,ve=e((()=>{ge=`_root_gxrb3_3`,_e=`_chart_gxrb3_12`,C={root:ge,chart:_e}}));function ye(e){return t(e===`clicks`?`Total clicks`:`Total opens`,`jetpack-premium-analytics-pkg`)}function be({metric:e,granularity:n}){let{reportParams:r}=ne(),a=se(r.post_id),o=a>0,s=!!(r.compare_from&&r.compare_to),c=(0,i.useMemo)(()=>({...r,from:r.compare_from??``,to:r.compare_to??``,preset:void 0,comp:void 0,compare_from:void 0,compare_to:void 0,compare_preset:void 0}),[r]),ee=ce(a,r,{enabled:o&&e===`opens`}),te=p(a,r,{enabled:o&&e===`clicks`}),l=ce(a,c,{enabled:o&&s&&e===`opens`}),u=p(a,c,{enabled:o&&s&&e===`clicks`}),d=e===`clicks`?te:ee,f=e===`clicks`?u:l,m=s&&f.isError&&f.data===void 0,h=(0,i.useCallback)(()=>{d.refetch(),s&&f.refetch()},[d,f,s]),g=d.data,_=s?f.data:void 0,v=D[e],y=(0,i.useMemo)(()=>{if(g)return n===`day`?g:oe(g,n,e=>{let t=Number(e[v]??0);return{value:t,[v]:t}})},[g,n,v]),b=(0,i.useMemo)(()=>{if(!g||!_)return;if(n===`day`)return _;let e=g.data.map(e=>ae(e.time_interval,n));if(!e.length)return;let t=new Map,r=[];return _.data.forEach((n,i)=>{let a=e[Math.min(i,e.length-1)],o=Number(n[v]??0),s=t.get(a);s?s.value+=o:(t.set(a,{start:n,value:o}),r.push(a))}),{..._,data:r.map(e=>{let n=t.get(e);return{...n.start,value:n.value,[v]:n.value}})}},[g,_,n,v]),x=(0,i.useMemo)(()=>y?de({primary:y,comparison:b,metrics:[{key:v,label:ye(e)}]}):[],[y,b,v,e]),fe=ie(x),pe=(y?.data?.length??0)>0;return(0,T.jsx)(`div`,{className:C.root,children:(0,T.jsx)(ue,{isLoading:d.isLoading,isFetching:d.isFetching||s&&f.isFetching,isError:d.isError||m,isEmpty:!o||!pe,error:{description:t(`We couldn't load this email's timeline. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:h}]},empty:{icon:re,description:t(o?`No activity for this email in this period.`:`Open an email report to see its timeline here.`,`jetpack-premium-analytics-pkg`)},children:(0,T.jsx)(le,{className:C.chart,series:x,styles:fe,dataFormat:E})})})}function w({attributes:e={}}){return(0,T.jsx)(te,{attributes:e,children:(0,T.jsx)(be,{metric:e.metric??`opens`,granularity:e.granularity??`day`})})}var T,E,D,xe=e((()=>{h(),u(),fe(),a(),n(),ve(),T=r(),E={type:`number`,options:{useMultipliers:!0,decimals:0}},D={opens:`opens_count`,clicks:`clicks_count`}})),O,Se=e((()=>{n(),s(),he(),O={icon:o,attributes:[{id:`metric`,label:t(`Metric`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:me,elements:[{label:t(`Opens`,`jetpack-premium-analytics-pkg`),value:`opens`},{label:t(`Clicks`,`jetpack-premium-analytics-pkg`),value:`clicks`}]},{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:me,elements:[{label:t(`By days`,`jetpack-premium-analytics-pkg`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics-pkg`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics-pkg`),value:`month`}],relevance:`high`}],example:{attributes:{metric:`opens`,granularity:`day`}}}})),k,A,j,M,N,Ce,P,we=e((()=>{k=`jpa/email-time-series`,A=`Email performance`,j=`A single email's opens or clicks over time since it was sent.`,M={content:`How a single email performed over time: opens or clicks per day since it was sent, following the dashboard date range. Weekly and monthly grouping aggregate the daily buckets.`},N=`stats`,Ce=`framed`,P={name:k,title:A,description:j,help:M,category:N,presentation:Ce}}));function F(e){return O.attributes.find(t=>t.id===e)?.elements?.map(e=>e.value)??[]}function I({withComparison:e,metric:t,granularity:n}){return(0,R.jsx)(w,{attributes:{reportParams:{...m(e),post_id:B},metric:t,granularity:n}})}function L(e){return(0,R.jsx)(w,{attributes:{reportParams:{...m(!1),post_id:e},metric:`opens`,granularity:`day`}})}function Te({withComparison:e,metric:t,granularity:n,...r}){return(0,R.jsx)(b,{...r,widgetType:y(P,O),renderModule:z,renderComponent:w,attributes:{reportParams:{...m(e),post_id:B},metric:t,granularity:n}})}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),ee(),f(),v(),g(),x(),xe(),Se(),we(),R=r(),c(),z=`storybook/email-time-series`,B=1234,V=F(`metric`),H=F(`granularity`),U={title:`Packages/Premium Analytics/Widgets/EmailTimeSeries`,component:w,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},metric:{control:`select`,options:V},granularity:{control:`select`,options:H}},parameters:{docs:{description:{component:"The \"Email performance\" widget. Draws a single sent email's opens or clicks per day as a line chart, spanning the dashboard date range — the chart section of the legacy email detail page. The `granularity` attribute (`relevance: 'high'`) is exposed as a control by the widget host; weekly grouping aggregates the daily buckets client-side because the endpoint only reports hourly/daily. Scoped to one email via a mocked `reportParams.post_id`. With the date picker's comparison on, the compare window is fetched as a second request and drawn as a dashed overlay with date-range legend labels."}}},decorators:[d]},W={render:I,args:{withComparison:!1,metric:`opens`,granularity:`day`},decorators:[S]},G={render:I,args:{withComparison:!0,metric:`opens`,granularity:`day`},decorators:[S]},K={render:I,args:{withComparison:!1,metric:`clicks`,granularity:`day`},decorators:[S]},q={render:I,args:{withComparison:!1,metric:`opens`,granularity:`week`},decorators:[S]},J={render:()=>L(5701),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(l(`stats/opens/emails`,`loading`),()=>l(`stats/opens/emails`,null))},Y={render:()=>L(5702),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(l(`stats/opens/emails`,`error`),()=>l(`stats/opens/emails`,null))},X={render:()=>L(5703),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(l(`stats/opens/emails`,`empty`),()=>l(`stats/opens/emails`,null))},Z={render:()=>(0,R.jsx)(w,{attributes:{reportParams:m(!1),metric:`opens`}}),decorators:[S]},Q={render:e=>(0,R.jsx)(Te,{...e}),args:{...pe,withComparison:!0,metric:`opens`,granularity:`day`},argTypes:{..._,withComparison:{control:`boolean`},metric:{control:`select`,options:V},granularity:{control:`select`,options:H}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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