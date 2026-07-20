import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{Nn as o,n as s}from"./build-module-DmVuor49.js";import{A as c,t as l}from"./src-B3le4dug.js";import{It as u,dt as d,er as f,yr as p}from"./chart-tooltip-2oFiw6P7.js";import{t as m}from"./metric-tabs-chart-Bkmn-cEs.js";import{H as h,M as g,P as _,R as v,j as y}from"./report-metric-DjUmE-hC.js";import{t as b}from"./widget-state-5V0DcZeV.js";import{C as x,S,T as ee,b as te,t as ne,w as re,x as C}from"./src-tFanuavE.js";import{i as ie,n as ae,t as oe}from"./src-ZlAsfJq-.js";var w,T,E,se=e((()=>{w=`_root_t6a9k_1`,T=`_emptyState_t6a9k_10`,E={root:w,emptyState:T}})),D,O,k,A=e((()=>{n(),s(),oe(),D=[{id:`views`,label:t(`Views`,`jetpack-premium-analytics`)},{id:`visitors`,label:t(`Visitors`,`jetpack-premium-analytics`)},{id:`likes`,label:t(`Likes`,`jetpack-premium-analytics`)},{id:`comments`,label:t(`Comments`,`jetpack-premium-analytics`)}],O=D.map(e=>e.id),k={name:`jpa/traffic-chart`,title:t(`Traffic`,`jetpack-premium-analytics`),help:{content:t(`A summary of your site's views, visitors, likes, and comments, with the previous period overlaid for comparison.`,`jetpack-premium-analytics`)},icon:o,attributes:[{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics`),type:`text`,Edit:ae,elements:[{label:t(`Auto`,`jetpack-premium-analytics`),value:`auto`},{label:t(`By days`,`jetpack-premium-analytics`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics`),value:`month`}],relevance:`high`},{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics`),type:`array`,relevance:`high`,Edit:ie,elements:D.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{granularity:`auto`,metrics:O}}}}));function j(e,t){return Number(e?.summary?.[t]??0)}function M(e,t){return(e?.data??[]).map(e=>({date:p(e.date_start),value:Number(e[t]??0)}))}function N(e,t,n,r,i){let a=n?M(t,r):void 0,o=!!a?.length;return{key:r,label:i,value:j(e,r),previousValue:o?j(t,r):void 0,current:M(e,r),previous:o?a:void 0}}function P(e,t,n){return{...e,stat_fields:t,period:n}}function F(e,t,n=O){let r=(0,i.useMemo)(()=>new Set(n),[n]),a=r.has(`views`)||r.has(`visitors`),o=r.has(`likes`)||r.has(`comments`),s=(0,i.useMemo)(()=>P(e,`views,visitors`,t),[e,t]),c=(0,i.useMemo)(()=>P(e,`likes,comments`,t),[e,t]),l=u(s,{enabled:a}),d=u(c,{enabled:o}),f=l.primary.data,p=l.comparison.data,m=l.hasComparison,h=d.primary.data,g=d.comparison.data,_=d.hasComparison,v=(0,i.useMemo)(()=>D.filter(e=>r.has(e.id)).map(e=>{let t=e.id===`views`||e.id===`visitors`;return N(t?f:h,t?p:g,t?m:_,e.id,e.label)}),[r,f,p,m,h,g,_]),{refetch:y}=l,{refetch:b}=d,x=(0,i.useCallback)(()=>{y(),b()},[y,b]),S=l.isError&&!f?.data?.length||d.isError&&!h?.data?.length;return{metrics:v,isLoading:l.isLoading||d.isLoading,isFetching:l.isFetching||d.isFetching,isError:S,refetch:x}}var ce=e((()=>{d(),a(),A()}));function le(e){switch(e){case`week`:return`week`;case`month`:case`quarter`:case`year`:return`month`;default:return`day`}}function ue({granularity:e,metrics:n}){let{reportParams:r}=h(),{metrics:i,isLoading:a,isFetching:o,isError:s,refetch:l}=F(r,e===`auto`?le(r.interval):e,n),u=t(`Traffic metric`,`jetpack-premium-analytics`);return i.length?(0,L.jsx)(`div`,{className:E.root,children:(0,L.jsx)(b,{isLoading:a,isError:s,isEmpty:i.every(e=>e.current.length===0),error:{description:t(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:l}]},empty:{icon:c,description:t(`No traffic data in this period.`,`jetpack-premium-analytics`)},renderLoading:(0,L.jsx)(m,{metrics:i,dataFormat:R,loading:!0,groupLabel:u}),children:(0,L.jsx)(m,{metrics:i,dataFormat:R,loading:o,groupLabel:u})})}):(0,L.jsx)(`div`,{className:E.emptyState,children:t(`No metric selected. Please select a metric from the metrics list.`,`jetpack-premium-analytics`)})}function I({attributes:e={},setError:t}){return(0,L.jsx)(v,{attributes:e,setError:t,options:{from:`/`},children:(0,L.jsx)(ue,{granularity:e.granularity??`auto`,metrics:e.metrics})})}var L,R,de=e((()=>{ne(),l(),n(),se(),ce(),L=r(),R={type:`number`,options:{useMultipliers:!0,decimals:0}}}));function z({withComparison:e,metrics:t}){return(0,V.jsx)(I,{attributes:{reportParams:f(e),metrics:t}})}function B(e){return(0,V.jsx)(I,{attributes:{reportParams:f(!1,e)}})}function fe({withComparison:e,metrics:t,...n}){return(0,V.jsx)(x,{...n,widgetType:U,renderModule:H,renderComponent:I,attributes:{reportParams:f(e),metrics:t}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),re(),te(),y(),de(),A(),V=r(),g(),H=`storybook/traffic-chart`,U={name:k.name,title:k.title,icon:k.icon,attributes:k.attributes,example:k.example},W={metrics:{control:`check`,options:O}},G={metrics:O},K={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:I,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...W},parameters:{docs:{description:{component:"Traffic over the selected period as selectable metric tabs — Views, Visitors, Likes, and Comments — over a comparative line chart. The date range and comparison come from the dashboard controls; the \"Group by\" control is the `granularity` attribute and the tab selection is the `metrics` attribute (both `relevance: 'high'`), exposed by the widget host. When comparison is on the previous period is overlaid as a same-colour dashed line and each tab shows its period-over-period delta. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; a pair's request is skipped while neither of its metrics is selected. Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`."}}}},q={render:z,args:{withComparison:!1,...G},decorators:[C]},J={render:z,args:{withComparison:!0,...G},decorators:[C]},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(_(`stats/visits`,`loading`),()=>_(`stats/visits`,null))},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(_(`stats/visits`,`error`),()=>_(`stats/visits`,null))},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(_(`stats/visits`,`empty`),()=>_(`stats/visits`,null))},Q={render:e=>(0,V.jsx)(fe,{...e}),args:{...S,withComparison:!0,...G},argTypes:{...ee,withComparison:{control:`boolean`},...W}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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