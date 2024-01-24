"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[3137],{"../../plugins/boost/app/assets/src/js/features/image-cdn/quality-control/stories/quality-control.stories.tsx":(b,r,t)=>{var j,S,h;t.r(r),t.d(r,{__namedExportsOrder:()=>I,_default:()=>n,default:()=>P});var i=t("../components/components/number-slider/index.tsx"),u=t("../../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"),c=t.n(u),d=t("../../../node_modules/.pnpm/@wordpress+i18n@4.48.0/node_modules/@wordpress/i18n/build-module/index.js"),o=t("../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.76.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=t.n(o),x=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/boost/app/assets/src/js/features/image-cdn/quality-control/quality-control.module.scss"),p={};p.insert="head",p.singleton=!1;var L=m()(x.Z,p);const l=x.Z.locals||{};var _=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const v=d.__,V=({label:e,quality:g,lossless:a,setQuality:f,setLossless:y,maxValue:N,minValue:O=20})=>{const E=(0,_.useId)();return(0,s.jsxs)("div",{className:l["quality-control"],children:[(0,s.jsx)("div",{className:l.label,children:e}),(0,s.jsx)("div",{className:c()(l.slider,{[l.disabled]:a}),children:(0,s.jsx)(i.Z,{value:g,onChange:f,minValue:O,maxValue:N})}),(0,s.jsxs)("label",{className:l.lossless,htmlFor:E,children:[(0,s.jsx)("input",{type:"checkbox",checked:a,id:E,onChange:w=>y(w.target.checked)}),v("Lossless","jetpack-boost")]})]})};V.displayName="QualityControl";const q=V;try{qualitycontrol.displayName="qualitycontrol",qualitycontrol.__docgenInfo={description:"",displayName:"qualitycontrol",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},quality:{defaultValue:null,description:"",name:"quality",required:!0,type:{name:"number"}},lossless:{defaultValue:null,description:"",name:"lossless",required:!0,type:{name:"boolean"}},setQuality:{defaultValue:null,description:"",name:"setQuality",required:!0,type:{name:"(newValue: number) => void"}},setLossless:{defaultValue:null,description:"",name:"setLossless",required:!0,type:{name:"(newValue: boolean) => void"}},maxValue:{defaultValue:null,description:"",name:"maxValue",required:!0,type:{name:"number"}},minValue:{defaultValue:{value:"20"},description:"",name:"minValue",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["../../plugins/boost/app/assets/src/js/features/image-cdn/quality-control/quality-control.tsx#qualitycontrol"]={docgenInfo:qualitycontrol.__docgenInfo,name:"qualitycontrol",path:"../../plugins/boost/app/assets/src/js/features/image-cdn/quality-control/quality-control.tsx#qualitycontrol"})}catch(e){}var M=`import type { Meta } from '@storybook/react';
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
`,Q={_default:{startLoc:{col:17,line:34},endLoc:{col:1,line:54},startBody:{col:17,line:34},endBody:{col:1,line:54}}};const R={parameters:{storySource:{source:`import type { Meta } from '@storybook/react';
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
`,locationsMap:{default:{startLoc:{col:17,line:34},endLoc:{col:1,line:54},startBody:{col:17,line:34},endBody:{col:1,line:54}}}}},title:"Plugins/Boost/Image CDN/QualityControl",component:q,argTypes:{label:{control:"text"},"config.lossless":{control:"boolean"},"config.quality":{control:"number"},maxValue:{control:"number"},minValue:{number:"number"}},decorators:[e=>(0,s.jsx)("div",{style:{maxWidth:"600px",margin:"200px auto",fontSize:"16px"},children:(0,s.jsx)(e,{})})]},T={label:"JPEG","config.lossless":!1,"config.quality":75,maxValue:80,minValue:20},P=R,C=e=>{const[g,a]=_.useState({lossless:e["config.lossless"],quality:e["config.quality"]});_.useEffect(()=>{a({lossless:e["config.lossless"],quality:e["config.quality"]})},[e["config.lossless"],e["config.quality"]]);const f={label:e.label,config:g,maxValue:e.maxValue,minValue:e.minValue};return(0,s.jsx)(q,{...f,onChange:y=>a(y)})};C.displayName="Template";const n=C.bind({});n.args=T,n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
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
}`,...(h=(S=n.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};const I=["_default"]},"../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/cjs.js!../../../node_modules/.pnpm/postcss-loader@6.2.0_postcss@8.4.31_webpack@5.76.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[16].use[2]!../../../node_modules/.pnpm/sass-loader@12.4.0_sass@1.64.1_webpack@5.76.0/node_modules/sass-loader/dist/cjs.js!../../plugins/boost/app/assets/src/js/features/image-cdn/quality-control/quality-control.module.scss":(b,r,t)=>{t.d(r,{Z:()=>m});var i=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=t.n(i),c=t("../../../node_modules/.pnpm/css-loader@6.5.1_webpack@5.76.0/node_modules/css-loader/dist/runtime/api.js"),d=t.n(c),o=d()(u());o.push([b.id,".skHPs2a8rLEzu399XlQb{display:flex;align-items:center;min-height:40px;margin-top:8px;gap:20px}.GuDwwHXl8ABNieRWxNRt{min-width:4rem}.abIPyZfa8Y3a0jR9mM9x{flex-shrink:0}.u5o8ZbblI7r7dNh8bgNi{width:100%}.z33KJTmJ5fZIHUrGeCqt{opacity:.3;filter:grayscale(1);pointer-events:none}@media screen and (max-width: 782px){.skHPs2a8rLEzu399XlQb{flex-direction:column;align-items:flex-start;gap:0;margin-bottom:30px}.GuDwwHXl8ABNieRWxNRt{margin:0;font-weight:500}}",""]),o.locals={"quality-control":"skHPs2a8rLEzu399XlQb",label:"GuDwwHXl8ABNieRWxNRt",lossless:"abIPyZfa8Y3a0jR9mM9x",slider:"u5o8ZbblI7r7dNh8bgNi",disabled:"z33KJTmJ5fZIHUrGeCqt"};const m=o}}]);})();
