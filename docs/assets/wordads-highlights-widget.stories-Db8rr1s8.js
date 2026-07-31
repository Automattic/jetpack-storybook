import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{K as i,g as a,mt as o,n as s}from"./build-module-DmVuor49.js";import{B as c,H as l,J as u,V as d}from"./report-metric-DGswn19u.js";import{t as f,v as p}from"./src-B3le4dug.js";import{Nt as ee,ur as m,xt as h}from"./chart-tooltip-H0t12Ibl.js";import{t as te}from"./metric-tile-grid-Bi9XC-nX.js";import{t as ne}from"./widget-state-CvD-ohFz.js";import{C as re,D as ie,E as ae,S as g,T as oe,b as _,t as v,w as se,x as y}from"./src-DDQkWXBR.js";import{i as ce,t as b}from"./src-CnNBlE-F.js";var x,S,le=e((()=>{x=`_root_15bqk_2`,S={root:x}})),C,w,T,E=e((()=>{b(),f(),n(),C=[{id:`earnings`,label:t(`Earnings`,`jetpack-premium-analytics-pkg`)},{id:`paid`,label:t(`Paid`,`jetpack-premium-analytics-pkg`)},{id:`outstanding`,label:t(`Outstanding amount`,`jetpack-premium-analytics-pkg`)}],w=C.map(e=>e.id),T={icon:p,attributes:[{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics-pkg`),type:`array`,relevance:`high`,Edit:ce,elements:C.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:w}}}}));function D({metrics:e=w}){let n=new Set(e),r=C.some(({id:e})=>n.has(e)),{data:i,isLoading:a,isFetching:o,isError:s,refetch:c}=ee(void 0,{enabled:r}),l=C.filter(({id:e})=>n.has(e)).map(({id:e,label:t})=>({key:e,label:t,icon:j[e].icon,value:j[e].value(i)}));return(0,k.jsx)(`div`,{className:S.root,children:(0,k.jsx)(ne,{isLoading:a,isFetching:o,isError:s,isEmpty:!r,error:{description:t(`We couldn't load WordAds earnings. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:()=>{c()}}]},empty:{icon:p,description:t(`Select at least one metric to display.`,`jetpack-premium-analytics-pkg`)},children:(0,k.jsx)(te,{tiles:l,dataFormat:A,currencyCode:`USD`})})})}function O({attributes:e={}}){return(0,k.jsx)(u,{attributes:e,children:(0,k.jsx)(D,{metrics:e.metrics})})}var k,A,j,ue=e((()=>{h(),f(),v(),n(),s(),le(),E(),k=r(),A={type:`currency`,options:{decimals:2}},j={earnings:{icon:o,value:e=>e?.total_earnings??0},paid:{icon:i,value:e=>e?e.total_earnings-e.total_amount_owed:0},outstanding:{icon:a,value:e=>e?.total_amount_owed??0}}})),M,N,P,F,I,L,R,z=e((()=>{M=`jpa/wordads-highlights`,N=`WordAds highlights`,P=`Your WordAds earnings at a glance — total earnings, amount paid, and outstanding balance.`,F={content:`Payment is made once your outstanding balance reaches $100, approximately 45 days after the end of the month in which it was earned.`},I=`stats`,L=`framed`,R={name:M,title:N,description:P,help:F,category:I,presentation:L}}));function B({metrics:e}){return(0,H.jsx)(O,{attributes:{reportParams:m(),metrics:e}})}function V({metrics:e,...t}){return(0,H.jsx)(oe,{...t,widgetType:W,renderModule:U,renderComponent:O,attributes:{reportParams:m(!0),metrics:e}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),ae(),re(),_(),d(),ue(),E(),z(),H=r(),l(),U=`storybook/wordads-highlights`,W=g(R,T),G={metrics:{control:`check`,options:w}},K={metrics:w},q={title:`Packages/Premium Analytics/Widgets/WordAdsHighlights`,component:O,tags:[`autodocs`],argTypes:{...G},parameters:{docs:{description:{component:'The "WordAds highlights" widget. Shows all-time WordAds payouts — total earnings, amount paid, and outstanding balance — as a grid of currency tiles (paid = earnings − outstanding). Ported from the Calypso WordAds "Totals" section. Which cards appear is controlled by the `metrics` attribute (`relevance: \'high\'`), exposed inline in the widget header and in the settings drawer. Data comes from the designated `useStatsWordAdsEarnings` hook; in Storybook it is served by `registerReportMocks()` (the `wordads/earnings` handler). The earnings module has no comparison period, so the tiles show bare amounts.'}}}},J={render:B,args:{...K},decorators:[y]},Y={render:B,args:{...K},tags:[`!autodocs`],decorators:[y],beforeEach:c(`loading`)},X={render:B,args:{...K},tags:[`!autodocs`],decorators:[y],beforeEach:c(`error`)},Z={render:B,args:{metrics:[]},decorators:[y]},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...se,widgetWidth:1,widgetHeight:1,...K},argTypes:{...ie,...G}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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