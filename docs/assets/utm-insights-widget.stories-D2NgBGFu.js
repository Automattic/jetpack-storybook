import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{A as a,t as o}from"./build-module-DrryaqBL.js";import{f as s,n as c}from"./build-module-DmVuor49.js";import{r as l}from"./hooks-BZbMBRv-.js";import{R as u,W as ee,t as d}from"./build-module-tgGieqUZ.js";import{t as f,v as te}from"./src-B3le4dug.js";import{Et as p,L as m,Yn as h,ut as g}from"./chart-tooltip-D391HsEs.js";import{t as _}from"./leaderboard-chart-BsvsfHxv.js";import{C as v,N as ne,S as y,f as b,k as x}from"./report-metric-rOGqqN_8.js";import{t as re}from"./widget-state-CzHLjliM.js";import{S,b as C,t as w,x as T,y as E}from"./src-Cv7mlpCY.js";import{n as ie,r as D}from"./with-widget-canvas-Dz43KNHY.js";import{n as ae,t as oe}from"./register-stats-mocks-IZuWy5pg.js";import{n as se,t as O}from"./force-stats-mock-state-D7Q5aRpf.js";var k,A,j,M,N,P,ce=e((()=>{k=`_root_1c7ar_1`,A=`_content_1c7ar_9`,j=`_backLink_1c7ar_17`,M=`_itemLabel_1c7ar_23`,N=`_itemLabelText_1c7ar_30`,P={root:k,content:A,backLink:j,itemLabel:M,itemLabelText:N}}));function F(e){return typeof e.label==`string`?e.label:String(e.label)}function le(e){return{label:F(e),value:e.value,previousValue:e.previousValue,href:e.href}}function ue(e){return{label:F(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(le),childrenHaveComparison:e.childrenHaveComparison}}function de({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,refetch:c}=p({...e,utmParam:t,max:n},{maxRows:n}),l=(r?.rows??[]).map(ue);return{data:l,hasComparison:i,isLoading:a,isFetching:o,isError:l.length===0&&s,refetch:c}}var fe=e((()=>{g()}));function pe({utmDimension:e,max:r}){let{reportParams:i}=ne(),{drillDownItem:o,drillDown:s,resetDrillDown:c}=l();(0,a.useEffect)(()=>{c()},[c,e]);let{data:d,hasComparison:f,isLoading:p,isFetching:h,isError:g,refetch:v}=de({reportParams:i,utmParam:e,max:r}),y=(0,a.useMemo)(()=>d.find(e=>e.label===o)??null,[d,o]),x=!!y?.children?.length,S=(0,a.useMemo)(()=>x?y?.children??[]:d,[d,x,y]),C=x?!!y?.childrenHaveComparison:f;(0,a.useEffect)(()=>{o&&!x&&!p&&!h&&!g&&c()},[o,x,p,h,g,c]);let w=(0,a.useMemo)(()=>{let e=Math.max(...S.map(e=>e.value),1),r=Math.max(...S.map(e=>e.previousValue??0),1);return S.map((i,a)=>{let o=i.previousValue;return{id:`${a}-${i.label}`,label:(0,L.jsx)(u,{align:`center`,className:P.itemLabel,children:(0,L.jsx)(ee,{className:P.itemLabelText,children:i.label})}),currentValue:i.value,currentShare:i.value/e*100,previousValue:o,previousShare:C&&o!==void 0?o/r*100:void 0,delta:C&&o!==void 0?m(i.value,o):void 0,...!x&&`children`in i&&i.children?.length&&{onClick:()=>s(i.label),ariaLabel:t(n(`View posts for %s`,`jetpack-premium-analytics`),i.label)}}})},[S,x,s,C]);return(0,L.jsxs)(L.Fragment,{children:[x?(0,L.jsx)(b,{label:n(`All UTM Insights`,`jetpack-premium-analytics`),ariaLabel:n(`View all UTM insights`,`jetpack-premium-analytics`),onClick:c,className:P.backLink}):null,(0,L.jsx)(`div`,{className:P.content,children:(0,L.jsx)(re,{isLoading:p,isFetching:h,isError:g,isEmpty:d.length===0,error:{description:n(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:n(`Retry`,`jetpack-premium-analytics`),onClick:v}]},empty:{icon:te,description:n(`No UTM data in this period.`,`jetpack-premium-analytics`)},children:(0,L.jsx)(_,{data:w,withComparison:C,withOverlayLabel:!0,showLegend:!1,dataFormat:R})})})]})}function I({attributes:e={}}){let t=e.utmDimension??z,n=e.max??10;return(0,L.jsx)(x,{attributes:e,children:(0,L.jsx)(`div`,{className:P.root,children:(0,L.jsx)(pe,{utmDimension:t,max:n})})})}var L,R,z,me=e((()=>{o(),r(),d(),w(),f(),ce(),fe(),L=i(),R={type:`number`,options:{useMultipliers:!0,decimals:0}},z=`utm_source,utm_medium`})),B,he=e((()=>{r(),c(),B={name:`jpa/utm-insights`,title:n(`UTM Insights`,`jetpack-premium-analytics`),help:{content:n(`Track your campaign UTM performance data. Generate URL codes with our builder.`,`jetpack-premium-analytics`)},icon:s,attributes:[{id:`utmDimension`,label:n(`UTM parameter`,`jetpack-premium-analytics`),type:`text`,elements:[{label:n(`Source / Medium`,`jetpack-premium-analytics`),value:`utm_source,utm_medium`},{label:n(`Campaign / Source / Medium`,`jetpack-premium-analytics`),value:`utm_campaign,utm_source,utm_medium`},{label:n(`Source`,`jetpack-premium-analytics`),value:`utm_source`},{label:n(`Medium`,`jetpack-premium-analytics`),value:`utm_medium`},{label:n(`Campaign`,`jetpack-premium-analytics`),value:`utm_campaign`}],relevance:`high`},{id:`max`,label:n(`Max rows`,`jetpack-premium-analytics`),type:`number`}],example:{attributes:{utmDimension:`utm_source,utm_medium`,max:10}}}}));function V(e){return(0,H.jsx)(I,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:h(!1,e)}})}function ge({withComparison:e,...t}){return(0,H.jsx)(C,{...t,widgetType:W,renderModule:U,renderComponent:I,attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:h(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{g(),T(),ie(),y(),oe(),se(),me(),he(),H=i(),v(),ae(),U=`storybook/utm-insights`,W={name:B.name,title:B.title,icon:B.icon,presentation:`framed`},G={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:I,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},K={render:({withComparison:e})=>(0,H.jsx)(I,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:h(e)}}),args:{withComparison:!1},decorators:[D]},q={render:({withComparison:e})=>(0,H.jsx)(I,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:h(e)}}),args:{withComparison:!0},decorators:[D]},J={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[D],beforeEach:()=>(O(`stats/utm`,`loading`),()=>O(`stats/utm`,null))},Y={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[D],beforeEach:()=>(O(`stats/utm`,`error`),()=>O(`stats/utm`,null))},X={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[D],beforeEach:()=>(O(`stats/utm`,`empty`),()=>O(`stats/utm`,null))},Z={render:({withComparison:e})=>(0,H.jsx)(I,{attributes:{utmDimension:`utm_campaign`,max:10,reportParams:h(e)}}),args:{withComparison:!1},decorators:[D]},Q={render:e=>(0,H.jsx)(ge,{...e}),args:{...E,withComparison:!1},argTypes:{...S,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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