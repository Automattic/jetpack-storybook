import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,Qn as a,gi as o,n as s}from"./build-module-CDRs4YxF.js";import{g as c}from"./hooks-oEMZvuA_.js";import{b as l,t as u}from"./src-BKLK-O8P.js";import{p as ee,qt as d,t as f}from"./src-BjRaVss1.js";import{c as te,d as ne}from"./chart-tooltip-CEzZRHFB.js";import{r as re,t as ie}from"./metric-tile-grid-skeleton-C2wcpH67.js";import{G as p,K as ae,q as oe}from"./report-metric-BNBZc0io.js";import{t as se}from"./widget-state-CSFlEdEw.js";import{C as m,D as h,E as ce,S as le,T as g,b as _,t as v,w as y,x as b}from"./src-Bs104_vp.js";var x,S,ue=e((()=>{x=`_root_15bqk_2`,S={root:x}})),C,w,T,E=e((()=>{te(),u(),n(),C=[{id:`earnings`,label:t(`Earnings`,`jetpack-premium-analytics-pkg`)},{id:`paid`,label:t(`Paid`,`jetpack-premium-analytics-pkg`)},{id:`outstanding`,label:t(`Outstanding amount`,`jetpack-premium-analytics-pkg`)}],w=C.map(e=>e.id),T={icon:l,attributes:[{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics-pkg`),type:`array`,relevance:`high`,Edit:ne,elements:C.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:w}}}}));function D({metrics:e=w}){let n=new Set(e),r=C.some(({id:e})=>n.has(e)),{data:i,isLoading:a,isFetching:o,isError:s,refetch:c}=ee(void 0,{enabled:r}),u=C.filter(({id:e})=>n.has(e)).map(({id:e,label:t})=>({key:e,label:t,icon:j[e].icon,value:j[e].value(i)}));return(0,k.jsx)(`div`,{className:S.root,children:(0,k.jsx)(se,{isLoading:a,isFetching:o,isError:s,isEmpty:!r,error:{description:t(`We couldn't load WordAds earnings. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:()=>{c()}}]},empty:{icon:l,description:t(`Select at least one metric to display.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,k.jsx)(ie,{tiles:u.length}),children:(0,k.jsx)(re,{tiles:u,dataFormat:A,currencyCode:`USD`})})})}function O({attributes:e={}}){return(0,k.jsx)(c,{attributes:e,children:(0,k.jsx)(D,{metrics:e.metrics})})}var k,A,j,de=e((()=>{f(),u(),v(),n(),s(),ue(),E(),k=r(),A={type:`currency`,options:{decimals:2}},j={earnings:{icon:o,value:e=>e?.total_earnings??0},paid:{icon:a,value:e=>e?e.total_earnings-e.total_amount_owed:0},outstanding:{icon:i,value:e=>e?.total_amount_owed??0}}})),M,N,P,F,I,L,R,z=e((()=>{M=`jpa/wordads-highlights`,N=`WordAds highlights`,P=`Your WordAds earnings at a glance — total earnings, amount paid, and outstanding balance.`,F={content:`Payment is made once your outstanding balance reaches $100, approximately 45 days after the end of the month in which it was earned.`},I=`stats`,L=`framed`,R={name:M,title:N,description:P,help:F,category:I,presentation:L}}));function B({metrics:e}){return(0,H.jsx)(O,{attributes:{reportParams:d(),metrics:e}})}function V({metrics:e,...t}){return(0,H.jsx)(g,{...t,widgetType:W,renderModule:U,renderComponent:O,attributes:{reportParams:d(!0),metrics:e}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{f(),ce(),m(),_(),ae(),de(),E(),z(),H=r(),oe(),U=`storybook/wordads-highlights`,W=le(R,T),G={metrics:{control:`check`,options:w}},K={metrics:w},q={title:`Packages/Premium Analytics/Widgets/WordAdsHighlights`,component:O,tags:[`autodocs`],argTypes:{...G},parameters:{docs:{description:{component:'The "WordAds highlights" widget. Shows all-time WordAds payouts — total earnings, amount paid, and outstanding balance — as a grid of currency tiles (paid = earnings − outstanding). Ported from the Calypso WordAds "Totals" section. Which cards appear is controlled by the `metrics` attribute (`relevance: \'high\'`), exposed inline in the widget header and in the settings drawer. Data comes from the designated `useStatsWordAdsEarnings` hook; in Storybook it is served by `registerReportMocks()` (the `wordads/earnings` handler). The earnings module has no comparison period, so the tiles show bare amounts.'}}}},J={render:B,args:{...K},decorators:[b]},Y={render:B,args:{...K},tags:[`!autodocs`],decorators:[b],beforeEach:p(`loading`)},X={render:B,args:{...K},tags:[`!autodocs`],decorators:[b],beforeEach:p(`error`)},Z={render:B,args:{metrics:[]},decorators:[b]},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...y,widgetWidth:1,widgetHeight:1,...K},argTypes:{...h,...G}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderWordAdsHighlights,
  args: {
    ...ALL_METRICS_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:`The widget on its own, populated from the mocked wordads/earnings payload.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderWordAdsHighlights,
  args: {
    ...ALL_METRICS_ARGS
  },
  // Off the shared autodocs page — path-keyed override; see forceWordAdsEarningsState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWordAdsEarningsState('loading')
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderWordAdsHighlights,
  args: {
    ...ALL_METRICS_ARGS
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWordAdsEarningsState('error')
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderWordAdsHighlights,
  args: {
    metrics: []
  },
  decorators: [withWidgetCanvas]
}`,...Z.parameters?.docs?.source},description:{story:'No card selected: the widget shows its empty state ("Select at least one\nmetric to display."). Unlike period-scoped widgets, WordAds earnings has no\ndata-driven empty — a zero balance is a valid `$0.00`, not an empty state — so\nthe empty state is reached by clearing the `metrics` attribute.',...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <WordAdsHighlightsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    widgetWidth: 1,
    widgetHeight: 1,
    ...ALL_METRICS_ARGS
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    ...METRIC_ARG_TYPES
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`Loading`,`Error`,`Empty`,`WidgetDashboardWithWidget`]}))();export{J as Default,Z as Empty,X as Error,Y as Loading,Q as WidgetDashboardWithWidget,$ as __namedExportsOrder,q as default};