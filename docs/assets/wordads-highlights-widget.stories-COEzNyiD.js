import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,Qn as a,gi as o,n as s}from"./build-module-CDRs4YxF.js";import{J as c,K as l,q as ee,tt as te}from"./report-metric-BJXFm3aW.js";import{b as u,t as d}from"./src-BKLK-O8P.js";import{Cr as f,Gt as ne,Nt as p,c as re,d as ie}from"./chart-tooltip-NxBvBReY.js";import{r as ae,t as oe}from"./metric-tile-grid-skeleton-Dzqu0MH5.js";import{t as se}from"./widget-state-BwxLrgsq.js";import{C as m,D as ce,E as le,S as ue,T as h,b as g,t as _,w as v,x as y}from"./src-CGQy9yxW.js";var b,x,S=e((()=>{b=`_root_15bqk_2`,x={root:b}})),C,w,T,E=e((()=>{re(),d(),n(),C=[{id:`earnings`,label:t(`Earnings`,`jetpack-premium-analytics-pkg`)},{id:`paid`,label:t(`Paid`,`jetpack-premium-analytics-pkg`)},{id:`outstanding`,label:t(`Outstanding amount`,`jetpack-premium-analytics-pkg`)}],w=C.map(e=>e.id),T={icon:u,attributes:[{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics-pkg`),type:`array`,relevance:`high`,Edit:ie,elements:C.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:w}}}}));function D({metrics:e=w}){let n=new Set(e),r=C.some(({id:e})=>n.has(e)),{data:i,isLoading:a,isFetching:o,isError:s,refetch:c}=ne(void 0,{enabled:r}),l=C.filter(({id:e})=>n.has(e)).map(({id:e,label:t})=>({key:e,label:t,icon:j[e].icon,value:j[e].value(i)}));return(0,k.jsx)(`div`,{className:x.root,children:(0,k.jsx)(se,{isLoading:a,isFetching:o,isError:s,isEmpty:!r,error:{description:t(`We couldn't load WordAds earnings. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:()=>{c()}}]},empty:{icon:u,description:t(`Select at least one metric to display.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,k.jsx)(oe,{tiles:l.length}),children:(0,k.jsx)(ae,{tiles:l,dataFormat:A,currencyCode:`USD`})})})}function O({attributes:e={}}){return(0,k.jsx)(te,{attributes:e,children:(0,k.jsx)(D,{metrics:e.metrics})})}var k,A,j,de=e((()=>{p(),d(),_(),n(),s(),S(),E(),k=r(),A={type:`currency`,options:{decimals:2}},j={earnings:{icon:o,value:e=>e?.total_earnings??0},paid:{icon:a,value:e=>e?e.total_earnings-e.total_amount_owed:0},outstanding:{icon:i,value:e=>e?.total_amount_owed??0}}})),M,N,P,F,I,L,R,z=e((()=>{M=`jpa/wordads-highlights`,N=`WordAds highlights`,P=`Your WordAds earnings at a glance — total earnings, amount paid, and outstanding balance.`,F={content:`Payment is made once your outstanding balance reaches $100, approximately 45 days after the end of the month in which it was earned.`},I=`stats`,L=`framed`,R={name:M,title:N,description:P,help:F,category:I,presentation:L}}));function B({metrics:e}){return(0,H.jsx)(O,{attributes:{reportParams:f(),metrics:e}})}function V({metrics:e,...t}){return(0,H.jsx)(h,{...t,widgetType:W,renderModule:U,renderComponent:O,attributes:{reportParams:f(!0),metrics:e}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),le(),m(),g(),ee(),de(),E(),z(),H=r(),c(),U=`storybook/wordads-highlights`,W=ue(R,T),G={metrics:{control:`check`,options:w}},K={metrics:w},q={title:`Packages/Premium Analytics/Widgets/WordAdsHighlights`,component:O,tags:[`autodocs`],argTypes:{...G},parameters:{docs:{description:{component:'The "WordAds highlights" widget. Shows all-time WordAds payouts — total earnings, amount paid, and outstanding balance — as a grid of currency tiles (paid = earnings − outstanding). Ported from the Calypso WordAds "Totals" section. Which cards appear is controlled by the `metrics` attribute (`relevance: \'high\'`), exposed inline in the widget header and in the settings drawer. Data comes from the designated `useStatsWordAdsEarnings` hook; in Storybook it is served by `registerReportMocks()` (the `wordads/earnings` handler). The earnings module has no comparison period, so the tiles show bare amounts.'}}}},J={render:B,args:{...K},decorators:[y]},Y={render:B,args:{...K},tags:[`!autodocs`],decorators:[y],beforeEach:l(`loading`)},X={render:B,args:{...K},tags:[`!autodocs`],decorators:[y],beforeEach:l(`error`)},Z={render:B,args:{metrics:[]},decorators:[y]},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...v,widgetWidth:1,widgetHeight:1,...K},argTypes:{...ce,...G}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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