import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{f as s,n as c}from"./build-module-DmVuor49.js";import{r as l}from"./hooks-Out0Ljvm.js";import{R as u,W as d,t as f}from"./build-module-C8BA1j7t.js";import{t as p,v as ee}from"./src-B3le4dug.js";import{Ct as m,Ht as h,J as te,X as ne,d as re,fr as g,q as ie}from"./chart-tooltip-CdMR9SZ0.js";import{t as ae}from"./leaderboard-chart-BT8FTf8c.js";import{I as _,L as oe,S as se,U as ce,b as le,q as ue,w as de}from"./report-metric-BRfdcWyi.js";import{t as fe}from"./widget-state-JdniMnU5.js";import{C as v,D as y,E as b,O as x,S as pe,T as me,b as he,k as S,t as ge,w as _e,x as C}from"./src-ZJliTtjR.js";import{n as ve,t as ye}from"./src-CSaGymxG.js";import{n as be,t as xe}from"./register-stats-mocks-PuDKRD5q.js";import{n as Se,t as w}from"./force-stats-mock-state-BD8UzWmH.js";var Ce,T,E,D,O,k,we=e((()=>{Ce=`_root_1c7ar_1`,T=`_content_1c7ar_9`,E=`_backLink_1c7ar_17`,D=`_itemLabel_1c7ar_23`,O=`_itemLabelText_1c7ar_30`,k={root:Ce,content:T,backLink:E,itemLabel:D,itemLabelText:O}}));function A(e){return typeof e.label==`string`?e.label:String(e.label)}function Te(e){return{label:A(e),value:e.value,previousValue:e.previousValue,href:e.href}}function Ee(e){return{label:A(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(Te),childrenHaveComparison:e.childrenHaveComparison}}function De({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=h({...e,utmParam:t,max:n},{maxRows:n}),u=(r?.rows??[]).map(Ee),d=u.length===0&&s;return{data:u,hasComparison:i,isLoading:a,isFetching:o,isError:d,error:d?c:null,refetch:l}}var Oe=e((()=>{m()}));function ke(e){switch(e){case`utm_source,utm_medium`:return`source-medium`;case`utm_campaign,utm_source,utm_medium`:return`campaign-source-medium`;case`utm_source`:return`source`;case`utm_medium`:return`medium`;case`utm_campaign`:return`campaign`}}function Ae({utmDimension:e,max:r,showReportLink:i}){let{reportParams:o}=ue(),{drillDownItem:s,drillDown:c,resetDrillDown:f}=l();(0,a.useEffect)(()=>{f()},[f,e]);let{data:p,hasComparison:m,isLoading:h,isFetching:g,isError:_,error:oe,refetch:ce}=De({reportParams:o,utmParam:e,max:r}),v=(0,a.useMemo)(()=>p.find(e=>e.label===s)??null,[p,s]),y=!!v?.children?.length,b=(0,a.useMemo)(()=>y?v?.children??[]:p,[p,y,v]),x=y?!!v?.childrenHaveComparison:m;(0,a.useEffect)(()=>{s&&!y&&!h&&!g&&!_&&f()},[s,y,h,g,_,f]);let pe=(0,a.useMemo)(()=>{let e=te(b.map(e=>e.value),x?b.map(e=>e.previousValue):[]);return b.map((r,i)=>{let a=r.previousValue;return{id:`${i}-${r.label}`,label:(0,M.jsx)(u,{align:`center`,className:k.itemLabel,children:(0,M.jsx)(d,{className:k.itemLabelText,children:r.label})}),currentValue:r.value,currentShare:ie(r.value,e),previousValue:a,previousShare:x&&a!==void 0?ie(a,e):void 0,delta:x&&a!==void 0?ne(r.value,a):void 0,...!y&&`children`in r&&r.children?.length&&{onClick:()=>c(r.label),ariaLabel:t(n(`View posts for %s`,`jetpack-premium-analytics`),r.label)}}})},[b,y,c,x]);return(0,M.jsxs)(M.Fragment,{children:[y?(0,M.jsx)(de,{label:n(`All UTM Insights`,`jetpack-premium-analytics`),ariaLabel:n(`View all UTM insights`,`jetpack-premium-analytics`),onClick:f,className:k.backLink}):null,(0,M.jsx)(`div`,{className:k.content,children:(0,M.jsx)(fe,{isLoading:h,isFetching:g,isError:_,isEmpty:p.length===0,error:re(oe,{retryDescription:n(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics`),onRetry:ce}),empty:{icon:ee,description:n(`No UTM data in this period.`,`jetpack-premium-analytics`)},children:(0,M.jsx)(ae,{data:pe,withComparison:x,withOverlayLabel:!0,showLegend:!1,dataFormat:N})})}),i&&(0,M.jsx)(se,{children:(0,M.jsx)(le,{report:`utm`,section:ke(e)})})]})}function j({attributes:e={}}){let t=e.utmDimension??P,n=e.max??10,r=e.showReportLink??!0;return(0,M.jsx)(ce,{attributes:e,children:(0,M.jsx)(`div`,{className:k.root,children:(0,M.jsx)(Ae,{utmDimension:t,max:n,showReportLink:r})})})}var M,N,P,je=e((()=>{o(),r(),f(),ge(),p(),we(),Oe(),M=i(),N={type:`number`,options:{useMultipliers:!0,decimals:0}},P=`utm_source,utm_medium`})),F,Me=e((()=>{r(),c(),ye(),F={icon:s,attributes:[{id:`utmDimension`,label:n(`UTM parameter`,`jetpack-premium-analytics`),type:`text`,Edit:ve,elements:[{label:n(`Source / Medium`,`jetpack-premium-analytics`),value:`utm_source,utm_medium`},{label:n(`Campaign / Source / Medium`,`jetpack-premium-analytics`),value:`utm_campaign,utm_source,utm_medium`},{label:n(`Source`,`jetpack-premium-analytics`),value:`utm_source`},{label:n(`Medium`,`jetpack-premium-analytics`),value:`utm_medium`},{label:n(`Campaign`,`jetpack-premium-analytics`),value:`utm_campaign`}],relevance:`high`},{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{utmDimension:`utm_source,utm_medium`,max:10}}}})),I,L,R,z,B,V,H,Ne=e((()=>{I=`jpa/utm-insights`,L=`UTM Insights`,R=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,z={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`traffic`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U(e){return(0,W.jsx)(j,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:g(!1,e)}})}function Pe({withComparison:e,...t}){return(0,W.jsx)(me,{...t,widgetType:Ie,renderModule:Fe,renderComponent:j,attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:g(e)}})}var W,Fe,Ie,Le,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),b(),x(),v(),he(),_(),xe(),Se(),je(),Me(),Ne(),W=i(),oe(),be(),Fe=`storybook/utm-insights`,Ie=pe(H,F),Le={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:j,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},G={render:({withComparison:e})=>(0,W.jsx)(j,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:g(e)}}),args:{withComparison:!1},decorators:[C,S]},K={render:({withComparison:e})=>(0,W.jsx)(j,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:g(e)}}),args:{withComparison:!0},decorators:[C,S]},q={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`loading`),()=>w(`stats/utm`,null))},J={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`error`),()=>w(`stats/utm`,null))},Y={render:()=>U(`last-12-months`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`error-retryable`),()=>w(`stats/utm`,null))},X={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`empty`),()=>w(`stats/utm`,null))},Z={render:({withComparison:e})=>(0,W.jsx)(j,{attributes:{utmDimension:`utm_campaign`,max:10,reportParams:g(e)}}),args:{withComparison:!1},decorators:[C,S]},Q={render:e=>(0,W.jsx)(Pe,{...e}),args:{..._e,withComparison:!1},argTypes:{...y,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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