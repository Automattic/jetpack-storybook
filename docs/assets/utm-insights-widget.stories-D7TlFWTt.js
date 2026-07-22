import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{f as s,n as c}from"./build-module-DmVuor49.js";import{r as l}from"./hooks-D26jIbv_.js";import{R as ee,W as te,t as u}from"./build-module-DDoIgE2E.js";import{t as ne,v as re}from"./src-B3le4dug.js";import{G as ie,K as ae,Rt as d,cr as f,yt as p}from"./chart-tooltip-C_Y00_tm.js";import{t as oe}from"./leaderboard-chart-Btsjec7-.js";import{F as m,G as se,P as h,S as ce,V as g,b as le,v as ue}from"./report-metric-g5-n2BXz.js";import{t as de}from"./widget-state-DH8_FpDV.js";import{C as _,D as v,E as y,O as fe,S as pe,T as me,b as he,k as b,t as ge,w as _e,x}from"./src-Dw1m72HI.js";import{n as ve,t as ye}from"./src-D8RJDeDL.js";import{n as be,t as xe}from"./register-stats-mocks-CWBcUZmH.js";import{n as Se,t as S}from"./force-stats-mock-state-BESZZzQl.js";var C,w,T,E,D,O,Ce=e((()=>{C=`_root_1c7ar_1`,w=`_content_1c7ar_9`,T=`_backLink_1c7ar_17`,E=`_itemLabel_1c7ar_23`,D=`_itemLabelText_1c7ar_30`,O={root:C,content:w,backLink:T,itemLabel:E,itemLabelText:D}}));function k(e){return typeof e.label==`string`?e.label:String(e.label)}function we(e){return{label:k(e),value:e.value,previousValue:e.previousValue,href:e.href}}function Te(e){return{label:k(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(we),childrenHaveComparison:e.childrenHaveComparison}}function Ee({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,refetch:c}=d({...e,utmParam:t,max:n},{maxRows:n}),l=(r?.rows??[]).map(Te);return{data:l,hasComparison:i,isLoading:a,isFetching:o,isError:l.length===0&&s,refetch:c}}var De=e((()=>{p()}));function Oe(e){switch(e){case`utm_source,utm_medium`:return`source-medium`;case`utm_campaign,utm_source,utm_medium`:return`campaign-source-medium`;case`utm_source`:return`source`;case`utm_medium`:return`medium`;case`utm_campaign`:return`campaign`}}function ke({utmDimension:e,max:r}){let{reportParams:i}=se(),{drillDownItem:o,drillDown:s,resetDrillDown:c}=l();(0,a.useEffect)(()=>{c()},[c,e]);let{data:u,hasComparison:ne,isLoading:d,isFetching:f,isError:p,refetch:m}=Ee({reportParams:i,utmParam:e,max:r}),h=(0,a.useMemo)(()=>u.find(e=>e.label===o)??null,[u,o]),g=!!h?.children?.length,_=(0,a.useMemo)(()=>g?h?.children??[]:u,[u,g,h]),v=g?!!h?.childrenHaveComparison:ne;(0,a.useEffect)(()=>{o&&!g&&!d&&!f&&!p&&c()},[o,g,d,f,p,c]);let y=(0,a.useMemo)(()=>{let e=Math.max(..._.map(e=>e.value),1),r=Math.max(..._.map(e=>e.previousValue??0),1);return _.map((i,a)=>{let o=i.previousValue;return{id:`${a}-${i.label}`,label:(0,j.jsx)(ee,{align:`center`,className:O.itemLabel,children:(0,j.jsx)(te,{className:O.itemLabelText,children:i.label})}),currentValue:i.value,currentShare:ie(i.value,e),previousValue:o,previousShare:v&&o!==void 0?ie(o,r):void 0,delta:v&&o!==void 0?ae(i.value,o):void 0,...!g&&`children`in i&&i.children?.length&&{onClick:()=>s(i.label),ariaLabel:t(n(`View posts for %s`,`jetpack-premium-analytics`),i.label)}}})},[_,g,s,v]);return(0,j.jsxs)(j.Fragment,{children:[g?(0,j.jsx)(ce,{label:n(`All UTM Insights`,`jetpack-premium-analytics`),ariaLabel:n(`View all UTM insights`,`jetpack-premium-analytics`),onClick:c,className:O.backLink}):null,(0,j.jsx)(`div`,{className:O.content,children:(0,j.jsx)(de,{isLoading:d,isFetching:f,isError:p,isEmpty:u.length===0,error:{description:n(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:n(`Retry`,`jetpack-premium-analytics`),onClick:m}]},empty:{icon:re,description:n(`No UTM data in this period.`,`jetpack-premium-analytics`)},children:(0,j.jsx)(oe,{data:y,withComparison:v,withOverlayLabel:!0,showLegend:!1,dataFormat:M})})}),(0,j.jsx)(le,{children:(0,j.jsx)(ue,{report:`utm`,section:Oe(e)})})]})}function A({attributes:e={}}){let t=e.utmDimension??N,n=e.max??10;return(0,j.jsx)(g,{attributes:e,children:(0,j.jsx)(`div`,{className:O.root,children:(0,j.jsx)(ke,{utmDimension:t,max:n})})})}var j,M,N,Ae=e((()=>{o(),r(),u(),ge(),ne(),Ce(),De(),j=i(),M={type:`number`,options:{useMultipliers:!0,decimals:0}},N=`utm_source,utm_medium`})),P,je=e((()=>{r(),c(),ye(),P={icon:s,attributes:[{id:`utmDimension`,label:n(`UTM parameter`,`jetpack-premium-analytics`),type:`text`,Edit:ve,elements:[{label:n(`Source / Medium`,`jetpack-premium-analytics`),value:`utm_source,utm_medium`},{label:n(`Campaign / Source / Medium`,`jetpack-premium-analytics`),value:`utm_campaign,utm_source,utm_medium`},{label:n(`Source`,`jetpack-premium-analytics`),value:`utm_source`},{label:n(`Medium`,`jetpack-premium-analytics`),value:`utm_medium`},{label:n(`Campaign`,`jetpack-premium-analytics`),value:`utm_campaign`}],relevance:`high`},{id:`max`,label:n(`Max rows`,`jetpack-premium-analytics`),type:`number`}],example:{attributes:{utmDimension:`utm_source,utm_medium`,max:10}}}})),F,I,L,R,z,B,V,Me=e((()=>{F=`jpa/utm-insights`,I=`UTM Insights`,L=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,R={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`traffic`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H(e){return(0,U.jsx)(A,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:f(!1,e)}})}function Ne({withComparison:e,...t}){return(0,U.jsx)(me,{...t,widgetType:G,renderModule:W,renderComponent:A,attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:f(e)}})}var U,W,G,Pe,K,q,J,Y,X,Z,Q,$;e((()=>{p(),y(),fe(),_(),he(),h(),xe(),Se(),Ae(),je(),Me(),U=i(),m(),be(),W=`storybook/utm-insights`,G=pe(V,P),Pe={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},K={render:({withComparison:e})=>(0,U.jsx)(A,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:f(e)}}),args:{withComparison:!1},decorators:[x,b]},q={render:({withComparison:e})=>(0,U.jsx)(A,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:f(e)}}),args:{withComparison:!0},decorators:[x,b]},J={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[x,b],beforeEach:()=>(S(`stats/utm`,`loading`),()=>S(`stats/utm`,null))},Y={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[x,b],beforeEach:()=>(S(`stats/utm`,`error`),()=>S(`stats/utm`,null))},X={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[x,b],beforeEach:()=>(S(`stats/utm`,`empty`),()=>S(`stats/utm`,null))},Z={render:({withComparison:e})=>(0,U.jsx)(A,{attributes:{utmDimension:`utm_campaign`,max:10,reportParams:f(e)}}),args:{withComparison:!1},decorators:[x,b]},Q={render:e=>(0,U.jsx)(Ne,{...e}),args:{..._e,withComparison:!1},argTypes:{...v,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: ({
    withComparison
  }) => <UtmInsightsRender attributes={{
    utmDimension: 'utm_source,utm_medium',
    max: 10,
    reportParams: getDefaultQueryParams(withComparison)
  }} />,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: ({
    withComparison
  }) => <UtmInsightsRender attributes={{
    utmDimension: 'utm_source,utm_medium',
    max: 10,
    reportParams: getDefaultQueryParams(withComparison)
  }} />,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderUtmInsightsOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/utm', 'loading');
    return () => forceStatsMockState('stats/utm', null);
  }
}`,...J.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderUtmInsightsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/utm', 'error');
    return () => forceStatsMockState('stats/utm', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderUtmInsightsOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/utm', 'empty');
    return () => forceStatsMockState('stats/utm', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the neutral megaphone
glyph and "No UTM data in this period.").`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: ({
    withComparison
  }) => <UtmInsightsRender attributes={{
    utmDimension: 'utm_campaign',
    max: 10,
    reportParams: getDefaultQueryParams(withComparison)
  }} />,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => <UtmInsightsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    withComparison: false
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    withComparison: {
      control: 'boolean',
      description: 'Include previous-period comparison report params and deltas.'
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`ByCampaign`,`WidgetDashboardWithWidget`]}))();export{Z as ByCampaign,K as Default,X as Empty,Y as Error,J as Loading,Q as WidgetDashboardWithWidget,q as WithComparison,$ as __namedExportsOrder,Pe as default};