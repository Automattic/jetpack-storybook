import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{f as o,n as s}from"./build-module-DoJYX5DX.js";import{G as c,W as ee,Z as te,q as l,tt as ne}from"./report-metric-CtuHsD_3.js";import{d as re,t as ie}from"./src-B3le4dug.js";import{Zt as ae,a as oe,jr as se,ur as u,xt as d}from"./chart-tooltip-C_KXKdxW.js";import{t as f}from"./chart-empty-state-CT3eknUi.js";import{t as p}from"./metric-tabs-chart-DNbG2jFf.js";import{t as ce}from"./widget-state-B8GdqNda.js";import{C as le,D as ue,E as de,S as fe,T as pe,b as m,t as h,w as me,x as g}from"./src-BOYaBqvu.js";import{i as _,n as he,t as ge}from"./src-D484l5z4.js";var v,y,b,_e=e((()=>{v=`_root_t6a9k_1`,y=`_emptyState_t6a9k_10`,b={root:v,emptyState:y}}));function x(e){return(e?.data??[]).map(e=>({date:se(e.date_start),subscribers:Number(e.subscribers??e.value??0),paid:Number(e.subscribers_paid??0)}))}function ve(e,t){let n=ae((0,i.useMemo)(()=>({...e,period:t}),[e,t])),r=(0,i.useMemo)(()=>x(n.primary.data),[n.primary.data]);return{current:r,previous:(0,i.useMemo)(()=>x(n.comparison.data),[n.comparison.data]),hasPaid:r.some(e=>e.paid>0),isLoading:n.isLoading,isFetching:n.isFetching,isError:r.length===0&&n.isError,refetch:n.refetch}}var ye=e((()=>{d(),a()})),S,C,w,T=e((()=>{n(),s(),ge(),S=[{id:`subscribers`,label:t(`Subscribers`,`jetpack-premium-analytics-pkg`)},{id:`paid`,label:t(`Paid subscribers`,`jetpack-premium-analytics-pkg`)}],C=S.map(e=>e.id),w={icon:o,attributes:[{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:he,elements:[{label:t(`Auto`,`jetpack-premium-analytics-pkg`),value:`auto`},{label:t(`By days`,`jetpack-premium-analytics-pkg`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics-pkg`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics-pkg`),value:`month`}],relevance:`high`},{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics-pkg`),type:`array`,relevance:`high`,Edit:_,elements:S.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{granularity:`auto`,metrics:C}}}}));function E(e,t){return e.length?t(e[e.length-1]):0}function be(e,t){let n=new Set(t);return S.filter(({id:t})=>n.has(t)&&(t!==`paid`||e.hasPaid)).map(({id:t,label:n})=>{let r=j[t];return{key:t,label:n,value:E(e.current,r),previousValue:e.previous.length?E(e.previous,r):void 0,current:e.current.map(e=>({date:e.date,value:r(e)})),previous:e.previous.length?e.previous.map(e=>({date:e.date,value:r(e)})):void 0}})}function xe({granularity:e,metrics:n=C}){let{reportParams:r}=ne(),a=ve(r,e===`auto`?oe(r.interval,A):e),s=(0,i.useMemo)(()=>be(a,n),[a,n]),c=t(`Subscriber metric`,`jetpack-premium-analytics-pkg`);return n.length?!s.length&&!a.isError?a.isLoading?null:(0,O.jsx)(f,{icon:o,text:t(`No paid subscribers in this date range.`,`jetpack-premium-analytics-pkg`)}):(0,O.jsx)(`div`,{className:b.root,children:(0,O.jsx)(ce,{isLoading:a.isLoading,isError:a.current.length===0&&a.isError,isEmpty:a.current.length===0,error:{description:t(`We couldn't load subscriber data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:a.refetch}]},empty:{icon:re,description:t(`No subscriber data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,O.jsx)(p,{metrics:s,dataFormat:k,loading:!0,groupLabel:c}),children:(0,O.jsx)(p,{metrics:s,dataFormat:k,loading:a.isFetching,groupLabel:c})})}):(0,O.jsx)(f,{icon:o,text:t(`No metric selected. Please select a metric from the metrics list.`,`jetpack-premium-analytics-pkg`)})}function D({attributes:e={},setError:t}){return(0,O.jsx)(te,{attributes:e,setError:t,options:{from:`/`},children:(0,O.jsx)(xe,{granularity:e.granularity??`auto`,metrics:e.metrics})})}var O,k,A,j,Se=e((()=>{h(),ie(),a(),s(),n(),_e(),ye(),T(),O=r(),k={type:`number`,options:{useMultipliers:!0,decimals:0}},A=[`day`,`week`,`month`],j={subscribers:e=>e.subscribers,paid:e=>e.paid}})),M,N,P,F,I,L,R,Ce=e((()=>{M=`jpa/subscribers-chart`,N=`Subscribers summary`,P=`Track subscriber growth over time, with paid subscribers and the previous period overlaid for comparison.`,F={content:`A summary of the new subscribers you gained over time.`},I=`subscribers`,L=`framed`,R={name:M,title:N,description:P,help:F,category:I,presentation:L}}));function z({withComparison:e,metrics:t}){return(0,V.jsx)(D,{attributes:{reportParams:u(e),metrics:t}})}function B(e){return(0,V.jsx)(D,{attributes:{reportParams:u(!1,e)}})}function we({withComparison:e,metrics:t,...n}){return(0,V.jsx)(pe,{...n,widgetType:U,renderModule:H,renderComponent:D,attributes:{reportParams:u(e),metrics:t}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),de(),le(),m(),ee(),Se(),T(),Ce(),V=r(),c(),H=`storybook/subscribers-chart`,U=fe(R,w),W={metrics:{control:`check`,options:C}},G={metrics:C},K={title:`Packages/Premium Analytics/Widgets/SubscribersChart`,component:D,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...W},parameters:{docs:{description:{component:"Subscriber growth over time. The date range and previous-period comparison follow the dashboard picker; the \"Group by\" control is the `granularity` attribute and the tab selection is the `metrics` attribute (both `relevance: 'high'`), exposed by the widget host. When comparison is on, the previous period is overlaid as a same-colour dashed line and the headline shows the period-over-period delta. The Paid subscribers tab renders only when the site has paid subscribers, even while selected. Data comes from `useStatsSubscribersReport`; in Storybook it is served by `registerReportMocks`."}}}},q={render:z,args:{withComparison:!1,...G},decorators:[g]},J={render:z,args:{withComparison:!0,...G},decorators:[g]},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(l(`stats/subscribers`,`loading`),()=>l(`stats/subscribers`,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(l(`stats/subscribers`,`error`),()=>l(`stats/subscribers`,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(l(`stats/subscribers`,`empty`),()=>l(`stats/subscribers`,null))},Q={render:e=>(0,V.jsx)(we,{...e}),args:{...me,withComparison:!0,...G},argTypes:{...ue,withComparison:{control:`boolean`},...W}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderSubscribersChart,
  args: {
    withComparison: false,
    ...ALL_METRICS_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`The widget on its own, current period only.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderSubscribersChart,
  args: {
    withComparison: true,
    ...ALL_METRICS_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:`Same close-up with the dashboard comparison range applied, so the previous
period is overlaid as a dashed line and the headline shows the delta.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};