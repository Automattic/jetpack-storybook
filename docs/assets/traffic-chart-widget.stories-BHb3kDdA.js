import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-yGZutq_9.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{C as o,Gu as s,Nu as c,t as l}from"./build-module-zwSmKorH.js";import{C as u,R as d,Y as f,et as ee,q as p,y as m}from"./wp-date-settings-B8babq0M.js";import{M as h,t as g}from"./src-DFNM1k7F.js";import{R as _,en as v,i as y,o as b}from"./date-filters-panel-NinNCEJx.js";import{r as x,t as S}from"./metric-tabs-chart-skeleton-Cae_wXye.js";import{G as te,K as ne,Y as C}from"./report-metric-l65N5BsP.js";import{t as re}from"./widget-state-CdWKHTho.js";import{C as ie,D as ae,E as oe,O as se,S as ce,T as le,b as ue,k as de,t as w,w as fe,x as T}from"./src-CCmO1aYp.js";import{n as pe,r as me,t as he}from"./with-site-time-zone-CQY2F8be.js";var ge,_e,ve=t((()=>{ge=`_root_sp1nf_1`,_e={root:ge}})),E,D,O,k=t((()=>{i(),l(),w(),E=[`hour`,`day`,`week`,`month`],D=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),counterpartId:`visitors`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`),counterpartId:`views`},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`)}],O={icon:o,attributes:[d()],example:{attributes:{chartType:`line`}}}}));function A(e,t,n){return{...e,stat_fields:t,period:n}}function ye(e,t){let n=t===`hour`,i=(0,s.useCallback)(e=>!n||j.has(e),[n]),a=(0,s.useMemo)(()=>A(e,n?`views`:`views,visitors`,t),[e,t,n]),o=(0,s.useMemo)(()=>A(e,`likes,comments`,t),[e,t]),c=_(a),l=_(o,{enabled:!n}),u=c.primary.data,d=c.comparison.data,f=c.hasComparison,p=c.timezone,m=l.primary.data,h=l.comparison.data,g=l.hasComparison,v=l.timezone,y=(0,s.useMemo)(()=>D.map(e=>{let t=e.id===`views`||e.id===`visitors`;return{...ee({primary:t?u:m,comparison:t?d:h,hasComparison:t?f:g,field:e.id,label:e.label,zone:t?p:v}),counterpartKey:`counterpartId`in e?e.counterpartId:void 0,...i(e.id)?{}:{unavailable:r(`Hourly data isn't available for this metric.`,`jetpack-premium-analytics-pkg`)}}}),[i,u,d,f,p,m,h,g,v]),{refetch:b}=c,{refetch:x}=l,S=(0,s.useCallback)(()=>{b(),x()},[b,x]),te=c.isError&&!u?.data?.length||l.isError&&!m?.data?.length;return{metrics:y,isLoading:c.isLoading||l.isLoading,isFetching:c.isFetching||l.isFetching,isError:te,refetch:S}}var j,be=t((()=>{y(),c(),i(),k(),w(),j=new Set([`views`])}));function xe({chartType:e}){let{reportParams:t}=u(),n=b(t.interval,E),{drillDown:i}=f(),a=(0,N.useCallback)(e=>i(e,n),[i,n]),{metrics:o,isLoading:s,isFetching:c,isError:l,refetch:d}=ye(t,n),ee=r(`Traffic metric`,`jetpack-premium-analytics-pkg`),p=o.filter(e=>!e.unavailable);return(0,P.jsx)(`div`,{className:_e.root,children:(0,P.jsx)(re,{isLoading:s,isFetching:c,isError:l,isEmpty:p.length>0&&p.every(e=>e.current.length===0),error:{description:r(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:d}]},empty:{icon:h,description:r(`No traffic data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,P.jsx)(S,{}),children:(0,P.jsx)(x,{metrics:o,dataFormat:F,chartType:e,groupLabel:ee,tickResolution:n,onDatumClick:a})})})}function M({attributes:e={},setError:t}){return(0,P.jsx)(m,{attributes:e,setError:t,options:{from:`/`},children:(0,P.jsx)(xe,{chartType:e.chartType})})}var N,P,F,Se=t((()=>{w(),g(),p(),i(),N=e(n(),1),ve(),be(),k(),P=a(),F={type:`number`,options:{useMultipliers:!0,decimals:0}}})),I,L,Ce,we,Te,Ee,De,Oe=t((()=>{I=`jpa/traffic-chart`,L=`Traffic summary`,Ce=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,we={content:`A summary of your site's views, visitors, likes, and comments.`},Te=`traffic`,Ee=`framed`,De={name:I,title:L,description:Ce,help:we,category:Te,presentation:Ee}}));function R({withComparison:e,chartType:t}){return(0,B.jsx)(M,{attributes:{reportParams:v(e),chartType:t}})}function z(e){return(0,B.jsx)(M,{attributes:{reportParams:v(!1,e)}})}function ke({withComparison:e,chartType:t,...n}){return(0,B.jsx)(le,{...n,widgetType:H,renderModule:V,renderComponent:M,attributes:{reportParams:v(e),chartType:t}})}var B,V,H,U,W,Ae,G,K,q,J,Y,X,Z,Q,$,je;t((()=>{y(),oe(),ie(),se(),ue(),he(),te(),Se(),k(),Oe(),B=a(),ne(),V=`storybook/traffic-chart`,H=ce(De,O),U={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},W={chartType:`line`},Ae={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:M,tags:[`autodocs`],decorators:[de,me],argTypes:{...pe,withComparison:{control:`boolean`},...U},parameters:{docs:{description:{component:"Traffic over the selected period as selectable metric tabs — Views, Visitors, Likes, and Comments — over a comparative chart. The date range, comparison, and bucket size come from the dashboard controls: the bucket is whatever the page's interval control resolves to, clamped to one the chart can draw. \"Chart type\" is the `chartType` attribute (`relevance: 'high'`, so the host renders it in the widget header). Which metric is plotted is the chart's own tab selection. When comparison is on, each tab shows its period-over-period delta and the previous period is overlaid — as a same-colour dashed line for `line`, or as the translucent shadow bar behind each bar for `bar`. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; the likes and comments request is skipped at the hourly grain, which cannot fill either. Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`."}}}},G={render:R,args:{withComparison:!1,...W},decorators:[T]},K={render:R,args:{withComparison:!0,...W},decorators:[T]},q={render:R,args:{withComparison:!1,...W,chartType:`bar`},decorators:[T]},J={render:R,args:{withComparison:!0,...W,chartType:`bar`},decorators:[T]},Y={render:e=>(0,B.jsx)(le,{...e,widgetType:H,renderModule:V,renderComponent:M,attributes:{reportParams:v(!1,`last-24-hours`)}}),args:{...fe},argTypes:{...ae}},X={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[T],beforeEach:()=>(C(`stats/visits`,`loading`),()=>C(`stats/visits`,null))},Z={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[T],beforeEach:()=>(C(`stats/visits`,`error`),()=>C(`stats/visits`,null))},Q={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[T],beforeEach:()=>(C(`stats/visits`,`empty`),()=>C(`stats/visits`,null))},$={render:e=>(0,B.jsx)(ke,{...e}),args:{...fe,withComparison:!0,...W},argTypes:{...ae,withComparison:{control:`boolean`},...U}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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