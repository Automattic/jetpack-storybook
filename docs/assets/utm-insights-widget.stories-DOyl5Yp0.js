import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Vi as a,Vu as o,ku as s,t as c}from"./build-module-DNhkEVJn.js";import{m as l,r as u,v as d}from"./hooks-BMFzqau9.js";import{dn as f,t as p,z as m}from"./src-Bq3Nn1OK.js";import{Et as ee,Ot as te,Tt as h,U as ne}from"./helpers-CGi3ryra.js";import"./rows-DAmD2BmE.js";import{r as re,t as ie}from"./leaderboard-skeleton-CmVO-z2M.js";import{n as g,r as _}from"./with-story-router-CRSGw62n.js";import{n as ae,r as oe}from"./register-report-mocks-B8WrHl1u.js";import{_ as se,b as ce,i as le,m as ue,o as de}from"./leaderboard-B2MiGbuI.js";import{t as fe}from"./widget-state-CXfK5uTe.js";import{b as pe,o as me}from"./report-metric-zURqLYZQ.js";import{S as he,b as ge,t as v,y}from"./src-qKJmLfBY.js";import{a as b,d as x,f as S,i as _e,n as ve,p as ye,r as C,u as be}from"./with-widget-canvas-BtQW7Y7E.js";import{n as xe,t as Se}from"./register-stats-mocks-D4Vyf9Li.js";import{n as Ce,t as w}from"./force-stats-mock-state-SJrQsaS3.js";var T,E,D,O,we=e((()=>{T=`_root_xmjm2_1`,E=`_content_xmjm2_9`,D=`_backLink_xmjm2_16`,O={root:T,content:E,backLink:D}}));function k(e){return typeof e.label==`string`?e.label:String(e.label)}function Te(e){return{postId:e.id,label:k(e),value:e.value,previousValue:e.previousValue,href:e.href}}function Ee(e){return{label:k(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(Te),childrenHaveComparison:e.childrenHaveComparison}}function De({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=m({...e,utmParam:t,max:n},{maxRows:n}),u=(r?.rows??[]).map(Ee),d=u.length===0&&s;return{data:u,hasComparison:i,isLoading:a,isFetching:o,isError:d,error:d?c:null,refetch:l}}var Oe=e((()=>{p()}));function ke({utmDimension:e,showReportLink:n}){let{reportParams:i}=d(),a=ge(e),{drillDownItem:s,drillDown:c,resetDrillDown:l}=u();(0,o.useEffect)(()=>{l()},[l,e]);let{data:f,hasComparison:p,isLoading:m,isFetching:g,isError:_,error:ae,refetch:oe}=De({reportParams:i,utmParam:e,max:10}),v=(0,o.useMemo)(()=>f.find(e=>e.label===s)??null,[f,s]),y=!!v?.children?.length,b=(0,o.useMemo)(()=>y?v?.children??[]:f,[f,y,v]),x=y?!!v?.childrenHaveComparison:p;(0,o.useEffect)(()=>{s&&!y&&!m&&!g&&!_&&l()},[s,y,m,g,_,l]);let S=(0,o.useMemo)(()=>{let e=ee(b.map(e=>e.value),x?b.map(e=>e.previousValue):[]);return b.map((n,i)=>{let o=n.previousValue,s=`postId`in n?n:null,l=!y&&`children`in n&&!!n.children?.length;return{id:`${i}-${n.label}`,...s?{label:(0,j.jsx)(pe,{id:s.postId,label:s.label,link:s.href,origin:{report:`utm`,section:a}})}:le({label:n.label,media:{kind:`none`},action:de({hasChildren:l,drillDown:{onClick:()=>c(n.label),ariaLabel:r(t(`View posts for %s`,`jetpack-premium-analytics-pkg`),n.label)}})}),currentValue:n.value,currentShare:h(n.value,e),previousValue:o,previousShare:x&&o!==void 0?h(o,e):void 0,delta:x&&o!==void 0?te(n.value,o):void 0}})},[b,y,a,c,x]);return(0,j.jsxs)(j.Fragment,{children:[y?(0,j.jsx)(se,{label:t(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:t(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:l,className:O.backLink}):null,(0,j.jsx)(`div`,{className:O.content,children:(0,j.jsx)(fe,{isLoading:m,isFetching:g,isError:_,isEmpty:f.length===0,error:ne(ae,{retryDescription:t(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:oe}),renderLoading:(0,j.jsx)(ie,{rows:10}),children:(0,j.jsx)(re,{data:S,withComparison:x,withOverlayLabel:!0,showLegend:!1,dataFormat:M})})}),n&&(0,j.jsxs)(ue,{children:[(0,j.jsx)(ce,{report:`utm`,section:a}),(0,j.jsx)(me,{exporter:he[a],status:{isLoading:m,isFetching:g,isError:_},rowCount:f.length})]})]})}function A({attributes:e={}}){let t=e.utmDimension??N,n=e.showReportLink??!0;return(0,j.jsx)(l,{attributes:e,children:(0,j.jsx)(`div`,{className:O.root,children:(0,j.jsx)(ke,{utmDimension:t,showReportLink:n})})})}var j,M,N,Ae=e((()=>{s(),n(),v(),we(),Oe(),j=i(),M={type:`number`,options:{useMultipliers:!0,decimals:0}},N=`utm_source,utm_medium`})),P,je=e((()=>{n(),c(),v(),P={icon:a,attributes:[{id:`utmDimension`,label:t(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:y(),relevance:`high`}],example:{attributes:{utmDimension:`utm_source,utm_medium`}}}})),F,I,L,R,z,B,V,Me=e((()=>{F=`jpa/utm-insights`,I=`Top UTM`,L=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,R={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`traffic`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H(e){return(0,U.jsx)(A,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:f(!1,e)}})}function Ne({withComparison:e,...t}){return(0,U.jsx)(x,{...t,widgetType:W,renderModule:Pe,renderComponent:A,attributes:{utmDimension:`utm_source,utm_medium`,reportParams:f(e)}})}var U,Pe,W,Fe,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),S(),g(),b(),ve(),ae(),Se(),Ce(),Ae(),je(),Me(),U=i(),oe(),xe(),Pe=`storybook/utm-insights`,W=_e(V,P),Fe={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},G={render:({withComparison:e})=>(0,U.jsx)(A,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:f(e)}}),args:{withComparison:!1},decorators:[C,_]},K={render:({withComparison:e})=>(0,U.jsx)(A,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:f(e)}}),args:{withComparison:!0},decorators:[C,_]},q={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[C,_],beforeEach:()=>(w(`stats/utm`,`loading`),()=>w(`stats/utm`,null))},J={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[C,_],beforeEach:()=>(w(`stats/utm`,`error`),()=>w(`stats/utm`,null))},Y={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[C,_],beforeEach:()=>(w(`stats/utm`,`error-retryable`),()=>w(`stats/utm`,null))},X={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[C,_],beforeEach:()=>(w(`stats/utm`,`empty`),()=>w(`stats/utm`,null))},Z={render:({withComparison:e})=>(0,U.jsx)(A,{attributes:{utmDimension:`utm_campaign`,reportParams:f(e)}}),args:{withComparison:!1},decorators:[C,_]},Q={render:e=>(0,U.jsx)(Ne,{...e}),args:{...be,withComparison:!1},argTypes:{...ye,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`ByCampaign`,`WidgetDashboardWithWidget`]}))();export{Z as ByCampaign,G as Default,X as Empty,J as Error,Y as ErrorRetryable,q as Loading,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,Fe as default};