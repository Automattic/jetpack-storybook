import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{h as i,t as a}from"./build-module-DuNGIx6S.js";import{cl as o,t as s}from"./build-module-CR6EsQjA.js";import{b as c,g as ee}from"./hooks-v7a5_WiS.js";import{b as te,t as ne}from"./src-CldFJNXL.js";import{f as re,g as l,m as u,t as d}from"./src-BZhZVDhX.js";import{Jt as ie,_ as ae,dn as oe,qt as f,t as p}from"./src-CA_rTku8.js";import{E as se,_ as ce,f as le,x as m}from"./chart-tooltip-Cxn7W4pL.js";import{r as ue,t as de}from"./metric-tabs-chart-skeleton-CCW8mp3H.js";import{G as fe,K as pe,Y as h}from"./report-metric-CP3g_908.js";import{t as g}from"./widget-state-DjqzuiHQ.js";import{C as _,D as v,E as me,S as he,T as ge,b as _e,t as y,w as ve,x as b}from"./src-Bwq_xgOE.js";var x,S=e((()=>{p(),x=ie()})),C,w,ye=e((()=>{C=`_root_sp1nf_1`,w={root:C}})),T,E,D=e((()=>{n(),T={type:`currency`,options:{decimals:2}},E=[{id:`impressions`,label:t(`Ads Served`,`jetpack-premium-analytics-pkg`)},{id:`cpm`,label:t(`Average CPM`,`jetpack-premium-analytics-pkg`),dataFormat:T},{id:`revenue`,label:t(`Revenue`,`jetpack-premium-analytics-pkg`),dataFormat:T}]}));function O(e,t){let{primary:n,isLoading:r,isFetching:a,isError:o,refetch:s}=ae((0,i.useMemo)(()=>({...e,period:t}),[e,t])),c=n.data;return{metrics:(0,i.useMemo)(()=>E.map(e=>m({primary:c,comparison:void 0,hasComparison:!1,field:e.id,label:e.label,dataFormat:e.dataFormat})),[c]),isLoading:r,isFetching:a,isError:o&&!c?.data?.length,isEmpty:c!==void 0&&!c.data?.length,refetch:s}}var k=e((()=>{p(),a(),D(),y()}));function A(){let{reportParams:e}=c(),{metrics:n,isLoading:r,isFetching:i,isError:a,isEmpty:o,refetch:s}=O(e,se(e.interval,P));return(0,M.jsx)(`div`,{className:w.root,children:(0,M.jsx)(g,{isLoading:r,isFetching:i,isError:a,isEmpty:o,error:{description:t(`We couldn't load WordAds data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:s}]},empty:{icon:te,description:t(`No WordAds data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,M.jsx)(de,{}),children:(0,M.jsx)(ue,{metrics:n,dataFormat:N,groupLabel:t(`WordAds metric`,`jetpack-premium-analytics-pkg`),pointsAreWallClocks:!0})})})}function j({attributes:e={}}){let t=e.reportParams??x;return(0,M.jsx)(oe,{offersComparison:!1,children:(0,M.jsx)(ee,{attributes:{...e,reportParams:t},children:(0,M.jsx)(A,{})})})}var M,N,P,be=e((()=>{p(),ne(),y(),n(),S(),ye(),k(),M=r(),N={type:`number`,options:{useMultipliers:!0,decimals:0}},P=[`day`,`week`,`month`,`year`]})),F,I,xe=e((()=>{d(),le(),n(),s(),S(),F=ce({withIntervalControl:!0,presetIds:[l,u,re]}),I={icon:o,attributes:[{id:`reportParams`,label:t(`Date range`,`jetpack-premium-analytics-pkg`),relevance:`high`,Edit:F}],example:{attributes:{reportParams:x}}}})),L,R,z,B,V,H,U,Se=e((()=>{L=`jpa/wordads-chart-tabs`,R=`WordAds`,z=`Track ads served, average CPM, and revenue over the selected period.`,B={content:`Track ads served, average CPM, and revenue over the selected period.`},V=`stats`,H=`framed`,U={name:L,title:R,description:z,help:B,category:V,presentation:H}}));function W(e,t){return()=>(0,G.jsx)(j,{attributes:{reportParams:{...f(!1,e),interval:t}}})}function Ce(e){return(0,G.jsx)(ge,{...e,widgetType:he(U,I),renderModule:K,renderComponent:j,attributes:{reportParams:f(!1)}})}var G,K,q,J,Y,X,Z,Q,$;e((()=>{me(),p(),fe(),_(),_e(),be(),xe(),Se(),G=r(),pe(),K=`storybook/wordads-chart-tabs`,q={title:`Packages/Premium Analytics/Widgets/WordAdsChartTabs`,component:j,tags:[`autodocs`],parameters:{docs:{description:{component:"WordAds performance over the selected period as selectable metric tabs — Ads Served, Average CPM, and Revenue, matching the Calypso WordAds page's tabs — over a line chart. Ads Served is a count; CPM and revenue are currency (WordAds pays USD). The widget hosts its own date range and bucket-size controls in its header, saved onto the widget instance; which metric is plotted is the chart's own tab selection. WordAds stats are computed nightly, so a range ending today is clamped to end at yesterday. Data comes from the `useStatsWordAdsStats` hook (the `wordads` proxy prefix); in Storybook it is served by `registerReportMocks`. Requires WordAds to be active on the site for live data."}}}},J={render:W(`last-30-days`,`day`),decorators:[b]},Y={render:W(`last-90-days`,`week`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(h(`wordads/stats`,`loading`),()=>h(`wordads/stats`,null))},X={render:W(`last-7-days`,`day`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(h(`wordads/stats`,`error`),()=>h(`wordads/stats`,null))},Z={render:W(`last-365-days`,`month`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(h(`wordads/stats`,`empty`),()=>h(`wordads/stats`,null))},Q={render:e=>(0,G.jsx)(Ce,{...e}),args:{...ve},argTypes:{...v}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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