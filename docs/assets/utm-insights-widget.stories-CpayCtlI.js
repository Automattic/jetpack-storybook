import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{N as a,t as o}from"./build-module-DMs68Vfd.js";import{f as s,n as c}from"./build-module-h3iDQ_Ze.js";import{Z as l,a as u,l as d,m as ee,u as f}from"./hooks-D7f32386.js";import{A as p,E as m,S as h,t as g,w as te}from"./build-module-BY3jOzjV.js";import{D as ne,t as _}from"./build-module-DX4wQU9k.js";import{p as re}from"./chart-tooltip-qQx74dHq.js";import{t as ie}from"./leaderboard-chart-B2EpPoZY.js";import{i as ae}from"./metric-tabs-chart-BUidUmGZ.js";import{t as v}from"./src-CDKmVVaS.js";import{i as y,n as b,r as x,t as S}from"./widget-dashboard-with-widget-D8c6E5AZ.js";import{n as C,t as w}from"./register-stats-mocks-CJg8guY9.js";var T,E,oe,se,D,O,k,A,j,M,N,P,F,I,L,ce=e((()=>{T=`_root_1phle_1`,E=`_placeholder_1phle_9`,oe=`_widgetHeader_1phle_18`,se=`_breadcrumb_1phle_25`,D=`_headerTitle_1phle_39`,O=`_headerIcon_1phle_47`,k=`_breadcrumbTitle_1phle_51`,A=`_breadcrumbLink_1phle_52`,j=`_breadcrumbSeparator_1phle_75`,M=`_breadcrumbCurrent_1phle_81`,N=`_paramSelect_1phle_89`,P=`_itemLabel_1phle_95`,F=`_itemLabelText_1phle_102`,I=`_content_1phle_108`,L={root:T,placeholder:E,widgetHeader:oe,breadcrumb:se,headerTitle:D,headerIcon:O,breadcrumbTitle:k,breadcrumbLink:A,breadcrumbSeparator:j,breadcrumbCurrent:M,paramSelect:N,itemLabel:P,itemLabelText:F,content:I}}));function R(e){return typeof e.label==`string`?e.label:String(e.label)}function z(e){return e.href??R(e)}function le({reportParams:e,utmParam:t,max:n}){let{primary:r,comparison:i,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:l}=ee({...e,utmParam:t,max:n}),u=r.data?.data?.[0]?.items??[],d=i.data?.data?.[0]?.items??[],f=new Map(d.map(e=>[R(e),e]));return{data:u.map(e=>{let t=R(e),n=f.get(t),r=n?.children??[],i=new Map(r.map(e=>[z(e),e.value])),o=(e.children??[]).map(e=>{let t=z(e);return{label:R(e),value:e.value,previousValue:a?i.get(t)??0:0,href:e.href}});return{label:t,value:e.value,previousValue:a?n?.value??0:0,children:o}}).slice(0,n>0?n:void 0),hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:l}}var ue=e((()=>{f()})),B,V=e((()=>{r(),c(),B={name:`jpa/utm-insights`,title:n(`UTM Insights`,`jetpack-premium-analytics`),icon:s,attributes:[{id:`utmParam`,label:n(`UTM parameter`,`jetpack-premium-analytics`),type:`string`},{id:`max`,label:n(`Max rows`,`jetpack-premium-analytics`),type:`number`}],example:{attributes:{utmParam:`utm_source,utm_medium`,max:10}}}}));function H(){return(0,W.jsxs)(`span`,{className:L.headerTitle,children:[(0,W.jsx)(m,{icon:B.icon,size:20,className:L.headerIcon}),(0,W.jsx)(`span`,{children:n(`UTM Insights`,`jetpack-premium-analytics`)})]})}function de({utmParam:e,max:r,setAttributes:i}){let{reportParams:o}=d(),[s,c]=(0,a.useState)(e),[l,u]=(0,a.useState)(null);(0,a.useEffect)(()=>{c(e),u(null)},[e]);let ee=(0,a.useCallback)(e=>{let t=e;u(null),c(t),i?.({utmParam:t})},[i]),f=(0,a.useCallback)(()=>u(null),[]),{data:m,hasComparison:g,isLoading:_,isFetching:v,hasData:y,isError:b}=le({reportParams:o,utmParam:s,max:r}),x=_||v&&y,S=(0,a.useMemo)(()=>m.find(e=>e.label===l)??null,[m,l]),C=!!S?.children?.length,w=(0,a.useMemo)(()=>C?S?.children??[]:m,[m,C,S]),T=(0,a.useMemo)(()=>{let e=Math.max(...w.map(e=>e.value),1),r=Math.max(...w.map(e=>e.previousValue),1);return w.map((i,a)=>({id:`${a}-${i.label}`,label:(0,W.jsx)(h,{align:`center`,className:L.itemLabel,children:(0,W.jsx)(p,{className:L.itemLabelText,children:i.label})}),currentValue:i.value,currentShare:i.value/e*100,previousValue:i.previousValue,previousShare:g&&i.previousValue>0?i.previousValue/r*100:0,delta:g?re(i.value,i.previousValue):0,...!C&&`children`in i&&i.children?.length&&{onClick:()=>u(i.label),ariaLabel:t(n(`View posts for %s`,`jetpack-premium-analytics`),i.label)}}))},[w,g,C]),E=(0,W.jsxs)(h,{direction:`row`,justify:`space-between`,align:`center`,className:L.widgetHeader,children:[(0,W.jsx)(h,{direction:`row`,align:`center`,gap:`xs`,className:L.breadcrumb,children:C?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(te,{variant:`unstyled`,onClick:f,className:L.breadcrumbLink,children:(0,W.jsx)(H,{})}),(0,W.jsx)(p,{className:L.breadcrumbSeparator,children:`/`}),(0,W.jsx)(p,{className:L.breadcrumbCurrent,children:S?.label})]}):(0,W.jsx)(p,{className:L.breadcrumbTitle,children:(0,W.jsx)(H,{})})}),(0,W.jsx)(ne,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:n(`UTM parameter`,`jetpack-premium-analytics`),hideLabelFromVision:!0,value:s,options:q,onChange:ee,className:L.paramSelect})]});return b?(0,W.jsxs)(W.Fragment,{children:[E,(0,W.jsx)(`div`,{className:L.content,children:(0,W.jsx)(h,{align:`center`,justify:`center`,className:L.placeholder,children:(0,W.jsx)(p,{children:n(`Could not load UTM data.`,`jetpack-premium-analytics`)})})})]}):_&&m.length===0?(0,W.jsxs)(W.Fragment,{children:[E,(0,W.jsx)(`div`,{className:L.content,children:(0,W.jsx)(ae,{})})]}):(0,W.jsxs)(W.Fragment,{children:[E,(0,W.jsx)(`div`,{className:L.content,children:(0,W.jsx)(ie,{data:T,loading:x,withComparison:g,withOverlayLabel:!0,showLegend:!1,emptyStateText:n(`No UTM data in this period.`,`jetpack-premium-analytics`),dataFormat:G})})]})}function U({attributes:e={},setAttributes:t}){let n=e.utmParam??K,r=e.max??10;return(0,W.jsx)(u,{attributes:e,children:(0,W.jsx)(`div`,{className:L.root,children:(0,W.jsx)(de,{utmParam:n,max:r,setAttributes:t})})})}var W,G,K,q,fe=e((()=>{_(),o(),r(),g(),v(),ce(),ue(),V(),W=i(),G={type:`number`,options:{useMultipliers:!0,decimals:0}},K=`utm_source,utm_medium`,q=[{label:n(`Source / Medium`,`jetpack-premium-analytics`),value:`utm_source,utm_medium`},{label:n(`Campaign / Source / Medium`,`jetpack-premium-analytics`),value:`utm_campaign,utm_source,utm_medium`},{label:n(`Source`,`jetpack-premium-analytics`),value:`utm_source`},{label:n(`Medium`,`jetpack-premium-analytics`),value:`utm_medium`},{label:n(`Campaign`,`jetpack-premium-analytics`),value:`utm_campaign`}]}));function pe({withComparison:e,...t}){return(0,J.jsx)(b,{...t,widgetType:he,renderModule:me,renderComponent:U,attributes:{utmParam:`utm_source,utm_medium`,max:10,reportParams:l(e)}})}var J,me,he,Y,ge,X,Z,Q,$,_e;e((()=>{f(),x(),w(),fe(),V(),J=i(),C(),me=`storybook/utm-insights`,he={name:B.name,title:B.title,icon:B.icon,presentation:`full-bleed`},Y=e=>(0,J.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,J.jsx)(e,{})}),ge={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:U,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},X={render:({withComparison:e})=>(0,J.jsx)(U,{attributes:{utmParam:`utm_source,utm_medium`,max:10,reportParams:l(e)}}),args:{withComparison:!1},decorators:[Y]},Z={render:({withComparison:e})=>(0,J.jsx)(U,{attributes:{utmParam:`utm_source,utm_medium`,max:10,reportParams:l(e)}}),args:{withComparison:!0},decorators:[Y]},Q={render:({withComparison:e})=>(0,J.jsx)(U,{attributes:{utmParam:`utm_campaign`,max:10,reportParams:l(e)}}),args:{withComparison:!1},decorators:[Y]},$={render:e=>(0,J.jsx)(pe,{...e}),args:{...S,withComparison:!1},argTypes:{...y,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},_e=[`Default`,`WithComparison`,`ByCampaign`,`WidgetDashboardWithWidget`]}))();export{Q as ByCampaign,X as Default,$ as WidgetDashboardWithWidget,Z as WithComparison,_e as __namedExportsOrder,ge as default};