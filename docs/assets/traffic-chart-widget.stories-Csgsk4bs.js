import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{n as o,w as s}from"./build-module-CDRs4YxF.js";import{$ as c,G as l,K as u,Y as d,rt as f}from"./report-metric-DsD3ceyp.js";import{A as p,t as m}from"./src-Cvyt29m2.js";import{Ft as h,Tr as g,_,a as ee,h as te,o as ne,on as re}from"./chart-tooltip-Cb4-3-CU.js";import{t as ie}from"./metric-tabs-chart-CY237Vpl.js";import{t as ae}from"./widget-state-Czy7V3lh.js";import{C as oe,D as se,E as ce,S as le,T as ue,b as de,t as v,w as fe,x as y}from"./src-BavIz3YP.js";var b,x,pe=e((()=>{b=`_root_sp1nf_1`,x={root:b}})),S,C,w=e((()=>{n(),o(),v(),S=[{id:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`)},{id:`visitors`,label:t(`Visitors`,`jetpack-premium-analytics-pkg`)},{id:`comments`,label:t(`Comments`,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:t(`Likes`,`jetpack-premium-analytics-pkg`)}],C={icon:s,attributes:[ne([`auto`,`day`,`week`,`month`]),ee()],example:{attributes:{granularity:`auto`,chartType:`line`}}}}));function T(e,t,n){return{...e,stat_fields:t,period:n}}function me(e,t){let n=(0,i.useMemo)(()=>T(e,`views,visitors`,t),[e,t]),r=(0,i.useMemo)(()=>T(e,`likes,comments`,t),[e,t]),a=re(n),o=re(r),s=a.primary.data,c=a.comparison.data,l=a.hasComparison,u=o.primary.data,d=o.comparison.data,f=o.hasComparison,p=(0,i.useMemo)(()=>S.map(e=>{let t=e.id===`views`||e.id===`visitors`;return te({primary:t?s:u,comparison:t?c:d,hasComparison:t?l:f,field:e.id,label:e.label})}),[s,c,l,u,d,f]),{refetch:m}=a,{refetch:h}=o,g=(0,i.useCallback)(()=>{m(),h()},[m,h]),_=a.isError&&!s?.data?.length||o.isError&&!u?.data?.length;return{metrics:p,isLoading:a.isLoading||o.isLoading,isFetching:a.isFetching||o.isFetching,isError:_,refetch:g}}var he=e((()=>{h(),a(),w(),v()}));function ge({granularity:e,chartType:n}){let{reportParams:r}=f(),{metrics:i,isLoading:a,isFetching:o,isError:s,refetch:c}=me(r,e===`auto`?_(r.interval,k):e),l=t(`Traffic metric`,`jetpack-premium-analytics-pkg`);return(0,D.jsx)(`div`,{className:x.root,children:(0,D.jsx)(ae,{isLoading:a,isError:s,isEmpty:i.every(e=>e.current.length===0),error:{description:t(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:c}]},empty:{icon:p,description:t(`No traffic data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,D.jsx)(ie,{metrics:i,dataFormat:O,chartType:n,loading:!0,groupLabel:l}),children:(0,D.jsx)(ie,{metrics:i,dataFormat:O,chartType:n,loading:o,groupLabel:l})})})}function E({attributes:e={},setError:t}){return(0,D.jsx)(c,{attributes:e,setError:t,options:{from:`/`},children:(0,D.jsx)(ge,{granularity:e.granularity??`auto`,chartType:e.chartType})})}var D,O,k,_e=e((()=>{v(),m(),n(),pe(),he(),D=r(),O={type:`number`,options:{useMultipliers:!0,decimals:0}},k=[`day`,`week`,`month`]})),A,j,M,N,P,F,I,ve=e((()=>{A=`jpa/traffic-chart`,j=`Traffic summary`,M=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,N={content:`A summary of your site's views, visitors, likes, and comments.`},P=`traffic`,F=`framed`,I={name:A,title:j,description:M,help:N,category:P,presentation:F}}));function L({withComparison:e,chartType:t}){return(0,z.jsx)(E,{attributes:{reportParams:g(e),chartType:t}})}function R(e){return(0,z.jsx)(E,{attributes:{reportParams:g(!1,e)}})}function ye({withComparison:e,chartType:t,...n}){return(0,z.jsx)(ue,{...n,widgetType:V,renderModule:B,renderComponent:E,attributes:{reportParams:g(e),chartType:t}})}var z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),ce(),oe(),de(),l(),_e(),w(),ve(),z=r(),u(),B=`storybook/traffic-chart`,V=le(I,C),H={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},U={chartType:`line`},W={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:E,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...H},parameters:{docs:{description:{component:'Traffic over the selected period as selectable metric tabs — Views, Visitors, Likes, and Comments — over a comparative chart. The date range and comparison come from the dashboard controls; the "Group by" control is the `granularity` attribute and the "Chart type" control is the `chartType` attribute (both `relevance: \'high\'`), exposed by the widget host; which metric is plotted is the chart\'s own tab selection. When comparison is on, each tab shows its period-over-period delta and the previous period is overlaid — as a same-colour dashed line for `line`, or as the translucent shadow bar behind each bar for `bar`. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down. Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`.'}}}},G={render:L,args:{withComparison:!1,...U},decorators:[y]},K={render:L,args:{withComparison:!0,...U},decorators:[y]},q={render:L,args:{withComparison:!1,...U,chartType:`bar`},decorators:[y]},J={render:L,args:{withComparison:!0,...U,chartType:`bar`},decorators:[y]},Y={render:()=>R(`last-90-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(d(`stats/visits`,`loading`),()=>d(`stats/visits`,null))},X={render:()=>R(`last-7-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(d(`stats/visits`,`error`),()=>d(`stats/visits`,null))},Z={render:()=>R(`last-365-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(d(`stats/visits`,`empty`),()=>d(`stats/visits`,null))},Q={render:e=>(0,z.jsx)(ye,{...e}),args:{...fe,withComparison:!0,...U},argTypes:{...se,withComparison:{control:`boolean`},...H}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
  render: () => renderTrafficChartOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/visits', 'loading');
    return () => setReportMockState('stats/visits', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: both visits fetches are in flight, so the widget shows its loading
state (the metric tabs over the chart's loading overlay). The mock is forced
to never resolve for the duration of this story. Both of the widget's requests
hit the same \`stats/visits\` path, so one override covers them.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithComparison`,`BarChart`,`BarChartWithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as BarChart,J as BarChartWithComparison,G as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,W as default};