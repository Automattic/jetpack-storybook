import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{h as i,t as a}from"./build-module-DuNGIx6S.js";import{cl as o,t as s}from"./build-module-CR6EsQjA.js";import{b as c,g as ee}from"./hooks-qXrN0vkI.js";import{b as te,t as ne}from"./src-CldFJNXL.js";import{d as re,h as ie,p as l,t as u}from"./src-DvRpjVz4.js";import{Qt as d,Zt as f,n as ae,pn as oe,t as p,x as se}from"./src-BdYBuA8Y.js";import{f as ce,v as le,x as ue}from"./chart-tooltip-uPnCq2Uz.js";import{r as m,t as de}from"./metric-tabs-chart-skeleton-C3Jsp7IH.js";import{G as fe,K as pe,Y as h}from"./report-metric-B00BlpGu.js";import{t as me}from"./widget-state-Copnv-ns.js";import{C as g,D as _,E as he,S as ge,T as _e,b as ve,t as v,w as ye,x as y}from"./src-nchLbzmm.js";var b,x=e((()=>{p(),b=d()})),S,C=e((()=>{u(),S={presetIds:[ie,l,re],periods:[`day`,`week`,`month`,`year`]}})),w,T,E=e((()=>{w=`_root_sp1nf_1`,T={root:w}})),D,O,k=e((()=>{n(),D={type:`currency`,options:{decimals:2}},O=[{id:`impressions`,label:t(`Ads Served`,`jetpack-premium-analytics-pkg`)},{id:`cpm`,label:t(`Average CPM`,`jetpack-premium-analytics-pkg`),dataFormat:D},{id:`revenue`,label:t(`Revenue`,`jetpack-premium-analytics-pkg`),dataFormat:D}]}));function A(e,t){let{primary:n,isLoading:r,isFetching:a,isError:o,refetch:s}=se((0,i.useMemo)(()=>({...e,period:t}),[e,t])),c=n.data;return{metrics:(0,i.useMemo)(()=>O.map(e=>ue({primary:c,comparison:void 0,hasComparison:!1,field:e.id,label:e.label,dataFormat:e.dataFormat})),[c]),isLoading:r,isFetching:a,isError:o&&!c?.data?.length,isEmpty:c!==void 0&&!c.data?.length,refetch:s}}var j=e((()=>{p(),a(),k(),v()}));function M(){let{reportParams:e}=c(),{metrics:n,isLoading:r,isFetching:i,isError:a,isEmpty:o,refetch:s}=A(e,ae(e,S.periods));return(0,P.jsx)(`div`,{className:T.root,children:(0,P.jsx)(me,{isLoading:r,isFetching:i,isError:a,isEmpty:o,error:{description:t(`We couldn't load WordAds data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:s}]},empty:{icon:te,description:t(`No WordAds data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,P.jsx)(de,{}),children:(0,P.jsx)(m,{metrics:n,dataFormat:F,groupLabel:t(`WordAds metric`,`jetpack-premium-analytics-pkg`),pointsAreWallClocks:!0})})})}function N({attributes:e={}}){let t=e.reportParams??b;return(0,P.jsx)(oe,{offersComparison:!1,children:(0,P.jsx)(ee,{attributes:{...e,reportParams:t},children:(0,P.jsx)(M,{})})})}var P,F,be=e((()=>{p(),ne(),v(),n(),x(),C(),E(),j(),P=r(),F={type:`number`,options:{useMultipliers:!0,decimals:0}}})),I,xe=e((()=>{ce(),s(),x(),C(),I={icon:o,attributes:[le({withIntervalControl:!0,grain:S})],example:{attributes:{reportParams:b}}}})),L,R,z,B,V,H,U,Se=e((()=>{L=`jpa/wordads-chart-tabs`,R=`WordAds`,z=`Track ads served, average CPM, and revenue over the selected period.`,B={content:`Track ads served, average CPM, and revenue over the selected period.`},V=`stats`,H=`framed`,U={name:L,title:R,description:z,help:B,category:V,presentation:H}}));function W(e,t){return()=>(0,G.jsx)(N,{attributes:{reportParams:{...f(!1,e),interval:t}}})}function Ce(e){return(0,G.jsx)(_e,{...e,widgetType:ge(U,I),renderModule:K,renderComponent:N,attributes:{reportParams:f(!1)}})}var G,K,q,J,Y,X,Z,Q,$;e((()=>{he(),p(),fe(),g(),ve(),be(),xe(),Se(),G=r(),pe(),K=`storybook/wordads-chart-tabs`,q={title:`Packages/Premium Analytics/Widgets/WordAdsChartTabs`,component:N,tags:[`autodocs`],parameters:{docs:{description:{component:"WordAds performance over the selected period as selectable metric tabs — Ads Served, Average CPM, and Revenue, matching the Calypso WordAds page's tabs — over a line chart. Ads Served is a count; CPM and revenue are currency (WordAds pays USD). The widget hosts its own date range and bucket-size controls in its header, saved onto the widget instance; which metric is plotted is the chart's own tab selection. WordAds stats are computed nightly, so the last bucket of a range ending today stays empty until that run lands; only a range ending in the future is clamped back to today. Data comes from the `useStatsWordAdsStats` hook (the `wordads` proxy prefix); in Storybook it is served by `registerReportMocks`. Requires WordAds to be active on the site for live data."}}}},J={render:W(`last-30-days`,`day`),decorators:[y]},Y={render:W(`last-90-days`,`week`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(h(`wordads/stats`,`loading`),()=>h(`wordads/stats`,null))},X={render:W(`last-7-days`,`day`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(h(`wordads/stats`,`error`),()=>h(`wordads/stats`,null))},Z={render:W(`last-365-days`,`month`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(h(`wordads/stats`,`empty`),()=>h(`wordads/stats`,null))},Q={render:e=>(0,G.jsx)(Ce,{...e}),args:{...ye},argTypes:{..._}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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