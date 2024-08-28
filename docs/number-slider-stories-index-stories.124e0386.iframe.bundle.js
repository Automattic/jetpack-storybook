"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[8625],{"../components/components/number-slider/stories/index.stories.tsx":(j,o,n)=>{var u,l,c,i,m,p;n.r(o),n.d(o,{WithDefaultValue:()=>t,__namedExportsOrder:()=>g,_default:()=>a,default:()=>_});var d=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),s=n("../components/components/number-slider/index.tsx"),e=n("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const _={title:"JS Packages/Components/Number Slider",component:s.A},a=(r=>(0,e.jsx)(s.A,{...r})).bind({}),t=(r=>{const[h,E]=(0,d.useState)(10),[V,x]=(0,d.useState)(10),b=(T,v)=>(0,e.jsxs)("div",{...T,children:[v.valueNow," - ",v.valueNow%2===0?"Even":"Odd"]});return(0,e.jsxs)("div",{children:[(0,e.jsx)(s.A,{...r,value:h,onChange:E,onAfterChange:x,renderThumb:b}),(0,e.jsx)("div",{children:`Value on changing: ${h}`}),(0,e.jsx)("div",{children:`Value on change ends: ${V}`})]})}).bind({}),g=["_default","WithDefaultValue"];a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"args => <NumberSlider {...args} />",...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}},t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}}}}]);})();
