import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,r as n,t as r}from"./build-module-BXs6jvWf.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{R as a,W as o}from"./charts-provider-CLTdq-Ei.js";import{a as s,c,i as l,s as u,u as d}from"./with-widget-canvas-DmNPWDHb.js";import{C as f,_ as p,b as m,d as h,t as g,v as _,x as v}from"./reports-D0TxMks3.js";import{n as y,t as b}from"./report-metric-chart-DBxIc5Vc.js";function x({chartType:e}){let{reportParams:n}=o();return(0,C.jsx)(b,{report:h(n),chartType:e,field:`total_items`,label:t(`Items sold`,`jetpack-woocommerce-stats-pkg`),countLabel:w,dataFormat:{type:`number`},errorText:t(`We couldn't load items sold. Please try again in a moment.`,`jetpack-woocommerce-stats-pkg`)})}function S({attributes:e={}}){return(0,C.jsx)(a,{attributes:e,children:(0,C.jsx)(x,{chartType:e.chartType})})}var C,w,T=e((()=>{p(),r(),y(),g(),C=i(),w=e=>n(`%s Item`,`%s Items`,e,`jetpack-woocommerce-stats-pkg`)})),E,D,O,k,A,j,M,N,P,F,I=e((()=>{E=`woocommerce-analytics/items-sold`,D=`jpa/chart-line`,O=`Items sold`,k=`Track how many items your store sells over time, to see which periods move the most stock.`,A={content:`Track how many items your store sells over time, to see which periods move the most stock.`},j=`orders`,M=`framed`,N=[{id:`chartType`,type:`jpa/toggle-group`,label:`Chart type`,relevance:`high`,elements:[{value:`line`,label:`Line chart`,icon:`jpa/chart-line`},{value:`bar`,label:`Bar chart`,icon:`jpa/chart-bar`}]}],P=`jetpack-woocommerce-stats-pkg`,F={name:E,icon:D,title:O,description:k,help:A,category:j,presentation:M,attributes:N,textdomain:P}}));function L({withComparison:e,chartType:t}){return(0,z.jsx)(S,{attributes:{reportParams:m({withComparison:e}),chartType:t}})}function R({withComparison:e,chartType:t,...n}){return(0,z.jsx)(c,{...n,widgetType:H,renderModule:B,renderComponent:S,attributes:{reportParams:m({withComparison:e}),chartType:t}})}var z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;e((()=>{_(),T(),I(),z=i(),f(),B=`storybook/items-sold`,V=`analytics/reports/orders/by-date`,H=s(F),U={withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},chartType:{control:`inline-radio`,options:[`line`,`bar`],description:`How the series is drawn.`}},W={title:`Packages/WooCommerce Stats/Widgets/ItemsSold`,component:S,tags:[`autodocs`],argTypes:U,parameters:{docs:{description:{component:`The "Items sold" widget. Charts the number of items sold per interval from the store orders report, with an optional previous-period comparison.`}}}},G={render:L,args:{withComparison:!1,chartType:`line`},decorators:[l]},K={render:L,args:{withComparison:!0,chartType:`line`},decorators:[l]},q={render:L,args:{withComparison:!1,chartType:`line`},tags:[`!autodocs`],decorators:[l],beforeEach:v(V,`loading`)},J={render:L,args:{withComparison:!1,chartType:`line`},tags:[`!autodocs`],decorators:[l],beforeEach:v(V,`empty`)},Y={render:L,args:{withComparison:!1,chartType:`line`},tags:[`!autodocs`],decorators:[l],beforeEach:v(V,`error`)},X={render:L,args:{withComparison:!1,chartType:`line`},tags:[`!autodocs`],decorators:[l],beforeEach:v(V,`error-retryable`)},Z={tags:[`widget-dashboard`],render:e=>(0,z.jsx)(R,{...e}),args:{...u,withComparison:!0,chartType:`line`},argTypes:{...d,...U}},Q=[`Default`,`WithComparison`,`Loading`,`Empty`,`ErrorState`,`ErrorRetryable`,`WidgetDashboardWithWidget`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderItemsSoldWidget,
  args: {
    withComparison: false,
    chartType: 'line'
  },
  decorators: [withWidgetCanvas]
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderItemsSoldWidget,
  args: {
    withComparison: true,
    chartType: 'line'
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderItemsSoldWidget,
  args: {
    withComparison: false,
    chartType: 'line'
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(ORDERS_REPORT_PATH, 'loading')
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderItemsSoldWidget,
  args: {
    withComparison: false,
    chartType: 'line'
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(ORDERS_REPORT_PATH, 'empty')
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderItemsSoldWidget,
  args: {
    withComparison: false,
    chartType: 'line'
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(ORDERS_REPORT_PATH, 'error')
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderItemsSoldWidget,
  args: {
    withComparison: false,
    chartType: 'line'
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(ORDERS_REPORT_PATH, 'error-retryable')
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}}}))();export{G as Default,J as Empty,X as ErrorRetryable,Y as ErrorState,q as Loading,Z as WidgetDashboardWithWidget,K as WithComparison,Q as __namedExportsOrder,W as default};