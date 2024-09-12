"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1316],{"../../plugins/boost/app/assets/src/js/features/image-cdn/quality-control/stories/quality-control.stories.tsx":(x,u,e)=>{var q,h,w;e.r(u),e.d(u,{__namedExportsOrder:()=>R,_default:()=>o,default:()=>v});var _=e("../components/components/number-slider/index.tsx"),m=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),p=e("../../../node_modules/.pnpm/@wordpress+i18n@5.7.0/node_modules/@wordpress/i18n/build-module/index.js"),y=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=e.n(y),c=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../../plugins/boost/app/assets/src/js/features/image-cdn/quality-control/quality-control.module.scss"),f={};f.insert="head",f.singleton=!1;var T=a()(c.A,f);const t=c.A.locals||{};var n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),l=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const V=p.__,j=({label:s,quality:i,lossless:d,setQuality:g,setLossless:b,maxValue:A,minValue:I=20})=>{const k=(0,n.useId)(),[O,E]=(0,n.useState)(i);return(0,n.useEffect)(()=>{E(i)},[i]),(0,l.jsxs)("div",{className:t["quality-control"],children:[(0,l.jsx)("div",{className:t.label,children:s}),(0,l.jsx)("div",{className:(0,m.A)(t.slider,{[t.disabled]:d}),children:(0,l.jsx)(_.A,{value:O,onAfterChange:r=>{E(r),g(r)},minValue:I,maxValue:A})}),(0,l.jsxs)("label",{className:t.lossless,htmlFor:k,children:[(0,l.jsx)("input",{type:"checkbox",checked:d,id:k,onChange:r=>b(r.target.checked)}),V("Lossless","jetpack-boost")]})]})};try{qualitycontrol.displayName="qualitycontrol",qualitycontrol.__docgenInfo={description:"",displayName:"qualitycontrol",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},quality:{defaultValue:null,description:"",name:"quality",required:!0,type:{name:"number"}},lossless:{defaultValue:null,description:"",name:"lossless",required:!0,type:{name:"boolean"}},setQuality:{defaultValue:null,description:"",name:"setQuality",required:!0,type:{name:"(newValue: number) => void"}},setLossless:{defaultValue:null,description:"",name:"setLossless",required:!0,type:{name:"(newValue: boolean) => void"}},maxValue:{defaultValue:null,description:"",name:"maxValue",required:!0,type:{name:"number"}},minValue:{defaultValue:{value:"20"},description:"",name:"minValue",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../plugins/boost/app/assets/src/js/features/image-cdn/quality-control/quality-control.tsx#qualitycontrol"]={docgenInfo:qualitycontrol.__docgenInfo,name:"qualitycontrol",path:"../../plugins/boost/app/assets/src/js/features/image-cdn/quality-control/quality-control.tsx#qualitycontrol"})}catch(s){}const C={title:"Plugins/Boost/Image CDN/QualityControl",component:j,argTypes:{label:{control:"text"},"config.lossless":{control:"boolean"},"config.quality":{control:"number"},maxValue:{control:"number"},minValue:{number:"number"}},decorators:[s=>(0,l.jsx)("div",{style:{maxWidth:"600px",margin:"200px auto",fontSize:"16px"},children:(0,l.jsx)(s,{})})]},S={label:"JPEG","config.lossless":!1,"config.quality":75,maxValue:80,minValue:20},v=C,o=(s=>{const[i,d]=n.useState({lossless:s["config.lossless"],quality:s["config.quality"]});n.useEffect(()=>{d({lossless:s["config.lossless"],quality:s["config.quality"]})},[s["config.lossless"],s["config.quality"]]);const g={label:s.label,config:i,maxValue:s.maxValue,minValue:s.minValue};return(0,l.jsx)(j,{...g,onChange:b=>d(b)})}).bind({});o.args=S;const R=["_default"];o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
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
}`,...(w=(h=o.parameters)==null?void 0:h.docs)==null?void 0:w.source}}}},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/sass-loader/dist/cjs.js!../../plugins/boost/app/assets/src/js/features/image-cdn/quality-control/quality-control.module.scss":(x,u,e)=>{e.d(u,{A:()=>c});var _=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(_),p=e("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.94.0_webpack-cli@4.9.1_/node_modules/css-loader/dist/runtime/api.js"),y=e.n(p),a=y()(m());a.push([x.id,".skHPs2a8rLEzu399XlQb{display:flex;align-items:center;min-height:40px;margin-top:8px;gap:20px}.GuDwwHXl8ABNieRWxNRt{min-width:4rem}.abIPyZfa8Y3a0jR9mM9x{flex-shrink:0}.u5o8ZbblI7r7dNh8bgNi{width:100%}.z33KJTmJ5fZIHUrGeCqt{opacity:.3;filter:grayscale(1);pointer-events:none}@media screen and (max-width: 782px){.skHPs2a8rLEzu399XlQb{flex-direction:column;align-items:flex-start;gap:0;margin-bottom:30px}.GuDwwHXl8ABNieRWxNRt{margin:0;font-weight:500}}",""]),a.locals={"quality-control":"skHPs2a8rLEzu399XlQb",label:"GuDwwHXl8ABNieRWxNRt",lossless:"abIPyZfa8Y3a0jR9mM9x",slider:"u5o8ZbblI7r7dNh8bgNi",disabled:"z33KJTmJ5fZIHUrGeCqt"};const c=a}}]);})();