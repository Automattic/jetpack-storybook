import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{f as s,n as c}from"./build-module-DoJYX5DX.js";import{D as ee,G as l,S as u,W as d,Z as te,b as ne,k as re,tt as ie}from"./report-metric-Bgzb6Mqp.js";import{W as ae,t as f}from"./build-module-DRxlD2CP.js";import{t as p,v as oe}from"./src-B3le4dug.js";import{r as se}from"./hooks-CokVAque.js";import{Bt as m,J as ce,X as le,d as ue,q as h,ur as g,xt as _}from"./chart-tooltip-9T5OabQ2.js";import{t as de}from"./leaderboard-chart-Dcyg9t5i.js";import{t as fe}from"./widget-state-BNpSSJiM.js";import{C as v,D as y,E as b,O as x,S as pe,T as me,b as he,k as S,t as ge,w as _e,x as C}from"./src-B1eM00lO.js";import{n as ve,t as ye}from"./src-DxPo19ri.js";import{n as be,t as xe}from"./register-stats-mocks-DylargOm.js";import{n as Se,t as w}from"./force-stats-mock-state-C2zTk9HH.js";var T,E,D,O,k,A,j,Ce=e((()=>{T=`_root_sv0g9_1`,E=`_content_sv0g9_9`,D=`_backLink_sv0g9_17`,O=`_itemLabel_sv0g9_25`,k=`_itemLabelInset_sv0g9_37`,A=`_itemLabelText_sv0g9_41`,j={root:T,content:E,backLink:D,itemLabel:O,itemLabelInset:k,itemLabelText:A}}));function M(e){return typeof e.label==`string`?e.label:String(e.label)}function we(e){return{postId:e.id,label:M(e),value:e.value,previousValue:e.previousValue,href:e.href}}function Te(e){return{label:M(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(we),childrenHaveComparison:e.childrenHaveComparison}}function Ee({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:ee}=m({...e,utmParam:t,max:n},{maxRows:n}),l=(r?.rows??[]).map(Te),u=l.length===0&&s;return{data:l,hasComparison:i,isLoading:a,isFetching:o,isError:u,error:u?c:null,refetch:ee}}var De=e((()=>{_()}));function Oe(e){switch(e){case`utm_source,utm_medium`:return`source-medium`;case`utm_campaign,utm_source,utm_medium`:return`campaign-source-medium`;case`utm_source`:return`source`;case`utm_medium`:return`medium`;case`utm_campaign`:return`campaign`}}function ke({utmDimension:e,max:n,showReportLink:i}){let{reportParams:o}=ie(),{drillDownItem:s,drillDown:c,resetDrillDown:l}=se();(0,a.useEffect)(()=>{l()},[l,e]);let{data:d,hasComparison:te,isLoading:f,isFetching:p,isError:m,error:g,refetch:_}=Ee({reportParams:o,utmParam:e,max:n}),v=(0,a.useMemo)(()=>d.find(e=>e.label===s)??null,[d,s]),y=!!v?.children?.length,b=(0,a.useMemo)(()=>y?v?.children??[]:d,[d,y,v]),x=y?!!v?.childrenHaveComparison:te;(0,a.useEffect)(()=>{s&&!y&&!f&&!p&&!m&&l()},[s,y,f,p,m,l]);let pe=(0,a.useMemo)(()=>{let e=ce(b.map(e=>e.value),x?b.map(e=>e.previousValue):[]);return b.map((n,i)=>{let a=n.previousValue,o=`postId`in n?n:null;return{id:`${i}-${n.label}`,label:o?(0,P.jsx)(ne,{id:o.postId,label:o.label,link:o.href,variant:`overlay`,className:j.itemLabelInset}):(0,P.jsx)(`span`,{className:j.itemLabel,children:(0,P.jsx)(ae,{className:j.itemLabelText,children:n.label})}),currentValue:n.value,currentShare:h(n.value,e),previousValue:a,previousShare:x&&a!==void 0?h(a,e):void 0,delta:x&&a!==void 0?le(n.value,a):void 0,...!y&&`children`in n&&n.children?.length&&{onClick:()=>c(n.label),ariaLabel:r(t(`View posts for %s`,`jetpack-premium-analytics-pkg`),n.label)}}})},[b,y,c,x]);return(0,P.jsxs)(P.Fragment,{children:[y?(0,P.jsx)(re,{label:t(`All UTM Insights`,`jetpack-premium-analytics-pkg`),ariaLabel:t(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:l,className:j.backLink}):null,(0,P.jsx)(`div`,{className:j.content,children:(0,P.jsx)(fe,{isLoading:f,isFetching:p,isError:m,isEmpty:d.length===0,error:ue(g,{retryDescription:t(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:_}),empty:{icon:oe,description:t(`No UTM data in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,P.jsx)(de,{data:pe,withComparison:x,withOverlayLabel:!0,showLegend:!1,dataFormat:F})})}),i&&(0,P.jsx)(ee,{children:(0,P.jsx)(u,{report:`utm`,section:Oe(e)})})]})}function N({attributes:e={}}){let t=e.utmDimension??I,n=e.max??10,r=e.showReportLink??!0;return(0,P.jsx)(te,{attributes:e,children:(0,P.jsx)(`div`,{className:j.root,children:(0,P.jsx)(ke,{utmDimension:t,max:n,showReportLink:r})})})}var P,F,I,Ae=e((()=>{o(),n(),f(),ge(),p(),Ce(),De(),P=i(),F={type:`number`,options:{useMultipliers:!0,decimals:0}},I=`utm_source,utm_medium`})),L,je=e((()=>{n(),c(),ye(),L={icon:s,attributes:[{id:`utmDimension`,label:t(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:ve,elements:[{label:t(`Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_source,utm_medium`},{label:t(`Campaign / Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_campaign,utm_source,utm_medium`},{label:t(`Source`,`jetpack-premium-analytics-pkg`),value:`utm_source`},{label:t(`Medium`,`jetpack-premium-analytics-pkg`),value:`utm_medium`},{label:t(`Campaign`,`jetpack-premium-analytics-pkg`),value:`utm_campaign`}],relevance:`high`},{id:`max`,label:t(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{utmDimension:`utm_source,utm_medium`,max:10}}}})),R,z,B,V,Me,Ne,Pe,Fe=e((()=>{R=`jpa/utm-insights`,z=`Top UTM`,B=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,V={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Me=`traffic`,Ne=`framed`,Pe={name:R,title:z,description:B,help:V,category:Me,presentation:Ne}}));function H(e){return(0,U.jsx)(N,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:g(!1,e)}})}function Ie({withComparison:e,...t}){return(0,U.jsx)(me,{...t,widgetType:Le,renderModule:W,renderComponent:N,attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:g(e)}})}var U,W,Le,Re,G,K,q,J,Y,X,Z,Q,$;e((()=>{_(),b(),x(),v(),he(),d(),xe(),Se(),Ae(),je(),Fe(),U=i(),l(),be(),W=`storybook/utm-insights`,Le=pe(Pe,L),Re={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:N,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},G={render:({withComparison:e})=>(0,U.jsx)(N,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:g(e)}}),args:{withComparison:!1},decorators:[C,S]},K={render:({withComparison:e})=>(0,U.jsx)(N,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:g(e)}}),args:{withComparison:!0},decorators:[C,S]},q={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`loading`),()=>w(`stats/utm`,null))},J={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`error`),()=>w(`stats/utm`,null))},Y={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`error-retryable`),()=>w(`stats/utm`,null))},X={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`empty`),()=>w(`stats/utm`,null))},Z={render:({withComparison:e})=>(0,U.jsx)(N,{attributes:{utmDimension:`utm_campaign`,max:10,reportParams:g(e)}}),args:{withComparison:!1},decorators:[C,S]},Q={render:e=>(0,U.jsx)(Ie,{...e}),args:{..._e,withComparison:!1},argTypes:{...y,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`ByCampaign`,`WidgetDashboardWithWidget`]}))();export{Z as ByCampaign,G as Default,X as Empty,J as Error,Y as ErrorRetryable,q as Loading,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,Re as default};