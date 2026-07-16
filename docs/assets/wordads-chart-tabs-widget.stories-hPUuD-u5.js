import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{Nn as o,n as s}from"./build-module-DmVuor49.js";import{t as c,v as l}from"./src-B3le4dug.js";import{Qn as u,Yn as d,bt as ee,lr as f,ut as p}from"./chart-tooltip-D391HsEs.js";import{t as m}from"./metric-tabs-chart-Y1ZyPAkr.js";import{C as h,N as te,S as g,T as _,k as v}from"./report-metric-rOGqqN_8.js";import{t as y}from"./widget-state-CzHLjliM.js";import{S as b,b as ne,t as re,x as ie,y as ae}from"./src-Cv7mlpCY.js";import{n as oe,r as x}from"./with-widget-canvas-Dz43KNHY.js";import{n as se,t as ce}from"./src-nTDddEwN.js";var S,C,w,T=e((()=>{n(),S={type:`currency`,options:{decimals:2}},C=[{id:`impressions`,label:t(`Ads Served`,`jetpack-premium-analytics`)},{id:`cpm`,label:t(`Average CPM`,`jetpack-premium-analytics`),dataFormat:S},{id:`revenue`,label:t(`Revenue`,`jetpack-premium-analytics`),dataFormat:S}],w=C.map(e=>e.id)})),E,D,O=e((()=>{E=`_root_dimrf_1`,D={root:E}}));function k(e,t){return Number(e?.summary?.[t]??0)}function A(e,t){return(e?.data??[]).map(e=>({date:f(e.date_start),value:Number(e[t]??0)}))}function j(e,t,n,r,i,a){let o=n?A(t,r):void 0,s=!!o?.length;return{key:r,label:i,value:k(e,r),previousValue:s?k(t,r):void 0,current:A(e,r),previous:s?o:void 0,dataFormat:a}}function M(e,t){return{...e,period:t}}function le(e,t,n=w){let{primary:r,comparison:a,hasComparison:o,isLoading:s,isFetching:c,isError:l,refetch:d}=ee((0,i.useMemo)(()=>M(e,t),[e,t])),f=r.data,p=a.data,m=(0,i.useMemo)(()=>f&&p?u(p,f.data.length):p,[f,p]),h=(0,i.useMemo)(()=>{let e=new Set(n);return C.filter(t=>e.has(t.id))},[n]);return{metrics:(0,i.useMemo)(()=>h.map(e=>j(f,m,o,e.id,e.label,e.dataFormat)),[h,f,m,o]),isLoading:s,isFetching:c,isError:l&&!f?.data?.length,isEmpty:f!==void 0&&!f.data?.length,refetch:d}}var ue=e((()=>{p(),a(),T()}));function de(e){switch(e){case`week`:return`week`;case`month`:case`quarter`:return`month`;case`year`:return`year`;default:return`day`}}function N({granularity:e,metricIds:n}){let{reportParams:r}=te(),{metrics:i,isLoading:a,isFetching:o,isError:s,isEmpty:c,refetch:u}=le(r,e===`auto`?de(r.interval):e,n),d=i.length===0;return(0,F.jsx)(`div`,{className:D.root,children:(0,F.jsx)(y,{isLoading:d?!1:a,isFetching:d?!1:o,isError:d?!1:s,isEmpty:d||c,error:{description:t(`We couldn't load WordAds data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:u}]},empty:{icon:l,description:t(d?`Select at least one metric to display.`:`No WordAds data in this period.`,`jetpack-premium-analytics`)},children:(0,F.jsx)(m,{metrics:i,dataFormat:I,groupLabel:t(`WordAds metric`,`jetpack-premium-analytics`)})})})}function P({attributes:e={}}){return(0,F.jsx)(v,{attributes:e,options:{from:`/`},children:(0,F.jsx)(N,{granularity:e.granularity??`auto`,metricIds:e.metrics})})}var F,I,L=e((()=>{c(),re(),n(),O(),ue(),F=r(),I={type:`number`,options:{useMultipliers:!0,decimals:0}}})),R,z=e((()=>{n(),s(),ce(),T(),R={name:`jpa/wordads-chart-tabs`,title:t(`WordAds`,`jetpack-premium-analytics`),help:{content:t(`Compare ads served, average CPM, and revenue over the selected period, with the previous period overlaid for comparison.`,`jetpack-premium-analytics`)},icon:o,attributes:[{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics`),type:`text`,elements:[{label:t(`Auto`,`jetpack-premium-analytics`),value:`auto`},{label:t(`By days`,`jetpack-premium-analytics`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics`),value:`month`},{label:t(`By years`,`jetpack-premium-analytics`),value:`year`}],relevance:`high`},{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics`),type:`array`,relevance:`high`,Edit:se,elements:C.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{granularity:`auto`,metrics:w}}}}));function B({withComparison:e,metrics:t}){return(0,H.jsx)(P,{attributes:{reportParams:d(e),metrics:t}})}function V(e){return(0,H.jsx)(P,{attributes:{reportParams:d(!1,e)}})}function fe({withComparison:e,metrics:t,...n}){return(0,H.jsx)(ne,{...n,widgetType:R,renderModule:U,renderComponent:P,attributes:{reportParams:d(e),metrics:t}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),ie(),g(),oe(),T(),L(),z(),H=r(),h(),U=`storybook/wordads-chart-tabs`,W={metrics:{control:`check`,options:w}},G={metrics:w},K={title:`Packages/Premium Analytics/Widgets/WordAdsChartTabs`,component:P,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...W},parameters:{docs:{description:{component:"WordAds performance over the selected period as selectable metric tabs — Ads Served, Average CPM, and Revenue, matching the Calypso WordAds page's tabs — over a comparative line chart. Ads Served is a count; CPM and revenue are currency (WordAds pays USD). The date range and comparison come from the dashboard controls; the \"Group by\" control is the `granularity` attribute and the visible tabs are the `metrics` attribute (both `relevance: 'high'`), exposed by the widget host. WordAds stats are computed nightly, so a range ending today is clamped to end at yesterday. When comparison is on the previous period is overlaid as a same-colour dashed line and each tab shows its period-over-period delta. Data comes from the `useStatsWordAdsStats` hook (the `wordads` proxy prefix); in Storybook it is served by `registerReportMocks`. Requires WordAds to be active on the site for live data."}}}},q={render:B,args:{withComparison:!1,...G},decorators:[x]},J={render:B,args:{withComparison:!0,...G},decorators:[x]},Y={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(_(`wordads/stats`,`loading`),()=>_(`wordads/stats`,null))},X={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(_(`wordads/stats`,`error`),()=>_(`wordads/stats`,null))},Z={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(_(`wordads/stats`,`empty`),()=>_(`wordads/stats`,null))},Q={render:e=>(0,H.jsx)(fe,{...e}),args:{...ae,withComparison:!0,...G},argTypes:{...b,withComparison:{control:`boolean`},...W}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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