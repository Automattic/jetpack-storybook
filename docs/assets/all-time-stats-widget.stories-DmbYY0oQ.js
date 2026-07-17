import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-Da_5_6n_.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{I as o,an as s,et as c,f as l,n as u,tr as d,ut as f}from"./build-module-DmVuor49.js";import{W as p,t as ee}from"./build-module-Bw_mQw8y.js";import{Yn as m,ar as h,ut as g,yn as te}from"./chart-tooltip-BjQVvEOi.js";import{t as ne}from"./metric-with-comparison-C1-CZt4L.js";import{C as re,S as ie,T as _,k as ae}from"./report-metric-dQWVm9Cg.js";import{t as oe}from"./widget-state-iNA6qs6c.js";import{S as v,b as se,t as ce,x as le,y as ue}from"./src-DdOdgMkN.js";import{n as de,r as y}from"./with-widget-canvas-Dz43KNHY.js";import{i as fe,t as pe}from"./src-q6LUuF3z.js";var b,x,S,C,w,T,E,D=t((()=>{b=`_root_a2r3a_1`,x=`_list_a2r3a_6`,S=`_row_a2r3a_12`,C=`_icon_a2r3a_18`,w=`_label_a2r3a_23`,T=`_value_a2r3a_27`,E={root:b,list:x,row:S,icon:C,label:w,value:T}})),O,k,A,j=t((()=>{i(),u(),pe(),O=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics`)},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics`)},{id:`posts`,label:r(`Posts`,`jetpack-premium-analytics`)},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics`)}],k=O.map(e=>e.id),A={name:`jpa/all-time-stats`,title:r(`All-time stats`,`jetpack-premium-analytics`),help:{content:r(`Lifetime totals for your site — views, visitors, posts, and comments.`,`jetpack-premium-analytics`)},icon:l,attributes:[{id:`metrics`,label:r(`Metrics`,`jetpack-premium-analytics`),type:`array`,relevance:`high`,Edit:fe,elements:O.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:k}}}}));function me(e,t){let n=e?.[t],r=typeof n==`string`?Number(n):n;return typeof r==`number`&&Number.isFinite(r)?r:void 0}function he({metrics:e=k}){let{data:t,isLoading:n,isFetching:i,isError:a,refetch:o}=te(),s=t?.stats,c=(0,N.useMemo)(()=>{let t=new Set(e);return O.filter(e=>t.has(e.id))},[e]),u=(0,N.useMemo)(()=>c.flatMap(({id:e,label:t})=>{let n=me(s,e);return n===void 0?[]:[{key:e,label:t,icon:I[e].icon,value:n}]}),[c,s]);return(0,P.jsx)(`div`,{className:E.root,children:(0,P.jsx)(oe,{isLoading:n,isFetching:i,isError:u.length===0&&a,isEmpty:u.length===0,error:{description:r(`We couldn't load all-time stats. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:r(`Retry`,`jetpack-premium-analytics`),onClick:o}]},empty:{icon:l,description:c.length===0?r(`Select at least one metric to display.`,`jetpack-premium-analytics`):r(`No stats recorded yet.`,`jetpack-premium-analytics`)},children:(0,P.jsx)(`div`,{className:E.list,children:u.map(e=>(0,P.jsxs)(`div`,{className:E.row,children:[(0,P.jsx)(d,{className:E.icon,icon:e.icon}),(0,P.jsx)(p,{className:E.label,children:e.label}),(0,P.jsx)(ne,{className:E.value,value:e.value,dataFormat:F,fontSize:`md`})]},e.key))})})})}function M({attributes:e={}}){return(0,P.jsx)(ae,{attributes:e,children:(0,P.jsx)(he,{metrics:e.metrics})})}var N,P,F,I,L=t((()=>{g(),ce(),i(),u(),ee(),N=e(n(),1),D(),j(),P=a(),F={type:`number`,options:{decimals:0}},I={views:{icon:o},visitors:{icon:f},posts:{icon:c},comments:{icon:s}}}));function R({withComparison:e,metrics:t}){return(0,V.jsx)(M,{attributes:{reportParams:m(e),metrics:t}})}function z(e){return(0,V.jsx)(M,{attributes:{reportParams:m(!1,e)}})}function B(e){return _(`proxy/v1.1/stats`,e),h.removeQueries({queryKey:[`stats`,`site`]}),()=>{_(`proxy/v1.1/stats`,null),h.removeQueries({queryKey:[`stats`,`site`]})}}function ge({withComparison:e,metrics:t,...n}){return(0,V.jsx)(se,{...n,widgetType:U,renderModule:H,renderComponent:M,attributes:{reportParams:m(e),metrics:t}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{g(),ie(),le(),de(),L(),j(),V=a(),re(),H=`storybook/all-time-stats`,U={name:A.name,title:A.title,icon:A.icon,presentation:`framed`,attributes:A.attributes,example:A.example},W={metrics:{control:`check`,options:k}},G={metrics:k},K={title:`Packages/Premium Analytics/Widgets/AllTimeStats`,component:M,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...W},parameters:{docs:{description:{component:"The \"All-time stats\" widget. Shows lifetime totals for the site — views, visitors, posts, and comments — as a labelled list of icon rows, sourced from the Jetpack Stats site-summary endpoint. Which rows appear is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer. This module has no comparison period, so the values render as bare numbers and the `WithComparison` story looks identical to `Default`."}}}},q={render:R,args:{withComparison:!1,...G},decorators:[y]},J={render:R,args:{withComparison:!0,...G},decorators:[y]},Y={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>B(`loading`)},X={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>B(`error`)},Z={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[y],beforeEach:()=>B(`empty`)},Q={render:e=>(0,V.jsx)(ge,{...e}),args:{...ue,withComparison:!0,...G},argTypes:{...v,withComparison:{control:`boolean`},...W}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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