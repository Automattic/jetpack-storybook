import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{n as o,ui as s,w as c}from"./build-module-CDRs4YxF.js";import{$ as ee,K as l,Y as u,q as te,rt as ne}from"./report-metric-DiRBnUDU.js";import{d as re,t as ie}from"./src-q13B8HIT.js";import{$t as ae,Ct as d,Nr as oe,pr as f,s as se}from"./chart-tooltip-BYhveXGm.js";import{t as p}from"./chart-empty-state-BwPa1Rb0.js";import{t as m}from"./metric-tabs-chart-D7dvyQaL.js";import{C as ce,D as le,E as ue,S as de,T as fe,b as h,t as pe,w as me,x as g}from"./src-BfuDciLI.js";import{t as _}from"./widget-state-DjlnXa-b.js";import{i as he,n as ge,t as _e}from"./src-V__Nff7y.js";var v,y,b,ve=e((()=>{v=`_root_t6a9k_1`,y=`_emptyState_t6a9k_10`,b={root:v,emptyState:y}}));function x(e){return(e?.data??[]).map(e=>({date:oe(e.date_start),subscribers:Number(e.subscribers??e.value??0),paid:Number(e.subscribers_paid??0)}))}function ye(e,t){let n=ae((0,i.useMemo)(()=>({...e,period:t}),[e,t])),r=(0,i.useMemo)(()=>x(n.primary.data),[n.primary.data]);return{current:r,previous:(0,i.useMemo)(()=>x(n.comparison.data),[n.comparison.data]),hasPaid:r.some(e=>e.paid>0),isLoading:n.isLoading,isFetching:n.isFetching,isError:r.length===0&&n.isError,refetch:n.refetch}}var be=e((()=>{d(),a()})),S,C,w,T=e((()=>{n(),o(),_e(),S=[{id:`subscribers`,label:t(`Subscribers`,`jetpack-premium-analytics-pkg`)},{id:`paid`,label:t(`Paid subscribers`,`jetpack-premium-analytics-pkg`)}],C=S.map(e=>e.id),w={icon:s,attributes:[{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:ge,elements:[{label:t(`Auto`,`jetpack-premium-analytics-pkg`),value:`auto`},{label:t(`By days`,`jetpack-premium-analytics-pkg`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics-pkg`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics-pkg`),value:`month`}],relevance:`high`},{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics-pkg`),type:`array`,relevance:`high`,Edit:he,elements:S.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{granularity:`auto`,metrics:C}}}}));function E(e,t){return e.length?t(e[e.length-1]):0}function xe(e,t){let n=new Set(t);return S.filter(({id:t})=>n.has(t)&&(t!==`paid`||e.hasPaid)).map(({id:t,label:n})=>{let r=j[t];return{key:t,label:n,value:E(e.current,r),previousValue:e.previous.length?E(e.previous,r):void 0,current:e.current.map(e=>({date:e.date,value:r(e)})),previous:e.previous.length?e.previous.map(e=>({date:e.date,value:r(e)})):void 0}})}function Se({granularity:e,metrics:n=C}){let{reportParams:r}=ne(),a=ye(r,e===`auto`?se(r.interval,A):e),o=(0,i.useMemo)(()=>xe(a,n),[a,n]),s=t(`Subscriber metric`,`jetpack-premium-analytics-pkg`);return n.length?!o.length&&!a.isError?a.isLoading?null:(0,O.jsx)(p,{icon:c,text:t(`No paid subscribers in this date range.`,`jetpack-premium-analytics-pkg`)}):(0,O.jsx)(`div`,{className:b.root,children:(0,O.jsx)(_,{isLoading:a.isLoading,isError:a.current.length===0&&a.isError,isEmpty:a.current.length===0,error:{description:t(`We couldn't load subscriber data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:a.refetch}]},empty:{icon:re,description:t(`No subscriber data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,O.jsx)(m,{metrics:o,dataFormat:k,loading:!0,groupLabel:s}),children:(0,O.jsx)(m,{metrics:o,dataFormat:k,loading:a.isFetching,groupLabel:s})})}):(0,O.jsx)(p,{icon:c,text:t(`No metric selected. Please select a metric from the metrics list.`,`jetpack-premium-analytics-pkg`)})}function D({attributes:e={},setError:t}){return(0,O.jsx)(ee,{attributes:e,setError:t,options:{from:`/`},children:(0,O.jsx)(Se,{granularity:e.granularity??`auto`,metrics:e.metrics})})}var O,k,A,j,Ce=e((()=>{pe(),ie(),a(),o(),n(),ve(),be(),T(),O=r(),k={type:`number`,options:{useMultipliers:!0,decimals:0}},A=[`day`,`week`,`month`],j={subscribers:e=>e.subscribers,paid:e=>e.paid}})),M,N,P,F,I,L,R,we=e((()=>{M=`jpa/subscribers-chart`,N=`Subscribers summary`,P=`Track subscriber growth over time, with paid subscribers and the previous period overlaid for comparison.`,F={content:`A summary of the new subscribers you gained over time.`},I=`subscribers`,L=`framed`,R={name:M,title:N,description:P,help:F,category:I,presentation:L}}));function z({withComparison:e,metrics:t}){return(0,V.jsx)(D,{attributes:{reportParams:f(e),metrics:t}})}function B(e){return(0,V.jsx)(D,{attributes:{reportParams:f(!1,e)}})}function Te({withComparison:e,metrics:t,...n}){return(0,V.jsx)(fe,{...n,widgetType:U,renderModule:H,renderComponent:D,attributes:{reportParams:f(e),metrics:t}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),ue(),ce(),h(),l(),Ce(),T(),we(),V=r(),te(),H=`storybook/subscribers-chart`,U=de(R,w),W={metrics:{control:`check`,options:C}},G={metrics:C},K={title:`Packages/Premium Analytics/Widgets/SubscribersChart`,component:D,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...W},parameters:{docs:{description:{component:"Subscriber growth over time. The date range and previous-period comparison follow the dashboard picker; the \"Group by\" control is the `granularity` attribute and the tab selection is the `metrics` attribute (both `relevance: 'high'`), exposed by the widget host. When comparison is on, the previous period is overlaid as a same-colour dashed line and the headline shows the period-over-period delta. The Paid subscribers tab renders only when the site has paid subscribers, even while selected. Data comes from `useStatsSubscribersReport`; in Storybook it is served by `registerReportMocks`."}}}},q={render:z,args:{withComparison:!1,...G},decorators:[g]},J={render:z,args:{withComparison:!0,...G},decorators:[g]},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(u(`stats/subscribers`,`loading`),()=>u(`stats/subscribers`,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(u(`stats/subscribers`,`error`),()=>u(`stats/subscribers`,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[g],beforeEach:()=>(u(`stats/subscribers`,`empty`),()=>u(`stats/subscribers`,null))},Q={render:e=>(0,V.jsx)(Te,{...e}),args:{...me,withComparison:!0,...G},argTypes:{...le,withComparison:{control:`boolean`},...W}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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