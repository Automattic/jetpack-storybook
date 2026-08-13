import{i as e}from"./preload-helper-usAeo7Bx.js";import{S as t,n,t as r}from"./build-module-DyKOxfM8.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{_ as a,t as o}from"./build-module-CbwHEf9N.js";import{Wi as s,n as c}from"./build-module-CDRs4YxF.js";import{Tr as ee,t as l}from"./src-OIjaQk1N.js";import{E as u,J as d,O as te,S as ne,Y as f,nt as p,ot as re,w as ie}from"./report-metric-DvbymNiD.js";import{t as m,v as ae}from"./src-Cvyt29m2.js";import{r as oe}from"./hooks-C570DXv9.js";import{$ as h,Dt as g,Kt as _,_r as v,et as se,h as ce,nt as le}from"./chart-tooltip-JHv3HFje.js";import{t as ue}from"./leaderboard-chart-98BYhS9Q.js";import{t as de}from"./widget-state-DIziXein.js";import{C as y,D as b,E as x,O as S,S as fe,T as pe,b as me,k as C,t as he,w as ge,x as w}from"./src-B1MCLR9S.js";import{n as _e,t as ve}from"./src-90G1Q_3U.js";import{n as ye,t as be}from"./register-stats-mocks-Ce8Bl0uV.js";import{n as xe,t as T}from"./force-stats-mock-state-0CztEzAI.js";var E,D,O,k,A,j,M,Se=e((()=>{E=`_root_sv0g9_1`,D=`_content_sv0g9_9`,O=`_backLink_sv0g9_17`,k=`_itemLabel_sv0g9_25`,A=`_itemLabelInset_sv0g9_37`,j=`_itemLabelText_sv0g9_41`,M={root:E,content:D,backLink:O,itemLabel:k,itemLabelInset:A,itemLabelText:j}}));function N(e){return typeof e.label==`string`?e.label:String(e.label)}function Ce(e){return{postId:e.id,label:N(e),value:e.value,previousValue:e.previousValue,href:e.href}}function we(e){return{label:N(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(Ce),childrenHaveComparison:e.childrenHaveComparison}}function Te({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:ee}=_({...e,utmParam:t,max:n},{maxRows:n}),l=(r?.rows??[]).map(we),u=l.length===0&&s;return{data:l,hasComparison:i,isLoading:a,isFetching:o,isError:u,error:u?c:null,refetch:ee}}var Ee=e((()=>{g()}));function De(e){switch(e){case`utm_source,utm_medium`:return`source-medium`;case`utm_campaign,utm_source,utm_medium`:return`campaign-source-medium`;case`utm_source`:return`source`;case`utm_medium`:return`medium`;case`utm_campaign`:return`campaign`}}function Oe({utmDimension:e,max:r,showReportLink:i}){let{reportParams:o}=re(),{drillDownItem:s,drillDown:c,resetDrillDown:l}=oe();(0,a.useEffect)(()=>{l()},[l,e]);let{data:d,hasComparison:f,isLoading:p,isFetching:m,isError:g,error:_,refetch:v}=Te({reportParams:o,utmParam:e,max:r}),y=(0,a.useMemo)(()=>d.find(e=>e.label===s)??null,[d,s]),b=!!y?.children?.length,x=(0,a.useMemo)(()=>b?y?.children??[]:d,[d,b,y]),S=b?!!y?.childrenHaveComparison:f;(0,a.useEffect)(()=>{s&&!b&&!p&&!m&&!g&&l()},[s,b,p,m,g,l]);let fe=(0,a.useMemo)(()=>{let e=se(x.map(e=>e.value),S?x.map(e=>e.previousValue):[]);return x.map((r,i)=>{let a=r.previousValue,o=`postId`in r?r:null;return{id:`${i}-${r.label}`,label:o?(0,F.jsx)(ne,{id:o.postId,label:o.label,link:o.href,variant:`overlay`,className:M.itemLabelInset}):(0,F.jsx)(`span`,{className:M.itemLabel,children:(0,F.jsx)(ee,{className:M.itemLabelText,children:r.label})}),currentValue:r.value,currentShare:h(r.value,e),previousValue:a,previousShare:S&&a!==void 0?h(a,e):void 0,delta:S&&a!==void 0?le(r.value,a):void 0,...!b&&`children`in r&&r.children?.length&&{onClick:()=>c(r.label),ariaLabel:t(n(`View posts for %s`,`jetpack-premium-analytics-pkg`),r.label)}}})},[x,b,c,S]);return(0,F.jsxs)(F.Fragment,{children:[b?(0,F.jsx)(te,{label:n(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:l,className:M.backLink}):null,(0,F.jsx)(`div`,{className:M.content,children:(0,F.jsx)(de,{isLoading:p,isFetching:m,isError:g,isEmpty:d.length===0,error:ce(_,{retryDescription:n(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:v}),empty:{icon:ae,description:n(`No UTM data in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,F.jsx)(ue,{data:fe,withComparison:S,withOverlayLabel:!0,showLegend:!1,dataFormat:ke})})}),i&&(0,F.jsx)(u,{children:(0,F.jsx)(ie,{report:`utm`,section:De(e)})})]})}function P({attributes:e={}}){let t=e.utmDimension??I,n=e.max??10,r=e.showReportLink??!0;return(0,F.jsx)(p,{attributes:e,children:(0,F.jsx)(`div`,{className:M.root,children:(0,F.jsx)(Oe,{utmDimension:t,max:n,showReportLink:r})})})}var F,ke,I,Ae=e((()=>{o(),r(),l(),he(),m(),Se(),Ee(),F=i(),ke={type:`number`,options:{useMultipliers:!0,decimals:0}},I=`utm_source,utm_medium`})),L,je=e((()=>{r(),c(),ve(),L={icon:s,attributes:[{id:`utmDimension`,label:n(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:_e,elements:[{label:n(`Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_source,utm_medium`},{label:n(`Campaign / Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_campaign,utm_source,utm_medium`},{label:n(`Source`,`jetpack-premium-analytics-pkg`),value:`utm_source`},{label:n(`Medium`,`jetpack-premium-analytics-pkg`),value:`utm_medium`},{label:n(`Campaign`,`jetpack-premium-analytics-pkg`),value:`utm_campaign`}],relevance:`high`},{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{utmDimension:`utm_source,utm_medium`,max:10}}}})),R,z,B,V,Me,Ne,Pe,Fe=e((()=>{R=`jpa/utm-insights`,z=`Top UTM`,B=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,V={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Me=`traffic`,Ne=`framed`,Pe={name:R,title:z,description:B,help:V,category:Me,presentation:Ne}}));function H(e){return(0,U.jsx)(P,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:v(!1,e)}})}function Ie({withComparison:e,...t}){return(0,U.jsx)(pe,{...t,widgetType:Le,renderModule:W,renderComponent:P,attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:v(e)}})}var U,W,Le,Re,G,K,q,J,Y,X,Z,Q,$;e((()=>{g(),x(),S(),y(),me(),d(),be(),xe(),Ae(),je(),Fe(),U=i(),f(),ye(),W=`storybook/utm-insights`,Le=fe(Pe,L),Re={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:P,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},G={render:({withComparison:e})=>(0,U.jsx)(P,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:v(e)}}),args:{withComparison:!1},decorators:[w,C]},K={render:({withComparison:e})=>(0,U.jsx)(P,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:v(e)}}),args:{withComparison:!0},decorators:[w,C]},q={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(T(`stats/utm`,`loading`),()=>T(`stats/utm`,null))},J={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(T(`stats/utm`,`error`),()=>T(`stats/utm`,null))},Y={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(T(`stats/utm`,`error-retryable`),()=>T(`stats/utm`,null))},X={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(T(`stats/utm`,`empty`),()=>T(`stats/utm`,null))},Z={render:({withComparison:e})=>(0,U.jsx)(P,{attributes:{utmDimension:`utm_campaign`,max:10,reportParams:v(e)}}),args:{withComparison:!1},decorators:[w,C]},Q={render:e=>(0,U.jsx)(Ie,{...e}),args:{...ge,withComparison:!1},argTypes:{...b,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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