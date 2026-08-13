import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{n as o,w as s}from"./build-module-CDRs4YxF.js";import{J as c,Q as l,Y as u,nt as d,ot as f}from"./report-metric-DvbymNiD.js";import{A as p,t as m}from"./src-Cvyt29m2.js";import{Dt as h,Qt as g,_r as _,l as ee,s as te}from"./chart-tooltip-JHv3HFje.js";import{t as ne}from"./metric-tabs-chart-CxURSGnC.js";import{t as re}from"./widget-state-DIziXein.js";import{C as ie,D as ae,E as oe,S as se,T as ce,b as le,t as v,w as ue,x as y}from"./src-B1MCLR9S.js";import{n as b,t as de}from"./src-90G1Q_3U.js";var x,fe,pe=e((()=>{x=`_root_sp1nf_1`,fe={root:x}})),S,C,w,T=e((()=>{n(),o(),de(),S=[{id:`line`,label:t(`Line chart`,`jetpack-premium-analytics-pkg`)},{id:`bar`,label:t(`Bar chart`,`jetpack-premium-analytics-pkg`)}],C=[{id:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`)},{id:`visitors`,label:t(`Visitors`,`jetpack-premium-analytics-pkg`)},{id:`comments`,label:t(`Comments`,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:t(`Likes`,`jetpack-premium-analytics-pkg`)}],w={icon:s,attributes:[{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:b,elements:[{label:t(`Auto`,`jetpack-premium-analytics-pkg`),value:`auto`},{label:t(`By days`,`jetpack-premium-analytics-pkg`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics-pkg`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics-pkg`),value:`month`}],relevance:`high`},{id:`chartType`,label:t(`Chart type`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:b,elements:S.map(e=>({value:e.id,label:e.label})),relevance:`high`}],example:{attributes:{granularity:`auto`,chartType:`line`}}}}));function E(e,t,n){return{...e,stat_fields:t,period:n}}function me(e,t){let n=(0,i.useMemo)(()=>E(e,`views,visitors`,t),[e,t]),r=(0,i.useMemo)(()=>E(e,`likes,comments`,t),[e,t]),a=g(n),o=g(r),s=a.primary.data,c=a.comparison.data,l=a.hasComparison,u=o.primary.data,d=o.comparison.data,f=o.hasComparison,p=(0,i.useMemo)(()=>C.map(e=>{let t=e.id===`views`||e.id===`visitors`;return te({primary:t?s:u,comparison:t?c:d,hasComparison:t?l:f,field:e.id,label:e.label})}),[s,c,l,u,d,f]),{refetch:m}=a,{refetch:h}=o,_=(0,i.useCallback)(()=>{m(),h()},[m,h]),ee=a.isError&&!s?.data?.length||o.isError&&!u?.data?.length;return{metrics:p,isLoading:a.isLoading||o.isLoading,isFetching:a.isFetching||o.isFetching,isError:ee,refetch:_}}var he=e((()=>{h(),a(),T(),v()}));function ge({granularity:e,chartType:n}){let{reportParams:r}=f(),{metrics:i,isLoading:a,isFetching:o,isError:s,refetch:c}=me(r,e===`auto`?ee(r.interval,A):e),l=t(`Traffic metric`,`jetpack-premium-analytics-pkg`);return(0,O.jsx)(`div`,{className:fe.root,children:(0,O.jsx)(re,{isLoading:a,isError:s,isEmpty:i.every(e=>e.current.length===0),error:{description:t(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:c}]},empty:{icon:p,description:t(`No traffic data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,O.jsx)(ne,{metrics:i,dataFormat:k,chartType:n,loading:!0,groupLabel:l}),children:(0,O.jsx)(ne,{metrics:i,dataFormat:k,chartType:n,loading:o,groupLabel:l})})})}function D({attributes:e={},setError:t}){return(0,O.jsx)(d,{attributes:e,setError:t,options:{from:`/`},children:(0,O.jsx)(ge,{granularity:e.granularity??`auto`,chartType:e.chartType})})}var O,k,A,_e=e((()=>{v(),m(),n(),pe(),he(),O=r(),k={type:`number`,options:{useMultipliers:!0,decimals:0}},A=[`day`,`week`,`month`]})),j,M,N,P,F,ve,I,ye=e((()=>{j=`jpa/traffic-chart`,M=`Traffic summary`,N=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,P={content:`A summary of your site's views, visitors, likes, and comments.`},F=`traffic`,ve=`framed`,I={name:j,title:M,description:N,help:P,category:F,presentation:ve}}));function L({withComparison:e,chartType:t}){return(0,z.jsx)(D,{attributes:{reportParams:_(e),chartType:t}})}function R(e){return(0,z.jsx)(D,{attributes:{reportParams:_(!1,e)}})}function be({withComparison:e,chartType:t,...n}){return(0,z.jsx)(ce,{...n,widgetType:V,renderModule:B,renderComponent:D,attributes:{reportParams:_(e),chartType:t}})}var z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),oe(),ie(),le(),c(),_e(),T(),ye(),z=r(),u(),B=`storybook/traffic-chart`,V=se(I,w),H={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},U={chartType:`line`},W={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:D,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...H},parameters:{docs:{description:{component:'Traffic over the selected period as selectable metric tabs — Views, Visitors, Likes, and Comments — over a comparative chart. The date range and comparison come from the dashboard controls; the "Group by" control is the `granularity` attribute and the "Chart type" control is the `chartType` attribute (both `relevance: \'high\'`), exposed by the widget host; which metric is plotted is the chart\'s own tab selection. When comparison is on, each tab shows its period-over-period delta and the previous period is overlaid — as a same-colour dashed line for `line`, or as the translucent shadow bar behind each bar for `bar`. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down. Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`.'}}}},G={render:L,args:{withComparison:!1,...U},decorators:[y]},K={render:L,args:{withComparison:!0,...U},decorators:[y]},q={render:L,args:{withComparison:!1,...U,chartType:`bar`},decorators:[y]},J={render:L,args:{withComparison:!0,...U,chartType:`bar`},decorators:[y]},Y={render:()=>R(`last-90-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(l(`stats/visits`,`loading`),()=>l(`stats/visits`,null))},X={render:()=>R(`last-7-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(l(`stats/visits`,`error`),()=>l(`stats/visits`,null))},Z={render:()=>R(`last-365-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>(l(`stats/visits`,`empty`),()=>l(`stats/visits`,null))},Q={render:e=>(0,z.jsx)(be,{...e}),args:{...ue,withComparison:!0,...U},argTypes:{...ae,withComparison:{control:`boolean`},...H}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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