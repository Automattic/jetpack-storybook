import{i as e}from"./preload-helper-usAeo7Bx.js";import{d as t,n,t as r}from"./build-module-BXPCp--5.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Gu as a,Nu as o}from"./build-module-Cm3Kd3py.js";import{G as s,t as c,vn as l}from"./src-D39AaP5G.js";import{Qt as u,Zt as d,_ as f,en as ee,o as te,pt as ne,x as re}from"./charts-provider-CbOiCKv8.js";import"./rows-DAmD2BmE.js";import{r as ie,t as ae}from"./leaderboard-skeleton-CN0w77Ry.js";import{n as oe,r as p}from"./register-report-mocks-CKEpccwX.js";import{t as se}from"./widget-state-CBIqWOjD.js";import{n as m,r as h}from"./with-story-router-TjVyBU09.js";import{g as ce,i as le,o as ue,p as de,y as fe}from"./leaderboard-K6wlE3Yu.js";import{S as pe,n as me}from"./components-4w8bpRwp.js";import{a as he,n as ge,r as _e,t as g}from"./src-BUlCdgq-.js";import{a as _,g as v,h as y,i as b,m as x,n as ve,p as ye,r as S}from"./with-widget-canvas-D5XzMGkr.js";import{n as be,t as xe}from"./register-stats-mocks-C1bdMJM6.js";import{n as Se,t as C}from"./force-stats-mock-state-Df_cJY57.js";var w,T,E,D,Ce=e((()=>{w=`_root_xmjm2_1`,T=`_content_xmjm2_9`,E=`_backLink_xmjm2_16`,D={root:w,content:T,backLink:E}}));function O(e){return typeof e.label==`string`?e.label:String(e.label)}function we(e){return{postId:e.id,label:O(e),value:e.value,previousValue:e.previousValue,href:e.href}}function Te(e){return{label:O(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(we),childrenHaveComparison:e.childrenHaveComparison}}function Ee({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:c,error:l,refetch:u}=s({...e,utmParam:t,max:n},{maxRows:n}),d=(r?.rows??[]).map(Te),f=d.length===0&&c;return{data:d,hasComparison:i,isLoading:a,isFetching:o,isError:f,error:f?l:null,refetch:u}}var De=e((()=>{c()}));function Oe({utmDimension:e,showReportLink:r}){let{reportParams:i}=re(),o=_e(e),{drillDownItem:s,drillDown:c,resetDrillDown:l}=te();(0,a.useEffect)(()=>{l()},[l,e]);let{data:f,hasComparison:oe,isLoading:p,isFetching:m,isError:h,error:ge,refetch:g}=Ee({reportParams:i,utmParam:e,max:10}),_=(0,a.useMemo)(()=>f.find(e=>e.label===s)??null,[f,s]),v=!!_?.children?.length,y=(0,a.useMemo)(()=>v?_?.children??[]:f,[f,v,_]),b=v?!!_?.childrenHaveComparison:oe;(0,a.useEffect)(()=>{s&&!v&&!p&&!m&&!h&&l()},[s,v,p,m,h,l]);let x=(0,a.useMemo)(()=>{let e=u(y.map(e=>e.value),b?y.map(e=>e.previousValue):[]);return y.map((r,i)=>{let a=r.previousValue,s=`postId`in r?r:null,l=!v&&`children`in r&&!!r.children?.length;return{id:`${i}-${r.label}`,...s?{label:(0,A.jsx)(pe,{id:s.postId,label:s.label,link:s.href,origin:{report:`utm`,section:o}})}:le({label:r.label,media:{kind:`none`},action:ue({hasChildren:l,drillDown:{onClick:()=>c(r.label),ariaLabel:t(n(`View posts for %s`,`jetpack-premium-analytics-pkg`),r.label)}})}),currentValue:r.value,currentShare:d(r.value,e),previousValue:a,previousShare:b&&a!==void 0?d(a,e):void 0,delta:b&&a!==void 0?ee(r.value,a):void 0}})},[y,v,o,c,b]);return(0,A.jsxs)(A.Fragment,{children:[v?(0,A.jsx)(ce,{label:n(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:l,className:D.backLink}):null,(0,A.jsx)(`div`,{className:D.content,children:(0,A.jsx)(se,{isLoading:p,isFetching:m,isError:h,isEmpty:f.length===0,error:ne(ge,{retryDescription:n(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:g}),renderLoading:(0,A.jsx)(ae,{rows:10}),children:(0,A.jsx)(ie,{data:x,withComparison:b,withOverlayLabel:!0,showLegend:!1,dataFormat:j})})}),r&&(0,A.jsxs)(de,{children:[(0,A.jsx)(fe,{report:`utm`,section:o}),(0,A.jsx)(me,{exporter:he[o],status:{isLoading:p,isFetching:m,isError:h},rowCount:f.length})]})]})}function k({attributes:e={}}){let t=e.utmDimension??M,n=e.showReportLink??!0;return(0,A.jsx)(f,{attributes:e,children:(0,A.jsx)(`div`,{className:D.root,children:(0,A.jsx)(Oe,{utmDimension:t,showReportLink:n})})})}var A,j,M,ke=e((()=>{o(),r(),g(),Ce(),De(),A=i(),j={type:`number`,options:{useMultipliers:!0,decimals:0}},M=`utm_source,utm_medium`})),N,Ae=e((()=>{r(),g(),N={attributes:[{id:`utmDimension`,label:n(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:ge(),relevance:`high`}],example:{attributes:{utmDimension:`utm_source,utm_medium`}}}})),P,F,I,L,R,z,B,V,je=e((()=>{P=`jpa/utm-insights`,F=`jpa/megaphone`,I=`Top UTM`,L=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,R={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`traffic`,B=`framed`,V={name:P,icon:F,title:I,description:L,help:R,category:z,presentation:B}}));function H(e){return(0,U.jsx)(k,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:l(!1,e)}})}function Me({withComparison:e,...t}){return(0,U.jsx)(x,{...t,widgetType:W,renderModule:Ne,renderComponent:k,attributes:{utmDimension:`utm_source,utm_medium`,reportParams:l(e)}})}var U,Ne,W,Pe,G,K,q,J,Y,X,Z,Q,$;e((()=>{c(),y(),m(),_(),ve(),oe(),xe(),Se(),ke(),Ae(),je(),U=i(),p(),be(),Ne=`storybook/utm-insights`,W=b(V,N),Pe={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},G={render:({withComparison:e})=>(0,U.jsx)(k,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:l(e)}}),args:{withComparison:!1},decorators:[S,h]},K={render:({withComparison:e})=>(0,U.jsx)(k,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:l(e)}}),args:{withComparison:!0},decorators:[S,h]},q={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[S,h],beforeEach:()=>(C(`stats/utm`,`loading`),()=>C(`stats/utm`,null))},J={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[S,h],beforeEach:()=>(C(`stats/utm`,`error`),()=>C(`stats/utm`,null))},Y={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[S,h],beforeEach:()=>(C(`stats/utm`,`error-retryable`),()=>C(`stats/utm`,null))},X={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[S,h],beforeEach:()=>(C(`stats/utm`,`empty`),()=>C(`stats/utm`,null))},Z={render:({withComparison:e})=>(0,U.jsx)(k,{attributes:{utmDimension:`utm_campaign`,reportParams:l(e)}}),args:{withComparison:!1},decorators:[S,h]},Q={render:e=>(0,U.jsx)(Me,{...e}),args:{...ye,withComparison:!1},argTypes:{...v,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows the generic empty state (the magnifier
glyph and "We couldn’t find results for this time period.").`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`ByCampaign`,`WidgetDashboardWithWidget`]}))();export{Z as ByCampaign,G as Default,X as Empty,J as Error,Y as ErrorRetryable,q as Loading,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,Pe as default};