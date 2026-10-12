import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as ee}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Gu as i,Nu as a}from"./build-module-Cm3Kd3py.js";import{G as o,Sn as s,t as c}from"./src-2a88cYSx.js";import{C as l,in as u,nn as d,o as te,tn as f,vt as ne,y as p}from"./charts-provider-Bk38zIJq.js";import"./rows-DAmD2BmE.js";import{r as re,t as ie}from"./leaderboard-skeleton-CrHv2TjK.js";import{n as ae,r as m}from"./register-report-mocks-iviv8n0s.js";import{t as oe}from"./widget-state-BlUbrcDn.js";import{n as h,r as g}from"./with-story-router-Beljd9ki.js";import{g as se,i as ce,o as le,p as ue,y as de}from"./leaderboard-DkZGpeBt.js";import{S as fe,n as pe}from"./components-Dco1DlYi.js";import{a as _,c as me,o as he,t as v}from"./src-ZGXLokk_.js";import{a as y,g as b,h as x,i as S,m as C,n as ge,p as _e,r as w}from"./with-widget-canvas-Agk44m9m.js";import{n as ve,t as ye}from"./register-stats-mocks-BsY0KMTS.js";import{n as be,t as T}from"./force-stats-mock-state-Djnm6Goo.js";var E,xe,Se,D,Ce=e((()=>{E=`_root_xmjm2_1`,xe=`_content_xmjm2_9`,Se=`_backLink_xmjm2_16`,D={root:E,content:xe,backLink:Se}}));function we(e){return typeof e.label==`string`?e.label:String(e.label)}function Te(e){return{postId:e.id,label:we(e),value:e.value,previousValue:e.previousValue,href:e.href}}function Ee(e){return{label:we(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(Te),childrenHaveComparison:e.childrenHaveComparison}}function De({reportParams:e,utmParam:t,max:n}){let{comparisonRows:ee,hasComparison:r,isLoading:i,isFetching:a,isError:s,error:c,refetch:l}=o({...e,utmParam:t,max:n},{maxRows:n}),u=(ee?.rows??[]).map(Ee),d=u.length===0&&s;return{data:u,hasComparison:r,isLoading:i,isFetching:a,isError:d,error:d?c:null,refetch:l}}var Oe=e((()=>{c()}));function ke({utmDimension:e,showReportLink:n}){let{reportParams:r}=l(),a=he(e),{drillDownItem:o,drillDown:s,resetDrillDown:c}=te();(0,i.useEffect)(()=>{c()},[c,e]);let{data:p,hasComparison:ae,isLoading:m,isFetching:h,isError:g,error:_,refetch:v}=De({reportParams:r,utmParam:e,max:10}),y=(0,i.useMemo)(()=>p.find(e=>e.label===o)??null,[p,o]),b=!!y?.children?.length,x=(0,i.useMemo)(()=>b?y?.children??[]:p,[p,b,y]),S=b?!!y?.childrenHaveComparison:ae;(0,i.useEffect)(()=>{o&&!b&&!m&&!h&&!g&&c()},[o,b,m,h,g,c]);let C=(0,i.useMemo)(()=>{let e=d(x.map(e=>e.value),S?x.map(e=>e.previousValue):[]);return x.map((n,r)=>{let i=n.previousValue,o=`postId`in n?n:null,c=!b&&`children`in n&&!!n.children?.length;return{id:`${r}-${n.label}`,...o?{label:(0,k.jsx)(fe,{id:o.postId,label:o.label,link:o.href,origin:{report:`utm`,section:a}})}:ce({label:n.label,media:{kind:`none`},action:le({hasChildren:c,drillDown:{onClick:()=>s(n.label),ariaLabel:ee(t(`View posts for %s`,`jetpack-premium-analytics-pkg`),n.label)}})}),currentValue:n.value,currentShare:f(n.value,e),previousValue:i,previousShare:S&&i!==void 0?f(i,e):void 0,delta:S&&i!==void 0?u(n.value,i):void 0}})},[x,b,a,s,S]);return(0,k.jsxs)(k.Fragment,{children:[b?(0,k.jsx)(se,{label:t(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:t(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:c,className:D.backLink}):null,(0,k.jsx)(`div`,{className:D.content,children:(0,k.jsx)(oe,{isLoading:m,isFetching:h,isError:g,isEmpty:p.length===0,error:ne(_,{retryDescription:t(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:v}),renderLoading:(0,k.jsx)(ie,{rows:10}),children:(0,k.jsx)(re,{data:C,withComparison:S,withOverlayLabel:!0,showLegend:!1,dataFormat:A})})}),n&&(0,k.jsxs)(ue,{children:[(0,k.jsx)(de,{report:`utm`,section:a}),(0,k.jsx)(pe,{exporter:me[a],status:{isLoading:m,isFetching:h,isError:g},rowCount:p.length})]})]})}function O({attributes:e={}}){let t=e.utmDimension??j,n=e.showReportLink??!0;return(0,k.jsx)(p,{attributes:e,children:(0,k.jsx)(`div`,{className:D.root,children:(0,k.jsx)(ke,{utmDimension:t,showReportLink:n})})})}var k,A,j,Ae=e((()=>{a(),n(),v(),Ce(),Oe(),k=r(),A={type:`number`,options:{useMultipliers:!0,decimals:0}},j=`utm_source,utm_medium`})),M,je=e((()=>{n(),v(),M={attributes:[{id:`utmDimension`,label:t(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:_(),relevance:`high`}],example:{attributes:{utmDimension:`utm_source,utm_medium`}}}})),N,P,F,I,L,R,z,B,Me=e((()=>{N=`jpa/utm-insights`,P=`jpa/megaphone`,F=`Top UTM`,I=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,L={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`traffic`,z=`framed`,B={name:N,icon:P,title:F,description:I,help:L,category:R,presentation:z}}));function V(e){return(0,H.jsx)(O,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:s(!1,e)}})}function Ne({withComparison:e,...t}){return(0,H.jsx)(C,{...t,widgetType:W,renderModule:U,renderComponent:O,attributes:{utmDimension:`utm_source,utm_medium`,reportParams:s(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$,Pe;e((()=>{c(),x(),h(),y(),ge(),ae(),ye(),be(),Ae(),je(),Me(),H=r(),m(),ve(),U=`storybook/utm-insights`,W=S(B,M),G={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},K={render:({withComparison:e})=>(0,H.jsx)(O,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:s(e)}}),args:{withComparison:!1},decorators:[w,g]},q={render:({withComparison:e})=>(0,H.jsx)(O,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:s(e)}}),args:{withComparison:!0},decorators:[w,g]},J={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[w,g],beforeEach:()=>(T(`stats/utm`,`loading`),()=>T(`stats/utm`,null))},Y={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[w,g],beforeEach:()=>(T(`stats/utm`,`error`),()=>T(`stats/utm`,null))},X={render:()=>V(`last-12-months`),tags:[`!autodocs`],decorators:[w,g],beforeEach:()=>(T(`stats/utm`,`error-retryable`),()=>T(`stats/utm`,null))},Z={render:()=>V(`last-year`),tags:[`!autodocs`],decorators:[w,g],beforeEach:()=>(T(`stats/utm`,`empty`),()=>T(`stats/utm`,null))},Q={render:({withComparison:e})=>(0,H.jsx)(O,{attributes:{utmDimension:`utm_campaign`,reportParams:s(e)}}),args:{withComparison:!1},decorators:[w,g]},$={render:e=>(0,H.jsx)(Ne,{...e}),args:{..._e,withComparison:!1},argTypes:{...b,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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