import{i as e}from"./preload-helper-usAeo7Bx.js";import{S as t,n,t as r}from"./build-module-DyKOxfM8.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{_ as a,t as o}from"./build-module-CbwHEf9N.js";import{Wi as s,n as c}from"./build-module-CDRs4YxF.js";import{Tr as ee,t as l}from"./src-BOFAxT8S.js";import{$ as u,E as te,K as d,O as ne,S as re,q as f,rt as ie,w as ae}from"./report-metric-B86vORgJ.js";import{t as p,v as oe}from"./src-B-M_FbbE.js";import{r as se}from"./hooks-Dh6TPeMX.js";import{Ct as m,Ht as h,Q as ce,X as le,Y as ue,p as de,pr as g}from"./chart-tooltip-CG5U6VLC.js";import{t as fe}from"./leaderboard-chart-BwuA12-7.js";import{C as _,D as v,E as y,O as b,S as pe,T as me,b as he,k as x,t as ge,w as _e,x as S}from"./src-DDXkCLgB.js";import{t as ve}from"./widget-state-CvdMFL_6.js";import{n as ye,t as be}from"./src-BoGqwtWH.js";import{n as xe,t as Se}from"./register-stats-mocks-C_0B_WLm.js";import{n as Ce,t as C}from"./force-stats-mock-state-D6Ht-A7s.js";var w,T,E,D,O,k,A,we=e((()=>{w=`_root_sv0g9_1`,T=`_content_sv0g9_9`,E=`_backLink_sv0g9_17`,D=`_itemLabel_sv0g9_25`,O=`_itemLabelInset_sv0g9_37`,k=`_itemLabelText_sv0g9_41`,A={root:w,content:T,backLink:E,itemLabel:D,itemLabelInset:O,itemLabelText:k}}));function j(e){return typeof e.label==`string`?e.label:String(e.label)}function Te(e){return{postId:e.id,label:j(e),value:e.value,previousValue:e.previousValue,href:e.href}}function Ee(e){return{label:j(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(Te),childrenHaveComparison:e.childrenHaveComparison}}function De({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:ee}=h({...e,utmParam:t,max:n},{maxRows:n}),l=(r?.rows??[]).map(Ee),u=l.length===0&&s;return{data:l,hasComparison:i,isLoading:a,isFetching:o,isError:u,error:u?c:null,refetch:ee}}var Oe=e((()=>{m()}));function ke(e){switch(e){case`utm_source,utm_medium`:return`source-medium`;case`utm_campaign,utm_source,utm_medium`:return`campaign-source-medium`;case`utm_source`:return`source`;case`utm_medium`:return`medium`;case`utm_campaign`:return`campaign`}}function Ae({utmDimension:e,max:r,showReportLink:i}){let{reportParams:o}=ie(),{drillDownItem:s,drillDown:c,resetDrillDown:l}=se();(0,a.useEffect)(()=>{l()},[l,e]);let{data:u,hasComparison:d,isLoading:f,isFetching:p,isError:m,error:h,refetch:g}=De({reportParams:o,utmParam:e,max:r}),_=(0,a.useMemo)(()=>u.find(e=>e.label===s)??null,[u,s]),v=!!_?.children?.length,y=(0,a.useMemo)(()=>v?_?.children??[]:u,[u,v,_]),b=v?!!_?.childrenHaveComparison:d;(0,a.useEffect)(()=>{s&&!v&&!f&&!p&&!m&&l()},[s,v,f,p,m,l]);let pe=(0,a.useMemo)(()=>{let e=le(y.map(e=>e.value),b?y.map(e=>e.previousValue):[]);return y.map((r,i)=>{let a=r.previousValue,o=`postId`in r?r:null;return{id:`${i}-${r.label}`,label:o?(0,N.jsx)(re,{id:o.postId,label:o.label,link:o.href,variant:`overlay`,className:A.itemLabelInset}):(0,N.jsx)(`span`,{className:A.itemLabel,children:(0,N.jsx)(ee,{className:A.itemLabelText,children:r.label})}),currentValue:r.value,currentShare:ue(r.value,e),previousValue:a,previousShare:b&&a!==void 0?ue(a,e):void 0,delta:b&&a!==void 0?ce(r.value,a):void 0,...!v&&`children`in r&&r.children?.length&&{onClick:()=>c(r.label),ariaLabel:t(n(`View posts for %s`,`jetpack-premium-analytics-pkg`),r.label)}}})},[y,v,c,b]);return(0,N.jsxs)(N.Fragment,{children:[v?(0,N.jsx)(ne,{label:n(`All UTM Insights`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:l,className:A.backLink}):null,(0,N.jsx)(`div`,{className:A.content,children:(0,N.jsx)(ve,{isLoading:f,isFetching:p,isError:m,isEmpty:u.length===0,error:de(h,{retryDescription:n(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:g}),empty:{icon:oe,description:n(`No UTM data in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,N.jsx)(fe,{data:pe,withComparison:b,withOverlayLabel:!0,showLegend:!1,dataFormat:P})})}),i&&(0,N.jsx)(te,{children:(0,N.jsx)(ae,{report:`utm`,section:ke(e)})})]})}function M({attributes:e={}}){let t=e.utmDimension??F,n=e.max??10,r=e.showReportLink??!0;return(0,N.jsx)(u,{attributes:e,children:(0,N.jsx)(`div`,{className:A.root,children:(0,N.jsx)(Ae,{utmDimension:t,max:n,showReportLink:r})})})}var N,P,F,je=e((()=>{o(),r(),l(),ge(),p(),we(),Oe(),N=i(),P={type:`number`,options:{useMultipliers:!0,decimals:0}},F=`utm_source,utm_medium`})),I,Me=e((()=>{r(),c(),be(),I={icon:s,attributes:[{id:`utmDimension`,label:n(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:ye,elements:[{label:n(`Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_source,utm_medium`},{label:n(`Campaign / Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_campaign,utm_source,utm_medium`},{label:n(`Source`,`jetpack-premium-analytics-pkg`),value:`utm_source`},{label:n(`Medium`,`jetpack-premium-analytics-pkg`),value:`utm_medium`},{label:n(`Campaign`,`jetpack-premium-analytics-pkg`),value:`utm_campaign`}],relevance:`high`},{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{utmDimension:`utm_source,utm_medium`,max:10}}}})),L,R,z,B,V,Ne,Pe,Fe=e((()=>{L=`jpa/utm-insights`,R=`Top UTM`,z=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,B={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},V=`traffic`,Ne=`framed`,Pe={name:L,title:R,description:z,help:B,category:V,presentation:Ne}}));function H(e){return(0,U.jsx)(M,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:g(!1,e)}})}function Ie({withComparison:e,...t}){return(0,U.jsx)(me,{...t,widgetType:Le,renderModule:W,renderComponent:M,attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:g(e)}})}var U,W,Le,Re,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),y(),b(),_(),he(),d(),Se(),Ce(),je(),Me(),Fe(),U=i(),f(),xe(),W=`storybook/utm-insights`,Le=pe(Pe,I),Re={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:M,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},G={render:({withComparison:e})=>(0,U.jsx)(M,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:g(e)}}),args:{withComparison:!1},decorators:[S,x]},K={render:({withComparison:e})=>(0,U.jsx)(M,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:g(e)}}),args:{withComparison:!0},decorators:[S,x]},q={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/utm`,`loading`),()=>C(`stats/utm`,null))},J={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/utm`,`error`),()=>C(`stats/utm`,null))},Y={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/utm`,`error-retryable`),()=>C(`stats/utm`,null))},X={render:()=>H(`last-365-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/utm`,`empty`),()=>C(`stats/utm`,null))},Z={render:({withComparison:e})=>(0,U.jsx)(M,{attributes:{utmDimension:`utm_campaign`,max:10,reportParams:g(e)}}),args:{withComparison:!1},decorators:[S,x]},Q={render:e=>(0,U.jsx)(Ie,{...e}),args:{..._e,withComparison:!1},argTypes:{...v,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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