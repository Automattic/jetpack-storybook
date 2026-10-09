import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as ee}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Gu as i,Nu as a}from"./build-module-Cm3Kd3py.js";import{G as o,On as s,t as c}from"./src-eFflVWkb.js";import{Jt as l,Yt as u,Zt as d,_ as f,dt as te,o as ne,x as re}from"./charts-provider-CG5jlyMR.js";import"./rows-DAmD2BmE.js";import{r as ie,t as ae}from"./leaderboard-skeleton-DsfQpqQ8.js";import{n as oe,r as p}from"./register-report-mocks-CaddGZDb.js";import{t as se}from"./widget-state-Dy1Xd117.js";import{n as m,r as h}from"./with-story-router-Beljd9ki.js";import{g as ce,i as le,o as ue,p as de,y as fe}from"./leaderboard-Bd0dcrkK.js";import{S as pe,n as me}from"./components-D1il1gd6.js";import{a as g,c as he,o as ge,t as _}from"./src-B1RxCXze.js";import{a as v,g as y,h as b,i as x,m as S,n as _e,p as ve,r as C}from"./with-widget-canvas-fJNR6VE0.js";import{n as ye,t as be}from"./register-stats-mocks-D5UjlxjH.js";import{n as xe,t as w}from"./force-stats-mock-state-DAUuJlfM.js";var T,E,D,O,Se=e((()=>{T=`_root_xmjm2_1`,E=`_content_xmjm2_9`,D=`_backLink_xmjm2_16`,O={root:T,content:E,backLink:D}}));function k(e){return typeof e.label==`string`?e.label:String(e.label)}function Ce(e){return{postId:e.id,label:k(e),value:e.value,previousValue:e.previousValue,href:e.href}}function we(e){return{label:k(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(Ce),childrenHaveComparison:e.childrenHaveComparison}}function Te({reportParams:e,utmParam:t,max:n}){let{comparisonRows:ee,hasComparison:r,isLoading:i,isFetching:a,isError:s,error:c,refetch:l}=o({...e,utmParam:t,max:n},{maxRows:n}),u=(ee?.rows??[]).map(we),d=u.length===0&&s;return{data:u,hasComparison:r,isLoading:i,isFetching:a,isError:d,error:d?c:null,refetch:l}}var Ee=e((()=>{c()}));function De({utmDimension:e,showReportLink:n}){let{reportParams:r}=re(),a=ge(e),{drillDownItem:o,drillDown:s,resetDrillDown:c}=ne();(0,i.useEffect)(()=>{c()},[c,e]);let{data:f,hasComparison:oe,isLoading:p,isFetching:m,isError:h,error:g,refetch:_}=Te({reportParams:r,utmParam:e,max:10}),v=(0,i.useMemo)(()=>f.find(e=>e.label===o)??null,[f,o]),y=!!v?.children?.length,b=(0,i.useMemo)(()=>y?v?.children??[]:f,[f,y,v]),x=y?!!v?.childrenHaveComparison:oe;(0,i.useEffect)(()=>{o&&!y&&!p&&!m&&!h&&c()},[o,y,p,m,h,c]);let S=(0,i.useMemo)(()=>{let e=u(b.map(e=>e.value),x?b.map(e=>e.previousValue):[]);return b.map((n,r)=>{let i=n.previousValue,o=`postId`in n?n:null,c=!y&&`children`in n&&!!n.children?.length;return{id:`${r}-${n.label}`,...o?{label:(0,j.jsx)(pe,{id:o.postId,label:o.label,link:o.href,origin:{report:`utm`,section:a}})}:le({label:n.label,media:{kind:`none`},action:ue({hasChildren:c,drillDown:{onClick:()=>s(n.label),ariaLabel:ee(t(`View posts for %s`,`jetpack-premium-analytics-pkg`),n.label)}})}),currentValue:n.value,currentShare:l(n.value,e),previousValue:i,previousShare:x&&i!==void 0?l(i,e):void 0,delta:x&&i!==void 0?d(n.value,i):void 0}})},[b,y,a,s,x]);return(0,j.jsxs)(j.Fragment,{children:[y?(0,j.jsx)(ce,{label:t(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:t(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:c,className:O.backLink}):null,(0,j.jsx)(`div`,{className:O.content,children:(0,j.jsx)(se,{isLoading:p,isFetching:m,isError:h,isEmpty:f.length===0,error:te(g,{retryDescription:t(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:_}),renderLoading:(0,j.jsx)(ae,{rows:10}),children:(0,j.jsx)(ie,{data:S,withComparison:x,withOverlayLabel:!0,showLegend:!1,dataFormat:M})})}),n&&(0,j.jsxs)(de,{children:[(0,j.jsx)(fe,{report:`utm`,section:a}),(0,j.jsx)(me,{exporter:he[a],status:{isLoading:p,isFetching:m,isError:h},rowCount:f.length})]})]})}function A({attributes:e={}}){let t=e.utmDimension??N,n=e.showReportLink??!0;return(0,j.jsx)(f,{attributes:e,children:(0,j.jsx)(`div`,{className:O.root,children:(0,j.jsx)(De,{utmDimension:t,showReportLink:n})})})}var j,M,N,Oe=e((()=>{a(),n(),_(),Se(),Ee(),j=r(),M={type:`number`,options:{useMultipliers:!0,decimals:0}},N=`utm_source,utm_medium`})),P,ke=e((()=>{n(),_(),P={attributes:[{id:`utmDimension`,label:t(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:g(),relevance:`high`}],example:{attributes:{utmDimension:`utm_source,utm_medium`}}}})),F,I,L,R,z,B,V,H,Ae=e((()=>{F=`jpa/utm-insights`,I=`jpa/megaphone`,L=`Top UTM`,R=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,z={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`traffic`,V=`framed`,H={name:F,icon:I,title:L,description:R,help:z,category:B,presentation:V}}));function U(e){return(0,W.jsx)(A,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:s(!1,e)}})}function je({withComparison:e,...t}){return(0,W.jsx)(S,{...t,widgetType:Me,renderModule:G,renderComponent:A,attributes:{utmDimension:`utm_source,utm_medium`,reportParams:s(e)}})}var W,G,Me,Ne,K,q,J,Y,X,Z,Q,$,Pe;e((()=>{c(),b(),m(),v(),_e(),oe(),be(),xe(),Oe(),ke(),Ae(),W=r(),p(),ye(),G=`storybook/utm-insights`,Me=x(H,P),Ne={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},K={render:({withComparison:e})=>(0,W.jsx)(A,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:s(e)}}),args:{withComparison:!1},decorators:[C,h]},q={render:({withComparison:e})=>(0,W.jsx)(A,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:s(e)}}),args:{withComparison:!0},decorators:[C,h]},J={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[C,h],beforeEach:()=>(w(`stats/utm`,`loading`),()=>w(`stats/utm`,null))},Y={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[C,h],beforeEach:()=>(w(`stats/utm`,`error`),()=>w(`stats/utm`,null))},X={render:()=>U(`last-12-months`),tags:[`!autodocs`],decorators:[C,h],beforeEach:()=>(w(`stats/utm`,`error-retryable`),()=>w(`stats/utm`,null))},Z={render:()=>U(`last-year`),tags:[`!autodocs`],decorators:[C,h],beforeEach:()=>(w(`stats/utm`,`empty`),()=>w(`stats/utm`,null))},Q={render:({withComparison:e})=>(0,W.jsx)(A,{attributes:{utmDimension:`utm_campaign`,reportParams:s(e)}}),args:{withComparison:!1},decorators:[C,h]},$={render:e=>(0,W.jsx)(je,{...e}),args:{...ve,withComparison:!1},argTypes:{...y,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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