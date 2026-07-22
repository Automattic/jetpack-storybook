import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{Nn as o,n as s}from"./build-module-DmVuor49.js";import{t as c,v as l}from"./src-B3le4dug.js";import{Mt as u,a as d,cr as f,dr as ee,r as p,yt as m}from"./chart-tooltip-BtX3Jjce.js";import{t as h}from"./metric-tabs-chart-Bq-rkN2O.js";import{F as g,M as _,N as v,U as te,z as ne}from"./report-metric-CWPPaMwH.js";import{t as re}from"./widget-state-CE3oTs97.js";import{C as ie,S as ae,T as oe,b as y,t as b,w as x,x as S}from"./src-BAp3Kd5h.js";import{i as C,n as w,t as se}from"./src-wxObwIP2.js";var T,E,D,O=e((()=>{n(),T={type:`currency`,options:{decimals:2}},E=[{id:`impressions`,label:t(`Ads Served`,`jetpack-premium-analytics`)},{id:`cpm`,label:t(`Average CPM`,`jetpack-premium-analytics`),dataFormat:T},{id:`revenue`,label:t(`Revenue`,`jetpack-premium-analytics`),dataFormat:T}],D=E.map(e=>e.id)})),k,A,j=e((()=>{k=`_root_dimrf_1`,A={root:k}}));function ce(e,t){return{...e,period:t}}function le(e,t,n=D){let{primary:r,comparison:a,hasComparison:o,isLoading:s,isFetching:c,isError:l,refetch:d}=u((0,i.useMemo)(()=>ce(e,t),[e,t])),f=r.data,m=a.data,h=(0,i.useMemo)(()=>f&&m?ee(m,f.data.length):m,[f,m]),g=(0,i.useMemo)(()=>{let e=new Set(n);return E.filter(t=>e.has(t.id))},[n]);return{metrics:(0,i.useMemo)(()=>g.map(e=>p({primary:f,comparison:h,hasComparison:o,field:e.id,label:e.label,dataFormat:e.dataFormat})),[g,f,h,o]),isLoading:s,isFetching:c,isError:l&&!f?.data?.length,isEmpty:f!==void 0&&!f.data?.length,refetch:d}}var ue=e((()=>{m(),a(),O(),b()}));function de({granularity:e,metricIds:n}){let{reportParams:r}=te(),{metrics:i,isLoading:a,isFetching:o,isError:s,isEmpty:c,refetch:u}=le(r,e===`auto`?d(r.interval,F):e,n),f=i.length===0;return(0,N.jsx)(`div`,{className:A.root,children:(0,N.jsx)(re,{isLoading:f?!1:a,isFetching:f?!1:o,isError:f?!1:s,isEmpty:f||c,error:{description:t(`We couldn't load WordAds data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:u}]},empty:{icon:l,description:t(f?`Select at least one metric to display.`:`No WordAds data in this period.`,`jetpack-premium-analytics`)},children:(0,N.jsx)(h,{metrics:i,dataFormat:P,groupLabel:t(`WordAds metric`,`jetpack-premium-analytics`)})})})}function M({attributes:e={}}){return(0,N.jsx)(ne,{attributes:e,options:{from:`/`},children:(0,N.jsx)(de,{granularity:e.granularity??`auto`,metricIds:e.metrics})})}var N,P,F,I=e((()=>{c(),b(),n(),j(),ue(),N=r(),P={type:`number`,options:{useMultipliers:!0,decimals:0}},F=[`day`,`week`,`month`,`year`]})),L,R=e((()=>{n(),s(),se(),O(),L={name:`jpa/wordads-chart-tabs`,title:t(`WordAds`,`jetpack-premium-analytics`),help:{content:t(`Compare ads served, average CPM, and revenue over the selected period, with the previous period overlaid for comparison.`,`jetpack-premium-analytics`)},icon:o,attributes:[{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics`),type:`text`,Edit:w,elements:[{label:t(`Auto`,`jetpack-premium-analytics`),value:`auto`},{label:t(`By days`,`jetpack-premium-analytics`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics`),value:`month`},{label:t(`By years`,`jetpack-premium-analytics`),value:`year`}],relevance:`high`},{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics`),type:`array`,relevance:`high`,Edit:C,elements:E.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{granularity:`auto`,metrics:D}}}}));function z({withComparison:e,metrics:t}){return(0,H.jsx)(M,{attributes:{reportParams:f(e),metrics:t}})}function B(e){return(0,H.jsx)(M,{attributes:{reportParams:f(!1,e)}})}function V({withComparison:e,metrics:t,...n}){return(0,H.jsx)(ie,{...n,widgetType:L,renderModule:U,renderComponent:M,attributes:{reportParams:f(e),metrics:t}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),x(),_(),y(),O(),I(),R(),H=r(),v(),U=`storybook/wordads-chart-tabs`,W={metrics:{control:`check`,options:D}},G={metrics:D},K={title:`Packages/Premium Analytics/Widgets/WordAdsChartTabs`,component:M,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...W},parameters:{docs:{description:{component:"WordAds performance over the selected period as selectable metric tabs — Ads Served, Average CPM, and Revenue, matching the Calypso WordAds page's tabs — over a comparative line chart. Ads Served is a count; CPM and revenue are currency (WordAds pays USD). The date range and comparison come from the dashboard controls; the \"Group by\" control is the `granularity` attribute and the visible tabs are the `metrics` attribute (both `relevance: 'high'`), exposed by the widget host. WordAds stats are computed nightly, so a range ending today is clamped to end at yesterday. When comparison is on the previous period is overlaid as a same-colour dashed line and each tab shows its period-over-period delta. Data comes from the `useStatsWordAdsStats` hook (the `wordads` proxy prefix); in Storybook it is served by `registerReportMocks`. Requires WordAds to be active on the site for live data."}}}},q={render:z,args:{withComparison:!1,...G},decorators:[S]},J={render:z,args:{withComparison:!0,...G},decorators:[S]},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(g(`wordads/stats`,`loading`),()=>g(`wordads/stats`,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(g(`wordads/stats`,`error`),()=>g(`wordads/stats`,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(g(`wordads/stats`,`empty`),()=>g(`wordads/stats`,null))},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...ae,withComparison:!0,...G},argTypes:{...oe,withComparison:{control:`boolean`},...W}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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