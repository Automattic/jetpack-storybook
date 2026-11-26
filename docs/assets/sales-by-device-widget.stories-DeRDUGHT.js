import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{t}from"./jsx-runtime-CFwixLRt.js";import{R as n}from"./charts-provider-CLTdq-Ei.js";import{a as r,c as i,i as a,s as o,u as s}from"./with-widget-canvas-DmNPWDHb.js";import{C as c,_ as l,b as u,v as d,x as f}from"./reports-D0TxMks3.js";import{n as p,t as m}from"./sales-by-device-BsH6x0Ev.js";function h({attributes:e={}}){return(0,g.jsx)(n,{attributes:e,children:(0,g.jsx)(m,{})})}var g,_=e((()=>{l(),p(),g=t()})),v,y,b,x,S,C,w,T,E,D=e((()=>{v=`woocommerce-analytics/sales-by-device`,y=`jpa/chart-bar`,b=`Sales by device`,x=`Shows the sales breakdown by device type over the selected time period.`,S={content:`See which devices your customers are using to make purchases in your store.`},C=`store`,w=`framed`,T=`jetpack-woocommerce-stats-pkg`,E={name:v,icon:y,title:b,description:x,help:S,category:C,presentation:w,textdomain:T}}));function O({withComparison:e}){return(0,A.jsx)(h,{attributes:{reportParams:u({withComparison:e})}})}function k({withComparison:e,...t}){return(0,A.jsx)(i,{...t,widgetType:F,renderModule:N,renderComponent:h,attributes:{reportParams:u({withComparison:e})}})}var A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G;e((()=>{d(),_(),D(),A=t(),{expect:j,within:M}=__STORYBOOK_MODULE_TEST__,c(),N=`storybook/sales-by-device`,P=`analytics/reports/order-attribution/device/summary`,F=r(E),I={withComparison:{control:`boolean`,description:`Include previous-period comparison report params.`}},L={title:`Packages/WooCommerce Stats/Widgets/SalesByDevice`,component:h,tags:[`autodocs`],argTypes:I,parameters:{docs:{description:{component:`The "Sales by device" widget. Splits the net sales of the period by the device the order came from, as one column each, with an optional previous-period column beside it.`}}}},R={render:O,args:{withComparison:!1},decorators:[a],play:async({canvasElement:e})=>{let t=M(e);await j(await t.findByText(`Mobile`)).toBeVisible(),await j(await t.findByText(`Unassigned`)).toBeVisible()}},z={render:O,args:{withComparison:!0},decorators:[a]},B={render:O,args:{withComparison:!1},tags:[`!autodocs`],decorators:[a],beforeEach:f(P,`loading`)},V={render:O,args:{withComparison:!1},tags:[`!autodocs`],decorators:[a],beforeEach:f(P,`empty`)},H={render:O,args:{withComparison:!1},tags:[`!autodocs`],decorators:[a],beforeEach:f(P,`error`)},U={render:O,args:{withComparison:!1},tags:[`!autodocs`],decorators:[a],beforeEach:f(P,`error-retryable`)},W={tags:[`widget-dashboard`],render:e=>(0,A.jsx)(k,{...e}),args:{...o,withComparison:!0},argTypes:{...s,...I}},G=[`Default`,`WithComparison`,`Loading`,`Empty`,`ErrorState`,`ErrorRetryable`,`WidgetDashboardWithWidget`],R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: renderSalesByDeviceWidget,
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
}`,...R.parameters?.docs?.source},description:{story:`The report includes orders with no recorded device, which the chart labels "Unassigned".`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: renderSalesByDeviceWidget,
  args: {
    withComparison: true
  },
  decorators: [withWidgetCanvas]
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: renderSalesByDeviceWidget,
  args: {
    withComparison: false
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(ATTRIBUTION_REPORT_PATH, 'loading')
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: renderSalesByDeviceWidget,
  args: {
    withComparison: false
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(ATTRIBUTION_REPORT_PATH, 'empty')
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: renderSalesByDeviceWidget,
  args: {
    withComparison: false
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(ATTRIBUTION_REPORT_PATH, 'error')
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: renderSalesByDeviceWidget,
  args: {
    withComparison: false
  },
  tags: ['!autodocs'],
  decorators: [withWidgetCanvas],
  beforeEach: forceWooReportState(ATTRIBUTION_REPORT_PATH, 'error-retryable')
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  tags: ['widget-dashboard'],
  render: args => <SalesByDeviceDashboardStory {...args} />,
  args: {
    ...DEFAULT_WIDGET_DASHBOARD_STORY_ARGS,
    withComparison: true
  },
  argTypes: {
    ...widgetDashboardWithWidgetArgTypes,
    ...storyControlArgTypes
  }
}`,...W.parameters?.docs?.source}}}}))();export{R as Default,V as Empty,U as ErrorRetryable,H as ErrorState,B as Loading,W as WidgetDashboardWithWidget,z as WithComparison,G as __namedExportsOrder,L as default};