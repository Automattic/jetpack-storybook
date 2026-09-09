import{i as e}from"./preload-helper-usAeo7Bx.js";import{f as t,n,t as r}from"./build-module-yGZutq_9.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Gi as a,Gu as o,Nu as s,t as c}from"./build-module-zwSmKorH.js";import{B as l,C as u,Kt as d,Ut as f,V as p,Wt as ee,o as te,ot as ne,y as m}from"./wp-date-settings-y8z9gsoZ.js";import{b as re,t as h}from"./src-DFNM1k7F.js";import{A as g,en as _,i as v}from"./date-filters-panel-DF5Myt19.js";import"./constants-B1kGztHF.js";import{r as ie,t as ae}from"./leaderboard-skeleton-B43WOx76.js";import{F as oe,G as y,K as b,N as se,S as ce,b as le,v as ue,w as de}from"./report-metric-BhaqG7tK.js";import{t as fe}from"./widget-state-CqVyPfwr.js";import{C as x,D as S,E as C,O as pe,S as me,T as he,b as ge,k as w,t as _e,w as ve,x as T}from"./src-BP3U2Pdv.js";import{n as ye,t as be}from"./register-stats-mocks-xZQRAPMX.js";import{n as xe,t as E}from"./force-stats-mock-state-C_AkKE1w.js";var D,O,k,A,Se=e((()=>{D=`_root_xmjm2_1`,O=`_content_xmjm2_9`,k=`_backLink_xmjm2_16`,A={root:D,content:O,backLink:k}}));function j(e){return typeof e.label==`string`?e.label:String(e.label)}function Ce(e){return{postId:e.id,label:j(e),value:e.value,previousValue:e.previousValue,href:e.href}}function we(e){return{label:j(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(Ce),childrenHaveComparison:e.childrenHaveComparison}}function Te({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=g({...e,utmParam:t,max:n},{maxRows:n}),u=(r?.rows??[]).map(we),d=u.length===0&&s;return{data:u,hasComparison:i,isLoading:a,isFetching:o,isError:d,error:d?c:null,refetch:l}}var Ee=e((()=>{v()}));function De(e){switch(e){case`utm_source,utm_medium`:return`source-medium`;case`utm_campaign,utm_source,utm_medium`:return`campaign-source-medium`;case`utm_source`:return`source`;case`utm_medium`:return`medium`;case`utm_campaign`:return`campaign`}}function Oe({utmDimension:e,showReportLink:r}){let{reportParams:i}=u(),{drillDownItem:a,drillDown:s,resetDrillDown:c}=te();(0,o.useEffect)(()=>{c()},[c,e]);let{data:l,hasComparison:p,isLoading:m,isFetching:h,isError:g,error:_,refetch:v}=Te({reportParams:i,utmParam:e,max:10}),y=(0,o.useMemo)(()=>l.find(e=>e.label===a)??null,[l,a]),b=!!y?.children?.length,x=(0,o.useMemo)(()=>b?y?.children??[]:l,[l,b,y]),S=b?!!y?.childrenHaveComparison:p;(0,o.useEffect)(()=>{a&&!b&&!m&&!h&&!g&&c()},[a,b,m,h,g,c]);let C=(0,o.useMemo)(()=>{let e=ee(x.map(e=>e.value),S?x.map(e=>e.previousValue):[]);return x.map((r,i)=>{let a=r.previousValue,o=`postId`in r?r:null,c=!b&&`children`in r&&!!r.children?.length;return{id:`${i}-${r.label}`,...o?{label:(0,N.jsx)(ue,{id:o.postId,label:o.label,link:o.href})}:se({label:r.label,media:{kind:`none`},action:oe({hasChildren:c,drillDown:{onClick:()=>s(r.label),ariaLabel:t(n(`View posts for %s`,`jetpack-premium-analytics-pkg`),r.label)}})}),currentValue:r.value,currentShare:f(r.value,e),previousValue:a,previousShare:S&&a!==void 0?f(a,e):void 0,delta:S&&a!==void 0?d(r.value,a):void 0}})},[x,b,s,S]);return(0,N.jsxs)(N.Fragment,{children:[b?(0,N.jsx)(de,{label:n(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:n(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:c,className:A.backLink}):null,(0,N.jsx)(`div`,{className:A.content,children:(0,N.jsx)(fe,{isLoading:m,isFetching:h,isError:g,isEmpty:l.length===0,error:ne(_,{retryDescription:n(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:v}),empty:{icon:re,description:n(`No UTM data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,N.jsx)(ae,{rows:10}),children:(0,N.jsx)(ie,{data:C,withComparison:S,withOverlayLabel:!0,showLegend:!1,dataFormat:P})})}),r&&(0,N.jsx)(ce,{children:(0,N.jsx)(le,{report:`utm`,section:De(e)})})]})}function M({attributes:e={}}){let t=e.utmDimension??F,n=e.showReportLink??!0;return(0,N.jsx)(m,{attributes:e,children:(0,N.jsx)(`div`,{className:A.root,children:(0,N.jsx)(Oe,{utmDimension:t,showReportLink:n})})})}var N,P,F,ke=e((()=>{s(),r(),_e(),h(),Se(),Ee(),N=i(),P={type:`number`,options:{useMultipliers:!0,decimals:0}},F=`utm_source,utm_medium`})),I,Ae=e((()=>{r(),c(),l(),I={icon:a,attributes:[{id:`utmDimension`,label:n(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:p,elements:[{label:n(`Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_source,utm_medium`},{label:n(`Campaign / Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_campaign,utm_source,utm_medium`},{label:n(`Source`,`jetpack-premium-analytics-pkg`),value:`utm_source`},{label:n(`Medium`,`jetpack-premium-analytics-pkg`),value:`utm_medium`},{label:n(`Campaign`,`jetpack-premium-analytics-pkg`),value:`utm_campaign`}],relevance:`high`}],example:{attributes:{utmDimension:`utm_source,utm_medium`}}}})),L,R,z,B,V,H,U,je=e((()=>{L=`jpa/utm-insights`,R=`Top UTM`,z=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,B={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},V=`traffic`,H=`framed`,U={name:L,title:R,description:z,help:B,category:V,presentation:H}}));function W(e){return(0,G.jsx)(M,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:_(!1,e)}})}function Me({withComparison:e,...t}){return(0,G.jsx)(he,{...t,widgetType:Pe,renderModule:Ne,renderComponent:M,attributes:{utmDimension:`utm_source,utm_medium`,reportParams:_(e)}})}var G,Ne,Pe,Fe,K,q,J,Y,X,Z,Q,$,Ie;e((()=>{v(),C(),pe(),x(),ge(),y(),be(),xe(),ke(),Ae(),je(),G=i(),b(),ye(),Ne=`storybook/utm-insights`,Pe=me(U,I),Fe={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:M,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},K={render:({withComparison:e})=>(0,G.jsx)(M,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:_(e)}}),args:{withComparison:!1},decorators:[T,w]},q={render:({withComparison:e})=>(0,G.jsx)(M,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:_(e)}}),args:{withComparison:!0},decorators:[T,w]},J={render:()=>W(`last-90-days`),tags:[`!autodocs`],decorators:[T,w],beforeEach:()=>(E(`stats/utm`,`loading`),()=>E(`stats/utm`,null))},Y={render:()=>W(`last-7-days`),tags:[`!autodocs`],decorators:[T,w],beforeEach:()=>(E(`stats/utm`,`error`),()=>E(`stats/utm`,null))},X={render:()=>W(`last-12-months`),tags:[`!autodocs`],decorators:[T,w],beforeEach:()=>(E(`stats/utm`,`error-retryable`),()=>E(`stats/utm`,null))},Z={render:()=>W(`last-year`),tags:[`!autodocs`],decorators:[T,w],beforeEach:()=>(E(`stats/utm`,`empty`),()=>E(`stats/utm`,null))},Q={render:({withComparison:e})=>(0,G.jsx)(M,{attributes:{utmDimension:`utm_campaign`,reportParams:_(e)}}),args:{withComparison:!1},decorators:[T,w]},$={render:e=>(0,G.jsx)(Me,{...e}),args:{...ve,withComparison:!1},argTypes:{...S,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},Ie=[`Default`,`WithComparison`,`Loading`,`Error`,`ErrorRetryable`,`Empty`,`ByCampaign`,`WidgetDashboardWithWidget`]}))();export{Q as ByCampaign,K as Default,Z as Empty,Y as Error,X as ErrorRetryable,J as Loading,$ as WidgetDashboardWithWidget,q as WithComparison,Ie as __namedExportsOrder,Fe as default};