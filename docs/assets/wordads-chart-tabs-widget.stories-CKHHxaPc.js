import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{Nn as o,n as s}from"./build-module-DmVuor49.js";import{t as c,v as l}from"./src-B3le4dug.js";import{dt as u,er as d,rr as ee,wt as te,yr as f}from"./chart-tooltip-Cp0t5VrC.js";import{t as p}from"./metric-tabs-chart-B1fIpbj_.js";import{H as m,M as h,P as g,R as ne,j as re}from"./report-metric-CT0V0PjD.js";import{t as _}from"./widget-state-CY1w3xno.js";import{C as v,S as ie,T as ae,b as oe,t as se,w as y,x as b}from"./src-BJoM39-b.js";import{i as x,n as S,t as C}from"./src-CfVJQ17A.js";var w,T,E,D=e((()=>{n(),w={type:`currency`,options:{decimals:2}},T=[{id:`impressions`,label:t(`Ads Served`,`jetpack-premium-analytics`)},{id:`cpm`,label:t(`Average CPM`,`jetpack-premium-analytics`),dataFormat:w},{id:`revenue`,label:t(`Revenue`,`jetpack-premium-analytics`),dataFormat:w}],E=T.map(e=>e.id)})),O,k,ce=e((()=>{O=`_root_dimrf_1`,k={root:O}}));function A(e,t){return Number(e?.summary?.[t]??0)}function j(e,t){return(e?.data??[]).map(e=>({date:f(e.date_start),value:Number(e[t]??0)}))}function le(e,t,n,r,i,a){let o=n?j(t,r):void 0,s=!!o?.length;return{key:r,label:i,value:A(e,r),previousValue:s?A(t,r):void 0,current:j(e,r),previous:s?o:void 0,dataFormat:a}}function ue(e,t){return{...e,period:t}}function de(e,t,n=E){let{primary:r,comparison:a,hasComparison:o,isLoading:s,isFetching:c,isError:l,refetch:u}=te((0,i.useMemo)(()=>ue(e,t),[e,t])),d=r.data,f=a.data,p=(0,i.useMemo)(()=>d&&f?ee(f,d.data.length):f,[d,f]),m=(0,i.useMemo)(()=>{let e=new Set(n);return T.filter(t=>e.has(t.id))},[n]);return{metrics:(0,i.useMemo)(()=>m.map(e=>le(d,p,o,e.id,e.label,e.dataFormat)),[m,d,p,o]),isLoading:s,isFetching:c,isError:l&&!d?.data?.length,isEmpty:d!==void 0&&!d.data?.length,refetch:u}}var fe=e((()=>{u(),a(),D()}));function M(e){switch(e){case`week`:return`week`;case`month`:case`quarter`:return`month`;case`year`:return`year`;default:return`day`}}function N({granularity:e,metricIds:n}){let{reportParams:r}=m(),{metrics:i,isLoading:a,isFetching:o,isError:s,isEmpty:c,refetch:u}=de(r,e===`auto`?M(r.interval):e,n),d=i.length===0;return(0,F.jsx)(`div`,{className:k.root,children:(0,F.jsx)(_,{isLoading:d?!1:a,isFetching:d?!1:o,isError:d?!1:s,isEmpty:d||c,error:{description:t(`We couldn't load WordAds data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:u}]},empty:{icon:l,description:t(d?`Select at least one metric to display.`:`No WordAds data in this period.`,`jetpack-premium-analytics`)},children:(0,F.jsx)(p,{metrics:i,dataFormat:I,groupLabel:t(`WordAds metric`,`jetpack-premium-analytics`)})})})}function P({attributes:e={}}){return(0,F.jsx)(ne,{attributes:e,options:{from:`/`},children:(0,F.jsx)(N,{granularity:e.granularity??`auto`,metricIds:e.metrics})})}var F,I,L=e((()=>{c(),se(),n(),ce(),fe(),F=r(),I={type:`number`,options:{useMultipliers:!0,decimals:0}}})),R,z=e((()=>{n(),s(),C(),D(),R={name:`jpa/wordads-chart-tabs`,title:t(`WordAds`,`jetpack-premium-analytics`),help:{content:t(`Compare ads served, average CPM, and revenue over the selected period, with the previous period overlaid for comparison.`,`jetpack-premium-analytics`)},icon:o,attributes:[{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics`),type:`text`,Edit:S,elements:[{label:t(`Auto`,`jetpack-premium-analytics`),value:`auto`},{label:t(`By days`,`jetpack-premium-analytics`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics`),value:`month`},{label:t(`By years`,`jetpack-premium-analytics`),value:`year`}],relevance:`high`},{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics`),type:`array`,relevance:`high`,Edit:x,elements:T.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{granularity:`auto`,metrics:E}}}}));function B({withComparison:e,metrics:t}){return(0,H.jsx)(P,{attributes:{reportParams:d(e),metrics:t}})}function V(e){return(0,H.jsx)(P,{attributes:{reportParams:d(!1,e)}})}function pe({withComparison:e,metrics:t,...n}){return(0,H.jsx)(v,{...n,widgetType:R,renderModule:U,renderComponent:P,attributes:{reportParams:d(e),metrics:t}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),y(),re(),oe(),D(),L(),z(),H=r(),h(),U=`storybook/wordads-chart-tabs`,W={metrics:{control:`check`,options:E}},G={metrics:E},K={title:`Packages/Premium Analytics/Widgets/WordAdsChartTabs`,component:P,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...W},parameters:{docs:{description:{component:"WordAds performance over the selected period as selectable metric tabs — Ads Served, Average CPM, and Revenue, matching the Calypso WordAds page's tabs — over a comparative line chart. Ads Served is a count; CPM and revenue are currency (WordAds pays USD). The date range and comparison come from the dashboard controls; the \"Group by\" control is the `granularity` attribute and the visible tabs are the `metrics` attribute (both `relevance: 'high'`), exposed by the widget host. WordAds stats are computed nightly, so a range ending today is clamped to end at yesterday. When comparison is on the previous period is overlaid as a same-colour dashed line and each tab shows its period-over-period delta. Data comes from the `useStatsWordAdsStats` hook (the `wordads` proxy prefix); in Storybook it is served by `registerReportMocks`. Requires WordAds to be active on the site for live data."}}}},q={render:B,args:{withComparison:!1,...G},decorators:[b]},J={render:B,args:{withComparison:!0,...G},decorators:[b]},Y={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(g(`wordads/stats`,`loading`),()=>g(`wordads/stats`,null))},X={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(g(`wordads/stats`,`error`),()=>g(`wordads/stats`,null))},Z={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(g(`wordads/stats`,`empty`),()=>g(`wordads/stats`,null))},Q={render:e=>(0,H.jsx)(pe,{...e}),args:{...ie,withComparison:!0,...G},argTypes:{...ae,withComparison:{control:`boolean`},...W}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderWordAdsChartTabs,
  args: {
    withComparison: false,
    ...ALL_METRICS_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`The widget on its own, current period only.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderWordAdsChartTabs,
  args: {
    withComparison: true,
    ...ALL_METRICS_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:`Same close-up with the period-over-period delta and previous-period overlay.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderWordAdsChartTabsOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('wordads/stats', 'loading');
    return () => setReportMockState('wordads/stats', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderWordAdsChartTabsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('wordads/stats', 'error');
    return () => setReportMockState('wordads/stats', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderWordAdsChartTabsOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('wordads/stats', 'empty');
    return () => setReportMockState('wordads/stats', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the neutral megaphone
glyph and "No WordAds data in this period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <WordAdsChartTabsDashboardStory {...args} />,
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