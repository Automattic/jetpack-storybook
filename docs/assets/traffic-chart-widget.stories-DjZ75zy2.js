import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{n as o,w as s}from"./build-module-CDRs4YxF.js";import{b as c,g as l}from"./hooks-C4nRgT-Q.js";import{M as u,t as d}from"./src-BKLK-O8P.js";import{O as ee,qt as f,t as p}from"./src-nqpizkIW.js";import{a as m,h,o as g,p as te}from"./chart-tooltip-CoSs-C7k.js";import{r as _,t as ne}from"./metric-tabs-chart-skeleton-BZycPnev.js";import{K as re,X as v,q as ie}from"./report-metric-rbDkxP91.js";import{t as ae}from"./widget-state-BuxierFL.js";import{C as oe,D as se,E as ce,S as le,T as ue,b as de,t as y,w as fe,x as b}from"./src-BdbOy7LB.js";var x,S,pe=e((()=>{x=`_root_sp1nf_1`,S={root:x}})),C,w,T=e((()=>{n(),o(),y(),C=[{id:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`)},{id:`visitors`,label:t(`Visitors`,`jetpack-premium-analytics-pkg`)},{id:`comments`,label:t(`Comments`,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:t(`Likes`,`jetpack-premium-analytics-pkg`)}],w={icon:s,attributes:[g([`auto`,`day`,`week`,`month`]),m()],example:{attributes:{granularity:`auto`,chartType:`line`}}}}));function E(e,t,n){return{...e,stat_fields:t,period:n}}function me(e,t){let n=(0,i.useMemo)(()=>E(e,`views,visitors`,t),[e,t]),r=(0,i.useMemo)(()=>E(e,`likes,comments`,t),[e,t]),a=ee(n),o=ee(r),s=a.primary.data,c=a.comparison.data,l=a.hasComparison,u=o.primary.data,d=o.comparison.data,f=o.hasComparison,p=(0,i.useMemo)(()=>C.map(e=>{let t=e.id===`views`||e.id===`visitors`;return te({primary:t?s:u,comparison:t?c:d,hasComparison:t?l:f,field:e.id,label:e.label})}),[s,c,l,u,d,f]),{refetch:m}=a,{refetch:h}=o,g=(0,i.useCallback)(()=>{m(),h()},[m,h]),_=a.isError&&!s?.data?.length||o.isError&&!u?.data?.length;return{metrics:p,isLoading:a.isLoading||o.isLoading,isFetching:a.isFetching||o.isFetching,isError:_,refetch:g}}var he=e((()=>{p(),a(),T(),y()}));function ge({granularity:e,chartType:n}){let{reportParams:r}=c(),{metrics:i,isLoading:a,isFetching:o,isError:s,refetch:l}=me(r,e===`auto`?h(r.interval,A):e),d=t(`Traffic metric`,`jetpack-premium-analytics-pkg`);return(0,O.jsx)(`div`,{className:S.root,children:(0,O.jsx)(ae,{isLoading:a,isFetching:o,isError:s,isEmpty:i.every(e=>e.current.length===0),error:{description:t(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:l}]},empty:{icon:u,description:t(`No traffic data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,O.jsx)(ne,{}),children:(0,O.jsx)(_,{metrics:i,dataFormat:k,chartType:n,groupLabel:d})})})}function D({attributes:e={},setError:t}){return(0,O.jsx)(l,{attributes:e,setError:t,options:{from:`/`},children:(0,O.jsx)(ge,{granularity:e.granularity??`auto`,chartType:e.chartType})})}var O,k,A,_e=e((()=>{y(),d(),n(),pe(),he(),O=r(),k={type:`number`,options:{useMultipliers:!0,decimals:0}},A=[`day`,`week`,`month`]})),j,M,N,P,F,I,L,ve=e((()=>{j=`jpa/traffic-chart`,M=`Traffic summary`,N=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,P={content:`A summary of your site's views, visitors, likes, and comments.`},F=`traffic`,I=`framed`,L={name:j,title:M,description:N,help:P,category:F,presentation:I}}));function R({withComparison:e,chartType:t}){return(0,B.jsx)(D,{attributes:{reportParams:f(e),chartType:t}})}function z(e){return(0,B.jsx)(D,{attributes:{reportParams:f(!1,e)}})}function ye({withComparison:e,chartType:t,...n}){return(0,B.jsx)(ue,{...n,widgetType:H,renderModule:V,renderComponent:D,attributes:{reportParams:f(e),chartType:t}})}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,be;e((()=>{p(),ce(),oe(),de(),re(),_e(),T(),ve(),B=r(),ie(),V=`storybook/traffic-chart`,H=le(L,w),U={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},W={chartType:`line`},G={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:D,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...U},parameters:{docs:{description:{component:'Traffic over the selected period as selectable metric tabs — Views, Visitors, Likes, and Comments — over a comparative chart. The date range and comparison come from the dashboard controls; the "Group by" control is the `granularity` attribute and the "Chart type" control is the `chartType` attribute (both `relevance: \'high\'`), exposed by the widget host; which metric is plotted is the chart\'s own tab selection. When comparison is on, each tab shows its period-over-period delta and the previous period is overlaid — as a same-colour dashed line for `line`, or as the translucent shadow bar behind each bar for `bar`. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down. Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`.'}}}},K={render:R,args:{withComparison:!1,...W},decorators:[b]},q={render:R,args:{withComparison:!0,...W},decorators:[b]},J={render:R,args:{withComparison:!1,...W,chartType:`bar`},decorators:[b]},Y={render:R,args:{withComparison:!0,...W,chartType:`bar`},decorators:[b]},X={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(v(`stats/visits`,`loading`),()=>v(`stats/visits`,null))},Z={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(v(`stats/visits`,`error`),()=>v(`stats/visits`,null))},Q={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>(v(`stats/visits`,`empty`),()=>v(`stats/visits`,null))},$={render:e=>(0,B.jsx)(ye,{...e}),args:{...fe,withComparison:!0,...W},argTypes:{...se,withComparison:{control:`boolean`},...U}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...$.parameters?.docs?.description}}},be=[`Default`,`WithComparison`,`BarChart`,`BarChartWithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as BarChart,Y as BarChartWithComparison,K as Default,Q as Empty,Z as Error,X as Loading,$ as WidgetDashboardWithWidget,q as WithComparison,be as __namedExportsOrder,G as default};