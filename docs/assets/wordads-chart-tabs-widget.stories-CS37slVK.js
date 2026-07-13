import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{N as i,t as a}from"./build-module-DMs68Vfd.js";import{n as o,rl as s}from"./build-module-Bt8gOW8e.js";import{Gt as c,It as l,S as u,d,p as f,s as p,zt as ee}from"./hooks-DLXILeQ8.js";import{g as m,t as h}from"./src-DFyLNOp-.js";import{t as g}from"./metric-tabs-chart-DINkpchk.js";import{n as te,r as _,t as ne}from"./register-report-mocks-CnZ_77AT.js";import{t as re}from"./widget-state-DECP44YO.js";import{i as ie,n as ae,r as oe,t as se}from"./widget-dashboard-with-widget-089p4ezJ.js";import{t as ce}from"./src-BW7XE8Jy.js";import{n as le,t as v}from"./src-ihE2fCEj.js";var y,b,x,S=e((()=>{n(),y={type:`currency`,options:{decimals:2}},b=[{id:`impressions`,label:t(`Ads Served`,`jetpack-premium-analytics`)},{id:`cpm`,label:t(`Average CPM`,`jetpack-premium-analytics`),dataFormat:y},{id:`revenue`,label:t(`Revenue`,`jetpack-premium-analytics`),dataFormat:y}],x=b.map(e=>e.id)})),C,w,ue=e((()=>{C=`_root_dimrf_1`,w={root:C}}));function T(e,t){return Number(e?.summary?.[t]??0)}function E(e,t){return(e?.data??[]).map(e=>({date:c(e.date_start),value:Number(e[t]??0)}))}function D(e,t,n,r,i,a){let o=n?E(t,r):void 0,s=!!o?.length;return{key:r,label:i,value:T(e,r),previousValue:s?T(t,r):void 0,current:E(e,r),previous:s?o:void 0,dataFormat:a}}function O(e,t){return{...e,period:t}}function k(e,t,n=x){let{primary:r,comparison:a,hasComparison:o,isLoading:s,isFetching:c,isError:l,refetch:d}=u((0,i.useMemo)(()=>O(e,t),[e,t])),f=r.data,p=a.data,m=(0,i.useMemo)(()=>f&&p?ee(p,f.data.length):p,[f,p]),h=(0,i.useMemo)(()=>{let e=new Set(n);return b.filter(t=>e.has(t.id))},[n]);return{metrics:(0,i.useMemo)(()=>h.map(e=>D(f,m,o,e.id,e.label,e.dataFormat)),[h,f,m,o]),isLoading:s,isFetching:c,isError:l,isEmpty:f!==void 0&&!f.data?.length,refetch:d}}var A=e((()=>{f(),a(),S()}));function de(e){switch(e){case`week`:return`week`;case`month`:case`quarter`:return`month`;case`year`:return`year`;default:return`day`}}function j({granularity:e,metricIds:n}){let{reportParams:r}=d(),{metrics:i,isLoading:a,isFetching:o,isError:s,isEmpty:c,refetch:l}=k(r,e===`auto`?de(r.interval):e,n),u=i.length===0;return(0,N.jsx)(`div`,{className:w.root,children:(0,N.jsx)(re,{isLoading:u?!1:a,isFetching:u?!1:o,isError:u?!1:s,isEmpty:u||c,error:{description:t(`We couldn't load WordAds data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:l}]},empty:{icon:m,description:t(u?`Select at least one metric to display.`:`No WordAds data in this period.`,`jetpack-premium-analytics`)},children:(0,N.jsx)(g,{metrics:i,dataFormat:P,groupLabel:t(`WordAds metric`,`jetpack-premium-analytics`)})})})}function M({attributes:e={}}){return(0,N.jsx)(p,{attributes:e,options:{from:`/`},children:(0,N.jsx)(j,{granularity:e.granularity??`auto`,metricIds:e.metrics})})}var N,P,F=e((()=>{h(),ce(),n(),ue(),A(),N=r(),P={type:`number`,options:{useMultipliers:!0,decimals:0}}})),I,L=e((()=>{n(),o(),v(),S(),I={name:`jpa/wordads-chart-tabs`,title:t(`WordAds`,`jetpack-premium-analytics`),description:t(`Compare ads served, average CPM, and revenue over the selected period, with the previous period overlaid for comparison.`,`jetpack-premium-analytics`),icon:s,attributes:[{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics`),type:`text`,elements:[{label:t(`Auto`,`jetpack-premium-analytics`),value:`auto`},{label:t(`By days`,`jetpack-premium-analytics`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics`),value:`month`},{label:t(`By years`,`jetpack-premium-analytics`),value:`year`}],relevance:`high`},{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics`),type:`array`,relevance:`high`,Edit:le,elements:b.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{granularity:`auto`,metrics:x}}}}));function R({withComparison:e,metrics:t}){return(0,V.jsx)(M,{attributes:{reportParams:l(e),metrics:t}})}function z(e){return(0,V.jsx)(M,{attributes:{reportParams:l(!1,e)}})}function B({withComparison:e,metrics:t,...n}){return(0,V.jsx)(ae,{...n,widgetType:I,renderModule:H,renderComponent:M,attributes:{reportParams:l(e),metrics:t}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{f(),oe(),ne(),S(),F(),L(),V=r(),te(),H=`storybook/wordads-chart-tabs`,U={metrics:{control:`check`,options:x}},W={metrics:x},G=e=>(0,V.jsx)(`div`,{style:{width:`100%`,height:`360px`},children:(0,V.jsx)(e,{})}),K={title:`Packages/Premium Analytics/Widgets/WordAdsChartTabs`,component:M,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...U},parameters:{docs:{description:{component:"WordAds performance over the selected period as selectable metric tabs — Ads Served, Average CPM, and Revenue, matching the Calypso WordAds page's tabs — over a comparative line chart. Ads Served is a count; CPM and revenue are currency (WordAds pays USD). The date range and comparison come from the dashboard controls; the \"Group by\" control is the `granularity` attribute and the visible tabs are the `metrics` attribute (both `relevance: 'high'`), exposed by the widget host. WordAds stats are computed nightly, so a range ending today is clamped to end at yesterday. When comparison is on the previous period is overlaid as a same-colour dashed line and each tab shows its period-over-period delta. Data comes from the `useStatsWordAdsStats` hook (the `wordads` proxy prefix); in Storybook it is served by `registerReportMocks`. Requires WordAds to be active on the site for live data."}}}},q={render:R,args:{withComparison:!1,...W},decorators:[G]},J={render:R,args:{withComparison:!0,...W},decorators:[G]},Y={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[G],beforeEach:()=>(_(`wordads/stats`,`loading`),()=>_(`wordads/stats`,null))},X={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[G],beforeEach:()=>(_(`wordads/stats`,`error`),()=>_(`wordads/stats`,null))},Z={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[G],beforeEach:()=>(_(`wordads/stats`,`empty`),()=>_(`wordads/stats`,null))},Q={render:e=>(0,V.jsx)(B,{...e}),args:{...se,withComparison:!0,...W},argTypes:{...ie,withComparison:{control:`boolean`},...U}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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