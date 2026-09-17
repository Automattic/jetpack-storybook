import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Ui as i,Yn as a,hi as o,k as s,t as c}from"./build-module-2iv4IIRq.js";import{et as l,g as ee,rt as te}from"./hooks-BCeaDlTw.js";import{b as ne,t as u}from"./src-C-E2d-Lb.js";import{C as re,en as d,r as f}from"./date-period-dropdown-BOuPhU2o.js";import{r as ie,t as ae}from"./metric-tile-grid-skeleton-PffxYbag.js";import{i as oe,n as p,r as se}from"./register-report-mocks-WqT1Td4z.js";import{t as ce}from"./widget-state-UAxX_7ZX.js";import{t as m}from"./src-B9pks8pR.js";import{a as le,c as h,i as g,l as _,n as v,o as y,r as b,s as x}from"./with-widget-canvas-Dh2Gt0sQ.js";var S,C,w=e((()=>{S=`_root_15bqk_2`,C={root:S}})),T,E,D,O=e((()=>{l(),n(),c(),T=[{id:`earnings`,label:t(`Earnings`,`jetpack-premium-analytics-pkg`)},{id:`paid`,label:t(`Paid`,`jetpack-premium-analytics-pkg`)},{id:`outstanding`,label:t(`Outstanding amount`,`jetpack-premium-analytics-pkg`)}],E=T.map(e=>e.id),D={icon:i,attributes:[{id:`metrics`,label:t(`Metrics`,`jetpack-premium-analytics-pkg`),type:`array`,relevance:`high`,Edit:te,elements:T.map(e=>({value:e.id,label:e.label}))}],example:{attributes:{metrics:E}}}}));function ue({metrics:e=E}){let n=new Set(e),r=T.some(({id:e})=>n.has(e)),{data:i,isLoading:a,isFetching:o,isError:s,refetch:c}=re(void 0,{enabled:r}),l=T.filter(({id:e})=>n.has(e)).map(({id:e,label:t})=>({key:e,label:t,icon:M[e].icon,value:M[e].value(i)}));return(0,A.jsx)(`div`,{className:C.root,children:(0,A.jsx)(ce,{isLoading:a,isFetching:o,isError:s,isEmpty:!r,error:{description:t(`We couldn't load WordAds earnings. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),actions:[{label:t(`Retry`,`jetpack-premium-analytics-pkg`),onClick:()=>{c()}}]},empty:{icon:ne,description:t(`Select at least one metric to display.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,A.jsx)(ae,{tiles:l.length}),children:(0,A.jsx)(ie,{tiles:l,dataFormat:j,currencyCode:`USD`})})})}function k({attributes:e={}}){return(0,A.jsx)(ee,{attributes:e,children:(0,A.jsx)(ue,{metrics:e.metrics})})}var A,j,M,de=e((()=>{f(),u(),m(),n(),c(),w(),O(),A=r(),j={type:`currency`},M={earnings:{icon:o,value:e=>e?.total_earnings??0},paid:{icon:a,value:e=>e?e.total_earnings-e.total_amount_owed:0},outstanding:{icon:s,value:e=>e?.total_amount_owed??0}}})),N,P,F,I,L,R,z,B=e((()=>{N=`jpa/wordads-highlights`,P=`WordAds highlights`,F=`Your WordAds earnings at a glance — total earnings, amount paid, and outstanding balance.`,I={content:`Payment is made once your outstanding balance reaches $100, approximately 45 days after the end of the month in which it was earned.`},L=`stats`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function V({metrics:e}){return(0,H.jsx)(k,{attributes:{reportParams:d(),metrics:e}})}function fe({metrics:e,...t}){return(0,H.jsx)(x,{...t,widgetType:W,renderModule:U,renderComponent:k,attributes:{reportParams:d(!0),metrics:e}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{f(),h(),le(),v(),se(),de(),O(),B(),H=r(),oe(),U=`storybook/wordads-highlights`,W=g(z,D),G={metrics:{control:`check`,options:E}},K={metrics:E},q={title:`Packages/Premium Analytics/Widgets/WordAdsHighlights`,component:k,tags:[`autodocs`],argTypes:{...G},parameters:{docs:{description:{component:'The "WordAds highlights" widget. Shows all-time WordAds payouts — total earnings, amount paid, and outstanding balance — as a grid of currency tiles (paid = earnings − outstanding). Ported from the Calypso WordAds "Totals" section. Which cards appear is controlled by the `metrics` attribute (`relevance: \'high\'`), exposed inline in the widget header and in the settings drawer. Data comes from the designated `useStatsWordAdsEarnings` hook; in Storybook it is served by `registerReportMocks()` (the `wordads/earnings` handler). The earnings module has no comparison period, so the tiles show bare amounts.'}}}},J={render:V,args:{...K},decorators:[b]},Y={render:V,args:{...K},tags:[`!autodocs`],decorators:[b],beforeEach:p(`loading`)},X={render:V,args:{...K},tags:[`!autodocs`],decorators:[b],beforeEach:p(`error`)},Z={render:V,args:{metrics:[]},decorators:[b]},Q={render:e=>(0,H.jsx)(fe,{...e}),args:{...y,widgetWidth:1,widgetHeight:1,...K},argTypes:{..._,...G}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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