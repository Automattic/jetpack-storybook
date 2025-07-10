"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[2473],{"../components/components/text/stories/headings.index.stories.tsx":(_,c,o)=>{o.r(c),o.d(c,{Default:()=>t,HeadlineH2:()=>a,HeadlineH3:()=>s,__namedExportsOrder:()=>x,default:()=>u});var r=o("../components/components/text/index.tsx"),p=o("../components/components/text/stories/style.module.scss"),e=o("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const m=["regular","bold"],u={title:"JS Packages/Components/Text/Heading",component:r.H2,argTypes:{children:{control:{type:"text"}},weight:{control:{type:"select"},options:m}}};function l({children:n}){return(0,e.jsxs)("div",{className:p.A.instance,children:[(0,e.jsx)("span",{children:"Text above to the the component..."}),n,(0,e.jsx)("span",{children:"Text below to the the component..."})]})}const d=n=>(0,e.jsx)(l,{children:(0,e.jsx)(r.H2,{...n,children:n?.children||"Headline Medium - Manage your Jetpack plan and products all in one place"})}),i=n=>(0,e.jsx)(l,{children:(0,e.jsx)(r.H3,{...n,children:n?.children||"Headline Small - Manage your Jetpack plan and products all in one place"})}),H=n=>(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(d,{...n}),(0,e.jsx)(i,{...n})]}),g={},t=H.bind({});t.args=g;const a=d.bind({});a.storyName="H2",a.args={weight:"bold"};const s=i.bind({});s.storyName="H3",s.args={weight:"bold"};const x=["Default","HeadlineH2","HeadlineH3"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  return <>
            <TemplateH2 {...args} />
            <TemplateH3 {...args} />
        </>;
}`,...t.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <Instance>
        <H2 {...args}>
            {args?.children || 'Headline Medium - Manage your Jetpack plan and products all in one place'}
        </H2>
    </Instance>`,...a.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <Instance>
        <H3 {...args}>
            {args?.children || 'Headline Small - Manage your Jetpack plan and products all in one place'}
        </H3>
    </Instance>`,...s.parameters?.docs?.source}}}}}]);
