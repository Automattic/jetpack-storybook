import{i as e}from"./preload-helper-usAeo7Bx.js";import{S as t,n,t as r}from"./build-module-DyKOxfM8.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{_ as a,t as o}from"./build-module-CbwHEf9N.js";import{Wi as s,n as c}from"./build-module-CDRs4YxF.js";import{Tn as ee,t as l}from"./src-C-4rc46a.js";import{$ as u,E as te,G as d,K as f,S as ne,b as re,rt as ie,w as ae}from"./report-metric-C_3XGBsp.js";import{b as oe,t as p}from"./src-BKLK-O8P.js";import{Gt as m,b as se,t as h}from"./src-C1ZZgwjo.js";import{r as ce}from"./hooks-BYlhyVGv.js";import"./constants-B1kGztHF.js";import{c as g,it as le,l as _,ot as ue,rt as v,x as de}from"./chart-tooltip-DrvQsAuP.js";import{r as fe,t as pe}from"./leaderboard-skeleton-B_xsFy5O.js";import{t as me}from"./widget-state-deUAaMeK.js";import{C as y,D as b,E as he,O as ge,S as _e,T as ve,b as ye,k as x,t as be,w as xe,x as S}from"./src-BAd7jy91.js";import{n as Se,t as Ce}from"./register-stats-mocks-CjrqjzNG.js";import{n as we,t as C}from"./force-stats-mock-state-bNPPqTpO.js";var w,Te,Ee,De,Oe,T,E,ke=e((()=>{w=`_root_sv0g9_1`,Te=`_content_sv0g9_9`,Ee=`_backLink_sv0g9_17`,De=`_itemLabel_sv0g9_25`,Oe=`_itemLabelInset_sv0g9_37`,T=`_itemLabelText_sv0g9_41`,E={root:w,content:Te,backLink:Ee,itemLabel:De,itemLabelInset:Oe,itemLabelText:T}}));function D(e){return typeof e.label==`string`?e.label:String(e.label)}function Ae(e){return{postId:e.id,label:D(e),value:e.value,previousValue:e.previousValue,href:e.href}}function je(e){return{label:D(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(Ae),childrenHaveComparison:e.childrenHaveComparison}}function Me({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:ee}=se({...e,utmParam:t,max:n},{maxRows:n}),l=(r?.rows??[]).map(je),u=l.length===0&&s;return{data:l,hasComparison:i,isLoading:a,isFetching:o,isError:u,error:u?c:null,refetch:ee}}var Ne=e((()=>{h()}));function Pe(e){switch(e){case`utm_source,utm_medium`:return`source-medium`;case`utm_campaign,utm_source,utm_medium`:return`campaign-source-medium`;case`utm_source`:return`source`;case`utm_medium`:return`medium`;case`utm_campaign`:return`campaign`}}function Fe({utmDimension:e,showReportLink:r}){let{reportParams:i}=ie(),{drillDownItem:o,drillDown:s,resetDrillDown:c}=ce();(0,a.useEffect)(()=>{c()},[c,e]);let{data:l,hasComparison:u,isLoading:d,isFetching:f,isError:p,error:m,refetch:se}=Me({reportParams:i,utmParam:e,max:10}),h=(0,a.useMemo)(()=>l.find(e=>e.label===o)??null,[l,o]),g=!!h?.children?.length,_=(0,a.useMemo)(()=>g?h?.children??[]:l,[l,g,h]),y=g?!!h?.childrenHaveComparison:u;(0,a.useEffect)(()=>{o&&!g&&!d&&!f&&!p&&c()},[o,g,d,f,p,c]);let b=(0,a.useMemo)(()=>{let e=le(_.map(e=>e.value),y?_.map(e=>e.previousValue):[]);return _.map((r,i)=>{let a=r.previousValue,o=`postId`in r?r:null;return{id:`${i}-${r.label}`,label:o?(0,k.jsx)(re,{id:o.postId,label:o.label,link:o.href,variant:`overlay`,className:E.itemLabelInset}):(0,k.jsx)(`span`,{className:E.itemLabel,children:(0,k.jsx)(ee,{className:E.itemLabelText,children:r.label})}),currentValue:r.value,currentShare:v(r.value,e),previousValue:a,previousShare:y&&a!==void 0?v(a,e):void 0,delta:y&&a!==void 0?ue(r.value,a):void 0,...!g&&`children`in r&&r.children?.length&&{onClick:()=>s(r.label),ariaLabel:t(n(`View posts for %s`,`jetpack-premium-analytics-pkg`),r.label)}}})},[_,g,s,y]);return(0,k.jsxs)(k.Fragment,{children:[g?(0,k.jsx)(te,{label:n(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:c,className:E.backLink}):null,(0,k.jsx)(`div`,{className:E.content,children:(0,k.jsx)(me,{isLoading:d,isFetching:f,isError:p,isEmpty:l.length===0,error:de(m,{retryDescription:n(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:se}),empty:{icon:oe,description:n(`No UTM data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,k.jsx)(pe,{rows:10}),children:(0,k.jsx)(fe,{data:b,withComparison:y,withOverlayLabel:!0,showLegend:!1,dataFormat:A})})}),r&&(0,k.jsx)(ae,{children:(0,k.jsx)(ne,{report:`utm`,section:Pe(e)})})]})}function O({attributes:e={}}){let t=e.utmDimension??j,n=e.showReportLink??!0;return(0,k.jsx)(u,{attributes:e,children:(0,k.jsx)(`div`,{className:E.root,children:(0,k.jsx)(Fe,{utmDimension:t,showReportLink:n})})})}var k,A,j,Ie=e((()=>{o(),r(),l(),be(),p(),ke(),Ne(),k=i(),A={type:`number`,options:{useMultipliers:!0,decimals:0}},j=`utm_source,utm_medium`})),M,Le=e((()=>{r(),c(),g(),M={icon:s,attributes:[{id:`utmDimension`,label:n(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:_,elements:[{label:n(`Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_source,utm_medium`},{label:n(`Campaign / Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_campaign,utm_source,utm_medium`},{label:n(`Source`,`jetpack-premium-analytics-pkg`),value:`utm_source`},{label:n(`Medium`,`jetpack-premium-analytics-pkg`),value:`utm_medium`},{label:n(`Campaign`,`jetpack-premium-analytics-pkg`),value:`utm_campaign`}],relevance:`high`}],example:{attributes:{utmDimension:`utm_source,utm_medium`}}}})),N,P,F,I,L,R,z,Re=e((()=>{N=`jpa/utm-insights`,P=`Top UTM`,F=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,I={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`traffic`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B(e){return(0,V.jsx)(O,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:m(!1,e)}})}function ze({withComparison:e,...t}){return(0,V.jsx)(ve,{...t,widgetType:U,renderModule:H,renderComponent:O,attributes:{utmDimension:`utm_source,utm_medium`,reportParams:m(e)}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),he(),ge(),y(),ye(),d(),Ce(),we(),Ie(),Le(),Re(),V=i(),f(),Se(),H=`storybook/utm-insights`,U=_e(z,M),W={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},G={render:({withComparison:e})=>(0,V.jsx)(O,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:m(e)}}),args:{withComparison:!1},decorators:[S,x]},K={render:({withComparison:e})=>(0,V.jsx)(O,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:m(e)}}),args:{withComparison:!0},decorators:[S,x]},q={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/utm`,`loading`),()=>C(`stats/utm`,null))},J={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/utm`,`error`),()=>C(`stats/utm`,null))},Y={render:()=>B(`last-12-months`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/utm`,`error-retryable`),()=>C(`stats/utm`,null))},X={render:()=>B(`last-year`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/utm`,`empty`),()=>C(`stats/utm`,null))},Z={render:({withComparison:e})=>(0,V.jsx)(O,{attributes:{utmDimension:`utm_campaign`,reportParams:m(e)}}),args:{withComparison:!1},decorators:[S,x]},Q={render:e=>(0,V.jsx)(ze,{...e}),args:{...xe,withComparison:!1},argTypes:{...b,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: ({
    withComparison
  }) => <UtmInsightsRender attributes={{
    utmDimension: 'utm_source,utm_medium',
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
  render: () => renderUtmInsightsOnPreset('last-year'),
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`ByCampaign`,`WidgetDashboardWithWidget`]}))();export{Z as ByCampaign,G as Default,X as Empty,J as Error,Y as ErrorRetryable,q as Loading,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,W as default};