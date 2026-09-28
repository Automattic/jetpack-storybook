import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,r as i,t as a}from"./build-module-2QZQpBH2.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{C as s,Vu as c,ku as l,t as u}from"./build-module-DNhkEVJn.js";import{C as d,D as f,m as p,v as m}from"./hooks-CS6WcTg2.js";import{$t as h,N as ee,r as g,t as _}from"./src-DidH0Ups.js";import{A as v,P as te}from"./helpers-CGw5X-Zt.js";import{t as y}from"./chart-empty-state-DLv68dcH.js";import{r as b,t as x}from"./metric-tabs-chart-skeleton-vRuQX_9B.js";import{n as S,r as ne,s as C}from"./register-report-mocks-B8y1U4H0.js";import{t as re}from"./widget-state-BY_IoQrU.js";import{t as w}from"./src-CRL21vnT.js";import{a as ie,d as ae,f as oe,h as se,i as ce,m as le,n as ue,p as de,r as T,u as fe}from"./with-widget-canvas-BOvP4eJq.js";import{n as pe,r as me,t as he}from"./with-site-time-zone-ngtW_VDw.js";var ge,_e,ve=t((()=>{ge=`_root_sp1nf_1`,_e={root:ge}})),E,D,O,k=t((()=>{a(),u(),w(),E=[`hour`,`day`,`week`,`month`],D=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s View`,`%s Views`,e,`jetpack-premium-analytics-pkg`),counterpartId:`visitors`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Visitor`,`%s Visitors`,e,`jetpack-premium-analytics-pkg`),counterpartId:`views`},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Comment`,`%s Comments`,e,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Like`,`%s Likes`,e,`jetpack-premium-analytics-pkg`)}],O={icon:s,attributes:[v()],example:{attributes:{chartType:`line`}}}}));function A(e,t,n){return{...e,stat_fields:t,period:n}}function ye(e,t){let n=t===`hour`,i=(0,c.useCallback)(e=>!n||j.has(e),[n]),a=(0,c.useMemo)(()=>A(e,n?`views`:`views,visitors`,t),[e,t,n]),o=(0,c.useMemo)(()=>A(e,`likes,comments`,t),[e,t]),s=ee(a),l=ee(o,{enabled:!n}),u=s.primary.data,d=s.comparison.data,f=s.hasComparison,p=s.timezone,m=l.primary.data,h=l.comparison.data,g=l.hasComparison,_=l.timezone,v=(0,c.useMemo)(()=>D.map(e=>{let t=e.id===`views`||e.id===`visitors`;return{...te({primary:t?u:m,comparison:t?d:h,hasComparison:t?f:g,field:e.id,label:e.label,countLabel:e.countLabel,zone:t?p:_}),counterpartKey:`counterpartId`in e?e.counterpartId:void 0,...i(e.id)?{}:{unavailable:r(`Hourly data isn't available for this metric.`,`jetpack-premium-analytics-pkg`)}}}),[i,u,d,f,p,m,h,g,_]),{refetch:y}=s,{refetch:b}=l,x=(0,c.useCallback)(()=>{y(),b()},[y,b]),S=s.isError&&!u?.data?.length||l.isError&&!m?.data?.length;return{metrics:v,isLoading:s.isLoading||l.isLoading,isFetching:s.isFetching||l.isFetching,isError:S,refetch:x}}var j,be=t((()=>{_(),l(),a(),k(),w(),j=new Set([`views`])}));function xe({chartType:e}){let{reportParams:t}=m(),n=g(t.interval,E),{drillDown:i}=f(),a=(0,N.useCallback)(e=>i(e,n),[i,n]),{metrics:o,isLoading:s,isFetching:c,isError:l,refetch:u}=ye(t,n),d=r(`Traffic metric`,`jetpack-premium-analytics-pkg`);return(0,P.jsx)(`div`,{className:_e.root,children:(0,P.jsx)(re,{isLoading:s,isFetching:c,isError:l,isEmpty:!1,error:{description:r(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},renderLoading:(0,P.jsx)(x,{}),children:(0,P.jsx)(b,{metrics:o,dataFormat:F,chartType:e,groupLabel:d,tickResolution:n,onDatumClick:a,empty:(0,P.jsx)(y,{})})})})}function M({attributes:e={},setError:t}){return(0,P.jsx)(p,{attributes:e,setError:t,options:{from:`/`},children:(0,P.jsx)(xe,{chartType:e.chartType})})}var N,P,F,Se=t((()=>{w(),d(),a(),N=e(n(),1),ve(),be(),k(),P=o(),F={type:`number`,options:{useMultipliers:!0,decimals:0}}})),I,Ce,we,Te,Ee,De,Oe,ke=t((()=>{I=`jpa/traffic-chart`,Ce=`Traffic summary`,we=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,Te={content:`A summary of your site's views, visitors, likes, and comments. The Visitors total is a per-period sum, not a unique count.`},Ee=`traffic`,De=`framed`,Oe={name:I,title:Ce,description:we,help:Te,category:Ee,presentation:De}}));function L({withComparison:e,chartType:t}){return(0,z.jsx)(M,{attributes:{reportParams:h(e),chartType:t}})}function R(e){return(0,z.jsx)(M,{attributes:{reportParams:h(!1,e)}})}function Ae({withComparison:e,chartType:t,...n}){return(0,z.jsx)(ae,{...n,widgetType:V,renderModule:B,renderComponent:M,attributes:{reportParams:h(e),chartType:t}})}var z,B,V,H,U,je,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{_(),oe(),ie(),le(),ue(),he(),S(),Se(),k(),ke(),z=o(),ne(),B=`storybook/traffic-chart`,V=ce(Oe,O),H={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},U={chartType:`line`},je={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:M,tags:[`autodocs`],decorators:[se,me],argTypes:{...pe,withComparison:{control:`boolean`},...H},parameters:{docs:{description:{component:"Traffic over the selected period as selectable metric tabs — Views, Visitors, Likes, and Comments — over a comparative chart. The date range, comparison, and bucket size come from the dashboard controls: the bucket is whatever the page's interval control resolves to, clamped to one the chart can draw. \"Chart type\" is the `chartType` attribute (`relevance: 'high'`, so the host renders it in the widget header). Which metric is plotted is the chart's own tab selection. When comparison is on, each tab shows its period-over-period delta and the previous period is overlaid — as a same-colour dashed line for `line`, or as the translucent shadow bar behind each bar for `bar`. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; the likes and comments request is skipped at the hourly grain, which cannot fill either. Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`."}}}},W={render:L,args:{withComparison:!1,...U},decorators:[T]},G={render:L,args:{withComparison:!0,...U},decorators:[T]},K={render:L,args:{withComparison:!1,...U,chartType:`bar`},decorators:[T]},q={render:L,args:{withComparison:!0,...U,chartType:`bar`},decorators:[T]},J={render:e=>(0,z.jsx)(ae,{...e,widgetType:V,renderModule:B,renderComponent:M,attributes:{reportParams:h(!1,`last-24-hours`)}}),args:{...fe},argTypes:{...de}},Y={render:()=>R(`last-90-days`),tags:[`!autodocs`],decorators:[T],beforeEach:()=>(C(`stats/visits`,`loading`),()=>C(`stats/visits`,null))},X={render:()=>R(`last-7-days`),tags:[`!autodocs`],decorators:[T],beforeEach:()=>(C(`stats/visits`,`error`),()=>C(`stats/visits`,null))},Z={render:()=>R(`last-365-days`),tags:[`!autodocs`],decorators:[T],beforeEach:()=>(C(`stats/visits`,`empty`),()=>C(`stats/visits`,null))},Q={render:e=>(0,z.jsx)(Ae,{...e}),args:{...fe,withComparison:!0,...U},argTypes:{...de,withComparison:{control:`boolean`},...H}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no points: the tabs stay at zero and the plot shows the
no-results message in place of a flat line.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithComparison`,`BarChart`,`BarChartWithComparison`,`Hourly`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{K as BarChart,q as BarChartWithComparison,W as Default,Z as Empty,X as Error,J as Hourly,Y as Loading,Q as WidgetDashboardWithWidget,G as WithComparison,$ as __namedExportsOrder,je as default};