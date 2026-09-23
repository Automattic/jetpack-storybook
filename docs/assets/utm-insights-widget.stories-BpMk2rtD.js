import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-2QZQpBH2.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{Ui as a,Uu as o,ju as s,t as c}from"./build-module-2iv4IIRq.js";import{Et as l,fn as u,hn as d,it as f,m as ee,pn as te,r as ne,rt as p,v as re}from"./hooks-EZsDMWvf.js";import{b as ie,t as m}from"./src-C-E2d-Lb.js";import{A as h,r as g,tn as _}from"./date-period-dropdown-F4D_nIb2.js";import"./constants-B1kGztHF.js";import{r as ae,t as oe}from"./leaderboard-skeleton-ByskQaU0.js";import{i as v,r as y}from"./register-report-mocks-Bync7tcQ.js";import{N as se,S as ce,g as le,j as ue,v as de,w as fe}from"./report-metric-DTJdgxpQ.js";import{t as pe}from"./widget-state-CgNj6SUc.js";import{t as b}from"./src-DUJiqb0z.js";import{a as x,c as me,d as S,i as he,l as ge,n as _e,o as ve,r as C,s as ye,u as be}from"./with-widget-canvas-Deyg0tLi.js";import{n as xe,t as Se}from"./register-stats-mocks-B682dcX2.js";import{n as Ce,t as w}from"./force-stats-mock-state-VuZYyy0Z.js";var T,E,D,O,we=e((()=>{T=`_root_xmjm2_1`,E=`_content_xmjm2_9`,D=`_backLink_xmjm2_16`,O={root:T,content:E,backLink:D}}));function k(e){return typeof e.label==`string`?e.label:String(e.label)}function Te(e){return{postId:e.id,label:k(e),value:e.value,previousValue:e.previousValue,href:e.href}}function Ee(e){return{label:k(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(Te),childrenHaveComparison:e.childrenHaveComparison}}function De({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,error:c,refetch:l}=h({...e,utmParam:t,max:n},{maxRows:n}),u=(r?.rows??[]).map(Ee),d=u.length===0&&s;return{data:u,hasComparison:i,isLoading:a,isFetching:o,isError:d,error:d?c:null,refetch:l}}var Oe=e((()=>{g()}));function A(e){switch(e){case`utm_source,utm_medium`:return`source-medium`;case`utm_campaign,utm_source,utm_medium`:return`campaign-source-medium`;case`utm_source`:return`source`;case`utm_medium`:return`medium`;case`utm_campaign`:return`campaign`}}function ke({utmDimension:e,showReportLink:n}){let{reportParams:i}=re(),{drillDownItem:a,drillDown:s,resetDrillDown:c}=ne();(0,o.useEffect)(()=>{c()},[c,e]);let{data:f,hasComparison:ee,isLoading:p,isFetching:m,isError:h,error:g,refetch:_}=De({reportParams:i,utmParam:e,max:10}),v=(0,o.useMemo)(()=>f.find(e=>e.label===a)??null,[f,a]),y=!!v?.children?.length,b=(0,o.useMemo)(()=>y?v?.children??[]:f,[f,y,v]),x=y?!!v?.childrenHaveComparison:ee;(0,o.useEffect)(()=>{a&&!y&&!p&&!m&&!h&&c()},[a,y,p,m,h,c]);let me=(0,o.useMemo)(()=>{let n=te(b.map(e=>e.value),x?b.map(e=>e.previousValue):[]);return b.map((i,a)=>{let o=i.previousValue,c=`postId`in i?i:null,l=!y&&`children`in i&&!!i.children?.length;return{id:`${a}-${i.label}`,...c?{label:(0,M.jsx)(le,{id:c.postId,label:c.label,link:c.href,origin:{report:`utm`,section:A(e)}})}:ue({label:i.label,media:{kind:`none`},action:se({hasChildren:l,drillDown:{onClick:()=>s(i.label),ariaLabel:r(t(`View posts for %s`,`jetpack-premium-analytics-pkg`),i.label)}})}),currentValue:i.value,currentShare:u(i.value,n),previousValue:o,previousShare:x&&o!==void 0?u(o,n):void 0,delta:x&&o!==void 0?d(i.value,o):void 0}})},[b,y,s,e,x]);return(0,M.jsxs)(M.Fragment,{children:[y?(0,M.jsx)(fe,{label:t(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:t(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:c,className:O.backLink}):null,(0,M.jsx)(`div`,{className:O.content,children:(0,M.jsx)(pe,{isLoading:p,isFetching:m,isError:h,isEmpty:f.length===0,error:l(g,{retryDescription:t(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:_}),empty:{icon:ie,description:t(`No UTM data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,M.jsx)(oe,{rows:10}),children:(0,M.jsx)(ae,{data:me,withComparison:x,withOverlayLabel:!0,showLegend:!1,dataFormat:N})})}),n&&(0,M.jsx)(ce,{children:(0,M.jsx)(de,{report:`utm`,section:A(e)})})]})}function j({attributes:e={}}){let t=e.utmDimension??P,n=e.showReportLink??!0;return(0,M.jsx)(ee,{attributes:e,children:(0,M.jsx)(`div`,{className:O.root,children:(0,M.jsx)(ke,{utmDimension:t,showReportLink:n})})})}var M,N,P,Ae=e((()=>{s(),n(),b(),m(),we(),Oe(),M=i(),N={type:`number`,options:{useMultipliers:!0,decimals:0}},P=`utm_source,utm_medium`})),F,je=e((()=>{n(),c(),p(),F={icon:a,attributes:[{id:`utmDimension`,label:t(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:f,elements:[{label:t(`Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_source,utm_medium`},{label:t(`Campaign / Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_campaign,utm_source,utm_medium`},{label:t(`Source`,`jetpack-premium-analytics-pkg`),value:`utm_source`},{label:t(`Medium`,`jetpack-premium-analytics-pkg`),value:`utm_medium`},{label:t(`Campaign`,`jetpack-premium-analytics-pkg`),value:`utm_campaign`}],relevance:`high`}],example:{attributes:{utmDimension:`utm_source,utm_medium`}}}})),I,L,R,z,B,V,Me,Ne=e((()=>{I=`jpa/utm-insights`,L=`Top UTM`,R=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,z={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`traffic`,V=`framed`,Me={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function H(e){return(0,U.jsx)(j,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:_(!1,e)}})}function Pe({withComparison:e,...t}){return(0,U.jsx)(ye,{...t,widgetType:Ie,renderModule:Fe,renderComponent:j,attributes:{utmDimension:`utm_source,utm_medium`,reportParams:_(e)}})}var U,Fe,Ie,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{g(),me(),be(),x(),_e(),y(),Se(),Ce(),Ae(),je(),Ne(),U=i(),v(),xe(),Fe=`storybook/utm-insights`,Ie=he(Me,F),W={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:j,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},G={render:({withComparison:e})=>(0,U.jsx)(j,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:_(e)}}),args:{withComparison:!1},decorators:[C,S]},K={render:({withComparison:e})=>(0,U.jsx)(j,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:_(e)}}),args:{withComparison:!0},decorators:[C,S]},q={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`loading`),()=>w(`stats/utm`,null))},J={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`error`),()=>w(`stats/utm`,null))},Y={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`error-retryable`),()=>w(`stats/utm`,null))},X={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[C,S],beforeEach:()=>(w(`stats/utm`,`empty`),()=>w(`stats/utm`,null))},Z={render:({withComparison:e})=>(0,U.jsx)(j,{attributes:{utmDimension:`utm_campaign`,reportParams:_(e)}}),args:{withComparison:!1},decorators:[C,S]},Q={render:e=>(0,U.jsx)(Pe,{...e}),args:{...ve,withComparison:!1},argTypes:{...ge,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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