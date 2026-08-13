import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{n as o,ui as s}from"./build-module-CDRs4YxF.js";import{J as ee,Q as c,Y as te,nt as ne,ot as re}from"./report-metric-BfYGxsdE.js";import{d as ie,t as ae}from"./src-Cvyt29m2.js";import{Dt as l,_r as u,l as oe,rn as se,zr as ce}from"./chart-tooltip-DuuBaBe_.js";import{t as d}from"./metric-tabs-chart-CIK1eEXN.js";import{t as le}from"./widget-state-B9J9IL__.js";import{C as ue,D as de,E as fe,S as pe,T as me,b as he,t as ge,w as f,x as p}from"./src-DrAmzh1l.js";import{n as m,t as _e}from"./src-CFWe0sSw.js";var h,g,_,ve=e((()=>{h=`_root_79bqb_1`,g=`_emptyState_79bqb_9`,_={root:h,emptyState:g}}));function v(e){return(e?.data??[]).map(e=>({date:ce(e.date_start),subscribers:Number(e.subscribers??e.value??0),paid:Number(e.subscribers_paid??0)}))}function ye(e,t){let n=se((0,i.useMemo)(()=>({...e,period:t}),[e,t])),r=(0,i.useMemo)(()=>v(n.primary.data),[n.primary.data]);return{current:r,previous:(0,i.useMemo)(()=>v(n.comparison.data),[n.comparison.data]),hasPaid:r.some(e=>e.paid>0),isLoading:n.isLoading,isFetching:n.isFetching,isError:r.length===0&&n.isError,refetch:n.refetch}}var be=e((()=>{l(),a()})),y,b,x,S=e((()=>{n(),o(),_e(),y=[{id:`line`,label:t(`Line chart`,`jetpack-premium-analytics-pkg`)},{id:`bar`,label:t(`Bar chart`,`jetpack-premium-analytics-pkg`)}],b=[{id:`subscribers`,label:t(`Subscribers`,`jetpack-premium-analytics-pkg`)},{id:`paid`,label:t(`Paid subscribers`,`jetpack-premium-analytics-pkg`)}],x={icon:s,attributes:[{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:m,elements:[{label:t(`Auto`,`jetpack-premium-analytics-pkg`),value:`auto`},{label:t(`By days`,`jetpack-premium-analytics-pkg`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics-pkg`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics-pkg`),value:`month`}],relevance:`high`},{id:`chartType`,label:t(`Chart type`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:m,elements:y.map(e=>({value:e.id,label:e.label})),relevance:`high`}],example:{attributes:{granularity:`auto`,chartType:`line`}}}}));function C(e,t){return e.length?t(e[e.length-1]):0}function xe(e){return b.filter(({id:t})=>t!==`paid`||e.hasPaid).map(({id:t,label:n})=>{let r=O[t];return{key:t,label:n,value:C(e.current,r),previousValue:e.previous.length?C(e.previous,r):void 0,current:e.current.map(e=>({date:e.date,value:r(e)})),previous:e.previous.length?e.previous.map(e=>({date:e.date,value:r(e)})):void 0}})}function Se({granularity:e,chartType:n}){let{reportParams:r}=re(),a=ye(r,e===`auto`?oe(r.interval,D):e),o=(0,i.useMemo)(()=>xe(a),[a]),s=t(`Subscriber metric`,`jetpack-premium-analytics-pkg`);return(0,T.jsx)(`div`,{className:_.root,children:(0,T.jsx)(le,{isLoading:a.isLoading,isError:a.current.length===0&&a.isError,isEmpty:a.current.length===0,error:{description:t(`We couldn't load subscriber data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:a.refetch}]},empty:{icon:ie,description:t(`No subscriber data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,T.jsx)(d,{metrics:o,dataFormat:E,chartType:n,loading:!0,groupLabel:s}),children:(0,T.jsx)(d,{metrics:o,dataFormat:E,chartType:n,loading:a.isFetching,groupLabel:s})})})}function w({attributes:e={},setError:t}){return(0,T.jsx)(ne,{attributes:e,setError:t,options:{from:`/`},children:(0,T.jsx)(Se,{granularity:e.granularity??`auto`,chartType:e.chartType})})}var T,E,D,O,k=e((()=>{ge(),ae(),a(),n(),ve(),be(),S(),T=r(),E={type:`number`,options:{useMultipliers:!0,decimals:0}},D=[`day`,`week`,`month`],O={subscribers:e=>e.subscribers,paid:e=>e.paid}})),A,j,M,N,P,F,I,Ce=e((()=>{A=`jpa/subscribers-chart`,j=`Subscribers summary`,M=`Track subscriber growth over time, with paid subscribers and the previous period overlaid for comparison.`,N={content:`A summary of the new subscribers you gained over time.`},P=`subscribers`,F=`framed`,I={name:A,title:j,description:M,help:N,category:P,presentation:F}}));function L({withComparison:e,chartType:t}){return(0,z.jsx)(w,{attributes:{reportParams:u(e),chartType:t}})}function R(e){return(0,z.jsx)(w,{attributes:{reportParams:u(!1,e)}})}function we({withComparison:e,chartType:t,...n}){return(0,z.jsx)(me,{...n,widgetType:V,renderModule:B,renderComponent:w,attributes:{reportParams:u(e),chartType:t}})}var z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{l(),fe(),ue(),he(),ee(),k(),S(),Ce(),z=r(),te(),B=`storybook/subscribers-chart`,V=pe(I,x),H={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},U={chartType:`line`},W={title:`Packages/Premium Analytics/Widgets/SubscribersChart`,component:w,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...H},parameters:{docs:{description:{component:'Subscriber growth over time. The date range and previous-period comparison follow the dashboard picker; the "Group by" control is the `granularity` attribute and the "Chart type" control is the `chartType` attribute (both `relevance: \'high\'`), exposed by the widget host; which metric is plotted is the chart\'s own tab selection. When comparison is on, the previous period is overlaid as a same-colour dashed line and the headline shows the period-over-period delta. The Paid subscribers tab renders only when the site has paid subscribers. Data comes from `useStatsSubscribersReport`; in Storybook it is served by `registerReportMocks`.'}}}},G={render:L,args:{withComparison:!1,...U},decorators:[p]},K={render:L,args:{withComparison:!0,...U},decorators:[p]},q={render:L,args:{withComparison:!1,chartType:`bar`},decorators:[p]},J={render:L,args:{withComparison:!0,chartType:`bar`},decorators:[p]},Y={render:()=>R(`last-90-days`),tags:[`!autodocs`],decorators:[p],beforeEach:()=>(c(`stats/subscribers`,`loading`),()=>c(`stats/subscribers`,null))},X={render:()=>R(`last-7-days`),tags:[`!autodocs`],decorators:[p],beforeEach:()=>(c(`stats/subscribers`,`error`),()=>c(`stats/subscribers`,null))},Z={render:()=>R(`last-365-days`),tags:[`!autodocs`],decorators:[p],beforeEach:()=>(c(`stats/subscribers`,`empty`),()=>c(`stats/subscribers`,null))},Q={render:e=>(0,z.jsx)(we,{...e}),args:{...f,withComparison:!0,...U},argTypes:{...de,withComparison:{control:`boolean`},...H}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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