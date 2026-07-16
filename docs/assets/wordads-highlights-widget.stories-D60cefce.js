import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-DQ5lAs4a.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{A as i,Qn as a,mi as o,n as s}from"./build-module-C6Ow06jV.js";import{t as c,v as l}from"./src-Bf8IXmOS.js";import{Yn as u,ar as d,ut as f,yt as p}from"./chart-tooltip-DRCwCXz_.js";import{t as m}from"./metric-tile-grid-C71F7352.js";import{C as h,S as g,T as _,k as v}from"./report-metric-QZWiJDnZ.js";import{t as y}from"./widget-state-DkK2_WfK.js";import{S as b,b as x,t as ee,x as te,y as ne}from"./src-B32xYLGr.js";import{n as re,r as S}from"./with-widget-canvas-Dz43KNHY.js";import{n as C,t as w}from"./src-DHVerfrF.js";var T,E,D=e((()=>{T=`_root_15bqk_2`,E={root:T}})),O,k,A,j=e((()=>{w(),c(),n(),O=[{id:`earnings`,label:t(`Earnings`,`jetpack-premium-analytics`)},{id:`paid`,label:t(`Paid`,`jetpack-premium-analytics`)},{id:`outstanding`,label:t(`Outstanding amount`,`jetpack-premium-analytics`)}],k=O.map(e=>e.id),A={name:`jpa/wordads-highlights`,title:t(`WordAds highlights`,`jetpack-premium-analytics`),icon:l,help:{content:t(`Payment is made once your outstanding balance reaches $100, approximately 45 days after the end of the month in which it was earned.`,`jetpack-premium-analytics`)},attributes:[{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics`),type:`array`,relevance:`high`,Edit:C,elements:O.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:k}}}}));function M({metrics:e=k}){let n=new Set(e),r=O.some(({id:e})=>n.has(e)),{data:i,isLoading:a,isFetching:o,isError:s,refetch:c}=p(void 0,{enabled:r}),u=O.filter(({id:e})=>n.has(e)).map(({id:e,label:t})=>({key:e,label:t,icon:I[e].icon,value:I[e].value(i)}));return(0,P.jsx)(`div`,{className:E.root,children:(0,P.jsx)(y,{isLoading:a,isFetching:o,isError:s,isEmpty:!r,error:{description:t(`We couldn't load WordAds earnings. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:()=>{c()}}]},empty:{icon:l,description:t(`Select at least one metric to display.`,`jetpack-premium-analytics`)},children:(0,P.jsx)(m,{tiles:u,dataFormat:F,currencyCode:`USD`})})})}function N({attributes:e={}}){return(0,P.jsx)(v,{attributes:e,children:(0,P.jsx)(M,{metrics:e.metrics})})}var P,F,I,L=e((()=>{f(),c(),ee(),n(),s(),D(),j(),P=r(),F={type:`currency`,options:{decimals:2}},I={earnings:{icon:o,value:e=>e?.total_earnings??0},paid:{icon:a,value:e=>e?e.total_earnings-e.total_amount_owed:0},outstanding:{icon:i,value:e=>e?.total_amount_owed??0}}}));function R({withComparison:e,metrics:t}){return(0,V.jsx)(N,{attributes:{reportParams:u(e),metrics:t}})}function z(){d.removeQueries({queryKey:[`stats`,`wordads-earnings`]})}function B({withComparison:e,metrics:t,...n}){return(0,V.jsx)(x,{...n,widgetType:U,renderModule:H,renderComponent:N,attributes:{reportParams:u(e),metrics:t}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{f(),te(),re(),g(),L(),j(),V=r(),h(),H=`storybook/wordads-highlights`,U={name:A.name,title:A.title,icon:A.icon,help:A.help,attributes:A.attributes,example:A.example},W={metrics:{control:`check`,options:k}},G={metrics:k},K={title:`Packages/Premium Analytics/Widgets/WordAdsHighlights`,component:N,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`},...W},parameters:{docs:{description:{component:'The "WordAds highlights" widget. Shows all-time WordAds payouts — total earnings, amount paid, and outstanding balance — as a grid of currency tiles (paid = earnings − outstanding). Ported from the Calypso WordAds "Totals" section. Which cards appear is controlled by the `metrics` attribute (`relevance: \'high\'`), exposed inline in the widget header and in the settings drawer. Data comes from the designated `useStatsWordAdsEarnings` hook; in Storybook it is served by `registerReportMocks()` (the `wordads/earnings` handler). The earnings module has no comparison period, so the tiles show bare amounts and the `WithComparison` story renders identically to `Default`.'}}}},q={render:R,args:{withComparison:!1,...G},decorators:[S]},J={render:R,args:{withComparison:!0,...G},decorators:[S]},Y={render:R,args:{withComparison:!1,...G},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(z(),_(`wordads/earnings`,`loading`),()=>{_(`wordads/earnings`,null),z()})},X={render:R,args:{withComparison:!1,...G},tags:[`!autodocs`],decorators:[S],beforeEach:()=>(z(),_(`wordads/earnings`,`error`),()=>{_(`wordads/earnings`,null),z()})},Z={render:R,args:{withComparison:!1,metrics:[]},decorators:[S]},Q={render:e=>(0,V.jsx)(B,{...e}),args:{...ne,widgetWidth:1,widgetHeight:1,withComparison:!0,...G},argTypes:{...b,withComparison:{control:`boolean`},...W}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderWordAdsHighlights,
  args: {
    withComparison: false,
    ...ALL_METRICS_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source},description:{story:`The widget on its own, populated from the mocked wordads/earnings payload.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderWordAdsHighlights,
  args: {
    withComparison: true,
    ...ALL_METRICS_ARGS
  },
  decorators: [withWidgetCanvas]
}`,...J.parameters?.docs?.source},description:{story:`Same close-up with comparison report params injected. The earnings module has
no comparison data, so this renders identically to \`Default\` — it only
verifies the widget stays stable when the host provides comparison params.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderWordAdsHighlights,
  args: {
    withComparison: false,
    ...ALL_METRICS_ARGS
  },
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    resetWordAdsEarningsQuery();
    setReportMockState('wordads/earnings', 'loading');
    return () => {
      setReportMockState('wordads/earnings', null);
      resetWordAdsEarningsQuery();
    };
  }
}`,...Y.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderWordAdsHighlights,
  args: {
    withComparison: false,
    ...ALL_METRICS_ARGS
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    resetWordAdsEarningsQuery();
    setReportMockState('wordads/earnings', 'error');
    return () => {
      setReportMockState('wordads/earnings', null);
      resetWordAdsEarningsQuery();
    };
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderWordAdsHighlights,
  args: {
    withComparison: false,
    metrics: []
  },
  decorators: [withWidgetCanvas]
}`,...Z.parameters?.docs?.source},description:{story:'No card selected: the widget shows its empty state ("Select at least one\nmetric to display."). Unlike period-scoped widgets, WordAds earnings has no\ndata-driven empty — a zero balance is a valid `$0.00`, not an empty state — so\nthe empty state is reached by clearing the `metrics` attribute.',...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <WordAdsHighlightsDashboardStory {...args} />,
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