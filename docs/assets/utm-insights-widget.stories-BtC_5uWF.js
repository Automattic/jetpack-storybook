import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Ui as a,Uu as o,ju as s,t as c}from"./build-module-2iv4IIRq.js";import{Ot as l,_n as u,hn as d,m as f,mn as p,r as ee,v as te}from"./hooks-BUZ9Zoks.js";import{b as ne,t as m}from"./src-C-E2d-Lb.js";import{$t as h,O as g,t as _}from"./src-Wxkln24X.js";import"./constants-B1kGztHF.js";import{r as re,t as ie}from"./leaderboard-skeleton-z3sFb1Mg.js";import{i as v,r as ae}from"./register-report-mocks-CqoR1wHP.js";import{N as oe,S as se,g as ce,j as le,v as ue,w as de}from"./report-metric-DXCWiM-I.js";import{t as fe}from"./widget-state-CxKn5D7s.js";import{t as y}from"./src-u1EzvIeu.js";import{a as b,d as x,f as S,h as C,i as pe,m as me,n as he,p as ge,r as w,u as _e}from"./with-widget-canvas-BUM4SWZO.js";import{n as ve,t as ye}from"./register-stats-mocks-CA8076M4.js";import{n as be,t as T}from"./force-stats-mock-state-CSHxnvOu.js";var xe,E,D,O,Se=e((()=>{xe=`_root_xmjm2_1`,E=`_content_xmjm2_9`,D=`_backLink_xmjm2_16`,O={root:xe,content:E,backLink:D}}));function Ce(e){return typeof e.label==`string`?e.label:String(e.label)}function we(e){return{postId:e.id,label:Ce(e),value:e.value,previousValue:e.previousValue,href:e.href}}function Te(e){return{label:Ce(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(we),childrenHaveComparison:e.childrenHaveComparison}}function Ee({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=g({...e,utmParam:t,max:n},{maxRows:n}),u=(r?.rows??[]).map(Te),d=u.length===0&&s;return{data:u,hasComparison:i,isLoading:a,isFetching:o,isError:d,error:d?c:null,refetch:l}}var De=e((()=>{_()}));function Oe(e){switch(e){case`utm_source,utm_medium`:return`source-medium`;case`utm_campaign,utm_source,utm_medium`:return`campaign-source-medium`;case`utm_source`:return`source`;case`utm_medium`:return`medium`;case`utm_campaign`:return`campaign`}}function ke({utmDimension:e,showReportLink:n}){let{reportParams:i}=te(),{drillDownItem:a,drillDown:s,resetDrillDown:c}=ee();(0,o.useEffect)(()=>{c()},[c,e]);let{data:f,hasComparison:m,isLoading:h,isFetching:g,isError:_,error:v,refetch:ae}=Ee({reportParams:i,utmParam:e,max:10}),y=(0,o.useMemo)(()=>f.find(e=>e.label===a)??null,[f,a]),b=!!y?.children?.length,x=(0,o.useMemo)(()=>b?y?.children??[]:f,[f,b,y]),S=b?!!y?.childrenHaveComparison:m;(0,o.useEffect)(()=>{a&&!b&&!h&&!g&&!_&&c()},[a,b,h,g,_,c]);let C=(0,o.useMemo)(()=>{let n=d(x.map(e=>e.value),S?x.map(e=>e.previousValue):[]);return x.map((i,a)=>{let o=i.previousValue,c=`postId`in i?i:null,l=!b&&`children`in i&&!!i.children?.length;return{id:`${a}-${i.label}`,...c?{label:(0,A.jsx)(ce,{id:c.postId,label:c.label,link:c.href,origin:{report:`utm`,section:Oe(e)}})}:le({label:i.label,media:{kind:`none`},action:oe({hasChildren:l,drillDown:{onClick:()=>s(i.label),ariaLabel:r(t(`View posts for %s`,`jetpack-premium-analytics-pkg`),i.label)}})}),currentValue:i.value,currentShare:p(i.value,n),previousValue:o,previousShare:S&&o!==void 0?p(o,n):void 0,delta:S&&o!==void 0?u(i.value,o):void 0}})},[x,b,s,e,S]);return(0,A.jsxs)(A.Fragment,{children:[b?(0,A.jsx)(de,{label:t(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:t(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:c,className:O.backLink}):null,(0,A.jsx)(`div`,{className:O.content,children:(0,A.jsx)(fe,{isLoading:h,isFetching:g,isError:_,isEmpty:f.length===0,error:l(v,{retryDescription:t(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:ae}),empty:{icon:ne,description:t(`No UTM data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,A.jsx)(ie,{rows:10}),children:(0,A.jsx)(re,{data:C,withComparison:S,withOverlayLabel:!0,showLegend:!1,dataFormat:j})})}),n&&(0,A.jsx)(se,{children:(0,A.jsx)(ue,{report:`utm`,section:Oe(e)})})]})}function k({attributes:e={}}){let t=e.utmDimension??M,n=e.showReportLink??!0;return(0,A.jsx)(f,{attributes:e,children:(0,A.jsx)(`div`,{className:O.root,children:(0,A.jsx)(ke,{utmDimension:t,showReportLink:n})})})}var A,j,M,Ae=e((()=>{s(),n(),y(),m(),Se(),De(),A=i(),j={type:`number`,options:{useMultipliers:!0,decimals:0}},M=`utm_source,utm_medium`})),N,je=e((()=>{n(),c(),N={icon:a,attributes:[{id:`utmDimension`,label:t(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:[{label:t(`Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_source,utm_medium`},{label:t(`Campaign / Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_campaign,utm_source,utm_medium`},{label:t(`Source`,`jetpack-premium-analytics-pkg`),value:`utm_source`},{label:t(`Medium`,`jetpack-premium-analytics-pkg`),value:`utm_medium`},{label:t(`Campaign`,`jetpack-premium-analytics-pkg`),value:`utm_campaign`}],relevance:`high`}],example:{attributes:{utmDimension:`utm_source,utm_medium`}}}})),P,F,I,L,R,z,B,Me=e((()=>{P=`jpa/utm-insights`,F=`Top UTM`,I=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,L={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},R=`traffic`,z=`framed`,B={name:P,title:F,description:I,help:L,category:R,presentation:z}}));function V(e){return(0,H.jsx)(k,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:h(!1,e)}})}function Ne({withComparison:e,...t}){return(0,H.jsx)(x,{...t,widgetType:W,renderModule:U,renderComponent:k,attributes:{utmDimension:`utm_source,utm_medium`,reportParams:h(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$,Pe;e((()=>{_(),S(),me(),b(),he(),ae(),ye(),be(),Ae(),je(),Me(),H=i(),v(),ve(),U=`storybook/utm-insights`,W=pe(B,N),G={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:k,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},K={render:({withComparison:e})=>(0,H.jsx)(k,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:h(e)}}),args:{withComparison:!1},decorators:[w,C]},q={render:({withComparison:e})=>(0,H.jsx)(k,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:h(e)}}),args:{withComparison:!0},decorators:[w,C]},J={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(T(`stats/utm`,`loading`),()=>T(`stats/utm`,null))},Y={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(T(`stats/utm`,`error`),()=>T(`stats/utm`,null))},X={render:()=>V(`last-12-months`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(T(`stats/utm`,`error-retryable`),()=>T(`stats/utm`,null))},Z={render:()=>V(`last-year`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(T(`stats/utm`,`empty`),()=>T(`stats/utm`,null))},Q={render:({withComparison:e})=>(0,H.jsx)(k,{attributes:{utmDimension:`utm_campaign`,reportParams:h(e)}}),args:{withComparison:!1},decorators:[w,C]},$={render:e=>(0,H.jsx)(Ne,{...e}),args:{..._e,withComparison:!1},argTypes:{...ge,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},Pe=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`ByCampaign`,`WidgetDashboardWithWidget`]}))();export{Q as ByCampaign,K as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,$ as WidgetDashboardWithWidget,q as WithComparison,Pe as __namedExportsOrder,G as default};