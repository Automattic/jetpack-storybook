import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DyKOxfM8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,Qn as a,Wi as o,gi as s,n as c}from"./build-module-CDRs4YxF.js";import{g as l}from"./hooks-DEZhT1TQ.js";import{b as ee,t as te}from"./src-B64ifip5.js";import{g as ne,qt as u,t as d}from"./src-BdWBcjNH.js";import{f as re,h as ie}from"./chart-tooltip-CTicneTm.js";import{r as ae,t as oe}from"./metric-tile-grid-skeleton-CgI2zsA6.js";import{G as f,K as se,q as ce}from"./report-metric-BNQXFpEj.js";import{t as le}from"./widget-state-6thJJp-C.js";import{C as p,D as m,E as h,S as g,T as _,b as v,t as y,w as b,x}from"./src-Br0XI04D.js";var S,C,w=e((()=>{S=`_root_15bqk_2`,C={root:S}})),T,E,D,O=e((()=>{re(),n(),c(),T=[{id:`earnings`,label:t(`Earnings`,`jetpack-premium-analytics-pkg`)},{id:`paid`,label:t(`Paid`,`jetpack-premium-analytics-pkg`)},{id:`outstanding`,label:t(`Outstanding amount`,`jetpack-premium-analytics-pkg`)}],E=T.map(e=>e.id),D={icon:o,attributes:[{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics-pkg`),type:`array`,relevance:`high`,Edit:ie,elements:T.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:E}}}}));function ue({metrics:e=E}){let n=new Set(e),r=T.some(({id:e})=>n.has(e)),{data:i,isLoading:a,isFetching:o,isError:s,refetch:c}=ne(void 0,{enabled:r}),l=T.filter(({id:e})=>n.has(e)).map(({id:e,label:t})=>({key:e,label:t,icon:M[e].icon,value:M[e].value(i)}));return(0,A.jsx)(`div`,{className:C.root,children:(0,A.jsx)(le,{isLoading:a,isFetching:o,isError:s,isEmpty:!r,error:{description:t(`We couldn't load WordAds earnings. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:()=>{c()}}]},empty:{icon:ee,description:t(`Select at least one metric to display.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,A.jsx)(oe,{tiles:l.length}),children:(0,A.jsx)(ae,{tiles:l,dataFormat:j,currencyCode:`USD`})})})}function k({attributes:e={}}){return(0,A.jsx)(l,{attributes:e,children:(0,A.jsx)(ue,{metrics:e.metrics})})}var A,j,M,de=e((()=>{d(),te(),y(),n(),c(),w(),O(),A=r(),j={type:`currency`,options:{decimals:2}},M={earnings:{icon:s,value:e=>e?.total_earnings??0},paid:{icon:a,value:e=>e?e.total_earnings-e.total_amount_owed:0},outstanding:{icon:i,value:e=>e?.total_amount_owed??0}}})),N,P,F,I,L,R,z,B=e((()=>{N=`jpa/wordads-highlights`,P=`WordAds highlights`,F=`Your WordAds earnings at a glance — total earnings, amount paid, and outstanding balance.`,I={content:`Payment is made once your outstanding balance reaches $100, approximately 45 days after the end of the month in which it was earned.`},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function V({metrics:e}){return(0,H.jsx)(k,{attributes:{reportParams:u(),metrics:e}})}function fe({metrics:e,...t}){return(0,H.jsx)(_,{...t,widgetType:W,renderModule:U,renderComponent:k,attributes:{reportParams:u(!0),metrics:e}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),h(),p(),v(),se(),de(),O(),B(),H=r(),ce(),U=`storybook/wordads-highlights`,W=g(z,D),G={metrics:{control:`check`,options:E}},K={metrics:E},q={title:`Packages/Premium Analytics/Widgets/WordAdsHighlights`,component:k,tags:[`autodocs`],argTypes:{...G},parameters:{docs:{description:{component:'The "WordAds highlights" widget. Shows all-time WordAds payouts — total earnings, amount paid, and outstanding balance — as a grid of currency tiles (paid = earnings − outstanding). Ported from the Calypso WordAds "Totals" section. Which cards appear is controlled by the `metrics` attribute (`relevance: \'high\'`), exposed inline in the widget header and in the settings drawer. Data comes from the designated `useStatsWordAdsEarnings` hook; in Storybook it is served by `registerReportMocks()` (the `wordads/earnings` handler). The earnings module has no comparison period, so the tiles show bare amounts.'}}}},J={render:V,args:{...K},decorators:[x]},Y={render:V,args:{...K},tags:[`!autodocs`],decorators:[x],beforeEach:f(`loading`)},X={render:V,args:{...K},tags:[`!autodocs`],decorators:[x],beforeEach:f(`error`)},Z={render:V,args:{metrics:[]},decorators:[x]},Q={render:e=>(0,H.jsx)(fe,{...e}),args:{...b,widgetWidth:1,widgetHeight:1,...K},argTypes:{...m,...G}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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