import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{C as o,Uu as s,ju as c,t as l}from"./build-module-2iv4IIRq.js";import{Q as u,b as d,dt as f,g as p,gt as m,st as h}from"./hooks-M-E34Ffd.js";import{M as g,t as _}from"./src-C-E2d-Lb.js";import{R as v,a as y,en as b,r as x}from"./date-period-dropdown-B7cnUgNF.js";import{r as S,t as C}from"./metric-tabs-chart-skeleton-CvNL_vJE.js";import{i as w,r as ee,s as T}from"./register-report-mocks-B7i-hB1u.js";import{t as te}from"./widget-state-m68sfvpV.js";import{t as E}from"./src-CeJib-HQ.js";import{a as ne,c as re,d as ie,i as ae,l as oe,n as se,o as ce,r as D,s as le,u as ue}from"./with-widget-canvas-DKFoIKhQ.js";import{n as de,r as fe,t as pe}from"./with-site-time-zone-ngtW_VDw.js";var me,he,ge=t((()=>{me=`_root_sp1nf_1`,he={root:me}})),_e,O,k,A=t((()=>{i(),l(),E(),_e=[`hour`,`day`,`week`,`month`],O=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),counterpartId:`visitors`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`),counterpartId:`views`},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`)}],k={icon:o,attributes:[u()],example:{attributes:{chartType:`line`}}}}));function j(e,t,n){return{...e,stat_fields:t,period:n}}function ve(e,t){let n=t===`hour`,i=(0,s.useCallback)(e=>!n||M.has(e),[n]),a=(0,s.useMemo)(()=>j(e,n?`views`:`views,visitors`,t),[e,t,n]),o=(0,s.useMemo)(()=>j(e,`likes,comments`,t),[e,t]),c=v(a),l=v(o,{enabled:!n}),u=c.primary.data,d=c.comparison.data,f=c.hasComparison,p=c.timezone,h=l.primary.data,g=l.comparison.data,_=l.hasComparison,y=l.timezone,b=(0,s.useMemo)(()=>O.map(e=>{let t=e.id===`views`||e.id===`visitors`;return{...m({primary:t?u:h,comparison:t?d:g,hasComparison:t?f:_,field:e.id,label:e.label,zone:t?p:y}),counterpartKey:`counterpartId`in e?e.counterpartId:void 0,...i(e.id)?{}:{unavailable:r(`Hourly data isn't available for this metric.`,`jetpack-premium-analytics-pkg`)}}}),[i,u,d,f,p,h,g,_,y]),{refetch:x}=c,{refetch:S}=l,C=(0,s.useCallback)(()=>{x(),S()},[x,S]),w=c.isError&&!u?.data?.length||l.isError&&!h?.data?.length;return{metrics:b,isLoading:c.isLoading||l.isLoading,isFetching:c.isFetching||l.isFetching,isError:w,refetch:C}}var M,ye=t((()=>{x(),c(),i(),A(),E(),M=new Set([`views`])}));function be({chartType:e}){let{reportParams:t}=d(),n=y(t.interval,_e),{drillDown:i}=f(),a=(0,P.useCallback)(e=>i(e,n),[i,n]),{metrics:o,isLoading:s,isFetching:c,isError:l,refetch:u}=ve(t,n),p=r(`Traffic metric`,`jetpack-premium-analytics-pkg`),m=o.filter(e=>!e.unavailable);return(0,F.jsx)(`div`,{className:he.root,children:(0,F.jsx)(te,{isLoading:s,isFetching:c,isError:l,isEmpty:m.length>0&&m.every(e=>e.current.length===0),error:{description:r(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},empty:{icon:g,description:r(`No traffic data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,F.jsx)(C,{}),children:(0,F.jsx)(S,{metrics:o,dataFormat:I,chartType:e,groupLabel:p,tickResolution:n,onDatumClick:a})})})}function N({attributes:e={},setError:t}){return(0,F.jsx)(p,{attributes:e,setError:t,options:{from:`/`},children:(0,F.jsx)(be,{chartType:e.chartType})})}var P,F,I,xe=t((()=>{E(),_(),h(),i(),P=e(n(),1),ge(),ye(),A(),F=a(),I={type:`number`,options:{useMultipliers:!0,decimals:0}}})),L,Se,Ce,we,Te,Ee,De,Oe=t((()=>{L=`jpa/traffic-chart`,Se=`Traffic summary`,Ce=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,we={content:`A summary of your site's views, visitors, likes, and comments. The Visitors total is a per-period sum, not a unique count.`},Te=`traffic`,Ee=`framed`,De={name:L,title:Se,description:Ce,help:we,category:Te,presentation:Ee}}));function R({withComparison:e,chartType:t}){return(0,B.jsx)(N,{attributes:{reportParams:b(e),chartType:t}})}function z(e){return(0,B.jsx)(N,{attributes:{reportParams:b(!1,e)}})}function ke({withComparison:e,chartType:t,...n}){return(0,B.jsx)(le,{...n,widgetType:H,renderModule:V,renderComponent:N,attributes:{reportParams:b(e),chartType:t}})}var B,V,H,U,W,Ae,G,K,q,J,Y,X,Z,Q,$,je;t((()=>{x(),re(),ne(),ue(),se(),pe(),ee(),xe(),A(),Oe(),B=a(),w(),V=`storybook/traffic-chart`,H=ae(De,k),U={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},W={chartType:`line`},Ae={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:N,tags:[`autodocs`],decorators:[ie,fe],argTypes:{...de,withComparison:{control:`boolean`},...U},parameters:{docs:{description:{component:"Traffic over the selected period as selectable metric tabs — Views, Visitors, Likes, and Comments — over a comparative chart. The date range, comparison, and bucket size come from the dashboard controls: the bucket is whatever the page's interval control resolves to, clamped to one the chart can draw. \"Chart type\" is the `chartType` attribute (`relevance: 'high'`, so the host renders it in the widget header). Which metric is plotted is the chart's own tab selection. When comparison is on, each tab shows its period-over-period delta and the previous period is overlaid — as a same-colour dashed line for `line`, or as the translucent shadow bar behind each bar for `bar`. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; the likes and comments request is skipped at the hourly grain, which cannot fill either. Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`."}}}},G={render:R,args:{withComparison:!1,...W},decorators:[D]},K={render:R,args:{withComparison:!0,...W},decorators:[D]},q={render:R,args:{withComparison:!1,...W,chartType:`bar`},decorators:[D]},J={render:R,args:{withComparison:!0,...W,chartType:`bar`},decorators:[D]},Y={render:e=>(0,B.jsx)(le,{...e,widgetType:H,renderModule:V,renderComponent:N,attributes:{reportParams:b(!1,`last-24-hours`)}}),args:{...ce},argTypes:{...oe}},X={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[D],beforeEach:()=>(T(`stats/visits`,`loading`),()=>T(`stats/visits`,null))},Z={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[D],beforeEach:()=>(T(`stats/visits`,`error`),()=>T(`stats/visits`,null))},Q={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[D],beforeEach:()=>(T(`stats/visits`,`empty`),()=>T(`stats/visits`,null))},$={render:e=>(0,B.jsx)(ke,{...e}),args:{...ce,withComparison:!0,...W},argTypes:{...oe,withComparison:{control:`boolean`},...U}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...$.parameters?.docs?.description}}},je=[`Default`,`WithComparison`,`BarChart`,`BarChartWithComparison`,`Hourly`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as BarChart,J as BarChartWithComparison,G as Default,Q as Empty,Z as Error,Y as Hourly,X as Loading,$ as WidgetDashboardWithWidget,K as WithComparison,je as __namedExportsOrder,Ae as default};