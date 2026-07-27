import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{Nn as o,n as s}from"./build-module-DmVuor49.js";import{t as c,v as l}from"./src-B3le4dug.js";import{Pt as u,a as d,pr as f,r as ee,ur as p,xt as m}from"./chart-tooltip-BS0AHuyV.js";import{t as h}from"./metric-tabs-chart-BlR6TMkz.js";import{I as g,L as te,U as ne,q as re,z as _}from"./report-metric-CypFTt88.js";import{t as ie}from"./widget-state-DnMIufY4.js";import{C as ae,D as oe,E as se,S as ce,T as le,b as ue,t as v,w as de,x as y}from"./src-DxVm3OnV.js";import{i as fe,n as b,t as x}from"./src-4y6VNgNE.js";var S,C,w,T=e((()=>{n(),S={type:`currency`,options:{decimals:2}},C=[{id:`impressions`,label:t(`Ads Served`,`jetpack-premium-analytics`)},{id:`cpm`,label:t(`Average CPM`,`jetpack-premium-analytics`),dataFormat:S},{id:`revenue`,label:t(`Revenue`,`jetpack-premium-analytics`),dataFormat:S}],w=C.map(e=>e.id)})),E,D,pe=e((()=>{E=`_root_dimrf_1`,D={root:E}}));function me(e,t){return{...e,period:t}}function he(e,t,n=w){let{primary:r,comparison:a,hasComparison:o,isLoading:s,isFetching:c,isError:l,refetch:d}=u((0,i.useMemo)(()=>me(e,t),[e,t])),p=r.data,m=a.data,h=(0,i.useMemo)(()=>p&&m?f(m,p.data.length):m,[p,m]),g=(0,i.useMemo)(()=>{let e=new Set(n);return C.filter(t=>e.has(t.id))},[n]);return{metrics:(0,i.useMemo)(()=>g.map(e=>ee({primary:p,comparison:h,hasComparison:o,field:e.id,label:e.label,dataFormat:e.dataFormat})),[g,p,h,o]),isLoading:s,isFetching:c,isError:l&&!p?.data?.length,isEmpty:p!==void 0&&!p.data?.length,refetch:d}}var ge=e((()=>{m(),a(),T(),v()}));function _e({granularity:e,metricIds:n}){let{reportParams:r}=re(),{metrics:i,isLoading:a,isFetching:o,isError:s,isEmpty:c,refetch:u}=he(r,e===`auto`?d(r.interval,j):e,n),f=i.length===0;return(0,k.jsx)(`div`,{className:D.root,children:(0,k.jsx)(ie,{isLoading:f?!1:a,isFetching:f?!1:o,isError:f?!1:s,isEmpty:f||c,error:{description:t(`We couldn't load WordAds data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:u}]},empty:{icon:l,description:t(f?`Select at least one metric to display.`:`No WordAds data in this period.`,`jetpack-premium-analytics`)},children:(0,k.jsx)(h,{metrics:i,dataFormat:A,groupLabel:t(`WordAds metric`,`jetpack-premium-analytics`)})})})}function O({attributes:e={}}){return(0,k.jsx)(ne,{attributes:e,options:{from:`/`},children:(0,k.jsx)(_e,{granularity:e.granularity??`auto`,metricIds:e.metrics})})}var k,A,j,ve=e((()=>{c(),v(),n(),pe(),ge(),k=r(),A={type:`number`,options:{useMultipliers:!0,decimals:0}},j=[`day`,`week`,`month`,`year`]})),M,ye=e((()=>{n(),s(),x(),T(),M={icon:o,attributes:[{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics`),type:`text`,Edit:b,elements:[{label:t(`Auto`,`jetpack-premium-analytics`),value:`auto`},{label:t(`By days`,`jetpack-premium-analytics`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics`),value:`month`},{label:t(`By years`,`jetpack-premium-analytics`),value:`year`}],relevance:`high`},{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics`),type:`array`,relevance:`high`,Edit:fe,elements:C.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{granularity:`auto`,metrics:w}}}})),N,P,F,I,L,R,z,be=e((()=>{N=`jpa/wordads-chart-tabs`,P=`WordAds`,F=`Compare ads served, average CPM, and revenue over the selected period, with the previous period overlaid for comparison.`,I={content:`Compare ads served, average CPM, and revenue over the selected period, with the previous period overlaid for comparison.`},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({withComparison:e,metrics:t}){return(0,H.jsx)(O,{attributes:{reportParams:p(e),metrics:t}})}function V(e){return(0,H.jsx)(O,{attributes:{reportParams:p(!1,e)}})}function xe({withComparison:e,metrics:t,...n}){return(0,H.jsx)(le,{...n,widgetType:ce(z,M),renderModule:U,renderComponent:O,attributes:{reportParams:p(e),metrics:t}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),se(),g(),ae(),ue(),T(),ve(),ye(),be(),H=r(),te(),U=`storybook/wordads-chart-tabs`,W={metrics:{control:`check`,options:w}},G={metrics:w},K={title:`Packages/Premium Analytics/Widgets/WordAdsChartTabs`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...W},parameters:{docs:{description:{component:"WordAds performance over the selected period as selectable metric tabs — Ads Served, Average CPM, and Revenue, matching the Calypso WordAds page's tabs — over a comparative line chart. Ads Served is a count; CPM and revenue are currency (WordAds pays USD). The date range and comparison come from the dashboard controls; the \"Group by\" control is the `granularity` attribute and the visible tabs are the `metrics` attribute (both `relevance: 'high'`), exposed by the widget host. WordAds stats are computed nightly, so a range ending today is clamped to end at yesterday. When comparison is on the previous period is overlaid as a same-colour dashed line and each tab shows its period-over-period delta. Data comes from the `useStatsWordAdsStats` hook (the `wordads` proxy prefix); in Storybook it is served by `registerReportMocks`. Requires WordAds to be active on the site for live data."}}}},q={render:B,args:{withComparison:!1,...G},decorators:[y]},J={render:B,args:{withComparison:!0,...G},decorators:[y]},Y={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(_(`wordads/stats`,`loading`),()=>_(`wordads/stats`,null))},X={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(_(`wordads/stats`,`error`),()=>_(`wordads/stats`,null))},Z={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(_(`wordads/stats`,`empty`),()=>_(`wordads/stats`,null))},Q={render:e=>(0,H.jsx)(xe,{...e}),args:{...de,withComparison:!0,...G},argTypes:{...oe,withComparison:{control:`boolean`},...W}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderWordAdsChartTabs,
  args: {
    withComparison: false,
    ...ALL_METRICS_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`The widget on its own, current period only.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderWordAdsChartTabs,
  args: {
    withComparison: true,
    ...ALL_METRICS_ARGS
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
    withComparison: true,
    ...ALL_METRICS_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean'
    },
    ...METRIC_ARG_TYPES
  }
}`,...Q.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};