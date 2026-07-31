import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{f as s,n as c}from"./build-module-DmVuor49.js";import{D as ee,H as l,J as u,Q as te,S as ne,V as d,k as re}from"./report-metric-yaX04v1a.js";import{R as ie,W as ae,t as f}from"./build-module-CKtN81-S.js";import{t as p,v as oe}from"./src-B3le4dug.js";import{r as se}from"./hooks-CVFRq3NR.js";import{Bt as m,J as ce,X as le,d as ue,q as de,ur as h,xt as g}from"./chart-tooltip-DMwJdbCr.js";import{t as fe}from"./leaderboard-chart-BO278XUv.js";import{t as pe}from"./widget-state-C11sRIqb.js";import{C as _,D as v,E as y,O as b,S as x,T as me,b as he,k as S,t as ge,w as _e,x as C}from"./src-eORpN2M4.js";import{n as ve,t as ye}from"./src-BpM54LMy.js";import{n as be,t as xe}from"./register-stats-mocks-J6UcYMll.js";import{n as Se,t as w}from"./force-stats-mock-state-CImsv7xr.js";var T,E,D,O,k,A,Ce=e((()=>{T=`_root_1c7ar_1`,E=`_content_1c7ar_9`,D=`_backLink_1c7ar_17`,O=`_itemLabel_1c7ar_23`,k=`_itemLabelText_1c7ar_30`,A={root:T,content:E,backLink:D,itemLabel:O,itemLabelText:k}}));function j(e){return typeof e.label==`string`?e.label:String(e.label)}function we(e){return{label:j(e),value:e.value,previousValue:e.previousValue,href:e.href}}function Te(e){return{label:j(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(we),childrenHaveComparison:e.childrenHaveComparison}}function Ee({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:ee}=m({...e,utmParam:t,max:n},{maxRows:n}),l=(r?.rows??[]).map(Te),u=l.length===0&&s;return{data:l,hasComparison:i,isLoading:a,isFetching:o,isError:u,error:u?c:null,refetch:ee}}var De=e((()=>{g()}));function Oe(e){switch(e){case`utm_source,utm_medium`:return`source-medium`;case`utm_campaign,utm_source,utm_medium`:return`campaign-source-medium`;case`utm_source`:return`source`;case`utm_medium`:return`medium`;case`utm_campaign`:return`campaign`}}function ke({utmDimension:e,max:r,showReportLink:i}){let{reportParams:o}=te(),{drillDownItem:s,drillDown:c,resetDrillDown:l}=se();(0,a.useEffect)(()=>{l()},[l,e]);let{data:u,hasComparison:d,isLoading:f,isFetching:p,isError:m,error:h,refetch:g}=Ee({reportParams:o,utmParam:e,max:r}),_=(0,a.useMemo)(()=>u.find(e=>e.label===s)??null,[u,s]),v=!!_?.children?.length,y=(0,a.useMemo)(()=>v?_?.children??[]:u,[u,v,_]),b=v?!!_?.childrenHaveComparison:d;(0,a.useEffect)(()=>{s&&!v&&!f&&!p&&!m&&l()},[s,v,f,p,m,l]);let x=(0,a.useMemo)(()=>{let e=ce(y.map(e=>e.value),b?y.map(e=>e.previousValue):[]);return y.map((r,i)=>{let a=r.previousValue;return{id:`${i}-${r.label}`,label:(0,N.jsx)(ie,{align:`center`,className:A.itemLabel,children:(0,N.jsx)(ae,{className:A.itemLabelText,children:r.label})}),currentValue:r.value,currentShare:de(r.value,e),previousValue:a,previousShare:b&&a!==void 0?de(a,e):void 0,delta:b&&a!==void 0?le(r.value,a):void 0,...!v&&`children`in r&&r.children?.length&&{onClick:()=>c(r.label),ariaLabel:t(n(`View posts for %s`,`jetpack-premium-analytics-pkg`),r.label)}}})},[y,v,c,b]);return(0,N.jsxs)(N.Fragment,{children:[v?(0,N.jsx)(re,{label:n(`All UTM Insights`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:l,className:A.backLink}):null,(0,N.jsx)(`div`,{className:A.content,children:(0,N.jsx)(pe,{isLoading:f,isFetching:p,isError:m,isEmpty:u.length===0,error:ue(h,{retryDescription:n(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:g}),empty:{icon:oe,description:n(`No UTM data in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,N.jsx)(fe,{data:x,withComparison:b,withOverlayLabel:!0,showLegend:!1,dataFormat:P})})}),i&&(0,N.jsx)(ee,{children:(0,N.jsx)(ne,{report:`utm`,section:Oe(e)})})]})}function M({attributes:e={}}){let t=e.utmDimension??F,n=e.max??10,r=e.showReportLink??!0;return(0,N.jsx)(u,{attributes:e,children:(0,N.jsx)(`div`,{className:A.root,children:(0,N.jsx)(ke,{utmDimension:t,max:n,showReportLink:r})})})}var N,P,F,Ae=e((()=>{o(),r(),f(),ge(),p(),Ce(),De(),N=i(),P={type:`number`,options:{useMultipliers:!0,decimals:0}},F=`utm_source,utm_medium`})),I,je=e((()=>{r(),c(),ye(),I={icon:s,attributes:[{id:`utmDimension`,label:n(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:ve,elements:[{label:n(`Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_source,utm_medium`},{label:n(`Campaign / Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_campaign,utm_source,utm_medium`},{label:n(`Source`,`jetpack-premium-analytics-pkg`),value:`utm_source`},{label:n(`Medium`,`jetpack-premium-analytics-pkg`),value:`utm_medium`},{label:n(`Campaign`,`jetpack-premium-analytics-pkg`),value:`utm_campaign`}],relevance:`high`},{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{utmDimension:`utm_source,utm_medium`,max:10}}}})),L,R,z,B,V,H,Me,Ne=e((()=>{L=`jpa/utm-insights`,R=`Top UTM`,z=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,B={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},V=`traffic`,H=`framed`,Me={name:L,title:R,description:z,help:B,category:V,presentation:H}}));function U(e){return(0,W.jsx)(M,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:h(!1,e)}})}function Pe({withComparison:e,...t}){return(0,W.jsx)(me,{...t,widgetType:Ie,renderModule:Fe,renderComponent:M,attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:h(e)}})}var W,Fe,Ie,Le,G,K,q,J,Y,X,Z,Q,$;e((()=>{g(),y(),b(),_(),he(),d(),xe(),Se(),Ae(),je(),Ne(),W=i(),l(),be(),Fe=`storybook/utm-insights`,Ie=x(Me,I),Le={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:M,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},G={render:({withComparison:e})=>(0,W.jsx)(M,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:h(e)}}),args:{withComparison:!1},decorators:[C,S]},K={render:({withComparison:e})=>(0,W.jsx)(M,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:h(e)}}),args:{withComparison:!0},decorators:[C,S]},q={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`loading`),()=>w(`stats/utm`,null))},J={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`error`),()=>w(`stats/utm`,null))},Y={render:()=>U(`last-12-months`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`error-retryable`),()=>w(`stats/utm`,null))},X={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`empty`),()=>w(`stats/utm`,null))},Z={render:({withComparison:e})=>(0,W.jsx)(M,{attributes:{utmDimension:`utm_campaign`,max:10,reportParams:h(e)}}),args:{withComparison:!1},decorators:[C,S]},Q={render:e=>(0,W.jsx)(Pe,{...e}),args:{..._e,withComparison:!1},argTypes:{...v,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => renderUtmInsightsOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/utm', 'loading');
    return () => forceStatsMockState('stats/utm', null);
  }
}`,...q.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderUtmInsightsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/utm', 'error');
    return () => forceStatsMockState('stats/utm', null);
  }
}`,...J.parameters?.docs?.source},description:{story:`The fetch failed with a permission-gated 403: the widget shows the neutral
"You don't have access to this data." copy and no Retry action, since a
permission gate is deterministic and retrying cannot clear it.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderUtmInsightsOnPreset('last-12-months'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/utm', 'error-retryable');
    return () => forceStatsMockState('stats/utm', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`The fetch failed in a way that can heal — the proxy's \`no_connection\` 403: the
widget shows its retryable copy with a Retry action, which re-runs the query
(still mocked as failing while this story is active).`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`ByCampaign`,`WidgetDashboardWithWidget`]}))();export{Z as ByCampaign,G as Default,X as Empty,J as Error,Y as ErrorRetryable,q as Loading,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,Le as default};