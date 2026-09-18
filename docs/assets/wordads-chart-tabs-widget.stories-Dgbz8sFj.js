import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Uu as i,ju as a,t as o,ul as s}from"./build-module-2iv4IIRq.js";import{$ as c,_t as ee,m as l,st as te,tt as ne,v as re}from"./hooks-BUnZzP_x.js";import{b as ie,t as ae}from"./src-C-E2d-Lb.js";import{J as u,K as oe,X as se,t as ce}from"./src-CJGEmgc4.js";import{bn as le,i as ue,nn as de,r as d,tn as f,w as fe}from"./date-period-dropdown-I48H6XY7.js";import{r as pe,t as me}from"./metric-tabs-chart-skeleton-C18hzviI.js";import{c as p,i as m,r as he}from"./register-report-mocks-CGnffvcY.js";import{t as ge}from"./widget-state-BqU_ioDt.js";import{t as h}from"./src-CPMk0i4-.js";import{a as g,c as _,i as v,l as _e,n as ve,o as ye,r as y,s as be}from"./with-widget-canvas-EZpxyMQt.js";import{n as xe,r as Se,t as Ce}from"./with-site-time-zone-ngtW_VDw.js";var b,x=e((()=>{d(),b=de()})),S,C=e((()=>{ce(),S={presetIds:[se,u,oe],periods:[`day`,`week`,`month`]}})),w,T,E=e((()=>{w=`_root_sp1nf_1`,T={root:w}})),D,O,k=e((()=>{n(),D={type:`currency`},O=[{id:`impressions`,label:t(`Ads Served`,`jetpack-premium-analytics-pkg`)},{id:`cpm`,label:t(`Average CPM`,`jetpack-premium-analytics-pkg`),dataFormat:D},{id:`revenue`,label:t(`Revenue`,`jetpack-premium-analytics-pkg`),dataFormat:D}]}));function A(e,t){let{primary:n,timezone:r,isLoading:a,isFetching:o,isError:s,refetch:c}=fe((0,i.useMemo)(()=>({...e,period:t}),[e,t])),l=n.data;return{metrics:(0,i.useMemo)(()=>O.map(e=>ee({primary:l,comparison:void 0,hasComparison:!1,field:e.id,label:e.label,dataFormat:e.dataFormat,zone:r})),[l,r]),isLoading:a,isFetching:o,isError:s&&!l?.data?.length,isEmpty:l!==void 0&&!l.data?.length,refetch:c}}var we=e((()=>{d(),a(),k(),h()}));function Te({chartType:e}){let{reportParams:n}=re(),{metrics:r,isLoading:i,isFetching:a,isError:o,isEmpty:s,refetch:c}=A(n,ue({...n,interval:void 0},S.periods));return(0,M.jsx)(`div`,{className:T.root,children:(0,M.jsx)(ge,{isLoading:i,isFetching:a,isError:o,isEmpty:s,error:{description:t(`We couldn't load WordAds data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:c}]},empty:{icon:ie,description:t(`No WordAds data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,M.jsx)(me,{}),children:(0,M.jsx)(pe,{metrics:r,dataFormat:N,chartType:e,groupLabel:t(`WordAds metric`,`jetpack-premium-analytics-pkg`),tooltipMetrics:`all`})})})}function j({attributes:e={}}){let t=e.reportParams??b;return(0,M.jsx)(le,{offersComparison:!1,children:(0,M.jsx)(l,{attributes:{...e,reportParams:t},children:(0,M.jsx)(Te,{chartType:e.chartType})})})}var M,N,Ee=e((()=>{d(),ae(),h(),n(),x(),C(),E(),we(),M=r(),N={type:`number`,options:{useMultipliers:!0,decimals:0}}})),P,De=e((()=>{ne(),h(),o(),x(),C(),P={icon:s,attributes:[te({grain:S}),c()],example:{attributes:{reportParams:b,chartType:`line`}}}})),F,I,L,R,z,B,V,Oe=e((()=>{F=`jpa/wordads-chart-tabs`,I=`WordAds`,L=`Track ads served, average CPM, and revenue over the selected period.`,R={content:`Track ads served, average CPM, and revenue over the selected period.`},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H(e){return({chartType:t})=>(0,U.jsx)(j,{attributes:{reportParams:f(!1,e),chartType:t}})}function ke({chartType:e,...t}){return(0,U.jsx)(be,{...t,widgetType:v(V,P),renderModule:W,renderComponent:j,attributes:{reportParams:f(!1),chartType:e}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{_(),d(),he(),g(),ve(),Ce(),Ee(),De(),Oe(),U=r(),m(),W=`storybook/wordads-chart-tabs`,G={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},K={title:`Packages/Premium Analytics/Widgets/WordAdsChartTabs`,component:j,tags:[`autodocs`],decorators:[Se],argTypes:{...xe,...G},args:{chartType:`line`},parameters:{docs:{description:{component:"WordAds performance over the selected period as selectable metric tabs (Ads Served, Average CPM, and Revenue, matching the Calypso WordAds page's tabs) over a line or bar chart. Ads Served is a count; CPM and revenue are currency (WordAds pays USD). The widget hosts its own date range control in its header, saved onto the widget instance; the bucket size follows the selected window. The \"Chart type\" control is the `chartType` attribute (`relevance: 'high'`), exposed by the widget host; which metric is plotted is the chart's own tab selection. WordAds stats are computed nightly, so the last bucket of a range ending today stays empty until that run lands; only a range ending in the future is clamped back to today. Data comes from the `useStatsWordAdsStats` hook (the `wordads` proxy prefix); in Storybook it is served by `registerReportMocks`. Requires WordAds to be active on the site for live data."}}}},q={render:H(`last-30-days`),decorators:[y]},J={render:H(`last-30-days`),args:{chartType:`bar`},decorators:[y]},Y={render:H(`last-90-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(p(`wordads/stats`,`loading`),()=>p(`wordads/stats`,null))},X={render:H(`last-7-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(p(`wordads/stats`,`error`),()=>p(`wordads/stats`,null))},Z={render:H(`last-365-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(p(`wordads/stats`,`empty`),()=>p(`wordads/stats`,null))},Q={render:e=>(0,U.jsx)(ke,{...e}),args:{...ye,chartType:`line`},argTypes:{..._e,...G}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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