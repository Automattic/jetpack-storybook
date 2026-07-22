import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-Da_5_6n_.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{I as o,an as s,et as c,f as l,n as u,ut as d}from"./build-module-DmVuor49.js";import{Dn as ee,ht as f,ir as p,o as m,xr as h}from"./chart-tooltip-BvKnA4Ej.js";import{t as g}from"./metric-tile-grid-DWYZqS3E.js";import{F as _,M as te,N as ne,z as re}from"./report-metric-BBgOiYJZ.js";import{t as ie}from"./widget-state-Dq0PZ7To.js";import{C as ae,S as v,T as y,b,t as x,w as S,x as C}from"./src-Vd2hm5Bb.js";import{i as w,t as T}from"./src-CPsF629a.js";var E,D,oe=t((()=>{E=`_root_15bqk_2`,D={root:E}})),O,k,A,j=t((()=>{i(),u(),T(),O=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics`)},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics`)},{id:`posts`,label:r(`Posts`,`jetpack-premium-analytics`)},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics`)}],k=O.map(e=>e.id),A={name:`jpa/all-time-stats`,title:r(`All-time stats`,`jetpack-premium-analytics`),help:{content:r(`Lifetime totals for your site — views, visitors, posts, and comments.`,`jetpack-premium-analytics`)},icon:l,attributes:[{id:`metrics`,label:r(`Metrics`,`jetpack-premium-analytics`),type:`array`,relevance:`high`,Edit:w,elements:O.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:k}}}}));function se({metrics:e=k}){let{data:t,isLoading:n,isFetching:i,isError:a,refetch:o}=ee(),s=t?.stats,c=(0,N.useMemo)(()=>{let t=new Set(e);return O.filter(e=>t.has(e.id))},[e]),u=(0,N.useMemo)(()=>c.flatMap(({id:e,label:t})=>{let n=m(s,e);return n===void 0?[]:[{key:e,label:t,icon:I[e].icon,value:n}]}),[c,s]);return(0,P.jsx)(`div`,{className:D.root,children:(0,P.jsx)(ie,{isLoading:n,isFetching:i,isError:u.length===0&&a,isEmpty:u.length===0,error:{description:r(`We couldn't load all-time stats. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:r(`Retry`,`jetpack-premium-analytics`),onClick:o}]},empty:{icon:l,description:c.length===0?r(`Select at least one metric to display.`,`jetpack-premium-analytics`):r(`No stats recorded yet.`,`jetpack-premium-analytics`)},children:(0,P.jsx)(g,{tiles:u,dataFormat:F})})})}function M({attributes:e={}}){return(0,P.jsx)(re,{attributes:e,children:(0,P.jsx)(se,{metrics:e.metrics})})}var N,P,F,I,L=t((()=>{f(),x(),i(),u(),N=e(n(),1),oe(),j(),P=a(),F={type:`number`,options:{decimals:0}},I={views:{icon:o},visitors:{icon:d},posts:{icon:c},comments:{icon:s}}}));function R({metrics:e}){return(0,H.jsx)(M,{attributes:{reportParams:p(),metrics:e}})}function z(e){return(0,H.jsx)(M,{attributes:{reportParams:p(!1,e)}})}function B(e){return _(`proxy/v1.1/stats`,e),h.removeQueries({queryKey:[`stats`,`site`]}),()=>{_(`proxy/v1.1/stats`,null),h.removeQueries({queryKey:[`stats`,`site`]})}}function V({metrics:e,...t}){return(0,H.jsx)(ae,{...t,widgetType:W,renderModule:U,renderComponent:M,attributes:{reportParams:p(!0),metrics:e}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{f(),te(),S(),b(),L(),j(),H=a(),ne(),U=`storybook/all-time-stats`,W={name:A.name,title:A.title,icon:A.icon,presentation:`framed`,attributes:A.attributes,example:A.example},G={metrics:{control:`check`,options:k}},K={metrics:k},q={title:`Packages/Premium Analytics/Widgets/AllTimeStats`,component:M,tags:[`autodocs`],argTypes:{...G},parameters:{docs:{description:{component:"The \"All-time stats\" widget. Shows lifetime totals for the site — views, visitors, posts, and comments — as a responsive grid of metric tiles, sourced from the Jetpack Stats site-summary endpoint. Which tiles appear is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer. This module has no comparison period, so the values render as bare numbers."}}}},J={render:R,args:{...K},decorators:[C]},Y={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>B(`loading`)},X={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>B(`error`)},Z={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>B(`empty`)},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...v,...K},argTypes:{...y,...G}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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