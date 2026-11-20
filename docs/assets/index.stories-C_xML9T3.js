import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-BXs6jvWf.js";import{n as a,t as o}from"./clsx-DtTNkXd0.js";import{t as s}from"./jsx-runtime-CFwixLRt.js";import{j as c,t as l}from"./build-module-Dxhc9xxH.js";import{A as u,H as d,K as f,Kn as p,M as m,W as h,ci as g,cr as _,fr as v,mr as y,or as b,t as x}from"./build-module-vwO17YW3.js";var S=e((()=>{}));function C({children:e,className:t}){return(0,T.jsx)(`div`,{className:o(`jp-radio-card-grid`,t),children:e})}function w({id:e,value:t,title:n,illustration:i,previewUrl:a,onPreviewClick:o,disabled:s}){let l=`${e}__title`,u=(0,c.useCallback)(()=>{o?.(t)},[t,o]);return(0,T.jsxs)(h,{disabled:s,children:[(0,T.jsx)(v,{className:`jp-radio-card`,children:(0,T.jsx)(_,{children:(0,T.jsxs)(b,{className:`jp-radio-card__surface`,children:[(0,T.jsx)(d,{className:`jp-radio-card__illustration`,children:i}),(0,T.jsx)(m,{id:e,className:`jp-radio-card__radio`,value:t,disabled:s,"aria-labelledby":l})]})})}),(0,T.jsxs)(p,{gap:`xs`,direction:`column`,children:[(0,T.jsx)(g,{id:l,variant:`body-sm`,children:n}),a&&(0,T.jsx)(y,{href:a,onClick:u,children:r(`Preview and edit`,`jetpack-components`)})]})]})}var T,E=e((()=>{l(),i(),x(),a(),S(),T=s()})),D,O,k,A,j,M,N,P,F;e((()=>{x(),D=t(n(),1),E(),O=s(),k={title:`JS Packages/Components/Radio Card`,component:w,argTypes:{illustration:{table:{disable:!0}},onPreviewClick:{table:{disable:!0}}}},A=({before:e})=>{let t=e?56:24;return(0,O.jsxs)(`svg`,{viewBox:`0 0 294 192`,"aria-hidden":`true`,children:[(0,O.jsx)(`rect`,{x:`40`,y:t,width:`214`,height:`12`,rx:`2`,fill:`#dcdcde`}),(0,O.jsx)(`rect`,{x:`40`,y:t+24,width:`214`,height:`80`,rx:`2`,fill:`#f0f0f1`}),(0,O.jsx)(`rect`,{x:`40`,y:e?24:140,width:`120`,height:`20`,rx:`4`,fill:`#3858e9`})]})},j=e=>{let[t,n]=(0,D.useState)(`after_content`);return(0,O.jsx)(f,{children:(0,O.jsx)(u,{value:t,onValueChange:n,"aria-label":`Where the block goes`,style:{maxWidth:736},children:(0,O.jsxs)(C,{children:[(0,O.jsx)(w,{...e,id:`placement-before-content`,value:`before_content`,title:`Before the post content`,illustration:(0,O.jsx)(A,{before:!0})}),(0,O.jsx)(w,{...e,id:`placement-after-content`,value:`after_content`,title:`After the post content`,illustration:(0,O.jsx)(A,{})})]})})})},M=j.bind({}),M.args={},N=j.bind({}),N.args={previewUrl:`#`},P=j.bind({}),P.args={disabled:!0},F=[`_default`,`WithPreviewLink`,`Disabled`],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string>('after_content');
  return <Field.Root>
            <RadioGroup value={value} onValueChange={setValue} aria-label="Where the block goes" style={{
      maxWidth: 736
    }}>
                <RadioCardGrid>
                    <RadioCard {...args} id="placement-before-content" value="before_content" title="Before the post content" illustration={<Wireframe before />} />
                    <RadioCard {...args} id="placement-after-content" value="after_content" title="After the post content" illustration={<Wireframe />} />
                </RadioCardGrid>
            </RadioGroup>
        </Field.Root>;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string>('after_content');
  return <Field.Root>
            <RadioGroup value={value} onValueChange={setValue} aria-label="Where the block goes" style={{
      maxWidth: 736
    }}>
                <RadioCardGrid>
                    <RadioCard {...args} id="placement-before-content" value="before_content" title="Before the post content" illustration={<Wireframe before />} />
                    <RadioCard {...args} id="placement-after-content" value="after_content" title="After the post content" illustration={<Wireframe />} />
                </RadioCardGrid>
            </RadioGroup>
        </Field.Root>;
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string>('after_content');
  return <Field.Root>
            <RadioGroup value={value} onValueChange={setValue} aria-label="Where the block goes" style={{
      maxWidth: 736
    }}>
                <RadioCardGrid>
                    <RadioCard {...args} id="placement-before-content" value="before_content" title="Before the post content" illustration={<Wireframe before />} />
                    <RadioCard {...args} id="placement-after-content" value="after_content" title="After the post content" illustration={<Wireframe />} />
                </RadioCardGrid>
            </RadioGroup>
        </Field.Root>;
}`,...P.parameters?.docs?.source}}}}))();export{P as Disabled,N as WithPreviewLink,F as __namedExportsOrder,M as _default,k as default};