import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-BXs6jvWf.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{R as i,W as a}from"./charts-provider-BXqhfUep.js";import{a as o,c as s,i as c,s as l,u}from"./with-widget-canvas-GOKy81gT.js";import{C as d,_ as f,b as p,d as m,t as h,v as g,x as _}from"./reports-BV_fXYE0.js";import{n as v,t as y}from"./report-metric-chart-DnzkNB0Q.js";function b({chartType:e}){let{reportParams:n}=a();return(0,S.jsx)(y,{report:m(n),chartType:e,field:`total_sales`,label:t(`Total sales`,`jetpack-woocommerce-stats-pkg`),dataFormat:{type:`currency`},errorText:t(`We couldn't load total sales. Please try again in a moment.`,`jetpack-woocommerce-stats-pkg`)})}function x({attributes:e={}}){return(0,S.jsx)(i,{attributes:e,children:(0,S.jsx)(b,{chartType:e.chartType})})}var S,C=e((()=>{f(),n(),v(),h(),S=r()})),w,T,E,D,O,k,A,j,M,N,P=e((()=>{w=`woocommerce-analytics/total-sales-over-time`,T=`jpa/chart-bar`,E=`Total sales over time`,D=`Track total sales including all orders and transactions.`,O={content:`Track total sales including all orders and transactions.`},k=`store`,A=`framed`,j=[{id:`chartType`,type:`jpa/toggle-group`,label:`Chart type`,relevance:`high`,elements:[{value:`line`,label:`Line chart`,icon:`jpa/chart-line`},{value:`bar`,label:`Bar chart`,icon:`jpa/chart-bar`}]}],M=`jetpack-woocommerce-stats-pkg`,N={name:w,icon:T,title:E,description:D,help:O,category:k,presentation:A,attributes:j,textdomain:M}}));function F({withComparison:e,chartType:t}){return(0,L.jsx)(x,{attributes:{reportParams:p({withComparison:e}),chartType:t}})}function I({withComparison:e,chartType:t,...n}){return(0,L.jsx)(s,{...n,widgetType:H,renderModule:B,renderComponent:x,attributes:{reportParams:p({withComparison:e}),chartType:t}})}var L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;e((()=>{g(),C(),P(),L=r(),{expect:R,within:z}=__STORYBOOK_MODULE_TEST__,d(),B=`storybook/total-sales-over-time`,V=`analytics/reports/orders/by-date`,H=o(N),U={withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},chartType:{control:`inline-radio`,options:[`line`,`bar`],description:`How the series is drawn.`}},W={title:`Packages/WooCommerce Stats/Widgets/TotalSalesOverTime`,component:x,tags:[`autodocs`],argTypes:U,parameters:{docs:{description:{component:`The "Total sales over time" widget. Charts total sales across all orders and transactions per interval from the store orders report, with an optional previous-period comparison.`}}}},G={render:F,args:{withComparison:!1,chartType:`line`},decorators:[c],play:async({canvasElement:e})=>{let t=z(e);await R(await t.findByText(`$79,954.98`)).toBeVisible()}},K={render:F,args:{withComparison:!0,chartType:`line`},decorators:[c]},q={render:F,args:{withComparison:!1,chartType:`line`},tags:[`!autodocs`],decorators:[c],beforeEach:_(V,`loading`)},J={render:F,args:{withComparison:!1,chartType:`line`},tags:[`!autodocs`],decorators:[c],beforeEach:_(V,`empty`)},Y={render:F,args:{withComparison:!1,chartType:`line`},tags:[`!autodocs`],decorators:[c],beforeEach:_(V,`error`)},X={render:F,args:{withComparison:!1,chartType:`line`},tags:[`!autodocs`],decorators:[c],beforeEach:_(V,`error-retryable`)},Z={tags:[`widget-dashboard`],render:e=>(0,L.jsx)(I,{...e}),args:{...l,withComparison:!0,chartType:`line`},argTypes:{...u,...U}},Q=[`Default`,`WithComparison`,`Loading`,`Empty`,`ErrorState`,`ErrorRetryable`,`WidgetDashboardWithWidget`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderTotalSalesOverTimeWidget,
  args: {
    withComparison: false,
    chartType: 'line'
  },
  decorators: [withWidgetCanvas],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(await canvas.findByText('$79,954.98')).toBeVisible();
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderTotalSalesOverTimeWidget,
  args: {
    withComparison: true,
    chartType: 'line'
  },
  decorators: [withWidgetCanvas]
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderTotalSalesOverTimeWidget,
  args: {
    withComparison: false,
    chartType: 'line'
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(ORDERS_REPORT_PATH, 'loading')
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderTotalSalesOverTimeWidget,
  args: {
    withComparison: false,
    chartType: 'line'
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(ORDERS_REPORT_PATH, 'empty')
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderTotalSalesOverTimeWidget,
  args: {
    withComparison: false,
    chartType: 'line'
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(ORDERS_REPORT_PATH, 'error')
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderTotalSalesOverTimeWidget,
  args: {
    withComparison: false,
    chartType: 'line'
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(ORDERS_REPORT_PATH, 'error-retryable')
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  tags: ['widget-dashboard'],
  render: args => <TotalSalesOverTimeDashboardStory {...args} />,
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