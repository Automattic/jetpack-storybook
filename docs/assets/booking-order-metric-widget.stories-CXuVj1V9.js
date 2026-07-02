import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{$ as n,c as r,s as i,u as a}from"./hooks-CRg4hyBG.js";import{n as o,t as s}from"./with-widget-root-CsPw3c-c.js";import{n as c,t as l}from"./booking-order-metric-widget-JthRGF8i.js";var u,d,f,p,m,h,g,_,v;e((()=>{a(),r(),s(),c(),u=t(),d={title:`Packages/Premium Analytics/Widgets Toolkit/Widgets/BookingOrderMetricWidget`,component:l,tags:[`autodocs`],parameters:{docs:{description:{component:`Displays booking order metrics over time with comparison support. Automatically filters data to show only booking product types (booking, bookable-event, bookable-service).`}}},decorators:[o(),e=>(0,u.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,u.jsx)(e,{})})]},f={args:{metricKey:`orders_no`}},p={args:{metricKey:`orders_no`},decorators:[e=>(0,u.jsx)(i.Provider,{value:{reportParams:n(!0)},children:(0,u.jsx)(e,{})})]},m=(e,t=`290px`)=>r=>(0,u.jsx)(i.Provider,{value:{reportParams:n(!0)},children:(0,u.jsx)(`div`,{style:{width:e,height:t,border:`1px dashed #ccc`,borderRadius:`8px`,padding:`16px`,background:`#fafafa`,containerType:`inline-size`,containerName:`widget`},children:(0,u.jsx)(r,{})})}),h={args:{metricKey:`orders_no`},decorators:[m(`256px`)]},g={args:{metricKey:`orders_no`},decorators:[m(`448px`)]},_={args:{metricKey:`orders_no`},decorators:[m(`576px`)]},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    metricKey: 'orders_no'
  }
}`,...f.parameters?.docs?.source},description:{story:`Default state showing booking orders count (used by bookings-over-time widget)`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    metricKey: 'orders_no'
  },
  decorators: [Story => <WidgetRootContext.Provider value={{
    reportParams: getDefaultQueryParams(true)
  }}>
                <Story />
            </WidgetRootContext.Provider>]
}`,...p.parameters?.docs?.source},description:{story:`With comparison period enabled - shows delta between periods`,...p.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    metricKey: 'orders_no'
  },
  decorators: [createSizeDecorator('256px')]
}`,...h.parameters?.docs?.source},description:{story:`Extra extra small container (256px / xxs breakpoint)`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    metricKey: 'orders_no'
  },
  decorators: [createSizeDecorator('448px')]
}`,...g.parameters?.docs?.source},description:{story:`Medium container (448px / md breakpoint)`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    metricKey: 'orders_no'
  },
  decorators: [createSizeDecorator('576px')]
}`,..._.parameters?.docs?.source},description:{story:`Large container (576px / xl breakpoint)`,..._.parameters?.docs?.description}}},v=[`Default`,`WithComparison`,`SizeXXSmall`,`SizeMedium`,`SizeLarge`]}))();export{f as Default,_ as SizeLarge,g as SizeMedium,h as SizeXXSmall,p as WithComparison,v as __namedExportsOrder,d as default};