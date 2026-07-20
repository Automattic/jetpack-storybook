import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-Da_5_6n_.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{I as o,an as s,et as c,f as l,n as u,ut as ee}from"./build-module-DmVuor49.js";import{Cn as te,dt as d,er as f,hr as p}from"./chart-tooltip-CtUAWvWt.js";import{t as ne}from"./metric-tile-grid-CmuwwNQw.js";import{M as re,P as m,R as h,j as ie}from"./report-metric-DhmpTkeW.js";import{t as ae}from"./widget-state-6DU05QGT.js";import{C as oe,S as g,T as _,b as v,t as se,w as y,x as b}from"./src-W4cZO2BJ.js";import{i as x,t as S}from"./src-C4hwueIV.js";var C,w,T=t((()=>{C=`_root_15bqk_2`,w={root:C}})),E,D,O,k=t((()=>{i(),u(),S(),E=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics`)},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics`)},{id:`posts`,label:r(`Posts`,`jetpack-premium-analytics`)},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics`)}],D=E.map(e=>e.id),O={name:`jpa/all-time-stats`,title:r(`All-time stats`,`jetpack-premium-analytics`),help:{content:r(`Lifetime totals for your site — views, visitors, posts, and comments.`,`jetpack-premium-analytics`)},icon:l,attributes:[{id:`metrics`,label:r(`Metrics`,`jetpack-premium-analytics`),type:`array`,relevance:`high`,Edit:x,elements:E.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:D}}}}));function A(e,t){let n=e?.[t],r=typeof n==`string`?Number(n):n;return typeof r==`number`&&Number.isFinite(r)?r:void 0}function j({metrics:e=D}){let{data:t,isLoading:n,isFetching:i,isError:a,refetch:o}=te(),s=t?.stats,c=(0,N.useMemo)(()=>{let t=new Set(e);return E.filter(e=>t.has(e.id))},[e]),u=(0,N.useMemo)(()=>c.flatMap(({id:e,label:t})=>{let n=A(s,e);return n===void 0?[]:[{key:e,label:t,icon:I[e].icon,value:n}]}),[c,s]);return(0,P.jsx)(`div`,{className:w.root,children:(0,P.jsx)(ae,{isLoading:n,isFetching:i,isError:u.length===0&&a,isEmpty:u.length===0,error:{description:r(`We couldn't load all-time stats. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:r(`Retry`,`jetpack-premium-analytics`),onClick:o}]},empty:{icon:l,description:c.length===0?r(`Select at least one metric to display.`,`jetpack-premium-analytics`):r(`No stats recorded yet.`,`jetpack-premium-analytics`)},children:(0,P.jsx)(ne,{tiles:u,dataFormat:F})})})}function M({attributes:e={}}){return(0,P.jsx)(h,{attributes:e,children:(0,P.jsx)(j,{metrics:e.metrics})})}var N,P,F,I,L=t((()=>{d(),se(),i(),u(),N=e(n(),1),T(),k(),P=a(),F={type:`number`,options:{decimals:0}},I={views:{icon:o},visitors:{icon:ee},posts:{icon:c},comments:{icon:s}}}));function R({metrics:e}){return(0,H.jsx)(M,{attributes:{reportParams:f(),metrics:e}})}function z(e){return(0,H.jsx)(M,{attributes:{reportParams:f(!1,e)}})}function B(e){return m(`proxy/v1.1/stats`,e),p.removeQueries({queryKey:[`stats`,`site`]}),()=>{m(`proxy/v1.1/stats`,null),p.removeQueries({queryKey:[`stats`,`site`]})}}function V({metrics:e,...t}){return(0,H.jsx)(oe,{...t,widgetType:W,renderModule:U,renderComponent:M,attributes:{reportParams:f(!0),metrics:e}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{d(),ie(),y(),v(),L(),k(),H=a(),re(),U=`storybook/all-time-stats`,W={name:O.name,title:O.title,icon:O.icon,presentation:`framed`,attributes:O.attributes,example:O.example},G={metrics:{control:`check`,options:D}},K={metrics:D},q={title:`Packages/Premium Analytics/Widgets/AllTimeStats`,component:M,tags:[`autodocs`],argTypes:{...G},parameters:{docs:{description:{component:"The \"All-time stats\" widget. Shows lifetime totals for the site — views, visitors, posts, and comments — as a responsive grid of metric tiles, sourced from the Jetpack Stats site-summary endpoint. Which tiles appear is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer. This module has no comparison period, so the values render as bare numbers."}}}},J={render:R,args:{...K},decorators:[b]},Y={render:()=>z(`last-90-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>B(`loading`)},X={render:()=>z(`last-7-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>B(`error`)},Z={render:()=>z(`last-365-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>B(`empty`)},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...g,...K},argTypes:{..._,...G}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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