import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{n as o,ui as s,w as c}from"./build-module-CDRs4YxF.js";import{$ as l,K as ee,Y as u,q as te,rt as ne}from"./report-metric-I3SWuSNy.js";import{d as re,t as ie}from"./src-tEZrN6jJ.js";import{Lr as ae,Tt as d,hr as f,s as oe,tn as se}from"./chart-tooltip-CSGxnygQ.js";import{t as p}from"./chart-empty-state-BVN_WaiK.js";import{t as ce}from"./metric-tabs-chart-BhVjntEx.js";import{C as le,D as ue,E as de,S as fe,T as pe,b as me,t as he,w as ge,x as m}from"./src-Ds4jaArn.js";import{t as _e}from"./widget-state-OaOfTk3n.js";import{i as ve,n as h,t as ye}from"./src-i1nvZsMo.js";var g,_,v,be=e((()=>{g=`_root_t6a9k_1`,_=`_emptyState_t6a9k_10`,v={root:g,emptyState:_}}));function y(e){return(e?.data??[]).map(e=>({date:ae(e.date_start),subscribers:Number(e.subscribers??e.value??0),paid:Number(e.subscribers_paid??0)}))}function xe(e,t){let n=se((0,i.useMemo)(()=>({...e,period:t}),[e,t])),r=(0,i.useMemo)(()=>y(n.primary.data),[n.primary.data]);return{current:r,previous:(0,i.useMemo)(()=>y(n.comparison.data),[n.comparison.data]),hasPaid:r.some(e=>e.paid>0),isLoading:n.isLoading,isFetching:n.isFetching,isError:r.length===0&&n.isError,refetch:n.refetch}}var Se=e((()=>{d(),a()})),b,x,S,C,w=e((()=>{n(),o(),ye(),b=[{id:`line`,label:t(`Line chart`,`jetpack-premium-analytics-pkg`)},{id:`bar`,label:t(`Bar chart`,`jetpack-premium-analytics-pkg`)}],x=[{id:`subscribers`,label:t(`Subscribers`,`jetpack-premium-analytics-pkg`)},{id:`paid`,label:t(`Paid subscribers`,`jetpack-premium-analytics-pkg`)}],S=x.map(e=>e.id),C={icon:s,attributes:[{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:h,elements:[{label:t(`Auto`,`jetpack-premium-analytics-pkg`),value:`auto`},{label:t(`By days`,`jetpack-premium-analytics-pkg`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics-pkg`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics-pkg`),value:`month`}],relevance:`high`},{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics-pkg`),type:`array`,relevance:`high`,Edit:ve,elements:x.map(e=>({value:e.id,label:e.label}))},{id:`chartType`,label:t(`Chart type`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:h,elements:b.map(e=>({value:e.id,label:e.label})),relevance:`high`}],example:{attributes:{granularity:`auto`,metrics:S,chartType:`line`}}}}));function T(e,t){return e.length?t(e[e.length-1]):0}function Ce(e,t){let n=new Set(t);return x.filter(({id:t})=>n.has(t)&&(t!==`paid`||e.hasPaid)).map(({id:t,label:n})=>{let r=Te[t];return{key:t,label:n,value:T(e.current,r),previousValue:e.previous.length?T(e.previous,r):void 0,current:e.current.map(e=>({date:e.date,value:r(e)})),previous:e.previous.length?e.previous.map(e=>({date:e.date,value:r(e)})):void 0}})}function we({granularity:e,metrics:n=S,chartType:r}){let{reportParams:a}=ne(),o=xe(a,e===`auto`?oe(a.interval,k):e),s=(0,i.useMemo)(()=>Ce(o,n),[o,n]),l=t(`Subscriber metric`,`jetpack-premium-analytics-pkg`);return n.length?!s.length&&!o.isError?o.isLoading?null:(0,D.jsx)(p,{icon:c,text:t(`No paid subscribers in this date range.`,`jetpack-premium-analytics-pkg`)}):(0,D.jsx)(`div`,{className:v.root,children:(0,D.jsx)(_e,{isLoading:o.isLoading,isError:o.current.length===0&&o.isError,isEmpty:o.current.length===0,error:{description:t(`We couldn't load subscriber data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o.refetch}]},empty:{icon:re,description:t(`No subscriber data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,D.jsx)(ce,{metrics:s,dataFormat:O,chartType:r,loading:!0,groupLabel:l}),children:(0,D.jsx)(ce,{metrics:s,dataFormat:O,chartType:r,loading:o.isFetching,groupLabel:l})})}):(0,D.jsx)(p,{icon:c,text:t(`No metric selected. Please select a metric from the metrics list.`,`jetpack-premium-analytics-pkg`)})}function E({attributes:e={},setError:t}){return(0,D.jsx)(l,{attributes:e,setError:t,options:{from:`/`},children:(0,D.jsx)(we,{granularity:e.granularity??`auto`,metrics:e.metrics,chartType:e.chartType})})}var D,O,k,Te,Ee=e((()=>{he(),ie(),a(),o(),n(),be(),Se(),w(),D=r(),O={type:`number`,options:{useMultipliers:!0,decimals:0}},k=[`day`,`week`,`month`],Te={subscribers:e=>e.subscribers,paid:e=>e.paid}})),A,j,M,N,P,F,I,De=e((()=>{A=`jpa/subscribers-chart`,j=`Subscribers summary`,M=`Track subscriber growth over time, with paid subscribers and the previous period overlaid for comparison.`,N={content:`A summary of the new subscribers you gained over time.`},P=`subscribers`,F=`framed`,I={name:A,title:j,description:M,help:N,category:P,presentation:F}}));function L({withComparison:e,metrics:t,chartType:n}){return(0,z.jsx)(E,{attributes:{reportParams:f(e),metrics:t,chartType:n}})}function R(e){return(0,z.jsx)(E,{attributes:{reportParams:f(!1,e)}})}function Oe({withComparison:e,metrics:t,chartType:n,...r}){return(0,z.jsx)(pe,{...r,widgetType:V,renderModule:B,renderComponent:E,attributes:{reportParams:f(e),metrics:t,chartType:n}})}var z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),de(),le(),me(),ee(),Ee(),w(),De(),z=r(),te(),B=`storybook/subscribers-chart`,V=fe(I,C),H={metrics:{control:`check`,options:S},chartType:{control:`inline-radio`,options:[`line`,`bar`]}},U={metrics:S,chartType:`line`},W={title:`Packages/Premium Analytics/Widgets/SubscribersChart`,component:E,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...H},parameters:{docs:{description:{component:"Subscriber growth over time. The date range and previous-period comparison follow the dashboard picker; the \"Group by\" control is the `granularity` attribute and the tab selection is the `metrics` attribute (both `relevance: 'high'`), exposed by the widget host. When comparison is on, the previous period is overlaid as a same-colour dashed line and the headline shows the period-over-period delta. The Paid subscribers tab renders only when the site has paid subscribers, even while selected. Data comes from `useStatsSubscribersReport`; in Storybook it is served by `registerReportMocks`."}}}},G={render:L,args:{withComparison:!1,...U},decorators:[m]},K={render:L,args:{withComparison:!0,...U},decorators:[m]},q={render:L,args:{withComparison:!1,...U,chartType:`bar`},decorators:[m]},J={render:L,args:{withComparison:!0,...U,chartType:`bar`},decorators:[m]},Y={render:()=>R(`last-90-days`),tags:[`!autodocs`],decorators:[m],beforeEach:()=>(u(`stats/subscribers`,`loading`),()=>u(`stats/subscribers`,null))},X={render:()=>R(`last-7-days`),tags:[`!autodocs`],decorators:[m],beforeEach:()=>(u(`stats/subscribers`,`error`),()=>u(`stats/subscribers`,null))},Z={render:()=>R(`last-365-days`),tags:[`!autodocs`],decorators:[m],beforeEach:()=>(u(`stats/subscribers`,`empty`),()=>u(`stats/subscribers`,null))},Q={render:e=>(0,z.jsx)(Oe,{...e}),args:{...ge,withComparison:!0,...U},argTypes:{...ue,withComparison:{control:`boolean`},...H}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderSubscribersChart,
  args: {
    withComparison: false,
    ...ALL_METRICS_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...G.parameters?.docs?.source},description:{story:`The widget on its own, current period only.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderSubscribersChart,
  args: {
    withComparison: true,
    ...ALL_METRICS_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`Same close-up with the dashboard comparison range applied, so the previous
period is overlaid as a dashed line and the headline shows the delta.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderSubscribersChart,
  args: {
    withComparison: false,
    ...ALL_METRICS_ARGS,
    chartType: 'bar'
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:"The same widget drawn as bars — the `chartType` attribute set to `bar`.",...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderSubscribersChart,
  args: {
    withComparison: true,
    ...ALL_METRICS_ARGS,
    chartType: 'bar'
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:`Bars with comparison on: the previous period renders as the translucent
shadow bar behind each current-period bar, and its value joins the tooltip.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderSubscribersChartOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/subscribers', 'loading');
    return () => setReportMockState('stats/subscribers', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state (the
metric tabs over the chart's loading overlay). The mock is forced to never
resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderSubscribersChartOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/subscribers', 'error');
    return () => setReportMockState('stats/subscribers', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderSubscribersChartOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/subscribers', 'empty');
    return () => setReportMockState('stats/subscribers', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no points: the widget shows its empty state (the neutral
customer glyph and "No subscriber data in this period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <SubscribersChartDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    withComparison: true,
    ...ALL_METRICS_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean'
    },
    ...METRIC_ARG_TYPES
  }
}`,...Q.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithComparison`,`BarChart`,`BarChartWithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as BarChart,J as BarChartWithComparison,G as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,W as default};