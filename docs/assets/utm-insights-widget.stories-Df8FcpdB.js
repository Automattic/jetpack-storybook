import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Gu as a,Nu as o}from"./build-module-Cm3Kd3py.js";import{G as s,t as c,wn as l}from"./src-C-EghbUA.js";import{$t as u,Xt as d,Zt as f,_ as p,o as ee,pt as te,x as ne}from"./charts-provider-DqwK50kj.js";import"./rows-DAmD2BmE.js";import{r as re,t as ie}from"./leaderboard-skeleton-DAtYE-w1.js";import{n as m,r as h}from"./register-report-mocks-s-nppK1i.js";import{t as ae}from"./widget-state-BV7A4dgE.js";import{n as g,r as _}from"./with-story-router-Beljd9ki.js";import{g as oe,i as se,o as ce,p as le,y as ue}from"./leaderboard-DWybDTNC.js";import{S as de,n as fe}from"./components-DWb0bf80.js";import{a as pe,c as me,o as he,t as v}from"./src-0KcSXslG.js";import{a as y,g as b,h as x,i as S,m as C,n as ge,p as _e,r as w}from"./with-widget-canvas-BbIjt46K.js";import{n as ve,t as ye}from"./register-stats-mocks-BncfF1So.js";import{n as be,t as T}from"./force-stats-mock-state-9dV0NBcI.js";var E,xe,Se,D,Ce=e((()=>{E=`_root_xmjm2_1`,xe=`_content_xmjm2_9`,Se=`_backLink_xmjm2_16`,D={root:E,content:xe,backLink:Se}}));function we(e){return typeof e.label==`string`?e.label:String(e.label)}function Te(e){return{postId:e.id,label:we(e),value:e.value,previousValue:e.previousValue,href:e.href}}function Ee(e){return{label:we(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(Te),childrenHaveComparison:e.childrenHaveComparison}}function De({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:c,error:l,refetch:u}=s({...e,utmParam:t,max:n},{maxRows:n}),d=(r?.rows??[]).map(Ee),f=d.length===0&&c;return{data:d,hasComparison:i,isLoading:a,isFetching:o,isError:f,error:f?l:null,refetch:u}}var Oe=e((()=>{c()}));function ke({utmDimension:e,showReportLink:n}){let{reportParams:i}=ne(),o=he(e),{drillDownItem:s,drillDown:c,resetDrillDown:l}=ee();(0,a.useEffect)(()=>{l()},[l,e]);let{data:p,hasComparison:m,isLoading:h,isFetching:g,isError:_,error:pe,refetch:v}=De({reportParams:i,utmParam:e,max:10}),y=(0,a.useMemo)(()=>p.find(e=>e.label===s)??null,[p,s]),b=!!y?.children?.length,x=(0,a.useMemo)(()=>b?y?.children??[]:p,[p,b,y]),S=b?!!y?.childrenHaveComparison:m;(0,a.useEffect)(()=>{s&&!b&&!h&&!g&&!_&&l()},[s,b,h,g,_,l]);let C=(0,a.useMemo)(()=>{let e=f(x.map(e=>e.value),S?x.map(e=>e.previousValue):[]);return x.map((n,i)=>{let a=n.previousValue,s=`postId`in n?n:null,l=!b&&`children`in n&&!!n.children?.length;return{id:`${i}-${n.label}`,...s?{label:(0,k.jsx)(de,{id:s.postId,label:s.label,link:s.href,origin:{report:`utm`,section:o}})}:se({label:n.label,media:{kind:`none`},action:ce({hasChildren:l,drillDown:{onClick:()=>c(n.label),ariaLabel:r(t(`View posts for %s`,`jetpack-premium-analytics-pkg`),n.label)}})}),currentValue:n.value,currentShare:d(n.value,e),previousValue:a,previousShare:S&&a!==void 0?d(a,e):void 0,delta:S&&a!==void 0?u(n.value,a):void 0}})},[x,b,o,c,S]);return(0,k.jsxs)(k.Fragment,{children:[b?(0,k.jsx)(oe,{label:t(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:t(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:l,className:D.backLink}):null,(0,k.jsx)(`div`,{className:D.content,children:(0,k.jsx)(ae,{isLoading:h,isFetching:g,isError:_,isEmpty:p.length===0,error:te(pe,{retryDescription:t(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:v}),renderLoading:(0,k.jsx)(ie,{rows:10}),children:(0,k.jsx)(re,{data:C,withComparison:S,withOverlayLabel:!0,showLegend:!1,dataFormat:A})})}),n&&(0,k.jsxs)(le,{children:[(0,k.jsx)(ue,{report:`utm`,section:o}),(0,k.jsx)(fe,{exporter:me[o],status:{isLoading:h,isFetching:g,isError:_},rowCount:p.length})]})]})}function O({attributes:e={}}){let t=e.utmDimension??j,n=e.showReportLink??!0;return(0,k.jsx)(p,{attributes:e,children:(0,k.jsx)(`div`,{className:D.root,children:(0,k.jsx)(ke,{utmDimension:t,showReportLink:n})})})}var k,A,j,Ae=e((()=>{o(),n(),v(),Ce(),Oe(),k=i(),A={type:`number`,options:{useMultipliers:!0,decimals:0}},j=`utm_source,utm_medium`})),M,je=e((()=>{n(),v(),M={attributes:[{id:`utmDimension`,label:t(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:pe(),relevance:`high`}],example:{attributes:{utmDimension:`utm_source,utm_medium`}}}})),N,P,F,I,L,R,z,B,Me=e((()=>{N=`jpa/utm-insights`,P=`jpa/megaphone`,F=`Top UTM`,I=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,L={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`traffic`,z=`framed`,B={name:N,icon:P,title:F,description:I,help:L,category:R,presentation:z}}));function V(e){return(0,H.jsx)(O,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:l(!1,e)}})}function Ne({withComparison:e,...t}){return(0,H.jsx)(C,{...t,widgetType:W,renderModule:U,renderComponent:O,attributes:{utmDimension:`utm_source,utm_medium`,reportParams:l(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$,Pe;e((()=>{c(),x(),g(),y(),ge(),m(),ye(),be(),Ae(),je(),Me(),H=i(),h(),ve(),U=`storybook/utm-insights`,W=S(B,M),G={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},K={render:({withComparison:e})=>(0,H.jsx)(O,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:l(e)}}),args:{withComparison:!1},decorators:[w,_]},q={render:({withComparison:e})=>(0,H.jsx)(O,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:l(e)}}),args:{withComparison:!0},decorators:[w,_]},J={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[w,_],beforeEach:()=>(T(`stats/utm`,`loading`),()=>T(`stats/utm`,null))},Y={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[w,_],beforeEach:()=>(T(`stats/utm`,`error`),()=>T(`stats/utm`,null))},X={render:()=>V(`last-12-months`),tags:[`!autodocs`],decorators:[w,_],beforeEach:()=>(T(`stats/utm`,`error-retryable`),()=>T(`stats/utm`,null))},Z={render:()=>V(`last-year`),tags:[`!autodocs`],decorators:[w,_],beforeEach:()=>(T(`stats/utm`,`empty`),()=>T(`stats/utm`,null))},Q={render:({withComparison:e})=>(0,H.jsx)(O,{attributes:{utmDimension:`utm_campaign`,reportParams:l(e)}}),args:{withComparison:!1},decorators:[w,_]},$={render:e=>(0,H.jsx)(Ne,{...e}),args:{..._e,withComparison:!1},argTypes:{...b,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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