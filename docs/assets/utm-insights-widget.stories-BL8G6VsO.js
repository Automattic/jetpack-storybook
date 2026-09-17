import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as ee}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Ui as i,Uu as a,ju as o,t as s}from"./build-module-2iv4IIRq.js";import{St as c,an as l,b as u,cn as te,et as d,g as f,on as ne,r as re,tt as p}from"./hooks-EUr_ubjq.js";import{b as ie,t as m}from"./src-C-E2d-Lb.js";import{A as h,en as g,r as _}from"./date-period-dropdown-DjMN-MzN.js";import"./constants-B1kGztHF.js";import{r as ae,t as oe}from"./leaderboard-skeleton-C2w9KRjU.js";import{i as v,r as y}from"./register-report-mocks-dZpieh6n.js";import{S as se,b as ce,g as le,j as ue,k as de,v as fe}from"./report-metric-C5yPDO38.js";import{t as pe}from"./widget-state-BMR2ZcPJ.js";import{t as b}from"./src-CfhPYP5S.js";import{a as x,c as me,d as S,i as he,l as ge,n as _e,o as ve,r as C,s as ye,u as be}from"./with-widget-canvas-B-6vwU3g.js";import{n as xe,t as Se}from"./register-stats-mocks-C8fLTgt0.js";import{n as Ce,t as w}from"./force-stats-mock-state-DncpPJDu.js";var T,E,D,O,we=e((()=>{T=`_root_xmjm2_1`,E=`_content_xmjm2_9`,D=`_backLink_xmjm2_16`,O={root:T,content:E,backLink:D}}));function k(e){return typeof e.label==`string`?e.label:String(e.label)}function Te(e){return{postId:e.id,label:k(e),value:e.value,previousValue:e.previousValue,href:e.href}}function Ee(e){return{label:k(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(Te),childrenHaveComparison:e.childrenHaveComparison}}function De({reportParams:e,utmParam:t,max:n}){let{comparisonRows:ee,hasComparison:r,isLoading:i,isFetching:a,isError:o,error:s,refetch:c}=h({...e,utmParam:t,max:n},{maxRows:n}),l=(ee?.rows??[]).map(Ee),u=l.length===0&&o;return{data:l,hasComparison:r,isLoading:i,isFetching:a,isError:u,error:u?s:null,refetch:c}}var Oe=e((()=>{_()}));function ke(e){switch(e){case`utm_source,utm_medium`:return`source-medium`;case`utm_campaign,utm_source,utm_medium`:return`campaign-source-medium`;case`utm_source`:return`source`;case`utm_medium`:return`medium`;case`utm_campaign`:return`campaign`}}function Ae({utmDimension:e,showReportLink:n}){let{reportParams:r}=u(),{drillDownItem:i,drillDown:o,resetDrillDown:s}=re();(0,a.useEffect)(()=>{s()},[s,e]);let{data:d,hasComparison:f,isLoading:p,isFetching:m,isError:h,error:g,refetch:_}=De({reportParams:r,utmParam:e,max:10}),v=(0,a.useMemo)(()=>d.find(e=>e.label===i)??null,[d,i]),y=!!v?.children?.length,b=(0,a.useMemo)(()=>y?v?.children??[]:d,[d,y,v]),x=y?!!v?.childrenHaveComparison:f;(0,a.useEffect)(()=>{i&&!y&&!p&&!m&&!h&&s()},[i,y,p,m,h,s]);let me=(0,a.useMemo)(()=>{let e=ne(b.map(e=>e.value),x?b.map(e=>e.previousValue):[]);return b.map((n,r)=>{let i=n.previousValue,a=`postId`in n?n:null,s=!y&&`children`in n&&!!n.children?.length;return{id:`${r}-${n.label}`,...a?{label:(0,j.jsx)(le,{id:a.postId,label:a.label,link:a.href})}:de({label:n.label,media:{kind:`none`},action:ue({hasChildren:s,drillDown:{onClick:()=>o(n.label),ariaLabel:ee(t(`View posts for %s`,`jetpack-premium-analytics-pkg`),n.label)}})}),currentValue:n.value,currentShare:l(n.value,e),previousValue:i,previousShare:x&&i!==void 0?l(i,e):void 0,delta:x&&i!==void 0?te(n.value,i):void 0}})},[b,y,o,x]);return(0,j.jsxs)(j.Fragment,{children:[y?(0,j.jsx)(se,{label:t(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:t(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:s,className:O.backLink}):null,(0,j.jsx)(`div`,{className:O.content,children:(0,j.jsx)(pe,{isLoading:p,isFetching:m,isError:h,isEmpty:d.length===0,error:c(g,{retryDescription:t(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:_}),empty:{icon:ie,description:t(`No UTM data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,j.jsx)(oe,{rows:10}),children:(0,j.jsx)(ae,{data:me,withComparison:x,withOverlayLabel:!0,showLegend:!1,dataFormat:M})})}),n&&(0,j.jsx)(ce,{children:(0,j.jsx)(fe,{report:`utm`,section:ke(e)})})]})}function A({attributes:e={}}){let t=e.utmDimension??N,n=e.showReportLink??!0;return(0,j.jsx)(f,{attributes:e,children:(0,j.jsx)(`div`,{className:O.root,children:(0,j.jsx)(Ae,{utmDimension:t,showReportLink:n})})})}var j,M,N,je=e((()=>{o(),n(),b(),m(),we(),Oe(),j=r(),M={type:`number`,options:{useMultipliers:!0,decimals:0}},N=`utm_source,utm_medium`})),P,Me=e((()=>{n(),s(),d(),P={icon:i,attributes:[{id:`utmDimension`,label:t(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:p,elements:[{label:t(`Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_source,utm_medium`},{label:t(`Campaign / Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_campaign,utm_source,utm_medium`},{label:t(`Source`,`jetpack-premium-analytics-pkg`),value:`utm_source`},{label:t(`Medium`,`jetpack-premium-analytics-pkg`),value:`utm_medium`},{label:t(`Campaign`,`jetpack-premium-analytics-pkg`),value:`utm_campaign`}],relevance:`high`}],example:{attributes:{utmDimension:`utm_source,utm_medium`}}}})),F,I,L,R,z,B,V,Ne=e((()=>{F=`jpa/utm-insights`,I=`Top UTM`,L=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,R={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`traffic`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H(e){return(0,U.jsx)(A,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:g(!1,e)}})}function Pe({withComparison:e,...t}){return(0,U.jsx)(ye,{...t,widgetType:Ie,renderModule:Fe,renderComponent:A,attributes:{utmDimension:`utm_source,utm_medium`,reportParams:g(e)}})}var U,Fe,Ie,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{_(),me(),be(),x(),_e(),y(),Se(),Ce(),je(),Me(),Ne(),U=r(),v(),xe(),Fe=`storybook/utm-insights`,Ie=he(V,P),W={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},G={render:({withComparison:e})=>(0,U.jsx)(A,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:g(e)}}),args:{withComparison:!1},decorators:[C,S]},K={render:({withComparison:e})=>(0,U.jsx)(A,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:g(e)}}),args:{withComparison:!0},decorators:[C,S]},q={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`loading`),()=>w(`stats/utm`,null))},J={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`error`),()=>w(`stats/utm`,null))},Y={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`error-retryable`),()=>w(`stats/utm`,null))},X={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`empty`),()=>w(`stats/utm`,null))},Z={render:({withComparison:e})=>(0,U.jsx)(A,{attributes:{utmDimension:`utm_campaign`,reportParams:g(e)}}),args:{withComparison:!1},decorators:[C,S]},Q={render:e=>(0,U.jsx)(Pe,{...e}),args:{...ve,withComparison:!1},argTypes:{...ge,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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