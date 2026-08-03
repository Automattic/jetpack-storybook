import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{f as s,n as c}from"./build-module-DoJYX5DX.js";import{$ as ee,D as l,H as u,S as te,U as d,Y as f,k as ne}from"./report-metric-B88CITdf.js";import{R as re,W as ie,t as p}from"./build-module-OKEcXh_B.js";import{t as m,v as ae}from"./src-B3le4dug.js";import{r as oe}from"./hooks--raYj3Tk.js";import{Bt as h,J as se,X as ce,d as le,q as ue,ur as g,xt as _}from"./chart-tooltip-DYeL-Ebj.js";import{t as de}from"./leaderboard-chart-BeFibmCX.js";import{t as fe}from"./widget-state-D2kmnSNs.js";import{C as v,D as y,E as b,O as x,S,T as pe,b as me,k as C,t as he,w as ge,x as w}from"./src-DuJJqcEZ.js";import{n as _e,t as ve}from"./src-CV-dL0bh.js";import{n as ye,t as be}from"./register-stats-mocks-CeMEUjzo.js";import{n as xe,t as T}from"./force-stats-mock-state-cO7wv7uC.js";var E,D,O,k,A,j,Se=e((()=>{E=`_root_1c7ar_1`,D=`_content_1c7ar_9`,O=`_backLink_1c7ar_17`,k=`_itemLabel_1c7ar_23`,A=`_itemLabelText_1c7ar_30`,j={root:E,content:D,backLink:O,itemLabel:k,itemLabelText:A}}));function M(e){return typeof e.label==`string`?e.label:String(e.label)}function Ce(e){return{label:M(e),value:e.value,previousValue:e.previousValue,href:e.href}}function we(e){return{label:M(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(Ce),childrenHaveComparison:e.childrenHaveComparison}}function Te({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:ee}=h({...e,utmParam:t,max:n},{maxRows:n}),l=(r?.rows??[]).map(we),u=l.length===0&&s;return{data:l,hasComparison:i,isLoading:a,isFetching:o,isError:u,error:u?c:null,refetch:ee}}var Ee=e((()=>{_()}));function De(e){switch(e){case`utm_source,utm_medium`:return`source-medium`;case`utm_campaign,utm_source,utm_medium`:return`campaign-source-medium`;case`utm_source`:return`source`;case`utm_medium`:return`medium`;case`utm_campaign`:return`campaign`}}function Oe({utmDimension:e,max:r,showReportLink:i}){let{reportParams:o}=ee(),{drillDownItem:s,drillDown:c,resetDrillDown:u}=oe();(0,a.useEffect)(()=>{u()},[u,e]);let{data:d,hasComparison:f,isLoading:p,isFetching:m,isError:h,error:g,refetch:_}=Te({reportParams:o,utmParam:e,max:r}),v=(0,a.useMemo)(()=>d.find(e=>e.label===s)??null,[d,s]),y=!!v?.children?.length,b=(0,a.useMemo)(()=>y?v?.children??[]:d,[d,y,v]),x=y?!!v?.childrenHaveComparison:f;(0,a.useEffect)(()=>{s&&!y&&!p&&!m&&!h&&u()},[s,y,p,m,h,u]);let S=(0,a.useMemo)(()=>{let e=se(b.map(e=>e.value),x?b.map(e=>e.previousValue):[]);return b.map((r,i)=>{let a=r.previousValue;return{id:`${i}-${r.label}`,label:(0,P.jsx)(re,{align:`center`,className:j.itemLabel,children:(0,P.jsx)(ie,{className:j.itemLabelText,children:r.label})}),currentValue:r.value,currentShare:ue(r.value,e),previousValue:a,previousShare:x&&a!==void 0?ue(a,e):void 0,delta:x&&a!==void 0?ce(r.value,a):void 0,...!y&&`children`in r&&r.children?.length&&{onClick:()=>c(r.label),ariaLabel:t(n(`View posts for %s`,`jetpack-premium-analytics-pkg`),r.label)}}})},[b,y,c,x]);return(0,P.jsxs)(P.Fragment,{children:[y?(0,P.jsx)(ne,{label:n(`All UTM Insights`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:u,className:j.backLink}):null,(0,P.jsx)(`div`,{className:j.content,children:(0,P.jsx)(fe,{isLoading:p,isFetching:m,isError:h,isEmpty:d.length===0,error:le(g,{retryDescription:n(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:_}),empty:{icon:ae,description:n(`No UTM data in this period.`,`jetpack-premium-analytics-pkg`)},children:(0,P.jsx)(de,{data:S,withComparison:x,withOverlayLabel:!0,showLegend:!1,dataFormat:F})})}),i&&(0,P.jsx)(l,{children:(0,P.jsx)(te,{report:`utm`,section:De(e)})})]})}function N({attributes:e={}}){let t=e.utmDimension??I,n=e.max??10,r=e.showReportLink??!0;return(0,P.jsx)(f,{attributes:e,children:(0,P.jsx)(`div`,{className:j.root,children:(0,P.jsx)(Oe,{utmDimension:t,max:n,showReportLink:r})})})}var P,F,I,ke=e((()=>{o(),r(),p(),he(),m(),Se(),Ee(),P=i(),F={type:`number`,options:{useMultipliers:!0,decimals:0}},I=`utm_source,utm_medium`})),L,Ae=e((()=>{r(),c(),ve(),L={icon:s,attributes:[{id:`utmDimension`,label:n(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:_e,elements:[{label:n(`Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_source,utm_medium`},{label:n(`Campaign / Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_campaign,utm_source,utm_medium`},{label:n(`Source`,`jetpack-premium-analytics-pkg`),value:`utm_source`},{label:n(`Medium`,`jetpack-premium-analytics-pkg`),value:`utm_medium`},{label:n(`Campaign`,`jetpack-premium-analytics-pkg`),value:`utm_campaign`}],relevance:`high`},{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{utmDimension:`utm_source,utm_medium`,max:10}}}})),R,z,B,V,H,je,Me,Ne=e((()=>{R=`jpa/utm-insights`,z=`Top UTM`,B=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,V={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},H=`traffic`,je=`framed`,Me={name:R,title:z,description:B,help:V,category:H,presentation:je}}));function U(e){return(0,W.jsx)(N,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:g(!1,e)}})}function Pe({withComparison:e,...t}){return(0,W.jsx)(pe,{...t,widgetType:Ie,renderModule:Fe,renderComponent:N,attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:g(e)}})}var W,Fe,Ie,Le,G,K,q,J,Y,X,Z,Q,$;e((()=>{_(),b(),x(),v(),me(),u(),be(),xe(),ke(),Ae(),Ne(),W=i(),d(),ye(),Fe=`storybook/utm-insights`,Ie=S(Me,L),Le={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:N,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},G={render:({withComparison:e})=>(0,W.jsx)(N,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:g(e)}}),args:{withComparison:!1},decorators:[w,C]},K={render:({withComparison:e})=>(0,W.jsx)(N,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:g(e)}}),args:{withComparison:!0},decorators:[w,C]},q={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(T(`stats/utm`,`loading`),()=>T(`stats/utm`,null))},J={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(T(`stats/utm`,`error`),()=>T(`stats/utm`,null))},Y={render:()=>U(`last-12-months`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(T(`stats/utm`,`error-retryable`),()=>T(`stats/utm`,null))},X={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(T(`stats/utm`,`empty`),()=>T(`stats/utm`,null))},Z={render:({withComparison:e})=>(0,W.jsx)(N,{attributes:{utmDimension:`utm_campaign`,max:10,reportParams:g(e)}}),args:{withComparison:!1},decorators:[w,C]},Q={render:e=>(0,W.jsx)(Pe,{...e}),args:{...ge,withComparison:!1},argTypes:{...y,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: ({
    withComparison
  }) => <UtmInsightsRender attributes={{
    utmDimension: 'utm_source,utm_medium',
    max: 10,
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
    max: 10,
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
  render: () => renderUtmInsightsOnPreset('last-365-days'),
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
    max: 10,
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`ByCampaign`,`WidgetDashboardWithWidget`]}))();export{Z as ByCampaign,G as Default,X as Empty,J as Error,Y as ErrorRetryable,q as Loading,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,Le as default};