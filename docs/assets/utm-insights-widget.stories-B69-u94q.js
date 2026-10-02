import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Vi as a,Vu as o,ku as s,t as c}from"./build-module-DNhkEVJn.js";import{m as l,r as u,v as d}from"./hooks-DL0t8WIQ.js";import{P as f,cn as p,t as m}from"./src-TZV2Rk0k.js";import{B as ee,Et as te,Ot as ne,Tt as re}from"./helpers-DTVO-AEk.js";import"./rows-DAmD2BmE.js";import{r as ie,t as ae}from"./leaderboard-skeleton-DOcxvMIQ.js";import{n as h,r as g}from"./with-story-router-BLYkc_Jj.js";import{n as _,r as v}from"./register-report-mocks-DxQLJVG5.js";import{_ as oe,b as se,i as ce,m as le,o as ue}from"./leaderboard-BcI1F6ms.js";import{t as de}from"./widget-state-DEA3Vv2o.js";import{u as fe}from"./report-metric-C7lyFKeP.js";import{t as y}from"./src-CuxT1ITx.js";import{a as b,d as x,f as pe,i as me,n as he,p as ge,r as S,u as _e}from"./with-widget-canvas-C-_5NMbJ.js";import{n as ve,t as ye}from"./register-stats-mocks-C5plC8jN.js";import{n as be,t as C}from"./force-stats-mock-state-CJzcHmKN.js";var w,T,E,D,xe=e((()=>{w=`_root_xmjm2_1`,T=`_content_xmjm2_9`,E=`_backLink_xmjm2_16`,D={root:w,content:T,backLink:E}}));function O(e){return typeof e.label==`string`?e.label:String(e.label)}function Se(e){return{postId:e.id,label:O(e),value:e.value,previousValue:e.previousValue,href:e.href}}function Ce(e){return{label:O(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(Se),childrenHaveComparison:e.childrenHaveComparison}}function we({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=f({...e,utmParam:t,max:n},{maxRows:n}),u=(r?.rows??[]).map(Ce),d=u.length===0&&s;return{data:u,hasComparison:i,isLoading:a,isFetching:o,isError:d,error:d?c:null,refetch:l}}var Te=e((()=>{m()}));function k(e){switch(e){case`utm_source,utm_medium`:return`source-medium`;case`utm_campaign,utm_source,utm_medium`:return`campaign-source-medium`;case`utm_source`:return`source`;case`utm_medium`:return`medium`;case`utm_campaign`:return`campaign`}}function Ee({utmDimension:e,showReportLink:n}){let{reportParams:i}=d(),{drillDownItem:a,drillDown:s,resetDrillDown:c}=u();(0,o.useEffect)(()=>{c()},[c,e]);let{data:l,hasComparison:f,isLoading:p,isFetching:m,isError:h,error:g,refetch:_}=we({reportParams:i,utmParam:e,max:10}),v=(0,o.useMemo)(()=>l.find(e=>e.label===a)??null,[l,a]),y=!!v?.children?.length,b=(0,o.useMemo)(()=>y?v?.children??[]:l,[l,y,v]),x=y?!!v?.childrenHaveComparison:f;(0,o.useEffect)(()=>{a&&!y&&!p&&!m&&!h&&c()},[a,y,p,m,h,c]);let pe=(0,o.useMemo)(()=>{let n=te(b.map(e=>e.value),x?b.map(e=>e.previousValue):[]);return b.map((i,a)=>{let o=i.previousValue,c=`postId`in i?i:null,l=!y&&`children`in i&&!!i.children?.length;return{id:`${a}-${i.label}`,...c?{label:(0,j.jsx)(fe,{id:c.postId,label:c.label,link:c.href,origin:{report:`utm`,section:k(e)}})}:ce({label:i.label,media:{kind:`none`},action:ue({hasChildren:l,drillDown:{onClick:()=>s(i.label),ariaLabel:r(t(`View posts for %s`,`jetpack-premium-analytics-pkg`),i.label)}})}),currentValue:i.value,currentShare:re(i.value,n),previousValue:o,previousShare:x&&o!==void 0?re(o,n):void 0,delta:x&&o!==void 0?ne(i.value,o):void 0}})},[b,y,s,e,x]);return(0,j.jsxs)(j.Fragment,{children:[y?(0,j.jsx)(oe,{label:t(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:t(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:c,className:D.backLink}):null,(0,j.jsx)(`div`,{className:D.content,children:(0,j.jsx)(de,{isLoading:p,isFetching:m,isError:h,isEmpty:l.length===0,error:ee(g,{retryDescription:t(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:_}),renderLoading:(0,j.jsx)(ae,{rows:10}),children:(0,j.jsx)(ie,{data:pe,withComparison:x,withOverlayLabel:!0,showLegend:!1,dataFormat:M})})}),n&&(0,j.jsx)(le,{children:(0,j.jsx)(se,{report:`utm`,section:k(e)})})]})}function A({attributes:e={}}){let t=e.utmDimension??N,n=e.showReportLink??!0;return(0,j.jsx)(l,{attributes:e,children:(0,j.jsx)(`div`,{className:D.root,children:(0,j.jsx)(Ee,{utmDimension:t,showReportLink:n})})})}var j,M,N,De=e((()=>{s(),n(),y(),xe(),Te(),j=i(),M={type:`number`,options:{useMultipliers:!0,decimals:0}},N=`utm_source,utm_medium`})),P,Oe=e((()=>{n(),c(),P={icon:a,attributes:[{id:`utmDimension`,label:t(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`jpa/select`,elements:[{label:t(`Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_source,utm_medium`},{label:t(`Campaign / Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_campaign,utm_source,utm_medium`},{label:t(`Source`,`jetpack-premium-analytics-pkg`),value:`utm_source`},{label:t(`Medium`,`jetpack-premium-analytics-pkg`),value:`utm_medium`},{label:t(`Campaign`,`jetpack-premium-analytics-pkg`),value:`utm_campaign`}],relevance:`high`}],example:{attributes:{utmDimension:`utm_source,utm_medium`}}}})),F,I,L,R,z,B,V,ke=e((()=>{F=`jpa/utm-insights`,I=`Top UTM`,L=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,R={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`traffic`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H(e){return(0,U.jsx)(A,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:p(!1,e)}})}function Ae({withComparison:e,...t}){return(0,U.jsx)(x,{...t,widgetType:Me,renderModule:je,renderComponent:A,attributes:{utmDimension:`utm_source,utm_medium`,reportParams:p(e)}})}var U,je,Me,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),pe(),h(),b(),he(),_(),ye(),be(),De(),Oe(),ke(),U=i(),v(),ve(),je=`storybook/utm-insights`,Me=me(V,P),W={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},G={render:({withComparison:e})=>(0,U.jsx)(A,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:p(e)}}),args:{withComparison:!1},decorators:[S,g]},K={render:({withComparison:e})=>(0,U.jsx)(A,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:p(e)}}),args:{withComparison:!0},decorators:[S,g]},q={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[S,g],beforeEach:()=>(C(`stats/utm`,`loading`),()=>C(`stats/utm`,null))},J={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[S,g],beforeEach:()=>(C(`stats/utm`,`error`),()=>C(`stats/utm`,null))},Y={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[S,g],beforeEach:()=>(C(`stats/utm`,`error-retryable`),()=>C(`stats/utm`,null))},X={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[S,g],beforeEach:()=>(C(`stats/utm`,`empty`),()=>C(`stats/utm`,null))},Z={render:({withComparison:e})=>(0,U.jsx)(A,{attributes:{utmDimension:`utm_campaign`,reportParams:p(e)}}),args:{withComparison:!1},decorators:[S,g]},Q={render:e=>(0,U.jsx)(Ae,{...e}),args:{..._e,withComparison:!1},argTypes:{...ge,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`ByCampaign`,`WidgetDashboardWithWidget`]}))();export{Z as ByCampaign,G as Default,X as Empty,J as Error,Y as ErrorRetryable,q as Loading,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,W as default};