"use strict";(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[1316],{"../../plugins/boost/app/assets/src/js/features/image-cdn/quality-control/stories/quality-control.stories.tsx":(b,u,e)=>{e.r(u),e.d(u,{__namedExportsOrder:()=>R,_default:()=>t,default:()=>h});var m=e("../components/components/number-slider/index.tsx"),_=e("../../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),p=e("../../../node_modules/.pnpm/@wordpress+i18n@5.24.0/node_modules/@wordpress/i18n/build-module/index.js"),f=e("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(f),c=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../plugins/boost/app/assets/src/js/features/image-cdn/quality-control/quality-control.module.scss"),g={};g.insert="head",g.singleton=!1;var w=o()(c.A,g);const l=c.A.locals||{};var a=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),n=e("../../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const C=p.__,V=({label:s,quality:r,lossless:i,setQuality:y,setLossless:x,maxValue:v,minValue:T=20})=>{const j=(0,a.useId)(),[P,q]=(0,a.useState)(r);return(0,a.useEffect)(()=>{q(r)},[r]),(0,n.jsxs)("div",{className:l["quality-control"],children:[(0,n.jsx)("div",{className:l.label,children:s}),(0,n.jsx)("div",{className:(0,_.A)(l.slider,{[l.disabled]:i}),children:(0,n.jsx)(m.A,{value:P,onAfterChange:d=>{q(d),y(d)},minValue:T,maxValue:v})}),(0,n.jsxs)("label",{className:l.lossless,htmlFor:j,children:[(0,n.jsx)("input",{type:"checkbox",checked:i,id:j,onChange:d=>x(d.target.checked)}),C("Lossless","jetpack-boost")]})]})};try{qualitycontrol.displayName="qualitycontrol",qualitycontrol.__docgenInfo={description:"",displayName:"qualitycontrol",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},quality:{defaultValue:null,description:"",name:"quality",required:!0,type:{name:"number"}},lossless:{defaultValue:null,description:"",name:"lossless",required:!0,type:{name:"boolean"}},setQuality:{defaultValue:null,description:"",name:"setQuality",required:!0,type:{name:"(newValue: number) => void"}},setLossless:{defaultValue:null,description:"",name:"setLossless",required:!0,type:{name:"(newValue: boolean) => void"}},maxValue:{defaultValue:null,description:"",name:"maxValue",required:!0,type:{name:"number"}},minValue:{defaultValue:{value:"20"},description:"",name:"minValue",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["../../plugins/boost/app/assets/src/js/features/image-cdn/quality-control/quality-control.tsx#qualitycontrol"]={docgenInfo:qualitycontrol.__docgenInfo,name:"qualitycontrol",path:"../../plugins/boost/app/assets/src/js/features/image-cdn/quality-control/quality-control.tsx#qualitycontrol"})}catch{}var I=`import type { Meta } from '@storybook/react';
import QualityControl from '../quality-control';
import React from 'react';

const meta: Meta< typeof QualityControl > = {
	title: 'Plugins/Boost/Image CDN/QualityControl',
	component: QualityControl,
	argTypes: {
		label: {control: 'text'},
		"config.lossless": {control: 'boolean'},
		"config.quality": {control: 'number'},
		maxValue: {control: 'number'},
		minValue: {number: 'number'},
	},
	decorators: [
		Story => (
			<div style={ { maxWidth: '600px', margin: '200px auto', fontSize: '16px' } }>
				<Story />
			</div>
		),
	],
};

const defaultValues = {
	label: 'JPEG',
	"config.lossless": false,
	"config.quality": 75,
	maxValue: 80,
	minValue: 20,
};

export default meta;

const Template = args => {
	const [config, setConfig] = React.useState( {
		lossless: args["config.lossless"],
		quality: args["config.quality"],
	} );

	React.useEffect( () => {
		setConfig( {
			lossless: args["config.lossless"],
			quality: args["config.quality"],
		} );
	}, [args["config.lossless"], args["config.quality"]] );

	const props = {
		label: args.label,
		config,
		maxValue: args.maxValue,
		minValue: args.minValue,
	}
	return <QualityControl { ...props } onChange={(newVal) => setConfig(newVal)} />
};
export const _default = Template.bind( {} );
_default.args = defaultValues;
`,O={_default:{startLoc:{col:17,line:41},endLoc:{col:1,line:62},startBody:{col:17,line:41},endBody:{col:1,line:62}}};const S={parameters:{storySource:{source:`import QualityControl from '../quality-control';
import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
const meta = {
  title: 'Plugins/Boost/Image CDN/QualityControl',
  component: QualityControl,
  argTypes: {
    label: {
      control: 'text'
    },
    "config.lossless": {
      control: 'boolean'
    },
    "config.quality": {
      control: 'number'
    },
    maxValue: {
      control: 'number'
    },
    minValue: {
      number: 'number'
    }
  },
  decorators: [Story => /*#__PURE__*/_jsx("div", {
    style: {
      maxWidth: '600px',
      margin: '200px auto',
      fontSize: '16px'
    },
    children: /*#__PURE__*/_jsx(Story, {})
  })]
};
const defaultValues = {
  label: 'JPEG',
  "config.lossless": false,
  "config.quality": 75,
  maxValue: 80,
  minValue: 20
};
export default meta;
const Template = args => {
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
  return /*#__PURE__*/_jsx(QualityControl, {
    ...props,
    onChange: newVal => setConfig(newVal)
  });
};
export const _default = Template.bind({});
_default.args = defaultValues;`,locationsMap:{default:{startLoc:{col:17,line:41},endLoc:{col:1,line:62},startBody:{col:17,line:41},endBody:{col:1,line:62}}}}},title:"Plugins/Boost/Image CDN/QualityControl",component:V,argTypes:{label:{control:"text"},"config.lossless":{control:"boolean"},"config.quality":{control:"number"},maxValue:{control:"number"},minValue:{number:"number"}},decorators:[s=>(0,n.jsx)("div",{style:{maxWidth:"600px",margin:"200px auto",fontSize:"16px"},children:(0,n.jsx)(s,{})})]},E={label:"JPEG","config.lossless":!1,"config.quality":75,maxValue:80,minValue:20},h=S,t=(s=>{const[r,i]=a.useState({lossless:s["config.lossless"],quality:s["config.quality"]});a.useEffect(()=>{i({lossless:s["config.lossless"],quality:s["config.quality"]})},[s["config.lossless"],s["config.quality"]]);const y={label:s.label,config:r,maxValue:s.maxValue,minValue:s.minValue};return(0,n.jsx)(V,{...y,onChange:x=>i(x)})}).bind({});t.args=E;const R=["_default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
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
}`,...t.parameters?.docs?.source}}}},"../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.47_typescript@5.8.2_webpack@5.94.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!../../../node_modules/.pnpm/sass-loader@16.0.5_sass-embedded@1.87.0_webpack@5.94.0/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!../../plugins/boost/app/assets/src/js/features/image-cdn/quality-control/quality-control.module.scss":(b,u,e)=>{e.d(u,{A:()=>c});var m=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(m),p=e("../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),f=e.n(p),o=f()(_());o.push([b.id,".skHPs2a8rLEzu399XlQb{display:flex;align-items:center;min-height:40px;margin-top:8px;gap:20px}.GuDwwHXl8ABNieRWxNRt{min-width:4rem}.abIPyZfa8Y3a0jR9mM9x{flex-shrink:0}.u5o8ZbblI7r7dNh8bgNi{width:100%}.z33KJTmJ5fZIHUrGeCqt{opacity:.3;filter:grayscale(1);pointer-events:none}@media screen and (max-width: 782px){.skHPs2a8rLEzu399XlQb{flex-direction:column;align-items:flex-start;gap:0;margin-bottom:30px}.GuDwwHXl8ABNieRWxNRt{margin:0;font-weight:500}}",""]),o.locals={"quality-control":"skHPs2a8rLEzu399XlQb",label:"GuDwwHXl8ABNieRWxNRt",lossless:"abIPyZfa8Y3a0jR9mM9x",slider:"u5o8ZbblI7r7dNh8bgNi",disabled:"z33KJTmJ5fZIHUrGeCqt"};const c=o}}]);
