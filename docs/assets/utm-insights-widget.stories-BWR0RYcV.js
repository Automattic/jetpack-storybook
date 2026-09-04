import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as ee}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Gi as i,Gu as a,Nu as o,t as s}from"./build-module-zwSmKorH.js";import{At as te,K as c,M as l,Mt as ne,b as re,g as u,j as d,kt as f,r as ie}from"./hooks-B-btgGBm.js";import{b as ae,t as p}from"./src-DFNM1k7F.js";import{A as m,en as h,i as g}from"./date-filters-panel-B8opo2uL.js";import"./constants-B1kGztHF.js";import{r as oe,t as se}from"./leaderboard-skeleton-DGDpEg9w.js";import{F as ce,G as _,K as v,N as le,S as ue,b as de,v as fe,w as pe}from"./report-metric-KGnB9vhe.js";import{t as me}from"./widget-state-Dqefb49q.js";import{C as y,D as b,E as he,O as ge,S as _e,T as ve,b as ye,k as x,t as be,w as xe,x as S}from"./src-0dZ7sF1j.js";import{n as Se,t as Ce}from"./register-stats-mocks-B7LziK-C.js";import{n as we,t as C}from"./force-stats-mock-state-DfHVz-RH.js";var w,T,E,D,Te=e((()=>{w=`_root_xmjm2_1`,T=`_content_xmjm2_9`,E=`_backLink_xmjm2_16`,D={root:w,content:T,backLink:E}}));function O(e){return typeof e.label==`string`?e.label:String(e.label)}function Ee(e){return{postId:e.id,label:O(e),value:e.value,previousValue:e.previousValue,href:e.href}}function De(e){return{label:O(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(Ee),childrenHaveComparison:e.childrenHaveComparison}}function Oe({reportParams:e,utmParam:t,max:n}){let{comparisonRows:ee,hasComparison:r,isLoading:i,isFetching:a,isError:o,error:s,refetch:te}=m({...e,utmParam:t,max:n},{maxRows:n}),c=(ee?.rows??[]).map(De),l=c.length===0&&o;return{data:c,hasComparison:r,isLoading:i,isFetching:a,isError:l,error:l?s:null,refetch:te}}var ke=e((()=>{g()}));function Ae(e){switch(e){case`utm_source,utm_medium`:return`source-medium`;case`utm_campaign,utm_source,utm_medium`:return`campaign-source-medium`;case`utm_source`:return`source`;case`utm_medium`:return`medium`;case`utm_campaign`:return`campaign`}}function je({utmDimension:e,showReportLink:n}){let{reportParams:r}=re(),{drillDownItem:i,drillDown:o,resetDrillDown:s}=ie();(0,a.useEffect)(()=>{s()},[s,e]);let{data:l,hasComparison:u,isLoading:d,isFetching:p,isError:m,error:h,refetch:g}=Oe({reportParams:r,utmParam:e,max:10}),_=(0,a.useMemo)(()=>l.find(e=>e.label===i)??null,[l,i]),v=!!_?.children?.length,y=(0,a.useMemo)(()=>v?_?.children??[]:l,[l,v,_]),b=v?!!_?.childrenHaveComparison:u;(0,a.useEffect)(()=>{i&&!v&&!d&&!p&&!m&&s()},[i,v,d,p,m,s]);let he=(0,a.useMemo)(()=>{let e=te(y.map(e=>e.value),b?y.map(e=>e.previousValue):[]);return y.map((n,r)=>{let i=n.previousValue,a=`postId`in n?n:null,s=!v&&`children`in n&&!!n.children?.length;return{id:`${r}-${n.label}`,...a?{label:(0,A.jsx)(fe,{id:a.postId,label:a.label,link:a.href})}:le({label:n.label,media:{kind:`none`},action:ce({hasChildren:s,drillDown:{onClick:()=>o(n.label),ariaLabel:ee(t(`View posts for %s`,`jetpack-premium-analytics-pkg`),n.label)}})}),currentValue:n.value,currentShare:f(n.value,e),previousValue:i,previousShare:b&&i!==void 0?f(i,e):void 0,delta:b&&i!==void 0?ne(n.value,i):void 0}})},[y,v,o,b]);return(0,A.jsxs)(A.Fragment,{children:[v?(0,A.jsx)(pe,{label:t(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:t(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:s,className:D.backLink}):null,(0,A.jsx)(`div`,{className:D.content,children:(0,A.jsx)(me,{isLoading:d,isFetching:p,isError:m,isEmpty:l.length===0,error:c(h,{retryDescription:t(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:g}),empty:{icon:ae,description:t(`No UTM data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,A.jsx)(se,{rows:10}),children:(0,A.jsx)(oe,{data:he,withComparison:b,withOverlayLabel:!0,showLegend:!1,dataFormat:j})})}),n&&(0,A.jsx)(ue,{children:(0,A.jsx)(de,{report:`utm`,section:Ae(e)})})]})}function k({attributes:e={}}){let t=e.utmDimension??M,n=e.showReportLink??!0;return(0,A.jsx)(u,{attributes:e,children:(0,A.jsx)(`div`,{className:D.root,children:(0,A.jsx)(je,{utmDimension:t,showReportLink:n})})})}var A,j,M,Me=e((()=>{o(),n(),be(),p(),Te(),ke(),A=r(),j={type:`number`,options:{useMultipliers:!0,decimals:0}},M=`utm_source,utm_medium`})),N,Ne=e((()=>{n(),s(),d(),N={icon:i,attributes:[{id:`utmDimension`,label:t(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:l,elements:[{label:t(`Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_source,utm_medium`},{label:t(`Campaign / Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_campaign,utm_source,utm_medium`},{label:t(`Source`,`jetpack-premium-analytics-pkg`),value:`utm_source`},{label:t(`Medium`,`jetpack-premium-analytics-pkg`),value:`utm_medium`},{label:t(`Campaign`,`jetpack-premium-analytics-pkg`),value:`utm_campaign`}],relevance:`high`}],example:{attributes:{utmDimension:`utm_source,utm_medium`}}}})),P,F,I,L,R,z,B,Pe=e((()=>{P=`jpa/utm-insights`,F=`Top UTM`,I=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,L={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`traffic`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V(e){return(0,H.jsx)(k,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:h(!1,e)}})}function Fe({withComparison:e,...t}){return(0,H.jsx)(ve,{...t,widgetType:W,renderModule:U,renderComponent:k,attributes:{utmDimension:`utm_source,utm_medium`,reportParams:h(e)}})}var H,U,W,Ie,G,K,q,J,Y,X,Z,Q,$;e((()=>{g(),he(),ge(),y(),ye(),_(),Ce(),we(),Me(),Ne(),Pe(),H=r(),v(),Se(),U=`storybook/utm-insights`,W=_e(B,N),Ie={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},G={render:({withComparison:e})=>(0,H.jsx)(k,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:h(e)}}),args:{withComparison:!1},decorators:[S,x]},K={render:({withComparison:e})=>(0,H.jsx)(k,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:h(e)}}),args:{withComparison:!0},decorators:[S,x]},q={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/utm`,`loading`),()=>C(`stats/utm`,null))},J={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/utm`,`error`),()=>C(`stats/utm`,null))},Y={render:()=>V(`last-12-months`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/utm`,`error-retryable`),()=>C(`stats/utm`,null))},X={render:()=>V(`last-year`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/utm`,`empty`),()=>C(`stats/utm`,null))},Z={render:({withComparison:e})=>(0,H.jsx)(k,{attributes:{utmDimension:`utm_campaign`,reportParams:h(e)}}),args:{withComparison:!1},decorators:[S,x]},Q={render:e=>(0,H.jsx)(Fe,{...e}),args:{...xe,withComparison:!1},argTypes:{...b,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`ByCampaign`,`WidgetDashboardWithWidget`]}))();export{Z as ByCampaign,G as Default,X as Empty,J as Error,Y as ErrorRetryable,q as Loading,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,Ie as default};