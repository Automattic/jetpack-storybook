import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{n as o,ui as ee}from"./build-module-CDRs4YxF.js";import{J as te,Z as s,at as ne,q as re,tt as ie}from"./report-metric-BywRn0bl.js";import{p as ae,t as oe}from"./src-BKLK-O8P.js";import{En as se,N as ce,qt as c,t as l}from"./src-BqoIAWGs.js";import{a as le,h as ue}from"./chart-tooltip-CBXJFs6e.js";import{r as u,t as de}from"./metric-tabs-chart-skeleton-BmjwUCuu.js";import{t as fe}from"./widget-state-CCVIVgZN.js";import{C as pe,D as me,E as d,S as f,T as he,b as p,t as m,w as ge,x as h}from"./src-CNbqXo4B.js";var g,_,v,_e=e((()=>{g=`_root_79bqb_1`,_=`_emptyState_79bqb_9`,v={root:g,emptyState:_}}));function y(e){return(e?.data??[]).map(e=>({date:se(e.date_start),subscribers:Number(e.subscribers??e.value??0),paid:Number(e.subscribers_paid??0)}))}function ve(e,t){let n=ce((0,i.useMemo)(()=>({...e,period:t}),[e,t])),r=(0,i.useMemo)(()=>y(n.primary.data),[n.primary.data]);return{current:r,previous:(0,i.useMemo)(()=>y(n.comparison.data),[n.comparison.data]),hasPaid:r.some(e=>e.paid>0),isLoading:n.isLoading,isFetching:n.isFetching,isError:r.length===0&&n.isError,refetch:n.refetch}}var ye=e((()=>{l(),a()})),b,x,S=e((()=>{n(),o(),m(),b=[{id:`subscribers`,label:t(`Subscribers`,`jetpack-premium-analytics-pkg`)},{id:`paid`,label:t(`Paid subscribers`,`jetpack-premium-analytics-pkg`)}],x={icon:ee,attributes:[le()],example:{attributes:{chartType:`line`}}}}));function C(e,t){return e.length?t(e[e.length-1]):0}function be(e){return b.filter(({id:t})=>t!==`paid`||e.hasPaid).map(({id:t,label:n})=>{let r=O[t];return{key:t,label:n,value:C(e.current,r),previousValue:e.previous.length?C(e.previous,r):void 0,current:e.current.map(e=>({date:e.date,value:r(e)})),previous:e.previous.length?e.previous.map(e=>({date:e.date,value:r(e)})):void 0}})}function xe({chartType:e}){let{reportParams:n}=ne(),r=ve(n,ue(n.interval,D)),a=(0,i.useMemo)(()=>be(r),[r]),o=t(`Subscriber metric`,`jetpack-premium-analytics-pkg`);return(0,T.jsx)(`div`,{className:v.root,children:(0,T.jsx)(fe,{isLoading:r.isLoading,isFetching:r.isFetching,isError:r.current.length===0&&r.isError,isEmpty:r.current.length===0,error:{description:t(`We couldn't load subscriber data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:r.refetch}]},empty:{icon:ae,description:t(`No subscriber data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,T.jsx)(de,{}),children:(0,T.jsx)(u,{metrics:a,dataFormat:E,chartType:e,groupLabel:o})})})}function w({attributes:e={},setError:t}){return(0,T.jsx)(ie,{attributes:e,setError:t,options:{from:`/`},children:(0,T.jsx)(xe,{chartType:e.chartType})})}var T,E,D,O,k=e((()=>{m(),oe(),a(),n(),_e(),ye(),S(),T=r(),E={type:`number`,options:{useMultipliers:!0,decimals:0}},D=[`day`,`week`,`month`],O={subscribers:e=>e.subscribers,paid:e=>e.paid}})),A,j,M,N,P,F,I,Se=e((()=>{A=`jpa/subscribers-chart`,j=`Subscribers summary`,M=`Track subscriber growth over time, with paid subscribers and the previous period overlaid for comparison.`,N={content:`A summary of the new subscribers you gained over time.`},P=`subscribers`,F=`framed`,I={name:A,title:j,description:M,help:N,category:P,presentation:F}}));function L({withComparison:e,chartType:t}){return(0,z.jsx)(w,{attributes:{reportParams:c(e),chartType:t}})}function R(e){return(0,z.jsx)(w,{attributes:{reportParams:c(!1,e)}})}function Ce({withComparison:e,chartType:t,...n}){return(0,z.jsx)(he,{...n,widgetType:V,renderModule:B,renderComponent:w,attributes:{reportParams:c(e),chartType:t}})}var z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{l(),d(),pe(),p(),re(),k(),S(),Se(),z=r(),te(),B=`storybook/subscribers-chart`,V=f(I,x),H={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},U={chartType:`line`},W={title:`Packages/Premium Analytics/Widgets/SubscribersChart`,component:w,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...H},parameters:{docs:{description:{component:"Subscriber growth over time. The date range, previous-period comparison, and bucket size follow the dashboard controls; the \"Chart type\" control is the `chartType` attribute (`relevance: 'high'`), exposed by the widget host; which metric is plotted is the chart's own tab selection. When comparison is on, the previous period is overlaid as a same-colour dashed line and the headline shows the period-over-period delta. The Paid subscribers tab renders only when the site has paid subscribers. Data comes from `useStatsSubscribersReport`; in Storybook it is served by `registerReportMocks`."}}}},G={render:L,args:{withComparison:!1,...U},decorators:[h]},K={render:L,args:{withComparison:!0,...U},decorators:[h]},q={render:L,args:{withComparison:!1,chartType:`bar`},decorators:[h]},J={render:L,args:{withComparison:!0,chartType:`bar`},decorators:[h]},Y={render:()=>R(`last-90-days`),tags:[`!autodocs`],decorators:[h],beforeEach:()=>(s(`stats/subscribers`,`loading`),()=>s(`stats/subscribers`,null))},X={render:()=>R(`last-7-days`),tags:[`!autodocs`],decorators:[h],beforeEach:()=>(s(`stats/subscribers`,`error`),()=>s(`stats/subscribers`,null))},Z={render:()=>R(`last-365-days`),tags:[`!autodocs`],decorators:[h],beforeEach:()=>(s(`stats/subscribers`,`empty`),()=>s(`stats/subscribers`,null))},Q={render:e=>(0,z.jsx)(Ce,{...e}),args:{...ge,withComparison:!0,...U},argTypes:{...me,withComparison:{control:`boolean`},...H}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderSubscribersChart,
  args: {
    withComparison: false,
    ...DEFAULT_CHART_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...G.parameters?.docs?.source},description:{story:`The widget on its own, current period only.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderSubscribersChart,
  args: {
    withComparison: true,
    ...DEFAULT_CHART_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`Same close-up with the dashboard comparison range applied, so the previous
period is overlaid as a dashed line and the headline shows the delta.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderSubscribersChart,
  args: {
    withComparison: false,
    chartType: 'bar'
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:"The same widget drawn as bars — the `chartType` attribute set to `bar`.",...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderSubscribersChart,
  args: {
    withComparison: true,
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
    ...DEFAULT_CHART_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean'
    },
    ...CHART_TYPE_ARG_TYPES
  }
}`,...Q.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithComparison`,`BarChart`,`BarChartWithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as BarChart,J as BarChartWithComparison,G as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,W as default};