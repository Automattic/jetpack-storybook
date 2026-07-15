import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-DQ5lAs4a.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{N as a,t as o}from"./build-module-DMs68Vfd.js";import{n as s,w as c}from"./build-module-Bt8gOW8e.js";import{r as l}from"./hooks-BjxymoX0.js";import{K as u,R as ee,t as d}from"./build-module-BAze1CUO.js";import{t as f,v as p}from"./src-CT5b53ej.js";import{Kn as m,L as h,Tt as g,ut as _}from"./chart-tooltip-ClIvRUzH.js";import{t as te}from"./leaderboard-chart-D4uyqD7q.js";import{E as ne,S as v,f as re}from"./report-metric-C9QRZwAo.js";import{t as y}from"./widget-state-CkRqQWXE.js";import{S as b,b as x,t as S,x as C,y as w}from"./src-DeeVzTNc.js";import{n as T,t as E}from"./register-stats-mocks-CSwgBP6A.js";var D,O,k,A,j,M,N=e((()=>{D=`_root_pp1h6_1`,O=`_content_pp1h6_9`,k=`_backLink_pp1h6_17`,A=`_itemLabel_pp1h6_23`,j=`_itemLabelText_pp1h6_30`,M={root:D,content:O,backLink:k,itemLabel:A,itemLabelText:j}}));function P(e){return typeof e.label==`string`?e.label:String(e.label)}function F(e){return{label:P(e),value:e.value,previousValue:e.previousValue,href:e.href}}function ie(e){return{label:P(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(F),childrenHaveComparison:e.childrenHaveComparison}}function ae({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,isError:s,refetch:c}=g({...e,utmParam:t,max:n},{maxRows:n}),l=(r?.rows??[]).map(ie);return{data:l,hasComparison:i,isLoading:a,isFetching:o,isError:l.length===0&&s,refetch:c}}var oe=e((()=>{_()}));function se({utmDimension:e,max:n}){let{reportParams:i}=ne(),{drillDownItem:o,drillDown:s,resetDrillDown:c}=l();(0,a.useEffect)(()=>{c()},[c,e]);let{data:d,hasComparison:f,isLoading:m,isFetching:g,isError:_,refetch:v}=ae({reportParams:i,utmParam:e,max:n}),b=(0,a.useMemo)(()=>d.find(e=>e.label===o)??null,[d,o]),x=!!b?.children?.length,S=(0,a.useMemo)(()=>x?b?.children??[]:d,[d,x,b]),C=x?!!b?.childrenHaveComparison:f;(0,a.useEffect)(()=>{o&&!x&&!m&&!g&&!_&&c()},[o,x,m,g,_,c]);let w=(0,a.useMemo)(()=>{let e=Math.max(...S.map(e=>e.value),1),n=Math.max(...S.map(e=>e.previousValue??0),1);return S.map((i,a)=>{let o=i.previousValue;return{id:`${a}-${i.label}`,label:(0,L.jsx)(ee,{align:`center`,className:M.itemLabel,children:(0,L.jsx)(u,{className:M.itemLabelText,children:i.label})}),currentValue:i.value,currentShare:i.value/e*100,previousValue:o,previousShare:C&&o!==void 0?o/n*100:void 0,delta:C&&o!==void 0?h(i.value,o):void 0,...!x&&`children`in i&&i.children?.length&&{onClick:()=>s(i.label),ariaLabel:r(t(`View posts for %s`,`jetpack-premium-analytics`),i.label)}}})},[S,x,s,C]);return(0,L.jsxs)(L.Fragment,{children:[x?(0,L.jsx)(re,{label:t(`All UTM Insights`,`jetpack-premium-analytics`),ariaLabel:t(`View all UTM insights`,`jetpack-premium-analytics`),onClick:c,className:M.backLink}):null,(0,L.jsx)(`div`,{className:M.content,children:(0,L.jsx)(y,{isLoading:m,isFetching:g,isError:_,isEmpty:d.length===0,error:{description:t(`We couldn't load UTM data. Please try again in a moment.`,`jetpack-premium-analytics`),actions:[{label:t(`Retry`,`jetpack-premium-analytics`),onClick:v}]},empty:{icon:p,description:t(`No UTM data in this period.`,`jetpack-premium-analytics`)},children:(0,L.jsx)(te,{data:w,withComparison:C,withOverlayLabel:!0,showLegend:!1,dataFormat:R})})})]})}function I({attributes:e={}}){let t=e.utmDimension??z,n=e.max??10;return(0,L.jsx)(v,{attributes:e,children:(0,L.jsx)(`div`,{className:M.root,children:(0,L.jsx)(se,{utmDimension:t,max:n})})})}var L,R,z,B=e((()=>{o(),n(),d(),S(),f(),N(),oe(),L=i(),R={type:`number`,options:{useMultipliers:!0,decimals:0}},z=`utm_source,utm_medium`})),V,H=e((()=>{n(),s(),V={name:`jpa/utm-insights`,title:t(`UTM Insights`,`jetpack-premium-analytics`),help:{content:t(`Track your campaign UTM performance data. Generate URL codes with our builder.`,`jetpack-premium-analytics`)},icon:c,attributes:[{id:`utmDimension`,label:t(`UTM parameter`,`jetpack-premium-analytics`),type:`text`,elements:[{label:t(`Source / Medium`,`jetpack-premium-analytics`),value:`utm_source,utm_medium`},{label:t(`Campaign / Source / Medium`,`jetpack-premium-analytics`),value:`utm_campaign,utm_source,utm_medium`},{label:t(`Source`,`jetpack-premium-analytics`),value:`utm_source`},{label:t(`Medium`,`jetpack-premium-analytics`),value:`utm_medium`},{label:t(`Campaign`,`jetpack-premium-analytics`),value:`utm_campaign`}],relevance:`high`},{id:`max`,label:t(`Max rows`,`jetpack-premium-analytics`),type:`number`}],example:{attributes:{utmDimension:`utm_source,utm_medium`,max:10}}}}));function U({withComparison:e,...t}){return(0,W.jsx)(x,{...t,widgetType:K,renderModule:G,renderComponent:I,attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:m(e)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{_(),C(),E(),B(),H(),W=i(),T(),G=`storybook/utm-insights`,K={name:V.name,title:V.title,icon:V.icon,presentation:`framed`},q=e=>(0,W.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,W.jsx)(e,{})}),J={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:I,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},Y={render:({withComparison:e})=>(0,W.jsx)(I,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:m(e)}}),args:{withComparison:!1},decorators:[q]},X={render:({withComparison:e})=>(0,W.jsx)(I,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:m(e)}}),args:{withComparison:!0},decorators:[q]},Z={render:({withComparison:e})=>(0,W.jsx)(I,{attributes:{utmDimension:`utm_campaign`,max:10,reportParams:m(e)}}),args:{withComparison:!1},decorators:[q]},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...w,withComparison:!1},argTypes:{...b,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithComparison`,`ByCampaign`,`WidgetDashboardWithWidget`]}))();export{Z as ByCampaign,Y as Default,Q as WidgetDashboardWithWidget,X as WithComparison,$ as __namedExportsOrder,J as default};