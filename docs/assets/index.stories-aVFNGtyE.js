import{n as e}from"./chunk-zsgVPwQN.js";import{Um as t}from"./iframe-BSM-Yq6U.js";import{i as n,t as r}from"./tooltip-CWSJH8Jg.js";var i,a,o,s,c,l,u;e((()=>{r(),i=t(),a=({data:e})=>(0,i.jsxs)(`div`,{style:{padding:`8px`},children:[(0,i.jsx)(`strong`,{style:{display:`block`,marginBottom:`4px`},children:e.label}),(0,i.jsxs)(`div`,{style:{color:`#888`},children:[`Value: `,e.value]})]}),o={title:`JS Packages/Charts Library/Components/Tooltip`,component:n,parameters:{layout:`centered`,docs:{description:{component:`A flexible tooltip component that can display data with custom styling and layout.`}}},argTypes:{data:{description:`The data object containing label and value`,control:`object`},top:{description:`Distance from top of container`,control:{type:`range`,min:0,max:200}},left:{description:`Distance from left of container`,control:{type:`range`,min:0,max:200}},style:{description:`Additional CSS styles to apply`,control:`object`}}},s=e=>(0,i.jsx)(`div`,{style:{position:`relative`,padding:`2rem`,border:`1px dashed #ccc`,width:`300px`,height:`200px`,background:`#f5f5f5`},children:(0,i.jsx)(n,{...e})}),c=s.bind({}),c.args={top:100,left:100,data:{label:`Monthly Sales`,value:4200}},l=s.bind({}),l.args={...c.args,component:a,data:{label:`Q4 Performance`,value:27},style:{backgroundColor:`#fff`,color:`#333`,boxShadow:`0 2px 8px rgba(0,0,0,0.15)`}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <div style={{
  position: 'relative',
  padding: '2rem',
  border: '1px dashed #ccc',
  width: '300px',
  height: '200px',
  background: '#f5f5f5'
}}>
        <BaseTooltip {...args} />
    </div>`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <div style={{
  position: 'relative',
  padding: '2rem',
  border: '1px dashed #ccc',
  width: '300px',
  height: '200px',
  background: '#f5f5f5'
}}>
        <BaseTooltip {...args} />
    </div>`,...l.parameters?.docs?.source}}},u=[`Default`,`CustomComponent`]}))();export{l as CustomComponent,c as Default,u as __namedExportsOrder,o as default};