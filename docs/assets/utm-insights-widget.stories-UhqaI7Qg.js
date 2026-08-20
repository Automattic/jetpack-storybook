import{i as e}from"./preload-helper-usAeo7Bx.js";import{S as t,n,t as r}from"./build-module-DyKOxfM8.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{_ as a,t as o}from"./build-module-CbwHEf9N.js";import{Wi as s,n as c}from"./build-module-CDRs4YxF.js";import{Tn as l,t as u}from"./src-NeV_lg2z.js";import{E as d,J as f,O as ee,S as te,at as ne,q as re,tt as p,w as ie}from"./report-metric-CG4McNXT.js";import{b as ae,t as m}from"./src-BKLK-O8P.js";import{Gt as h,b as g,t as _}from"./src-Boe-c6TP.js";import{r as oe}from"./hooks-Ssdgpy5_.js";import{at as se,c as v,ct as ce,l as y,ot as le,x as ue}from"./chart-tooltip-DEV3Aqbv.js";import{r as de,t as fe}from"./leaderboard-skeleton-CEZ8h0Q-.js";import{t as pe}from"./widget-state-BsgP3UWI.js";import{C as b,D as x,E as me,O as he,S as ge,T as _e,b as ve,k as S,t as ye,w as be,x as C}from"./src-D-0P4cBO.js";import{n as xe,t as Se}from"./register-stats-mocks-CbnL6rJz.js";import{n as Ce,t as w}from"./force-stats-mock-state-CFiaSJfH.js";var T,E,D,O,k,A,j,we=e((()=>{T=`_root_sv0g9_1`,E=`_content_sv0g9_9`,D=`_backLink_sv0g9_17`,O=`_itemLabel_sv0g9_25`,k=`_itemLabelInset_sv0g9_37`,A=`_itemLabelText_sv0g9_41`,j={root:T,content:E,backLink:D,itemLabel:O,itemLabelInset:k,itemLabelText:A}}));function M(e){return typeof e.label==`string`?e.label:String(e.label)}function Te(e){return{postId:e.id,label:M(e),value:e.value,previousValue:e.previousValue,href:e.href}}function Ee(e){return{label:M(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(Te),childrenHaveComparison:e.childrenHaveComparison}}function De({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=g({...e,utmParam:t,max:n},{maxRows:n}),u=(r?.rows??[]).map(Ee),d=u.length===0&&s;return{data:u,hasComparison:i,isLoading:a,isFetching:o,isError:d,error:d?c:null,refetch:l}}var Oe=e((()=>{_()}));function ke(e){switch(e){case`utm_source,utm_medium`:return`source-medium`;case`utm_campaign,utm_source,utm_medium`:return`campaign-source-medium`;case`utm_source`:return`source`;case`utm_medium`:return`medium`;case`utm_campaign`:return`campaign`}}function Ae({utmDimension:e,max:r,showReportLink:i}){let{reportParams:o}=ne(),{drillDownItem:s,drillDown:c,resetDrillDown:u}=oe();(0,a.useEffect)(()=>{u()},[u,e]);let{data:f,hasComparison:re,isLoading:p,isFetching:m,isError:h,error:g,refetch:_}=De({reportParams:o,utmParam:e,max:r}),v=(0,a.useMemo)(()=>f.find(e=>e.label===s)??null,[f,s]),y=!!v?.children?.length,b=(0,a.useMemo)(()=>y?v?.children??[]:f,[f,y,v]),x=y?!!v?.childrenHaveComparison:re;(0,a.useEffect)(()=>{s&&!y&&!p&&!m&&!h&&u()},[s,y,p,m,h,u]);let me=(0,a.useMemo)(()=>{let e=le(b.map(e=>e.value),x?b.map(e=>e.previousValue):[]);return b.map((r,i)=>{let a=r.previousValue,o=`postId`in r?r:null;return{id:`${i}-${r.label}`,label:o?(0,P.jsx)(te,{id:o.postId,label:o.label,link:o.href,variant:`overlay`,className:j.itemLabelInset}):(0,P.jsx)(`span`,{className:j.itemLabel,children:(0,P.jsx)(l,{className:j.itemLabelText,children:r.label})}),currentValue:r.value,currentShare:se(r.value,e),previousValue:a,previousShare:x&&a!==void 0?se(a,e):void 0,delta:x&&a!==void 0?ce(r.value,a):void 0,...!y&&`children`in r&&r.children?.length&&{onClick:()=>c(r.label),ariaLabel:t(n(`View posts for %s`,`jetpack-premium-analytics-pkg`),r.label)}}})},[b,y,c,x]);return(0,P.jsxs)(P.Fragment,{children:[y?(0,P.jsx)(ee,{label:n(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:u,className:j.backLink}):null,(0,P.jsx)(`div`,{className:j.content,children:(0,P.jsx)(pe,{isLoading:p,isFetching:m,isError:h,isEmpty:f.length===0,error:ue(g,{retryDescription:n(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:_}),empty:{icon:ae,description:n(`No UTM data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,P.jsx)(fe,{rows:r}),children:(0,P.jsx)(de,{data:me,withComparison:x,withOverlayLabel:!0,showLegend:!1,dataFormat:F})})}),i&&(0,P.jsx)(d,{children:(0,P.jsx)(ie,{report:`utm`,section:ke(e)})})]})}function N({attributes:e={}}){let t=e.utmDimension??I,n=e.max??10,r=e.showReportLink??!0;return(0,P.jsx)(p,{attributes:e,children:(0,P.jsx)(`div`,{className:j.root,children:(0,P.jsx)(Ae,{utmDimension:t,max:n,showReportLink:r})})})}var P,F,I,je=e((()=>{o(),r(),u(),ye(),m(),we(),Oe(),P=i(),F={type:`number`,options:{useMultipliers:!0,decimals:0}},I=`utm_source,utm_medium`})),L,Me=e((()=>{r(),c(),v(),L={icon:s,attributes:[{id:`utmDimension`,label:n(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:y,elements:[{label:n(`Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_source,utm_medium`},{label:n(`Campaign / Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_campaign,utm_source,utm_medium`},{label:n(`Source`,`jetpack-premium-analytics-pkg`),value:`utm_source`},{label:n(`Medium`,`jetpack-premium-analytics-pkg`),value:`utm_medium`},{label:n(`Campaign`,`jetpack-premium-analytics-pkg`),value:`utm_campaign`}],relevance:`high`},{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{utmDimension:`utm_source,utm_medium`,max:10}}}})),R,z,B,V,Ne,Pe,Fe,Ie=e((()=>{R=`jpa/utm-insights`,z=`Top UTM`,B=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,V={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},Ne=`traffic`,Pe=`framed`,Fe={name:R,title:z,description:B,help:V,category:Ne,presentation:Pe}}));function H(e){return(0,U.jsx)(N,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:h(!1,e)}})}function Le({withComparison:e,...t}){return(0,U.jsx)(_e,{...t,widgetType:Re,renderModule:W,renderComponent:N,attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:h(e)}})}var U,W,Re,ze,G,K,q,J,Y,X,Z,Q,$;e((()=>{_(),me(),he(),b(),ve(),re(),Se(),Ce(),je(),Me(),Ie(),U=i(),f(),xe(),W=`storybook/utm-insights`,Re=ge(Fe,L),ze={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:N,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},G={render:({withComparison:e})=>(0,U.jsx)(N,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:h(e)}}),args:{withComparison:!1},decorators:[C,S]},K={render:({withComparison:e})=>(0,U.jsx)(N,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:h(e)}}),args:{withComparison:!0},decorators:[C,S]},q={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`loading`),()=>w(`stats/utm`,null))},J={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`error`),()=>w(`stats/utm`,null))},Y={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`error-retryable`),()=>w(`stats/utm`,null))},X={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`empty`),()=>w(`stats/utm`,null))},Z={render:({withComparison:e})=>(0,U.jsx)(N,{attributes:{utmDimension:`utm_campaign`,max:10,reportParams:h(e)}}),args:{withComparison:!1},decorators:[C,S]},Q={render:e=>(0,U.jsx)(Le,{...e}),args:{...be,withComparison:!1},argTypes:{...x,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`ByCampaign`,`WidgetDashboardWithWidget`]}))();export{Z as ByCampaign,G as Default,X as Empty,J as Error,Y as ErrorRetryable,q as Loading,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,ze as default};