import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Uu as i,ju as a,li as o,t as ee}from"./build-module-2iv4IIRq.js";import{$ as s,m as te,v as ne}from"./hooks-BJxRUOt9.js";import{p as re,t as ie}from"./src-C-E2d-Lb.js";import{g as ae,t as oe}from"./src-D1E5MwTJ.js";import{W as se,a as ce,r as c,tn as l}from"./date-period-dropdown-CVjEXpo_.js";import{r as le,t as u}from"./metric-tabs-chart-skeleton-DOwF1CCT.js";import{c as d,i as ue,r as de}from"./register-report-mocks-CQIxSdXf.js";import{t as fe}from"./widget-state-CvBoIkua.js";import{t as f}from"./src-BOq6qKHJ.js";import{a as pe,c as me,i as he,l as ge,n as _e,o as ve,r as p,s as ye}from"./with-widget-canvas-CGGdJm6r.js";import{n as be,r as xe,t as m}from"./with-site-time-zone-ngtW_VDw.js";import{n as h,r as Se,t as Ce}from"./with-paid-subscribers-BdtQAqqQ.js";var g,_,v,we=e((()=>{g=`_root_79bqb_1`,_=`_emptyState_79bqb_9`,v={root:g,emptyState:_}}));function y(e,t){return(e?.data??[]).flatMap(e=>{let n=ae(e.date_start,t);return n?[{date:n,subscribers:Number(e.subscribers??e.value??0),paid:Number(e.subscribers_paid??0)}]:[]})}function Te(e,t){let n=se((0,i.useMemo)(()=>({...e,period:t}),[e,t])),r=n.timezone,a=(0,i.useMemo)(()=>y(n.primary.data,r),[n.primary.data,r]);return{current:a,previous:(0,i.useMemo)(()=>y(n.comparison.data,r),[n.comparison.data,r]),hasPaid:a.some(e=>e.paid>0),isLoading:n.isLoading,isFetching:n.isFetching,isError:a.length===0&&n.isError,refetch:n.refetch}}var Ee=e((()=>{c(),oe(),a()})),b,x,S=e((()=>{n(),ee(),f(),b=[{id:`subscribers`,label:t(`Subscribers`,`jetpack-premium-analytics-pkg`)},{id:`paid`,label:t(`Paid subscribers`,`jetpack-premium-analytics-pkg`)}],x={icon:o,attributes:[s()],example:{attributes:{chartType:`line`}}}}));function C(e,t){return e.length?t(e[e.length-1]):0}function De(e){return b.filter(({id:t})=>t!==`paid`||e.hasPaid).map(({id:t,label:n})=>{let r=k[t];return{key:t,label:n,value:C(e.current,r),previousValue:e.previous.length?C(e.previous,r):void 0,current:e.current.map(e=>({date:e.date,value:r(e)})),previous:e.previous.length?e.previous.map(e=>({date:e.date,value:r(e)})):void 0}})}function w({chartType:e}){let{reportParams:n}=ne(),r=Te(n,ce(n.interval,O)),a=(0,i.useMemo)(()=>De(r),[r]),o=t(`Subscriber metric`,`jetpack-premium-analytics-pkg`);return(0,E.jsx)(`div`,{className:v.root,children:(0,E.jsx)(fe,{isLoading:r.isLoading,isFetching:r.isFetching,isError:r.current.length===0&&r.isError,isEmpty:r.current.length===0,error:{description:t(`We couldn't load subscriber data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:r.refetch}]},empty:{icon:re,description:t(`No subscriber data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,E.jsx)(u,{}),children:(0,E.jsx)(le,{metrics:a,dataFormat:D,chartType:e,groupLabel:o})})})}function T({attributes:e={},setError:t}){return(0,E.jsx)(te,{attributes:e,setError:t,options:{from:`/`},children:(0,E.jsx)(w,{chartType:e.chartType})})}var E,D,O,k,Oe=e((()=>{f(),ie(),a(),n(),we(),Ee(),S(),E=r(),D={type:`number`,options:{useMultipliers:!0,decimals:0}},O=[`day`,`week`,`month`],k={subscribers:e=>e.subscribers,paid:e=>e.paid}})),A,j,M,N,P,F,I,ke=e((()=>{A=`jpa/subscribers-chart`,j=`Subscriber summary`,M=`Track subscriber growth over time, with paid subscribers and the previous period overlaid for comparison.`,N={content:`A summary of your subscriber growth over time.`},P=`subscribers`,F=`framed`,I={name:A,title:j,description:M,help:N,category:P,presentation:F}}));function L({withComparison:e,chartType:t}){return(0,z.jsx)(T,{attributes:{reportParams:l(e),chartType:t}})}function R(e){return(0,z.jsx)(T,{attributes:{reportParams:l(!1,e)}})}function Ae({withComparison:e,chartType:t,...n}){return(0,z.jsx)(ye,{...n,widgetType:V,renderModule:B,renderComponent:T,attributes:{reportParams:l(e),chartType:t}})}var z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{c(),me(),pe(),_e(),m(),Ce(),de(),Oe(),S(),ke(),z=r(),ue(),B=`storybook/subscribers-chart`,V=he(I,x),H={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},U={chartType:`line`},W={title:`Packages/Premium Analytics/Widgets/SubscribersChart`,component:T,tags:[`autodocs`],decorators:[xe],beforeEach:Se,argTypes:{...be,...h,withComparison:{control:`boolean`},...H},args:{hasPaidSubscribers:!1},parameters:{docs:{description:{component:"Subscriber growth over time. The date range, previous-period comparison, and bucket size follow the dashboard controls; the \"Chart type\" control is the `chartType` attribute (`relevance: 'high'`), exposed by the widget host; which metric is plotted is the chart's own tab selection. When comparison is on, the previous period is overlaid as a same-colour dashed line and the headline shows the period-over-period delta. The Paid subscribers tab renders only when the site has paid subscribers. Data comes from `useStatsSubscribersReport`; in Storybook it is served by `registerReportMocks`."}}}},G={render:L,args:{withComparison:!1,...U},decorators:[p]},K={render:L,args:{withComparison:!0,...U},decorators:[p]},q={render:L,args:{withComparison:!1,chartType:`bar`},decorators:[p]},J={render:L,args:{withComparison:!0,chartType:`bar`},decorators:[p]},Y={render:()=>R(`last-90-days`),tags:[`!autodocs`],decorators:[p],beforeEach:()=>(d(`stats/subscribers`,`loading`),()=>d(`stats/subscribers`,null))},X={render:()=>R(`last-7-days`),tags:[`!autodocs`],decorators:[p],beforeEach:()=>(d(`stats/subscribers`,`error`),()=>d(`stats/subscribers`,null))},Z={render:()=>R(`last-365-days`),tags:[`!autodocs`],decorators:[p],beforeEach:()=>(d(`stats/subscribers`,`empty`),()=>d(`stats/subscribers`,null))},Q={render:e=>(0,z.jsx)(Ae,{...e}),args:{...ve,withComparison:!0,...U},argTypes:{...ge,...h,withComparison:{control:`boolean`},...H}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderSubscribersChart,
  args: {
    withComparison: false,
    ...DEFAULT_CHART_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...G.parameters?.docs?.source},description:{story:`The widget on its own, current period only. Turn on "Has paid subscribers" to
add the Paid subscribers metric beside Subscribers.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
    ...paidSubscribersArgTypes,
    withComparison: {
      control: 'boolean'
    },
    ...CHART_TYPE_ARG_TYPES
  }
}`,...Q.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithComparison`,`BarChart`,`BarChartWithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as BarChart,J as BarChartWithComparison,G as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,W as default};