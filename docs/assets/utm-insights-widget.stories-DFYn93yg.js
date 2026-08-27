import{i as e}from"./preload-helper-usAeo7Bx.js";import{S as t,n,t as r}from"./build-module-DyKOxfM8.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{_ as a,t as o}from"./build-module-CbwHEf9N.js";import{Wi as s,n as c}from"./build-module-CDRs4YxF.js";import{kn as l,t as u}from"./src-DXpF_THv.js";import{b as d,g as f,r as ee}from"./hooks-DLRnGdxm.js";import{b as te,t as p}from"./src-B64ifip5.js";import{C as m,qt as h,t as g}from"./src-mgRI7HQW.js";import"./constants-B1kGztHF.js";import{A as ne,f as re,ft as ie,ht as ae,p as _,pt as oe}from"./chart-tooltip-C2xsGLGS.js";import{r as se,t as ce}from"./leaderboard-skeleton-C5Bg0TpU.js";import{E as le,K as v,S as ue,b as de,q as y,w as fe}from"./report-metric-C6krLLgS.js";import{t as pe}from"./widget-state-vh7fsUwi.js";import{C as b,D as x,E as me,O as he,S as ge,T as _e,b as ve,k as S,t as ye,w as be,x as C}from"./src-CeTeJJrY.js";import{n as xe,t as Se}from"./register-stats-mocks-DxNNRc3W.js";import{n as Ce,t as w}from"./force-stats-mock-state-BG9x0znw.js";var T,E,D,we,O,k,Te=e((()=>{T=`_root_j3swf_1`,E=`_content_j3swf_9`,D=`_backLink_j3swf_17`,we=`_itemLabel_j3swf_25`,O=`_itemLabelText_j3swf_33`,k={root:T,content:E,backLink:D,itemLabel:we,itemLabelText:O}}));function A(e){return typeof e.label==`string`?e.label:String(e.label)}function Ee(e){return{postId:e.id,label:A(e),value:e.value,previousValue:e.previousValue,href:e.href}}function De(e){return{label:A(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(Ee),childrenHaveComparison:e.childrenHaveComparison}}function Oe({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=m({...e,utmParam:t,max:n},{maxRows:n}),u=(r?.rows??[]).map(De),d=u.length===0&&s;return{data:u,hasComparison:i,isLoading:a,isFetching:o,isError:d,error:d?c:null,refetch:l}}var ke=e((()=>{g()}));function Ae(e){switch(e){case`utm_source,utm_medium`:return`source-medium`;case`utm_campaign,utm_source,utm_medium`:return`campaign-source-medium`;case`utm_source`:return`source`;case`utm_medium`:return`medium`;case`utm_campaign`:return`campaign`}}function je({utmDimension:e,showReportLink:r}){let{reportParams:i}=d(),{drillDownItem:o,drillDown:s,resetDrillDown:c}=ee();(0,a.useEffect)(()=>{c()},[c,e]);let{data:u,hasComparison:f,isLoading:p,isFetching:m,isError:h,error:g,refetch:re}=Oe({reportParams:i,utmParam:e,max:10}),_=(0,a.useMemo)(()=>u.find(e=>e.label===o)??null,[u,o]),v=!!_?.children?.length,y=(0,a.useMemo)(()=>v?_?.children??[]:u,[u,v,_]),b=v?!!_?.childrenHaveComparison:f;(0,a.useEffect)(()=>{o&&!v&&!p&&!m&&!h&&c()},[o,v,p,m,h,c]);let x=(0,a.useMemo)(()=>{let e=oe(y.map(e=>e.value),b?y.map(e=>e.previousValue):[]);return y.map((r,i)=>{let a=r.previousValue,o=`postId`in r?r:null;return{id:`${i}-${r.label}`,label:o?(0,M.jsx)(de,{id:o.postId,label:o.label,link:o.href}):(0,M.jsx)(`span`,{className:k.itemLabel,children:(0,M.jsx)(l,{className:k.itemLabelText,variant:`body-sm`,children:r.label})}),currentValue:r.value,currentShare:ie(r.value,e),previousValue:a,previousShare:b&&a!==void 0?ie(a,e):void 0,delta:b&&a!==void 0?ae(r.value,a):void 0,...!v&&`children`in r&&r.children?.length&&{onClick:()=>s(r.label),ariaLabel:t(n(`View posts for %s`,`jetpack-premium-analytics-pkg`),r.label)}}})},[y,v,s,b]);return(0,M.jsxs)(M.Fragment,{children:[v?(0,M.jsx)(le,{label:n(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:c,className:k.backLink}):null,(0,M.jsx)(`div`,{className:k.content,children:(0,M.jsx)(pe,{isLoading:p,isFetching:m,isError:h,isEmpty:u.length===0,error:ne(g,{retryDescription:n(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:re}),empty:{icon:te,description:n(`No UTM data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,M.jsx)(ce,{rows:10}),children:(0,M.jsx)(se,{data:x,withComparison:b,withOverlayLabel:!0,showLegend:!1,dataFormat:N})})}),r&&(0,M.jsx)(fe,{children:(0,M.jsx)(ue,{report:`utm`,section:Ae(e)})})]})}function j({attributes:e={}}){let t=e.utmDimension??P,n=e.showReportLink??!0;return(0,M.jsx)(f,{attributes:e,children:(0,M.jsx)(`div`,{className:k.root,children:(0,M.jsx)(je,{utmDimension:t,showReportLink:n})})})}var M,N,P,Me=e((()=>{o(),r(),u(),ye(),p(),Te(),ke(),M=i(),N={type:`number`,options:{useMultipliers:!0,decimals:0}},P=`utm_source,utm_medium`})),F,Ne=e((()=>{r(),c(),re(),F={icon:s,attributes:[{id:`utmDimension`,label:n(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:_,elements:[{label:n(`Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_source,utm_medium`},{label:n(`Campaign / Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_campaign,utm_source,utm_medium`},{label:n(`Source`,`jetpack-premium-analytics-pkg`),value:`utm_source`},{label:n(`Medium`,`jetpack-premium-analytics-pkg`),value:`utm_medium`},{label:n(`Campaign`,`jetpack-premium-analytics-pkg`),value:`utm_campaign`}],relevance:`high`}],example:{attributes:{utmDimension:`utm_source,utm_medium`}}}})),I,L,R,z,B,V,H,Pe=e((()=>{I=`jpa/utm-insights`,L=`Top UTM`,R=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,z={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`traffic`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U(e){return(0,W.jsx)(j,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:h(!1,e)}})}function Fe({withComparison:e,...t}){return(0,W.jsx)(_e,{...t,widgetType:Le,renderModule:Ie,renderComponent:j,attributes:{utmDimension:`utm_source,utm_medium`,reportParams:h(e)}})}var W,Ie,Le,Re,G,K,q,J,Y,X,Z,Q,$;e((()=>{g(),me(),he(),b(),ve(),v(),Se(),Ce(),Me(),Ne(),Pe(),W=i(),y(),xe(),Ie=`storybook/utm-insights`,Le=ge(H,F),Re={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:j,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},G={render:({withComparison:e})=>(0,W.jsx)(j,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:h(e)}}),args:{withComparison:!1},decorators:[C,S]},K={render:({withComparison:e})=>(0,W.jsx)(j,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:h(e)}}),args:{withComparison:!0},decorators:[C,S]},q={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`loading`),()=>w(`stats/utm`,null))},J={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`error`),()=>w(`stats/utm`,null))},Y={render:()=>U(`last-12-months`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`error-retryable`),()=>w(`stats/utm`,null))},X={render:()=>U(`last-year`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`empty`),()=>w(`stats/utm`,null))},Z={render:({withComparison:e})=>(0,W.jsx)(j,{attributes:{utmDimension:`utm_campaign`,reportParams:h(e)}}),args:{withComparison:!1},decorators:[C,S]},Q={render:e=>(0,W.jsx)(Fe,{...e}),args:{...be,withComparison:!1},argTypes:{...x,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`ByCampaign`,`WidgetDashboardWithWidget`]}))();export{Z as ByCampaign,G as Default,X as Empty,J as Error,Y as ErrorRetryable,q as Loading,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,Re as default};