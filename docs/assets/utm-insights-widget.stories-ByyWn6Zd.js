import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{f as s,n as c}from"./build-module-DmVuor49.js";import{r as l}from"./hooks-b_vTJ5Hr.js";import{R as ee,W as te,t as u}from"./build-module-C9jF3cjn.js";import{t as d,v as ne}from"./src-B3le4dug.js";import{G as re,K as ie,Rt as ae,cr as f,yt as p}from"./chart-tooltip-CgoJ0b1f.js";import{t as oe}from"./leaderboard-chart-DO5Nhe6w.js";import{F as m,G as se,P as h,S as ce,V as g,b as le,v as ue}from"./report-metric-wiNZkTvH.js";import{t as de}from"./widget-state-DM1OFNtO.js";import{C as _,D as v,E as y,O as b,S as fe,T as pe,b as me,k as x,t as he,w as ge,x as S}from"./src-B9qAQjkO.js";import{n as _e,t as ve}from"./src-BmPBlQ4x.js";import{n as ye,t as be}from"./register-stats-mocks-ChZnkGRi.js";import{n as xe,t as C}from"./force-stats-mock-state-Z_kckADE.js";var w,T,E,D,O,k,Se=e((()=>{w=`_root_1c7ar_1`,T=`_content_1c7ar_9`,E=`_backLink_1c7ar_17`,D=`_itemLabel_1c7ar_23`,O=`_itemLabelText_1c7ar_30`,k={root:w,content:T,backLink:E,itemLabel:D,itemLabelText:O}}));function A(e){return typeof e.label==`string`?e.label:String(e.label)}function Ce(e){return{label:A(e),value:e.value,previousValue:e.previousValue,href:e.href}}function we(e){return{label:A(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(Ce),childrenHaveComparison:e.childrenHaveComparison}}function Te({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,refetch:c}=ae({...e,utmParam:t,max:n},{maxRows:n}),l=(r?.rows??[]).map(we);return{data:l,hasComparison:i,isLoading:a,isFetching:o,isError:l.length===0&&s,refetch:c}}var Ee=e((()=>{p()}));function De(e){switch(e){case`utm_source,utm_medium`:return`source-medium`;case`utm_campaign,utm_source,utm_medium`:return`campaign-source-medium`;case`utm_source`:return`source`;case`utm_medium`:return`medium`;case`utm_campaign`:return`campaign`}}function Oe({utmDimension:e,max:r,showReportLink:i}){let{reportParams:o}=se(),{drillDownItem:s,drillDown:c,resetDrillDown:u}=l();(0,a.useEffect)(()=>{u()},[u,e]);let{data:d,hasComparison:ae,isLoading:f,isFetching:p,isError:m,refetch:h}=Te({reportParams:o,utmParam:e,max:r}),g=(0,a.useMemo)(()=>d.find(e=>e.label===s)??null,[d,s]),_=!!g?.children?.length,v=(0,a.useMemo)(()=>_?g?.children??[]:d,[d,_,g]),y=_?!!g?.childrenHaveComparison:ae;(0,a.useEffect)(()=>{s&&!_&&!f&&!p&&!m&&u()},[s,_,f,p,m,u]);let b=(0,a.useMemo)(()=>{let e=Math.max(...v.map(e=>e.value),1),r=Math.max(...v.map(e=>e.previousValue??0),1);return v.map((i,a)=>{let o=i.previousValue;return{id:`${a}-${i.label}`,label:(0,M.jsx)(ee,{align:`center`,className:k.itemLabel,children:(0,M.jsx)(te,{className:k.itemLabelText,children:i.label})}),currentValue:i.value,currentShare:re(i.value,e),previousValue:o,previousShare:y&&o!==void 0?re(o,r):void 0,delta:y&&o!==void 0?ie(i.value,o):void 0,...!_&&`children`in i&&i.children?.length&&{onClick:()=>c(i.label),ariaLabel:t(n(`View posts for %s`,`jetpack-premium-analytics`),i.label)}}})},[v,_,c,y]);return(0,M.jsxs)(M.Fragment,{children:[_?(0,M.jsx)(ce,{label:n(`All UTM Insights`,`jetpack-premium-analytics`),ariaLabel:n(`View all UTM insights`,`jetpack-premium-analytics`),onClick:u,className:k.backLink}):null,(0,M.jsx)(`div`,{className:k.content,children:(0,M.jsx)(de,{isLoading:f,isFetching:p,isError:m,isEmpty:d.length===0,error:{description:n(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:n(`Retry`,`jetpack-premium-analytics`),onClick:h}]},empty:{icon:ne,description:n(`No UTM data in this period.`,`jetpack-premium-analytics`)},children:(0,M.jsx)(oe,{data:b,withComparison:y,withOverlayLabel:!0,showLegend:!1,dataFormat:N})})}),i&&(0,M.jsx)(le,{children:(0,M.jsx)(ue,{report:`utm`,section:De(e)})})]})}function j({attributes:e={}}){let t=e.utmDimension??P,n=e.max??10,r=e.showReportLink??!0;return(0,M.jsx)(g,{attributes:e,children:(0,M.jsx)(`div`,{className:k.root,children:(0,M.jsx)(Oe,{utmDimension:t,max:n,showReportLink:r})})})}var M,N,P,ke=e((()=>{o(),r(),u(),he(),d(),Se(),Ee(),M=i(),N={type:`number`,options:{useMultipliers:!0,decimals:0}},P=`utm_source,utm_medium`})),F,Ae=e((()=>{r(),c(),ve(),F={icon:s,attributes:[{id:`utmDimension`,label:n(`UTM parameter`,`jetpack-premium-analytics`),type:`text`,Edit:_e,elements:[{label:n(`Source / Medium`,`jetpack-premium-analytics`),value:`utm_source,utm_medium`},{label:n(`Campaign / Source / Medium`,`jetpack-premium-analytics`),value:`utm_campaign,utm_source,utm_medium`},{label:n(`Source`,`jetpack-premium-analytics`),value:`utm_source`},{label:n(`Medium`,`jetpack-premium-analytics`),value:`utm_medium`},{label:n(`Campaign`,`jetpack-premium-analytics`),value:`utm_campaign`}],relevance:`high`},{id:`max`,label:n(`Number of results`,`jetpack-premium-analytics`),type:`integer`}],example:{attributes:{utmDimension:`utm_source,utm_medium`,max:10}}}})),I,L,R,z,B,V,H,je=e((()=>{I=`jpa/utm-insights`,L=`UTM Insights`,R=`Traffic breakdown by UTM parameters — source, medium, campaign, and combinations.`,z={content:`Your top UTM campaigns, sorted by views.`,links:[{label:`Learn more`,href:`https://jetpack.com/support/jetpack-stats/`}]},B=`traffic`,V=`framed`,H={name:I,title:L,description:R,help:z,category:B,presentation:V}}));function U(e){return(0,W.jsx)(j,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:f(!1,e)}})}function Me({withComparison:e,...t}){return(0,W.jsx)(pe,{...t,widgetType:G,renderModule:Ne,renderComponent:j,attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:f(e)}})}var W,Ne,G,Pe,K,q,J,Y,X,Z,Q,$;e((()=>{p(),y(),b(),_(),me(),h(),be(),xe(),ke(),Ae(),je(),W=i(),m(),ye(),Ne=`storybook/utm-insights`,G=fe(H,F),Pe={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:j,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},K={render:({withComparison:e})=>(0,W.jsx)(j,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:f(e)}}),args:{withComparison:!1},decorators:[S,x]},q={render:({withComparison:e})=>(0,W.jsx)(j,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:f(e)}}),args:{withComparison:!0},decorators:[S,x]},J={render:()=>U(`last-90-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/utm`,`loading`),()=>C(`stats/utm`,null))},Y={render:()=>U(`last-7-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/utm`,`error`),()=>C(`stats/utm`,null))},X={render:()=>U(`last-365-days`),tags:[`!autodocs`],decorators:[S,x],beforeEach:()=>(C(`stats/utm`,`empty`),()=>C(`stats/utm`,null))},Z={render:({withComparison:e})=>(0,W.jsx)(j,{attributes:{utmDimension:`utm_campaign`,max:10,reportParams:f(e)}}),args:{withComparison:!1},decorators:[S,x]},Q={render:e=>(0,W.jsx)(Me,{...e}),args:{...ge,withComparison:!1},argTypes:{...v,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`ByCampaign`,`WidgetDashboardWithWidget`]}))();export{Z as ByCampaign,K as Default,X as Empty,Y as Error,J as Loading,Q as WidgetDashboardWithWidget,q as WithComparison,$ as __namedExportsOrder,Pe as default};