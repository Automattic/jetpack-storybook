import{i as e}from"./preload-helper-usAeo7Bx.js";import{f as t,n,t as r}from"./build-module-yGZutq_9.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Gi as a,Gu as o,Nu as s,t as c}from"./build-module-zwSmKorH.js";import{C as ee,Gt as l,H as u,V as d,Wt as f,o as te,qt as ne,st as re,y as p}from"./wp-date-settings-CDzhsiCV.js";import{b as ie,t as m}from"./src-DFNM1k7F.js";import{A as h,en as g,i as _}from"./date-filters-panel-CUUYRE5w.js";import"./constants-B1kGztHF.js";import{r as ae,t as oe}from"./leaderboard-skeleton-DzWmm9W8.js";import{F as se,J as v,L as ce,S as le,b as ue,q as y,v as de,w as fe}from"./report-metric-BOLrE4zz.js";import{t as pe}from"./widget-state-DYQt-Mjy.js";import{C as b,D as x,E as S,O as me,S as he,T as ge,b as _e,k as C,t as ve,w as ye,x as w}from"./src-CtSkOtkK.js";import{n as be,t as xe}from"./register-stats-mocks-0ZjXjY0i.js";import{n as Se,t as T}from"./force-stats-mock-state-c2RNqhNG.js";var E,D,O,k,Ce=e((()=>{E=`_root_xmjm2_1`,D=`_content_xmjm2_9`,O=`_backLink_xmjm2_16`,k={root:E,content:D,backLink:O}}));function A(e){return typeof e.label==`string`?e.label:String(e.label)}function we(e){return{postId:e.id,label:A(e),value:e.value,previousValue:e.previousValue,href:e.href}}function Te(e){return{label:A(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(we),childrenHaveComparison:e.childrenHaveComparison}}function Ee({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:ee}=h({...e,utmParam:t,max:n},{maxRows:n}),l=(r?.rows??[]).map(Te),u=l.length===0&&s;return{data:l,hasComparison:i,isLoading:a,isFetching:o,isError:u,error:u?c:null,refetch:ee}}var De=e((()=>{_()}));function Oe(e){switch(e){case`utm_source,utm_medium`:return`source-medium`;case`utm_campaign,utm_source,utm_medium`:return`campaign-source-medium`;case`utm_source`:return`source`;case`utm_medium`:return`medium`;case`utm_campaign`:return`campaign`}}function ke({utmDimension:e,showReportLink:r}){let{reportParams:i}=ee(),{drillDownItem:a,drillDown:s,resetDrillDown:c}=te();(0,o.useEffect)(()=>{c()},[c,e]);let{data:u,hasComparison:d,isLoading:p,isFetching:m,isError:h,error:g,refetch:_}=Ee({reportParams:i,utmParam:e,max:10}),v=(0,o.useMemo)(()=>u.find(e=>e.label===a)??null,[u,a]),y=!!v?.children?.length,b=(0,o.useMemo)(()=>y?v?.children??[]:u,[u,y,v]),x=y?!!v?.childrenHaveComparison:d;(0,o.useEffect)(()=>{a&&!y&&!p&&!m&&!h&&c()},[a,y,p,m,h,c]);let S=(0,o.useMemo)(()=>{let e=l(b.map(e=>e.value),x?b.map(e=>e.previousValue):[]);return b.map((r,i)=>{let a=r.previousValue,o=`postId`in r?r:null,c=!y&&`children`in r&&!!r.children?.length;return{id:`${i}-${r.label}`,...o?{label:(0,M.jsx)(de,{id:o.postId,label:o.label,link:o.href})}:se({label:r.label,media:{kind:`none`},action:ce({hasChildren:c,drillDown:{onClick:()=>s(r.label),ariaLabel:t(n(`View posts for %s`,`jetpack-premium-analytics-pkg`),r.label)}})}),currentValue:r.value,currentShare:f(r.value,e),previousValue:a,previousShare:x&&a!==void 0?f(a,e):void 0,delta:x&&a!==void 0?ne(r.value,a):void 0}})},[b,y,s,x]);return(0,M.jsxs)(M.Fragment,{children:[y?(0,M.jsx)(fe,{label:n(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:c,className:k.backLink}):null,(0,M.jsx)(`div`,{className:k.content,children:(0,M.jsx)(pe,{isLoading:p,isFetching:m,isError:h,isEmpty:u.length===0,error:re(g,{retryDescription:n(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:_}),empty:{icon:ie,description:n(`No UTM data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,M.jsx)(oe,{rows:10}),children:(0,M.jsx)(ae,{data:S,withComparison:x,withOverlayLabel:!0,showLegend:!1,dataFormat:N})})}),r&&(0,M.jsx)(le,{children:(0,M.jsx)(ue,{report:`utm`,section:Oe(e)})})]})}function j({attributes:e={}}){let t=e.utmDimension??P,n=e.showReportLink??!0;return(0,M.jsx)(p,{attributes:e,children:(0,M.jsx)(`div`,{className:k.root,children:(0,M.jsx)(ke,{utmDimension:t,showReportLink:n})})})}var M,N,P,Ae=e((()=>{s(),r(),ve(),m(),Ce(),De(),M=i(),N={type:`number`,options:{useMultipliers:!0,decimals:0}},P=`utm_source,utm_medium`})),F,je=e((()=>{r(),c(),d(),F={icon:a,attributes:[{id:`utmDimension`,label:n(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:u,elements:[{label:n(`Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_source,utm_medium`},{label:n(`Campaign / Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_campaign,utm_source,utm_medium`},{label:n(`Source`,`jetpack-premium-analytics-pkg`),value:`utm_source`},{label:n(`Medium`,`jetpack-premium-analytics-pkg`),value:`utm_medium`},{label:n(`Campaign`,`jetpack-premium-analytics-pkg`),value:`utm_campaign`}],relevance:`high`}],example:{attributes:{utmDimension:`utm_source,utm_medium`}}}})),I,L,R,z,B,V,H,Me=e((()=>{I=`jpa/utm-insights`,L=`Top UTM`,R=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,z={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`traffic`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U(e){return(0,W.jsx)(j,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:g(!1,e)}})}function Ne({withComparison:e,...t}){return(0,W.jsx)(ge,{...t,widgetType:Pe,renderModule:G,renderComponent:j,attributes:{utmDimension:`utm_source,utm_medium`,reportParams:g(e)}})}var W,G,Pe,Fe,K,q,J,Y,X,Z,Q,$,Ie;e((()=>{_(),S(),me(),b(),_e(),y(),xe(),Se(),Ae(),je(),Me(),W=i(),v(),be(),G=`storybook/utm-insights`,Pe=he(H,F),Fe={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:j,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},K={render:({withComparison:e})=>(0,W.jsx)(j,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:g(e)}}),args:{withComparison:!1},decorators:[w,C]},q={render:({withComparison:e})=>(0,W.jsx)(j,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:g(e)}}),args:{withComparison:!0},decorators:[w,C]},J={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(T(`stats/utm`,`loading`),()=>T(`stats/utm`,null))},Y={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(T(`stats/utm`,`error`),()=>T(`stats/utm`,null))},X={render:()=>U(`last-12-months`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(T(`stats/utm`,`error-retryable`),()=>T(`stats/utm`,null))},Z={render:()=>U(`last-year`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(T(`stats/utm`,`empty`),()=>T(`stats/utm`,null))},Q={render:({withComparison:e})=>(0,W.jsx)(j,{attributes:{utmDimension:`utm_campaign`,reportParams:g(e)}}),args:{withComparison:!1},decorators:[w,C]},$={render:e=>(0,W.jsx)(Ne,{...e}),args:{...ye,withComparison:!1},argTypes:{...x,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderUtmInsightsOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/utm', 'loading');
    return () => forceStatsMockState('stats/utm', null);
  }
}`,...J.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderUtmInsightsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/utm', 'error');
    return () => forceStatsMockState('stats/utm', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`The fetch failed with a permission-gated 403: the widget shows the neutral
"You don't have access to this data." copy and no Retry action, since a
permission gate is deterministic and retrying cannot clear it.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderUtmInsightsOnPreset('last-12-months'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/utm', 'error-retryable');
    return () => forceStatsMockState('stats/utm', null);
  }
}`,...X.parameters?.docs?.source},description:{story:`The fetch failed in a way that can heal — the proxy's \`no_connection\` 403: the
widget shows its retryable copy with a Retry action, which re-runs the query
(still mocked as failing while this story is active).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => renderUtmInsightsOnPreset('last-year'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas, withStoryRouter],
  beforeEach: () => {
    forceStatsMockState('stats/utm', 'empty');
    return () => forceStatsMockState('stats/utm', null);
  }
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the neutral megaphone
glyph and "No UTM data in this period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},Ie=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`ByCampaign`,`WidgetDashboardWithWidget`]}))();export{Q as ByCampaign,K as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,$ as WidgetDashboardWithWidget,q as WithComparison,Ie as __namedExportsOrder,Fe as default};