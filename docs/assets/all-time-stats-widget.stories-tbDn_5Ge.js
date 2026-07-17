import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-Da_5_6n_.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{I as o,an as s,et as c,f as l,n as u,ut as ee}from"./build-module-DmVuor49.js";import{Yn as d,ar as f,ut as p,yn as te}from"./chart-tooltip-DUOQnnpM.js";import{t as m}from"./metric-tile-grid-Hc9GlQ99.js";import{C as ne,S as re,T as h,k as ie}from"./report-metric-Be4IoNDv.js";import{t as g}from"./widget-state-CBUdyb6n.js";import{S as _,b as v,t as y,x as ae,y as oe}from"./src-wcUSVDu7.js";import{n as b,r as x}from"./with-widget-canvas-Dz43KNHY.js";import{i as se,t as S}from"./src-Coa7RHMl.js";var C,w,ce=t((()=>{C=`_root_15bqk_2`,w={root:C}})),T,E,D,O=t((()=>{i(),u(),S(),T=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics`)},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics`)},{id:`posts`,label:r(`Posts`,`jetpack-premium-analytics`)},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics`)}],E=T.map(e=>e.id),D={name:`jpa/all-time-stats`,title:r(`All-time stats`,`jetpack-premium-analytics`),help:{content:r(`Lifetime totals for your site — views, visitors, posts, and comments.`,`jetpack-premium-analytics`)},icon:l,attributes:[{id:`metrics`,label:r(`Metrics`,`jetpack-premium-analytics`),type:`array`,relevance:`high`,Edit:se,elements:T.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:E}}}}));function k(e,t){let n=e?.[t],r=typeof n==`string`?Number(n):n;return typeof r==`number`&&Number.isFinite(r)?r:void 0}function A({metrics:e=E}){let{data:t,isLoading:n,isFetching:i,isError:a,refetch:o}=te(),s=t?.stats,c=(0,M.useMemo)(()=>{let t=new Set(e);return T.filter(e=>t.has(e.id))},[e]),u=(0,M.useMemo)(()=>c.flatMap(({id:e,label:t})=>{let n=k(s,e);return n===void 0?[]:[{key:e,label:t,icon:F[e].icon,value:n}]}),[c,s]);return(0,N.jsx)(`div`,{className:w.root,children:(0,N.jsx)(g,{isLoading:n,isFetching:i,isError:u.length===0&&a,isEmpty:u.length===0,error:{description:r(`We couldn't load all-time stats. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:r(`Retry`,`jetpack-premium-analytics`),onClick:o}]},empty:{icon:l,description:c.length===0?r(`Select at least one metric to display.`,`jetpack-premium-analytics`):r(`No stats recorded yet.`,`jetpack-premium-analytics`)},children:(0,N.jsx)(m,{tiles:u,dataFormat:P})})})}function j({attributes:e={}}){return(0,N.jsx)(ie,{attributes:e,children:(0,N.jsx)(A,{metrics:e.metrics})})}var M,N,P,F,I=t((()=>{p(),y(),i(),u(),M=e(n(),1),ce(),O(),N=a(),P={type:`number`,options:{decimals:0}},F={views:{icon:o},visitors:{icon:ee},posts:{icon:c},comments:{icon:s}}}));function L({withComparison:e,metrics:t}){return(0,V.jsx)(j,{attributes:{reportParams:d(e),metrics:t}})}function R(e){return(0,V.jsx)(j,{attributes:{reportParams:d(!1,e)}})}function z(e){return h(`proxy/v1.1/stats`,e),f.removeQueries({queryKey:[`stats`,`site`]}),()=>{h(`proxy/v1.1/stats`,null),f.removeQueries({queryKey:[`stats`,`site`]})}}function B({withComparison:e,metrics:t,...n}){return(0,V.jsx)(v,{...n,widgetType:U,renderModule:H,renderComponent:j,attributes:{reportParams:d(e),metrics:t}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{p(),re(),ae(),b(),I(),O(),V=a(),ne(),H=`storybook/all-time-stats`,U={name:D.name,title:D.title,icon:D.icon,presentation:`framed`,attributes:D.attributes,example:D.example},W={metrics:{control:`check`,options:E}},G={metrics:E},K={title:`Packages/Premium Analytics/Widgets/AllTimeStats`,component:j,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...W},parameters:{docs:{description:{component:"The \"All-time stats\" widget. Shows lifetime totals for the site — views, visitors, posts, and comments — as a responsive grid of metric tiles, sourced from the Jetpack Stats site-summary endpoint. Which tiles appear is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer. This module has no comparison period, so the values render as bare numbers and the `WithComparison` story looks identical to `Default`."}}}},q={render:L,args:{withComparison:!1,...G},decorators:[x]},J={render:L,args:{withComparison:!0,...G},decorators:[x]},Y={render:()=>R(`last-90-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>z(`loading`)},X={render:()=>R(`last-7-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>z(`error`)},Z={render:()=>R(`last-365-days`),tags:[`!autodocs`],decorators:[x],beforeEach:()=>z(`empty`)},Q={render:e=>(0,V.jsx)(B,{...e}),args:{...oe,withComparison:!0,...G},argTypes:{..._,withComparison:{control:`boolean`},...W}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderAllTimeStats,
  args: {
    withComparison: false,
    ...ALL_METRICS_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`Default state — lifetime totals for the current preset.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderAllTimeStats,
  args: {
    withComparison: true,
    ...ALL_METRICS_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:"Comparison params flow through `reportParams`, but the site summary has no\ncomparison data, so the widget renders identically to `Default` — no fake\ndeltas.",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{q as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,J as WithComparison,$ as __namedExportsOrder,K as default};