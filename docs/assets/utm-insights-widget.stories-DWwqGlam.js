import{i as e}from"./preload-helper-usAeo7Bx.js";import{S as t,n,t as r}from"./build-module-DyKOxfM8.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{_ as a,t as o}from"./build-module-CbwHEf9N.js";import{Wi as s,n as c}from"./build-module-CDRs4YxF.js";import{Tn as l,t as u}from"./src-KiPFRHBP.js";import{E as d,J as f,O as ee,S as te,at as ne,q as re,tt as p,w as ie}from"./report-metric-mgfJDJ0k.js";import{b as ae,t as m}from"./src-BKLK-O8P.js";import{r as oe}from"./hooks-C9iDVlLe.js";import{Cr as h,Nt as g,Qt as se,at as ce,c as _,ct as le,l as v,ot as ue,x as de}from"./chart-tooltip-DKfOwesw.js";import{r as fe,t as pe}from"./leaderboard-skeleton-Dm1nKmy7.js";import{t as me}from"./widget-state-UmEbSe_V.js";import{C as y,D as b,E as he,O as ge,S as _e,T as ve,b as ye,k as x,t as be,w as xe,x as S}from"./src-C7fcb0YA.js";import{n as Se,t as Ce}from"./register-stats-mocks-CBKL8FEI.js";import{n as we,t as C}from"./force-stats-mock-state-C5f8rDdK.js";var w,T,E,D,O,k,A,Te=e((()=>{w=`_root_sv0g9_1`,T=`_content_sv0g9_9`,E=`_backLink_sv0g9_17`,D=`_itemLabel_sv0g9_25`,O=`_itemLabelInset_sv0g9_37`,k=`_itemLabelText_sv0g9_41`,A={root:w,content:T,backLink:E,itemLabel:D,itemLabelInset:O,itemLabelText:k}}));function j(e){return typeof e.label==`string`?e.label:String(e.label)}function Ee(e){return{postId:e.id,label:j(e),value:e.value,previousValue:e.previousValue,href:e.href}}function De(e){return{label:j(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(Ee),childrenHaveComparison:e.childrenHaveComparison}}function Oe({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=se({...e,utmParam:t,max:n},{maxRows:n}),u=(r?.rows??[]).map(De),d=u.length===0&&s;return{data:u,hasComparison:i,isLoading:a,isFetching:o,isError:d,error:d?c:null,refetch:l}}var ke=e((()=>{g()}));function Ae(e){switch(e){case`utm_source,utm_medium`:return`source-medium`;case`utm_campaign,utm_source,utm_medium`:return`campaign-source-medium`;case`utm_source`:return`source`;case`utm_medium`:return`medium`;case`utm_campaign`:return`campaign`}}function je({utmDimension:e,max:r,showReportLink:i}){let{reportParams:o}=ne(),{drillDownItem:s,drillDown:c,resetDrillDown:u}=oe();(0,a.useEffect)(()=>{u()},[u,e]);let{data:f,hasComparison:re,isLoading:p,isFetching:m,isError:h,error:g,refetch:se}=Oe({reportParams:o,utmParam:e,max:r}),_=(0,a.useMemo)(()=>f.find(e=>e.label===s)??null,[f,s]),v=!!_?.children?.length,y=(0,a.useMemo)(()=>v?_?.children??[]:f,[f,v,_]),b=v?!!_?.childrenHaveComparison:re;(0,a.useEffect)(()=>{s&&!v&&!p&&!m&&!h&&u()},[s,v,p,m,h,u]);let he=(0,a.useMemo)(()=>{let e=ue(y.map(e=>e.value),b?y.map(e=>e.previousValue):[]);return y.map((r,i)=>{let a=r.previousValue,o=`postId`in r?r:null;return{id:`${i}-${r.label}`,label:o?(0,N.jsx)(te,{id:o.postId,label:o.label,link:o.href,variant:`overlay`,className:A.itemLabelInset}):(0,N.jsx)(`span`,{className:A.itemLabel,children:(0,N.jsx)(l,{className:A.itemLabelText,children:r.label})}),currentValue:r.value,currentShare:ce(r.value,e),previousValue:a,previousShare:b&&a!==void 0?ce(a,e):void 0,delta:b&&a!==void 0?le(r.value,a):void 0,...!v&&`children`in r&&r.children?.length&&{onClick:()=>c(r.label),ariaLabel:t(n(`View posts for %s`,`jetpack-premium-analytics-pkg`),r.label)}}})},[y,v,c,b]);return(0,N.jsxs)(N.Fragment,{children:[v?(0,N.jsx)(ee,{label:n(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:u,className:A.backLink}):null,(0,N.jsx)(`div`,{className:A.content,children:(0,N.jsx)(me,{isLoading:p,isFetching:m,isError:h,isEmpty:f.length===0,error:de(g,{retryDescription:n(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:se}),empty:{icon:ae,description:n(`No UTM data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,N.jsx)(pe,{rows:r}),children:(0,N.jsx)(fe,{data:he,withComparison:b,withOverlayLabel:!0,showLegend:!1,dataFormat:P})})}),i&&(0,N.jsx)(d,{children:(0,N.jsx)(ie,{report:`utm`,section:Ae(e)})})]})}function M({attributes:e={}}){let t=e.utmDimension??F,n=e.max??10,r=e.showReportLink??!0;return(0,N.jsx)(p,{attributes:e,children:(0,N.jsx)(`div`,{className:A.root,children:(0,N.jsx)(je,{utmDimension:t,max:n,showReportLink:r})})})}var N,P,F,Me=e((()=>{o(),r(),u(),be(),m(),Te(),ke(),N=i(),P={type:`number`,options:{useMultipliers:!0,decimals:0}},F=`utm_source,utm_medium`})),I,Ne=e((()=>{r(),c(),_(),I={icon:s,attributes:[{id:`utmDimension`,label:n(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:v,elements:[{label:n(`Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_source,utm_medium`},{label:n(`Campaign / Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_campaign,utm_source,utm_medium`},{label:n(`Source`,`jetpack-premium-analytics-pkg`),value:`utm_source`},{label:n(`Medium`,`jetpack-premium-analytics-pkg`),value:`utm_medium`},{label:n(`Campaign`,`jetpack-premium-analytics-pkg`),value:`utm_campaign`}],relevance:`high`},{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{utmDimension:`utm_source,utm_medium`,max:10}}}})),L,R,z,B,V,Pe,Fe,Ie=e((()=>{L=`jpa/utm-insights`,R=`Top UTM`,z=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,B={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},V=`traffic`,Pe=`framed`,Fe={name:L,title:R,description:z,help:B,category:V,presentation:Pe}}));function H(e){return(0,U.jsx)(M,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:h(!1,e)}})}function Le({withComparison:e,...t}){return(0,U.jsx)(ve,{...t,widgetType:Re,renderModule:W,renderComponent:M,attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:h(e)}})}var U,W,Re,ze,G,K,q,J,Y,X,Z,Q,$;e((()=>{g(),he(),ge(),y(),ye(),re(),Ce(),we(),Me(),Ne(),Ie(),U=i(),f(),Se(),W=`storybook/utm-insights`,Re=_e(Fe,I),ze={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:M,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},G={render:({withComparison:e})=>(0,U.jsx)(M,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:h(e)}}),args:{withComparison:!1},decorators:[S,x]},K={render:({withComparison:e})=>(0,U.jsx)(M,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:h(e)}}),args:{withComparison:!0},decorators:[S,x]},q={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/utm`,`loading`),()=>C(`stats/utm`,null))},J={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/utm`,`error`),()=>C(`stats/utm`,null))},Y={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/utm`,`error-retryable`),()=>C(`stats/utm`,null))},X={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/utm`,`empty`),()=>C(`stats/utm`,null))},Z={render:({withComparison:e})=>(0,U.jsx)(M,{attributes:{utmDimension:`utm_campaign`,max:10,reportParams:h(e)}}),args:{withComparison:!1},decorators:[S,x]},Q={render:e=>(0,U.jsx)(Le,{...e}),args:{...xe,withComparison:!1},argTypes:{...b,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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