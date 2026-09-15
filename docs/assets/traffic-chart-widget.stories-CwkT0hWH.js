import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-yGZutq_9.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{C as o,Gu as s,Nu as c,t as l}from"./build-module-zwSmKorH.js";import{K as u,b as d,ct as ee,g as f,rt as p,tt as m}from"./hooks-Cxg8__Pj.js";import{M as h,t as g}from"./src-DFNM1k7F.js";import{R as _,en as v,i as y,o as b}from"./date-filters-panel-Bfb5a4in.js";import{r as x,t as S}from"./metric-tabs-chart-skeleton-C9cT2f4F.js";import{i as C,r as te,s as w}from"./register-report-mocks-D4Ij69_x.js";import{t as ne}from"./widget-state-m0lqjsw0.js";import{t as T}from"./src-I1M9q_8v.js";import{a as re,c as ie,d as ae,i as oe,l as se,n as ce,o as le,r as E,s as ue,u as de}from"./with-widget-canvas-4oxApO4r.js";import{n as fe,r as pe,t as me}from"./with-site-time-zone-Df8vUI9L.js";var he,ge,_e=t((()=>{he=`_root_sp1nf_1`,ge={root:he}})),D,O,k,A=t((()=>{i(),l(),T(),D=[`hour`,`day`,`week`,`month`],O=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),counterpartId:`visitors`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`),counterpartId:`views`},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`)}],k={icon:o,attributes:[u()],example:{attributes:{chartType:`line`}}}}));function j(e,t,n){return{...e,stat_fields:t,period:n}}function ve(e,t){let n=t===`hour`,i=(0,s.useCallback)(e=>!n||M.has(e),[n]),a=(0,s.useMemo)(()=>j(e,n?`views`:`views,visitors`,t),[e,t,n]),o=(0,s.useMemo)(()=>j(e,`likes,comments`,t),[e,t]),c=_(a),l=_(o,{enabled:!n}),u=c.primary.data,d=c.comparison.data,f=c.hasComparison,p=c.timezone,m=l.primary.data,h=l.comparison.data,g=l.hasComparison,v=l.timezone,y=(0,s.useMemo)(()=>O.map(e=>{let t=e.id===`views`||e.id===`visitors`;return{...ee({primary:t?u:m,comparison:t?d:h,hasComparison:t?f:g,field:e.id,label:e.label,zone:t?p:v}),counterpartKey:`counterpartId`in e?e.counterpartId:void 0,...i(e.id)?{}:{unavailable:r(`Hourly data isn't available for this metric.`,`jetpack-premium-analytics-pkg`)}}}),[i,u,d,f,p,m,h,g,v]),{refetch:b}=c,{refetch:x}=l,S=(0,s.useCallback)(()=>{b(),x()},[b,x]),C=c.isError&&!u?.data?.length||l.isError&&!m?.data?.length;return{metrics:y,isLoading:c.isLoading||l.isLoading,isFetching:c.isFetching||l.isFetching,isError:C,refetch:S}}var M,ye=t((()=>{y(),c(),i(),A(),T(),M=new Set([`views`])}));function be({chartType:e}){let{reportParams:t}=d(),n=b(t.interval,D),{drillDown:i}=p(),a=(0,P.useCallback)(e=>i(e,n),[i,n]),{metrics:o,isLoading:s,isFetching:c,isError:l,refetch:u}=ve(t,n),ee=r(`Traffic metric`,`jetpack-premium-analytics-pkg`),f=o.filter(e=>!e.unavailable);return(0,F.jsx)(`div`,{className:ge.root,children:(0,F.jsx)(ne,{isLoading:s,isFetching:c,isError:l,isEmpty:f.length>0&&f.every(e=>e.current.length===0),error:{description:r(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},empty:{icon:h,description:r(`No traffic data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,F.jsx)(S,{}),children:(0,F.jsx)(x,{metrics:o,dataFormat:I,chartType:e,groupLabel:ee,tickResolution:n,onDatumClick:a})})})}function N({attributes:e={},setError:t}){return(0,F.jsx)(f,{attributes:e,setError:t,options:{from:`/`},children:(0,F.jsx)(be,{chartType:e.chartType})})}var P,F,I,xe=t((()=>{T(),g(),m(),i(),P=e(n(),1),_e(),ye(),A(),F=a(),I={type:`number`,options:{useMultipliers:!0,decimals:0}}})),L,Se,Ce,we,Te,Ee,De,Oe=t((()=>{L=`jpa/traffic-chart`,Se=`Traffic summary`,Ce=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,we={content:`A summary of your site's views, visitors, likes, and comments. The Visitors total is a per-period sum, not a unique count.`},Te=`traffic`,Ee=`framed`,De={name:L,title:Se,description:Ce,help:we,category:Te,presentation:Ee}}));function R({withComparison:e,chartType:t}){return(0,B.jsx)(N,{attributes:{reportParams:v(e),chartType:t}})}function z(e){return(0,B.jsx)(N,{attributes:{reportParams:v(!1,e)}})}function ke({withComparison:e,chartType:t,...n}){return(0,B.jsx)(ue,{...n,widgetType:H,renderModule:V,renderComponent:N,attributes:{reportParams:v(e),chartType:t}})}var B,V,H,U,W,Ae,G,K,q,J,Y,X,Z,Q,$,je;t((()=>{y(),ie(),re(),de(),ce(),me(),te(),xe(),A(),Oe(),B=a(),C(),V=`storybook/traffic-chart`,H=oe(De,k),U={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},W={chartType:`line`},Ae={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:N,tags:[`autodocs`],decorators:[ae,pe],argTypes:{...fe,withComparison:{control:`boolean`},...U},parameters:{docs:{description:{component:"Traffic over the selected period as selectable metric tabs — Views, Visitors, Likes, and Comments — over a comparative chart. The date range, comparison, and bucket size come from the dashboard controls: the bucket is whatever the page's interval control resolves to, clamped to one the chart can draw. \"Chart type\" is the `chartType` attribute (`relevance: 'high'`, so the host renders it in the widget header). Which metric is plotted is the chart's own tab selection. When comparison is on, each tab shows its period-over-period delta and the previous period is overlaid — as a same-colour dashed line for `line`, or as the translucent shadow bar behind each bar for `bar`. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; the likes and comments request is skipped at the hourly grain, which cannot fill either. Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`."}}}},G={render:R,args:{withComparison:!1,...W},decorators:[E]},K={render:R,args:{withComparison:!0,...W},decorators:[E]},q={render:R,args:{withComparison:!1,...W,chartType:`bar`},decorators:[E]},J={render:R,args:{withComparison:!0,...W,chartType:`bar`},decorators:[E]},Y={render:e=>(0,B.jsx)(ue,{...e,widgetType:H,renderModule:V,renderComponent:N,attributes:{reportParams:v(!1,`last-24-hours`)}}),args:{...le},argTypes:{...se}},X={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[E],beforeEach:()=>(w(`stats/visits`,`loading`),()=>w(`stats/visits`,null))},Z={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[E],beforeEach:()=>(w(`stats/visits`,`error`),()=>w(`stats/visits`,null))},Q={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[E],beforeEach:()=>(w(`stats/visits`,`empty`),()=>w(`stats/visits`,null))},$={render:e=>(0,B.jsx)(ke,{...e}),args:{...le,withComparison:!0,...W},argTypes:{...se,withComparison:{control:`boolean`},...U}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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