import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{$ as n,c as r,s as i,u as a}from"./hooks-DMMZZhMN.js";import{n as o,t as s}from"./with-widget-root-CqJC3Rrq.js";import{n as c,t as l}from"./sales-by-device-widget-BdusQTC3.js";var u,d,f,p,m,h,g,_,v;e((()=>{a(),r(),s(),c(),u=t(),d={title:`Packages/Premium Analytics/Widgets Toolkit/Widgets/SalesByDevice`,component:l,tags:[`autodocs`],parameters:{docs:{description:{component:`Displays sales attribution data by device type (Desktop, Mobile, Tablet) using a bar chart with comparison support.`}}},decorators:[o(),e=>(0,u.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,u.jsx)(e,{})})]},f={},p={decorators:[e=>(0,u.jsx)(i.Provider,{value:{reportParams:n(!0)},children:(0,u.jsx)(e,{})})]},m=e=>t=>(0,u.jsx)(i.Provider,{value:{reportParams:n(!0)},children:(0,u.jsx)(`div`,{style:{width:e,height:`300px`,border:`1px dashed #ccc`,borderRadius:`8px`,padding:`16px`,background:`#fafafa`},children:(0,u.jsx)(t,{})})}),h={decorators:[m(`256px`)]},g={decorators:[m(`448px`)]},_={decorators:[m(`576px`)]},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source},description:{story:`Default state with mock data (no comparison)`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <WidgetRootContext.Provider value={{
    reportParams: getDefaultQueryParams(true)
  }}>
                <Story />
            </WidgetRootContext.Provider>]
}`,...p.parameters?.docs?.source},description:{story:`With comparison period enabled`,...p.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  decorators: [createSizeDecorator('256px')]
}`,...h.parameters?.docs?.source},description:{story:`Extra extra small widgets (256px / xxs breakpoint)
Tests compact layout with comparison enabled.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  decorators: [createSizeDecorator('448px')]
}`,...g.parameters?.docs?.source},description:{story:`Medium container (448px / md breakpoint)
Tests standard tile size with comparison.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  decorators: [createSizeDecorator('576px')]
}`,..._.parameters?.docs?.source},description:{story:`Large container (576px / xl breakpoint)
Tests expanded layout with full data visibility.`,..._.parameters?.docs?.description}}},v=[`Default`,`WithComparison`,`SizeXXSmall`,`SizeMedium`,`SizeLarge`]}))();export{f as Default,_ as SizeLarge,g as SizeMedium,h as SizeXXSmall,p as WithComparison,v as __namedExportsOrder,d as default};