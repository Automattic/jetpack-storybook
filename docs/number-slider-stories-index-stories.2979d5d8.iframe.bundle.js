"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8625],{"../components/components/number-slider/stories/index.stories.tsx"(g,o,n){n.r(o),n.d(o,{WithDefaultValue:()=>a,__namedExportsOrder:()=>i,_default:()=>t,default:()=>c});var d=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=n("../components/components/number-slider/index.tsx"),e=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const c={title:"JS Packages/Components/Number Slider",component:s.A},t=(r=>(0,e.jsx)(s.A,{...r})).bind({}),a=(r=>{const[u,m]=(0,d.useState)(10),[p,h]=(0,d.useState)(10),v=(_,l)=>(0,e.jsxs)("div",{..._,children:[l.valueNow," - ",l.valueNow%2===0?"Even":"Odd"]});return(0,e.jsxs)("div",{children:[(0,e.jsx)(s.A,{...r,value:u,onChange:m,onAfterChange:h,renderThumb:v}),(0,e.jsx)("div",{children:`Value on changing: ${u}`}),(0,e.jsx)("div",{children:`Value on change ends: ${p}`})]})}).bind({}),i=["_default","WithDefaultValue"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"args => <NumberSlider {...args} />",...t.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(10);
  const [endValue, setEndValue] = useState(10);
  const renderThumb = (props, state) => {
    return <div {...props}>
                {state.valueNow} - {state.valueNow % 2 === 0 ? 'Even' : 'Odd'}
            </div>;
  };
  return <div>
            <NumberSlider {...args} value={value} onChange={setValue} onAfterChange={setEndValue} renderThumb={renderThumb} // eslint-disable-line react/jsx-no-bind
    />
            <div>{\`Value on changing: \${value}\`}</div>
            <div>{\`Value on change ends: \${endValue}\`}</div>
        </div>;
}`,...a.parameters?.docs?.source}}}}}]);
