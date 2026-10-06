import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Vi as a,Vu as o,ku as s,t as c}from"./build-module-DNhkEVJn.js";import{m as l,r as u,v as d}from"./hooks-BBnqPOwi.js";import{B as f,fn as p,t as m}from"./src-C6xh7eAo.js";import{Dt as ee,H as te,Tt as ne,wt as h}from"./helpers-BXsXFyT6.js";import"./rows-DAmD2BmE.js";import{r as re,t as ie}from"./leaderboard-skeleton-BIwlTFxN.js";import{n as g,r as _}from"./with-story-router-b5vD3E6B.js";import{n as v,r as ae}from"./register-report-mocks-LeVjJdbc.js";import{_ as oe,b as se,i as ce,m as le,o as ue}from"./leaderboard-BHOUl9Pa.js";import{t as de}from"./widget-state-BxYBsNkF.js";import{E as fe,o as pe}from"./report-metric-C6chKQuN.js";import{S as me,b as he,t as y,y as b}from"./src-CUFkpRXF.js";import{a as x,d as S,f as C,i as ge,n as _e,p as ve,r as w,u as ye}from"./with-widget-canvas-DEaRBqTa.js";import{n as be,t as xe}from"./register-stats-mocks-CT4PC_Bp.js";import{n as Se,t as T}from"./force-stats-mock-state-CXDeTf6B.js";var E,D,O,k,Ce=e((()=>{E=`_root_xmjm2_1`,D=`_content_xmjm2_9`,O=`_backLink_xmjm2_16`,k={root:E,content:D,backLink:O}}));function A(e){return typeof e.label==`string`?e.label:String(e.label)}function we(e){return{postId:e.id,label:A(e),value:e.value,previousValue:e.previousValue,href:e.href}}function Te(e){return{label:A(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(we),childrenHaveComparison:e.childrenHaveComparison}}function Ee({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=f({...e,utmParam:t,max:n},{maxRows:n}),u=(r?.rows??[]).map(Te),d=u.length===0&&s;return{data:u,hasComparison:i,isLoading:a,isFetching:o,isError:d,error:d?c:null,refetch:l}}var De=e((()=>{m()}));function Oe({utmDimension:e,showReportLink:n}){let{reportParams:i}=d(),a=he(e),{drillDownItem:s,drillDown:c,resetDrillDown:l}=u();(0,o.useEffect)(()=>{l()},[l,e]);let{data:f,hasComparison:p,isLoading:m,isFetching:g,isError:_,error:v,refetch:ae}=Ee({reportParams:i,utmParam:e,max:10}),y=(0,o.useMemo)(()=>f.find(e=>e.label===s)??null,[f,s]),b=!!y?.children?.length,x=(0,o.useMemo)(()=>b?y?.children??[]:f,[f,b,y]),S=b?!!y?.childrenHaveComparison:p;(0,o.useEffect)(()=>{s&&!b&&!m&&!g&&!_&&l()},[s,b,m,g,_,l]);let C=(0,o.useMemo)(()=>{let e=ne(x.map(e=>e.value),S?x.map(e=>e.previousValue):[]);return x.map((n,i)=>{let o=n.previousValue,s=`postId`in n?n:null,l=!b&&`children`in n&&!!n.children?.length;return{id:`${i}-${n.label}`,...s?{label:(0,M.jsx)(fe,{id:s.postId,label:s.label,link:s.href,origin:{report:`utm`,section:a}})}:ce({label:n.label,media:{kind:`none`},action:ue({hasChildren:l,drillDown:{onClick:()=>c(n.label),ariaLabel:r(t(`View posts for %s`,`jetpack-premium-analytics-pkg`),n.label)}})}),currentValue:n.value,currentShare:h(n.value,e),previousValue:o,previousShare:S&&o!==void 0?h(o,e):void 0,delta:S&&o!==void 0?ee(n.value,o):void 0}})},[x,b,a,c,S]);return(0,M.jsxs)(M.Fragment,{children:[b?(0,M.jsx)(oe,{label:t(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:t(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:l,className:k.backLink}):null,(0,M.jsx)(`div`,{className:k.content,children:(0,M.jsx)(de,{isLoading:m,isFetching:g,isError:_,isEmpty:f.length===0,error:te(v,{retryDescription:t(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:ae}),renderLoading:(0,M.jsx)(ie,{rows:10}),children:(0,M.jsx)(re,{data:C,withComparison:S,withOverlayLabel:!0,showLegend:!1,dataFormat:N})})}),n&&(0,M.jsxs)(le,{children:[(0,M.jsx)(se,{report:`utm`,section:a}),(0,M.jsx)(pe,{exporter:me[a],status:{isLoading:m,isFetching:g,isError:_},rowCount:f.length})]})]})}function j({attributes:e={}}){let t=e.utmDimension??P,n=e.showReportLink??!0;return(0,M.jsx)(l,{attributes:e,children:(0,M.jsx)(`div`,{className:k.root,children:(0,M.jsx)(Oe,{utmDimension:t,showReportLink:n})})})}var M,N,P,ke=e((()=>{s(),n(),y(),Ce(),De(),M=i(),N={type:`number`,options:{useMultipliers:!0,decimals:0}},P=`utm_source,utm_medium`})),F,Ae=e((()=>{n(),c(),y(),F={icon:a,attributes:[{id:`utmDimension`,label:t(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:b(),relevance:`high`}],example:{attributes:{utmDimension:`utm_source,utm_medium`}}}})),I,L,R,z,B,V,H,je=e((()=>{I=`jpa/utm-insights`,L=`Top UTM`,R=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,z={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`traffic`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U(e){return(0,W.jsx)(j,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:p(!1,e)}})}function Me({withComparison:e,...t}){return(0,W.jsx)(S,{...t,widgetType:Ne,renderModule:G,renderComponent:j,attributes:{utmDimension:`utm_source,utm_medium`,reportParams:p(e)}})}var W,G,Ne,Pe,K,q,J,Y,X,Z,Q,$,Fe;e((()=>{m(),C(),g(),x(),_e(),v(),xe(),Se(),ke(),Ae(),je(),W=i(),ae(),be(),G=`storybook/utm-insights`,Ne=ge(H,F),Pe={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:j,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},K={render:({withComparison:e})=>(0,W.jsx)(j,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:p(e)}}),args:{withComparison:!1},decorators:[w,_]},q={render:({withComparison:e})=>(0,W.jsx)(j,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:p(e)}}),args:{withComparison:!0},decorators:[w,_]},J={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[w,_],beforeEach:()=>(T(`stats/utm`,`loading`),()=>T(`stats/utm`,null))},Y={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[w,_],beforeEach:()=>(T(`stats/utm`,`error`),()=>T(`stats/utm`,null))},X={render:()=>U(`last-12-months`),tags:[`!autodocs`],decorators:[w,_],beforeEach:()=>(T(`stats/utm`,`error-retryable`),()=>T(`stats/utm`,null))},Z={render:()=>U(`last-year`),tags:[`!autodocs`],decorators:[w,_],beforeEach:()=>(T(`stats/utm`,`empty`),()=>T(`stats/utm`,null))},Q={render:({withComparison:e})=>(0,W.jsx)(j,{attributes:{utmDimension:`utm_campaign`,reportParams:p(e)}}),args:{withComparison:!1},decorators:[w,_]},$={render:e=>(0,W.jsx)(Me,{...e}),args:{...ye,withComparison:!1},argTypes:{...ve,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},Fe=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`ByCampaign`,`WidgetDashboardWithWidget`]}))();export{Q as ByCampaign,K as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,$ as WidgetDashboardWithWidget,q as WithComparison,Fe as __namedExportsOrder,Pe as default};