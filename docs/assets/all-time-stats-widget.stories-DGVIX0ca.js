import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DyKOxfM8.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{On as o,Pr as s,_c as c,n as l,ui as u,w as d}from"./build-module-CDRs4YxF.js";import{$ as ee,K as te,Y as f,q as ne}from"./report-metric-D2eUyyVx.js";import{Rn as re,Tt as p,f as ie,hr as m,jr as h}from"./chart-tooltip-Y3SA-nRI.js";import{t as ae}from"./metric-tile-grid-B7VPs-Ul.js";import{C as g,D as _,E as v,S as oe,T as se,b as ce,t as le,w as ue,x as y}from"./src-BjKJ7i42.js";import{t as de}from"./widget-state-Ba0_bM_U.js";import{i as fe,t as b}from"./src-8X9gth28.js";var x,S,C=t((()=>{x=`_root_15bqk_2`,S={root:x}})),w,T,E,D=t((()=>{i(),l(),b(),w=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`)},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`)},{id:`posts`,label:r(`Posts`,`jetpack-premium-analytics-pkg`)},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`)}],T=w.map(e=>e.id),E={icon:d,attributes:[{id:`metrics`,label:r(`Metrics`,`jetpack-premium-analytics-pkg`),type:`array`,relevance:`high`,Edit:fe,elements:w.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:T}}}}));function pe({metrics:e=T}){let{data:t,isLoading:n,isFetching:i,isError:a,refetch:o}=re(),s=t?.stats,c=(0,k.useMemo)(()=>{let t=new Set(e);return w.filter(e=>t.has(e.id))},[e]),l=(0,k.useMemo)(()=>c.flatMap(({id:e,label:t})=>{let n=ie(s,e);return n===void 0?[]:[{key:e,label:t,icon:M[e].icon,value:n}]}),[c,s]);return(0,A.jsx)(`div`,{className:S.root,children:(0,A.jsx)(de,{isLoading:n,isFetching:i,isError:l.length===0&&a,isEmpty:l.length===0,error:{description:r(`We couldn't load all-time stats. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o}]},empty:{icon:d,description:c.length===0?r(`Select at least one metric to display.`,`jetpack-premium-analytics-pkg`):r(`No stats recorded yet.`,`jetpack-premium-analytics-pkg`)},children:(0,A.jsx)(ae,{tiles:l,dataFormat:j})})})}function O({attributes:e={}}){return(0,A.jsx)(ee,{attributes:e,children:(0,A.jsx)(pe,{metrics:e.metrics})})}var k,A,j,M,me=t((()=>{p(),le(),i(),l(),k=e(n(),1),C(),D(),A=a(),j={type:`number`,options:{decimals:0}},M={views:{icon:o},visitors:{icon:u},posts:{icon:s},comments:{icon:c}}})),N,P,F,I,L,R,z,he=t((()=>{N=`jpa/all-time-stats`,P=`All-time stats`,F=`Lifetime totals for your site — views, visitors, posts, and comments.`,I={content:`Lifetime totals for your site — views, visitors, posts, and comments.`},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function ge({metrics:e}){return(0,H.jsx)(O,{attributes:{reportParams:m(),metrics:e}})}function B(e){return(0,H.jsx)(O,{attributes:{reportParams:m(!1,e)}})}function V(e){return f(`proxy/v1.1/stats`,e),h.removeQueries({queryKey:[`stats`,`site`]}),()=>{f(`proxy/v1.1/stats`,null),h.removeQueries({queryKey:[`stats`,`site`]})}}function _e({metrics:e,...t}){return(0,H.jsx)(se,{...t,widgetType:W,renderModule:U,renderComponent:O,attributes:{reportParams:m(!0),metrics:e}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{p(),te(),v(),g(),ce(),me(),D(),he(),H=a(),ne(),U=`storybook/all-time-stats`,W=oe(z,E),G={metrics:{control:`check`,options:T}},K={metrics:T},q={title:`Packages/Premium Analytics/Widgets/AllTimeStats`,component:O,tags:[`autodocs`],argTypes:{...G},parameters:{docs:{description:{component:"The \"All-time stats\" widget. Shows lifetime totals for the site — views, visitors, posts, and comments — as a responsive grid of metric tiles, sourced from the Jetpack Stats site-summary endpoint. Which tiles appear is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer. This module has no comparison period, so the values render as bare numbers."}}}},J={render:ge,args:{...K},decorators:[y]},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>V(`loading`)},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>V(`error`)},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>V(`empty`)},Q={render:e=>(0,H.jsx)(_e,{...e}),args:{...ue,...K},argTypes:{..._,...G}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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