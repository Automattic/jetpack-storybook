import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-DQ5lAs4a.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{N as a,t as o}from"./build-module-DMs68Vfd.js";import{n as s,w as c}from"./build-module-C6Ow06jV.js";import{r as l}from"./hooks-BCwpDVcN.js";import{R as u,W as ee,t as d}from"./build-module-JNPAD9ni.js";import{t as f,v as te}from"./src-Bf8IXmOS.js";import{Et as p,L as ne,Yn as m,ut as h}from"./chart-tooltip-BYCQMN6a.js";import{t as re}from"./leaderboard-chart-Cl5ZDKsB.js";import{C as g,N as ie,S as _,f as v,k as y}from"./report-metric-SMRr-c1r.js";import{t as ae}from"./widget-state-DROZBPus.js";import{S as b,b as x,t as S,x as C,y as w}from"./src-CNd5WjxR.js";import{n as oe,r as T}from"./with-widget-canvas-Dz43KNHY.js";import{n as E,t as se}from"./register-stats-mocks-BioeY0VZ.js";import{n as ce,t as D}from"./force-stats-mock-state-ChEz2Wd7.js";var O,k,A,j,M,N,le=e((()=>{O=`_root_pp1h6_1`,k=`_content_pp1h6_9`,A=`_backLink_pp1h6_17`,j=`_itemLabel_pp1h6_23`,M=`_itemLabelText_pp1h6_30`,N={root:O,content:k,backLink:A,itemLabel:j,itemLabelText:M}}));function P(e){return typeof e.label==`string`?e.label:String(e.label)}function ue(e){return{label:P(e),value:e.value,previousValue:e.previousValue,href:e.href}}function de(e){return{label:P(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(ue),childrenHaveComparison:e.childrenHaveComparison}}function fe({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,refetch:c}=p({...e,utmParam:t,max:n},{maxRows:n}),l=(r?.rows??[]).map(de);return{data:l,hasComparison:i,isLoading:a,isFetching:o,isError:l.length===0&&s,refetch:c}}var F=e((()=>{h()}));function pe({utmDimension:e,max:n}){let{reportParams:i}=ie(),{drillDownItem:o,drillDown:s,resetDrillDown:c}=l();(0,a.useEffect)(()=>{c()},[c,e]);let{data:d,hasComparison:f,isLoading:p,isFetching:m,isError:h,refetch:g}=fe({reportParams:i,utmParam:e,max:n}),_=(0,a.useMemo)(()=>d.find(e=>e.label===o)??null,[d,o]),y=!!_?.children?.length,b=(0,a.useMemo)(()=>y?_?.children??[]:d,[d,y,_]),x=y?!!_?.childrenHaveComparison:f;(0,a.useEffect)(()=>{o&&!y&&!p&&!m&&!h&&c()},[o,y,p,m,h,c]);let S=(0,a.useMemo)(()=>{let e=Math.max(...b.map(e=>e.value),1),n=Math.max(...b.map(e=>e.previousValue??0),1);return b.map((i,a)=>{let o=i.previousValue;return{id:`${a}-${i.label}`,label:(0,L.jsx)(u,{align:`center`,className:N.itemLabel,children:(0,L.jsx)(ee,{className:N.itemLabelText,children:i.label})}),currentValue:i.value,currentShare:i.value/e*100,previousValue:o,previousShare:x&&o!==void 0?o/n*100:void 0,delta:x&&o!==void 0?ne(i.value,o):void 0,...!y&&`children`in i&&i.children?.length&&{onClick:()=>s(i.label),ariaLabel:r(t(`View posts for %s`,`jetpack-premium-analytics`),i.label)}}})},[b,y,s,x]);return(0,L.jsxs)(L.Fragment,{children:[y?(0,L.jsx)(v,{label:t(`All UTM Insights`,`jetpack-premium-analytics`),ariaLabel:t(`View all UTM insights`,`jetpack-premium-analytics`),onClick:c,className:N.backLink}):null,(0,L.jsx)(`div`,{className:N.content,children:(0,L.jsx)(ae,{isLoading:p,isFetching:m,isError:h,isEmpty:d.length===0,error:{description:t(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:g}]},empty:{icon:te,description:t(`No UTM data in this period.`,`jetpack-premium-analytics`)},children:(0,L.jsx)(re,{data:S,withComparison:x,withOverlayLabel:!0,showLegend:!1,dataFormat:R})})})]})}function I({attributes:e={}}){let t=e.utmDimension??z,n=e.max??10;return(0,L.jsx)(y,{attributes:e,children:(0,L.jsx)(`div`,{className:N.root,children:(0,L.jsx)(pe,{utmDimension:t,max:n})})})}var L,R,z,me=e((()=>{o(),n(),d(),S(),f(),le(),F(),L=i(),R={type:`number`,options:{useMultipliers:!0,decimals:0}},z=`utm_source,utm_medium`})),B,he=e((()=>{n(),s(),B={name:`jpa/utm-insights`,title:t(`UTM Insights`,`jetpack-premium-analytics`),help:{content:t(`Track your campaign UTM performance data. Generate URL codes with our builder.`,`jetpack-premium-analytics`)},icon:c,attributes:[{id:`utmDimension`,label:t(`UTM parameter`,`jetpack-premium-analytics`),type:`text`,elements:[{label:t(`Source / Medium`,`jetpack-premium-analytics`),value:`utm_source,utm_medium`},{label:t(`Campaign / Source / Medium`,`jetpack-premium-analytics`),value:`utm_campaign,utm_source,utm_medium`},{label:t(`Source`,`jetpack-premium-analytics`),value:`utm_source`},{label:t(`Medium`,`jetpack-premium-analytics`),value:`utm_medium`},{label:t(`Campaign`,`jetpack-premium-analytics`),value:`utm_campaign`}],relevance:`high`},{id:`max`,label:t(`Max rows`,`jetpack-premium-analytics`),type:`number`}],example:{attributes:{utmDimension:`utm_source,utm_medium`,max:10}}}}));function V(e){return(0,H.jsx)(I,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:m(!1,e)}})}function ge({withComparison:e,...t}){return(0,H.jsx)(x,{...t,widgetType:W,renderModule:U,renderComponent:I,attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:m(e)}})}var H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),C(),oe(),_(),se(),ce(),me(),he(),H=i(),g(),E(),U=`storybook/utm-insights`,W={name:B.name,title:B.title,icon:B.icon,presentation:`framed`},G={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:I,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},K={render:({withComparison:e})=>(0,H.jsx)(I,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:m(e)}}),args:{withComparison:!1},decorators:[T]},q={render:({withComparison:e})=>(0,H.jsx)(I,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:m(e)}}),args:{withComparison:!0},decorators:[T]},J={render:()=>V(`last-90-days`),tags:[`!autodocs`],decorators:[T],beforeEach:()=>(D(`stats/utm`,`loading`),()=>D(`stats/utm`,null))},Y={render:()=>V(`last-7-days`),tags:[`!autodocs`],decorators:[T],beforeEach:()=>(D(`stats/utm`,`error`),()=>D(`stats/utm`,null))},X={render:()=>V(`last-365-days`),tags:[`!autodocs`],decorators:[T],beforeEach:()=>(D(`stats/utm`,`empty`),()=>D(`stats/utm`,null))},Z={render:({withComparison:e})=>(0,H.jsx)(I,{attributes:{utmDimension:`utm_campaign`,max:10,reportParams:m(e)}}),args:{withComparison:!1},decorators:[T]},Q={render:e=>(0,H.jsx)(ge,{...e}),args:{...w,withComparison:!1},argTypes:{...b,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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