import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-yGZutq_9.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{C as ee,Dn as o,Il as s,Nr as c,bc as l,di as u,t as d}from"./build-module-zwSmKorH.js";import{J as te,Z as ne,pt as re,y as ie}from"./wp-date-settings-C-b-72VZ.js";import{Cn as f,Ct as p,en as m,i as h}from"./date-filters-panel-DMZH1lcL.js";import{r as ae,t as oe}from"./metric-tile-grid-skeleton-C5O0XEL_.js";import{U as se,W as ce,q as g}from"./report-metric-D0AImUnI.js";import{t as le}from"./widget-state-BMRTxfHI.js";import{C as ue,D as _,E as v,S as y,T as de,b as fe,t as pe,w as me,x as b}from"./src-CNXG9kTP.js";var x,S,C=t((()=>{x=`_root_15bqk_2`,S={root:x}})),w,T,E,D=t((()=>{i(),d(),te(),w=[{id:`views`,label:r(`Views`,`jetpack-premium-analytics-pkg`)},{id:`visitors`,label:r(`Visitors`,`jetpack-premium-analytics-pkg`)},{id:`posts`,label:r(`Posts`,`jetpack-premium-analytics-pkg`)},{id:`comments`,label:r(`Comments`,`jetpack-premium-analytics-pkg`)}],T=w.map(e=>e.id),E={icon:s,attributes:[{id:`metrics`,label:r(`Metrics`,`jetpack-premium-analytics-pkg`),type:`array`,relevance:`high`,Edit:ne,elements:w.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:T}}}}));function he({metrics:e=T}){let{data:t,isLoading:n,isFetching:i,isError:a,refetch:o}=p(),s=t?.stats,c=(0,k.useMemo)(()=>{let t=new Set(e);return w.filter(e=>t.has(e.id))},[e]),l=(0,k.useMemo)(()=>c.flatMap(({id:e,label:t})=>{let n=re(s,e);return n===void 0?[]:[{key:e,label:t,icon:M[e].icon,value:n}]}),[c,s]);return(0,A.jsx)(`div`,{className:S.root,children:(0,A.jsx)(le,{isLoading:n,isFetching:i,isError:l.length===0&&a,isEmpty:l.length===0,error:{description:r(`We couldn't load all-time stats. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:r(`Retry`,`jetpack-premium-analytics-pkg`),onClick:o}]},empty:{icon:ee,description:c.length===0?r(`Select at least one metric to display.`,`jetpack-premium-analytics-pkg`):r(`No stats recorded yet.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,A.jsx)(oe,{tiles:c.length}),children:(0,A.jsx)(ae,{tiles:l,dataFormat:j})})})}function O({attributes:e={}}){return(0,A.jsx)(ie,{attributes:e,children:(0,A.jsx)(he,{metrics:e.metrics})})}var k,A,j,M,ge=t((()=>{h(),pe(),i(),d(),k=e(n(),1),C(),D(),A=a(),j={type:`number`,options:{decimals:0}},M={views:{icon:o},visitors:{icon:u},posts:{icon:c},comments:{icon:l}}})),N,P,F,I,L,R,z,_e=t((()=>{N=`jpa/all-time-stats`,P=`All-time stats`,F=`Lifetime totals for your site — views, visitors, posts, and comments.`,I={content:`Your totals since you started tracking — views, visitors, posts, and comments.`},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function ve({metrics:e}){return(0,H.jsx)(O,{attributes:{reportParams:m(),metrics:e}})}function B(e){return(0,H.jsx)(O,{attributes:{reportParams:m(!1,e)}})}function V(e){return g(`proxy/v1.1/stats`,e),f.removeQueries({queryKey:[`stats`,`site`]}),()=>{g(`proxy/v1.1/stats`,null),f.removeQueries({queryKey:[`stats`,`site`]})}}function ye({metrics:e,...t}){return(0,H.jsx)(de,{...t,widgetType:W,renderModule:U,renderComponent:O,attributes:{reportParams:m(!0),metrics:e}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{h(),se(),v(),ue(),fe(),ge(),D(),_e(),H=a(),ce(),U=`storybook/all-time-stats`,W=y(z,E),G={metrics:{control:`check`,options:T}},K={metrics:T},q={title:`Packages/Premium Analytics/Widgets/AllTimeStats`,component:O,tags:[`autodocs`],argTypes:{...G},parameters:{docs:{description:{component:"The \"All-time stats\" widget. Shows lifetime totals for the site — views, visitors, posts, and comments — as a responsive grid of metric tiles, sourced from the Jetpack Stats site-summary endpoint. Which tiles appear is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer. This module has no comparison period, so the values render as bare numbers."}}}},J={render:ve,args:{...K},decorators:[b]},Y={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>V(`loading`)},X={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>V(`error`)},Z={render:()=>B(`last-365-days`),tags:[`!autodocs`],decorators:[b],beforeEach:()=>V(`empty`)},Q={render:e=>(0,H.jsx)(ye,{...e}),args:{...me,...K},argTypes:{..._,...G}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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