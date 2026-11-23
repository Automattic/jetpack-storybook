import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,r as i,t as a}from"./build-module-BXs6jvWf.js";import{t as o}from"./jsx-runtime-CFwixLRt.js";import{H as s,I as c,Nt as ee,Ut as te,z as ne}from"./charts-provider-DD0V80Cw.js";import{t as re}from"./widget-state-DFMNGNCy.js";import{t as ie}from"./chart-empty-state-CiiXJXQb.js";import{r as ae}from"./metric-tabs-chart-skeleton-BgApHbHH.js";import{a as l,c as u,i as d,s as f,u as p}from"./with-widget-canvas-3tpJ9fHI.js";import{f as m,g as h,h as g,l as oe,p as _,t as v,v as se}from"./reports-DArEUZRd.js";var y,b,ce=e((()=>{y=`_root_10isw_1`,b={root:y}}));function x({report:e,field:t,label:n,countLabel:r,dataFormat:i,chartType:a,errorText:o,noDataLabel:c}){let l=e.primary.data,u=e.comparison.data,{hasComparison:d,timezone:f,periodStarts:p}=e,{reportParams:m}=s(),h=ne(m.interval),g=(0,S.useMemo)(()=>[ee({primary:l,comparison:u,hasComparison:d,field:t,label:n,countLabel:r,noDataLabel:c,zone:f,periodStarts:p})],[l,u,d,t,n,r,c,f,p]);return(0,C.jsx)(`div`,{className:b.root,children:(0,C.jsx)(re,{isLoading:e.isLoading,isFetching:e.isFetching,isError:e.isError&&!e.hasData,isEmpty:!l?.data?.length,error:te(e.error,{retryDescription:o,onRetry:e.refetch}),children:(0,C.jsx)(ae,{metrics:g,dataFormat:i,chartType:a,empty:(0,C.jsx)(ie,{}),hideSingleMetricLabel:!0,onDatumClick:h})})})}var S,C,w=e((()=>{m(),S=t(n(),1),ce(),C=o()}));function le({chartType:e}){let{reportParams:t}=s();return(0,E.jsx)(x,{report:oe(t),chartType:e,field:`total_items`,label:r(`Items sold`,`jetpack-woocommerce-stats-pkg`),countLabel:D,dataFormat:{type:`number`},errorText:r(`We couldn't load items sold. Please try again in a moment.`,`jetpack-woocommerce-stats-pkg`)})}function T({attributes:e={}}){return(0,E.jsx)(c,{attributes:e,children:(0,E.jsx)(le,{chartType:e.chartType})})}var E,D,ue=e((()=>{m(),a(),w(),v(),E=o(),D=e=>i(`%s Item`,`%s Items`,e,`jetpack-woocommerce-stats-pkg`)})),O,k,A,j,M,N,P,F,I,L,de=e((()=>{O=`woocommerce-analytics/items-sold`,k=`jpa/chart-line`,A=`Items sold`,j=`Track how many items your store sells over time, to see which periods move the most stock.`,M={content:`Track how many items your store sells over time, to see which periods move the most stock.`},N=`orders`,P=`framed`,F=[{id:`chartType`,type:`jpa/toggle-group`,label:`Chart type`,relevance:`high`,elements:[{value:`line`,label:`Line chart`,icon:`jpa/chart-line`},{value:`bar`,label:`Bar chart`,icon:`jpa/chart-bar`}]}],I=`jetpack-woocommerce-stats-pkg`,L={name:O,icon:k,title:A,description:j,help:M,category:N,presentation:P,attributes:F,textdomain:I}}));function R({withComparison:e,chartType:t}){return(0,B.jsx)(T,{attributes:{reportParams:g({withComparison:e}),chartType:t}})}function z({withComparison:e,chartType:t,...n}){return(0,B.jsx)(u,{...n,widgetType:U,renderModule:V,renderComponent:T,attributes:{reportParams:g({withComparison:e}),chartType:t}})}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{_(),ue(),de(),B=o(),se(),V=`storybook/items-sold`,H=`analytics/reports/orders/by-date`,U=l(L),W={withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},chartType:{control:`inline-radio`,options:[`line`,`bar`],description:`How the series is drawn.`}},G={title:`Packages/WooCommerce Stats/Widgets/ItemsSold`,component:T,tags:[`autodocs`],argTypes:W,parameters:{docs:{description:{component:`The "Items sold" widget. Charts the number of items sold per interval from the store orders report, with an optional previous-period comparison.`}}}},K={render:R,args:{withComparison:!1,chartType:`line`},decorators:[d]},q={render:R,args:{withComparison:!0,chartType:`line`},decorators:[d]},J={render:R,args:{withComparison:!1,chartType:`line`},tags:[`!autodocs`],decorators:[d],beforeEach:h(H,`loading`)},Y={render:R,args:{withComparison:!1,chartType:`line`},tags:[`!autodocs`],decorators:[d],beforeEach:h(H,`empty`)},X={render:R,args:{withComparison:!1,chartType:`line`},tags:[`!autodocs`],decorators:[d],beforeEach:h(H,`error`)},Z={render:R,args:{withComparison:!1,chartType:`line`},tags:[`!autodocs`],decorators:[d],beforeEach:h(H,`error-retryable`)},Q={tags:[`widget-dashboard`],render:e=>(0,B.jsx)(z,{...e}),args:{...f,withComparison:!0,chartType:`line`},argTypes:{...p,...W}},$=[`Default`,`WithComparison`,`Loading`,`Empty`,`ErrorState`,`ErrorRetryable`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderItemsSoldWidget,
  args: {
    withComparison: false,
    chartType: 'line'
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderItemsSoldWidget,
  args: {
    withComparison: true,
    chartType: 'line'
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderItemsSoldWidget,
  args: {
    withComparison: false,
    chartType: 'line'
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(ORDERS_REPORT_PATH, 'loading')
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderItemsSoldWidget,
  args: {
    withComparison: false,
    chartType: 'line'
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(ORDERS_REPORT_PATH, 'empty')
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderItemsSoldWidget,
  args: {
    withComparison: false,
    chartType: 'line'
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(ORDERS_REPORT_PATH, 'error')
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderItemsSoldWidget,
  args: {
    withComparison: false,
    chartType: 'line'
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(ORDERS_REPORT_PATH, 'error-retryable')
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  tags: ['widget-dashboard'],
  render: args => <ItemsSoldDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    withComparison: true,
    chartType: 'line'
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    ...storyControlArgTypes
  }
}`,...Q.parameters?.docs?.source}}}}))();export{K as Default,Y as Empty,Z as ErrorRetryable,X as ErrorState,J as Loading,Q as WidgetDashboardWithWidget,q as WithComparison,$ as __namedExportsOrder,G as default};