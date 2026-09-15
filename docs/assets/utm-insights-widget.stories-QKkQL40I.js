import{i as e}from"./preload-helper-usAeo7Bx.js";import{f as t,n,t as r}from"./build-module-yGZutq_9.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Gi as a,Gu as o,Nu as s,t as c}from"./build-module-zwSmKorH.js";import{C as ee,J as l,Qt as u,Y as d,Zt as f,en as te,mt as ne,o as re,y as p}from"./wp-date-settings-CW5FZTJ_.js";import{b as ie,t as m}from"./src-DFNM1k7F.js";import{A as h,en as g,i as _}from"./date-filters-panel-0XPBEx-6.js";import"./constants-B1kGztHF.js";import{r as ae,t as oe}from"./leaderboard-skeleton-BMjM8a-9.js";import{N as se,S as ce,U as v,W as y,b as le,j as ue,v as de,w as fe}from"./report-metric-BTOc0d-U.js";import{t as pe}from"./widget-state-DMe2VpLE.js";import{C as b,D as x,E as me,O as he,S as ge,T as _e,b as ve,k as S,t as ye,w as be,x as C}from"./src-Do5nX7h4.js";import{n as xe,t as Se}from"./register-stats-mocks-7UMIRCLL.js";import{n as Ce,t as w}from"./force-stats-mock-state-CYw_KwMg.js";var T,we,Te,E,Ee=e((()=>{T=`_root_xmjm2_1`,we=`_content_xmjm2_9`,Te=`_backLink_xmjm2_16`,E={root:T,content:we,backLink:Te}}));function D(e){return typeof e.label==`string`?e.label:String(e.label)}function De(e){return{postId:e.id,label:D(e),value:e.value,previousValue:e.previousValue,href:e.href}}function Oe(e){return{label:D(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(De),childrenHaveComparison:e.childrenHaveComparison}}function ke({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:ee}=h({...e,utmParam:t,max:n},{maxRows:n}),l=(r?.rows??[]).map(Oe),u=l.length===0&&s;return{data:l,hasComparison:i,isLoading:a,isFetching:o,isError:u,error:u?c:null,refetch:ee}}var Ae=e((()=>{_()}));function je(e){switch(e){case`utm_source,utm_medium`:return`source-medium`;case`utm_campaign,utm_source,utm_medium`:return`campaign-source-medium`;case`utm_source`:return`source`;case`utm_medium`:return`medium`;case`utm_campaign`:return`campaign`}}function Me({utmDimension:e,showReportLink:r}){let{reportParams:i}=ee(),{drillDownItem:a,drillDown:s,resetDrillDown:c}=re();(0,o.useEffect)(()=>{c()},[c,e]);let{data:l,hasComparison:d,isLoading:p,isFetching:m,isError:h,error:g,refetch:_}=ke({reportParams:i,utmParam:e,max:10}),v=(0,o.useMemo)(()=>l.find(e=>e.label===a)??null,[l,a]),y=!!v?.children?.length,b=(0,o.useMemo)(()=>y?v?.children??[]:l,[l,y,v]),x=y?!!v?.childrenHaveComparison:d;(0,o.useEffect)(()=>{a&&!y&&!p&&!m&&!h&&c()},[a,y,p,m,h,c]);let me=(0,o.useMemo)(()=>{let e=u(b.map(e=>e.value),x?b.map(e=>e.previousValue):[]);return b.map((r,i)=>{let a=r.previousValue,o=`postId`in r?r:null,c=!y&&`children`in r&&!!r.children?.length;return{id:`${i}-${r.label}`,...o?{label:(0,k.jsx)(de,{id:o.postId,label:o.label,link:o.href})}:ue({label:r.label,media:{kind:`none`},action:se({hasChildren:c,drillDown:{onClick:()=>s(r.label),ariaLabel:t(n(`View posts for %s`,`jetpack-premium-analytics-pkg`),r.label)}})}),currentValue:r.value,currentShare:f(r.value,e),previousValue:a,previousShare:x&&a!==void 0?f(a,e):void 0,delta:x&&a!==void 0?te(r.value,a):void 0}})},[b,y,s,x]);return(0,k.jsxs)(k.Fragment,{children:[y?(0,k.jsx)(fe,{label:n(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:c,className:E.backLink}):null,(0,k.jsx)(`div`,{className:E.content,children:(0,k.jsx)(pe,{isLoading:p,isFetching:m,isError:h,isEmpty:l.length===0,error:ne(g,{retryDescription:n(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:_}),empty:{icon:ie,description:n(`No UTM data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,k.jsx)(oe,{rows:10}),children:(0,k.jsx)(ae,{data:me,withComparison:x,withOverlayLabel:!0,showLegend:!1,dataFormat:A})})}),r&&(0,k.jsx)(ce,{children:(0,k.jsx)(le,{report:`utm`,section:je(e)})})]})}function O({attributes:e={}}){let t=e.utmDimension??j,n=e.showReportLink??!0;return(0,k.jsx)(p,{attributes:e,children:(0,k.jsx)(`div`,{className:E.root,children:(0,k.jsx)(Me,{utmDimension:t,showReportLink:n})})})}var k,A,j,Ne=e((()=>{s(),r(),ye(),m(),Ee(),Ae(),k=i(),A={type:`number`,options:{useMultipliers:!0,decimals:0}},j=`utm_source,utm_medium`})),M,Pe=e((()=>{r(),c(),l(),M={icon:a,attributes:[{id:`utmDimension`,label:n(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:d,elements:[{label:n(`Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_source,utm_medium`},{label:n(`Campaign / Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_campaign,utm_source,utm_medium`},{label:n(`Source`,`jetpack-premium-analytics-pkg`),value:`utm_source`},{label:n(`Medium`,`jetpack-premium-analytics-pkg`),value:`utm_medium`},{label:n(`Campaign`,`jetpack-premium-analytics-pkg`),value:`utm_campaign`}],relevance:`high`}],example:{attributes:{utmDimension:`utm_source,utm_medium`}}}})),N,P,F,I,L,R,z,Fe=e((()=>{N=`jpa/utm-insights`,P=`Top UTM`,F=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,I={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},L=`traffic`,R=`framed`,z={name:N,title:P,description:F,help:I,category:L,presentation:R}}));function B(e){return(0,V.jsx)(O,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:g(!1,e)}})}function Ie({withComparison:e,...t}){return(0,V.jsx)(_e,{...t,widgetType:U,renderModule:H,renderComponent:O,attributes:{utmDimension:`utm_source,utm_medium`,reportParams:g(e)}})}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{_(),me(),he(),b(),ve(),v(),Se(),Ce(),Ne(),Pe(),Fe(),V=i(),y(),xe(),H=`storybook/utm-insights`,U=ge(z,M),W={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:O,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},G={render:({withComparison:e})=>(0,V.jsx)(O,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:g(e)}}),args:{withComparison:!1},decorators:[C,S]},K={render:({withComparison:e})=>(0,V.jsx)(O,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:g(e)}}),args:{withComparison:!0},decorators:[C,S]},q={render:()=>B(`last-90-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`loading`),()=>w(`stats/utm`,null))},J={render:()=>B(`last-7-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`error`),()=>w(`stats/utm`,null))},Y={render:()=>B(`last-12-months`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`error-retryable`),()=>w(`stats/utm`,null))},X={render:()=>B(`last-year`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`empty`),()=>w(`stats/utm`,null))},Z={render:({withComparison:e})=>(0,V.jsx)(O,{attributes:{utmDimension:`utm_campaign`,reportParams:g(e)}}),args:{withComparison:!1},decorators:[C,S]},Q={render:e=>(0,V.jsx)(Ie,{...e}),args:{...be,withComparison:!1},argTypes:{...x,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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