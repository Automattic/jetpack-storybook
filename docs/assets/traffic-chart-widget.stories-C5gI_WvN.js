import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{n as o,w as s}from"./build-module-CDRs4YxF.js";import{b as c,g as l}from"./hooks-B2xyQPKn.js";import{M as u,t as d}from"./src-B64ifip5.js";import{j as f,qt as p,t as m}from"./src-C9CJGFaR.js";import{u as h,w as g,y as ee}from"./chart-tooltip-D9_cjjC3.js";import{r as _,t as v}from"./metric-tabs-chart-skeleton-CpjuDE8l.js";import{K as y,X as b,q as te}from"./report-metric-B6WRZOT8.js";import{t as ne}from"./widget-state-DfDQNdG9.js";import{C as re,D as ie,E as ae,S as oe,T as x,b as se,t as S,w as C,x as w}from"./src-g5EsZXXJ.js";var ce,T,le=e((()=>{ce=`_root_sp1nf_1`,T={root:ce}})),ue,de,fe,E=e((()=>{n(),o(),S(),ue=[`hour`,`day`,`week`,`month`],de=[{id:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`),counterpartId:`visitors`},{id:`visitors`,label:t(`Visitors`,`jetpack-premium-analytics-pkg`),counterpartId:`views`},{id:`comments`,label:t(`Comments`,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:t(`Likes`,`jetpack-premium-analytics-pkg`)}],fe={icon:s,attributes:[h()],example:{attributes:{chartType:`line`}}}}));function pe(e,t,n){return{...e,stat_fields:t,period:n}}function me(e,n){let r=n===`hour`,a=(0,i.useCallback)(e=>!r||he.has(e),[r]),o=(0,i.useMemo)(()=>pe(e,r?`views`:`views,visitors`,n),[e,n,r]),s=(0,i.useMemo)(()=>pe(e,`likes,comments`,n),[e,n]),c=f(o),l=f(s,{enabled:!r}),u=c.primary.data,d=c.comparison.data,p=c.hasComparison,m=l.primary.data,h=l.comparison.data,g=l.hasComparison,_=(0,i.useMemo)(()=>de.map(e=>{let n=e.id===`views`||e.id===`visitors`;return{...ee({primary:n?u:m,comparison:n?d:h,hasComparison:n?p:g,field:e.id,label:e.label}),counterpartKey:`counterpartId`in e?e.counterpartId:void 0,...a(e.id)?{}:{unavailable:t(`Hourly data isn't available for this metric.`,`jetpack-premium-analytics-pkg`)}}}),[a,u,d,p,m,h,g]),{refetch:v}=c,{refetch:y}=l,b=(0,i.useCallback)(()=>{v(),y()},[v,y]),te=c.isError&&!u?.data?.length||l.isError&&!m?.data?.length;return{metrics:_,isLoading:c.isLoading||l.isLoading,isFetching:c.isFetching||l.isFetching,isError:te,refetch:b}}var he,ge=e((()=>{m(),a(),n(),E(),S(),he=new Set([`views`])}));function _e({chartType:e}){let{reportParams:n}=c(),r=g(n.interval,ue),{metrics:i,isLoading:a,isFetching:o,isError:s,refetch:l}=me(n,r),d=t(`Traffic metric`,`jetpack-premium-analytics-pkg`),f=i.filter(e=>!e.unavailable);return(0,O.jsx)(`div`,{className:T.root,children:(0,O.jsx)(ne,{isLoading:a,isFetching:o,isError:s,isEmpty:f.length>0&&f.every(e=>e.current.length===0),error:{description:t(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:l}]},empty:{icon:u,description:t(`No traffic data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,O.jsx)(v,{}),children:(0,O.jsx)(_,{metrics:i,dataFormat:k,chartType:e,groupLabel:d,tickResolution:r,pointsAreWallClocks:!0})})})}function D({attributes:e={},setError:t}){return(0,O.jsx)(l,{attributes:e,setError:t,options:{from:`/`},children:(0,O.jsx)(_e,{chartType:e.chartType})})}var O,k,ve=e((()=>{S(),d(),n(),le(),ge(),E(),O=r(),k={type:`number`,options:{useMultipliers:!0,decimals:0}}})),A,j,M,N,P,F,I,ye=e((()=>{A=`jpa/traffic-chart`,j=`Traffic summary`,M=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,N={content:`A summary of your site's views, visitors, likes, and comments.`},P=`traffic`,F=`framed`,I={name:A,title:j,description:M,help:N,category:P,presentation:F}}));function L({withComparison:e,chartType:t}){return(0,z.jsx)(D,{attributes:{reportParams:p(e),chartType:t}})}function R(e){return(0,z.jsx)(D,{attributes:{reportParams:p(!1,e)}})}function be({withComparison:e,chartType:t,...n}){return(0,z.jsx)(x,{...n,widgetType:V,renderModule:B,renderComponent:D,attributes:{reportParams:p(e),chartType:t}})}var z,B,V,H,U,xe,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),ae(),re(),se(),y(),ve(),E(),ye(),z=r(),te(),B=`storybook/traffic-chart`,V=oe(I,fe),H={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},U={chartType:`line`},xe={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:D,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...H},parameters:{docs:{description:{component:"Traffic over the selected period as selectable metric tabs — Views, Visitors, Likes, and Comments — over a comparative chart. The date range, comparison, and bucket size come from the dashboard controls: the bucket is whatever the page's interval control resolves to, clamped to one the chart can draw. \"Chart type\" is the `chartType` attribute (`relevance: 'high'`, so the host renders it in the widget header). Which metric is plotted is the chart's own tab selection. When comparison is on, each tab shows its period-over-period delta and the previous period is overlaid — as a same-colour dashed line for `line`, or as the translucent shadow bar behind each bar for `bar`. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; the likes and comments request is skipped at the hourly grain, which cannot fill either. Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`."}}}},W={render:L,args:{withComparison:!1,...U},decorators:[w]},G={render:L,args:{withComparison:!0,...U},decorators:[w]},K={render:L,args:{withComparison:!1,...U,chartType:`bar`},decorators:[w]},q={render:L,args:{withComparison:!0,...U,chartType:`bar`},decorators:[w]},J={render:e=>(0,z.jsx)(x,{...e,widgetType:V,renderModule:B,renderComponent:D,attributes:{reportParams:p(!1,`last-24-hours`)}}),args:{...C},argTypes:{...ie}},Y={render:()=>R(`last-90-days`),tags:[`!autodocs`],decorators:[w],beforeEach:()=>(b(`stats/visits`,`loading`),()=>b(`stats/visits`,null))},X={render:()=>R(`last-7-days`),tags:[`!autodocs`],decorators:[w],beforeEach:()=>(b(`stats/visits`,`error`),()=>b(`stats/visits`,null))},Z={render:()=>R(`last-365-days`),tags:[`!autodocs`],decorators:[w],beforeEach:()=>(b(`stats/visits`,`empty`),()=>b(`stats/visits`,null))},Q={render:e=>(0,z.jsx)(be,{...e}),args:{...C,withComparison:!0,...U},argTypes:{...ie,withComparison:{control:`boolean`},...H}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: renderTrafficChart,
  args: {
    withComparison: false,
    ...DEFAULT_CHART_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...W.parameters?.docs?.source},description:{story:`The widget on its own, current period only.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderTrafficChart,
  args: {
    withComparison: true,
    ...DEFAULT_CHART_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...G.parameters?.docs?.source},description:{story:`Same close-up with the period-over-period delta and previous-period overlay.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderTrafficChart,
  args: {
    withComparison: false,
    ...DEFAULT_CHART_ARGS,
    chartType: 'bar'
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:"The same widget drawn as bars — the `chartType` attribute set to `bar`.",...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderTrafficChart,
  args: {
    withComparison: true,
    ...DEFAULT_CHART_ARGS,
    chartType: 'bar'
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`Bars with comparison on: the previous period renders as the translucent
shadow bar behind each current-period bar.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: args => <WidgetDashboardWithWidgetStory {...args} widgetType={storyWidgetType} renderModule={TRAFFIC_CHART_RENDER_MODULE} renderComponent={TrafficChartRender as ComponentType<WidgetRenderProps<unknown>>} attributes={{
    reportParams: getDefaultQueryParams(false, 'last-24-hours')
  }} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...J.parameters?.docs?.source},description:{story:"An hourly range (`Last 24 hours`), where the page's interval control resolves\nto `hour`. `stats/visits` fills Views alone at that grain, so the other three\ntabs show a placeholder and, when selected, the reason — rather than a `0`\nthey cannot back up. The likes and comments request is skipped entirely.\n\nMounted through the dashboard harness rather than the close-up canvas: hour\nticks are the point of the story, and the canvas is too narrow to draw an\naxis at all.",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderTrafficChartOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/visits', 'loading');
    return () => setReportMockState('stats/visits', null);
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderTrafficChartOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/visits', 'error');
    return () => setReportMockState('stats/visits', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the queries — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderTrafficChartOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/visits', 'empty');
    return () => setReportMockState('stats/visits', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no points: the widget shows its empty state (the neutral
reports glyph and "No traffic data in this period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <TrafficChartDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    withComparison: true,
    ...DEFAULT_CHART_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean'
    },
    ...CHART_TYPE_ARG_TYPES
  }
}`,...Q.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithComparison`,`BarChart`,`BarChartWithComparison`,`Hourly`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{K as BarChart,q as BarChartWithComparison,W as Default,Z as Empty,X as Error,J as Hourly,Y as Loading,Q as WidgetDashboardWithWidget,G as WithComparison,$ as __namedExportsOrder,xe as default};