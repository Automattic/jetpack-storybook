import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n,u as r}from"./build-module-DQ5lAs4a.js";import{t as i}from"./jsx-runtime-D2pHJD-r.js";import{N as a,t as o}from"./build-module-DMs68Vfd.js";import{n as s,w as c}from"./build-module-Bt8gOW8e.js";import{B as l,T as u,d as ee,in as d,r as te,s as f}from"./hooks-xowkbuRy.js";import{K as p,R as m,t as h}from"./build-module-BAze1CUO.js";import{L as g}from"./chart-tooltip-DAt9x1kn.js";import{t as _}from"./leaderboard-chart-C-5XAZ-c.js";import{n as ne}from"./widget-loading-overlay-CZo6ZUln.js";import{f as re}from"./report-metric-DjmaLNwN.js";import{S as v,b as y,t as b,x,y as S}from"./src-tKspr99X.js";import{n as C,t as w}from"./register-stats-mocks-zrfI2ujH.js";var T,E,D,O,k,A,j,M=e((()=>{T=`_root_15axe_1`,E=`_placeholder_15axe_9`,D=`_backLink_15axe_18`,O=`_leaderboard_15axe_24`,k=`_itemLabel_15axe_29`,A=`_itemLabelText_15axe_36`,j={root:T,placeholder:E,backLink:D,leaderboard:O,itemLabel:k,itemLabelText:A}}));function N(e){return typeof e.label==`string`?e.label:String(e.label)}function P(e){return{label:N(e),value:e.value,previousValue:e.previousValue,href:e.href}}function F(e){return{label:N(e),value:e.value,previousValue:e.previousValue,children:e.children?.map(P),childrenHaveComparison:e.childrenHaveComparison}}function I({reportParams:e,utmParam:t,max:n}){let{comparisonRows:r,hasComparison:i,isLoading:a,isFetching:o,hasData:s,isError:c}=l({...e,utmParam:t,max:n},{maxRows:n});return{data:(r?.rows??[]).map(F),hasComparison:i,isLoading:a,isFetching:o,hasData:s,isError:c}}var L=e((()=>{u()}));function R({utmDimension:e,max:n}){let{reportParams:i}=ee(),{drillDownItem:o,drillDown:s,resetDrillDown:c}=te();(0,a.useEffect)(()=>{c()},[c,e]);let{data:l,hasComparison:u,isLoading:d,isFetching:f,hasData:h,isError:v}=I({reportParams:i,utmParam:e,max:n}),y=d||f&&h,b=(0,a.useMemo)(()=>l.find(e=>e.label===o)??null,[l,o]),x=!!b?.children?.length,S=(0,a.useMemo)(()=>x?b?.children??[]:l,[l,x,b]),C=x?!!b?.childrenHaveComparison:u;(0,a.useEffect)(()=>{o&&!x&&!d&&!f&&!v&&c()},[o,x,d,f,v,c]);let w=(0,a.useMemo)(()=>{let e=Math.max(...S.map(e=>e.value),1),n=Math.max(...S.map(e=>e.previousValue??0),1);return S.map((i,a)=>{let o=i.previousValue;return{id:`${a}-${i.label}`,label:(0,B.jsx)(m,{align:`center`,className:j.itemLabel,children:(0,B.jsx)(p,{className:j.itemLabelText,children:i.label})}),currentValue:i.value,currentShare:i.value/e*100,previousValue:o,previousShare:C&&o!==void 0?o/n*100:void 0,delta:C&&o!==void 0?g(i.value,o):void 0,...!x&&`children`in i&&i.children?.length&&{onClick:()=>s(i.label),ariaLabel:r(t(`View posts for %s`,`jetpack-premium-analytics`),i.label)}}})},[S,x,s,C]),T=x?(0,B.jsx)(re,{label:t(`All UTM Insights`,`jetpack-premium-analytics`),ariaLabel:t(`View all UTM insights`,`jetpack-premium-analytics`),onClick:c,className:j.backLink}):null;return v?(0,B.jsxs)(B.Fragment,{children:[T,(0,B.jsx)(m,{align:`center`,justify:`center`,className:j.placeholder,children:(0,B.jsx)(p,{children:t(`Could not load UTM data.`,`jetpack-premium-analytics`)})})]}):d&&l.length===0?(0,B.jsxs)(B.Fragment,{children:[T,(0,B.jsx)(ne,{})]}):(0,B.jsxs)(B.Fragment,{children:[T,(0,B.jsx)(_,{data:w,loading:y,withComparison:C,withOverlayLabel:!0,showLegend:!1,emptyStateText:t(`No UTM data in this period.`,`jetpack-premium-analytics`),dataFormat:V,className:j.leaderboard})]})}function z({attributes:e={}}){let t=e.utmDimension??H,n=e.max??10;return(0,B.jsx)(f,{attributes:e,children:(0,B.jsx)(`div`,{className:j.root,children:(0,B.jsx)(R,{utmDimension:t,max:n})})})}var B,V,H,ie=e((()=>{o(),n(),h(),b(),M(),L(),B=i(),V={type:`number`,options:{useMultipliers:!0,decimals:0}},H=`utm_source,utm_medium`})),U,ae=e((()=>{n(),s(),U={name:`jpa/utm-insights`,title:t(`UTM Insights`,`jetpack-premium-analytics`),help:{content:t(`Track your campaign UTM performance data. Generate URL codes with our builder.`,`jetpack-premium-analytics`)},icon:c,attributes:[{id:`utmDimension`,label:t(`UTM parameter`,`jetpack-premium-analytics`),type:`text`,elements:[{label:t(`Source / Medium`,`jetpack-premium-analytics`),value:`utm_source,utm_medium`},{label:t(`Campaign / Source / Medium`,`jetpack-premium-analytics`),value:`utm_campaign,utm_source,utm_medium`},{label:t(`Source`,`jetpack-premium-analytics`),value:`utm_source`},{label:t(`Medium`,`jetpack-premium-analytics`),value:`utm_medium`},{label:t(`Campaign`,`jetpack-premium-analytics`),value:`utm_campaign`}],relevance:`high`},{id:`max`,label:t(`Max rows`,`jetpack-premium-analytics`),type:`number`}],example:{attributes:{utmDimension:`utm_source,utm_medium`,max:10}}}}));function oe({withComparison:e,...t}){return(0,W.jsx)(y,{...t,widgetType:K,renderModule:G,renderComponent:z,attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:d(e)}})}var W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),x(),w(),ie(),ae(),W=i(),C(),G=`storybook/utm-insights`,K={name:U.name,title:U.title,icon:U.icon,presentation:`framed`},q=e=>(0,W.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,W.jsx)(e,{})}),J={title:`Packages/Premium Analytics/Widgets/UtmInsights`,component:z,tags:[`autodocs`],argTypes:{withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}},parameters:{docs:{description:{component:`The "UTM Insights" widget. Shows traffic breakdown by UTM parameter as a ranked leaderboard. The active dimension (Source/Medium, Campaign, etc.) is switched via a dropdown in the widget header and persisted per widget instance.`}}}},Y={render:({withComparison:e})=>(0,W.jsx)(z,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:d(e)}}),args:{withComparison:!1},decorators:[q]},X={render:({withComparison:e})=>(0,W.jsx)(z,{attributes:{utmDimension:`utm_source,utm_medium`,max:10,reportParams:d(e)}}),args:{withComparison:!0},decorators:[q]},Z={render:({withComparison:e})=>(0,W.jsx)(z,{attributes:{utmDimension:`utm_campaign`,max:10,reportParams:d(e)}}),args:{withComparison:!1},decorators:[q]},Q={render:e=>(0,W.jsx)(oe,{...e}),args:{...S,withComparison:!1},argTypes:{...v,withComparison:{control:`boolean`,description:`Include previous-period comparison report params and deltas.`}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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