import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{ll as o,n as s}from"./build-module-CDRs4YxF.js";import{J as c,Z as l,at as u,q as d,tt as f}from"./report-metric-BywRn0bl.js";import{b as p,t as ee}from"./src-BKLK-O8P.js";import{Xt as te,m as ne,qt as m,t as h}from"./src-BqoIAWGs.js";import{h as re,p as ie}from"./chart-tooltip-CBXJFs6e.js";import{r as ae,t as oe}from"./metric-tabs-chart-skeleton-BmjwUCuu.js";import{t as g}from"./widget-state-CCVIVgZN.js";import{C as se,D as ce,E as le,S as _,T as ue,b as de,t as v,w as y,x as b}from"./src-CNbqXo4B.js";var x,S,C=e((()=>{x=`_root_sp1nf_1`,S={root:x}})),w,T,E=e((()=>{n(),w={type:`currency`,options:{decimals:2}},T=[{id:`impressions`,label:t(`Ads Served`,`jetpack-premium-analytics-pkg`)},{id:`cpm`,label:t(`Average CPM`,`jetpack-premium-analytics-pkg`),dataFormat:w},{id:`revenue`,label:t(`Revenue`,`jetpack-premium-analytics-pkg`),dataFormat:w}]}));function D(e,t){return{...e,period:t}}function fe(e,t){let{primary:n,comparison:r,hasComparison:a,isLoading:o,isFetching:s,isError:c,refetch:l}=ne((0,i.useMemo)(()=>D(e,t),[e,t])),u=n.data,d=r.data,f=(0,i.useMemo)(()=>u&&d?te(d,u.data.length):d,[u,d]);return{metrics:(0,i.useMemo)(()=>T.map(e=>ie({primary:u,comparison:f,hasComparison:a,field:e.id,label:e.label,dataFormat:e.dataFormat})),[u,f,a]),isLoading:o,isFetching:s,isError:c&&!u?.data?.length,isEmpty:u!==void 0&&!u.data?.length,refetch:l}}var pe=e((()=>{h(),a(),E(),v()}));function me(){let{reportParams:e}=u(),{metrics:n,isLoading:r,isFetching:i,isError:a,isEmpty:o,refetch:s}=fe(e,re(e.interval,j));return(0,k.jsx)(`div`,{className:S.root,children:(0,k.jsx)(g,{isLoading:r,isFetching:i,isError:a,isEmpty:o,error:{description:t(`We couldn't load WordAds data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:s}]},empty:{icon:p,description:t(`No WordAds data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,k.jsx)(oe,{}),children:(0,k.jsx)(ae,{metrics:n,dataFormat:A,groupLabel:t(`WordAds metric`,`jetpack-premium-analytics-pkg`)})})})}function O({attributes:e={}}){return(0,k.jsx)(f,{attributes:e,options:{from:`/`},children:(0,k.jsx)(me,{})})}var k,A,j,M=e((()=>{ee(),v(),n(),C(),pe(),k=r(),A={type:`number`,options:{useMultipliers:!0,decimals:0}},j=[`day`,`week`,`month`,`year`]})),N,P=e((()=>{s(),N={icon:o}})),F,I,L,R,z,B,V,he=e((()=>{F=`jpa/wordads-chart-tabs`,I=`WordAds`,L=`Compare ads served, average CPM, and revenue over the selected period, with the previous period overlaid for comparison.`,R={content:`Compare ads served, average CPM, and revenue over the selected period, with the previous period overlaid for comparison.`},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H({withComparison:e}){return(0,W.jsx)(O,{attributes:{reportParams:m(e)}})}function U(e){return(0,W.jsx)(O,{attributes:{reportParams:m(!1,e)}})}function ge({withComparison:e,...t}){return(0,W.jsx)(ue,{...t,widgetType:_(V,N),renderModule:G,renderComponent:O,attributes:{reportParams:m(e)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),le(),d(),se(),de(),M(),P(),he(),W=r(),c(),G=`storybook/wordads-chart-tabs`,K={title:`Packages/Premium Analytics/Widgets/WordAdsChartTabs`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:"WordAds performance over the selected period as selectable metric tabs — Ads Served, Average CPM, and Revenue, matching the Calypso WordAds page's tabs — over a comparative line chart. Ads Served is a count; CPM and revenue are currency (WordAds pays USD). The date range, comparison, and bucket size come from the dashboard controls; which metric is plotted is the chart's own tab selection. WordAds stats are computed nightly, so a range ending today is clamped to end at yesterday. When comparison is on the previous period is overlaid as a same-colour dashed line and each tab shows its period-over-period delta. Data comes from the `useStatsWordAdsStats` hook (the `wordads` proxy prefix); in Storybook it is served by `registerReportMocks`. Requires WordAds to be active on the site for live data."}}}},q={render:H,args:{withComparison:!1},decorators:[b]},J={render:H,args:{withComparison:!0},decorators:[b]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(l(`wordads/stats`,`loading`),()=>l(`wordads/stats`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(l(`wordads/stats`,`error`),()=>l(`wordads/stats`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(l(`wordads/stats`,`empty`),()=>l(`wordads/stats`,null))},Q={render:e=>(0,W.jsx)(ge,{...e}),args:{...y,withComparison:!0},argTypes:{...ce,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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