import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{N as i,t as a}from"./build-module-DMs68Vfd.js";import{al as o,n as s}from"./build-module-C6Ow06jV.js";import{t as c,v as l}from"./src-Bf8IXmOS.js";import{Xn as u,bt as d,qn as f,sr as p,ut as m}from"./chart-tooltip-BIiKhH0l.js";import{t as h}from"./metric-tabs-chart-CVuzXJyj.js";import{C as g,N as ee,S as te,T as _,k as v}from"./report-metric-D7PFtooA.js";import{t as y}from"./widget-state-CsCQdmg9.js";import{S as ne,b as re,t as ie,x as ae,y as oe}from"./src-DMKl_JFZ.js";import{n as b,r as x}from"./with-widget-canvas-Dz43KNHY.js";import{n as S,t as se}from"./src-DHVerfrF.js";var C,w,T,E=e((()=>{n(),C={type:`currency`,options:{decimals:2}},w=[{id:`impressions`,label:t(`Ads Served`,`jetpack-premium-analytics`)},{id:`cpm`,label:t(`Average CPM`,`jetpack-premium-analytics`),dataFormat:C},{id:`revenue`,label:t(`Revenue`,`jetpack-premium-analytics`),dataFormat:C}],T=w.map(e=>e.id)})),D,O,k=e((()=>{D=`_root_dimrf_1`,O={root:D}}));function A(e,t){return Number(e?.summary?.[t]??0)}function j(e,t){return(e?.data??[]).map(e=>({date:p(e.date_start),value:Number(e[t]??0)}))}function M(e,t,n,r,i,a){let o=n?j(t,r):void 0,s=!!o?.length;return{key:r,label:i,value:A(e,r),previousValue:s?A(t,r):void 0,current:j(e,r),previous:s?o:void 0,dataFormat:a}}function N(e,t){return{...e,period:t}}function ce(e,t,n=T){let{primary:r,comparison:a,hasComparison:o,isLoading:s,isFetching:c,isError:l,refetch:f}=d((0,i.useMemo)(()=>N(e,t),[e,t])),p=r.data,m=a.data,h=(0,i.useMemo)(()=>p&&m?u(m,p.data.length):m,[p,m]),g=(0,i.useMemo)(()=>{let e=new Set(n);return w.filter(t=>e.has(t.id))},[n]);return{metrics:(0,i.useMemo)(()=>g.map(e=>M(p,h,o,e.id,e.label,e.dataFormat)),[g,p,h,o]),isLoading:s,isFetching:c,isError:l&&!p?.data?.length,isEmpty:p!==void 0&&!p.data?.length,refetch:f}}var le=e((()=>{m(),a(),E()}));function ue(e){switch(e){case`week`:return`week`;case`month`:case`quarter`:return`month`;case`year`:return`year`;default:return`day`}}function de({granularity:e,metricIds:n}){let{reportParams:r}=ee(),{metrics:i,isLoading:a,isFetching:o,isError:s,isEmpty:c,refetch:u}=ce(r,e===`auto`?ue(r.interval):e,n),d=i.length===0;return(0,F.jsx)(`div`,{className:O.root,children:(0,F.jsx)(y,{isLoading:d?!1:a,isFetching:d?!1:o,isError:d?!1:s,isEmpty:d||c,error:{description:t(`We couldn't load WordAds data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:u}]},empty:{icon:l,description:t(d?`Select at least one metric to display.`:`No WordAds data in this period.`,`jetpack-premium-analytics`)},children:(0,F.jsx)(h,{metrics:i,dataFormat:I,groupLabel:t(`WordAds metric`,`jetpack-premium-analytics`)})})})}function P({attributes:e={}}){return(0,F.jsx)(v,{attributes:e,options:{from:`/`},children:(0,F.jsx)(de,{granularity:e.granularity??`auto`,metricIds:e.metrics})})}var F,I,L=e((()=>{c(),ie(),n(),k(),le(),F=r(),I={type:`number`,options:{useMultipliers:!0,decimals:0}}})),R,z=e((()=>{n(),s(),se(),E(),R={name:`jpa/wordads-chart-tabs`,title:t(`WordAds`,`jetpack-premium-analytics`),help:{content:t(`Compare ads served, average CPM, and revenue over the selected period, with the previous period overlaid for comparison.`,`jetpack-premium-analytics`)},icon:o,attributes:[{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics`),type:`text`,elements:[{label:t(`Auto`,`jetpack-premium-analytics`),value:`auto`},{label:t(`By days`,`jetpack-premium-analytics`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics`),value:`month`},{label:t(`By years`,`jetpack-premium-analytics`),value:`year`}],relevance:`high`},{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics`),type:`array`,relevance:`high`,Edit:S,elements:w.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{granularity:`auto`,metrics:T}}}}));function B({withComparison:e,metrics:t}){return(0,H.jsx)(P,{attributes:{reportParams:f(e),metrics:t}})}function V(e){return(0,H.jsx)(P,{attributes:{reportParams:f(!1,e)}})}function fe({withComparison:e,metrics:t,...n}){return(0,H.jsx)(re,{...n,widgetType:R,renderModule:U,renderComponent:P,attributes:{reportParams:f(e),metrics:t}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),ae(),te(),b(),E(),L(),z(),H=r(),g(),U=`storybook/wordads-chart-tabs`,W={metrics:{control:`check`,options:T}},G={metrics:T},K={title:`Packages/Premium Analytics/Widgets/WordAdsChartTabs`,component:P,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...W},parameters:{docs:{description:{component:"WordAds performance over the selected period as selectable metric tabs — Ads Served, Average CPM, and Revenue, matching the Calypso WordAds page's tabs — over a comparative line chart. Ads Served is a count; CPM and revenue are currency (WordAds pays USD). The date range and comparison come from the dashboard controls; the \"Group by\" control is the `granularity` attribute and the visible tabs are the `metrics` attribute (both `relevance: 'high'`), exposed by the widget host. WordAds stats are computed nightly, so a range ending today is clamped to end at yesterday. When comparison is on the previous period is overlaid as a same-colour dashed line and each tab shows its period-over-period delta. Data comes from the `useStatsWordAdsStats` hook (the `wordads` proxy prefix); in Storybook it is served by `registerReportMocks`. Requires WordAds to be active on the site for live data."}}}},q={render:B,args:{withComparison:!1,...G},decorators:[x]},J={render:B,args:{withComparison:!0,...G},decorators:[x]},Y={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(_(`wordads/stats`,`loading`),()=>_(`wordads/stats`,null))},X={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(_(`wordads/stats`,`error`),()=>_(`wordads/stats`,null))},Z={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(_(`wordads/stats`,`empty`),()=>_(`wordads/stats`,null))},Q={render:e=>(0,H.jsx)(fe,{...e}),args:{...oe,withComparison:!0,...G},argTypes:{...ne,withComparison:{control:`boolean`},...W}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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