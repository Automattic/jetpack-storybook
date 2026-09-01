import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DyKOxfM8.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{C as o,Dn as s,Nr as c,gc as l,li as u,t as d}from"./build-module-CR6EsQjA.js";import{g as ee}from"./hooks-CCr23ATW.js";import{Zt as f,bn as p,bt as te,t as m}from"./src-CwHQugbh.js";import{f as ne,h as re,k as h}from"./chart-tooltip-BD7xGykv.js";import{r as ie,t as ae}from"./metric-tile-grid-skeleton-DEIuVm0-.js";import{G as g,K as _,Y as v}from"./report-metric-D6Fv61ek.js";import{t as oe}from"./widget-state-DJmOe0SV.js";import{C as se,D as ce,E as le,S as ue,T as de,b as fe,t as pe,w as me,x as y}from"./src-C1FmDW_I.js";var b,x,S=t((()=>{b=`_root_15bqk_2`,x={root:b}})),C,w,T,E=t((()=>{i(),d(),ne(),C=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`)},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`)},{id:`posts`,label:r(`Posts`,`jetpack-premium-analytics-pkg`)},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`)}],w=C.map(e=>e.id),T={icon:o,attributes:[{id:`metrics`,label:r(`Metrics`,`jetpack-premium-analytics-pkg`),type:`array`,relevance:`high`,Edit:re,elements:C.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:w}}}}));function D({metrics:e=w}){let{data:t,isLoading:n,isFetching:i,isError:a,refetch:s}=te(),c=t?.stats,l=(0,k.useMemo)(()=>{let t=new Set(e);return C.filter(e=>t.has(e.id))},[e]),u=(0,k.useMemo)(()=>l.flatMap(({id:e,label:t})=>{let n=h(c,e);return n===void 0?[]:[{key:e,label:t,icon:M[e].icon,value:n}]}),[l,c]);return(0,A.jsx)(`div`,{className:x.root,children:(0,A.jsx)(oe,{isLoading:n,isFetching:i,isError:u.length===0&&a,isEmpty:u.length===0,error:{description:r(`We couldn't load all-time stats. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:s}]},empty:{icon:o,description:l.length===0?r(`Select at least one metric to display.`,`jetpack-premium-analytics-pkg`):r(`No stats recorded yet.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,A.jsx)(ae,{tiles:l.length}),children:(0,A.jsx)(ie,{tiles:u,dataFormat:j})})})}function O({attributes:e={}}){return(0,A.jsx)(ee,{attributes:e,children:(0,A.jsx)(D,{metrics:e.metrics})})}var k,A,j,M,he=t((()=>{m(),pe(),i(),d(),k=e(n(),1),S(),E(),A=a(),j={type:`number`,options:{decimals:0}},M={views:{icon:s},visitors:{icon:u},posts:{icon:c},comments:{icon:l}}})),N,P,F,I,L,R,z,ge=t((()=>{N=`jpa/all-time-stats`,P=`All-time stats`,F=`Lifetime totals for your site — views, visitors, posts, and comments.`,I={content:`Lifetime totals for your site — views, visitors, posts, and comments.`},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function _e({metrics:e}){return(0,H.jsx)(O,{attributes:{reportParams:f(),metrics:e}})}function B(e){return(0,H.jsx)(O,{attributes:{reportParams:f(!1,e)}})}function V(e){return v(`proxy/v1.1/stats`,e),p.removeQueries({queryKey:[`stats`,`site`]}),()=>{v(`proxy/v1.1/stats`,null),p.removeQueries({queryKey:[`stats`,`site`]})}}function ve({metrics:e,...t}){return(0,H.jsx)(de,{...t,widgetType:W,renderModule:U,renderComponent:O,attributes:{reportParams:f(!0),metrics:e}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{m(),g(),le(),se(),fe(),he(),E(),ge(),H=a(),_(),U=`storybook/all-time-stats`,W=ue(z,T),G={metrics:{control:`check`,options:w}},K={metrics:w},q={title:`Packages/Premium Analytics/Widgets/AllTimeStats`,component:O,tags:[`autodocs`],argTypes:{...G},parameters:{docs:{description:{component:"The \"All-time stats\" widget. Shows lifetime totals for the site — views, visitors, posts, and comments — as a responsive grid of metric tiles, sourced from the Jetpack Stats site-summary endpoint. Which tiles appear is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer. This module has no comparison period, so the values render as bare numbers."}}}},J={render:_e,args:{...K},decorators:[y]},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>V(`loading`)},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>V(`error`)},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>V(`empty`)},Q={render:e=>(0,H.jsx)(ve,{...e}),args:{...me,...K},argTypes:{...ce,...G}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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