import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{n as o,w as s}from"./build-module-CDRs4YxF.js";import{$ as c,G as l,K as u,Y as d,rt as f}from"./report-metric-J9cJFNdX.js";import{M as p,t as m}from"./src-BKLK-O8P.js";import{Cr as h,Nt as g,a as _,h as ee,in as v,o as te,p as ne}from"./chart-tooltip-C7JRBOP6.js";import{t as y}from"./metric-tabs-chart-0DP96Ndv.js";import{t as re}from"./widget-state-DjLNXl_D.js";import{C as ie,D as ae,E as oe,S as se,T as ce,b as le,t as b,w as ue,x}from"./src-B9C9DyDp.js";var S,C,de=e((()=>{S=`_root_sp1nf_1`,C={root:S}})),w,T,E=e((()=>{n(),o(),b(),w=[{id:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`)},{id:`visitors`,label:t(`Visitors`,`jetpack-premium-analytics-pkg`)},{id:`comments`,label:t(`Comments`,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:t(`Likes`,`jetpack-premium-analytics-pkg`)}],T={icon:s,attributes:[te([`auto`,`day`,`week`,`month`]),_()],example:{attributes:{granularity:`auto`,chartType:`line`}}}}));function D(e,t,n){return{...e,stat_fields:t,period:n}}function fe(e,t){let n=(0,i.useMemo)(()=>D(e,`views,visitors`,t),[e,t]),r=(0,i.useMemo)(()=>D(e,`likes,comments`,t),[e,t]),a=v(n),o=v(r),s=a.primary.data,c=a.comparison.data,l=a.hasComparison,u=o.primary.data,d=o.comparison.data,f=o.hasComparison,p=(0,i.useMemo)(()=>w.map(e=>{let t=e.id===`views`||e.id===`visitors`;return ne({primary:t?s:u,comparison:t?c:d,hasComparison:t?l:f,field:e.id,label:e.label})}),[s,c,l,u,d,f]),{refetch:m}=a,{refetch:h}=o,g=(0,i.useCallback)(()=>{m(),h()},[m,h]),_=a.isError&&!s?.data?.length||o.isError&&!u?.data?.length;return{metrics:p,isLoading:a.isLoading||o.isLoading,isFetching:a.isFetching||o.isFetching,isError:_,refetch:g}}var pe=e((()=>{g(),a(),E(),b()}));function me({granularity:e,chartType:n}){let{reportParams:r}=f(),{metrics:i,isLoading:a,isFetching:o,isError:s,refetch:c}=fe(r,e===`auto`?ee(r.interval,j):e),l=t(`Traffic metric`,`jetpack-premium-analytics-pkg`);return(0,k.jsx)(`div`,{className:C.root,children:(0,k.jsx)(re,{isLoading:a,isError:s,isEmpty:i.every(e=>e.current.length===0),error:{description:t(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:c}]},empty:{icon:p,description:t(`No traffic data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,k.jsx)(y,{metrics:i,dataFormat:A,chartType:n,loading:!0,groupLabel:l}),children:(0,k.jsx)(y,{metrics:i,dataFormat:A,chartType:n,loading:o,groupLabel:l})})})}function O({attributes:e={},setError:t}){return(0,k.jsx)(c,{attributes:e,setError:t,options:{from:`/`},children:(0,k.jsx)(me,{granularity:e.granularity??`auto`,chartType:e.chartType})})}var k,A,j,he=e((()=>{b(),m(),n(),de(),pe(),k=r(),A={type:`number`,options:{useMultipliers:!0,decimals:0}},j=[`day`,`week`,`month`]})),M,N,P,ge,F,I,L,_e=e((()=>{M=`jpa/traffic-chart`,N=`Traffic summary`,P=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,ge={content:`A summary of your site's views, visitors, likes, and comments.`},F=`traffic`,I=`framed`,L={name:M,title:N,description:P,help:ge,category:F,presentation:I}}));function R({withComparison:e,chartType:t}){return(0,B.jsx)(O,{attributes:{reportParams:h(e),chartType:t}})}function z(e){return(0,B.jsx)(O,{attributes:{reportParams:h(!1,e)}})}function ve({withComparison:e,chartType:t,...n}){return(0,B.jsx)(ce,{...n,widgetType:H,renderModule:V,renderComponent:O,attributes:{reportParams:h(e),chartType:t}})}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,ye;e((()=>{g(),oe(),ie(),le(),l(),he(),E(),_e(),B=r(),u(),V=`storybook/traffic-chart`,H=se(L,T),U={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},W={chartType:`line`},G={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...U},parameters:{docs:{description:{component:'Traffic over the selected period as selectable metric tabs — Views, Visitors, Likes, and Comments — over a comparative chart. The date range and comparison come from the dashboard controls; the "Group by" control is the `granularity` attribute and the "Chart type" control is the `chartType` attribute (both `relevance: \'high\'`), exposed by the widget host; which metric is plotted is the chart\'s own tab selection. When comparison is on, each tab shows its period-over-period delta and the previous period is overlaid — as a same-colour dashed line for `line`, or as the translucent shadow bar behind each bar for `bar`. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down. Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`.'}}}},K={render:R,args:{withComparison:!1,...W},decorators:[x]},q={render:R,args:{withComparison:!0,...W},decorators:[x]},J={render:R,args:{withComparison:!1,...W,chartType:`bar`},decorators:[x]},Y={render:R,args:{withComparison:!0,...W,chartType:`bar`},decorators:[x]},X={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(d(`stats/visits`,`loading`),()=>d(`stats/visits`,null))},Z={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(d(`stats/visits`,`error`),()=>d(`stats/visits`,null))},Q={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(d(`stats/visits`,`empty`),()=>d(`stats/visits`,null))},$={render:e=>(0,B.jsx)(ve,{...e}),args:{...ue,withComparison:!0,...W},argTypes:{...ae,withComparison:{control:`boolean`},...U}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderTrafficChart,
  args: {
    withComparison: false,
    ...DEFAULT_CHART_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`The widget on its own, current period only.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderTrafficChart,
  args: {
    withComparison: true,
    ...DEFAULT_CHART_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`Same close-up with the period-over-period delta and previous-period overlay.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderTrafficChart,
  args: {
    withComparison: false,
    ...DEFAULT_CHART_ARGS,
    chartType: 'bar'
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:"The same widget drawn as bars — the `chartType` attribute set to `bar`.",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderTrafficChart,
  args: {
    withComparison: true,
    ...DEFAULT_CHART_ARGS,
    chartType: 'bar'
  },
  decorators: [withWidgetCanvas]
}`,...Y.parameters?.docs?.source},description:{story:`Bars with comparison on: the previous period renders as the translucent
shadow bar behind each current-period bar.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderTrafficChartOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    setReportMockState('stats/visits', 'loading');
    return () => setReportMockState('stats/visits', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`First load: both visits fetches are in flight, so the widget shows its loading
state (the metric tabs over the chart's loading overlay). The mock is forced
to never resolve for the duration of this story. Both of the widget's requests
hit the same \`stats/visits\` path, so one override covers them.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...$.parameters?.docs?.description}}},ye=[`Default`,`WithComparison`,`BarChart`,`BarChartWithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as BarChart,Y as BarChartWithComparison,K as Default,Q as Empty,Z as Error,X as Loading,$ as WidgetDashboardWithWidget,q as WithComparison,ye as __namedExportsOrder,G as default};