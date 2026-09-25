import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,r as i,t as a}from"./build-module-2QZQpBH2.js";import{t as o}from"./jsx-runtime-D2pHJD-r.js";import{C as s,Uu as c,ju as l,t as u}from"./build-module-2iv4IIRq.js";import{C as d,m as f,v as p,y as m}from"./hooks-B-qeRsMf.js";import{M as h,t as g}from"./src-C-E2d-Lb.js";import{$t as _,I as v,r as ee,t as y}from"./src-1QUDQSiP.js";import{A as b,P as te}from"./helpers-BBwPFz1N.js";import{r as ne,t as re}from"./metric-tabs-chart-skeleton-DmP1YzWT.js";import{c as x,i as ie,r as ae}from"./register-report-mocks-DRwPMEJ2.js";import{t as oe}from"./widget-state-CVKxYwPp.js";import{t as S}from"./src-xvX44x7l.js";import{a as se,d as ce,f as le,h as ue,i as de,m as fe,n as pe,p as me,r as C,u as he}from"./with-widget-canvas-D-x96ZVG.js";import{n as ge,r as _e,t as ve}from"./with-site-time-zone-ngtW_VDw.js";var ye,w,be=t((()=>{ye=`_root_sp1nf_1`,w={root:ye}})),T,E,D,O=t((()=>{a(),u(),S(),T=[`hour`,`day`,`week`,`month`],E=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s View`,`%s Views`,e,`jetpack-premium-analytics-pkg`),counterpartId:`visitors`},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Visitor`,`%s Visitors`,e,`jetpack-premium-analytics-pkg`),counterpartId:`views`},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Comment`,`%s Comments`,e,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:r(`Likes`,`jetpack-premium-analytics-pkg`),countLabel:e=>i(`%s Like`,`%s Likes`,e,`jetpack-premium-analytics-pkg`)}],D={icon:s,attributes:[b()],example:{attributes:{chartType:`line`}}}}));function k(e,t,n){return{...e,stat_fields:t,period:n}}function xe(e,t){let n=t===`hour`,i=(0,c.useCallback)(e=>!n||A.has(e),[n]),a=(0,c.useMemo)(()=>k(e,n?`views`:`views,visitors`,t),[e,t,n]),o=(0,c.useMemo)(()=>k(e,`likes,comments`,t),[e,t]),s=v(a),l=v(o,{enabled:!n}),u=s.primary.data,d=s.comparison.data,f=s.hasComparison,p=s.timezone,m=l.primary.data,h=l.comparison.data,g=l.hasComparison,_=l.timezone,ee=(0,c.useMemo)(()=>E.map(e=>{let t=e.id===`views`||e.id===`visitors`;return{...te({primary:t?u:m,comparison:t?d:h,hasComparison:t?f:g,field:e.id,label:e.label,countLabel:e.countLabel,zone:t?p:_}),counterpartKey:`counterpartId`in e?e.counterpartId:void 0,...i(e.id)?{}:{unavailable:r(`Hourly data isn't available for this metric.`,`jetpack-premium-analytics-pkg`)}}}),[i,u,d,f,p,m,h,g,_]),{refetch:y}=s,{refetch:b}=l,ne=(0,c.useCallback)(()=>{y(),b()},[y,b]),re=s.isError&&!u?.data?.length||l.isError&&!m?.data?.length;return{metrics:ee,isLoading:s.isLoading||l.isLoading,isFetching:s.isFetching||l.isFetching,isError:re,refetch:ne}}var A,Se=t((()=>{y(),l(),a(),O(),S(),A=new Set([`views`])}));function Ce({chartType:e}){let{reportParams:t}=p(),n=ee(t.interval,T),{drillDown:i}=d(),a=(0,M.useCallback)(e=>i(e,n),[i,n]),{metrics:o,isLoading:s,isFetching:c,isError:l,refetch:u}=xe(t,n),f=r(`Traffic metric`,`jetpack-premium-analytics-pkg`),m=o.filter(e=>!e.unavailable);return(0,N.jsx)(`div`,{className:w.root,children:(0,N.jsx)(oe,{isLoading:s,isFetching:c,isError:l,isEmpty:m.length>0&&m.every(e=>e.current.length===0),error:{description:r(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:u}]},empty:{icon:h,description:r(`No traffic data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,N.jsx)(re,{}),children:(0,N.jsx)(ne,{metrics:o,dataFormat:P,chartType:e,groupLabel:f,tickResolution:n,onDatumClick:a})})})}function j({attributes:e={},setError:t}){return(0,N.jsx)(f,{attributes:e,setError:t,options:{from:`/`},children:(0,N.jsx)(Ce,{chartType:e.chartType})})}var M,N,P,we=t((()=>{S(),g(),m(),a(),M=e(n(),1),be(),Se(),O(),N=o(),P={type:`number`,options:{useMultipliers:!0,decimals:0}}})),F,I,L,Te,Ee,De,Oe,ke=t((()=>{F=`jpa/traffic-chart`,I=`Traffic summary`,L=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,Te={content:`A summary of your site's views, visitors, likes, and comments. The Visitors total is a per-period sum, not a unique count.`},Ee=`traffic`,De=`framed`,Oe={name:F,title:I,description:L,help:Te,category:Ee,presentation:De}}));function R({withComparison:e,chartType:t}){return(0,B.jsx)(j,{attributes:{reportParams:_(e),chartType:t}})}function z(e){return(0,B.jsx)(j,{attributes:{reportParams:_(!1,e)}})}function Ae({withComparison:e,chartType:t,...n}){return(0,B.jsx)(ce,{...n,widgetType:H,renderModule:V,renderComponent:j,attributes:{reportParams:_(e),chartType:t}})}var B,V,H,U,W,je,G,K,q,J,Y,X,Z,Q,$,Me;t((()=>{y(),le(),se(),fe(),pe(),ve(),ae(),we(),O(),ke(),B=o(),ie(),V=`storybook/traffic-chart`,H=de(Oe,D),U={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},W={chartType:`line`},je={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:j,tags:[`autodocs`],decorators:[ue,_e],argTypes:{...ge,withComparison:{control:`boolean`},...U},parameters:{docs:{description:{component:"Traffic over the selected period as selectable metric tabs — Views, Visitors, Likes, and Comments — over a comparative chart. The date range, comparison, and bucket size come from the dashboard controls: the bucket is whatever the page's interval control resolves to, clamped to one the chart can draw. \"Chart type\" is the `chartType` attribute (`relevance: 'high'`, so the host renders it in the widget header). Which metric is plotted is the chart's own tab selection. When comparison is on, each tab shows its period-over-period delta and the previous period is overlaid — as a same-colour dashed line for `line`, or as the translucent shadow bar behind each bar for `bar`. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; the likes and comments request is skipped at the hourly grain, which cannot fill either. Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`."}}}},G={render:R,args:{withComparison:!1,...W},decorators:[C]},K={render:R,args:{withComparison:!0,...W},decorators:[C]},q={render:R,args:{withComparison:!1,...W,chartType:`bar`},decorators:[C]},J={render:R,args:{withComparison:!0,...W,chartType:`bar`},decorators:[C]},Y={render:e=>(0,B.jsx)(ce,{...e,widgetType:H,renderModule:V,renderComponent:j,attributes:{reportParams:_(!1,`last-24-hours`)}}),args:{...he},argTypes:{...me}},X={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(x(`stats/visits`,`loading`),()=>x(`stats/visits`,null))},Z={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(x(`stats/visits`,`error`),()=>x(`stats/visits`,null))},Q={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(x(`stats/visits`,`empty`),()=>x(`stats/visits`,null))},$={render:e=>(0,B.jsx)(Ae,{...e}),args:{...he,withComparison:!0,...W},argTypes:{...me,withComparison:{control:`boolean`},...U}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...$.parameters?.docs?.description}}},Me=[`Default`,`WithComparison`,`BarChart`,`BarChartWithComparison`,`Hourly`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as BarChart,J as BarChartWithComparison,G as Default,Q as Empty,Z as Error,Y as Hourly,X as Loading,$ as WidgetDashboardWithWidget,K as WithComparison,Me as __namedExportsOrder,je as default};