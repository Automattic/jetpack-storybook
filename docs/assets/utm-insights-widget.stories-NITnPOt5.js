import{i as e}from"./preload-helper-usAeo7Bx.js";import{S as t,n,t as r}from"./build-module-DyKOxfM8.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{_ as a,t as o}from"./build-module-CbwHEf9N.js";import{Wi as s,n as c}from"./build-module-CDRs4YxF.js";import{kn as l,t as u}from"./src-Dq5FM30o.js";import{b as d,g as f,r as ee}from"./hooks-Chc7IXb5.js";import{b as te,t as p}from"./src-B64ifip5.js";import{C as m,qt as h,t as g}from"./src-B5JGvL-s.js";import"./constants-B1kGztHF.js";import{M as ne,_t as re,f as ie,ht as ae,mt as oe,p as _}from"./chart-tooltip-DcOXtYLY.js";import{r as se,t as ce}from"./leaderboard-skeleton-Ck7fvsZj.js";import{G as v,S as le,W as y,b as ue,v as de,w as fe}from"./report-metric-6zfwbEAX.js";import{t as pe}from"./widget-state-CBoEg3sC.js";import{C as b,D as x,E as me,O as he,S as ge,T as _e,b as ve,k as S,t as ye,w as be,x as C}from"./src-D9vNzIYU.js";import{n as xe,t as Se}from"./register-stats-mocks-DzR3_qzL.js";import{n as Ce,t as w}from"./force-stats-mock-state-Bmhp2kmk.js";var T,E,D,we,Te,O,Ee=e((()=>{T=`_root_j3swf_1`,E=`_content_j3swf_9`,D=`_backLink_j3swf_17`,we=`_itemLabel_j3swf_25`,Te=`_itemLabelText_j3swf_33`,O={root:T,content:E,backLink:D,itemLabel:we,itemLabelText:Te}}));function k(e){return typeof e.label==`string`?e.label:String(e.label)}function De(e){return{postId:e.id,label:k(e),value:e.value,previousValue:e.previousValue,href:e.href}}function Oe(e){return{label:k(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(De),childrenHaveComparison:e.childrenHaveComparison}}function ke({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=m({...e,utmParam:t,max:n},{maxRows:n}),u=(r?.rows??[]).map(Oe),d=u.length===0&&s;return{data:u,hasComparison:i,isLoading:a,isFetching:o,isError:d,error:d?c:null,refetch:l}}var Ae=e((()=>{g()}));function je(e){switch(e){case`utm_source,utm_medium`:return`source-medium`;case`utm_campaign,utm_source,utm_medium`:return`campaign-source-medium`;case`utm_source`:return`source`;case`utm_medium`:return`medium`;case`utm_campaign`:return`campaign`}}function Me({utmDimension:e,showReportLink:r}){let{reportParams:i}=d(),{drillDownItem:o,drillDown:s,resetDrillDown:c}=ee();(0,a.useEffect)(()=>{c()},[c,e]);let{data:u,hasComparison:f,isLoading:p,isFetching:m,isError:h,error:g,refetch:ie}=ke({reportParams:i,utmParam:e,max:10}),_=(0,a.useMemo)(()=>u.find(e=>e.label===o)??null,[u,o]),v=!!_?.children?.length,y=(0,a.useMemo)(()=>v?_?.children??[]:u,[u,v,_]),b=v?!!_?.childrenHaveComparison:f;(0,a.useEffect)(()=>{o&&!v&&!p&&!m&&!h&&c()},[o,v,p,m,h,c]);let x=(0,a.useMemo)(()=>{let e=ae(y.map(e=>e.value),b?y.map(e=>e.previousValue):[]);return y.map((r,i)=>{let a=r.previousValue,o=`postId`in r?r:null;return{id:`${i}-${r.label}`,label:o?(0,j.jsx)(de,{id:o.postId,label:o.label,link:o.href}):(0,j.jsx)(`span`,{className:O.itemLabel,children:(0,j.jsx)(l,{className:O.itemLabelText,variant:`body-sm`,children:r.label})}),currentValue:r.value,currentShare:oe(r.value,e),previousValue:a,previousShare:b&&a!==void 0?oe(a,e):void 0,delta:b&&a!==void 0?re(r.value,a):void 0,...!v&&`children`in r&&r.children?.length&&{onClick:()=>s(r.label),ariaLabel:t(n(`View posts for %s`,`jetpack-premium-analytics-pkg`),r.label)}}})},[y,v,s,b]);return(0,j.jsxs)(j.Fragment,{children:[v?(0,j.jsx)(fe,{label:n(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:c,className:O.backLink}):null,(0,j.jsx)(`div`,{className:O.content,children:(0,j.jsx)(pe,{isLoading:p,isFetching:m,isError:h,isEmpty:u.length===0,error:ne(g,{retryDescription:n(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:ie}),empty:{icon:te,description:n(`No UTM data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,j.jsx)(ce,{rows:10}),children:(0,j.jsx)(se,{data:x,withComparison:b,withOverlayLabel:!0,showLegend:!1,dataFormat:M})})}),r&&(0,j.jsx)(le,{children:(0,j.jsx)(ue,{report:`utm`,section:je(e)})})]})}function A({attributes:e={}}){let t=e.utmDimension??N,n=e.showReportLink??!0;return(0,j.jsx)(f,{attributes:e,children:(0,j.jsx)(`div`,{className:O.root,children:(0,j.jsx)(Me,{utmDimension:t,showReportLink:n})})})}var j,M,N,Ne=e((()=>{o(),r(),u(),ye(),p(),Ee(),Ae(),j=i(),M={type:`number`,options:{useMultipliers:!0,decimals:0}},N=`utm_source,utm_medium`})),P,Pe=e((()=>{r(),c(),ie(),P={icon:s,attributes:[{id:`utmDimension`,label:n(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:_,elements:[{label:n(`Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_source,utm_medium`},{label:n(`Campaign / Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_campaign,utm_source,utm_medium`},{label:n(`Source`,`jetpack-premium-analytics-pkg`),value:`utm_source`},{label:n(`Medium`,`jetpack-premium-analytics-pkg`),value:`utm_medium`},{label:n(`Campaign`,`jetpack-premium-analytics-pkg`),value:`utm_campaign`}],relevance:`high`}],example:{attributes:{utmDimension:`utm_source,utm_medium`}}}})),F,I,L,R,z,B,V,Fe=e((()=>{F=`jpa/utm-insights`,I=`Top UTM`,L=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,R={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`traffic`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H(e){return(0,U.jsx)(A,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:h(!1,e)}})}function Ie({withComparison:e,...t}){return(0,U.jsx)(_e,{...t,widgetType:G,renderModule:W,renderComponent:A,attributes:{utmDimension:`utm_source,utm_medium`,reportParams:h(e)}})}var U,W,G,Le,K,q,J,Y,X,Z,Q,$,Re;e((()=>{g(),me(),he(),b(),ve(),y(),Se(),Ce(),Ne(),Pe(),Fe(),U=i(),v(),xe(),W=`storybook/utm-insights`,G=ge(V,P),Le={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},K={render:({withComparison:e})=>(0,U.jsx)(A,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:h(e)}}),args:{withComparison:!1},decorators:[C,S]},q={render:({withComparison:e})=>(0,U.jsx)(A,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:h(e)}}),args:{withComparison:!0},decorators:[C,S]},J={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`loading`),()=>w(`stats/utm`,null))},Y={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`error`),()=>w(`stats/utm`,null))},X={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`error-retryable`),()=>w(`stats/utm`,null))},Z={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`empty`),()=>w(`stats/utm`,null))},Q={render:({withComparison:e})=>(0,U.jsx)(A,{attributes:{utmDimension:`utm_campaign`,reportParams:h(e)}}),args:{withComparison:!1},decorators:[C,S]},$={render:e=>(0,U.jsx)(Ie,{...e}),args:{...be,withComparison:!1},argTypes:{...x,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},Re=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`ByCampaign`,`WidgetDashboardWithWidget`]}))();export{Q as ByCampaign,K as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,$ as WidgetDashboardWithWidget,q as WithComparison,Re as __namedExportsOrder,Le as default};