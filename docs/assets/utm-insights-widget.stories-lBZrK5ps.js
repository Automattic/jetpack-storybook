import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Ui as a,Uu as o,ju as s,t as c}from"./build-module-2iv4IIRq.js";import{X as l,Y as u,_t as d,b as ee,en as f,g as p,r as te,rn as ne,tn as re}from"./hooks-B2yFFi2C.js";import{b as ie,t as m}from"./src-C-E2d-Lb.js";import{$t as h,k as g,r as _}from"./date-period-dropdown-BEY2IP9Y.js";import"./constants-B1kGztHF.js";import{r as ae,t as oe}from"./leaderboard-skeleton-CInpLGMp.js";import{i as v,r as y}from"./register-report-mocks-DSWyIeBw.js";import{E as se,F as ce,N as le,S as ue,b as de,w as fe}from"./report-metric-CLz1bq_s.js";import{t as pe}from"./widget-state-DgCWdpl8.js";import{t as b}from"./src-C4OpgBRF.js";import{a as x,c as me,d as S,i as he,l as ge,n as _e,o as ve,r as C,s as ye,u as be}from"./with-widget-canvas-D6uWcVuJ.js";import{n as xe,t as Se}from"./register-stats-mocks-BMeCcFvu.js";import{n as Ce,t as w}from"./force-stats-mock-state-CVOamAoS.js";var T,E,D,O,we=e((()=>{T=`_root_xmjm2_1`,E=`_content_xmjm2_9`,D=`_backLink_xmjm2_16`,O={root:T,content:E,backLink:D}}));function k(e){return typeof e.label==`string`?e.label:String(e.label)}function Te(e){return{postId:e.id,label:k(e),value:e.value,previousValue:e.previousValue,href:e.href}}function Ee(e){return{label:k(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(Te),childrenHaveComparison:e.childrenHaveComparison}}function De({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=g({...e,utmParam:t,max:n},{maxRows:n}),u=(r?.rows??[]).map(Ee),d=u.length===0&&s;return{data:u,hasComparison:i,isLoading:a,isFetching:o,isError:d,error:d?c:null,refetch:l}}var Oe=e((()=>{_()}));function ke(e){switch(e){case`utm_source,utm_medium`:return`source-medium`;case`utm_campaign,utm_source,utm_medium`:return`campaign-source-medium`;case`utm_source`:return`source`;case`utm_medium`:return`medium`;case`utm_campaign`:return`campaign`}}function Ae({utmDimension:e,showReportLink:n}){let{reportParams:i}=ee(),{drillDownItem:a,drillDown:s,resetDrillDown:c}=te();(0,o.useEffect)(()=>{c()},[c,e]);let{data:l,hasComparison:u,isLoading:p,isFetching:m,isError:h,error:g,refetch:_}=De({reportParams:i,utmParam:e,max:10}),v=(0,o.useMemo)(()=>l.find(e=>e.label===a)??null,[l,a]),y=!!v?.children?.length,b=(0,o.useMemo)(()=>y?v?.children??[]:l,[l,y,v]),x=y?!!v?.childrenHaveComparison:u;(0,o.useEffect)(()=>{a&&!y&&!p&&!m&&!h&&c()},[a,y,p,m,h,c]);let me=(0,o.useMemo)(()=>{let e=re(b.map(e=>e.value),x?b.map(e=>e.previousValue):[]);return b.map((n,i)=>{let a=n.previousValue,o=`postId`in n?n:null,c=!y&&`children`in n&&!!n.children?.length;return{id:`${i}-${n.label}`,...o?{label:(0,j.jsx)(de,{id:o.postId,label:o.label,link:o.href})}:le({label:n.label,media:{kind:`none`},action:ce({hasChildren:c,drillDown:{onClick:()=>s(n.label),ariaLabel:r(t(`View posts for %s`,`jetpack-premium-analytics-pkg`),n.label)}})}),currentValue:n.value,currentShare:f(n.value,e),previousValue:a,previousShare:x&&a!==void 0?f(a,e):void 0,delta:x&&a!==void 0?ne(n.value,a):void 0}})},[b,y,s,x]);return(0,j.jsxs)(j.Fragment,{children:[y?(0,j.jsx)(se,{label:t(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:t(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:c,className:O.backLink}):null,(0,j.jsx)(`div`,{className:O.content,children:(0,j.jsx)(pe,{isLoading:p,isFetching:m,isError:h,isEmpty:l.length===0,error:d(g,{retryDescription:t(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:_}),empty:{icon:ie,description:t(`No UTM data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,j.jsx)(oe,{rows:10}),children:(0,j.jsx)(ae,{data:me,withComparison:x,withOverlayLabel:!0,showLegend:!1,dataFormat:M})})}),n&&(0,j.jsx)(fe,{children:(0,j.jsx)(ue,{report:`utm`,section:ke(e)})})]})}function A({attributes:e={}}){let t=e.utmDimension??N,n=e.showReportLink??!0;return(0,j.jsx)(p,{attributes:e,children:(0,j.jsx)(`div`,{className:O.root,children:(0,j.jsx)(Ae,{utmDimension:t,showReportLink:n})})})}var j,M,N,je=e((()=>{s(),n(),b(),m(),we(),Oe(),j=i(),M={type:`number`,options:{useMultipliers:!0,decimals:0}},N=`utm_source,utm_medium`})),P,Me=e((()=>{n(),c(),u(),P={icon:a,attributes:[{id:`utmDimension`,label:t(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:l,elements:[{label:t(`Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_source,utm_medium`},{label:t(`Campaign / Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_campaign,utm_source,utm_medium`},{label:t(`Source`,`jetpack-premium-analytics-pkg`),value:`utm_source`},{label:t(`Medium`,`jetpack-premium-analytics-pkg`),value:`utm_medium`},{label:t(`Campaign`,`jetpack-premium-analytics-pkg`),value:`utm_campaign`}],relevance:`high`}],example:{attributes:{utmDimension:`utm_source,utm_medium`}}}})),F,I,L,R,z,B,V,Ne=e((()=>{F=`jpa/utm-insights`,I=`Top UTM`,L=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,R={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`traffic`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H(e){return(0,U.jsx)(A,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:h(!1,e)}})}function Pe({withComparison:e,...t}){return(0,U.jsx)(ye,{...t,widgetType:Ie,renderModule:Fe,renderComponent:A,attributes:{utmDimension:`utm_source,utm_medium`,reportParams:h(e)}})}var U,Fe,Ie,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{_(),me(),be(),x(),_e(),y(),Se(),Ce(),je(),Me(),Ne(),U=i(),v(),xe(),Fe=`storybook/utm-insights`,Ie=he(V,P),W={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},G={render:({withComparison:e})=>(0,U.jsx)(A,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:h(e)}}),args:{withComparison:!1},decorators:[C,S]},K={render:({withComparison:e})=>(0,U.jsx)(A,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:h(e)}}),args:{withComparison:!0},decorators:[C,S]},q={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`loading`),()=>w(`stats/utm`,null))},J={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`error`),()=>w(`stats/utm`,null))},Y={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`error-retryable`),()=>w(`stats/utm`,null))},X={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`empty`),()=>w(`stats/utm`,null))},Z={render:({withComparison:e})=>(0,U.jsx)(A,{attributes:{utmDimension:`utm_campaign`,reportParams:h(e)}}),args:{withComparison:!1},decorators:[C,S]},Q={render:e=>(0,U.jsx)(Pe,{...e}),args:{...ve,withComparison:!1},argTypes:{...ge,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`ByCampaign`,`WidgetDashboardWithWidget`]}))();export{Z as ByCampaign,G as Default,X as Empty,J as Error,Y as ErrorRetryable,q as Loading,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,W as default};