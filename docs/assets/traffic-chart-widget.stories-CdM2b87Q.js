import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{C as o,Uu as s,ju as c,t as l}from"./build-module-2iv4IIRq.js";import{$ as u,_t as ee,ct as d,ft as f,m as p,v as m}from"./hooks-BJxRUOt9.js";import{M as h,t as g}from"./src-C-E2d-Lb.js";import{R as te,a as _,r as v,tn as y}from"./date-period-dropdown-CVjEXpo_.js";import{r as b,t as x}from"./metric-tabs-chart-skeleton-DOwF1CCT.js";import{c as S,i as ne,r as re}from"./register-report-mocks-CQIxSdXf.js";import{t as ie}from"./widget-state-CvBoIkua.js";import{t as C}from"./src-BOq6qKHJ.js";import{a as ae,c as oe,d as se,i as ce,l as le,n as ue,o as de,r as w,s as fe,u as pe}from"./with-widget-canvas-CGGdJm6r.js";import{n as me,r as he,t as ge}from"./with-site-time-zone-ngtW_VDw.js";var _e,ve,ye=t((()=>{_e=`_root_sp1nf_1`,ve={root:_e}})),T,E,D,O=t((()=>{i(),l(),C(),T=[`hour`,`day`,`week`,`month`],E=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),counterpartId:`visitors`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`),counterpartId:`views`},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`)}],D={icon:o,attributes:[u()],example:{attributes:{chartType:`line`}}}}));function k(e,t,n){return{...e,stat_fields:t,period:n}}function be(e,t){let n=t===`hour`,i=(0,s.useCallback)(e=>!n||A.has(e),[n]),a=(0,s.useMemo)(()=>k(e,n?`views`:`views,visitors`,t),[e,t,n]),o=(0,s.useMemo)(()=>k(e,`likes,comments`,t),[e,t]),c=te(a),l=te(o,{enabled:!n}),u=c.primary.data,d=c.comparison.data,f=c.hasComparison,p=c.timezone,m=l.primary.data,h=l.comparison.data,g=l.hasComparison,_=l.timezone,v=(0,s.useMemo)(()=>E.map(e=>{let t=e.id===`views`||e.id===`visitors`;return{...ee({primary:t?u:m,comparison:t?d:h,hasComparison:t?f:g,field:e.id,label:e.label,zone:t?p:_}),counterpartKey:`counterpartId`in e?e.counterpartId:void 0,...i(e.id)?{}:{unavailable:r(`Hourly data isn't available for this metric.`,`jetpack-premium-analytics-pkg`)}}}),[i,u,d,f,p,m,h,g,_]),{refetch:y}=c,{refetch:b}=l,x=(0,s.useCallback)(()=>{y(),b()},[y,b]),S=c.isError&&!u?.data?.length||l.isError&&!m?.data?.length;return{metrics:v,isLoading:c.isLoading||l.isLoading,isFetching:c.isFetching||l.isFetching,isError:S,refetch:x}}var A,xe=t((()=>{v(),c(),i(),O(),C(),A=new Set([`views`])}));function Se({chartType:e}){let{reportParams:t}=m(),n=_(t.interval,T),{drillDown:i}=f(),a=(0,M.useCallback)(e=>i(e,n),[i,n]),{metrics:o,isLoading:s,isFetching:c,isError:l,refetch:u}=be(t,n),ee=r(`Traffic metric`,`jetpack-premium-analytics-pkg`),d=o.filter(e=>!e.unavailable);return(0,N.jsx)(`div`,{className:ve.root,children:(0,N.jsx)(ie,{isLoading:s,isFetching:c,isError:l,isEmpty:d.length>0&&d.every(e=>e.current.length===0),error:{description:r(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},empty:{icon:h,description:r(`No traffic data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,N.jsx)(x,{}),children:(0,N.jsx)(b,{metrics:o,dataFormat:P,chartType:e,groupLabel:ee,tickResolution:n,onDatumClick:a})})})}function j({attributes:e={},setError:t}){return(0,N.jsx)(p,{attributes:e,setError:t,options:{from:`/`},children:(0,N.jsx)(Se,{chartType:e.chartType})})}var M,N,P,Ce=t((()=>{C(),g(),d(),i(),M=e(n(),1),ye(),xe(),O(),N=a(),P={type:`number`,options:{useMultipliers:!0,decimals:0}}})),F,I,L,we,Te,Ee,De,Oe=t((()=>{F=`jpa/traffic-chart`,I=`Traffic summary`,L=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,we={content:`A summary of your site's views, visitors, likes, and comments. The Visitors total is a per-period sum, not a unique count.`},Te=`traffic`,Ee=`framed`,De={name:F,title:I,description:L,help:we,category:Te,presentation:Ee}}));function R({withComparison:e,chartType:t}){return(0,B.jsx)(j,{attributes:{reportParams:y(e),chartType:t}})}function z(e){return(0,B.jsx)(j,{attributes:{reportParams:y(!1,e)}})}function ke({withComparison:e,chartType:t,...n}){return(0,B.jsx)(fe,{...n,widgetType:H,renderModule:V,renderComponent:j,attributes:{reportParams:y(e),chartType:t}})}var B,V,H,U,W,Ae,G,K,q,J,Y,X,Z,Q,$,je;t((()=>{v(),oe(),ae(),pe(),ue(),ge(),re(),Ce(),O(),Oe(),B=a(),ne(),V=`storybook/traffic-chart`,H=ce(De,D),U={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},W={chartType:`line`},Ae={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:j,tags:[`autodocs`],decorators:[se,he],argTypes:{...me,withComparison:{control:`boolean`},...U},parameters:{docs:{description:{component:"Traffic over the selected period as selectable metric tabs — Views, Visitors, Likes, and Comments — over a comparative chart. The date range, comparison, and bucket size come from the dashboard controls: the bucket is whatever the page's interval control resolves to, clamped to one the chart can draw. \"Chart type\" is the `chartType` attribute (`relevance: 'high'`, so the host renders it in the widget header). Which metric is plotted is the chart's own tab selection. When comparison is on, each tab shows its period-over-period delta and the previous period is overlaid — as a same-colour dashed line for `line`, or as the translucent shadow bar behind each bar for `bar`. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; the likes and comments request is skipped at the hourly grain, which cannot fill either. Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`."}}}},G={render:R,args:{withComparison:!1,...W},decorators:[w]},K={render:R,args:{withComparison:!0,...W},decorators:[w]},q={render:R,args:{withComparison:!1,...W,chartType:`bar`},decorators:[w]},J={render:R,args:{withComparison:!0,...W,chartType:`bar`},decorators:[w]},Y={render:e=>(0,B.jsx)(fe,{...e,widgetType:H,renderModule:V,renderComponent:j,attributes:{reportParams:y(!1,`last-24-hours`)}}),args:{...de},argTypes:{...le}},X={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[w],beforeEach:()=>(S(`stats/visits`,`loading`),()=>S(`stats/visits`,null))},Z={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[w],beforeEach:()=>(S(`stats/visits`,`error`),()=>S(`stats/visits`,null))},Q={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[w],beforeEach:()=>(S(`stats/visits`,`empty`),()=>S(`stats/visits`,null))},$={render:e=>(0,B.jsx)(ke,{...e}),args:{...de,withComparison:!0,...W},argTypes:{...le,withComparison:{control:`boolean`},...U}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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