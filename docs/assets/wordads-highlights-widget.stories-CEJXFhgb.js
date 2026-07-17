import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-Da_5_6n_.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{K as i,g as a,mt as o,n as s}from"./build-module-DmVuor49.js";import{t as c,v as l}from"./src-B3le4dug.js";import{Xn as u,cr as d,ut as f,yt as ee}from"./chart-tooltip-sEsOeFfr.js";import{t as p}from"./metric-tile-grid-D_I7jyzG.js";import{C as m,S as h,T as g,k as _}from"./report-metric-CMHQ4oKU.js";import{t as v}from"./widget-state-BKSbgDEe.js";import{C as y,S as b,T as x,b as S,t as C,w as te,x as w}from"./src-C6SuNyKS.js";import{i as ne,t as T}from"./src-DzFtMx6w.js";var E,D,O=e((()=>{E=`_root_15bqk_2`,D={root:E}})),k,A,j,M=e((()=>{T(),c(),n(),k=[{id:`earnings`,label:t(`Earnings`,`jetpack-premium-analytics`)},{id:`paid`,label:t(`Paid`,`jetpack-premium-analytics`)},{id:`outstanding`,label:t(`Outstanding amount`,`jetpack-premium-analytics`)}],A=k.map(e=>e.id),j={name:`jpa/wordads-highlights`,title:t(`WordAds highlights`,`jetpack-premium-analytics`),icon:l,help:{content:t(`Payment is made once your outstanding balance reaches $100, approximately 45 days after the end of the month in which it was earned.`,`jetpack-premium-analytics`)},attributes:[{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics`),type:`array`,relevance:`high`,Edit:ne,elements:k.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:A}}}}));function N({metrics:e=A}){let n=new Set(e),r=k.some(({id:e})=>n.has(e)),{data:i,isLoading:a,isFetching:o,isError:s,refetch:c}=ee(void 0,{enabled:r}),u=k.filter(({id:e})=>n.has(e)).map(({id:e,label:t})=>({key:e,label:t,icon:L[e].icon,value:L[e].value(i)}));return(0,F.jsx)(`div`,{className:D.root,children:(0,F.jsx)(v,{isLoading:a,isFetching:o,isError:s,isEmpty:!r,error:{description:t(`We couldn't load WordAds earnings. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:()=>{c()}}]},empty:{icon:l,description:t(`Select at least one metric to display.`,`jetpack-premium-analytics`)},children:(0,F.jsx)(p,{tiles:u,dataFormat:I,currencyCode:`USD`})})})}function P({attributes:e={}}){return(0,F.jsx)(_,{attributes:e,children:(0,F.jsx)(N,{metrics:e.metrics})})}var F,I,L,R=e((()=>{f(),c(),C(),n(),s(),O(),M(),F=r(),I={type:`currency`,options:{decimals:2}},L={earnings:{icon:o,value:e=>e?.total_earnings??0},paid:{icon:i,value:e=>e?e.total_earnings-e.total_amount_owed:0},outstanding:{icon:a,value:e=>e?.total_amount_owed??0}}}));function z({metrics:e}){return(0,H.jsx)(P,{attributes:{reportParams:u(),metrics:e}})}function B(){d.removeQueries({queryKey:[`stats`,`wordads-earnings`]})}function V({metrics:e,...t}){return(0,H.jsx)(y,{...t,widgetType:W,renderModule:U,renderComponent:P,attributes:{reportParams:u(!0),metrics:e}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{f(),te(),S(),h(),R(),M(),H=r(),m(),U=`storybook/wordads-highlights`,W={name:j.name,title:j.title,icon:j.icon,help:j.help,attributes:j.attributes,example:j.example},G={metrics:{control:`check`,options:A}},K={metrics:A},q={title:`Packages/Premium Analytics/Widgets/WordAdsHighlights`,component:P,tags:[`autodocs`],argTypes:{...G},parameters:{docs:{description:{component:'The "WordAds highlights" widget. Shows all-time WordAds payouts — total earnings, amount paid, and outstanding balance — as a grid of currency tiles (paid = earnings − outstanding). Ported from the Calypso WordAds "Totals" section. Which cards appear is controlled by the `metrics` attribute (`relevance: \'high\'`), exposed inline in the widget header and in the settings drawer. Data comes from the designated `useStatsWordAdsEarnings` hook; in Storybook it is served by `registerReportMocks()` (the `wordads/earnings` handler). The earnings module has no comparison period, so the tiles show bare amounts.'}}}},J={render:z,args:{...K},decorators:[w]},Y={render:z,args:{...K},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(B(),g(`wordads/earnings`,`loading`),()=>{g(`wordads/earnings`,null),B()})},X={render:z,args:{...K},tags:[`!autodocs`],decorators:[w],beforeEach:()=>(B(),g(`wordads/earnings`,`error`),()=>{g(`wordads/earnings`,null),B()})},Z={render:z,args:{metrics:[]},decorators:[w]},Q={render:e=>(0,H.jsx)(V,{...e}),args:{...b,widgetWidth:1,widgetHeight:1,...K},argTypes:{...x,...G}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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