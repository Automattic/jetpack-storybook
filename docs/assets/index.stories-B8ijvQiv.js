import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Lh as n,Ln as r,Qm as i,Rn as a}from"./iframe-Doh4odxI.js";var o,s,c,l,u,d,f,p;e((()=>{o=t(n(),1),a(),s=i(),c={title:`JS Packages/Components/Number Slider`,component:r},l=e=>(0,s.jsx)(r,{...e}),u=l.bind({}),d=e=>{let[t,n]=(0,o.useState)(10),[i,a]=(0,o.useState)(10),c=(e,t)=>(0,s.jsxs)(`div`,{...e,children:[t.valueNow,` - `,t.valueNow%2==0?`Even`:`Odd`]});return(0,s.jsxs)(`div`,{children:[(0,s.jsx)(r,{...e,value:t,onChange:n,onAfterChange:a,renderThumb:c}),(0,s.jsx)(`div`,{children:`Value on changing: ${t}`}),(0,s.jsx)(`div`,{children:`Value on change ends: ${i}`})]})},f=d.bind({}),u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <NumberSlider {...args} />`,...u.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => {
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
}`,...f.parameters?.docs?.source}}},p=[`_default`,`WithDefaultValue`]}))();export{f as WithDefaultValue,p as __namedExportsOrder,u as _default,c as default};