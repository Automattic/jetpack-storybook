import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Vi as a,Vu as o,ku as s,t as c}from"./build-module-DNhkEVJn.js";import{G as l,Mn as u,t as d}from"./src-BgWlHMCI.js";import{_ as f,dt as ee,en as p,o as te,rn as ne,tn as re,x as ie}from"./charts-provider-Bzd5eOcT.js";import"./rows-DAmD2BmE.js";import{r as ae,t as oe}from"./leaderboard-skeleton-Cffd5d_L.js";import{n as m,r as h}from"./register-report-mocks-CkTH9CtF.js";import{t as se}from"./widget-state-BFsyoDQs.js";import{n as g,r as _}from"./with-story-router-Beljd9ki.js";import{g as ce,i as le,o as ue,p as de,y as fe}from"./leaderboard-s1QnhBFI.js";import{S as pe,n as me}from"./components-BTKU4foI.js";import{d as v,f as he,m as ge,t as y}from"./src-Chmz-Zxr.js";import{a as b,g as x,h as S,i as _e,m as ve,n as ye,p as be,r as C}from"./with-widget-canvas-Pu1XHS6L.js";import{n as xe,t as Se}from"./register-stats-mocks-CO3YbVDN.js";import{n as Ce,t as w}from"./force-stats-mock-state-BRM7fQfz.js";var T,E,D,O,we=e((()=>{T=`_root_xmjm2_1`,E=`_content_xmjm2_9`,D=`_backLink_xmjm2_16`,O={root:T,content:E,backLink:D}}));function k(e){return typeof e.label==`string`?e.label:String(e.label)}function Te(e){return{postId:e.id,label:k(e),value:e.value,previousValue:e.previousValue,href:e.href}}function Ee(e){return{label:k(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(Te),childrenHaveComparison:e.childrenHaveComparison}}function De({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:u}=l({...e,utmParam:t,max:n},{maxRows:n}),d=(r?.rows??[]).map(Ee),f=d.length===0&&s;return{data:d,hasComparison:i,isLoading:a,isFetching:o,isError:f,error:f?c:null,refetch:u}}var Oe=e((()=>{d()}));function ke({utmDimension:e,showReportLink:n}){let{reportParams:i}=ie(),a=he(e),{drillDownItem:s,drillDown:c,resetDrillDown:l}=te();(0,o.useEffect)(()=>{l()},[l,e]);let{data:u,hasComparison:d,isLoading:f,isFetching:m,isError:h,error:g,refetch:_}=De({reportParams:i,utmParam:e,max:10}),v=(0,o.useMemo)(()=>u.find(e=>e.label===s)??null,[u,s]),y=!!v?.children?.length,b=(0,o.useMemo)(()=>y?v?.children??[]:u,[u,y,v]),x=y?!!v?.childrenHaveComparison:d;(0,o.useEffect)(()=>{s&&!y&&!f&&!m&&!h&&l()},[s,y,f,m,h,l]);let S=(0,o.useMemo)(()=>{let e=re(b.map(e=>e.value),x?b.map(e=>e.previousValue):[]);return b.map((n,i)=>{let o=n.previousValue,s=`postId`in n?n:null,l=!y&&`children`in n&&!!n.children?.length;return{id:`${i}-${n.label}`,...s?{label:(0,j.jsx)(pe,{id:s.postId,label:s.label,link:s.href,origin:{report:`utm`,section:a}})}:le({label:n.label,media:{kind:`none`},action:ue({hasChildren:l,drillDown:{onClick:()=>c(n.label),ariaLabel:r(t(`View posts for %s`,`jetpack-premium-analytics-pkg`),n.label)}})}),currentValue:n.value,currentShare:p(n.value,e),previousValue:o,previousShare:x&&o!==void 0?p(o,e):void 0,delta:x&&o!==void 0?ne(n.value,o):void 0}})},[b,y,a,c,x]);return(0,j.jsxs)(j.Fragment,{children:[y?(0,j.jsx)(ce,{label:t(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:t(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:l,className:O.backLink}):null,(0,j.jsx)(`div`,{className:O.content,children:(0,j.jsx)(se,{isLoading:f,isFetching:m,isError:h,isEmpty:u.length===0,error:ee(g,{retryDescription:t(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:_}),renderLoading:(0,j.jsx)(oe,{rows:10}),children:(0,j.jsx)(ae,{data:S,withComparison:x,withOverlayLabel:!0,showLegend:!1,dataFormat:M})})}),n&&(0,j.jsxs)(de,{children:[(0,j.jsx)(fe,{report:`utm`,section:a}),(0,j.jsx)(me,{exporter:ge[a],status:{isLoading:f,isFetching:m,isError:h},rowCount:u.length})]})]})}function A({attributes:e={}}){let t=e.utmDimension??N,n=e.showReportLink??!0;return(0,j.jsx)(f,{attributes:e,children:(0,j.jsx)(`div`,{className:O.root,children:(0,j.jsx)(ke,{utmDimension:t,showReportLink:n})})})}var j,M,N,Ae=e((()=>{s(),n(),y(),we(),Oe(),j=i(),M={type:`number`,options:{useMultipliers:!0,decimals:0}},N=`utm_source,utm_medium`})),P,je=e((()=>{n(),c(),y(),P={icon:a,attributes:[{id:`utmDimension`,label:t(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:v(),relevance:`high`}],example:{attributes:{utmDimension:`utm_source,utm_medium`}}}})),F,I,L,R,z,B,V,Me=e((()=>{F=`jpa/utm-insights`,I=`Top UTM`,L=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,R={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`traffic`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H(e){return(0,U.jsx)(A,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:u(!1,e)}})}function Ne({withComparison:e,...t}){return(0,U.jsx)(ve,{...t,widgetType:Pe,renderModule:W,renderComponent:A,attributes:{utmDimension:`utm_source,utm_medium`,reportParams:u(e)}})}var U,W,Pe,Fe,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),S(),g(),b(),ye(),m(),Se(),Ce(),Ae(),je(),Me(),U=i(),h(),xe(),W=`storybook/utm-insights`,Pe=_e(V,P),Fe={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},G={render:({withComparison:e})=>(0,U.jsx)(A,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:u(e)}}),args:{withComparison:!1},decorators:[C,_]},K={render:({withComparison:e})=>(0,U.jsx)(A,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:u(e)}}),args:{withComparison:!0},decorators:[C,_]},q={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[C,_],beforeEach:()=>(w(`stats/utm`,`loading`),()=>w(`stats/utm`,null))},J={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[C,_],beforeEach:()=>(w(`stats/utm`,`error`),()=>w(`stats/utm`,null))},Y={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[C,_],beforeEach:()=>(w(`stats/utm`,`error-retryable`),()=>w(`stats/utm`,null))},X={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[C,_],beforeEach:()=>(w(`stats/utm`,`empty`),()=>w(`stats/utm`,null))},Z={render:({withComparison:e})=>(0,U.jsx)(A,{attributes:{utmDimension:`utm_campaign`,reportParams:u(e)}}),args:{withComparison:!1},decorators:[C,_]},Q={render:e=>(0,U.jsx)(Ne,{...e}),args:{...be,withComparison:!1},argTypes:{...x,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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