import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{K as i,g as a,mt as o,n as s}from"./build-module-DmVuor49.js";import{t as c,v as l}from"./src-B3le4dug.js";import{Ct as u,Ft as d,fr as f}from"./chart-tooltip-BOkbfvqL.js";import{t as p}from"./metric-tile-grid-Cx-2B2ia.js";import{F as m,I as ee,L as te,U as ne}from"./report-metric-Bj8e507q.js";import{t as re}from"./widget-state-DcrSRSuQ.js";import{C as ie,D as ae,E as oe,S as se,T as h,b as g,t as ce,w as _,x as v}from"./src-BujDAHCN.js";import{i as le,t as ue}from"./src-BbfPv9Zl.js";var y,b,x=e((()=>{y=`_root_15bqk_2`,b={root:y}})),S,C,w,T=e((()=>{ue(),c(),n(),S=[{id:`earnings`,label:t(`Earnings`,`jetpack-premium-analytics-pkg`)},{id:`paid`,label:t(`Paid`,`jetpack-premium-analytics-pkg`)},{id:`outstanding`,label:t(`Outstanding amount`,`jetpack-premium-analytics-pkg`)}],C=S.map(e=>e.id),w={icon:l,attributes:[{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics-pkg`),type:`array`,relevance:`high`,Edit:le,elements:S.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:C}}}}));function E({metrics:e=C}){let n=new Set(e),r=S.some(({id:e})=>n.has(e)),{data:i,isLoading:a,isFetching:o,isError:s,refetch:c}=d(void 0,{enabled:r}),u=S.filter(({id:e})=>n.has(e)).map(({id:e,label:t})=>({key:e,label:t,icon:A[e].icon,value:A[e].value(i)}));return(0,O.jsx)(`div`,{className:b.root,children:(0,O.jsx)(re,{isLoading:a,isFetching:o,isError:s,isEmpty:!r,error:{description:t(`We couldn't load WordAds earnings. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:()=>{c()}}]},empty:{icon:l,description:t(`Select at least one metric to display.`,`jetpack-premium-analytics-pkg`)},children:(0,O.jsx)(p,{tiles:u,dataFormat:k,currencyCode:`USD`})})})}function D({attributes:e={}}){return(0,O.jsx)(ne,{attributes:e,children:(0,O.jsx)(E,{metrics:e.metrics})})}var O,k,A,j=e((()=>{u(),c(),ce(),n(),s(),x(),T(),O=r(),k={type:`currency`,options:{decimals:2}},A={earnings:{icon:o,value:e=>e?.total_earnings??0},paid:{icon:i,value:e=>e?e.total_earnings-e.total_amount_owed:0},outstanding:{icon:a,value:e=>e?.total_amount_owed??0}}})),M,N,P,F,I,L,R,z=e((()=>{M=`jpa/wordads-highlights`,N=`WordAds highlights`,P=`Your WordAds earnings at a glance — total earnings, amount paid, and outstanding balance.`,F={content:`Payment is made once your outstanding balance reaches $100, approximately 45 days after the end of the month in which it was earned.`},I=`stats`,L=`framed`,R={name:M,title:N,description:P,help:F,category:I,presentation:L}}));function B({metrics:e}){return(0,H.jsx)(D,{attributes:{reportParams:f(),metrics:e}})}function V({metrics:e,...t}){return(0,H.jsx)(h,{...t,widgetType:W,renderModule:U,renderComponent:D,attributes:{reportParams:f(!0),metrics:e}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),oe(),ie(),g(),ee(),j(),T(),z(),H=r(),te(),U=`storybook/wordads-highlights`,W=se(R,w),G={metrics:{control:`check`,options:C}},K={metrics:C},q={title:`Packages/Premium Analytics/Widgets/WordAdsHighlights`,component:D,tags:[`autodocs`],argTypes:{...G},parameters:{docs:{description:{component:'The "WordAds highlights" widget. Shows all-time WordAds payouts — total earnings, amount paid, and outstanding balance — as a grid of currency tiles (paid = earnings − outstanding). Ported from the Calypso WordAds "Totals" section. Which cards appear is controlled by the `metrics` attribute (`relevance: \'high\'`), exposed inline in the widget header and in the settings drawer. Data comes from the designated `useStatsWordAdsEarnings` hook; in Storybook it is served by `registerReportMocks()` (the `wordads/earnings` handler). The earnings module has no comparison period, so the tiles show bare amounts.'}}}},J={render:B,args:{...K},decorators:[v]},Y={render:B,args:{...K},tags:[`!autodocs`],decorators:[v],beforeEach:m(`loading`)},X={render:B,args:{...K},tags:[`!autodocs`],decorators:[v],beforeEach:m(`error`)},Z={render:B,args:{metrics:[]},decorators:[v]},Q={render:e=>(0,H.jsx)(V,{...e}),args:{..._,widgetWidth:1,widgetHeight:1,...K},argTypes:{...ae,...G}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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