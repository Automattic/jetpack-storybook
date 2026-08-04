import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-2QZQpBH2.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{I as o,an as s,et as c,f as l,n as u,ut as ee}from"./build-module-DoJYX5DX.js";import{G as d,W as te,Z as ne,q as f}from"./report-metric-c1D_qvJb.js";import{Dr as p,Nn as re,u as ie,ur as m,xt as h}from"./chart-tooltip-zAw7regG.js";import{t as ae}from"./metric-tile-grid-UV2_gsu5.js";import{t as g}from"./widget-state-BTUmQLxQ.js";import{C as _,D as v,E as oe,S as se,T as ce,b as le,t as ue,w as de,x as y}from"./src-C3TDM8h_.js";import{i as fe,t as b}from"./src-PCCvVAgp.js";var x,S,C=t((()=>{x=`_root_15bqk_2`,S={root:x}})),w,T,E,D=t((()=>{i(),u(),b(),w=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`)},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`)},{id:`posts`,label:r(`Posts`,`jetpack-premium-analytics-pkg`)},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`)}],T=w.map(e=>e.id),E={icon:l,attributes:[{id:`metrics`,label:r(`Metrics`,`jetpack-premium-analytics-pkg`),type:`array`,relevance:`high`,Edit:fe,elements:w.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:T}}}}));function pe({metrics:e=T}){let{data:t,isLoading:n,isFetching:i,isError:a,refetch:o}=re(),s=t?.stats,c=(0,k.useMemo)(()=>{let t=new Set(e);return w.filter(e=>t.has(e.id))},[e]),u=(0,k.useMemo)(()=>c.flatMap(({id:e,label:t})=>{let n=ie(s,e);return n===void 0?[]:[{key:e,label:t,icon:M[e].icon,value:n}]}),[c,s]);return(0,A.jsx)(`div`,{className:S.root,children:(0,A.jsx)(g,{isLoading:n,isFetching:i,isError:u.length===0&&a,isEmpty:u.length===0,error:{description:r(`We couldn't load all-time stats. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o}]},empty:{icon:l,description:c.length===0?r(`Select at least one metric to display.`,`jetpack-premium-analytics-pkg`):r(`No stats recorded yet.`,`jetpack-premium-analytics-pkg`)},children:(0,A.jsx)(ae,{tiles:u,dataFormat:j})})})}function O({attributes:e={}}){return(0,A.jsx)(ne,{attributes:e,children:(0,A.jsx)(pe,{metrics:e.metrics})})}var k,A,j,M,me=t((()=>{h(),ue(),i(),u(),k=e(n(),1),C(),D(),A=a(),j={type:`number`,options:{decimals:0}},M={views:{icon:o},visitors:{icon:ee},posts:{icon:c},comments:{icon:s}}})),N,P,F,I,L,R,z,he=t((()=>{N=`jpa/all-time-stats`,P=`All-time stats`,F=`Lifetime totals for your site — views, visitors, posts, and comments.`,I={content:`Lifetime totals for your site — views, visitors, posts, and comments.`},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function ge({metrics:e}){return(0,H.jsx)(O,{attributes:{reportParams:m(),metrics:e}})}function B(e){return(0,H.jsx)(O,{attributes:{reportParams:m(!1,e)}})}function V(e){return f(`proxy/v1.1/stats`,e),p.removeQueries({queryKey:[`stats`,`site`]}),()=>{f(`proxy/v1.1/stats`,null),p.removeQueries({queryKey:[`stats`,`site`]})}}function _e({metrics:e,...t}){return(0,H.jsx)(ce,{...t,widgetType:W,renderModule:U,renderComponent:O,attributes:{reportParams:m(!0),metrics:e}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{h(),te(),oe(),_(),le(),me(),D(),he(),H=a(),d(),U=`storybook/all-time-stats`,W=se(z,E),G={metrics:{control:`check`,options:T}},K={metrics:T},q={title:`Packages/Premium Analytics/Widgets/AllTimeStats`,component:O,tags:[`autodocs`],argTypes:{...G},parameters:{docs:{description:{component:"The \"All-time stats\" widget. Shows lifetime totals for the site — views, visitors, posts, and comments — as a responsive grid of metric tiles, sourced from the Jetpack Stats site-summary endpoint. Which tiles appear is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer. This module has no comparison period, so the values render as bare numbers."}}}},J={render:ge,args:{...K},decorators:[y]},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>V(`loading`)},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>V(`error`)},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>V(`empty`)},Q={render:e=>(0,H.jsx)(_e,{...e}),args:{...de,...K},argTypes:{...v,...G}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderAllTimeStats,
  args: {
    ...ALL_METRICS_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:`Default state — lifetime totals for the current preset.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderAllTimeStatsOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceSiteSummaryState('loading')
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderAllTimeStatsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceSiteSummaryState('error')
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderAllTimeStatsOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceSiteSummaryState('empty')
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no summary fields: the widget shows its empty state (the neutral
trending glyph and "No stats recorded yet.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <AllTimeStatsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    ...ALL_METRICS_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    ...METRIC_ARG_TYPES
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,q as default};