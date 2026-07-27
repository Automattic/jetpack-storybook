import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{Nn as o,n as s}from"./build-module-DmVuor49.js";import{t as c,v as l}from"./src-B3le4dug.js";import{Ct as u,It as d,a as f,fr as p,hr as m,r as ee}from"./chart-tooltip-BTIuSmIh.js";import{t as h}from"./metric-tabs-chart-DeNKVqgM.js";import{I as g,L as te,U as ne,q as re,z as _}from"./report-metric-NxzMAucJ.js";import{t as ie}from"./widget-state-DEJzf1nP.js";import{C as ae,D as v,E as oe,S as se,T as ce,b as le,t as y,w as ue,x as b}from"./src-D9Oy_naS.js";import{i as de,n as fe,t as pe}from"./src-BZDbKhZf.js";var x,S,C,w=e((()=>{n(),x={type:`currency`,options:{decimals:2}},S=[{id:`impressions`,label:t(`Ads Served`,`jetpack-premium-analytics-pkg`)},{id:`cpm`,label:t(`Average CPM`,`jetpack-premium-analytics-pkg`),dataFormat:x},{id:`revenue`,label:t(`Revenue`,`jetpack-premium-analytics-pkg`),dataFormat:x}],C=S.map(e=>e.id)})),T,E,me=e((()=>{T=`_root_dimrf_1`,E={root:T}}));function he(e,t){return{...e,period:t}}function ge(e,t,n=C){let{primary:r,comparison:a,hasComparison:o,isLoading:s,isFetching:c,isError:l,refetch:u}=d((0,i.useMemo)(()=>he(e,t),[e,t])),f=r.data,p=a.data,h=(0,i.useMemo)(()=>f&&p?m(p,f.data.length):p,[f,p]),g=(0,i.useMemo)(()=>{let e=new Set(n);return S.filter(t=>e.has(t.id))},[n]);return{metrics:(0,i.useMemo)(()=>g.map(e=>ee({primary:f,comparison:h,hasComparison:o,field:e.id,label:e.label,dataFormat:e.dataFormat})),[g,f,h,o]),isLoading:s,isFetching:c,isError:l&&!f?.data?.length,isEmpty:f!==void 0&&!f.data?.length,refetch:u}}var _e=e((()=>{u(),a(),w(),y()}));function ve({granularity:e,metricIds:n}){let{reportParams:r}=re(),{metrics:i,isLoading:a,isFetching:o,isError:s,isEmpty:c,refetch:u}=ge(r,e===`auto`?f(r.interval,A):e,n),d=i.length===0;return(0,O.jsx)(`div`,{className:E.root,children:(0,O.jsx)(ie,{isLoading:d?!1:a,isFetching:d?!1:o,isError:d?!1:s,isEmpty:d||c,error:{description:t(`We couldn't load WordAds data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},empty:{icon:l,description:t(d?`Select at least one metric to display.`:`No WordAds data in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,O.jsx)(h,{metrics:i,dataFormat:k,groupLabel:t(`WordAds metric`,`jetpack-premium-analytics-pkg`)})})})}function D({attributes:e={}}){return(0,O.jsx)(ne,{attributes:e,options:{from:`/`},children:(0,O.jsx)(ve,{granularity:e.granularity??`auto`,metricIds:e.metrics})})}var O,k,A,ye=e((()=>{c(),y(),n(),me(),_e(),O=r(),k={type:`number`,options:{useMultipliers:!0,decimals:0}},A=[`day`,`week`,`month`,`year`]})),j,M=e((()=>{n(),s(),pe(),w(),j={icon:o,attributes:[{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:fe,elements:[{label:t(`Auto`,`jetpack-premium-analytics-pkg`),value:`auto`},{label:t(`By days`,`jetpack-premium-analytics-pkg`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics-pkg`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics-pkg`),value:`month`},{label:t(`By years`,`jetpack-premium-analytics-pkg`),value:`year`}],relevance:`high`},{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics-pkg`),type:`array`,relevance:`high`,Edit:de,elements:S.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{granularity:`auto`,metrics:C}}}})),N,P,F,I,L,R,z,be=e((()=>{N=`jpa/wordads-chart-tabs`,P=`WordAds`,F=`Compare ads served, average CPM, and revenue over the selected period, with the previous period overlaid for comparison.`,I={content:`Compare ads served, average CPM, and revenue over the selected period, with the previous period overlaid for comparison.`},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({withComparison:e,metrics:t}){return(0,H.jsx)(D,{attributes:{reportParams:p(e),metrics:t}})}function V(e){return(0,H.jsx)(D,{attributes:{reportParams:p(!1,e)}})}function xe({withComparison:e,metrics:t,...n}){return(0,H.jsx)(ce,{...n,widgetType:se(z,j),renderModule:U,renderComponent:D,attributes:{reportParams:p(e),metrics:t}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),oe(),g(),ae(),le(),w(),ye(),M(),be(),H=r(),te(),U=`storybook/wordads-chart-tabs`,W={metrics:{control:`check`,options:C}},G={metrics:C},K={title:`Packages/Premium Analytics/Widgets/WordAdsChartTabs`,component:D,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...W},parameters:{docs:{description:{component:"WordAds performance over the selected period as selectable metric tabs — Ads Served, Average CPM, and Revenue, matching the Calypso WordAds page's tabs — over a comparative line chart. Ads Served is a count; CPM and revenue are currency (WordAds pays USD). The date range and comparison come from the dashboard controls; the \"Group by\" control is the `granularity` attribute and the visible tabs are the `metrics` attribute (both `relevance: 'high'`), exposed by the widget host. WordAds stats are computed nightly, so a range ending today is clamped to end at yesterday. When comparison is on the previous period is overlaid as a same-colour dashed line and each tab shows its period-over-period delta. Data comes from the `useStatsWordAdsStats` hook (the `wordads` proxy prefix); in Storybook it is served by `registerReportMocks`. Requires WordAds to be active on the site for live data."}}}},q={render:B,args:{withComparison:!1,...G},decorators:[b]},J={render:B,args:{withComparison:!0,...G},decorators:[b]},Y={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(_(`wordads/stats`,`loading`),()=>_(`wordads/stats`,null))},X={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(_(`wordads/stats`,`error`),()=>_(`wordads/stats`,null))},Z={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(_(`wordads/stats`,`empty`),()=>_(`wordads/stats`,null))},Q={render:e=>(0,H.jsx)(xe,{...e}),args:{...ue,withComparison:!0,...G},argTypes:{...v,withComparison:{control:`boolean`},...W}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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