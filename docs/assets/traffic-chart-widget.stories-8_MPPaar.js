import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DyKOxfM8.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{_ as o,t as s}from"./build-module-CbwHEf9N.js";import{n as c,w as l}from"./build-module-CDRs4YxF.js";import{C as u,b as d,g as f,x as p}from"./hooks-DawXPYo7.js";import{M as m,t as h}from"./src-tFLTgNYy.js";import{j as ee,qt as g,t as _}from"./src-qrd82Fby.js";import{E as v,u as te,x as ne}from"./chart-tooltip-DIUlJYQa.js";import{r as re,t as ie}from"./metric-tabs-chart-skeleton-CklPyp8h.js";import{G as ae,K as oe,Y as y}from"./report-metric-DPrG72w1.js";import{t as se}from"./widget-state-DlUxiLxr.js";import{C as ce,D as le,E as ue,O as de,S as fe,T as b,b as pe,k as me,t as x,w as he,x as S}from"./src-BflDMZk1.js";var C,w,ge=t((()=>{C=`_root_sp1nf_1`,w={root:C}})),_e,ve,ye,T=t((()=>{i(),c(),x(),_e=[`hour`,`day`,`week`,`month`],ve=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),counterpartId:`visitors`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`),counterpartId:`views`},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`)}],ye={icon:l,attributes:[te()],example:{attributes:{chartType:`line`}}}}));function E(e,t,n){return{...e,stat_fields:t,period:n}}function be(e,t){let n=t===`hour`,i=(0,o.useCallback)(e=>!n||D.has(e),[n]),a=(0,o.useMemo)(()=>E(e,n?`views`:`views,visitors`,t),[e,t,n]),s=(0,o.useMemo)(()=>E(e,`likes,comments`,t),[e,t]),c=ee(a),l=ee(s,{enabled:!n}),u=c.primary.data,d=c.comparison.data,f=c.hasComparison,p=l.primary.data,m=l.comparison.data,h=l.hasComparison,g=(0,o.useMemo)(()=>ve.map(e=>{let t=e.id===`views`||e.id===`visitors`;return{...ne({primary:t?u:p,comparison:t?d:m,hasComparison:t?f:h,field:e.id,label:e.label}),counterpartKey:`counterpartId`in e?e.counterpartId:void 0,...i(e.id)?{}:{unavailable:r(`Hourly data isn't available for this metric.`,`jetpack-premium-analytics-pkg`)}}}),[i,u,d,f,p,m,h]),{refetch:_}=c,{refetch:v}=l,te=(0,o.useCallback)(()=>{_(),v()},[_,v]),re=c.isError&&!u?.data?.length||l.isError&&!p?.data?.length;return{metrics:g,isLoading:c.isLoading||l.isLoading,isFetching:c.isFetching||l.isFetching,isError:re,refetch:te}}var D,xe=t((()=>{_(),s(),i(),T(),x(),D=new Set([`views`])}));function Se({chartType:e}){let{reportParams:t}=d(),n=v(t.interval,_e),{drillDown:i}=u(),a=(0,k.useCallback)(e=>i(e,n),[i,n]),{metrics:o,isLoading:s,isFetching:c,isError:l,refetch:f}=be(t,n),p=r(`Traffic metric`,`jetpack-premium-analytics-pkg`),h=o.filter(e=>!e.unavailable);return(0,A.jsx)(`div`,{className:w.root,children:(0,A.jsx)(se,{isLoading:s,isFetching:c,isError:l,isEmpty:h.length>0&&h.every(e=>e.current.length===0),error:{description:r(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:f}]},empty:{icon:m,description:r(`No traffic data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,A.jsx)(ie,{}),children:(0,A.jsx)(re,{metrics:o,dataFormat:j,chartType:e,groupLabel:p,tickResolution:n,pointsAreWallClocks:!0,onDatumClick:a})})})}function O({attributes:e={},setError:t}){return(0,A.jsx)(f,{attributes:e,setError:t,options:{from:`/`},children:(0,A.jsx)(Se,{chartType:e.chartType})})}var k,A,j,Ce=t((()=>{x(),h(),p(),i(),k=e(n(),1),ge(),xe(),T(),A=a(),j={type:`number`,options:{useMultipliers:!0,decimals:0}}})),M,N,P,F,I,L,we,Te=t((()=>{M=`jpa/traffic-chart`,N=`Traffic summary`,P=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,F={content:`A summary of your site's views, visitors, likes, and comments.`},I=`traffic`,L=`framed`,we={name:M,title:N,description:P,help:F,category:I,presentation:L}}));function R({withComparison:e,chartType:t}){return(0,B.jsx)(O,{attributes:{reportParams:g(e),chartType:t}})}function z(e){return(0,B.jsx)(O,{attributes:{reportParams:g(!1,e)}})}function Ee({withComparison:e,chartType:t,...n}){return(0,B.jsx)(b,{...n,widgetType:H,renderModule:V,renderComponent:O,attributes:{reportParams:g(e),chartType:t}})}var B,V,H,U,W,De,G,K,q,J,Y,X,Z,Q,$,Oe;t((()=>{_(),ue(),ce(),de(),pe(),ae(),Ce(),T(),Te(),B=a(),oe(),V=`storybook/traffic-chart`,H=fe(we,ye),U={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},W={chartType:`line`},De={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:O,tags:[`autodocs`],decorators:[me],argTypes:{withComparison:{control:`boolean`},...U},parameters:{docs:{description:{component:"Traffic over the selected period as selectable metric tabs — Views, Visitors, Likes, and Comments — over a comparative chart. The date range, comparison, and bucket size come from the dashboard controls: the bucket is whatever the page's interval control resolves to, clamped to one the chart can draw. \"Chart type\" is the `chartType` attribute (`relevance: 'high'`, so the host renders it in the widget header). Which metric is plotted is the chart's own tab selection. When comparison is on, each tab shows its period-over-period delta and the previous period is overlaid — as a same-colour dashed line for `line`, or as the translucent shadow bar behind each bar for `bar`. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; the likes and comments request is skipped at the hourly grain, which cannot fill either. Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`."}}}},G={render:R,args:{withComparison:!1,...W},decorators:[S]},K={render:R,args:{withComparison:!0,...W},decorators:[S]},q={render:R,args:{withComparison:!1,...W,chartType:`bar`},decorators:[S]},J={render:R,args:{withComparison:!0,...W,chartType:`bar`},decorators:[S]},Y={render:e=>(0,B.jsx)(b,{...e,widgetType:H,renderModule:V,renderComponent:O,attributes:{reportParams:g(!1,`last-24-hours`)}}),args:{...he},argTypes:{...le}},X={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(y(`stats/visits`,`loading`),()=>y(`stats/visits`,null))},Z={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(y(`stats/visits`,`error`),()=>y(`stats/visits`,null))},Q={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(y(`stats/visits`,`empty`),()=>y(`stats/visits`,null))},$={render:e=>(0,B.jsx)(Ee,{...e}),args:{...he,withComparison:!0,...W},argTypes:{...le,withComparison:{control:`boolean`},...U}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...$.parameters?.docs?.description}}},Oe=[`Default`,`WithComparison`,`BarChart`,`BarChartWithComparison`,`Hourly`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as BarChart,J as BarChartWithComparison,G as Default,Q as Empty,Z as Error,Y as Hourly,X as Loading,$ as WidgetDashboardWithWidget,K as WithComparison,Oe as __namedExportsOrder,De as default};