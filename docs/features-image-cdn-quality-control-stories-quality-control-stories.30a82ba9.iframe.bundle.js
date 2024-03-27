"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3137],{"../../plugins/boost/app/assets/src/js/features/image-cdn/quality-control/stories/quality-control.stories.tsx":(x,r,s)=>{var h,E,V;s.r(r),s.d(r,{__namedExportsOrder:()=>T,_default:()=>o,default:()=>O});var c=s("../components/components/number-slider/index.tsx"),m=s("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),_=s.n(m),p=s("../../../node_modules/.pnpm/@wordpress+i18n@4.54.0/node_modules/@wordpress/i18n/build-module/index.js"),a=s("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),f=s.n(a),j=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/boost/app/assets/src/js/features/image-cdn/quality-control/quality-control.module.scss"),y={};y.insert="head",y.singleton=!1;var k=f()(j.Z,y);const n=j.Z.locals||{};var t=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=s("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const S=p.__,q=({label:e,quality:d,lossless:u,setQuality:g,setLossless:b,maxValue:P,minValue:w=20})=>{const C=(0,t.useId)(),[N,v]=(0,t.useState)(d);return(0,t.useEffect)(()=>{v(d)},[d]),(0,l.jsxs)("div",{className:n["quality-control"],children:[(0,l.jsx)("div",{className:n.label,children:e}),(0,l.jsx)("div",{className:_()(n.slider,{[n.disabled]:u}),children:(0,l.jsx)(c.Z,{value:N,onAfterChange:i=>{v(i),g(i)},minValue:w,maxValue:P})}),(0,l.jsxs)("label",{className:n.lossless,htmlFor:C,children:[(0,l.jsx)("input",{type:"checkbox",checked:u,id:C,onChange:i=>b(i.target.checked)}),S("Lossless","jetpack-boost")]})]})};try{qualitycontrol.displayName="qualitycontrol",qualitycontrol.__docgenInfo={description:"",displayName:"qualitycontrol",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},quality:{defaultValue:null,description:"",name:"quality",required:!0,type:{name:"number"}},lossless:{defaultValue:null,description:"",name:"lossless",required:!0,type:{name:"boolean"}},setQuality:{defaultValue:null,description:"",name:"setQuality",required:!0,type:{name:"(newValue: number) => void"}},setLossless:{defaultValue:null,description:"",name:"setLossless",required:!0,type:{name:"(newValue: boolean) => void"}},maxValue:{defaultValue:null,description:"",name:"maxValue",required:!0,type:{name:"number"}},minValue:{defaultValue:{value:"20"},description:"",name:"minValue",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../plugins/boost/app/assets/src/js/features/image-cdn/quality-control/quality-control.tsx#qualitycontrol"]={docgenInfo:qualitycontrol.__docgenInfo,name:"qualitycontrol",path:"../../plugins/boost/app/assets/src/js/features/image-cdn/quality-control/quality-control.tsx#qualitycontrol"})}catch(e){}const R={title:"Plugins/Boost/Image CDN/QualityControl",component:q,argTypes:{label:{control:"text"},"config.lossless":{control:"boolean"},"config.quality":{control:"number"},maxValue:{control:"number"},minValue:{number:"number"}},decorators:[e=>(0,l.jsx)("div",{style:{maxWidth:"600px",margin:"200px auto",fontSize:"16px"},children:(0,l.jsx)(e,{})})]},I={label:"JPEG","config.lossless":!1,"config.quality":75,maxValue:80,minValue:20},O=R,o=(e=>{const[d,u]=t.useState({lossless:e["config.lossless"],quality:e["config.quality"]});t.useEffect(()=>{u({lossless:e["config.lossless"],quality:e["config.quality"]})},[e["config.lossless"],e["config.quality"]]);const g={label:e.label,config:d,maxValue:e.maxValue,minValue:e.minValue};return(0,l.jsx)(q,{...g,onChange:b=>u(b)})}).bind({});o.args=I,o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [config, setConfig] = React.useState({
    lossless: args["config.lossless"],
    quality: args["config.quality"]
  });
  React.useEffect(() => {
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
}`,...(V=(E=o.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};const T=["_default"]},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/boost/app/assets/src/js/features/image-cdn/quality-control/quality-control.module.scss":(x,r,s)=>{s.d(r,{Z:()=>f});var c=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=s.n(c),_=s("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),p=s.n(_),a=p()(m());a.push([x.id,".skHPs2a8rLEzu399XlQb{display:flex;align-items:center;min-height:40px;margin-top:8px;gap:20px}.GuDwwHXl8ABNieRWxNRt{min-width:4rem}.abIPyZfa8Y3a0jR9mM9x{flex-shrink:0}.u5o8ZbblI7r7dNh8bgNi{width:100%}.z33KJTmJ5fZIHUrGeCqt{opacity:.3;filter:grayscale(1);pointer-events:none}@media screen and (max-width: 782px){.skHPs2a8rLEzu399XlQb{flex-direction:column;align-items:flex-start;gap:0;margin-bottom:30px}.GuDwwHXl8ABNieRWxNRt{margin:0;font-weight:500}}",""]),a.locals={"quality-control":"skHPs2a8rLEzu399XlQb",label:"GuDwwHXl8ABNieRWxNRt",lossless:"abIPyZfa8Y3a0jR9mM9x",slider:"u5o8ZbblI7r7dNh8bgNi",disabled:"z33KJTmJ5fZIHUrGeCqt"};const f=a}}]);})();