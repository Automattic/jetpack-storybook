import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{Dr as r,Hh as i,Ii as a,Ro as o,Rr as s,Vv as c,Yh as l,Yn as u,av as d,bi as f,ei as p,ia as m,iv as h,nv as g,ov as _,rv as v,t as y}from"./iframe-B_mllZiG.js";var b,x,S,C,w,T,E=e((()=>{b=`_label_13cbv_1`,x=`_disabled_13cbv_22`,S=`_large_13cbv_27`,C=`_input_13cbv_7`,w=`_loader_13cbv_64`,T={label:b,"input-wrapper":`_input-wrapper_13cbv_7`,disabled:x,large:S,"is-textarea":`_is-textarea_13cbv_31`,input:C,"with-icon":`_with-icon_13cbv_50`,"icon-wrapper":`_icon-wrapper_13cbv_53`,"clear-icon":`_clear-icon_13cbv_61`,loader:w}})),D,O,k,A,j,M=e((()=>{y(),m(),i(),d(),r(),h(),D=t(c()),E(),O=g(),k=({className:e,disabled:t=!1,loading:n=!1,icon:r=null,endAdornment:i=null,onChange:a,onEnter:s,size:c=`small`,...l})=>{let u=(0,D.useCallback)(e=>{a?.(e.currentTarget.value)},[a]),d=(0,D.useCallback)(e=>{s!=null&&[`Enter`,`NumpadEnter`].includes(e.code)&&s(e.currentTarget.value)},[s]),f={className:v(T.input,{[T[`with-icon`]]:r!=null}),onChange:u,onKeyUp:d,disabled:t,"aria-disabled":t},p=l?.type===`textarea`;return(0,O.jsx)(`div`,{className:v(e,T[`input-wrapper`],{[T.disabled]:t,[T.large]:c===`large`,[T[`is-textarea`]]:p}),children:p?(0,O.jsx)(`textarea`,{...l,...f}):(0,O.jsxs)(O.Fragment,{children:[n||r?(0,O.jsx)(`div`,{className:v(T[`icon-wrapper`],{[T.loader]:n}),children:n?(0,O.jsx)(o,{}):r}):null,(0,O.jsx)(`input`,{...l,...f,value:l.value}),i]})})},A=({name:e,label:t,className:n,size:r=`small`,...i})=>t?(0,O.jsxs)(`div`,{className:n,children:[(0,O.jsx)(u,{component:`label`,variant:r===`small`?`body-small`:`body`,htmlFor:e,mb:1,className:T.label,children:t}),(0,O.jsx)(k,{name:e,size:r,...i})]}):(0,O.jsx)(k,{className:n,size:r,...i}),j=({placeholder:e=_(`Search your library`,`jetpack-videopress-pkg`),onSearch:t,wait:n=500,...r})=>{let i=l(t,n),o=(0,D.useCallback)(e=>{r.onEnter?.(e),t(e)},[r.onEnter,t]),c=(0,D.useCallback)(e=>{r.onChange?.(e),i(e)},[r.onChange]),u=(0,D.useCallback)(()=>{r.onChange?.(``),t(``)},[r.onChange]);return(0,O.jsx)(A,{...r,icon:(0,O.jsx)(a,{icon:s,size:24}),placeholder:e,type:`text`,onEnter:o,onChange:c,endAdornment:(0,O.jsx)(O.Fragment,{children:!!r.value&&(0,O.jsx)(`div`,{className:v(T[`icon-wrapper`]),children:(0,O.jsx)(a,{icon:f,onClick:u,className:v(T[`clear-icon`])})})})})}})),N=n({Default:()=>V,Search:()=>K,TextArea:()=>W,WithIcon:()=>H,WithLabel:()=>U,__namedExportsOrder:()=>q,default:()=>L}),P,F,I,L,R,z,B,V,H,U,W,G,K,q,J=e((()=>{r(),P=t(c()),M(),F=g(),{action:I}=__STORYBOOK_MODULE_ACTIONS__,L={title:`Packages/VideoPress/Input`,component:A,argTypes:{size:{options:[`small`,`large`],control:{type:`radio`}},type:{options:[`text`,`textarea`,`number`,`url`,`email`,`password`,`tel`,`search`],control:{type:`select`}}}},R=e=>{I(`onEnter`)(e)},z={placeholder:`Placeholder text`,disabled:!1,loading:!1,size:`small`,type:`text`,label:``},B=e=>{let[t,n]=(0,P.useState)(``),r=e=>{n(e)};return(0,F.jsx)(A,{...e,value:t,onChange:r,onEnter:R})},V=B.bind({}),V.args=z,H=B.bind({}),H.args={...z,icon:(0,F.jsx)(a,{icon:p,size:24})},U=B.bind({}),U.args={...z,label:`My Label`},W=B.bind({}),W.args={...z,type:`textarea`},G=e=>{let[t,n]=(0,P.useState)(``),r=e=>{n(e),I(`onChange`)(e)};return(0,F.jsx)(j,{...e,value:t,onChange:r,onEnter:R})},K=G.bind({}),K.args={disabled:!1,loading:!1,onEnter:I(`onEnter`),onChange:I(`onChange`),onSearch:I(`onSearch`),wait:500},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
  };
  return <Input {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
  };
  return <Input {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
  };
  return <Input {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
  };
  return <Input {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...W.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
    action('onChange')(inputValue);
  };
  return <SearchInput {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...K.parameters?.docs?.source}}},q=[`Default`,`WithIcon`,`WithLabel`,`TextArea`,`Search`]}));J();export{V as Default,K as Search,W as TextArea,H as WithIcon,U as WithLabel,q as __namedExportsOrder,L as default,J as n,M as r,N as t};