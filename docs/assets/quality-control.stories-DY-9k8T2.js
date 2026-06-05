import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Ah as n,Dn as r,Mh as i,Nh as a,jh as o,kh as s,mg as c,t as l}from"./iframe-W8Seng1u.js";var u,d,f,p,m,h=e((()=>{u=`_label_1pxud_9`,d=`_lossless_1pxud_13`,f=`_slider_1pxud_17`,p=`_disabled_1pxud_21`,m={"quality-control":`_quality-control_1pxud_1`,label:u,lossless:d,slider:f,disabled:p}})),g,_,v,y=e((()=>{l(),o(),i(),h(),g=t(c()),_=s(),v=({label:e,quality:t,lossless:i,setQuality:o,setLossless:s,maxValue:c,minValue:l=20})=>{let u=(0,g.useId)(),[d,f]=(0,g.useState)(t);return(0,g.useEffect)(()=>{f(t)},[t]),(0,_.jsxs)(`div`,{className:m[`quality-control`],children:[(0,_.jsx)(`div`,{className:m.label,children:e}),(0,_.jsx)(`div`,{className:n(m.slider,{[m.disabled]:i}),children:(0,_.jsx)(r,{value:d,onAfterChange:e=>{f(e),o(e)},minValue:l,maxValue:c})}),(0,_.jsxs)(`label`,{className:m.lossless,htmlFor:u,children:[(0,_.jsx)(`input`,{type:`checkbox`,checked:i,id:u,onChange:e=>s(e.target.checked)}),a(`Lossless`,`jetpack-boost`)]})]})}})),b,x,S,C,w,T,E;e((()=>{y(),b=t(c()),x=s(),S={title:`Plugins/Boost/Image CDN/QualityControl`,component:v,argTypes:{label:{control:`text`},"config.lossless":{control:`boolean`},"config.quality":{control:`number`},maxValue:{control:`number`},minValue:{number:`number`}},decorators:[e=>(0,x.jsx)(`div`,{style:{maxWidth:`600px`,margin:`200px auto`,fontSize:`16px`},children:(0,x.jsx)(e,{})})]},C={label:`JPEG`,"config.lossless":!1,"config.quality":75,maxValue:80,minValue:20},w=e=>{let[t,n]=(0,b.useState)({lossless:e[`config.lossless`],quality:e[`config.quality`]});return(0,b.useEffect)(()=>{n({lossless:e[`config.lossless`],quality:e[`config.quality`]})},[e[`config.lossless`],e[`config.quality`]]),(0,x.jsx)(v,{label:e.label,config:t,maxValue:e.maxValue,minValue:e.minValue,onChange:e=>n(e)})},T=w.bind({}),T.args=C,T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => {
  const [config, setConfig] = useState({
    lossless: args["config.lossless"],
    quality: args["config.quality"]
  });
  useEffect(() => {
    setConfig({
      lossless: args["config.lossless"],
      quality: args["config.quality"]
    });
  }, [args["config.lossless"], args["config.quality"]]);
  const props = {
    label: args.label,
    config,
    maxValue: args.maxValue,
    minValue: args.minValue
  };
  return <QualityControl {...props} onChange={newVal => setConfig(newVal)} />;
}`,...T.parameters?.docs?.source}}},E=[`_default`]}))();export{E as __namedExportsOrder,T as _default,S as default};