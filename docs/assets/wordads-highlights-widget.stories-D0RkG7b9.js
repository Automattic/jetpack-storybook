import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{K as i,g as a,mt as o,n as s}from"./build-module-DmVuor49.js";import{t as c,v as l}from"./src-B3le4dug.js";import{Ct as u,dt as d,er as f}from"./chart-tooltip-Cp0t5VrC.js";import{t as p}from"./metric-tile-grid-BDXT2glB.js";import{A as m,M as h,R as g,j as _}from"./report-metric-CT0V0PjD.js";import{t as v}from"./widget-state-CY1w3xno.js";import{C as y,S as b,T as ee,b as x,t as S,w as C,x as w}from"./src-BJoM39-b.js";import{i as T,t as E}from"./src-CfVJQ17A.js";var D,O,k=e((()=>{D=`_root_15bqk_2`,O={root:D}})),A,j,M,N=e((()=>{E(),c(),n(),A=[{id:`earnings`,label:t(`Earnings`,`jetpack-premium-analytics`)},{id:`paid`,label:t(`Paid`,`jetpack-premium-analytics`)},{id:`outstanding`,label:t(`Outstanding amount`,`jetpack-premium-analytics`)}],j=A.map(e=>e.id),M={name:`jpa/wordads-highlights`,title:t(`WordAds highlights`,`jetpack-premium-analytics`),icon:l,help:{content:t(`Payment is made once your outstanding balance reaches $100, approximately 45 days after the end of the month in which it was earned.`,`jetpack-premium-analytics`)},attributes:[{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics`),type:`array`,relevance:`high`,Edit:T,elements:A.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:j}}}}));function P({metrics:e=j}){let n=new Set(e),r=A.some(({id:e})=>n.has(e)),{data:i,isLoading:a,isFetching:o,isError:s,refetch:c}=u(void 0,{enabled:r}),d=A.filter(({id:e})=>n.has(e)).map(({id:e,label:t})=>({key:e,label:t,icon:R[e].icon,value:R[e].value(i)}));return(0,I.jsx)(`div`,{className:O.root,children:(0,I.jsx)(v,{isLoading:a,isFetching:o,isError:s,isEmpty:!r,error:{description:t(`We couldn't load WordAds earnings. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:()=>{c()}}]},empty:{icon:l,description:t(`Select at least one metric to display.`,`jetpack-premium-analytics`)},children:(0,I.jsx)(p,{tiles:d,dataFormat:L,currencyCode:`USD`})})})}function F({attributes:e={}}){return(0,I.jsx)(g,{attributes:e,children:(0,I.jsx)(P,{metrics:e.metrics})})}var I,L,R,z=e((()=>{d(),c(),S(),n(),s(),k(),N(),I=r(),L={type:`currency`,options:{decimals:2}},R={earnings:{icon:o,value:e=>e?.total_earnings??0},paid:{icon:i,value:e=>e?e.total_earnings-e.total_amount_owed:0},outstanding:{icon:a,value:e=>e?.total_amount_owed??0}}}));function B({metrics:e}){return(0,H.jsx)(F,{attributes:{reportParams:f(),metrics:e}})}function V({metrics:e,...t}){return(0,H.jsx)(y,{...t,widgetType:W,renderModule:U,renderComponent:F,attributes:{reportParams:f(!0),metrics:e}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),C(),x(),_(),z(),N(),H=r(),h(),U=`storybook/wordads-highlights`,W={name:M.name,title:M.title,icon:M.icon,help:M.help,attributes:M.attributes,example:M.example},G={metrics:{control:`check`,options:j}},K={metrics:j},q={title:`Packages/Premium Analytics/Widgets/WordAdsHighlights`,component:F,tags:[`autodocs`],argTypes:{...G},parameters:{docs:{description:{component:'The "WordAds highlights" widget. Shows all-time WordAds payouts — total earnings, amount paid, and outstanding balance — as a grid of currency tiles (paid = earnings − outstanding). Ported from the Calypso WordAds "Totals" section. Which cards appear is controlled by the `metrics` attribute (`relevance: \'high\'`), exposed inline in the widget header and in the settings drawer. Data comes from the designated `useStatsWordAdsEarnings` hook; in Storybook it is served by `registerReportMocks()` (the `wordads/earnings` handler). The earnings module has no comparison period, so the tiles show bare amounts.'}}}},J={render:B,args:{...K},decorators:[w]},Y={render:B,args:{...K},tags:[`!autodocs`],decorators:[w],beforeEach:m(`loading`)},X={render:B,args:{...K},tags:[`!autodocs`],decorators:[w],beforeEach:m(`error`)},Z={render:B,args:{metrics:[]},decorators:[w]},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...b,widgetWidth:1,widgetHeight:1,...K},argTypes:{...ee,...G}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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