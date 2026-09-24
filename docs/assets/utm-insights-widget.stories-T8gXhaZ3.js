import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Ui as a,Uu as o,ju as s,t as c}from"./build-module-2iv4IIRq.js";import{m as l,r as u,v as d}from"./hooks-EqexNIS_.js";import{b as ee,t as f}from"./src-C-E2d-Lb.js";import{$t as p,O as m,t as h}from"./src-4QblZ5-B.js";import{B as te,Dt as ne,Et as re,kt as ie}from"./helpers-CSCeMBg5.js";import"./constants-B1kGztHF.js";import{r as ae,t as oe}from"./leaderboard-skeleton-ChaGJDb0.js";import{i as se,r as ce}from"./register-report-mocks-Zvgfz9a1.js";import{N as le,S as ue,g as de,j as fe,v as pe,w as me}from"./report-metric-Dgms60JT.js";import{t as he}from"./widget-state-JaaSW8Bs.js";import{t as g}from"./src-CQ6Dbsxx.js";import{a as _,d as v,f as y,h as b,i as ge,m as _e,n as ve,p as ye,r as x,u as be}from"./with-widget-canvas-CHaoTy9y.js";import{n as xe,t as Se}from"./register-stats-mocks-Bypb9TWM.js";import{n as Ce,t as S}from"./force-stats-mock-state-CjIA0MNM.js";var C,w,T,E,we=e((()=>{C=`_root_xmjm2_1`,w=`_content_xmjm2_9`,T=`_backLink_xmjm2_16`,E={root:C,content:w,backLink:T}}));function D(e){return typeof e.label==`string`?e.label:String(e.label)}function Te(e){return{postId:e.id,label:D(e),value:e.value,previousValue:e.previousValue,href:e.href}}function Ee(e){return{label:D(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(Te),childrenHaveComparison:e.childrenHaveComparison}}function De({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=m({...e,utmParam:t,max:n},{maxRows:n}),u=(r?.rows??[]).map(Ee),d=u.length===0&&s;return{data:u,hasComparison:i,isLoading:a,isFetching:o,isError:d,error:d?c:null,refetch:l}}var Oe=e((()=>{h()}));function O(e){switch(e){case`utm_source,utm_medium`:return`source-medium`;case`utm_campaign,utm_source,utm_medium`:return`campaign-source-medium`;case`utm_source`:return`source`;case`utm_medium`:return`medium`;case`utm_campaign`:return`campaign`}}function ke({utmDimension:e,showReportLink:n}){let{reportParams:i}=d(),{drillDownItem:a,drillDown:s,resetDrillDown:c}=u();(0,o.useEffect)(()=>{c()},[c,e]);let{data:l,hasComparison:f,isLoading:p,isFetching:m,isError:h,error:se,refetch:ce}=De({reportParams:i,utmParam:e,max:10}),g=(0,o.useMemo)(()=>l.find(e=>e.label===a)??null,[l,a]),_=!!g?.children?.length,v=(0,o.useMemo)(()=>_?g?.children??[]:l,[l,_,g]),y=_?!!g?.childrenHaveComparison:f;(0,o.useEffect)(()=>{a&&!_&&!p&&!m&&!h&&c()},[a,_,p,m,h,c]);let b=(0,o.useMemo)(()=>{let n=ne(v.map(e=>e.value),y?v.map(e=>e.previousValue):[]);return v.map((i,a)=>{let o=i.previousValue,c=`postId`in i?i:null,l=!_&&`children`in i&&!!i.children?.length;return{id:`${a}-${i.label}`,...c?{label:(0,A.jsx)(de,{id:c.postId,label:c.label,link:c.href,origin:{report:`utm`,section:O(e)}})}:fe({label:i.label,media:{kind:`none`},action:le({hasChildren:l,drillDown:{onClick:()=>s(i.label),ariaLabel:r(t(`View posts for %s`,`jetpack-premium-analytics-pkg`),i.label)}})}),currentValue:i.value,currentShare:re(i.value,n),previousValue:o,previousShare:y&&o!==void 0?re(o,n):void 0,delta:y&&o!==void 0?ie(i.value,o):void 0}})},[v,_,s,e,y]);return(0,A.jsxs)(A.Fragment,{children:[_?(0,A.jsx)(me,{label:t(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:t(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:c,className:E.backLink}):null,(0,A.jsx)(`div`,{className:E.content,children:(0,A.jsx)(he,{isLoading:p,isFetching:m,isError:h,isEmpty:l.length===0,error:te(se,{retryDescription:t(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:ce}),empty:{icon:ee,description:t(`No UTM data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,A.jsx)(oe,{rows:10}),children:(0,A.jsx)(ae,{data:b,withComparison:y,withOverlayLabel:!0,showLegend:!1,dataFormat:j})})}),n&&(0,A.jsx)(ue,{children:(0,A.jsx)(pe,{report:`utm`,section:O(e)})})]})}function k({attributes:e={}}){let t=e.utmDimension??M,n=e.showReportLink??!0;return(0,A.jsx)(l,{attributes:e,children:(0,A.jsx)(`div`,{className:E.root,children:(0,A.jsx)(ke,{utmDimension:t,showReportLink:n})})})}var A,j,M,Ae=e((()=>{s(),n(),g(),f(),we(),Oe(),A=i(),j={type:`number`,options:{useMultipliers:!0,decimals:0}},M=`utm_source,utm_medium`})),N,je=e((()=>{n(),c(),N={icon:a,attributes:[{id:`utmDimension`,label:t(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:[{label:t(`Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_source,utm_medium`},{label:t(`Campaign / Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_campaign,utm_source,utm_medium`},{label:t(`Source`,`jetpack-premium-analytics-pkg`),value:`utm_source`},{label:t(`Medium`,`jetpack-premium-analytics-pkg`),value:`utm_medium`},{label:t(`Campaign`,`jetpack-premium-analytics-pkg`),value:`utm_campaign`}],relevance:`high`}],example:{attributes:{utmDimension:`utm_source,utm_medium`}}}})),P,F,I,L,R,z,B,Me=e((()=>{P=`jpa/utm-insights`,F=`Top UTM`,I=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,L={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`traffic`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V(e){return(0,H.jsx)(k,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:p(!1,e)}})}function Ne({withComparison:e,...t}){return(0,H.jsx)(v,{...t,widgetType:W,renderModule:U,renderComponent:k,attributes:{utmDimension:`utm_source,utm_medium`,reportParams:p(e)}})}var H,U,W,Pe,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),y(),_e(),_(),ve(),ce(),Se(),Ce(),Ae(),je(),Me(),H=i(),se(),xe(),U=`storybook/utm-insights`,W=ge(B,N),Pe={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},G={render:({withComparison:e})=>(0,H.jsx)(k,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:p(e)}}),args:{withComparison:!1},decorators:[x,b]},K={render:({withComparison:e})=>(0,H.jsx)(k,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:p(e)}}),args:{withComparison:!0},decorators:[x,b]},q={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[x,b],beforeEach:()=>(S(`stats/utm`,`loading`),()=>S(`stats/utm`,null))},J={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[x,b],beforeEach:()=>(S(`stats/utm`,`error`),()=>S(`stats/utm`,null))},Y={render:()=>V(`last-12-months`),tags:[`!autodocs`],decorators:[x,b],beforeEach:()=>(S(`stats/utm`,`error-retryable`),()=>S(`stats/utm`,null))},X={render:()=>V(`last-year`),tags:[`!autodocs`],decorators:[x,b],beforeEach:()=>(S(`stats/utm`,`empty`),()=>S(`stats/utm`,null))},Z={render:({withComparison:e})=>(0,H.jsx)(k,{attributes:{utmDimension:`utm_campaign`,reportParams:p(e)}}),args:{withComparison:!1},decorators:[x,b]},Q={render:e=>(0,H.jsx)(Ne,{...e}),args:{...be,withComparison:!1},argTypes:{...ye,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the neutral megaphone
glyph and "No UTM data in this period.").`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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