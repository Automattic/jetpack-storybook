import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{n as i,r as a,t as o}from"./section-tabs-DrgCE-wV.js";function s({containerWidth:e}){let[t,n]=(0,c.useState)(u[0].id);return(0,l.jsx)(`div`,{style:{width:`${e}px`,border:`1px dashed #ccc`,padding:`16px`,resize:`horizontal`,overflow:`auto`},children:(0,l.jsx)(i,{tabs:u,value:t,onChange:n,children:u.map(e=>(0,l.jsxs)(o,{value:e.id,children:[e.label,` panel content`]},e.id))})})}var c,l,u,d,f,p,m;t((()=>{c=e(n(),1),a(),l=r(),u=[{id:`source-medium`,label:`Source / Medium`},{id:`campaign-source-medium`,label:`Campaign / Source / Medium`},{id:`source`,label:`Source`},{id:`medium`,label:`Medium`},{id:`campaign`,label:`Campaign`}],d={title:`Packages/Premium Analytics/UI/SectionTabs`,component:i,tags:[`autodocs`],argTypes:{containerWidth:{control:{type:`range`,min:240,max:900,step:10},description:`Width of the container, standing in for the viewport.`}},parameters:{layout:`padded`,docs:{description:{component:`The shared section tab bar. When the tab set is wider than its container, the tablist scrolls inline and shows fade masks at the clipped edge(s) instead of overflowing the page — drag the container handle or use the width control to see it.`}}}},f={render:e=>(0,l.jsx)(s,{...e}),args:{containerWidth:800}},p={render:e=>(0,l.jsx)(s,{...e}),args:{containerWidth:320}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <SectionTabsStory {...args} />,
  args: {
    containerWidth: 800
  }
}`,...f.parameters?.docs?.source},description:{story:`The full tab set with room to spare: the tab row is content-sized (it does
not stretch to fill the container) and nothing scrolls.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <SectionTabsStory {...args} />,
  args: {
    containerWidth: 320
  }
}`,...p.parameters?.docs?.source},description:{story:`The container is narrower than the tab set: the tab bar scrolls in place
with a fade hint at the clipped edge, and arrow-key navigation scrolls
offscreen tabs into view. The page itself must never scroll horizontally.`,...p.parameters?.docs?.description}}},m=[`Default`,`Overflowing`]}))();export{f as Default,p as Overflowing,m as __namedExportsOrder,d as default};