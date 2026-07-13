import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{N as i,t as a}from"./build-module-DMs68Vfd.js";import{n as o,rl as s}from"./build-module-Bt8gOW8e.js";import{It as c,S as l,d as u,p as d,qt as f,s as p,zt as m}from"./hooks-D5wPe2wg.js";import{g as h,t as g}from"./src-DFyLNOp-.js";import{t as ee}from"./metric-tabs-chart-CyjmCoPz.js";import{n as te,r as _,t as ne}from"./register-report-mocks-ijr2sxfr.js";import{t as re}from"./widget-state-GE0VliVt.js";import{i as ie,n as ae,r as v,t as oe}from"./widget-dashboard-with-widget-3v3dAjuw.js";import{t as se}from"./src-BZhfPZzz.js";import{n as y,t as b}from"./src-ihE2fCEj.js";var x,S,C,w=e((()=>{n(),x={type:`currency`,options:{decimals:2}},S=[{id:`impressions`,label:t(`Ads Served`,`jetpack-premium-analytics`)},{id:`cpm`,label:t(`Average CPM`,`jetpack-premium-analytics`),dataFormat:x},{id:`revenue`,label:t(`Revenue`,`jetpack-premium-analytics`),dataFormat:x}],C=S.map(e=>e.id)})),T,E,D=e((()=>{T=`_root_dimrf_1`,E={root:T}}));function O(e,t){return Number(e?.summary?.[t]??0)}function k(e,t){return(e?.data??[]).map(e=>({date:f(e.date_start),value:Number(e[t]??0)}))}function A(e,t,n,r,i,a){let o=n?k(t,r):void 0,s=!!o?.length;return{key:r,label:i,value:O(e,r),previousValue:s?O(t,r):void 0,current:k(e,r),previous:s?o:void 0,dataFormat:a}}function ce(e,t){return{...e,period:t}}function le(e,t,n=C){let{primary:r,comparison:a,hasComparison:o,isLoading:s,isFetching:c,isError:u,refetch:d}=l((0,i.useMemo)(()=>ce(e,t),[e,t])),f=r.data,p=a.data,h=(0,i.useMemo)(()=>f&&p?m(p,f.data.length):p,[f,p]),g=(0,i.useMemo)(()=>{let e=new Set(n);return S.filter(t=>e.has(t.id))},[n]);return{metrics:(0,i.useMemo)(()=>g.map(e=>A(f,h,o,e.id,e.label,e.dataFormat)),[g,f,h,o]),isLoading:s,isFetching:c,isError:u,isEmpty:f!==void 0&&!f.data?.length,refetch:d}}var ue=e((()=>{d(),a(),w()}));function de(e){switch(e){case`week`:return`week`;case`month`:case`quarter`:return`month`;case`year`:return`year`;default:return`day`}}function j({granularity:e,metricIds:n}){let{reportParams:r}=u(),{metrics:i,isLoading:a,isFetching:o,isError:s,isEmpty:c,refetch:l}=le(r,e===`auto`?de(r.interval):e,n),d=i.length===0;return(0,N.jsx)(`div`,{className:E.root,children:(0,N.jsx)(re,{isLoading:d?!1:a,isFetching:d?!1:o,isError:d?!1:s,isEmpty:d||c,error:{description:t(`We couldn't load WordAds data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:l}]},empty:{icon:h,description:t(d?`Select at least one metric to display.`:`No WordAds data in this period.`,`jetpack-premium-analytics`)},children:(0,N.jsx)(ee,{metrics:i,dataFormat:P,groupLabel:t(`WordAds metric`,`jetpack-premium-analytics`)})})})}function M({attributes:e={}}){return(0,N.jsx)(p,{attributes:e,options:{from:`/`},children:(0,N.jsx)(j,{granularity:e.granularity??`auto`,metricIds:e.metrics})})}var N,P,F=e((()=>{g(),se(),n(),D(),ue(),N=r(),P={type:`number`,options:{useMultipliers:!0,decimals:0}}})),I,L=e((()=>{n(),o(),b(),w(),I={name:`jpa/wordads-chart-tabs`,title:t(`WordAds`,`jetpack-premium-analytics`),description:t(`Compare ads served, average CPM, and revenue over the selected period, with the previous period overlaid for comparison.`,`jetpack-premium-analytics`),icon:s,attributes:[{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics`),type:`text`,elements:[{label:t(`Auto`,`jetpack-premium-analytics`),value:`auto`},{label:t(`By days`,`jetpack-premium-analytics`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics`),value:`month`},{label:t(`By years`,`jetpack-premium-analytics`),value:`year`}],relevance:`high`},{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics`),type:`array`,relevance:`high`,Edit:y,elements:S.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{granularity:`auto`,metrics:C}}}}));function R({withComparison:e,metrics:t}){return(0,V.jsx)(M,{attributes:{reportParams:c(e),metrics:t}})}function z(e){return(0,V.jsx)(M,{attributes:{reportParams:c(!1,e)}})}function B({withComparison:e,metrics:t,...n}){return(0,V.jsx)(ae,{...n,widgetType:I,renderModule:H,renderComponent:M,attributes:{reportParams:c(e),metrics:t}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),v(),ne(),w(),F(),L(),V=r(),te(),H=`storybook/wordads-chart-tabs`,U={metrics:{control:`check`,options:C}},W={metrics:C},G=e=>(0,V.jsx)(`div`,{style:{width:`100%`,height:`360px`},children:(0,V.jsx)(e,{})}),K={title:`Packages/Premium Analytics/Widgets/WordAdsChartTabs`,component:M,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...U},parameters:{docs:{description:{component:"WordAds performance over the selected period as selectable metric tabs — Ads Served, Average CPM, and Revenue, matching the Calypso WordAds page's tabs — over a comparative line chart. Ads Served is a count; CPM and revenue are currency (WordAds pays USD). The date range and comparison come from the dashboard controls; the \"Group by\" control is the `granularity` attribute and the visible tabs are the `metrics` attribute (both `relevance: 'high'`), exposed by the widget host. WordAds stats are computed nightly, so a range ending today is clamped to end at yesterday. When comparison is on the previous period is overlaid as a same-colour dashed line and each tab shows its period-over-period delta. Data comes from the `useStatsWordAdsStats` hook (the `wordads` proxy prefix); in Storybook it is served by `registerReportMocks`. Requires WordAds to be active on the site for live data."}}}},q={render:R,args:{withComparison:!1,...W},decorators:[G]},J={render:R,args:{withComparison:!0,...W},decorators:[G]},Y={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[G],beforeEach:()=>(_(`wordads/stats`,`loading`),()=>_(`wordads/stats`,null))},X={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[G],beforeEach:()=>(_(`wordads/stats`,`error`),()=>_(`wordads/stats`,null))},Z={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[G],beforeEach:()=>(_(`wordads/stats`,`empty`),()=>_(`wordads/stats`,null))},Q={render:e=>(0,V.jsx)(B,{...e}),args:{...oe,withComparison:!0,...W},argTypes:{...ie,withComparison:{control:`boolean`},...U}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
  // Kept off the shared autodocs page: the mock override is keyed by path, so it
  // would otherwise force the sibling stories on that page into the same state.
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