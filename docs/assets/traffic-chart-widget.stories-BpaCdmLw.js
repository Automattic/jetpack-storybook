import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{C as o,Uu as s,ju as c,t as l}from"./build-module-2iv4IIRq.js";import{C as u,St as ee,m as d,v as f,vt as p,y as m}from"./hooks-D2-uOzcc.js";import{M as h,t as g}from"./src-C-E2d-Lb.js";import{$t as _,I as v,r as te,t as y}from"./src-0ge7d6kt.js";import{r as b,t as x}from"./metric-tabs-chart-skeleton-DDrIswPR.js";import{c as S,i as ne,r as re}from"./register-report-mocks-DAHzORiq.js";import{t as ie}from"./widget-state-BlFCjv4l.js";import{t as C}from"./src-Ddik3icB.js";import{a as ae,d as oe,f as se,h as ce,i as le,m as ue,n as de,p as fe,r as w,u as pe}from"./with-widget-canvas-q45aoI9y.js";import{n as me,r as he,t as ge}from"./with-site-time-zone-ngtW_VDw.js";var _e,ve,ye=t((()=>{_e=`_root_sp1nf_1`,ve={root:_e}})),T,E,D,O=t((()=>{i(),l(),C(),T=[`hour`,`day`,`week`,`month`],E=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),counterpartId:`visitors`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`),counterpartId:`views`},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`)}],D={icon:o,attributes:[p()],example:{attributes:{chartType:`line`}}}}));function k(e,t,n){return{...e,stat_fields:t,period:n}}function be(e,t){let n=t===`hour`,i=(0,s.useCallback)(e=>!n||A.has(e),[n]),a=(0,s.useMemo)(()=>k(e,n?`views`:`views,visitors`,t),[e,t,n]),o=(0,s.useMemo)(()=>k(e,`likes,comments`,t),[e,t]),c=v(a),l=v(o,{enabled:!n}),u=c.primary.data,d=c.comparison.data,f=c.hasComparison,p=c.timezone,m=l.primary.data,h=l.comparison.data,g=l.hasComparison,_=l.timezone,te=(0,s.useMemo)(()=>E.map(e=>{let t=e.id===`views`||e.id===`visitors`;return{...ee({primary:t?u:m,comparison:t?d:h,hasComparison:t?f:g,field:e.id,label:e.label,zone:t?p:_}),counterpartKey:`counterpartId`in e?e.counterpartId:void 0,...i(e.id)?{}:{unavailable:r(`Hourly data isn't available for this metric.`,`jetpack-premium-analytics-pkg`)}}}),[i,u,d,f,p,m,h,g,_]),{refetch:y}=c,{refetch:b}=l,x=(0,s.useCallback)(()=>{y(),b()},[y,b]),S=c.isError&&!u?.data?.length||l.isError&&!m?.data?.length;return{metrics:te,isLoading:c.isLoading||l.isLoading,isFetching:c.isFetching||l.isFetching,isError:S,refetch:x}}var A,xe=t((()=>{y(),c(),i(),O(),C(),A=new Set([`views`])}));function Se({chartType:e}){let{reportParams:t}=f(),n=te(t.interval,T),{drillDown:i}=u(),a=(0,M.useCallback)(e=>i(e,n),[i,n]),{metrics:o,isLoading:s,isFetching:c,isError:l,refetch:ee}=be(t,n),d=r(`Traffic metric`,`jetpack-premium-analytics-pkg`),p=o.filter(e=>!e.unavailable);return(0,N.jsx)(`div`,{className:ve.root,children:(0,N.jsx)(ie,{isLoading:s,isFetching:c,isError:l,isEmpty:p.length>0&&p.every(e=>e.current.length===0),error:{description:r(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:ee}]},empty:{icon:h,description:r(`No traffic data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,N.jsx)(x,{}),children:(0,N.jsx)(b,{metrics:o,dataFormat:P,chartType:e,groupLabel:d,tickResolution:n,onDatumClick:a})})})}function j({attributes:e={},setError:t}){return(0,N.jsx)(d,{attributes:e,setError:t,options:{from:`/`},children:(0,N.jsx)(Se,{chartType:e.chartType})})}var M,N,P,Ce=t((()=>{C(),g(),m(),i(),M=e(n(),1),ye(),xe(),O(),N=a(),P={type:`number`,options:{useMultipliers:!0,decimals:0}}})),F,I,we,Te,Ee,De,Oe,ke=t((()=>{F=`jpa/traffic-chart`,I=`Traffic summary`,we=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,Te={content:`A summary of your site's views, visitors, likes, and comments. The Visitors total is a per-period sum, not a unique count.`},Ee=`traffic`,De=`framed`,Oe={name:F,title:I,description:we,help:Te,category:Ee,presentation:De}}));function L({withComparison:e,chartType:t}){return(0,z.jsx)(j,{attributes:{reportParams:_(e),chartType:t}})}function R(e){return(0,z.jsx)(j,{attributes:{reportParams:_(!1,e)}})}function Ae({withComparison:e,chartType:t,...n}){return(0,z.jsx)(oe,{...n,widgetType:V,renderModule:B,renderComponent:j,attributes:{reportParams:_(e),chartType:t}})}var z,B,V,H,U,je,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{y(),se(),ae(),ue(),de(),ge(),re(),Ce(),O(),ke(),z=a(),ne(),B=`storybook/traffic-chart`,V=le(Oe,D),H={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},U={chartType:`line`},je={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:j,tags:[`autodocs`],decorators:[ce,he],argTypes:{...me,withComparison:{control:`boolean`},...H},parameters:{docs:{description:{component:"Traffic over the selected period as selectable metric tabs — Views, Visitors, Likes, and Comments — over a comparative chart. The date range, comparison, and bucket size come from the dashboard controls: the bucket is whatever the page's interval control resolves to, clamped to one the chart can draw. \"Chart type\" is the `chartType` attribute (`relevance: 'high'`, so the host renders it in the widget header). Which metric is plotted is the chart's own tab selection. When comparison is on, each tab shows its period-over-period delta and the previous period is overlaid — as a same-colour dashed line for `line`, or as the translucent shadow bar behind each bar for `bar`. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; the likes and comments request is skipped at the hourly grain, which cannot fill either. Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`."}}}},W={render:L,args:{withComparison:!1,...U},decorators:[w]},G={render:L,args:{withComparison:!0,...U},decorators:[w]},K={render:L,args:{withComparison:!1,...U,chartType:`bar`},decorators:[w]},q={render:L,args:{withComparison:!0,...U,chartType:`bar`},decorators:[w]},J={render:e=>(0,z.jsx)(oe,{...e,widgetType:V,renderModule:B,renderComponent:j,attributes:{reportParams:_(!1,`last-24-hours`)}}),args:{...pe},argTypes:{...fe}},Y={render:()=>R(`last-90-days`),tags:[`!autodocs`],decorators:[w],beforeEach:()=>(S(`stats/visits`,`loading`),()=>S(`stats/visits`,null))},X={render:()=>R(`last-7-days`),tags:[`!autodocs`],decorators:[w],beforeEach:()=>(S(`stats/visits`,`error`),()=>S(`stats/visits`,null))},Z={render:()=>R(`last-365-days`),tags:[`!autodocs`],decorators:[w],beforeEach:()=>(S(`stats/visits`,`empty`),()=>S(`stats/visits`,null))},Q={render:e=>(0,z.jsx)(Ae,{...e}),args:{...pe,withComparison:!0,...U},argTypes:{...fe,withComparison:{control:`boolean`},...H}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithComparison`,`BarChart`,`BarChartWithComparison`,`Hourly`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{K as BarChart,q as BarChartWithComparison,W as Default,Z as Empty,X as Error,J as Hourly,Y as Loading,Q as WidgetDashboardWithWidget,G as WithComparison,$ as __namedExportsOrder,je as default};