import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Gu as i,Nu as a,di as o,t as s}from"./build-module-zwSmKorH.js";import{b as ee,g as te,k as ne}from"./hooks-B8X89glb.js";import{p as re,t as ie}from"./src-DFNM1k7F.js";import{F as c,t as ae}from"./src-DtKtURUU.js";import{U as oe,en as l,i as u,o as d}from"./date-filters-panel-BARiab5j.js";import{r as se,t as f}from"./metric-tabs-chart-skeleton-Dzp0m64X.js";import{G as ce,K as le,Y as p}from"./report-metric-HhiNrxrJ.js";import{t as ue}from"./widget-state-D_uDe3Cp.js";import{C as de,D as fe,E as pe,S as me,T as he,b as ge,t as m,w as h,x as g}from"./src-CdN4L81S.js";import{n as _e,r as ve,t as ye}from"./with-site-time-zone-ChMEfdAF.js";var _,v,y,be=e((()=>{_=`_root_79bqb_1`,v=`_emptyState_79bqb_9`,y={root:_,emptyState:v}}));function b(e){return(e?.data??[]).flatMap(e=>{let t=c(e.date_start);return t?[{date:t,subscribers:Number(e.subscribers??e.value??0),paid:Number(e.subscribers_paid??0)}]:[]})}function xe(e,t){let n=oe((0,i.useMemo)(()=>({...e,period:t}),[e,t])),r=(0,i.useMemo)(()=>b(n.primary.data),[n.primary.data]);return{current:r,previous:(0,i.useMemo)(()=>b(n.comparison.data),[n.comparison.data]),hasPaid:r.some(e=>e.paid>0),isLoading:n.isLoading,isFetching:n.isFetching,isError:r.length===0&&n.isError,refetch:n.refetch}}var Se=e((()=>{u(),ae(),a()})),x,S,C=e((()=>{n(),s(),m(),x=[{id:`subscribers`,label:t(`Subscribers`,`jetpack-premium-analytics-pkg`)},{id:`paid`,label:t(`Paid subscribers`,`jetpack-premium-analytics-pkg`)}],S={icon:o,attributes:[ne()],example:{attributes:{chartType:`line`}}}}));function w(e,t){return e.length?t(e[e.length-1]):0}function Ce(e){return x.filter(({id:t})=>t!==`paid`||e.hasPaid).map(({id:t,label:n})=>{let r=k[t];return{key:t,label:n,value:w(e.current,r),previousValue:e.previous.length?w(e.previous,r):void 0,current:e.current.map(e=>({date:e.date,value:r(e)})),previous:e.previous.length?e.previous.map(e=>({date:e.date,value:r(e)})):void 0}})}function we({chartType:e}){let{reportParams:n}=ee(),r=xe(n,d(n.interval,O)),a=(0,i.useMemo)(()=>Ce(r),[r]),o=t(`Subscriber metric`,`jetpack-premium-analytics-pkg`);return(0,E.jsx)(`div`,{className:y.root,children:(0,E.jsx)(ue,{isLoading:r.isLoading,isFetching:r.isFetching,isError:r.current.length===0&&r.isError,isEmpty:r.current.length===0,error:{description:t(`We couldn't load subscriber data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:r.refetch}]},empty:{icon:re,description:t(`No subscriber data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,E.jsx)(f,{}),children:(0,E.jsx)(se,{metrics:a,dataFormat:D,chartType:e,groupLabel:o})})})}function T({attributes:e={},setError:t}){return(0,E.jsx)(te,{attributes:e,setError:t,options:{from:`/`},children:(0,E.jsx)(we,{chartType:e.chartType})})}var E,D,O,k,Te=e((()=>{m(),ie(),a(),n(),be(),Se(),C(),E=r(),D={type:`number`,options:{useMultipliers:!0,decimals:0}},O=[`day`,`week`,`month`],k={subscribers:e=>e.subscribers,paid:e=>e.paid}})),A,j,M,N,P,F,I,Ee=e((()=>{A=`jpa/subscribers-chart`,j=`Subscribers summary`,M=`Track subscriber growth over time, with paid subscribers and the previous period overlaid for comparison.`,N={content:`A summary of your subscriber growth over time.`},P=`subscribers`,F=`framed`,I={name:A,title:j,description:M,help:N,category:P,presentation:F}}));function L({withComparison:e,chartType:t}){return(0,z.jsx)(T,{attributes:{reportParams:l(e),chartType:t}})}function R(e){return(0,z.jsx)(T,{attributes:{reportParams:l(!1,e)}})}function De({withComparison:e,chartType:t,...n}){return(0,z.jsx)(he,{...n,widgetType:V,renderModule:B,renderComponent:T,attributes:{reportParams:l(e),chartType:t}})}var z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),pe(),de(),ge(),ye(),ce(),Te(),C(),Ee(),z=r(),le(),B=`storybook/subscribers-chart`,V=me(I,S),H={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},U={chartType:`line`},W={title:`Packages/Premium Analytics/Widgets/SubscribersChart`,component:T,tags:[`autodocs`],decorators:[ve],argTypes:{..._e,withComparison:{control:`boolean`},...H},parameters:{docs:{description:{component:"Subscriber growth over time. The date range, previous-period comparison, and bucket size follow the dashboard controls; the \"Chart type\" control is the `chartType` attribute (`relevance: 'high'`), exposed by the widget host; which metric is plotted is the chart's own tab selection. When comparison is on, the previous period is overlaid as a same-colour dashed line and the headline shows the period-over-period delta. The Paid subscribers tab renders only when the site has paid subscribers. Data comes from `useStatsSubscribersReport`; in Storybook it is served by `registerReportMocks`."}}}},G={render:L,args:{withComparison:!1,...U},decorators:[g]},K={render:L,args:{withComparison:!0,...U},decorators:[g]},q={render:L,args:{withComparison:!1,chartType:`bar`},decorators:[g]},J={render:L,args:{withComparison:!0,chartType:`bar`},decorators:[g]},Y={render:()=>R(`last-90-days`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(p(`stats/subscribers`,`loading`),()=>p(`stats/subscribers`,null))},X={render:()=>R(`last-7-days`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(p(`stats/subscribers`,`error`),()=>p(`stats/subscribers`,null))},Z={render:()=>R(`last-365-days`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(p(`stats/subscribers`,`empty`),()=>p(`stats/subscribers`,null))},Q={render:e=>(0,z.jsx)(De,{...e}),args:{...h,withComparison:!0,...U},argTypes:{...fe,withComparison:{control:`boolean`},...H}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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