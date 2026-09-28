import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,r as n,t as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Ui as a,Uu as o,ju as s,t as c}from"./build-module-2iv4IIRq.js";import{m as l,v as u}from"./hooks-C6uC8D6p.js";import{J as ee,K as d,X as f,t as te}from"./src-BNPYbbO9.js";import{S as ne,Sn as re,n as ie,nn as p,t as m}from"./src-C9rlvqIx.js";import{A as ae,P as h}from"./helpers-C3PYD0ul.js";import{r as oe,t as se}from"./metric-tabs-chart-skeleton-d2ndu2cK.js";import{c as g,i as ce,r as le}from"./register-report-mocks-jOVWgqW2.js";import{t as ue}from"./widget-state-DFM0RGEq.js";import{t as _}from"./src-BYRMloPq.js";import{a as de,d as fe,f as pe,i as me,l as he,n as ge,o as v,p as _e,r as y,s as ve,u as ye}from"./with-widget-canvas-Co9pnelY.js";import{n as be,r as xe,t as Se}from"./with-site-time-zone-ngtW_VDw.js";var b,x=e((()=>{te(),b={presetIds:[f,ee,d],periods:[`day`,`week`,`month`]}})),S,C=e((()=>{v(),x(),S=ve(b)})),w,T,Ce=e((()=>{w=`_root_sp1nf_1`,T={root:w}})),E,D,O=e((()=>{r(),E={type:`currency`},D=[{id:`impressions`,label:t(`Ads Served`,`jetpack-premium-analytics-pkg`),countLabel:e=>n(`%s Ad Served`,`%s Ads Served`,e,`jetpack-premium-analytics-pkg`)},{id:`cpm`,label:t(`Average CPM`,`jetpack-premium-analytics-pkg`),dataFormat:E},{id:`revenue`,label:t(`Revenue`,`jetpack-premium-analytics-pkg`),dataFormat:E}]}));function k(e,n){let{primary:r,timezone:i,isLoading:a,isFetching:s,isError:c,refetch:l}=ne((0,o.useMemo)(()=>({...e,period:n}),[e,n])),u=r.data;return{metrics:(0,o.useMemo)(()=>D.map(e=>({...h({primary:u,comparison:void 0,hasComparison:!1,field:e.id,label:e.label,dataFormat:e.dataFormat,countLabel:e.countLabel,zone:i}),...u?.summary[e.id]===null?{unavailable:t(`No ads were served in this period.`,`jetpack-premium-analytics-pkg`)}:{}})),[u,i]),isLoading:a,isFetching:s,isError:c&&!u?.data?.length,isEmpty:u!==void 0&&!u.data?.length,refetch:l}}var A=e((()=>{m(),s(),r(),O(),_()}));function we({chartType:e}){let{reportParams:n}=u(),{metrics:r,isLoading:i,isFetching:a,isError:o,isEmpty:s,refetch:c}=k(n,ie({...n,interval:void 0},b.periods));return(0,M.jsx)(`div`,{className:T.root,children:(0,M.jsx)(ue,{isLoading:i,isFetching:a,isError:o,isEmpty:s,error:{description:t(`We couldn't load WordAds data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:c}]},renderLoading:(0,M.jsx)(se,{}),children:(0,M.jsx)(oe,{metrics:r,dataFormat:N,chartType:e,groupLabel:t(`WordAds metric`,`jetpack-premium-analytics-pkg`),tooltipMetrics:`all`})})})}function j({attributes:e={}}){let t=e.reportParams??S;return(0,M.jsx)(re,{offersComparison:!1,children:(0,M.jsx)(l,{attributes:{...e,reportParams:t},children:(0,M.jsx)(we,{chartType:e.chartType})})})}var M,N,Te=e((()=>{m(),_(),r(),C(),x(),Ce(),A(),M=i(),N={type:`number`,options:{useMultipliers:!0,decimals:0}}})),P,Ee=e((()=>{v(),_(),c(),C(),x(),P={icon:a,attributes:[he({grain:b,offersComparison:!1}),ae()],example:{attributes:{reportParams:S,chartType:`line`}}}})),F,I,L,R,z,B,V,De=e((()=>{F=`jpa/wordads-chart-tabs`,I=`Ads summary`,L=`Track ads served, average CPM, and revenue over the selected period.`,R={content:`Impressions, average CPM, and the revenue they earned over the selected period.`,links:[{label:`Learn more`,href:`https://wordpress.com/support/wordads-and-earn/`}]},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H(e){return({chartType:t})=>(0,U.jsx)(j,{attributes:{reportParams:p(!1,e),chartType:t}})}function Oe({chartType:e,...t}){return(0,U.jsx)(fe,{...t,widgetType:me(V,P),renderModule:W,renderComponent:j,attributes:{reportParams:p(!1),chartType:e}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{pe(),m(),le(),de(),ge(),Se(),Te(),Ee(),De(),U=i(),ce(),W=`storybook/wordads-chart-tabs`,G={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},K={title:`Packages/Premium Analytics/Widgets/WordAdsChartTabs`,component:j,tags:[`autodocs`],decorators:[xe],argTypes:{...be,...G},args:{chartType:`line`},parameters:{docs:{description:{component:"WordAds performance over the selected period as selectable metric tabs (Ads Served, Average CPM, and Revenue, matching the Calypso WordAds page's tabs) over a line or bar chart. Ads Served is a count; CPM and revenue are currency (WordAds pays USD). The widget hosts its own date range control in its header, saved onto the widget instance; the bucket size follows the selected window. The \"Chart type\" control is the `chartType` attribute (`relevance: 'high'`), exposed by the widget host; which metric is plotted is the chart's own tab selection. WordAds stats are computed nightly, so the last bucket of a range ending today stays empty until that run lands; only a range ending in the future is clamped back to today. Data comes from the `useStatsWordAdsStats` hook (the `wordads` proxy prefix); in Storybook it is served by `registerReportMocks`. Requires WordAds to be active on the site for live data."}}}},q={render:H(`last-30-days`),decorators:[y]},J={render:H(`last-30-days`),args:{chartType:`bar`},decorators:[y]},Y={render:H(`last-90-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(g(`wordads/stats`,`loading`),()=>g(`wordads/stats`,null))},X={render:H(`last-7-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(g(`wordads/stats`,`error`),()=>g(`wordads/stats`,null))},Z={render:H(`last-365-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(g(`wordads/stats`,`empty`),()=>g(`wordads/stats`,null))},Q={render:e=>(0,U.jsx)(Oe,{...e}),args:{...ye,chartType:`line`},argTypes:{..._e,...G}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows the generic empty state.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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