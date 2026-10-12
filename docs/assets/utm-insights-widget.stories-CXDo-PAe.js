import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as ee}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Gu as i,Nu as a}from"./build-module-Cm3Kd3py.js";import{G as o,bn as s,t as c}from"./src-BpfkpQwv.js";import{$t as te,Xt as l,Zt as u,_ as d,o as ne,pt as re,x as ie}from"./charts-provider-DfI9xZDB.js";import"./rows-DAmD2BmE.js";import{r as ae,t as oe}from"./leaderboard-skeleton-DKpYmOO-.js";import{n as se,r as f}from"./register-report-mocks-BAq6QQnd.js";import{t as ce}from"./widget-state-B1_-b_3A.js";import{n as p,r as m}from"./with-story-router-Beljd9ki.js";import{g as le,i as ue,o as de,p as fe,y as pe}from"./leaderboard-BEi2lsKr.js";import{S as me,n as he}from"./components-arQVFUjk.js";import{a as h,c as ge,o as _e,t as g}from"./src-CDuaXFcR.js";import{a as _,g as v,h as y,i as b,m as x,n as ve,p as ye,r as S}from"./with-widget-canvas-CGHjNTJx.js";import{n as be,t as xe}from"./register-stats-mocks-CQXzTiIV.js";import{n as Se,t as C}from"./force-stats-mock-state-BX4vd1Qu.js";var w,T,E,D,Ce=e((()=>{w=`_root_xmjm2_1`,T=`_content_xmjm2_9`,E=`_backLink_xmjm2_16`,D={root:w,content:T,backLink:E}}));function O(e){return typeof e.label==`string`?e.label:String(e.label)}function we(e){return{postId:e.id,label:O(e),value:e.value,previousValue:e.previousValue,href:e.href}}function Te(e){return{label:O(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(we),childrenHaveComparison:e.childrenHaveComparison}}function Ee({reportParams:e,utmParam:t,max:n}){let{comparisonRows:ee,hasComparison:r,isLoading:i,isFetching:a,isError:s,error:c,refetch:te}=o({...e,utmParam:t,max:n},{maxRows:n}),l=(ee?.rows??[]).map(Te),u=l.length===0&&s;return{data:l,hasComparison:r,isLoading:i,isFetching:a,isError:u,error:u?c:null,refetch:te}}var De=e((()=>{c()}));function Oe({utmDimension:e,showReportLink:n}){let{reportParams:r}=ie(),a=_e(e),{drillDownItem:o,drillDown:s,resetDrillDown:c}=ne();(0,i.useEffect)(()=>{c()},[c,e]);let{data:d,hasComparison:se,isLoading:f,isFetching:p,isError:m,error:h,refetch:g}=Ee({reportParams:r,utmParam:e,max:10}),_=(0,i.useMemo)(()=>d.find(e=>e.label===o)??null,[d,o]),v=!!_?.children?.length,y=(0,i.useMemo)(()=>v?_?.children??[]:d,[d,v,_]),b=v?!!_?.childrenHaveComparison:se;(0,i.useEffect)(()=>{o&&!v&&!f&&!p&&!m&&c()},[o,v,f,p,m,c]);let x=(0,i.useMemo)(()=>{let e=u(y.map(e=>e.value),b?y.map(e=>e.previousValue):[]);return y.map((n,r)=>{let i=n.previousValue,o=`postId`in n?n:null,c=!v&&`children`in n&&!!n.children?.length;return{id:`${r}-${n.label}`,...o?{label:(0,A.jsx)(me,{id:o.postId,label:o.label,link:o.href,origin:{report:`utm`,section:a}})}:ue({label:n.label,media:{kind:`none`},action:de({hasChildren:c,drillDown:{onClick:()=>s(n.label),ariaLabel:ee(t(`View posts for %s`,`jetpack-premium-analytics-pkg`),n.label)}})}),currentValue:n.value,currentShare:l(n.value,e),previousValue:i,previousShare:b&&i!==void 0?l(i,e):void 0,delta:b&&i!==void 0?te(n.value,i):void 0}})},[y,v,a,s,b]);return(0,A.jsxs)(A.Fragment,{children:[v?(0,A.jsx)(le,{label:t(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:t(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:c,className:D.backLink}):null,(0,A.jsx)(`div`,{className:D.content,children:(0,A.jsx)(ce,{isLoading:f,isFetching:p,isError:m,isEmpty:d.length===0,error:re(h,{retryDescription:t(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:g}),renderLoading:(0,A.jsx)(oe,{rows:10}),children:(0,A.jsx)(ae,{data:x,withComparison:b,withOverlayLabel:!0,showLegend:!1,dataFormat:j})})}),n&&(0,A.jsxs)(fe,{children:[(0,A.jsx)(pe,{report:`utm`,section:a}),(0,A.jsx)(he,{exporter:ge[a],status:{isLoading:f,isFetching:p,isError:m},rowCount:d.length})]})]})}function k({attributes:e={}}){let t=e.utmDimension??M,n=e.showReportLink??!0;return(0,A.jsx)(d,{attributes:e,children:(0,A.jsx)(`div`,{className:D.root,children:(0,A.jsx)(Oe,{utmDimension:t,showReportLink:n})})})}var A,j,M,ke=e((()=>{a(),n(),g(),Ce(),De(),A=r(),j={type:`number`,options:{useMultipliers:!0,decimals:0}},M=`utm_source,utm_medium`})),N,Ae=e((()=>{n(),g(),N={attributes:[{id:`utmDimension`,label:t(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:h(),relevance:`high`}],example:{attributes:{utmDimension:`utm_source,utm_medium`}}}})),P,F,I,L,R,z,B,V,je=e((()=>{P=`jpa/utm-insights`,F=`jpa/megaphone`,I=`Top UTM`,L=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,R={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`traffic`,B=`framed`,V={name:P,icon:F,title:I,description:L,help:R,category:z,presentation:B}}));function H(e){return(0,U.jsx)(k,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:s(!1,e)}})}function Me({withComparison:e,...t}){return(0,U.jsx)(x,{...t,widgetType:G,renderModule:W,renderComponent:k,attributes:{utmDimension:`utm_source,utm_medium`,reportParams:s(e)}})}var U,W,G,Ne,K,q,J,Y,X,Z,Q,$,Pe;e((()=>{c(),y(),p(),_(),ve(),se(),xe(),Se(),ke(),Ae(),je(),U=r(),f(),be(),W=`storybook/utm-insights`,G=b(V,N),Ne={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},K={render:({withComparison:e})=>(0,U.jsx)(k,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:s(e)}}),args:{withComparison:!1},decorators:[S,m]},q={render:({withComparison:e})=>(0,U.jsx)(k,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:s(e)}}),args:{withComparison:!0},decorators:[S,m]},J={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[S,m],beforeEach:()=>(C(`stats/utm`,`loading`),()=>C(`stats/utm`,null))},Y={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[S,m],beforeEach:()=>(C(`stats/utm`,`error`),()=>C(`stats/utm`,null))},X={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[S,m],beforeEach:()=>(C(`stats/utm`,`error-retryable`),()=>C(`stats/utm`,null))},Z={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[S,m],beforeEach:()=>(C(`stats/utm`,`empty`),()=>C(`stats/utm`,null))},Q={render:({withComparison:e})=>(0,U.jsx)(k,{attributes:{utmDimension:`utm_campaign`,reportParams:s(e)}}),args:{withComparison:!1},decorators:[S,m]},$={render:e=>(0,U.jsx)(Me,{...e}),args:{...ye,withComparison:!1},argTypes:{...v,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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