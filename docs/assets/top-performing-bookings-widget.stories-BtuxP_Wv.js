import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,t as n}from"./build-module-BXs6jvWf.js";import{t as r}from"./jsx-runtime-CFwixLRt.js";import{R as i}from"./charts-provider-BXqhfUep.js";import{r as a}from"./with-story-router-CNLqiCIG.js";import{a as o,c as s,i as c,s as l,u}from"./with-widget-canvas-GOKy81gT.js";import{C as d,_ as f,b as p,m,t as h,v as g,x as _}from"./reports-BV_fXYE0.js";import{n as v,t as y}from"./product-leaderboard-v0pp-Xh6.js";function b({attributes:e={}}){return(0,x.jsx)(i,{attributes:e,children:(0,x.jsx)(y,{filter:m,errorText:t(`We couldn't load bookings data. Please try again in a moment.`,`jetpack-woocommerce-stats-pkg`)})})}var x,S=e((()=>{f(),n(),v(),h(),x=r()})),C,w,T,E,D,O,k,A,j,M=e((()=>{C=`woocommerce-analytics/top-performing-bookings`,w=`jpa/chart-bar`,T=`Top performing bookings`,E=`Shows the top booking products by net revenue over the selected time period.`,D={content:`Your best-selling bookings by revenue over the selected time period.`},O=`bookings`,k=`framed`,A=`jetpack-woocommerce-stats-pkg`,j={name:C,icon:w,title:T,description:E,help:D,category:O,presentation:k,textdomain:A}}));function N({withComparison:e}){return(0,F.jsx)(b,{attributes:{reportParams:p({withComparison:e})}})}function P({withComparison:e,...t}){return(0,F.jsx)(s,{...t,widgetType:V,renderModule:z,renderComponent:b,attributes:{reportParams:p({withComparison:e})}})}var F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z;e((()=>{g(),S(),M(),F=r(),{expect:I,waitFor:L,within:R}=__STORYBOOK_MODULE_TEST__,d(),z=`storybook/top-performing-bookings`,B=`analytics/reports/products`,V=o(j),H={withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},U={title:`Packages/WooCommerce Stats/Widgets/TopPerformingBookings`,component:b,tags:[`autodocs`],argTypes:H,parameters:{docs:{description:{component:`The "Top performing bookings" widget. Ranks the top bookable products of the period by net revenue, with thumbnails and links to each product, and an optional previous-period comparison.`}}}},W={render:N,args:{withComparison:!1},decorators:[c,a],play:async({canvasElement:e})=>{let t=R(e);await t.findByText(`Sourdough Baking Workshop`),await t.findByText(`Saturday Pottery Class`),await t.findByText(`Private Tasting Session`),I(t.queryByText(`Cast Iron Skillet`)).toBeNull(),await L(()=>I(t.getAllByRole(`listitem`).filter(e=>R(e).queryAllByRole(`link`).length===0)).toHaveLength(1))}},G={render:N,args:{withComparison:!0},decorators:[c,a]},K={render:N,args:{withComparison:!1},tags:[`!autodocs`],decorators:[c],beforeEach:_(B,`loading`)},q={render:N,args:{withComparison:!1},tags:[`!autodocs`],decorators:[c],beforeEach:_(B,`empty`)},J={render:N,args:{withComparison:!1},tags:[`!autodocs`],decorators:[c],beforeEach:_(B,`error`)},Y={render:N,args:{withComparison:!1},tags:[`!autodocs`],decorators:[c],beforeEach:_(B,`error-retryable`)},X={tags:[`widget-dashboard`],render:e=>(0,F.jsx)(P,{...e}),args:{...l,withComparison:!0},argTypes:{...u,...H}},Z=[`Default`,`WithComparison`,`Loading`,`Empty`,`ErrorState`,`ErrorRetryable`,`WidgetDashboardWithWidget`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: renderTopPerformingBookingsWidget,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas, withStoryRouter],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText('Sourdough Baking Workshop');
    await canvas.findByText('Saturday Pottery Class');
    await canvas.findByText('Private Tasting Session');
    expect(canvas.queryByText('Cast Iron Skillet')).toBeNull();
    await waitFor(() => expect(canvas.getAllByRole('listitem').filter(row => within(row).queryAllByRole('link').length === 0)).toHaveLength(1));
  }
}`,...W.parameters?.docs?.source},description:{story:`The details mock answers one product fewer than the report ranks, so one row has no
thumbnail and no link, as a product the store deleted does.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderTopPerformingBookingsWidget,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas, withStoryRouter]
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderTopPerformingBookingsWidget,
  args: {
    withComparison: false
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(PRODUCTS_REPORT_PATH, 'loading')
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: renderTopPerformingBookingsWidget,
  args: {
    withComparison: false
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(PRODUCTS_REPORT_PATH, 'empty')
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: renderTopPerformingBookingsWidget,
  args: {
    withComparison: false
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(PRODUCTS_REPORT_PATH, 'error')
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: renderTopPerformingBookingsWidget,
  args: {
    withComparison: false
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(PRODUCTS_REPORT_PATH, 'error-retryable')
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  tags: ['widget-dashboard'],
  render: args => <TopPerformingBookingsDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    withComparison: true
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    ...storyControlArgTypes
  }
}`,...X.parameters?.docs?.source}}}}))();export{W as Default,q as Empty,Y as ErrorRetryable,J as ErrorState,K as Loading,X as WidgetDashboardWithWidget,G as WithComparison,Z as __namedExportsOrder,U as default};