import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{ll as o,n as s}from"./build-module-CDRs4YxF.js";import{$ as c,K as l,Y as u,q as d,rt as f}from"./report-metric-I3SWuSNy.js";import{t as p,v as m}from"./src-tEZrN6jJ.js";import{Rt as ee,Tt as h,a as te,hr as g,s as ne,vr as re}from"./chart-tooltip-CSGxnygQ.js";import{t as ie}from"./metric-tabs-chart-BhVjntEx.js";import{C as _,D as ae,E as oe,S as se,T as ce,b as le,t as v,w as ue,x as y}from"./src-Ds4jaArn.js";import{t as de}from"./widget-state-OaOfTk3n.js";import{i as b,n as fe,t as pe}from"./src-i1nvZsMo.js";var x,S,C,w=e((()=>{n(),x={type:`currency`,options:{decimals:2}},S=[{id:`impressions`,label:t(`Ads Served`,`jetpack-premium-analytics-pkg`)},{id:`cpm`,label:t(`Average CPM`,`jetpack-premium-analytics-pkg`),dataFormat:x},{id:`revenue`,label:t(`Revenue`,`jetpack-premium-analytics-pkg`),dataFormat:x}],C=S.map(e=>e.id)})),T,E,D=e((()=>{T=`_root_dimrf_1`,E={root:T}}));function me(e,t){return{...e,period:t}}function he(e,t,n=C){let{primary:r,comparison:a,hasComparison:o,isLoading:s,isFetching:c,isError:l,refetch:u}=ee((0,i.useMemo)(()=>me(e,t),[e,t])),d=r.data,f=a.data,p=(0,i.useMemo)(()=>d&&f?re(f,d.data.length):f,[d,f]),m=(0,i.useMemo)(()=>{let e=new Set(n);return S.filter(t=>e.has(t.id))},[n]);return{metrics:(0,i.useMemo)(()=>m.map(e=>te({primary:d,comparison:p,hasComparison:o,field:e.id,label:e.label,dataFormat:e.dataFormat})),[m,d,p,o]),isLoading:s,isFetching:c,isError:l&&!d?.data?.length,isEmpty:d!==void 0&&!d.data?.length,refetch:u}}var ge=e((()=>{h(),a(),w(),v()}));function _e({granularity:e,metricIds:n}){let{reportParams:r}=f(),{metrics:i,isLoading:a,isFetching:o,isError:s,isEmpty:c,refetch:l}=he(r,e===`auto`?ne(r.interval,j):e,n),u=i.length===0;return(0,k.jsx)(`div`,{className:E.root,children:(0,k.jsx)(de,{isLoading:u?!1:a,isFetching:u?!1:o,isError:u?!1:s,isEmpty:u||c,error:{description:t(`We couldn't load WordAds data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:l}]},empty:{icon:m,description:t(u?`Select at least one metric to display.`:`No WordAds data in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,k.jsx)(ie,{metrics:i,dataFormat:A,groupLabel:t(`WordAds metric`,`jetpack-premium-analytics-pkg`)})})})}function O({attributes:e={}}){return(0,k.jsx)(c,{attributes:e,options:{from:`/`},children:(0,k.jsx)(_e,{granularity:e.granularity??`auto`,metricIds:e.metrics})})}var k,A,j,ve=e((()=>{p(),v(),n(),D(),ge(),k=r(),A={type:`number`,options:{useMultipliers:!0,decimals:0}},j=[`day`,`week`,`month`,`year`]})),M,ye=e((()=>{n(),s(),pe(),w(),M={icon:o,attributes:[{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:fe,elements:[{label:t(`Auto`,`jetpack-premium-analytics-pkg`),value:`auto`},{label:t(`By days`,`jetpack-premium-analytics-pkg`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics-pkg`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics-pkg`),value:`month`},{label:t(`By years`,`jetpack-premium-analytics-pkg`),value:`year`}],relevance:`high`},{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics-pkg`),type:`array`,relevance:`high`,Edit:b,elements:S.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{granularity:`auto`,metrics:C}}}})),N,P,F,I,L,R,z,be=e((()=>{N=`jpa/wordads-chart-tabs`,P=`WordAds`,F=`Compare ads served, average CPM, and revenue over the selected period, with the previous period overlaid for comparison.`,I={content:`Compare ads served, average CPM, and revenue over the selected period, with the previous period overlaid for comparison.`},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({withComparison:e,metrics:t}){return(0,H.jsx)(O,{attributes:{reportParams:g(e),metrics:t}})}function V(e){return(0,H.jsx)(O,{attributes:{reportParams:g(!1,e)}})}function xe({withComparison:e,metrics:t,...n}){return(0,H.jsx)(ce,{...n,widgetType:se(z,M),renderModule:U,renderComponent:O,attributes:{reportParams:g(e),metrics:t}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),oe(),l(),_(),le(),w(),ve(),ye(),be(),H=r(),d(),U=`storybook/wordads-chart-tabs`,W={metrics:{control:`check`,options:C}},G={metrics:C},K={title:`Packages/Premium Analytics/Widgets/WordAdsChartTabs`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...W},parameters:{docs:{description:{component:"WordAds performance over the selected period as selectable metric tabs — Ads Served, Average CPM, and Revenue, matching the Calypso WordAds page's tabs — over a comparative line chart. Ads Served is a count; CPM and revenue are currency (WordAds pays USD). The date range and comparison come from the dashboard controls; the \"Group by\" control is the `granularity` attribute and the visible tabs are the `metrics` attribute (both `relevance: 'high'`), exposed by the widget host. WordAds stats are computed nightly, so a range ending today is clamped to end at yesterday. When comparison is on the previous period is overlaid as a same-colour dashed line and each tab shows its period-over-period delta. Data comes from the `useStatsWordAdsStats` hook (the `wordads` proxy prefix); in Storybook it is served by `registerReportMocks`. Requires WordAds to be active on the site for live data."}}}},q={render:B,args:{withComparison:!1,...G},decorators:[y]},J={render:B,args:{withComparison:!0,...G},decorators:[y]},Y={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(u(`wordads/stats`,`loading`),()=>u(`wordads/stats`,null))},X={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(u(`wordads/stats`,`error`),()=>u(`wordads/stats`,null))},Z={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(u(`wordads/stats`,`empty`),()=>u(`wordads/stats`,null))},Q={render:e=>(0,H.jsx)(xe,{...e}),args:{...ue,withComparison:!0,...G},argTypes:{...ae,withComparison:{control:`boolean`},...W}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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