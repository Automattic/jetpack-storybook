import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{N as a,t as o}from"./build-module-DMs68Vfd.js";import{f as s,n as c}from"./build-module-DwipKI4I.js";import{d as l,f as u,ht as d,r as f,s as p,v as m}from"./hooks-BGJ4NAlr.js";import{A as h,S as g,t as _}from"./build-module-8aAC0fK4.js";import{D as ee,t as v}from"./build-module-Bx6LKLuo.js";import{D as te}from"./chart-tooltip-8Up64gSg.js";import{t as ne}from"./leaderboard-chart-Brh_8X5q.js";import{i as re}from"./metric-tabs-chart-QZbEDI_M.js";import{o as ie}from"./report-metric-DTW4ucQq.js";import{i as y,n as b,r as x,t as S}from"./widget-dashboard-with-widget-1Gu_0bTv.js";import{t as C}from"./src-Br9sBVsJ.js";import{n as w,t as T}from"./register-stats-mocks-DcA8qIuN.js";var E,D,O,k,A,j,M,N,P,F=e((()=>{E=`_root_1sce5_1`,D=`_placeholder_1sce5_9`,O=`_paramSelect_1sce5_18`,k=`_backLink_1sce5_26`,A=`_itemLabel_1sce5_34`,j=`_itemLabelText_1sce5_41`,M=`_content_1sce5_47`,N=`_bodyHeader_1sce5_55`,P={root:E,placeholder:D,paramSelect:O,backLink:k,itemLabel:A,itemLabelText:j,content:M,bodyHeader:N}}));function I(e){return typeof e.label==`string`?e.label:String(e.label)}function L(e){return e.href??I(e)}function ae({reportParams:e,utmParam:t,max:n}){let{primary:r,comparison:i,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:l}=m({...e,utmParam:t,max:n}),u=r.data?.data?.[0]?.items??[],d=i.data?.data?.[0]?.items??[],f=new Map(d.map(e=>[I(e),e]));return{data:u.map(e=>{let t=I(e),n=f.get(t),r=n?.children??[],i=new Map(r.map(e=>[L(e),e.value])),o=(e.children??[]).map(e=>{let t=L(e);return{label:I(e),value:e.value,previousValue:a?i.get(t)??0:0,href:e.href}});return{label:t,value:e.value,previousValue:a?n?.value??0:0,children:o}}).slice(0,n>0?n:void 0),hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:l}}var oe=e((()=>{u()}));function se({utmParam:e,max:r,setAttributes:i}){let{reportParams:o}=l(),[s,c]=(0,a.useState)(e),{drillDownItem:u,drillDown:d,resetDrillDown:p}=f();(0,a.useEffect)(()=>{c(e),p()},[p,e]);let m=(0,a.useCallback)(e=>{let t=e;p(),c(t),i?.({utmParam:t})},[p,i]),{data:_,hasComparison:v,isLoading:y,isFetching:b,hasData:x,isError:S}=ae({reportParams:o,utmParam:s,max:r}),C=y||b&&x,w=(0,a.useMemo)(()=>_.find(e=>e.label===u)??null,[_,u]),T=!!w?.children?.length,E=(0,a.useMemo)(()=>T?w?.children??[]:_,[_,T,w]),D=(0,a.useMemo)(()=>{let e=Math.max(...E.map(e=>e.value),1),r=Math.max(...E.map(e=>e.previousValue),1);return E.map((i,a)=>({id:`${a}-${i.label}`,label:(0,z.jsx)(g,{align:`center`,className:P.itemLabel,children:(0,z.jsx)(h,{className:P.itemLabelText,children:i.label})}),currentValue:i.value,currentShare:i.value/e*100,previousValue:i.previousValue,previousShare:v&&i.previousValue>0?i.previousValue/r*100:0,delta:v?te(i.value,i.previousValue):0,...!T&&`children`in i&&i.children?.length&&{onClick:()=>d(i.label),ariaLabel:t(n(`View posts for %s`,`jetpack-premium-analytics`),i.label)}}))},[E,v,T,d]),O=T?(0,z.jsx)(ie,{label:n(`All UTM Insights`,`jetpack-premium-analytics`),ariaLabel:n(`View all UTM insights`,`jetpack-premium-analytics`),onClick:p,className:P.backLink}):null,k=(0,z.jsxs)(g,{direction:`row`,align:`center`,className:P.bodyHeader,children:[O,(0,z.jsx)(ee,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:n(`UTM parameter`,`jetpack-premium-analytics`),hideLabelFromVision:!0,value:s,options:H,onChange:m,className:P.paramSelect})]});return S?(0,z.jsxs)(`div`,{className:P.content,children:[k,(0,z.jsx)(g,{align:`center`,justify:`center`,className:P.placeholder,children:(0,z.jsx)(h,{children:n(`Could not load UTM data.`,`jetpack-premium-analytics`)})})]}):y&&_.length===0?(0,z.jsxs)(`div`,{className:P.content,children:[k,(0,z.jsx)(re,{})]}):(0,z.jsxs)(`div`,{className:P.content,children:[k,(0,z.jsx)(ne,{data:D,loading:C,withComparison:v,withOverlayLabel:!0,showLegend:!1,emptyStateText:n(`No UTM data in this period.`,`jetpack-premium-analytics`),dataFormat:B})]})}function R({attributes:e={},setAttributes:t}){let n=e.utmParam??V,r=e.max??10;return(0,z.jsx)(p,{attributes:e,children:(0,z.jsx)(`div`,{className:P.root,children:(0,z.jsx)(se,{utmParam:n,max:r,setAttributes:t})})})}var z,B,V,H,ce=e((()=>{v(),o(),r(),_(),C(),F(),oe(),z=i(),B={type:`number`,options:{useMultipliers:!0,decimals:0}},V=`utm_source,utm_medium`,H=[{label:n(`Source / Medium`,`jetpack-premium-analytics`),value:`utm_source,utm_medium`},{label:n(`Campaign / Source / Medium`,`jetpack-premium-analytics`),value:`utm_campaign,utm_source,utm_medium`},{label:n(`Source`,`jetpack-premium-analytics`),value:`utm_source`},{label:n(`Medium`,`jetpack-premium-analytics`),value:`utm_medium`},{label:n(`Campaign`,`jetpack-premium-analytics`),value:`utm_campaign`}]})),U,le=e((()=>{r(),c(),U={name:`jpa/utm-insights`,title:n(`UTM Insights`,`jetpack-premium-analytics`),icon:s,attributes:[{id:`utmParam`,label:n(`UTM parameter`,`jetpack-premium-analytics`),type:`string`},{id:`max`,label:n(`Max rows`,`jetpack-premium-analytics`),type:`number`}],example:{attributes:{utmParam:`utm_source,utm_medium`,max:10}}}}));function ue({withComparison:e,...t}){return(0,W.jsx)(b,{...t,widgetType:K,renderModule:G,renderComponent:R,attributes:{utmParam:`utm_source,utm_medium`,max:10,reportParams:d(e)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),x(),T(),ce(),le(),W=i(),w(),G=`storybook/utm-insights`,K={name:U.name,title:U.title,icon:U.icon,presentation:`framed`},q=e=>(0,W.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,W.jsx)(e,{})}),J={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:R,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},Y={render:({withComparison:e})=>(0,W.jsx)(R,{attributes:{utmParam:`utm_source,utm_medium`,max:10,reportParams:d(e)}}),args:{withComparison:!1},decorators:[q]},X={render:({withComparison:e})=>(0,W.jsx)(R,{attributes:{utmParam:`utm_source,utm_medium`,max:10,reportParams:d(e)}}),args:{withComparison:!0},decorators:[q]},Z={render:({withComparison:e})=>(0,W.jsx)(R,{attributes:{utmParam:`utm_campaign`,max:10,reportParams:d(e)}}),args:{withComparison:!1},decorators:[q]},Q={render:e=>(0,W.jsx)(ue,{...e}),args:{...S,withComparison:!1},argTypes:{...y,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: ({
    withComparison
  }) => <UtmInsightsRender attributes={{
    utmParam: 'utm_source,utm_medium',
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
    utmParam: 'utm_source,utm_medium',
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
    utmParam: 'utm_campaign',
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