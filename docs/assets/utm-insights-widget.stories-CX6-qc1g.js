import{i as e}from"./preload-helper-usAeo7Bx.js";import{d as t,n,t as r}from"./build-module-BXPCp--5.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Gu as a,Nu as o}from"./build-module-Cm3Kd3py.js";import{G as s,t as c,vn as l}from"./src-3DZEpJ2n.js";import{Jt as u,Yt as d,Zt as f,m as p,o as ee,ut as te,v as ne}from"./charts-provider-Cl1ErAw6.js";import"./rows-DAmD2BmE.js";import{r as re,t as ie}from"./leaderboard-skeleton-BSReSdER.js";import{n as ae,r as m}from"./register-report-mocks-B_d6egm6.js";import{t as oe}from"./widget-state-Bj2o_egX.js";import{n as h,r as g}from"./with-story-router-TjVyBU09.js";import{g as se,i as ce,o as le,p as ue,y as de}from"./leaderboard-zbItmulM.js";import{i as fe,w as pe}from"./visitors-by-location-widget-Dsq4z8V4.js";import{a as me,n as _,r as he,t as v}from"./src-zZ2SAwlZ.js";import{a as y,g as b,h as x,i as S,m as C,n as ge,p as _e,r as w}from"./with-widget-canvas-BDBoXtgp.js";import{n as ve,t as ye}from"./register-stats-mocks-DBRh8QeV.js";import{n as be,t as T}from"./force-stats-mock-state-Cjng5CLj.js";var E,D,O,k,xe=e((()=>{E=`_root_xmjm2_1`,D=`_content_xmjm2_9`,O=`_backLink_xmjm2_16`,k={root:E,content:D,backLink:O}}));function A(e){return typeof e.label==`string`?e.label:String(e.label)}function Se(e){return{postId:e.id,label:A(e),value:e.value,previousValue:e.previousValue,href:e.href}}function Ce(e){return{label:A(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(Se),childrenHaveComparison:e.childrenHaveComparison}}function we({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:c,error:l,refetch:u}=s({...e,utmParam:t,max:n},{maxRows:n}),d=(r?.rows??[]).map(Ce),f=d.length===0&&c;return{data:d,hasComparison:i,isLoading:a,isFetching:o,isError:f,error:f?l:null,refetch:u}}var Te=e((()=>{c()}));function Ee({utmDimension:e,showReportLink:r}){let{reportParams:i}=ne(),o=he(e),{drillDownItem:s,drillDown:c,resetDrillDown:l}=ee();(0,a.useEffect)(()=>{l()},[l,e]);let{data:p,hasComparison:ae,isLoading:m,isFetching:h,isError:g,error:_,refetch:v}=we({reportParams:i,utmParam:e,max:10}),y=(0,a.useMemo)(()=>p.find(e=>e.label===s)??null,[p,s]),b=!!y?.children?.length,x=(0,a.useMemo)(()=>b?y?.children??[]:p,[p,b,y]),S=b?!!y?.childrenHaveComparison:ae;(0,a.useEffect)(()=>{s&&!b&&!m&&!h&&!g&&l()},[s,b,m,h,g,l]);let C=(0,a.useMemo)(()=>{let e=d(x.map(e=>e.value),S?x.map(e=>e.previousValue):[]);return x.map((r,i)=>{let a=r.previousValue,s=`postId`in r?r:null,l=!b&&`children`in r&&!!r.children?.length;return{id:`${i}-${r.label}`,...s?{label:(0,M.jsx)(pe,{id:s.postId,label:s.label,link:s.href,origin:{report:`utm`,section:o}})}:ce({label:r.label,media:{kind:`none`},action:le({hasChildren:l,drillDown:{onClick:()=>c(r.label),ariaLabel:t(n(`View posts for %s`,`jetpack-premium-analytics-pkg`),r.label)}})}),currentValue:r.value,currentShare:u(r.value,e),previousValue:a,previousShare:S&&a!==void 0?u(a,e):void 0,delta:S&&a!==void 0?f(r.value,a):void 0}})},[x,b,o,c,S]);return(0,M.jsxs)(M.Fragment,{children:[b?(0,M.jsx)(se,{label:n(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:l,className:k.backLink}):null,(0,M.jsx)(`div`,{className:k.content,children:(0,M.jsx)(oe,{isLoading:m,isFetching:h,isError:g,isEmpty:p.length===0,error:te(_,{retryDescription:n(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:v}),renderLoading:(0,M.jsx)(ie,{rows:10}),children:(0,M.jsx)(re,{data:C,withComparison:S,withOverlayLabel:!0,showLegend:!1,dataFormat:N})})}),r&&(0,M.jsxs)(ue,{children:[(0,M.jsx)(de,{report:`utm`,section:o}),(0,M.jsx)(fe,{exporter:me[o],status:{isLoading:m,isFetching:h,isError:g},rowCount:p.length})]})]})}function j({attributes:e={}}){let t=e.utmDimension??P,n=e.showReportLink??!0;return(0,M.jsx)(p,{attributes:e,children:(0,M.jsx)(`div`,{className:k.root,children:(0,M.jsx)(Ee,{utmDimension:t,showReportLink:n})})})}var M,N,P,De=e((()=>{o(),r(),v(),xe(),Te(),M=i(),N={type:`number`,options:{useMultipliers:!0,decimals:0}},P=`utm_source,utm_medium`})),F,Oe=e((()=>{r(),v(),F={attributes:[{id:`utmDimension`,label:n(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:_(),relevance:`high`}],example:{attributes:{utmDimension:`utm_source,utm_medium`}}}})),I,L,R,z,B,V,H,ke,Ae=e((()=>{I=`jpa/utm-insights`,L=`jpa/megaphone`,R=`Top UTM`,z=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,B={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},V=`traffic`,H=`framed`,ke={name:I,icon:L,title:R,description:z,help:B,category:V,presentation:H}}));function U(e){return(0,W.jsx)(j,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:l(!1,e)}})}function je({withComparison:e,...t}){return(0,W.jsx)(C,{...t,widgetType:G,renderModule:Me,renderComponent:j,attributes:{utmDimension:`utm_source,utm_medium`,reportParams:l(e)}})}var W,Me,G,Ne,K,q,J,Y,X,Z,Q,$,Pe;e((()=>{c(),x(),h(),y(),ge(),ae(),ye(),be(),De(),Oe(),Ae(),W=i(),m(),ve(),Me=`storybook/utm-insights`,G=S(ke,F),Ne={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:j,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},K={render:({withComparison:e})=>(0,W.jsx)(j,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:l(e)}}),args:{withComparison:!1},decorators:[w,g]},q={render:({withComparison:e})=>(0,W.jsx)(j,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:l(e)}}),args:{withComparison:!0},decorators:[w,g]},J={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[w,g],beforeEach:()=>(T(`stats/utm`,`loading`),()=>T(`stats/utm`,null))},Y={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[w,g],beforeEach:()=>(T(`stats/utm`,`error`),()=>T(`stats/utm`,null))},X={render:()=>U(`last-12-months`),tags:[`!autodocs`],decorators:[w,g],beforeEach:()=>(T(`stats/utm`,`error-retryable`),()=>T(`stats/utm`,null))},Z={render:()=>U(`last-year`),tags:[`!autodocs`],decorators:[w,g],beforeEach:()=>(T(`stats/utm`,`empty`),()=>T(`stats/utm`,null))},Q={render:({withComparison:e})=>(0,W.jsx)(j,{attributes:{utmDimension:`utm_campaign`,reportParams:l(e)}}),args:{withComparison:!1},decorators:[w,g]},$={render:e=>(0,W.jsx)(je,{...e}),args:{..._e,withComparison:!1},argTypes:{...b,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows the generic empty state (the magnifier
glyph and "We couldn’t find results for this time period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},Pe=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`ByCampaign`,`WidgetDashboardWithWidget`]}))();export{Q as ByCampaign,K as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,$ as WidgetDashboardWithWidget,q as WithComparison,Pe as __namedExportsOrder,Ne as default};