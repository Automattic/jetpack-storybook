import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{n as o,w as s}from"./build-module-CDRs4YxF.js";import{$ as c,K as l,Y as u,q as d,rt as f}from"./report-metric-w9h72B0_.js";import{A as ee,t as p}from"./src-tEZrN6jJ.js";import{Tt as m,Xt as te,a as ne,hr as h,s as re}from"./chart-tooltip-BVbqPuow.js";import{t as g}from"./metric-tabs-chart-Y1D6jfRr.js";import{t as ie}from"./widget-state-Dt2Qsti6.js";import{C as ae,D as oe,E as se,S as ce,T as le,b as ue,t as de,w as fe,x as _}from"./src-BS19vwGo.js";import{n as v,t as pe}from"./src-BDbNlRMl.js";var y,b,me=e((()=>{y=`_root_sp1nf_1`,b={root:y}})),x,S,C,w=e((()=>{n(),o(),pe(),x=[{id:`line`,label:t(`Line chart`,`jetpack-premium-analytics-pkg`)},{id:`bar`,label:t(`Bar chart`,`jetpack-premium-analytics-pkg`)}],S=[{id:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`)},{id:`visitors`,label:t(`Visitors`,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:t(`Likes`,`jetpack-premium-analytics-pkg`)},{id:`comments`,label:t(`Comments`,`jetpack-premium-analytics-pkg`)}],C={icon:s,attributes:[{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:v,elements:[{label:t(`Auto`,`jetpack-premium-analytics-pkg`),value:`auto`},{label:t(`By days`,`jetpack-premium-analytics-pkg`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics-pkg`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics-pkg`),value:`month`}],relevance:`high`},{id:`chartType`,label:t(`Chart type`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:v,elements:x.map(e=>({value:e.id,label:e.label})),relevance:`high`}],example:{attributes:{granularity:`auto`,chartType:`line`}}}}));function T(e,t,n){return{...e,stat_fields:t,period:n}}function he(e,t){let n=(0,i.useMemo)(()=>T(e,`views,visitors`,t),[e,t]),r=(0,i.useMemo)(()=>T(e,`likes,comments`,t),[e,t]),a=te(n),o=te(r),s=a.primary.data,c=a.comparison.data,l=a.hasComparison,u=o.primary.data,d=o.comparison.data,f=o.hasComparison,ee=(0,i.useMemo)(()=>S.map(e=>{let t=e.id===`views`||e.id===`visitors`;return ne({primary:t?s:u,comparison:t?c:d,hasComparison:t?l:f,field:e.id,label:e.label})}),[s,c,l,u,d,f]),{refetch:p}=a,{refetch:m}=o,h=(0,i.useCallback)(()=>{p(),m()},[p,m]),re=a.isError&&!s?.data?.length||o.isError&&!u?.data?.length;return{metrics:ee,isLoading:a.isLoading||o.isLoading,isFetching:a.isFetching||o.isFetching,isError:re,refetch:h}}var ge=e((()=>{m(),a(),w(),de()}));function _e({granularity:e,chartType:n}){let{reportParams:r}=f(),{metrics:i,isLoading:a,isFetching:o,isError:s,refetch:c}=he(r,e===`auto`?re(r.interval,k):e),l=t(`Traffic metric`,`jetpack-premium-analytics-pkg`);return(0,D.jsx)(`div`,{className:b.root,children:(0,D.jsx)(ie,{isLoading:a,isError:s,isEmpty:i.every(e=>e.current.length===0),error:{description:t(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:c}]},empty:{icon:ee,description:t(`No traffic data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,D.jsx)(g,{metrics:i,dataFormat:O,chartType:n,loading:!0,groupLabel:l}),children:(0,D.jsx)(g,{metrics:i,dataFormat:O,chartType:n,loading:o,groupLabel:l})})})}function E({attributes:e={},setError:t}){return(0,D.jsx)(c,{attributes:e,setError:t,options:{from:`/`},children:(0,D.jsx)(_e,{granularity:e.granularity??`auto`,chartType:e.chartType})})}var D,O,k,ve=e((()=>{de(),p(),n(),me(),ge(),D=r(),O={type:`number`,options:{useMultipliers:!0,decimals:0}},k=[`day`,`week`,`month`]})),A,j,M,N,P,F,I,ye=e((()=>{A=`jpa/traffic-chart`,j=`Traffic summary`,M=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,N={content:`A summary of your site's views, visitors, likes, and comments.`},P=`traffic`,F=`framed`,I={name:A,title:j,description:M,help:N,category:P,presentation:F}}));function L({withComparison:e,chartType:t}){return(0,z.jsx)(E,{attributes:{reportParams:h(e),chartType:t}})}function R(e){return(0,z.jsx)(E,{attributes:{reportParams:h(!1,e)}})}function be({withComparison:e,chartType:t,...n}){return(0,z.jsx)(le,{...n,widgetType:V,renderModule:B,renderComponent:E,attributes:{reportParams:h(e),chartType:t}})}var z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),se(),ae(),ue(),l(),ve(),w(),ye(),z=r(),d(),B=`storybook/traffic-chart`,V=ce(I,C),H={chartType:{control:`inline-radio`,options:[`line`,`bar`]}},U={chartType:`line`},W={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:E,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...H},parameters:{docs:{description:{component:'Traffic over the selected period as selectable metric tabs — Views, Visitors, Likes, and Comments — over a comparative chart. The date range and comparison come from the dashboard controls; the "Group by" control is the `granularity` attribute and the "Chart type" control is the `chartType` attribute (both `relevance: \'high\'`), exposed by the widget host; which metric is plotted is the chart\'s own tab selection. When comparison is on, each tab shows its period-over-period delta and the previous period is overlaid — as a same-colour dashed line for `line`, or as the translucent shadow bar behind each bar for `bar`. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down. Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`.'}}}},G={render:L,args:{withComparison:!1,...U},decorators:[_]},K={render:L,args:{withComparison:!0,...U},decorators:[_]},q={render:L,args:{withComparison:!1,...U,chartType:`bar`},decorators:[_]},J={render:L,args:{withComparison:!0,...U,chartType:`bar`},decorators:[_]},Y={render:()=>R(`last-90-days`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(u(`stats/visits`,`loading`),()=>u(`stats/visits`,null))},X={render:()=>R(`last-7-days`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(u(`stats/visits`,`error`),()=>u(`stats/visits`,null))},Z={render:()=>R(`last-365-days`),tags:[`!autodocs`],decorators:[_],beforeEach:()=>(u(`stats/visits`,`empty`),()=>u(`stats/visits`,null))},Q={render:e=>(0,z.jsx)(be,{...e}),args:{...fe,withComparison:!0,...U},argTypes:{...oe,withComparison:{control:`boolean`},...H}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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