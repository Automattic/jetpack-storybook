import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{ll as o,n as s}from"./build-module-CDRs4YxF.js";import{$ as c,G as l,K as u,Y as d,rt as f}from"./report-metric-CCPQYdqJ.js";import{b as ee,t as te}from"./src-BKLK-O8P.js";import{Cr as p,Er as ne,Kt as re,Nt as m,c as ie,h as ae,l as oe,p as se}from"./chart-tooltip-C9h8NqvM.js";import{t as ce}from"./metric-tabs-chart-DrprPmaX.js";import{t as le}from"./widget-state-BAxIUmcO.js";import{C as ue,D as de,E as h,S as g,T as _,b as v,t as y,w as b,x}from"./src-DYZyFkxc.js";var S,C,w=e((()=>{S=`_root_sp1nf_1`,C={root:S}})),T,E,fe=e((()=>{n(),T={type:`currency`,options:{decimals:2}},E=[{id:`impressions`,label:t(`Ads Served`,`jetpack-premium-analytics-pkg`)},{id:`cpm`,label:t(`Average CPM`,`jetpack-premium-analytics-pkg`),dataFormat:T},{id:`revenue`,label:t(`Revenue`,`jetpack-premium-analytics-pkg`),dataFormat:T}]}));function pe(e,t){return{...e,period:t}}function me(e,t){let{primary:n,comparison:r,hasComparison:a,isLoading:o,isFetching:s,isError:c,refetch:l}=re((0,i.useMemo)(()=>pe(e,t),[e,t])),u=n.data,d=r.data,f=(0,i.useMemo)(()=>u&&d?ne(d,u.data.length):d,[u,d]);return{metrics:(0,i.useMemo)(()=>E.map(e=>se({primary:u,comparison:f,hasComparison:a,field:e.id,label:e.label,dataFormat:e.dataFormat})),[u,f,a]),isLoading:o,isFetching:s,isError:c&&!u?.data?.length,isEmpty:u!==void 0&&!u.data?.length,refetch:l}}var he=e((()=>{m(),a(),fe(),y()}));function ge({granularity:e}){let{reportParams:n}=f(),{metrics:r,isLoading:i,isFetching:a,isError:o,isEmpty:s,refetch:c}=me(n,e===`auto`?ae(n.interval,A):e);return(0,O.jsx)(`div`,{className:C.root,children:(0,O.jsx)(le,{isLoading:i,isFetching:a,isError:o,isEmpty:s,error:{description:t(`We couldn't load WordAds data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:c}]},empty:{icon:ee,description:t(`No WordAds data in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,O.jsx)(ce,{metrics:r,dataFormat:k,groupLabel:t(`WordAds metric`,`jetpack-premium-analytics-pkg`)})})})}function D({attributes:e={}}){return(0,O.jsx)(c,{attributes:e,options:{from:`/`},children:(0,O.jsx)(ge,{granularity:e.granularity??`auto`})})}var O,k,A,j=e((()=>{te(),y(),n(),w(),he(),O=r(),k={type:`number`,options:{useMultipliers:!0,decimals:0}},A=[`day`,`week`,`month`,`year`]})),M,N=e((()=>{n(),s(),ie(),M={icon:o,attributes:[{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:oe,elements:[{label:t(`Auto`,`jetpack-premium-analytics-pkg`),value:`auto`},{label:t(`By days`,`jetpack-premium-analytics-pkg`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics-pkg`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics-pkg`),value:`month`},{label:t(`By years`,`jetpack-premium-analytics-pkg`),value:`year`}],relevance:`high`}],example:{attributes:{granularity:`auto`}}}})),P,F,I,L,R,z,B,_e=e((()=>{P=`jpa/wordads-chart-tabs`,F=`WordAds`,I=`Compare ads served, average CPM, and revenue over the selected period, with the previous period overlaid for comparison.`,L={content:`Compare ads served, average CPM, and revenue over the selected period, with the previous period overlaid for comparison.`},R=`stats`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e}){return(0,W.jsx)(D,{attributes:{reportParams:p(e)}})}function H(e){return(0,W.jsx)(D,{attributes:{reportParams:p(!1,e)}})}function U({withComparison:e,...t}){return(0,W.jsx)(_,{...t,widgetType:g(B,M),renderModule:G,renderComponent:D,attributes:{reportParams:p(e)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),h(),l(),ue(),v(),j(),N(),_e(),W=r(),u(),G=`storybook/wordads-chart-tabs`,K={title:`Packages/Premium Analytics/Widgets/WordAdsChartTabs`,component:D,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:"WordAds performance over the selected period as selectable metric tabs — Ads Served, Average CPM, and Revenue, matching the Calypso WordAds page's tabs — over a comparative line chart. Ads Served is a count; CPM and revenue are currency (WordAds pays USD). The date range and comparison come from the dashboard controls; the \"Group by\" control is the `granularity` attribute (`relevance: 'high'`), exposed by the widget host; which metric is plotted is the chart's own tab selection. WordAds stats are computed nightly, so a range ending today is clamped to end at yesterday. When comparison is on the previous period is overlaid as a same-colour dashed line and each tab shows its period-over-period delta. Data comes from the `useStatsWordAdsStats` hook (the `wordads` proxy prefix); in Storybook it is served by `registerReportMocks`. Requires WordAds to be active on the site for live data."}}}},q={render:V,args:{withComparison:!1},decorators:[x]},J={render:V,args:{withComparison:!0},decorators:[x]},Y={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(d(`wordads/stats`,`loading`),()=>d(`wordads/stats`,null))},X={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(d(`wordads/stats`,`error`),()=>d(`wordads/stats`,null))},Z={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(d(`wordads/stats`,`empty`),()=>d(`wordads/stats`,null))},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...b,withComparison:!0},argTypes:{...de,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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