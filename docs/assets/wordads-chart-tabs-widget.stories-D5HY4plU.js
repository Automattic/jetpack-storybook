import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Gu as i,Nu as a,fl as o,t as s}from"./build-module-zwSmKorH.js";import{B as ee,L as c,b as te,g as ne,j as re}from"./hooks-CNwyYxyF.js";import{b as ie,t as ae}from"./src-DFNM1k7F.js";import{J as oe,K as se,X as l,t as ce}from"./src-pjTcHlnM.js";import{a as le,en as u,gn as d,i as f,tn as ue,w as de}from"./date-filters-panel-C_unBQt5.js";import{r as p,t as m}from"./metric-tabs-chart-skeleton-C_4bu5HJ.js";import{G as h,K as g,Y as _}from"./report-metric-9JZdI7La.js";import{t as v}from"./widget-state-B3UWsrJq.js";import{C as fe,D as pe,E as me,S as he,T as ge,b as _e,t as y,w as ve,x as b}from"./src-BVJCQwR7.js";import{n as ye,r as be,t as xe}from"./with-site-time-zone-ChMEfdAF.js";var x,S=e((()=>{f(),x=ue()})),C,w=e((()=>{ce(),C={presetIds:[l,oe,se],periods:[`day`,`week`,`month`,`year`]}})),T,E,D=e((()=>{T=`_root_sp1nf_1`,E={root:T}})),O,k,A=e((()=>{n(),O={type:`currency`,options:{decimals:2}},k=[{id:`impressions`,label:t(`Ads Served`,`jetpack-premium-analytics-pkg`)},{id:`cpm`,label:t(`Average CPM`,`jetpack-premium-analytics-pkg`),dataFormat:O},{id:`revenue`,label:t(`Revenue`,`jetpack-premium-analytics-pkg`),dataFormat:O}]}));function j(e,t){let{primary:n,isLoading:r,isFetching:a,isError:o,refetch:s}=de((0,i.useMemo)(()=>({...e,period:t}),[e,t])),c=n.data;return{metrics:(0,i.useMemo)(()=>k.map(e=>ee({primary:c,comparison:void 0,hasComparison:!1,field:e.id,label:e.label,dataFormat:e.dataFormat})),[c]),isLoading:r,isFetching:a,isError:o&&!c?.data?.length,isEmpty:c!==void 0&&!c.data?.length,refetch:s}}var M=e((()=>{f(),a(),A(),y()}));function Se(){let{reportParams:e}=te(),{metrics:n,isLoading:r,isFetching:i,isError:a,isEmpty:o,refetch:s}=j(e,le(e,C.periods));return(0,P.jsx)(`div`,{className:E.root,children:(0,P.jsx)(v,{isLoading:r,isFetching:i,isError:a,isEmpty:o,error:{description:t(`We couldn't load WordAds data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:s}]},empty:{icon:ie,description:t(`No WordAds data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,P.jsx)(m,{}),children:(0,P.jsx)(p,{metrics:n,dataFormat:F,groupLabel:t(`WordAds metric`,`jetpack-premium-analytics-pkg`)})})})}function N({attributes:e={}}){let t=e.reportParams??x;return(0,P.jsx)(d,{offersComparison:!1,children:(0,P.jsx)(ne,{attributes:{...e,reportParams:t},children:(0,P.jsx)(Se,{})})})}var P,F,Ce=e((()=>{f(),ae(),y(),n(),S(),w(),D(),M(),P=r(),F={type:`number`,options:{useMultipliers:!0,decimals:0}}})),I,we=e((()=>{re(),s(),S(),w(),I={icon:o,attributes:[c({withIntervalControl:!0,grain:C})],example:{attributes:{reportParams:x}}}})),L,R,z,B,V,H,U,Te=e((()=>{L=`jpa/wordads-chart-tabs`,R=`WordAds`,z=`Track ads served, average CPM, and revenue over the selected period.`,B={content:`Track ads served, average CPM, and revenue over the selected period.`},V=`stats`,H=`framed`,U={name:L,title:R,description:z,help:B,category:V,presentation:H}}));function W(e,t){return()=>(0,G.jsx)(N,{attributes:{reportParams:{...u(!1,e),interval:t}}})}function Ee({...e}){return(0,G.jsx)(ge,{...e,widgetType:he(U,I),renderModule:K,renderComponent:N,attributes:{reportParams:u(!1)}})}var G,K,q,J,Y,X,Z,Q,$;e((()=>{me(),f(),h(),fe(),_e(),xe(),Ce(),we(),Te(),G=r(),g(),K=`storybook/wordads-chart-tabs`,q={title:`Packages/Premium Analytics/Widgets/WordAdsChartTabs`,component:N,tags:[`autodocs`],decorators:[be],argTypes:{...ye},parameters:{docs:{description:{component:"WordAds performance over the selected period as selectable metric tabs — Ads Served, Average CPM, and Revenue, matching the Calypso WordAds page's tabs — over a line chart. Ads Served is a count; CPM and revenue are currency (WordAds pays USD). The widget hosts its own date range and bucket-size controls in its header, saved onto the widget instance; which metric is plotted is the chart's own tab selection. WordAds stats are computed nightly, so the last bucket of a range ending today stays empty until that run lands; only a range ending in the future is clamped back to today. Data comes from the `useStatsWordAdsStats` hook (the `wordads` proxy prefix); in Storybook it is served by `registerReportMocks`. Requires WordAds to be active on the site for live data."}}}},J={render:W(`last-30-days`,`day`),decorators:[b]},Y={render:W(`last-90-days`,`week`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(_(`wordads/stats`,`loading`),()=>_(`wordads/stats`,null))},X={render:W(`last-7-days`,`day`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(_(`wordads/stats`,`error`),()=>_(`wordads/stats`,null))},Z={render:W(`last-365-days`,`month`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(_(`wordads/stats`,`empty`),()=>_(`wordads/stats`,null))},Q={render:e=>(0,G.jsx)(Ee,{...e}),args:{...ve},argTypes:{...pe}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderOnPreset('last-30-days', 'day'),
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:`The widget on its own, on the range its header control defaults to.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderOnPreset('last-90-days', 'week'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('wordads/stats', 'loading');
    return () => setReportMockState('wordads/stats', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderOnPreset('last-7-days', 'day'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('wordads/stats', 'error');
    return () => setReportMockState('wordads/stats', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderOnPreset('last-365-days', 'month'),
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
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...Q.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness,
including the date control the widget declares in its own header.`,...Q.parameters?.docs?.description}}},$=[`Default`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,q as default};