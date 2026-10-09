import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Gu as a,Nu as o}from"./build-module-Cm3Kd3py.js";import{G as s,Mn as c,t as l}from"./src-DQYt8jCH.js";import{_ as u,dt as d,en as f,o as ee,rn as te,tn as ne,x as re}from"./charts-provider-THvfZibh.js";import"./rows-DAmD2BmE.js";import{r as ie,t as ae}from"./leaderboard-skeleton-DNkGgqAs.js";import{n as oe,r as p}from"./register-report-mocks-CKRy3LZg.js";import{t as se}from"./widget-state-CADyyZl5.js";import{n as m,r as h}from"./with-story-router-Beljd9ki.js";import{g as ce,i as le,o as ue,p as de,y as fe}from"./leaderboard-B3gqTzsi.js";import{S as pe,n as me}from"./components-Bh7_pEK4.js";import{d as g,f as he,m as ge,t as _}from"./src-C7ZjB0TJ.js";import{a as v,g as y,h as b,i as x,m as _e,n as ve,p as ye,r as S}from"./with-widget-canvas-Cr9xwJOJ.js";import{n as be,t as xe}from"./register-stats-mocks-CyRwsXeR.js";import{n as Se,t as C}from"./force-stats-mock-state-BOnks7ZY.js";var w,T,E,D,Ce=e((()=>{w=`_root_xmjm2_1`,T=`_content_xmjm2_9`,E=`_backLink_xmjm2_16`,D={root:w,content:T,backLink:E}}));function we(e){return typeof e.label==`string`?e.label:String(e.label)}function Te(e){return{postId:e.id,label:we(e),value:e.value,previousValue:e.previousValue,href:e.href}}function Ee(e){return{label:we(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(Te),childrenHaveComparison:e.childrenHaveComparison}}function De({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:c,error:l,refetch:u}=s({...e,utmParam:t,max:n},{maxRows:n}),d=(r?.rows??[]).map(Ee),f=d.length===0&&c;return{data:d,hasComparison:i,isLoading:a,isFetching:o,isError:f,error:f?l:null,refetch:u}}var Oe=e((()=>{l()}));function ke({utmDimension:e,showReportLink:n}){let{reportParams:i}=re(),o=he(e),{drillDownItem:s,drillDown:c,resetDrillDown:l}=ee();(0,a.useEffect)(()=>{l()},[l,e]);let{data:u,hasComparison:oe,isLoading:p,isFetching:m,isError:h,error:g,refetch:_}=De({reportParams:i,utmParam:e,max:10}),v=(0,a.useMemo)(()=>u.find(e=>e.label===s)??null,[u,s]),y=!!v?.children?.length,b=(0,a.useMemo)(()=>y?v?.children??[]:u,[u,y,v]),x=y?!!v?.childrenHaveComparison:oe;(0,a.useEffect)(()=>{s&&!y&&!p&&!m&&!h&&l()},[s,y,p,m,h,l]);let _e=(0,a.useMemo)(()=>{let e=ne(b.map(e=>e.value),x?b.map(e=>e.previousValue):[]);return b.map((n,i)=>{let a=n.previousValue,s=`postId`in n?n:null,l=!y&&`children`in n&&!!n.children?.length;return{id:`${i}-${n.label}`,...s?{label:(0,k.jsx)(pe,{id:s.postId,label:s.label,link:s.href,origin:{report:`utm`,section:o}})}:le({label:n.label,media:{kind:`none`},action:ue({hasChildren:l,drillDown:{onClick:()=>c(n.label),ariaLabel:r(t(`View posts for %s`,`jetpack-premium-analytics-pkg`),n.label)}})}),currentValue:n.value,currentShare:f(n.value,e),previousValue:a,previousShare:x&&a!==void 0?f(a,e):void 0,delta:x&&a!==void 0?te(n.value,a):void 0}})},[b,y,o,c,x]);return(0,k.jsxs)(k.Fragment,{children:[y?(0,k.jsx)(ce,{label:t(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:t(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:l,className:D.backLink}):null,(0,k.jsx)(`div`,{className:D.content,children:(0,k.jsx)(se,{isLoading:p,isFetching:m,isError:h,isEmpty:u.length===0,error:d(g,{retryDescription:t(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:_}),renderLoading:(0,k.jsx)(ae,{rows:10}),children:(0,k.jsx)(ie,{data:_e,withComparison:x,withOverlayLabel:!0,showLegend:!1,dataFormat:A})})}),n&&(0,k.jsxs)(de,{children:[(0,k.jsx)(fe,{report:`utm`,section:o}),(0,k.jsx)(me,{exporter:ge[o],status:{isLoading:p,isFetching:m,isError:h},rowCount:u.length})]})]})}function O({attributes:e={}}){let t=e.utmDimension??j,n=e.showReportLink??!0;return(0,k.jsx)(u,{attributes:e,children:(0,k.jsx)(`div`,{className:D.root,children:(0,k.jsx)(ke,{utmDimension:t,showReportLink:n})})})}var k,A,j,Ae=e((()=>{o(),n(),_(),Ce(),Oe(),k=i(),A={type:`number`,options:{useMultipliers:!0,decimals:0}},j=`utm_source,utm_medium`})),M,je=e((()=>{n(),_(),M={attributes:[{id:`utmDimension`,label:t(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:g(),relevance:`high`}],example:{attributes:{utmDimension:`utm_source,utm_medium`}}}})),N,P,F,I,L,R,z,B,Me=e((()=>{N=`jpa/utm-insights`,P=`jpa/megaphone`,F=`Top UTM`,I=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,L={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`traffic`,z=`framed`,B={name:N,icon:P,title:F,description:I,help:L,category:R,presentation:z}}));function V(e){return(0,H.jsx)(O,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:c(!1,e)}})}function Ne({withComparison:e,...t}){return(0,H.jsx)(_e,{...t,widgetType:W,renderModule:U,renderComponent:O,attributes:{utmDimension:`utm_source,utm_medium`,reportParams:c(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$,Pe;e((()=>{l(),b(),m(),v(),ve(),oe(),xe(),Se(),Ae(),je(),Me(),H=i(),p(),be(),U=`storybook/utm-insights`,W=x(B,M),G={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},K={render:({withComparison:e})=>(0,H.jsx)(O,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:c(e)}}),args:{withComparison:!1},decorators:[S,h]},q={render:({withComparison:e})=>(0,H.jsx)(O,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:c(e)}}),args:{withComparison:!0},decorators:[S,h]},J={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[S,h],beforeEach:()=>(C(`stats/utm`,`loading`),()=>C(`stats/utm`,null))},Y={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[S,h],beforeEach:()=>(C(`stats/utm`,`error`),()=>C(`stats/utm`,null))},X={render:()=>V(`last-12-months`),tags:[`!autodocs`],decorators:[S,h],beforeEach:()=>(C(`stats/utm`,`error-retryable`),()=>C(`stats/utm`,null))},Z={render:()=>V(`last-year`),tags:[`!autodocs`],decorators:[S,h],beforeEach:()=>(C(`stats/utm`,`empty`),()=>C(`stats/utm`,null))},Q={render:({withComparison:e})=>(0,H.jsx)(O,{attributes:{utmDimension:`utm_campaign`,reportParams:c(e)}}),args:{withComparison:!1},decorators:[S,h]},$={render:e=>(0,H.jsx)(Ne,{...e}),args:{...ye,withComparison:!1},argTypes:{...y,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},Pe=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`ByCampaign`,`WidgetDashboardWithWidget`]}))();export{Q as ByCampaign,K as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,$ as WidgetDashboardWithWidget,q as WithComparison,Pe as __namedExportsOrder,G as default};