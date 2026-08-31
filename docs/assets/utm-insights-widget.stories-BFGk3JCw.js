import{i as e}from"./preload-helper-usAeo7Bx.js";import{S as t,n,t as r}from"./build-module-DyKOxfM8.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{h as a,t as o}from"./build-module-DuNGIx6S.js";import{Ui as s,t as c}from"./build-module-CR6EsQjA.js";import{b as l,g as u,r as d}from"./hooks-D19y4jDt.js";import{b as ee,t as f}from"./src-CldFJNXL.js";import{D as p,Zt as m,t as h}from"./src-CXH18irA.js";import"./constants-B1kGztHF.js";import{A as te,f as ne,gt as re,mt as ie,p as ae,pt as oe}from"./chart-tooltip-pHqRyAI_.js";import{r as se,t as ce}from"./leaderboard-skeleton-BZRnOklj.js";import{F as le,G as g,K as _,N as ue,S as de,b as fe,v as pe,w as me}from"./report-metric-C9G1FcBt.js";import{t as he}from"./widget-state-Ch8gvJPj.js";import{C as v,D as y,E as b,O as ge,S as _e,T as ve,b as ye,k as x,t as be,w as xe,x as S}from"./src-BnSstmZC.js";import{n as Se,t as Ce}from"./register-stats-mocks-D1iKa4Cg.js";import{n as we,t as C}from"./force-stats-mock-state-DbpJryh8.js";var w,T,E,D,Te=e((()=>{w=`_root_xmjm2_1`,T=`_content_xmjm2_9`,E=`_backLink_xmjm2_16`,D={root:w,content:T,backLink:E}}));function O(e){return typeof e.label==`string`?e.label:String(e.label)}function Ee(e){return{postId:e.id,label:O(e),value:e.value,previousValue:e.previousValue,href:e.href}}function De(e){return{label:O(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(Ee),childrenHaveComparison:e.childrenHaveComparison}}function Oe({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=p({...e,utmParam:t,max:n},{maxRows:n}),u=(r?.rows??[]).map(De),d=u.length===0&&s;return{data:u,hasComparison:i,isLoading:a,isFetching:o,isError:d,error:d?c:null,refetch:l}}var ke=e((()=>{h()}));function Ae(e){switch(e){case`utm_source,utm_medium`:return`source-medium`;case`utm_campaign,utm_source,utm_medium`:return`campaign-source-medium`;case`utm_source`:return`source`;case`utm_medium`:return`medium`;case`utm_campaign`:return`campaign`}}function je({utmDimension:e,showReportLink:r}){let{reportParams:i}=l(),{drillDownItem:o,drillDown:s,resetDrillDown:c}=d();(0,a.useEffect)(()=>{c()},[c,e]);let{data:u,hasComparison:f,isLoading:p,isFetching:m,isError:h,error:ne,refetch:ae}=Oe({reportParams:i,utmParam:e,max:10}),g=(0,a.useMemo)(()=>u.find(e=>e.label===o)??null,[u,o]),_=!!g?.children?.length,v=(0,a.useMemo)(()=>_?g?.children??[]:u,[u,_,g]),y=_?!!g?.childrenHaveComparison:f;(0,a.useEffect)(()=>{o&&!_&&!p&&!m&&!h&&c()},[o,_,p,m,h,c]);let b=(0,a.useMemo)(()=>{let e=ie(v.map(e=>e.value),y?v.map(e=>e.previousValue):[]);return v.map((r,i)=>{let a=r.previousValue,o=`postId`in r?r:null,c=!_&&`children`in r&&!!r.children?.length;return{id:`${i}-${r.label}`,...o?{label:(0,A.jsx)(pe,{id:o.postId,label:o.label,link:o.href})}:ue({label:r.label,media:{kind:`none`},action:le({hasChildren:c,drillDown:{onClick:()=>s(r.label),ariaLabel:t(n(`View posts for %s`,`jetpack-premium-analytics-pkg`),r.label)}})}),currentValue:r.value,currentShare:oe(r.value,e),previousValue:a,previousShare:y&&a!==void 0?oe(a,e):void 0,delta:y&&a!==void 0?re(r.value,a):void 0}})},[v,_,s,y]);return(0,A.jsxs)(A.Fragment,{children:[_?(0,A.jsx)(me,{label:n(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:c,className:D.backLink}):null,(0,A.jsx)(`div`,{className:D.content,children:(0,A.jsx)(he,{isLoading:p,isFetching:m,isError:h,isEmpty:u.length===0,error:te(ne,{retryDescription:n(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:ae}),empty:{icon:ee,description:n(`No UTM data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,A.jsx)(ce,{rows:10}),children:(0,A.jsx)(se,{data:b,withComparison:y,withOverlayLabel:!0,showLegend:!1,dataFormat:j})})}),r&&(0,A.jsx)(de,{children:(0,A.jsx)(fe,{report:`utm`,section:Ae(e)})})]})}function k({attributes:e={}}){let t=e.utmDimension??M,n=e.showReportLink??!0;return(0,A.jsx)(u,{attributes:e,children:(0,A.jsx)(`div`,{className:D.root,children:(0,A.jsx)(je,{utmDimension:t,showReportLink:n})})})}var A,j,M,Me=e((()=>{o(),r(),be(),f(),Te(),ke(),A=i(),j={type:`number`,options:{useMultipliers:!0,decimals:0}},M=`utm_source,utm_medium`})),N,Ne=e((()=>{r(),c(),ne(),N={icon:s,attributes:[{id:`utmDimension`,label:n(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:ae,elements:[{label:n(`Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_source,utm_medium`},{label:n(`Campaign / Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_campaign,utm_source,utm_medium`},{label:n(`Source`,`jetpack-premium-analytics-pkg`),value:`utm_source`},{label:n(`Medium`,`jetpack-premium-analytics-pkg`),value:`utm_medium`},{label:n(`Campaign`,`jetpack-premium-analytics-pkg`),value:`utm_campaign`}],relevance:`high`}],example:{attributes:{utmDimension:`utm_source,utm_medium`}}}})),P,F,I,L,R,z,B,Pe=e((()=>{P=`jpa/utm-insights`,F=`Top UTM`,I=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,L={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`traffic`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V(e){return(0,H.jsx)(k,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:m(!1,e)}})}function Fe({withComparison:e,...t}){return(0,H.jsx)(ve,{...t,widgetType:W,renderModule:U,renderComponent:k,attributes:{utmDimension:`utm_source,utm_medium`,reportParams:m(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$,Ie;e((()=>{h(),b(),ge(),v(),ye(),g(),Ce(),we(),Me(),Ne(),Pe(),H=i(),_(),Se(),U=`storybook/utm-insights`,W=_e(B,N),G={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},K={render:({withComparison:e})=>(0,H.jsx)(k,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:m(e)}}),args:{withComparison:!1},decorators:[S,x]},q={render:({withComparison:e})=>(0,H.jsx)(k,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:m(e)}}),args:{withComparison:!0},decorators:[S,x]},J={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/utm`,`loading`),()=>C(`stats/utm`,null))},Y={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/utm`,`error`),()=>C(`stats/utm`,null))},X={render:()=>V(`last-12-months`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/utm`,`error-retryable`),()=>C(`stats/utm`,null))},Z={render:()=>V(`last-year`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/utm`,`empty`),()=>C(`stats/utm`,null))},Q={render:({withComparison:e})=>(0,H.jsx)(k,{attributes:{utmDimension:`utm_campaign`,reportParams:m(e)}}),args:{withComparison:!1},decorators:[S,x]},$={render:e=>(0,H.jsx)(Fe,{...e}),args:{...xe,withComparison:!1},argTypes:{...y,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Resolved with no rows: the widget shows its empty state (the neutral megaphone
glyph and "No UTM data in this period.").`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},Ie=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`ByCampaign`,`WidgetDashboardWithWidget`]}))();export{Q as ByCampaign,K as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,$ as WidgetDashboardWithWidget,q as WithComparison,Ie as __namedExportsOrder,G as default};