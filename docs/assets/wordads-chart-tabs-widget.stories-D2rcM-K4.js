import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{ll as o,n as s}from"./build-module-CDRs4YxF.js";import{b as c,g as l}from"./hooks-bGjBylh5.js";import{b as u,t as d}from"./src-B64ifip5.js";import{Qt as ee,m as te,qt as f,t as p}from"./src-BUErcGZC.js";import{_ as ne,w as re}from"./chart-tooltip-IZsHvoJq.js";import{r as ie,t as ae}from"./metric-tabs-chart-skeleton-BQ5ImBUb.js";import{K as oe,X as m,q as se}from"./report-metric-DNr6g0yB.js";import{t as ce}from"./widget-state-CoN9fL6J.js";import{C as h,D as le,E as g,S as _,T as v,b as y,t as b,w as ue,x}from"./src-Dkc3sZEV.js";var S,C,w=e((()=>{S=`_root_sp1nf_1`,C={root:S}})),T,E,de=e((()=>{n(),T={type:`currency`,options:{decimals:2}},E=[{id:`impressions`,label:t(`Ads Served`,`jetpack-premium-analytics-pkg`)},{id:`cpm`,label:t(`Average CPM`,`jetpack-premium-analytics-pkg`),dataFormat:T},{id:`revenue`,label:t(`Revenue`,`jetpack-premium-analytics-pkg`),dataFormat:T}]}));function fe(e,t){return{...e,period:t}}function pe(e,t){let{primary:n,comparison:r,hasComparison:a,isLoading:o,isFetching:s,isError:c,refetch:l}=te((0,i.useMemo)(()=>fe(e,t),[e,t])),u=n.data,d=r.data,f=(0,i.useMemo)(()=>u&&d?ee(d,u.data.length):d,[u,d]);return{metrics:(0,i.useMemo)(()=>E.map(e=>ne({primary:u,comparison:f,hasComparison:a,field:e.id,label:e.label,dataFormat:e.dataFormat})),[u,f,a]),isLoading:o,isFetching:s,isError:c&&!u?.data?.length,isEmpty:u!==void 0&&!u.data?.length,refetch:l}}var me=e((()=>{p(),a(),de(),b()}));function he(){let{reportParams:e}=c(),{metrics:n,isLoading:r,isFetching:i,isError:a,isEmpty:o,refetch:s}=pe(e,re(e.interval,A));return(0,O.jsx)(`div`,{className:C.root,children:(0,O.jsx)(ce,{isLoading:r,isFetching:i,isError:a,isEmpty:o,error:{description:t(`We couldn't load WordAds data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:s}]},empty:{icon:u,description:t(`No WordAds data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,O.jsx)(ae,{}),children:(0,O.jsx)(ie,{metrics:n,dataFormat:k,groupLabel:t(`WordAds metric`,`jetpack-premium-analytics-pkg`),pointsAreWallClocks:!0})})})}function D({attributes:e={}}){return(0,O.jsx)(l,{attributes:e,options:{from:`/`},children:(0,O.jsx)(he,{})})}var O,k,A,j=e((()=>{d(),b(),n(),w(),me(),O=r(),k={type:`number`,options:{useMultipliers:!0,decimals:0}},A=[`day`,`week`,`month`,`year`]})),M,N=e((()=>{s(),M={icon:o}})),P,F,I,L,R,z,B,ge=e((()=>{P=`jpa/wordads-chart-tabs`,F=`WordAds`,I=`Compare ads served, average CPM, and revenue over the selected period, with the previous period overlaid for comparison.`,L={content:`Compare ads served, average CPM, and revenue over the selected period, with the previous period overlaid for comparison.`},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,W.jsx)(D,{attributes:{reportParams:f(e)}})}function H(e){return(0,W.jsx)(D,{attributes:{reportParams:f(!1,e)}})}function U({withComparison:e,...t}){return(0,W.jsx)(v,{...t,widgetType:_(B,M),renderModule:G,renderComponent:D,attributes:{reportParams:f(e)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),g(),oe(),h(),y(),j(),N(),ge(),W=r(),se(),G=`storybook/wordads-chart-tabs`,K={title:`Packages/Premium Analytics/Widgets/WordAdsChartTabs`,component:D,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:"WordAds performance over the selected period as selectable metric tabs — Ads Served, Average CPM, and Revenue, matching the Calypso WordAds page's tabs — over a comparative line chart. Ads Served is a count; CPM and revenue are currency (WordAds pays USD). The date range, comparison, and bucket size come from the dashboard controls; which metric is plotted is the chart's own tab selection. WordAds stats are computed nightly, so a range ending today is clamped to end at yesterday. When comparison is on the previous period is overlaid as a same-colour dashed line and each tab shows its period-over-period delta. Data comes from the `useStatsWordAdsStats` hook (the `wordads` proxy prefix); in Storybook it is served by `registerReportMocks`. Requires WordAds to be active on the site for live data."}}}},q={render:V,args:{withComparison:!1},decorators:[x]},J={render:V,args:{withComparison:!0},decorators:[x]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(m(`wordads/stats`,`loading`),()=>m(`wordads/stats`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(m(`wordads/stats`,`error`),()=>m(`wordads/stats`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(m(`wordads/stats`,`empty`),()=>m(`wordads/stats`,null))},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...ue,withComparison:!0},argTypes:{...le,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderWordAdsChartTabs,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`The widget on its own, current period only.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderWordAdsChartTabs,
  args: {
    withComparison: true
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
    withComparison: true
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean'
    }
  }
}`,...Q.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};