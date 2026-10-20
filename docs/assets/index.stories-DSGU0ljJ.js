import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-DVCOKQW8.js";import{t as r}from"./jsx-runtime-D2pHJD-r.js";import{Ga as i,Ka as a,Wa as o}from"./iframe-GFER120g.js";var s,c,l,u,d,f,p,m,h,g;t((()=>{s=e(n(),1),a(),c=r(),l={title:`JS Packages/Components/Checkbox Card`,component:o,argTypes:{illustration:{table:{disable:!0}},onChange:{table:{disable:!0}},onPreviewClick:{table:{disable:!0}}}},u=({before:e})=>{let t=e?56:24;return(0,c.jsxs)(`svg`,{viewBox:`0 0 294 192`,"aria-hidden":`true`,children:[(0,c.jsx)(`rect`,{x:`40`,y:t,width:`214`,height:`12`,rx:`2`,fill:`#dcdcde`}),(0,c.jsx)(`rect`,{x:`40`,y:t+24,width:`214`,height:`80`,rx:`2`,fill:`#f0f0f1`}),(0,c.jsx)(`rect`,{x:`40`,y:e?24:140,width:`120`,height:`20`,rx:`4`,fill:`#3858e9`})]})},d=e=>{let[t,n]=(0,s.useState)(e.checked),r=(0,s.useCallback)((e,t)=>n(t),[]);return(0,c.jsx)(`div`,{style:{maxWidth:360},children:(0,c.jsx)(o,{...e,checked:t,onChange:r})})},f=d.bind({}),f.args={id:`placement-after-content`,name:`after_content`,title:`After the post content`,illustration:(0,c.jsx)(u,{}),checked:!1},p=d.bind({}),p.args={...f.args,checked:!0,previewUrl:`#`},m=d.bind({}),m.args={...f.args,disabled:!0},h=()=>{let[e,t]=(0,s.useState)({before_content:!0}),n=(0,s.useCallback)((e,n)=>t(t=>({...t,[e]:n})),[]);return(0,c.jsxs)(i,{children:[(0,c.jsx)(o,{id:`placement-before-content`,name:`before_content`,title:`Before the post content`,illustration:(0,c.jsx)(u,{before:!0}),checked:!!e.before_content,onChange:n}),(0,c.jsx)(o,{id:`placement-after-content`,name:`after_content`,title:`After the post content`,illustration:(0,c.jsx)(u,{}),checked:!!e.after_content,onChange:n})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked);
  const handleChange = useCallback((_name: string, next: boolean) => setChecked(next), []);
  return <div style={{
    maxWidth: 360
  }}>
            <CheckboxCard {...args} checked={checked} onChange={handleChange} />
        </div>;
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked);
  const handleChange = useCallback((_name: string, next: boolean) => setChecked(next), []);
  return <div style={{
    maxWidth: 360
  }}>
            <CheckboxCard {...args} checked={checked} onChange={handleChange} />
        </div>;
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked);
  const handleChange = useCallback((_name: string, next: boolean) => setChecked(next), []);
  return <div style={{
    maxWidth: 360
  }}>
            <CheckboxCard {...args} checked={checked} onChange={handleChange} />
        </div>;
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState<Record<string, boolean>>({
    before_content: true
  });
  const handleChange = useCallback((name: string, next: boolean) => setSelected(prev => ({
    ...prev,
    [name]: next
  })), []);
  return <CheckboxCardGrid>
            <CheckboxCard id="placement-before-content" name="before_content" title="Before the post content" illustration={<Wireframe before />} checked={Boolean(selected.before_content)} onChange={handleChange} />
            <CheckboxCard id="placement-after-content" name="after_content" title="After the post content" illustration={<Wireframe />} checked={Boolean(selected.after_content)} onChange={handleChange} />
        </CheckboxCardGrid>;
}`,...h.parameters?.docs?.source}}},g=[`_default`,`WithPreviewLink`,`Disabled`,`Grid`]}))();export{m as Disabled,h as Grid,p as WithPreviewLink,g as __namedExportsOrder,f as _default,l as default};