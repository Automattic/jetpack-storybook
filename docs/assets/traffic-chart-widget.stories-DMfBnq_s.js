import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{Fn as o,n as s}from"./build-module-DoJYX5DX.js";import{G as c,W as l,Z as u,q as d,tt as f}from"./report-metric-D1vALTh_.js";import{A as p,t as m}from"./src-CtuUAdXm.js";import{Kt as ee,a as h,r as te,ur as g,xt as _}from"./chart-tooltip-BA4nt7Vv.js";import{t as v}from"./metric-tabs-chart-DAB3ZgXS.js";import{C as y,D as ne,E as b,S as re,T as ie,b as ae,t as x,w as oe,x as S}from"./src-BHsXmrzc.js";import{t as se}from"./widget-state-BfeOVzR1.js";import{i as ce,n as le,t as ue}from"./src-DUHeFOON.js";var de,fe,C,pe=e((()=>{de=`_root_t6a9k_1`,fe=`_emptyState_t6a9k_10`,C={root:de,emptyState:fe}})),w,T,E,D=e((()=>{n(),s(),ue(),w=[{id:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`)},{id:`visitors`,label:t(`Visitors`,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:t(`Likes`,`jetpack-premium-analytics-pkg`)},{id:`comments`,label:t(`Comments`,`jetpack-premium-analytics-pkg`)}],T=w.map(e=>e.id),E={icon:o,attributes:[{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:le,elements:[{label:t(`Auto`,`jetpack-premium-analytics-pkg`),value:`auto`},{label:t(`By days`,`jetpack-premium-analytics-pkg`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics-pkg`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics-pkg`),value:`month`}],relevance:`high`},{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics-pkg`),type:`array`,relevance:`high`,Edit:ce,elements:w.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{granularity:`auto`,metrics:T}}}}));function O(e,t,n){return{...e,stat_fields:t,period:n}}function me(e,t,n=T){let r=(0,i.useMemo)(()=>new Set(n),[n]),a=r.has(`views`)||r.has(`visitors`),o=r.has(`likes`)||r.has(`comments`),s=(0,i.useMemo)(()=>O(e,`views,visitors`,t),[e,t]),c=(0,i.useMemo)(()=>O(e,`likes,comments`,t),[e,t]),l=ee(s,{enabled:a}),u=ee(c,{enabled:o}),d=l.primary.data,f=l.comparison.data,p=l.hasComparison,m=u.primary.data,h=u.comparison.data,g=u.hasComparison,_=(0,i.useMemo)(()=>w.filter(e=>r.has(e.id)).map(e=>{let t=e.id===`views`||e.id===`visitors`;return te({primary:t?d:m,comparison:t?f:h,hasComparison:t?p:g,field:e.id,label:e.label})}),[r,d,f,p,m,h,g]),{refetch:v}=l,{refetch:y}=u,ne=(0,i.useCallback)(()=>{v(),y()},[v,y]),b=l.isError&&!d?.data?.length||u.isError&&!m?.data?.length;return{metrics:_,isLoading:l.isLoading||u.isLoading,isFetching:l.isFetching||u.isFetching,isError:b,refetch:ne}}var he=e((()=>{_(),a(),D(),x()}));function ge({granularity:e,metrics:n}){let{reportParams:r}=f(),{metrics:i,isLoading:a,isFetching:o,isError:s,refetch:c}=me(r,e===`auto`?h(r.interval,M):e,n),l=t(`Traffic metric`,`jetpack-premium-analytics-pkg`);return i.length?(0,A.jsx)(`div`,{className:C.root,children:(0,A.jsx)(se,{isLoading:a,isError:s,isEmpty:i.every(e=>e.current.length===0),error:{description:t(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:c}]},empty:{icon:p,description:t(`No traffic data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,A.jsx)(v,{metrics:i,dataFormat:j,loading:!0,groupLabel:l}),children:(0,A.jsx)(v,{metrics:i,dataFormat:j,loading:o,groupLabel:l})})}):(0,A.jsx)(`div`,{className:C.emptyState,children:t(`No metric selected. Please select a metric from the metrics list.`,`jetpack-premium-analytics-pkg`)})}function k({attributes:e={},setError:t}){return(0,A.jsx)(u,{attributes:e,setError:t,options:{from:`/`},children:(0,A.jsx)(ge,{granularity:e.granularity??`auto`,metrics:e.metrics})})}var A,j,M,_e=e((()=>{x(),m(),n(),pe(),he(),A=r(),j={type:`number`,options:{useMultipliers:!0,decimals:0}},M=[`day`,`week`,`month`]})),N,P,F,I,L,R,z,ve=e((()=>{N=`jpa/traffic-chart`,P=`Traffic summary`,F=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,I={content:`A summary of your site's views, visitors, likes, and comments.`},L=`traffic`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B({withComparison:e,metrics:t}){return(0,H.jsx)(k,{attributes:{reportParams:g(e),metrics:t}})}function V(e){return(0,H.jsx)(k,{attributes:{reportParams:g(!1,e)}})}function ye({withComparison:e,metrics:t,...n}){return(0,H.jsx)(ie,{...n,widgetType:W,renderModule:U,renderComponent:k,attributes:{reportParams:g(e),metrics:t}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$,be;e((()=>{_(),b(),y(),ae(),l(),_e(),D(),ve(),H=r(),c(),U=`storybook/traffic-chart`,W=re(z,E),G={metrics:{control:`check`,options:T}},K={metrics:T},q={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...G},parameters:{docs:{description:{component:"Traffic over the selected period as selectable metric tabs — Views, Visitors, Likes, and Comments — over a comparative line chart. The date range and comparison come from the dashboard controls; the \"Group by\" control is the `granularity` attribute and the tab selection is the `metrics` attribute (both `relevance: 'high'`), exposed by the widget host. When comparison is on the previous period is overlaid as a same-colour dashed line and each tab shows its period-over-period delta. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; a pair's request is skipped while neither of its metrics is selected. Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`."}}}},J={render:B,args:{withComparison:!1,...K},decorators:[S]},Y={render:B,args:{withComparison:!0,...K},decorators:[S]},X={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(d(`stats/visits`,`loading`),()=>d(`stats/visits`,null))},Z={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(d(`stats/visits`,`error`),()=>d(`stats/visits`,null))},Q={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(d(`stats/visits`,`empty`),()=>d(`stats/visits`,null))},$={render:e=>(0,H.jsx)(ye,{...e}),args:{...oe,withComparison:!0,...K},argTypes:{...ne,withComparison:{control:`boolean`},...G}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderTrafficChart,
  args: {
    withComparison: false,
    ...ALL_METRICS_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:`The widget on its own, current period only.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderTrafficChart,
  args: {
    withComparison: true,
    ...ALL_METRICS_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...Y.parameters?.docs?.source},description:{story:`Same close-up with the period-over-period delta and previous-period overlay.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...$.parameters?.docs?.description}}},be=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as Default,Q as Empty,Z as Error,X as Loading,$ as WidgetDashboardWithWidget,Y as WithComparison,be as __namedExportsOrder,q as default};