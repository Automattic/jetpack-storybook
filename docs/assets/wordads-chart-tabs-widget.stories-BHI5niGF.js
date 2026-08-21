import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{ll as o,n as s}from"./build-module-CDRs4YxF.js";import{J as c,Z as l,at as u,q as d,tt as f}from"./report-metric-CdKPbOS4.js";import{b as ee,t as te}from"./src-BKLK-O8P.js";import{Xt as ne,m as re,qt as p,t as m}from"./src-Ci2M5OLA.js";import{c as ie,h as ae,l as oe,p as se}from"./chart-tooltip-DBFsPjtF.js";import{r as ce,t as le}from"./metric-tabs-chart-skeleton-B-U4epFn.js";import{t as ue}from"./widget-state-D-WCzMRJ.js";import{C as h,D as g,E as _,S as v,T as y,b,t as x,w as de,x as S}from"./src-B2_q1OjX.js";var C,w,fe=e((()=>{C=`_root_sp1nf_1`,w={root:C}})),T,E,pe=e((()=>{n(),T={type:`currency`,options:{decimals:2}},E=[{id:`impressions`,label:t(`Ads Served`,`jetpack-premium-analytics-pkg`)},{id:`cpm`,label:t(`Average CPM`,`jetpack-premium-analytics-pkg`),dataFormat:T},{id:`revenue`,label:t(`Revenue`,`jetpack-premium-analytics-pkg`),dataFormat:T}]}));function me(e,t){return{...e,period:t}}function he(e,t){let{primary:n,comparison:r,hasComparison:a,isLoading:o,isFetching:s,isError:c,refetch:l}=re((0,i.useMemo)(()=>me(e,t),[e,t])),u=n.data,d=r.data,f=(0,i.useMemo)(()=>u&&d?ne(d,u.data.length):d,[u,d]);return{metrics:(0,i.useMemo)(()=>E.map(e=>se({primary:u,comparison:f,hasComparison:a,field:e.id,label:e.label,dataFormat:e.dataFormat})),[u,f,a]),isLoading:o,isFetching:s,isError:c&&!u?.data?.length,isEmpty:u!==void 0&&!u.data?.length,refetch:l}}var ge=e((()=>{m(),a(),pe(),x()}));function D({granularity:e}){let{reportParams:n}=u(),{metrics:r,isLoading:i,isFetching:a,isError:o,isEmpty:s,refetch:c}=he(n,e===`auto`?ae(n.interval,j):e);return(0,k.jsx)(`div`,{className:w.root,children:(0,k.jsx)(ue,{isLoading:i,isFetching:a,isError:o,isEmpty:s,error:{description:t(`We couldn't load WordAds data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:c}]},empty:{icon:ee,description:t(`No WordAds data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,k.jsx)(le,{}),children:(0,k.jsx)(ce,{metrics:r,dataFormat:A,groupLabel:t(`WordAds metric`,`jetpack-premium-analytics-pkg`)})})})}function O({attributes:e={}}){return(0,k.jsx)(f,{attributes:e,options:{from:`/`},children:(0,k.jsx)(D,{granularity:e.granularity??`auto`})})}var k,A,j,M=e((()=>{te(),x(),n(),fe(),ge(),k=r(),A={type:`number`,options:{useMultipliers:!0,decimals:0}},j=[`day`,`week`,`month`,`year`]})),N,P=e((()=>{n(),s(),ie(),N={icon:o,attributes:[{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:oe,elements:[{label:t(`Auto`,`jetpack-premium-analytics-pkg`),value:`auto`},{label:t(`By days`,`jetpack-premium-analytics-pkg`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics-pkg`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics-pkg`),value:`month`},{label:t(`By years`,`jetpack-premium-analytics-pkg`),value:`year`}],relevance:`high`}],example:{attributes:{granularity:`auto`}}}})),F,I,L,R,z,B,V,_e=e((()=>{F=`jpa/wordads-chart-tabs`,I=`WordAds`,L=`Compare ads served, average CPM, and revenue over the selected period, with the previous period overlaid for comparison.`,R={content:`Compare ads served, average CPM, and revenue over the selected period, with the previous period overlaid for comparison.`},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H({withComparison:e}){return(0,W.jsx)(O,{attributes:{reportParams:p(e)}})}function U(e){return(0,W.jsx)(O,{attributes:{reportParams:p(!1,e)}})}function ve({withComparison:e,...t}){return(0,W.jsx)(y,{...t,widgetType:v(V,N),renderModule:G,renderComponent:O,attributes:{reportParams:p(e)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),_(),d(),h(),b(),M(),P(),_e(),W=r(),c(),G=`storybook/wordads-chart-tabs`,K={title:`Packages/Premium Analytics/Widgets/WordAdsChartTabs`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:"WordAds performance over the selected period as selectable metric tabs — Ads Served, Average CPM, and Revenue, matching the Calypso WordAds page's tabs — over a comparative line chart. Ads Served is a count; CPM and revenue are currency (WordAds pays USD). The date range and comparison come from the dashboard controls; the \"Group by\" control is the `granularity` attribute (`relevance: 'high'`), exposed by the widget host; which metric is plotted is the chart's own tab selection. WordAds stats are computed nightly, so a range ending today is clamped to end at yesterday. When comparison is on the previous period is overlaid as a same-colour dashed line and each tab shows its period-over-period delta. Data comes from the `useStatsWordAdsStats` hook (the `wordads` proxy prefix); in Storybook it is served by `registerReportMocks`. Requires WordAds to be active on the site for live data."}}}},q={render:H,args:{withComparison:!1},decorators:[S]},J={render:H,args:{withComparison:!0},decorators:[S]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(l(`wordads/stats`,`loading`),()=>l(`wordads/stats`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(l(`wordads/stats`,`error`),()=>l(`wordads/stats`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(l(`wordads/stats`,`empty`),()=>l(`wordads/stats`,null))},Q={render:e=>(0,W.jsx)(ve,{...e}),args:{...de,withComparison:!0},argTypes:{...g,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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