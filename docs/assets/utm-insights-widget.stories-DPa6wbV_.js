import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-DQ5lAs4a.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{N as a,t as o}from"./build-module-DMs68Vfd.js";import{n as s,w as c}from"./build-module-_6UNQmiR.js";import{Dt as l,d as u,p as d,r as f,s as p,y as m}from"./hooks-DEvhfgxK.js";import{K as h,R as g,t as _}from"./build-module-CqMGkL50.js";import{D as ee}from"./chart-tooltip-CCUlHVQ5.js";import{t as te}from"./leaderboard-chart-BjzDr-Do.js";import{n as v}from"./widget-loading-overlay-Di7UCXw3.js";import{o as y}from"./report-metric-ClWJKY6O.js";import{i as b,n as x,r as S,t as C}from"./widget-dashboard-with-widget-V17TyNLH.js";import{t as w}from"./src-C9L0_MYI.js";import{n as T,t as E}from"./register-stats-mocks-DOQrG4B4.js";var D,O,k,A,j,M,N,ne=e((()=>{D=`_root_15axe_1`,O=`_placeholder_15axe_9`,k=`_backLink_15axe_18`,A=`_leaderboard_15axe_24`,j=`_itemLabel_15axe_29`,M=`_itemLabelText_15axe_36`,N={root:D,placeholder:O,backLink:k,leaderboard:A,itemLabel:j,itemLabelText:M}}));function P(e){return typeof e.label==`string`?e.label:String(e.label)}function F(e){return e.href??P(e)}function re({reportParams:e,utmParam:t,max:n}){let{primary:r,comparison:i,hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:l}=m({...e,utmParam:t,max:n}),u=r.data?.data?.[0]?.items??[],d=i.data?.data?.[0]?.items??[],f=new Map(d.map(e=>[P(e),e]));return{data:u.map(e=>{let t=P(e),n=f.get(t),r=n?.children??[],i=new Map(r.map(e=>[F(e),e.value])),o=(e.children??[]).map(e=>{let t=F(e);return{label:P(e),value:e.value,previousValue:a?i.get(t)??0:0,href:e.href}});return{label:t,value:e.value,previousValue:a?n?.value??0:0,children:o}}).slice(0,n>0?n:void 0),hasComparison:a,isLoading:o,isFetching:s,hasData:c,isError:l}}var I=e((()=>{d()}));function L({utmDimension:e,max:n}){let{reportParams:i}=u(),{drillDownItem:o,drillDown:s,resetDrillDown:c}=f();(0,a.useEffect)(()=>{c()},[c,e]);let{data:l,hasComparison:d,isLoading:p,isFetching:m,hasData:_,isError:b}=re({reportParams:i,utmParam:e,max:n}),x=p||m&&_,S=(0,a.useMemo)(()=>l.find(e=>e.label===o)??null,[l,o]),C=!!S?.children?.length,w=(0,a.useMemo)(()=>C?S?.children??[]:l,[l,C,S]),T=(0,a.useMemo)(()=>{let e=Math.max(...w.map(e=>e.value),1),n=Math.max(...w.map(e=>e.previousValue),1);return w.map((i,a)=>({id:`${a}-${i.label}`,label:(0,z.jsx)(g,{align:`center`,className:N.itemLabel,children:(0,z.jsx)(h,{className:N.itemLabelText,children:i.label})}),currentValue:i.value,currentShare:i.value/e*100,previousValue:i.previousValue,previousShare:d&&i.previousValue>0?i.previousValue/n*100:0,delta:d?ee(i.value,i.previousValue):0,...!C&&`children`in i&&i.children?.length&&{onClick:()=>s(i.label),ariaLabel:r(t(`View posts for %s`,`jetpack-premium-analytics`),i.label)}}))},[w,d,C,s]),E=C?(0,z.jsx)(y,{label:t(`All UTM Insights`,`jetpack-premium-analytics`),ariaLabel:t(`View all UTM insights`,`jetpack-premium-analytics`),onClick:c,className:N.backLink}):null;return b?(0,z.jsxs)(z.Fragment,{children:[E,(0,z.jsx)(g,{align:`center`,justify:`center`,className:N.placeholder,children:(0,z.jsx)(h,{children:t(`Could not load UTM data.`,`jetpack-premium-analytics`)})})]}):p&&l.length===0?(0,z.jsxs)(z.Fragment,{children:[E,(0,z.jsx)(v,{})]}):(0,z.jsxs)(z.Fragment,{children:[E,(0,z.jsx)(te,{data:T,loading:x,withComparison:d,withOverlayLabel:!0,showLegend:!1,emptyStateText:t(`No UTM data in this period.`,`jetpack-premium-analytics`),dataFormat:B,className:N.leaderboard})]})}function R({attributes:e={}}){let t=e.utmDimension??V,n=e.max??10;return(0,z.jsx)(p,{attributes:e,children:(0,z.jsx)(`div`,{className:N.root,children:(0,z.jsx)(L,{utmDimension:t,max:n})})})}var z,B,V,H=e((()=>{o(),n(),_(),w(),ne(),I(),z=i(),B={type:`number`,options:{useMultipliers:!0,decimals:0}},V=`utm_source,utm_medium`})),U,ie=e((()=>{n(),s(),U={name:`jpa/utm-insights`,title:t(`UTM Insights`,`jetpack-premium-analytics`),icon:c,attributes:[{id:`utmDimension`,label:t(`UTM parameter`,`jetpack-premium-analytics`),type:`text`,elements:[{label:t(`Source / Medium`,`jetpack-premium-analytics`),value:`utm_source,utm_medium`},{label:t(`Campaign / Source / Medium`,`jetpack-premium-analytics`),value:`utm_campaign,utm_source,utm_medium`},{label:t(`Source`,`jetpack-premium-analytics`),value:`utm_source`},{label:t(`Medium`,`jetpack-premium-analytics`),value:`utm_medium`},{label:t(`Campaign`,`jetpack-premium-analytics`),value:`utm_campaign`}],relevance:`high`},{id:`max`,label:t(`Max rows`,`jetpack-premium-analytics`),type:`number`}],example:{attributes:{utmDimension:`utm_source,utm_medium`,max:10}}}}));function ae({withComparison:e,...t}){return(0,W.jsx)(x,{...t,widgetType:K,renderModule:G,renderComponent:R,attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:l(e)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),S(),E(),H(),ie(),W=i(),T(),G=`storybook/utm-insights`,K={name:U.name,title:U.title,icon:U.icon,presentation:`framed`},q=e=>(0,W.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,W.jsx)(e,{})}),J={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:R,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},Y={render:({withComparison:e})=>(0,W.jsx)(R,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:l(e)}}),args:{withComparison:!1},decorators:[q]},X={render:({withComparison:e})=>(0,W.jsx)(R,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:l(e)}}),args:{withComparison:!0},decorators:[q]},Z={render:({withComparison:e})=>(0,W.jsx)(R,{attributes:{utmDimension:`utm_campaign`,max:10,reportParams:l(e)}}),args:{withComparison:!1},decorators:[q]},Q={render:e=>(0,W.jsx)(ae,{...e}),args:{...C,withComparison:!1},argTypes:{...b,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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