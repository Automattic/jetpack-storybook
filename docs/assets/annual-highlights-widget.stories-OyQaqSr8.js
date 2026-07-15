import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{n as r,t as i}from"./build-module-DQ5lAs4a.js";import{t as a}from"./jsx-runtime-D2pHJD-r.js";import{Ht as ee,Ll as te,dc as ne,hl as o,mi as re,n as s,wr as ie,zl as ae}from"./build-module-Bt8gOW8e.js";import{B as c,K as l,R as u,t as d}from"./build-module-BAze1CUO.js";import{Dt as oe,Kn as f,nr as p,ut as m}from"./chart-tooltip-Cd6R28vB.js";import{t as se}from"./metric-tile-grid-Cx0v-Z8I.js";import{C as h,S as g,T as _,k as v}from"./report-metric-BSkCvVUy.js";import{t as y}from"./widget-state-CqW7LysR.js";import{S as b,b as x,t as S,x as ce,y as le}from"./src-ZlSzubd8.js";import{n as ue,r as C}from"./with-widget-canvas-Dz43KNHY.js";import{n as de,t as fe}from"./src-BIoci1og.js";var w,T,E,D,O,k,pe=t((()=>{w=`_root_1244q_2`,T=`_content_1244q_10`,E=`_yearLabel_1244q_18`,D=`_navButton_1244q_23`,O=`_placeholder_1244q_36`,k={root:w,content:T,yearLabel:E,navButton:D,placeholder:O}}));function me(e){return[...e?.years??[]].sort((e,t)=>Number(t.year)-Number(e.year))}function he({metrics:e}){let{data:t,isLoading:n,isFetching:i,isError:a,refetch:s}=oe(),d=(0,j.useMemo)(()=>new Set(e),[e]),f=(0,j.useMemo)(()=>me(t),[t]),[p,m]=(0,j.useState)(0),h=f.length?Math.min(p,f.length-1):0,g=(0,j.useCallback)(()=>m(Math.min(h+1,f.length-1)),[h,f.length]),_=(0,j.useCallback)(()=>m(Math.max(h-1,0)),[h]),v=f[h],b=h<f.length-1,x=h>0,S=(v?[{key:`posts`,icon:ie,label:r(`Posts`,`jetpack-premium-analytics`),value:v.total_posts,enabled:d.has(`posts`)},{key:`words`,icon:re,label:r(`Words`,`jetpack-premium-analytics`),value:v.total_words,enabled:d.has(`words`)},{key:`likes`,icon:ee,label:r(`Likes`,`jetpack-premium-analytics`),value:v.total_likes,enabled:d.has(`likes`)},{key:`comments`,icon:ne,label:r(`Comments`,`jetpack-premium-analytics`),value:v.total_comments,enabled:d.has(`comments`)}]:[]).filter(e=>e.enabled);return(0,M.jsx)(`div`,{className:k.content,children:(0,M.jsx)(y,{isLoading:n,isFetching:i,isError:f.length===0&&a,isEmpty:f.length===0,error:{description:r(`We couldn't load annual highlights. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:r(`Retry`,`jetpack-premium-analytics`),onClick:s}]},empty:{icon:o,description:r(`No highlights to show yet.`,`jetpack-premium-analytics`)},children:v&&(0,M.jsxs)(u,{className:k.root,direction:`column`,gap:`lg`,children:[(0,M.jsxs)(u,{align:`center`,justify:`flex-end`,gap:`sm`,children:[(0,M.jsx)(c,{type:`button`,variant:`minimal`,tone:`neutral`,size:`small`,className:k.navButton,onClick:g,disabled:!b,"aria-label":r(`Previous year`,`jetpack-premium-analytics`),children:(0,M.jsx)(c.Icon,{icon:ae,size:16})}),(0,M.jsx)(l,{className:k.yearLabel,children:v.year}),(0,M.jsx)(c,{type:`button`,variant:`minimal`,tone:`neutral`,size:`small`,className:k.navButton,onClick:_,disabled:!x,"aria-label":r(`Next year`,`jetpack-premium-analytics`),children:(0,M.jsx)(c.Icon,{icon:te,size:16})})]}),S.length===0?(0,M.jsx)(u,{align:`center`,justify:`center`,className:k.placeholder,children:(0,M.jsx)(l,{children:r(`Select at least one metric to display.`,`jetpack-premium-analytics`)})}):(0,M.jsx)(se,{tiles:S,dataFormat:N})]})})})}function A({attributes:e={}}){return(0,M.jsx)(v,{attributes:e,children:(0,M.jsx)(he,{metrics:e.metrics})})}var j,M,N,ge=t((()=>{m(),S(),i(),s(),d(),j=e(n(),1),pe(),M=a(),N={type:`number`,options:{useMultipliers:!0,decimals:0}}})),P,F,I=t((()=>{i(),s(),fe(),P=[`posts`,`words`,`likes`,`comments`],F={name:`jpa/annual-highlights`,title:r(`Annual highlights`,`jetpack-premium-analytics`),help:{content:r(`Your totals for the year at a glance — posts, words, likes, and comments.`,`jetpack-premium-analytics`)},icon:o,attributes:[{id:`metrics`,label:r(`Metrics`,`jetpack-premium-analytics`),type:`array`,relevance:`high`,Edit:de,elements:[{value:`posts`,label:r(`Posts`,`jetpack-premium-analytics`)},{value:`words`,label:r(`Words`,`jetpack-premium-analytics`)},{value:`likes`,label:r(`Likes`,`jetpack-premium-analytics`)},{value:`comments`,label:r(`Comments`,`jetpack-premium-analytics`)}]}],example:{attributes:{metrics:P}}}}));function L({withComparison:e,metrics:t}){return(0,B.jsx)(A,{attributes:{reportParams:f(e),metrics:t}})}function R(e){return(0,B.jsx)(A,{attributes:{reportParams:f(!1,e),metrics:P}})}function z(e){return _(`stats/insights`,e),p.removeQueries({queryKey:[`stats`,`insights`]}),()=>{_(`stats/insights`,null),p.removeQueries({queryKey:[`stats`,`insights`]})}}function _e({withComparison:e,metrics:t,...n}){return(0,B.jsx)(x,{...n,widgetType:H,renderModule:V,renderComponent:A,attributes:{reportParams:f(e),metrics:t}})}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{m(),ce(),ue(),g(),ge(),I(),B=a(),h(),V=`storybook/annual-highlights`,H={name:F.name,title:F.title,icon:F.icon,attributes:F.attributes,example:F.example},U=P.map(e=>({value:e,label:e.charAt(0).toUpperCase()+e.slice(1)})),W={metrics:{control:`check`,options:U.map(e=>e.value)}},G={metrics:P},K={title:`Packages/Premium Analytics/Widgets/AnnualHighlights`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...W},parameters:{docs:{description:{component:"The \"Annual highlights\" widget. Shows one year's totals — posts, words, likes, and comments — as a grid of metric tiles, with year arrows to step through the years the site has published in. Which tiles appear is controlled by the `metrics` attribute (`relevance: 'high'`), exposed inline in the widget header and in the settings drawer. Data comes from the designated `useStatsInsights` hook; in Storybook it is served by `registerReportMocks()` (the `stats/insights` handler in `routeStatsReport`). The insights module has no comparison period, so the tiles show bare counts and the `WithComparison` story renders identically to `Default`."}}}},q={render:L,args:{withComparison:!1,...G},decorators:[C]},J={render:L,args:{withComparison:!0,...G},decorators:[C]},Y={render:()=>R(`last-90-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>z(`loading`)},X={render:()=>R(`last-7-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>z(`error`)},Z={render:()=>R(`last-365-days`),tags:[`!autodocs`],decorators:[C],beforeEach:()=>z(`empty`)},Q={render:e=>(0,B.jsx)(_e,{...e}),args:{...le,widgetWidth:1,widgetHeight:1,withComparison:!0,...G},argTypes:{...b,withComparison:{control:`boolean`},...W}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderAnnualHighlights,
  args: {
    withComparison: false,
    ...ALL_METRICS_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`The widget on its own, populated from the mocked insights payload.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderAnnualHighlights,
  args: {
    withComparison: true,
    ...ALL_METRICS_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:`Same close-up with comparison report params injected. The insights module has
no comparison data, so this renders identically to \`Default\` — it only
verifies the widget stays stable when the host provides comparison params.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderAnnualHighlightsOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceInsightsState('loading')
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderAnnualHighlightsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceInsightsState('error')
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderAnnualHighlightsOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => forceInsightsState('empty')
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no years: the widget shows its empty state (the neutral calendar
glyph and "No highlights to show yet.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <AnnualHighlightsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    widgetWidth: 1,
    widgetHeight: 1,
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