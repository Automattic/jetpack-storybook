import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{ll as o,n as s}from"./build-module-CDRs4YxF.js";import{b as c,g as l}from"./hooks-CmscThhc.js";import{b as ee,t as te}from"./src-tFLTgNYy.js";import{Jt as ne,_ as re,ln as ie,qt as u,t as d}from"./src-B_6QRTjb.js";import{E as f,_ as p,f as ae,x as oe}from"./chart-tooltip-je4M97gv.js";import{r as se,t as ce}from"./metric-tabs-chart-skeleton-y9kHCvDw.js";import{G as le,K as ue,Y as m}from"./report-metric-BRA0n6TO.js";import{t as de}from"./widget-state-Dc6dhX99.js";import{C as fe,D as h,E as g,S as _,T as v,b as y,t as b,w as pe,x}from"./src-CGXIFwHy.js";var S,C=e((()=>{d(),S=ne()})),w,T,me=e((()=>{w=`_root_sp1nf_1`,T={root:w}})),E,D,he=e((()=>{n(),E={type:`currency`,options:{decimals:2}},D=[{id:`impressions`,label:t(`Ads Served`,`jetpack-premium-analytics-pkg`)},{id:`cpm`,label:t(`Average CPM`,`jetpack-premium-analytics-pkg`),dataFormat:E},{id:`revenue`,label:t(`Revenue`,`jetpack-premium-analytics-pkg`),dataFormat:E}]}));function ge(e,t){let{primary:n,isLoading:r,isFetching:a,isError:o,refetch:s}=re((0,i.useMemo)(()=>({...e,period:t}),[e,t])),c=n.data;return{metrics:(0,i.useMemo)(()=>D.map(e=>oe({primary:c,comparison:void 0,hasComparison:!1,field:e.id,label:e.label,dataFormat:e.dataFormat})),[c]),isLoading:r,isFetching:a,isError:o&&!c?.data?.length,isEmpty:c!==void 0&&!c.data?.length,refetch:s}}var O=e((()=>{d(),a(),he(),b()}));function k(){let{reportParams:e}=c(),{metrics:n,isLoading:r,isFetching:i,isError:a,isEmpty:o,refetch:s}=ge(e,f(e.interval,N));return(0,j.jsx)(`div`,{className:T.root,children:(0,j.jsx)(de,{isLoading:r,isFetching:i,isError:a,isEmpty:o,error:{description:t(`We couldn't load WordAds data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:s}]},empty:{icon:ee,description:t(`No WordAds data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,j.jsx)(ce,{}),children:(0,j.jsx)(se,{metrics:n,dataFormat:M,groupLabel:t(`WordAds metric`,`jetpack-premium-analytics-pkg`),pointsAreWallClocks:!0})})})}function A({attributes:e={}}){let t=e.reportParams??S;return(0,j.jsx)(ie,{offersComparison:!1,children:(0,j.jsx)(l,{attributes:{...e,reportParams:t},children:(0,j.jsx)(k,{})})})}var j,M,N,P=e((()=>{d(),te(),b(),n(),C(),me(),O(),j=r(),M={type:`number`,options:{useMultipliers:!0,decimals:0}},N=[`day`,`week`,`month`,`year`]})),F,I,_e=e((()=>{ae(),n(),s(),C(),F=p({withIntervalControl:!0}),I={icon:o,attributes:[{id:`reportParams`,label:t(`Date range`,`jetpack-premium-analytics-pkg`),relevance:`high`,Edit:F}],example:{attributes:{reportParams:S}}}})),L,R,z,B,V,H,U,ve=e((()=>{L=`jpa/wordads-chart-tabs`,R=`WordAds`,z=`Track ads served, average CPM, and revenue over the selected period.`,B={content:`Track ads served, average CPM, and revenue over the selected period.`},V=`stats`,H=`framed`,U={name:L,title:R,description:z,help:B,category:V,presentation:H}}));function W(e,t){return()=>(0,G.jsx)(A,{attributes:{reportParams:{...u(!1,e),interval:t}}})}function ye(e){return(0,G.jsx)(v,{...e,widgetType:_(U,I),renderModule:K,renderComponent:A,attributes:{reportParams:u(!1)}})}var G,K,q,J,Y,X,Z,Q,$;e((()=>{g(),d(),le(),fe(),y(),P(),_e(),ve(),G=r(),ue(),K=`storybook/wordads-chart-tabs`,q={title:`Packages/Premium Analytics/Widgets/WordAdsChartTabs`,component:A,tags:[`autodocs`],parameters:{docs:{description:{component:"WordAds performance over the selected period as selectable metric tabs — Ads Served, Average CPM, and Revenue, matching the Calypso WordAds page's tabs — over a line chart. Ads Served is a count; CPM and revenue are currency (WordAds pays USD). The widget hosts its own date range and bucket-size controls in its header, saved onto the widget instance; which metric is plotted is the chart's own tab selection. WordAds stats are computed nightly, so a range ending today is clamped to end at yesterday. Data comes from the `useStatsWordAdsStats` hook (the `wordads` proxy prefix); in Storybook it is served by `registerReportMocks`. Requires WordAds to be active on the site for live data."}}}},J={render:W(`last-30-days`,`day`),decorators:[x]},Y={render:W(`last-90-days`,`week`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(m(`wordads/stats`,`loading`),()=>m(`wordads/stats`,null))},X={render:W(`last-7-days`,`day`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(m(`wordads/stats`,`error`),()=>m(`wordads/stats`,null))},Z={render:W(`last-365-days`,`month`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(m(`wordads/stats`,`empty`),()=>m(`wordads/stats`,null))},Q={render:e=>(0,G.jsx)(ye,{...e}),args:{...pe},argTypes:{...h}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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