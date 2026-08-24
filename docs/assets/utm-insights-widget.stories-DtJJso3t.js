import{i as e}from"./preload-helper-usAeo7Bx.js";import{S as t,n,t as r}from"./build-module-DyKOxfM8.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{_ as a,t as o}from"./build-module-CbwHEf9N.js";import{Wi as s,n as c}from"./build-module-CDRs4YxF.js";import{Tn as ee,t as l}from"./src-Byz2Y-vZ.js";import{E as u,J as d,S as te,at as ne,b as re,q as f,tt as p,w as ie}from"./report-metric-CUJ3Gh6_.js";import{b as ae,t as m}from"./src-BKLK-O8P.js";import{b as oe,qt as h,t as g}from"./src-56SjHKng.js";import{r as se}from"./hooks-CPSMJd7m.js";import"./constants-B1kGztHF.js";import{c as _,it as ce,l as v,ot as le,rt as ue,x as de}from"./chart-tooltip-WHUgZUgy.js";import{r as fe,t as pe}from"./leaderboard-skeleton-pUPanKH1.js";import{t as me}from"./widget-state-B-6QxAet.js";import{C as y,D as he,E as ge,O as _e,S as ve,T as ye,b as be,k as b,t as xe,w as Se,x}from"./src-KyGwFKrH.js";import{n as Ce,t as we}from"./register-stats-mocks-BUlzOFL3.js";import{n as Te,t as S}from"./force-stats-mock-state-D5Q7w7xE.js";var C,w,T,E,D,O,k,Ee=e((()=>{C=`_root_sv0g9_1`,w=`_content_sv0g9_9`,T=`_backLink_sv0g9_17`,E=`_itemLabel_sv0g9_25`,D=`_itemLabelInset_sv0g9_37`,O=`_itemLabelText_sv0g9_41`,k={root:C,content:w,backLink:T,itemLabel:E,itemLabelInset:D,itemLabelText:O}}));function A(e){return typeof e.label==`string`?e.label:String(e.label)}function De(e){return{postId:e.id,label:A(e),value:e.value,previousValue:e.previousValue,href:e.href}}function Oe(e){return{label:A(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(De),childrenHaveComparison:e.childrenHaveComparison}}function ke({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:ee}=oe({...e,utmParam:t,max:n},{maxRows:n}),l=(r?.rows??[]).map(Oe),u=l.length===0&&s;return{data:l,hasComparison:i,isLoading:a,isFetching:o,isError:u,error:u?c:null,refetch:ee}}var Ae=e((()=>{g()}));function je(e){switch(e){case`utm_source,utm_medium`:return`source-medium`;case`utm_campaign,utm_source,utm_medium`:return`campaign-source-medium`;case`utm_source`:return`source`;case`utm_medium`:return`medium`;case`utm_campaign`:return`campaign`}}function Me({utmDimension:e,showReportLink:r}){let{reportParams:i}=ne(),{drillDownItem:o,drillDown:s,resetDrillDown:c}=se();(0,a.useEffect)(()=>{c()},[c,e]);let{data:l,hasComparison:d,isLoading:f,isFetching:p,isError:m,error:oe,refetch:h}=ke({reportParams:i,utmParam:e,max:10}),g=(0,a.useMemo)(()=>l.find(e=>e.label===o)??null,[l,o]),_=!!g?.children?.length,v=(0,a.useMemo)(()=>_?g?.children??[]:l,[l,_,g]),y=_?!!g?.childrenHaveComparison:d;(0,a.useEffect)(()=>{o&&!_&&!f&&!p&&!m&&c()},[o,_,f,p,m,c]);let he=(0,a.useMemo)(()=>{let e=ce(v.map(e=>e.value),y?v.map(e=>e.previousValue):[]);return v.map((r,i)=>{let a=r.previousValue,o=`postId`in r?r:null;return{id:`${i}-${r.label}`,label:o?(0,M.jsx)(re,{id:o.postId,label:o.label,link:o.href,variant:`overlay`,className:k.itemLabelInset}):(0,M.jsx)(`span`,{className:k.itemLabel,children:(0,M.jsx)(ee,{className:k.itemLabelText,children:r.label})}),currentValue:r.value,currentShare:ue(r.value,e),previousValue:a,previousShare:y&&a!==void 0?ue(a,e):void 0,delta:y&&a!==void 0?le(r.value,a):void 0,...!_&&`children`in r&&r.children?.length&&{onClick:()=>s(r.label),ariaLabel:t(n(`View posts for %s`,`jetpack-premium-analytics-pkg`),r.label)}}})},[v,_,s,y]);return(0,M.jsxs)(M.Fragment,{children:[_?(0,M.jsx)(u,{label:n(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:c,className:k.backLink}):null,(0,M.jsx)(`div`,{className:k.content,children:(0,M.jsx)(me,{isLoading:f,isFetching:p,isError:m,isEmpty:l.length===0,error:de(oe,{retryDescription:n(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:h}),empty:{icon:ae,description:n(`No UTM data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,M.jsx)(pe,{rows:10}),children:(0,M.jsx)(fe,{data:he,withComparison:y,withOverlayLabel:!0,showLegend:!1,dataFormat:N})})}),r&&(0,M.jsx)(ie,{children:(0,M.jsx)(te,{report:`utm`,section:je(e)})})]})}function j({attributes:e={}}){let t=e.utmDimension??P,n=e.showReportLink??!0;return(0,M.jsx)(p,{attributes:e,children:(0,M.jsx)(`div`,{className:k.root,children:(0,M.jsx)(Me,{utmDimension:t,showReportLink:n})})})}var M,N,P,Ne=e((()=>{o(),r(),l(),xe(),m(),Ee(),Ae(),M=i(),N={type:`number`,options:{useMultipliers:!0,decimals:0}},P=`utm_source,utm_medium`})),F,Pe=e((()=>{r(),c(),_(),F={icon:s,attributes:[{id:`utmDimension`,label:n(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:v,elements:[{label:n(`Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_source,utm_medium`},{label:n(`Campaign / Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_campaign,utm_source,utm_medium`},{label:n(`Source`,`jetpack-premium-analytics-pkg`),value:`utm_source`},{label:n(`Medium`,`jetpack-premium-analytics-pkg`),value:`utm_medium`},{label:n(`Campaign`,`jetpack-premium-analytics-pkg`),value:`utm_campaign`}],relevance:`high`}],example:{attributes:{utmDimension:`utm_source,utm_medium`}}}})),I,L,R,z,B,V,H,Fe=e((()=>{I=`jpa/utm-insights`,L=`Top UTM`,R=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,z={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`traffic`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U(e){return(0,W.jsx)(j,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:h(!1,e)}})}function Ie({withComparison:e,...t}){return(0,W.jsx)(ye,{...t,widgetType:Re,renderModule:Le,renderComponent:j,attributes:{utmDimension:`utm_source,utm_medium`,reportParams:h(e)}})}var W,Le,Re,ze,G,K,q,J,Y,X,Z,Q,$;e((()=>{g(),ge(),_e(),y(),be(),f(),we(),Te(),Ne(),Pe(),Fe(),W=i(),d(),Ce(),Le=`storybook/utm-insights`,Re=ve(H,F),ze={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:j,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},G={render:({withComparison:e})=>(0,W.jsx)(j,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:h(e)}}),args:{withComparison:!1},decorators:[x,b]},K={render:({withComparison:e})=>(0,W.jsx)(j,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:h(e)}}),args:{withComparison:!0},decorators:[x,b]},q={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[x,b],beforeEach:()=>(S(`stats/utm`,`loading`),()=>S(`stats/utm`,null))},J={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[x,b],beforeEach:()=>(S(`stats/utm`,`error`),()=>S(`stats/utm`,null))},Y={render:()=>U(`last-12-months`),tags:[`!autodocs`],decorators:[x,b],beforeEach:()=>(S(`stats/utm`,`error-retryable`),()=>S(`stats/utm`,null))},X={render:()=>U(`last-year`),tags:[`!autodocs`],decorators:[x,b],beforeEach:()=>(S(`stats/utm`,`empty`),()=>S(`stats/utm`,null))},Z={render:({withComparison:e})=>(0,W.jsx)(j,{attributes:{utmDimension:`utm_campaign`,reportParams:h(e)}}),args:{withComparison:!1},decorators:[x,b]},Q={render:e=>(0,W.jsx)(Ie,{...e}),args:{...Se,withComparison:!1},argTypes:{...he,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`ByCampaign`,`WidgetDashboardWithWidget`]}))();export{Z as ByCampaign,G as Default,X as Empty,J as Error,Y as ErrorRetryable,q as Loading,Q as WidgetDashboardWithWidget,K as WithComparison,$ as __namedExportsOrder,ze as default};