import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-Da_5_6n_.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{I as o,an as s,et as c,f as l,n as u,ut as ee}from"./build-module-DmVuor49.js";import{Ct as d,Fn as te,fr as f,kr as p,u as ne}from"./chart-tooltip-BWsaeyEF.js";import{t as re}from"./metric-tile-grid-DxxfQyMm.js";import{I as m,L as ie,U as ae,z as h}from"./report-metric-DfWk0iZA.js";import{t as oe}from"./widget-state-C7N955Zs.js";import{C as se,D as ce,E as le,S as ue,T as de,b as g,t as _,w as fe,x as v}from"./src-CSsxV0-H.js";import{i as pe,t as y}from"./src-tWb-n8nT.js";var b,x,me=t((()=>{b=`_root_15bqk_2`,x={root:b}})),S,C,w,T=t((()=>{i(),u(),y(),S=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`)},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`)},{id:`posts`,label:r(`Posts`,`jetpack-premium-analytics-pkg`)},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`)}],C=S.map(e=>e.id),w={icon:l,attributes:[{id:`metrics`,label:r(`Metrics`,`jetpack-premium-analytics-pkg`),type:`array`,relevance:`high`,Edit:pe,elements:S.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:C}}}}));function E({metrics:e=C}){let{data:t,isLoading:n,isFetching:i,isError:a,refetch:o}=te(),s=t?.stats,c=(0,O.useMemo)(()=>{let t=new Set(e);return S.filter(e=>t.has(e.id))},[e]),u=(0,O.useMemo)(()=>c.flatMap(({id:e,label:t})=>{let n=ne(s,e);return n===void 0?[]:[{key:e,label:t,icon:j[e].icon,value:n}]}),[c,s]);return(0,k.jsx)(`div`,{className:x.root,children:(0,k.jsx)(oe,{isLoading:n,isFetching:i,isError:u.length===0&&a,isEmpty:u.length===0,error:{description:r(`We couldn't load all-time stats. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o}]},empty:{icon:l,description:c.length===0?r(`Select at least one metric to display.`,`jetpack-premium-analytics-pkg`):r(`No stats recorded yet.`,`jetpack-premium-analytics-pkg`)},children:(0,k.jsx)(re,{tiles:u,dataFormat:A})})})}function D({attributes:e={}}){return(0,k.jsx)(ae,{attributes:e,children:(0,k.jsx)(E,{metrics:e.metrics})})}var O,k,A,j,M=t((()=>{d(),_(),i(),u(),O=e(n(),1),me(),T(),k=a(),A={type:`number`,options:{decimals:0}},j={views:{icon:o},visitors:{icon:ee},posts:{icon:c},comments:{icon:s}}})),N,P,F,I,L,R,z,he=t((()=>{N=`jpa/all-time-stats`,P=`All-time stats`,F=`Lifetime totals for your site — views, visitors, posts, and comments.`,I={content:`Lifetime totals for your site — views, visitors, posts, and comments.`},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function ge({metrics:e}){return(0,H.jsx)(D,{attributes:{reportParams:f(),metrics:e}})}function B(e){return(0,H.jsx)(D,{attributes:{reportParams:f(!1,e)}})}function V(e){return h(`proxy/v1.1/stats`,e),p.removeQueries({queryKey:[`stats`,`site`]}),()=>{h(`proxy/v1.1/stats`,null),p.removeQueries({queryKey:[`stats`,`site`]})}}function _e({metrics:e,...t}){return(0,H.jsx)(de,{...t,widgetType:W,renderModule:U,renderComponent:D,attributes:{reportParams:f(!0),metrics:e}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{d(),m(),le(),se(),g(),M(),T(),he(),H=a(),ie(),U=`storybook/all-time-stats`,W=ue(z,w),G={metrics:{control:`check`,options:C}},K={metrics:C},q={title:`Packages/Premium Analytics/Widgets/AllTimeStats`,component:D,tags:[`autodocs`],argTypes:{...G},parameters:{docs:{description:{component:"The \"All-time stats\" widget. Shows lifetime totals for the site — views, visitors, posts, and comments — as a responsive grid of metric tiles, sourced from the Jetpack Stats site-summary endpoint. Which tiles appear is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer. This module has no comparison period, so the values render as bare numbers."}}}},J={render:ge,args:{...K},decorators:[v]},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>V(`loading`)},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>V(`error`)},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[v],beforeEach:()=>V(`empty`)},Q={render:e=>(0,H.jsx)(_e,{...e}),args:{...fe,...K},argTypes:{...ce,...G}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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