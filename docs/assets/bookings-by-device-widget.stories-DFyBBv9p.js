import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{t}from"./jsx-runtime-CFwixLRt.js";import{R as n}from"./charts-provider-DVBrFPaa.js";import{a as r,c as i,i as a,s as o,u as s}from"./with-widget-canvas-BqMy9p20.js";import{C as c,_ as l,b as u,m as d,t as f,v as p,x as m}from"./reports-CU8RmUdt.js";import{n as h,t as g}from"./sales-by-device-DOxTwgcG.js";function _({attributes:e={}}){return(0,v.jsx)(n,{attributes:e,children:(0,v.jsx)(g,{filters:y})})}var v,y,b=e((()=>{l(),h(),f(),v=t(),y=[d]})),x,S,C,w,T,E,D,O,k,A=e((()=>{x=`woocommerce-analytics/bookings-by-device`,S=`jpa/chart-bar`,C=`Bookings by device`,w=`See which devices your customers are using to make bookings in your store.`,T={content:`See which devices your customers are using to make bookings in your store.`},E=`bookings`,D=`framed`,O=`jetpack-woocommerce-stats-pkg`,k={name:x,icon:S,title:C,description:w,help:T,category:E,presentation:D,textdomain:O}}));function j({withComparison:e}){return(0,N.jsx)(_,{attributes:{reportParams:u({withComparison:e})}})}function M({withComparison:e,...t}){return(0,N.jsx)(i,{...t,widgetType:R,renderModule:I,renderComponent:_,attributes:{reportParams:u({withComparison:e})}})}var N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J;e((()=>{p(),b(),A(),N=t(),{expect:P,within:F}=__STORYBOOK_MODULE_TEST__,c(),I=`storybook/bookings-by-device`,L=`analytics/reports/order-attribution-by-product/device/summary`,R=r(k),z={withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},B={title:`Packages/WooCommerce Stats/Widgets/BookingsByDevice`,component:_,tags:[`autodocs`],argTypes:z,parameters:{docs:{description:{component:`The "Bookings by device" widget. Splits the net sales of bookings by the device the order came from, as one column each, with an optional previous-period column beside it. The bookings filter routes it to the by-product report, which answers one period per request.`}}}},V={render:j,args:{withComparison:!1},decorators:[a],play:async({canvasElement:e})=>{let t=F(e);await P(await t.findByText(`Mobile`)).toBeVisible(),await P(await t.findByText(`Unassigned`)).toBeVisible()}},H={render:j,args:{withComparison:!0},decorators:[a]},U={render:j,args:{withComparison:!1},tags:[`!autodocs`],decorators:[a],beforeEach:m(L,`loading`)},W={render:j,args:{withComparison:!1},tags:[`!autodocs`],decorators:[a],beforeEach:m(L,`empty`)},G={render:j,args:{withComparison:!1},tags:[`!autodocs`],decorators:[a],beforeEach:m(L,`error`)},K={render:j,args:{withComparison:!1},tags:[`!autodocs`],decorators:[a],beforeEach:m(L,`error-retryable`)},q={tags:[`widget-dashboard`],render:e=>(0,N.jsx)(M,{...e}),args:{...o,withComparison:!0},argTypes:{...s,...z}},J=[`Default`,`WithComparison`,`Loading`,`Empty`,`ErrorState`,`ErrorRetryable`,`WidgetDashboardWithWidget`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: renderBookingsByDeviceWidget,
  args: {
    withComparison: false
  },
  decorators: [withWidgetCanvas],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(await canvas.findByText('Mobile')).toBeVisible();
    await expect(await canvas.findByText('Unassigned')).toBeVisible();
  }
}`,...V.parameters?.docs?.source},description:{story:`The report includes orders with no recorded device, which the chart labels "Unassigned".`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: renderBookingsByDeviceWidget,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas]
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: renderBookingsByDeviceWidget,
  args: {
    withComparison: false
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(ATTRIBUTION_REPORT_PATH, 'loading')
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: renderBookingsByDeviceWidget,
  args: {
    withComparison: false
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(ATTRIBUTION_REPORT_PATH, 'empty')
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: renderBookingsByDeviceWidget,
  args: {
    withComparison: false
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(ATTRIBUTION_REPORT_PATH, 'error')
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: renderBookingsByDeviceWidget,
  args: {
    withComparison: false
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(ATTRIBUTION_REPORT_PATH, 'error-retryable')
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  tags: ['widget-dashboard'],
  render: args => <BookingsByDeviceDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    withComparison: true
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    ...storyControlArgTypes
  }
}`,...q.parameters?.docs?.source}}}}))();export{V as Default,W as Empty,K as ErrorRetryable,G as ErrorState,U as Loading,q as WidgetDashboardWithWidget,H as WithComparison,J as __namedExportsOrder,B as default};