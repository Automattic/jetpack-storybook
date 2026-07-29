import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{Nn as o,n as s}from"./build-module-DmVuor49.js";import{A as ee,t as c}from"./src-B3le4dug.js";import{Ct as l,Jt as u,a as d,fr as f,r as te}from"./chart-tooltip-DnxlQUlm.js";import{t as p}from"./metric-tabs-chart-DNRyeLlJ.js";import{I as m,L as h,U as g,q as _,z as v}from"./report-metric-6qE2Z34D.js";import{t as y}from"./widget-state-DwLxTnLX.js";import{C as b,D as x,E as ne,S as re,T as ie,b as ae,t as oe,w as se,x as S}from"./src-CFt7SaFZ.js";import{i as ce,n as le,t as ue}from"./src-BgRThLk4.js";var de,fe,C,pe=e((()=>{de=`_root_t6a9k_1`,fe=`_emptyState_t6a9k_10`,C={root:de,emptyState:fe}})),w,T,E,D=e((()=>{n(),s(),ue(),w=[{id:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`)},{id:`visitors`,label:t(`Visitors`,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:t(`Likes`,`jetpack-premium-analytics-pkg`)},{id:`comments`,label:t(`Comments`,`jetpack-premium-analytics-pkg`)}],T=w.map(e=>e.id),E={icon:o,attributes:[{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:le,elements:[{label:t(`Auto`,`jetpack-premium-analytics-pkg`),value:`auto`},{label:t(`By days`,`jetpack-premium-analytics-pkg`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics-pkg`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics-pkg`),value:`month`}],relevance:`high`},{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics-pkg`),type:`array`,relevance:`high`,Edit:ce,elements:w.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{granularity:`auto`,metrics:T}}}}));function O(e,t,n){return{...e,stat_fields:t,period:n}}function me(e,t,n=T){let r=(0,i.useMemo)(()=>new Set(n),[n]),a=r.has(`views`)||r.has(`visitors`),o=r.has(`likes`)||r.has(`comments`),s=(0,i.useMemo)(()=>O(e,`views,visitors`,t),[e,t]),ee=(0,i.useMemo)(()=>O(e,`likes,comments`,t),[e,t]),c=u(s,{enabled:a}),l=u(ee,{enabled:o}),d=c.primary.data,f=c.comparison.data,p=c.hasComparison,m=l.primary.data,h=l.comparison.data,g=l.hasComparison,_=(0,i.useMemo)(()=>w.filter(e=>r.has(e.id)).map(e=>{let t=e.id===`views`||e.id===`visitors`;return te({primary:t?d:m,comparison:t?f:h,hasComparison:t?p:g,field:e.id,label:e.label})}),[r,d,f,p,m,h,g]),{refetch:v}=c,{refetch:y}=l,b=(0,i.useCallback)(()=>{v(),y()},[v,y]),x=c.isError&&!d?.data?.length||l.isError&&!m?.data?.length;return{metrics:_,isLoading:c.isLoading||l.isLoading,isFetching:c.isFetching||l.isFetching,isError:x,refetch:b}}var he=e((()=>{l(),a(),D(),oe()}));function ge({granularity:e,metrics:n}){let{reportParams:r}=_(),{metrics:i,isLoading:a,isFetching:o,isError:s,refetch:c}=me(r,e===`auto`?d(r.interval,M):e,n),l=t(`Traffic metric`,`jetpack-premium-analytics-pkg`);return i.length?(0,A.jsx)(`div`,{className:C.root,children:(0,A.jsx)(y,{isLoading:a,isError:s,isEmpty:i.every(e=>e.current.length===0),error:{description:t(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:c}]},empty:{icon:ee,description:t(`No traffic data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,A.jsx)(p,{metrics:i,dataFormat:j,loading:!0,groupLabel:l}),children:(0,A.jsx)(p,{metrics:i,dataFormat:j,loading:o,groupLabel:l})})}):(0,A.jsx)(`div`,{className:C.emptyState,children:t(`No metric selected. Please select a metric from the metrics list.`,`jetpack-premium-analytics-pkg`)})}function k({attributes:e={},setError:t}){return(0,A.jsx)(g,{attributes:e,setError:t,options:{from:`/`},children:(0,A.jsx)(ge,{granularity:e.granularity??`auto`,metrics:e.metrics})})}var A,j,M,_e=e((()=>{oe(),c(),n(),pe(),he(),A=r(),j={type:`number`,options:{useMultipliers:!0,decimals:0}},M=[`day`,`week`,`month`]})),N,ve,P,F,I,L,R,ye=e((()=>{N=`jpa/traffic-chart`,ve=`Summary`,P=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,F={content:`A summary of your site's views, visitors, likes, and comments.`},I=`traffic`,L=`framed`,R={name:N,title:ve,description:P,help:F,category:I,presentation:L}}));function z({withComparison:e,metrics:t}){return(0,V.jsx)(k,{attributes:{reportParams:f(e),metrics:t}})}function B(e){return(0,V.jsx)(k,{attributes:{reportParams:f(!1,e)}})}function be({withComparison:e,metrics:t,...n}){return(0,V.jsx)(ie,{...n,widgetType:U,renderModule:H,renderComponent:k,attributes:{reportParams:f(e),metrics:t}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{l(),ne(),b(),ae(),m(),_e(),D(),ye(),V=r(),h(),H=`storybook/traffic-chart`,U=re(R,E),W={metrics:{control:`check`,options:T}},G={metrics:T},K={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...W},parameters:{docs:{description:{component:"Traffic over the selected period as selectable metric tabs — Views, Visitors, Likes, and Comments — over a comparative line chart. The date range and comparison come from the dashboard controls; the \"Group by\" control is the `granularity` attribute and the tab selection is the `metrics` attribute (both `relevance: 'high'`), exposed by the widget host. When comparison is on the previous period is overlaid as a same-colour dashed line and each tab shows its period-over-period delta. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; a pair's request is skipped while neither of its metrics is selected. Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`."}}}},q={render:z,args:{withComparison:!1,...G},decorators:[S]},J={render:z,args:{withComparison:!0,...G},decorators:[S]},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(v(`stats/visits`,`loading`),()=>v(`stats/visits`,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(v(`stats/visits`,`error`),()=>v(`stats/visits`,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(v(`stats/visits`,`empty`),()=>v(`stats/visits`,null))},Q={render:e=>(0,V.jsx)(be,{...e}),args:{...se,withComparison:!0,...G},argTypes:{...x,withComparison:{control:`boolean`},...W}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderTrafficChart,
  args: {
    withComparison: false,
    ...ALL_METRICS_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`The widget on its own, current period only.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderTrafficChart,
  args: {
    withComparison: true,
    ...ALL_METRICS_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:`Same close-up with the period-over-period delta and previous-period overlay.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
    ...ALL_METRICS_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean'
    },
    ...METRIC_ARG_TYPES
  }
}`,...Q.parameters?.docs?.source},description:{story:`Renders the real registered widget through the shared dashboard harness.`,...Q.parameters?.docs?.description}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};