import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Ui as i,Uu as a,ju as o,t as s}from"./build-module-2iv4IIRq.js";import{St as c,m as l,v as u,vt as d}from"./hooks-D2-uOzcc.js";import{b as ee,t as te}from"./src-C-E2d-Lb.js";import{J as ne,K as re,X as f,t as ie}from"./src-CJGEmgc4.js";import{$t as p,S as ae,n as oe,t as m,yn as se}from"./src-0ge7d6kt.js";import{r as ce,t as le}from"./metric-tabs-chart-skeleton-DDrIswPR.js";import{c as h,i as ue,r as de}from"./register-report-mocks-DAHzORiq.js";import{t as fe}from"./widget-state-BlFCjv4l.js";import{t as g}from"./src-Ddik3icB.js";import{a as pe,d as me,f as he,i as ge,l as _e,n as _,o as v,p as ve,r as y,s as ye,u as be}from"./with-widget-canvas-q45aoI9y.js";import{n as xe,r as Se,t as Ce}from"./with-site-time-zone-ngtW_VDw.js";var b,x=e((()=>{ie(),b={presetIds:[f,ne,re],periods:[`day`,`week`,`month`]}})),S,C=e((()=>{v(),x(),S=ye(b)})),w,T,E=e((()=>{w=`_root_sp1nf_1`,T={root:w}})),D,O,k=e((()=>{n(),D={type:`currency`},O=[{id:`impressions`,label:t(`Ads Served`,`jetpack-premium-analytics-pkg`)},{id:`cpm`,label:t(`Average CPM`,`jetpack-premium-analytics-pkg`),dataFormat:D},{id:`revenue`,label:t(`Revenue`,`jetpack-premium-analytics-pkg`),dataFormat:D}]}));function A(e,t){let{primary:n,timezone:r,isLoading:i,isFetching:o,isError:s,refetch:l}=ae((0,a.useMemo)(()=>({...e,period:t}),[e,t])),u=n.data;return{metrics:(0,a.useMemo)(()=>O.map(e=>c({primary:u,comparison:void 0,hasComparison:!1,field:e.id,label:e.label,dataFormat:e.dataFormat,zone:r})),[u,r]),isLoading:i,isFetching:o,isError:s&&!u?.data?.length,isEmpty:u!==void 0&&!u.data?.length,refetch:l}}var we=e((()=>{m(),o(),k(),g()}));function Te({chartType:e}){let{reportParams:n}=u(),{metrics:r,isLoading:i,isFetching:a,isError:o,isEmpty:s,refetch:c}=A(n,oe({...n,interval:void 0},b.periods));return(0,M.jsx)(`div`,{className:T.root,children:(0,M.jsx)(fe,{isLoading:i,isFetching:a,isError:o,isEmpty:s,error:{description:t(`We couldn't load WordAds data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:c}]},empty:{icon:ee,description:t(`No WordAds data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,M.jsx)(le,{}),children:(0,M.jsx)(ce,{metrics:r,dataFormat:N,chartType:e,groupLabel:t(`WordAds metric`,`jetpack-premium-analytics-pkg`),tooltipMetrics:`all`})})})}function j({attributes:e={}}){let t=e.reportParams??S;return(0,M.jsx)(se,{offersComparison:!1,children:(0,M.jsx)(l,{attributes:{...e,reportParams:t},children:(0,M.jsx)(Te,{chartType:e.chartType})})})}var M,N,Ee=e((()=>{m(),te(),g(),n(),C(),x(),E(),we(),M=r(),N={type:`number`,options:{useMultipliers:!0,decimals:0}}})),P,De=e((()=>{v(),g(),s(),C(),x(),P={icon:i,attributes:[_e({grain:b,offersComparison:!1}),d()],example:{attributes:{reportParams:S,chartType:`line`}}}})),F,I,L,R,z,B,V,Oe=e((()=>{F=`jpa/wordads-chart-tabs`,I=`Ads summary`,L=`Track ads served, average CPM, and revenue over the selected period.`,R={content:`Track ads served, average CPM, and revenue over the selected period.`},z=`stats`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H(e){return({chartType:t})=>(0,U.jsx)(j,{attributes:{reportParams:p(!1,e),chartType:t}})}function ke({chartType:e,...t}){return(0,U.jsx)(me,{...t,widgetType:ge(V,P),renderModule:W,renderComponent:j,attributes:{reportParams:p(!1),chartType:e}})}var U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{he(),m(),de(),pe(),_(),Ce(),Ee(),De(),Oe(),U=r(),ue(),W=`storybook/wordads-chart-tabs`,G={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},K={title:`Packages/Premium Analytics/Widgets/WordAdsChartTabs`,component:j,tags:[`autodocs`],decorators:[Se],argTypes:{...xe,...G},args:{chartType:`line`},parameters:{docs:{description:{component:"WordAds performance over the selected period as selectable metric tabs (Ads Served, Average CPM, and Revenue, matching the Calypso WordAds page's tabs) over a line or bar chart. Ads Served is a count; CPM and revenue are currency (WordAds pays USD). The widget hosts its own date range control in its header, saved onto the widget instance; the bucket size follows the selected window. The \"Chart type\" control is the `chartType` attribute (`relevance: 'high'`), exposed by the widget host; which metric is plotted is the chart's own tab selection. WordAds stats are computed nightly, so the last bucket of a range ending today stays empty until that run lands; only a range ending in the future is clamped back to today. Data comes from the `useStatsWordAdsStats` hook (the `wordads` proxy prefix); in Storybook it is served by `registerReportMocks`. Requires WordAds to be active on the site for live data."}}}},q={render:H(`last-30-days`),decorators:[y]},J={render:H(`last-30-days`),args:{chartType:`bar`},decorators:[y]},Y={render:H(`last-90-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(h(`wordads/stats`,`loading`),()=>h(`wordads/stats`,null))},X={render:H(`last-7-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(h(`wordads/stats`,`error`),()=>h(`wordads/stats`,null))},Z={render:H(`last-365-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(h(`wordads/stats`,`empty`),()=>h(`wordads/stats`,null))},Q={render:e=>(0,U.jsx)(ke,{...e}),args:{...be,chartType:`line`},argTypes:{...ve,...G}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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