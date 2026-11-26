import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,r as n,t as r}from"./build-module-BXs6jvWf.js";import{t as i}from"./jsx-runtime-CFwixLRt.js";import{R as a,W as o}from"./charts-provider-QIjl6Krv.js";import{a as s,c,i as l,s as u,u as ee}from"./with-widget-canvas-Mpl0bdUF.js";import{C as d,_ as f,b as p,d as m,m as h,t as g,v as _,x as v}from"./reports-CzP4xe0l.js";import{n as y,t as b}from"./report-metric-chart-H5HSmMvz.js";function x({chartType:e}){let{reportParams:n}=o();return(0,C.jsx)(b,{report:m({...n,filters:[h]}),chartType:e,field:`orders_no`,label:t(`Bookings`,`jetpack-woocommerce-stats-pkg`),countLabel:w,dataFormat:{type:`number`},errorText:t(`We couldn't load bookings. Please try again in a moment.`,`jetpack-woocommerce-stats-pkg`)})}function S({attributes:e={}}){return(0,C.jsx)(a,{attributes:e,children:(0,C.jsx)(x,{chartType:e.chartType})})}var C,w,T=e((()=>{f(),r(),y(),g(),C=i(),w=e=>n(`%s Booking`,`%s Bookings`,e,`jetpack-woocommerce-stats-pkg`)})),E,D,O,k,A,j,M,N,P,F,te=e((()=>{E=`woocommerce-analytics/bookings-over-time`,D=`jpa/chart-bar`,O=`Bookings over time`,k=`See a breakdown of when bookings are placed to identify peak selling periods.`,A={content:`See a breakdown of when bookings are placed to identify peak selling periods.`},j=`bookings`,M=`framed`,N=[{id:`chartType`,type:`jpa/toggle-group`,label:`Chart type`,relevance:`high`,elements:[{value:`line`,label:`Line chart`,icon:`jpa/chart-line`},{value:`bar`,label:`Bar chart`,icon:`jpa/chart-bar`}]}],P=`jetpack-woocommerce-stats-pkg`,F={name:E,icon:D,title:O,description:k,help:A,category:j,presentation:M,attributes:N,textdomain:P}}));function I({withComparison:e,chartType:t}){return(0,R.jsx)(S,{attributes:{reportParams:p({withComparison:e}),chartType:t}})}function L({withComparison:e,chartType:t,...n}){return(0,R.jsx)(c,{...n,widgetType:U,renderModule:V,renderComponent:S,attributes:{reportParams:p({withComparison:e}),chartType:t}})}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{_(),T(),te(),R=i(),{expect:z,within:B}=__STORYBOOK_MODULE_TEST__,d(),V=`storybook/bookings-over-time`,H=`analytics/reports/orders-by-product-type/by-date`,U=s(F),W={withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`},chartType:{control:`inline-radio`,options:[`line`,`bar`],description:`How the series is drawn.`}},G={title:`Packages/WooCommerce Stats/Widgets/BookingsOverTime`,component:S,tags:[`autodocs`],argTypes:W,parameters:{docs:{description:{component:`The "Bookings over time" widget. Charts the number of bookings placed per interval from the store orders report filtered to bookings, to show peak selling periods, with an optional previous-period comparison.`}}}},K={render:I,args:{withComparison:!1,chartType:`line`},decorators:[l],play:async({canvasElement:e})=>{let t=B(e);await z(await t.findByText(`616`)).toBeVisible()}},q={render:I,args:{withComparison:!0,chartType:`line`},decorators:[l]},J={render:I,args:{withComparison:!1,chartType:`line`},tags:[`!autodocs`],decorators:[l],beforeEach:v(H,`loading`)},Y={render:I,args:{withComparison:!1,chartType:`line`},tags:[`!autodocs`],decorators:[l],beforeEach:v(H,`empty`)},X={render:I,args:{withComparison:!1,chartType:`line`},tags:[`!autodocs`],decorators:[l],beforeEach:v(H,`error`)},Z={render:I,args:{withComparison:!1,chartType:`line`},tags:[`!autodocs`],decorators:[l],beforeEach:v(H,`error-retryable`)},Q={tags:[`widget-dashboard`],render:e=>(0,R.jsx)(L,{...e}),args:{...u,withComparison:!0,chartType:`line`},argTypes:{...ee,...W}},$=[`Default`,`WithComparison`,`Loading`,`Empty`,`ErrorState`,`ErrorRetryable`,`WidgetDashboardWithWidget`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderBookingsOverTimeWidget,
  args: {
    withComparison: false,
    chartType: 'line'
  },
  decorators: [withWidgetCanvas],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(await canvas.findByText('616')).toBeVisible();
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderBookingsOverTimeWidget,
  args: {
    withComparison: true,
    chartType: 'line'
  },
  decorators: [withWidgetCanvas]
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderBookingsOverTimeWidget,
  args: {
    withComparison: false,
    chartType: 'line'
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(BOOKINGS_REPORT_PATH, 'loading')
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderBookingsOverTimeWidget,
  args: {
    withComparison: false,
    chartType: 'line'
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(BOOKINGS_REPORT_PATH, 'empty')
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: renderBookingsOverTimeWidget,
  args: {
    withComparison: false,
    chartType: 'line'
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(BOOKINGS_REPORT_PATH, 'error')
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: renderBookingsOverTimeWidget,
  args: {
    withComparison: false,
    chartType: 'line'
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(BOOKINGS_REPORT_PATH, 'error-retryable')
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  tags: ['widget-dashboard'],
  render: args => <BookingsOverTimeDashboardStory {...args} />,
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