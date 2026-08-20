import{i as e}from"./preload-helper-usAeo7Bx.js";import{S as t,n,t as r}from"./build-module-DyKOxfM8.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{_ as a,t as o}from"./build-module-CbwHEf9N.js";import{Wi as s,n as c}from"./build-module-CDRs4YxF.js";import{Tn as l,t as u}from"./src-wCuWrAdK.js";import{$ as d,E as ee,G as f,K as p,S as te,b as ne,rt as re,w as ie}from"./report-metric-CZGk3pJU.js";import{b as ae,t as m}from"./src-BKLK-O8P.js";import{Gt as h,b as g,t as _}from"./src-DCbi8ow8.js";import{r as oe}from"./hooks-DKyvbkrh.js";import{at as se,c as v,ct as ce,l as y,ot as le,x as ue}from"./chart-tooltip-mdsQYAXX.js";import{r as de,t as fe}from"./leaderboard-skeleton-CCNH4Z2y.js";import{t as pe}from"./widget-state-CEIPGY-o.js";import{C as b,D as x,E as S,O as me,S as he,T as ge,b as _e,k as C,t as ve,w as ye,x as w}from"./src-BenUPZSz.js";import{n as be,t as xe}from"./register-stats-mocks-DvTirN9o.js";import{n as Se,t as T}from"./force-stats-mock-state-BccjPGiq.js";var E,Ce,we,Te,Ee,D,O,De=e((()=>{E=`_root_sv0g9_1`,Ce=`_content_sv0g9_9`,we=`_backLink_sv0g9_17`,Te=`_itemLabel_sv0g9_25`,Ee=`_itemLabelInset_sv0g9_37`,D=`_itemLabelText_sv0g9_41`,O={root:E,content:Ce,backLink:we,itemLabel:Te,itemLabelInset:Ee,itemLabelText:D}}));function k(e){return typeof e.label==`string`?e.label:String(e.label)}function Oe(e){return{postId:e.id,label:k(e),value:e.value,previousValue:e.previousValue,href:e.href}}function ke(e){return{label:k(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(Oe),childrenHaveComparison:e.childrenHaveComparison}}function Ae({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=g({...e,utmParam:t,max:n},{maxRows:n}),u=(r?.rows??[]).map(ke),d=u.length===0&&s;return{data:u,hasComparison:i,isLoading:a,isFetching:o,isError:d,error:d?c:null,refetch:l}}var je=e((()=>{_()}));function Me(e){switch(e){case`utm_source,utm_medium`:return`source-medium`;case`utm_campaign,utm_source,utm_medium`:return`campaign-source-medium`;case`utm_source`:return`source`;case`utm_medium`:return`medium`;case`utm_campaign`:return`campaign`}}function Ne({utmDimension:e,max:r,showReportLink:i}){let{reportParams:o}=re(),{drillDownItem:s,drillDown:c,resetDrillDown:u}=oe();(0,a.useEffect)(()=>{u()},[u,e]);let{data:d,hasComparison:f,isLoading:p,isFetching:m,isError:h,error:g,refetch:_}=Ae({reportParams:o,utmParam:e,max:r}),v=(0,a.useMemo)(()=>d.find(e=>e.label===s)??null,[d,s]),y=!!v?.children?.length,b=(0,a.useMemo)(()=>y?v?.children??[]:d,[d,y,v]),x=y?!!v?.childrenHaveComparison:f;(0,a.useEffect)(()=>{s&&!y&&!p&&!m&&!h&&u()},[s,y,p,m,h,u]);let S=(0,a.useMemo)(()=>{let e=le(b.map(e=>e.value),x?b.map(e=>e.previousValue):[]);return b.map((r,i)=>{let a=r.previousValue,o=`postId`in r?r:null;return{id:`${i}-${r.label}`,label:o?(0,j.jsx)(ne,{id:o.postId,label:o.label,link:o.href,variant:`overlay`,className:O.itemLabelInset}):(0,j.jsx)(`span`,{className:O.itemLabel,children:(0,j.jsx)(l,{className:O.itemLabelText,children:r.label})}),currentValue:r.value,currentShare:se(r.value,e),previousValue:a,previousShare:x&&a!==void 0?se(a,e):void 0,delta:x&&a!==void 0?ce(r.value,a):void 0,...!y&&`children`in r&&r.children?.length&&{onClick:()=>c(r.label),ariaLabel:t(n(`View posts for %s`,`jetpack-premium-analytics-pkg`),r.label)}}})},[b,y,c,x]);return(0,j.jsxs)(j.Fragment,{children:[y?(0,j.jsx)(ee,{label:n(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:u,className:O.backLink}):null,(0,j.jsx)(`div`,{className:O.content,children:(0,j.jsx)(pe,{isLoading:p,isFetching:m,isError:h,isEmpty:d.length===0,error:ue(g,{retryDescription:n(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:_}),empty:{icon:ae,description:n(`No UTM data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,j.jsx)(fe,{rows:r}),children:(0,j.jsx)(de,{data:S,withComparison:x,withOverlayLabel:!0,showLegend:!1,dataFormat:M})})}),i&&(0,j.jsx)(ie,{children:(0,j.jsx)(te,{report:`utm`,section:Me(e)})})]})}function A({attributes:e={}}){let t=e.utmDimension??N,n=e.max??10,r=e.showReportLink??!0;return(0,j.jsx)(d,{attributes:e,children:(0,j.jsx)(`div`,{className:O.root,children:(0,j.jsx)(Ne,{utmDimension:t,max:n,showReportLink:r})})})}var j,M,N,Pe=e((()=>{o(),r(),u(),ve(),m(),De(),je(),j=i(),M={type:`number`,options:{useMultipliers:!0,decimals:0}},N=`utm_source,utm_medium`})),P,Fe=e((()=>{r(),c(),v(),P={icon:s,attributes:[{id:`utmDimension`,label:n(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:y,elements:[{label:n(`Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_source,utm_medium`},{label:n(`Campaign / Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_campaign,utm_source,utm_medium`},{label:n(`Source`,`jetpack-premium-analytics-pkg`),value:`utm_source`},{label:n(`Medium`,`jetpack-premium-analytics-pkg`),value:`utm_medium`},{label:n(`Campaign`,`jetpack-premium-analytics-pkg`),value:`utm_campaign`}],relevance:`high`},{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics-pkg`),type:`integer`}],example:{attributes:{utmDimension:`utm_source,utm_medium`,max:10}}}})),F,I,L,R,z,B,V,Ie=e((()=>{F=`jpa/utm-insights`,I=`Top UTM`,L=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,R={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`traffic`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H(e){return(0,U.jsx)(A,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:h(!1,e)}})}function Le({withComparison:e,...t}){return(0,U.jsx)(ge,{...t,widgetType:G,renderModule:W,renderComponent:A,attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:h(e)}})}var U,W,G,Re,K,q,J,Y,X,Z,Q,$,ze;e((()=>{_(),S(),me(),b(),_e(),f(),xe(),Se(),Pe(),Fe(),Ie(),U=i(),p(),be(),W=`storybook/utm-insights`,G=he(V,P),Re={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},K={render:({withComparison:e})=>(0,U.jsx)(A,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:h(e)}}),args:{withComparison:!1},decorators:[w,C]},q={render:({withComparison:e})=>(0,U.jsx)(A,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:h(e)}}),args:{withComparison:!0},decorators:[w,C]},J={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(T(`stats/utm`,`loading`),()=>T(`stats/utm`,null))},Y={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(T(`stats/utm`,`error`),()=>T(`stats/utm`,null))},X={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(T(`stats/utm`,`error-retryable`),()=>T(`stats/utm`,null))},Z={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[w,C],beforeEach:()=>(T(`stats/utm`,`empty`),()=>T(`stats/utm`,null))},Q={render:({withComparison:e})=>(0,U.jsx)(A,{attributes:{utmDimension:`utm_campaign`,max:10,reportParams:h(e)}}),args:{withComparison:!1},decorators:[w,C]},$={render:e=>(0,U.jsx)(Le,{...e}),args:{...ye,withComparison:!1},argTypes:{...x,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
    max: 10,
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
}`,...$.parameters?.docs?.source}}},ze=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`ByCampaign`,`WidgetDashboardWithWidget`]}))();export{Q as ByCampaign,K as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,$ as WidgetDashboardWithWidget,q as WithComparison,ze as __namedExportsOrder,Re as default};