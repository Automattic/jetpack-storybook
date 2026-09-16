import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-yGZutq_9.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Gu as i,Nu as a,fl as o,t as s}from"./build-module-zwSmKorH.js";import{J as c,b as l,ct as ee,et as te,g as ne}from"./hooks-tH3pCjPa.js";import{b as re,t as ie}from"./src-DFNM1k7F.js";import{J as ae,K as oe,X as u,t as se}from"./src-B477hvom.js";import{a as d,en as f,gn as p,i as m,tn as ce,w as le}from"./date-filters-panel-CK2D9yIi.js";import{r as ue,t as de}from"./metric-tabs-chart-skeleton-CzMA1tE8.js";import{i as h,r as g,s as _}from"./register-report-mocks-yycxlQwG.js";import{t as v}from"./widget-state-DrTEtYvq.js";import{t as y}from"./src-Dslj4W-S.js";import{a as fe,c as pe,i as me,l as he,n as ge,o as _e,r as b,s as ve}from"./with-widget-canvas-hIij5fvl.js";import{n as ye,r as be,t as xe}from"./with-site-time-zone-Df8vUI9L.js";var x,S=e((()=>{m(),x=ce()})),C,w=e((()=>{se(),C={presetIds:[u,ae,oe],periods:[`day`,`week`,`month`,`year`]}})),T,E,D=e((()=>{T=`_root_sp1nf_1`,E={root:T}})),O,k,A=e((()=>{n(),O={type:`currency`},k=[{id:`impressions`,label:t(`Ads Served`,`jetpack-premium-analytics-pkg`)},{id:`cpm`,label:t(`Average CPM`,`jetpack-premium-analytics-pkg`),dataFormat:O},{id:`revenue`,label:t(`Revenue`,`jetpack-premium-analytics-pkg`),dataFormat:O}]}));function j(e,t){let{primary:n,timezone:r,isLoading:a,isFetching:o,isError:s,refetch:c}=le((0,i.useMemo)(()=>({...e,period:t}),[e,t])),l=n.data;return{metrics:(0,i.useMemo)(()=>k.map(e=>ee({primary:l,comparison:void 0,hasComparison:!1,field:e.id,label:e.label,dataFormat:e.dataFormat,zone:r})),[l,r]),isLoading:a,isFetching:o,isError:s&&!l?.data?.length,isEmpty:l!==void 0&&!l.data?.length,refetch:c}}var M=e((()=>{m(),a(),A(),y()}));function Se(){let{reportParams:e}=l(),{metrics:n,isLoading:r,isFetching:i,isError:a,isEmpty:o,refetch:s}=j(e,d(e,C.periods));return(0,P.jsx)(`div`,{className:E.root,children:(0,P.jsx)(v,{isLoading:r,isFetching:i,isError:a,isEmpty:o,error:{description:t(`We couldn't load WordAds data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:s}]},empty:{icon:re,description:t(`No WordAds data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,P.jsx)(de,{}),children:(0,P.jsx)(ue,{metrics:n,dataFormat:F,groupLabel:t(`WordAds metric`,`jetpack-premium-analytics-pkg`),tooltipMetrics:`all`})})})}function N({attributes:e={}}){let t=e.reportParams??x;return(0,P.jsx)(p,{offersComparison:!1,children:(0,P.jsx)(ne,{attributes:{...e,reportParams:t},children:(0,P.jsx)(Se,{})})})}var P,F,Ce=e((()=>{m(),ie(),y(),n(),S(),w(),D(),M(),P=r(),F={type:`number`,options:{useMultipliers:!0,decimals:0}}})),I,we=e((()=>{c(),s(),S(),w(),I={icon:o,attributes:[te({withIntervalControl:!0,grain:C})],example:{attributes:{reportParams:x}}}})),L,R,z,B,V,H,U,Te=e((()=>{L=`jpa/wordads-chart-tabs`,R=`WordAds`,z=`Track ads served, average CPM, and revenue over the selected period.`,B={content:`Track ads served, average CPM, and revenue over the selected period.`},V=`stats`,H=`framed`,U={name:L,title:R,description:z,help:B,category:V,presentation:H}}));function W(e,t){return()=>(0,G.jsx)(N,{attributes:{reportParams:{...f(!1,e),interval:t}}})}function Ee({...e}){return(0,G.jsx)(ve,{...e,widgetType:me(U,I),renderModule:K,renderComponent:N,attributes:{reportParams:f(!1)}})}var G,K,q,J,Y,X,Z,Q,$;e((()=>{pe(),m(),g(),fe(),ge(),xe(),Ce(),we(),Te(),G=r(),h(),K=`storybook/wordads-chart-tabs`,q={title:`Packages/Premium Analytics/Widgets/WordAdsChartTabs`,component:N,tags:[`autodocs`],decorators:[be],argTypes:{...ye},parameters:{docs:{description:{component:"WordAds performance over the selected period as selectable metric tabs — Ads Served, Average CPM, and Revenue, matching the Calypso WordAds page's tabs — over a line chart. Ads Served is a count; CPM and revenue are currency (WordAds pays USD). The widget hosts its own date range and bucket-size controls in its header, saved onto the widget instance; which metric is plotted is the chart's own tab selection. WordAds stats are computed nightly, so the last bucket of a range ending today stays empty until that run lands; only a range ending in the future is clamped back to today. Data comes from the `useStatsWordAdsStats` hook (the `wordads` proxy prefix); in Storybook it is served by `registerReportMocks`. Requires WordAds to be active on the site for live data."}}}},J={render:W(`last-30-days`,`day`),decorators:[b]},Y={render:W(`last-90-days`,`week`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(_(`wordads/stats`,`loading`),()=>_(`wordads/stats`,null))},X={render:W(`last-7-days`,`day`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(_(`wordads/stats`,`error`),()=>_(`wordads/stats`,null))},Z={render:W(`last-365-days`,`month`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(_(`wordads/stats`,`empty`),()=>_(`wordads/stats`,null))},Q={render:e=>(0,G.jsx)(Ee,{...e}),args:{..._e},argTypes:{...he}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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