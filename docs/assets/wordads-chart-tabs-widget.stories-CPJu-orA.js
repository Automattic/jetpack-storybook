import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{ll as o,n as s}from"./build-module-CDRs4YxF.js";import{$ as c,K as l,Y as u,q as d,rt as f}from"./report-metric-4jWKJgzb.js";import{t as ee,v as te}from"./src-tEZrN6jJ.js";import{Rt as ne,Tt as p,a as m,hr as h,s as g,vr as re}from"./chart-tooltip-D4zjxNqE.js";import{t as ie}from"./metric-tabs-chart-CGY0NyBU.js";import{t as ae}from"./widget-state-DDIueZqr.js";import{C as oe,D as se,E as ce,S as _,T as v,b as y,t as b,w as x,x as S}from"./src-Csln2ZSb.js";import{n as le,t as ue}from"./src-Ck1XJAGA.js";var C,w,de=e((()=>{C=`_root_sp1nf_1`,w={root:C}})),T,E,fe=e((()=>{n(),T={type:`currency`,options:{decimals:2}},E=[{id:`impressions`,label:t(`Ads Served`,`jetpack-premium-analytics-pkg`)},{id:`cpm`,label:t(`Average CPM`,`jetpack-premium-analytics-pkg`),dataFormat:T},{id:`revenue`,label:t(`Revenue`,`jetpack-premium-analytics-pkg`),dataFormat:T}]}));function pe(e,t){return{...e,period:t}}function me(e,t){let{primary:n,comparison:r,hasComparison:a,isLoading:o,isFetching:s,isError:c,refetch:l}=ne((0,i.useMemo)(()=>pe(e,t),[e,t])),u=n.data,d=r.data,f=(0,i.useMemo)(()=>u&&d?re(d,u.data.length):d,[u,d]);return{metrics:(0,i.useMemo)(()=>E.map(e=>m({primary:u,comparison:f,hasComparison:a,field:e.id,label:e.label,dataFormat:e.dataFormat})),[u,f,a]),isLoading:o,isFetching:s,isError:c&&!u?.data?.length,isEmpty:u!==void 0&&!u.data?.length,refetch:l}}var he=e((()=>{p(),a(),fe(),b()}));function D({granularity:e}){let{reportParams:n}=f(),{metrics:r,isLoading:i,isFetching:a,isError:o,isEmpty:s,refetch:c}=me(n,e===`auto`?g(n.interval,j):e);return(0,k.jsx)(`div`,{className:w.root,children:(0,k.jsx)(ae,{isLoading:i,isFetching:a,isError:o,isEmpty:s,error:{description:t(`We couldn't load WordAds data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:c}]},empty:{icon:te,description:t(`No WordAds data in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,k.jsx)(ie,{metrics:r,dataFormat:A,groupLabel:t(`WordAds metric`,`jetpack-premium-analytics-pkg`)})})})}function O({attributes:e={}}){return(0,k.jsx)(c,{attributes:e,options:{from:`/`},children:(0,k.jsx)(D,{granularity:e.granularity??`auto`})})}var k,A,j,M=e((()=>{ee(),b(),n(),de(),he(),k=r(),A={type:`number`,options:{useMultipliers:!0,decimals:0}},j=[`day`,`week`,`month`,`year`]})),N,P=e((()=>{n(),s(),ue(),N={icon:o,attributes:[{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:le,elements:[{label:t(`Auto`,`jetpack-premium-analytics-pkg`),value:`auto`},{label:t(`By days`,`jetpack-premium-analytics-pkg`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics-pkg`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics-pkg`),value:`month`},{label:t(`By years`,`jetpack-premium-analytics-pkg`),value:`year`}],relevance:`high`}],example:{attributes:{granularity:`auto`}}}})),F,I,L,R,z,B,V,ge=e((()=>{F=`jpa/wordads-chart-tabs`,I=`WordAds`,L=`Compare ads served, average CPM, and revenue over the selected period, with the previous period overlaid for comparison.`,R={content:`Compare ads served, average CPM, and revenue over the selected period, with the previous period overlaid for comparison.`},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H({withComparison:e}){return(0,W.jsx)(O,{attributes:{reportParams:h(e)}})}function U(e){return(0,W.jsx)(O,{attributes:{reportParams:h(!1,e)}})}function _e({withComparison:e,...t}){return(0,W.jsx)(v,{...t,widgetType:_(V,N),renderModule:G,renderComponent:O,attributes:{reportParams:h(e)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),ce(),l(),oe(),y(),M(),P(),ge(),W=r(),d(),G=`storybook/wordads-chart-tabs`,K={title:`Packages/Premium Analytics/Widgets/WordAdsChartTabs`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`}},parameters:{docs:{description:{component:"WordAds performance over the selected period as selectable metric tabs — Ads Served, Average CPM, and Revenue, matching the Calypso WordAds page's tabs — over a comparative line chart. Ads Served is a count; CPM and revenue are currency (WordAds pays USD). The date range and comparison come from the dashboard controls; the \"Group by\" control is the `granularity` attribute (`relevance: 'high'`), exposed by the widget host; which metric is plotted is the chart's own tab selection. WordAds stats are computed nightly, so a range ending today is clamped to end at yesterday. When comparison is on the previous period is overlaid as a same-colour dashed line and each tab shows its period-over-period delta. Data comes from the `useStatsWordAdsStats` hook (the `wordads` proxy prefix); in Storybook it is served by `registerReportMocks`. Requires WordAds to be active on the site for live data."}}}},q={render:H,args:{withComparison:!1},decorators:[S]},J={render:H,args:{withComparison:!0},decorators:[S]},Y={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(u(`wordads/stats`,`loading`),()=>u(`wordads/stats`,null))},X={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(u(`wordads/stats`,`error`),()=>u(`wordads/stats`,null))},Z={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(u(`wordads/stats`,`empty`),()=>u(`wordads/stats`,null))},Q={render:e=>(0,W.jsx)(_e,{...e}),args:{...x,withComparison:!0},argTypes:{...se,withComparison:{control:`boolean`}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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