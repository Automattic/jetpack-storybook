import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{n as o,w as s}from"./build-module-CDRs4YxF.js";import{$ as c,K as l,Y as u,q as d,rt as f}from"./report-metric-CPrbaZSD.js";import{A as p,t as m}from"./src-tEZrN6jJ.js";import{Tt as h,Xt as ee,a as te,hr as g,s as _}from"./chart-tooltip-CFHJwff_.js";import{t as v}from"./metric-tabs-chart-B0_2AHh7.js";import{C as y,D as ne,E as b,S as re,T as ie,b as ae,t as oe,w as se,x}from"./src-Dm5P3BEW.js";import{t as ce}from"./widget-state-fe26BziH.js";import{i as le,n as ue,t as de}from"./src-LNRe61Iw.js";var S,fe,C,pe=e((()=>{S=`_root_t6a9k_1`,fe=`_emptyState_t6a9k_10`,C={root:S,emptyState:fe}})),me,w,T,E,D=e((()=>{n(),o(),de(),me=[{id:`line`,label:t(`Line chart`,`jetpack-premium-analytics-pkg`)},{id:`bar`,label:t(`Bar chart`,`jetpack-premium-analytics-pkg`)}],w=[{id:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`)},{id:`visitors`,label:t(`Visitors`,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:t(`Likes`,`jetpack-premium-analytics-pkg`)},{id:`comments`,label:t(`Comments`,`jetpack-premium-analytics-pkg`)}],T=w.map(e=>e.id),E={icon:s,attributes:[{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:ue,elements:[{label:t(`Auto`,`jetpack-premium-analytics-pkg`),value:`auto`},{label:t(`By days`,`jetpack-premium-analytics-pkg`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics-pkg`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics-pkg`),value:`month`}],relevance:`high`},{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics-pkg`),type:`array`,relevance:`high`,Edit:le,elements:w.map(e=>({value:e.id,label:e.label}))},{id:`chartType`,label:t(`Chart type`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:ue,elements:me.map(e=>({value:e.id,label:e.label})),relevance:`high`}],example:{attributes:{granularity:`auto`,metrics:T,chartType:`line`}}}}));function O(e,t,n){return{...e,stat_fields:t,period:n}}function he(e,t,n=T){let r=(0,i.useMemo)(()=>new Set(n),[n]),a=r.has(`views`)||r.has(`visitors`),o=r.has(`likes`)||r.has(`comments`),s=(0,i.useMemo)(()=>O(e,`views,visitors`,t),[e,t]),c=(0,i.useMemo)(()=>O(e,`likes,comments`,t),[e,t]),l=ee(s,{enabled:a}),u=ee(c,{enabled:o}),d=l.primary.data,f=l.comparison.data,p=l.hasComparison,m=u.primary.data,h=u.comparison.data,g=u.hasComparison,_=(0,i.useMemo)(()=>w.filter(e=>r.has(e.id)).map(e=>{let t=e.id===`views`||e.id===`visitors`;return te({primary:t?d:m,comparison:t?f:h,hasComparison:t?p:g,field:e.id,label:e.label})}),[r,d,f,p,m,h,g]),{refetch:v}=l,{refetch:y}=u,ne=(0,i.useCallback)(()=>{v(),y()},[v,y]),b=l.isError&&!d?.data?.length||u.isError&&!m?.data?.length;return{metrics:_,isLoading:l.isLoading||u.isLoading,isFetching:l.isFetching||u.isFetching,isError:b,refetch:ne}}var ge=e((()=>{h(),a(),D(),oe()}));function _e({granularity:e,metrics:n,chartType:r}){let{reportParams:i}=f(),{metrics:a,isLoading:o,isFetching:s,isError:c,refetch:l}=he(i,e===`auto`?_(i.interval,M):e,n),u=t(`Traffic metric`,`jetpack-premium-analytics-pkg`);return a.length?(0,A.jsx)(`div`,{className:C.root,children:(0,A.jsx)(ce,{isLoading:o,isError:c,isEmpty:a.every(e=>e.current.length===0),error:{description:t(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:l}]},empty:{icon:p,description:t(`No traffic data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,A.jsx)(v,{metrics:a,dataFormat:j,chartType:r,loading:!0,groupLabel:u}),children:(0,A.jsx)(v,{metrics:a,dataFormat:j,chartType:r,loading:s,groupLabel:u})})}):(0,A.jsx)(`div`,{className:C.emptyState,children:t(`No metric selected. Please select a metric from the metrics list.`,`jetpack-premium-analytics-pkg`)})}function k({attributes:e={},setError:t}){return(0,A.jsx)(c,{attributes:e,setError:t,options:{from:`/`},children:(0,A.jsx)(_e,{granularity:e.granularity??`auto`,metrics:e.metrics,chartType:e.chartType})})}var A,j,M,ve=e((()=>{oe(),m(),n(),pe(),ge(),A=r(),j={type:`number`,options:{useMultipliers:!0,decimals:0}},M=[`day`,`week`,`month`]})),N,P,F,I,ye,L,R,be=e((()=>{N=`jpa/traffic-chart`,P=`Traffic summary`,F=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,I={content:`A summary of your site's views, visitors, likes, and comments.`},ye=`traffic`,L=`framed`,R={name:N,title:P,description:F,help:I,category:ye,presentation:L}}));function z({withComparison:e,metrics:t,chartType:n}){return(0,V.jsx)(k,{attributes:{reportParams:g(e),metrics:t,chartType:n}})}function B(e){return(0,V.jsx)(k,{attributes:{reportParams:g(!1,e)}})}function xe({withComparison:e,metrics:t,chartType:n,...r}){return(0,V.jsx)(ie,{...r,widgetType:U,renderModule:H,renderComponent:k,attributes:{reportParams:g(e),metrics:t,chartType:n}})}var V,H,U,W,G,Se,K,q,J,Y,X,Z,Q,$,Ce;e((()=>{h(),b(),y(),ae(),l(),ve(),D(),be(),V=r(),d(),H=`storybook/traffic-chart`,U=re(R,E),W={metrics:{control:`check`,options:T},chartType:{control:`inline-radio`,options:[`line`,`bar`]}},G={metrics:T,chartType:`line`},Se={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...W},parameters:{docs:{description:{component:'Traffic over the selected period as selectable metric tabs — Views, Visitors, Likes, and Comments — over a comparative chart. The date range and comparison come from the dashboard controls; the "Group by" control is the `granularity` attribute, the tab selection is the `metrics` attribute, and the "Chart type" control is the `chartType` attribute (all `relevance: \'high\'`), exposed by the widget host. When comparison is on, each tab shows its period-over-period delta and the previous period is overlaid — as a same-colour dashed line for `line`, or as the translucent shadow bar behind each bar for `bar`. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; a pair\'s request is skipped while neither of its metrics is selected. Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`.'}}}},K={render:z,args:{withComparison:!1,...G},decorators:[x]},q={render:z,args:{withComparison:!0,...G},decorators:[x]},J={render:z,args:{withComparison:!1,...G,chartType:`bar`},decorators:[x]},Y={render:z,args:{withComparison:!0,...G,chartType:`bar`},decorators:[x]},X={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(u(`stats/visits`,`loading`),()=>u(`stats/visits`,null))},Z={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(u(`stats/visits`,`error`),()=>u(`stats/visits`,null))},Q={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>(u(`stats/visits`,`empty`),()=>u(`stats/visits`,null))},$={render:e=>(0,V.jsx)(xe,{...e}),args:{...se,withComparison:!0,...G},argTypes:{...ne,withComparison:{control:`boolean`},...W}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderTrafficChart,
  args: {
    withComparison: false,
    ...ALL_METRICS_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source},description:{story:`The widget on its own, current period only.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderTrafficChart,
  args: {
    withComparison: true,
    ...ALL_METRICS_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`Same close-up with the period-over-period delta and previous-period overlay.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderTrafficChart,
  args: {
    withComparison: false,
    ...ALL_METRICS_ARGS,
    chartType: 'bar'
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:"The same widget drawn as bars — the `chartType` attribute set to `bar`.",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderTrafficChart,
  args: {
    withComparison: true,
    ...ALL_METRICS_ARGS,
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
    ...ALL_METRICS_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean'
    },
    ...METRIC_ARG_TYPES
  }
}`,...$.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...$.parameters?.docs?.description}}},Ce=[`Default`,`WithComparison`,`BarChart`,`BarChartWithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as BarChart,Y as BarChartWithComparison,K as Default,Q as Empty,Z as Error,X as Loading,$ as WidgetDashboardWithWidget,q as WithComparison,Ce as __namedExportsOrder,Se as default};