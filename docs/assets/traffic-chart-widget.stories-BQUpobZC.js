import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,t as a}from"./build-module-DrryaqBL.js";import{Nn as o,n as s}from"./build-module-DmVuor49.js";import{A as c,t as l}from"./src-B3le4dug.js";import{Wt as u,a as d,cr as f,r as ee,yt as p}from"./chart-tooltip-oGdCeVNL.js";import{t as m}from"./metric-tabs-chart-B5UOZtXd.js";import{F as h,G as g,L as _,P as te,V as v}from"./report-metric-Bov3irZA.js";import{t as y}from"./widget-state-CX0GrJEr.js";import{C as b,D as x,E as ne,S as re,T as ie,b as ae,t as S,w as oe,x as C}from"./src-DDBKoSc7.js";import{i as se,n as ce,t as le}from"./src-qiUtUgNj.js";var ue,de,w,fe=e((()=>{ue=`_root_t6a9k_1`,de=`_emptyState_t6a9k_10`,w={root:ue,emptyState:de}})),T,E,D,O=e((()=>{n(),s(),le(),T=[{id:`views`,label:t(`Views`,`jetpack-premium-analytics`)},{id:`visitors`,label:t(`Visitors`,`jetpack-premium-analytics`)},{id:`likes`,label:t(`Likes`,`jetpack-premium-analytics`)},{id:`comments`,label:t(`Comments`,`jetpack-premium-analytics`)}],E=T.map(e=>e.id),D={icon:o,attributes:[{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics`),type:`text`,Edit:ce,elements:[{label:t(`Auto`,`jetpack-premium-analytics`),value:`auto`},{label:t(`By days`,`jetpack-premium-analytics`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics`),value:`month`}],relevance:`high`},{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics`),type:`array`,relevance:`high`,Edit:se,elements:T.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{granularity:`auto`,metrics:E}}}}));function k(e,t,n){return{...e,stat_fields:t,period:n}}function pe(e,t,n=E){let r=(0,i.useMemo)(()=>new Set(n),[n]),a=r.has(`views`)||r.has(`visitors`),o=r.has(`likes`)||r.has(`comments`),s=(0,i.useMemo)(()=>k(e,`views,visitors`,t),[e,t]),c=(0,i.useMemo)(()=>k(e,`likes,comments`,t),[e,t]),l=u(s,{enabled:a}),d=u(c,{enabled:o}),f=l.primary.data,p=l.comparison.data,m=l.hasComparison,h=d.primary.data,g=d.comparison.data,_=d.hasComparison,te=(0,i.useMemo)(()=>T.filter(e=>r.has(e.id)).map(e=>{let t=e.id===`views`||e.id===`visitors`;return ee({primary:t?f:h,comparison:t?p:g,hasComparison:t?m:_,field:e.id,label:e.label})}),[r,f,p,m,h,g,_]),{refetch:v}=l,{refetch:y}=d,b=(0,i.useCallback)(()=>{v(),y()},[v,y]),x=l.isError&&!f?.data?.length||d.isError&&!h?.data?.length;return{metrics:te,isLoading:l.isLoading||d.isLoading,isFetching:l.isFetching||d.isFetching,isError:x,refetch:b}}var me=e((()=>{p(),a(),O(),S()}));function he({granularity:e,metrics:n}){let{reportParams:r}=g(),{metrics:i,isLoading:a,isFetching:o,isError:s,refetch:l}=pe(r,e===`auto`?d(r.interval,N):e,n),u=t(`Traffic metric`,`jetpack-premium-analytics`);return i.length?(0,j.jsx)(`div`,{className:w.root,children:(0,j.jsx)(y,{isLoading:a,isError:s,isEmpty:i.every(e=>e.current.length===0),error:{description:t(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:l}]},empty:{icon:c,description:t(`No traffic data in this period.`,`jetpack-premium-analytics`)},renderLoading:(0,j.jsx)(m,{metrics:i,dataFormat:M,loading:!0,groupLabel:u}),children:(0,j.jsx)(m,{metrics:i,dataFormat:M,loading:o,groupLabel:u})})}):(0,j.jsx)(`div`,{className:w.emptyState,children:t(`No metric selected. Please select a metric from the metrics list.`,`jetpack-premium-analytics`)})}function A({attributes:e={},setError:t}){return(0,j.jsx)(v,{attributes:e,setError:t,options:{from:`/`},children:(0,j.jsx)(he,{granularity:e.granularity??`auto`,metrics:e.metrics})})}var j,M,N,ge=e((()=>{S(),l(),n(),fe(),me(),j=r(),M={type:`number`,options:{useMultipliers:!0,decimals:0}},N=[`day`,`week`,`month`]})),P,F,_e,I,L,R,z,ve=e((()=>{P=`jpa/traffic-chart`,F=`Traffic`,_e=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,I={content:`A summary of your site's views, visitors, likes, and comments, with the previous period overlaid for comparison.`},L=`traffic`,R=`framed`,z={name:P,title:F,description:_e,help:I,category:L,presentation:R}}));function B({withComparison:e,metrics:t}){return(0,H.jsx)(A,{attributes:{reportParams:f(e),metrics:t}})}function V(e){return(0,H.jsx)(A,{attributes:{reportParams:f(!1,e)}})}function ye({withComparison:e,metrics:t,...n}){return(0,H.jsx)(ie,{...n,widgetType:W,renderModule:U,renderComponent:A,attributes:{reportParams:f(e),metrics:t}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$,be;e((()=>{p(),ne(),b(),ae(),te(),ge(),O(),ve(),H=r(),h(),U=`storybook/traffic-chart`,W=re(z,D),G={metrics:{control:`check`,options:E}},K={metrics:E},q={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...G},parameters:{docs:{description:{component:"Traffic over the selected period as selectable metric tabs — Views, Visitors, Likes, and Comments — over a comparative line chart. The date range and comparison come from the dashboard controls; the \"Group by\" control is the `granularity` attribute and the tab selection is the `metrics` attribute (both `relevance: 'high'`), exposed by the widget host. When comparison is on the previous period is overlaid as a same-colour dashed line and each tab shows its period-over-period delta. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; a pair's request is skipped while neither of its metrics is selected. Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`."}}}},J={render:B,args:{withComparison:!1,...K},decorators:[C]},Y={render:B,args:{withComparison:!0,...K},decorators:[C]},X={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(_(`stats/visits`,`loading`),()=>_(`stats/visits`,null))},Z={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(_(`stats/visits`,`error`),()=>_(`stats/visits`,null))},Q={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(_(`stats/visits`,`empty`),()=>_(`stats/visits`,null))},$={render:e=>(0,H.jsx)(ye,{...e}),args:{...oe,withComparison:!0,...K},argTypes:{...x,withComparison:{control:`boolean`},...G}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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