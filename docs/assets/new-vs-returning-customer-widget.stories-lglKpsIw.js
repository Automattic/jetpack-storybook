import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./jsx-runtime-D2pHJD-r.js";import{nt as n,rt as r}from"./report-metric-DykAMe7x.js";import{Tt as i,hr as a}from"./chart-tooltip-KET-sEal.js";import{n as o,t as s}from"./with-widget-root-CHbM55dj.js";import{n as c,t as l}from"./new-vs-returning-customer-widget-Cap3YY0D.js";var u,d,f,p,m,h,g,_,v;e((()=>{i(),r(),s(),c(),u=t(),d={title:`Packages/Premium Analytics/Widgets Toolkit/Widgets/NewVsReturningCustomer`,component:l,tags:[`autodocs`],parameters:{docs:{description:{component:`Displays unique customer counts broken down by new vs returning customers using a donut chart. Shows total customers with comparison support.`}}},decorators:[o(),e=>(0,u.jsx)(`div`,{style:{width:`100%`,height:`300px`},children:(0,u.jsx)(e,{})})]},f={},p={decorators:[e=>(0,u.jsx)(n.Provider,{value:{reportParams:a(!0)},children:(0,u.jsx)(e,{})})]},m=e=>t=>(0,u.jsx)(n.Provider,{value:{reportParams:a(!0)},children:(0,u.jsx)(`div`,{style:{width:e,height:`300px`,border:`1px dashed #ccc`,borderRadius:`8px`,padding:`16px`,background:`#fafafa`},children:(0,u.jsx)(t,{})})}),h={decorators:[m(`256px`)]},g={decorators:[m(`448px`)]},_={decorators:[m(`576px`)]},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source},description:{story:`Default state with mock data (no comparison)`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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