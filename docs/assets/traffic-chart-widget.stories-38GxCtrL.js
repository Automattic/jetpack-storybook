import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{_ as i,t as a}from"./build-module-CbwHEf9N.js";import{n as o,w as s}from"./build-module-CDRs4YxF.js";import{$ as c,K as l,Y as u,q as d,rt as f}from"./report-metric-DXF_tQHC.js";import{A as p,t as m}from"./src-q13B8HIT.js";import{Ct as h,Jt as g,a as ee,pr as _,s as te}from"./chart-tooltip-BpGoiuxO.js";import{t as v}from"./metric-tabs-chart-3Nz2HW0C.js";import{C as y,D as b,E as x,S as ne,T as re,b as ie,t as S,w as ae,x as C}from"./src-j517wTai.js";import{t as oe}from"./widget-state-Gnztzf1i.js";import{i as se,n as ce,t as le}from"./src-DO2xcQ87.js";var ue,de,w,fe=e((()=>{ue=`_root_t6a9k_1`,de=`_emptyState_t6a9k_10`,w={root:ue,emptyState:de}})),T,E,D,O=e((()=>{n(),o(),le(),T=[{id:`views`,label:t(`Views`,`jetpack-premium-analytics-pkg`)},{id:`visitors`,label:t(`Visitors`,`jetpack-premium-analytics-pkg`)},{id:`likes`,label:t(`Likes`,`jetpack-premium-analytics-pkg`)},{id:`comments`,label:t(`Comments`,`jetpack-premium-analytics-pkg`)}],E=T.map(e=>e.id),D={icon:s,attributes:[{id:`granularity`,label:t(`Group by`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:ce,elements:[{label:t(`Auto`,`jetpack-premium-analytics-pkg`),value:`auto`},{label:t(`By days`,`jetpack-premium-analytics-pkg`),value:`day`},{label:t(`By weeks`,`jetpack-premium-analytics-pkg`),value:`week`},{label:t(`By months`,`jetpack-premium-analytics-pkg`),value:`month`}],relevance:`high`},{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics-pkg`),type:`array`,relevance:`high`,Edit:se,elements:T.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{granularity:`auto`,metrics:E}}}}));function k(e,t,n){return{...e,stat_fields:t,period:n}}function pe(e,t,n=E){let r=(0,i.useMemo)(()=>new Set(n),[n]),a=r.has(`views`)||r.has(`visitors`),o=r.has(`likes`)||r.has(`comments`),s=(0,i.useMemo)(()=>k(e,`views,visitors`,t),[e,t]),c=(0,i.useMemo)(()=>k(e,`likes,comments`,t),[e,t]),l=g(s,{enabled:a}),u=g(c,{enabled:o}),d=l.primary.data,f=l.comparison.data,p=l.hasComparison,m=u.primary.data,h=u.comparison.data,_=u.hasComparison,te=(0,i.useMemo)(()=>T.filter(e=>r.has(e.id)).map(e=>{let t=e.id===`views`||e.id===`visitors`;return ee({primary:t?d:m,comparison:t?f:h,hasComparison:t?p:_,field:e.id,label:e.label})}),[r,d,f,p,m,h,_]),{refetch:v}=l,{refetch:y}=u,b=(0,i.useCallback)(()=>{v(),y()},[v,y]),x=l.isError&&!d?.data?.length||u.isError&&!m?.data?.length;return{metrics:te,isLoading:l.isLoading||u.isLoading,isFetching:l.isFetching||u.isFetching,isError:x,refetch:b}}var me=e((()=>{h(),a(),O(),S()}));function he({granularity:e,metrics:n}){let{reportParams:r}=f(),{metrics:i,isLoading:a,isFetching:o,isError:s,refetch:c}=pe(r,e===`auto`?te(r.interval,N):e,n),l=t(`Traffic metric`,`jetpack-premium-analytics-pkg`);return i.length?(0,j.jsx)(`div`,{className:w.root,children:(0,j.jsx)(oe,{isLoading:a,isError:s,isEmpty:i.every(e=>e.current.length===0),error:{description:t(`We couldn't load traffic data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:c}]},empty:{icon:p,description:t(`No traffic data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,j.jsx)(v,{metrics:i,dataFormat:M,loading:!0,groupLabel:l}),children:(0,j.jsx)(v,{metrics:i,dataFormat:M,loading:o,groupLabel:l})})}):(0,j.jsx)(`div`,{className:w.emptyState,children:t(`No metric selected. Please select a metric from the metrics list.`,`jetpack-premium-analytics-pkg`)})}function A({attributes:e={},setError:t}){return(0,j.jsx)(c,{attributes:e,setError:t,options:{from:`/`},children:(0,j.jsx)(he,{granularity:e.granularity??`auto`,metrics:e.metrics})})}var j,M,N,ge=e((()=>{S(),m(),n(),fe(),me(),j=r(),M={type:`number`,options:{useMultipliers:!0,decimals:0}},N=[`day`,`week`,`month`]})),P,F,I,L,R,z,B,_e=e((()=>{P=`jpa/traffic-chart`,F=`Traffic summary`,I=`Compare views, visitors, likes, and comments over the selected period, with the previous period overlaid for comparison.`,L={content:`A summary of your site's views, visitors, likes, and comments.`},R=`traffic`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V({withComparison:e,metrics:t}){return(0,U.jsx)(A,{attributes:{reportParams:_(e),metrics:t}})}function H(e){return(0,U.jsx)(A,{attributes:{reportParams:_(!1,e)}})}function ve({withComparison:e,metrics:t,...n}){return(0,U.jsx)(re,{...n,widgetType:ye,renderModule:W,renderComponent:A,attributes:{reportParams:_(e),metrics:t}})}var U,W,ye,G,K,q,J,Y,X,Z,Q,$,be;e((()=>{h(),x(),y(),ie(),l(),ge(),O(),_e(),U=r(),d(),W=`storybook/traffic-chart`,ye=ne(B,D),G={metrics:{control:`check`,options:E}},K={metrics:E},q={title:`Packages/Premium Analytics/Widgets/TrafficChart`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...G},parameters:{docs:{description:{component:"Traffic over the selected period as selectable metric tabs — Views, Visitors, Likes, and Comments — over a comparative line chart. The date range and comparison come from the dashboard controls; the \"Group by\" control is the `granularity` attribute and the tab selection is the `metrics` attribute (both `relevance: 'high'`), exposed by the widget host. When comparison is on the previous period is overlaid as a same-colour dashed line and each tab shows its period-over-period delta. Views/visitors and likes/comments are fetched as two parallel requests (mirroring Calypso) to keep latency down; a pair's request is skipped while neither of its metrics is selected. Data comes from the `useStatsVisits` hook; in Storybook it is served by `registerReportMocks`."}}}},J={render:V,args:{withComparison:!1,...K},decorators:[C]},Y={render:V,args:{withComparison:!0,...K},decorators:[C]},X={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(u(`stats/visits`,`loading`),()=>u(`stats/visits`,null))},Z={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(u(`stats/visits`,`error`),()=>u(`stats/visits`,null))},Q={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>(u(`stats/visits`,`empty`),()=>u(`stats/visits`,null))},$={render:e=>(0,U.jsx)(ve,{...e}),args:{...ae,withComparison:!0,...K},argTypes:{...b,withComparison:{control:`boolean`},...G}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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