import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,r as n,t as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Ui as a,Uu as o,ju as s,t as c}from"./build-module-2iv4IIRq.js";import{m as l,v as ee}from"./hooks-Dkf4iE2p.js";import{b as te,t as u}from"./src-C-E2d-Lb.js";import{J as ne,K as re,X as ie,t as ae}from"./src-CJGEmgc4.js";import{$t as d,S as oe,n as se,t as f,yn as ce}from"./src-CDJzEn1j.js";import{A as le,P as ue}from"./helpers-zOccSgvU.js";import{r as de,t as fe}from"./metric-tabs-chart-skeleton-aedUXhAc.js";import{c as p,i as pe,r as me}from"./register-report-mocks-DKEqzg2W.js";import{t as he}from"./widget-state-TvVHDKVa.js";import{t as m}from"./src-MY3Aa1YJ.js";import{a as ge,d as h,f as _e,i as g,l as _,n as v,o as y,p as ve,r as b,s as ye,u as be}from"./with-widget-canvas-DSgCDstf.js";import{n as xe,r as Se,t as Ce}from"./with-site-time-zone-ngtW_VDw.js";var x,S=e((()=>{ae(),x={presetIds:[ie,ne,re],periods:[`day`,`week`,`month`]}})),C,w=e((()=>{y(),S(),C=ye(x)})),T,E,D=e((()=>{T=`_root_sp1nf_1`,E={root:T}})),O,k,A=e((()=>{r(),O={type:`currency`},k=[{id:`impressions`,label:t(`Ads Served`,`jetpack-premium-analytics-pkg`),countLabel:e=>n(`%s Ad Served`,`%s Ads Served`,e,`jetpack-premium-analytics-pkg`)},{id:`cpm`,label:t(`Average CPM`,`jetpack-premium-analytics-pkg`),dataFormat:O},{id:`revenue`,label:t(`Revenue`,`jetpack-premium-analytics-pkg`),dataFormat:O}]}));function we(e,t){let{primary:n,timezone:r,isLoading:i,isFetching:a,isError:s,refetch:c}=oe((0,o.useMemo)(()=>({...e,period:t}),[e,t])),l=n.data;return{metrics:(0,o.useMemo)(()=>k.map(e=>ue({primary:l,comparison:void 0,hasComparison:!1,field:e.id,label:e.label,dataFormat:e.dataFormat,countLabel:e.countLabel,zone:r})),[l,r]),isLoading:i,isFetching:a,isError:s&&!l?.data?.length,isEmpty:l!==void 0&&!l.data?.length,refetch:c}}var Te=e((()=>{f(),s(),A(),m()}));function Ee({chartType:e}){let{reportParams:n}=ee(),{metrics:r,isLoading:i,isFetching:a,isError:o,isEmpty:s,refetch:c}=we(n,se({...n,interval:void 0},x.periods));return(0,M.jsx)(`div`,{className:E.root,children:(0,M.jsx)(he,{isLoading:i,isFetching:a,isError:o,isEmpty:s,error:{description:t(`We couldn't load WordAds data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:c}]},empty:{icon:te,description:t(`No WordAds data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,M.jsx)(fe,{}),children:(0,M.jsx)(de,{metrics:r,dataFormat:N,chartType:e,groupLabel:t(`WordAds metric`,`jetpack-premium-analytics-pkg`),tooltipMetrics:`all`})})})}function j({attributes:e={}}){let t=e.reportParams??C;return(0,M.jsx)(ce,{offersComparison:!1,children:(0,M.jsx)(l,{attributes:{...e,reportParams:t},children:(0,M.jsx)(Ee,{chartType:e.chartType})})})}var M,N,De=e((()=>{f(),u(),m(),r(),w(),S(),D(),Te(),M=i(),N={type:`number`,options:{useMultipliers:!0,decimals:0}}})),P,Oe=e((()=>{y(),m(),c(),w(),S(),P={icon:a,attributes:[_({grain:x,offersComparison:!1}),le()],example:{attributes:{reportParams:C,chartType:`line`}}}})),F,I,L,R,z,B,V,ke=e((()=>{F=`jpa/wordads-chart-tabs`,I=`Ads summary`,L=`Track ads served, average CPM, and revenue over the selected period.`,R={content:`Track ads served, average CPM, and revenue over the selected period.`},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H(e){return({chartType:t})=>(0,U.jsx)(j,{attributes:{reportParams:d(!1,e),chartType:t}})}function Ae({chartType:e,...t}){return(0,U.jsx)(h,{...t,widgetType:g(V,P),renderModule:W,renderComponent:j,attributes:{reportParams:d(!1),chartType:e}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{_e(),f(),me(),ge(),v(),Ce(),De(),Oe(),ke(),U=i(),pe(),W=`storybook/wordads-chart-tabs`,G={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},K={title:`Packages/Premium Analytics/Widgets/WordAdsChartTabs`,component:j,tags:[`autodocs`],decorators:[Se],argTypes:{...xe,...G},args:{chartType:`line`},parameters:{docs:{description:{component:"WordAds performance over the selected period as selectable metric tabs (Ads Served, Average CPM, and Revenue, matching the Calypso WordAds page's tabs) over a line or bar chart. Ads Served is a count; CPM and revenue are currency (WordAds pays USD). The widget hosts its own date range control in its header, saved onto the widget instance; the bucket size follows the selected window. The \"Chart type\" control is the `chartType` attribute (`relevance: 'high'`), exposed by the widget host; which metric is plotted is the chart's own tab selection. WordAds stats are computed nightly, so the last bucket of a range ending today stays empty until that run lands; only a range ending in the future is clamped back to today. Data comes from the `useStatsWordAdsStats` hook (the `wordads` proxy prefix); in Storybook it is served by `registerReportMocks`. Requires WordAds to be active on the site for live data."}}}},q={render:H(`last-30-days`),decorators:[b]},J={render:H(`last-30-days`),args:{chartType:`bar`},decorators:[b]},Y={render:H(`last-90-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(p(`wordads/stats`,`loading`),()=>p(`wordads/stats`,null))},X={render:H(`last-7-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(p(`wordads/stats`,`error`),()=>p(`wordads/stats`,null))},Z={render:H(`last-365-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(p(`wordads/stats`,`empty`),()=>p(`wordads/stats`,null))},Q={render:e=>(0,U.jsx)(Ae,{...e}),args:{...be,chartType:`line`},argTypes:{...ve,...G}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderOnPreset('last-30-days'),
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`The widget on its own, on the range its header control defaults to.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderOnPreset('last-30-days'),
  args: {
    chartType: 'bar'
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:`The same window drawn as bars, as the header's Chart type control saves it.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('wordads/stats', 'loading');
    return () => setReportMockState('wordads/stats', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('wordads/stats', 'error');
    return () => setReportMockState('wordads/stats', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderOnPreset('last-365-days'),
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
    chartType: 'line'
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    ...CHART_TYPE_ARG_TYPES
  }
}`,...Q.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness,
including the date range and chart type controls the widget declares in its
own header.`,...Q.parameters?.docs?.description}}},$=[`Default`,`BarChart`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as BarChart,q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,K as default};