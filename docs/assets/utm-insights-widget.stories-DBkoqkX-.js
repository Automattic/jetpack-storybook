import{i as e}from"./preload-helper-usAeo7Bx.js";import{c as t,n,t as r}from"./build-module-Da_5_6n_.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{N as a,t as o}from"./build-module-DMs68Vfd.js";import{f as s,n as c}from"./build-module-DwipKI4I.js";import{a as l,g as u,l as d,pt as f,u as p}from"./hooks-DpnQI4kx.js";import{A as m,E as h,S as g,t as _,w as ee}from"./build-module-BS0ZnPUU.js";import{D as te,t as v}from"./build-module-Bx6LKLuo.js";import{D as ne}from"./chart-tooltip-CQdGtTib.js";import{t as re}from"./leaderboard-chart-g1x6AU20.js";import{i as ie}from"./metric-tabs-chart-vyGVuI-v.js";import{i as y,n as b,r as ae,t as x}from"./widget-dashboard-with-widget-ZxVObjJL.js";import{t as S}from"./src-Dt7YkPRz.js";import{n as C,t as w}from"./register-stats-mocks-CpicA7Hg.js";var T,E,oe,se,ce,D,O,k,A,j,M,N,P,F,I,le=e((()=>{T=`_root_1phle_1`,E=`_placeholder_1phle_9`,oe=`_widgetHeader_1phle_18`,se=`_breadcrumb_1phle_25`,ce=`_headerTitle_1phle_39`,D=`_headerIcon_1phle_47`,O=`_breadcrumbTitle_1phle_51`,k=`_breadcrumbLink_1phle_52`,A=`_breadcrumbSeparator_1phle_75`,j=`_breadcrumbCurrent_1phle_81`,M=`_paramSelect_1phle_89`,N=`_itemLabel_1phle_95`,P=`_itemLabelText_1phle_102`,F=`_content_1phle_108`,I={root:T,placeholder:E,widgetHeader:oe,breadcrumb:se,headerTitle:ce,headerIcon:D,breadcrumbTitle:O,breadcrumbLink:k,breadcrumbSeparator:A,breadcrumbCurrent:j,paramSelect:M,itemLabel:N,itemLabelText:P,content:F}}));function L(e){return typeof e.label==`string`?e.label:String(e.label)}function R(e){return e.href??L(e)}function ue({reportParams:e,utmParam:t,max:n}){let{primary:r,comparison:i,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:l}=u({...e,utmParam:t,max:n}),d=r.data?.data?.[0]?.items??[],f=i.data?.data?.[0]?.items??[],p=new Map(f.map(e=>[L(e),e]));return{data:d.map(e=>{let t=L(e),n=p.get(t),r=n?.children??[],i=new Map(r.map(e=>[R(e),e.value])),o=(e.children??[]).map(e=>{let t=R(e);return{label:L(e),value:e.value,previousValue:a?i.get(t)??0:0,href:e.href}});return{label:t,value:e.value,previousValue:a?n?.value??0:0,children:o}}).slice(0,n>0?n:void 0),hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:l}}var de=e((()=>{p()})),z,B=e((()=>{r(),c(),z={name:`jpa/utm-insights`,title:n(`UTM Insights`,`jetpack-premium-analytics`),icon:s,attributes:[{id:`utmParam`,label:n(`UTM parameter`,`jetpack-premium-analytics`),type:`string`},{id:`max`,label:n(`Max rows`,`jetpack-premium-analytics`),type:`number`}],example:{attributes:{utmParam:`utm_source,utm_medium`,max:10}}}}));function V(){return(0,U.jsxs)(`span`,{className:I.headerTitle,children:[(0,U.jsx)(h,{icon:z.icon,size:20,className:I.headerIcon}),(0,U.jsx)(`span`,{children:n(`UTM Insights`,`jetpack-premium-analytics`)})]})}function fe({utmParam:e,max:r,setAttributes:i}){let{reportParams:o}=d(),[s,c]=(0,a.useState)(e),[l,u]=(0,a.useState)(null);(0,a.useEffect)(()=>{c(e),u(null)},[e]);let f=(0,a.useCallback)(e=>{let t=e;u(null),c(t),i?.({utmParam:t})},[i]),p=(0,a.useCallback)(()=>u(null),[]),{data:h,hasComparison:_,isLoading:v,isFetching:y,hasData:b,isError:ae}=ue({reportParams:o,utmParam:s,max:r}),x=v||y&&b,S=(0,a.useMemo)(()=>h.find(e=>e.label===l)??null,[h,l]),C=!!S?.children?.length,w=(0,a.useMemo)(()=>C?S?.children??[]:h,[h,C,S]),T=(0,a.useMemo)(()=>{let e=Math.max(...w.map(e=>e.value),1),r=Math.max(...w.map(e=>e.previousValue),1);return w.map((i,a)=>({id:`${a}-${i.label}`,label:(0,U.jsx)(g,{align:`center`,className:I.itemLabel,children:(0,U.jsx)(m,{className:I.itemLabelText,children:i.label})}),currentValue:i.value,currentShare:i.value/e*100,previousValue:i.previousValue,previousShare:_&&i.previousValue>0?i.previousValue/r*100:0,delta:_?ne(i.value,i.previousValue):0,...!C&&`children`in i&&i.children?.length&&{onClick:()=>u(i.label),ariaLabel:t(n(`View posts for %s`,`jetpack-premium-analytics`),i.label)}}))},[w,_,C]),E=(0,U.jsxs)(g,{direction:`row`,justify:`space-between`,align:`center`,className:I.widgetHeader,children:[(0,U.jsx)(g,{direction:`row`,align:`center`,gap:`xs`,className:I.breadcrumb,children:C?(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(ee,{variant:`unstyled`,onClick:p,className:I.breadcrumbLink,children:(0,U.jsx)(V,{})}),(0,U.jsx)(m,{className:I.breadcrumbSeparator,children:`/`}),(0,U.jsx)(m,{className:I.breadcrumbCurrent,children:S?.label})]}):(0,U.jsx)(m,{className:I.breadcrumbTitle,children:(0,U.jsx)(V,{})})}),(0,U.jsx)(te,{__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,label:n(`UTM parameter`,`jetpack-premium-analytics`),hideLabelFromVision:!0,value:s,options:K,onChange:f,className:I.paramSelect})]});return ae?(0,U.jsxs)(U.Fragment,{children:[E,(0,U.jsx)(`div`,{className:I.content,children:(0,U.jsx)(g,{align:`center`,justify:`center`,className:I.placeholder,children:(0,U.jsx)(m,{children:n(`Could not load UTM data.`,`jetpack-premium-analytics`)})})})]}):v&&h.length===0?(0,U.jsxs)(U.Fragment,{children:[E,(0,U.jsx)(`div`,{className:I.content,children:(0,U.jsx)(ie,{})})]}):(0,U.jsxs)(U.Fragment,{children:[E,(0,U.jsx)(`div`,{className:I.content,children:(0,U.jsx)(re,{data:T,loading:x,withComparison:_,withOverlayLabel:!0,showLegend:!1,emptyStateText:n(`No UTM data in this period.`,`jetpack-premium-analytics`),dataFormat:W})})]})}function H({attributes:e={},setAttributes:t}){let n=e.utmParam??G,r=e.max??10;return(0,U.jsx)(l,{attributes:e,children:(0,U.jsx)(`div`,{className:I.root,children:(0,U.jsx)(fe,{utmParam:n,max:r,setAttributes:t})})})}var U,W,G,K,pe=e((()=>{v(),o(),r(),_(),S(),le(),de(),B(),U=i(),W={type:`number`,options:{useMultipliers:!0,decimals:0}},G=`utm_source,utm_medium`,K=[{label:n(`Source / Medium`,`jetpack-premium-analytics`),value:`utm_source,utm_medium`},{label:n(`Campaign / Source / Medium`,`jetpack-premium-analytics`),value:`utm_campaign,utm_source,utm_medium`},{label:n(`Source`,`jetpack-premium-analytics`),value:`utm_source`},{label:n(`Medium`,`jetpack-premium-analytics`),value:`utm_medium`},{label:n(`Campaign`,`jetpack-premium-analytics`),value:`utm_campaign`}]}));function me({withComparison:e,...t}){return(0,q.jsx)(b,{...t,widgetType:he,renderModule:J,renderComponent:H,attributes:{utmParam:`utm_source,utm_medium`,max:10,reportParams:f(e)}})}var q,J,he,Y,ge,X,Z,Q,$,_e;e((()=>{p(),ae(),w(),pe(),B(),q=i(),C(),J=`storybook/utm-insights`,he={name:z.name,title:z.title,icon:z.icon,presentation:`full-bleed`},Y=e=>(0,q.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,q.jsx)(e,{})}),ge={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:H,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},X={render:({withComparison:e})=>(0,q.jsx)(H,{attributes:{utmParam:`utm_source,utm_medium`,max:10,reportParams:f(e)}}),args:{withComparison:!1},decorators:[Y]},Z={render:({withComparison:e})=>(0,q.jsx)(H,{attributes:{utmParam:`utm_source,utm_medium`,max:10,reportParams:f(e)}}),args:{withComparison:!0},decorators:[Y]},Q={render:({withComparison:e})=>(0,q.jsx)(H,{attributes:{utmParam:`utm_campaign`,max:10,reportParams:f(e)}}),args:{withComparison:!1},decorators:[Y]},$={render:e=>(0,q.jsx)(me,{...e}),args:{...x,withComparison:!1},argTypes:{...y,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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