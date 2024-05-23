"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1366],{"../../packages/videopress/src/client/admin/components/input/stories/index.stories.tsx":(K,C,e)=>{var A,O,b,I,L,l,o,r,n,h,f,y,D,t,c;e.r(C),e.d(C,{Default:()=>v,Search:()=>s,TextArea:()=>i,WithIcon:()=>g,WithLabel:()=>_,__namedExportsOrder:()=>a,default:()=>z});var p=e("../../../node_modules/.pnpm/@storybook+addon-actions@8.0.9/node_modules/@storybook/addon-actions/dist/index.mjs"),H=e("../../../node_modules/.pnpm/@wordpress+icons@9.48.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),T=e("../../../node_modules/.pnpm/@wordpress+icons@9.48.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/map-marker.js"),S=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),m=e("../../packages/videopress/src/client/admin/components/input/index.tsx"),E=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const z={title:"Packages/VideoPress/Input",component:m.II,argTypes:{size:{options:["small","large"],control:{type:"radio"}},type:{options:["text","textarea","number","url","email","password","tel","search"],control:{type:"select"}}}},V=j=>{(0,p.aD)("onEnter")(j)},d={placeholder:"Placeholder text",disabled:!1,loading:!1,size:"small",type:"text",label:""},u=j=>{const[w,k]=(0,S.useState)(""),x=R=>{k(R)};return(0,E.jsx)(m.II,{...j,value:w,onChange:x,onEnter:V})},v=u.bind({});v.args=d;const g=u.bind({});g.args={...d,icon:(0,E.jsx)(H.Z,{icon:T.Z,size:24})};const _=u.bind({});_.args={...d,label:"My Label"};const i=u.bind({});i.args={...d,type:"textarea"};const s=(j=>{const[w,k]=(0,S.useState)(""),x=R=>{k(R),(0,p.aD)("onChange")(R)};return(0,E.jsx)(m.Mj,{...j,value:w,onChange:x,onEnter:V})}).bind({});s.args={disabled:!1,loading:!1,onEnter:(0,p.aD)("onEnter"),onChange:(0,p.aD)("onChange"),onSearch:(0,p.aD)("onSearch"),wait:500},v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
  };
  return <Input {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...(b=(O=v.parameters)==null?void 0:O.docs)==null?void 0:b.source}}},g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
  };
  return <Input {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...(l=(L=g.parameters)==null?void 0:L.docs)==null?void 0:l.source}}},_.parameters={..._.parameters,docs:{...(o=_.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
  };
  return <Input {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...(n=(r=_.parameters)==null?void 0:r.docs)==null?void 0:n.source}}},i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
  };
  return <Input {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}},s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const onChange = inputValue => {
    setValue(inputValue);
    action('onChange')(inputValue);
  };
  return <SearchInput {...args} value={value} onChange={onChange} onEnter={onEnter} />;
}`,...(c=(t=s.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};const a=["Default","WithIcon","WithLabel","TextArea","Search"]},"../../packages/videopress/src/client/admin/components/input/index.tsx":(K,C,e)=>{e.d(C,{II:()=>b,Mj:()=>I});var p=e("../components/components/text/index.tsx"),H=e("../components/components/icons/index.tsx"),T=e("../../../node_modules/.pnpm/@wordpress+components@27.5.0_@types+react@18.3.1_react-dom@18.3.1_react@18.3.1/node_modules/@wordpress/components/build-module/spinner/index.js"),S=e("../../../node_modules/.pnpm/@wordpress+compose@6.34.0_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-debounce/index.js"),m=e("../../../node_modules/.pnpm/@wordpress+i18n@4.57.0/node_modules/@wordpress/i18n/build-module/index.js"),E=e("../../../node_modules/.pnpm/@wordpress+icons@9.48.0_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js"),z=e("../../../node_modules/.pnpm/@wordpress+icons@9.48.0_react@18.3.1/node_modules/@wordpress/icons/build-module/library/close-small.js"),V=e("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),d=e.n(V),u=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),v=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),g=e.n(v),_=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/input/style.module.scss"),i={};i.insert="head",i.singleton=!1;var N=g()(_.Z,i);const s=_.Z.locals||{};var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const A=m.__,O=({className:l,disabled:o=!1,loading:r=!1,icon:n=null,endAdornment:h=null,onChange:f,onEnter:y,size:D="small",...t})=>{const c=(0,u.useCallback)(x=>{f!=null&&f(x.currentTarget.value)},[f]),j=(0,u.useCallback)(x=>{y!=null&&["Enter","NumpadEnter"].includes(x.code)&&y(x.currentTarget.value)},[y]),w={className:d()(s.input,{[s["with-icon"]]:n!=null}),onChange:c,onKeyUp:j,disabled:o,["aria-disabled"]:o},k=(t==null?void 0:t.type)==="textarea";return(0,a.jsx)("div",{className:d()(l,s["input-wrapper"],{[s.disabled]:o,[s.large]:D==="large",[s["is-textarea"]]:k}),children:k?(0,a.jsx)("textarea",{...t,...w}):(0,a.jsxs)(a.Fragment,{children:[r||n?(0,a.jsx)("div",{className:d()(s["icon-wrapper"],{[s.loader]:r}),children:r?(0,a.jsx)(T.ZP,{}):n}):null,(0,a.jsx)("input",{...t,...w,value:t.value}),h]})})},b=({name:l,label:o,className:r,size:n="small",...h})=>o?(0,a.jsxs)("div",{className:r,children:[(0,a.jsx)(p.ZP,{component:"label",variant:n==="small"?"body-small":"body",htmlFor:l,mb:1,className:s.label,children:o}),(0,a.jsx)(O,{name:l,size:n,...h})]}):(0,a.jsx)(O,{className:r,size:n,...h}),I=({placeholder:l=A("Search your library","jetpack-videopress-pkg"),onSearch:o,wait:r=500,...n})=>{const h=(0,S.Z)(o,r),f=(0,u.useCallback)(t=>{var c;(c=n.onEnter)==null||c.call(n,t),o(t)},[n.onEnter,o]),y=(0,u.useCallback)(t=>{var c;(c=n.onChange)==null||c.call(n,t),h(t)},[n.onChange]),D=(0,u.useCallback)(()=>{var t;(t=n.onChange)==null||t.call(n,""),o("")},[n.onChange]);return(0,a.jsx)(b,{...n,icon:(0,a.jsx)(H.SearchIcon,{size:24}),placeholder:l,type:"text",onEnter:f,onChange:y,endAdornment:(0,a.jsx)(a.Fragment,{children:!!n.value&&(0,a.jsx)("div",{className:d()(s["icon-wrapper"]),children:(0,a.jsx)(E.Z,{icon:z.Z,onClick:D,className:d()(s["clear-icon"])})})})})},L=null;try{b.displayName="Input",b.__docgenInfo={description:"Input component",displayName:"Input",props:{icon:{defaultValue:{value:"null"},description:`Optional icon.
No support for icon when using textarea.`,name:"icon",required:!1,type:{name:"any"}},type:{defaultValue:null,description:`Input types.
Fixed as textarea to enforce TS use of related props.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"search"'},{value:'"textarea"'},{value:'"url"'},{value:'"email"'},{value:'"password"'},{value:'"tel"'}]}},className:{defaultValue:null,description:"Optional classname to apply to the root element.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"small"},description:"Input size.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Input label.",name:"label",required:!1,type:{name:"React.ReactNode"}},loading:{defaultValue:{value:"false"},description:"Whether the input is loading.",name:"loading",required:!1,type:{name:"boolean"}},endAdornment:{defaultValue:{value:"null"},description:"Append an adornment at the end of the input.",name:"endAdornment",required:!1,type:{name:"React.ReactNode"}},onChange:{defaultValue:null,description:"Callback to be invoked when the input value changes.",name:"onChange",required:!1,type:{name:"(value: string) => unknown"}},onEnter:{defaultValue:null,description:"Callback to be invoked when the user presses the Enter key.",name:"onEnter",required:!1,type:{name:"(value: string) => unknown"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/input/index.tsx#Input"]={docgenInfo:b.__docgenInfo,name:"Input",path:"../../packages/videopress/src/client/admin/components/input/index.tsx#Input"})}catch(l){}try{I.displayName="SearchInput",I.__docgenInfo={description:"Search Input component",displayName:"SearchInput",props:{className:{defaultValue:null,description:"Optional classname to apply to the root element.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"small"},description:"Input size.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Input label.",name:"label",required:!1,type:{name:"React.ReactNode"}},loading:{defaultValue:{value:"false"},description:"Whether the input is loading.",name:"loading",required:!1,type:{name:"boolean"}},endAdornment:{defaultValue:{value:"null"},description:"Append an adornment at the end of the input.",name:"endAdornment",required:!1,type:{name:"React.ReactNode"}},onChange:{defaultValue:null,description:"Callback to be invoked when the input value changes.",name:"onChange",required:!1,type:{name:"(value: string) => unknown"}},onEnter:{defaultValue:null,description:"Callback to be invoked when the user presses the Enter key.",name:"onEnter",required:!1,type:{name:"(value: string) => unknown"}},onSearch:{defaultValue:null,description:"Callback to be invoked when the seacrhing",name:"onSearch",required:!0,type:{name:"(value: string) => unknown"}},wait:{defaultValue:{value:"500"},description:"The debounce time in milliseconds to wait\nbefore to invoke the `onSearch` callback.",name:"wait",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/input/index.tsx#SearchInput"]={docgenInfo:I.__docgenInfo,name:"SearchInput",path:"../../packages/videopress/src/client/admin/components/input/index.tsx#SearchInput"})}catch(l){}try{input.displayName="input",input.__docgenInfo={description:"Input component",displayName:"input",props:{icon:{defaultValue:{value:"null"},description:`Optional icon.
No support for icon when using textarea.`,name:"icon",required:!1,type:{name:"any"}},type:{defaultValue:null,description:`Input types.
Fixed as textarea to enforce TS use of related props.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"search"'},{value:'"textarea"'},{value:'"url"'},{value:'"email"'},{value:'"password"'},{value:'"tel"'}]}},className:{defaultValue:null,description:"Optional classname to apply to the root element.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"small"},description:"Input size.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Input label.",name:"label",required:!1,type:{name:"React.ReactNode"}},loading:{defaultValue:{value:"false"},description:"Whether the input is loading.",name:"loading",required:!1,type:{name:"boolean"}},endAdornment:{defaultValue:{value:"null"},description:"Append an adornment at the end of the input.",name:"endAdornment",required:!1,type:{name:"React.ReactNode"}},onChange:{defaultValue:null,description:"Callback to be invoked when the input value changes.",name:"onChange",required:!1,type:{name:"(value: string) => unknown"}},onEnter:{defaultValue:null,description:"Callback to be invoked when the user presses the Enter key.",name:"onEnter",required:!1,type:{name:"(value: string) => unknown"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../packages/videopress/src/client/admin/components/input/index.tsx#input"]={docgenInfo:input.__docgenInfo,name:"input",path:"../../packages/videopress/src/client/admin/components/input/index.tsx#input"})}catch(l){}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../packages/videopress/src/client/admin/components/input/style.module.scss":(K,C,e)=>{e.d(C,{Z:()=>E});var p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),H=e.n(p),T=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),S=e.n(T),m=S()(H());m.push([K.id,".ozPJkECzts6RTktIEHv7{cursor:auto;display:inline-block;color:var(--jp-gray-80)}.D3ebbH6XI1FHeD6HZcKP{--jp-input-wrapper-height: 40px;min-height:var(--jp-input-wrapper-height);padding:var(--spacing-base);border:1px solid var(--jp-black);border-radius:var(--jp-border-radius);background-color:var(--jp-white);display:flex;align-items:center;font-size:var(--font-body-small);box-sizing:border-box}.D3ebbH6XI1FHeD6HZcKP:focus-within{box-shadow:0 0 0 1px var(--jp-black) inset}.D3ebbH6XI1FHeD6HZcKP.y1XlrKLlIpOvP83oHKlS{border-color:var(--jp-gray-10);background-color:var(--jp-gray);color:var(--jp-gray-20)}.D3ebbH6XI1FHeD6HZcKP.phGwlbYIiVpqQ1d4_wHs{padding:calc(var(--spacing-base)*2);font-size:var(--font-body)}.D3ebbH6XI1FHeD6HZcKP:not(.m01HDzyHTisAZoPDb3ci){height:var(--jp-input-wrapper-height)}.D3ebbH6XI1FHeD6HZcKP:not(.m01HDzyHTisAZoPDb3ci).phGwlbYIiVpqQ1d4_wHs{height:calc(var(--jp-input-wrapper-height) + var(--spacing-base)*2)}.D3ebbH6XI1FHeD6HZcKP .WEveooAUh3vBewTzzd4S{font-size:unset;font-family:unset;width:100%;border:0;outline:none;background-color:rgba(0,0,0,0);box-shadow:none}.D3ebbH6XI1FHeD6HZcKP .WEveooAUh3vBewTzzd4S:focus{box-shadow:none;outline:none}.D3ebbH6XI1FHeD6HZcKP .WEveooAUh3vBewTzzd4S.L0sWBwtNiRXf1L4TcDQt{margin-left:var(--spacing-base)}.D3ebbH6XI1FHeD6HZcKP .OJ8b46rEJdBKbj1y7DPf{display:flex;align-items:center;justify-content:center;height:24px;width:24px;flex-shrink:0}.D3ebbH6XI1FHeD6HZcKP .si7WSLlOzZR9H8Pr4Hbw{cursor:pointer}.D3ebbH6XI1FHeD6HZcKP .JxInrTT3Xjd0xgF3pzrw svg{margin:0}",""]),m.locals={label:"ozPJkECzts6RTktIEHv7","input-wrapper":"D3ebbH6XI1FHeD6HZcKP",disabled:"y1XlrKLlIpOvP83oHKlS",large:"phGwlbYIiVpqQ1d4_wHs","is-textarea":"m01HDzyHTisAZoPDb3ci",input:"WEveooAUh3vBewTzzd4S","with-icon":"L0sWBwtNiRXf1L4TcDQt","icon-wrapper":"OJ8b46rEJdBKbj1y7DPf","clear-icon":"si7WSLlOzZR9H8Pr4Hbw",loader:"JxInrTT3Xjd0xgF3pzrw"};const E=m}}]);})();
