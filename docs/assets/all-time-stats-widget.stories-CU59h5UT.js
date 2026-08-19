import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DyKOxfM8.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{On as o,Pr as s,_c as c,n as l,ui as ee,w as u}from"./build-module-CDRs4YxF.js";import{J as te,Z as d,q as ne,tt as re}from"./report-metric-BJXFm3aW.js";import{Cr as f,Kn as ie,Nt as p,b as m,c as h,d as g,zr as _}from"./chart-tooltip-NxBvBReY.js";import{r as v,t as ae}from"./metric-tile-grid-skeleton-Dzqu0MH5.js";import{t as oe}from"./widget-state-BwxLrgsq.js";import{C as se,D as ce,E as le,S as ue,T as de,b as fe,t as pe,w as y,x as b}from"./src-CGQy9yxW.js";var x,S,me=t((()=>{x=`_root_15bqk_2`,S={root:x}})),C,w,T,E=t((()=>{i(),l(),h(),C=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`)},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`)},{id:`posts`,label:r(`Posts`,`jetpack-premium-analytics-pkg`)},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`)}],w=C.map(e=>e.id),T={icon:u,attributes:[{id:`metrics`,label:r(`Metrics`,`jetpack-premium-analytics-pkg`),type:`array`,relevance:`high`,Edit:g,elements:C.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:w}}}}));function he({metrics:e=w}){let{data:t,isLoading:n,isFetching:i,isError:a,refetch:o}=ie(),s=t?.stats,c=(0,O.useMemo)(()=>{let t=new Set(e);return C.filter(e=>t.has(e.id))},[e]),l=(0,O.useMemo)(()=>c.flatMap(({id:e,label:t})=>{let n=m(s,e);return n===void 0?[]:[{key:e,label:t,icon:j[e].icon,value:n}]}),[c,s]);return(0,k.jsx)(`div`,{className:S.root,children:(0,k.jsx)(oe,{isLoading:n,isFetching:i,isError:l.length===0&&a,isEmpty:l.length===0,error:{description:r(`We couldn't load all-time stats. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o}]},empty:{icon:u,description:c.length===0?r(`Select at least one metric to display.`,`jetpack-premium-analytics-pkg`):r(`No stats recorded yet.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,k.jsx)(ae,{tiles:c.length}),children:(0,k.jsx)(v,{tiles:l,dataFormat:A})})})}function D({attributes:e={}}){return(0,k.jsx)(re,{attributes:e,children:(0,k.jsx)(he,{metrics:e.metrics})})}var O,k,A,j,ge=t((()=>{p(),pe(),i(),l(),O=e(n(),1),me(),E(),k=a(),A={type:`number`,options:{decimals:0}},j={views:{icon:o},visitors:{icon:ee},posts:{icon:s},comments:{icon:c}}})),M,N,P,F,I,L,R,_e=t((()=>{M=`jpa/all-time-stats`,N=`All-time stats`,P=`Lifetime totals for your site — views, visitors, posts, and comments.`,F={content:`Lifetime totals for your site — views, visitors, posts, and comments.`},I=`stats`,L=`framed`,R={name:M,title:N,description:P,help:F,category:I,presentation:L}}));function ve({metrics:e}){return(0,H.jsx)(D,{attributes:{reportParams:f(),metrics:e}})}function z(e){return(0,H.jsx)(D,{attributes:{reportParams:f(!1,e)}})}function B(e){return d(`proxy/v1.1/stats`,e),_.removeQueries({queryKey:[`stats`,`site`]}),()=>{d(`proxy/v1.1/stats`,null),_.removeQueries({queryKey:[`stats`,`site`]})}}function V({metrics:e,...t}){return(0,H.jsx)(de,{...t,widgetType:W,renderModule:U,renderComponent:D,attributes:{reportParams:f(!0),metrics:e}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{p(),ne(),le(),se(),fe(),ge(),E(),_e(),H=a(),te(),U=`storybook/all-time-stats`,W=ue(R,T),G={metrics:{control:`check`,options:w}},K={metrics:w},q={title:`Packages/Premium Analytics/Widgets/AllTimeStats`,component:D,tags:[`autodocs`],argTypes:{...G},parameters:{docs:{description:{component:"The \"All-time stats\" widget. Shows lifetime totals for the site — views, visitors, posts, and comments — as a responsive grid of metric tiles, sourced from the Jetpack Stats site-summary endpoint. Which tiles appear is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer. This module has no comparison period, so the values render as bare numbers."}}}},J={render:ve,args:{...K},decorators:[b]},Y={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>B(`loading`)},X={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>B(`error`)},Z={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>B(`empty`)},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...y,...K},argTypes:{...ce,...G}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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