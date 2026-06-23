import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{D as n,c as r,i,l as a,s as o,u as s,w as c}from"./hooks-CehHgxXb.js";import{D as l,F as u,t as d}from"./helpers-BZVlXc6F.js";import{n as f,t as p}from"./with-widget-root-CMcv0p2S.js";import{i as m,t as h}from"./report-metric-DoFqZgiu.js";function g({metricKey:e}){let{reportParams:t}=a();return(0,_.jsx)(h,{metricKey:e,data:c({...t,filters:[l]}),dataFormat:u(e)})}var _,v=e((()=>{s(),m(),i(),d(),_=t()})),y,b,x,S,C,w,T,E,D;e((()=>{s(),r(),p(),v(),y=t(),b={title:`Packages/Premium Analytics/Widgets Toolkit/Widgets/BookingOrderMetricWidget`,component:g,tags:[`autodocs`],parameters:{docs:{description:{component:`Displays booking order metrics over time with comparison support. Automatically filters data to show only booking product types (booking, bookable-event, bookable-service).`}}},decorators:[f(),e=>(0,y.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,y.jsx)(e,{})})]},x={args:{metricKey:`orders_no`}},S={args:{metricKey:`orders_no`},decorators:[e=>(0,y.jsx)(o.Provider,{value:{reportParams:n(!0)},children:(0,y.jsx)(e,{})})]},C=(e,t=`290px`)=>r=>(0,y.jsx)(o.Provider,{value:{reportParams:n(!0)},children:(0,y.jsx)(`div`,{style:{width:e,height:t,border:`1px dashed #ccc`,borderRadius:`8px`,padding:`16px`,background:`#fafafa`,containerType:`inline-size`,containerName:`widget`},children:(0,y.jsx)(r,{})})}),w={args:{metricKey:`orders_no`},decorators:[C(`256px`)]},T={args:{metricKey:`orders_no`},decorators:[C(`448px`)]},E={args:{metricKey:`orders_no`},decorators:[C(`576px`)]},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    metricKey: 'orders_no'
  }
}`,...x.parameters?.docs?.source},description:{story:`Default state showing booking orders count (used by bookings-over-time widget)`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    metricKey: 'orders_no'
  },
  decorators: [Story => <WidgetRootContext.Provider value={{
    reportParams: getDefaultQueryParams(true)
  }}>
                <Story />
            </WidgetRootContext.Provider>]
}`,...S.parameters?.docs?.source},description:{story:`With comparison period enabled - shows delta between periods`,...S.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    metricKey: 'orders_no'
  },
  decorators: [createSizeDecorator('256px')]
}`,...w.parameters?.docs?.source},description:{story:`Extra extra small container (256px / xxs breakpoint)`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    metricKey: 'orders_no'
  },
  decorators: [createSizeDecorator('448px')]
}`,...T.parameters?.docs?.source},description:{story:`Medium container (448px / md breakpoint)`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    metricKey: 'orders_no'
  },
  decorators: [createSizeDecorator('576px')]
}`,...E.parameters?.docs?.source},description:{story:`Large container (576px / xl breakpoint)`,...E.parameters?.docs?.description}}},D=[`Default`,`WithComparison`,`SizeXXSmall`,`SizeMedium`,`SizeLarge`]}))();export{x as Default,E as SizeLarge,T as SizeMedium,w as SizeXXSmall,S as WithComparison,D as __namedExportsOrder,b as default};