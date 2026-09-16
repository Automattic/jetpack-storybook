import{i as e}from"./preload-helper-usAeo7Bx.js";import{f as t,n,t as r}from"./build-module-yGZutq_9.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Gi as a,Gu as o,Nu as s,t as c}from"./build-module-zwSmKorH.js";import{J as l,Qt as u,Y as d,Zt as ee,b as te,en as ne,g as f,mt as re,r as ie}from"./hooks-D9-5bKhf.js";import{b as ae,t as p}from"./src-DFNM1k7F.js";import{A as m,en as h,i as g}from"./date-filters-panel-DXxSsBcd.js";import"./constants-B1kGztHF.js";import{r as oe,t as se}from"./leaderboard-skeleton-BS2d84lc.js";import{i as _,r as v}from"./register-report-mocks-Bek115LU.js";import{N as ce,S as le,b as ue,j as de,v as fe,w as pe}from"./report-metric-Cwl9tNr_.js";import{t as me}from"./widget-state-DoDeK2hZ.js";import{t as y}from"./src-DmKbijpS.js";import{a as b,c as he,d as x,i as ge,l as _e,n as ve,o as ye,r as S,s as be,u as xe}from"./with-widget-canvas-BjVB14N8.js";import{n as Se,t as Ce}from"./register-stats-mocks-BEWpdkXB.js";import{n as we,t as C}from"./force-stats-mock-state-CDB682wm.js";var w,T,E,D,Te=e((()=>{w=`_root_xmjm2_1`,T=`_content_xmjm2_9`,E=`_backLink_xmjm2_16`,D={root:w,content:T,backLink:E}}));function O(e){return typeof e.label==`string`?e.label:String(e.label)}function Ee(e){return{postId:e.id,label:O(e),value:e.value,previousValue:e.previousValue,href:e.href}}function De(e){return{label:O(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(Ee),childrenHaveComparison:e.childrenHaveComparison}}function Oe({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=m({...e,utmParam:t,max:n},{maxRows:n}),u=(r?.rows??[]).map(De),d=u.length===0&&s;return{data:u,hasComparison:i,isLoading:a,isFetching:o,isError:d,error:d?c:null,refetch:l}}var ke=e((()=>{g()}));function Ae(e){switch(e){case`utm_source,utm_medium`:return`source-medium`;case`utm_campaign,utm_source,utm_medium`:return`campaign-source-medium`;case`utm_source`:return`source`;case`utm_medium`:return`medium`;case`utm_campaign`:return`campaign`}}function je({utmDimension:e,showReportLink:r}){let{reportParams:i}=te(),{drillDownItem:a,drillDown:s,resetDrillDown:c}=ie();(0,o.useEffect)(()=>{c()},[c,e]);let{data:l,hasComparison:d,isLoading:f,isFetching:p,isError:m,error:h,refetch:g}=Oe({reportParams:i,utmParam:e,max:10}),_=(0,o.useMemo)(()=>l.find(e=>e.label===a)??null,[l,a]),v=!!_?.children?.length,y=(0,o.useMemo)(()=>v?_?.children??[]:l,[l,v,_]),b=v?!!_?.childrenHaveComparison:d;(0,o.useEffect)(()=>{a&&!v&&!f&&!p&&!m&&c()},[a,v,f,p,m,c]);let he=(0,o.useMemo)(()=>{let e=u(y.map(e=>e.value),b?y.map(e=>e.previousValue):[]);return y.map((r,i)=>{let a=r.previousValue,o=`postId`in r?r:null,c=!v&&`children`in r&&!!r.children?.length;return{id:`${i}-${r.label}`,...o?{label:(0,A.jsx)(fe,{id:o.postId,label:o.label,link:o.href})}:de({label:r.label,media:{kind:`none`},action:ce({hasChildren:c,drillDown:{onClick:()=>s(r.label),ariaLabel:t(n(`View posts for %s`,`jetpack-premium-analytics-pkg`),r.label)}})}),currentValue:r.value,currentShare:ee(r.value,e),previousValue:a,previousShare:b&&a!==void 0?ee(a,e):void 0,delta:b&&a!==void 0?ne(r.value,a):void 0}})},[y,v,s,b]);return(0,A.jsxs)(A.Fragment,{children:[v?(0,A.jsx)(pe,{label:n(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:c,className:D.backLink}):null,(0,A.jsx)(`div`,{className:D.content,children:(0,A.jsx)(me,{isLoading:f,isFetching:p,isError:m,isEmpty:l.length===0,error:re(h,{retryDescription:n(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:g}),empty:{icon:ae,description:n(`No UTM data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,A.jsx)(se,{rows:10}),children:(0,A.jsx)(oe,{data:he,withComparison:b,withOverlayLabel:!0,showLegend:!1,dataFormat:j})})}),r&&(0,A.jsx)(le,{children:(0,A.jsx)(ue,{report:`utm`,section:Ae(e)})})]})}function k({attributes:e={}}){let t=e.utmDimension??M,n=e.showReportLink??!0;return(0,A.jsx)(f,{attributes:e,children:(0,A.jsx)(`div`,{className:D.root,children:(0,A.jsx)(je,{utmDimension:t,showReportLink:n})})})}var A,j,M,Me=e((()=>{s(),r(),y(),p(),Te(),ke(),A=i(),j={type:`number`,options:{useMultipliers:!0,decimals:0}},M=`utm_source,utm_medium`})),N,Ne=e((()=>{r(),c(),l(),N={icon:a,attributes:[{id:`utmDimension`,label:n(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:d,elements:[{label:n(`Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_source,utm_medium`},{label:n(`Campaign / Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_campaign,utm_source,utm_medium`},{label:n(`Source`,`jetpack-premium-analytics-pkg`),value:`utm_source`},{label:n(`Medium`,`jetpack-premium-analytics-pkg`),value:`utm_medium`},{label:n(`Campaign`,`jetpack-premium-analytics-pkg`),value:`utm_campaign`}],relevance:`high`}],example:{attributes:{utmDimension:`utm_source,utm_medium`}}}})),P,F,I,L,R,z,B,Pe=e((()=>{P=`jpa/utm-insights`,F=`Top UTM`,I=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,L={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`traffic`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V(e){return(0,H.jsx)(k,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:h(!1,e)}})}function Fe({withComparison:e,...t}){return(0,H.jsx)(be,{...t,widgetType:Ie,renderModule:U,renderComponent:k,attributes:{utmDimension:`utm_source,utm_medium`,reportParams:h(e)}})}var H,U,Ie,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{g(),he(),xe(),b(),ve(),v(),Ce(),we(),Me(),Ne(),Pe(),H=i(),_(),Se(),U=`storybook/utm-insights`,Ie=ge(B,N),W={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},G={render:({withComparison:e})=>(0,H.jsx)(k,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:h(e)}}),args:{withComparison:!1},decorators:[S,x]},K={render:({withComparison:e})=>(0,H.jsx)(k,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:h(e)}}),args:{withComparison:!0},decorators:[S,x]},q={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/utm`,`loading`),()=>C(`stats/utm`,null))},J={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/utm`,`error`),()=>C(`stats/utm`,null))},Y={render:()=>V(`last-12-months`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/utm`,`error-retryable`),()=>C(`stats/utm`,null))},X={render:()=>V(`last-year`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/utm`,`empty`),()=>C(`stats/utm`,null))},Z={render:({withComparison:e})=>(0,H.jsx)(k,{attributes:{utmDimension:`utm_campaign`,reportParams:h(e)}}),args:{withComparison:!1},decorators:[S,x]},Q={render:e=>(0,H.jsx)(Fe,{...e}),args:{...ye,withComparison:!1},argTypes:{..._e,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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