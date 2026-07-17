import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{f as o,n as s}from"./build-module-DmVuor49.js";import{d as ee,t as c}from"./src-B3le4dug.js";import{$n as l,Bt as te,_r as u,ut as d}from"./chart-tooltip-Dlx-EoLb.js";import{t as f}from"./chart-empty-state-rJ0LkMF5.js";import{t as p}from"./metric-tabs-chart-D_10Vof9.js";import{C as m,N as h,S as g,T as _,k as ne}from"./report-metric-Bh4yj25D.js";import{t as re}from"./widget-state-Dx4QMqsU.js";import{C as ie,S as ae,T as oe,b as se,t as ce,w as le,x as v}from"./src-BQdFjPxU.js";import{i as y,n as b,t as x}from"./src-B06dgEKz.js";var S,C,w,T=e((()=>{S=`_root_t6a9k_1`,C=`_emptyState_t6a9k_10`,w={root:S,emptyState:C}}));function E(e){return(e?.data??[]).map(e=>({date:u(e.date_start),subscribers:Number(e.subscribers??e.value??0),paid:Number(e.subscribers_paid??0)}))}function ue(e,t){let n=te((0,i.useMemo)(()=>({...e,period:t}),[e,t])),r=(0,i.useMemo)(()=>E(n.primary.data),[n.primary.data]);return{current:r,previous:(0,i.useMemo)(()=>E(n.comparison.data),[n.comparison.data]),hasPaid:r.some(e=>e.paid>0),isLoading:n.isLoading,isFetching:n.isFetching,isError:r.length===0&&n.isError,refetch:n.refetch}}var de=e((()=>{d(),a()})),D,O,k,A=e((()=>{n(),s(),x(),D=[{id:`subscribers`,label:t(`Subscribers`,`jetpack-premium-analytics`)},{id:`paid`,label:t(`Paid subscribers`,`jetpack-premium-analytics`)}],O=D.map(e=>e.id),k={name:`jpa/subscribers-chart`,title:t(`Subscribers`,`jetpack-premium-analytics`),help:{content:t(`A summary of your subscriber growth over time, with paid subscribers and the previous period overlaid for comparison.`,`jetpack-premium-analytics`)},icon:o,attributes:[{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics`),type:`text`,Edit:b,elements:[{label:t(`Auto`,`jetpack-premium-analytics`),value:`auto`},{label:t(`By days`,`jetpack-premium-analytics`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics`),value:`month`}],relevance:`high`},{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics`),type:`array`,relevance:`high`,Edit:y,elements:D.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{granularity:`auto`,metrics:O}}}}));function fe(e){switch(e){case`week`:return`week`;case`month`:case`quarter`:case`year`:return`month`;default:return`day`}}function j(e,t){return e.length?t(e[e.length-1]):0}function M(e,t){let n=new Set(t);return D.filter(({id:t})=>n.has(t)&&(t!==`paid`||e.hasPaid)).map(({id:t,label:n})=>{let r=L[t];return{key:t,label:n,value:j(e.current,r),previousValue:e.previous.length?j(e.previous,r):void 0,current:e.current.map(e=>({date:e.date,value:r(e)})),previous:e.previous.length?e.previous.map(e=>({date:e.date,value:r(e)})):void 0}})}function N({granularity:e,metrics:n=O}){let{reportParams:r}=h(),a=ue(r,e===`auto`?fe(r.interval):e),s=(0,i.useMemo)(()=>M(a,n),[a,n]),c=t(`Subscriber metric`,`jetpack-premium-analytics`);return n.length?!s.length&&!a.isError?a.isLoading?null:(0,F.jsx)(f,{icon:o,text:t(`No paid subscribers in this date range.`,`jetpack-premium-analytics`)}):(0,F.jsx)(`div`,{className:w.root,children:(0,F.jsx)(re,{isLoading:a.isLoading,isError:a.current.length===0&&a.isError,isEmpty:a.current.length===0,error:{description:t(`We couldn't load subscriber data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:a.refetch}]},empty:{icon:ee,description:t(`No subscriber data in this period.`,`jetpack-premium-analytics`)},renderLoading:(0,F.jsx)(p,{metrics:s,dataFormat:I,loading:!0,groupLabel:c}),children:(0,F.jsx)(p,{metrics:s,dataFormat:I,loading:a.isFetching,groupLabel:c})})}):(0,F.jsx)(f,{icon:o,text:t(`No metric selected. Please select a metric from the metrics list.`,`jetpack-premium-analytics`)})}function P({attributes:e={},setError:t}){return(0,F.jsx)(ne,{attributes:e,setError:t,options:{from:`/`},children:(0,F.jsx)(N,{granularity:e.granularity??`auto`,metrics:e.metrics})})}var F,I,L,R=e((()=>{ce(),c(),a(),s(),n(),T(),de(),A(),F=r(),I={type:`number`,options:{useMultipliers:!0,decimals:0}},L={subscribers:e=>e.subscribers,paid:e=>e.paid}}));function z({withComparison:e,metrics:t}){return(0,V.jsx)(P,{attributes:{reportParams:l(e),metrics:t}})}function B(e){return(0,V.jsx)(P,{attributes:{reportParams:l(!1,e)}})}function pe({withComparison:e,metrics:t,...n}){return(0,V.jsx)(ie,{...n,widgetType:U,renderModule:H,renderComponent:P,attributes:{reportParams:l(e),metrics:t}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),le(),se(),g(),R(),A(),V=r(),m(),H=`storybook/subscribers-chart`,U={name:k.name,title:k.title,icon:k.icon,attributes:k.attributes,example:k.example},W={metrics:{control:`check`,options:O}},G={metrics:O},K={title:`Packages/Premium Analytics/Widgets/SubscribersChart`,component:P,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...W},parameters:{docs:{description:{component:"Subscriber growth over time. The date range and previous-period comparison follow the dashboard picker; the \"Group by\" control is the `granularity` attribute and the tab selection is the `metrics` attribute (both `relevance: 'high'`), exposed by the widget host. When comparison is on, the previous period is overlaid as a same-colour dashed line and the headline shows the period-over-period delta. The Paid subscribers tab renders only when the site has paid subscribers, even while selected. Data comes from `useStatsSubscribersReport`; in Storybook it is served by `registerReportMocks`."}}}},q={render:z,args:{withComparison:!1,...G},decorators:[v]},J={render:z,args:{withComparison:!0,...G},decorators:[v]},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(_(`stats/subscribers`,`loading`),()=>_(`stats/subscribers`,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(_(`stats/subscribers`,`error`),()=>_(`stats/subscribers`,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>(_(`stats/subscribers`,`empty`),()=>_(`stats/subscribers`,null))},Q={render:e=>(0,V.jsx)(pe,{...e}),args:{...ae,withComparison:!0,...G},argTypes:{...oe,withComparison:{control:`boolean`},...W}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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