import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{t as n}from"./react-_iuu1rfF.js";import{n as r,t as i}from"./build-module-DQe4AOzJ.js";import{n as a,t as o}from"./clsx-DtTNkXd0.js";import{t as s}from"./jsx-runtime-CFwixLRt.js";import{p as c,t as l}from"./build-module-BO5KMTRI.js";import{B as u,H as d,b as f,c as p,g as m,i as h,m as g,n as _,o as v,t as y,u as b,v as x}from"./build-module-BUIUheBW2.js";var S=e((()=>{}));function C({children:e,className:t}){return(0,T.jsx)(`div`,{className:o(`jp-radio-card-grid`,t),children:e})}function w({id:e,value:t,title:n,illustration:i,previewUrl:a,onPreviewClick:o,disabled:s}){let l=`${e}__title`,_=(0,c.useCallback)(()=>{o?.(t)},[t,o]);return(0,T.jsxs)(p,{disabled:s,children:[(0,T.jsx)(f,{className:`jp-radio-card`,children:(0,T.jsx)(x,{children:(0,T.jsxs)(m,{className:`jp-radio-card__surface`,children:[(0,T.jsx)(v,{className:`jp-radio-card__illustration`,children:i}),(0,T.jsx)(h,{id:e,className:`jp-radio-card__radio`,value:t,disabled:s,"aria-labelledby":l})]})})}),(0,T.jsxs)(g,{gap:`xs`,direction:`column`,children:[(0,T.jsx)(d,{id:l,variant:`body-sm`,children:n}),a&&(0,T.jsx)(u,{href:a,onClick:_,children:r(`Preview and edit`,`jetpack-components`)})]})]})}var T,E=e((()=>{l(),i(),y(),a(),S(),T=s()})),D,O,k,A,j,M,N,P,F;e((()=>{y(),D=t(n(),1),E(),O=s(),k={title:`JS Packages/Components/Radio Card`,component:w,argTypes:{illustration:{table:{disable:!0}},onPreviewClick:{table:{disable:!0}}}},A=({before:e})=>{let t=e?56:24;return(0,O.jsxs)(`svg`,{viewBox:`0 0 294 192`,"aria-hidden":`true`,children:[(0,O.jsx)(`rect`,{x:`40`,y:t,width:`214`,height:`12`,rx:`2`,fill:`#dcdcde`}),(0,O.jsx)(`rect`,{x:`40`,y:t+24,width:`214`,height:`80`,rx:`2`,fill:`#f0f0f1`}),(0,O.jsx)(`rect`,{x:`40`,y:e?24:140,width:`120`,height:`20`,rx:`4`,fill:`#3858e9`})]})},j=e=>{let[t,n]=(0,D.useState)(`after_content`);return(0,O.jsx)(b,{children:(0,O.jsx)(_,{value:t,onValueChange:n,"aria-label":`Where the block goes`,style:{maxWidth:736},children:(0,O.jsxs)(C,{children:[(0,O.jsx)(w,{...e,id:`placement-before-content`,value:`before_content`,title:`Before the post content`,illustration:(0,O.jsx)(A,{before:!0})}),(0,O.jsx)(w,{...e,id:`placement-after-content`,value:`after_content`,title:`After the post content`,illustration:(0,O.jsx)(A,{})})]})})})},M=j.bind({}),M.args={},N=j.bind({}),N.args={previewUrl:`#`},P=j.bind({}),P.args={disabled:!0},F=[`_default`,`WithPreviewLink`,`Disabled`],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`args => {
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