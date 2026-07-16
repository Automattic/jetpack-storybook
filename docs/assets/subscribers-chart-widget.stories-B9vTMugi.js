import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{N as i,t as a}from"./build-module-DMs68Vfd.js";import{n as o,w as s}from"./build-module-C6Ow06jV.js";import{d as ee,t as c}from"./src-Bf8IXmOS.js";import{Lt as te,Yn as l,lr as ne,ut as u}from"./chart-tooltip-DRCwCXz_.js";import{t as d}from"./chart-empty-state-j3cb-euA.js";import{t as f}from"./metric-tabs-chart-jN8rp0rP.js";import{C as re,N as ie,S as ae,T as p,k as m}from"./report-metric-QZWiJDnZ.js";import{t as h}from"./widget-state-DkK2_WfK.js";import{S as oe,b as g,t as _,x as v,y}from"./src-B32xYLGr.js";import{n as se,r as b}from"./with-widget-canvas-Dz43KNHY.js";import{n as ce,t as x}from"./src-DHVerfrF.js";var S,C,w,le=e((()=>{S=`_root_t6a9k_1`,C=`_emptyState_t6a9k_10`,w={root:S,emptyState:C}}));function T(e){return(e?.data??[]).map(e=>({date:ne(e.date_start),subscribers:Number(e.subscribers??e.value??0),paid:Number(e.subscribers_paid??0)}))}function ue(e,t){let n=te((0,i.useMemo)(()=>({...e,period:t}),[e,t])),r=(0,i.useMemo)(()=>T(n.primary.data),[n.primary.data]);return{current:r,previous:(0,i.useMemo)(()=>T(n.comparison.data),[n.comparison.data]),hasPaid:r.some(e=>e.paid>0),isLoading:n.isLoading,isFetching:n.isFetching,isError:r.length===0&&n.isError,refetch:n.refetch}}var E=e((()=>{u(),a()})),D,O,k,A=e((()=>{n(),o(),x(),D=[{id:`subscribers`,label:t(`Subscribers`,`jetpack-premium-analytics`)},{id:`paid`,label:t(`Paid subscribers`,`jetpack-premium-analytics`)}],O=D.map(e=>e.id),k={name:`jpa/subscribers-chart`,title:t(`Subscribers`,`jetpack-premium-analytics`),help:{content:t(`Track subscriber growth over time, with paid subscribers and the previous period overlaid for comparison.`,`jetpack-premium-analytics`)},icon:s,attributes:[{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics`),type:`text`,elements:[{label:t(`Auto`,`jetpack-premium-analytics`),value:`auto`},{label:t(`By days`,`jetpack-premium-analytics`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics`),value:`month`}],relevance:`high`},{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics`),type:`array`,relevance:`high`,Edit:ce,elements:D.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{granularity:`auto`,metrics:O}}}}));function de(e){switch(e){case`week`:return`week`;case`month`:case`quarter`:case`year`:return`month`;default:return`day`}}function j(e,t){return e.length?t(e[e.length-1]):0}function fe(e,t){let n=new Set(t);return D.filter(({id:t})=>n.has(t)&&(t!==`paid`||e.hasPaid)).map(({id:t,label:n})=>{let r=I[t];return{key:t,label:n,value:j(e.current,r),previousValue:e.previous.length?j(e.previous,r):void 0,current:e.current.map(e=>({date:e.date,value:r(e)})),previous:e.previous.length?e.previous.map(e=>({date:e.date,value:r(e)})):void 0}})}function M({granularity:e,metrics:n=O}){let{reportParams:r}=ie(),a=ue(r,e===`auto`?de(r.interval):e),o=(0,i.useMemo)(()=>fe(a,n),[a,n]),c=t(`Subscriber metric`,`jetpack-premium-analytics`);return n.length?!o.length&&!a.isError?a.isLoading?null:(0,P.jsx)(d,{icon:s,text:t(`No paid subscribers in this date range.`,`jetpack-premium-analytics`)}):(0,P.jsx)(`div`,{className:w.root,children:(0,P.jsx)(h,{isLoading:a.isLoading,isError:a.current.length===0&&a.isError,isEmpty:a.current.length===0,error:{description:t(`We couldn't load subscriber data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:a.refetch}]},empty:{icon:ee,description:t(`No subscriber data in this period.`,`jetpack-premium-analytics`)},renderLoading:(0,P.jsx)(f,{metrics:o,dataFormat:F,loading:!0,groupLabel:c}),children:(0,P.jsx)(f,{metrics:o,dataFormat:F,loading:a.isFetching,groupLabel:c})})}):(0,P.jsx)(d,{icon:s,text:t(`No metric selected. Please select a metric from the metrics list.`,`jetpack-premium-analytics`)})}function N({attributes:e={},setError:t}){return(0,P.jsx)(m,{attributes:e,setError:t,options:{from:`/`},children:(0,P.jsx)(M,{granularity:e.granularity??`auto`,metrics:e.metrics})})}var P,F,I,L=e((()=>{_(),c(),a(),o(),n(),le(),E(),A(),P=r(),F={type:`number`,options:{useMultipliers:!0,decimals:0}},I={subscribers:e=>e.subscribers,paid:e=>e.paid}}));function R({withComparison:e,metrics:t}){return(0,V.jsx)(N,{attributes:{reportParams:l(e),metrics:t}})}function z(e){return(0,V.jsx)(N,{attributes:{reportParams:l(!1,e)}})}function B({withComparison:e,metrics:t,...n}){return(0,V.jsx)(g,{...n,widgetType:U,renderModule:H,renderComponent:N,attributes:{reportParams:l(e),metrics:t}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),v(),se(),ae(),L(),A(),V=r(),re(),H=`storybook/subscribers-chart`,U={name:k.name,title:k.title,icon:k.icon,attributes:k.attributes,example:k.example},W={metrics:{control:`check`,options:O}},G={metrics:O},K={title:`Packages/Premium Analytics/Widgets/SubscribersChart`,component:N,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...W},parameters:{docs:{description:{component:"Subscriber growth over time. The date range and previous-period comparison follow the dashboard picker; the \"Group by\" control is the `granularity` attribute and the tab selection is the `metrics` attribute (both `relevance: 'high'`), exposed by the widget host. When comparison is on, the previous period is overlaid as a same-colour dashed line and the headline shows the period-over-period delta. The Paid subscribers tab renders only when the site has paid subscribers, even while selected. Data comes from `useStatsSubscribersReport`; in Storybook it is served by `registerReportMocks`."}}}},q={render:R,args:{withComparison:!1,...G},decorators:[b]},J={render:R,args:{withComparison:!0,...G},decorators:[b]},Y={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(p(`stats/subscribers`,`loading`),()=>p(`stats/subscribers`,null))},X={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(p(`stats/subscribers`,`error`),()=>p(`stats/subscribers`,null))},Z={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(p(`stats/subscribers`,`empty`),()=>p(`stats/subscribers`,null))},Q={render:e=>(0,V.jsx)(B,{...e}),args:{...y,withComparison:!0,...G},argTypes:{...oe,withComparison:{control:`boolean`},...W}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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