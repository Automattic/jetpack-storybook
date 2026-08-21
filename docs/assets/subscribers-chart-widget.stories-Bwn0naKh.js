import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{n as o,ui as s}from"./build-module-CDRs4YxF.js";import{$ as ee,G as te,K as ne,Y as c,rt as re}from"./report-metric-CfF6QW2f.js";import{p as ie,t as ae}from"./src-BKLK-O8P.js";import{N as l,Tn as oe,qt as u,t as d}from"./src-DXQx-HLd.js";import{a as se,h as ce,o as le}from"./chart-tooltip-DPvHn5um.js";import{r as ue,t as f}from"./metric-tabs-chart-skeleton-DiJe5jXQ.js";import{t as de}from"./widget-state-BcvJNT8Q.js";import{C as fe,D as pe,E as me,S as he,T as ge,b as _e,t as p,w as ve,x as m}from"./src-CS4QJABu.js";var h,g,_,v=e((()=>{h=`_root_79bqb_1`,g=`_emptyState_79bqb_9`,_={root:h,emptyState:g}}));function y(e){return(e?.data??[]).map(e=>({date:oe(e.date_start),subscribers:Number(e.subscribers??e.value??0),paid:Number(e.subscribers_paid??0)}))}function ye(e,t){let n=l((0,i.useMemo)(()=>({...e,period:t}),[e,t])),r=(0,i.useMemo)(()=>y(n.primary.data),[n.primary.data]);return{current:r,previous:(0,i.useMemo)(()=>y(n.comparison.data),[n.comparison.data]),hasPaid:r.some(e=>e.paid>0),isLoading:n.isLoading,isFetching:n.isFetching,isError:r.length===0&&n.isError,refetch:n.refetch}}var be=e((()=>{d(),a()})),b,x,S=e((()=>{n(),o(),p(),b=[{id:`subscribers`,label:t(`Subscribers`,`jetpack-premium-analytics-pkg`)},{id:`paid`,label:t(`Paid subscribers`,`jetpack-premium-analytics-pkg`)}],x={icon:s,attributes:[le([`auto`,`day`,`week`,`month`]),se()],example:{attributes:{granularity:`auto`,chartType:`line`}}}}));function C(e,t){return e.length?t(e[e.length-1]):0}function xe(e){return b.filter(({id:t})=>t!==`paid`||e.hasPaid).map(({id:t,label:n})=>{let r=O[t];return{key:t,label:n,value:C(e.current,r),previousValue:e.previous.length?C(e.previous,r):void 0,current:e.current.map(e=>({date:e.date,value:r(e)})),previous:e.previous.length?e.previous.map(e=>({date:e.date,value:r(e)})):void 0}})}function Se({granularity:e,chartType:n}){let{reportParams:r}=re(),a=ye(r,e===`auto`?ce(r.interval,D):e),o=(0,i.useMemo)(()=>xe(a),[a]),s=t(`Subscriber metric`,`jetpack-premium-analytics-pkg`);return(0,T.jsx)(`div`,{className:_.root,children:(0,T.jsx)(de,{isLoading:a.isLoading,isFetching:a.isFetching,isError:a.current.length===0&&a.isError,isEmpty:a.current.length===0,error:{description:t(`We couldn't load subscriber data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:a.refetch}]},empty:{icon:ie,description:t(`No subscriber data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,T.jsx)(f,{}),children:(0,T.jsx)(ue,{metrics:o,dataFormat:E,chartType:n,groupLabel:s})})})}function w({attributes:e={},setError:t}){return(0,T.jsx)(ee,{attributes:e,setError:t,options:{from:`/`},children:(0,T.jsx)(Se,{granularity:e.granularity??`auto`,chartType:e.chartType})})}var T,E,D,O,k=e((()=>{p(),ae(),a(),n(),v(),be(),S(),T=r(),E={type:`number`,options:{useMultipliers:!0,decimals:0}},D=[`day`,`week`,`month`],O={subscribers:e=>e.subscribers,paid:e=>e.paid}})),A,j,M,N,P,F,I,Ce=e((()=>{A=`jpa/subscribers-chart`,j=`Subscribers summary`,M=`Track subscriber growth over time, with paid subscribers and the previous period overlaid for comparison.`,N={content:`A summary of the new subscribers you gained over time.`},P=`subscribers`,F=`framed`,I={name:A,title:j,description:M,help:N,category:P,presentation:F}}));function L({withComparison:e,chartType:t}){return(0,z.jsx)(w,{attributes:{reportParams:u(e),chartType:t}})}function R(e){return(0,z.jsx)(w,{attributes:{reportParams:u(!1,e)}})}function we({withComparison:e,chartType:t,...n}){return(0,z.jsx)(ge,{...n,widgetType:V,renderModule:B,renderComponent:w,attributes:{reportParams:u(e),chartType:t}})}var z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),me(),fe(),_e(),te(),k(),S(),Ce(),z=r(),ne(),B=`storybook/subscribers-chart`,V=he(I,x),H={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},U={chartType:`line`},W={title:`Packages/Premium Analytics/Widgets/SubscribersChart`,component:w,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...H},parameters:{docs:{description:{component:'Subscriber growth over time. The date range and previous-period comparison follow the dashboard picker; the "Group by" control is the `granularity` attribute and the "Chart type" control is the `chartType` attribute (both `relevance: \'high\'`), exposed by the widget host; which metric is plotted is the chart\'s own tab selection. When comparison is on, the previous period is overlaid as a same-colour dashed line and the headline shows the period-over-period delta. The Paid subscribers tab renders only when the site has paid subscribers. Data comes from `useStatsSubscribersReport`; in Storybook it is served by `registerReportMocks`.'}}}},G={render:L,args:{withComparison:!1,...U},decorators:[m]},K={render:L,args:{withComparison:!0,...U},decorators:[m]},q={render:L,args:{withComparison:!1,chartType:`bar`},decorators:[m]},J={render:L,args:{withComparison:!0,chartType:`bar`},decorators:[m]},Y={render:()=>R(`last-90-days`),tags:[`!autodocs`],decorators:[m],beforeEach:()=>(c(`stats/subscribers`,`loading`),()=>c(`stats/subscribers`,null))},X={render:()=>R(`last-7-days`),tags:[`!autodocs`],decorators:[m],beforeEach:()=>(c(`stats/subscribers`,`error`),()=>c(`stats/subscribers`,null))},Z={render:()=>R(`last-365-days`),tags:[`!autodocs`],decorators:[m],beforeEach:()=>(c(`stats/subscribers`,`empty`),()=>c(`stats/subscribers`,null))},Q={render:e=>(0,z.jsx)(we,{...e}),args:{...ve,withComparison:!0,...U},argTypes:{...pe,withComparison:{control:`boolean`},...H}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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