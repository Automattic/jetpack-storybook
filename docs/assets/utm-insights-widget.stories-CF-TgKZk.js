import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{f as s,n as c}from"./build-module-DmVuor49.js";import{r as l}from"./hooks-DntS_Jp8.js";import{R as ee,W as te,t as u}from"./build-module-DokNvSv5.js";import{t as d,v as ne}from"./src-B3le4dug.js";import{Et as f,L as re,Yn as p,ut as m}from"./chart-tooltip-B-p4R1ne.js";import{t as ie}from"./leaderboard-chart-BMWgogS0.js";import{C as h,N as ae,S as g,f as oe,k as _}from"./report-metric-BEx9Ox4P.js";import{t as v}from"./widget-state-jmx0JXRV.js";import{S as y,b,t as x,x as se,y as ce}from"./src-bT7CpZTu.js";import{n as le,r as S}from"./with-widget-canvas-Dz43KNHY.js";import{n as ue,t as C}from"./src-BXRTsm-6.js";import{n as w,t as T}from"./register-stats-mocks-DTdk33pS.js";import{n as de,t as E}from"./force-stats-mock-state-ORZ_zReY.js";var D,O,k,A,j,M,fe=e((()=>{D=`_root_1c7ar_1`,O=`_content_1c7ar_9`,k=`_backLink_1c7ar_17`,A=`_itemLabel_1c7ar_23`,j=`_itemLabelText_1c7ar_30`,M={root:D,content:O,backLink:k,itemLabel:A,itemLabelText:j}}));function N(e){return typeof e.label==`string`?e.label:String(e.label)}function pe(e){return{label:N(e),value:e.value,previousValue:e.previousValue,href:e.href}}function me(e){return{label:N(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(pe),childrenHaveComparison:e.childrenHaveComparison}}function he({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,refetch:c}=f({...e,utmParam:t,max:n},{maxRows:n}),l=(r?.rows??[]).map(me);return{data:l,hasComparison:i,isLoading:a,isFetching:o,isError:l.length===0&&s,refetch:c}}var P=e((()=>{m()}));function F({utmDimension:e,max:r}){let{reportParams:i}=ae(),{drillDownItem:o,drillDown:s,resetDrillDown:c}=l();(0,a.useEffect)(()=>{c()},[c,e]);let{data:u,hasComparison:d,isLoading:f,isFetching:p,isError:m,refetch:h}=he({reportParams:i,utmParam:e,max:r}),g=(0,a.useMemo)(()=>u.find(e=>e.label===o)??null,[u,o]),_=!!g?.children?.length,y=(0,a.useMemo)(()=>_?g?.children??[]:u,[u,_,g]),b=_?!!g?.childrenHaveComparison:d;(0,a.useEffect)(()=>{o&&!_&&!f&&!p&&!m&&c()},[o,_,f,p,m,c]);let x=(0,a.useMemo)(()=>{let e=Math.max(...y.map(e=>e.value),1),r=Math.max(...y.map(e=>e.previousValue??0),1);return y.map((i,a)=>{let o=i.previousValue;return{id:`${a}-${i.label}`,label:(0,L.jsx)(ee,{align:`center`,className:M.itemLabel,children:(0,L.jsx)(te,{className:M.itemLabelText,children:i.label})}),currentValue:i.value,currentShare:i.value/e*100,previousValue:o,previousShare:b&&o!==void 0?o/r*100:void 0,delta:b&&o!==void 0?re(i.value,o):void 0,...!_&&`children`in i&&i.children?.length&&{onClick:()=>s(i.label),ariaLabel:t(n(`View posts for %s`,`jetpack-premium-analytics`),i.label)}}})},[y,_,s,b]);return(0,L.jsxs)(L.Fragment,{children:[_?(0,L.jsx)(oe,{label:n(`All UTM Insights`,`jetpack-premium-analytics`),ariaLabel:n(`View all UTM insights`,`jetpack-premium-analytics`),onClick:c,className:M.backLink}):null,(0,L.jsx)(`div`,{className:M.content,children:(0,L.jsx)(v,{isLoading:f,isFetching:p,isError:m,isEmpty:u.length===0,error:{description:n(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:n(`Retry`,`jetpack-premium-analytics`),onClick:h}]},empty:{icon:ne,description:n(`No UTM data in this period.`,`jetpack-premium-analytics`)},children:(0,L.jsx)(ie,{data:x,withComparison:b,withOverlayLabel:!0,showLegend:!1,dataFormat:R})})})]})}function I({attributes:e={}}){let t=e.utmDimension??z,n=e.max??10;return(0,L.jsx)(_,{attributes:e,children:(0,L.jsx)(`div`,{className:M.root,children:(0,L.jsx)(F,{utmDimension:t,max:n})})})}var L,R,z,ge=e((()=>{o(),r(),u(),x(),d(),fe(),P(),L=i(),R={type:`number`,options:{useMultipliers:!0,decimals:0}},z=`utm_source,utm_medium`})),B,_e=e((()=>{r(),c(),C(),B={name:`jpa/utm-insights`,title:n(`UTM Insights`,`jetpack-premium-analytics`),help:{content:n(`Track your campaign UTM performance data. Generate URL codes with our builder.`,`jetpack-premium-analytics`)},icon:s,attributes:[{id:`utmDimension`,label:n(`UTM parameter`,`jetpack-premium-analytics`),type:`text`,Edit:ue,elements:[{label:n(`Source / Medium`,`jetpack-premium-analytics`),value:`utm_source,utm_medium`},{label:n(`Campaign / Source / Medium`,`jetpack-premium-analytics`),value:`utm_campaign,utm_source,utm_medium`},{label:n(`Source`,`jetpack-premium-analytics`),value:`utm_source`},{label:n(`Medium`,`jetpack-premium-analytics`),value:`utm_medium`},{label:n(`Campaign`,`jetpack-premium-analytics`),value:`utm_campaign`}],relevance:`high`},{id:`max`,label:n(`Max rows`,`jetpack-premium-analytics`),type:`number`}],example:{attributes:{utmDimension:`utm_source,utm_medium`,max:10}}}}));function V(e){return(0,H.jsx)(I,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:p(!1,e)}})}function ve({withComparison:e,...t}){return(0,H.jsx)(b,{...t,widgetType:W,renderModule:U,renderComponent:I,attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:p(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),se(),le(),g(),T(),de(),ge(),_e(),H=i(),h(),w(),U=`storybook/utm-insights`,W={name:B.name,title:B.title,icon:B.icon,presentation:`framed`},G={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:I,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},K={render:({withComparison:e})=>(0,H.jsx)(I,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:p(e)}}),args:{withComparison:!1},decorators:[S]},q={render:({withComparison:e})=>(0,H.jsx)(I,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:p(e)}}),args:{withComparison:!0},decorators:[S]},J={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(E(`stats/utm`,`loading`),()=>E(`stats/utm`,null))},Y={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(E(`stats/utm`,`error`),()=>E(`stats/utm`,null))},X={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[S],beforeEach:()=>(E(`stats/utm`,`empty`),()=>E(`stats/utm`,null))},Z={render:({withComparison:e})=>(0,H.jsx)(I,{attributes:{utmDimension:`utm_campaign`,max:10,reportParams:p(e)}}),args:{withComparison:!1},decorators:[S]},Q={render:e=>(0,H.jsx)(ve,{...e}),args:{...ce,withComparison:!1},argTypes:{...y,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
  decorators: [withWidgetCanvas]
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
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => renderUtmInsightsOnPreset('last-90-days'),
  // Off the shared autodocs page — path-keyed override; see forceStatsMockState.
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('stats/utm', 'loading');
    return () => forceStatsMockState('stats/utm', null);
  }
}`,...J.parameters?.docs?.source},description:{story:`First load: the fetch is in flight, so the widget shows its loading state. The
mock is forced to never resolve for the duration of this story.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => renderUtmInsightsOnPreset('last-7-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: () => {
    forceStatsMockState('stats/utm', 'error');
    return () => forceStatsMockState('stats/utm', null);
  }
}`,...Y.parameters?.docs?.source},description:{story:`The fetch failed: the widget shows its error state with a Retry action (which
re-runs the query — still mocked as failing while this story is active).`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => renderUtmInsightsOnPreset('last-365-days'),
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
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
  decorators: [withWidgetCanvas]
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`Loading`,`Error`,`Empty`,`ByCampaign`,`WidgetDashboardWithWidget`]}))();export{Z as ByCampaign,K as Default,X as Empty,Y as Error,J as Loading,Q as WidgetDashboardWithWidget,q as WithComparison,$ as __namedExportsOrder,G as default};