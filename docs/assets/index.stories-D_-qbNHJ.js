import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-DQe4AOzJ.js";import{n as a,t as o}from"./clsx-DtTNkXd0.js";import{t as s}from"./jsx-runtime-CFwixLRt.js";import{p as c,t as l}from"./build-module-BO5KMTRI.js";import{I as u,P as d,c as f,f as p,i as m,m as h,n as g,o as _,t as v,u as y}from"./build-module-XS3swXFH2.js";var b=e((()=>{}));function x({children:e,className:t}){return(0,C.jsx)(`div`,{className:o(`jp-checkbox-card-grid`,t),children:e})}function S({id:e,name:t,title:n,illustration:i,checked:a,onChange:o,previewUrl:s,onPreviewClick:l,disabled:v}){let b=`${e}__title`,x=(0,c.useCallback)(e=>o(t,e),[t,o]),S=(0,c.useCallback)(()=>{l?.(t)},[t,l]);return(0,C.jsxs)(m,{disabled:v,children:[(0,C.jsx)(h,{className:`jp-checkbox-card`,"data-checked":a,children:(0,C.jsx)(p,{children:(0,C.jsxs)(y,{className:`jp-checkbox-card__surface`,children:[(0,C.jsx)(g,{className:`jp-checkbox-card__illustration`,children:i}),(0,C.jsx)(_,{id:e,className:`jp-checkbox-card__checkbox`,checked:a,onCheckedChange:x,"aria-labelledby":b})]})})}),(0,C.jsxs)(f,{gap:`xs`,direction:`column`,children:[(0,C.jsx)(u,{id:b,variant:`body-sm`,children:n}),s&&(0,C.jsx)(d,{href:s,onClick:S,children:r(`Preview and edit`,`jetpack-components`)})]})]})}var C,w=e((()=>{l(),i(),v(),a(),b(),C=s()})),T,E,D,O,k,A,j,M,N,P;e((()=>{T=t(n(),1),w(),E=s(),D={title:`JS Packages/Components/Checkbox Card`,component:S,argTypes:{illustration:{table:{disable:!0}},onChange:{table:{disable:!0}},onPreviewClick:{table:{disable:!0}}}},O=({before:e})=>{let t=e?56:24;return(0,E.jsxs)(`svg`,{viewBox:`0 0 294 192`,"aria-hidden":`true`,children:[(0,E.jsx)(`rect`,{x:`40`,y:t,width:`214`,height:`12`,rx:`2`,fill:`#dcdcde`}),(0,E.jsx)(`rect`,{x:`40`,y:t+24,width:`214`,height:`80`,rx:`2`,fill:`#f0f0f1`}),(0,E.jsx)(`rect`,{x:`40`,y:e?24:140,width:`120`,height:`20`,rx:`4`,fill:`#3858e9`})]})},k=e=>{let[t,n]=(0,T.useState)(e.checked),r=(0,T.useCallback)((e,t)=>n(t),[]);return(0,E.jsx)(`div`,{style:{maxWidth:360},children:(0,E.jsx)(S,{...e,checked:t,onChange:r})})},A=k.bind({}),A.args={id:`placement-after-content`,name:`after_content`,title:`After the post content`,illustration:(0,E.jsx)(O,{}),checked:!1},j=k.bind({}),j.args={...A.args,checked:!0,previewUrl:`#`},M=k.bind({}),M.args={...A.args,disabled:!0},N=()=>{let[e,t]=(0,T.useState)({before_content:!0}),n=(0,T.useCallback)((e,n)=>t(t=>({...t,[e]:n})),[]);return(0,E.jsxs)(x,{children:[(0,E.jsx)(S,{id:`placement-before-content`,name:`before_content`,title:`Before the post content`,illustration:(0,E.jsx)(O,{before:!0}),checked:!!e.before_content,onChange:n}),(0,E.jsx)(S,{id:`placement-after-content`,name:`after_content`,title:`After the post content`,illustration:(0,E.jsx)(O,{}),checked:!!e.after_content,onChange:n})]})},P=[`_default`,`WithPreviewLink`,`Disabled`,`Grid`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked);
  const handleChange = useCallback((_name: string, next: boolean) => setChecked(next), []);
  return <div style={{
    maxWidth: 360
  }}>
            <CheckboxCard {...args} checked={checked} onChange={handleChange} />
        </div>;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked);
  const handleChange = useCallback((_name: string, next: boolean) => setChecked(next), []);
  return <div style={{
    maxWidth: 360
  }}>
            <CheckboxCard {...args} checked={checked} onChange={handleChange} />
        </div>;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked);
  const handleChange = useCallback((_name: string, next: boolean) => setChecked(next), []);
  return <div style={{
    maxWidth: 360
  }}>
            <CheckboxCard {...args} checked={checked} onChange={handleChange} />
        </div>;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
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
}`,...N.parameters?.docs?.source}}}}))();export{M as Disabled,N as Grid,j as WithPreviewLink,P as __namedExportsOrder,A as _default,D as default};