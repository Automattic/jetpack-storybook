import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-DQ5lAs4a.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{N as a,t as o}from"./build-module-DMs68Vfd.js";import{n as s,w as c}from"./build-module-Bt8gOW8e.js";import{Ht as l,O as u,d as ee,p as d,r as f,s as p}from"./hooks-CHN5wrZW.js";import{K as m,R as h,t as g}from"./build-module-BAze1CUO.js";import{F as te}from"./chart-tooltip-BSuZZS-i.js";import{t as _}from"./leaderboard-chart-C-5XAZ-c.js";import{n as v}from"./widget-loading-overlay-CZo6ZUln.js";import{o as y}from"./report-metric-Buftd8He.js";import{i as b,n as x,r as S,t as C}from"./widget-dashboard-with-widget-FacHxCFZ.js";import{t as w}from"./src-_BA8_HWt.js";import{n as T,t as E}from"./register-stats-mocks-CxmANHo0.js";var D,O,k,A,j,M,N,ne=e((()=>{D=`_root_15axe_1`,O=`_placeholder_15axe_9`,k=`_backLink_15axe_18`,A=`_leaderboard_15axe_24`,j=`_itemLabel_15axe_29`,M=`_itemLabelText_15axe_36`,N={root:D,placeholder:O,backLink:k,leaderboard:A,itemLabel:j,itemLabelText:M}}));function P(e){return typeof e.label==`string`?e.label:String(e.label)}function re(e){return{label:P(e),value:e.value,previousValue:e.previousValue,href:e.href}}function ie(e){return{label:P(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(re),childrenHaveComparison:e.childrenHaveComparison}}function F({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,hasData:s,isError:c}=u({...e,utmParam:t,max:n},{maxRows:n});return{data:(r?.rows??[]).map(ie),hasComparison:i,isLoading:a,isFetching:o,hasData:s,isError:c}}var I=e((()=>{d()}));function ae({utmDimension:e,max:n}){let{reportParams:i}=ee(),{drillDownItem:o,drillDown:s,resetDrillDown:c}=f();(0,a.useEffect)(()=>{c()},[c,e]);let{data:l,hasComparison:u,isLoading:d,isFetching:p,hasData:g,isError:b}=F({reportParams:i,utmParam:e,max:n}),x=d||p&&g,S=(0,a.useMemo)(()=>l.find(e=>e.label===o)??null,[l,o]),C=!!S?.children?.length,w=(0,a.useMemo)(()=>C?S?.children??[]:l,[l,C,S]),T=C?!!S?.childrenHaveComparison:u,E=(0,a.useMemo)(()=>{let e=Math.max(...w.map(e=>e.value),1),n=Math.max(...w.map(e=>e.previousValue??0),1);return w.map((i,a)=>{let o=i.previousValue;return{id:`${a}-${i.label}`,label:(0,R.jsx)(h,{align:`center`,className:N.itemLabel,children:(0,R.jsx)(m,{className:N.itemLabelText,children:i.label})}),currentValue:i.value,currentShare:i.value/e*100,previousValue:o,previousShare:T&&o!==void 0?o/n*100:void 0,delta:T&&o!==void 0?te(i.value,o):void 0,...!C&&`children`in i&&i.children?.length&&{onClick:()=>s(i.label),ariaLabel:r(t(`View posts for %s`,`jetpack-premium-analytics`),i.label)}}})},[w,C,s,T]),D=C?(0,R.jsx)(y,{label:t(`All UTM Insights`,`jetpack-premium-analytics`),ariaLabel:t(`View all UTM insights`,`jetpack-premium-analytics`),onClick:c,className:N.backLink}):null;return b?(0,R.jsxs)(R.Fragment,{children:[D,(0,R.jsx)(h,{align:`center`,justify:`center`,className:N.placeholder,children:(0,R.jsx)(m,{children:t(`Could not load UTM data.`,`jetpack-premium-analytics`)})})]}):d&&l.length===0?(0,R.jsxs)(R.Fragment,{children:[D,(0,R.jsx)(v,{})]}):(0,R.jsxs)(R.Fragment,{children:[D,(0,R.jsx)(_,{data:E,loading:x,withComparison:T,withOverlayLabel:!0,showLegend:!1,emptyStateText:t(`No UTM data in this period.`,`jetpack-premium-analytics`),dataFormat:z,className:N.leaderboard})]})}function L({attributes:e={}}){let t=e.utmDimension??B,n=e.max??10;return(0,R.jsx)(p,{attributes:e,children:(0,R.jsx)(`div`,{className:N.root,children:(0,R.jsx)(ae,{utmDimension:t,max:n})})})}var R,z,B,oe=e((()=>{o(),n(),g(),w(),ne(),I(),R=i(),z={type:`number`,options:{useMultipliers:!0,decimals:0}},B=`utm_source,utm_medium`})),V,H=e((()=>{n(),s(),V={name:`jpa/utm-insights`,title:t(`UTM Insights`,`jetpack-premium-analytics`),icon:c,attributes:[{id:`utmDimension`,label:t(`UTM parameter`,`jetpack-premium-analytics`),type:`text`,elements:[{label:t(`Source / Medium`,`jetpack-premium-analytics`),value:`utm_source,utm_medium`},{label:t(`Campaign / Source / Medium`,`jetpack-premium-analytics`),value:`utm_campaign,utm_source,utm_medium`},{label:t(`Source`,`jetpack-premium-analytics`),value:`utm_source`},{label:t(`Medium`,`jetpack-premium-analytics`),value:`utm_medium`},{label:t(`Campaign`,`jetpack-premium-analytics`),value:`utm_campaign`}],relevance:`high`},{id:`max`,label:t(`Max rows`,`jetpack-premium-analytics`),type:`number`}],example:{attributes:{utmDimension:`utm_source,utm_medium`,max:10}}}}));function U({withComparison:e,...t}){return(0,W.jsx)(x,{...t,widgetType:K,renderModule:G,renderComponent:L,attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:l(e)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),S(),E(),oe(),H(),W=i(),T(),G=`storybook/utm-insights`,K={name:V.name,title:V.title,icon:V.icon,presentation:`framed`},q=e=>(0,W.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,W.jsx)(e,{})}),J={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:L,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},Y={render:({withComparison:e})=>(0,W.jsx)(L,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:l(e)}}),args:{withComparison:!1},decorators:[q]},X={render:({withComparison:e})=>(0,W.jsx)(L,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:l(e)}}),args:{withComparison:!0},decorators:[q]},Z={render:({withComparison:e})=>(0,W.jsx)(L,{attributes:{utmDimension:`utm_campaign`,max:10,reportParams:l(e)}}),args:{withComparison:!1},decorators:[q]},Q={render:e=>(0,W.jsx)(U,{...e}),args:{...C,withComparison:!1},argTypes:{...b,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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