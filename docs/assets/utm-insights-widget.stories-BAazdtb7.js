import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as ee}from"./build-module-2QZQpBH2.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Ui as i,Uu as a,ju as o,t as s}from"./build-module-2iv4IIRq.js";import{St as c,an as l,b as u,cn as te,et as d,g as ne,on as re,r as ie,tt as f}from"./hooks-CWyb3wkb.js";import{b as ae,t as p}from"./src-C-E2d-Lb.js";import{A as m,r as h,tn as g}from"./date-period-dropdown-DhgyTlgZ.js";import"./constants-B1kGztHF.js";import{r as oe,t as se}from"./leaderboard-skeleton-C7dLzmAY.js";import{i as _,r as v}from"./register-report-mocks-cvRPOVwg.js";import{S as ce,b as le,g as ue,j as de,k as fe,v as pe}from"./report-metric-uW8qgqaY.js";import{t as me}from"./widget-state-SUJQG2JI.js";import{t as y}from"./src-D8yCyUlC.js";import{a as b,c as he,d as x,i as ge,l as _e,n as ve,o as ye,r as S,s as be,u as xe}from"./with-widget-canvas-C3kVqfyG.js";import{n as Se,t as Ce}from"./register-stats-mocks-CtbofPZO.js";import{n as we,t as C}from"./force-stats-mock-state-O353B4LH.js";var w,T,E,D,Te=e((()=>{w=`_root_xmjm2_1`,T=`_content_xmjm2_9`,E=`_backLink_xmjm2_16`,D={root:w,content:T,backLink:E}}));function O(e){return typeof e.label==`string`?e.label:String(e.label)}function Ee(e){return{postId:e.id,label:O(e),value:e.value,previousValue:e.previousValue,href:e.href}}function De(e){return{label:O(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(Ee),childrenHaveComparison:e.childrenHaveComparison}}function Oe({reportParams:e,utmParam:t,max:n}){let{comparisonRows:ee,hasComparison:r,isLoading:i,isFetching:a,isError:o,error:s,refetch:c}=m({...e,utmParam:t,max:n},{maxRows:n}),l=(ee?.rows??[]).map(De),u=l.length===0&&o;return{data:l,hasComparison:r,isLoading:i,isFetching:a,isError:u,error:u?s:null,refetch:c}}var ke=e((()=>{h()}));function k(e){switch(e){case`utm_source,utm_medium`:return`source-medium`;case`utm_campaign,utm_source,utm_medium`:return`campaign-source-medium`;case`utm_source`:return`source`;case`utm_medium`:return`medium`;case`utm_campaign`:return`campaign`}}function Ae({utmDimension:e,showReportLink:n}){let{reportParams:r}=u(),{drillDownItem:i,drillDown:o,resetDrillDown:s}=ie();(0,a.useEffect)(()=>{s()},[s,e]);let{data:d,hasComparison:ne,isLoading:f,isFetching:p,isError:m,error:h,refetch:g}=Oe({reportParams:r,utmParam:e,max:10}),_=(0,a.useMemo)(()=>d.find(e=>e.label===i)??null,[d,i]),v=!!_?.children?.length,y=(0,a.useMemo)(()=>v?_?.children??[]:d,[d,v,_]),b=v?!!_?.childrenHaveComparison:ne;(0,a.useEffect)(()=>{i&&!v&&!f&&!p&&!m&&s()},[i,v,f,p,m,s]);let he=(0,a.useMemo)(()=>{let n=re(y.map(e=>e.value),b?y.map(e=>e.previousValue):[]);return y.map((r,i)=>{let a=r.previousValue,s=`postId`in r?r:null,c=!v&&`children`in r&&!!r.children?.length;return{id:`${i}-${r.label}`,...s?{label:(0,j.jsx)(ue,{id:s.postId,label:s.label,link:s.href,origin:{report:`utm`,section:k(e)}})}:fe({label:r.label,media:{kind:`none`},action:de({hasChildren:c,drillDown:{onClick:()=>o(r.label),ariaLabel:ee(t(`View posts for %s`,`jetpack-premium-analytics-pkg`),r.label)}})}),currentValue:r.value,currentShare:l(r.value,n),previousValue:a,previousShare:b&&a!==void 0?l(a,n):void 0,delta:b&&a!==void 0?te(r.value,a):void 0}})},[y,v,o,e,b]);return(0,j.jsxs)(j.Fragment,{children:[v?(0,j.jsx)(ce,{label:t(`All UTM insights`,`jetpack-premium-analytics-pkg`),ariaLabel:t(`View all UTM insights`,`jetpack-premium-analytics-pkg`),onClick:s,className:D.backLink}):null,(0,j.jsx)(`div`,{className:D.content,children:(0,j.jsx)(me,{isLoading:f,isFetching:p,isError:m,isEmpty:d.length===0,error:c(h,{retryDescription:t(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics-pkg`),onRetry:g}),empty:{icon:ae,description:t(`No UTM data in this period.`,`jetpack-premium-analytics-pkg`)},renderLoading:(0,j.jsx)(se,{rows:10}),children:(0,j.jsx)(oe,{data:he,withComparison:b,withOverlayLabel:!0,showLegend:!1,dataFormat:M})})}),n&&(0,j.jsx)(le,{children:(0,j.jsx)(pe,{report:`utm`,section:k(e)})})]})}function A({attributes:e={}}){let t=e.utmDimension??N,n=e.showReportLink??!0;return(0,j.jsx)(ne,{attributes:e,children:(0,j.jsx)(`div`,{className:D.root,children:(0,j.jsx)(Ae,{utmDimension:t,showReportLink:n})})})}var j,M,N,je=e((()=>{o(),n(),y(),p(),Te(),ke(),j=r(),M={type:`number`,options:{useMultipliers:!0,decimals:0}},N=`utm_source,utm_medium`})),P,Me=e((()=>{n(),s(),d(),P={icon:i,attributes:[{id:`utmDimension`,label:t(`UTM parameter`,`jetpack-premium-analytics-pkg`),type:`text`,Edit:f,elements:[{label:t(`Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_source,utm_medium`},{label:t(`Campaign / Source / Medium`,`jetpack-premium-analytics-pkg`),value:`utm_campaign,utm_source,utm_medium`},{label:t(`Source`,`jetpack-premium-analytics-pkg`),value:`utm_source`},{label:t(`Medium`,`jetpack-premium-analytics-pkg`),value:`utm_medium`},{label:t(`Campaign`,`jetpack-premium-analytics-pkg`),value:`utm_campaign`}],relevance:`high`}],example:{attributes:{utmDimension:`utm_source,utm_medium`}}}})),F,I,L,R,z,B,V,Ne=e((()=>{F=`jpa/utm-insights`,I=`Top UTM`,L=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,R={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},z=`traffic`,B=`framed`,V={name:F,title:I,description:L,help:R,category:z,presentation:B}}));function H(e){return(0,U.jsx)(A,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:g(!1,e)}})}function Pe({withComparison:e,...t}){return(0,U.jsx)(be,{...t,widgetType:Ie,renderModule:Fe,renderComponent:A,attributes:{utmDimension:`utm_source,utm_medium`,reportParams:g(e)}})}var U,Fe,Ie,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),he(),xe(),b(),ve(),v(),Ce(),we(),je(),Me(),Ne(),U=r(),_(),Se(),Fe=`storybook/utm-insights`,Ie=ge(V,P),W={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:A,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},G={render:({withComparison:e})=>(0,U.jsx)(A,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:g(e)}}),args:{withComparison:!1},decorators:[S,x]},K={render:({withComparison:e})=>(0,U.jsx)(A,{attributes:{utmDimension:`utm_source,utm_medium`,reportParams:g(e)}}),args:{withComparison:!0},decorators:[S,x]},q={render:()=>H(`last-90-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/utm`,`loading`),()=>C(`stats/utm`,null))},J={render:()=>H(`last-7-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/utm`,`error`),()=>C(`stats/utm`,null))},Y={render:()=>H(`last-12-months`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/utm`,`error-retryable`),()=>C(`stats/utm`,null))},X={render:()=>H(`last-year`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/utm`,`empty`),()=>C(`stats/utm`,null))},Z={render:({withComparison:e})=>(0,U.jsx)(A,{attributes:{utmDimension:`utm_campaign`,reportParams:g(e)}}),args:{withComparison:!1},decorators:[S,x]},Q={render:e=>(0,U.jsx)(Pe,{...e}),args:{...ye,withComparison:!1},argTypes:{..._e,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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