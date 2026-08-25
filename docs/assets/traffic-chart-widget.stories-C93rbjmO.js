import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{n as o,w as s}from"./build-module-CDRs4YxF.js";import{b as c,g as l}from"./hooks-Be--Zpgk.js";import{M as u,t as d}from"./src-B64ifip5.js";import{O as f,qt as p,t as m}from"./src-dGqZsgAd.js";import{D as h,S as ee,d as g,u as te,v as _}from"./chart-tooltip-BRWmaAad.js";import{r as v,t as ne}from"./metric-tabs-chart-skeleton-DF9XN3-o.js";import{K as re,X as y,q as ie}from"./report-metric-z1c7N8h3.js";import{t as ae}from"./widget-state-DxgLiyrA.js";import{C as oe,D as se,E as ce,S as le,T as b,b as ue,t as x,w as S,x as C}from"./src-CrPyFJLq.js";var de,w,fe=e((()=>{de=`_root_sp1nf_1`,w={root:de}})),T,pe,me,E=e((()=>{n(),o(),x(),T=[`hour`,`day`,`week`,`month`],pe=[{id:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`),counterpartId:`visitors`},{id:`visitors`,label:t(`Visitors`,`jetpack-premium-analytics-pkg`),counterpartId:`views`},{id:`comments`,label:t(`Comments`,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:t(`Likes`,`jetpack-premium-analytics-pkg`)}],me={icon:s,attributes:[g(T,{followsPageInterval:!0}),te()],example:{attributes:{chartType:`line`}}}}));function he(e,t,n){return{...e,stat_fields:t,period:n}}function ge(e,n){let r=n===`hour`,a=(0,i.useCallback)(e=>!r||D.has(e),[r]),o=(0,i.useMemo)(()=>he(e,r?`views`:`views,visitors`,n),[e,n,r]),s=(0,i.useMemo)(()=>he(e,`likes,comments`,n),[e,n]),c=f(o),l=f(s,{enabled:!r}),u=c.primary.data,d=c.comparison.data,p=c.hasComparison,m=l.primary.data,h=l.comparison.data,g=l.hasComparison,te=(0,i.useMemo)(()=>pe.map(e=>{let n=e.id===`views`||e.id===`visitors`;return{...ee({primary:n?u:m,comparison:n?d:h,hasComparison:n?p:g,field:e.id,label:e.label}),counterpartKey:`counterpartId`in e?e.counterpartId:void 0,...a(e.id)?{}:{unavailable:t(`Hourly data isn't available for this metric.`,`jetpack-premium-analytics-pkg`)}}}),[a,u,d,p,m,h,g]),{refetch:_}=c,{refetch:v}=l,ne=(0,i.useCallback)(()=>{_(),v()},[_,v]),re=c.isError&&!u?.data?.length||l.isError&&!m?.data?.length;return{metrics:te,isLoading:c.isLoading||l.isLoading,isFetching:c.isFetching||l.isFetching,isError:re,refetch:ne}}var D,_e=e((()=>{m(),a(),n(),E(),x(),D=new Set([`views`])}));function ve({granularity:e,granularityPickedFor:n,chartType:r}){let{reportParams:i}=c(),a=_({picked:e,pickedFor:n,interval:i.interval,allowed:h(T,i)}),{metrics:o,isLoading:s,isFetching:l,isError:d,refetch:f}=ge(i,a),p=t(`Traffic metric`,`jetpack-premium-analytics-pkg`),m=o.filter(e=>!e.unavailable);return(0,k.jsx)(`div`,{className:w.root,children:(0,k.jsx)(ae,{isLoading:s,isFetching:l,isError:d,isEmpty:m.length>0&&m.every(e=>e.current.length===0),error:{description:t(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:f}]},empty:{icon:u,description:t(`No traffic data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,k.jsx)(ne,{}),children:(0,k.jsx)(v,{metrics:o,dataFormat:A,chartType:r,groupLabel:p,tickResolution:a,pointsAreWallClocks:!0})})})}function O({attributes:e={},setError:t}){return(0,k.jsx)(l,{attributes:e,setError:t,options:{from:`/`},children:(0,k.jsx)(ve,{granularity:e.granularity,granularityPickedFor:e.granularityPickedFor,chartType:e.chartType})})}var k,A,ye=e((()=>{x(),d(),n(),fe(),_e(),E(),k=r(),A={type:`number`,options:{useMultipliers:!0,decimals:0}}})),j,M,N,P,F,I,L,be=e((()=>{j=`jpa/traffic-chart`,M=`Traffic summary`,N=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,P={content:`A summary of your site's views, visitors, likes, and comments.`},F=`traffic`,I=`framed`,L={name:j,title:M,description:N,help:P,category:F,presentation:I}}));function R({withComparison:e,chartType:t}){return(0,B.jsx)(O,{attributes:{reportParams:p(e),chartType:t}})}function z(e){return(0,B.jsx)(O,{attributes:{reportParams:p(!1,e)}})}function xe({withComparison:e,chartType:t,...n}){return(0,B.jsx)(b,{...n,widgetType:H,renderModule:V,renderComponent:O,attributes:{reportParams:p(e),chartType:t}})}var B,V,H,U,W,Se,G,K,q,J,Y,X,Z,Q,$,Ce;e((()=>{m(),ce(),oe(),ue(),re(),ye(),E(),be(),B=r(),ie(),V=`storybook/traffic-chart`,H=le(L,me),U={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},W={chartType:`line`},Se={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...U},parameters:{docs:{description:{component:"Traffic over the selected period as selectable metric tabs — Views, Visitors, Likes, and Comments — over a comparative chart. The date range and comparison come from the dashboard controls. \"Group by\" is the `granularity` attribute and \"Chart type\" the `chartType` attribute (both `relevance: 'high'`, so the host renders them in the widget header). The bucket opens on whatever the page's interval control resolves to, clamped to one the chart can draw; changing it redraws this widget alone and leaves the page's interval untouched, and it goes back to following the page the next time that interval moves. Which metric is plotted is the chart's own tab selection. When comparison is on, each tab shows its period-over-period delta and the previous period is overlaid — as a same-colour dashed line for `line`, or as the translucent shadow bar behind each bar for `bar`. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; the likes and comments request is skipped at the hourly grain, which cannot fill either. Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`."}}}},G={render:R,args:{withComparison:!1,...W},decorators:[C]},K={render:R,args:{withComparison:!0,...W},decorators:[C]},q={render:R,args:{withComparison:!1,...W,chartType:`bar`},decorators:[C]},J={render:R,args:{withComparison:!0,...W,chartType:`bar`},decorators:[C]},Y={render:e=>(0,B.jsx)(b,{...e,widgetType:H,renderModule:V,renderComponent:O,attributes:{reportParams:p(!1,`last-24-hours`)}}),args:{...S},argTypes:{...se}},X={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(y(`stats/visits`,`loading`),()=>y(`stats/visits`,null))},Z={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(y(`stats/visits`,`error`),()=>y(`stats/visits`,null))},Q={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(y(`stats/visits`,`empty`),()=>y(`stats/visits`,null))},$={render:e=>(0,B.jsx)(xe,{...e}),args:{...S,withComparison:!0,...W},argTypes:{...se,withComparison:{control:`boolean`},...U}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderTrafficChart,
  args: {
    withComparison: false,
    ...DEFAULT_CHART_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...G.parameters?.docs?.source},description:{story:`The widget on its own, current period only.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderTrafficChart,
  args: {
    withComparison: true,
    ...DEFAULT_CHART_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`Same close-up with the period-over-period delta and previous-period overlay.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderTrafficChart,
  args: {
    withComparison: false,
    ...DEFAULT_CHART_ARGS,
    chartType: 'bar'
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:"The same widget drawn as bars — the `chartType` attribute set to `bar`.",...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderTrafficChart,
  args: {
    withComparison: true,
    ...DEFAULT_CHART_ARGS,
    chartType: 'bar'
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:`Bars with comparison on: the previous period renders as the translucent
shadow bar behind each current-period bar.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: args => <WidgetDashboardWithWidgetStory {...args} widgetType={storyWidgetType} renderModule={TRAFFIC_CHART_RENDER_MODULE} renderComponent={TrafficChartRender as ComponentType<WidgetRenderProps<unknown>>} attributes={{
    reportParams: getDefaultQueryParams(false, 'last-24-hours')
  }} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes
  }
}`,...Y.parameters?.docs?.source},description:{story:"An hourly range (`Last 24 hours`), where the page's interval control resolves\nto `hour`. `stats/visits` fills Views alone at that grain, so the other three\ntabs show a placeholder and, when selected, the reason — rather than a `0`\nthey cannot back up. The likes and comments request is skipped entirely.\n\nMounted through the dashboard harness rather than the close-up canvas: hour\nticks are the point of the story, and the canvas is too narrow to draw an\naxis at all.",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderTrafficChartOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/visits', 'loading');
    return () => setReportMockState('stats/visits', null);
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderTrafficChartOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/visits', 'error');
    return () => setReportMockState('stats/visits', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the queries — still mocked as failing while this story is active).`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => renderTrafficChartOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/visits', 'empty');
    return () => setReportMockState('stats/visits', null);
  }
}`,...Q.parameters?.docs?.source},description:{story:`Resolved with no points: the widget shows its empty state (the neutral
reports glyph and "No traffic data in this period.").`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...$.parameters?.docs?.description}}},Ce=[`Default`,`WithComparison`,`BarChart`,`BarChartWithComparison`,`Hourly`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as BarChart,J as BarChartWithComparison,G as Default,Q as Empty,Z as Error,Y as Hourly,X as Loading,$ as WidgetDashboardWithWidget,K as WithComparison,Ce as __namedExportsOrder,Se as default};